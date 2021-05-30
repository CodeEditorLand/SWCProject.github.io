(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(345)),c=["components"],s={title:"Changelog: swc v1.2.10",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/07/31/swc-1.2.10",source:"@site/blog/2020-07-31-swc-1.2.10.md",description:"Bugfixes",date:"2020-07-31T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.10",readingTime:2.245,truncated:!1,prevItem:{title:"swc v1.2.11: Fix for almost all typescript bugs",permalink:"/blog/2020/08/02/swc-1.2.11"},nextItem:{title:"Changelog: swc v1.2.9",permalink:"/blog/2020/07/26/swc-1.2.9"}},p=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Error recovery for parser (#896)",id:"error-recovery-for-parser-896",children:[]},{value:"codegen of private properties (#903)",id:"codegen-of-private-properties-903",children:[]},{value:"codegen of optional catch parameters (#904)",id:"codegen-of-optional-catch-parameters-904",children:[]},{value:"nested optional catch parameters (#904)",id:"nested-optional-catch-parameters-904",children:[]},{value:"readonly class properties (#915)",id:"readonly-class-properties-915",children:[]},{value:"codegen of template literals with escape (#916)",id:"codegen-of-template-literals-with-escape-916",children:[]}]},{value:"Improvements",id:"improvements",children:[{value:"Handling of quotes (#910)",id:"handling-of-quotes-910",children:[]},{value:"No duplicate comments (#856)",id:"no-duplicate-comments-856",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"error-recovery-for-parser-896"},"Error recovery for parser (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/896"},"#896"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'export type * from "../typings";\n')),Object(o.b)("p",null,"The code above is invalid, but ",Object(o.b)("inlineCode",{parentName:"p"},"tsc")," accepts it and print an error message for it. I decided to follow the behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"tsc")," and I modified the parser to accept it."),Object(o.b)("h3",{id:"codegen-of-private-properties-903"},"codegen of private properties (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/903"},"#903"),")"),Object(o.b)("p",null,"Because some runtimes support private properties, I implemented printing logic for private properties."),Object(o.b)("p",null,"An example use case is ",Object(o.b)("a",{parentName:"p",href:"https://deno.land/"},"deno"),", which uses v8."),Object(o.b)("h3",{id:"codegen-of-optional-catch-parameters-904"},"codegen of optional catch parameters (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/904"},"#904"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"try {\n  m.append(key, value);\n} catch {\n  // Pass\n}\n")),Object(o.b)("p",null,"This was problematic if you use only typescript stripper. Code generator for a catch clause emitted ",Object(o.b)("inlineCode",{parentName:"p"},"("),", ",Object(o.b)("inlineCode",{parentName:"p"},")")," regardless of existence of the parameter."),Object(o.b)("p",null,"Now you can use the optional catch binding syntax without the optional catch binding pass."),Object(o.b)("h3",{id:"nested-optional-catch-parameters-904"},"nested optional catch parameters (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/904"},"#904"),")"),Object(o.b)("p",null,"Previously, the code below was miscompled, because the transform didn't visit children."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"try {\n  // Write our response!\n  await writeResponse(this.w, r);\n} catch {\n  try {\n    // Eagerly close on error.\n    this.conn.close();\n  } catch {\n    // Pass\n  }\n  err = e;\n}\n")),Object(o.b)("p",null,"This is fixed by visiting children."),Object(o.b)("h3",{id:"readonly-class-properties-915"},"readonly class properties (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/915"},"#915"),")"),Object(o.b)("p",null,"Previously ",Object(o.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc")," miscompiled readonly properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.\nimport { LogLevels, getLevelByName, getLevelName } from "./levels.ts";\nexport class Logger {\n  #level;\n  #handlers;\n  readonly #loggerName; // <---- offending line\n  constructor(loggerName, levelName, options = {}) {\n    this.#loggerName = loggerName;\n    this.#level = getLevelByName(levelName);\n    this.#handlers = options.handlers || [];\n  }\n}\n')),Object(o.b)("p",null,"Readonly is now properly handled."),Object(o.b)("h3",{id:"codegen-of-template-literals-with-escape-916"},"codegen of template literals with escape (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/916"},"#916"),")"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://deno.land/"},"deno")," contains lots of template literals with escape sequences. By using it as a test suite, I and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/bartlomieju"},"Bartek")," fixed lots of buf related to it."),Object(o.b)("h2",{id:"improvements"},"Improvements"),Object(o.b)("h3",{id:"handling-of-quotes-910"},"Handling of quotes (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/910"},"#910"),")"),Object(o.b)("p",null,"Previously, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc")," ignored the original quote of a string literal. This was intentional, and the purpose is to make output smaller by reducing the number of backslashes. But it is too bad for rust users, so I changed ",Object(o.b)("inlineCode",{parentName:"p"},"swc_ecma_codegen")," to preserve quotes."),Object(o.b)("h3",{id:"no-duplicate-comments-856"},"No duplicate comments (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/856"},"#856"),")"),Object(o.b)("p",null,"The bug is occured by two facts"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/swc-project/swc"},"swc")," did not check for duplicate comments."),Object(o.b)("li",{parentName:"ul"},"TypeScript parser requires backtracking.")),Object(o.b)("p",null,"While backtracking, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc")," simply added comments to the comment storage, and didn't care about duplicate comments. If backtracking is successful, there's no problem. But if backtracking fails, cursor of the lexer goes back without removing comments. This is fixed by tracking last position of comments. Now there's two cursor in the lexer - one for code, one for comments. The comments cursor does not go back, so even if backtracking is failed, it remains as-is and duplicated comments are simply ignored."))}b.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);