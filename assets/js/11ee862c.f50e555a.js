(self.webpackChunk=self.webpackChunk||[]).push([[4921],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2717:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>p,toc:()=>c,default:()=>m});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),s=["components"],o={id:"configuring-swc",title:"Configuring swc",sidebar_label:"Configuring swc"},i=void 0,p={unversionedId:"configuring-swc",id:"configuring-swc",isDocsHomePage:!1,title:"Configuring swc",description:"swc can be configured with .swcrc file.",source:"@site/docs/configuring-swc.md",sourceDirName:".",slug:"/configuring-swc",permalink:"/docs/configuring-swc",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1625110433,formattedLastUpdatedAt:"7/1/2021",frontMatter:{id:"configuring-swc",title:"Configuring swc",sidebar_label:"Configuring swc"},sidebar:"usage",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"preset-env",permalink:"/docs/preset-env"}},c=[{value:"preset-env",id:"preset-env",children:[]},{value:"jsc.externalHelpers",id:"jscexternalhelpers",children:[]},{value:"jsc.parser",id:"jscparser",children:[]},{value:"jsc.target",id:"jsctarget",children:[]},{value:"jsc.loose",id:"jscloose",children:[]},{value:"jsc.transform",id:"jsctransform",children:[{value:"jsc.transform.legacyDecorator",id:"jsctransformlegacydecorator",children:[]},{value:"jsc.transform.decoratorMetadata",id:"jsctransformdecoratormetadata",children:[]},{value:"jsc.transform.react",id:"jsctransformreact",children:[]},{value:"jsc.transform.constModules",id:"jsctransformconstmodules",children:[]},{value:"jsc.transform.optimizer",id:"jsctransformoptimizer",children:[]}]},{value:"jsc.keepClassNames",id:"jsckeepclassnames",children:[]},{value:"jsc.paths",id:"jscpaths",children:[]},{value:"module",id:"module",children:[]},{value:"minify",id:"minify",children:[]},{value:"Multiple entries",id:"multiple-entries",children:[{value:"test",id:"test",children:[]},{value:"exclude",id:"exclude",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"swc")," can be configured with ",(0,l.kt)("inlineCode",{parentName:"p"},".swcrc")," file."),(0,l.kt)("h2",{id:"preset-env"},"preset-env"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/preset-env"},"preset-env")," for using swc with ",(0,l.kt)("inlineCode",{parentName:"p"},"browserslist"),"."),(0,l.kt)("h1",{id:"jsc"},"jsc"),(0,l.kt)("p",null,"This is optional and defaults to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "topLevelAwait": false,\n      "importMeta": false\n    },\n    "transform": null,\n    "target": "es5",\n    "loose": false,\n    "externalHelpers": false,\n    // Requires v1.2.50 or upper and requires target to be es2016 or upper.\n    "keepClassNames": false\n  }\n}\n')),(0,l.kt)("h2",{id:"jscexternalhelpers"},"jsc.externalHelpers"),(0,l.kt)("p",null,"You can use helpers from an external module named ",(0,l.kt)("inlineCode",{parentName:"p"},"@swc/helpers"),"."),(0,l.kt)("p",null,"While bundling, this option will greatly reduce your file size."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "externalHelpers": true\n  }\n}\n')),(0,l.kt)("h2",{id:"jscparser"},"jsc.parser"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"typescript"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": false,\n      "dynamicImport": false\n    }\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ecmascript"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "classPrivateProperty": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "importMeta": false\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"jsctarget"},"jsc.target"),(0,l.kt)("p",null,"Starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"@swc/core")," v1.0.27, you can specify the target environment by using the field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    // Disable es3 / es5 / es2015 transforms\n    "target": "es2016"\n  }\n}\n')),(0,l.kt)("h2",{id:"jscloose"},"jsc.loose"),(0,l.kt)("p",null,"Starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"@swc/core")," v1.1.4, you can enable loose mode by"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "loose": true\n  }\n}\n')),(0,l.kt)("p",null,"In loose mode, swc generates more efficient code."),(0,l.kt)("h2",{id:"jsctransform"},"jsc.transform"),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "transform": {\n      "react": {\n        "pragma": "React.createElement",\n        "pragmaFrag": "React.Fragment",\n        "throwIfNamespace": true,\n        "development": false,\n        "useBuiltins": false\n      },\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"jsctransformlegacydecorator"},"jsc.transform.legacyDecorator"),(0,l.kt)("p",null,"You can use legacy decorators with ",(0,l.kt)("inlineCode",{parentName:"p"},"swc"),". To enable legacy decorator, set ",(0,l.kt)("inlineCode",{parentName:"p"},"jsc.transform.legacyDecorator")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsc.parser.decorators")," to true."),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"jsctransformdecoratormetadata"},"jsc.transform.decoratorMetadata"),(0,l.kt)("p",null,"If you are using typescript and decorators with ",(0,l.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," enabled, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swc")," for faster iteration like"),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true,\n      "decoratorMetadata": true\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Note: This feature requires ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.2.13+"),"."),(0,l.kt)("h3",{id:"jsctransformreact"},"jsc.transform.react"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime"))),(0,l.kt)("p",null,"Possible values: ",(0,l.kt)("inlineCode",{parentName:"p"},"automatic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"classic"),"."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"automatic")," to use new jsx runtimes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"importSource"))),(0,l.kt)("p",null,"Only for ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime: automatic"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"react")," by default."),(0,l.kt)("p",null,"This option can be overrided with ",(0,l.kt)("inlineCode",{parentName:"p"},"@jsxImportSource foo"),"."),(0,l.kt)("p",null,"Determines the runtime library to import."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pragma"),"\nReplace the function used when compiling JSX expressions.")),(0,l.kt)("p",null,"This option can be overrided with ",(0,l.kt)("inlineCode",{parentName:"p"},"@jsx foo"),"."),(0,l.kt)("p",null,"Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pragmaFrag"),"\nReplace the component used when compiling JSX fragments.")),(0,l.kt)("p",null,"This option can be overrided with ",(0,l.kt)("inlineCode",{parentName:"p"},"@jsxFrag foo"),"."),(0,l.kt)("p",null,"Defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"React.Fragment")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"throwIfNamespace"),"\nToggles whether or not to throw an error if an XML namespaced tag name is used. For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"<f:image />"))),(0,l.kt)("p",null,"Though the JSX spec allows this, it is disabled by default since React's JSX does not currently have support for it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\nToggles plugins that aid in development, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"jsx-self")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsx-source"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"useBuiltins"),"\nUse ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign()")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"_extends"),". Defaults to false.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"refresh")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface ReactRefreshConfig {\n  refreshReg: String;\n  refreshSig: String;\n  emitFullSignatures: boolean;\n}\n")),(0,l.kt)("h3",{id:"jsctransformconstmodules"},"jsc.transform.constModules"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "transform": {\n      "constModules": {\n        "globals": {\n          "@ember/env-flags": {\n            "DEBUG": "true"\n          },\n          "@ember/features": {\n            "FEATURE_A": "false",\n            "FEATURE_B": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { DEBUG } from "@ember/env-flags";\nimport { FEATURE_A, FEATURE_B } from "@ember/features";\n\nconsole.log(DEBUG, FEATURE_A, FEATURE_B);\n')),(0,l.kt)("p",null,"becomes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(true, false, true);\n")),(0,l.kt)("h3",{id:"jsctransformoptimizer"},"jsc.transform.optimizer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": Optimizer of the swc assumes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It's a module or wrapped in an iife.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Accessing (get) global variables does not have a side-effect.")),(0,l.kt)("p",null,"It is the same assumption as the google closure compiler."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You don't add fields to literals like a numeric literal, regular expression or a string literal.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Files are served as gzipped.")),(0,l.kt)("p",null,"It means that swc will not focus on reducing the size of non-gzipped file size."),(0,l.kt)("p",null,"Setting this to ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," skips optimizer pass"),(0,l.kt)("h4",{id:"jsctransformoptimizerglobals"},"jsc.transform.optimizer.globals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vars"),"\nVariables to inline.")),(0,l.kt)("p",null,"e.g.\n",(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"npx swc '__DEBUG__' --filename input.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"true;\n")),(0,l.kt)("h4",{id:"jsctransformoptimizerjsonify"},"jsc.transform.optimizer.jsonify"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," This feature requires ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.1.1"),"+"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minCost"),"\nIf cost of parsing a pure object literal is larger than this value, the object literal is converted to ",(0,l.kt)("inlineCode",{parentName:"li"},'JSON.parse(\'{"foo": "bar"}\')'),". Defaults to 1024.")),(0,l.kt)("p",null,"e.g.\n",(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "jsonify": {\n          "minCost": 0\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"This will change all ",(0,l.kt)("strong",{parentName:"p"},"pure")," object literals to ",(0,l.kt)("inlineCode",{parentName:"p"},'JSON.parse("")'),"."),(0,l.kt)("h2",{id:"jsckeepclassnames"},"jsc.keepClassNames"),(0,l.kt)("p",null,"Requires v1.2.50 or upper and requires target to be es2016 or upper."),(0,l.kt)("p",null,"Enabling this option will make swc preserve original class names."),(0,l.kt)("h2",{id:"jscpaths"},"jsc.paths"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Required ",(0,l.kt)("a",{parentName:"p",href:"mailto:swc@1.2.62"},"swc@1.2.62"),"+")),(0,l.kt)("p",null,"Syntax is identical as it of ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping")," for more details."),(0,l.kt)("h2",{id:"module"},"module"),(0,l.kt)("p",null,"To configure module system, see the ",(0,l.kt)("a",{parentName:"p",href:"./swcrc-module"},"docs")," for it."),(0,l.kt)("h2",{id:"minify"},"minify"),(0,l.kt)("p",null,"To get minified output, you can configure swc by"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "minify": true\n}\n')),(0,l.kt)("h2",{id:"multiple-entries"},"Multiple entries"),(0,l.kt)("p",null,"Starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.0.47"),", you can specify multiple entries. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "test": ".*.js$",\n    "module": {\n      "type": "commonjs"\n    }\n  },\n  {\n    "test": ".*.ts$",\n    "module": {\n      "type": "amd"\n    }\n  }\n]\n')),(0,l.kt)("p",null,"this make swc compile javascript files as common js module (uses ",(0,l.kt)("inlineCode",{parentName:"p"},"require('foo')"),") and compile typescript files as amd modules."),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," option can be used to transcompile only typescript files, like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"test"},"test"),(0,l.kt)("p",null,"Type: Regex / Regex[]"),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"exclude"},"exclude"),(0,l.kt)("p",null,"Type: Regex / Regex[]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exclude": [".*.js$", ".*.map$"],\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),(0,l.kt)("h1",{id:"sourcemaps"},"sourceMaps"),(0,l.kt)("p",null,"Starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"v1.2.50"),", you can enable source map by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"sourceMaps: true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"sourceMaps: 'inline'")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},".swcrc"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sourceMaps": true\n}\n')))}m.isMDXComponent=!0}}]);