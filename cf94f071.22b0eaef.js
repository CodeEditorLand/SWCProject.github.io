(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(345)),c=["components"],s={title:"Changelog: swc v1.1.7",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2019/12/21/swc-1.1.7",source:"@site/blog/2019-12-21-swc-1.1.7.md",description:"Statement Expression type (512)",date:"2019-12-21T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.7",readingTime:.915,truncated:!1,prevItem:{title:"Changelog: swc v1.1.8",permalink:"/blog/2019/12/24/swc-1.1.8"},nextItem:{title:"Changelog: swc v1.1.6",permalink:"/blog/2019/12/14/swc-1.1.6"}},p=[{value:"Statement Expression type (#512)",id:"statement-expression-type-512",children:[]},{value:"Regex type (#511)",id:"regex-type-511",children:[]},{value:"Fixed parsing of const enum (#516)",id:"fixed-parsing-of-const-enum-516",children:[]},{value:"Fixed space bug of the jsx trnasform (#519)",id:"fixed-space-bug-of-the-jsx-trnasform-519",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"statement-expression-type-512"},"Statement Expression type (",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/issues/512"},"#512"),")"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NOTE:")," Although this is a technically breaking change, I decided not to bump major version as I don't think someone has created a plugin which depends on exact type of an expression statement."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"swc")," now stores expression statements as a new type named ExpressionStatement. This change is made to provide exact span of an expression statement."),Object(o.b)("h2",{id:"regex-type-511"},"Regex type (",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/issues/511"},"#511"),")"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NOTE:")," Although this is a technically breaking change, I decided not to bump major version as I don't think someone has created a plugin which depends on exact type of a regexp literal."),Object(o.b)("p",null,"Type of Regex.expression and Regex.flags is string, not StringLiteral. This matches regexp type from babel and typescript."),Object(o.b)("h2",{id:"fixed-parsing-of-const-enum-516"},"Fixed parsing of const enum (",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/issues/516"},"#516"),")"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"swc")," previously parsed const enum correctly on debug mode, but it has a bug in release mode. This is fixed and (currently) a const enum works as a normal enum."),Object(o.b)("h2",{id:"fixed-space-bug-of-the-jsx-trnasform-519"},"Fixed space bug of the jsx trnasform (",Object(o.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/519"},"#519"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"<div>Hello World</div>\n")),Object(o.b)("p",null,"is compiled as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'React.createElement("div", null, "Hello World");\n')),Object(o.b)("p",null,"instead of"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'React.createElement("div", null, "Hello World ");\n')))}u.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);