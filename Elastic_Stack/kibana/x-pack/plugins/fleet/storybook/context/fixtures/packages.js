"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.response = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const response = [{
  name: 'ga_not_installed',
  title: 'a. GA, Not Installed',
  version: '0.0.1',
  release: 'ga',
  description: 'A package that is GA, but not installed',
  type: 'integration',
  download: '/epr/ga/not_installed',
  path: '/package/ga/not_installed',
  id: 'ga_not_installed',
  status: 'not_installed',
  categories: ['aws', 'azure']
}, {
  name: 'ga_beats',
  title: 'b. GA, has Beats',
  version: '0.0.2',
  release: 'ga',
  description: 'A package that is GA, not installed, with Beats',
  type: 'integration',
  download: '/epr/ga/not_installed/beats',
  path: '/package/ga/not_installed/beats',
  id: 'ga_not_installed_beat',
  status: 'not_installed',
  categories: ['azure', 'cloud', 'config_management']
}, {
  name: 'ga_installed',
  title: 'c. GA, Installed',
  version: '0.0.3',
  release: 'ga',
  description: 'A package that is GA and installed',
  type: 'integration',
  download: '/epr/ga/installed',
  path: '/package/ga/installed',
  id: 'ga_installed',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'ga_installed',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'ga_installed',
      version: '0.0.3',
      internal: false,
      removable: false,
      install_version: '0.0.3',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['cloud', 'containers']
}, {
  name: 'ga_installed_update',
  title: 'd. GA, Installed, Update',
  version: '0.0.4',
  release: 'ga',
  description: 'A package that is GA, installed, with update',
  type: 'integration',
  download: '/epr/ga/installed/update',
  path: '/package/ga/installed/update',
  id: 'ga_installed_update',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'ga_installed_update',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'ga_installed_update',
      version: '0.0.1',
      internal: false,
      removable: false,
      install_version: '0.0.1',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['cloud', 'crm', 'custom']
}, {
  name: 'beta_not_installed',
  title: 'e. Beta, Not Installed',
  version: '0.0.5',
  release: 'beta',
  description: 'A package that is Beta, and not installed',
  type: 'integration',
  download: '/epr/beta/not_installed',
  path: '/package/beta/not_installed',
  id: 'beta_not_installed',
  status: 'not_installed'
}, {
  name: 'beta_beats',
  title: 'f. Beta, has Beats',
  version: '0.0.6',
  release: 'beta',
  description: 'A package that is Beta, not installed, with Beats',
  type: 'integration',
  download: '/epr/beta/not_installed/beats',
  path: '/package/beta/not_installed/beats',
  id: 'beta_beats',
  status: 'not_installed',
  categories: ['datastore', 'elastic_stack', 'google_cloud']
}, {
  name: 'beta_installed',
  title: 'g. Beta, Installed',
  version: '0.0.6',
  release: 'beta',
  description: 'A package that is Beta and installed',
  type: 'integration',
  download: '/epr/beta/installed',
  path: '/package/beta/installed',
  id: 'beta_installed',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'beta_installed',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'beta_installed',
      version: '0.0.6',
      internal: false,
      removable: false,
      install_version: '0.0.6',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['elastic_stack', 'languages']
}, {
  name: 'beta_installed_update',
  title: 'h. Beta, Installed, Update',
  version: '0.0.7',
  release: 'beta',
  description: 'A package that is Beta, installed, with update',
  type: 'integration',
  download: '/epr/beta/installed',
  path: '/package/beta/installed',
  id: 'beta_installed_update',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'beta_installed_update',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'beta_installed_update',
      version: '0.0.3',
      internal: false,
      removable: false,
      install_version: '0.0.3',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['message_queue', 'monitoring']
}, {
  name: 'exp_not_installed',
  title: 'i. Experimental, Not Installed',
  version: '0.0.8',
  release: 'experimental',
  description: 'A package that is Experimental and not installed',
  type: 'integration',
  download: '/epr/exp/not_installed',
  path: '/package/exp/not_installed',
  id: 'exp_not_installed',
  status: 'not_installed',
  categories: ['monitoring', 'network', 'notification']
}, {
  name: 'exp_beats',
  title: 'j. Experimental, has Beats',
  version: '0.0.9',
  release: 'experimental',
  description: 'A package that is Experimental and not installed',
  type: 'integration',
  download: '/epr/exp/not_installed/beats',
  path: '/package/exp/not_installed/beats',
  id: 'exp_beats',
  status: 'not_installed',
  policy_templates: [{
    name: '',
    description: '',
    title: '',
    categories: ['datastore']
  }],
  categories: ['version_control', 'web']
}, {
  name: 'exp_installed',
  title: 'k. Experimental, Installed',
  version: '0.0.10',
  release: 'experimental',
  description: 'A package that is experimental and installed',
  type: 'integration',
  download: '/epr/exp/installed',
  path: '/package/exp/installed',
  id: 'exp_installed',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'exp_installed',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'exp_installed',
      version: '0.0.10',
      internal: false,
      removable: false,
      install_version: '0.0.10',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['os_system', 'productivity']
}, {
  name: 'exp_installed_update',
  title: 'l. Experimental, Installed, Update',
  version: '0.0.11',
  release: 'experimental',
  description: 'A package that is experimental, installed, with update',
  type: 'integration',
  download: '/epr/exp/installed',
  path: '/package/exp/installed',
  id: 'exp_installed_update',
  status: 'installed',
  savedObject: {
    type: 'epm-packages',
    id: 'exp_installed_update',
    attributes: {
      installed_kibana: [],
      installed_es: [],
      package_assets: [],
      es_index_patterns: {},
      name: 'exp_installed_update',
      version: '0.0.8',
      internal: false,
      removable: false,
      install_version: '0.0.8',
      install_status: 'installed',
      install_started_at: '2021-08-25T19:44:37.078Z',
      install_source: 'registry',
      keep_policies_up_to_date: false
    },
    references: [],
    coreMigrationVersion: '7.14.0',
    updated_at: '2021-08-25T19:44:53.517Z',
    version: 'WzczMTIsNF0='
  },
  categories: ['aws', 'cloud', 'elastic_stack']
}];
exports.response = response;