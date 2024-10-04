"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4612],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
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
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(
						l.Provider,
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
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(n),
						m = a,
						f = d["".concat(l, ".").concat(m)] || d[m] || u[m] || o;
					return n
						? r.createElement(
								f,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, s({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
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
		9533: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.36",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2020/10/06/swc-1.2.36",
					source: "@site/blog/2020-10-06-swc-1.2.36.md",
					title: "Changelog: swc v1.2.36",
					description: "Bugfixes",
					date: "2020-10-06T00:00:00.000Z",
					formattedDate: "October 6, 2020",
					tags: [],
					readingTime: 1.75,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.37",
						permalink: "/blog/2020/10/29/swc-1.2.37",
					},
					nextItem: {
						title: "Changelog: swc v1.2.35",
						permalink: "/blog/2020/10/04/swc-1.2.35",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "export * as ns (#1142)",
								id: "export--as-ns-1142",
								children: [],
							},
							{
								value: "conditional expression in await (#1133)",
								id: "conditional-expression-in-await-1133",
								children: [],
							},
							{
								value: "scope of optional chaining (#1136)",
								id: "scope-of-optional-chaining-1136",
								children: [],
							},
							{
								value: "computed keys in object literal (#1140)",
								id: "computed-keys-in-object-literal-1140",
								children: [],
							},
							{
								value: "bundler: deglob imports correctly (#1139)",
								id: "bundler-deglob-imports-correctly-1139",
								children: [],
							},
							{
								value: "bundler: aliased imports (#1138)",
								id: "bundler-aliased-imports-1138",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "export--as-ns-1142" },
						"export ",
						"*",
						" as ns (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1142",
							},
							"#1142",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now handle ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * as ns from 'foo';",
						),
						" by default, if you are targeting < ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es2020"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Also, spack and swc_bundler now supports it directly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "conditional-expression-in-await-1133" },
						"conditional expression in await (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1133",
							},
							"#1133",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" errornously removed parenthesis of conditional expression in await expressions.",
					),
					(0, o.kt)(
						"h3",
						{ id: "scope-of-optional-chaining-1136" },
						"scope of optional chaining (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1136",
							},
							"#1136",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled the code below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const PATCHES = new Map();\n\nconst ident = "foo";\nconst patch = PATCHES.get(ident)?.();\n',
						),
					),
					(0, o.kt)("p", null, "This was compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var _obj = PATCHES.get(ident),\n  ref;\nconst PATCHES = new Map();\nconst ident = "foo";\nconst patch = (ref = _obj) === null || ref === void 0 ? void 0 : ref.call(_obj);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Which results in a runtime error.\nThis is caused by sharing variable buffer.\nIt's fixed by using two variable buffers.",
					),
					(0, o.kt)(
						"h3",
						{ id: "computed-keys-in-object-literal-1140" },
						"computed keys in object literal (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1140",
							},
							"#1140",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The hygiene pass of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" had a bug. The bug was that it does not visit ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "key"),
						" in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ [key]: value }",
						),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"This is fixed, and code like below works properly.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const categories = [{ key: "apple" }, { key: "banana" }, { key: "strawberry" }];\n\nconst item = "some item";\n\nconst catNames = categories.reduce((a, item) => {\n  return { ...a, [item.key.toString()]: item };\n}, {});\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-deglob-imports-correctly-1139" },
						"bundler: deglob imports correctly (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1139",
							},
							"#1139",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import * as circular2 from "./circular2.ts";\n\nexport function f1(): void {\n  console.log("f1");\n}\n\ncircular2.f2();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, the code above was bundled as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'export function f1() {\n  console.log("f1");\n}\ncircular2.f2();\ncircular1.f1();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is clearly wrong. It's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-aliased-imports-1138" },
						"bundler: aliased imports (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1138",
							},
							"#1138",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This bug occurs if nested export is mixed with aliased import.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "a.ts"),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export const a = "a";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "l.ts"),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export { a } from "./a.ts";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"entry.ts",
						),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { a as defaultA } from "./l.ts";\n\nconst o: { a?: string } = {};\n\nconst { a = defaultA } = o;\n\nconsole.log(a);\n',
						),
					),
					(0, o.kt)("p", null, "This resulted in"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const o = {};\nconst { a = defaultA } = o;\nconsole.log(a);\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is wrong. It's now fixed and swc_bundler now supports quite complex imports.",
					),
					(0, o.kt)("hr", null),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
