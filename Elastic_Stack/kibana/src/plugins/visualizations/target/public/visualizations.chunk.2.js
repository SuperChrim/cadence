(window.visualizations_bundle_jsonpfunction=window.visualizations_bundle_jsonpfunction||[]).push([[2],{36:function(e,n,o){"use strict";var t,r=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var e={};return function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[n]=o}return e[n]}}(),a=[];function l(e){for(var n=-1,o=0;o<a.length;o++)if(a[o].identifier===e){n=o;break}return n}function s(e,n){for(var o={},t=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],c=o[s]||0,u="".concat(s," ").concat(c);o[s]=c+1;var b=l(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==b?(a[b].references++,a[b].updater(d)):a.push({identifier:u,updater:f(d,n),references:1}),t.push(u)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var r=o.nc;r&&(t.nonce=r)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,b=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,o,t){var r=o?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=b(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function g(e,n,o){var t=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,v=0;function f(e,n){var o,t,r;if(n.singleton){var i=v++;o=p||(p=c(n)),t=d.bind(null,o,i,!1),r=d.bind(null,o,i,!0)}else o=c(n),t=g.bind(null,o,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var o=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<o.length;t++){var r=l(o[t]);a[r].references--}for(var i=s(e,n),c=0;c<o.length;c++){var u=l(o[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}o=i}}}},37:function(e,n,o){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o=function(e,n){var o=e[1]||"",t=e[3];if(!t)return o;if(n&&"function"==typeof btoa){var r=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,l,s;return[o].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},n.i=function(e,o,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);t&&r[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),n.push(s))}},n}},74:function(e,n,o){var t=o(36),r=o(75);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(r,i);e.exports=r.locals||{}},75:function(e,n,o){(n=o(37)(!1)).push([e.i,".embPanel .visualization{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0;opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel_optionsMenuPopover[class*='-isOpen'] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}\n",""]),e.exports=n},76:function(e,n,o){var t=o(36),r=o(77);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(r,i);e.exports=r.locals||{}},77:function(e,n,o){(n=o(37)(!1)).push([e.i,".embPanel .visualization{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0;opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel_optionsMenuPopover[class*='-isOpen'] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}\n",""]),e.exports=n},78:function(e,n,o){var t=o(36),r=o(79);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(r,i);e.exports=r.locals||{}},79:function(e,n,o){(n=o(37)(!1)).push([e.i,".embPanel .visualization{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0;opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel_optionsMenuPopover[class*='-isOpen'] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}\n",""]),e.exports=n},80:function(e,n,o){var t=o(36),r=o(81);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};t(r,i);e.exports=r.locals||{}},81:function(e,n,o){(n=o(37)(!1)).push([e.i,".embPanel .visualization{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin}.embPanel .visualization::-webkit-scrollbar{width:16px;height:16px}.embPanel .visualization::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.embPanel .visualization::-webkit-scrollbar-corner,.embPanel .visualization::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.embPanel .visLegend__toggle{border-bottom-right-radius:0;border-top-left-radius:0;opacity:0}.embPanel .visLegend__toggle:focus{opacity:1}.embPanel_optionsMenuPopover[class*='-isOpen'] .visLegend__toggle,.embPanel:hover .visLegend__toggle{opacity:1}.embPanel--editing .visLegend__toggle{opacity:1}\n",""]),e.exports=n},83:function(e,n,o){switch(window.__kbnThemeTag__){case"v7dark":return o(74);case"v7light":return o(76);case"v8dark":return o(78);case"v8light":return o(80)}}}]);