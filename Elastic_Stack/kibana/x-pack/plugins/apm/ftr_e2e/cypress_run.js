"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _yargs = require("yargs");

var _cypress_start = require("./cypress_start");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const specArg = _yargs.argv.spec;

async function runE2ETests({
  readConfigFile
}) {
  const kibanaConfig = await readConfigFile(require.resolve('./config.ts'));
  return { ...kibanaConfig.getAll(),
    testRunner: (0, _cypress_start.cypressRunTests)(specArg)
  };
} // eslint-disable-next-line import/no-default-export


var _default = runE2ETests;
exports.default = _default;
module.exports = exports.default;