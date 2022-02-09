"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMlSnapshotRoutes = registerMlSnapshotRoutes;

var _configSchema = require("@kbn/config-schema");

var _constants = require("../../common/constants");

var _types = require("../../common/types");

var _es_version_precheck = require("../lib/es_version_precheck");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const findMlOperation = async (savedObjectsClient, snapshotId) => {
  return savedObjectsClient.find({
    type: _types.ML_UPGRADE_OP_TYPE,
    search: `"${snapshotId}"`,
    searchFields: ['snapshotId']
  });
};

const createMlOperation = async (savedObjectsClient, attributes) => {
  const foundSnapshots = await findMlOperation(savedObjectsClient, attributes.snapshotId);

  if ((foundSnapshots === null || foundSnapshots === void 0 ? void 0 : foundSnapshots.total) > 0) {
    throw new Error(`A ML operation is already in progress for snapshot: ${attributes.snapshotId}`);
  }

  return savedObjectsClient.create(_types.ML_UPGRADE_OP_TYPE, attributes);
};

const deleteMlOperation = (savedObjectsClient, id) => {
  return savedObjectsClient.delete(_types.ML_UPGRADE_OP_TYPE, id);
};
/*
 * The tasks API can only tell us if the snapshot upgrade is in progress.
 * We cannot rely on it to determine if a snapshot was upgraded successfully.
 * If the task does not exist, it can mean one of two things:
 *  1. The snapshot was upgraded successfully.
 *  2. There was a failure upgrading the snapshot.
 * In order to verify it was successful, we need to recheck the deprecation info API
 * and verify the deprecation no longer exists. If it still exists, we assume there was a failure.
 */


const verifySnapshotUpgrade = async (esClient, snapshot) => {
  const {
    snapshotId,
    jobId
  } = snapshot;

  try {
    const {
      body: deprecations
    } = await esClient.asCurrentUser.migration.deprecations();
    const mlSnapshotDeprecations = deprecations.ml_settings.filter(deprecation => {
      return /[Mm]odel snapshot/.test(deprecation.message);
    }); // If there are no ML deprecations, we assume the deprecation was resolved successfully

    if (typeof mlSnapshotDeprecations === 'undefined' || mlSnapshotDeprecations.length === 0) {
      return {
        isSuccessful: true
      };
    }

    const isSuccessful = Boolean(mlSnapshotDeprecations.find(snapshotDeprecation => {
      const regex = /(?<=\[).*?(?=\])/g;
      const matches = snapshotDeprecation.message.match(regex);

      if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
        // If there is no matching snapshot, we assume the deprecation was resolved successfully
        return matches[0] === snapshotId && matches[1] === jobId ? false : true;
      }

      return false;
    }));
    return {
      isSuccessful
    };
  } catch (e) {
    return {
      isSuccessful: false,
      error: e
    };
  }
};

