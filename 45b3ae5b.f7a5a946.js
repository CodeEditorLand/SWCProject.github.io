(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(345)),o=["components"],i={title:"Changelog: swc v1.2.39",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},p={permalink:"/blog/2020/11/21/swc-1.2.39",source:"@site/blog/2020-11-21-swc-1.2.39.md",description:"Bugfixes",date:"2020-11-21T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.39",readingTime:.545,truncated:!1,prevItem:{title:"Changelog: swc v1.2.40",permalink:"/blog/2020/12/04/swc-1.2.40"},nextItem:{title:"Changelog: swc v1.2.38",permalink:"/blog/2020/11/08/swc-1.2.38"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Preserved input (#1221)",id:"preserved-input-1221",children:[]},{value:"Private name in interfaces (#1211)",id:"private-name-in-interfaces-1211",children:[]},{value:"Bundler rework (#1212)",id:"bundler-rework-1212",children:[]}]},{value:"New features",id:"new-features",children:[{value:"BigInt literals as property keys (#1192)",id:"bigint-literals-as-property-keys-1192",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"preserved-input-1221"},"Preserved input (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1221"},"#1221"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now respects the input, and preserves escapes."),Object(c.b)("h3",{id:"private-name-in-interfaces-1211"},"Private name in interfaces (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1211"},"#1211"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," previously aborted on input like the below. This is changed to normal error."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"interface Foo {\n  #bar();\n}\n")),Object(c.b)("h3",{id:"bundler-rework-1212"},"Bundler rework (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1212"},"#1212"),")"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"spack"),", the bundler of ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," project, got a large refactoring and it can now handle almost all valid es codes. As the bundler is also used by ",Object(c.b)("a",{parentName:"p",href:"https://deno.land/"},"deno"),", the pr contains lots of test for ",Object(c.b)("a",{parentName:"p",href:"https://deno.land/"},"deno"),"."),Object(c.b)("h2",{id:"new-features"},"New features"),Object(c.b)("h3",{id:"bigint-literals-as-property-keys-1192"},"BigInt literals as property keys (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1192"},"#1192"),")"),Object(c.b)("p",null,"Thanks to ",Object(c.b)("a",{parentName:"p",href:"https://github.com/braddunbar"},"@braddunbar"),", ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now supports using bigint literal as a key of property."))}u.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);