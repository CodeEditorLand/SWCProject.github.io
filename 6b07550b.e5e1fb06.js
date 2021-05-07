(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(335)),i={title:"Changelog: swc v1.1.24",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},c={permalink:"/blog/2020/02/13/swc-1.1.24",source:"@site/blog/2020-02-13-swc-1.1.24.md",description:"Features",date:"2020-02-13T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.24",readingTime:.24,truncated:!1,prevItem:{title:"Changelog: swc v1.1.23 - hotfix",permalink:"/blog/2020/02/13/swc-1.1.23"},nextItem:{title:"Changelog: swc v1.1.19",permalink:"/blog/2020/02/07/swc-1.1.19"}},p=[{value:"Features",id:"features",children:[{value:"type-only imports and exports (TS 3.8) (#662)",id:"type-only-imports-and-exports-ts-38-662",children:[]}]},{value:"Binary size reduction (#663)",id:"binary-size-reduction-663",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("h3",{id:"type-only-imports-and-exports-ts-38-662"},"type-only imports and exports (TS 3.8) (",Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/662"}),"#662"),")"),Object(a.b)("p",null,"This is enabled by default, and see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports"}),"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports")," for details."),Object(a.b)("h2",{id:"binary-size-reduction-663"},"Binary size reduction (",Object(a.b)("a",Object(r.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/pull/663"}),"#663"),")"),Object(a.b)("p",null,"Binary size is reduced without any performance drop."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Windows: ",Object(a.b)("inlineCode",{parentName:"li"},"31.1MB")," => ",Object(a.b)("inlineCode",{parentName:"li"},"24.4MB")),Object(a.b)("li",{parentName:"ul"},"Darwin: ",Object(a.b)("inlineCode",{parentName:"li"},"23.3MB")," => ",Object(a.b)("inlineCode",{parentName:"li"},"19MB")),Object(a.b)("li",{parentName:"ul"},"Linux: ",Object(a.b)("inlineCode",{parentName:"li"},"22.3MB")," => ",Object(a.b)("inlineCode",{parentName:"li"},"18.2MB"))))}u.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);