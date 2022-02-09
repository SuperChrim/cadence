/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[23],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(15);var s=n(40),i=n(11);const a=()=>Object(i.jsx)(s.EuiText,{textAlign:"center"},Object(i.jsx)(s.EuiSpacer,{size:"l"}),Object(i.jsx)(s.EuiLoadingSpinner,{size:"l"}),Object(i.jsx)(s.EuiSpacer,{size:"l"}))},265:function(e,t,n){"use strict";n.r(t),n.d(t,"getDefaultSwimlanePanelTitle",(function(){return f})),n.d(t,"AnomalySwimlaneEmbeddable",(function(){return anomaly_swimlane_embeddable_AnomalySwimlaneEmbeddable}));var s=n(4),i=n.n(s),a=n(15),l=n.n(a),d=n(49),r=n.n(d),o=n(2),u=n(23),b=n(42),c=n(45);const m=l.a.lazy((()=>Promise.all([n.e(1),n.e(19)]).then(n.bind(null,821))));var h=n(169),j=n(105),p=n(151),x=n(11);const f=e=>o.i18n.translate("xpack.ml.swimlaneEmbeddable.title",{defaultMessage:"ML anomaly swim lane for {jobIds}",values:{jobIds:e.join(", ")}});class anomaly_swimlane_embeddable_AnomalySwimlaneEmbeddable extends c.Embeddable{constructor(e,t,n){super(e,{defaultTitle:e.title},n),i()(this,"node",void 0),i()(this,"reload$",new u.Subject),i()(this,"type",j.b),this.services=t}render(e){super.render(e),this.node=e;const t=this.services[0].i18n.Context;r.a.render(Object(x.jsx)(t,null,Object(x.jsx)(b.KibanaContextProvider,{services:{...this.services[0]}},Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(p.a,null)},Object(x.jsx)(m,{id:this.input.id,embeddableContext:this,embeddableInput:this.getInput$(),services:this.services,refresh:this.reload$.asObservable(),onInputChange:this.updateInput.bind(this),onOutputChange:this.updateOutput.bind(this)})))),e)}destroy(){super.destroy(),this.node&&r.a.unmountComponentAtNode(this.node)}reload(){this.reload$.next()}supportedTriggers(){return[h.a]}}}}]);