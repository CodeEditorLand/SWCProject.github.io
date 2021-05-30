(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),a=(n(0),n(345)),o=["components"],i={title:"Changelog: swc v1.1.14",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l={permalink:"/blog/2020/01/23/swc-1.1.14",source:"@site/blog/2020-01-23-swc-1.1.14.md",description:"Bugfixes",date:"2020-01-23T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.14",readingTime:.905,truncated:!1,prevItem:{title:"Changelog: swc v1.1.15",permalink:"/blog/2020/01/24/swc-1.1.15"},nextItem:{title:"Changelog: swc v1.1.13",permalink:"/blog/2020/01/17/swc-1.1.13"}},p=[{value:"Bugfixes",id:"bugfixes",children:[{value:"throw in nested finally block (#601)",id:"throw-in-nested-finally-block-601",children:[]},{value:"use-use conflict in hygiene (#599)",id:"use-use-conflict-in-hygiene-599",children:[]},{value:"Optimizer bug (#596)",id:"optimizer-bug-596",children:[]}]},{value:"Span improvements",id:"span-improvements",children:[]}],s={toc:p};function b(e){var t=e.components,n=Object(c.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"throw-in-nested-finally-block-601"},"throw in nested finally block (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/601"},"#601"),")"),Object(a.b)("p",null,"Previously,"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'function* foo() {\n  try {\n  } finally {\n    try {\n    } finally {\n      throw new Error("foo");\n    }\n  }\n}\n')),Object(a.b)("p",null,"make ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," panic. ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," is now ok with it."),Object(a.b)("p",null,"It was really hard to create a minimal reporduction case."),Object(a.b)("h3",{id:"use-use-conflict-in-hygiene-599"},"use-use conflict in hygiene (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/599"},"#599"),")"),Object(a.b)("p",null,"All of the ",Object(a.b)("inlineCode",{parentName:"p"},"_templateObject")," in below code refer to differect function."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"export function foo() {\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n}\n")),Object(a.b)("p",null,"But as previously swc cannot detect use-use conflict, it was miscompiled as-is."),Object(a.b)("h3",{id:"optimizer-bug-596"},"Optimizer bug (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/596"},"#596"),")"),Object(a.b)("p",null,"Thanks to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/erikdesjardins"},"@erikdesjardins"),", swc's optimizer does not break codes like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"if (0 | x) y = 1;\nelse y = 2;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"if (1 | x) y = 1;\nelse y = 2;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"if (0 & x) y = 1;\nelse y = 2;\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"if (1 & x) y = 1;\nelse y = 2;\n")),Object(a.b)("h2",{id:"span-improvements"},"Span improvements"),Object(a.b)("p",null,"Thanks to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/dsherret"},"@dsherret"),", there are more span improvements."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"as and const assertions (",Object(a.b)("a",{parentName:"li",href:"https://github.com/swc-project/swc/pull/593"},"#593"),")"),Object(a.b)("li",{parentName:"ul"},"semicolon of a dynamic import statement (",Object(a.b)("a",{parentName:"li",href:"https://github.com/swc-project/swc/pull/595"},"#595"),")")))}b.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?c.a.createElement(f,i(i({ref:t},p),{},{components:n})):c.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);