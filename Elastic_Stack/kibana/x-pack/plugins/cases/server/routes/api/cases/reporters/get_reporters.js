"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGetReportersApi = initGetReportersApi;

var _utils = require("../../utils");

var _common = require("../../../../../common");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function initGetReportersApi({
  router,
  logger
}) {
  router.get({
    path: _common.CASE_REPORTERS_URL,
    validate: {
      query: _utils.escapeHatch
    }
  }, async (context, request, response) => {
    try {
      if (!context.cases) {
        return response.badRequest({
          body: 'RouteHandlerContext is not registered for cases'
        });
      }

      const client = await context.cases.getCasesClient();
      const options = request.query;
      return response.ok({
        body: await client.cases.getReporters({ ...options
        })
      });
    } catch (error) {
      logger.error(`Failed to get reporters in route: ${error}`);
      return response.customError((0, _utils.wrapError)(error));
    }
  });
}