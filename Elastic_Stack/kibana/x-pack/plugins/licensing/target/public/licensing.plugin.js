/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=9)}([function(e,t,s){e.exports=s(11)(1073)},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,s){s.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,s){s(10),__kbnBundles__.define("plugin/licensing/public",s,13)},function(e,t,s){s.p=window.__kbnPublicPath__.licensing},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,s){"use strict";s.r(t),s.d(t,"plugin",(function(){return b}));var i=s(0),n=s.n(i),r=s(1),a=s(2);var o=s(4);let c;!function(e){e[e.basic=10]="basic",e[e.standard=20]="standard",e[e.gold=30]="gold",e[e.platinum=40]="platinum",e[e.enterprise=50]="enterprise",e[e.trial=60]="trial"}(c||(c={}));class license_License{static fromJSON(e){return new license_License(e)}constructor({license:e,features:t,error:s,signature:i}){n()(this,"license",void 0),n()(this,"features",void 0),n()(this,"error",void 0),n()(this,"isActive",void 0),n()(this,"isAvailable",void 0),n()(this,"uid",void 0),n()(this,"status",void 0),n()(this,"expiryDateInMillis",void 0),n()(this,"type",void 0),n()(this,"mode",void 0),n()(this,"signature",void 0),this.isAvailable=Boolean(e),this.license=e,this.features=t,this.error=s,this.signature=i,e&&(this.uid=e.uid,this.status=e.status,this.expiryDateInMillis=e.expiryDateInMillis,this.type=e.type,this.mode=e.mode),this.isActive="active"===this.status}toJSON(){return{license:this.license,features:this.features,signature:this.signature}}getUnavailableReason(){return this.error?this.error:this.isAvailable?void 0:"X-Pack plugin is not installed on the Elasticsearch cluster."}hasAtLeast(e){const t=this.type;if(!t)return!1;if(!(e in c))throw new Error(`"${e}" is not a valid license type`);return c[e]<=c[t]}check(e,t){return this.isAvailable?this.isActive?this.hasAtLeast(t)?{state:"valid"}:{state:"invalid",message:o.i18n.translate("xpack.licensing.check.errorUnsupportedMessage",{defaultMessage:"Your {licenseType} license does not support {pluginName}. Please upgrade your license.",values:{licenseType:this.type,pluginName:e}})}:{state:"expired",message:o.i18n.translate("xpack.licensing.check.errorExpiredMessage",{defaultMessage:"You cannot use {pluginName} because your {licenseType} license has expired.",values:{licenseType:this.type,pluginName:e}})}:{state:"unavailable",message:o.i18n.translate("xpack.licensing.check.errorUnavailableMessage",{defaultMessage:"You cannot use {pluginName} because license information is not available at this time.",values:{pluginName:e}})}}getFeature(e){return this.isAvailable&&this.features&&this.features.hasOwnProperty(e)?{...this.features[e]}:{isAvailable:!1,isEnabled:!1}}}s(12);var u=s(6),l=s(5),p=s(7),h=s(3);const d=e=>Object(h.jsx)(u.EuiCallOut,{iconType:"help",color:"warning","data-test-subj":"licenseExpiredBanner",title:Object(h.jsx)(l.FormattedMessage,{id:"xpack.licensing.welcomeBanner.licenseIsExpiredTitle",defaultMessage:"Your {licenseType} license is expired",values:{licenseType:e.type}})},Object(h.jsx)(l.FormattedMessage,{id:"xpack.licensing.welcomeBanner.licenseIsExpiredDescription",defaultMessage:"Contact your administrator or {updateYourLicenseLinkText} directly.",values:{updateYourLicenseLinkText:Object(h.jsx)("a",{href:e.uploadUrl},Object(h.jsx)(l.FormattedMessage,{id:"xpack.licensing.welcomeBanner.licenseIsExpiredDescription.updateYourLicenseLinkText",defaultMessage:"update your license"}))}}));var g=s(8);class feature_usage_service_FeatureUsageService{constructor(){n()(this,"registrations",[])}setup(){return{register:async(e,t)=>{this.registrations.push({featureName:e,licenseType:t})}}}start({http:e}){const t=e.anonymousPaths.isAnonymous(window.location.pathname)||0===this.registrations.length?Promise.resolve():e.post("/internal/licensing/feature_usage/register",{body:JSON.stringify(this.registrations)});return{notifyUsage:async(s,i=Date.now())=>{if(e.anonymousPaths.isAnonymous(window.location.pathname))return;await t;const n=Object(g.isDate)(i)?i.getTime():i;await e.post("/internal/licensing/feature_usage/notify",{body:JSON.stringify({featureName:s,lastUsed:n})})}}}}const f="xpack.licensing";class plugin_LicensingPlugin{constructor(e,t=sessionStorage){n()(this,"stop$",new r.Subject),n()(this,"removeInterceptor",void 0),n()(this,"internalSubscription",void 0),n()(this,"isLicenseExpirationBannerShown",!1),n()(this,"infoEndpoint","/api/licensing/info"),n()(this,"coreStart",void 0),n()(this,"prevSignature",void 0),n()(this,"refresh",void 0),n()(this,"license$",void 0),n()(this,"featureUsage",new feature_usage_service_FeatureUsageService),n()(this,"fetchLicense",(async e=>{try{const t=await e.http.get({path:this.infoEndpoint,asSystemRequest:!0});return new license_License({license:t.license,features:t.features,signature:t.signature})}catch(e){return new license_License({error:e.message,signature:""})}})),this.storage=t}getSaved(){const e=this.storage.getItem(f);if(e)return license_License.fromJSON(JSON.parse(e))}save(e){this.storage.setItem(f,JSON.stringify(e))}removeSaved(){this.storage.removeItem(f)}setup(e){const t=new r.Subject,{license$:s,refreshManually:i}=function(e,t,s,i){const n=new r.Subject,o=Object(r.merge)(e,n).pipe(Object(a.exhaustMap)(s),Object(a.share)()),c=o.pipe(Object(a.takeUntil)(t),Object(a.publishReplay)(1)),u=c.connect();t.subscribe({complete:()=>u.unsubscribe()});const l=i?Object(r.from)([void 0,i]):Object(r.from)([void 0]);return{license$:Object(r.merge)(l,c).pipe(Object(a.pairwise)(),Object(a.filter)((([e,t])=>{return(s=e)!==(i=t)&&(!s||i.error!==s.error||i.type!==s.type||i.status!==s.status||i.expiryDateInMillis!==s.expiryDateInMillis||i.isAvailable!==s.isAvailable);var s,i})),Object(a.map)((([,e])=>e))),refreshManually(){const e=o.pipe(Object(a.take)(1)).toPromise();return n.next(),e}}}(t,this.stop$,(()=>this.fetchLicense(e)),this.getSaved());return this.internalSubscription=s.subscribe((e=>{e.isAvailable?(this.prevSignature=e.signature,this.save(e)):(this.prevSignature=void 0,this.removeSaved()),"expired"===e.status&&!this.isLicenseExpirationBannerShown&&this.coreStart&&(this.isLicenseExpirationBannerShown=!0,this.showExpiredBanner(e))})),this.removeInterceptor=e.http.intercept({response:async s=>{if(e.http.anonymousPaths.isAnonymous(window.location.pathname))return s;if(s.response){const e=s.response.headers.get("kbn-license-sig");"string"==typeof e&&this.prevSignature!==e&&(s.request.url.includes(this.infoEndpoint)||t.next())}return s}}),this.refresh=i,this.license$=s,{refresh:i,license$:s,featureUsage:this.featureUsage.setup()}}start(e){if(this.coreStart=e,!this.refresh||!this.license$)throw new Error("Setup has not been completed");return{refresh:this.refresh,license$:this.license$,featureUsage:this.featureUsage.start({http:e.http})}}stop(){this.stop$.next(),this.stop$.complete(),void 0!==this.removeInterceptor&&this.removeInterceptor(),void 0!==this.internalSubscription&&(this.internalSubscription.unsubscribe(),this.internalSubscription=void 0)}showExpiredBanner(e){const t=this.coreStart.http.basePath.prepend("/app/management/stack/license_management/upload_license");var s;this.coreStart.overlays.banners.add((s={type:e.type,uploadUrl:t},Object(p.toMountPoint)(Object(h.jsx)(d,{type:s.type,uploadUrl:s.uploadUrl}))))}}const b=e=>new plugin_LicensingPlugin(e)}]);