(window.indexPatternFieldEditor_bundle_jsonpfunction=window.indexPatternFieldEditor_bundle_jsonpfunction||[]).push([[6],{44:function(e,t,n){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},a=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],l=n[u]||0,d="".concat(u," ").concat(l);n[u]=l+1;var c=s(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(o[c].references++,o[c].updater(f)):o.push({identifier:d,updater:x(f,t),references:1}),a.push(d)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,h=0;function x(e,t){var n,a,r;if(t.singleton){var i=h++;n=p||(p=l(t)),a=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(t),a=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=s(n[a]);o[r].references--}for(var i=u(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=i}}}},45:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var o,s,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},46:function(e,t,n){switch(window.__kbnThemeTag__){case"v7dark":return n(47);case"v7light":return n(49);case"v8dark":return n(51);case"v8light":return n(53)}},47:function(e,t,n){var a=n(44),r=n(48);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},48:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},49:function(e,t,n){var a=n(44),r=n(50);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},50:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},51:function(e,t,n){var a=n(44),r=n(52);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},52:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},53:function(e,t,n){var a=n(44),r=n(54);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},54:function(e,t,n){(t=n(45)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var a=n(4),r=n.n(a),i=(n(46),n(1)),o=n(3),s=n(2),u=n(13),l=n(0);class samples_FormatEditorSamples extends i.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(l.jsx)("div",null,e)}];return e.length?Object(l.jsx)(o.EuiFormRow,{label:Object(l.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(l.jsx)(o.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}r()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},93:function(e,t,n){"use strict";n.r(t),n.d(t,"DurationFormatEditor",(function(){return DurationFormatEditor}));var a=n(4),r=n.n(a),i=n(1),o=n.n(i),s=n(3),u=n(13),l=n(2),d=n(7),c=n(55),f=n(28),m=n(0);class DurationFormatEditor extends d.DefaultFormatEditor{constructor(...e){super(...e),r()(this,"state",{...d.defaultState,sampleInputs:[-123,1,12,123,658,1988,3857,123292,923528271],hasDecimalError:!1})}static getDerivedStateFromProps(e,t){const n=super.getDerivedStateFromProps(e,t);let a=null;return!e.format.isHuman()&&e.formatParams.outputPrecision>20?(a=l.i18n.translate("indexPatternFieldEditor.durationErrorMessage",{defaultMessage:"Decimal places must be between 0 and 20"}),e.onError(a),{...n,error:a,hasDecimalError:!0}):{...n,hasDecimalError:!1}}render(){const{format:e}=this.props,{error:t,samples:n,hasDecimalError:a}=this.state,r={includeSpaceWithSuffix:e.getParamDefaults().includeSpaceWithSuffix,...this.props.formatParams};return Object(m.jsx)(i.Fragment,null,Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.inputFormatLabel",defaultMessage:"Input format"}),isInvalid:!!t,error:a?null:t},Object(m.jsx)(s.EuiSelect,{"data-test-subj":"durationEditorInputFormat",value:r.inputFormat,options:e.type.inputFormats.map((e=>({value:e.kind,text:e.text}))),onChange:e=>{this.onChange({inputFormat:e.target.value})},isInvalid:!!t})),Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.outputFormatLabel",defaultMessage:"Output format"}),isInvalid:!!t},Object(m.jsx)(s.EuiSelect,{"data-test-subj":"durationEditorOutputFormat",value:r.outputFormat,options:e.type.outputFormats.map((e=>({value:e.method,text:e.text}))),onChange:e=>{this.onChange({outputFormat:e.target.value})},isInvalid:!!t})),e.isHuman()?null:Object(m.jsx)(o.a.Fragment,null,Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.decimalPlacesLabel",defaultMessage:"Decimal places"}),isInvalid:!!t,error:a?t:null},Object(m.jsx)(s.EuiFieldNumber,{value:r.outputPrecision,min:0,max:20,onChange:e=>{this.onChange({outputPrecision:e.target.value?Number(e.target.value):null})},isInvalid:!!t})),!e.isHumanPrecise()&&Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.showSuffixLabel",defaultMessage:"Show suffix"}),checked:Boolean(r.showSuffix),onChange:e=>{this.onChange({showSuffix:!r.showSuffix})}})),Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{disabled:!Boolean(r.showSuffix)&&!e.isHumanPrecise(),label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.showSuffixLabel.short",defaultMessage:"Use short suffix"}),checked:Boolean(r.useShortSuffix),onChange:e=>{this.onChange({useShortSuffix:!r.useShortSuffix})}})),Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{disabled:!Boolean(r.showSuffix)&&!e.isHumanPrecise(),label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.includeSpace",defaultMessage:"Include space between suffix and value"}),checked:Boolean(r.includeSpaceWithSuffix),onChange:e=>{this.onChange({includeSpaceWithSuffix:!r.includeSpaceWithSuffix})}}))),Object(m.jsx)(c.a,{samples:n}))}}r()(DurationFormatEditor,"formatId",f.a)}}]);