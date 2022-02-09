"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportingPlugin = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../common/constants");

var _ = require("./");

var _browsers = require("./browsers");

var _config = require("./config");

var _deprecations = require("./deprecations");

var _lib = require("./lib");

var _routes = require("./routes");

var _services = require("./services");

var _usage = require("./usage");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


class ReportingPlugin {
  constructor(initContext) {
    (0, _defineProperty2.default)(this, "logger", void 0);
    (0, _defineProperty2.default)(this, "reportingCore", void 0);
    this.initContext = initContext;
    this.logger = new _lib.LevelLogger(initContext.logger.get());
  }

  setup(core, plugins) {
    const {
      http
    } = core;
    const {
      screenshotMode,
      features,
      licensing,
      security,
      spaces,
      taskManager
    } = plugins;
    const reportingCore = new _.ReportingCore(this.logger, this.initContext); // prevent throwing errors in route handlers about async deps not being initialized
    // @ts-expect-error null is not assignable to object. use a boolean property to ensure reporting API is enabled.

    http.registerRouteHandlerContext(_constants.PLUGIN_ID, () => {
      if (reportingCore.pluginIsStarted()) {
        return reportingCore.getContract();
      } else {
        this.logger.error(`Reporting features are not yet ready`);
        return null;
      }
    });
    const router = http.createRouter();
    const basePath = http.basePath;
    reportingCore.pluginSetup({
      screenshotMode,
      features,
      licensing,
      basePath,
      router,
      security,
      spaces,
      taskManager,
      logger: this.logger
    });
    (0, _config.registerUiSettings)(core);
    (0, _deprecations.registerDeprecations)({
      core,
      reportingCore
    });
    (0, _usage.registerReportingUsageCollector)(reportingCore, plugins);
    (0, _routes.registerRoutes)(reportingCore, this.logger); // async background setup

    (async () => {
      const config = await (0, _config.buildConfig)(this.initContext, core, this.logger);
      reportingCore.setConfig(config); // Feature registration relies on config, so it cannot be setup before here.

      reportingCore.registerFeature();
      this.logger.debug('Setup complete');
    })().catch(e => {
      this.logger.error(`Error in Reporting setup, reporting may not function properly`);
      this.logger.error(e);
    });
    this.reportingCore = reportingCore;
    return reportingCore.getContract();
  }

  start(core, plugins) {
    // use data plugin for csv formats
    (0, _services.setFieldFormats)(plugins.data.fieldFormats);
    const reportingCore = this.reportingCore; // async background start

    (async () => {
      await reportingCore.pluginSetsUp();
      const browserDriverFactory = await (0, _browsers.initializeBrowserDriverFactory)(reportingCore, this.logger);
      const store = new _lib.ReportingStore(reportingCore, this.logger);
      await reportingCore.pluginStart({
        browserDriverFactory,
        savedObjects: core.savedObjects,
        uiSettings: core.uiSettings,
        store,
        esClient: core.elasticsearch.client,
        data: plugins.data,
        taskManager: plugins.taskManager,
        logger: this.logger
      }); // Note: this must be called after ReportingCore.pluginStart

      await store.start();
      this.logger.debug('Start complete');
    })().catch(e => {
      this.logger.error(`Error in Reporting start, reporting may not function properly`);
      this.logger.error(e);
    });
    return reportingCore.getContract();
  }

}

exports.ReportingPlugin = ReportingPlugin;