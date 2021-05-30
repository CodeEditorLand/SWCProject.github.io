(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(345)),l=["components"],i={title:"Changelog: swc v1.2.42",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},c={permalink:"/blog/2020/12/29/swc-1.2.42",source:"@site/blog/2020-12-29-swc-1.2.42.md",description:"Bugfixes",date:"2020-12-29T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.42",readingTime:1.77,truncated:!1,prevItem:{title:"Changelog: swc v1.2.43",permalink:"/blog/2020/12/30/swc-1.2.43"},nextItem:{title:"Changelog: swc v1.2.41",permalink:"/blog/2020/12/22/swc-1.2.41"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"bundler: Handle of <code>export *</code> correctly. (#1264)",id:"bundler-handle-of-export--correctly-1264",children:[]},{value:"bundler: Fix statement ordering. (#1264)",id:"bundler-fix-statement-ordering-1264",children:[]},{value:"bundler: Group statements from same module. (#1264)",id:"bundler-group-statements-from-same-module-1264",children:[]},{value:"fixer: Handle assignmnet in new exprssion correctly. (#1264)",id:"fixer-handle-assignmnet-in-new-exprssion-correctly-1264",children:[]},{value:"fixer: Handle comma expression in new exprssion correctly. (#1264)",id:"fixer-handle-comma-expression-in-new-exprssion-correctly-1264",children:[]},{value:"bundler: Prevent duplicate variable. (#1296)",id:"bundler-prevent-duplicate-variable-1296",children:[]},{value:"bundler: Handle keywords. (#1296)",id:"bundler-handle-keywords-1296",children:[]},{value:"dce: Prevent tags in tagged template literals. (#1296)",id:"dce-prevent-tags-in-tagged-template-literals-1296",children:[]},{value:"dce: Handle throw statement correctly. (#1296)",id:"dce-handle-throw-statement-correctly-1296",children:[]}]}],d={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"bundler-handle-of-export--correctly-1264"},"bundler: Handle of ",Object(o.b)("inlineCode",{parentName:"h3"},"export *")," correctly. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1264"},"#1264"),")"),Object(o.b)("p",null,"Previously the bundler of ","[swc][]"," did not exclude ",Object(o.b)("inlineCode",{parentName:"p"},"default")," while handling ",Object(o.b)("inlineCode",{parentName:"p"},"export *"),".\nThis is wrong and it's fixed.\nAs a result, you can now export default while using ",Object(o.b)("inlineCode",{parentName:"p"},"export * from './foo'")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'export { default } from "./foo";\nexport * from "./foo";\n')),Object(o.b)("p",null,"The code above now works."),Object(o.b)("h3",{id:"bundler-fix-statement-ordering-1264"},"bundler: Fix statement ordering. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1264"},"#1264"),")"),Object(o.b)("p",null,"Order of statements are now preserved.\nPreviously, the bundler only considers about dependancy, but it resulted in some bugs so I patched it to preserve original order."),Object(o.b)("h3",{id:"bundler-group-statements-from-same-module-1264"},"bundler: Group statements from same module. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1264"},"#1264"),")"),Object(o.b)("p",null,"While flattening all statements, the bundler now prefers statements from same module.\nIt will help debugging the bundle, as related statements live at simillar place."),Object(o.b)("h3",{id:"fixer-handle-assignmnet-in-new-exprssion-correctly-1264"},"fixer: Handle assignmnet in new exprssion correctly. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1264"},"#1264"),")"),Object(o.b)("p",null,"Previously ","[swc][]"," errornously removed parenthesis from ",Object(o.b)("inlineCode",{parentName:"p"},"const a = new (a = b);"),".\nIt resulted in ",Object(o.b)("inlineCode",{parentName:"p"},"const a = new a = b;"),", which has different meaning."),Object(o.b)("h3",{id:"fixer-handle-comma-expression-in-new-exprssion-correctly-1264"},"fixer: Handle comma expression in new exprssion correctly. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1264"},"#1264"),")"),Object(o.b)("p",null,"Previously ","[swc][]"," errornously removed parenthesis from ",Object(o.b)("inlineCode",{parentName:"p"},"const a = new (a, b);"),".\nIt resulted in ",Object(o.b)("inlineCode",{parentName:"p"},"const a = new a, b;")," , which has different meaning.\nThis is now fixed."),Object(o.b)("h3",{id:"bundler-prevent-duplicate-variable-1296"},"bundler: Prevent duplicate variable. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1296"},"#1296"),")"),Object(o.b)("p",null,"This bug occurrs when ",Object(o.b)("inlineCode",{parentName:"p"},"export * as foo")," is mixed with ",Object(o.b)("inlineCode",{parentName:"p"},"export * from ''")," more than three times, and with ",Object(o.b)("inlineCode",{parentName:"p"},"import"),".\nIt's now fixed and bundler bundles it correctly."),Object(o.b)("h3",{id:"bundler-handle-keywords-1296"},"bundler: Handle keywords. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1296"},"#1296"),")"),Object(o.b)("p",null,"EcmaScript allows using keywords as an identifier in some places.\nAs the bundler flatten statements, it made a variable named ",Object(o.b)("inlineCode",{parentName:"p"},"instanceof")," when it met ",Object(o.b)("inlineCode",{parentName:"p"},"export { foo as instanceof }"),"."),Object(o.b)("p",null,"But this is a bug and it's now renamed to something other."),Object(o.b)("h3",{id:"dce-prevent-tags-in-tagged-template-literals-1296"},"dce: Prevent tags in tagged template literals. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1296"},"#1296"),")"),Object(o.b)("p",null,"The dce was too aggresive and it removed tagged template literals.\nIt now preserves as tagged template literals can have side effect."),Object(o.b)("p",null,"Note:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are using some old target, you are not affected.")),Object(o.b)("h3",{id:"dce-handle-throw-statement-correctly-1296"},"dce: Handle throw statement correctly. (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1296"},"#1296"),")"),Object(o.b)("p",null,"Again, it errornously removed something used by throw statement.\nI patched it to mark argument as used correctly."))}p.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);