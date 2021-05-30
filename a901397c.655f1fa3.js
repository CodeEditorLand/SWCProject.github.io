(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(345)),s=["components"],i={title:"Why is swc fast?",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},c={permalink:"/blog/2020/02/16/why-is-swc-fast",source:"@site/blog/2020-02-16-why-is-swc-fast.md",description:"swc is fast. Very fast. It's 18x faster than babel on a single-core benchmark, and on a parallel benchmark, it's 68x faster than babel on a 4 core (8 HT) machine. Why? Just because it's written in rust? No. Its fundamental design differs from any other tool.",date:"2020-02-16T00:00:00.000Z",tags:[],title:"Why is swc fast?",readingTime:4.895,truncated:!1,prevItem:{title:"Changelog: swc v1.1.25",permalink:"/blog/2020/02/17/swc-1.1.25"},nextItem:{title:"Changelog: swc v1.1.21",permalink:"/blog/2020/02/13/swc-1.1.21"}},l=[{value:"The language",id:"the-language",children:[]},{value:"Optimization hints",id:"optimization-hints",children:[]},{value:"Design",id:"design",children:[{value:"String caching",id:"string-caching",children:[]},{value:"Less scope analysis",id:"less-scope-analysis",children:[]},{value:"No use of graph data structures",id:"no-use-of-graph-data-structures",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,s);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"swc")," is fast. Very fast. It's 18x faster than babel on a single-core benchmark, and on a parallel benchmark, it's 68x faster than babel on a 4 core (8 HT) machine. Why? Just because it's written in rust? No. Its fundamental design differs from any other tool."),Object(r.b)("h2",{id:"the-language"},"The language"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Just rewriting something in another language does not make it faster.")),Object(r.b)("p",null,"This is ",Object(r.b)("em",{parentName:"p"},"partially")," correct. Rewriting something in a language with an optimizing compiler can make difference.\nSome compilers including rustc, which uses llvm as a backend, are good at optimizing codes."),Object(r.b)("hr",null),Object(r.b)("p",null,"Edit: makes -> can make, created an ",Object(r.b)("inlineCode",{parentName:"p"},"optimization hints")," section,"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"optimization-hints"},"Optimization hints"),Object(r.b)("p",null,"Sometimes, rustc cannot deduce that it's dead code even if it is dead. In swc, we give enough hint if it's the case."),Object(r.b)("p",null,"For example, not all passes touch all of the ast. Many passes return the given ast node as-is. Especially, most passes have nothing to do with types. So those passes return the typings as-is.\nSo, it would be cool if those handlers are optimized out.\n",Object(r.b)("inlineCode",{parentName:"p"},"rustc")," failed to optimize it out by default because it changes semantic, but we can help it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"macro_rules! noop_fold_type {\n    ($F:ty, $N:tt) => {\n        impl Fold<swc_ecma_ast::$N> for $F {\n            #[inline]\n            fn fold(&mut self, node: swc_ecma_ast::$N) -> swc_ecma_ast::$N {\n                node\n            }\n        }\n    };\n    ($F:ty) => {\n        noop_fold_type!($F, Accessibility);\n        // ...\n        // Simillar code for each ast types\n    };\n}\n")),Object(r.b)("p",null,"See it on ",Object(r.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/blob/f17e49934c456022f5d6bfa23f7ad6af5ea2e338/ecmascript/transforms/src/macros.rs"},"github"),"."),Object(r.b)("p",null,"Now, it's optimized out. However, what matters is allocations. ",Object(r.b)("inlineCode",{parentName:"p"},"Fold<Vec<T>>")," is implemented as below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"impl<T, F> FoldWith<F> for Vec<T>\nwhere\n    F: Fold<T>,\n{\n    fn fold_children(self, f: &mut F) -> Self {\n        self.move_map(|it| f.fold(it))\n    }\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"move_map()")," is a hack to prevent reallocation.\nWhen ",Object(r.b)("inlineCode",{parentName:"p"},"Fold<T>")," is an identity function, ",Object(r.b)("inlineCode",{parentName:"p"},"Fold<Vec<T>>")," is cleary no-op.\nLet's see ",Object(r.b)("a",{parentName:"p",href:"https://godbolt.org/z/kJE4Rq"},"the generated assembly for the code below"),". The link contains the actual implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"move_map"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},"pub fn ret(v: Vec<i32>) -> Vec<i32> {\n    v\n}\n\npub fn move_map(v:Vec<i32>) -> Vec<i32> {\n    v.move_map(|v| v)\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-asm"},"example::ret:\n        mov     rax, rdi\n        mov     rcx, qword ptr [rsi + 16]\n        mov     qword ptr [rdi + 16], rcx\n        movups  xmm0, xmmword ptr [rsi]\n        movups  xmmword ptr [rdi], xmm0\n        ret\n\nexample::move_map:\n        sub     rsp, 24\n        mov     rax, rdi\n        movups  xmm0, xmmword ptr [rsi]\n        movaps  xmmword ptr [rsp], xmm0\n        mov     rcx, qword ptr [rsi + 16]\n        movups  xmmword ptr [rdi], xmm0\n        mov     qword ptr [rdi + 16], rcx\n        add     rsp, 24\n        ret\n")),Object(r.b)("p",null,"Great. Although it's a bit longer than no-op, no allocation occurs and thus it's fast enough.\nThe same goes for the ",Object(r.b)("inlineCode",{parentName:"p"},"Box<T>"),". See ",Object(r.b)("a",{parentName:"p",href:"https://godbolt.org/z/5fDXQK"},"https://godbolt.org/z/5fDXQK")," if you want."),Object(r.b)("h2",{id:"design"},"Design"),Object(r.b)("h3",{id:"string-caching"},"String caching"),Object(r.b)("p",null,"Identifiers are inherently used multiple times. ",Object(r.b)("inlineCode",{parentName:"p"},"swc")," utilizes ",Object(r.b)("a",{parentName:"p",href:"https://github.com/servo/string-cache"},"string_cache")," from the servo project to cache strings. Common identifiers like ",Object(r.b)("inlineCode",{parentName:"p"},"Object")," is stored as a constant."),Object(r.b)("h3",{id:"less-scope-analysis"},"Less scope analysis"),Object(r.b)("p",null,"Scope analysis is done only 2 ~ 4 times per file. One at the start of processing, one at the end of processing, one to strip type-only imports (typescript only), and the last one to transcompile it into the other type of modules. (cjs, amd, umd)"),Object(r.b)("p",null,"I'll explain how it works, and why it's fast.\nFirst, before applying any other transformations, ",Object(r.b)("inlineCode",{parentName:"p"},"resolver")," pass colors the identifiers."),Object(r.b)("p",null,"Note that the symbol is not changed. ",Object(r.b)("inlineCode",{parentName:"p"},"___")," denotes the context number and it's not part of the symbol."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const foo = 1;\nuse(foo);\n{\n  const foo = 2;\n  use(foo);\n}\n")),Object(r.b)("p",null,"becomes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const foo___1 = 1;\nuse(foo___1);\n\n{\n  const foo___2 = 2;\n  use(foo___2);\n}\n")),Object(r.b)("p",null,"Then, other passes insert identifiers if required. There's a helper macro to create a ",Object(r.b)("strong",{parentName:"p"},"private")," ident.\nLet's suppose that a pass appended a private identifier named ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," to the top level."),Object(r.b)("p",null,"It's now"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const foo = 1;\nuse(foo);\n{\n  const foo = 2;\n  use(foo);\n}\nconst foo = 3;\n")),Object(r.b)("p",null,"and with expanded context number, it's"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const foo___1 = 1;\nuse(foo___1);\n{\n  const foo___2 = 2;\n  use(foo__2);\n}\nconst foo___3 = 3;\n")),Object(r.b)("p",null,"The last pass, named hygiene, removes context numbers and changes symbol to the appropriate one. It becomes"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const foo = 1;\nuse(foo);\n{\n  const foo1 = 2;\n  use(foo1);\n}\nconst foo2 = 3;\n")),Object(r.b)("p",null,"It means that passes between ",Object(r.b)("inlineCode",{parentName:"p"},"resolver")," and ",Object(r.b)("inlineCode",{parentName:"p"},"hygiene")," can inject identifiers as they want without any heavy operation."),Object(r.b)("p",null,"For comparison, babel maintains the scope while transcompiling and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/31b05060409107caa5737f90bdf79fc3538c0a2d/packages/babel-plugin-transform-modules-commonjs/src/index.js#L148-L152"},"uses it")," like ",Object(r.b)("inlineCode",{parentName:"p"},"scope.rename('require')")," to ensure that the name does not conflict.\nHowever, given the fact that ",Object(r.b)("a",{parentName:"p",href:"https://github.com/babel/babel/blob/31b05060409107caa5737f90bdf79fc3538c0a2d/packages/babel-traverse/src/scope/index.js#L370-L378"},"babel does renaming directly instead of queueing"),", api like this means that all identifiers in the file are visited on each call. For common js module, babel does like"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'path.scope.rename("exports");\npath.scope.rename("module");\npath.scope.rename("require");\npath.scope.rename("__filename");\npath.scope.rename("__dirname");\n')),Object(r.b)("p",null,"and it results in 5 scope analysis."),Object(r.b)("p",null,"The basic idea of ",Object(r.b)("inlineCode",{parentName:"p"},"hygiene")," is taken from the macro system of rustc. Note that no compiler works in this way and I call this approach ",Object(r.b)("em",{parentName:"p"},"identifier hygiene"),". (Please correct me if I'm wrong.)"),Object(r.b)("p",null,"Note that this will also help writing a fast bundler.\nWhile bundling modules, only a single invocation of the resolver pass is enough to distinguish identifiers from multiple modules.\nHygiene pass is invoked only once at the end."),Object(r.b)("hr",null),Object(r.b)("p",null,"Edit: Added how babel works"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"no-use-of-graph-data-structures"},"No use of graph data structures"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"swc")," does not use graph structures for some reason.\nThe most important one is the fact that rust is not a language with a garbage collector.\nAfter parsing, we have ast node, which consists of some vectors."),Object(r.b)("p",null,"To use a graph data structures like ",Object(r.b)("inlineCode",{parentName:"p"},"petgraph::DiGraph"),", we need to destruct a vector and create a graph of nodes.\nAlso, as js code generator takes ast node, we have to reconstruct the nodes from graph structures.\nThis is an obvious overhead, and I wanted to avoid it."),Object(r.b)("p",null,"Some graph traversal are possible with vectors, so I decided to go without graph data structures."),Object(r.b)("hr",null),Object(r.b)("p",null,"Edit: ",Object(r.b)("inlineCode",{parentName:"p"},"swc")," uses dfs and bfs, so we can't say it does not do graph traversal"),Object(r.b)("p",null,"--"))}b.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(s,".").concat(u)]||b[u]||m[u]||r;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);