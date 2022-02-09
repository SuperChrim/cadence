/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,s,r=t[0],o=t[1],a=0,d=[];a<r.length;a++)s=r[a],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(c&&c(t);d.length;)d.shift()()}var n={},i={1:0};function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,s){n=i[e]=[t,s]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+"uiActionsEnhanced.chunk."+e+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,n[1](c)}i[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var r=window.uiActionsEnhanced_bundle_jsonpfunction=window.uiActionsEnhanced_bundle_jsonpfunction||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var c=o;s(s.s=18)}([function(e,t,n){e.exports=n(10)(1073)},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";function i(e){if(!e.parent)return!1;const t=e.parent;return!!t.getInput().panels[e.id]&&void 0===t.getInput().panels[e.id].explicitInput.timeRange}n.d(t,"a",(function(){return i}))},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,s=n;return[s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]]].join("")}},function(e,t,n){e.exports=n(10)(1074)},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){var i=n(20),s=n(21),r=s;r.v1=i,r.v4=s,e.exports=r},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaUtils/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n(19),__kbnBundles__.define("plugin/uiActionsEnhanced/public",n,22)},function(e,t,n){n.p=window.__kbnPublicPath__.uiActionsEnhanced},function(e,t,n){var i,s,r=n(12),o=n(13),a=0,c=0;e.exports=function(e,t,n){var d=t&&n||0,l=t||[],u=(e=e||{}).node||i,h=void 0!==e.clockseq?e.clockseq:s;if(null==u||null==h){var g=r();null==u&&(u=i=[1|g[0],g[1],g[2],g[3],g[4],g[5]]),null==h&&(h=s=16383&(g[6]<<8|g[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:c+1,p=m-a+(f-c)/1e4;if(p<0&&void 0===e.clockseq&&(h=h+1&16383),(p<0||m>a)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=m,c=f,s=h;var v=(1e4*(268435455&(m+=122192928e5))+f)%4294967296;l[d++]=v>>>24&255,l[d++]=v>>>16&255,l[d++]=v>>>8&255,l[d++]=255&v;var y=m/4294967296*1e4&268435455;l[d++]=y>>>8&255,l[d++]=255&y,l[d++]=y>>>24&15|16,l[d++]=y>>>16&255,l[d++]=h>>>8|128,l[d++]=255&h;for(var b=0;b<6;++b)l[d+b]=u[b];return t||o(l)}},function(e,t,n){var i=n(12),s=n(13);e.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[r+a]=o[a];return t||s(o)}},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return N})),n.d(t,"Plugin",(function(){return plugin_AdvancedUiActionsPublicPlugin})),n.d(t,"UiActionsEnhancedActionFactory",(function(){return action_factory_ActionFactory})),n.d(t,"UiActionsEnhancedAbstractActionStorage",(function(){return dynamic_action_storage_AbstractActionStorage})),n.d(t,"UiActionsEnhancedDynamicActionManager",(function(){return dynamic_action_manager_DynamicActionManager})),n.d(t,"UiActionsEnhancedMemoryActionStorage",(function(){return MemoryActionStorage})),n.d(t,"urlDrilldownCompileUrl",(function(){return M})),n.d(t,"UrlDrilldownCollectConfig",(function(){return k})),n.d(t,"urlDrilldownGlobalScopeProvider",(function(){return P})),n.d(t,"urlDrilldownValidateUrl",(function(){return O})),n.d(t,"urlDrilldownValidateUrlTemplate",(function(){return T}));var i=n(0),s=n.n(i),r=n(5),o=n(4),a=n(15),c=n(9),d=n(3),l=n(2),u=n(6),h=n(1);const g="CUSTOM_TIME_RANGE";function m(e){return void 0!==e.getInput().timeRange}function f(e){return"visualization"===e.type}class custom_time_range_action_CustomTimeRangeAction{constructor({openModal:e,dateFormat:t,commonlyUsedRanges:n}){s()(this,"type",g),s()(this,"openModal",void 0),s()(this,"dateFormat",void 0),s()(this,"commonlyUsedRanges",void 0),s()(this,"id",g),s()(this,"order",30),this.openModal=e,this.dateFormat=t,this.commonlyUsedRanges=n}getDisplayName(){return d.i18n.translate("xpack.uiActionsEnhanced.customizeTimeRangeMenuItem.displayName",{defaultMessage:"Customize time range"})}getIconType(){return"calendar"}async isCompatible({embeddable:e}){const t=f(e)&&"input_control_vis"===e.getOutput().visTypeName,n=f(e)&&"markdown"===e.getOutput().visTypeName;return Boolean(e&&e.parent&&m(e)&&!t&&!n)}async execute({embeddable:e}){if(!await this.isCompatible({embeddable:e}))throw new u.IncompatibleActionError;if(m(e)){const t=await n.e(0).then(n.bind(null,85)).then((e=>e.CustomizeTimeRangeModal)),i=this.openModal(Object(h.jsx)(t,{onClose:()=>i.close(),embeddable:e,dateFormat:this.dateFormat,commonlyUsedRanges:this.commonlyUsedRanges}),{"data-test-subj":"customizeTimeRangeModal"})}}}var p=n(7),v=n(11);const y="CUSTOM_TIME_RANGE_BADGE";function b(e){return void 0!==e.getInput().timeRange}class custom_time_range_badge_CustomTimeRangeBadge{constructor({openModal:e,dateFormat:t,commonlyUsedRanges:n}){s()(this,"type",y),s()(this,"id",y),s()(this,"order",7),s()(this,"openModal",void 0),s()(this,"dateFormat",void 0),s()(this,"commonlyUsedRanges",void 0),this.openModal=e,this.dateFormat=t,this.commonlyUsedRanges=n}getDisplayName({embeddable:e}){return Object(p.prettyDuration)(e.getInput().timeRange.from,e.getInput().timeRange.to,p.commonDurationRanges,this.dateFormat)}getIconType(){return"calendar"}async isCompatible({embeddable:e}){return Boolean(e&&b(e)&&!Object(v.a)(e))}async execute({embeddable:e}){if(!await this.isCompatible({embeddable:e}))throw new u.IncompatibleActionError;if(b(e)){const t=await n.e(0).then(n.bind(null,85)).then((e=>e.CustomizeTimeRangeModal)),i=this.openModal(Object(h.jsx)(t,{onClose:()=>i.close(),embeddable:e,dateFormat:this.dateFormat,commonlyUsedRanges:this.commonlyUsedRanges}),{"data-test-subj":"customizeTimeRangeModal"})}}}class action_factory_ActionFactory{constructor(e,t){var n;if(s()(this,"id",void 0),s()(this,"isBeta",void 0),s()(this,"minimalLicense",void 0),s()(this,"licenseFeatureName",void 0),s()(this,"order",void 0),s()(this,"MenuItem",void 0),s()(this,"ReactMenuItem",void 0),s()(this,"CollectConfig",void 0),s()(this,"ReactCollectConfig",void 0),s()(this,"createConfig",void 0),s()(this,"isConfigValid",void 0),s()(this,"migrations",void 0),this.def=e,this.deps=t,e.minimalLicense&&!e.licenseFeatureName)throw new Error(`ActionFactory [actionFactory.id = ${e.id}] "licenseFeatureName" is required, if "minimalLicense" is provided`);this.id=this.def.id,this.isBeta=null!==(n=this.def.isBeta)&&void 0!==n&&n,this.minimalLicense=this.def.minimalLicense,this.licenseFeatureName=this.def.licenseFeatureName,this.order=this.def.order||0,this.MenuItem=this.def.MenuItem,this.ReactMenuItem=this.MenuItem?Object(o.uiToReactComponent)(this.MenuItem):void 0,this.CollectConfig=this.def.CollectConfig,this.ReactCollectConfig=Object(o.uiToReactComponent)(this.CollectConfig),this.createConfig=this.def.createConfig,this.isConfigValid=this.def.isConfigValid,this.migrations=this.def.migrations||{}}getIconType(e){if(this.def.getIconType)return this.def.getIconType(e)}getDisplayName(e){return this.def.getDisplayName?this.def.getDisplayName(e):""}getDisplayNameTooltip(e){return""}async isCompatible(e){return!this.def.isCompatible||await this.def.isCompatible(e)}isCompatibleLicense(){if(!this.minimalLicense||!this.deps.getLicense)return!0;const e=this.deps.getLicense();return e.isAvailable&&e.isActive&&e.hasAtLeast(this.minimalLicense)}create(e){const t=this.def.create(e);return{...t,isCompatible:async e=>!!this.isCompatibleLicense()&&(!t.isCompatible||t.isCompatible(e)),execute:async e=>(this.notifyFeatureUsage(),t.execute(e))}}supportedTriggers(){return this.def.supportedTriggers()}notifyFeatureUsage(){this.minimalLicense&&this.licenseFeatureName&&this.deps.getFeatureUsageStart&&this.deps.getFeatureUsageStart().notifyUsage(this.licenseFeatureName).catch((()=>{console.warn(`ActionFactory [actionFactory.id = ${this.def.id}] fail notify feature usage.`)}))}telemetry(e,t){return this.def.telemetry?this.def.telemetry(e,t):t}extract(e){return this.def.extract?this.def.extract(e):{state:e,references:[]}}inject(e,t){return this.def.inject?this.def.inject(e,t):e}}class dynamic_action_storage_AbstractActionStorage{constructor(){s()(this,"reload$",new r.Subject)}async count(){return(await this.list()).length}async read(e){const t=(await this.list()).find((t=>t.eventId===e));if(!t)throw new Error(`Event [eventId = ${e}] not found.`);return t}}class MemoryActionStorage extends dynamic_action_storage_AbstractActionStorage{constructor(e=[]){super(),this.events=e}async list(){return this.events.map((e=>({...e})))}async create(e){this.events=[...this.events,{...e}]}async update(e){const t=this.events.findIndex((({eventId:t})=>t===e.eventId));if(t<0)throw new Error(`Event [eventId = ${e.eventId}] not found`);this.events=[...this.events.slice(0,t),{...e},...this.events.slice(t+1)]}async remove(e){const t=this.events.findIndex((t=>e===t.eventId));if(t<0)throw new Error(`Event [eventId = ${e}] not found`);this.events=[...this.events.slice(0,t),...this.events.slice(t+1)]}}const _={isFetchingEvents:!1,fetchCount:0,events:[]},w={startFetching:e=>()=>({...e,isFetchingEvents:!0}),finishFetching:e=>t=>({...e,isFetchingEvents:!1,fetchCount:e.fetchCount+1,fetchError:void 0,events:t}),failFetching:e=>({message:t})=>({...e,isFetchingEvents:!1,fetchCount:e.fetchCount+1,fetchError:{message:t}}),addEvent:e=>t=>({...e,events:[...e.events,t]}),removeEvent:e=>t=>({...e,events:e.events?e.events.filter((e=>e.eventId!==t)):e.events}),replaceEvent:e=>t=>{const n=e.events.findIndex((({eventId:e})=>e===t.eventId));return-1===n?e:{...e,events:[...e.events.slice(0,n),t,...e.events.slice(n+1)]}}},A={getEvent:e=>t=>e.events.find((e=>e.eventId===t))||null};var E=n(16),C=n(17);const I=[{id:"dynamicActions",getDisplayName:()=>d.i18n.translate("xpack.uiActionsEnhanced.CustomActions",{defaultMessage:"Custom actions"}),getIconType:()=>"symlink",order:26}];class dynamic_action_manager_DynamicActionManager{constructor(e){s()(this,"idPrefix",`D_ACTION_${dynamic_action_manager_DynamicActionManager.idPrefixCounter++}_`),s()(this,"stopped",!1),s()(this,"reloadSubscription",void 0),s()(this,"ui",Object(C.createStateContainer)(_,w,A)),s()(this,"syncId",0),s()(this,"onSync",(()=>{this.stopped||(async()=>{const e=++this.syncId,t=await this.params.storage.list();if(!this.stopped&&e===this.syncId&&!((e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n].eventId!==t[n].eventId)return!1;return!0})(t,this.ui.get().events)){for(const e of this.ui.get().events)this.killAction(e);for(const e of t)this.reviveAction(e);this.ui.transitions.finishFetching(t)}})().catch((e=>{console.log("Dynamic action manager storage reload failed."),console.error(e)}))})),s()(this,"state",this.ui),this.params=e}getEvent(e){const t=this.ui.selectors.getEvent(e);if(!t)throw new Error(`Could not find event [eventId = ${e}].`);return t}generateActionId(e){return this.idPrefix+e}reviveAction(e){const{eventId:t,triggers:n,action:i}=e,{uiActions:s,isCompatible:r}=this.params,o=this.generateActionId(t);if(!s.hasActionFactory(i.factoryId))return void console.warn(`Action factory for action [action.factoryId = ${i.factoryId}] doesn't exist. Skipping action [action.name = ${i.name}] revive.`);const a=s.getActionFactory(e.action.factoryId),c=a.create(i);s.registerAction({...c,id:o,grouping:I,isCompatible:async e=>!!await r(e)&&(!c.isCompatible||c.isCompatible(e))});const d=a.supportedTriggers();for(const e of n){if(!d.includes(e))throw new Error(`Can't attach [action=${o}] to [trigger=${e}]. Supported triggers for this action: ${d.join(",")}`);s.attachAction(e,o)}}killAction({eventId:e,triggers:t}){const{uiActions:n}=this.params,i=this.generateActionId(e);if(n.hasAction(i)){for(const e of t)n.detachAction(e,i);n.unregisterAction(i)}}async start(){if(!this.stopped&&!this.ui.get().isFetchingEvents){this.ui.transitions.startFetching();try{const e=await this.params.storage.list();for(const t of e)this.reviveAction(t);this.ui.transitions.finishFetching(e)}catch(e){throw this.ui.transitions.failFetching(e instanceof Error?e:{message:String(e)}),e}this.params.storage.reload$&&(this.reloadSubscription=this.params.storage.reload$.subscribe(this.onSync))}}async stop(){this.stopped=!0;const e=await this.params.storage.list();for(const t of e)this.killAction(t);this.reloadSubscription&&this.reloadSubscription.unsubscribe()}async createEvent(e,t){if(!t.length)throw new Error("No triggers selected for event.");const n={eventId:Object(E.v4)(),triggers:t,action:e};this.ui.transitions.addEvent(n);try{await this.params.storage.create(n),this.reviveAction(n)}catch(e){throw this.ui.transitions.removeEvent(n.eventId),e}}async updateEvent(e,t,n){const i={eventId:e,triggers:n,action:t},s=this.getEvent(e);this.killAction(s),this.reviveAction(i),this.ui.transitions.replaceEvent(i);try{await this.params.storage.update(i)}catch(e){throw this.killAction(i),this.reviveAction(s),this.ui.transitions.replaceEvent(s),e}}async deleteEvent(e){const t=this.getEvent(e);this.killAction(t),this.ui.transitions.removeEvent(e);try{await this.params.storage.remove(e)}catch(e){throw this.reviveAction(t),this.ui.transitions.addEvent(t),e}}async deleteEvents(e){await Promise.all(e.map(this.deleteEvent.bind(this)))}}s()(dynamic_action_manager_DynamicActionManager,"idPrefixCounter",0);class ui_actions_service_enhancements_UiActionsServiceEnhancements{constructor({actionFactories:e=new Map,...t}){s()(this,"actionFactories",void 0),s()(this,"deps",void 0),s()(this,"registerActionFactory",(e=>{if(this.actionFactories.has(e.id))throw new Error(`ActionFactory [actionFactory.id = ${e.id}] already registered.`);const t=new action_factory_ActionFactory(e,this.deps);this.actionFactories.set(t.id,t),this.registerFeatureUsage(e)})),s()(this,"getActionFactory",(e=>{const t=this.actionFactories.get(e);if(!t)throw new Error(`Action factory [actionFactoryId = ${e}] does not exist.`);return t})),s()(this,"hasActionFactory",(e=>this.actionFactories.has(e))),s()(this,"getActionFactories",(()=>[...this.actionFactories.values()])),s()(this,"registerDrilldown",(({id:e,isBeta:t,order:n,CollectConfig:i,createConfig:s,isConfigValid:r,getDisplayName:o,euiIcon:a,execute:c,getHref:d,minimalLicense:l,licenseFeatureName:u,supportedTriggers:h,isCompatible:g,telemetry:m,extract:f,inject:p})=>{const v={id:e,isBeta:t,minimalLicense:l,licenseFeatureName:u,order:n,CollectConfig:i,createConfig:s,isConfigValid:r,getDisplayName:o,supportedTriggers:h,telemetry:m,extract:f,inject:p,getIconType:()=>a,isCompatible:async()=>!0,create:t=>({id:"",type:e,getIconType:()=>a,getDisplayName:()=>t.name,execute:async e=>await c(t.config,e),getHref:d?async e=>d(t.config,e):void 0,isCompatible:g?async e=>g(t.config,e):void 0})};this.registerActionFactory(v)})),s()(this,"registerFeatureUsage",(e=>{e.minimalLicense&&e.licenseFeatureName&&this.deps.featureUsageSetup.register(e.licenseFeatureName,e.minimalLicense)})),s()(this,"telemetry",((e,t={})=>{let n=t;return e.events.forEach((e=>{this.actionFactories.has(e.action.factoryId)&&(n=this.actionFactories.get(e.action.factoryId).telemetry(e,n))})),n})),s()(this,"extract",(e=>{const t=[];return{state:{events:e.events.map((e=>{const n=this.actionFactories.has(e.action.factoryId)?this.actionFactories.get(e.action.factoryId).extract(e):{state:e,references:[]};return t.push(...n.references),n.state}))},references:t}})),s()(this,"inject",((e,t)=>({events:e.events.map((e=>this.actionFactories.has(e.action.factoryId)?this.actionFactories.get(e.action.factoryId).inject(e,t):e))}))),this.actionFactories=e,this.deps=t}}var F=n(14),x=n.n(F);const j=l.lazy((()=>n.e(3).then(n.bind(null,87)).then((e=>({default:e.DrilldownManagerWithProvider})))));var S=n(8);class plugin_AdvancedUiActionsPublicPlugin{getLicenseInfo(){if(!this.licenseInfo.getValue())throw new Error("AdvancedUiActionsPublicPlugin: License is not ready! License becomes available only after setup.");return this.licenseInfo.getValue()}constructor(e){s()(this,"licenseInfo",new r.BehaviorSubject(void 0)),s()(this,"enhancements",void 0),s()(this,"subs",[])}setup(e,{embeddable:t,uiActions:n,licensing:i}){const s=Object(S.createStartServicesGetter)(e.getStartServices);var r;return this.enhancements=new ui_actions_service_enhancements_UiActionsServiceEnhancements({getLicense:()=>this.getLicenseInfo(),featureUsageSetup:i.featureUsage,getFeatureUsageStart:()=>s().plugins.licensing.featureUsage}),t.registerEnhancement((r=this.enhancements,{id:"dynamicActions",telemetry:(e,t)=>r.telemetry(e,t),extract:e=>r.extract(e),inject:(e,t)=>r.inject(e,t)})),{...n,...this.enhancements}}start(e,{uiActions:t,licensing:n}){var i;this.subs.push(n.license$.subscribe(this.licenseInfo));const s=e.uiSettings.get("dateFormat"),r=e.uiSettings.get(a.UI_SETTINGS.TIMEPICKER_QUICK_RANGES),{openModal:d}=Object(o.createReactOverlays)(e),u=new custom_time_range_action_CustomTimeRangeAction({openModal:d,dateFormat:s,commonlyUsedRanges:r});t.addTriggerAction(c.CONTEXT_MENU_TRIGGER,u);const g=new custom_time_range_badge_CustomTimeRangeBadge({openModal:d,dateFormat:s,commonlyUsedRanges:r});return t.addTriggerAction(c.PANEL_BADGE_TRIGGER,g),{...t,...this.enhancements,DrilldownManager:(m={actionFactories:this.enhancements.getActionFactories(),getTrigger:e=>t.getTrigger(e),storage:new S.Storage(null===(i=window)||void 0===i?void 0:i.localStorage),toastService:e.notifications.toasts,docsLink:e.docLinks.links.dashboard.drilldowns,triggerPickerDocsLink:e.docLinks.links.dashboard.drilldownsTriggerPicker},e=>Object(h.jsx)(l.Suspense,{fallback:null},Object(h.jsx)(j,x()({},m,e))))};var m}stop(){this.subs.forEach((e=>e.unsubscribe()))}}const R=l.lazy((()=>n.e(4).then(n.bind(null,88)).then((({UrlDrilldownCollectConfig:e})=>({default:e}))))),k=e=>Object(h.jsx)(l.Suspense,{fallback:null},Object(h.jsx)(R,e));async function M(e,t,i=!0){let s=(await n.e(2).then(n.bind(null,86)).then((e=>e.handlebars))).compile(e,{strict:!0,noEscape:!0})(t);return i&&(s=encodeURI(s)),s}const U=d.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownValidation.urlFormatGeneralErrorMessage",{defaultMessage:"Invalid format. Example: {exampleUrl}",values:{exampleUrl:"https://www.my-url.com/?{{event.key}}={{event.value}}"}}),D=/^(?:(?:https?|mailto):|[^&:/?#]*(?:[/?#]|$))/gi;function O(e){if(!e)return{isValid:!1,error:U};try{if(new URL(e),!e.match(D))throw new Error;return{isValid:!0}}catch(e){return{isValid:!1,error:U}}}async function T(e,t){if(!e.template)return{isValid:!1,error:U};try{return O(await M(e.template,t))}catch(e){return{isValid:!1,error:(n=e.message,d.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownValidation.urlFormatErrorMessage",{defaultMessage:"Invalid format: {message}",values:{message:n}}))}}var n}function P({core:e}){return()=>({kibanaUrl:window.location.origin+e.http.basePath.get()})}function N(e){return new plugin_AdvancedUiActionsPublicPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t){e.exports=__kbnSharedDeps__.RisonNode},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t){e.exports=__kbnSharedDeps__.ElasticNumeral}]);