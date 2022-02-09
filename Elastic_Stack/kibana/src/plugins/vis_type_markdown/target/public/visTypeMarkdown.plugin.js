!function(e){function n(n){for(var t,i,o=n[0],s=n[1],a=0,l=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(u&&u(n);l.length;)l.shift()()}var t={},r={0:0};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,i){t=r[e]=[n,i]}));n.push(t[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+"visTypeMarkdown.chunk."+e+".js"}(e);var u=new Error;s=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,t[1](u)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var o=window.visTypeMarkdown_bundle_jsonpfunction=window.visTypeMarkdown_bundle_jsonpfunction||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var a=0;a<o.length;a++)n(o[a]);var u=s;i(i.s=12)}([function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui},function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n){e.exports=__kbnSharedDeps_npm__},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n,t){e.exports=t(7)(1073)},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n,t){e.exports=t(7)(1074)},function(e,n,t){t(13),__kbnBundles__.define("plugin/visTypeMarkdown/public",t,14)},function(e,n,t){t.p=window.__kbnPublicPath__.visTypeMarkdown},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return v}));var r=t(9),i=t.n(r),o=t(2),s=t(3),a=t(1),u=t(10),l=t(0);const d=Object(s.lazy)((()=>t.e(2).then(t.bind(null,27))));var p=t(8),c=t(4),f=t(5);const b={name:"markdown",title:"Markdown",isAccessible:!0,icon:"visText",group:c.VisGroups.TOOLS,titleInWizard:o.i18n.translate("visTypeMarkdown.markdownTitleInWizard",{defaultMessage:"Text"}),description:o.i18n.translate("visTypeMarkdown.markdownDescription",{defaultMessage:"Add text and images to your dashboard."}),toExpressionAst:e=>{const{markdown:n,fontSize:t,openLinksInNewTab:r}=e.params,i=Object(f.buildExpressionFunction)("markdownVis",{markdown:n,font:Object(f.buildExpression)(`font size=${t}`),openLinksInNewTab:r});return Object(f.buildExpression)([i]).toAst()},visConfig:{defaults:{fontSize:12,openLinksInNewTab:!1,markdown:""}},editorConfig:{optionTabs:[{name:"advanced",title:o.i18n.translate("visTypeMarkdown.tabs.dataText",{defaultMessage:"Data"}),editor:function({stateParams:e,setValue:n}){const t=Object(s.useCallback)((({target:{value:e}})=>n("markdown",e)),[n]);return Object(l.jsx)(a.EuiPanel,{paddingSize:"s"},Object(l.jsx)(a.EuiFlexGroup,{direction:"column",gutterSize:"m",className:"mkdEditor"},Object(l.jsx)(a.EuiFlexItem,{grow:!1},Object(l.jsx)(a.EuiFlexGroup,{gutterSize:"none",justifyContent:"spaceBetween",alignItems:"baseline"},Object(l.jsx)(a.EuiFlexItem,{grow:!1},Object(l.jsx)(a.EuiTitle,{size:"xs"},Object(l.jsx)("h2",null,Object(l.jsx)("label",{htmlFor:"markdownVisInput"},"Markdown")))),Object(l.jsx)(a.EuiFlexItem,{grow:!1},Object(l.jsx)(a.EuiText,{size:"xs"},Object(l.jsx)(a.EuiLink,{href:"https://help.github.com/articles/github-flavored-markdown/",target:"_blank"},Object(l.jsx)(u.FormattedMessage,{id:"visTypeMarkdown.params.helpLinkLabel",defaultMessage:"Help"})))))),Object(l.jsx)(a.EuiFlexItem,null,Object(l.jsx)(a.EuiTextArea,{id:"markdownVisInput",className:"visEditor--markdown__textarea",value:e.markdown,onChange:t,fullWidth:!0,"data-test-subj":"markdownTextarea",resize:"none"}))))}},{name:"options",title:o.i18n.translate("visTypeMarkdown.tabs.optionsText",{defaultMessage:"Options"}),editor:e=>Object(l.jsx)(s.Suspense,{fallback:Object(l.jsx)(a.EuiLoadingSpinner,null)},Object(l.jsx)(d,e))}],enableAutoApply:!0,defaultSize:p.DefaultEditorSize.LARGE},options:{showTimePicker:!1,showFilterBar:!1},inspectorAdapters:{}},k=()=>({name:"markdownVis",type:"render",inputTypes:[],help:o.i18n.translate("visTypeMarkdown.function.help",{defaultMessage:"Markdown visualization"}),args:{markdown:{types:["string"],aliases:["_"],required:!0,help:o.i18n.translate("visTypeMarkdown.function.markdown.help",{defaultMessage:"Markdown to render"})},font:{types:["style"],help:o.i18n.translate("visTypeMarkdown.function.font.help",{defaultMessage:"Font settings."}),default:"{font size=12}"},openLinksInNewTab:{types:["boolean"],default:!1,help:o.i18n.translate("visTypeMarkdown.function.openLinksInNewTab.help",{defaultMessage:"Opens links in new tab"})}},fn:(e,n)=>({type:"render",as:"markdown_vis",value:{visType:"markdown",visParams:{markdown:n.markdown,openLinksInNewTab:n.openLinksInNewTab,fontSize:parseInt(n.font.spec.fontSize||"12",10)}}})});var m=t(11),w=t.n(m),_=t(6);const j=Object(s.lazy)((()=>t.e(1).then(t.bind(null,28)))),g={name:"markdown_vis",displayName:"markdown visualization",reuseDomNode:!0,render:async(e,{visParams:n},t)=>{t.onDestroy((()=>{Object(_.unmountComponentAtNode)(e)})),Object(_.render)(Object(l.jsx)(c.VisualizationContainer,{className:"markdownVis",handlers:t},Object(l.jsx)(j,w()({},n,{renderComplete:t.done}))),e)}};class plugin_MarkdownPlugin{constructor(e){i()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{expressions:n,visualizations:t}){t.createBaseVisualization(b),n.registerRenderer(g),n.registerFunction(k)}start(e){}}function v(e){return new plugin_MarkdownPlugin(e)}},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))}]);