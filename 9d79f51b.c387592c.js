(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),o=(r(0),r(345)),a=["components"],i={title:"Changelog: swc v1.1.3",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},p={permalink:"/blog/2019/12/04/swc-1.1.3",source:"@site/blog/2019-12-04-swc-1.1.3.md",description:"try catch(483",date:"2019-12-04T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.3",readingTime:.145,truncated:!1,prevItem:{title:"Changelog: swc v1.1.4",permalink:"/blog/2019/12/09/swc-1.1.4"},nextItem:{title:"Changelog: swc v1.1.2",permalink:"/blog/2019/12/02/swc-1.1.2"}},u=[{value:"try catch(#483",id:"try-catch483",children:[]},{value:"Typescript enum (#486)",id:"typescript-enum-486",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(c.a)(e,a);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"try-catch483"},"try catch(",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/issues/483"},"#483")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"swc")," now handles catch parameter properly."),Object(o.b)("h2",{id:"typescript-enum-486"},"Typescript enum (",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/issues/486"},"#486"),")"),Object(o.b)("p",null,"Previously, code generated for typescript enums with initializers was wrong.\nFrom now, valid code is generated."))}s.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),l=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,m=s["".concat(a,".").concat(f)]||s[f]||b[f]||o;return r?c.a.createElement(m,i(i({ref:t},u),{},{components:r})):c.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);