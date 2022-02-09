/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.monitoring_bundle_jsonpfunction=window.monitoring_bundle_jsonpfunction||[]).push([[10],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"createLegacyAlertTypes",(function(){return j}));var r=n(35),a=n.n(r),i=n(11),l=n(2),o=n(14),s=n(13),c=n(0),u=n(41),d=n(39),b=n(40),f=n(12);const p=({alertParams:e,config:t,setAlertParams:n,data:r})=>{const{derivedIndexPattern:a}=Object(u.a)(r,t),l=Object(i.useCallback)((e=>{n("filterQueryText",e),n("filterQuery",Object(d.a)(e,a)||"")}),[n,a]),p=Object(i.useCallback)(Object(o.debounce)(l,500),[l]);return Object(f.jsx)(s.EuiForm,{component:"form"},Object(f.jsx)(s.EuiFormRow,{fullWidth:!0,label:c.i18n.translate("xpack.monitoring.alerts.filterLable",{defaultMessage:"Filter"}),helpText:c.i18n.translate("xpack.monitoring.alerts.filterHelpText",{defaultMessage:"Use a KQL expression to limit the scope of your alert trigger."})},Object(f.jsx)(b.a,{value:e.filterQueryText,derivedIndexPattern:a,onSubmit:l,onChange:p})),Object(f.jsx)(s.EuiSpacer,null))};function j(e){return l.A.map((t=>({id:t,description:l.B[t].description,iconClass:"bell",documentationUrl:e=>`${e.links.monitoring.alertsKibanaClusterAlerts}`,alertParamsExpression:t=>Object(f.jsx)(p,a()({},t,{config:e})),defaultActionMessage:"{{context.internalFullMessage}}",validate:()=>({errors:{}}),requiresAppContext:l.T})))}}}]);