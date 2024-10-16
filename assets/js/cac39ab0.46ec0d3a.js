"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[115],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => m });
			var r = n(7294);
			function a(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = n),
					e
				);
			}
			function o(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var p = r.createContext({}),
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = c(e.components);
					return r.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(n),
						m = a,
						h = d["".concat(p, ".").concat(m)] || d[m] || u[m] || o;
					return n
						? r.createElement(
								h,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, s({ ref: t }, l));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = d;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var c = 2; c < o; c++) s[c] = n[c];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		8224: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.58",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/05/21/swc-1.2.58",
					source: "@site/blog/2021-05-21-swc-1.2.58.md",
					title: "Changelog: swc v1.2.58",
					description: "Bugfixes",
					date: "2021-05-21T00:00:00.000Z",
					formattedDate: "May 21, 2021",
					tags: [],
					readingTime: 2.39,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.59",
						permalink: "/blog/2021/05/30/swc-1.2.59",
					},
					nextItem: {
						title: "Changelog: swc v1.2.57",
						permalink: "/blog/2021/05/11/swc-1.2.57",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "codegen: <code>\r\n</code> in template literals. (#1707)",
								id: "codegen-rn-in-template-literals-1707",
								children: [],
							},
							{
								value: "fixer: <code>null ?? (undefined &amp;&amp; true)</code>. (#1709)",
								id: "fixer-null--undefined--true-1709",
								children: [],
							},
							{
								value: "optimizer: Preserve optional chaining expressions. (#1688)",
								id: "optimizer-preserve-optional-chaining-expressions-1688",
								children: [],
							},
							{
								value: "optimizer: Side-effects of <code>[x, y][0]</code>. (#1674)",
								id: "optimizer-side-effects-of-x-y0-1674",
								children: [],
							},
							{
								value: "parser: Non-identifier names in getters. (#1671)",
								id: "parser-non-identifier-names-in-getters-1671",
								children: [],
							},
							{
								value: "parser: Class member named <code>declare</code> (#1671)",
								id: "parser-class-member-named-declare-1671",
								children: [],
							},
							{
								value: "compat: async-to-generator (#1721, #1722)",
								id: "compat-async-to-generator-1721-1722",
								children: [],
							},
							{
								value: "react: Remove panic call (#1683)",
								id: "react-remove-panic-call-1683",
								children: [],
							},
							{
								value: "parser: Type-only import equals (#1695)",
								id: "parser-type-only-import-equals-1695",
								children: [],
							},
							{
								value: "compat: Private methods (#1694, #1702, #1711)",
								id: "compat-private-methods-1694-1702-1711",
								children: [],
							},
							{
								value: "preset-env: Update compat data (#1704, #1719)",
								id: "preset-env-update-compat-data-1704-1719",
								children: [],
							},
							{
								value: "typescript: Preserved <code>module</code> context (#1698, #1706)",
								id: "typescript-preserved-module-context-1698-1706",
								children: [],
							},
							{
								value: "wasm-web: Support for bundlers (#1675)",
								id: "wasm-web-support-for-bundlers-1675",
								children: [],
							},
							{
								value: "api: Types for react pass. (#1720)",
								id: "api-types-for-react-pass-1720",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "codegen-rn-in-template-literals-1707" },
						"codegen: ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "\\r\\n"),
						" in template literals. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1707",
							},
							"#1707",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This happens only if your target is ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es2016"),
						" or upper.\nThis issue is reported via ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/10282",
							},
							"a deno issue",
						),
						", and",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const content1 = `first line\\r\\nsecond line\\r\\nthird line`;\n\nconst content2 = `first line\nsecond line\nthird line`;\n\nconsole.log({ content1, content2 });\n",
						),
					),
					(0, o.kt)("p", null, "now works properly."),
					(0, o.kt)(
						"h3",
						{ id: "fixer-null--undefined--true-1709" },
						"fixer: ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"null ?? (undefined && true)",
						),
						". (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1709",
							},
							"#1709",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This issue is reported via ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/10668",
							},
							"a deno issue",
						),
						".\nThis is fixed by explicitly handling ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"a ?? (b && c)",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{
							id: "optimizer-preserve-optional-chaining-expressions-1688",
						},
						"optimizer: Preserve optional chaining expressions. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1688",
							},
							"#1688",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"({ notafunction: null }?.notafunction?.());\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"({ notafunction: null }?.notafunction());\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"({ notafunction: null }.notafunction?.());\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"swc preivously didn't handle optional chaining expresison propely and had break the codes above.\nIt's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "optimizer-side-effects-of-x-y0-1674" },
						"optimizer: Side-effects of ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"[x, y][0]",
						),
						". (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1674",
							},
							"#1674",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the optimizer of swc had a bug which breaks code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'let foo = "info";\n\nvar bar = [foo, (foo = "other")][0];\n\nconsole.log(foo == "other");\nconsole.log(bar == "info");\n',
						),
					),
					(0, o.kt)("p", null, "It's now fixed."),
					(0, o.kt)(
						"h3",
						{ id: "parser-non-identifier-names-in-getters-1671" },
						"parser: Non-identifier names in getters. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1671",
							},
							"#1671",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const thing = {\n  get "a-b"() {\n    return "abc";\n  },\n};\nconsole.log(thing["a-b"]);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Due to a bug, swc previously faild to parse the code above.\nIt's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-class-member-named-declare-1671" },
						"parser: Class member named ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"declare",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1671",
							},
							"#1671",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A {\n  private declare() {}\n}\n",
						),
					),
					(0, o.kt)("p", null, "The code above now works properly."),
					(0, o.kt)(
						"h3",
						{ id: "compat-async-to-generator-1721-1722" },
						"compat: async-to-generator (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1721",
							},
							"#1721",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1722",
							},
							"#1722",
						),
						")",
					),
					(0, o.kt)("p", null, "swc now compiles"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"async function* lol() {\n  yield 1;\n  yield 2;\n}\n\nasync function main() {\n  for await (const x of lol()) {\n    console.log(x);\n  }\n}\nmain();\n",
						),
					),
					(0, o.kt)("p", null, "and"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"(async function main() {\n  console.log(1);\n})();\n",
						),
					),
					(0, o.kt)("p", null, "correctly."),
					(0, o.kt)(
						"h3",
						{ id: "react-remove-panic-call-1683" },
						"react: Remove panic call (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1683",
							},
							"#1683",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const config = {\n  test: /\\.[jt]sx?$/i,\n  exclude: /[\\\\/]node_modules[\\\\/]/,\n  use: [\n    {\n      loader: "swc-loader",\n      options: {\n        jsc: {\n          target: "es5",\n          parser: {\n            tsx: true,\n            decorators: true,\n            syntax: "typescript",\n            dynamicImport: true,\n          },\n          transform: {\n            react: {\n              runtime: "automatic",\n            },\n          },\n          externalHelpers: true,\n        },\n      },\n    },\n  ],\n};\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"swc had a bug in new jsx pass which resulted in an exception thrown.\nIt's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-type-only-import-equals-1695" },
						"parser: Type-only import equals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1695",
							},
							"#1695",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import type React = require("react");\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This is valid syntax since typescript 4.2, but swc didn't support it.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plance",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "compat-private-methods-1694-1702-1711" },
						"compat: Private methods (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1694",
							},
							"#1694",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1702",
							},
							"#1702",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1711",
							},
							"#1711",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously swc had a bug related to private class methods.",
					),
					(0, o.kt)(
						"h3",
						{ id: "preset-env-update-compat-data-1704-1719" },
						"preset-env: Update compat data (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1704",
							},
							"#1704",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1719",
							},
							"#1719",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The compatibility data was outdated.",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-preserved-module-context-1698-1706" },
						"typescript: Preserved ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "module"),
						" context (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1698",
							},
							"#1698",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1706",
							},
							"#1706",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export {};\n",
						),
					),
					(0, o.kt)("p", null, "for"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export type Foo = number;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"while other tools do not preserve the information that the file is module.",
					),
					(0, o.kt)(
						"p",
						null,
						"Because ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" prefers the bahavior of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" over the one of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "babel"),
						", swc now emits ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export {}",
						),
						" for type-only modules.",
					),
					(0, o.kt)(
						"h3",
						{ id: "wasm-web-support-for-bundlers-1675" },
						"wasm-web: Support for bundlers (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1675",
							},
							"#1675",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm-web",
						),
						" package now use correct command while publishing so it has correct data in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "api-types-for-react-pass-1720" },
						"api: Types for react pass. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1720",
							},
							"#1720",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
