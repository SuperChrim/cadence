(window.regionMap_bundle_jsonpfunction=window.regionMap_bundle_jsonpfunction||[]).push([[3],{35:function(e,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return h}));var t=s(5),i=s.n(t),n=s(17),l=s(1),r=s(19),o=s(16),c=s(20),d=s(9),p=s(0),u=s(3);const j=({description:e,name:a})=>({text:e,value:a}),g=Object(p.f)(),m=Object(p.g)(),b=m.map((({layerId:e,name:a})=>({text:a,value:e})));function h(e){const{getServiceSettings:a,stateParams:s,setValue:p}=e,h=Object(t.useMemo)((()=>(s.selectedLayer&&s.selectedLayer.fields||[]).map(j)),[s.selectedLayer]),O=Object(t.useCallback)((async e=>{const s=await a(),t=await s.getEMSHotLink(e);p("emsHotLink",t)}),[p,a]),f=Object(t.useCallback)((async(e,a)=>{const s=m.find((({layerId:e})=>e===a));s&&(p(e,s),p("selectedJoinField",s.fields[0]),O(s))}),[O,p]),M=Object(t.useCallback)(((e,a)=>{s.selectedLayer&&p(e,s.selectedLayer.fields.find((e=>e.name===a)))}),[p,s.selectedLayer]);return Object(u.jsx)(i.a.Fragment,null,Object(u.jsx)(n.EuiPanel,{paddingSize:"s"},Object(u.jsx)(n.EuiTitle,{size:"xs"},Object(u.jsx)("h2",null,Object(u.jsx)(r.FormattedMessage,{id:"regionMap.visParams.layerSettingsTitle",defaultMessage:"Layer settings"}))),Object(u.jsx)(n.EuiSpacer,{size:"s"}),Object(u.jsx)(c.SelectOption,{id:"regionMapOptionsSelectLayer",label:l.i18n.translate("regionMap.visParams.vectorMapLabel",{defaultMessage:"Vector map"}),labelAppend:s.emsHotLink&&Object(u.jsx)(n.EuiText,{size:"xs"},Object(u.jsx)(n.EuiLink,{href:s.emsHotLink,target:"_blank",title:l.i18n.translate("regionMap.visParams.previewOnEMSLinkTitle",{defaultMessage:"Preview {selectedLayerName} on the Elastic Maps Service",values:{selectedLayerName:s.selectedLayer&&s.selectedLayer.name}})},Object(u.jsx)(r.FormattedMessage,{id:"regionMap.visParams.previewOnEMSLinkText",defaultMessage:"Preview on EMS"})," ",Object(u.jsx)(n.EuiIcon,{type:"popout",size:"s"}))),options:b,paramName:"selectedLayer",value:s.selectedLayer&&s.selectedLayer.layerId,setValue:f}),Object(u.jsx)(c.SelectOption,{id:"regionMapOptionsSelectJoinField",label:l.i18n.translate("regionMap.visParams.joinFieldLabel",{defaultMessage:"Join field"}),options:h,paramName:"selectedJoinField",value:s.selectedJoinField&&s.selectedJoinField.name,setValue:M}),Object(u.jsx)(c.SwitchOption,{label:l.i18n.translate("regionMap.visParams.displayWarningsLabel",{defaultMessage:"Display warnings"}),tooltip:l.i18n.translate("regionMap.visParams.switchWarningsTipText",{defaultMessage:"Turns on/off warnings. When turned on, warning will be shown for each term that cannot be matched to a shape in the vector layer based on the join field. When turned off, these warnings will be turned off."}),paramName:"isDisplayWarning",value:s.isDisplayWarning,setValue:p}),Object(u.jsx)(c.SwitchOption,{label:l.i18n.translate("regionMap.visParams.showAllShapesLabel",{defaultMessage:"Show all shapes"}),tooltip:l.i18n.translate("regionMap.visParams.turnOffShowingAllShapesTipText",{defaultMessage:"Turning this off only shows the shapes that were matched with a corresponding term."}),paramName:"showAllShapes",value:s.showAllShapes,setValue:p})),Object(u.jsx)(n.EuiSpacer,{size:"s"}),Object(u.jsx)(n.EuiPanel,{paddingSize:"s"},Object(u.jsx)(n.EuiTitle,{size:"xs"},Object(u.jsx)("h2",null,Object(u.jsx)(r.FormattedMessage,{id:"regionMap.visParams.styleSettingsLabel",defaultMessage:"Style settings"}))),Object(u.jsx)(n.EuiSpacer,{size:"s"}),Object(u.jsx)(c.SelectOption,{label:l.i18n.translate("regionMap.visParams.colorSchemaLabel",{defaultMessage:"Color schema"}),options:o.truncatedColorSchemas,paramName:"colorSchema",value:s.colorSchema,setValue:p}),Object(u.jsx)(c.NumberInputOption,{label:l.i18n.translate("regionMap.visParams.outlineWeightLabel",{defaultMessage:"Border thickness"}),min:0,paramName:"outlineWeight",value:s.outlineWeight,setValue:p})),Object(u.jsx)(n.EuiSpacer,{size:"s"}),Object(u.jsx)(d.WmsOptions,{setValue:p,stateParams:s,tmsLayers:g}))}}}]);