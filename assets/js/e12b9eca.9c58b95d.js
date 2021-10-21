(self.webpackChunk=self.webpackChunk||[]).push([[9447],{7757:(t,e,r)=>{t.exports=r(5666)},1770:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var n=r(7294),o=r(6706),i=r(2049);function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var u=r(7757),l=r.n(u),s={mode:{name:"javascript",typescript:!0},lineNumbers:!0,lineWrapping:!0},f=function(){},h=function(){var t=(0,n.useMemo)((function(){var t=function(){if("undefined"==typeof window)return{};var t=window.location.hash.slice(1);try{return JSON.parse(decodeURIComponent(t))}catch(e){return{}}}();return{rawCode:t.rawCode||"\n  class Project {\n    constructor(name) {\n      this.name = name\n    }\n  };\n\n  export class SwcProject extends Project {\n    constructor(name, version) {\n      super(name);\n      this.version = '20210629';\n    }\n\n    showOff() {\n      console.log('swc is a useful project')\n    }\n  }\n",rawConfig:t.rawConfig||"{}"}}),[]),e=t.rawCode,o=t.rawConfig,i=(0,n.useState)(e),a=i[0],u=i[1],h=(0,n.useState)(o),p=h[0],d=h[1],y=(0,n.useState)("loading"),v=y[0],m=y[1],g=(0,n.useState)("const test = 1"),w=g[0],x=g[1],E=(0,n.useState)(null),b=E[0],C=E[1],L=(0,n.useRef)(null),j=(0,n.useRef)(null),S=(0,n.useRef)(null),k=(0,n.useRef)(null),P=(0,n.useRef)(null),_=(0,n.useState)(0),O=_[0],N=_[1];(0,n.useEffect)((function(){function t(){return(t=c(l().mark((function t(){var e,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([r.e(1635).then(r.bind(r,1635)),Promise.all([r.e(4631),r.e(9656)]).then(r.bind(r,9656)),Promise.all([r.e(4631),r.e(7319)]).then(r.t.bind(r,6876,23)),Promise.all([r.e(532),r.e(8677)]).then(r.bind(r,8677))]);case 3:return e=t.sent,j.current=e[0],S.current=e[1],n=j.current.default(),t.next=9,n;case 9:m("success"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),m("fail");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,n.useEffect)((function(){if("success"===v&&j.current)return L.current=window.setTimeout((function(){var t={};!function(t){var e=encodeURIComponent(JSON.stringify(t));if("function"==typeof URL&&"object"==typeof history&&"function"==typeof history.replaceState){var r=new URL(location.href);r.hash=e,history.replaceState(null,null,r)}else location.hash=e}({rawCode:a,rawConfig:p});try{t=JSON.parse(p)}catch(e){return void C('Failed to parse "swcrc": '+e.message)}try{x(j.current.transformSync(a,t).code),C(null)}catch(r){C(r.toString())}}),500),function(){L.current&&window.clearTimeout(L.current)}}),[v,a,p]);var R=(0,n.useCallback)((function(t,e,r){u(r)}),[]),T=(0,n.useCallback)((function(t,e,r){d(r)}),[]),G=(0,n.useCallback)((function(t){P.current=t,N((function(t){return t+1}))}),[]),F=(0,n.useCallback)((function(t){k.current=t,N((function(t){return t+1}))}),[]);return(0,n.useEffect)((function(){console.log(O),2===O&&P.current&&k.current&&(console.log(P.current,k.current),[P.current,k.current].forEach((function(t){t.setSize("100%","500px")})))}),[O]),n.createElement("section",null,function(){switch(v){case"loading":return n.createElement("h2",null,"Please wait. Loading wasm and js files...");case"fail":return n.createElement("h2",null,"Loading wasm and js files failed. Please try again.");case"success":return n.createElement("article",{style:{display:"flex"}},n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column"}},n.createElement("h2",null,"Your code"),n.createElement("div",{style:{flex:9}},n.createElement(S.current.Controlled,{value:a,options:s,onBeforeChange:R,onChange:f,editorDidMount:G})),n.createElement("h2",null,"Your swcrc"),n.createElement("div",{style:{flex:1}},n.createElement(S.current.Controlled,{value:p,options:{mode:{name:"json"},lineNumbers:!0,lineWrapping:!0},onBeforeChange:T,onChange:f,editorDidMount:f}))),n.createElement("div",{style:{width:"100%"}},n.createElement("h2",null,"Compiled code"),n.createElement(S.current.UnControlled,{value:null!=b?b:w,options:s,editorDidMount:F})))}}())};const p=function(t){return n.createElement(i.Z,null,n.createElement("div",{className:"padding-vert--lg "+o.Z.flexColumnCenter},n.createElement("p",null,"Because swc can be easily compiled into wasm, it can also run on the web. You can try it out here.")),n.createElement(h,null))}},6706:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={flexRowCenter:"flexRowCenter_M3C-",flexColumnCenter:"flexColumnCenter_36TZ"}},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function v(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(_([])));E&&E!==r&&n.call(E,i)&&(w=E);var b=g.prototype=v.prototype=Object.create(w);function C(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=g,u(b,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},C(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);