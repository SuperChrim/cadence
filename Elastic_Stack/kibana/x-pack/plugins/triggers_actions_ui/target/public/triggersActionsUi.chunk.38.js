/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[38],{148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),c=n(1),o=r.__importDefault(n(149));t.default=function(e,t){var n=c.useState(t),r=n[0],u=n[1];return o.default((function(){var t=e.subscribe(u);return function(){return t.unsubscribe()}}),[e]),r}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.default=c},248:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return x})),n.d(t,"App",(function(){return h})),n.d(t,"AppWithoutRouter",(function(){return m}));var r=n(1),c=n(37),o=n(44),u=n(36),s=n(148),i=n.n(s),j=n(6),d=n(3),a=n(40),b=n(12),l=n(59),f=n(5);const O=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(35)]).then(n.bind(null,190)))),p=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(27)]).then(n.bind(null,246)))),x=e=>{const{element:t}=e;return Object(o.render)(Object(f.jsx)(h,{deps:e}),t),()=>{Object(o.unmountComponentAtNode)(t)}},h=({deps:e})=>{const{savedObjects:t,uiSettings:n}=e,r=i()(n.get$("theme:darkMode")),o=["rules","connectors"].join("|");return Object(b.e)(t.client),Object(f.jsx)(u.I18nProvider,null,Object(f.jsx)(a.EuiThemeProvider,{darkMode:r},Object(f.jsx)(l.a,{services:{...e}},Object(f.jsx)(c.Router,{history:e.history},Object(f.jsx)(m,{sectionsRegex:o})))))},m=({sectionsRegex:e})=>Object(f.jsx)(c.Switch,null,Object(f.jsx)(c.Route,{path:`/:section(${e})`,component:Object(d.a)(O,"xl")}),Object(f.jsx)(c.Route,{path:j.l,component:Object(d.a)(p,"xl")}),Object(f.jsx)(c.Route,{exact:!0,path:j.h,render:({match:e})=>Object(f.jsx)(c.Redirect,{to:`/rule/${e.params.alertId}`})}),Object(f.jsx)(c.Redirect,{from:"/",to:"rules"}),Object(f.jsx)(c.Redirect,{from:"/alerts",to:"rules"}))},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.KibanaContextProvider})),n.d(t,"b",(function(){return c}));var r=n(35);const c=()=>Object(r.useKibana)()}}]);