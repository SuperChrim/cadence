/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[20],{55:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var s=a(1),n=a.n(s),c=a(36),r=a(13),i=a(0),o=a(2),l=a(14),u=a(147),d=a(144),j=a(98),b=a(83),g=a(100),p=a(5);const f=({onConfirm:e,onCancel:t})=>Object(p.jsx)(r.EuiConfirmModal,{title:i.i18n.translate("xpack.triggersActionsUI.sections.confirmAlertSave.confirmAlertSaveTitle",{defaultMessage:"Save rule with no actions?"}),onCancel:t,onConfirm:e,confirmButtonText:i.i18n.translate("xpack.triggersActionsUI.sections.confirmAlertSave.confirmAlertSaveConfirmButtonText",{defaultMessage:"Save rule"}),cancelButtonText:i.i18n.translate("xpack.triggersActionsUI.sections.confirmAlertSave.confirmAlertSaveCancelButtonText",{defaultMessage:"Cancel"}),defaultFocusedButton:"confirm","data-test-subj":"confirmAlertSaveModal"},Object(p.jsx)("p",null,Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.confirmAlertSave.confirmAlertSaveWithoutActionsMessage",defaultMessage:"You can add an action at anytime."})));var y=a(145),O=a(63),m=a(86);const x=({isSaving:e,onSave:t,onCancel:a,isFormLoading:s})=>{const{loadingHealthCheck:o}=Object(m.b)();return Object(p.jsx)(r.EuiFlyoutFooter,null,Object(p.jsx)(r.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(p.jsx)(r.EuiFlexItem,{grow:!1},Object(p.jsx)(r.EuiButtonEmpty,{"data-test-subj":"cancelSaveAlertButton",onClick:a},i.i18n.translate("xpack.triggersActionsUI.sections.alertAddFooter.cancelButtonLabel",{defaultMessage:"Cancel"}))),s?Object(p.jsx)(r.EuiFlexItem,{grow:!1},Object(p.jsx)(r.EuiSpacer,{size:"s"}),Object(p.jsx)(r.EuiLoadingSpinner,{size:"l"})):Object(p.jsx)(n.a.Fragment,null),Object(p.jsx)(r.EuiFlexItem,{grow:!1},Object(p.jsx)(r.EuiButton,{fill:!0,color:"secondary","data-test-subj":"saveAlertButton",type:"submit",iconType:"check",isDisabled:o,isLoading:e,onClick:t},Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.alertAddFooter.saveButtonLabel",defaultMessage:"Save"})))))};var v=a(59),A=a(146),E=a(4),S=a(6);const C=({consumer:e,ruleTypeRegistry:t,actionTypeRegistry:a,onClose:n,canChangeTrigger:C,alertTypeId:T,initialValues:I,reloadAlerts:h,onSave:F,metadata:w,...M})=>{var k;const B=null!=F?F:h,U=Object(s.useMemo)((()=>({params:{},consumer:e,alertTypeId:T,schedule:{interval:S.c},actions:[],tags:[],notifyWhen:"onActionGroupChange",...I||{}})),[T,e,I]),[{alert:L},N]=Object(s.useReducer)(j.a,{alert:U}),[D,R]=Object(s.useState)({}),[z,_]=Object(s.useState)(!1),[P,W]=Object(s.useState)(!1),[G,H]=Object(s.useState)(!1),[V,Y]=Object(s.useState)(M.ruleTypeIndex),[q,J]=Object(s.useState)(!1),K=(e,t)=>{N({command:{type:"setProperty"},payload:{key:e,value:t}})},{http:Q,notifications:{toasts:X},application:{capabilities:Z}}=Object(v.b)().services,$=Object(O.e)(Z);Object(s.useEffect)((()=>{T&&K("alertTypeId",T)}),[T]),Object(s.useEffect)((()=>{M.ruleTypeIndex||(async()=>{const e=await Object(b.l)({http:Q}),t=new Map;for(const a of e)t.set(a.id,a);Y(t)})()}),[M.ruleTypeIndex,Q]),Object(s.useEffect)((()=>{Object(o.isEmpty)(L.params)&&!Object(o.isEmpty)(D)?R({}):Object(o.isEmpty)(D)&&R(L.params)}),[L.params,D,R]);const[ee,te]=Object(s.useState)([]),[ae,se]=Object(s.useState)(!1);Object(s.useEffect)((()=>{(async()=>{se(!0);const e=await Object(d.a)(L,a);se(!1),te([...e])})()}),[L,a]),Object(s.useEffect)((()=>{if(L.alertTypeId&&V){const e=V.get(L.alertTypeId);null!=e&&e.defaultScheduleInterval&&!q&&K("schedule",{interval:e.defaultScheduleInterval})}}),[L.alertTypeId,V,L.schedule.interval,q]),Object(s.useEffect)((()=>{L.schedule.interval===S.c||q||J(!0)}),[L.schedule.interval,q]);const ne=()=>{Object(A.a)(L,U,!1)||Object(A.b)(L.params,D)?H(!0):n(l.b.CANCELED)},ce=async()=>{const e=await async function(){try{const e=await Object(b.b)({http:Q,alert:L});return X.addSuccess(i.i18n.translate("xpack.triggersActionsUI.sections.alertAdd.saveSuccessNotificationText",{defaultMessage:'Created rule "{ruleName}"',values:{ruleName:e.name}})),e}catch(a){var e,t;X.addDanger(null!==(e=null===(t=a.body)||void 0===t?void 0:t.message)&&void 0!==e?e:i.i18n.translate("xpack.triggersActionsUI.sections.alertAdd.saveErrorNotificationText",{defaultMessage:"Cannot create rule."}))}}();_(!1),e&&(n(l.b.SAVED),B&&B())},re=L.alertTypeId?t.get(L.alertTypeId):null,{alertBaseErrors:ie,alertErrors:oe,alertParamsErrors:le}=Object(d.b)(L,re,L.alertTypeId?null==V?void 0:V.get(L.alertTypeId):void 0),ue=$&&0===(null===(k=L.actions)||void 0===k?void 0:k.length);return Object(p.jsx)(r.EuiPortal,null,Object(p.jsx)(r.EuiFlyout,{onClose:ne,"aria-labelledby":"flyoutAlertAddTitle",size:"m",maxWidth:620,ownFocus:!1},Object(p.jsx)(r.EuiFlyoutHeader,{hasBorder:!0},Object(p.jsx)(r.EuiTitle,{size:"s","data-test-subj":"addAlertFlyoutTitle"},Object(p.jsx)("h3",{id:"flyoutTitle"},Object(p.jsx)(c.FormattedMessage,{defaultMessage:"Create rule",id:"xpack.triggersActionsUI.sections.alertAdd.flyoutTitle"})))),Object(p.jsx)(m.a,null,Object(p.jsx)(g.a,{inFlyout:!0,waitForCheck:!1},Object(p.jsx)(r.EuiFlyoutBody,null,Object(p.jsx)(u.a,{alert:L,dispatch:N,errors:oe,canChangeTrigger:C,operation:i.i18n.translate("xpack.triggersActionsUI.sections.alertAdd.operationName",{defaultMessage:"create"}),actionTypeRegistry:a,ruleTypeRegistry:t,metadata:w})),Object(p.jsx)(x,{isSaving:z,isFormLoading:ae,onSave:async()=>{if(_(!0),ae||!Object(d.c)(L,oe,ee))return e=Object(E.a)(L,le,ie,ee),N({command:{type:"setAlert"},payload:{key:"alert",value:e}}),void _(!1);var e;ue?W(!0):await ce()},onCancel:ne}))),P&&Object(p.jsx)(f,{onConfirm:async()=>{W(!1),await ce()},onCancel:()=>{_(!1),W(!1)}}),G&&Object(p.jsx)(y.a,{onConfirm:()=>{H(!1),n(l.b.CANCELED)},onCancel:()=>{H(!1)}})))}}}]);