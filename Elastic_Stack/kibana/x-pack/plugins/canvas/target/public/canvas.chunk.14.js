/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.canvas_bundle_jsonpfunction=window.canvas_bundle_jsonpfunction||[]).push([[14],{57:function(e,r,t){"use strict";t.r(r),t.d(r,"ExpressionsService",(function(){return c.ExpressionsService})),t.d(r,"ServicesContext",(function(){return v})),t.d(r,"useServices",(function(){return a})),t.d(r,"withServices",(function(){return d})),t.d(r,"LegacyServicesProvider",(function(){return S})),t.d(r,"CanvasServiceProvider",(function(){return legacy_CanvasServiceProvider})),t.d(r,"services",(function(){return f})),t.d(r,"startLegacyServices",(function(){return h})),t.d(r,"stopServices",(function(){return l})),t.d(r,"searchService",(function(){return g})),t.d(r,"pluginServices",(function(){return p})),t.d(r,"useCustomElementService",(function(){return b})),t.d(r,"useEmbeddablesService",(function(){return k})),t.d(r,"useExpressionsService",(function(){return y})),t.d(r,"useLabsService",(function(){return w})),t.d(r,"useNavLinkService",(function(){return m})),t.d(r,"useNotifyService",(function(){return j})),t.d(r,"usePlatformService",(function(){return E})),t.d(r,"useReportingService",(function(){return H})),t.d(r,"useWorkpadService",(function(){return P}));var s=t(2),n=t.n(s);var c=t(8),i=t(20),o=t(21);const u={search:{}},v=Object(i.createContext)(u),a=()=>Object(i.useContext)(v),d=e=>r=>Object(i.createElement)(e,{...r,services:a()}),S=({providers:e={},children:r})=>{const t={search:{...f,...e}.search.getService()};return Object(o.jsx)(v.Provider,{value:t},r)};class legacy_CanvasServiceProvider{constructor(e){n()(this,"factory",void 0),n()(this,"service",void 0),this.factory=e}setService(e){this.service=e}async start(e,r,t,s,n){this.service=await this.factory(e,r,t,s,n)}getService(){if(!this.service)throw new Error("Service not ready");return this.service}stop(){this.service=void 0}}const f={search:new legacy_CanvasServiceProvider(((e,r,t,s)=>({search:s.data.search})))},h=async(e,r,t,s,n)=>{const c=Object.values(f).map((c=>c.start(e,r,t,s,n)));await Promise.all(c)},l=()=>{Object.values(f).forEach((e=>e.stop()))},{search:g}=f;const p=new(t(1).PluginServices),b=()=>p.getHooks().customElement.useService(),k=()=>p.getHooks().embeddables.useService(),y=()=>p.getHooks().expressions.useService(),w=()=>p.getHooks().labs.useService(),m=()=>p.getHooks().navLink.useService(),j=()=>p.getHooks().notify.useService(),E=()=>p.getHooks().platform.useService(),H=()=>p.getHooks().reporting.useService(),P=()=>p.getHooks().workpad.useService()}}]);