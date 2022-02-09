/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,o,i=t[0],s=t[1],u=0,a=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&a.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);a.length;)a.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+"cloud.chunk."+e+".js"}(e);var l=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(a);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var a=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.cloud_bundle_jsonpfunction=window.cloud_bundle_jsonpfunction||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o(o.s=3)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){e.exports=n(2)(1073)},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(4),__kbnBundles__.define("plugin/cloud/public",n,5)},function(e,t,n){n.p=window.__kbnPublicPath__.cloud},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return l}));var r=n(1),o=n.n(r),i=n(0);function s(e,t){return e&&t?`${e}${t}`:""}class plugin_CloudPlugin{constructor(e){o()(this,"config",void 0),o()(this,"isCloudEnabled",void 0),o()(this,"appSubscription",void 0),this.initializerContext=e,this.config=this.initializerContext.config.get(),this.isCloudEnabled=!1}setup(e,{home:t,security:n}){const r=e.getStartServices().then((([e])=>e.application));this.setupFullstory({basePath:e.http.basePath,security:n,application:r}).catch((e=>console.debug(`Error setting up FullStory: ${e.toString()}`)));const{id:o,cname:i,profile_url:u,organization_url:l,deployment_url:a,base_url:c}=this.config;this.isCloudEnabled="string"==typeof o,t&&(t.environment.update({cloud:this.isCloudEnabled}),this.isCloudEnabled&&t.tutorials.setVariable("cloud",{id:o,baseUrl:c,profileUrl:u,deploymentUrl:a}));const d=s(c,a);return{cloudId:o,cname:i,baseUrl:c,deploymentUrl:d,profileUrl:s(c,u),organizationUrl:s(c,l),snapshotsUrl:`${d}/elasticsearch/snapshots/`,isCloudEnabled:this.isCloudEnabled}}start(e,{security:t}){const{deployment_url:n,base_url:r}=this.config;e.chrome.setHelpSupportUrl("https://support.elastic.co/");const o=o=>{if(o&&(r&&n&&e.chrome.setCustomNavLink({title:i.i18n.translate("xpack.cloud.deploymentLinkLabel",{defaultMessage:"Manage this deployment"}),euiIconType:"arrowLeft",href:s(r,n)}),t&&this.isCloudEnabled)){const e=(e=>{const{profile_url:t,organization_url:n,base_url:r}=e,o=[];return r&&t&&o.push({label:i.i18n.translate("xpack.cloud.userMenuLinks.profileLinkText",{defaultMessage:"Profile"}),iconType:"user",href:s(r,t),order:100,setAsProfile:!0}),r&&n&&o.push({label:i.i18n.translate("xpack.cloud.userMenuLinks.accountLinkText",{defaultMessage:"Account & Billing"}),iconType:"gear",href:s(r,n),order:200}),o})(this.config);t.navControlService.addUserMenuLinks(e)}};this.checkIfAuthorizedForLinks({http:e.http,security:t}).then(o).catch((()=>o(!0)))}stop(){var e;null===(e=this.appSubscription)||void 0===e||e.unsubscribe()}async checkIfAuthorizedForLinks({http:e,security:t}){var n;if(e.anonymousPaths.isAnonymous(window.location.pathname))return!1;if(!t)return!0;const r=await t.authc.getCurrentUser().catch((()=>null));return null===(n=null==r?void 0:r.roles.includes("superuser"))||void 0===n||n}async setupFullstory({basePath:e,security:t,application:r}){const{enabled:o,org_id:i}=this.config.full_story;if(!o||!i)return;const s=n.e(1).then(n.bind(null,10)),l=t?u({getCurrentUser:t.authc.getCurrentUser}):Promise.resolve(void 0),[{initializeFullStory:a},c]=await Promise.all([s,l]),{fullStory:d,sha256:p}=a({basePath:e,orgId:i,packageInfo:this.initializerContext.env.packageInfo});try{if(c){var f,h,_;const e=p(c.toString());null==r||r.then((async()=>{const e=await r;this.appSubscription=e.currentAppId$.subscribe((e=>{d.setUserVars({app_id_str:null!=e?e:"unknown"})}))})).catch((e=>{console.error(`[cloud.full_story] Could not retrieve application service due to error: ${e.toString()}`,e)}));const t=this.initializerContext.env.packageInfo.version,n=(t.indexOf(".")>-1?t.split("."):[]).map((e=>parseInt(e,10)));d.identify(e,{version_str:t,version_major_int:null!==(f=n[0])&&void 0!==f?f:-1,version_minor_int:null!==(h=n[1])&&void 0!==h?h:-1,version_patch_int:null!==(_=n[2])&&void 0!==_?_:-1})}}catch(e){console.error(`[cloud.full_story] Could not call FS.identify due to error: ${e.toString()}`,e)}const y=window.performance.memory;let b={};y&&(b={memory_js_heap_size_limit_int:y.jsHeapSizeLimit,memory_js_heap_size_total_int:y.totalJSHeapSize,memory_js_heap_size_used_int:y.usedJSHeapSize}),d.event("Loaded Kibana",{kibana_version_str:this.initializerContext.env.packageInfo.version,...b})}}const u=async({getCurrentUser:e})=>{try{const t=await e().catch((()=>{}));if(!t)return;return t.username||console.debug(`[cloud.full_story] username not specified. User metadata: ${JSON.stringify(t.metadata)}`),t.username}catch(e){return void console.error(`[cloud.full_story] Error loading the current user: ${e.toString()}`,e)}};function l(e){return new plugin_CloudPlugin(e)}}]);