!function(e){function t(t){for(var n,r,i=t[0],s=t[1],o=0,u=[];o<i.length;o++)r=i[o],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(t);u.length;)u.shift()()}var n={},a={0:0};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=function(e){return r.p+"expressionRepeatImage.chunk."+e+".js"}(e);var p=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",p.name="ChunkLoadError",p.type=r,p.request=i,n[1](p)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.expressionRepeatImage_bundle_jsonpfunction=window.expressionRepeatImage_bundle_jsonpfunction||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var p=s;r(r.s=8)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/presentationUtil/common/lib");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){e.exports=n(10)(1074)},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n(9),__kbnBundles__.define("plugin/expressionRepeatImage/public",n,11)},function(e,t,n){n.p=window.__kbnPublicPath__.expressionRepeatImage},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return O})),n.d(t,"renderers",(function(){return I})),n.d(t,"repeatImageRenderer",(function(){return y}));var a=n(0),r=n(1);const i="`base64`",s={help:a.i18n.translate("expressionRepeatImage.functions.repeatImageHelpText",{defaultMessage:"Configures a repeating image element."}),args:{emptyImage:a.i18n.translate("expressionRepeatImage.functions.repeatImage.args.emptyImageHelpText",{defaultMessage:"Fills the difference between the {CONTEXT} and {maxArg} parameter for the element with this image. Provide an image asset as a {BASE64} data {URL}, or pass in a sub-expression.",values:{BASE64:i,CONTEXT:"_context_",maxArg:"`max`",URL:"URL"}}),image:a.i18n.translate("expressionRepeatImage.functions.repeatImage.args.imageHelpText",{defaultMessage:"The image to repeat. Provide an image asset as a {BASE64} data {URL}, or pass in a sub-expression.",values:{BASE64:i,URL:"URL"}}),max:a.i18n.translate("expressionRepeatImage.functions.repeatImage.args.maxHelpText",{defaultMessage:"The maximum number of times the image can repeat."}),size:a.i18n.translate("expressionRepeatImage.functions.repeatImage.args.sizeHelpText",{defaultMessage:"The maximum height or width of the image, in pixels. When the image is taller than it is wide, this function limits the height."})}},o=()=>a.i18n.translate("expressionRepeatImage.error.repeatImage.missingMaxArgument",{defaultMessage:"{maxArgument} must be set if providing an {emptyImageArgument}",values:{maxArgument:"`max`",emptyImageArgument:"`emptyImage`"}}),p=()=>{const{help:e,args:t}=s;return{name:"repeatImage",aliases:[],type:"render",inputTypes:["number"],help:e,args:{emptyImage:{types:["string","null"],help:t.emptyImage,default:null},image:{types:["string","null"],help:t.image,default:null},max:{types:["number","null"],help:t.max,default:1e3},size:{types:["number"],default:100,help:t.size}},fn:async(e,t)=>{if(null!==t.emptyImage&&Object(r.isValidUrl)(t.emptyImage)&&null===t.max)throw new Error(o());const{elasticOutline:n}=await Object(r.getElasticOutline)();return{type:"render",as:"repeatImage",value:{count:Math.floor(e),...t,image:Object(r.resolveWithMissingImage)(t.image,n),emptyImage:Object(r.resolveWithMissingImage)(t.emptyImage)}}}}};var u=n(5),l=n.n(u),m=n(6),g=n(4),c=n(7),d=n(2),f=n(3);const b=()=>a.i18n.translate("expressionRepeatImage.renderer.repeatImage.displayName",{defaultMessage:"RepeatImage"}),h=()=>a.i18n.translate("expressionRepeatImage.renderer.repeatImage.helpDescription",{defaultMessage:"Render a basic repeatImage"}),_=Object(m.lazy)((()=>n.e(1).then(n.bind(null,13)))),x=Object(d.withSuspense)(_,null),y=()=>({name:"repeatImage",displayName:b(),help:h(),reuseDomNode:!0,render:async(e,t,n)=>{const{elasticOutline:a}=await Object(d.getElasticOutline)(),r={...t,image:Object(d.isValidUrl)(t.image)?t.image:a,emptyImage:t.emptyImage||""};n.onDestroy((()=>{Object(g.unmountComponentAtNode)(e)})),Object(g.render)(Object(f.jsx)(c.I18nProvider,null,Object(f.jsx)(x,l()({onLoaded:n.done},r,{parentNode:e}))),e)}}),I=[y];class plugin_ExpressionRepeatImagePlugin{setup(e,{expressions:t}){t.registerFunction(p),t.registerRenderer(y)}start(e){}stop(){}}function O(){return new plugin_ExpressionRepeatImagePlugin}},function(e,t){e.exports=__kbnSharedDeps__.Lodash}]);