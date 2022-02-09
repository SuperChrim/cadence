/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[2],{127:function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return r}));var n=o(21),a=o.n(n);function s(e,t,o,n){if(Array.isArray(e)){if(1===e.length)return r(e[0],t,o,n);return`[${e.map((e=>r(e,t,void 0,n)))}]`}return r(e,t,o,n)}function r(e,t,o,n){if(null==e)return"";if("time_of_week"===t){const t=void 0!==n&&void 0!==n.timestamp?new Date(n.timestamp):new Date,o=a.a.utc(t).startOf("week").add(e,"s");return a()(o.valueOf()).format("ddd HH:mm")}if("time_of_day"===t){const t=void 0!==n&&void 0!==n.timestamp?new Date(n.timestamp):new Date,o=a.a.utc(t).startOf("day").add(e,"s");return a()(o.valueOf()).format("HH:mm")}if(void 0!==o)return o.convert(e,"text");{const t=Math.abs(e);if(t>=1e4||t===Math.floor(t))return void 0!==o?o.convert(e,"text"):Number(e.toFixed(0));if(t>=10)return Number(e.toFixed(1));{let t;return t=e>0?Math.pow(10,3-Math.floor(Math.log(e)/Math.LN10)-1):Math.pow(10,3-Math.floor(Math.log(-1*e)/Math.LN10)-1),Math.round(e*t)/t}}}},135:function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o(4),a=o.n(n),s=o(74),r=o(88),i=o(79);const d=new class FieldFormatService{constructor(){a()(this,"indexPatternIdsByJob",{}),a()(this,"formatsByJob",{})}populateFormats(e){return new Promise(((t,o)=>{e.forEach((e=>{const t=i.a.getJob(e).datafeed_config.indices,o=Object(r.c)(t.length?t[0]:"");null!==o&&(this.indexPatternIdsByJob[e]=o)}));const n=e.map((e=>Promise.all([this.getFormatsForJob(e)])));Promise.all(n).then((o=>{o.forEach(((t,o)=>{this.formatsByJob[e[o]]=t[0]})),t(this.formatsByJob)})).catch((e=>{o({formats:{},err:e})}))}))}getFieldFormat(e,t){if(this.formatsByJob.hasOwnProperty(e))return this.formatsByJob[e][t]}getFieldFormatFromIndexPattern(e,t,o){let n;if("cardinality"!==o){const o=e.fields.getByName(t);void 0!==o&&(n=e.getFormatterForField(o))}return n}getFormatsForJob(e){return new Promise(((t,o)=>{const n=i.a.getJob(e).analysis_config.detectors||[],a=[],d=this.indexPatternIdsByJob[e];void 0!==d?Object(r.b)(d).then((e=>{const o=e.fields;n.forEach((t=>{const n=Object(s.q)(t.function);if(void 0!==t.field_name&&"cardinality"!==n){const n=o.getByName(t.field_name);void 0!==n&&(a[t.detector_index]=e.getFormatterForField(n))}})),t(a)})).catch((e=>{o(e)})):t(a)}))}}},73:function(e,t,o){"use strict";o.d(t,"b",(function(){return d})),o.d(t,"c",(function(){return l})),o.d(t,"a",(function(){return c}));var n=o(2),a=o(15),s=o(22),r=o(66),i=o(24);function d(e){return{displayDangerToast:function(t,o){e.addDanger(t,o)},displayWarningToast:function(t,o){e.addWarning(t,o)},displaySuccessToast:function(t,o){e.addSuccess(t,o)},displayErrorToast:function(t,o,a){const s=Object(i.c)(t);e.addError(new i.a(s,t),{title:null!=o?o:n.i18n.translate("xpack.ml.toastNotificationService.errorTitle",{defaultMessage:"An error has occurred"}),...a?{toastLifeTimeMs:a}:{}})}}}function c(){return d(Object(s.k)())}function l(){const{toasts:e}=Object(r.f)();return Object(a.useMemo)((()=>d(e)),[])}},79:function(e,t,o){"use strict";o.d(t,"a",(function(){return g}));var n=o(4),a=o.n(n),s=o(8),r=o(21),i=o.n(r),d=o(2),c=o(67),l=o(73);function u(e){const t=function(e){const t=document.createElement("a");return t.setAttribute("href",e),t.href}(e);return/^https?:\/\//.test(t)}var f=o(133),b=o(26),m=o(76);let h=[],j={};function p(e,t,o,n,a="absolute"){const s=e.map((e=>`'${e}'`)).join(",");let r,d,c="";return void 0!==n&&(c+=n),"quick"===a?(r=t,d=o):(r=i()(t).toISOString(),d=i()(o).toISOString()),c+=`?_g=(ml:(jobIds:!(${s}))`,c+=`,refreshInterval:(display:Off,pause:!t,value:0),time:(from:'${r}'`,c+=`,to:'${d}'`,"invalid"===a&&(c+=",mode:invalid"),c+="))&_a=(query:(query_string:(analyze_wildcard:!t,query:'*')))",c}const g=new class job_service_JobService{constructor(){a()(this,"loadJobsWrapper",(()=>this.loadJobs().then((function(e){return e})).catch((function(e){console.log("Error loading jobs in route resolve.",e),Promise.resolve([])})))),this.tempJobCloningObjects={createdBy:void 0,datafeed:void 0,job:void 0,skipTimeRangeStep:!1,start:void 0,end:void 0,calendars:void 0},this.jobs=[],this.basicJobs={},this.jobDescriptions={},this.detectorsByJob={},this.customUrlsByJob={},this.jobStats={activeNodes:{label:d.i18n.translate("xpack.ml.jobService.activeMLNodesLabel",{defaultMessage:"Active ML nodes"}),value:0,show:!0},total:{label:d.i18n.translate("xpack.ml.jobService.totalJobsLabel",{defaultMessage:"Total jobs"}),value:0,show:!0},open:{label:d.i18n.translate("xpack.ml.jobService.openJobsLabel",{defaultMessage:"Open jobs"}),value:0,show:!0},closed:{label:d.i18n.translate("xpack.ml.jobService.closedJobsLabel",{defaultMessage:"Closed jobs"}),value:0,show:!0},failed:{label:d.i18n.translate("xpack.ml.jobService.failedJobsLabel",{defaultMessage:"Failed jobs"}),value:0,show:!1},activeDatafeeds:{label:d.i18n.translate("xpack.ml.jobService.activeDatafeedsLabel",{defaultMessage:"Active datafeeds"}),value:0,show:!0}}}loadJobs(){return new Promise(((e,t)=>{function o(e){console.log("jobService error getting list of jobs:",e),Object(l.a)().displayErrorToast(e),t({jobs:h,err:e})}h=[],j={},c.ml.getJobs().then((t=>{h=t.jobs,c.ml.getJobStats().then((t=>{for(let e=0;e<h.length;e++){const o=h[e];o.data_counts={},o.model_size_stats={},o.datafeed_config={};for(let e=0;e<t.jobs.length;e++){const n=t.jobs[e];o.job_id===n.job_id&&(o.state=n.state,o.data_counts=Object(s.cloneDeep)(n.data_counts),o.model_size_stats=Object(s.cloneDeep)(n.model_size_stats),n.node&&(o.node=Object(s.cloneDeep)(n.node)),n.open_time&&(o.open_time=n.open_time))}}this.loadDatafeeds().then((t=>{for(let e=0;e<h.length;e++)for(let o=0;o<t.datafeeds.length;o++)h[e].job_id===t.datafeeds[o].job_id&&(h[e].datafeed_config=t.datafeeds[o],j[h[e].job_id]=t.datafeeds[o].datafeed_id);!function(e,t){const o=[],n={},a={},r=Object(s.cloneDeep)(t);Object(s.each)(r,(t=>{const r=t.analysis_config,i=Object(b.a)(r.bucket_span),d={id:t.job_id,bucketSpanSeconds:i.asSeconds()};void 0!==t.description&&!1===/^\s*$/.test(t.description)?d.description=t.description:d.description=t.job_id,d.detectors=Object(s.get)(r,"detectors",[]),n[d.id]=d.detectors,void 0!==t.custom_settings&&void 0!==t.custom_settings.custom_urls&&(d.customUrls=[],Object(s.each)(t.custom_settings.custom_urls,(e=>{void 0!==e.url_name&&void 0!==e.url_value&&u(e.url_value)&&d.customUrls.push(e)})),d.customUrls.length>0&&(a[d.id]=d.customUrls)),e.jobDescriptions[d.id]=d.description,e.basicJobs[d.id]=d,o.push(d)})),e.detectorsByJob=n,e.customUrlsByJob=a}(this,h),this.jobs=h,e({jobs:this.jobs})}))})).catch((e=>{o(e)}))})).catch((e=>{o(e)}))}))}refreshJob(e){return new Promise(((t,o)=>{function n(e){console.log("JobService error getting list of jobs:",e),Object(l.a)().displayErrorToast(e),o({jobs:h,err:e})}c.ml.getJobs({jobId:e}).then((o=>{if(o.jobs&&o.jobs.length){const a=o.jobs[0];c.ml.getJobStats({jobId:e}).then((o=>{for(let e=0;e<o.jobs.length;e++)if(a.job_id===o.jobs[e].job_id){const t=o.jobs[e];a.state=t.state,a.data_counts={},a.model_size_stats={},a.data_counts=Object(s.cloneDeep)(t.data_counts),a.model_size_stats=Object(s.cloneDeep)(t.model_size_stats),a.node&&(a.node=Object(s.cloneDeep)(t.node)),t.open_time&&(a.open_time=t.open_time)}for(let e=0;e<h.length;e++)h[e].job_id===a.job_id&&(h[e]=a);const n=this.getDatafeedId(e);this.loadDatafeeds(n).then((e=>{for(let t=0;t<h.length;t++)for(let o=0;o<e.datafeeds.length;o++)h[t].job_id===e.datafeeds[o].job_id&&(h[t].datafeed_config=e.datafeeds[o],j[h[t].job_id]=e.datafeeds[o].datafeed_id);this.jobs=h,t({jobs:this.jobs})}))})).catch((e=>{n(e)}))}})).catch((e=>{n(e)}))}))}loadDatafeeds(e){return new Promise(((t,o)=>{const n=void 0!==e?{datafeed_id:e}:void 0;function a(e){console.log("loadDatafeeds error getting list of datafeeds:",e),Object(l.a)().displayErrorToast(e),o({jobs:h,err:e})}c.ml.getDatafeeds(n).then((e=>{const o=e.datafeeds;c.ml.getDatafeedStats().then((e=>{for(let t=0;t<o.length;t++){const n=o[t];for(let t=0;t<e.datafeeds.length;t++)n.datafeed_id===e.datafeeds[t].datafeed_id&&(n.state=e.datafeeds[t].state)}t({datafeeds:o})})).catch((e=>{a(e)}))})).catch((e=>{a(e)}))}))}updateSingleJobDatafeedState(e){return new Promise(((t,o)=>{const n=this.getDatafeedId(e);c.ml.getDatafeedStats({datafeedId:n}).then((e=>{const o=e.datafeeds;let n="UNKNOWN";o&&o.length&&(n=o[0].state),t(n)})).catch((e=>{o(e)}))}))}saveNewJob(e){function t(t){console.log("Response for job query:",t);return{success:function(e,t){if(!e)return console.log("checkSaveResponse(): response is empty"),!1;if(e.job_id){if(e.job_id===t.job_id)return console.log("checkSaveResponse(): save successful"),!0}else if(e.errorCode)return console.log("checkSaveResponse(): save failed",e),!1}(t,e),job:e,resp:t}}return c.ml.addJob({jobId:e.job_id,job:e}).then(t).catch(t)}cloneDatafeed(e){const t=Object(s.cloneDeep)(e);return t&&(delete t.datafeed_id,delete t.job_id),t}getJob(e){return Object(s.find)(h,(t=>t.job_id===e))}openJob(e){return c.ml.openJob({jobId:e})}closeJob(e){return c.ml.closeJob({jobId:e})}saveNewDatafeed(e,t){const o=`datafeed-${t}`;return e.job_id=t,c.ml.addDatafeed({datafeedId:o,datafeedConfig:e})}startDatafeed(e,t,o,n){return new Promise(((t,a)=>{Object(s.isNumber)(n)&&n++,c.ml.startDatafeed({datafeedId:e,start:o,end:n}).then((e=>{t(e)})).catch((e=>{console.log("jobService error starting datafeed:",e),a(e)}))}))}forceStartDatafeeds(e,t,o){return c.ml.jobs.forceStartDatafeeds(e,t,o)}stopDatafeeds(e){return c.ml.jobs.stopDatafeeds(e)}deleteJobs(e){return c.ml.jobs.deleteJobs(e)}closeJobs(e){return c.ml.jobs.closeJobs(e)}resetJobs(e){return c.ml.jobs.resetJobs(e)}validateDetector(e){return new Promise(((t,o)=>{e?c.ml.validateDetector({detector:e}).then((e=>{t(e)})).catch((e=>{o(e)})):o({})}))}getDatafeedId(e){let t=j[e];return void 0===t&&(t=`datafeed-${e}`),t}getJobGroups(){const e=[],t={};return this.jobs.forEach((e=>{Array.isArray(e.groups)&&e.groups.forEach((o=>{void 0===t[o]?t[o]=[e]:t[o].push(e)}))})),Object(s.each)(t,((t,o)=>{e.push({id:o,jobs:t})})),e}createResultsUrlForJobs(e,t,o){return function(e,t,o){let n,a,s="absolute";const r=e.map((e=>e.id));if(Object(m.e)(o)){n=o.from,a=o.to;const e=i()(o.from).isValid(),s=i()(o.to).isValid();if(!e&&!s)return p(r,n,a,t,"quick")}else if(o&&(s="invalid"),1===e.length)n=e[0].earliestTimestampMs,a=e[0].latestResultsTimestampMs;else{const t=e.filter((e=>void 0!==e.earliestTimestampMs));t.length>0&&(n=Math.min(...t.map((e=>e.earliestTimestampMs))),a=Math.max(...t.map((e=>e.latestResultsTimestampMs))))}const d=i()(n).format(f.a),c=i()(a).format(f.a);return p(r,d,c,t,s)}(e,t,o)}createResultsUrl(e,t,o,n){return p(e,t,o,n)}async getJobAndGroupIds(){try{return await c.ml.jobs.getAllJobAndGroupIds()}catch(e){return{jobIds:[],groupIds:[]}}}}},88:function(e,t,o){"use strict";o.d(t,"h",(function(){return d})),o.d(t,"i",(function(){return c})),o.d(t,"e",(function(){return l})),o.d(t,"d",(function(){return u})),o.d(t,"c",(function(){return f})),o.d(t,"a",(function(){return b})),o.d(t,"f",(function(){return m})),o.d(t,"b",(function(){return h})),o.d(t,"j",(function(){return j})),o.d(t,"g",(function(){return p}));var n=o(2),a=o(22);let s=[],r=[],i=null;async function d(e){i=e;const t=Object(a.b)();return s=await t.find("*",1e4),s}function c(){return Object(a.i)().find({type:"search",perPage:1e4}).then((e=>(r=e.savedObjects,r)))}function l(){return i}function u(){return s.map((e=>e.title))}function f(e){var t,o;return null!==(t=null===(o=s.find((t=>t.title===e)))||void 0===o?void 0:o.id)&&void 0!==t?t:null}async function b(e){var t;const o={savedSearch:null,indexPattern:null};if(void 0===e)return o;const n=await async function(e){const t=Object(a.i)(),o=await t.get("search",e);return void 0===o.error?o:null}(e);if(null===n)return o;const s=null===(t=n.references.find((e=>"index-pattern"===e.type)))||void 0===t?void 0:t.id;return o.indexPattern=await h(s),o.savedSearch=n,o}function m(e){const t=e.attributes.kibanaSavedObjectMeta;return JSON.parse(t.searchSourceJSON)}function h(e){if(null!==i)return e?i.get(e):i.create({});throw new Error("Index patterns are not initialized!")}function j(e,t=!1){if(e.isTimeBased())return!0;if(t){Object(a.k)().addWarning({title:n.i18n.translate("xpack.ml.indexPatternNotBasedOnTimeSeriesNotificationTitle",{defaultMessage:"The index pattern {indexPatternTitle} is not based on a time series",values:{indexPatternTitle:e.title}}),text:n.i18n.translate("xpack.ml.indexPatternNotBasedOnTimeSeriesNotificationDescription",{defaultMessage:"Anomaly detection only runs over time-based indices"})})}return!1}function p(e){return e.includes(":")}}}]);