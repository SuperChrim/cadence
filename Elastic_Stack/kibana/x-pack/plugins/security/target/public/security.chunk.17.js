/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[17],{83:function(e,t,s){"use strict";s.r(t),s.d(t,"PersonalInfo",(function(){return n}));var a=s(4),u=(s(3),s(8)),i=s(0);const n=e=>Object(i.jsx)(a.EuiDescribedFormGroup,{fullWidth:!0,title:Object(i.jsx)("h2",null,Object(i.jsx)(u.FormattedMessage,{id:"xpack.security.account.usernameGroupTitle",defaultMessage:"Username and email"})),description:Object(i.jsx)(u.FormattedMessage,{id:"xpack.security.account.usernameGroupDescription",defaultMessage:"You can't change this information."})},Object(i.jsx)(a.EuiFormRow,{fullWidth:!0},Object(i.jsx)(a.EuiText,{size:"s"},Object(i.jsx)("dl",null,Object(i.jsx)("dt",{title:"username","data-test-subj":"username"},e.user.username),Object(i.jsx)("dd",{title:"email","data-test-subj":"email"},e.user.email||Object(i.jsx)(u.FormattedMessage,{id:"xpack.security.account.noEmailMessage",defaultMessage:"no email address"}))))))}}]);