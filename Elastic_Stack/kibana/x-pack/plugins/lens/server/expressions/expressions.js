"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupExpressions = void 0;

var _expressions = require("../../common/expressions");

var _utils = require("./utils");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const setupExpressions = (core, expressions) => {
  [_expressions.pie, _expressions.xyChart, _expressions.counterRate, _expressions.metricChart, _expressions.yAxisConfig, _expressions.layerConfig, _expressions.formatColumn, _expressions.legendConfig, _expressions.renameColumns, _expressions.gridlinesConfig, _expressions.datatableColumn, _expressions.tickLabelsConfig, _expressions.axisTitlesVisibilityConfig, (0, _expressions.getDatatable)((0, _utils.getFormatFactory)(core)), (0, _expressions.getTimeScale)((0, _utils.getTimeZoneFactory)(core))].forEach(expressionFn => expressions.registerFunction(expressionFn));
};

exports.setupExpressions = setupExpressions;