function registerMlSnapshotRoutes({
  router,
  lib: {
    handleEsError
  }
}) {
  // Upgrade ML model snapshot
  router.post({
    path: `${_constants.API_BASE_PATH}/ml_snapshots`,
    validate: {
      body: _configSchema.schema.object({
        snapshotId: _configSchema.schema.string(),
        jobId: _configSchema.schema.string()
      })
    }
  }, (0, _es_version_precheck.versionCheckHandlerWrapper)(async ({
    core: {
      savedObjects: {
        client: savedObjectsClient
      },
      elasticsearch: {
        client: esClient
      }
    }
  }, request, response) => {
    try {
      const {
        snapshotId,
        jobId
      } = request.body;
      const {
        body
      } = await esClient.asCurrentUser.ml.upgradeJobSnapshot({
        job_id: jobId,
        snapshot_id: snapshotId
      });
      const snapshotInfo = {
        nodeId: body.node,
        snapshotId,
        jobId
      }; // Store snapshot in saved object if upgrade not complete

      if (body.completed !== true) {
        await createMlOperation(savedObjectsClient, snapshotInfo);
      }

      return response.ok({
        body: { ...snapshotInfo,
          status: body.completed === true ? 'complete' : 'in_progress'
        }
      });
    } catch (error) {
      return handleEsError({
        error,
        response
      });
    }
  })); // Get the status of the upgrade snapshot task

  router.get({
    path: `${_constants.API_BASE_PATH}/ml_snapshots/{jobId}/{snapshotId}`,
    validate: {
      params: _configSchema.schema.object({
        snapshotId: _configSchema.schema.string(),
        jobId: _configSchema.schema.string()
      })
    }
  }, (0, _es_version_precheck.versionCheckHandlerWrapper)(async ({
    core: {
      savedObjects: {
        client: savedObjectsClient
      },
      elasticsearch: {
        client: esClient
      }
    }
  }, request, response) => {
    try {
      const {
        snapshotId,
        jobId
      } = request.params; // Verify snapshot exists

      await esClient.asCurrentUser.ml.getModelSnapshots({
        job_id: jobId,
        snapshot_id: snapshotId
      });
      const foundSnapshots = await findMlOperation(savedObjectsClient, snapshotId); // If snapshot is *not* found in SO, assume there has not been an upgrade operation started

      if (typeof foundSnapshots === 'undefined' || foundSnapshots.total === 0) {
        return response.ok({
          body: {
            snapshotId,
            jobId,
            nodeId: undefined,
            status: 'idle'
          }
        });
      }

      const snapshotOp = foundSnapshots.saved_objects[0];
      const {
        nodeId
      } = snapshotOp.attributes; // Now that we have the node ID, check the upgrade snapshot task progress

      const {
        body: taskResponse
      } = await esClient.asCurrentUser.tasks.list({
        nodes: [nodeId],
        actions: 'xpack/ml/job/snapshot/upgrade',
        detailed: true // necessary in order to filter if there are more than 1 snapshot upgrades in progress

      });
      const nodeTaskInfo = (taskResponse === null || taskResponse === void 0 ? void 0 : taskResponse.nodes) && taskResponse.nodes[nodeId];
      const snapshotInfo = { ...snapshotOp.attributes
      };

      if (nodeTaskInfo) {
        // Find the correct snapshot task ID based on the task description
        const snapshotTaskId = Object.keys(nodeTaskInfo.tasks).find(task => {
          // The description is in the format of "job-snapshot-upgrade-<job_id>-<snapshot_id>"
          const taskDescription = nodeTaskInfo.tasks[task].description;
          const taskSnapshotAndJobIds = taskDescription.replace('job-snapshot-upgrade-', '');
          const taskSnapshotAndJobIdParts = taskSnapshotAndJobIds.split('-');
          const taskSnapshotId = taskSnapshotAndJobIdParts[taskSnapshotAndJobIdParts.length - 1];
          const taskJobId = taskSnapshotAndJobIdParts.slice(0, 1).join('-');
          return taskSnapshotId === snapshotId && taskJobId === jobId;
        }); // If the snapshot task exists, assume the upgrade is in progress

        if (snapshotTaskId && nodeTaskInfo.tasks[snapshotTaskId]) {
          return response.ok({
            body: { ...snapshotInfo,
              status: 'in_progress'
            }
          });
        } else {
          var _upgradeSnapshotError, _upgradeSnapshotError2; // The task ID was not found; verify the deprecation was resolved


          const {
            isSuccessful: isSnapshotDeprecationResolved,
            error: upgradeSnapshotError
          } = await verifySnapshotUpgrade(esClient, {
            snapshotId,
            jobId
          }); // Delete the SO; if it's complete, no need to store it anymore. If there's an error, this will give the user a chance to retry

          await deleteMlOperation(savedObjectsClient, snapshotOp.id);

          if (isSnapshotDeprecationResolved) {
            return response.ok({
              body: { ...snapshotInfo,
                status: 'complete'
              }
            });
          }

          return response.customError({
            statusCode: upgradeSnapshotError ? upgradeSnapshotError.statusCode : 500,
            body: {
              message: (upgradeSnapshotError === null || upgradeSnapshotError === void 0 ? void 0 : (_upgradeSnapshotError = upgradeSnapshotError.body) === null || _upgradeSnapshotError === void 0 ? void 0 : (_upgradeSnapshotError2 = _upgradeSnapshotError.error) === null || _upgradeSnapshotError2 === void 0 ? void 0 : _upgradeSnapshotError2.reason) || 'There was an error upgrading your snapshot. Check the Elasticsearch logs for more details.'
            }
          });
        }
      } else {
        var _upgradeSnapshotError3, _upgradeSnapshotError4; // No tasks found; verify the deprecation was resolved


        const {
          isSuccessful: isSnapshotDeprecationResolved,
          error: upgradeSnapshotError
        } = await verifySnapshotUpgrade(esClient, {
          snapshotId,
          jobId
        }); // Delete the SO; if it's complete, no need to store it anymore. If there's an error, this will give the user a chance to retry

        await deleteMlOperation(savedObjectsClient, snapshotOp.id);

        if (isSnapshotDeprecationResolved) {
          return response.ok({
            body: { ...snapshotInfo,
              status: 'complete'
            }
          });
        }

        return response.customError({
          statusCode: upgradeSnapshotError ? upgradeSnapshotError.statusCode : 500,
          body: {
            message: (upgradeSnapshotError === null || upgradeSnapshotError === void 0 ? void 0 : (_upgradeSnapshotError3 = upgradeSnapshotError.body) === null || _upgradeSnapshotError3 === void 0 ? void 0 : (_upgradeSnapshotError4 = _upgradeSnapshotError3.error) === null || _upgradeSnapshotError4 === void 0 ? void 0 : _upgradeSnapshotError4.reason) || 'There was an error upgrading your snapshot. Check the Elasticsearch logs for more details.'
          }
        });
      }
    } catch (e) {
      return handleEsError({
        error: e,
        response
      });
    }
  })); // Get the ml upgrade mode

  router.get({
    path: `${_constants.API_BASE_PATH}/ml_upgrade_mode`,
    validate: false
  }, (0, _es_version_precheck.versionCheckHandlerWrapper)(async ({
    core: {
      elasticsearch: {
        client: esClient
      }
    }
  }, request, response) => {
    try {
      const {
        body: mlInfo
      } = await esClient.asCurrentUser.ml.info();
      return response.ok({
        body: {
          mlUpgradeModeEnabled: mlInfo.upgrade_mode
        }
      });
    } catch (e) {
      return handleEsError({
        error: e,
        response
      });
    }
  })); // Delete ML model snapshot

  router.delete({
    path: `${_constants.API_BASE_PATH}/ml_snapshots/{jobId}/{snapshotId}`,
    validate: {
      params: _configSchema.schema.object({
        snapshotId: _configSchema.schema.string(),
        jobId: _configSchema.schema.string()
      })
    }
  }, (0, _es_version_precheck.versionCheckHandlerWrapper)(async ({
    core: {
      elasticsearch: {
        client
      }
    }
  }, request, response) => {
    try {
      const {
        snapshotId,
        jobId
      } = request.params;
      const {
        body: deleteSnapshotResponse
      } = await client.asCurrentUser.ml.deleteModelSnapshot({
        job_id: jobId,
        snapshot_id: snapshotId
      });
      return response.ok({
        body: deleteSnapshotResponse
      });
    } catch (e) {
      return handleEsError({
        error: e,
        response
      });
    }
  }));
}