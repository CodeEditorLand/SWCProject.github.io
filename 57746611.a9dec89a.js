(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),c=(r(0),r(345)),a=["components"],i={title:"Changelog: swc v1.1.44",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},u={permalink:"/blog/2020/05/19/swc-1.1.44",source:"@site/blog/2020-05-19-swc-1.1.44.md",description:"Bugfixes",date:"2020-05-19T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.44",readingTime:.175,truncated:!1,prevItem:{title:"Changelog: swc v1.1.46",permalink:"/blog/2020/05/21/swc-1.1.46"},nextItem:{title:"Changelog: swc v1.1.45",permalink:"/blog/2020/05/19/swc-1.1.45"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"preset-env: regenerator (#780)",id:"preset-env-regenerator-780",children:[]}]},{value:"Performance boost",id:"performance-boost",children:[{value:"Reduced stack usage (#776)",id:"reduced-stack-usage-776",children:[]}]}],p={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"preset-env-regenerator-780"},"preset-env: regenerator (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/780"},"#780"),")"),Object(c.b)("p",null,"From now on, the following code works with preset-env."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import "core-js";\nasync function a() {\n  return 1;\n}\na().then(console.log);\n')),Object(c.b)("h2",{id:"performance-boost"},"Performance boost"),Object(c.b)("h3",{id:"reduced-stack-usage-776"},"Reduced stack usage (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/776"},"#776"),")"))}s.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(a,".").concat(f)]||s[f]||b[f]||c;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);