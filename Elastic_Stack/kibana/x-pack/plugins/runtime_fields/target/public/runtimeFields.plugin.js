/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}([function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,i){"use strict";var n=i(6);i.d(t,"h",(function(){return n.useForm})),i.d(t,"i",(function(){return n.useFormData})),i.d(t,"b",(function(){return n.Form})),i.d(t,"d",(function(){return n.UseField}));var a=i(10);i.d(t,"f",(function(){return a.fieldValidators}));var l=i(11);i.d(t,"c",(function(){return l.TextField}));var r=i(7);i.d(t,"a",(function(){return r.CodeEditor})),i.d(t,"g",(function(){return r.toMountPoint})),i.d(t,"e",(function(){return r.createKibanaReactContext}))},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n=[{label:"Keyword",value:"keyword"},{label:"Long",value:"long"},{label:"Double",value:"double"},{label:"Date",value:"date"},{label:"IP",value:"ip"},{label:"Boolean",value:"boolean"}]},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/hook_form_lib");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){"use strict";i.r(t),i.d(t,"RuntimeFieldForm",(function(){return g})),i.d(t,"RuntimeFieldEditor",(function(){return x})),i.d(t,"RuntimeFieldEditorFlyoutContent",(function(){return _}));var n=i(3),a=i.n(n),l=i(2),r=i(12),s=i(9),u=i(1),o=i(4),d=i(5);const{emptyField:c}=o.f,f={name:{label:l.i18n.translate("xpack.runtimeFields.form.nameLabel",{defaultMessage:"Name"}),validations:[{validator:c(l.i18n.translate("xpack.runtimeFields.form.validations.nameIsRequiredErrorMessage",{defaultMessage:"Give a name to the field."}))}]},type:{label:l.i18n.translate("xpack.runtimeFields.form.runtimeTypeLabel",{defaultMessage:"Type"}),defaultValue:"keyword",deserializer:e=>{var t;if(!e)return[];const i=null===(t=d.a.find((({value:t})=>t===e)))||void 0===t?void 0:t.label;return[{label:null!=i?i:e,value:e}]},serializer:e=>e[0].value},script:{source:{label:l.i18n.translate("xpack.runtimeFields.form.defineFieldLabel",{defaultMessage:"Define script (optional)"})}}};var b=i(0);const p=e=>({value:t})=>{if(e.includes(t))return{message:l.i18n.translate("xpack.runtimeFields.runtimeFieldsEditor.existRuntimeFieldNamesValidationErrorMessage",{defaultMessage:"There is already a field with this name."})}},m=e=>{switch(e){case"keyword":return"string_script_field_script_field";case"long":return"long_script_field_script_field";case"double":return"double_script_field_script_field";case"date":return"date_script_field";case"ip":return"ip_script_field_script_field";case"boolean":return"boolean_script_field_script_field";default:return"string_script_field_script_field"}},j=({defaultValue:e,onChange:t,links:i,ctx:{namesNotAllowed:c,existingConcreteFields:j=[]}={}})=>{const g=f.type,[x,_]=Object(n.useState)(m(g.defaultValue)),{form:F}=Object(o.h)({defaultValue:e,schema:f}),{submit:v,isValid:O,isSubmitted:y}=F,[{name:h}]=Object(o.i)({form:F,watch:"name"}),k=((e,t)=>{var i;const n=f.name;return e?{...n,validations:[...null!==(i=n.validations)&&void 0!==i?i:[],{validator:p(e.filter((e=>e!==(null==t?void 0:t.name))))}]}:n})(c,e),E=Object(n.useCallback)((e=>{_(m(e[0].value))}),[]),S=s.PainlessLang.getSuggestionProvider(x,j);return Object(n.useEffect)((()=>{t&&t({isValid:O,isSubmitted:y,submit:v})}),[t,O,y,v]),Object(b.jsx)(o.b,{form:F,className:"runtimeFieldEditor_form"},Object(b.jsx)(u.EuiFlexGroup,null,Object(b.jsx)(u.EuiFlexItem,null,Object(b.jsx)(o.d,{path:"name",config:k,component:o.c,"data-test-subj":"nameField",componentProps:{euiFieldProps:{"aria-label":l.i18n.translate("xpack.runtimeFields.form.nameAriaLabel",{defaultMessage:"Name field"})}}})),Object(b.jsx)(u.EuiFlexItem,null,Object(b.jsx)(o.d,{path:"type",onChange:E},(({label:e,value:t,setValue:i})=>void 0===t?null:Object(b.jsx)(a.a.Fragment,null,Object(b.jsx)(u.EuiFormRow,{label:e,fullWidth:!0},Object(b.jsx)(u.EuiComboBox,{placeholder:l.i18n.translate("xpack.runtimeFields.form.runtimeType.placeholderLabel",{defaultMessage:"Select a type"}),singleSelection:{asPlainText:!0},options:d.a,selectedOptions:t,onChange:e=>{0!==e.length&&i(e)},isClearable:!1,"data-test-subj":"typeField","aria-label":l.i18n.translate("xpack.runtimeFields.form.typeSelectAriaLabel",{defaultMessage:"Type select"}),fullWidth:!0}))))))),j.find((e=>e.name===h))&&Object(b.jsx)(a.a.Fragment,null,Object(b.jsx)(u.EuiSpacer,null),Object(b.jsx)(u.EuiCallOut,{title:l.i18n.translate("xpack.runtimeFields.form.fieldShadowingCalloutTitle",{defaultMessage:"Field shadowing"}),color:"warning",iconType:"pin",size:"s","data-test-subj":"shadowingFieldCallout"},Object(b.jsx)("div",null,l.i18n.translate("xpack.runtimeFields.form.fieldShadowingCalloutDescription",{defaultMessage:"This field shares the name of a mapped field. Values for this field will be returned in search results."})))),Object(b.jsx)(u.EuiSpacer,{size:"l"}),Object(b.jsx)(o.d,{path:"script.source"},(({value:e,setValue:t,label:n,isValid:a,getErrorsMessages:d})=>Object(b.jsx)(u.EuiFormRow,{label:n,error:d(),isInvalid:!a,helpText:Object(b.jsx)(r.FormattedMessage,{id:"xpack.runtimeFields.form.source.scriptFieldHelpText",defaultMessage:"Runtime fields without a script retrieve values from a field with the same name in {source}. If a field with the same name doesn’t exist, no values return when a search request includes the runtime field. {learnMoreLink}",values:{learnMoreLink:Object(b.jsx)(u.EuiLink,{href:i.runtimePainless,target:"_blank",external:!0,"data-test-subj":"painlessSyntaxLearnMoreLink"},l.i18n.translate("xpack.runtimeFields.form.script.learnMoreLinkText",{defaultMessage:"Learn about script syntax."})),source:Object(b.jsx)(u.EuiCode,null,"_source")}}),fullWidth:!0},Object(b.jsx)(o.a,{languageId:s.PainlessLang.ID,suggestionProvider:S,width:"100%",height:"300px",value:e,onChange:t,options:{fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0,suggest:{snippetsPreventQuickSuggestions:!1}},"data-test-subj":"scriptField","aria-label":l.i18n.translate("xpack.runtimeFields.form.scriptEditorAriaLabel",{defaultMessage:"Script editor"})})))))},g=a.a.memo(j),x=({defaultValue:e,onChange:t,docLinks:i,ctx:n})=>{const a=(({links:e})=>({runtimePainless:`${e.runtimeFields.mapping}`,painlessSyntax:`${e.scriptedFields.painlessLangSpec}`}))(i);return Object(b.jsx)(g,{links:a,defaultValue:e,onChange:t,ctx:n})},_=({onSave:e,onCancel:t,docLinks:i,defaultValue:r,ctx:s})=>{const o=(e=>({flyoutTitle:e?l.i18n.translate("xpack.runtimeFields.editor.flyoutEditFieldTitle",{defaultMessage:"Edit {fieldName} field",values:{fieldName:e.name}}):l.i18n.translate("xpack.runtimeFields.editor.flyoutDefaultTitle",{defaultMessage:"Create new field"}),closeButtonLabel:l.i18n.translate("xpack.runtimeFields.editor.flyoutCloseButtonLabel",{defaultMessage:"Close"}),saveButtonLabel:l.i18n.translate("xpack.runtimeFields.editor.flyoutSaveButtonLabel",{defaultMessage:"Save"}),formErrorsCalloutTitle:l.i18n.translate("xpack.runtimeFields.editor.validationErrorTitle",{defaultMessage:"Fix errors in form before continuing."})}))(r),[d,c]=Object(n.useState)({isSubmitted:!1,isValid:!!r||void 0,submit:r?async()=>({isValid:!0,data:r}):async()=>({isValid:!1,data:{}})}),{submit:f,isValid:p,isSubmitted:m}=d,j=Object(n.useCallback)((async()=>{const{isValid:t,data:i}=await f();t&&e(i)}),[f,e]);return Object(b.jsx)(a.a.Fragment,null,Object(b.jsx)(u.EuiFlyoutHeader,null,Object(b.jsx)(u.EuiTitle,{size:"m","data-test-subj":"flyoutTitle"},Object(b.jsx)("h2",{id:"runtimeFieldEditorEditTitle"},o.flyoutTitle))),Object(b.jsx)(u.EuiFlyoutBody,null,Object(b.jsx)(x,{docLinks:i,defaultValue:r,onChange:c,ctx:s})),Object(b.jsx)(u.EuiFlyoutFooter,null,m&&!p&&Object(b.jsx)(a.a.Fragment,null,Object(b.jsx)(u.EuiCallOut,{title:o.formErrorsCalloutTitle,color:"danger",iconType:"cross","data-test-subj":"formError"}),Object(b.jsx)(u.EuiSpacer,{size:"m"})),Object(b.jsx)(u.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(b.jsx)(u.EuiFlexItem,{grow:!1},Object(b.jsx)(u.EuiButtonEmpty,{iconType:"cross",flush:"left",onClick:()=>t(),"data-test-subj":"closeFlyoutButton"},o.closeButtonLabel)),Object(b.jsx)(u.EuiFlexItem,{grow:!1},Object(b.jsx)(u.EuiButton,{color:"primary",onClick:()=>j(),"data-test-subj":"saveFieldButton",disabled:m&&!p,fill:!0},o.saveButtonLabel)))))}},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/helpers");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/components");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){i(14),__kbnBundles__.define("plugin/runtimeFields/public",i,15)},function(e,t,i){i.p=window.__kbnPublicPath__.runtimeFields},function(e,t,i){"use strict";i.r(t),i.d(t,"RuntimeFieldEditorFlyoutContent",(function(){return l.RuntimeFieldEditorFlyoutContent})),i.d(t,"RuntimeFieldEditor",(function(){return l.RuntimeFieldEditor})),i.d(t,"RUNTIME_FIELD_OPTIONS",(function(){return r.a})),i.d(t,"plugin",(function(){return s}));i(3);var n=i(4),a=i(0);class plugin_RuntimeFieldsPlugin{setup(e,t){return{loadEditor:(l=e,async()=>{const{RuntimeFieldEditorFlyoutContent:e}=await Promise.resolve().then(i.bind(null,8)),[t]=await l.getStartServices(),{uiSettings:r,overlays:s,docLinks:u}=t,{Provider:o}=Object(n.e)({uiSettings:r});let d=null;return{openEditor:({onSave:t,defaultValue:i,ctx:l})=>{const r=()=>{d&&(d.close(),d=null)};return d=s.openFlyout(Object(n.g)(Object(a.jsx)(o,null,Object(a.jsx)(e,{onSave:e=>{r(),t(e)},onCancel:()=>{var e;return null===(e=d)||void 0===e?void 0:e.close()},docLinks:u,defaultValue:i,ctx:l})))),r}}})};var l}start(e,t){return{}}stop(){return{}}}var l=i(8),r=i(5);function s(){return new plugin_RuntimeFieldsPlugin}}]);