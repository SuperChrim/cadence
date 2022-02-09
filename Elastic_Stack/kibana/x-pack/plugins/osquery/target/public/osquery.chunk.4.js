/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.osquery_bundle_jsonpfunction=window.osquery_bundle_jsonpfunction||[]).push([[4],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"OsqueryManagedCustomButtonExtension",(function(){return s}));var a=n(11),i=n(0),l=n.n(i),u=n(67),r=n(68),c=n(30);const s=l.a.memo((()=>{const[e,t]=l.a.useState(null),{http:n}=Object(c.e)().services;return Object(i.useEffect)((()=>{n.get("/internal/osquery/status").then((e=>{t("installed"!==e.install_status)}))}),[n]),null===e?l.a.createElement(a.EuiLoadingContent,{lines:5}):l.a.createElement(l.a.Fragment,null,e?l.a.createElement(r.a,null):null,l.a.createElement(u.a,{isDisabled:e}))}));s.displayName="OsqueryManagedCustomButtonExtension"},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return i.KibanaContextProvider})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return i.FieldIcon}));var a=n(18),i=n(16);const l=()=>Object(i.useKibana)(),u=e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey),r=e=>0===e.button,c=(e,t)=>{const n=Object(a.useHistory)();return Object(i.reactRouterNavigate)(n,e,t)}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(11),i=n(12),l=n(0),u=n.n(l),r=n(1),c=n(30);const s=({isDisabled:e=!1,agentPolicyId:t})=>{const{application:{getUrlForApp:n,navigateToApp:s}}=Object(c.e)().services,o=Object(l.useMemo)((()=>n(r.PLUGIN_ID,{path:t?`/live_queries/new?agentPolicyId=${t}`:" `/live_queries/new"})),[t,n]),d=Object(l.useCallback)((e=>{!Object(c.d)(e)&&Object(c.c)(e)&&(e.preventDefault(),s(r.PLUGIN_ID,{path:t?`/live_queries/new?agentPolicyId=${t}`:" `/live_queries/new"}))}),[t,s]),m=n(r.PLUGIN_ID,{path:"/packs"}),p=Object(l.useCallback)((e=>{!Object(c.d)(e)&&Object(c.c)(e)&&(e.preventDefault(),s(r.PLUGIN_ID,{path:"/packs"}))}),[s]);return u.a.createElement(a.EuiFlexGroup,{gutterSize:"l"},u.a.createElement(a.EuiFlexItem,null,u.a.createElement(a.EuiCard,{icon:u.a.createElement(a.EuiIcon,{size:"xl",type:"console"}),title:i.i18n.translate("xpack.osquery.fleetIntegration.runLiveQueriesButtonText",{defaultMessage:"Run live queries"}),href:o,onClick:d,description:"",isDisabled:e})),u.a.createElement(a.EuiFlexItem,null,u.a.createElement(a.EuiCard,{icon:u.a.createElement(a.EuiIcon,{size:"xl",type:"clock"}),title:i.i18n.translate("xpack.osquery.fleetIntegration.packsButtonText",{defaultMessage:"Packs"}),description:"",isDisabled:e,href:m,onClick:p})))};s.displayName="NavigationButtonsComponent";const o=u.a.memo(s)},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),i=n.n(a),l=n(11),u=n(12);const r=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(l.EuiFlexGroup,null,i.a.createElement(l.EuiFlexItem,null,i.a.createElement(l.EuiCallOut,{title:u.i18n.translate("xpack.osquery.fleetIntegration.saveIntegrationCalloutTitle",{defaultMessage:"Save the integration to access the options below"}),iconType:"save"}))),i.a.createElement(l.EuiSpacer,null)),c=i.a.memo(r)}}]);