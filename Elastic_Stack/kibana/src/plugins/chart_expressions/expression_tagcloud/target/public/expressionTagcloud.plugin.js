!function(e){function t(t){for(var n,a,s=t[0],r=t[1],i=0,u=[];i<s.length;i++)a=s[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(l&&l(t);u.length;)u.shift()()}var n={},o={0:0};function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=function(e){return a.p+"expressionTagcloud.chunk."+e+".js"}(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window.expressionTagcloud_bundle_jsonpfunction=window.expressionTagcloud_bundle_jsonpfunction||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=r;a(a.s=10)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var o=n(9);const[a,s]=Object(o.createGetterSetter)("fieldFormats")},function(e,t,n){e.exports=n(12)(1074)},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/visualizations/common/prepare_log_table");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t,n){n(11),__kbnBundles__.define("plugin/expressionTagcloud/public",n,13)},function(e,t,n){n.p=window.__kbnPublicPath__.expressionTagcloud},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return v}));var o=n(6),a=n.n(o),s=n(3),r=n(2),i=n(4),l=n(1),u=n(0),c=n(7);const p="tagcloud",d=()=>u.i18n.translate("expressionTagcloud.renderer.tagcloud.displayName",{defaultMessage:"Tag Cloud visualization"}),g=()=>u.i18n.translate("expressionTagcloud.renderer.tagcloud.helpDescription",{defaultMessage:"Render a tag cloud"}),f={height:"100%"},b=Object(s.lazy)((()=>n.e(1).then(n.bind(null,28))));var _=n(8);const m={help:u.i18n.translate("expressionTagcloud.functions.tagcloudHelpText",{defaultMessage:"Tagcloud visualization."}),args:{scale:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.scaleHelpText",{defaultMessage:"Scale to determine font size of a word"}),orientation:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.orientationHelpText",{defaultMessage:"Orientation of words inside tagcloud"}),minFontSize:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.minFontSizeHelpText",{defaultMessage:"Min font size"}),maxFontSize:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.maxFontSizeHelpText",{defaultMessage:"Max font size"}),showLabel:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.showLabelHelpText",{defaultMessage:"Show chart label"}),palette:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.paletteHelpText",{defaultMessage:"Defines the chart palette name"}),metric:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.metricHelpText",{defaultMessage:"metric dimension configuration"}),bucket:u.i18n.translate("expressionTagcloud.functions.tagcloud.args.bucketHelpText",{defaultMessage:"bucket dimension configuration"})},dimension:{tags:u.i18n.translate("expressionTagcloud.functions.tagcloud.dimension.tags",{defaultMessage:"Tags"}),tagSize:u.i18n.translate("expressionTagcloud.functions.tagcloud.dimension.tagSize",{defaultMessage:"Tag size"})}},h=()=>{const{help:e,args:t,dimension:n}=m;return{name:p,type:"render",inputTypes:["datatable"],help:e,args:{scale:{types:["string"],default:"linear",options:["linear","log","square root"],help:t.scale},orientation:{types:["string"],default:"single",options:["single","right angled","multiple"],help:t.orientation},minFontSize:{types:["number"],default:18,help:t.minFontSize},maxFontSize:{types:["number"],default:72,help:t.maxFontSize},showLabel:{types:["boolean"],default:!0,help:t.showLabel},palette:{types:["palette","system_palette"],help:t.palette,default:"{palette}"},metric:{types:["vis_dimension"],help:t.metric,required:!0},bucket:{types:["vis_dimension"],help:t.bucket}},fn(e,t,o){var a,s,r;const i={scale:t.scale,orientation:t.orientation,minFontSize:t.minFontSize,maxFontSize:t.maxFontSize,showLabel:t.showLabel,metric:t.metric,...t.bucket&&{bucket:t.bucket},palette:t.palette};if(null!=o&&null!==(a=o.inspectorAdapters)&&void 0!==a&&a.tables){const a=[[[t.metric],n.tagSize]];t.bucket&&a.push([[t.bucket],n.tags]);const s=Object(_.prepareLogTable)(e,a);o.inspectorAdapters.tables.logDatatable("default",s)}return{type:"render",as:p,value:{visData:e,visType:p,visParams:i,syncColors:null!==(s=null==o||null===(r=o.isSyncColorsEnabled)||void 0===r?void 0:r.call(o))&&void 0!==s&&s}}}}};var x=n(5);class plugin_ExpressionTagcloudPlugin{setup(e,{expressions:t,charts:n}){const o={palettes:n.palettes};t.registerFunction(h),t.registerRenderer((({palettes:e})=>({name:p,displayName:d(),help:g(),reuseDomNode:!0,render:async(t,n,o)=>{o.onDestroy((()=>{Object(r.unmountComponentAtNode)(t)}));const s=await e.getPalettes(),u=0===n.visData.rows.length;Object(r.render)(Object(l.jsx)(i.I18nProvider,null,Object(l.jsx)(l.ClassNames,null,(({css:e,cx:t})=>Object(l.jsx)(c.VisualizationContainer,{handlers:o,className:t("tagCloudContainer",e(f)),showNoResult:u},Object(l.jsx)(b,a()({},n,{palettesRegistry:s,renderComplete:o.done,fireEvent:o.event,syncColors:n.syncColors})))))),t)}}))(o))}start(e,{fieldFormats:t}){Object(x.b)(t)}stop(){}}function v(){return new plugin_ExpressionTagcloudPlugin}},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts}]);