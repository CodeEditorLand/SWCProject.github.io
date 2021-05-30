(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{241:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var c=t(3),l=t(7),a=(t(0),t(345)),i=["components"],o={id:"usage-swc-cli",title:"Using cli (swc)",sidebar_label:"cli (swc)"},r={unversionedId:"usage-swc-cli",id:"usage-swc-cli",isDocsHomePage:!1,title:"Using cli (swc)",description:"Installation",source:"@site/docs/usage-swc-cli.md",slug:"/usage-swc-cli",permalink:"/docs/usage-swc-cli",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1622361846,sidebar_label:"cli (swc)",sidebar:"usage",previous:{title:"Creating multiple bundles",permalink:"/docs/spack-multi-bundle"},next:{title:"Using cli (spack)",permalink:"/docs/usage-spack-cli"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Watching",id:"watching",children:[]},{value:"Available Options",id:"available-options",children:[{value:"<code>--filename</code>",id:"--filename",children:[]},{value:"<code>--config-file</code>",id:"--config-file",children:[]},{value:"<code>--env-name</code>",id:"--env-name",children:[]},{value:"<code>--no-swcrc</code>",id:"--no-swcrc",children:[]},{value:"<code>--ignore</code>",id:"--ignore",children:[]},{value:"<code>--only</code>",id:"--only",children:[]},{value:"<code>--watch</code>",id:"--watch",children:[]},{value:"<code>--quiet</code>",id:"--quiet",children:[]},{value:"<code>--source-maps</code>",id:"--source-maps",children:[]},{value:"<code>--source-map-target</code>",id:"--source-map-target",children:[]},{value:"<code>--source-file-name</code>",id:"--source-file-name",children:[]},{value:"<code>--source-root</code>",id:"--source-root",children:[]},{value:"<code>--out-file</code>",id:"--out-file",children:[]},{value:"<code>--out-dir</code>",id:"--out-dir",children:[]},{value:"<code>--copy-files</code>",id:"--copy-files",children:[]},{value:"<code>--include-dotfiles</code>",id:"--include-dotfiles",children:[]},{value:"<code>--config</code>",id:"--config",children:[]},{value:"<code>--sync</code>",id:"--sync",children:[]},{value:"<code>--log-watch-compilation</code>",id:"--log-watch-compilation",children:[]},{value:"<code>--extensions</code>",id:"--extensions",children:[]}]}],p={toc:b};function s(e){var n=e.components,t=Object(l.a)(e,i);return Object(a.b)("wrapper",Object(c.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i --save-dev @swc/cli @swc/core\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# Transpile one file and emit to stdout.\nnpx swc FILE\n\n# Transpile one file and emit to `output.js`.\nnpx swc FILE -o output.js\n\n# Transpile and write output to dir\nnpx swc DIR -d dir\n")),Object(a.b)("h2",{id:"watching"},"Watching"),Object(a.b)("p",null,"To rebuild automatically on file change, you need to install ",Object(a.b)("inlineCode",{parentName:"p"},"chokidar")," like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i -D chokidar\n\n")),Object(a.b)("h2",{id:"available-options"},"Available Options"),Object(a.b)("h3",{id:"--filename"},Object(a.b)("inlineCode",{parentName:"h3"},"--filename")),Object(a.b)("p",null,"Filename to use when reading from stdin - this will be used in source-maps, errors etc."),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-f")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc -f input.js\n")),Object(a.b)("h3",{id:"--config-file"},Object(a.b)("inlineCode",{parentName:"h3"},"--config-file")),Object(a.b)("p",null,"Path to a .swcrc file to use."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js --config-file .swcrc\n")),Object(a.b)("h3",{id:"--env-name"},Object(a.b)("inlineCode",{parentName:"h3"},"--env-name")),Object(a.b)("p",null,"The name of the 'env' to use when loading configs and plugins.\nDefaults to the value of ",Object(a.b)("inlineCode",{parentName:"p"},"SWC_ENV"),", or else ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV"),", or else 'development'."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js --env-name='test'\n")),Object(a.b)("h3",{id:"--no-swcrc"},Object(a.b)("inlineCode",{parentName:"h3"},"--no-swcrc")),Object(a.b)("p",null,"Whether or not to look up .swcrc files"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js --no-swcrc\n")),Object(a.b)("h3",{id:"--ignore"},Object(a.b)("inlineCode",{parentName:"h3"},"--ignore")),Object(a.b)("p",null,"List of glob paths to ",Object(a.b)("strong",{parentName:"p"},"not")," compile"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src --ignore **/*.test.js\n")),Object(a.b)("h3",{id:"--only"},Object(a.b)("inlineCode",{parentName:"h3"},"--only")),Object(a.b)("p",null,"List of glob paths to ",Object(a.b)("strong",{parentName:"p"},"only")," compile"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src --only **/*.js\n")),Object(a.b)("h3",{id:"--watch"},Object(a.b)("inlineCode",{parentName:"h3"},"--watch")),Object(a.b)("p",null,"Recompile files on changes"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-w")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js -w\n")),Object(a.b)("h3",{id:"--quiet"},Object(a.b)("inlineCode",{parentName:"h3"},"--quiet")),Object(a.b)("p",null,"Suppress compilation output"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-q")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js -q\n")),Object(a.b)("h3",{id:"--source-maps"},Object(a.b)("inlineCode",{parentName:"h3"},"--source-maps")),Object(a.b)("p",null,"Source maps"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-s")),Object(a.b)("p",null,"Values: true|false|inline|both"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js -s\n")),Object(a.b)("h3",{id:"--source-map-target"},Object(a.b)("inlineCode",{parentName:"h3"},"--source-map-target")),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"file")," on returned source map"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js -s --source-map-target input.map.js\n")),Object(a.b)("h3",{id:"--source-file-name"},Object(a.b)("inlineCode",{parentName:"h3"},"--source-file-name")),Object(a.b)("p",null,"Set ",Object(a.b)("inlineCode",{parentName:"p"},"sources[0]")," on returned source map"),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,"// TODO"),Object(a.b)("h3",{id:"--source-root"},Object(a.b)("inlineCode",{parentName:"h3"},"--source-root")),Object(a.b)("p",null,"The root from which all sources are relative"),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,"// TODO"),Object(a.b)("h3",{id:"--out-file"},Object(a.b)("inlineCode",{parentName:"h3"},"--out-file")),Object(a.b)("p",null,"Compile all input files into a single file"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-o")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js -o output.js\n")),Object(a.b)("h3",{id:"--out-dir"},Object(a.b)("inlineCode",{parentName:"h3"},"--out-dir")),Object(a.b)("p",null,"Compile an input directory of modules into an output directory"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-d")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src -d dist\n")),Object(a.b)("h3",{id:"--copy-files"},Object(a.b)("inlineCode",{parentName:"h3"},"--copy-files")),Object(a.b)("p",null,"When compiling a directory copy over non-compilable files"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-D")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src --copy-files\n")),Object(a.b)("h3",{id:"--include-dotfiles"},Object(a.b)("inlineCode",{parentName:"h3"},"--include-dotfiles")),Object(a.b)("p",null,"Include dotfiles when compiling and copying non-compilable files"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src --include-dotfiles\n")),Object(a.b)("h3",{id:"--config"},Object(a.b)("inlineCode",{parentName:"h3"},"--config")),Object(a.b)("p",null,"Override a config from .swcrc file. e.g. -C module.type=amd -C module.moduleId=hello"),Object(a.b)("p",null,"Alias: ",Object(a.b)("inlineCode",{parentName:"p"},"-C")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src -C module.type=amd\n")),Object(a.b)("h3",{id:"--sync"},Object(a.b)("inlineCode",{parentName:"h3"},"--sync")),Object(a.b)("p",null,"Invoke swc synchronously. Useful for debugging."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc src --sync\n")),Object(a.b)("h3",{id:"--log-watch-compilation"},Object(a.b)("inlineCode",{parentName:"h3"},"--log-watch-compilation")),Object(a.b)("p",null,"Log a message when a watched file is successfully compiled."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npx swc input.js --log-watch-compilation\n")),Object(a.b)("h3",{id:"--extensions"},Object(a.b)("inlineCode",{parentName:"h3"},"--extensions")),Object(a.b)("p",null,"Use specific extensions"),Object(a.b)("p",null,"Example:"),Object(a.b)("p",null,"// TODO"))}s.isMDXComponent=!0},345:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var c=t(0),l=t.n(c);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,c,l=function(e,n){if(null==e)return{};var t,c,l={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var b=l.a.createContext({}),p=function(e){var n=l.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return l.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,b=r(e,["components","mdxType","originalType","parentName"]),s=p(t),d=c,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return t?l.a.createElement(m,o(o({ref:n},b),{},{components:t})):l.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var b=2;b<a;b++)i[b]=t[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);