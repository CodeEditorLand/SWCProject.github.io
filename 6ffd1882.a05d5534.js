(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),s=(n(0),n(345)),c=["components"],o={title:"Changelog: swc v1.1.13",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/01/17/swc-1.1.13",source:"@site/blog/2020-01-17-swc-1.1.13.md",description:"Bugfixes",date:"2020-01-17T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.13",readingTime:1.45,truncated:!1,prevItem:{title:"Changelog: swc v1.1.14",permalink:"/blog/2020/01/23/swc-1.1.14"},nextItem:{title:"Changelog: swc v1.1.12",permalink:"/blog/2020/01/08/swc-1.1.12"}},p=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Class methods (#579)",id:"class-methods-579",children:[]},{value:"jsx container (#584)",id:"jsx-container-584",children:[]},{value:"hygiene (#591)",id:"hygiene-591",children:[]}]},{value:"New features",id:"new-features",children:[{value:"TypePredicate.asserts (#567)",id:"typepredicateasserts-567",children:[]}]},{value:"Span improvements",id:"span-improvements",children:[{value:"TypePredicate (#580)",id:"typepredicate-580",children:[]},{value:"Class (#581)",id:"class-581",children:[]},{value:"Jsx (#582)",id:"jsx-582",children:[]}]}],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(s.b)("h3",{id:"class-methods-579"},"Class methods (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/579"},"#579"),")"),Object(s.b)("p",null,"There was a bug of swc that identifiers in the body of class methods are not handled by resolver pass. It results in ",Object(s.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/issues/578"},"a bug")," and it's now fixed."),Object(s.b)("h3",{id:"jsx-container-584"},"jsx container (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/584"},"#584"),")"),Object(s.b)("p",null,"Previously you cannot get the span of ",Object(s.b)("inlineCode",{parentName:"p"},"{4}"),". Instead, you can only get span of ",Object(s.b)("inlineCode",{parentName:"p"},"4"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"const t = <test other={4} />;\n")),Object(s.b)("p",null,"This is fixed by ",Object(s.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/pull/592"},"a pr"),", and you can now get the span of jsx expression container."),Object(s.b)("h3",{id:"hygiene-591"},"hygiene (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/591"},"#591"),")"),Object(s.b)("p",null,"Initialization of exported variable is now properly handled. Previously,"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'export class Example {\n  @foo() bar = "1";\n  @foo() baz = "2";\n}\n')),Object(s.b)("p",null,"was miscompiled, while"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'class Example {\n  @foo() bar = "1";\n  @foo() baz = "2";\n}\n')),Object(s.b)("p",null,"is compiled correctly (and tested). I added some tests to prevent regression."),Object(s.b)("h2",{id:"new-features"},"New features"),Object(s.b)("h3",{id:"typepredicateasserts-567"},"TypePredicate.asserts (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/567"},"#567"),")"),Object(s.b)("p",null,"Starting with v1.1.13, ",Object(s.b)("inlineCode",{parentName:"p"},"swc")," can parse asserts type predicate."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'function isString(x: unknown): asserts x is string {\n  if (typeof x !== "string") throw new Error("Not a string.");\n}\n')),Object(s.b)("p",null,"This is a feature of typescript 3.7. Also note that type is changed slightly."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'export interface TsTypePredicate extends Node, HasSpan {\n  type: "TsTypePredicate";\n\n  // This is added\n  asserts: boolean;\n\n  paramName: TsThisTypeOrIdent;\n  typeAnnotation: TsTypeAnnotation;\n}\n')),Object(s.b)("h2",{id:"span-improvements"},"Span improvements"),Object(s.b)("p",null,"Thanks to ",Object(s.b)("a",{parentName:"p",href:"https://github.com/dsherret"},"@dsherret"),", there are more span improvements."),Object(s.b)("h3",{id:"typepredicate-580"},"TypePredicate (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/580"},"#580"),")"),Object(s.b)("p",null,"Previously starts of span of some type predicates started too early and it's now fixed so that the span points type predicate correctly."),Object(s.b)("h3",{id:"class-581"},"Class (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/581"},"#581"),")"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Spans of class members and classes should include decorators."),Object(s.b)("li",{parentName:"ul"},"Fix hi position for class parameter properties."),Object(s.b)("li",{parentName:"ul"},"Fix span of members with accessibility.")),Object(s.b)("h3",{id:"jsx-582"},"Jsx (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/582"},"#582"),")"),Object(s.b)("p",null,"Span of jsx opening element, closing element, spread child, and expression containers are fixed."))}b.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||s;return n?a.a.createElement(h,o(o({ref:t},p),{},{components:n})):a.a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<s;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);