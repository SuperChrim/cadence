"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotalCountAggregations = getTotalCountAggregations;
exports.getTotalCountInUse = getTotalCountInUse;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const alertTypeMetric = {
  scripted_metric: {
    init_script: 'state.ruleTypes = [:]; state.namespaces = [:]',
    map_script: `
      String alertType = doc['alert.alertTypeId'].value;
      String namespace = doc['namespaces'] !== null && doc['namespaces'].size() > 0 ? doc['namespaces'].value : 'default';
      state.ruleTypes.put(alertType, state.ruleTypes.containsKey(alertType) ? state.ruleTypes.get(alertType) + 1 : 1);
      if (state.namespaces.containsKey(namespace) === false) {
        state.namespaces.put(namespace, 1);
      }
    `,
    // Combine script is executed per cluster, but we already have a key-value pair per cluster.
    // Despite docs that say this is optional, this script can't be blank.
    combine_script: 'return state',
    // Reduce script is executed across all clusters, so we need to add up all the total from each cluster
    // This also needs to account for having no data
    reduce_script: `
      Map result = [:];
      for (Map m : states.toArray()) {
        if (m !== null) {
          for (String k : m.keySet()) {
            result.put(k, result.containsKey(k) ? result.get(k) + m.get(k) : m.get(k));
          }
        }
      }
      return result;
    `
  }
};

async function getTotalCountAggregations(esClient, kibanaInex) {
  const {
    body: results
  } = await esClient.search({
    index: kibanaInex,
    body: {
      size: 0,
      query: {
        bool: {
          filter: [{
            term: {
              type: 'alert'
            }
          }]
        }
      },
      runtime_mappings: {
        alert_action_count: {
          type: 'long',
          script: {
            source: `
              def alert = params._source['alert']; 
              if (alert != null) { 
                def actions = alert.actions; 
                if (actions != null) { 
                  emit(actions.length); 
                } else { 
                  emit(0); 
                }
              }`
          }
        },
        alert_interval: {
          type: 'long',
          script: {
            source: `
              int parsed = 0;
              if (doc['alert.schedule.interval'].size() > 0) {
                def interval = doc['alert.schedule.interval'].value;

                if (interval.length() > 1) {
                    // get last char
                    String timeChar = interval.substring(interval.length() - 1);
                    // remove last char
                    interval = interval.substring(0, interval.length() - 1);

                    if (interval.chars().allMatch(Character::isDigit)) {
                      // using of regex is not allowed in painless language
                      parsed = Integer.parseInt(interval);

                      if (timeChar.equals("s")) {
                        parsed = parsed;
                      } else if (timeChar.equals("m")) {
                        parsed = parsed * 60;
                      } else if (timeChar.equals("h")) {
                        parsed = parsed * 60 * 60;
                      } else if (timeChar.equals("d")) {
                        parsed = parsed * 24 * 60 * 60;
                      }
                      emit(parsed);
                    }
                }
              }
              emit(parsed);
            `
          }
        },
        alert_throttle: {
          type: 'long',
          script: {
            source: `
              int parsed = 0;
              if (doc['alert.throttle'].size() > 0) {
              def throttle = doc['alert.throttle'].value;

              if (throttle.length() > 1) {
                  // get last char
                  String timeChar = throttle.substring(throttle.length() - 1);
                  // remove last char
                  throttle = throttle.substring(0, throttle.length() - 1);

                  if (throttle.chars().allMatch(Character::isDigit)) {
                    // using of regex is not allowed in painless language
                    parsed = Integer.parseInt(throttle);

                    if (timeChar.equals("s")) {
                      parsed = parsed;
                    } else if (timeChar.equals("m")) {
                      parsed = parsed * 60;
                    } else if (timeChar.equals("h")) {
                      parsed = parsed * 60 * 60;
                    } else if (timeChar.equals("d")) {
                      parsed = parsed * 24 * 60 * 60;
                    }
                    emit(parsed);
                  }
              }
            }
            emit(parsed);
            `
          }
        }
      },
      aggs: {
        byAlertTypeId: alertTypeMetric,
        max_throttle_time: {
          max: {
            field: 'alert_throttle'
          }
        },
        min_throttle_time: {
          min: {
            field: 'alert_throttle'
          }
        },
        avg_throttle_time: {
          avg: {
            field: 'alert_throttle'
          }
        },
        max_interval_time: {
          max: {
            field: 'alert_interval'
          }
        },
        min_interval_time: {
          min: {
            field: 'alert_interval'
          }
        },
        avg_interval_time: {
          avg: {
            field: 'alert_interval'
          }
        },
        max_actions_count: {
          max: {
            field: 'alert_action_count'
          }
        },
        min_actions_count: {
          min: {
            field: 'alert_action_count'
          }
        },
        avg_actions_count: {
          avg: {
            field: 'alert_action_count'
          }
        }
      }
    }
  });
  const aggregations = results.aggregations;
  const totalAlertsCount = Object.keys(aggregations.byAlertTypeId.value.ruleTypes).reduce((total, key) => parseInt(aggregations.byAlertTypeId.value.ruleTypes[key], 10) + total, 0);
  return {
    count_total: totalAlertsCount,
    count_by_type: Object.keys(aggregations.byAlertTypeId.value.ruleTypes).reduce( // ES DSL aggregations are returned as `any` by esClient.search
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (obj, key) => ({ ...obj,
      [replaceFirstAndLastDotSymbols(key)]: aggregations.byAlertTypeId.value.ruleTypes[key]
    }), {}),
    throttle_time: {
      min: `${aggregations.min_throttle_time.value}s`,
      avg: `${aggregations.avg_throttle_time.value}s`,
      max: `${aggregations.max_throttle_time.value}s`
    },
    schedule_time: {
      min: `${aggregations.min_interval_time.value}s`,
      avg: `${aggregations.avg_interval_time.value}s`,
      max: `${aggregations.max_interval_time.value}s`
    },
    throttle_time_number_s: {
      min: aggregations.min_throttle_time.value,
      avg: aggregations.avg_throttle_time.value,
      max: aggregations.max_throttle_time.value
    },
    schedule_time_number_s: {
      min: aggregations.min_interval_time.value,
      avg: aggregations.avg_interval_time.value,
      max: aggregations.max_interval_time.value
    },
    connectors_per_alert: {
      min: aggregations.min_actions_count.value,
      avg: aggregations.avg_actions_count.value,
      max: aggregations.max_actions_count.value
    },
    count_rules_namespaces: 0
  };
}

