(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(345)),c=["components"],i={title:"Changelog: swc v1.1.22",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l={permalink:"/blog/2020/02/13/swc-1.1.22",source:"@site/blog/2020-02-13-swc-1.1.22.md",description:"Improvements",date:"2020-02-13T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.22",readingTime:.265,truncated:!1,prevItem:{title:"Changelog: swc v1.1.21",permalink:"/blog/2020/02/13/swc-1.1.21"},nextItem:{title:"Changelog: swc v1.1.23 - hotfix",permalink:"/blog/2020/02/13/swc-1.1.23"}},p=[{value:"Improvements",id:"improvements",children:[{value:"Optimizer",id:"optimizer",children:[]}]},{value:"Hotfix",id:"hotfix",children:[{value:"hygiene pass",id:"hygiene-pass",children:[]}]}],u={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"improvements"},"Improvements"),Object(a.b)("h3",{id:"optimizer"},"Optimizer"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"swc")," can reduce"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let b = 2;\n\nlet a = 1;\nif (b) {\n  a = 2;\n}\n\nlet c;\nif (a) {\n  c = 3;\n}\nconsole.log(c);\n")),Object(a.b)("p",null,"down to"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"console.log(3);\n")),Object(a.b)("h2",{id:"hotfix"},"Hotfix"),Object(a.b)("h3",{id:"hygiene-pass"},"hygiene pass"),Object(a.b)("p",null,"Global variable accesses are marked with the same mark."))}s.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);