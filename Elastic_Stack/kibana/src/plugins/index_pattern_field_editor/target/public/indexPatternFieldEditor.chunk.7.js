(window.indexPatternFieldEditor_bundle_jsonpfunction=window.indexPatternFieldEditor_bundle_jsonpfunction||[]).push([[7],{44:function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],l=t.base?i[0]+t.base:i[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var c=s(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(o[c].references++,o[c].updater(m)):o.push({identifier:d,updater:v(m,t),references:1}),r.push(d)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,a;if(t.singleton){var i=h++;n=p||(p=u(t)),r=m.bind(null,n,i,!1),a=m.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);o[a].references--}for(var i=l(e,t),u=0;u<n.length;u++){var d=s(n[u]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=i}}}},45:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},46:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(47);case"v7light":return n(49);case"v8dark":return n(51);case"v8light":return n(53)}},47:function(e,t,n){var r=n(44),a=n(48);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},48:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},49:function(e,t,n){var r=n(44),a=n(50);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},50:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},51:function(e,t,n){var r=n(44),a=n(52);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},52:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},53:function(e,t,n){var r=n(44),a=n(54);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},54:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var r=n(4),a=n.n(r),i=(n(46),n(1)),o=n(3),s=n(2),l=n(13),u=n(0);class samples_FormatEditorSamples extends i.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(u.jsx)("div",null,e)}];return e.length?Object(u.jsx)(o.EuiFormRow,{label:Object(u.jsx)(l.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(u.jsx)(o.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}a()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},98:function(e,t,n){"use strict";n.r(t),n.d(t,"HistogramFormatEditor",(function(){return HistogramFormatEditor}));var r=n(4),a=n.n(r),i=n(1),o=n(2),s=n(13),l=n(3),u=n(7),d=n(55),c=n(34),m=n(0);class HistogramFormatEditor extends u.DefaultFormatEditor{constructor(...e){super(...e),a()(this,"state",{...u.defaultState,sampleInputs:[50.1234,100.0001,99.9999,{values:[1e-5,99.9999,200,300],counts:[573,102,482]}]})}render(){var e,t;const{formatParams:n}=this.props,{error:r,samples:a}=this.state,u=[{value:"number",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.number",{defaultMessage:"Number"})},{value:"bytes",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.bytes",{defaultMessage:"Bytes"})},{value:"percent",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.percent",{defaultMessage:"Percentage"})}];return Object(m.jsx)(i.Fragment,null,Object(m.jsx)(l.EuiFormRow,{label:o.i18n.translate("indexPatternFieldEditor.histogram.histogramAsNumberLabel",{defaultMessage:"Aggregated number format"})},Object(m.jsx)(l.EuiSelect,{options:u,value:n.id||"number",onChange:e=>{this.onChange({id:e.target.value})}})),Object(m.jsx)(l.EuiFormRow,{label:o.i18n.translate("indexPatternFieldEditor.histogram.numeralLabel",{defaultMessage:"Numeral format pattern (optional)"}),helpText:Object(m.jsx)("span",null,Object(m.jsx)(l.EuiLink,{target:"_blank",href:"https://adamwdraper.github.io/Numeral-js/"},Object(m.jsx)(s.FormattedMessage,{id:"indexPatternFieldEditor.number.documentationLabel",defaultMessage:"Documentation"})," ",Object(m.jsx)(l.EuiIcon,{type:"link"}))),isInvalid:!!r,error:r},Object(m.jsx)(l.EuiFieldText,{value:null!==(e=null==n||null===(t=n.params)||void 0===t?void 0:t.pattern)&&void 0!==e?e:"",onChange:e=>{this.onChange({params:{pattern:e.target.value}})},isInvalid:!!r})),Object(m.jsx)(d.a,{samples:a}))}}a()(HistogramFormatEditor,"formatId",c.a)}}]);