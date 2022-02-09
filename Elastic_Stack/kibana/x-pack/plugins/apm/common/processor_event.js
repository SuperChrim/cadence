"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processorEventRt = exports.ProcessorEvent = void 0;

var t = _interopRequireWildcard(require("io-ts"));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


let ProcessorEvent;
exports.ProcessorEvent = ProcessorEvent;

(function (ProcessorEvent) {
  ProcessorEvent["transaction"] = "transaction";
  ProcessorEvent["error"] = "error";
  ProcessorEvent["metric"] = "metric";
  ProcessorEvent["span"] = "span";
  ProcessorEvent["profile"] = "profile";
})(ProcessorEvent || (exports.ProcessorEvent = ProcessorEvent = {}));

const processorEventRt = t.union([t.literal(ProcessorEvent.transaction), t.literal(ProcessorEvent.error), t.literal(ProcessorEvent.metric), t.literal(ProcessorEvent.span), t.literal(ProcessorEvent.profile)]);
/**
 * Processor events that are searchable in the UI via the query bar.
 *
 * Some client-sideroutes will define 1 or more processor events that
 * will be used to fetch the dynamic index pattern for the query bar.
 */

exports.processorEventRt = processorEventRt;