"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPatchCommentApi = initPatchCommentApi;

var _pipeable = require("fp-ts/lib/pipeable");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _configSchema = require("@kbn/config-schema");

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _utils = require("../utils");

var _common = require("../../../../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initPatchCommentApi({
  router,
  logger
}) {
  router.patch({
    path: _common.CASE_COMMENTS_URL,
    validate: {
      params: _configSchema.schema.object({
        case_id: _configSchema.schema.string()
      }),
      query: _configSchema.schema.maybe(_configSchema.schema.object({
        subCaseId: _configSchema.schema.maybe(_configSchema.schema.string())
      })),
      body: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      var _request$query;

      const query = (0, _pipeable.pipe)(_common.CommentPatchRequestRt.decode(request.body), (0, _Either.fold)((0, _common.throwErrors)(_boom.default.badRequest), _function.identity));
      const client = await context.cases.getCasesClient();
      return response.ok({
        body: await client.attachments.update({
          caseID: request.params.case_id,
          subCaseID: (_request$query = request.query) === null || _request$query === void 0 ? void 0 : _request$query.subCaseId,
          updateRequest: query
        })
      });
    } catch (error) {
      var _request$query2;

      logger.error(`Failed to patch comment in route case id: ${request.params.case_id} sub case id: ${(_request$query2 = request.query) === null || _request$query2 === void 0 ? void 0 : _request$query2.subCaseId}: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}