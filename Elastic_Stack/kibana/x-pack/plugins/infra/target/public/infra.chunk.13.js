/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.infra_bundle_jsonpfunction=window.infra_bundle_jsonpfunction||[]).push([[13],{100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.TIMESTAMP=t.TAGS=t.SPACE_IDS=t.KIBANA_NAMESPACE=t.EVENT_KIND=t.EVENT_ACTION=t.ECS_VERSION=t.CONSUMERS=t.ALERT_WORKFLOW_USER=t.ALERT_WORKFLOW_STATUS=t.ALERT_WORKFLOW_REASON=t.ALERT_UUID=t.ALERT_SYSTEM_STATUS=t.ALERT_STATUS=t.ALERT_START=t.ALERT_SEVERITY=t.ALERT_RULE_VERSION=t.ALERT_RULE_UUID=t.ALERT_RULE_UPDATED_BY=t.ALERT_RULE_UPDATED_AT=t.ALERT_RULE_TYPE_ID=t.ALERT_RULE_TYPE=t.ALERT_RULE_TO=t.ALERT_RULE_TAGS=t.ALERT_RULE_SEVERITY_MAPPING=t.ALERT_RULE_SEVERITY=t.ALERT_RULE_RULE_NAME_OVERRIDE=t.ALERT_RULE_RULE_ID=t.ALERT_RULE_RISK_SCORE_MAPPING=t.ALERT_RULE_RISK_SCORE=t.ALERT_RULE_REFERENCES=t.ALERT_RULE_PRODUCER=t.ALERT_RULE_PARAMS=t.ALERT_RULE_NOTE=t.ALERT_RULE_NAMESPACE=t.ALERT_RULE_NAME=t.ALERT_RULE_LICENSE=t.ALERT_RULE_INTERVAL=t.ALERT_RULE_FROM=t.ALERT_RULE_ENABLED=t.ALERT_RULE_DESCRIPTION=t.ALERT_RULE_CREATED_BY=t.ALERT_RULE_CREATED_AT=t.ALERT_RULE_CONSUMER=t.ALERT_RULE_CATEGORY=t.ALERT_RULE_AUTHOR=t.ALERT_RISK_SCORE=t.ALERT_REASON=t.ALERT_NAMESPACE=t.ALERT_INSTANCE_ID=t.ALERT_EVALUATION_VALUE=t.ALERT_EVALUATION_THRESHOLD=t.ALERT_END=t.ALERT_DURATION=t.ALERT_ACTION_GROUP=void 0;const a="kibana";t.KIBANA_NAMESPACE=a;const n="kibana.alert";t.ALERT_NAMESPACE=n;const o="kibana.alert.rule";t.ALERT_RULE_NAMESPACE=o;const i="kibana.consumers";t.CONSUMERS=i;const s="ecs.version";t.ECS_VERSION=s;const l="event.action";t.EVENT_ACTION=l;const c="event.kind";t.EVENT_KIND=c;const u="kibana.space_ids";t.SPACE_IDS=u;const E="tags";t.TAGS=E;const R="@timestamp";t.TIMESTAMP=R;const p="kibana.version";t.VERSION=p;const _="kibana.alert.action_group";t.ALERT_ACTION_GROUP=_;const A="kibana.alert.duration.us";t.ALERT_DURATION=A;const d="kibana.alert.end";t.ALERT_END=d;const T="kibana.alert.evaluation.threshold";t.ALERT_EVALUATION_THRESHOLD=T;const g="kibana.alert.evaluation.value";t.ALERT_EVALUATION_VALUE=g;const f="kibana.alert.instance.id";t.ALERT_INSTANCE_ID=f;const L="kibana.alert.reason";t.ALERT_REASON=L;const m="kibana.alert.risk_score";t.ALERT_RISK_SCORE=m;const b="kibana.alert.severity";t.ALERT_SEVERITY=b;const y="kibana.alert.start";t.ALERT_START=y;const O="kibana.alert.status";t.ALERT_STATUS=O;const h="kibana.alert.system_status";t.ALERT_SYSTEM_STATUS=h;const k="kibana.alert.uuid";t.ALERT_UUID=k;const U="kibana.alert.workflow_reason";t.ALERT_WORKFLOW_REASON=U;const S="kibana.alert.workflow_status";t.ALERT_WORKFLOW_STATUS=S;const N="kibana.alert.workflow_user";t.ALERT_WORKFLOW_USER=N;const v="kibana.alert.rule.author";t.ALERT_RULE_AUTHOR=v;const C="kibana.alert.rule.created_at";t.ALERT_RULE_CREATED_AT=C;const M="kibana.alert.rule.created_by";t.ALERT_RULE_CREATED_BY=M;const I="kibana.alert.rule.description";t.ALERT_RULE_DESCRIPTION=I;const x="kibana.alert.rule.enabled";t.ALERT_RULE_ENABLED=x;const j="kibana.alert.rule.from";t.ALERT_RULE_FROM=j;const P="kibana.alert.rule.interval";t.ALERT_RULE_INTERVAL=P;const D="kibana.alert.rule.license";t.ALERT_RULE_LICENSE=D;const F="kibana.alert.rule.category";t.ALERT_RULE_CATEGORY=F;const w="kibana.alert.rule.name";t.ALERT_RULE_NAME=w;const q="kibana.alert.rule.note";t.ALERT_RULE_NOTE=q;const V="kibana.alert.rule.params";t.ALERT_RULE_PARAMS=V;const H="kibana.alert.rule.references";t.ALERT_RULE_REFERENCES=H;const K="kibana.alert.rule.risk_score";t.ALERT_RULE_RISK_SCORE=K;const $="kibana.alert.rule.risk_score_mapping";t.ALERT_RULE_RISK_SCORE_MAPPING=$;const G="kibana.alert.rule.rule_id";t.ALERT_RULE_RULE_ID=G;const Y="kibana.alert.rule.rule_name_override";t.ALERT_RULE_RULE_NAME_OVERRIDE=Y;const Q="kibana.alert.rule.severity";t.ALERT_RULE_SEVERITY=Q;const B="kibana.alert.rule.severity_mapping";t.ALERT_RULE_SEVERITY_MAPPING=B;const W="kibana.alert.rule.tags";t.ALERT_RULE_TAGS=W;const z="kibana.alert.rule.to";t.ALERT_RULE_TO=z;const J="kibana.alert.rule.type";t.ALERT_RULE_TYPE=J;const X="kibana.alert.rule.rule_type_id";t.ALERT_RULE_TYPE_ID=X;const Z="kibana.alert.rule.updated_at";t.ALERT_RULE_UPDATED_AT=Z;const ee="kibana.alert.rule.updated_by";t.ALERT_RULE_UPDATED_BY=ee;const te="kibana.alert.rule.version";t.ALERT_RULE_VERSION=te;const re="kibana.alert.rule.consumer";t.ALERT_RULE_CONSUMER=re;const ae="kibana.alert.rule.producer";t.ALERT_RULE_PRODUCER=ae;const ne="kibana.alert.rule.uuid";t.ALERT_RULE_UUID=ne},118:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},119:function(e,t,r){"use strict";var a="%[a-f0-9]{2}",n=new RegExp(a,"gi"),o=new RegExp("("+a+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],i(r),i(a))}function s(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=i(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var a=s(r[0]);a!==r[0]&&(t[r[0]]=a)}r=o.exec(e)}t["%C2"]="�";for(var n=Object.keys(t),i=0;i<n.length;i++){var l=n[i];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},120:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return E}));var a=r(2),n=r(0),o=r(47),i=r(81);const s=n.type({field:n.array(n.string),comparator:n.array(n.string),value:n.array(n.string)}),l=n.record(n.string,s),c=n.recursion("AlertingError",(()=>n.record(n.string,n.union([n.string,n.array(n.string),c])))),u=n.type({threshold:n.type({value:n.array(n.string)}),criteria:n.record(n.string,l),timeWindowSize:n.array(n.string),timeSizeUnit:n.array(n.string)});function E({count:e,criteria:t,timeSize:r}){const n={errors:{}},s={threshold:{value:[]},criteria:{},timeSizeUnit:[],timeWindowSize:[]};if(n.errors=s,Object(o.isNumber)(null==e?void 0:e.value)||Object(o.isFinite)(null==e?void 0:e.value)||s.threshold.value.push(a.i18n.translate("xpack.infra.logs.alertFlyout.error.thresholdRequired",{defaultMessage:"Numeric threshold value is Required."})),r||s.timeWindowSize.push(a.i18n.translate("xpack.infra.logs.alertFlyout.error.timeSizeRequired",{defaultMessage:"Time size is Required."})),t&&t.length>0){const e=e=>{const t={};return e.forEach(((e,r)=>{t[r]={field:[],comparator:[],value:[]},e.field||t[r].field.push(a.i18n.translate("xpack.infra.logs.alertFlyout.error.criterionFieldRequired",{defaultMessage:"Field is required."})),e.comparator||t[r].comparator.push(a.i18n.translate("xpack.infra.logs.alertFlyout.error.criterionComparatorRequired",{defaultMessage:"Comparator is required."})),void 0!==e.value&&null!==e.value||t[r].value.push(a.i18n.translate("xpack.infra.logs.alertFlyout.error.criterionValueRequired",{defaultMessage:"Value is required."}))})),t};if(Object(i.j)(t)){const r=e(Object(i.g)(t));s.criteria[0]=r;const a=e(Object(i.f)(t));s.criteria[1]=a}else{const r=e(t);s.criteria[0]=r}}return n}},230:function(e,t,r){"use strict";r.r(t),r.d(t,"createLogThresholdAlertType",(function(){return E})),r.d(t,"AlertDropdown",(function(){return b}));var a=r(2),n=r(1),o=r.n(n),i=r(81),s=r(100),l=r(58);const c=({fields:e})=>{var t;const r=null!==(t=e[s.ALERT_REASON])&&void 0!==t?t:"",a=e[s.ALERT_START],n=null!=a?new Date(a).valueOf():null;return{reason:r,link:Object(l.modifyUrl)("/app/logs/link-to/default/logs",(({query:e,...t})=>({...t,query:{...e,...null!=n?{time:`${n}`}:{}}})))}};var u=r(137);function E(){return{id:i.c,description:a.i18n.translate("xpack.infra.logs.alertFlyout.alertDescription",{defaultMessage:"Alert when the log aggregation exceeds the threshold."}),iconClass:"bell",documentationUrl:e=>`${e.links.observability.logsThreshold}`,alertParamsExpression:o.a.lazy((()=>Promise.all([r.e(4),r.e(10)]).then(r.bind(null,296)))),validate:u.b,defaultActionMessage:a.i18n.translate("xpack.infra.logs.alerting.threshold.defaultActionMessage",{defaultMessage:"\\{\\{^context.isRatio\\}\\}\\{\\{#context.group\\}\\}\\{\\{context.group\\}\\} - \\{\\{/context.group\\}\\}\\{\\{context.matchingDocuments\\}\\} log entries have matched the following conditions: \\{\\{context.conditions\\}\\}\\{\\{/context.isRatio\\}\\}\\{\\{#context.isRatio\\}\\}\\{\\{#context.group\\}\\}\\{\\{context.group\\}\\} - \\{\\{/context.group\\}\\} Ratio of the count of log entries matching \\{\\{context.numeratorConditions\\}\\} to the count of log entries matching \\{\\{context.denominatorConditions\\}\\} was \\{\\{context.ratio\\}\\}\\{\\{/context.isRatio\\}\\}"}),requiresAppContext:!1,format:c}}var R=r(69),p=r.n(R),_=r(45),A=r(46),d=r(28);const T=e=>{const{visible:t,setVisible:r}=e,{triggersActionsUI:a}=Object(n.useContext)(d.a),s=Object(n.useCallback)((()=>r(!1)),[r]),l=Object(n.useMemo)((()=>a&&a.getAddAlertFlyout({consumer:"logs",onClose:s,canChangeTrigger:!1,alertTypeId:i.c,metadata:{isInternal:!0}})),[a,s]);return o.a.createElement(o.a.Fragment,null,t&&l)};var g=r(73),f=r(22);const L=a.i18n.translate("xpack.infra.logs.alertDropdown.readOnlyCreateAlertContent",{defaultMessage:"Creating alerts requires more permissions in this application."}),m=a.i18n.translate("xpack.infra.logs.alertDropdown.readOnlyCreateAlertTitle",{defaultMessage:"Read only"}),b=()=>{var e,t;const{services:{application:{capabilities:r}}}=Object(f.b)(),a=null!==(e=null==r||null===(t=r.logs)||void 0===t?void 0:t.save)&&void 0!==e&&e,[i,s]=Object(n.useState)(!1),[l,c]=Object(n.useState)(!1),u=Object(g.b)({app:"management",pathname:"/insightsAndAlerting/triggersActions/alerts"},{hrefOnly:!0}),E=Object(n.useCallback)((()=>{s(!1)}),[s]),R=Object(n.useCallback)((()=>{s(!0)}),[s]),d=Object(n.useCallback)((()=>{c(!0),E()}),[c,E]),b=Object(n.useMemo)((()=>[o.a.createElement(_.EuiContextMenuItem,{disabled:!a,icon:"bell",key:"createLink",onClick:d,toolTipContent:a?void 0:L,toolTipTitle:a?void 0:m},o.a.createElement(A.FormattedMessage,{id:"xpack.infra.alerting.logs.createAlertButton",defaultMessage:"Create rule"})),o.a.createElement(_.EuiContextMenuItem,p()({icon:"tableOfContents",key:"manageLink"},u),o.a.createElement(A.FormattedMessage,{id:"xpack.infra.alerting.logs.manageAlerts",defaultMessage:"Manage rules"}))]),[u,a,d]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.EuiPopover,{panelPaddingSize:"none",button:o.a.createElement(_.EuiHeaderLink,{color:"text",iconSide:"right",iconType:"arrowDown",onClick:R},o.a.createElement(A.FormattedMessage,{id:"xpack.infra.alerting.logs.alertsButton",defaultMessage:"Alerts and rules"})),isOpen:i,closePopover:E},o.a.createElement(_.EuiContextMenuPanel,{items:b})),o.a.createElement(T,{setVisible:c,visible:l}))}},69:function(e,t,r){e.exports=r(23)(1074)},73:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return E}));var a=r(1),n=r(90),o=r(55),i=r(8);var s=r(29);const l=({app:e,pathname:t,hash:r,search:n},o={})=>{var l;u({app:e,pathname:t,hash:r,search:n});const{prompt:R}=Object(s.c)(),p=(()=>{var e;const t=null===(e=Object(i.useKibana)().services.application)||void 0===e?void 0:e.getUrlForApp;return Object(a.useMemo)((()=>{if(!t)throw new Error("Application core service is unavailable");return(e,r)=>t(e,{path:r})}),[t])})(),_=null===(l=Object(i.useKibana)().services.application)||void 0===l?void 0:l.navigateToApp,{hrefOnly:A}=o,d=Object(a.useMemo)((()=>n?c(n):void 0),[n]),T=Object(a.useMemo)((()=>r&&d?`${r}?${d}`:r),[r,d]),g=Object(a.useMemo)((()=>t&&d?`${t}?${d}`:t),[t,d]),f=Object(a.useMemo)((()=>p(e,`${null!=t?t:""}${r?"":d?`?${d}`:""}${T?`#${T}`:""}`)),[T,r,d,t,p,e]),L=Object(a.useMemo)((()=>t=>{if(!E(t))return;t.preventDefault();const r=()=>{if(_){const t=T?`#${T}`:g;_(e,{path:t||void 0})}};if(R){if(!window.confirm(R))return;r()}else r()}),[_,T,g,e,R]);return{href:f,onClick:A?void 0:L}},c=e=>Object(n.stringify)(o.url.encodeQuery(e),{sort:!1,encode:!1}),u=({app:e,pathname:t,hash:r,search:a})=>{if(!e&&r)throw new Error("The metrics and logs apps use browserHistory. Please provide a pathname rather than a hash.")},E=e=>{return!(e.defaultPrevented||(t=e,t.metaKey||t.altKey||t.ctrlKey||t.shiftKey));var t}},81:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return E})),r.d(t,"e",(function(){return _})),r.d(t,"l",(function(){return g})),r.d(t,"k",(function(){return f})),r.d(t,"h",(function(){return L})),r.d(t,"j",(function(){return U})),r.d(t,"g",(function(){return S})),r.d(t,"f",(function(){return N})),r.d(t,"i",(function(){return D}));var a=r(2),n=r(0);const o=n.type({_shards:n.type({total:n.number,successful:n.number,skipped:n.number,failed:n.number}),timed_out:n.boolean,took:n.number}),i="logs.alert.document.count";n.keyof({count:null,ratio:null});let s;!function(e){e.GT="more than",e.GT_OR_EQ="more than or equals",e.LT="less than",e.LT_OR_EQ="less than or equals",e.EQ="equals",e.NOT_EQ="does not equal",e.MATCH="matches",e.NOT_MATCH="does not match",e.MATCH_PHRASE="matches phrase",e.NOT_MATCH_PHRASE="does not match phrase"}(s||(s={}));const l=n.keyof({[s.GT]:null,[s.GT_OR_EQ]:null,[s.LT]:null,[s.LT_OR_EQ]:null,[s.EQ]:null,[s.NOT_EQ]:null,[s.MATCH]:null,[s.NOT_MATCH]:null,[s.MATCH_PHRASE]:null,[s.NOT_MATCH_PHRASE]:null}),c={[s.GT]:a.i18n.translate("xpack.infra.logs.alerting.comparator.gt",{defaultMessage:"more than"}),[s.GT_OR_EQ]:a.i18n.translate("xpack.infra.logs.alerting.comparator.gtOrEq",{defaultMessage:"more than or equals"}),[s.LT]:a.i18n.translate("xpack.infra.logs.alerting.comparator.lt",{defaultMessage:"less than"}),[s.LT_OR_EQ]:a.i18n.translate("xpack.infra.logs.alerting.comparator.ltOrEq",{defaultMessage:"less than or equals"}),[s.EQ]:a.i18n.translate("xpack.infra.logs.alerting.comparator.eq",{defaultMessage:"is"}),[s.NOT_EQ]:a.i18n.translate("xpack.infra.logs.alerting.comparator.notEq",{defaultMessage:"is not"}),[`${s.EQ}:number`]:a.i18n.translate("xpack.infra.logs.alerting.comparator.eqNumber",{defaultMessage:"equals"}),[`${s.NOT_EQ}:number`]:a.i18n.translate("xpack.infra.logs.alerting.comparator.notEqNumber",{defaultMessage:"does not equal"}),[s.MATCH]:a.i18n.translate("xpack.infra.logs.alerting.comparator.match",{defaultMessage:"matches"}),[s.NOT_MATCH]:a.i18n.translate("xpack.infra.logs.alerting.comparator.notMatch",{defaultMessage:"does not match"}),[s.MATCH_PHRASE]:a.i18n.translate("xpack.infra.logs.alerting.comparator.matchPhrase",{defaultMessage:"matches phrase"}),[s.NOT_MATCH_PHRASE]:a.i18n.translate("xpack.infra.logs.alerting.comparator.notMatchPhrase",{defaultMessage:"does not match phrase"})};let u;!function(e){e[e.OK=0]="OK",e[e.ALERT=1]="ALERT",e[e.NO_DATA=2]="NO_DATA",e[e.ERROR=3]="ERROR"}(u||(u={}));const E=n.type({comparator:l,value:n.number}),R=n.type({field:n.string,comparator:l,value:n.union([n.string,n.number])}),p=n.partial(R.props),_=n.array(R),A=n.array(p),d=n.tuple([_,_]),T=n.tuple([A,A]),g=(n.union([A,T]),n.union([n.literal("s"),n.literal("m"),n.literal("h"),n.literal("d")])),f=n.number,L=n.array(n.string),m=n.type({count:E,timeUnit:g,timeSize:f}),b=(n.partial(m.props),n.partial({groupBy:L})),y=n.intersection([n.type({criteria:_,...m.props}),n.partial({...b.props})]),O=n.intersection([n.type({criteria:A,...m.props}),n.partial({...b.props})]),h=n.intersection([n.type({criteria:d,...m.props}),n.partial({...b.props})]),k=n.intersection([n.type({criteria:T,...m.props}),n.partial({...b.props})]),U=(n.union([y,h]),n.union([O,k]),e=>!!(e.length>0&&Array.isArray(e[0]))),S=e=>e[0],N=e=>e[1],v=n.type({key:n.number,doc_count:n.number}),C=n.partial({histogramBuckets:n.type({buckets:n.array(v)})}),M=n.type({total:n.type({value:n.number})}),I=n.type({key:n.record(n.string,n.string),doc_count:n.number}),x=n.partial({after_key:n.record(n.string,n.string)}),j=(n.intersection([o,n.intersection([n.type({hits:M}),n.partial({aggregations:C})])]),n.intersection([o,n.type({aggregations:n.type({groups:n.intersection([n.type({buckets:n.array(n.type({...I.props,filtered_results:n.intersection([n.type({doc_count:n.number}),C])}))}),x])}),hits:M})])),P=n.intersection([o,n.type({aggregations:n.type({groups:n.intersection([n.type({buckets:n.array(n.intersection([I,C]))}),x])}),hits:M})]),D=(n.union([j,P]),(e,t)=>e===s.GT||"number"==typeof t&&e===s.GT_OR_EQ&&t>0)},90:function(e,t,r){"use strict";const a=r(118),n=r(119),o=r(120);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?a(e):encodeURIComponent(e):e}function l(e,t){return t.decode?n(e):e}function c(e){return Array.isArray(e)?e.sort():"object"==typeof e?c(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function E(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function R(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,a)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=r):a[e]=r};case"bracket":return(e,r,a)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],r):a[e]=[r]:a[e]=r};case"comma":case"separator":return(t,r,a)=>{const n="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===r?r:l(r,e);a[t]=n};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;for(const n of e.split("&")){let[e,i]=o(t.decode?n.replace(/\+/g," "):n,"=");i=void 0===i?null:["comma","separator"].includes(t.arrayFormat)?i:l(i,t),r(l(e,t),i,a)}for(const e of Object.keys(a)){const r=a[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=R(r[e],t);else a[e]=R(r,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce(((e,t)=>{const r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=c(r):e[t]=r,e}),Object.create(null))}t.extract=E,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],a=function(e){switch(e.arrayFormat){case"index":return t=>(r,a)=>{const n=r.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[s(t,e),"[",n,"]"].join("")]:[...r,[s(t,e),"[",s(n,e),"]=",s(a,e)].join("")]};case"bracket":return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(a,e)].join("")];case"comma":case"separator":return t=>(r,a)=>null==a||0===a.length?r:0===r.length?[[s(t,e),"=",s(a,e)].join("")]:[[r,s(a,e)].join(e.arrayFormatSeparator)];default:return t=>(r,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?r:null===a?[...r,s(t,e)]:[...r,[s(t,e),"=",s(a,e)].join("")]}}(t),n={};for(const t of Object.keys(e))r(t)||(n[t]=e[t]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const n=e[r];return void 0===n?"":null===n?s(r,t):Array.isArray(n)?n.reduce(a(r),[]).join("&"):s(r,t)+"="+s(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,a]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:p(E(e),t)},t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:l(a,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const a=u(e.url).split("?")[0]||"",n=t.extract(e.url),o=t.parse(n,{sort:!1}),i=Object.assign(o,e.query);let l=t.stringify(i,r);l&&(l=`?${l}`);let c=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${s(e.fragmentIdentifier,r)}`),`${a}${l}${c}`}}}]);