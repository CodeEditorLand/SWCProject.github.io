"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7348:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>d,default:()=>m});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"config-js-module",title:"Configuring module using .swcrc",sidebar_label:"Module config"},s=void 0,u={unversionedId:"config-js-module",id:"config-js-module",isDocsHomePage:!1,title:"Configuring module using .swcrc",description:"swc can transpile es6 modules to common js module, umd module or amd module.",source:"@site/docs/config-js-module.md",sourceDirName:".",slug:"/config-js-module",permalink:"/docs/config-js-module",version:"current",lastUpdatedBy:"Shinobu Hayashi",lastUpdatedAt:1630161601,formattedLastUpdatedAt:"8/28/2021",frontMatter:{id:"config-js-module",title:"Configuring module using .swcrc",sidebar_label:"Module config"},sidebar:"usage",previous:{title:"preset-env",permalink:"/docs/preset-env"},next:{title:"Minification",permalink:"/docs/config-js-minify"}},d=[{value:"shared options",id:"shared-options",children:[]},{value:"common js",id:"common-js",children:[]},{value:"amd",id:"amd",children:[]},{value:"umd",id:"umd",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"swc can transpile es6 modules to common js module, umd module or amd module.\nIf you don't specify module type, module statements will remain untouched."),(0,i.kt)("h3",{id:"shared-options"},"shared options"),(0,i.kt)("p",null,"These options are shared by common js / umd / amd."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module": {\n    // You can specify "commonjs", "amd", "umd"\n    "type": "commonjs",\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),(0,i.kt)("h4",{id:"strict"},"strict"),(0,i.kt)("p",null,"By default, when using exports with swc a non-enumerable ",(0,i.kt)("inlineCode",{parentName:"p"},"__esModule")," property is exported. In some cases, this property is used to determine if the import is the default export or if it contains the default export."),(0,i.kt)("p",null,"To prevent the ",(0,i.kt)("inlineCode",{parentName:"p"},"__esModule")," property from being exported, you can set the strict option to true."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h4",{id:"strictmode"},"strictMode"),(0,i.kt)("p",null,"If true, swc emits 'use strict' directive."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"lazy"},"lazy"),(0,i.kt)("p",null,"Changes Babel's compiled import statements to be lazily evaluated when their imported bindings are used for the first time. This can improve the initial load time of your module because evaluating dependencies upfront is sometimes entirely unnecessary. This is especially the case when implementing a library module."),(0,i.kt)("p",null,"The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy")," has a few possible effects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false")," - No lazy initialization of any imported module."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true")," - Do not lazy-initialize local ",(0,i.kt)("inlineCode",{parentName:"li"},"./foo")," imports, but lazy-init ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," dependencies.\nLocal paths are much more likely to have circular dependencies, which may break if loaded lazily,\nso they are not lazy by default, whereas dependencies between independent modules are rarely cyclical."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Array<string>")," - Lazy-initialize all imports with source matching one of the given strings.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The two cases where imports can never be lazy are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'import "foo";'),"\nSide-effect imports are automatically non-lazy since their very existence means that there is no binding to later kick-off initialization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'export from "foo"'),"\nRe-exporting all names requires up-front execution because otherwise there is no\nway to know what names need to be exported.")),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h4",{id:"nointerop"},"noInterop"),(0,i.kt)("p",null,"By default, when using exports with swc a non-enumerable ","_","_","esModule property is exported.\nThis property is then used to determine if the import is the default export or if it contains the default export."),(0,i.kt)("p",null,"In cases where the auto-unwrapping of default is not needed, you can set the noInterop option to true to avoid the usage of the interopRequireDefault helper (shown in inline form above)."),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"common-js"},"common js"),(0,i.kt)("p",null,"To emit a common js module, you can do so by"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module": {\n    "type": "commonjs",\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),(0,i.kt)("h3",{id:"amd"},"amd"),(0,i.kt)("p",null,"To emit amd module, you can do so by"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module": {\n    "type": "amd",\n    // Optional. If specified, swc emits named amd module.\n    "moduleId": "foo",\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),(0,i.kt)("h4",{id:"moduleid"},"moduleId"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". If specified, swc emits named amd module."),(0,i.kt)("h3",{id:"umd"},"umd"),(0,i.kt)("p",null,"To emit ",(0,i.kt)("inlineCode",{parentName:"p"},"umd")," module, you can do so by"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module": {\n    "type": "umd",\n    "globals": {},\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),(0,i.kt)("h4",{id:"globals"},"globals"),(0,i.kt)("p",null,"TODO"))}m.isMDXComponent=!0}}]);