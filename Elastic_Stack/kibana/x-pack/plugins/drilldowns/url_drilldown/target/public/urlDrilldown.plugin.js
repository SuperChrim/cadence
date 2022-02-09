/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){e.exports=n(13)(1073)},function(e,t,n){n.r(t);var l=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(l))},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t,n){n.r(t);var l=__kbnBundles__.get("plugin/uiActionsEnhanced/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(l))},function(e,t,n){n.r(t);var l=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(l))},function(e,t,n){n.r(t);var l=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(l))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnStd},function(e,t,n){n.r(t);var l=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(l))},function(e,t,n){n(12),__kbnBundles__.define("plugin/urlDrilldown/public",n,14)},function(e,t,n){n.p=window.__kbnPublicPath__.urlDrilldown},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return S}));var l=n(4),a=n(1),i=n.n(a),r=n(8),o=n.n(r),s=n(2),d=n(5),u=n(6),c=n(0);const p=c.i18n.translate("xpack.urlDrilldown.DisplayName",{defaultMessage:"Go to URL"});var g=n(3);const f=e=>"number"==typeof e||"boolean"==typeof e||"string"==typeof e||null===e?e:"object"==typeof e&&e instanceof Date?e.toISOString():void 0!==e?String(e):void 0,b=e=>(Object.keys(e).forEach((t=>{void 0===e[t]&&delete e[t]})),e),m=e=>{if(Object(s.isRangeSelectTriggerContext)(e))return(e=>{const{table:t,column:n,range:l}=e.data,a=t.columns[n];return b({key:f(null==a?void 0:a.meta.field),from:f(l[0]),to:f(l[l.length-1])})})(e);if(Object(s.isValueClickTriggerContext)(e))return(e=>{var t,n,l;const a=null!==(t=e.data.negate)&&void 0!==t&&t,i=e.data.data.map((({table:e,value:t,column:n})=>{var l;const a=e.columns[n];return{value:f(t),key:null==a||null===(l=a.meta)||void 0===l?void 0:l.field}}));return b({key:null===(n=i[0])||void 0===n?void 0:n.key,value:null===(l=i[0])||void 0===l?void 0:l.value,negate:a,points:i})})(e);if(Object(s.isRowClickTriggerContext)(e))return(e=>{const{data:t}=e,n=e.embeddable,{rowIndex:l}=t,a=t.columns||t.table.columns.map((({id:e})=>e)),i=[],r=[],o=[],s=t.table.rows[l];for(const e of a){const l=t.table.columns.find((({id:t})=>t===e));if(!l)throw console.error(t,n?`Embeddable [${n.getTitle()}]`:null),new Error("Could not find a datatable column.");i.push(s[e]),r.push(l.meta.field||""),o.push(l.name||l.meta.field||"")}return{rowIndex:l,values:i,keys:r,columnNames:o}})(e);if(Object(s.isContextMenuTriggerContext)(e))return{};throw new Error("UrlDrilldown [getEventScope] can't build scope from not supported trigger")},v=g.monaco.languages.CompletionItemKind.Event,x=[{label:"event.value",sortText:"1.event.value",title:c.i18n.translate("xpack.urlDrilldown.click.event.value.title",{defaultMessage:"Click value."}),documentation:c.i18n.translate("xpack.urlDrilldown.click.event.value.documentation",{defaultMessage:"Value behind clicked data point."}),kind:v},{label:"event.key",sortText:"1.event.key",title:c.i18n.translate("xpack.urlDrilldown.click.event.key.title",{defaultMessage:"Name of clicked field."}),documentation:c.i18n.translate("xpack.urlDrilldown.click.event.key.documentation",{defaultMessage:"Field name behind clicked data point."}),kind:v},{label:"event.negate",sortText:"1.event.negate",title:c.i18n.translate("xpack.urlDrilldown.click.event.negate.title",{defaultMessage:"Whether the filter is negated."}),documentation:c.i18n.translate("xpack.urlDrilldown.click.event.negate.documentation",{defaultMessage:"Boolean, indicating whether clicked data point resulted in negative filter."}),kind:v},{label:"event.points",sortText:"1.event.points",title:c.i18n.translate("xpack.urlDrilldown.click.event.points.title",{defaultMessage:"List of all clicked points."}),documentation:c.i18n.translate("xpack.urlDrilldown.click.event.points.documentation",{defaultMessage:"Some visualizations have clickable points that emit more than one data point. Use list of data points in case a single value is insufficient."}),kind:v}],k=[{label:"event.values",sortText:"1.event.values",title:c.i18n.translate("xpack.urlDrilldown.row.event.values.title",{defaultMessage:"List of row cell values."}),documentation:c.i18n.translate("xpack.urlDrilldown.row.event.values.documentation",{defaultMessage:"An array of all cell values for the raw on which the action will execute."}),kind:v},{label:"event.keys",sortText:"1.event.keys",title:c.i18n.translate("xpack.urlDrilldown.row.event.keys.title",{defaultMessage:"List of row cell fields."}),documentation:c.i18n.translate("xpack.urlDrilldown.row.event.keys.documentation",{defaultMessage:"An array of field names for each column."}),kind:v},{label:"event.columnNames",sortText:"1.event.columnNames",title:c.i18n.translate("xpack.urlDrilldown.row.event.columnNames.title",{defaultMessage:"List of table column names."}),documentation:c.i18n.translate("xpack.urlDrilldown.row.event.columnNames.documentation",{defaultMessage:"An array of column names."}),kind:v},{label:"event.rowIndex",sortText:"1.event.rowIndex",title:c.i18n.translate("xpack.urlDrilldown.row.event.rowIndex.title",{defaultMessage:"Clicked row index."}),documentation:c.i18n.translate("xpack.urlDrilldown.row.event.rowIndex.documentation",{defaultMessage:"Number, representing the row that was clicked, starting from 0."}),kind:v}],w=[{label:"event.key",sortText:"1.event.key",title:c.i18n.translate("xpack.urlDrilldown.range.event.key.title",{defaultMessage:"Name of aggregation field."}),documentation:c.i18n.translate("xpack.urlDrilldown.range.event.key.documentation",{defaultMessage:"Aggregation field behind the selected range, if available."}),kind:v},{label:"event.from",sortText:"1.event.from",title:c.i18n.translate("xpack.urlDrilldown.range.event.from.title",{defaultMessage:"Range start value."}),documentation:c.i18n.translate("xpack.urlDrilldown.range.event.from.documentation",{defaultMessage:"`from` value of the selected range. Depending on your data, could be either a date or number."}),kind:v},{label:"event.to",sortText:"1.event.to",title:c.i18n.translate("xpack.urlDrilldown.range.event.to.title",{defaultMessage:"Range end value."}),documentation:c.i18n.translate("xpack.urlDrilldown.range.event.to.documentation",{defaultMessage:"`to` value of the selected range. Depending on your data, could be either a date or number."}),kind:v}];var h=n(9);const D=e=>c.i18n.translate("xpack.urlDrilldown.valuePreview",{defaultMessage:"Value: {value}",values:{value:e}});function _(e){var t,n;const l=e.getInput(),a=e.getOutput(),i=function(e){return"object"==typeof(t=e)&&t&&Array.isArray(t.indexPatterns)&&t.indexPatterns.length>0?e.indexPatterns.map((e=>e.id)).filter(Boolean):[];var t}(a);return b({id:l.id,title:null!==(t=a.title)&&void 0!==t?t:l.title,savedObjectId:null!==(n=a.savedObjectId)&&void 0!==n?n:(r=l,"savedObjectId"in r&&"string"==typeof r.savedObjectId?l.savedObjectId:void 0),query:l.query,timeRange:l.timeRange,filters:l.filters,indexPatternIds:i.length>1?i:void 0,indexPatternId:1===i.length?i[0]:void 0});var r}const y=e=>{if(!(t=e)||"object"!=typeof t||!("embeddable"in t))throw new Error("UrlDrilldown [getContextScope] can't build scope because embeddable object is missing in context");var t;return _(e.embeddable)},I=e=>({panel:y(e)}),O={id:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.id.title",{defaultMessage:"Panel ID."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.id.documentation",{defaultMessage:"ID of the panel where drilldown is executed."})},title:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.title.title",{defaultMessage:"Panel title."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.title.documentation",{defaultMessage:"Title of the panel where drilldown is executed."})},filters:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.filters.title",{defaultMessage:"Panel filters."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.filters.documentation",{defaultMessage:"List of Kibana filters applied to a panel."})},"query.query":{title:c.i18n.translate("xpack.urlDrilldown.context.panel.query.query.title",{defaultMessage:"Query string."})},"query.language":{title:c.i18n.translate("xpack.urlDrilldown.context.panel.query.language.title",{defaultMessage:"Query language."})},"timeRange.from":{title:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.from.title",{defaultMessage:'Time picker "from" value.'})},"timeRange.to":{title:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.to.title",{defaultMessage:'Time picker "to" value.'})},indexPatternId:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternId.title",{defaultMessage:"Index pattern ID."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternId.documentation",{defaultMessage:"First index pattern ID used by the panel."})},indexPatternIds:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternIds.title",{defaultMessage:"Index pattern IDs."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.timeRange.indexPatternIds.documentation",{defaultMessage:"List of all index pattern IDs used by the panel."})},savedObjectId:{title:c.i18n.translate("xpack.urlDrilldown.context.panel.savedObjectId.title",{defaultMessage:"Saved object ID."}),documentation:c.i18n.translate("xpack.urlDrilldown.context.panel.savedObjectId.documentation",{defaultMessage:"ID of the saved object behind the panel."})}},M=g.monaco.languages.CompletionItemKind.Variable,j=e=>"object"==typeof e?"\n"+JSON.stringify(e,null,4):String(e),R=e=>(e=>{const t=[],n=Object(h.getFlattenedObject)(e),l=Object.keys(n).sort();for(const e of l){const l=O[e],a="context.panel."+e;l?t.push({label:a,sortText:"2."+a,title:l.title,documentation:(l.documentation||"")+(l.documentation&&n[e]?"\n\n":"")+(n[e]?D(j(n[e])):""),kind:M}):t.push({label:a,sortText:"2."+a,documentation:n[e]?D(j(n[e])):"",kind:M})}return t})(I(e).panel),U=g.monaco.languages.CompletionItemKind.Constant;var T=n(7);class url_drilldown_UrlDrilldown{constructor(e){i()(this,"id","URL_DRILLDOWN"),i()(this,"order",8),i()(this,"minimalLicense","gold"),i()(this,"licenseFeatureName","URL drilldown"),i()(this,"getDisplayName",(()=>p)),i()(this,"euiIcon","link"),i()(this,"ReactCollectConfig",(({config:e,onConfig:t,context:n})=>{const a=o.a.useMemo((()=>this.getVariableList(n)),[n]);return Object(T.jsx)(u.KibanaContextProvider,{services:{uiSettings:this.deps.uiSettings}},Object(T.jsx)(l.UrlDrilldownCollectConfig,{variables:a,config:e,onConfig:t,syntaxHelpDocsLink:this.deps.getSyntaxHelpDocsLink(),variablesHelpDocsLink:this.deps.getVariablesHelpDocsLink()}))})),i()(this,"CollectConfig",Object(u.reactToUiComponent)(this.ReactCollectConfig)),i()(this,"createConfig",(()=>({url:{template:"https://example.com/?{{event.key}}={{event.value}}"},openInNewTab:!0,encodeUrl:!0}))),i()(this,"isConfigValid",(e=>!!e.url.template)),i()(this,"isCompatible",(async(e,t)=>{const n=this.getRuntimeVariables(t),{isValid:a,error:i}=await Object(l.urlDrilldownValidateUrlTemplate)(e.url,n);if(!a)return console.warn(`UrlDrilldown [${e.url.template}] is not valid. Error [${i}]. Skipping execution.`),!1;const r=await this.buildUrl(e,t);return!!this.deps.externalUrl.validateUrl(r)})),i()(this,"getHref",(async(e,t)=>{const n=await this.buildUrl(e,t);if(!this.deps.externalUrl.validateUrl(n))throw new Error(`External URL [${n}] was denied by ExternalUrl service. You can configure external URL policies using "externalUrl.policy" setting in kibana.yml.`);return n})),i()(this,"execute",(async(e,t)=>{const n=await this.getHref(e,t);e.openInNewTab?window.open(n,"_blank","noopener"):await this.deps.navigateToUrl(n)})),i()(this,"getRuntimeVariables",(e=>({event:m(e),context:I(e),...this.deps.getGlobalScope()}))),i()(this,"getVariableList",(e=>{const t=this.deps.getGlobalScope();var n;return[...(e=>{const[t]=e.triggers;switch(t){case s.VALUE_CLICK_TRIGGER:return[...x];case d.ROW_CLICK_TRIGGER:return[...k];case s.SELECT_RANGE_TRIGGER:return[...w]}return[]})(e),...R(e),...(n=t,[{label:"kibanaUrl",sortText:"3.kibanaUrl",title:c.i18n.translate("xpack.urlDrilldown.global.kibanaUrl.documentation.title",{defaultMessage:"Link to Kibana homepage."}),documentation:c.i18n.translate("xpack.urlDrilldown.global.kibanaUrl.documentation",{defaultMessage:"Kibana base URL. Useful for creating URL drilldowns that navigate within Kibana."})+"\n\n"+D(n.kibanaUrl),kind:U}])]})),this.deps=e}supportedTriggers(){return[s.VALUE_CLICK_TRIGGER,s.SELECT_RANGE_TRIGGER,d.ROW_CLICK_TRIGGER,s.CONTEXT_MENU_TRIGGER]}async buildUrl(e,t){var n;const a=null===(n=e.encodeUrl)||void 0===n||n;return await Object(l.urlDrilldownCompileUrl)(e.url.template,this.getRuntimeVariables(t),a)}}var C=n(10);class plugin_UrlDrilldownPlugin{constructor(e){this.context=e}setup(e,t){const n=Object(C.createStartServicesGetter)(e.getStartServices);return t.uiActionsEnhanced.registerDrilldown(new url_drilldown_UrlDrilldown({externalUrl:e.http.externalUrl,getGlobalScope:Object(l.urlDrilldownGlobalScopeProvider)({core:e}),navigateToUrl:t=>e.getStartServices().then((([{application:e}])=>e.navigateToUrl(t))),getSyntaxHelpDocsLink:()=>n().core.docLinks.links.dashboard.urlDrilldownTemplateSyntax,getVariablesHelpDocsLink:()=>n().core.docLinks.links.dashboard.urlDrilldownVariables,uiSettings:e.uiSettings})),{}}start(e,t){return{}}stop(){}}function S(e){return new plugin_UrlDrilldownPlugin(e)}}]);