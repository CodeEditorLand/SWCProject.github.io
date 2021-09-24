"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8311:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"spack-basic",title:"Configuring spack",sidebar_label:"Configuring spack"},c=void 0,p={unversionedId:"spack-basic",id:"spack-basic",isDocsHomePage:!1,title:"Configuring spack",description:"Config file",source:"@site/docs/spack-basic.md",sourceDirName:".",slug:"/spack-basic",permalink:"/docs/spack-basic",version:"current",lastUpdatedBy:"XQ Kuang",lastUpdatedAt:1632476322,formattedLastUpdatedAt:"9/24/2021",frontMatter:{id:"spack-basic",title:"Configuring spack",sidebar_label:"Configuring spack"},sidebar:"usage",previous:{title:"Minification",permalink:"/docs/config-js-minify"},next:{title:"Creating multiple bundles",permalink:"/docs/spack-multi-bundle"}},s=[{value:"Config file",id:"config-file",children:[{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>entry</code>",id:"entry",children:[]},{value:"<code>output</code>",id:"output",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"config-file"},"Config file"),(0,a.kt)("p",null,"spack can be configured with ",(0,a.kt)("inlineCode",{parentName:"p"},"spack.config.js"),". Config file for the spack is almost simillar to webpack. In future, I'll add a webpack-compatible plugin system."),(0,a.kt)("p",null,"Currently configuration items should be exported as common js exports, like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: In future, exporting config using ES modules will be supported.")),(0,a.kt)("p",null,"If you want autocompletion or type checking for configuration, you can wrap with ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@swc/core/spack"),". It's an identity function with type annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n});\n')),(0,a.kt)("h3",{id:"mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,"Possible values: ",(0,a.kt)("inlineCode",{parentName:"p"},"production"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,a.kt)("p",null,"Currently this value is not used, but it will behave similarly to one of webpack."),(0,a.kt)("h3",{id:"entry"},(0,a.kt)("inlineCode",{parentName:"h3"},"entry")),(0,a.kt)("p",null,"Determines the entry of bundling.\nYou may specify a file or a map of bundle name to file path."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Currently this should be absolute path. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"__dirname")," to create one."),(0,a.kt)("p",{parentName:"blockquote"},"But in future, spack will support using relative path and will resolve files relative to ",(0,a.kt)("inlineCode",{parentName:"p"},"spack.config.js"),".")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: __dirname + "/src/index.ts",\n});\n')),(0,a.kt)("p",null,"You can specify the name of bundle like following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n});\n')),(0,a.kt)("h3",{id:"output"},(0,a.kt)("inlineCode",{parentName:"h3"},"output")),(0,a.kt)("p",null,"You can change destination directory of the bundler using ",(0,a.kt)("inlineCode",{parentName:"p"},"output"),"."),(0,a.kt)("h4",{id:"exmaple"},"Exmaple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  output: {\n    path: __dirname + "/lib",\n    // Name is optional.\n    name: "index.js",\n  },\n});\n')),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"options")),(0,a.kt)("p",null,"Used to control the behavior of swc. This field is optional."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/usage-core#options"},"Options section of the swc doc")," for details."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/swc-project/cli/tree/master/examples/spack-basic"},"Basic usage"))))}d.isMDXComponent=!0}}]);