/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.osquery_bundle_jsonpfunction=window.osquery_bundle_jsonpfunction||[]).push([[6],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"OsqueryAction",(function(){return h})),n.d(t,"default",(function(){return v}));var a=n(15),i=n(11),l=n(0),o=n.n(l),r=n(31),s=n(1),u=n(87),c=n(104),d=n(30),m=n(69),E=n(57),p=n(52);const y=({metadata:e})=>{var t,n,r;const E=Object(d.e)().services.application.capabilities.osquery,y=null!==(t=null==e||null===(n=e.info)||void 0===n||null===(r=n.agent)||void 0===r?void 0:r.id)&&void 0!==t?t:void 0,{data:h,isFetched:g}=Object(u.a)({agentId:y,silent:!0,skip:!y}),{data:v,isFetched:b,isError:q,isLoading:O}=Object(c.b)({policyId:null==h?void 0:h.policy_id,skip:!h,silent:!0}),f=Object(l.useMemo)((()=>{if(q)return!1;const e=Object(a.find)(null==v?void 0:v.package_policies,["package.name",s.OSQUERY_INTEGRATION_NAME]);return null==e?void 0:e.enabled}),[null==v?void 0:v.package_policies,q]);return E.runSavedQueries||E.writeLiveQueries?g?!y||g&&!h?o.a.createElement(i.EuiEmptyPrompt,{icon:o.a.createElement(p.a,null),title:o.a.createElement("h2",null,"Osquery is not available"),titleSize:"xs",body:o.a.createElement("p",null,"An Elastic Agent is not installed on this host. To run queries, install Elastic Agent on the host, and then add the Osquery Manager integration to the agent policy in Fleet.")}):!b&&O?o.a.createElement(i.EuiLoadingContent,{lines:10}):f?"online"!==(null==h?void 0:h.status)?o.a.createElement(i.EuiEmptyPrompt,{icon:o.a.createElement(p.a,null),title:o.a.createElement("h2",null,"Osquery is not available"),titleSize:"xs",body:o.a.createElement("p",null,"To run queries on this host, the Elastic Agent must be active. Check the status of this agent in Fleet.")}):o.a.createElement(m.a,{formType:"simple",agentId:y}):o.a.createElement(i.EuiEmptyPrompt,{icon:o.a.createElement(p.a,null),title:o.a.createElement("h2",null,"Osquery is not available"),titleSize:"xs",body:o.a.createElement("p",null,"The Osquery Manager integration is not added to the agent policy. To run queries on the host, add the Osquery Manager integration to the agent policy in Fleet.")}):o.a.createElement(i.EuiLoadingContent,{lines:10}):o.a.createElement(i.EuiEmptyPrompt,{icon:o.a.createElement(p.a,null),title:o.a.createElement("h2",null,"Permissions denied"),titleSize:"xs",body:o.a.createElement("p",null,"To access this page, ask your administrator for ",o.a.createElement(i.EuiCode,null,"osquery")," Kibana privileges.")})},h=o.a.memo(y),g=({services:e,...t})=>o.a.createElement(d.b,{services:e},o.a.createElement(i.EuiErrorBoundary,null,o.a.createElement(r.QueryClientProvider,{client:E.a},o.a.createElement(h,t)))),v=o.a.memo(g)}}]);