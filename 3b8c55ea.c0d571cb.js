(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(325)),o={id:"installation",title:"Installation"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You can install swc with",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1614769081,sidebar:"usage",next:{title:"Configuring swc",permalink:"/docs/configuring-swc"}},l=[],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"swc")," with"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @swc/core @swc/cli\n")),Object(i.b)("p",null,"or"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev @swc/core @swc/cli\n")),Object(i.b)("p",null,"This will download a prebuilt binary instead of building swc if possible.\nCurrently prebuilt binaries are provided only for ",Object(i.b)("inlineCode",{parentName:"p"},"mac (x64)")," / ",Object(i.b)("inlineCode",{parentName:"p"},"linux (x86_64)")," / ",Object(i.b)("inlineCode",{parentName:"p"},"win32-x64")," / ",Object(i.b)("inlineCode",{parentName:"p"},"apple silicon")," / ",Object(i.b)("inlineCode",{parentName:"p"},"linux aarch64")," / ",Object(i.b)("inlineCode",{parentName:"p"},"- linux armv7")," / ",Object(i.b)("inlineCode",{parentName:"p"},"android aarch64")," / ",Object(i.b)("inlineCode",{parentName:"p"},"windows ia32"),"."),Object(i.b)("p",null,"To use on Alpine Linux, also install the ",Object(i.b)("inlineCode",{parentName:"p"},"@swc/core-linux-musl")," npm package."))}u.isMDXComponent=!0},325:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);