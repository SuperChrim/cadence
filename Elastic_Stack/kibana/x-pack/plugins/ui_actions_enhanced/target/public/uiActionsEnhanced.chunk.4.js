/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uiActionsEnhanced_bundle_jsonpfunction=window.uiActionsEnhanced_bundle_jsonpfunction||[]).push([[4],{30:function(e,n,t){"use strict";var l,o=function(){return void 0===l&&(l=Boolean(window&&document&&document.all&&!window.atob)),l},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function r(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},l=[],o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],c=t[s]||0,u="".concat(s," ").concat(c);t[s]=c+1;var d=r(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:w(f,n),references:1}),l.push(u)}return l}function c(e){var n=document.createElement("style"),l=e.attributes||{};if(void 0===l.nonce){var o=t.nc;o&&(l.nonce=o)}if(Object.keys(l).forEach((function(e){n.setAttribute(e,l[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,l){var o=t?"":l.media?"@media ".concat(l.media," {").concat(l.css,"}"):l.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var l=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=l;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(l))}}var b=null,h=0;function w(e,n){var t,l,o;if(n.singleton){var i=h++;t=b||(b=c(n)),l=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=c(n),l=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return l(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;l(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var l=0;l<t.length;l++){var o=r(t[l]);a[o].references--}for(var i=s(e,n),c=0;c<t.length;c++){var u=r(t[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},31:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",l=e[3];if(!l)return t;if(n&&"function"==typeof btoa){var o=(a=l,r=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(s," */")),i=l.sources.map((function(e){return"/*# sourceURL=".concat(l.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,r,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,l){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(l)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var r=0;r<e.length;r++){var s=[].concat(e[r]);l&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},53:function(e,n,t){switch(window.__kbnThemeTag__){case"v7dark":return t(54);case"v7light":return t(56);case"v8dark":return t(58);case"v8light":return t(60)}},54:function(e,n,t){var l=t(30),o=t(55);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};l(o,i);e.exports=o.locals||{}},55:function(e,n,t){(n=t(31)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},56:function(e,n,t){var l=t(30),o=t(57);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};l(o,i);e.exports=o.locals||{}},57:function(e,n,t){(n=t(31)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},58:function(e,n,t){var l=t(30),o=t(59);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};l(o,i);e.exports=o.locals||{}},59:function(e,n,t){(n=t(31)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},60:function(e,n,t){var l=t(30),o=t(61);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};l(o,i);e.exports=o.locals||{}},61:function(e,n,t){(n=t(31)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},88:function(e,n,t){"use strict";t.r(n),t.d(n,"UrlDrilldownCollectConfig",(function(){return x}));var l=t(2),o=t.n(l),i=t(7),a=(t(53),t(3));a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplatePlaceholderText",{defaultMessage:"Example: {exampleUrl}",values:{exampleUrl:"https://www.my-url.com/?{{event.key}}={{event.value}}"}}),a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewHelpText",{defaultMessage:"Please note that in preview \\{\\{event.*\\}\\} variables are substituted with dummy values."});const r=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateLabel",{defaultMessage:"Enter URL:"}),s=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateSyntaxHelpLinkText",{defaultMessage:"Syntax help"}),c=(a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLabel",{defaultMessage:"URL preview:"}),a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLinkText",{defaultMessage:"Preview"}),a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.openInNewTabLabel",{defaultMessage:"Open in new window"})),u=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.additionalOptions",{defaultMessage:"Additional options"}),d=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeUrl",{defaultMessage:"Encode URL"}),f=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeDescription",{defaultMessage:"If enabled, URL will be escaped using percent encoding"}),p=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.addVariableButtonTitle",{defaultMessage:"Add variable"}),b=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesHelpLinkText",{defaultMessage:"Help"}),h=a.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesFilterPlaceholderText",{defaultMessage:"Filter variables"});var w=t(1);const v=({variables:e,onSelect:n,variablesHelpLink:t})=>{const[o,a]=Object(l.useState)(!1),r=()=>a(!1),s=e.map((({label:e})=>({key:e,label:e})));return Object(w.jsx)(i.EuiPopover,{ownFocus:!0,button:Object(w.jsx)(i.EuiText,{size:"xs"},Object(w.jsx)(i.EuiLink,{onClick:()=>a(!0)},p," ",Object(w.jsx)(i.EuiIcon,{type:"indexOpen"}))),isOpen:o,closePopover:r,panelPaddingSize:"none",anchorPosition:"downLeft"},Object(w.jsx)(i.EuiSelectable,{singleSelection:!0,searchable:!0,searchProps:{placeholder:h,compressed:!0},options:s,onChange:e=>{const t=e.find((e=>"on"===e.checked));t&&(n(t.key),r())},listProps:{showIcons:!1}},((e,n)=>Object(w.jsx)("div",{style:{width:320}},Object(w.jsx)(i.EuiPopoverTitle,null,n),e,t&&Object(w.jsx)(i.EuiPopoverFooter,{className:"eui-textRight"},Object(w.jsx)(i.EuiLink,{external:!0,href:t,target:"_blank"},b))))))};var g=t(4);const x=({config:e,variables:n,onConfig:t,syntaxHelpDocsLink:a,variablesHelpDocsLink:p})=>{var b,h;const x=Object(l.useRef)(null),[m,j]=o.a.useState(!1),C=null!==(b=e.url.template)&&void 0!==b?b:"";const E=m&&!C,_=Object(w.jsx)(v,{variables:n,variablesHelpLink:p,onSelect:e=>{const n=x.current;n&&n.trigger("keyboard","type",{text:"{{"+e+"}}"})}});return Object(w.jsx)(o.a.Fragment,null,Object(w.jsx)(i.EuiFormRow,{fullWidth:!0,isInvalid:E,className:"uaeUrlDrilldownCollectConfig__urlTemplateFormRow",label:r,helpText:a&&Object(w.jsx)(i.EuiLink,{external:!0,target:"_blank",href:a},s),labelAppend:_},Object(w.jsx)(g.UrlTemplateEditor,{variables:n,value:C,onChange:n=>function(n){e.url.template!==n&&(j(!0),t({...e,url:{...e.url,template:n}}))}(n),onEditor:e=>{x.current=e}})),Object(w.jsx)(i.EuiSpacer,{size:"l"}),Object(w.jsx)(i.EuiAccordion,{id:"accordion_url_drilldown_additional_options",buttonContent:u,"data-test-subj":"urlDrilldownAdditionalOptions"},Object(w.jsx)(i.EuiSpacer,{size:"s"}),Object(w.jsx)(i.EuiPanel,{color:"subdued",borderRadius:"none",hasShadow:!1,style:{border:"none"}},Object(w.jsx)(i.EuiFormRow,{hasChildLabel:!1},Object(w.jsx)(i.EuiSwitch,{id:"openInNewTab",name:"openInNewTab",label:c,checked:e.openInNewTab,onChange:()=>t({...e,openInNewTab:!e.openInNewTab}),"data-test-subj":"urlDrilldownOpenInNewTab"})),Object(w.jsx)(i.EuiFormRow,{hasChildLabel:!1,fullWidth:!0},Object(w.jsx)(i.EuiSwitch,{id:"encodeUrl",name:"encodeUrl",label:Object(w.jsx)(o.a.Fragment,null,d,Object(w.jsx)(i.EuiSpacer,{size:"s"}),Object(w.jsx)(i.EuiTextColor,{color:"subdued"},f)),checked:null===(h=e.encodeUrl)||void 0===h||h,onChange:()=>{var n;return t({...e,encodeUrl:!(null===(n=e.encodeUrl)||void 0===n||n)})}})))))}}}]);