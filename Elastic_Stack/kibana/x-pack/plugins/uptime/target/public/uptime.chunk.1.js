/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[]).push([[1],{45:function(t,n,e){"use strict";e.d(n,"d",(function(){return s})),e.d(n,"e",(function(){return a})),e.d(n,"f",(function(){return u})),e.d(n,"k",(function(){return c})),e.d(n,"h",(function(){return p})),e.d(n,"g",(function(){return g})),e.d(n,"i",(function(){return d})),e.d(n,"r",(function(){return m})),e.d(n,"o",(function(){return l.g})),e.d(n,"q",(function(){return l.i})),e.d(n,"s",(function(){return l.j})),e.d(n,"b",(function(){return l.a})),e.d(n,"w",(function(){return l.n})),e.d(n,"x",(function(){return l.o})),e.d(n,"l",(function(){return l.d})),e.d(n,"v",(function(){return l.m})),e.d(n,"p",(function(){return l.h})),e.d(n,"m",(function(){return l.e})),e.d(n,"n",(function(){return l.f})),e.d(n,"y",(function(){return l.p})),e.d(n,"u",(function(){return l.l})),e.d(n,"t",(function(){return l.k})),e.d(n,"c",(function(){return l.b})),e.d(n,"j",(function(){return l.c})),e.d(n,"a",(function(){return y}));const r=864e5,i=7*r,s={DAY:r,EIGHT_MINUTES:48e4,FOUR_YEARS:192*i,THIRTY_SIX_HOURS:1296e5,THREE_WEEKS:3*i,SIX_MONTHS:169344e5,NINE_DAYS:9*r},a={ABSOLUTE_DATE_RANGE_START:0,ABSOLUTE_DATE_RANGE_END:9e5,AUTOREFRESH_INTERVAL:6e4,AUTOREFRESH_IS_PAUSED:!1,COMMONLY_USED_DATE_RANGES:[{start:"now/d",end:"now",label:"Today"},{start:"now/w",end:"now",label:"Week to date"},{start:"now/M",end:"now",label:"Month to date"},{start:"now/y",end:"now",label:"Year to date"}],DATE_RANGE_START:"now-15m",DATE_RANGE_END:"now",FOCUS_CONNECTOR_FIELD:!1,FILTERS:"",MONITOR_LIST_PAGE_INDEX:0,MONITOR_LIST_PAGE_SIZE:20,MONITOR_LIST_SORT_DIRECTION:"asc",MONITOR_LIST_SORT_FIELD:"monitor_id",SEARCH:"",STATUS_FILTER:""};var o=e(58);const u={BASE_PATH:"",CURSOR_PAGINATION:{cursorDirection:o.b.AFTER,sortOrder:o.k.ASC}},c=["apm","infrastructure","logs"],p="timepicker:quickRanges",g="theme:darkMode",d={heartbeatIndices:"heartbeat-7*,synthetics-*",certAgeThreshold:730,certExpirationThreshold:30,defaultConnectors:[]},m={DEFAULT_BUCKET_COUNT:25,DEFAULT_AGGS_CAP:1e4,SIMPLE_QUERY_STRING_FIELDS:["monitor.id","monitor.url","monitor.type","monitor.status","monitor.name","url.full","url.path","url.scheme","url.domain","error.type"]};var l=e(9);let y;!function(t){t.INDEX_STATUS="/api/uptime/index_status",t.MONITOR_LIST="/api/uptime/monitor/list",t.MONITOR_LOCATIONS="/api/uptime/monitor/locations",t.MONITOR_DURATION="/api/uptime/monitor/duration",t.MONITOR_DETAILS="/api/uptime/monitor/details",t.MONITOR_STATUS="/api/uptime/monitor/status",t.PINGS="/api/uptime/pings",t.PING_HISTOGRAM="/api/uptime/ping/histogram",t.SNAPSHOT_COUNT="/api/uptime/snapshot/count",t.LOG_PAGE_VIEW="/api/uptime/log_page_view",t.ML_MODULE_JOBS="/api/ml/modules/jobs_exist/",t.ML_SETUP_MODULE="/api/ml/modules/setup/",t.ML_DELETE_JOB="/api/ml/jobs/delete_jobs",t.ML_CAPABILITIES="/api/ml/ml_capabilities",t.ML_ANOMALIES_RESULT="/api/ml/results/anomalies_table_data",t.RULE_CONNECTORS="/api/actions/connectors",t.CREATE_RULE="/api/alerting/rule",t.DELETE_RULE="/api/alerting/rule/",t.RULES_FIND="/api/alerting/rules/_find",t.CONNECTOR_TYPES="/api/actions/connector_types"}(y||(y={}))},51:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(55),i=e.n(r),s=e(113),a=e(67),o=e(22);class ApiService{get http(){return this._http}set http(t){this._http=t}get addInspectorRequest(){return this._addInspectorRequest}set addInspectorRequest(t){this._addInspectorRequest=t}constructor(){i()(this,"_http",void 0),i()(this,"_addInspectorRequest",void 0)}static getInstance(){return ApiService.instance||(ApiService.instance=new ApiService),ApiService.instance}async get(t,n,e,r=!1){var i;const s=await this._http.fetch({path:t,query:n,asResponse:r});if(null===(i=this.addInspectorRequest)||void 0===i||i.call(this,{data:s,status:o.FETCH_STATUS.SUCCESS,loading:!1}),e){const n=e.decode(s);if(Object(a.isRight)(n))return n.right;console.error(`API ${t} is not returning expected response, ${u=n.left,u.map((t=>{if(null!=t.message)return t.message;{const n=t.context.filter((t=>null!=t.key&&!Number.isInteger(+t.key)&&""!==t.key.trim())).map((t=>t.key)).join("."),e=t.context.find((t=>{var n,e;return(null===(n=t.type)||void 0===n||null===(e=n.name)||void 0===e?void 0:e.length)>0})),r=""!==n?n:null!=e?e.type.name:"";return`Invalid value "${function(t){const n=typeof t;return null!=t&&("object"===n||"function"===n)}(t.value)?JSON.stringify(t.value):t.value}" supplied to "${r}"`}}))} for response`,s)}var u;return s}async post(t,n,e){const r=await this._http.post(t,{method:"POST",body:JSON.stringify(n)});if(e){const n=e.decode(r);if(Object(a.isRight)(n))return n.right;console.warn(`API ${t} is not returning expected response, ${s.PathReporter.report(n)}`)}return r}async delete(t){const n=await this._http.delete(t);if(n instanceof Error)throw n;return n}}i()(ApiService,"instance",void 0);const u=ApiService.getInstance()},55:function(t,n,e){t.exports=e(24)(1073)},58:function(t,n,e){"use strict";e.d(n,"a",(function(){return r.a})),e.d(n,"e",(function(){return r.b})),e.d(n,"l",(function(){return p})),e.d(n,"d",(function(){return d})),e.d(n,"c",(function(){return m})),e.d(n,"g",(function(){return y})),e.d(n,"h",(function(){return k})),e.d(n,"b",(function(){return U})),e.d(n,"k",(function(){return C})),e.d(n,"f",(function(){return _})),e.d(n,"i",(function(){return A})),e.d(n,"n",(function(){return D.e})),e.d(n,"o",(function(){return D.f})),e.d(n,"j",(function(){return M})),e.d(n,"m",(function(){return j}));var r=e(111),i=e(54);i.intersection([i.type({pageIndex:i.number}),i.partial({search:i.string,notValidBefore:i.string,notValidAfter:i.string,from:i.string,to:i.string,sortBy:i.string,direction:i.string,size:i.number})]);const s=i.partial({name:i.string,id:i.string,url:i.string}),a=i.intersection([i.type({monitors:i.array(s),sha256:i.string}),i.partial({not_after:i.string,not_before:i.string,common_name:i.string,issuer:i.string,sha1:i.string})]),o=(i.type({certs:i.array(a),total:i.number}),i.type({lat:i.string,lon:i.string})),u=i.intersection([i.type({name:i.string}),i.partial({location:o})]),c=i.partial({up:i.number,down:i.number,geo:u}),p=i.type({indexExists:i.boolean,docCount:i.number,indices:i.string}),g=i.type({from:i.string,to:i.string}),d=i.type({heartbeatIndices:i.string,certAgeThreshold:i.number,certExpirationThreshold:i.number,defaultConnectors:i.array(i.string)}),m=i.intersection([i.type({success:i.boolean}),i.partial({error:i.string})]),l=i.type({up_history:i.number,down_history:i.number,timestamp:i.string,summary:c,geo:u}),y=i.intersection([i.type({monitorId:i.string,up_history:i.number,down_history:i.number}),i.partial({locations:i.array(l)})]),b=i.intersection([i.partial({code:i.string,id:i.string,stack_trace:i.string,type:i.string}),i.type({message:i.string})]),_=i.intersection([i.type({monitorId:i.string}),i.partial({error:b,timestamp:i.string,alerts:i.unknown})]),f=i.partial({bytes:i.number,content:i.string,content_bytes:i.number,hash:i.string}),h=i.type({common_name:i.string,distinguished_name:i.string}),S=i.type({not_after:i.string,not_before:i.string}),E=i.intersection([i.type({issuer:h,subject:h,serial_number:i.string,public_key_algorithm:i.string,signature_algorithm:i.string}),S,i.partial({public_key_curve:i.string,public_key_exponent:i.number,public_key_size:i.number})]),T=i.partial({certificate_not_valid_after:i.string,certificate_not_valid_before:i.string,cipher:i.string,established:i.boolean,server:i.partial({hash:i.type({sha256:i.string,sha1:i.string}),x509:E})}),I=i.intersection([i.type({duration:i.type({us:i.number}),id:i.string,status:i.string,type:i.string}),i.partial({check_group:i.string,ip:i.string,name:i.string,timespan:i.type({gte:i.string,lt:i.string})})]),R=i.record(i.string,i.union([i.string,i.array(i.string)])),O=i.intersection([i.type({timestamp:i.string,monitor:I,docId:i.string}),i.partial({agent:i.intersection([i.type({ephemeral_id:i.string,id:i.string,type:i.string,version:i.string}),i.partial({name:i.string,hostname:i.string})]),container:i.partial({id:i.string,image:i.partial({name:i.string,tag:i.string}),name:i.string,runtime:i.string}),ecs:i.partial({version:i.string}),error:b,http:i.partial({request:i.partial({body:i.partial({bytes:i.number,content:i.partial({text:i.string})}),bytes:i.number,method:i.string,referrer:i.string}),response:i.partial({body:f,bytes:i.number,redirects:i.array(i.string),status_code:i.number,headers:R}),version:i.string}),icmp:i.partial({requests:i.number,rtt:i.partial({us:i.number})}),kubernetes:i.partial({pod:i.partial({name:i.string,uid:i.string})}),observer:i.partial({geo:i.partial({name:i.string,location:i.union([i.string,i.partial({lat:i.number,lon:i.number}),i.partial({lat:i.string,lon:i.string})])})}),resolve:i.partial({ip:i.string,rtt:i.partial({us:i.number})}),summary:i.partial({down:i.number,up:i.number}),synthetics:i.partial({index:i.number,journey:i.type({id:i.string,name:i.string}),error:i.partial({message:i.string,name:i.string,stack:i.string}),package_version:i.string,step:i.type({index:i.number,name:i.string}),type:i.string,blob:i.string,blob_mime:i.string,payload:i.partial({duration:i.number,index:i.number,is_navigation_request:i.boolean,message:i.string,method:i.string,name:i.string,params:i.partial({homepage:i.string}),source:i.string,start:i.number,status:i.string,ts:i.number,type:i.string,url:i.string,end:i.number,text:i.string})}),tags:i.array(i.string),tcp:i.partial({rtt:i.partial({connect:i.partial({us:i.number})})}),tls:T,url:i.partial({domain:i.string,full:i.string,port:i.number,scheme:i.string,path:i.string}),service:i.partial({name:i.string})})]),A=i.type({total:i.number,pings:i.array(O)}),v=(i.intersection([i.type({dateRange:g}),i.partial({excludedLocations:i.string,index:i.number,size:i.number,locations:i.string,monitorId:i.string,sort:i.string,status:i.string})]),i.intersection([i.type({timestamp:i.string,url:i.partial({domain:i.string,full:i.string,path:i.string,port:i.number,scheme:i.string}),summaryPings:i.array(O),summary:i.partial({status:i.string,up:i.number,down:i.number}),monitor:i.intersection([i.partial({name:i.string}),i.type({type:i.string})])}),i.partial({tls:i.partial({not_after:i.union([i.string,i.null]),not_before:i.union([i.string,i.null])}),observer:i.type({geo:i.type({name:i.array(i.string)})}),service:i.partial({name:i.string})})])),N=i.type({timestamp:i.number,up:i.union([i.number,i[void 0]]),down:i.union([i.number,i[void 0]])}),w=i.type({points:i.array(N)}),L=i.intersection([i.type({monitor_id:i.string,state:v}),i.partial({histogram:w,minInterval:i.number})]),k=i.intersection([i.partial({totalSummaryCount:i.number}),i.type({summaries:i.array(L),prevPagePagination:i.union([i.string,i.null]),nextPagePagination:i.union([i.string,i.null])})]);i.intersection([i.partial({pagination:i.string,filters:i.string,statusFilter:i.string,query:i.string}),i.type({dateRangeStart:i.string,dateRangeEnd:i.string,pageSize:i.number})]);let U,C;!function(t){t.AFTER="AFTER",t.BEFORE="BEFORE"}(U||(U={})),function(t){t.ASC="ASC",t.DESC="DESC"}(C||(C={}));var D=e(72);const M=i.type({down:i.number,total:i.number,up:i.number}),x=i.type({queueing:i.number,connect:i.number,total:i.number,send:i.number,blocked:i.number,receive:i.number,wait:i.number,dns:i.number,proxy:i.number,ssl:i.number}),P=i.partial({validFrom:i.string,validTo:i.string,issuer:i.string,subjectName:i.string}),G=i.intersection([i.type({timestamp:i.string,requestSentTime:i.number,loadEndTime:i.number,url:i.string}),i.partial({certificates:P,ip:i.string,method:i.string,status:i.number,mimeType:i.string,responseHeaders:i.record(i.string,i.string),requestHeaders:i.record(i.string,i.string),timings:x,transferSize:i.number,resourceSize:i.number})]),j=i.type({events:i.array(G),total:i.number,isWaterfallSupported:i.boolean,hasNavigationRequest:i.boolean})},61:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"e",(function(){return o})),e.d(n,"d",(function(){return u})),e.d(n,"i",(function(){return c})),e.d(n,"f",(function(){return p})),e.d(n,"j",(function(){return d})),e.d(n,"k",(function(){return m})),e.d(n,"a",(function(){return l.a})),e.d(n,"h",(function(){return y})),e.d(n,"g",(function(){return b})),e.d(n,"c",(function(){return _}));var r=e(58),i=e(51),s=e(45);const a=async({monitorId:t,dateStart:n,dateEnd:e})=>{const a={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(s.a.MONITOR_DETAILS,a,r.f)},o=async({monitorId:t,dateStart:n,dateEnd:e})=>{const a={dateStart:n,dateEnd:e,monitorId:t};return await i.a.get(s.a.MONITOR_LOCATIONS,a,r.g)},u=async t=>await i.a.get(s.a.MONITOR_LIST,t,r.h),c=async({dateRangeStart:t,dateRangeEnd:n,filters:e,query:a})=>{const o={dateRangeStart:t,dateRangeEnd:n,...e&&{filters:e},...a&&{query:a}};return await i.a.get(s.a.SNAPSHOT_COUNT,o,r.j)},p=async({monitorId:t,dateStart:n,dateEnd:e})=>{const r={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(s.a.MONITOR_STATUS,r)},g="/api/uptime/dynamic_settings",d=async()=>await i.a.get(g,void 0,r.d),m=async({settings:t})=>await i.a.post(g,t,r.c);var l=e(93);const y=async({dateRange:{from:t,to:n},...e})=>await i.a.get(s.a.PINGS,{from:t,to:n,...e},r.i),b=async({monitorId:t,dateStart:n,dateEnd:e,filters:r,bucketSize:a,query:o})=>{const u={dateStart:n,dateEnd:e,monitorId:t,filters:r,bucketSize:a,query:o};return await i.a.get(s.a.PING_HISTOGRAM,u)},_=async({monitorId:t,dateStart:n,dateEnd:e})=>{const r={monitorId:t,dateStart:n,dateEnd:e};return await i.a.get(s.a.MONITOR_DURATION,r)}},62:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(55),i=e.n(r),s=e(51);class KibanaService{get core(){return this._core}set core(t){this._core=t,s.a.http=this._core.http}get toasts(){return this._core.notifications.toasts}constructor(){i()(this,"_core",void 0)}static getInstance(){return KibanaService.instance||(KibanaService.instance=new KibanaService),KibanaService.instance}}i()(KibanaService,"instance",void 0);const a=KibanaService.getInstance()},72:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return a})),e.d(n,"e",(function(){return p})),e.d(n,"d",(function(){return d})),e.d(n,"f",(function(){return l})),e.d(n,"c",(function(){return y}));var r=e(67),i=e(54);const s=i.intersection([i.partial({monitor:i.partial({duration:i.type({us:i.number}),name:i.string,status:i.string,type:i.string,timespan:i.type({gte:i.string,lt:i.string})}),observer:i.partial({geo:i.type({name:i.string})}),synthetics:i.partial({error:i.partial({message:i.string,stack:i.string}),payload:i.partial({message:i.string,source:i.string,status:i.string,text:i.string}),step:i.type({index:i.number,name:i.string}),isFullScreenshot:i.boolean,isScreenshotRef:i.boolean})}),i.type({_id:i.string,"@timestamp":i.string,monitor:i.type({id:i.string,check_group:i.string}),synthetics:i.type({type:i.string})})]),a=i.type({checkGroups:i.array(i.string),steps:i.array(s)}),o=i.type({hash:i.string,top:i.number,left:i.number,height:i.number,width:i.number});i.type({synthetics:i.intersection([i.partial({blob:i.string,blob_mime:i.string}),i.type({step:i.type({name:i.string}),type:i.literal("step/screenshot")})])});const u=i.type({"@timestamp":i.string,monitor:i.type({check_group:i.string}),screenshot_ref:i.type({width:i.number,height:i.number,blocks:i.array(o)}),synthetics:i.type({package_version:i.string,step:i.type({name:i.string,index:i.number}),type:i.literal("step/screenshot_ref")})});const c=i.type({stepName:i.union([i.null,i.string]),maxSteps:i.number,src:i.string});function p(t){return Object(r.isRight)(c.decode(t))}const g=i.type({id:i.string,synthetics:i.type({blob:i.string,blob_mime:i.string})});function d(t){return Object(r.isRight)(g.decode(t))}const m=i.type({stepName:i.union([i.null,i.string]),maxSteps:i.number,ref:i.type({screenshotRef:u})});function l(t){return Object(r.isRight)(m.decode(t))}const y=i.intersection([i.type({checkGroup:i.string,steps:i.array(s)}),i.partial({details:i.union([i.intersection([i.type({timestamp:i.string,journey:s}),i.partial({next:i.type({timestamp:i.string,checkGroup:i.string}),previous:i.type({timestamp:i.string,checkGroup:i.string})})]),i.null])})])},93:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(45),i=e(58),s=e(51);const a=async()=>await s.a.get(r.a.INDEX_STATUS,void 0,i.l)}}]);