"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTopNFlowQueryEntities = void 0;

var _build_query = require("../../../../../utils/build_query");

var _helpers = require("../helpers");

var _helpers2 = require("./helpers");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// TODO: This is the same as the other one, so move this into helpers.


const getCountAgg = flowTarget => ({
  top_n_flow_count: {
    cardinality: {
      field: `${flowTarget}.ip`
    }
  }
});

const buildTopNFlowQueryEntities = ({
  defaultIndex,
  filterQuery,
  flowTarget,
  sort,
  pagination: {
    querySize
  },
  timerange: {
    from,
    to
  },
  ip
}) => {
  const filter = [...(0, _build_query.createQueryFilterClauses)(filterQuery), {
    range: {
      '@timestamp': {
        gte: from,
        lte: to,
        format: 'strict_date_optional_time'
      }
    }
  }];
  const dslQuery = {
    allow_no_indices: true,
    index: defaultIndex,
    ignore_unavailable: true,
    body: {
      aggregations: { ...getCountAgg(flowTarget),
        ...getFlowTargetAggs(sort, flowTarget, querySize)
      },
      query: {
        bool: ip ? {
          filter,
          should: [{
            term: {
              [`${(0, _helpers.getOppositeField)(flowTarget)}.ip`]: ip
            }
          }],
          minimum_should_match: 1
        } : {
          filter
        }
      }
    },
    size: 0,
    track_total_hits: false
  };
  return dslQuery;
};

exports.buildTopNFlowQueryEntities = buildTopNFlowQueryEntities;

const getFlowTargetAggs = (sort, flowTarget, querySize) => ({
  [flowTarget]: {
    terms: {
      field: `${flowTarget}.ip`,
      size: querySize,
      order: { ...(0, _helpers2.getQueryOrder)(sort)
      }
    },
    aggs: {
      bytes_in: {
        sum: {
          field: `metrics.${(0, _helpers.getOppositeField)(flowTarget)}.bytes.sum`
        }
      },
      bytes_out: {
        sum: {
          field: `metrics.${flowTarget}.bytes.sum`
        }
      },
      domain: {
        terms: {
          field: `${flowTarget}.domain`,
          order: {
            timestamp: 'desc'
          }
        },
        aggs: {
          timestamp: {
            max: {
              field: '@timestamp'
            }
          }
        }
      },
      location: {
        filter: {
          exists: {
            field: `${flowTarget}.geo`
          }
        },
        aggs: {
          top_geo: {
            top_hits: {
              _source: `${flowTarget}.geo.*`,
              size: 1
            }
          }
        }
      },
      autonomous_system: {
        filter: {
          exists: {
            field: `${flowTarget}.as`
          }
        },
        aggs: {
          top_as: {
            top_hits: {
              _source: `${flowTarget}.as.*`,
              size: 1
            }
          }
        }
      },
      flows: {
        avg: {
          // TODO: Should we use a max here along with a hybrid query?
          field: 'metrics.network.community_id.cardinality'
        }
      },
      [`${(0, _helpers.getOppositeField)(flowTarget)}_ips`]: {
        avg: {
          // TODO: Should we use a max here along with a hybrid query?
          field: `metrics.${(0, _helpers.getOppositeField)(flowTarget)}.ip.cardinality`
        }
      }
    }
  }
});