/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[15],{66:function(s,e,t){"use strict";t.d(e,"a",(function(){return change_password_form_ChangePasswordForm}));var a=t(24),r=t.n(a),o=t(1),n=t.n(o),i=t(4),d=t(17),c=t.n(d),u=t(3),h=t(2),l=t(8),w=t(0);class change_password_form_ChangePasswordForm extends u.Component{constructor(s){super(s),n()(this,"getForm",(()=>Object(w.jsx)(i.EuiForm,null,this.props.isUserChangingOwnPassword&&Object(w.jsx)(i.EuiFormRow,r()({},this.validateCurrentPassword(),{fullWidth:!0,label:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.currentPasswordLabel",defaultMessage:"Current password"})}),Object(w.jsx)(i.EuiFieldPassword,{autoComplete:"off","data-test-subj":"currentPassword",type:"dual",value:this.state.currentPassword,onChange:this.onCurrentPasswordChange,disabled:this.state.changeInProgress,fullWidth:!0})),Object(w.jsx)(i.EuiFormRow,r()({helpText:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.passwordRequirements",defaultMessage:"Use at least 6 characters."})},this.validateNewPassword(),{fullWidth:!0,label:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.newPasswordLabel",defaultMessage:"New password"})}),Object(w.jsx)(i.EuiFieldPassword,{autoComplete:"new-password","data-test-subj":"newPassword",type:"dual",value:this.state.newPassword,onChange:this.onNewPasswordChange,disabled:this.state.changeInProgress,fullWidth:!0})),Object(w.jsx)(i.EuiFormRow,r()({},this.validateConfirmPassword(),{fullWidth:!0,label:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.confirmPasswordLabel",defaultMessage:"Confirm new password"})}),Object(w.jsx)(i.EuiFieldPassword,{autoComplete:"new-password","data-test-subj":"confirmNewPassword",type:"dual",value:this.state.confirmPassword,onChange:this.onConfirmPasswordChange,disabled:this.state.changeInProgress,fullWidth:!0})),Object(w.jsx)(i.EuiFormRow,null,Object(w.jsx)(i.EuiFlexGroup,{alignItems:"center",responsive:!1},Object(w.jsx)(i.EuiFlexItem,{grow:!1},Object(w.jsx)(i.EuiButton,{onClick:this.onChangePasswordClick,fill:!0,isLoading:this.state.changeInProgress,"data-test-subj":"changePasswordButton"},Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.saveChangesButtonLabel",defaultMessage:"Change password"}))),Object(w.jsx)(i.EuiFlexItem,{grow:!1},Object(w.jsx)(i.EuiButtonEmpty,{onClick:this.onCancelClick,isDisabled:this.state.changeInProgress},Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.cancelButtonLabel",defaultMessage:"Reset"})))))))),n()(this,"onCurrentPasswordChange",(s=>{this.setState({currentPassword:s.target.value,currentPasswordError:!1})})),n()(this,"onNewPasswordChange",(s=>{this.setState({newPassword:s.target.value})})),n()(this,"onConfirmPasswordChange",(s=>{this.setState({confirmPassword:s.target.value})})),n()(this,"onCancelClick",(()=>{this.setState({shouldValidate:!1,currentPassword:"",newPassword:"",confirmPassword:"",currentPasswordError:!1,changeInProgress:!1})})),n()(this,"onChangePasswordClick",(async()=>{this.setState({shouldValidate:!0,currentPasswordError:!1},(()=>{const{isInvalid:s}=this.validateForm();s||this.setState({changeInProgress:!0},(()=>this.performPasswordChange()))}))})),n()(this,"validateCurrentPassword",((s=this.state.shouldValidate)=>s&&this.props.isUserChangingOwnPassword?this.state.currentPasswordError?{isInvalid:!0,error:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.changePasswordForm.invalidPassword",defaultMessage:"Current password is incorrect."})}:this.state.currentPassword?{isInvalid:!1}:{isInvalid:!0,error:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.currentPasswordRequired",defaultMessage:"Current password is required."})}:{isInvalid:!1})),n()(this,"validateNewPassword",((s=this.state.shouldValidate)=>{const{newPassword:e}=this.state;return s&&e.length<6?{isInvalid:!0,error:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.passwordLengthDescription",defaultMessage:"Password is too short."})}:{isInvalid:!1}})),n()(this,"validateConfirmPassword",((s=this.state.shouldValidate)=>{const{newPassword:e,confirmPassword:t}=this.state;return s&&e!==t?{isInvalid:!0,error:Object(w.jsx)(l.FormattedMessage,{id:"xpack.security.account.passwordsDoNotMatch",defaultMessage:"Passwords do not match."})}:{isInvalid:!1}})),n()(this,"validateForm",(()=>{const s=[this.validateCurrentPassword(!0),this.validateNewPassword(!0),this.validateConfirmPassword(!0)].find((s=>s.isInvalid));return s||{isInvalid:!1}})),n()(this,"performPasswordChange",(async()=>{try{await this.props.userAPIClient.changePassword(this.props.user.username,this.state.newPassword,this.state.currentPassword),this.handleChangePasswordSuccess()}catch(s){this.handleChangePasswordFailure(s)}finally{this.setState({changeInProgress:!1})}})),n()(this,"handleChangePasswordSuccess",(()=>{this.props.notifications.toasts.addSuccess({title:h.i18n.translate("xpack.security.account.changePasswordSuccess",{defaultMessage:"Your password has been changed."}),"data-test-subj":"passwordUpdateSuccess"}),this.setState({currentPasswordError:!1,shouldValidate:!1,newPassword:"",currentPassword:"",confirmPassword:""}),this.props.onChangePassword&&this.props.onChangePassword()})),n()(this,"handleChangePasswordFailure",(s=>{s.body&&403===s.body.statusCode?this.setState({currentPasswordError:!0}):this.props.notifications.toasts.addDanger(h.i18n.translate("xpack.security.management.users.editUser.settingPasswordErrorMessage",{defaultMessage:"Error setting password: {message}",values:{message:c.a.get(s,"body.message")}}))})),this.state={shouldValidate:!1,currentPassword:"",newPassword:"",confirmPassword:"",currentPasswordError:!1,changeInProgress:!1}}render(){return this.getForm()}}},82:function(s,e,t){"use strict";t.r(e),t.d(e,"ChangePassword",(function(){return ChangePassword}));var a=t(1),r=t.n(a),o=t(4),n=t(3),i=t(8),d=t(25),c=t(66),u=t(0);class ChangePassword extends n.Component{constructor(...s){super(...s),r()(this,"getChangePasswordForm",(s=>Object(u.jsx)(o.EuiDescribedFormGroup,{fullWidth:!0,title:Object(u.jsx)("h2",null,s),description:Object(u.jsx)("p",null,Object(u.jsx)(i.FormattedMessage,{id:"xpack.security.account.changePasswordDescription",defaultMessage:"Change the password for your account."}))},Object(u.jsx)(c.a,{user:this.props.user,isUserChangingOwnPassword:!0,userAPIClient:this.props.userAPIClient,notifications:this.props.notifications}))))}render(){const s=Object(d.a)(this.props.user),e=Object(u.jsx)(i.FormattedMessage,{id:"xpack.security.account.changePasswordTitle",defaultMessage:"Password"});return s?this.getChangePasswordForm(e):this.getChangePasswordUnavailable(e)}getChangePasswordUnavailable(s){return Object(u.jsx)(o.EuiDescribedFormGroup,{fullWidth:!0,title:Object(u.jsx)("h3",null,s),description:Object(u.jsx)("p",null,Object(u.jsx)(i.FormattedMessage,{id:"xpack.security.account.changePasswordNotSupportedText",defaultMessage:"You cannot change the password for this account."}))},Object(u.jsx)("div",null))}}}}]);