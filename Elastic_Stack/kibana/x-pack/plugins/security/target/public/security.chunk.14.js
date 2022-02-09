/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[14],{307:function(e,t,a){"use strict";a.r(t),a.d(t,"RoleMappingsGridPage",(function(){return role_mappings_grid_page_RoleMappingsGridPage}));var n=a(24),s=a.n(n),i=a(1),o=a.n(i),l=a(4),r=a(3),p=a.n(r),c=a(2),g=a(8),u=a(10),d=a(76);const m="/edit",j=e=>`/edit/${encodeURIComponent(e)}`;var b=a(97),M=a(95),x=a(0);const f=({history:e})=>Object(x.jsx)(l.EuiButton,s()({"data-test-subj":"createRoleMappingButton"},Object(u.reactRouterNavigate)(e,m),{fill:!0}),Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.createRoleMappingButton",defaultMessage:"Create role mapping"})),h=({history:e})=>Object(x.jsx)(l.EuiEmptyPrompt,{iconType:"managementApp",title:Object(x.jsx)("h1",null,Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.emptyPromptTitle",defaultMessage:"Create your first role mapping"})),body:Object(x.jsx)(r.Fragment,null,Object(x.jsx)("p",null,Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.emptyPromptDescription",defaultMessage:"Role mappings control which roles are assigned to your users."}))),actions:Object(x.jsx)(f,{history:e}),"data-test-subj":"roleMappingsEmptyPrompt"});class role_mappings_grid_page_RoleMappingsGridPage extends r.Component{constructor(e){super(e),o()(this,"renderTable",(()=>{const{roleMappings:e,selectedItems:t,loadState:a}=this.state,n="loadingTable"===a?Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.roleMappingTableLoadingMessage",defaultMessage:"Loading role mappings…"}):void 0,s={onSelectionChange:e=>{this.setState({selectedItems:e})}},i={toolsLeft:t.length?Object(x.jsx)(M.a,{roleMappingsAPI:this.props.roleMappingsAPI,notifications:this.props.notifications},(e=>Object(x.jsx)(l.EuiButton,{onClick:()=>e(t,this.onRoleMappingsDeleted),color:"danger","data-test-subj":"bulkDeleteActionButton"},Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.deleteRoleMappingButton",defaultMessage:"Delete {count, plural, one {role mapping} other {role mappings}}",values:{count:t.length}})))):void 0,toolsRight:Object(x.jsx)(l.EuiButton,{color:"secondary",iconType:"refresh",onClick:()=>this.reloadRoleMappings(),"data-test-subj":"reloadButton"},Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.reloadRoleMappingsButton",defaultMessage:"Reload"})),box:{incremental:!0},filters:void 0};return Object(x.jsx)(l.EuiInMemoryTable,{items:e,itemId:"name",columns:this.getColumnConfig(),search:i,sorting:{sort:{field:"name",direction:"asc"}},selection:s,pagination:{initialPageSize:20,pageSizeOptions:[10,20,50]},loading:"loadingTable"===a,message:n,isSelectable:!0,rowProps:()=>({"data-test-subj":"roleMappingRow"})})})),o()(this,"getColumnConfig",(()=>[{field:"name",name:c.i18n.translate("xpack.security.management.roleMappings.nameColumnName",{defaultMessage:"Name"}),sortable:!0,render:e=>Object(x.jsx)(l.EuiLink,s()({},Object(u.reactRouterNavigate)(this.props.history,j(e)),{"data-test-subj":"roleMappingName"}),e)},{field:"roles",name:c.i18n.translate("xpack.security.management.roleMappings.rolesColumnName",{defaultMessage:"Roles"}),sortable:!0,render:(e,t)=>{const{roles:a=[],role_templates:n=[]}=t;if(n.length>0)return Object(x.jsx)("span",{"data-test-subj":"roleMappingRoles"},c.i18n.translate("xpack.security.management.roleMappings.roleTemplates",{defaultMessage:"{templateCount, plural, one{# role template} other {# role templates}} defined",values:{templateCount:n.length}}));const s=a.map(((e,t)=>{var a,n;const s=null!==(a=null===(n=this.state.roles)||void 0===n?void 0:n.find((t=>t.name===e)))&&void 0!==a?a:e;return Object(x.jsx)(l.EuiFlexItem,{grow:!1,key:e},Object(x.jsx)(b.a,{role:s,navigateToApp:this.props.navigateToApp}))}));return Object(x.jsx)(l.EuiFlexGroup,{gutterSize:"s","data-test-subj":"roleMappingRoles",wrap:!0},s)}},{field:"enabled",name:c.i18n.translate("xpack.security.management.roleMappings.enabledColumnName",{defaultMessage:"Enabled"}),sortable:!0,render:e=>e?Object(x.jsx)(d.c,{"data-test-subj":"roleMappingEnabled"}):Object(x.jsx)(d.b,{"data-test-subj":"roleMappingEnabled"})},{name:c.i18n.translate("xpack.security.management.roleMappings.actionsColumnName",{defaultMessage:"Actions"}),actions:[{render:e=>Object(x.jsx)(l.EuiToolTip,{content:c.i18n.translate("xpack.security.management.roleMappings.actionEditTooltip",{defaultMessage:"Edit"})},Object(x.jsx)(l.EuiButtonIcon,s()({"aria-label":c.i18n.translate("xpack.security.management.roleMappings.actionEditAriaLabel",{defaultMessage:"Edit '{name}'",values:{name:e.name}}),iconType:"pencil",color:"primary","data-test-subj":`editRoleMappingButton-${e.name}`},Object(u.reactRouterNavigate)(this.props.history,j(e.name)))))},{render:e=>Object(x.jsx)(l.EuiFlexGroup,{gutterSize:"s"},Object(x.jsx)(l.EuiFlexItem,null,Object(x.jsx)(M.a,{roleMappingsAPI:this.props.roleMappingsAPI,notifications:this.props.notifications},(t=>Object(x.jsx)(l.EuiToolTip,{content:c.i18n.translate("xpack.security.management.roleMappings.actionDeleteTooltip",{defaultMessage:"Delete"})},Object(x.jsx)(l.EuiButtonIcon,{"aria-label":c.i18n.translate("xpack.security.management.roleMappings.actionDeleteAriaLabel",{defaultMessage:"Delete '{name}'",values:{name:e.name}}),iconType:"trash",color:"danger","data-test-subj":`deleteRoleMappingButton-${e.name}`,onClick:()=>t([e],this.onRoleMappingsDeleted)}))))))}]}])),o()(this,"onRoleMappingsDeleted",(e=>{e.length&&this.reloadRoleMappings()})),o()(this,"performInitialLoad",(async()=>{try{const[e,t]=await Promise.all([this.props.roleMappingsAPI.getRoleMappings(),this.props.rolesAPIClient.getRoles()]);this.setState({roleMappings:e,roles:t})}catch(e){this.setState({error:e})}this.setState({loadState:"finished"})})),o()(this,"reloadRoleMappings",(()=>{this.setState({roleMappings:[],loadState:"loadingTable"}),this.loadRoleMappings()})),o()(this,"loadRoleMappings",(async()=>{try{const e=await this.props.roleMappingsAPI.getRoleMappings();this.setState({roleMappings:e})}catch(e){this.setState({error:e})}this.setState({loadState:"finished"})})),this.state={loadState:"loadingApp",roleMappings:null,roles:null,hasCompatibleRealms:!0,selectedItems:[],error:void 0}}componentDidMount(){this.checkPrivileges()}render(){const{loadState:e,error:t,roleMappings:a}=this.state;if("permissionDenied"===e)return Object(x.jsx)(M.c,null);if("loadingApp"===e)return Object(x.jsx)(l.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"subdued"},Object(x.jsx)(M.d,null,Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.loadingRoleMappingsDescription",defaultMessage:"Loading role mappings…"})));if(t){const{body:{error:e,message:a,statusCode:n}}=t;return Object(x.jsx)(l.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"danger"},Object(x.jsx)(l.EuiCallOut,{title:Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.loadingRoleMappingsErrorTitle",defaultMessage:"Error loading Role mappings"}),color:"danger",iconType:"alert"},n,": ",e," - ",a))}return"finished"===e&&a&&0===a.length?Object(x.jsx)(l.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"subdued"},Object(x.jsx)(h,{history:this.props.history})):Object(x.jsx)(p.a.Fragment,null,Object(x.jsx)(l.EuiPageHeader,{bottomBorder:!0,pageTitle:Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.roleMappingTitle",defaultMessage:"Role Mappings"}),description:Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.roleMappingDescription",defaultMessage:"Role mappings define which roles are assigned to users from an external identity provider. {learnMoreLink}",values:{learnMoreLink:Object(x.jsx)(l.EuiLink,{href:this.props.docLinks.links.security.mappingRoles,external:!0},Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.learnMoreLinkText",defaultMessage:"Learn more."}))}}),rightSideItems:[Object(x.jsx)(l.EuiButton,s()({fill:!0,iconType:"plusInCircleFilled","data-test-subj":"createRoleMappingButton"},Object(u.reactRouterNavigate)(this.props.history,m)),Object(x.jsx)(g.FormattedMessage,{id:"xpack.security.management.roleMappings.createRoleMappingButtonLabel",defaultMessage:"Create role mapping"}))]}),Object(x.jsx)(l.EuiSpacer,{size:"l"}),!this.state.hasCompatibleRealms&&Object(x.jsx)(p.a.Fragment,null,Object(x.jsx)(M.b,null),Object(x.jsx)(l.EuiSpacer,null)),this.renderTable())}async checkPrivileges(){try{const{canManageRoleMappings:e,hasCompatibleRealms:t}=await this.props.roleMappingsAPI.checkRoleMappingFeatures();this.setState({loadState:e?this.state.loadState:"permissionDenied",hasCompatibleRealms:t}),e&&this.performInitialLoad()}catch(e){this.setState({error:e,loadState:"finished"})}}}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return c}));var n=a(4),s=(a(3),a(8)),i=a(0);const o=e=>e.tooltipContent?Object(i.jsx)(n.EuiToolTip,{content:e.tooltipContent},e.children):e.children,l=e=>Object(i.jsx)(o,{tooltipContent:e.tooltipContent},Object(i.jsx)(n.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"warning"},Object(i.jsx)(s.FormattedMessage,{id:"xpack.security.management.deprecatedBadge",defaultMessage:"Deprecated"}))),r=e=>Object(i.jsx)(o,{tooltipContent:e.tooltipContent},Object(i.jsx)(n.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"hollow"},Object(i.jsx)(s.FormattedMessage,{id:"xpack.security.management.disabledBadge",defaultMessage:"Disabled"}))),p=e=>Object(i.jsx)(o,{tooltipContent:e.tooltipContent},Object(i.jsx)(n.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"secondary"},Object(i.jsx)(s.FormattedMessage,{id:"xpack.security.management.enabledBadge",defaultMessage:"Enabled"}))),c=e=>Object(i.jsx)(o,{tooltipContent:e.tooltipContent},Object(i.jsx)(n.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"primary"},Object(i.jsx)(s.FormattedMessage,{id:"xpack.security.management.reservedBadge",defaultMessage:"Reserved"})))},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return g})),a.d(t,"d",(function(){return u}));var n=a(4),s=a(3),i=a(2),o=a(0);const l=({roleMappingsAPI:e,children:t,notifications:a})=>{const[l,r]=Object(s.useState)([]),[p,c]=Object(s.useState)(!1),[g,u]=Object(s.useState)(!1),d=Object(s.useRef)(null),m=()=>{c(!1),r([])},j=async()=>{let t;u(!0);try{t=await e.deleteRoleMappings(l.map((e=>e.name)))}catch(e){return a.toasts.addError(e,{title:i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.unknownError",{defaultMessage:"Error deleting role mappings"})}),void u(!1)}u(!1),m();const n=t.filter((e=>e.success)),s=t.filter((e=>!e.success));if(n.length>0){const e=n.length>1?i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.successMultipleNotificationTitle",{defaultMessage:"Deleted {count} role mappings",values:{count:n.length}}):i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.successSingleNotificationTitle",{defaultMessage:"Deleted role mapping '{name}'",values:{name:n[0].name}});a.toasts.addSuccess({title:e,"data-test-subj":"deletedRoleMappingSuccessToast"}),d.current&&d.current(n.map((({name:e})=>e)))}if(s.length>0){const e=s.length>1?i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.errorMultipleNotificationTitle",{defaultMessage:"Error deleting {count} role mappings",values:{count:s.length}}):i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.errorSingleNotificationTitle",{defaultMessage:"Error deleting role mapping '{name}'",values:{name:s[0].name}});a.toasts.addDanger(e)}};return Object(o.jsx)(s.Fragment,null,t(((e,t=(()=>{}))=>{if(!e||!e.length)throw new Error("No Role Mappings specified for delete");c(!0),r(e),d.current=t})),(()=>{if(!p)return null;const e=1===l.length;return Object(o.jsx)(n.EuiConfirmModal,{title:e?i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.confirmModal.deleteSingleTitle",{defaultMessage:"Delete role mapping '{name}'?",values:{name:l[0].name}}):i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.confirmModal.deleteMultipleTitle",{defaultMessage:"Delete {count} role mappings?",values:{count:l.length}}),onCancel:m,onConfirm:j,cancelButtonText:i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.confirmModal.cancelButtonLabel",{defaultMessage:"Cancel"}),confirmButtonText:i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.confirmModal.confirmButtonLabel",{defaultMessage:"Delete {count, plural, one {role mapping} other {role mappings}}",values:{count:l.length}}),confirmButtonDisabled:g,buttonColor:"danger","data-test-subj":"deleteRoleMappingConfirmationModal"},e?null:Object(o.jsx)(s.Fragment,null,Object(o.jsx)("p",null,i.i18n.translate("xpack.security.management.roleMappings.deleteRoleMapping.confirmModal.deleteMultipleListDescription",{defaultMessage:"You are about to delete these role mappings:"})),Object(o.jsx)("ul",null,l.map((({name:e})=>Object(o.jsx)("li",{key:e},e))))))})())};var r=a(8),p=a(10);const c=()=>{const e=Object(p.useKibana)().services.docLinks;return Object(o.jsx)(n.EuiCallOut,{title:Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.roleMappings.noCompatibleRealmsErrorTitle",defaultMessage:"No compatible realms appear to be enabled in Elasticsearch"}),color:"warning",iconType:"alert"},Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.roleMappings.noCompatibleRealmsErrorDescription",defaultMessage:"Role mappings may not be applied to users. Contact your system administrator and refer to the {link} for more information.",values:{link:Object(o.jsx)(n.EuiLink,{href:e.links.security.mappingRoles,external:!0,target:"_blank"},Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.roleMappings.noCompatibleRealmsErrorLinkText",defaultMessage:"docs"}))}}))},g=()=>Object(o.jsx)(n.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"subdued"},Object(o.jsx)(n.EuiEmptyPrompt,{iconType:"securityApp",title:Object(o.jsx)("h2",null,Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.roleMappings.deniedPermissionTitle",defaultMessage:"You need permission to manage role mappings"})),body:Object(o.jsx)("p",{"data-test-subj":"permissionDeniedMessage"},Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.roleMappings.deniedPermissionDescription",defaultMessage:"Contact your system administrator."}))})),u=e=>Object(o.jsx)(n.EuiEmptyPrompt,{title:Object(o.jsx)(n.EuiLoadingSpinner,{size:"xl"}),body:Object(o.jsx)(n.EuiText,{color:"subdued"},e.children||Object(o.jsx)(r.FormattedMessage,{id:"xpack.security.management.editRoleMapping.loadingRoleMappingDescription",defaultMessage:"Loading…"})),"data-test-subj":"sectionLoading"})},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(4),s=(a(3),a(25)),i=a(0);const o=({role:e,navigateToApp:t})=>{let a,o;return"string"==typeof e?(a=Object(i.jsx)("div",null,e),o=`security/roles/edit/${encodeURIComponent(e)}`):Object(s.f)(e)?(a=Object(i.jsx)(n.EuiToolTip,{content:Object(s.c)(e),"data-test-subj":"roleDeprecationTooltip"},Object(i.jsx)("div",null,e.name," ",Object(i.jsx)(n.EuiIcon,{type:"alert",color:"warning",size:"s",className:"eui-alignTop"}))),o=`security/roles/edit/${encodeURIComponent(e.name)}`):(a=Object(i.jsx)("div",null,e.name),o=`security/roles/edit/${encodeURIComponent(e.name)}`),Object(i.jsx)(n.EuiLink,{onClick:()=>t("management",{path:o})},a)}}}]);