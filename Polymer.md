### [Polymer](Polymer.md)

| Name | Type | Value |
| ------------- | ------------- | ----- |
| [Polymer.$super](Polymer.$super) | [function](function) |  function b(a){var c=b.caller,f=c.nom;f||(f=e.call(this,c)),f||console.warn("called super() on a method not installed declaratively (has no .nom property)"),"_super"in c||d(c,f,Object.getPrototypeOf(this));var g=c._super;if(g){var h=g[f];return"_super"in h||d(h,f,g),h.apply(this,a||[])}}  |
| [Polymer.accumulateEvents](Polymer.accumulateEvents) | [function](function) |  function (a,b){var c=b||{};return o(a,c),r(a,c),s(a,c),c}  |
| [Polymer.accumulateHostEvents](Polymer.accumulateHostEvents) | [function](function) |  function (a){for(var b=a||{},c=this.__proto__;c&&c!==HTMLElement.prototype;){if(c.hasOwnProperty("eventDelegates"))for(var d in c.eventDelegates)q(d,b);c=c.__proto__}return b}  |
| [Polymer.addResolvePath](Polymer.addResolvePath) | [function](function) |  function a(a,b){var d=c(b);a.resolvePath=function(a){return d+a}}  |
| [Polymer.asyncUnbindAll](Polymer.asyncUnbindAll) | [function](function) |  function m(){l(this)||(p.bind&&console.log("asyncUnbindAll",this.localName),u.set(this,this.job(u.get(this),this.unbindAll)))}  |
| [Polymer.base](Polymer.base) | [object](object) |  [object Object]  |
| [Polymer.bind](Polymer.bind) | [function](function) |  function f(b,c,d){var e=Polymer.propertyForAttribute.call(this,b);e?(a(this,e,d),Polymer.registerObserver(this,"binding",e,Polymer.bindProperties(this,e,c,d))):HTMLElement.prototype.bind.apply(this,arguments)}  |
| [Polymer.bindAccumulatedHostEvents](Polymer.bindAccumulatedHostEvents) | [function](function) |  function b(b){a.call(this,this,b,f)}  |
| [Polymer.bindAccumulatedLocalEvents](Polymer.bindAccumulatedLocalEvents) | [function](function) |  function c(b,c){a.call(this,b,c,d)}  |
| [Polymer.bindPattern](Polymer.bindPattern) | [object](object) |  /\{\{([^{}]*)}}/  |
| [Polymer.bindProperties](Polymer.bindProperties) | [function](function) |  function a(a,c,d,e){b.bind&&console.log("[%s]: bindProperties: [%s] to [%s].[%s]",d.localName||"object",e,a.localName,c);var f=PathObserver.getValueAtPath(d,e);return(null===f||void 0===f)&&PathObserver.setValueAtPath(d,e,a[c]),PathObserver.defineProperty(a,c,{object:d,path:e})}  |
| [Polymer.cancelUnbindAll](Polymer.cancelUnbindAll) | [function](function) |  function n(a){if(l(this))return p.bind&&console.warn(this.localName,"is unbound, cannot cancel unbindAll"),void 0;p.bind&&console.log("cancelUnbindAll",this.localName);var b=u.get(this);b&&(b.stop(),u.set(this,null)),a||j(this.webkitShadowRoot,!0,function(a){a.cancelUnbindAll&&a.cancelUnbindAll()})}  |
| [Polymer.expressionSyntax](Polymer.expressionSyntax) | [object](object) |  [object Object]  |
| [Polymer.findDistributedTarget](Polymer.findDistributedTarget) | [function](function) |  function k(a,b){for(var c=a;c&&c!=this;){var d=Array.prototype.indexOf.call(b,c);if(d>=0)return d;c=c.parentNode}}  |
| [Polymer.getBinding](Polymer.getBinding) | [function](function) |  function e(a,b){return d(a)[b.toLowerCase()]}  |
| [Polymer.installControllerStyles](Polymer.installControllerStyles) | [function](function) |  function d(a,b){b.controllerStyle||(b.controllerStyle=g(b,w));var c=b.controllerStyle,d=i(a);d&&!e(d,a,w)&&(Polymer.shimPolyfillDirectives([c],a.localName),l(c,d))}  |
| [Polymer.installInstanceAttributes](Polymer.installInstanceAttributes) | [function](function) |  function d(){var a=this.instanceAttributes;Object.keys(a).forEach(function(b){this.setAttribute(b,a[b])},this)}  |
| [Polymer.installSheets](Polymer.installSheets) | [function](function) |  function a(a){b(a),c(a)}  |
| [Polymer.instanceReady](Polymer.instanceReady) | [function](function) |  function f(){a.observeProperties.call(this),a.installInstanceAttributes.call(this),a.takeAttributes.call(this);var b=a.accumulateHostEvents.call(this);a.bindAccumulatedHostEvents.call(this,b),this.asyncUnbindAll(),this.ready&&this.ready()}  |
| [Polymer.isElementUnbound](Polymer.isElementUnbound) | [function](function) |  function l(a){return t.get(a)}  |
| [Polymer.job](Polymer.job) | [function](function) |  function a(a,c,d){var e=a||new b(this);return e.stop(),e.go(c,d),e}  |
| [Polymer.marshalNodeReferences](Polymer.marshalNodeReferences) | [function](function) |  function (a){var b=this.$=this.$||{};if(a){var c=a.querySelectorAll("[id]");forEach(c,function(a){b[a.id]=a})}}  |
| [Polymer.observeProperties](Polymer.observeProperties) | [function](function) |  function a(){for(var a in this)b.call(this,a)}  |
| [Polymer.parseAndBindHTML](Polymer.parseAndBindHTML) | [function](function) |  function o(a,b){var c=document.createElement("template");return c.innerHTML=a,c.createInstance(b,q)}  |
| [Polymer.parseHostEvents](Polymer.parseHostEvents) | [function](function) |  function (a,b){b.eventDelegates=m(a)}  |
| [Polymer.propertyForAttribute](Polymer.propertyForAttribute) | [function](function) |  function f(a){var b=Object.keys(this[i]);return b[b.map(l).indexOf(a.toLowerCase())]}  |
| [Polymer.publishAttributes](Polymer.publishAttributes) | [function](function) |  function a(a,d){b(a,d),c(a,d)}  |
| [Polymer.register](Polymer.register) | [function](function) |  function b(b,e){if(b!=window){if(!(b&&b instanceof HTMLElement))throw"First argument to Polymer.register must be an HTMLElement";var f=Platform.mixin({},a.base,e);f.elementElement=b,a.addResolvePath(f,b),f.installTemplate=function(){this.super(),d.call(this,b)},f.installTemplate.nom="installTemplate",f.readyCallback=c,f.insertedCallback=g,f.removedCallback=h,f.attributeChangedCallback=i,j(f),a.parseHostEvents(b.attributes,f),a.publishAttributes(b,f),a.installSheets(b),a.shimStyling(b),b.register({prototype:f}),logFlags.comps&&console.log("Polymer: element registered"+b.options.name)
}}  |
| [Polymer.registerObserver](Polymer.registerObserver) | [function](function) |  function a(a,b,c,e){var f=d(a,b,!0);f[c.toLowerCase()]=e}  |
| [Polymer.shimPolyfillDirectives](Polymer.shimPolyfillDirectives) | [function](function) |  function () { [native code] }  |
| [Polymer.shimShadowDOMStyling](Polymer.shimShadowDOMStyling) | [function](function) |  function (a,b){window.ShadowDOMPolyfill&&(d.shimPolyfillDirectives(a,b),d.applyShimming(a,b))}  |
| [Polymer.shimStyling](Polymer.shimStyling) | [function](function) |  function (a){if(window.ShadowDOMPolyfill&&a){var b=a.options.name;d.cacheDefinition(a),d.shimPolyfillDirectives(a.styles,b),Polymer.strictPolyfillStyling&&d.applyScopeToContent(a.templateContent,b),d.applyShimming(d.stylesForElement(a),b)}}  |
| [Polymer.strictPolyfillStyling](Polymer.strictPolyfillStyling) | [boolean](boolean) |  false  |
| [Polymer.takeAttributes](Polymer.takeAttributes) | [function](function) |  function e(){forEach(this.attributes,function(a){var b=f.call(this,a.name);if(b){if(a.value.search(h)>=0)return;var c=this[b],d=g(a.value,c);d!==c&&(this[b]=d)}},this)}  |
| [Polymer.unbind](Polymer.unbind) | [function](function) |  function g(a){Polymer.unregisterObserver(this,"binding",a)||HTMLElement.prototype.unbind.apply(this,arguments)}  |
| [Polymer.unbindAll](Polymer.unbindAll) | [function](function) |  function h(){l(this)||(Polymer.unregisterObserversOfType(this,"property"),HTMLElement.prototype.unbindAll.apply(this,arguments),i(this.webkitShadowRoot,!0),k(this))}  |
| [Polymer.unbindNodeTree](Polymer.unbindNodeTree) | [function](function) |  function i(a,b){j(a,b,function(a){a.unbindAll&&a.unbindAll()})}  |
| [Polymer.unregisterObserver](Polymer.unregisterObserver) | [function](function) |  function b(a,b,c){var e=d(a,b),f=c.toLowerCase();return e&&e[f]?(e[f].close(),e[f]=null,!0):void 0}  |
| [Polymer.unregisterObserversOfType](Polymer.unregisterObserversOfType) | [function](function) |  function c(a,c){var e=d(a,c);e&&Object.keys(e).forEach(function(d){b(a,c,d)})}  |
 