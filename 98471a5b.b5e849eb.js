(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(345)),c=["components"],i={title:"Changelog: swc v1.2.41",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l={permalink:"/blog/2020/12/22/swc-1.2.41",source:"@site/blog/2020-12-22-swc-1.2.41.md",description:"Bugfixes",date:"2020-12-22T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.41",readingTime:1.215,truncated:!1,prevItem:{title:"Changelog: swc v1.2.42",permalink:"/blog/2020/12/29/swc-1.2.42"},nextItem:{title:"Changelog: swc v1.2.40",permalink:"/blog/2020/12/04/swc-1.2.40"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Codegen of string literals (#1287)",id:"codegen-of-string-literals-1287",children:[]},{value:"Normalization of \r\n in template literals (#1286)",id:"normalization-of-rn-in-template-literals-1286",children:[]},{value:"Span of <code>decalre</code>d items (#1282)",id:"span-of-decalred-items-1282",children:[]},{value:"No hang on invalid character (#1274)",id:"no-hang-on-invalid-character-1274",children:[]},{value:"Parse <code>??</code> correctly (#1270)",id:"parse--correctly-1270",children:[]}]},{value:"New package",id:"new-package",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"codegen-of-string-literals-1287"},"Codegen of string literals (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1287"},"#1287"),")"),Object(o.b)("p",null,"The code generator of ",Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," tries to preserve the original input, and it resulted in some bugs.\nIt's now fixed by a huge breaking change - storing quote info in the string literal."),Object(o.b)("p",null,"Note that this patch is also included in the new version of ",Object(o.b)("a",{parentName:"p",href:"https://deno.land"},"deno"),", which is also published today."),Object(o.b)("h3",{id:"normalization-of-rn-in-template-literals-1286"},"Normalization of \\r\\n in template literals (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1286"},"#1286"),")"),Object(o.b)("p",null,"Thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Liamolucko"},"@Liamolucko"),", ",Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now follows spec more closely."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"\\r\\n")," in template literals are now normlized as ",Object(o.b)("inlineCode",{parentName:"p"},"\\n"),"."),Object(o.b)("h3",{id:"span-of-decalred-items-1282"},"Span of ",Object(o.b)("inlineCode",{parentName:"h3"},"decalre"),"d items (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1282"},"#1282"),")"),Object(o.b)("p",null,"Now span of various ",Object(o.b)("inlineCode",{parentName:"p"},"declare"),"d nodes like class declarations or function declarations include span of ",Object(o.b)("inlineCode",{parentName:"p"},"declare")," token. Due to how codegen determine codegen print comments, I expect this fix to make codegen print comments correctly."),Object(o.b)("h3",{id:"no-hang-on-invalid-character-1274"},"No hang on invalid character (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1274"},"#1274"),")"),Object(o.b)("p",null,"Previously, the lexer of ",Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," hangs on invalid input. This was because it did not update the position of the character in case of error. The fix was trivial, but it's important for some environments like deno shell, which gets input from stdin."),Object(o.b)("h3",{id:"parse--correctly-1270"},"Parse ",Object(o.b)("inlineCode",{parentName:"h3"},"??")," correctly (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1270"},"#1270"),")"),Object(o.b)("p",null,"Some tokens were not parsed correctly on ecmascript mode."),Object(o.b)("h2",{id:"new-package"},"New package"),Object(o.b)("p",null,"I wish this was a package about TypeScript type checkers, but I am still working hard on it still working hard. Instead, we introduce a package that allows swc to run on the web."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@swc/wasm-web")," is a new package which can be used for the web."))}b.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);