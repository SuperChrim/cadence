(window.expressionRevealImage_bundle_jsonpfunction=window.expressionRevealImage_bundle_jsonpfunction||[]).push([[1],{13:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var i=n(2),r=n(4),c=n(12),s=n(5);const a={name:"r9nlj9",styles:"height:100%;width:100%;display:flex;align-items:center;justify-content:center;pointer-events:none"},o={backgroundSize:"contain",backgroundRepeat:"no-repeat"},l={userSelect:"none"};function u({onLoaded:e,parentNode:t,percent:n,origin:u,image:h,emptyImage:d}){const[g,b]=Object(r.useState)(!1),[j,p]=Object(r.useState)({width:1,height:1}),f=Object(r.useRef)(null),m=Object(c.useResizeObserver)(t);t.className="revealImage",t.setAttribute("style",a.styles);const w=Object(r.useCallback)((()=>{f.current&&(p({height:f.current.naturalHeight,width:f.current.naturalWidth}),b(!0),e())}),[f,e]);function O(e,t="bottom"){const n=[0,0,0,0];return n[{bottom:0,left:1,top:2,right:3}[t]]=100-100*e+"%",`inset(${n.join(" ")})`}Object(r.useEffect)((()=>{w()}),[m,w]);const v={};Object(s.isValidUrl)(null!=d?d:"")&&(v.backgroundImage=`url(${d})`);let y={};return f.current&&g&&(y=function(){const e={},n=(j.height,j.width,j.height/j.width),i={width:t.clientWidth,height:t.clientHeight,ratio:t.clientHeight/t.clientWidth};return n>i.ratio?(e.height=i.height,e.width="initial"):(e.width=i.width,e.height="initial"),e}()),y.clipPath=O(n,u),f.current&&g&&f.current.style.setProperty("-webkit-clip-path",O(n,u)),Object(i.jsx)("div",{className:"revealImageAligner",css:Object(i.css)({...o,...v},"","")},Object(i.jsx)("img",{ref:f,onLoad:w,css:Object(i.css)({...l,...y},"",""),src:h,alt:"",role:"presentation"}))}}}]);