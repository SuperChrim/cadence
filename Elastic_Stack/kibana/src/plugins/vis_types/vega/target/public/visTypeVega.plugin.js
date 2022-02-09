!function(e){function t(t){for(var n,i,a=t[0],s=t[1],o=0,u=[];o<a.length;o++)i=a[o],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);u.length;)u.shift()()}var n={},r={1:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=a);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"visTypeVega.chunk."+e+".js"}(e);var c=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.visTypeVega_bundle_jsonpfunction=window.visTypeVega_bundle_jsonpfunction||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var c=s;i(i.s=26)}([function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"m",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"j",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"l",(function(){return d})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"i",(function(){return v}));var r=n(7);const[i,a]=Object(r.createGetterSetter)("Data"),[s,o]=Object(r.createGetterSetter)("Notifications"),[c,u]=Object(r.createGetterSetter)("UISettings"),[l,f]=Object(r.createGetterSetter)("InjectedMetadata"),[p,d]=Object(r.createGetterSetter)("MapServiceSettings"),[h,g]=Object(r.createGetterSetter)("InjectedVars"),m=()=>h().enableExternalUrls,[b,v]=Object(r.createGetterSetter)("docLinks")},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){e.exports=n(25)(1073)},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";
/*!
 * Hjson v3.2.1
 * http://hjson.org
 *
 * Copyright 2014-2017 Christian Zangl, MIT license
 * Details and documentation:
 * https://github.com/hjson/hjson-js
 *
 * This code is based on the the JSON version by Douglas Crockford:
 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
 */var r=n(13),i=n(29),a=n(30),s=n(31),o=n(32),c=n(14);e.exports={parse:a,stringify:s,endOfLine:function(){return r.EOL},setEndOfLine:function(e){"\n"!==e&&"\r\n"!==e||(r.EOL=e)},version:i,rt:{parse:function(e,t){return(t=t||{}).keepWsc=!0,a(e,t)},stringify:function(e,t){return(t=t||{}).keepWsc=!0,s(e,t)}},comments:o,dsf:c.std}},function(e,t,n){"use strict";var r=n(28);e.exports={EOL:r.EOL||"\n",tryParseNumber:function(e,t){var n,r,i="",a=0,s=!0,o=0;function c(){return r=e.charAt(o),o++,r}for(c(),"-"===r&&(i="-",c());r>="0"&&r<="9";)s&&("0"==r?a++:s=!1),i+=r,c();if(s&&a--,"."===r)for(i+=".";c()&&r>="0"&&r<="9";)i+=r;if("e"===r||"E"===r)for(i+=r,c(),"-"!==r&&"+"!==r||(i+=r,c());r>="0"&&r<="9";)i+=r,c();for(;r&&r<=" ";)c();return t&&(","!==r&&"}"!==r&&"]"!==r&&"#"!==r&&("/"!==r||"/"!==e[o]&&"*"!==e[o])||(r=0)),n=+i,r||a||!isFinite(n)?void 0:n},createComment:function(e,t){return Object.defineProperty&&Object.defineProperty(e,"__COMMENTS__",{enumerable:!1,writable:!0}),e.__COMMENTS__=t||{}},removeComment:function(e){Object.defineProperty(e,"__COMMENTS__",{value:void 0})},getComment:function(e){return e.__COMMENTS__},forceComment:function(e){if(!e)return"";var t,n,r,i,a=e.split("\n");for(r=0;r<a.length;r++)for(i=(t=a[r]).length,n=0;n<i;n++){var s=t[n];if("#"===s)break;if("/"===s&&("/"===t[n+1]||"*"===t[n+1])){"*"===t[n+1]&&(r=a.length);break}if(s>" "){a[r]="# "+t;break}}return a.join("\n")}}},function(e,t,n){"use strict";function r(e,t){if(e)for(var n=0;n<e.length;n++){var r=e[n](t);if(void 0!==r)return r}}function i(){}function a(e){return"{"===e||"}"===e||"["===e||"]"===e||","===e}function s(){return{name:"math",parse:function(e){switch(e){case"+inf":case"inf":case"+Inf":case"Inf":return 1/0;case"-inf":case"-Inf":return-1/0;case"nan":case"NaN":return NaN}},stringify:function(e){if("number"==typeof e)return 1/e==-1/0?"-0":e===1/0?"Inf":e===-1/0?"-Inf":isNaN(e)?"NaN":void 0}}}function o(e){var t=e&&e.out;return{name:"hex",parse:function(e){if(/^0x[0-9A-Fa-f]+$/.test(e))return parseInt(e,16)},stringify:function(e){if(t&&Number.isInteger(e))return"0x"+e.toString(16)}}}function c(){return{name:"date",parse:function(e){if(/^\d{4}-\d{2}-\d{2}$/.test(e)||/^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(?:.\d+)(?:Z|[+-]\d{2}:\d{2})$/.test(e)){var t=Date.parse(e);if(!isNaN(t))return new Date(t)}},stringify:function(e){if("[object Date]"===Object.prototype.toString.call(e)){var t=e.toISOString();return-1!==t.indexOf("T00:00:00.000Z",t.length-14)?t.substr(0,10):t}}}}s.description="support for Inf/inf, -Inf/-inf, Nan/naN and -0",o.description="parse hexadecimal numbers prefixed with 0x",c.description="support ISO dates",e.exports={loadDsf:function(e,t){if("[object Array]"!==Object.prototype.toString.apply(e)){if(e)throw new Error("dsf option must contain an array!");return i}if(0===e.length)return i;var n=[];function s(e){return"[object Function]"==={}.toString.call(e)}return e.forEach((function(e){if(!e.name||!s(e.parse)||!s(e.stringify))throw new Error("extension does not match the DSF interface");n.push((function(){try{if("parse"==t)return e.parse.apply(null,arguments);if("stringify"==t){var n=e.stringify.apply(null,arguments);if(void 0!==n&&("string"!=typeof n||0===n.length||'"'===n[0]||[].some.call(n,(function(e){return a(e)}))))throw new Error("value may not be empty, start with a quote or contain a punctuator character except colon: "+n);return n}throw new Error("Invalid type")}catch(t){throw new Error("DSF-"+e.name+" failed; "+t.message)}}))})),r.bind(null,n)},std:{math:s,hex:o,date:c}}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c}));var r=n(24);const i="vega",a=r.TMS_IN_YML_ID,s={maxZoom:20,minZoom:0,tileSize:256},o={version:8,sources:{},layers:[]},c={name:"projection",type:"mercator",scale:{signal:"512*pow(2,zoom)/2/PI"},rotate:[{signal:"-longitude"},0,0],center:[0,{signal:"latitude"}],translate:[{signal:"width/2"},{signal:"height/2"}],fit:!1}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(9),i=n(2);const a=async e=>{const{indexPatterns:t}=Object(i.a)();let n=[];return Array.isArray(e.data)?n=e.data:e.data&&(n=[e.data]),Object(r.flatten)(await Promise.all(n.reduce(((e,n)=>{var r;return null!==(r=n.url)&&void 0!==r&&r.index&&e.push(t.find(n.url.index)),e}),[])))}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";n.d(t,"a",(function(){return MapServiceSettings})),n.d(t,"b",(function(){return c}));var r=n(4),i=n.n(r),a=n(3),s=n(2),o=n(18);class MapServiceSettings{constructor(e,t){i()(this,"emsClient",void 0),i()(this,"isDarkMode",!1),this.config=e,this.appVersion=t}isInitialized(){return Boolean(this.emsClient)}hasUserConfiguredTmsLayer(){return e=this.config,Boolean(null===(t=e.tilemap)||void 0===t?void 0:t.url);var e,t}defaultTmsLayer(){const{dark:e,desaturated:t}=this.config.emsTileLayerId;return this.hasUserConfiguredTmsLayer()?o.d:this.isDarkMode?e:t}async initialize(){this.isDarkMode=Object(s.g)().get("theme:darkMode"),this.emsClient=await(async e=>new((await n.e(2).then(n.bind(null,39))).EMSClient)({language:a.i18n.getLocale(),appName:"kibana",fetchFunction:(e,t)=>fetch(e,t),...e}))({appVersion:this.appVersion,fileApiUrl:this.config.emsFileApiUrl,tileApiUrl:this.config.emsTileApiUrl,landingPageUrl:this.config.emsLandingPageUrl}),this.emsClient.addQueryParams({license:"sspl"})}async getTmsService(e){var t;return this.isInitialized()||await this.initialize(),null===(t=this.emsClient)||void 0===t?void 0:t.findTMSServiceById(e)}}function c(e){return e.getAttributions().map((({label:e,url:t})=>{const n=document.createElement("a");return n.textContent=e,n.setAttribute("rel","noreferrer noopener"),n.setAttribute("href",t),n.outerHTML}))}},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/inspector/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/mapsEms/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(27),__kbnBundles__.define("plugin/visTypeVega/public",n,33)},function(e,t,n){n.p=window.__kbnPublicPath__.visTypeVega},function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},function(e,t){e.exports="3.2.1"},function(e,t,n){"use strict";e.exports=function(e,t){var r,i,a,s,o,c=n(13),u=n(14),l={'"':'"',"'":"'","\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};function f(){i=0,a=" "}function p(e){return"{"===e||"}"===e||"["===e||"]"===e||","===e||":"===e}function d(e){var t,n=0,a=1;for(t=i-1;t>0&&"\n"!==r[t];t--,n++);for(;t>0;t--)"\n"===r[t]&&a++;throw new Error(e+" at line "+a+","+n+" >>>"+r.substr(i-n,20)+" ...")}function h(){return a=r.charAt(i),i++,a}function g(e){return r.charAt(i+e)}function m(e){for(var t="",n=a;h();){if(a===n)return h(),e&&"'"===n&&"'"===a&&0===t.length?(h(),b()):t;if("\\"===a)if(h(),"u"===a){for(var r=0,i=0;i<4;i++){h();var s,o=a.charCodeAt(0);a>="0"&&a<="9"?s=o-48:a>="a"&&a<="f"?s=o-97+10:a>="A"&&a<="F"?s=o-65+10:d("Bad \\u char "+a),r=16*r+s}t+=String.fromCharCode(r)}else{if("string"!=typeof l[a])break;t+=l[a]}else"\n"===a||"\r"===a?d("Bad string containing newline"):t+=a}d("Bad string")}function b(){for(var e="",t=0,n=0;;){var r=g(-n-5);if(!r||"\n"===r)break;n++}function i(){for(var e=n;a&&a<=" "&&"\n"!==a&&e-- >0;)h()}for(;a&&a<=" "&&"\n"!==a;)h();for("\n"===a&&(h(),i());;){if(a){if("'"===a){if(t++,h(),3===t)return"\n"===e.slice(-1)&&(e=e.slice(0,-1)),e;continue}for(;t>0;)e+="'",t--}else d("Bad multiline string");"\n"===a?(e+="\n",h(),i()):("\r"!==a&&(e+=a),h())}}function v(){if('"'===a||"'"===a)return m(!1);for(var e="",t=i,n=-1;;){if(":"===a)return e?n>=0&&n!==e.length&&(i=t+n,d("Found whitespace in your key name (use quotes to include)")):d("Found ':' but no key name (for an empty key name use quotes)"),e;a<=" "?a?n<0&&(n=e.length):d("Found EOF while looking for a key name (check your syntax)"):p(a)?d("Found '"+a+"' where a key name was expected (check your syntax or use quotes if the key name includes {}[],: or whitespace)"):e+=a,h()}}function y(){for(;a;){for(;a&&a<=" ";)h();if("#"===a||"/"===a&&"/"===g(0))for(;a&&"\n"!==a;)h();else{if("/"!==a||"*"!==g(0))break;for(h(),h();a&&("*"!==a||"/"!==g(0));)h();a&&(h(),h())}}}function _(e,t){var n;for(e--,n=i-2;n>e&&r[n]<=" "&&"\n"!==r[n];n--);"\n"===r[n]&&n--,"\r"===r[n]&&n--;var a=r.substr(e,n-e+1);for(n=0;n<a.length;n++)if(a[n]>" "){var s=a.indexOf("\n");if(s>=0){var o=[a.substr(0,s),a.substr(s+1)];return t&&0===o[0].trim().length&&o.shift(),o}return[a]}return[]}function j(e){function t(e,n){var r,i,a,s;switch(typeof e){case"string":e.indexOf(n)>=0&&(s=e);break;case"object":if("[object Array]"===Object.prototype.toString.apply(e))for(r=0,a=e.length;r<a;r++)s=t(e[r],n)||s;else for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s=t(e[i],n)||s)}return s}function n(n){var r=t(e,n);return r?"found '"+n+"' in a string value, your mistake could be with:\n  > "+r+"\n  (unquoted strings contain everything up to the next line!)":""}return n("}")||n("]")}function O(){var e,t,n,r=[];try{if(s&&(e=c.createComment(r,{a:[]})),h(),t=i,y(),e&&(n=_(t,!0).join("\n")),"]"===a)return h(),e&&(e.e=[n]),r;for(;a;){if(r.push(w()),t=i,y(),","===a&&(h(),t=i,y()),e){var o=_(t);e.a.push([n||"",o[0]||""]),n=o[1]}if("]"===a)return h(),e&&(e.a[e.a.length-1][1]+=n||""),r;y()}d("End of input while parsing an array (missing ']')")}catch(e){throw e.hint=e.hint||j(r),e}}function x(e){var t,n,r,o="",u={};try{if(s&&(t=c.createComment(u,{c:{},o:[]})),e?n=1:(h(),n=i),y(),t&&(r=_(n,!0).join("\n")),"}"===a&&!e)return t&&(t.e=[r]),h(),u;for(;a;){if(o=v(),y(),":"!==a&&d("Expected ':' instead of '"+a+"'"),h(),u[o]=w(),n=i,y(),","===a&&(h(),n=i,y()),t){var l=_(n);t.c[o]=[r||"",l[0]||""],r=l[1],t.o.push(o)}if("}"===a&&!e)return h(),t&&(t.c[o][1]+=r||""),u;y()}if(e)return u;d("End of input while parsing an object (missing '}')")}catch(e){throw e.hint=e.hint||j(u),e}}function w(){switch(y(),a){case"{":return x();case"[":return O();case"'":case'"':return m(!0);default:return function(){var e=a;for(p(a)&&d("Found a punctuator character '"+a+"' when expecting a quoteless string (check your syntax)");;){h();var t="\r"===a||"\n"===a||""===a;if(t||","===a||"}"===a||"]"===a||"#"===a||"/"===a&&("/"===g(0)||"*"===g(0))){var n=e[0];switch(n){case"f":if("false"===e.trim())return!1;break;case"n":if("null"===e.trim())return null;break;case"t":if("true"===e.trim())return!0;break;default:if("-"===n||n>="0"&&n<="9"){var r=c.tryParseNumber(e);if(void 0!==r)return r}}if(t){e=e.trim();var i=o(e);return void 0!==i?i:e}}e+=a}}()}}function S(e,t){var n=i;if(y(),a&&d("Syntax error, found trailing characters"),s){var r=t.join("\n"),o=_(n).join("\n");if(o||r)c.createComment(e,c.getComment(e)).r=[r,o]}return e}if("string"!=typeof e)throw new Error("source is not a string");var k=null,E=!0;return t&&"object"==typeof t&&(s=t.keepWsc,k=t.dsf,E=!1!==t.legacyRoot),o=u.loadDsf(k,"parse"),r=e,f(),E?function(){y();var e=s?_(1):null;switch(a){case"{":return S(x(),e);case"[":return S(O(),e)}try{return S(x(!0),e)}catch(t){f();try{return S(w(),e)}catch(e){throw t}}}():function(){y();var e=s?_(1):null;switch(a){case"{":return S(x(),e);case"[":return S(O(),e);default:return S(w(),e)}}()}},function(e,t,n){"use strict";e.exports=function(e,t){var r,i=n(13),a=n(14),s={obj:["{","}"],arr:["[","]"],key:["",""],qkey:['"','"'],col:[":",""],com:[",",""],str:["",""],qstr:['"','"'],mstr:["'''","'''"],num:["",""],lit:["",""],dsf:["",""],esc:["\\",""],uni:["\\u",""],rem:["",""]},o=i.EOL,c="  ",u=!1,l=!1,f=!1,p=!1,d=0,h=1,g="",m=null,b=!1,v=s;if(t&&"object"==typeof t){t.quotes="always"===t.quotes?"strings":t.quotes,"\n"!==t.eol&&"\r\n"!==t.eol||(o=t.eol),u=t.keepWsc,d=t.condense||0,l=t.bracesSameLine,f="all"===t.quotes||"keys"===t.quotes,p="all"===t.quotes||"strings"===t.quotes||!0===t.separator,h=p||"off"==t.multiline?0:"no-tabs"==t.multiline?2:1,g=!0===t.separator?v.com[0]:"",m=t.dsf,b=t.sortProps,"number"==typeof t.space?c=new Array(t.space+1).join(" "):"string"==typeof t.space&&(c=t.space),!0===t.colors&&(v={obj:["[37m{[0m","[37m}[0m"],arr:["[37m[[0m","[37m][0m"],key:["[33m","[0m"],qkey:['[33m"','"[0m'],col:["[37m:[0m",""],com:["[37m,[0m",""],str:["[37;1m","[0m"],qstr:['[37;1m"','"[0m'],mstr:["[37;1m'''","'''[0m"],num:["[36;1m","[0m"],lit:["[36m","[0m"],dsf:["[37m","[0m"],esc:["[31m\\","[0m"],uni:["[31m\\u","[0m"],rem:["[35m","[0m"]});var y,_=Object.keys(s);for(y=_.length-1;y>=0;y--){var j=_[y];v[j].push(s[j][0].length,s[j][1].length)}}var O="-­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯\ufeff￰-￿",x=new RegExp('[\\\\\\"\0-'+O+"]","g"),w=new RegExp("^\\s|^\"|^'|^#|^\\/\\*|^\\/\\/|^\\{|^\\}|^\\[|^\\]|^:|^,|\\s$|[\0-"+O+"]","g"),S=new RegExp("'''|^[\\s]+$|[\0-"+(2===h?"\t":"\b")+"\v\f-"+O+"]","g"),k=new RegExp("^(true|false|null)\\s*((,|\\]|\\}|#|//|/\\*).*)?$"),E={"\b":"b","\t":"t","\n":"n","\f":"f","\r":"r",'"':'"',"\\":"\\"},P=/[,\{\[\}\]\s:#"']|\/\/|\/\*/,T="",C=0;function I(e,t){return C+=e[0].length+e[1].length-e[2]-e[3],e[0]+t+e[1]}function A(e){return e.replace(x,(function(e){var t=E[e];return"string"==typeof t?I(v.esc,t):I(v.uni,("0000"+e.charCodeAt(0).toString(16)).slice(-4))}))}function V(e,t,n,r){return e?(w.lastIndex=0,k.lastIndex=0,p||n||w.test(e)||void 0!==i.tryParseNumber(e,!0)||k.test(e)?(x.lastIndex=0,S.lastIndex=0,x.test(e)?S.test(e)||r||!h?I(v.qstr,A(e)):function(e,t){var n,r=e.replace(/\r/g,"").split("\n");if(t+=c,1===r.length)return I(v.mstr,r[0]);var i=o+t+v.mstr[0];for(n=0;n<r.length;n++)i+=o,r[n]&&(i+=t+r[n]);return i+o+t+v.mstr[1]}(e,t):I(v.qstr,e)):I(v.str,e)):I(v.qstr,"")}function D(e){return e?f||P.test(e)?(x.lastIndex=0,I(v.qkey,x.test(e)?A(e):e)):I(v.key,e):'""'}r=a.loadDsf(m,"stringify");var M="",q=u?q=(i.getComment(e)||{}).r:null;return q&&q[0]&&(M=q[0]+"\n"),M+=function e(t,n,a,s){function f(e){return e&&"\n"===e["\r"===e[0]?1:0]}function m(e){return e&&!f(e)}function y(e,t,n){if(!e)return"";var r,a=(e=i.forceComment(e)).length;for(r=0;r<a&&e[r]<=" ";r++);return n&&r>0&&(e=e.substr(r)),r<a?t+I(v.rem,e):e}var _=r(t);if(void 0!==_)return I(v.dsf,_);switch(typeof t){case"string":return V(t,T,n,s);case"number":return isFinite(t)?I(v.num,String(t)):I(v.lit,"null");case"boolean":return I(v.lit,String(t));case"object":if(!t)return I(v.lit,"null");var j;u&&(j=i.getComment(t));var O,x,w,S,k,E,P,A,M,q,L="[object Array]"===Object.prototype.toString.apply(t),B=T,R=o+B,N=o+(T+=c),z=a||l?"":R,U=[],F=d?[]:null,G=p,W=h,$=g?"":v.com[0],K=0;if(L){for(x=0,w=t.length;x<w;x++){if(O=x<w-1,j?(A=m((P=j.a[x]||[])[1]),U.push(y(P[0],"\n")+N),F&&(P[0]||P[1]||A)&&(F=null)):U.push(N),C=0,k=t[x],U.push(e(k,!!j&&A,!0)+(O?g:"")),F){switch(typeof k){case"string":C=0,p=!0,h=0,F.push(e(k,!1,!0)+(O?v.com[0]:"")),p=G,h=W;break;case"object":if(k){F=null;break}default:F.push(U[U.length-1]+(O?$:""))}O&&(C+=v.com[0].length-v.com[2]),K+=C}j&&P[1]&&U.push(y(P[1],A?" ":"\n",A))}0===w?j&&j.e&&U.push(y(j.e[0],"\n")+R):U.push(R),0===U.length?M=I(v.arr,""):(M=z+I(v.arr,U.join("")),F&&(q=F.join(" ")).length-K<=d&&(M=I(v.arr,q)))}else{var Q=j?j.o.slice():[],Z=[];for(S in t)Object.prototype.hasOwnProperty.call(t,S)&&Q.indexOf(S)<0&&Z.push(S);b&&Z.sort();var X=Q.concat(Z);for(x=0,w=X.length;x<w;x++)if(O=x<w-1,S=X[x],j?(A=m((P=j.c[S]||[])[1]),U.push(y(P[0],"\n")+N),F&&(P[0]||P[1]||A)&&(F=null)):U.push(N),C=0,E=e(k=t[S],j&&A),U.push(D(S)+v.col[0]+(f(E)?"":" ")+E+(O?g:"")),j&&P[1]&&U.push(y(P[1],A?" ":"\n",A)),F){switch(typeof k){case"string":C=0,p=!0,h=0,E=e(k,!1),p=G,h=W,F.push(D(S)+v.col[0]+" "+E+(O?v.com[0]:""));break;case"object":if(k){F=null;break}default:F.push(U[U.length-1]+(O?$:""))}C+=v.col[0].length-v.col[2],O&&(C+=v.com[0].length-v.com[2]),K+=C}0===w?j&&j.e&&U.push(y(j.e[0],"\n")+R):U.push(R),0===U.length?M=I(v.obj,""):(M=z+I(v.obj,U.join("")),F&&(q=F.join(" ")).length-K<=d&&(M=I(v.obj,q)))}return T=B,M}}(e,null,!0,!0),q&&(M+=q[1]||""),M}},function(e,t,n){"use strict";var r=n(13);function i(e,t,n){var r;return e&&(r={b:e}),t&&((r=r||{}).a=t),n&&((r=r||{}).x=n),r}function a(e,t){if(null!==e&&"object"==typeof e){var n,o,c,u,l=r.getComment(e);if(l&&r.removeComment(e),"[object Array]"===Object.prototype.toString.apply(e)){for(u={a:{}},n=0,o=e.length;n<o;n++)s(u.a,n,l.a[n],a(e[n]))&&(c=!0);!c&&l.e&&(u.e=i(l.e[0],l.e[1]),c=!0)}else{u={s:{}};var f,p=Object.keys(e);for(l&&l.o?(f=[],l.o.concat(p).forEach((function(t){Object.prototype.hasOwnProperty.call(e,t)&&f.indexOf(t)<0&&f.push(t)}))):f=p,u.o=f,n=0,o=f.length;n<o;n++){var d=f[n];s(u.s,d,l.c[d],a(e[d]))&&(c=!0)}!c&&l.e&&(u.e=i(l.e[0],l.e[1]),c=!0)}return t&&l&&l.r&&(u.r=i(l.r[0],l.r[1])),c?u:void 0}}function s(e,t,n,r){var a=i(n?n[0]:void 0,n?n[1]:void 0,r);return a&&(e[t]=a),a}function o(e,t){var n=i(t.b,t.a);return n.path=e,n}function c(e,t,n){if(e){var r,i;if(e.a)for(r=0,i=e.a.length;r<i;r++){var a=n.slice().concat([r]),s=e.a[r];s&&(t.push(o(a,s)),c(s.x,t,a))}else e.o&&e.o.forEach((function(r){var i=n.slice().concat([r]),a=e.s[r];a&&(t.push(o(i,a)),c(a.x,t,i))}));e.e&&t.push(o(n,e.e))}}function u(e,t,n,i){if(e)if(null!==t&&"object"==typeof t){var a,s=r.createComment(t);if(0===i.length&&e.r&&(s.r=[e.r.b,e.r.a]),"[object Array]"===Object.prototype.toString.apply(t)){s.a=[];var l=e.a||{};for(var f in l)if(l.hasOwnProperty(f)){a=parseInt(f);var p=e.a[f];if(p){var d=i.slice().concat([a]);a<t.length?(s.a[a]=[p.b,p.a],u(p.x,t[a],n,d)):(n.push(o(d,p)),c(p.x,n,d))}}0===a&&e.e&&(s.e=[e.e.b,e.e.a])}else s.c={},s.o=[],(e.o||[]).forEach((function(r){var a=i.slice().concat([r]),l=e.s[r];Object.prototype.hasOwnProperty.call(t,r)?(s.o.push(r),l&&(s.c[r]=[l.b,l.a],u(l.x,t[r],n,a))):l&&(n.push(o(a,l)),c(l.x,n,a))})),e.e&&(s.e=[e.e.b,e.e.a])}else c(e,n,i)}function l(e,t,n){var i=r.createComment(e,r.getComment(e));return i.r||(i.r=["",""]),(t||""===t)&&(i.r[n]=r.forceComment(t)),i.r[n]||""}e.exports={extract:function(e){return a(e,!0)},merge:function(e,t){var n=[];if(u(e,t,n,[]),n.length>0){var r=l(t,null,1);r+="\n# Orphaned comments:\n",n.forEach((function(e){r+=("# "+e.path.join("/")+": "+function(){var e="";return[].forEach.call(arguments,(function(t){t&&""!==t.trim()&&(e&&(e+="; "),e+=t.trim())})),e}(e.b,e.a,e.e)).replace("\n","\\n ")+"\n"})),l(t,r,1)}},header:function(e,t){return l(e,t,0)},footer:function(e,t){return l(e,t,1)}}},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return B}));var r=n(4),i=n.n(r),a=n(2),s=n(9),o=n(3),c=n(8),u=n(5),l=n(0);class search_api_SearchAPI{constructor(e,t,n,r,i){this.dependencies=e,this.abortSignal=t,this.inspectorAdapters=n,this.searchSessionId=r,this.executionContext=i}search(e){const{search:t,indexPatterns:n}=this.dependencies,r={};return Object(u.combineLatest)(e.map((e=>{const i=e.name,a=Object(c.getSearchParamsFromRequest)(e,{getConfig:this.dependencies.uiSettings.get.bind(this.dependencies.uiSettings)});return Object(u.from)((async(e,t,n)=>{if(n){var r;let i=null===(r=t.body)||void 0===r?void 0:r.runtime_mappings;if(!i){const t=(await e.find(n)).find((e=>e.title===n));i=null==t?void 0:t.getComputedFields().runtimeFields}return{...t,body:{...t.body,runtime_mappings:i}}}return t})(n,a,e.index)).pipe(Object(l.tap)((t=>{this.inspectorAdapters&&(r[i]=this.inspectorAdapters.requests.start(i,{...e,searchSessionId:this.searchSessionId}),r[i].json(t.body))})),Object(l.switchMap)((e=>t.search({params:e},{abortSignal:this.abortSignal,sessionId:this.searchSessionId,executionContext:this.executionContext}).pipe(Object(l.tap)((e=>this.inspectSearchResult(e,r[i])),(e=>this.inspectSearchResult({rawResponse:null==e?void 0:e.err},r[i]))),Object(l.map)((e=>({name:i,rawResponse:e.rawResponse})))))))})))}resetSearchStats(){this.inspectorAdapters&&this.inspectorAdapters.requests.reset()}inspectSearchResult(e,t){t&&t.stats(c.search.getResponseInspectorStats(e.rawResponse)).ok({json:e.rawResponse})}}class time_cache_TimeCache{constructor(e,t){i()(this,"_timefilter",void 0),i()(this,"_maxAge",void 0),i()(this,"_cachedBounds",void 0),i()(this,"_cacheTS",void 0),i()(this,"_timeRange",void 0),this._timefilter=e,this._maxAge=t,this._cacheTS=0}_now(){return Date.now()}getTimeBounds(){const e=this._now();let t=null;if(this._cachedBounds){const n=e-this._cacheTS;if(n<40)return this._cachedBounds;if(n<this._maxAge&&(t=this._getBounds(),Math.abs(t.min-this._cachedBounds.min)<this._maxAge&&Math.abs(t.max-this._cachedBounds.max)<this._maxAge))return this._cachedBounds}return this._cacheTS=e,this._cachedBounds=t||this._getBounds(),this._cachedBounds}setTimeRange(e){this._timeRange=e}_getBounds(){const e=this._timefilter.calculateBounds(this._timeRange);return{min:e.min.valueOf(),max:e.max.valueOf()}}}const f=e=>({name:"vega",type:"render",inputTypes:["kibana_context","null"],help:o.i18n.translate("visTypeVega.function.help",{defaultMessage:"Vega visualization"}),args:{spec:{types:["string"],default:"",help:""}},async fn(t,r,i){const o=function({plugins:{data:e},core:{uiSettings:t},getServiceSettings:r},i={}){let s;const{timefilter:o}=e.query.timefilter,u=new time_cache_TimeCache(o,3e3);return async function({timeRange:e,filters:o,query:l,visParams:f,searchSessionId:p,executionContext:d}){if(!s){const{search:e,indexPatterns:n}=Object(a.a)();s=new search_api_SearchAPI({uiSettings:t,search:e,indexPatterns:n,injectedMetadata:Object(a.d)()},i.abortSignal,i.inspectorAdapters,p,d)}u.setTimeRange(e);const h=c.esQuery.getEsQueryConfig(t),g=c.esQuery.buildEsQuery(void 0,l,o,h),{VegaParser:m}=await Promise.all([n.e(0),n.e(7)]).then(n.bind(null,225)),b=new m(f.spec,s,u,g,r);return await b.parseAsync()}}(e,i);return{type:"render",as:"vega_vis",value:{visData:await o({timeRange:Object(s.get)(t,"timeRange"),query:Object(s.get)(t,"query"),filters:Object(s.get)(t,"filters"),visParams:{spec:r.spec},searchSessionId:i.getSearchSessionId(),executionContext:i.getExecutionContext()}),visType:"vega",visConfig:{spec:r.spec}}}}});var p=n(12),d=n(22),h=n(11);var g=n(19),m=n(6),b=n(10),v=n(20),y=n(23);const _=o.i18n.translate("visTypeVega.inspector.vegaAdapter.signal",{defaultMessage:"Signal"}),j=o.i18n.translate("visTypeVega.inspector.vegaAdapter.value",{defaultMessage:"Value"}),O=e=>e.view._runtime,x=(e,t)=>t.reduce(((t,n)=>{try{const r=e[n];t[n]="object"==typeof r?JSON.stringify(r):`${r}`}catch(e){t[n]="(..)"}return t}),{});class vega_adapter_VegaAdapter{constructor(){i()(this,"debugValuesSubject",new u.ReplaySubject)}bindInspectValues(e){this.debugValuesSubject.next(e)}getDataSetsSubscription(){return this.debugValuesSubject.pipe(Object(l.filter)((e=>Boolean(e))),Object(l.map)((e=>{const t=O(e);return Object.keys(t.data||[]).reduce(((e,n)=>{const r=t.data[n].values.value;if(r&&r[0]){const t=Object.keys(r[0]);e.push({id:n,columns:t.map((e=>({id:e,schema:"json"}))),data:r.map((e=>x(e,t)))})}return e}),[])})))}getSignalsSetsSubscription(){const e=this.debugValuesSubject.pipe(Object(l.filter)((e=>Boolean(e))),Object(l.switchMap)((e=>{const t=O(e);return Object(u.merge)(...Object.keys(t.signals).map((t=>Object(u.fromEventPattern)((n=>e.view.addSignalListener(t,n)),(n=>e.view.removeSignalListener(t,n)))))).pipe(Object(l.debounce)((e=>Object(u.timer)(350))),Object(l.map)((()=>e)))})));return Object(u.merge)(this.debugValuesSubject,e).pipe(Object(l.filter)((e=>Boolean(e))),Object(l.map)((e=>{const t=O(e);return{columns:[{id:_,schema:"text"},{id:j,schema:"json"}],data:Object.keys(t.signals).map((e=>x({[_]:e,[j]:t.signals[e].value},[_,j])))}})))}getSpecSubscription(){return this.debugValuesSubject.pipe(Object(l.filter)((e=>Boolean(e))),Object(l.map)((e=>JSON.stringify(e.spec,null,2))))}}var w=n(1);const S=Object(m.lazy)((()=>n.e(5).then(n.bind(null,224)))),k=o.i18n.translate("visTypeVega.inspector.vegaDebugLabel",{defaultMessage:"Vega debug"}),E=()=>({requests:new y.RequestAdapter,vega:new vega_adapter_VegaAdapter});var P=n(15);const T=e=>{const t=Object(P.buildExpressionFunction)("vega",{spec:e.params.spec});return Object(P.buildExpression)([t]).toAst()};var C=n(17);function I(){const e=Object(w.jsx)(C.FormattedMessage,{id:"visTypeVega.mapView.experimentalMapLayerInfo",defaultMessage:"Map layer is experimental and is not subject to the support SLA of official GA features. For feedback, please create an issue in {githubLink}.",values:{githubLink:Object(w.jsx)(b.EuiLink,{external:!0,href:"https://github.com/elastic/kibana/issues/new/choose",target:"_blank"},"GitHub")}});return Object(w.jsx)(b.EuiCallOut,{className:"hide-for-sharing","data-test-subj":"experimentalMapLayerInfo",size:"s",title:e,iconType:"beaker"})}const A=e=>{if(e.params.spec)try{var t,n;if("map"===(null===(t=Object(p.parse)(e.params.spec,{legacyRoot:!1,keepWsc:!0}).config)||void 0===t||null===(n=t.kibana)||void 0===n?void 0:n.type))return Object(w.jsx)(I,null)}catch(e){}return null},V=Object(m.lazy)((()=>n.e(4).then(n.bind(null,227)))),D=e=>Object(w.jsx)(V,e);var M=n(16);const q=Object(m.lazy)((()=>n.e(6).then(n.bind(null,226))));var L=n(21);class plugin_VegaPlugin{constructor(e){i()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{inspector:t,data:n,expressions:r,visualizations:i,mapsEms:s}){Object(a.k)({enableExternalUrls:this.initializerContext.config.get().enableExternalUrls,emsTileLayerId:e.injectedMetadata.getInjectedVar("emsTileLayerId",!0)}),Object(a.n)(e.uiSettings),Object(a.l)(new L.a(s.config,this.initializerContext.env.packageInfo.version));const c={core:e,plugins:{data:n},getServiceSettings:s.getServiceSettings};var u,l;t.registerView((u={uiSettings:e.uiSettings},{title:k,shouldShow:e=>Boolean(e.vega),component:e=>Object(w.jsx)(v.KibanaContextProvider,{services:u},Object(w.jsx)(m.Suspense,{fallback:Object(w.jsx)(b.EuiLoadingSpinner,null)},Object(w.jsx)(S,e)))})),r.registerFunction((()=>f(c))),r.registerRenderer((l=c,{name:"vega_vis",reuseDomNode:!0,render:(e,{visData:t},n)=>{n.onDestroy((()=>{Object(M.unmountComponentAtNode)(e)})),Object(M.render)(Object(w.jsx)(h.VisualizationContainer,{handlers:n},Object(w.jsx)(q,{deps:l,fireEvent:n.event,renderComplete:n.done,visData:t})),e)}})),i.createBaseVisualization({name:"vega",title:"Vega",getInfoMessage:A,description:o.i18n.translate("visTypeVega.type.vegaDescription",{defaultMessage:"Use Vega to create new types of visualizations.",description:"Vega and Vega-Lite are product names and should not be translated"}),note:o.i18n.translate("visTypeVega.type.vegaNote",{defaultMessage:"Requires knowledge of Vega syntax."}),icon:"visVega",group:h.VisGroups.PROMOTED,titleInWizard:o.i18n.translate("visTypeVega.type.vegaTitleInWizard",{defaultMessage:"Custom visualization"}),visConfig:{defaults:{spec:'{\n/*\n\nWelcome to Vega visualizations.  Here you can design your own dataviz from scratch using a declarative language called Vega, or its simpler form Vega-Lite.  In Vega, you have the full control of what data is loaded, even from multiple sources, how that data is transformed, and what visual elements are used to show it.  Use help icon to view Vega examples, tutorials, and other docs.  Use the wrench icon to reformat this text, or to remove comments.\n\nThis example graph shows the document count in all indexes in the current time range.  You might need to adjust the time filter in the upper right corner.\n*/\n\n  $schema: https://vega.github.io/schema/vega-lite/v5.json\n  title: Event counts from all indexes\n\n  // Define the data source\n  data: {\n    url: {\n/*\nAn object instead of a string for the "url" param is treated as an Elasticsearch query. Anything inside this object is not part of the Vega language, but only understood by Kibana and Elasticsearch server. This query counts the number of documents per time interval, assuming you have a @timestamp field in your data.\n\nKibana has a special handling for the fields surrounded by "%".  They are processed before the the query is sent to Elasticsearch. This way the query becomes context aware, and can use the time range and the dashboard filters.\n*/\n\n      // Apply dashboard context filters when set\n      %context%: true\n      // Filter the time picker (upper right corner) with this field\n      %timefield%: @timestamp\n\n/*\nSee .search() documentation for :  https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference.html#api-search\n*/\n\n      // Which index to search\n      index: _all\n      // Aggregate data by the time field into time buckets, counting the number of documents in each bucket.\n      body: {\n        aggs: {\n          time_buckets: {\n            date_histogram: {\n              // Use date histogram aggregation on @timestamp field\n              field: @timestamp\n              // The interval value will depend on the daterange picker (true), or use an integer to set an approximate bucket count\n              interval: {%autointerval%: true}\n              // Make sure we get an entire range, even if it has no data\n              extended_bounds: {\n                // Use the current time range\'s start and end\n                min: {%timefilter%: "min"}\n                max: {%timefilter%: "max"}\n              }\n              // Use this for linear (e.g. line, area) graphs.  Without it, empty buckets will not show up\n              min_doc_count: 0\n            }\n          }\n        }\n        // Speed up the response by only including aggregation results\n        size: 0\n      }\n    }\n/*\nElasticsearch will return results in this format:\n\naggregations: {\n  time_buckets: {\n    buckets: [\n      {\n        key_as_string: 2015-11-30T22:00:00.000Z\n        key: 1448920800000\n        doc_count: 0\n      },\n      {\n        key_as_string: 2015-11-30T23:00:00.000Z\n        key: 1448924400000\n        doc_count: 0\n      }\n      ...\n    ]\n  }\n}\n\nFor our graph, we only need the list of bucket values.  Use the format.property to discard everything else.\n*/\n    format: {property: "aggregations.time_buckets.buckets"}\n  }\n\n  // "mark" is the graphics element used to show our data.  Other mark values are: area, bar, circle, line, point, rect, rule, square, text, and tick.  See https://vega.github.io/vega-lite/docs/mark.html\n  mark: line\n\n  // "encoding" tells the "mark" what data to use and in what way.  See https://vega.github.io/vega-lite/docs/encoding.html\n  encoding: {\n    x: {\n      // The "key" value is the timestamp in milliseconds.  Use it for X axis.\n      field: key\n      type: temporal\n      axis: {title: false} // Customize X axis format\n    }\n    y: {\n      // The "doc_count" is the count per bucket.  Use it for Y axis.\n      field: doc_count\n      type: quantitative\n      axis: {title: "Document count"}\n    }\n  }\n}\n'}},editorConfig:{optionsTemplate:D,enableAutoApply:!0,defaultSize:d.DefaultEditorSize.MEDIUM},toExpressionAst:T,options:{showIndexSelection:!1,showQueryBar:!0,showFilterBar:!0},getSupportedTriggers:()=>[h.VIS_EVENT_TO_TRIGGER.applyFilter],getUsedIndexPattern:async e=>{try{const t=Object(p.parse)(e.spec,{legacyRoot:!1,keepWsc:!0});return Object(g.a)(t)}catch(e){}return[]},inspectorAdapters:E,requiresSearch:!0})}start(e,{data:t}){Object(a.m)(e.notifications),Object(a.h)(t),Object(a.j)(e.injectedMetadata),Object(a.i)(e.docLinks)}}function B(e){return new plugin_VegaPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t){e.exports=__kbnSharedDeps__.Jquery},function(e,t){e.exports=__kbnSharedDeps__.Theme},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}]);