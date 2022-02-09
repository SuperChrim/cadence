!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=12)}([function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){e.exports=i(14)(1073)},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){i(13),__kbnBundles__.define("plugin/visTypeMetric/public",i,15)},function(e,t,i){i.p=window.__kbnPublicPath__.visTypeMetric},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,i){"use strict";i.r(t),i.d(t,"plugin",(function(){return M}));var r=i(9),s=i.n(r),o=i(2),n=i(5),a=i.n(n),c=i(1),l=i(7),u=i(6),d=i(4),p=i(0);const b=[{id:d.ColorMode.None,label:o.i18n.translate("visTypeMetric.colorModes.noneOptionLabel",{defaultMessage:"None"})},{id:d.ColorMode.Labels,label:o.i18n.translate("visTypeMetric.colorModes.labelsOptionLabel",{defaultMessage:"Labels"})},{id:d.ColorMode.Background,label:o.i18n.translate("visTypeMetric.colorModes.backgroundOptionLabel",{defaultMessage:"Background"})}];function g({stateParams:e,setValue:t,setValidity:i,setTouched:r,uiState:s}){const g=Object(n.useCallback)(((i,r)=>t("metric",{...e.metric,[i]:r})),[t,e.metric]),m=Object(n.useCallback)(((t,i)=>g("labels",{...e.metric.labels,[t]:i})),[g,e.metric.labels]),f=Object(n.useCallback)(((t,i)=>g("style",{...e.metric.style,[t]:i})),[g,e.metric.style]),j=Object(n.useCallback)((e=>g("metricColorMode",e)),[g]),_=o.i18n.translate("visTypeMetric.params.color.useForLabel",{defaultMessage:"Use color for"});return Object(p.jsx)(a.a.Fragment,null,Object(p.jsx)(c.EuiPanel,{paddingSize:"s"},Object(p.jsx)(c.EuiTitle,{size:"xs"},Object(p.jsx)("h3",null,Object(p.jsx)(l.FormattedMessage,{id:"visTypeMetric.params.settingsTitle",defaultMessage:"Settings"}))),Object(p.jsx)(c.EuiSpacer,{size:"s"}),Object(p.jsx)(u.PercentageModeOption,{"data-test-subj":"metricPercentageMode",percentageMode:e.metric.percentageMode,formatPattern:e.metric.percentageFormatPattern,setValue:g}),Object(p.jsx)(u.SwitchOption,{label:o.i18n.translate("visTypeMetric.params.showTitleLabel",{defaultMessage:"Show title"}),paramName:"show",value:e.metric.labels.show,setValue:m})),Object(p.jsx)(c.EuiSpacer,{size:"s"}),Object(p.jsx)(c.EuiPanel,{paddingSize:"s"},Object(p.jsx)(c.EuiTitle,{size:"xs"},Object(p.jsx)("h3",null,Object(p.jsx)(l.FormattedMessage,{id:"visTypeMetric.params.rangesTitle",defaultMessage:"Ranges"}))),Object(p.jsx)(c.EuiSpacer,{size:"s"}),Object(p.jsx)(u.ColorRanges,{"data-test-subj":"metricColorRange",colorsRange:e.metric.colorsRange,setValue:g,setTouched:r,setValidity:i}),Object(p.jsx)(c.EuiFormRow,{fullWidth:!0,display:"rowCompressed",label:_},Object(p.jsx)(c.EuiButtonGroup,{buttonSize:"compressed",idSelected:e.metric.metricColorMode,isDisabled:1===e.metric.colorsRange.length,isFullWidth:!0,legend:_,options:b,onChange:j})),Object(p.jsx)(u.ColorSchemaOptions,{colorSchema:e.metric.colorSchema,colorSchemas:d.colorSchemas,disabled:1===e.metric.colorsRange.length||e.metric.metricColorMode===d.ColorMode.None,invertColors:e.metric.invertColors,setValue:g,showHelpText:!1,uiState:s})),Object(p.jsx)(c.EuiSpacer,{size:"s"}),Object(p.jsx)(c.EuiPanel,{paddingSize:"s"},Object(p.jsx)(c.EuiTitle,{size:"xs"},Object(p.jsx)("h3",null,Object(p.jsx)(l.FormattedMessage,{id:"visTypeMetric.params.style.styleTitle",defaultMessage:"Style"}))),Object(p.jsx)(c.EuiSpacer,{size:"s"}),Object(p.jsx)(u.RangeOption,{label:o.i18n.translate("visTypeMetric.params.style.fontSizeLabel",{defaultMessage:"Metric font size in points"}),min:12,max:120,paramName:"fontSize",value:e.metric.style.fontSize,setValue:f,showInput:!0,showLabels:!0,showValue:!1})))}var m=i(8),f=i(10),j=i(11),_=i(3);const O=e=>{const t=Object(_.buildExpressionFunction)("visdimension",{accessor:e.accessor});return e.format&&(t.addArgument("format",e.format.id),t.addArgument("formatParams",JSON.stringify(e.format.params))),Object(_.buildExpression)([t])},x=(e,t)=>{var i;const r=Object(_.buildExpressionFunction)("esaggs",{index:Object(_.buildExpression)([Object(_.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:e.isHierarchical(),partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(_.buildExpression)(e.toExpressionAst())))}),s=Object(j.getVisSchemas)(e,t),{percentageMode:o,percentageFormatPattern:n,useRanges:a,colorSchema:c,metricColorMode:l,colorsRange:u,labels:d,invertColors:p,style:b}=e.params.metric;!0===Object(f.get)(e.params,"metric.percentageMode")&&s.metric.forEach((e=>{e.format={id:"percent",params:{pattern:n}}}));const g=Object(_.buildExpressionFunction)("metricVis",{percentageMode:o,colorSchema:c,colorMode:l,useRanges:a,invertColors:p,showLabels:null!==(i=null==d?void 0:d.show)&&void 0!==i&&i});b&&(g.addArgument("bgFill",b.bgFill),g.addArgument("font",Object(_.buildExpression)(`font size=${b.fontSize}`)),g.addArgument("subText",b.subText)),u&&u.forEach((e=>{g.addArgument("colorRange",Object(_.buildExpression)(`range from=${e.from} to=${e.to}`))})),s.group&&g.addArgument("bucket",O(s.group[0])),s.metric.forEach((e=>{g.addArgument("metric",O(e))}));return Object(_.buildExpression)([r,g]).toAst()};class plugin_MetricVisPlugin{constructor(e){s()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{visualizations:t}){t.createBaseVisualization({name:"metric",title:o.i18n.translate("visTypeMetric.metricTitle",{defaultMessage:"Metric"}),icon:"visMetric",description:o.i18n.translate("visTypeMetric.metricDescription",{defaultMessage:"Show a calculation as a single number."}),toExpressionAst:x,visConfig:{defaults:{addTooltip:!0,addLegend:!1,type:"metric",metric:{percentageMode:!1,useRanges:!1,colorSchema:d.ColorSchemas.GreenToRed,metricColorMode:d.ColorMode.None,colorsRange:[{from:0,to:1e4}],labels:{show:!0},invertColors:!1,style:{bgFill:"#000",bgColor:!1,labelColor:!1,subText:"",fontSize:60}}}},editorConfig:{optionsTemplate:g,schemas:[{group:m.AggGroupNames.Metrics,name:"metric",title:o.i18n.translate("visTypeMetric.schemas.metricTitle",{defaultMessage:"Metric"}),min:1,aggFilter:["!std_dev","!geo_centroid","!derivative","!serial_diff","!moving_avg","!cumulative_sum","!geo_bounds","!filtered_metric","!single_percentile"],aggSettings:{top_hits:{allowStrings:!0}},defaults:[{type:"count",schema:"metric"}]},{group:m.AggGroupNames.Buckets,name:"group",title:o.i18n.translate("visTypeMetric.schemas.splitGroupTitle",{defaultMessage:"Split group"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter"]}]},requiresSearch:!0})}start(e){}}function M(e){return new plugin_MetricVisPlugin(e)}}]);