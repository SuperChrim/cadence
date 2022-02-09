/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[]).push([[9],{208:function(t,e,n){"use strict";n.r(e),n.d(e,"UptimeDataHelper",(function(){return r}));var a=n(61),i=n(62);async function o({absoluteTime:t,relativeTime:e,intervalString:n}){const i=new Date(t.start).toISOString(),o=new Date(t.end).toISOString(),r=await Object(a.i)({dateRangeStart:i,dateRangeEnd:o}),u=await Object(a.g)({dateStart:i,dateEnd:o,bucketSize:n});return{appLink:`/app/uptime?dateRangeStart=${e.start}&dateRangeEnd=${e.end}`,stats:{monitors:{type:"number",value:r.total},up:{type:"number",value:r.up},down:{type:"number",value:r.down}},series:{up:{coordinates:u.histogram.map((t=>({x:t.x,y:t.upCount||0})))},down:{coordinates:u.histogram.map((t=>({x:t.x,y:t.downCount||0})))}}}}function r(t){return i.a.core=t,{indexStatus:a.a,overviewData:o}}}}]);