(window.presentationUtil_bundle_jsonpfunction=window.presentationUtil_bundle_jsonpfunction||[]).push([[1,3],{62:function(e,t,s){switch(window.__kbnThemeTag__){case"v7dark":return s(63);case"v7light":return s(65);case"v8dark":return s(67);case"v8light":return s(69)}},63:function(e,t,s){var i=s(3),o=s(64);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},64:function(e,t,s){(t=s(4)(!1)).push([e.i,".projectListItem{position:relative;background:#1D1E24;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#7DE2D1;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#343741;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},65:function(e,t,s){var i=s(3),o=s(66);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},66:function(e,t,s){(t=s(4)(!1)).push([e.i,".projectListItem{position:relative;background:#fff;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#017D73;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#D3DAE6;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},67:function(e,t,s){var i=s(3),o=s(68);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},68:function(e,t,s){(t=s(4)(!1)).push([e.i,".projectListItem{position:relative;background:#1D1E24;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#7DDED8;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#343741;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},69:function(e,t,s){var i=s(3),o=s(70);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};i(o,n);e.exports=o.locals||{}},70:function(e,t,s){(t=s(4)(!1)).push([e.i,".projectListItem{position:relative;background:#fff;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#00BFB3;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#D3DAE6;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},73:function(e,t,s){"use strict";s.r(t),s.d(t,"getOverridenCount",(function(){return E})),s.d(t,"LabsFlyout",(function(){return v}));var i=s(1),o=s.n(i),n=s(5),a=s(10),l=s(11),r=s(59),c=s(0);const u={Components:{Switch:{getKibanaSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.kibanaSwitchName",{defaultMessage:"Kibana"}),help:l.i18n.translate("presentationUtil.labs.components.kibanaSwitchHelp",{defaultMessage:"Enables this lab for all Kibana users."})}),getBrowserSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.browserSwitchName",{defaultMessage:"Browser"}),help:l.i18n.translate("presentationUtil.labs.components.browserSwitchHelp",{defaultMessage:"Enables the lab for this browser and persists after it closes."})}),getSessionSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.sessionSwitchName",{defaultMessage:"Session"}),help:l.i18n.translate("presentationUtil.labs.components.sessionSwitchHelp",{defaultMessage:"Enables the lab for this browser session, so it resets when it closes."})})},List:{getNoProjectsMessage:()=>l.i18n.translate("presentationUtil.labs.components.noProjectsMessage",{defaultMessage:"No labs currently available."}),getNoProjectsInSolutionMessage:e=>l.i18n.translate("presentationUtil.labs.components.noProjectsinSolutionMessage",{defaultMessage:"No labs currently in {solutionName}.",values:{solutionName:e}})},ListItem:{getOverrideLegend:()=>l.i18n.translate("presentationUtil.labs.components.overrideFlagsLabel",{defaultMessage:"Overrides"}),getOverriddenIconTipLabel:()=>l.i18n.translate("presentationUtil.labs.components.overridenIconTipLabel",{defaultMessage:"Default overridden"}),getEnabledStatusMessage:()=>Object(c.jsx)(r.FormattedMessage,{id:"presentationUtil.labs.components.enabledStatusMessage",defaultMessage:"Default: {status}",values:{status:Object(c.jsx)(n.EuiCode,null,"Enabled")},description:"Displays the enabled status of a lab project"}),getDisabledStatusMessage:()=>Object(c.jsx)(r.FormattedMessage,{id:"presentationUtil.labs.components.disabledStatusMessage",defaultMessage:"Default: {status}",values:{status:Object(c.jsx)(n.EuiCode,null,"Disabled")},description:"Displays the disabled status of a lab project"})},Flyout:{getTitleLabel:()=>l.i18n.translate("presentationUtil.labs.components.titleLabel",{defaultMessage:"Labs"}),getDescriptionMessage:()=>l.i18n.translate("presentationUtil.labs.components.descriptionMessage",{defaultMessage:"Try out our features that are in progress or experimental."}),getResetToDefaultLabel:()=>l.i18n.translate("presentationUtil.labs.components.resetToDefaultLabel",{defaultMessage:"Reset to defaults"}),getLabFlagsLabel:()=>l.i18n.translate("presentationUtil.labs.components.labFlagsLabel",{defaultMessage:"Lab flags"}),getRefreshLabel:()=>l.i18n.translate("presentationUtil.labs.components.calloutHelp",{defaultMessage:"Refresh to apply changes"}),getCloseButtonLabel:()=>l.i18n.translate("presentationUtil.labs.components.closeButtonLabel",{defaultMessage:"Close"})}}};var p=s(60),d=s.n(p),b=s(12);const{Switch:j}=u.Components,g={kibana:j.getKibanaSwitchText(),browser:j.getBrowserSwitchText(),session:j.getSessionSwitchText()},x=({env:e,isChecked:t,onChange:s,name:i})=>{const{capabilities:o}=a.b.getHooks(),l="kibana"!==e||o.useService().canSetAdvancedSettings();return Object(c.jsx)(n.EuiFlexItem,{grow:!1,style:{marginBottom:".25rem"}},Object(c.jsx)(n.EuiFlexGroup,{gutterSize:"xs",alignItems:"flexEnd",responsive:!1},Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiSwitch,{disabled:!l,checked:t,style:{marginTop:1},label:Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiScreenReaderOnly,null,Object(c.jsx)("span",null,i," - ")),g[e].name),onChange:e=>s(e.target.checked),compressed:!0})),Object(c.jsx)(n.EuiFlexItem,{style:{textAlign:"right"}},Object(c.jsx)(n.EuiIconTip,{content:g[e].help,position:"left"}))),Object(c.jsx)(n.EuiSpacer,{size:"xs"}))};s(62);const{ListItem:m}=u.Components,f=({project:e,onStatusChange:t})=>{const{id:s,status:i,isActive:a,name:l,description:r,solutions:u}=e,{isEnabled:p,isOverride:j}=i;return Object(c.jsx)(n.EuiFlexItem,{className:d()({projectListItem:!0,"projectListItem--isOverridden":j,"projectListItem--isOverriddenEnabled":j&&p})},Object(c.jsx)(n.EuiFlexGroup,{gutterSize:"m",responsive:!1},Object(c.jsx)(n.EuiFlexItem,null,Object(c.jsx)(n.EuiFlexGroup,{direction:"column",gutterSize:"xs",responsive:!1},Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiTitle,{className:"projectListItem__title",size:"xs"},Object(c.jsx)("h2",null,l,j?Object(c.jsx)("span",{className:"projectListItem__titlePendingChangesIndicator"},Object(c.jsx)(n.EuiIconTip,{content:m.getOverriddenIconTipLabel(),position:"top",type:"dot",color:"secondary"})):null))),Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)("div",{className:"projectListItem__solutions"},u.map((e=>Object(c.jsx)(n.EuiBadge,{key:e},e))))),Object(c.jsx)(n.EuiFlexItem,null,Object(c.jsx)(n.EuiSpacer,{size:"s"}),Object(c.jsx)(n.EuiText,{size:"s",color:"subdued"},r)),Object(c.jsx)(n.EuiFlexItem,null,Object(c.jsx)(n.EuiSpacer,{size:"xs"}),Object(c.jsx)(n.EuiText,{size:"xs",color:"subdued"},a?m.getEnabledStatusMessage():m.getDisabledStatusMessage())))),Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiFormFieldset,{legend:{children:Object(c.jsx)(o.a.Fragment,null,Object(c.jsx)(n.EuiScreenReaderOnly,null,Object(c.jsx)("span",null,l)),m.getOverrideLegend())}},b.b.map((e=>{const o=i[e];if(void 0!==o)return Object(c.jsx)(x,{key:e,isChecked:o,onChange:i=>t(s,e,i),env:e,name:l})}))))))},{List:h}=u.Components,O=({solutions:e})=>{let t=h.getNoProjectsMessage();if(1===(null==e?void 0:e.length)){switch(e[0]){case"dashboard":t=h.getNoProjectsInSolutionMessage("Dashboard");case"canvas":t=h.getNoProjectsInSolutionMessage("Canvas")}}return Object(c.jsx)(n.EuiCallOut,{title:t})},I=e=>{const{solutions:t,projects:s,onStatusChange:i}=e,o=Object.values(s).map((e=>e.isDisplayed?t&&!t.some((t=>e.solutions.includes(t)))?null:Object(c.jsx)("li",{key:e.id},Object(c.jsx)(f,{project:e,onStatusChange:i})):null)).filter((e=>null!==e));return Object(c.jsx)(n.EuiFlexGroup,{direction:"column",gutterSize:"none",responsive:!1},o.length>0?Object(c.jsx)("ul",null,o):Object(c.jsx)(O,{solutions:t}))},{Flyout:L}=u.Components,E=e=>Object.values(e).filter((e=>e.status.isOverride)).length,v=e=>{const{solutions:t,onEnabledCountChange:s=(()=>{}),onClose:o}=e,{labs:l}=a.b.getHooks(),{getProjects:r,setProjectStatus:u,reset:p}=l.useService(),[d,b]=Object(i.useState)(r()),[j,g]=Object(i.useState)(E(d)),x=((e,t)=>{for(const s of Object.keys(e))for(const i of Object.keys(e[s].status))if(e[s].status[i]!==t[s].status[i])return!0;return!1})(Object(i.useRef)(r()).current,d);Object(i.useEffect)((()=>{g(E(d))}),[d]),Object(i.useEffect)((()=>{s(j)}),[s,j]);let m=null;const f=Object(c.jsx)(n.EuiButtonEmpty,{onClick:()=>{p(),b(r())},isDisabled:!j},L.getResetToDefaultLabel()),h=Object(c.jsx)(n.EuiButton,{color:"primary",fill:!0,onClick:()=>{window.location.reload()},isDisabled:!x},L.getRefreshLabel());return m=Object(c.jsx)(n.EuiFlyoutFooter,null,Object(c.jsx)(n.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiButtonEmpty,{iconType:"cross",onClick:()=>o(),flush:"left"},L.getCloseButtonLabel())),Object(c.jsx)(n.EuiFlexItem,null,Object(c.jsx)(n.EuiFlexGroup,{justifyContent:"flexEnd",gutterSize:"s",responsive:!1},Object(c.jsx)(n.EuiFlexItem,{grow:!1},f),Object(c.jsx)(n.EuiFlexItem,{grow:!1},h))))),Object(c.jsx)(n.EuiFlyout,{onClose:o,hideCloseButton:!0,maskProps:{headerZindexLocation:"below"}},Object(c.jsx)(n.EuiFlyoutHeader,{hasBorder:!0},Object(c.jsx)(n.EuiTitle,{size:"m"},Object(c.jsx)("h2",null,Object(c.jsx)(n.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(c.jsx)(n.EuiFlexItem,{grow:!1},Object(c.jsx)(n.EuiIcon,{type:"beaker",size:"l"})),Object(c.jsx)(n.EuiFlexItem,null,L.getTitleLabel())))),Object(c.jsx)(n.EuiSpacer,{size:"s"}),Object(c.jsx)(n.EuiText,{size:"s",color:"subdued"},Object(c.jsx)("p",null,L.getDescriptionMessage()))),Object(c.jsx)(n.EuiFlyoutBody,null,Object(c.jsx)(I,{projects:d,solutions:t,onStatusChange:(e,t,s)=>{u(e,t,s),b(r())}})),m)};t.default=v},84:function(e,t,s){"use strict";s.r(t),s.d(t,"LabsBeakerButton",(function(){return p}));var i=s(8),o=s.n(i),n=s(1),a=s.n(n),l=s(5),r=s(10),c=s(73),u=s(0);const p=({solutions:e,...t})=>{const{labs:s}=r.b.getHooks(),{getProjects:i}=s.useService(),[p,d]=Object(n.useState)(!1),b=i(),[j,g]=Object(n.useState)(Object.values(b).filter((e=>e.status.isOverride)).length);return Object(u.jsx)(a.a.Fragment,null,Object(u.jsx)(l.EuiButton,o()({},t,{onClick:()=>d((e=>!e)),minWidth:0}),Object(u.jsx)(l.EuiIcon,{type:"beaker"}),j>0?Object(u.jsx)(l.EuiNotificationBadge,{color:"subdued",style:{marginLeft:2}},j):null),p?Object(u.jsx)(c.LabsFlyout,{onClose:()=>d(!1),solutions:e,onEnabledCountChange:g}):null)};t.default=p}}]);