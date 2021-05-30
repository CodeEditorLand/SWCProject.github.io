(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(345)),c=["components"],i={title:"Changelog: swc v1.1.34",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},p={permalink:"/blog/2020/03/10/swc-1.1.34",source:"@site/blog/2020-03-10-swc-1.1.34.md",description:"Bugfixes",date:"2020-03-10T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.34",readingTime:.385,truncated:!1,prevItem:{title:"Changelog: swc v1.1.35",permalink:"/blog/2020/03/14/swc-1.1.35"},nextItem:{title:"Changelog: swc v1.1.32",permalink:"/blog/2020/03/04/swc-1.1.32"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Source maps (#705, #707)",id:"source-maps-705-707",children:[]},{value:".d.ts support typescript parser",id:"dts-support-typescript-parser",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"source-maps-705-707"},"Source maps (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/705"},"#705"),", ",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/707"},"#707"),")"),Object(a.b)("p",null,"Starting from v1.1.34, ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," handles the source map correctly."),Object(a.b)("h3",{id:"dts-support-typescript-parser"},".d.ts support typescript parser"),Object(a.b)("p",null,"Previously, ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," could not handle ",Object(a.b)("inlineCode",{parentName:"p"},".d.ts")," files properly, as the syntax differs.\nI've added a feature to parse optional binding patterns in the code below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"declare namespace __event {\n  export class EventInit {\n    constructor({\n      bubbles,\n      cancelable,\n      composed\n    }?: {\n      bubbles?: boolean | undefined;\n      cancelable?: boolean | undefined;\n      composed?: boolean | undefined;\n    });\n  }\n}\n")))}l.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);