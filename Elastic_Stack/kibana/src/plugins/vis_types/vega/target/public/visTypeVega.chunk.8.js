(window.visTypeVega_bundle_jsonpfunction=window.visTypeVega_bundle_jsonpfunction||[]).push([[8],{222:function(e,i,s){"use strict";s.r(i),s.d(i,"VegaView",(function(){return VegaView}));var t=s(51),n=s(74);class VegaView extends n.a{async _initViewCustomizations(){if(!this._$container)return;const e=new t.View(Object(t.parse)(this._parser.spec,void 0,{ast:!0}),this._vegaViewConfig);this._parser.useResize&&this.updateVegaSize(e),e.initialize(this._$container.get(0),this._$controls.get(0)),this._parser.useHover&&e.hover(),await this.setView(e),this.setDebugValues(e,this._parser.spec,this._parser.vlspec)}}}}]);