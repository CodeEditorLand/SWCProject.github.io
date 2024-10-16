"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6898],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
			var n = r(7294);
			function o(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = r),
					e
				);
			}
			function a(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var c = n.createContext({}),
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = p(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(r),
						h = o,
						m = d["".concat(c, ".").concat(h)] || d[h] || u[h] || a;
					return r
						? n.createElement(
								m,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(m, s({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						s = new Array(a);
					s[0] = d;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(s[1] = i);
					for (var p = 2; p < a; p++) s[p] = r[p];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		6716: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.64",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/07/14/swc-1.2.64",
					source: "@site/blog/2021-07-14-swc-1.2.64.md",
					title: "Changelog: swc v1.2.64",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/167?closed=1",
					date: "2021-07-14T00:00:00.000Z",
					formattedDate: "July 14, 2021",
					tags: [],
					readingTime: 2.185,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.65",
						permalink: "/blog/2021/07/18/swc-1.2.65",
					},
					nextItem: {
						title: "Changelog: swc v1.2.63",
						permalink: "/blog/2021/07/05/swc-1.2.63",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Optional chaining (#1882)",
								id: "optional-chaining-1882",
								children: [],
							},
							{
								value: "Visitor bug (#1886)",
								id: "visitor-bug-1886",
								children: [],
							},
							{
								value: "codegen: private static properties (#1898)",
								id: "codegen-private-static-properties-1898",
								children: [],
							},
							{
								value: "Export default function with async (#1799)",
								id: "export-default-function-with-async-1799",
								children: [],
							},
							{
								value: "optional chaining with single-line arrow (#1836)",
								id: "optional-chaining-with-single-line-arrow-1836",
								children: [],
							},
							{
								value: "decorator (#1278)",
								id: "decorator-1278",
								children: [],
							},
							{
								value: "regenerator: Exeception (#1892)",
								id: "regenerator-exeception-1892",
								children: [],
							},
							{
								value: "regenerator: Respect module config (#1641)",
								id: "regenerator-respect-module-config-1641",
								children: [],
							},
							{
								value: "regenerator: unused codes (#1687)",
								id: "regenerator-unused-codes-1687",
								children: [],
							},
							{
								value: "typeof undefined (#1843)",
								id: "typeof-undefined-1843",
								children: [],
							},
							{
								value: "proper helpers (#1682)",
								id: "proper-helpers-1682",
								children: [],
							},
							{
								value: "export * with named overrides (#1714)",
								id: "export--with-named-overrides-1714",
								children: [],
							},
							{
								value: "decorators for class properties (#1913)",
								id: "decorators-for-class-properties-1913",
								children: [],
							},
							{
								value: "await expressions as callee",
								id: "await-expressions-as-callee",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/167?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/167?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "optional-chaining-1882" },
						"Optional chaining (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1882",
							},
							"#1882",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc had a bug related to nested optional chaining expressions.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const button = renderedView.find(LoadingButton);\nbutton?.prop('onClick')?.({} as any);\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1899",
							},
							"#1899",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "visitor-bug-1886" },
						"Visitor bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1886",
							},
							"#1886",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"The type definition for object patterns were wrong and it's fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1900",
							},
							"#1900",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "codegen-private-static-properties-1898" },
						"codegen: private static properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1898",
							},
							"#1898",
						),
						")",
					),
					(0, a.kt)(
						"h3",
						{ id: "export-default-function-with-async-1799" },
						"Export default function with async (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1799",
							},
							"#1799",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously if you target old version and use async function in a named ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export default function",
						),
						"-s, swc didn't create a variable with same name.",
					),
					(0, a.kt)("p", null, "Affected code looks like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import React from "react";\n\nexport default function Foo() {\n  return (\n    <div\n      onClick={async (e) => {\n        await doSomething();\n      }}\n    ></div>\n  );\n}\n\nFoo.displayName = "Foo";\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1900",
							},
							"#1900",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "optional-chaining-with-single-line-arrow-1836" },
						"optional chaining with single-line arrow (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1836",
							},
							"#1836",
						),
						")",
					),
					(0, a.kt)("p", null, "Previously code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function bug() {\n  const arrowFn = (arg) => this.object[arg]?.();\n}\n\nbug();\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"was broken because variables are wrongly injected.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1900",
							},
							"#1900",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "decorator-1278" },
						"decorator (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1278",
							},
							"#1278",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"swc now initializes decorators right before they are applied.",
					),
					(0, a.kt)(
						"p",
						null,
						"This change allows referencing the class from decorator.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'type Klass<T = any> = { new (...args: any[]): T };\nfunction MyDecorator(klass: Klass): PropertyDecorator {\n  return () => {\n    // do something\n    console.log(klass);\n  };\n}\n\nclass MyClass {\n  @MyDecorator(MyClass) prop: "";\n}\n\nconsole.log(new MyClass());\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1905",
							},
							"#1905",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "regenerator-exeception-1892" },
						"regenerator: Exeception (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1892",
							},
							"#1892",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Old versions of swc incorrectly throwed an error for a specific code.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1906",
							},
							"#1906",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "regenerator-respect-module-config-1641" },
						"regenerator: Respect module config (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1641",
							},
							"#1641",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits dependency for ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator-runtime",
						),
						" as es import statement, which is technically wrong but works because bundlers handle it.",
					),
					(0, a.kt)(
						"h3",
						{ id: "regenerator-unused-codes-1687" },
						"regenerator: unused codes (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1687",
							},
							"#1687",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emitted useless codes.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1909",
							},
							"#1909",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typeof-undefined-1843" },
						"typeof undefined (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1843",
							},
							"#1843",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break a program if it uses ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "typeof"),
						" in specific way.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1909",
							},
							"#1909",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "proper-helpers-1682" },
						"proper helpers (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1682",
							},
							"#1682",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously module transforms were too naive and as a result could break some code.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1909",
							},
							"#1909",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "export--with-named-overrides-1714" },
						"export ",
						"*",
						" with named overrides (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1714",
							},
							"#1714",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"swc now allows overriding ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export *",
						),
						" with named exports.",
					),
					(0, a.kt)("p", null, "Code like below will work properly."),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { customRender } from "./customRender";\n\n// re-export everything\nexport * from "@testing-library/react";\n\n// override render method\nexport { customRender as render };\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "decorators-for-class-properties-1913" },
						"decorators for class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1913",
							},
							"#1913",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previsouly ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { action } from "mobx";\n\nclass Store {\n  constructor() {\n    this.doSomething();\n  }\n\n  @action\n  doSomething = () => {\n    console.log("run");\n  };\n}\n\nconst store = new Store();\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1914",
							},
							"#1914",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "await-expressions-as-callee" },
						"await expressions as callee",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc could break code like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"new (await foo())();\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1919",
							},
							"#1919",
						),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
