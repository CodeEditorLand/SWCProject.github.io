(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(345)),c=["components"],i={title:"Changelog: swc v1.2.5",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},u={permalink:"/blog/2020/06/19/swc-1.2.5",source:"@site/blog/2020-06-19-swc-1.2.5.md",description:"Bugfixes",date:"2020-06-19T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.5",readingTime:.245,truncated:!1,prevItem:{title:"Changelog: swc v1.2.6",permalink:"/blog/2020/06/21/swc-1.2.6"},nextItem:{title:"v1.2: spack: Yet another asset bundler",permalink:"/blog/2020/06/18/swc-1.2"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"regenerator (#851)",id:"regenerator-851",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"regenerator-851"},"regenerator (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/851"},"#851"),")"),Object(a.b)("p",null,"Previously, the code below was miscompiled by swc because of the performance optimizartion. The wrong optimization is removed and the code below now works.s"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"function* gen() {\n  yield 1;\n}\nfunction genFactory() {\n  return function* () {\n    yield 1;\n  };\n}\nconsole.log(gen().next());\n")))}s.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,g=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(g,i(i({ref:t},l),{},{components:n})):o.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);