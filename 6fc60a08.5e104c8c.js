(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(345)),c=["components"],i={title:"Hotfix: swc v1.1.50",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},s={permalink:"/blog/2020/05/28/swc-1.1.50",source:"@site/blog/2020-05-28-swc-1.1.50.md",description:"Bugfixes",date:"2020-05-28T00:00:00.000Z",tags:[],title:"Hotfix: swc v1.1.50",readingTime:.19,truncated:!1,prevItem:{title:"Changelog: swc v1.1.49",permalink:"/blog/2020/05/28/swc-1.1.49"},nextItem:{title:"Changelog: swc v1.1.48",permalink:"/blog/2020/05/25/swc-1.1.48"}},u=[{value:"Bugfixes",id:"bugfixes",children:[{value:"New reserved_words pass (#805)",id:"new-reserved_words-pass-805",children:[]}]}],p={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: prebuilt binaries for v1.1.49 are replaced with binaries from v1.1.48, to prevent breaking downstream crates.")),Object(a.b)("h3",{id:"new-reserved_words-pass-805"},"New reserved_words pass (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/805"},"#805"),")"),Object(a.b)("p",null,"I made a serious mistake at ",Object(a.b)("inlineCode",{parentName:"p"},"v1.1.49")," which makes swc unusable. This patch fixes it."))}l.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,d=l["".concat(c,".").concat(b)]||l[b]||f[b]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);