"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=m(n),u=a,d=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3097:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>m,toc:()=>c,default:()=>h});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={id:"benchmark-transform",title:"Transforms",sidebar_label:"Transforms"},l=void 0,m={unversionedId:"benchmark-transform",id:"benchmark-transform",isDocsHomePage:!1,title:"Transforms",description:"See kdy1/benchmark-done-right for the benchmark source code.",source:"@site/docs/benchmark-transform.md",sourceDirName:".",slug:"/benchmark-transform",permalink:"/docs/benchmark-transform",version:"current",lastUpdatedBy:"Donny",lastUpdatedAt:1635381032,formattedLastUpdatedAt:"10/28/2021",frontMatter:{id:"benchmark-transform",title:"Transforms",sidebar_label:"Transforms"},sidebar:"usage",previous:{title:"Autogenerated",permalink:"/docs/benchmark-autogen"},next:{title:"Online Repl",permalink:"/docs/online-repl"}},c=[{value:"Things to note",id:"things-to-note",children:[]},{value:"How to interpret result.",id:"how-to-interpret-result",children:[]},{value:"Parallel",id:"parallel",children:[{value:"es3",id:"es3",children:[]},{value:"es5",id:"es5",children:[]},{value:"es2015",id:"es2015",children:[]},{value:"es2016",id:"es2016",children:[]},{value:"es2017",id:"es2017",children:[]},{value:"es2018",id:"es2018",children:[]},{value:"es2019",id:"es2019",children:[]},{value:"es2020",id:"es2020",children:[]}]},{value:"Synchronous",id:"synchronous",children:[{value:"es3",id:"es3-1",children:[]},{value:"es5",id:"es5-1",children:[]},{value:"es2015",id:"es2015-1",children:[]},{value:"es2016",id:"es2016-1",children:[]},{value:"es2017",id:"es2017-1",children:[]},{value:"es2018",id:"es2018-1",children:[]},{value:"es2019",id:"es2019-1",children:[]},{value:"es2020",id:"es2020-1",children:[]}]},{value:"Asynchronous",id:"asynchronous",children:[{value:"es3",id:"es3-2",children:[]},{value:"es5",id:"es5-2",children:[]},{value:"es2015",id:"es2015-2",children:[]},{value:"es2016",id:"es2016-2",children:[]},{value:"es2017",id:"es2017-2",children:[]},{value:"es2018",id:"es2018-2",children:[]},{value:"es2019",id:"es2019-2",children:[]},{value:"es2020",id:"es2020-2",children:[]}]}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kdy1/benchmark-done-right"},"kdy1/benchmark-done-right")," for the benchmark source code."),(0,s.kt)("h2",{id:"things-to-note"},"Things to note"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"babel does not same work. It does only little bit of works, but I didn't bother to configure it because it's slow even it does tiny amounts of work.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"babel does not support parellel transforms.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"esbuild does not support ",(0,s.kt)("inlineCode",{parentName:"p"},"es3"),".")),(0,s.kt)("h2",{id:"how-to-interpret-result"},"How to interpret result."),(0,s.kt)("p",null,"For most users, most important test result is parallel benchmark.\nIt's because build tool authors are smart enough to use ",(0,s.kt)("inlineCode",{parentName:"p"},"await Promise.all(tasks)")," and the benchmark scenario which is most close to it is ",(0,s.kt)("inlineCode",{parentName:"p"},"parallel"),"."),(0,s.kt)("p",null,"If you are not lucky enough and you need to apply transforms synchronously, ",(0,s.kt)("inlineCode",{parentName:"p"},"synchronous")," benchmark matters."),(0,s.kt)("h2",{id:"parallel"},"Parallel"),(0,s.kt)("p",null,"Performance of babel and tsc is identical as them of sychronous benchmark."),(0,s.kt)("h3",{id:"es3"},"es3"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es3.png",alt:"Images"})),(0,s.kt)("h3",{id:"es5"},"es5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es5.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2015"},"es2015"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2015.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2016"},"es2016"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2016.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2017"},"es2017"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2017.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2018"},"es2018"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2018.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2019"},"es2019"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2019.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2020"},"es2020"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/parallel/es2020.png",alt:"Images"})),(0,s.kt)("h2",{id:"synchronous"},"Synchronous"),(0,s.kt)("h3",{id:"es3-1"},"es3"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es3.png",alt:"Images"})),(0,s.kt)("h3",{id:"es5-1"},"es5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es5.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2015-1"},"es2015"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2015.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2016-1"},"es2016"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2016.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2017-1"},"es2017"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2017.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2018-1"},"es2018"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2018.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2019-1"},"es2019"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2019.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2020-1"},"es2020"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/sync/es2020.png",alt:"Images"})),(0,s.kt)("h2",{id:"asynchronous"},"Asynchronous"),(0,s.kt)("p",null,"This benchmark suite does not use all cpu cores."),(0,s.kt)("p",null,"For swc, the benchmark stores only one task on node.js thread pool at a time."),(0,s.kt)("h3",{id:"es3-2"},"es3"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es3.png",alt:"Images"})),(0,s.kt)("h3",{id:"es5-2"},"es5"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es5.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2015-2"},"es2015"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2015.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2016-2"},"es2016"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2016.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2017-2"},"es2017"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2017.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2018-2"},"es2018"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2018.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2019-2"},"es2019"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2019.png",alt:"Images"})),(0,s.kt)("h3",{id:"es2020-2"},"es2020"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/kdy1/benchmark-done-right/main/images/transform/async/es2020.png",alt:"Images"})))}h.isMDXComponent=!0}}]);