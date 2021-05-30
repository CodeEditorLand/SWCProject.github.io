(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(345)),c=["components"],s={title:"Changelog: swc v1.2.20",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/08/15/swc-1.2.20",source:"@site/blog/2020-08-15-swc-1.2.20.md",description:"Bugfixes",date:"2020-08-15T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.20",readingTime:2.11,truncated:!1,prevItem:{title:"Changelog: swc v1.2.21",permalink:"/blog/2020/08/24/swc-1.2.21"},nextItem:{title:"Changelog: swc v1.2.19",permalink:"/blog/2020/08/13/swc-1.2.19"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"spack respects swcrc (#964)",id:"spack-respects-swcrc-964",children:[]},{value:"spack handles common js modules properly (#969)",id:"spack-handles-common-js-modules-properly-969",children:[]},{value:"lodash-es is supported (#963)",id:"lodash-es-is-supported-963",children:[]},{value:"Parameter decorators (#961)",id:"parameter-decorators-961",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"spack-respects-swcrc-964"},"spack respects swcrc (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/964"},"#964"),")"),Object(a.b)("p",null,"Spack supports ",Object(a.b)("inlineCode",{parentName:"p"},".swcrc")," properly. Just like webpack + babel environment, the configuration is determined per-file. You can even mix ",Object(a.b)("inlineCode",{parentName:"p"},"tsx"),", ",Object(a.b)("inlineCode",{parentName:"p"},"ts"),", ",Object(a.b)("inlineCode",{parentName:"p"},"js")," if you want."),Object(a.b)("h3",{id:"spack-handles-common-js-modules-properly-969"},"spack handles common js modules properly (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/969"},"#969"),")"),Object(a.b)("p",null,"Previously common js modules were improperly handled. After some very hard work, I managed to fix it and common js imports are transcompiled to compact code."),Object(a.b)("p",null,"Spack generates clean code, just like the code below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'function __spack_require__(mod) {\n  var cache;\n  return function () {\n    if (cache) {\n      return cache;\n    }\n    var module = {\n      exports: {},\n    };\n    mod(module, module.exports);\n    cache = module.exports;\n    return cache;\n  };\n}\n// a-a-a.js\nvar load = __spack_require__.bind(void 0, function (module, exports) {\n  module.exports = {\n    default: "a-a-a",\n  };\n});\n// a-b.js\nvar load1 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("a-b");\n  exports.default = "ab";\n});\n// a-a.js\nvar load2 = __spack_require__.bind(void 0, function (module, exports) {\n  module.exports = load();\n});\n// b.js\nvar load3 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("b");\n});\n// c.js\nvar load4 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("c");\n});\n// a.js\nvar load5 = __spack_require__.bind(void 0, function (module, exports) {\n  var aa = load2();\n  var bb = load1();\n  load3();\n  module.exports = {\n    aa: aa,\n    bb: bb,\n  };\n});\n// entry.js\nload5();\nvar b = load3();\nload4();\nconsole.log(b);\n')),Object(a.b)("p",null,"Spack is designed to emit bundle as smallest as possible ",Object(a.b)("em",{parentName:"p"},"when minified"),"."),Object(a.b)("p",null,"You can now use spack to bundle react projects. See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/tree/master/spack/integration-tests/react"},"an integration test for react in the swc main repository"),"."),Object(a.b)("h3",{id:"lodash-es-is-supported-963"},"lodash-es is supported (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/963"},"#963"),")"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"lodash-es")," accesses ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," even if it's an es module. In order to handle name conflict, ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," prevously rename ",Object(a.b)("inlineCode",{parentName:"p"},"exports")," to something different."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import root from "./_root.js";\nimport stubFalse from "./stubFalse.js";\n\nvar freeExports =\n  typeof exports == "object" && exports && !exports.nodeType && exports;\nvar freeModule =\n  freeExports && typeof module == "object" && module && !module.nodeType && \\;\nmodule;\n\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nexport default isBuffer;\n')),Object(a.b)("p",null,"It's now handled more sensitively to avoid breaking codes."),Object(a.b)("h3",{id:"parameter-decorators-961"},"Parameter decorators (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/961"},"#961"),")"),Object(a.b)("p",null,"Note: this applies to typescript decorators"),Object(a.b)("p",null,"Previously, decorators on a parameter which does not have initializer were broken."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"class Base {\n  constructor() {\n    this.action = new Subject();\n  }\n}\n\nclass Child extends Base {\n  @DefineAction() action: Observable<void>;\n\n  callApi() {\n    console.log(this.action);\n  }\n}\n")),Object(a.b)("p",null,"It was undefined, which is wrong, and it's now an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"Subject"),"."))}u.isMDXComponent=!0},345:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);