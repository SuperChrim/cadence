"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSearchSource = void 0;

var _migrate_legacy_query = require("./migrate_legacy_query");

var _search_source = require("./search_source");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Deserializes a json string and a set of referenced objects to a `SearchSource` instance.
 * Use this method to re-create the search source serialized using `searchSource.serialize`.
 *
 * This function is a factory function that returns the actual utility when calling it with the
 * required service dependency (index patterns contract). A pre-wired version is also exposed in
 * the start contract of the data plugin as part of the search service
 *
 * @param indexPatterns The index patterns contract of the data plugin
 * @param searchSourceDependencies
 *
 * @return Wired utility function taking two parameters `searchSourceJson`, the json string
 * returned by `serializeSearchSource` and `references`, a list of references including the ones
 * returned by `serializeSearchSource`.
 *
 *
 * @public */
const createSearchSource = (indexPatterns, searchSourceDependencies) => async (searchSourceFields = {}) => {
  const fields = { ...searchSourceFields
  }; // hydrating index pattern

  if (fields.index && typeof fields.index === 'string') {
    fields.index = await indexPatterns.get(searchSourceFields.index);
  }

  const searchSource = new _search_source.SearchSource(fields, searchSourceDependencies); // todo: move to migration script .. create issue

  const query = searchSource.getOwnField('query');

  if (typeof query !== 'undefined') {
    searchSource.setField('query', (0, _migrate_legacy_query.migrateLegacyQuery)(query));
  }

  return searchSource;
};

exports.createSearchSource = createSearchSource;