"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,b=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},61619:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>s});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"Hotfix: swc v1.2.26",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l=void 0,p={permalink:"/blog/2020/09/11/swc-1.2.26",source:"@site/blog/2020-09-11-swc-1.2.26.md",title:"Hotfix: swc v1.2.26",description:"Hotfix",date:"2020-09-11T00:00:00.000Z",formattedDate:"September 11, 2020",tags:[],readingTime:.115,truncated:!1,prevItem:{title:"Changelog: swc v1.2.25",permalink:"/blog/2020/09/11/swc-1.2.25"},nextItem:{title:"Changelog: swc v1.2.23",permalink:"/blog/2020/09/08/swc-1.2.23"}},u=[{value:"Hotfix",id:"hotfix",children:[]}],f={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hotfix"},"Hotfix"),(0,a.kt)("p",null,"Due to a bug of the build script, unpacked size was too big. New version is published to reduce package size."))}s.isMDXComponent=!0}}]);