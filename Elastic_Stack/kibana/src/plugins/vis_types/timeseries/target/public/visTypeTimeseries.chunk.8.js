(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[8],{104:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var i=s(4),a=s(30),r=s.n(a);var n=s(64),l=s(8),o=s(42),c=s(74),u=s(1);function d(e){function t(t){const{model:s,visData:a,syncColors:d,palettesService:g,fieldFormatMap:h}=t,b=Object(i.useCallback)(((e,t,i)=>{const r={...s.series[0].palette,name:"kibana"===s.series[0].split_color_mode?"kibana_palette":s.series[0].split_color_mode||s.series[0].palette.name},n={seriesById:a[s.id].series,seriesName:e,seriesId:t,baseColor:i,seriesPalette:r,palettesRegistry:g,syncColors:d,fieldFormatMap:h};return Object(c.a)(n)||null}),[h,s.id,s.series,g,d,a]);if(!s||!a||!a[s.id])return Object(u.jsx)(e,t);if(a[s.id].series.every((e=>1===e.id.split(":").length)))return Object(u.jsx)(e,t);const p=a[s.id].series.reduce(((e,t)=>{const[i,a]=t.id.split(":"),r=s.series.find((e=>e.id===i));if(!r)return e;const n=t.splitByLabel;e[a]||(e[a]={series:[],label:t.label.toString(),labelFormatted:t.labelFormatted});const l=/{{\s*key\s*}}/.test(r.label),o=t.color||r.color,c="terms"===s.series[0].split_mode?b(n,t.id,o):o;return e[a].series.push({...t,id:i,color:c,label:r.label&&!l?r.label:n}),e}),{}),m=Object(l.first)(a[s.id].series.filter((e=>{const t=s.series.find((t=>t.id===e.id));return!!t&&["everything","filter"].includes(t.split_mode)}))),f=m?Object(l.findIndex)(s.series,(e=>e.id===m.id)):null,j=Object.keys(p).map((i=>{const a=p[i],{series:r,label:l,labelFormatted:c}=a;let d=l;c&&(d=Object(n.a)(c));const g=null!=f&&f>0?[...r,m]:[m,...r],h={[s.id]:{id:s.id,series:g||r}};return Object(u.jsx)("div",{key:i,className:"tvbSplitVis__split"},Object(u.jsx)(e,{model:s,visData:h,onBrush:t.onBrush,onFilterClick:t.onFilterClick,additionalLabel:Object(o.b)(d),backgroundColor:t.backgroundColor,getConfig:t.getConfig,fieldFormatMap:t.fieldFormatMap}))})),v=1===a[s.id].series.length;return Object(u.jsx)("div",{className:r()("tvbSplitVis",{"tvbSplitVis--one":v})},j)}var s;return t.displayName=`SplitVisComponent(${s=e,s.displayName||s.name||"Component"})`,t}},299:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return C}));var i=s(4),a=s(104),r=s(59),n=s(52),l=s(60),o=s(8),c=s.n(o),u=s(30),d=s.n(u),g=s(75),h=s(46);var b=s(47),p=s.n(b),m=s(82),f=s.n(m),j=s(83),v=s(56),_=s(1);class gauge_vis_GaugeVis extends i.Component{constructor(e){super(e),this.state={scale:1,top:0,left:0,translateX:1,translateY:1},this.handleResize=this.handleResize.bind(this)}UNSAFE_componentWillMount(){const e=()=>{this.timeout=setTimeout((()=>{const t=Object(j.a)(this.inner,this.resize,this.state);t&&this.state&&!c.a.isEqual(t,this.state)&&this.handleResize(),e()}),500)};e()}componentWillUnmount(){clearTimeout(this.timeout)}componentDidMount(){this.handleResize()}handleResize(){const e=Object(j.a)(this.inner,this.resize,this.state);this.setState(e)}render(){const{type:e,value:t,max:s,color:i}=this.props,a=Object(h.c)(t)?1:t,{scale:r,translateX:n,translateY:l}=this.state,o=2*Math.PI*50,c="half"===e?.6:1,u=a<s?a/s:1,d=f()({default:{resize:{position:"relative",display:"flex",rowDirection:"column",flex:"1 0 auto",overflow:"hidden"},svg:{position:"absolute",top:this.state.top,left:this.state.left,transform:`matrix(${r}, 0, 0, ${r}, ${n}, ${l})`},innerLine:{strokeWidth:this.props.innerLine},gaugeLine:{strokeWidth:this.props.gaugeLine}},half:{svg:{transform:`matrix(${r}, 0, 0, ${r}, ${n}, ${l})`}}},{half:"half"===e}),g={circle:{r:50,cx:60,cy:60,fill:"rgba(0,0,0,0)",stroke:i,strokeWidth:this.props.gaugeLine,strokeDasharray:`${u*c*o} ${o}`,transform:"rotate(-90 60 60)"},circleBackground:{r:50,cx:60,cy:60,fill:"rgba(0,0,0,0)",stroke:v.a.LINE_COLOR,strokeDasharray:`${c*o} ${o}`,strokeWidth:this.props.innerLine}};let b;return"half"===e&&(g.circle.transform="rotate(-197.8 60 60)",g.circleBackground.transform="rotate(162 60 60)"),this.props.innerColor&&(g.circleBackground.stroke=this.props.innerColor),b="half"===e?Object(_.jsx)("svg",{width:120.72,height:78.72},Object(_.jsx)("circle",p()({},g.circleBackground,{style:d.innerLine,"data-test-subj":"gaugeCircleInner"})),Object(_.jsx)("circle",p()({},g.circle,{style:d.gaugeLine,"data-test-subj":"gaugeCircle"}))):Object(_.jsx)("svg",{width:120.72,height:120.72},Object(_.jsx)("circle",p()({},g.circleBackground,{"data-test-subj":"gaugeCircleInner"})),Object(_.jsx)("circle",p()({},g.circle,{"data-test-subj":"gaugeCircle"}))),Object(_.jsx)("div",{ref:e=>this.resize=e,style:d.resize},Object(_.jsx)("div",{style:d.svg,ref:e=>this.inner=e},b))}}gauge_vis_GaugeVis.defaultProps={innerLine:2,gaugeLine:10};class gauge_Gauge extends i.Component{constructor(e){super(e),this.state={scale:1,top:0,left:0,translateX:1,translateY:1},this.handleResize=this.handleResize.bind(this)}UNSAFE_componentWillMount(){const e=()=>{this.timeout=setTimeout((()=>{const t=Object(j.a)(this.inner,this.resize,this.state);t&&this.state&&!c.a.isEqual(t,this.state)&&this.handleResize(),e()}),500)};e()}componentWillUnmount(){clearTimeout(this.timeout)}componentDidMount(){this.handleResize()}handleResize(){const e=Object(j.a)(this.inner,this.resize,this.state);this.setState(e)}render(){const{metric:e,type:t}=this.props,{scale:s,translateX:i,translateY:a}=this.state,r=Object(h.b)(null==e?void 0:e.data),n=e&&((e,t)=>{if(c.a.isNumber(t))return t;if(!Array.isArray(t))return 0;const s=t.map((e=>e[1]));return c.a[e](s)})("max",e.data)||1,l=e&&(e.tickFormatter||e.formatter)||this.props.tickFormatter||(e=>e),o=e&&e.label||"",u=f()({default:{inner:{top:this.state.top||0,left:this.state.left||0,transform:`matrix(${s}, 0, 0, ${s}, ${i}, ${a})`,zIndex:1},valueColor:{color:this.props.valueColor}}},this.props),b={value:r,reversed:Object(g.a)(this.props.backgroundColor),gaugeLine:this.props.gaugeLine,innerLine:this.props.innerLine,innerColor:this.props.innerColor,max:this.props.max||n,color:e&&e.color||"#8ac336",type:t};let p,m;this.props.additionalLabel&&(m=Object(_.jsx)("div",{className:"tvbVisGauge__additionalLabel"},this.props.additionalLabel)),p="half"===t?Object(_.jsx)("div",{className:"tvbVisHalfGauge__metrics",ref:e=>this.inner=e,style:u.inner},Object(_.jsx)("div",{className:"tvbVisGauge__label",ref:"title","data-test-subj":"gaugeLabel"},o),Object(_.jsx)("div",{className:"tvbVisGauge__value",style:u.valueColor,ref:"label","data-test-subj":"gaugeValue"},Object(_.jsx)("span",{dangerouslySetInnerHTML:{__html:l(r)}})),m):Object(_.jsx)("div",{className:"tvbVisCircleGauge__metrics",ref:e=>this.inner=e,style:u.inner},Object(_.jsx)("div",{className:"tvbVisGauge__value",style:u.valueColor,ref:"label","data-test-subj":"gaugeValue"},Object(_.jsx)("span",{dangerouslySetInnerHTML:{__html:l(r)}})),Object(_.jsx)("div",{className:"tvbVisGauge__label",ref:"title","data-test-subj":"gaugeLabel"},o),m);const j=d()({tvbVisHalfGauge:"half"===t,tvbVisCircleGauge:"circle"===t,"tvbVisGauge--reversed":Object(g.b)(this.props.backgroundColor)});return Object(_.jsx)("div",{className:j},Object(_.jsx)("div",{ref:e=>this.resize=e,className:"tvbVisGauge__resize","data-test-subj":"tvbVisGaugeContainer"},p,Object(_.jsx)(gauge_vis_GaugeVis,b)))}}gauge_Gauge.defaultProps={type:"half",innerLine:2,gaugeLine:10};var O=s(2),x=s(67);const C=Object(a.a)((function(e){const{backgroundColor:t,model:s,visData:i,fieldFormatMap:a,getConfig:c}=e,u=function(e){const{model:t,visData:s}=e,i=Object(o.get)(s,`${t.id}.series`,[]).filter((e=>!Object(o.isUndefined)(e)));let a,r;return t.gauge_color_rules&&t.gauge_color_rules.forEach((e=>{if(e.operator){var t;const s=Object(h.b)(null===(t=i[0])||void 0===t?void 0:t.data);Object(x.c)(e,s)&&Object(x.b)(e.operator)(s,e.value)&&(r=e.gauge,a=e.text)}})),{text:a,gauge:r}}(e),d=Object(o.get)(i,`${s.id}.series`,[]).filter((e=>e)).map(((e,t)=>{const i=s.series.find((t=>Object(o.includes)(e.id,t.id))),d={};if(i){const e=s.gauge_color_rules.some((({text:e})=>e));d.formatter=i.formatter===O.b.DEFAULT?Object(l.a)(Object(r.a)(i.metrics),a,"html",e):Object(n.a)(i.formatter,i.value_template,c)}return 0===t&&u.gauge&&(d.color=u.gauge),Object(o.assign)({},e,d)})),g=s.background_color||t,b={backgroundColor:g},p={metric:d[0],type:s.gauge_style||"half",additionalLabel:e.additionalLabel,backgroundColor:g};return u.text&&(p.valueColor=u.text),s.gauge_width&&(p.gaugeLine=s.gauge_width),s.gauge_inner_color&&(p.innerColor=s.gauge_inner_color),s.gauge_inner_width&&(p.innerLine=s.gauge_inner_width),null!=s.gauge_max&&(p.max=s.gauge_max),Object(_.jsx)("div",{className:"tvbVis",style:b},Object(_.jsx)(gauge_Gauge,p))}))},47:function(e,t,s){e.exports=s(19)(1074)},53:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));const i=["#68BC00","#009CE0","#B0BC00","#16A5A5","#D33115","#E27300","#FCC400","#7B64FF","#FA28FF","#333333","#808080","#194D33","#0062B1","#808900","#0C797D","#9F0500","#C45100","#FB9E00","#653294","#AB149E","#0F1419","#666666"]},54:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var i=s(55),a=s.n(i);const r=e=>{let t=new a.a(e);const s=t.hsl().object();return s.l-=100*t.luminosity(),t=a.a.hsl(s),t.rgb().toString()}},74:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s(2),a=s(54),r=s(53),n=s(42);const l=({seriesById:e,seriesName:t,seriesId:s,baseColor:l,seriesPalette:o,palettesRegistry:c,syncColors:u})=>{if(!o)return null;const d=o.name===i.d.RAINBOW||o.name===i.d.GRADIENT?"custom":o.name,g=o.name===i.d.GRADIENT?{...o.params,colors:[l,Object(a.a)(l)],gradient:!0}:o.name===i.d.RAINBOW?{...o.params,colors:r.a}:o.params;return null==c?void 0:c.get(d||"default").getCategoricalColor([{name:Object(n.b)(t),rankAtDepth:e.findIndex((({id:e})=>e===s)),totalSeriesAtDepth:e.length}],{maxDepth:1,totalSeries:e.length,behindText:!1,syncColors:u},g)}},83:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var i=s(5);function a(e,t){return[Math.floor(e.clientWidth*t),Math.floor(e.clientHeight*t)]}function r(e,t,s){const r=Object(i.findDOMNode)(e),n=Object(i.findDOMNode)(t);let l=s.scale;l=n.clientWidth-n.clientHeight<0?n.clientWidth/r.clientWidth:n.clientHeight/r.clientHeight;let[o,c]=a(r,l);o>n.clientWidth&&(l=n.clientWidth/r.clientWidth),c>n.clientHeight&&(l=n.clientHeight/r.clientHeight),[o,c]=a(r,l);const u=(o-r.clientWidth)/2,d=(c-r.clientHeight)/2;return{scale:l,top:Math.floor((n.clientHeight-c)/2),left:Math.floor((n.clientWidth-o)/2),translateY:d,translateX:u}}}}]);