async function getTotalCountInUse(esClient, kibanaInex) {
  const {
    body: searchResult
  } = await esClient.search({
    index: kibanaInex,
    size: 0,
    body: {
      query: {
        bool: {
          filter: [{
            term: {
              type: 'alert'
            }
          }, {
            term: {
              'alert.enabled': true
            }
          }]
        }
      },
      aggs: {
        byAlertTypeId: alertTypeMetric
      }
    }
  });
  const aggregations = searchResult.aggregations;
  return {
    countTotal: Object.keys(aggregations.byAlertTypeId.value.ruleTypes).reduce((total, key) => parseInt(aggregations.byAlertTypeId.value.ruleTypes[key], 10) + total, 0),
    countByType: Object.keys(aggregations.byAlertTypeId.value.ruleTypes).reduce( // ES DSL aggregations are returned as `any` by esClient.search
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (obj, key) => ({ ...obj,
      [replaceFirstAndLastDotSymbols(key)]: aggregations.byAlertTypeId.value.ruleTypes[key]
    }), {}),
    countNamespaces: Object.keys(aggregations.byAlertTypeId.value.namespaces).length
  };
}

function replaceFirstAndLastDotSymbols(strToReplace) {
  const hasFirstSymbolDot = strToReplace.startsWith('.');
  const appliedString = hasFirstSymbolDot ? strToReplace.replace('.', '__') : strToReplace;
  const hasLastSymbolDot = strToReplace.endsWith('.');
  return hasLastSymbolDot ? `${appliedString.slice(0, -1)}__` : appliedString;
} // TODO: Implement executions count telemetry with eventLog, when it will write to index