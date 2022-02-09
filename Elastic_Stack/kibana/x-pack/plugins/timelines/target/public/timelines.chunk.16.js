/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.timelines_bundle_jsonpfunction=window.timelines_bundle_jsonpfunction||[]).push([[16],{146:function(e,t,l){"use strict";l.r(t),l.d(t,"AlertStatusBulkActionsComponent",(function(){return v})),l.d(t,"StatefulAlertStatusBulkActions",(function(){return f})),l.d(t,"default",(function(){return f}));var s=l(0),n=l.n(s),c=l(12),a=l(13),o=l(2),i=l(97),r=l.n(i),u=l(6),d=l.n(u),b=l(26),m=l(19),A=l(4);const S=(e,t)=>A.i18n.translate("xpack.timelines.toolbar.bulkActions.selectedAlertsTitle",{values:{selectedAlertsFormatted:e,selectedAlerts:t},defaultMessage:"Selected {selectedAlertsFormatted} {selectedAlerts, plural, =1 {alert} other {alerts}}"}),k=A.i18n.translate("xpack.timelines.toolbar.bulkActions.clearSelectionTitle",{defaultMessage:"Clear selection"}),p=d.a.div.withConfig({displayName:"BulkActionsContainer",componentId:"sc-104vlhl-0"})(["display:inline-block;position:relative;"]);p.displayName="BulkActionsContainer";const j=({selectedCount:e,totalItems:t,showClearSelection:l,onSelectAll:c,onClearSelection:a,bulkActionItems:i})=>{const[u,d]=Object(s.useState)(!1),[j]=Object(b.useUiSetting$)(m.a),C=Object(s.useMemo)((()=>r()(t).format(j)),[j,t]),O=Object(s.useMemo)((()=>r()(e).format(j)),[j,e]),v=Object(s.useCallback)((()=>{d((e=>!e))}),[d]),E=Object(s.useCallback)((()=>{d(!1)}),[d]),f=Object(s.useCallback)((()=>{l?a():c()}),[a,c,l]),h=Object(s.useMemo)((()=>l?S(C,t):S(O,e)),[l,C,O,t,e]),I=Object(s.useMemo)((()=>{return l?k:(e=C,s=t,A.i18n.translate("xpack.timelines.toolbar.bulkActions.selectAllAlertsTitle",{values:{totalAlertsFormatted:e,totalAlerts:s},defaultMessage:"Select all {totalAlertsFormatted} {totalAlerts, plural, =1 {alert} other {alerts}}"}));var e,s}),[l,C,t]);return n.a.createElement(p,{"data-test-subj":"bulk-actions-button-container"},n.a.createElement(o.EuiPopover,{isOpen:u,anchorPosition:"upCenter",panelPaddingSize:"none",button:n.a.createElement(o.EuiButtonEmpty,{"aria-label":"selectedShowBulkActions","data-test-subj":"selectedShowBulkActionsButton",size:"xs",iconType:"arrowDown",iconSide:"right",color:"primary",onClick:v},h),closePopover:E},n.a.createElement(o.EuiContextMenuPanel,{size:"s",items:i})),n.a.createElement(o.EuiButtonEmpty,{size:"xs","aria-label":"selectAllAlerts","data-test-subj":"selectAllAlertsButton",iconType:l?"cross":"pagesSelect",onClick:f},I))},C=n.a.memo(j);var O=l(51);const v=n.a.memo((({id:e,totalItems:t,filterStatus:l,query:o,selectedEventIds:i,isSelectAllChecked:r,clearSelected:u,indexName:d,onActionSuccess:b,onActionFailure:m,refetch:A})=>{const S=Object(c.useDispatch)(),[k,p]=Object(s.useState)(!1);Object(s.useEffect)((()=>{r?S(a.c.setTGridSelectAll({id:e,selectAll:!1})):p(!1)}),[S,r,e]);const j=Object(s.useCallback)((()=>{S(a.c.setTGridSelectAll({id:e,selectAll:!0})),p(!0)}),[S,e]),v=Object(s.useCallback)((()=>{u({id:e}),S(a.c.setTGridSelectAll({id:e,selectAll:!1})),p(!1)}),[u,S,e]),E=Object(s.useCallback)(((e,t,l)=>{A(),b&&b(e,t,l)}),[A,b]),f=Object(s.useCallback)(((e,t)=>{A(),m&&m(e,t)}),[A,m]),h=Object(s.useCallback)((({eventIds:t,isLoading:l})=>{S(a.c.setEventsLoading({id:e,eventIds:t,isLoading:l}))}),[S,e]),I=Object(s.useCallback)((({eventIds:t,isDeleted:l})=>{S(a.c.setEventsDeleted({id:e,eventIds:t,isDeleted:l}))}),[S,e]),g=Object(O.a)({indexName:d,eventIds:Object.keys(i),currentStatus:l,...k?{query:o}:{},setEventsLoading:h,setEventsDeleted:I,onUpdateSuccess:E,onUpdateFailure:f,timelineId:e});return n.a.createElement(C,{"data-test-subj":"bulk-actions",selectedCount:Object.keys(i).length,totalItems:t,showClearSelection:k,onSelectAll:j,onClearSelection:v,bulkActionItems:g})}));v.displayName="AlertStatusBulkActionsComponent";const E={clearSelected:a.c.clearSelected},f=Object(c.connect)((()=>{const e=a.d.getTGridByIdSelector();return(t,{id:l})=>{const s=e(t,l),{selectedEventIds:n,isSelectAllChecked:c}=s;return{isSelectAllChecked:c,selectedEventIds:n}}}),E)(v)}}]);