(window.inputControlVis_bundle_jsonpfunction=window.inputControlVis_bundle_jsonpfunction||[]).push([[2],[,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n(6)(1073)},,function(t,e,n){"use strict";var o,s=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],s=0;s<t.length;s++){var r=t[s],l=e.base?r[0]+e.base:r[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var p=a(c),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(i[p].references++,i[p].updater(h)):i.push({identifier:c,updater:x(h,e),references:1}),o.push(c)}return o}function d(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var s=n.nc;s&&(o.nonce=s)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,p=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function h(t,e,n,o){var s=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=p(e,s);else{var r=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function u(t,e,n){var o=n.css,s=n.media,r=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,g=0;function x(t,e){var n,o,s;if(e.singleton){var r=g++;n=m||(m=d(e)),o=h.bind(null,n,r,!1),s=h.bind(null,n,r,!0)}else n=d(e),o=u.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var s=a(n[o]);i[s].references--}for(var r=l(t,e),d=0;d<n.length;d++){var c=a(n[d]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=r}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var s=(i=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([s]).join("\n")}var i,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(s[i]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);o&&s[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return c}));const o={LIST:"list",RANGE:"range"},s=(t,e,n)=>[...t.slice(0,e),n,...t.slice(e+1)],r=(t,e)=>[...t,e],i=(t,e,n)=>{let o;if(o=n>=0?e+1:e-1,o<0)return[...t.slice(1),t[0]];if(o>=t.length){const e=t.length-1;return[t[e],...t.slice(0,e)]}{const n=t.slice(),s=n[o];return n[o]=n[e],n[e]=s,n}},a=(t,e)=>[...t.slice(0,e),...t.slice(e+1)],l=t=>{const e={};switch(t){case o.RANGE:e.decimalPlaces=0,e.step=1;break;case o.LIST:e.type="terms",e.multiselect=!0,e.dynamicOptions=!0,e.size=5,e.order="desc"}return e},d=t=>({id:(new Date).getTime().toString(),indexPattern:"",fieldName:"",parent:"",label:"",type:t,options:l(t)}),c=(t,e)=>{let n=`${t.type}: ${e}`;return t.label?n=`${t.label}`:t.fieldName&&(n=`${t.fieldName}`),n}},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var o=n(10),s=n.n(o);function r(t){const e=new Map;return t.forEach((n=>{const o=[n.id],r=e=>{if(s.a.has(e,"parent")&&""!==e.parent&&!o.includes(e.parent)){o.push(e.parent);const s=(n=e.parent,t.find((t=>t.id===n)));s&&r(s)}var n};r(n),e.set(n.id,o)})),e}var i=n(20);function a(t,e,n){return t.filter((t=>{if(!t.indexPattern||!t.fieldName)return!1;const o=n.get(t.id);return null==o||!o.includes(e)})).map(((t,e)=>({value:t.id,text:Object(i.c)(t,e)})))}},,,,,,,,,,,,,,,,,function(t,e,n){switch(window.__kbnThemeTag__){case"v7dark":return n(42);case"v7light":return n(44);case"v8dark":return n(46);case"v8light":return n(48)}},function(t,e,n){var o=n(18),s=n(43);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},function(t,e,n){(e=n(19)(!1)).push([t.i,".icvControlEditor__panel{z-index:1;margin-bottom:16px}\n",""]),t.exports=e},function(t,e,n){var o=n(18),s=n(45);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},function(t,e,n){(e=n(19)(!1)).push([t.i,".icvControlEditor__panel{z-index:1;margin-bottom:16px}\n",""]),t.exports=e},function(t,e,n){var o=n(18),s=n(47);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},function(t,e,n){(e=n(19)(!1)).push([t.i,".icvControlEditor__panel{z-index:1;margin-bottom:16px}\n",""]),t.exports=e},function(t,e,n){var o=n(18),s=n(49);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var r={insert:"head",singleton:!1};o(s,r);t.exports=s.locals||{}},function(t,e,n){(e=n(19)(!1)).push([t.i,".icvControlEditor__panel{z-index:1;margin-bottom:16px}\n",""]),t.exports=e},,,function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return controls_tab_ControlsTab}));var o=n(16),s=n.n(o),r=n(1),i=n.n(r),a=n(12),l=n(0),d=n(11),c=n(2);const p=Object(a.injectI18n)((function(t){const{controlIndex:e,indexPatternId:n,intl:o,onChange:s}=t,r=`indexPatternSelect-${e}`;return Object(c.jsx)(d.EuiFormRow,{id:r,label:o.formatMessage({id:"inputControl.editor.indexPatternSelect.patternLabel",defaultMessage:"Index Pattern"})},Object(c.jsx)(t.IndexPatternSelect,{placeholder:o.formatMessage({id:"inputControl.editor.indexPatternSelect.patternPlaceholder",defaultMessage:"Select index pattern..."}),indexPatternId:n,onChange:s,"data-test-subj":r}))}));var h=n(10),u=n.n(h);class field_select_FieldSelectUi extends r.Component{constructor(t){super(t),s()(this,"hasUnmounted",void 0),s()(this,"loadFields",(t=>{this.setState({isLoading:!0,fields:[],indexPatternId:t},this.debouncedLoad.bind(null,t))})),s()(this,"debouncedLoad",u.a.debounce((async t=>{var e;if(!t||0===t.length)return;let n;try{n=await this.props.getIndexPattern(t)}catch(t){return}if(this.hasUnmounted)return;if(n.id!==this.state.indexPatternId)return;const o=new Map,s=[];n.fields.filter(null!==(e=this.props.filterField)&&void 0!==e?e:()=>!0).forEach((t=>{var e;const n=null!==(e=o.get(t.type))&&void 0!==e?e:[];n.push(t.name),o.set(t.type,n)})),o.forEach(((t,e)=>{s.push({label:e,options:t.sort().map((t=>({value:t,label:t})))})})),s.sort(((t,e)=>t.label<e.label?-1:t.label>e.label?1:0)),this.setState({isLoading:!1,fields:s})}),300)),s()(this,"onChange",(t=>{this.props.onChange(u.a.get(t,"0.value"))})),this.hasUnmounted=!1,this.state={isLoading:!1,fields:[],indexPatternId:t.indexPatternId}}componentWillUnmount(){this.hasUnmounted=!0}componentDidMount(){this.loadFields(this.state.indexPatternId)}UNSAFE_componentWillReceiveProps(t){var e;this.props.indexPatternId!==t.indexPatternId&&this.loadFields(null!==(e=t.indexPatternId)&&void 0!==e?e:"")}render(){if(!this.props.indexPatternId||0===this.props.indexPatternId.trim().length)return null;const t=`fieldSelect-${this.props.controlIndex}`,e=[],{intl:n}=this.props;return this.props.fieldName&&e.push({value:this.props.fieldName,label:this.props.fieldName}),Object(c.jsx)(d.EuiFormRow,{id:t,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.fieldSelect.fieldLabel",defaultMessage:"Field"})},Object(c.jsx)(d.EuiComboBox,{placeholder:n.formatMessage({id:"inputControl.editor.fieldSelect.selectFieldPlaceholder",defaultMessage:"Select field..."}),singleSelection:!0,isLoading:this.state.isLoading,options:this.state.fields,selectedOptions:e,onChange:this.onChange,"data-test-subj":t}))}}const m=Object(a.injectI18n)(field_select_FieldSelectUi);function g(t){return"number"===t.type}class range_control_editor_RangeControlEditor extends r.Component{constructor(...t){super(...t),s()(this,"state",{IndexPatternSelect:null})}componentDidMount(){this.getIndexPatternSelect()}async getIndexPatternSelect(){const[,{data:t}]=await this.props.deps.core.getStartServices();this.setState({IndexPatternSelect:t.ui.IndexPatternSelect})}render(){const t=`stepSize-${this.props.controlIndex}`,e=`decimalPlaces-${this.props.controlIndex}`;return null===this.state.IndexPatternSelect?null:Object(c.jsx)(r.Fragment,null,Object(c.jsx)(p,{indexPatternId:this.props.controlParams.indexPattern,onChange:this.props.handleIndexPatternChange,controlIndex:this.props.controlIndex,IndexPatternSelect:this.state.IndexPatternSelect}),Object(c.jsx)(m,{fieldName:this.props.controlParams.fieldName,indexPatternId:this.props.controlParams.indexPattern,filterField:g,onChange:this.props.handleFieldNameChange,getIndexPattern:this.props.getIndexPattern,controlIndex:this.props.controlIndex}),Object(c.jsx)(d.EuiFormRow,{id:t,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.rangeControl.stepSizeLabel",defaultMessage:"Step Size"})},Object(c.jsx)(d.EuiFieldNumber,{value:this.props.controlParams.options.step,onChange:t=>{this.props.handleOptionsChange(this.props.controlIndex,"step",t.target.valueAsNumber)},"data-test-subj":`rangeControlSizeInput${this.props.controlIndex}`})),Object(c.jsx)(d.EuiFormRow,{id:e,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.rangeControl.decimalPlacesLabel",defaultMessage:"Decimal Places"})},Object(c.jsx)(d.EuiFieldNumber,{min:0,value:this.props.controlParams.options.decimalPlaces,onChange:t=>{this.props.handleOptionsChange(this.props.controlIndex,"decimalPlaces",t.target.valueAsNumber)},"data-test-subj":`rangeControlDecimalPlacesInput${this.props.controlIndex}`})))}}function x(t){return Boolean(t.aggregatable)&&["number","boolean","date","ip","string"].includes(t.type)}class list_control_editor_ListControlEditor extends r.PureComponent{constructor(...t){super(...t),s()(this,"isMounted",!1),s()(this,"state",{isLoadingFieldType:!0,isStringField:!1,prevFieldName:this.props.controlParams.fieldName,IndexPatternSelect:null}),s()(this,"componentDidUpdate",(()=>{this.state.isLoadingFieldType&&this.loadIsStringField()})),s()(this,"loadIsStringField",(async()=>{if(!this.props.controlParams.indexPattern||!this.props.controlParams.fieldName)return void this.setState({isLoadingFieldType:!1});let t;try{t=await this.props.getIndexPattern(this.props.controlParams.indexPattern)}catch(t){return}if(!this.isMounted)return;const e=t.fields.find((({name:t})=>t===this.props.controlParams.fieldName));e&&this.setState({isLoadingFieldType:!1,isStringField:"string"===e.type})})),s()(this,"renderOptions",(()=>{var t,e;if(this.state.isLoadingFieldType||!this.props.controlParams.fieldName)return;const n=[];if(this.props.parentCandidates&&this.props.parentCandidates.length>0){const t=[{value:"",text:""},...this.props.parentCandidates];n.push(Object(c.jsx)(d.EuiFormRow,{id:`parentSelect-${this.props.controlIndex}`,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.parentLabel",defaultMessage:"Parent control"}),helpText:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.parentDescription",defaultMessage:"Options are based on the value of parent control. Disabled if parent is not set."}),key:"parentSelect"},Object(c.jsx)(d.EuiSelect,{options:t,value:this.props.controlParams.parent,onChange:t=>{this.props.handleParentChange(this.props.controlIndex,t.target.value)}})))}n.push(Object(c.jsx)(d.EuiFormRow,{id:`multiselect-${this.props.controlIndex}`,key:"multiselect",helpText:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.multiselectDescription",defaultMessage:"Allow multiple selection"})},Object(c.jsx)(d.EuiSwitch,{label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.multiselectLabel",defaultMessage:"Multiselect"}),checked:null===(t=this.props.controlParams.options.multiselect)||void 0===t||t,onChange:t=>{this.props.handleOptionsChange(this.props.controlIndex,"multiselect",t.target.checked)},"data-test-subj":"listControlMultiselectInput"})));const o=this.state.isStringField?Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.dynamicOptions.updateDescription",defaultMessage:"Update options in response to user input"}):Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.dynamicOptions.stringFieldDescription",defaultMessage:'Only available for "string" fields'});return n.push(Object(c.jsx)(d.EuiFormRow,{id:`dynamicOptions-${this.props.controlIndex}`,key:"dynamicOptions",helpText:o},Object(c.jsx)(d.EuiSwitch,{label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.dynamicOptionsLabel",defaultMessage:"Dynamic Options"}),checked:null!==(e=this.props.controlParams.options.dynamicOptions)&&void 0!==e&&e,onChange:t=>{this.props.handleOptionsChange(this.props.controlIndex,"dynamicOptions",t.target.checked)},disabled:!this.state.isStringField,"data-test-subj":"listControlDynamicOptionsSwitch"}))),this.props.controlParams.options.dynamicOptions&&this.state.isStringField||n.push(Object(c.jsx)(d.EuiFormRow,{id:`size-${this.props.controlIndex}`,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.sizeLabel",defaultMessage:"Size"}),key:"size",helpText:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.listControl.sizeDescription",defaultMessage:"Number of options"})},Object(c.jsx)(d.EuiFieldNumber,{min:1,value:this.props.controlParams.options.size,onChange:t=>{this.props.handleOptionsChange(this.props.controlIndex,"size",t.target.valueAsNumber)},"data-test-subj":"listControlSizeInput"}))),n}))}componentDidMount(){this.isMounted=!0,this.loadIsStringField(),this.getIndexPatternSelect()}componentWillUnmount(){this.isMounted=!1}async getIndexPatternSelect(){const[,{data:t}]=await this.props.deps.core.getStartServices();this.setState({IndexPatternSelect:t.ui.IndexPatternSelect})}render(){return null===this.state.IndexPatternSelect?null:Object(c.jsx)(i.a.Fragment,null,Object(c.jsx)(p,{indexPatternId:this.props.controlParams.indexPattern,onChange:this.props.handleIndexPatternChange,controlIndex:this.props.controlIndex,IndexPatternSelect:this.state.IndexPatternSelect}),Object(c.jsx)(m,{fieldName:this.props.controlParams.fieldName,indexPatternId:this.props.controlParams.indexPattern,filterField:x,onChange:this.props.handleFieldNameChange,getIndexPattern:this.props.getIndexPattern,controlIndex:this.props.controlIndex}),this.renderOptions())}}s()(list_control_editor_ListControlEditor,"getDerivedStateFromProps",((t,e)=>{const n=e.prevFieldName!==t.controlParams.fieldName;return!e.isLoadingFieldType&&n?{prevFieldName:t.controlParams.fieldName,isLoadingFieldType:!0}:null}));var b=n(20);n(41);class control_editor_ControlEditorUi extends r.PureComponent{constructor(...t){super(...t),s()(this,"changeLabel",(t=>{this.props.handleLabelChange(this.props.controlIndex,t.target.value)})),s()(this,"removeControl",(()=>{this.props.handleRemoveControl(this.props.controlIndex)})),s()(this,"moveUpControl",(()=>{this.props.moveControl(this.props.controlIndex,-1)})),s()(this,"moveDownControl",(()=>{this.props.moveControl(this.props.controlIndex,1)})),s()(this,"changeIndexPattern",(t=>{this.props.handleIndexPatternChange(this.props.controlIndex,t)})),s()(this,"changeFieldName",(t=>{this.props.handleFieldNameChange(this.props.controlIndex,t)}))}renderEditor(){let t=null;switch(this.props.controlParams.type){case b.a.LIST:t=Object(c.jsx)(list_control_editor_ListControlEditor,{controlIndex:this.props.controlIndex,controlParams:this.props.controlParams,handleIndexPatternChange:this.changeIndexPattern,handleFieldNameChange:this.changeFieldName,getIndexPattern:this.props.getIndexPattern,handleOptionsChange:this.props.handleOptionsChange,parentCandidates:this.props.parentCandidates,handleParentChange:this.props.handleParentChange,deps:this.props.deps});break;case b.a.RANGE:t=Object(c.jsx)(range_control_editor_RangeControlEditor,{controlIndex:this.props.controlIndex,controlParams:this.props.controlParams,handleIndexPatternChange:this.changeIndexPattern,handleFieldNameChange:this.changeFieldName,getIndexPattern:this.props.getIndexPattern,handleOptionsChange:this.props.handleOptionsChange,deps:this.props.deps});break;default:throw new Error(`Unhandled control editor type ${this.props.controlParams.type}`)}const e=`controlLabel${this.props.controlIndex}`;return Object(c.jsx)(d.EuiForm,null,Object(c.jsx)(d.EuiFormRow,{id:e,label:Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.controlEditor.controlLabel",defaultMessage:"Control Label"})},Object(c.jsx)(d.EuiFieldText,{value:this.props.controlParams.label,onChange:this.changeLabel})),t)}renderEditorButtons(){return Object(c.jsx)("div",null,Object(c.jsx)(d.EuiButtonIcon,{"aria-label":this.props.intl.formatMessage({id:"inputControl.editor.controlEditor.moveControlUpAriaLabel",defaultMessage:"Move control up"}),color:"primary",onClick:this.moveUpControl,iconType:"sortUp","data-test-subj":`inputControlEditorMoveUpControl${this.props.controlIndex}`}),Object(c.jsx)(d.EuiButtonIcon,{"aria-label":this.props.intl.formatMessage({id:"inputControl.editor.controlEditor.moveControlDownAriaLabel",defaultMessage:"Move control down"}),color:"primary",onClick:this.moveDownControl,iconType:"sortDown","data-test-subj":`inputControlEditorMoveDownControl${this.props.controlIndex}`}),Object(c.jsx)(d.EuiButtonIcon,{"aria-label":this.props.intl.formatMessage({id:"inputControl.editor.controlEditor.removeControlAriaLabel",defaultMessage:"Remove control"}),color:"danger",onClick:this.removeControl,iconType:"cross","data-test-subj":`inputControlEditorRemoveControl${this.props.controlIndex}`}))}render(){return Object(c.jsx)(d.EuiPanel,{grow:!1,className:"icvControlEditor__panel"},Object(c.jsx)(d.EuiAccordion,{id:"controlEditorAccordion",buttonContent:Object(b.c)(this.props.controlParams,this.props.controlIndex),extraAction:this.renderEditorButtons(),initialIsOpen:!0},Object(c.jsx)(d.EuiSpacer,{size:"s"}),this.renderEditor()))}}const f=Object(a.injectI18n)(control_editor_ControlEditorUi);var C=n(24);class controls_tab_ControlsTab extends r.PureComponent{constructor(...t){super(...t),s()(this,"state",{type:b.a.LIST}),s()(this,"getIndexPattern",(async t=>{const[,e]=await this.props.deps.core.getStartServices();return await e.data.indexPatterns.get(t)})),s()(this,"onChange",(t=>this.props.setValue("controls",t))),s()(this,"handleLabelChange",((t,e)=>{const n={...this.props.stateParams.controls[t],label:e};this.onChange(Object(b.g)(this.props.stateParams.controls,t,n))})),s()(this,"handleIndexPatternChange",((t,e)=>{const n={...this.props.stateParams.controls[t],indexPattern:e,fieldName:""};this.onChange(Object(b.g)(this.props.stateParams.controls,t,n))})),s()(this,"handleFieldNameChange",((t,e)=>{const n={...this.props.stateParams.controls[t],fieldName:e};this.onChange(Object(b.g)(this.props.stateParams.controls,t,n))})),s()(this,"handleOptionsChange",((t,e,n)=>{const o=this.props.stateParams.controls[t],s={...o,options:{...o.options,[e]:n}};this.onChange(Object(b.g)(this.props.stateParams.controls,t,s))})),s()(this,"handleRemoveControl",(t=>{this.onChange(Object(b.f)(this.props.stateParams.controls,t))})),s()(this,"moveControl",((t,e)=>{this.onChange(Object(b.d)(this.props.stateParams.controls,t,e))})),s()(this,"handleAddControl",(()=>{this.onChange(Object(b.b)(this.props.stateParams.controls,Object(b.e)(this.state.type)))})),s()(this,"handleParentChange",((t,e)=>{const n={...this.props.stateParams.controls[t],parent:e};this.onChange(Object(b.g)(this.props.stateParams.controls,t,n))}))}renderControls(){const t=Object(C.a)(this.props.stateParams.controls);return this.props.stateParams.controls.map(((e,n)=>{const o=Object(C.b)(this.props.stateParams.controls,e.id,t);return Object(c.jsx)(f,{key:e.id,controlIndex:n,controlParams:e,handleLabelChange:this.handleLabelChange,moveControl:this.moveControl,handleRemoveControl:this.handleRemoveControl,handleIndexPatternChange:this.handleIndexPatternChange,handleFieldNameChange:this.handleFieldNameChange,getIndexPattern:this.getIndexPattern,handleOptionsChange:this.handleOptionsChange,parentCandidates:o,handleParentChange:this.handleParentChange,deps:this.props.deps})}))}render(){return Object(c.jsx)("div",null,this.renderControls(),Object(c.jsx)(d.EuiPanel,{grow:!1},Object(c.jsx)(d.EuiFlexGroup,null,Object(c.jsx)(d.EuiFlexItem,null,Object(c.jsx)(d.EuiFormRow,{id:"selectControlType"},Object(c.jsx)(d.EuiSelect,{"data-test-subj":"selectControlType",options:[{value:b.a.RANGE,text:l.i18n.translate("inputControl.editor.controlsTab.select.rangeDropDownOptionLabel",{defaultMessage:"Range slider"})},{value:b.a.LIST,text:l.i18n.translate("inputControl.editor.controlsTab.select.listDropDownOptionLabel",{defaultMessage:"Options list"})}],value:this.state.type,onChange:t=>this.setState({type:t.target.value}),"aria-label":l.i18n.translate("inputControl.editor.controlsTab.select.controlTypeAriaLabel",{defaultMessage:"Select control type"})}))),Object(c.jsx)(d.EuiFlexItem,{grow:!1},Object(c.jsx)(d.EuiFormRow,{id:"addControl"},Object(c.jsx)(d.EuiButton,{fill:!0,onClick:this.handleAddControl,iconType:"plusInCircle","data-test-subj":"inputControlEditorAddBtn","aria-label":l.i18n.translate("inputControl.editor.controlsTab.select.addControlAriaLabel",{defaultMessage:"Add control"})},Object(c.jsx)(a.FormattedMessage,{id:"inputControl.editor.controlsTab.addButtonLabel",defaultMessage:"Add"})))))))}}}]]);