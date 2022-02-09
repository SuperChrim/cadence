!function(e){function n(n){for(var t,o,a=n[0],i=n[1],u=0,c=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(s&&s(n);c.length;)c.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+"indexPatternManagement.chunk."+e+".js"}(e);var s=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.indexPatternManagement_bundle_jsonpfunction=window.indexPatternManagement_bundle_jsonpfunction||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var s=i;o(o.s=1)}([function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n,t){t(2),__kbnBundles__.define("plugin/indexPatternManagement/public",t,3)},function(e,n,t){t.p=window.__kbnPublicPath__.indexPatternManagement},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return a}));const r=t(0).i18n.translate("indexPatternManagement.indexPattern.sectionsHeader",{defaultMessage:"Index Patterns"}),o="indexPatterns";class IndexPatternManagementPlugin{constructor(e){}setup(e,{management:n,urlForwarding:a}){const i=n.sections.section.kibana;if(!i)throw new Error("`kibana` management section not found.");const u="management/kibana/indexPatterns",s="management/kibana/index_patterns";return a.forwardApp("management/kibana/index_pattern",u,(e=>"/create")),a.forwardApp(s,u,(e=>{const n=e.substr(s.length+1);return n&&`/patterns${n}`})),i.registerApp({id:o,title:r,order:0,mount:async n=>{const{mountManagementSection:r}=await t.e(1).then(t.bind(null,31));return r(e.getStartServices,n)}}),{}}start(){return{}}stop(){}}function a(e){return new IndexPatternManagementPlugin(e)}},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,n){e.exports=__kbnSharedDeps__.Lodash},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps_npm__},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n){e.exports=__kbnSharedDeps__.History},function(e,n){e.exports=__kbnSharedDeps__.KbnMonaco}]);