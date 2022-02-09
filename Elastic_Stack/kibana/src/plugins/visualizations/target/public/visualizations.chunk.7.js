(window.visualizations_bundle_jsonpfunction=window.visualizations_bundle_jsonpfunction||[]).push([[7],{88:function(t,i,e){"use strict";e.r(i),e.d(i,"VisualizeEmbeddable",(function(){return visualize_embeddable_VisualizeEmbeddable}));var s=e(0),a=e.n(s),n=e(5),r=e.n(n),o=e(4),h=(e(10),e(17)),d=e(12),l=e(15),u=e(6),p=e(9),c=e(1),v=e(25),b=e(7),g=e(35),m=e(19);var f=e(2);class visualize_embeddable_VisualizeEmbeddable extends p.Embeddable{constructor(t,{vis:i,editPath:e,editUrl:s,indexPatterns:n,deps:r,capabilities:h},d,u,p){if(super(d,{defaultTitle:i.title,editPath:e,editApp:"visualize",editUrl:s,indexPatterns:n,visTypeName:i.type.name},p),a()(this,"handler",void 0),a()(this,"timefilter",void 0),a()(this,"timeRange",void 0),a()(this,"query",void 0),a()(this,"filters",void 0),a()(this,"searchSessionId",void 0),a()(this,"syncColors",void 0),a()(this,"visCustomizations",void 0),a()(this,"subscriptions",[]),a()(this,"expression",void 0),a()(this,"vis",void 0),a()(this,"domNode",void 0),a()(this,"type",l.a),a()(this,"abortController",void 0),a()(this,"deps",void 0),a()(this,"inspectorAdapters",void 0),a()(this,"attributeService",void 0),a()(this,"getInspectorAdapters",(()=>{if(this.handler&&(!this.inspectorAdapters||Object.keys(this.inspectorAdapters).length))return this.handler.inspect()})),a()(this,"openInspector",(()=>{if(!this.handler)return;const t=this.handler.inspect();return t?this.deps.start().plugins.inspector.open(t,{title:this.getTitle()||o.i18n.translate("visualizations.embeddable.inspectorTitle",{defaultMessage:"Inspector"})}):void 0})),a()(this,"hasInspector",(()=>Boolean(this.getInspectorAdapters()))),a()(this,"onContainerLoading",(()=>{this.renderComplete.dispatchInProgress(),this.updateOutput({loading:!0,error:void 0})})),a()(this,"onContainerRender",(()=>{this.renderComplete.dispatchComplete(),this.updateOutput({loading:!1,error:void 0})})),a()(this,"onContainerError",(t=>{this.abortController&&this.abortController.abort(),this.renderComplete.dispatchError(),this.updateOutput({loading:!1,error:t})})),a()(this,"reload",(async()=>{await this.handleVisUpdate()})),a()(this,"handleVisUpdate",(async()=>{this.handleChanges(),await this.updateHandler()})),a()(this,"uiStateChangeHandler",(()=>{this.updateInput({...this.vis.uiState.toJSON()})})),a()(this,"inputIsRefType",(t=>{if(!this.attributeService)throw new Error("AttributeService must be defined for getInputAsRefType");return this.attributeService.inputIsRefType(t)})),a()(this,"getInputAsValueType",(async()=>{const t={savedVis:this.vis.serialize()};return this.getTitle()&&(t.savedVis.title=this.getTitle()),delete t.savedVis.id,new Promise((i=>{i({...t})}))})),a()(this,"getInputAsRefType",(async()=>{const{savedObjectsClient:t,data:i,spaces:e,savedObjectsTaggingOss:s}=await this.deps.start().plugins,a=await Object(b.e)({savedObjectsClient:t,search:i.search,dataViews:i.dataViews,spaces:e,savedObjectsTagging:null==s?void 0:s.getTaggingApi()});if(!a)throw new Error("Error creating a saved vis object");if(!this.attributeService)throw new Error("AttributeService must be defined for getInputAsRefType");const n=this.getTitle()?this.getTitle():o.i18n.translate("visualizations.embeddable.placeholderTitle",{defaultMessage:"Placeholder Title"}),r={savedVis:a,vis:this.vis,title:this.vis.title};return this.attributeService.getInputAsRefType({id:this.id,attributes:r},{showSaveModal:!0,saveModalTitle:n})})),this.deps=r,this.timefilter=t,this.syncColors=this.input.syncColors,this.searchSessionId=this.input.searchSessionId,this.query=this.input.query,this.vis=i,this.vis.uiState.on("change",this.uiStateChangeHandler),this.vis.uiState.on("reload",this.reload),this.attributeService=u,this.attributeService){const t=!this.inputIsRefType(d),i=h.visualizeSave||t&&h.dashboardSave;this.updateOutput({...this.getOutput(),editable:i})}this.subscriptions.push(this.getInput$().subscribe((()=>{this.handleChanges()&&this.handler&&this.updateHandler()})));const c=this.vis.type.inspectorAdapters;c&&(this.inspectorAdapters="function"==typeof c?c():c)}getDescription(){return this.vis.description}transferCustomizationsToUiState(){const t={vis:this.input.vis,table:this.input.table};var i;t.vis||t.table?r.a.isEqual(t,this.visCustomizations)||(this.visCustomizations=t,this.vis.uiState.off("change",this.uiStateChangeHandler),this.vis.uiState.clearAllKeys(),t.vis&&(this.vis.uiState.set("vis",t.vis),(i=t,Object.keys(i)).forEach((i=>{this.vis.uiState.set(i,t[i])}))),t.table&&this.vis.uiState.set("table",t.table),this.vis.uiState.on("change",this.uiStateChangeHandler)):this.parent&&this.vis.uiState.clearAllKeys()}handleChanges(){this.transferCustomizationsToUiState();let t=!1;return r.a.isEqual(this.input.timeRange,this.timeRange)||(this.timeRange=r.a.cloneDeep(this.input.timeRange),t=!0),u.esFilters.onlyDisabledFiltersChanged(this.input.filters,this.filters)||(this.filters=this.input.filters,t=!0),r.a.isEqual(this.input.query,this.query)||(this.query=this.input.query,t=!0),this.searchSessionId!==this.input.searchSessionId&&(this.searchSessionId=this.input.searchSessionId,t=!0),this.syncColors!==this.input.syncColors&&(this.syncColors=this.input.syncColors,t=!0),this.vis.description&&this.domNode&&this.domNode.setAttribute("data-description",this.vis.description),t}async render(t){this.timeRange=r.a.cloneDeep(this.input.timeRange),this.transferCustomizationsToUiState();const i=document.createElement("div");i.className="visualize panel-content panel-content--fullWidth",t.appendChild(i),this.domNode=i,super.render(this.domNode),Object(h.render)(Object(f.jsx)("div",{className:"visChart__spinner"},Object(f.jsx)(d.EuiLoadingChart,{mono:!0,size:"l"})),this.domNode);const e=Object(c.f)();this.handler=new e.ExpressionLoader(this.domNode,void 0,{onRenderError:(t,i)=>{this.onContainerError(i)}}),this.subscriptions.push(this.handler.events$.subscribe((async t=>{if("bounds"!==t.name){if(!this.input.disableTriggers){const s=Object(n.get)(v.a,t.name,v.a.filter);let a;var i,e;if(s===v.a.applyFilter)a={embeddable:this,timeFieldName:null===(i=this.vis.data.indexPattern)||void 0===i?void 0:i.timeFieldName,...t.data};else a={embeddable:this,data:{timeFieldName:null===(e=this.vis.data.indexPattern)||void 0===e?void 0:e.timeFieldName,...t.data}};Object(c.n)().getTrigger(s).exec(a)}}else{const i=this.vis.data.aggs.aggs.find((t=>"geohash_grid"===Object(n.get)(t,"type.dslName")));(i&&i.params.precision!==t.data.precision||i&&!r.a.isEqual(i.params.boundingBox,t.data.boundingBox))&&(i.params.boundingBox=t.data.boundingBox,i.params.precision=t.data.precision,this.reload())}}))),this.vis.description&&i.setAttribute("data-description",this.vis.description),i.setAttribute("data-test-subj","visualizationLoader"),i.setAttribute("data-shared-item",""),this.subscriptions.push(this.handler.loading$.subscribe(this.onContainerLoading)),this.subscriptions.push(this.handler.render$.subscribe(this.onContainerRender)),this.updateHandler()}destroy(){super.destroy(),this.subscriptions.forEach((t=>t.unsubscribe())),this.vis.uiState.off("change",this.uiStateChangeHandler),this.vis.uiState.off("reload",this.reload),this.handler&&(this.handler.destroy(),this.handler.getElement().remove())}async updateHandler(){var t,i;const e={type:"visualization",name:this.vis.type.title,id:null!==(t=this.vis.id)&&void 0!==t?t:"an_unsaved_vis",description:this.vis.title||this.input.title||this.vis.type.name,url:this.output.editUrl,parent:null===(i=this.parent)||void 0===i?void 0:i.getInput().executionContext},s={searchContext:{timeRange:this.timeRange,query:this.input.query,filters:this.input.filters},searchSessionId:this.input.searchSessionId,syncColors:this.input.syncColors,uiState:this.vis.uiState,interactive:!this.input.disableTriggers,inspectorAdapters:this.inspectorAdapters,executionContext:e};this.abortController&&this.abortController.abort(),this.abortController=new AbortController;const a=this.abortController;this.expression=await(async(t,i)=>{const{savedSearchId:e,searchSource:s}=t.data,a=null==s?void 0:s.getField("query");let n=null==s?void 0:s.getField("filter");"function"==typeof n&&(n=n());const r=Object(g.buildExpressionFunction)("kibana",{}),o=Object(g.buildExpressionFunction)("kibana_context",{q:a&&Object(m.queryToAst)(a),filters:n&&Object(m.filtersToAst)(n),savedSearchId:e}),h=Object(g.buildExpression)([r,o]).toAst();if(!t.type.toExpressionAst)throw new Error("Visualization type definition should have toExpressionAst function defined");const d=await t.type.toExpressionAst(t,i);return h.chain.push(...d.chain),h})(this.vis,{timefilter:this.timefilter,timeRange:this.timeRange,abortSignal:this.abortController.signal}),this.handler&&!a.signal.aborted&&await this.handler.update(this.expression,s)}supportedTriggers(){var t,i,e;return null!==(t=null===(i=(e=this.vis.type).getSupportedTriggers)||void 0===i?void 0:i.call(e,this.vis.params))&&void 0!==t?t:[]}}}}]);