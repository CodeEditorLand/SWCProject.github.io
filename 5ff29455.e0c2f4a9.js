(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),o=(t(0),t(345)),r=["components"],c={title:"v1.2: spack: Yet another asset bundler",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l={permalink:"/blog/2020/06/18/swc-1.2",source:"@site/blog/2020-06-18-swc-1.2.md",description:"Features",date:"2020-06-18T00:00:00.000Z",tags:[],title:"v1.2: spack: Yet another asset bundler",readingTime:3.43,truncated:!1,prevItem:{title:"Changelog: swc v1.2.5",permalink:"/blog/2020/06/19/swc-1.2.5"},nextItem:{title:"Changelog: swc v1.1.58",permalink:"/blog/2020/06/13/swc-1.1.58"}},p=[{value:"Features",id:"features",children:[{value:"Compact output",id:"compact-output",children:[]},{value:"Tree shaking",id:"tree-shaking",children:[]},{value:"Import deglobbing",id:"import-deglobbing",children:[]},{value:"Common js support",id:"common-js-support",children:[]},{value:"Optimizations",id:"optimizations",children:[]},{value:"High performance",id:"high-performance",children:[]},{value:"swc integration",id:"swc-integration",children:[]},{value:"Multiple entries",id:"multiple-entries",children:[]},{value:"Built-in chunking",id:"built-in-chunking",children:[]},{value:"Type annotation for config file",id:"type-annotation-for-config-file",children:[]},{value:"Fine config",id:"fine-config",children:[]}]},{value:"Roadmap (spack)",id:"roadmap-spack",children:[{value:"webpack-compatible plugin api",id:"webpack-compatible-plugin-api",children:[]},{value:"dynamic imports (and code splitting)",id:"dynamic-imports-and-code-splitting",children:[]},{value:"minification (#826)",id:"minification-826",children:[]}]}],s={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,r);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("h3",{id:"compact-output"},"Compact output"),Object(o.b)("p",null,"Just like rollup, spack emits compact output."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"a.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'console.log("loading A");\nexport function a() {\n  console.log("use!");\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"lib.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { a } from "./a";\na();\n')),Object(o.b)("p",null,"becomes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'console.log("loading A");\nfunction a() {\n  console.log("use!");\n}\na();\n')),Object(o.b)("p",null,"Because ",Object(o.b)("inlineCode",{parentName:"p"},"swc")," was designed with this type of merging in mind, files are merged without any problems even if the same name exists in multiple files."),Object(o.b)("h3",{id:"tree-shaking"},"Tree shaking"),Object(o.b)("p",null,"Just like other modern bundlers, ",Object(o.b)("inlineCode",{parentName:"p"},"spack")," can remove unused exports."),Object(o.b)("h3",{id:"import-deglobbing"},"Import deglobbing"),Object(o.b)("p",null,"To aid tree shaking, ",Object(o.b)("inlineCode",{parentName:"p"},"spack")," deglobs import if possible."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import * as lib from "lib";\nlib.foo();\n')),Object(o.b)("p",null,"behaves exactly same as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { foo } from "lib";\nfoo();\n')),Object(o.b)("p",null,"Note that all side effects are preserved."),Object(o.b)("h3",{id:"common-js-support"},"Common js support"),Object(o.b)("p",null,"As almost all modules on npm are published as common js module, spack supports importing common js module. Also, spack emits compact output compared to webpack."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import * as lib from "lib";\nconsole.log(lib); // Prevent dce\n')),Object(o.b)("p",null,"If the ",Object(o.b)("inlineCode",{parentName:"p"},"lib")," above is common js module, it's transcompiled as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const load = __spack_require.bind(void 0, function (module, exports) {\n  // Code from lib goes here\n});\nconst lib = load();\nconsole.log(lib); // Prevent dce\n")),Object(o.b)("h3",{id:"optimizations"},"Optimizations"),Object(o.b)("p",null,"Currently ",Object(o.b)("inlineCode",{parentName:"p"},"swc")," does"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"global inlining (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"process.env.NODE_ENV"),")"),Object(o.b)("li",{parentName:"ul"},"inlining"),Object(o.b)("li",{parentName:"ul"},"constant propagation"),Object(o.b)("li",{parentName:"ul"},"dead code elimination")),Object(o.b)("p",null,"Actually the tree shaking described above is implemented using the dead code elimination pass. Currently, spack / swc can deduce"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let b = 2;\nlet a = 1;\nif (b) {\n  a = 2;\n}\nlet c;\nif (a) {\n  c = 3;\n}\nconsole.log(c);\n")),Object(o.b)("p",null,"into"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"console.log(3);\n")),Object(o.b)("h3",{id:"high-performance"},"High performance"),Object(o.b)("p",null,"As always, performance is a first-class citizen. It's very fast because it uses all cpu cores, and optimized by llvm."),Object(o.b)("h3",{id:"swc-integration"},"swc integration"),Object(o.b)("p",null,"You can use es2018, module import / export-s and some staged proposals without installing any additional dependency."),Object(o.b)("h3",{id:"multiple-entries"},"Multiple entries"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"spack.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/web.ts",\n    android: __dirname + "/src/android.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n')),Object(o.b)("h3",{id:"built-in-chunking"},"Built-in chunking"),Object(o.b)("p",null,"Let's suppose that we have the same config as above. If ",Object(o.b)("inlineCode",{parentName:"p"},"android.ts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"web.ts")," both references a file, it will be extracted as a separate chunk and ",Object(o.b)("inlineCode",{parentName:"p"},"web.ts")," and ",Object(o.b)("inlineCode",{parentName:"p"},"amdroid.ts")," will import it."),Object(o.b)("h3",{id:"type-annotation-for-config-file"},"Type annotation for config file"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"spack")," provides type annotations for the config. You can get assists from ide just by wrappping your configuration object with ",Object(o.b)("inlineCode",{parentName:"p"},"config"),". Note that it's just an identity function with type annoatations."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"spack.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n')),Object(o.b)("h3",{id:"fine-config"},"Fine config"),Object(o.b)("p",null,"If you want to bundle everything in each bundle, you can provide an array of configurations."),Object(o.b)("p",null,"e.g."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config([\n  {\n    entry: {\n      desktop: __dirname + "/src/desktop.ts",\n    },\n    output: {\n      path: __dirname + "/lib",\n    },\n    module: {},\n  },\n  {\n    entry: {\n      mobile: __dirname + "/src/mobile.ts",\n    },\n    output: {\n      path: __dirname + "/lib",\n    },\n    module: {},\n  },\n]);\n')),Object(o.b)("p",null,"results in two full bundle (",Object(o.b)("inlineCode",{parentName:"p"},"desktop.js"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mobile.js"),"), while"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    desktop: __dirname + "/src/desktop.ts",\n    mobile: __dirname + "/src/mobile.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n')),Object(o.b)("p",null,"results in chunking. In this case, the output will be ",Object(o.b)("inlineCode",{parentName:"p"},"desktop.js"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mobile.js"),", ",Object(o.b)("inlineCode",{parentName:"p"},"common-[hash].js"),", assuming there's a common dependency."),Object(o.b)("h2",{id:"roadmap-spack"},"Roadmap (spack)"),Object(o.b)("h3",{id:"webpack-compatible-plugin-api"},"webpack-compatible plugin api"),Object(o.b)("p",null,"spack will provide webpack-compatible apis, so you will be able to use webpack loaders and plugins without changing the plugin. All you need to do will be changing file name and imports."),Object(o.b)("p",null,"I couldn't implement this because currently there's no way to wait for a promise to be resolved from rust code.\nI'll implement this feature as soon as possible after ",Object(o.b)("a",{parentName:"p",href:"https://github.com/neon-bindings/neon/issues/73"},"neon#73")," or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/infinyon/node-bindgen/issues/37"},"node-bidgen#37")," is fixed. (I'm open to switchig from neon to node-bindgen)."),Object(o.b)("h3",{id:"dynamic-imports-and-code-splitting"},"dynamic imports (and code splitting)"),Object(o.b)("h3",{id:"minification-826"},"minification (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/826"},"#826"),")"),Object(o.b)("p",null,"I think this is one of the core features of a bundler. I'll implement it soon."))}b.isMDXComponent=!0},345:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=i,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=t[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);