"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9861],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
			var r = n(7294);
			function i(e, t, n) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
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
			function s(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
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
									(i[n] = e[n]));
				}
				return i;
			}
			var p = r.createContext({}),
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						i = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = i,
						h = m["".concat(p, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = n.length,
						a = new Array(o);
					a[0] = m;
					var s = {};
					for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : i),
						(a[1] = s);
					for (var c = 2; c < o; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		658: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				i = n(3366),
				o = (n(7294), n(3905)),
				a = ["components"],
				s = {
					title: "Changelog: swc v1.2.107",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/11/07/swc-1.2.107",
					source: "@site/blog/2021-11-07-swc-1.2.107.md",
					title: "Changelog: swc v1.2.107",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/208?closed=1",
					date: "2021-11-07T00:00:00.000Z",
					formattedDate: "November 7, 2021",
					tags: [],
					readingTime: 3.575,
					truncated: !1,
					nextItem: {
						title: "Changelog: swc v1.2.106",
						permalink: "/blog/2021/10/30/swc-1.2.106",
					},
				},
				l = [
					{ value: "Improvements", id: "improvements", children: [] },
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "static blocks: Improved output",
								id: "static-blocks-improved-output",
								children: [],
							},
							{
								value: "typings: <code>es6</code> module (#2633)",
								id: "typings-es6-module-2633",
								children: [],
							},
							{
								value: "pass ordering (#2413)",
								id: "pass-ordering-2413",
								children: [],
							},
							{
								value: "minifier: pass limit (#2604, #2605)",
								id: "minifier-pass-limit-2604-2605",
								children: [],
							},
							{
								value: "minifier: Fix for <code>@ericblade/quagga2</code>",
								id: "minifier-fix-for-ericbladequagga2",
								children: [],
							},
							{
								value: "minifier: Fix for <code>murmur2</code>",
								id: "minifier-fix-for-murmur2",
								children: [],
							},
							{
								value: "minifier: Fix for <code>react-countup</code>",
								id: "minifier-fix-for-react-countup",
								children: [],
							},
							{
								value: "<code>this</code> in object properties in arrow",
								id: "this-in-object-properties-in-arrow",
								children: [],
							},
							{
								value: "typescript: Type in <code>export = Foo</code> (#2613)",
								id: "typescript-type-in-export--foo-2613",
								children: [],
							},
							{
								value: "<code>export { default as name }</code> (#2548)",
								id: "export--default-as-name--2548",
								children: [],
							},
							{
								value: "Order of imports (#2594)",
								id: "order-of-imports-2594",
								children: [],
							},
							{
								value: "Reassignment to exported functions (#2606)",
								id: "reassignment-to-exported-functions-2606",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, i.Z)(e, a);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/208?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/208?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "static-blocks-improved-output" },
						"static blocks: Improved output",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emitted",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Foo {\n  static #_ = 42;\n  static #_1 = 42;\n  static #_12 = (() => {\n    this.foo = this.#_;\n    this.bar = this.#_1;\n  })();\n}\n",
						),
					),
					(0, o.kt)("p", null, "for"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Foo {\n  static #_ = 42;\n  static #_1 = 42;\n  static {\n    this.foo = this.#_;\n    this.bar = this.#_1;\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Now ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Foo {\n  static #_ = 42;\n  static #_1 = 42;\n  static #_2 = (() => {\n    this.foo = this.#_;\n    this.bar = this.#_1;\n  })();\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/sosukesuzuki",
							},
							"@sosukesuzuki",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2652",
							},
							"#2652",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "typings-es6-module-2633" },
						"typings: ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "es6"),
						" module (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2633",
							},
							"#2633",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously there was a bug in type definitions which makes ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" angry about",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import * as swc from "@swc/core";\nswc.transformSync("", {\n  module: {\n    type: "es6", // When this file is TypeScript, the typechecker complains about this line\n  },\n});\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/magic-akari",
							},
							"@magic-akari",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2648",
							},
							"#2648",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "pass-ordering-2413" },
						"pass ordering (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2413",
							},
							"#2413",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"There was a bug in pass order. ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"destructuring",
						),
						" should be applied before ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						", but it was not.\nThis caused compile-time exception complaining about complex binding in catch clauses.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2629",
							},
							"#2629",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-pass-limit-2604-2605" },
						"minifier: pass limit (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2604",
							},
							"#2604",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2605",
							},
							"#2605",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the limit of minifier was 30, but it was too low.\nIt's now increased to 100.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2610",
							},
							"#2610",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-fix-for-ericbladequagga2" },
						"minifier: Fix for ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"@ericblade/quagga2",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"There was a bug in logic for determine if we negate a boolean.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2597",
							},
							"#2597",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-fix-for-murmur2" },
						"minifier: Fix for ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"murmur2",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"There was a bug in logic for inlining variable assignments.\nThis bug broke ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "murmur2"),
						" and ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@emotion/react",
						),
						" which depends on ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "murmur2"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2637",
							},
							"#2637",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-fix-for-react-countup" },
						"minifier: Fix for ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"react-countup",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the analyzer didn't treat assignment with operator as 'usage' and the optimizer dropped the assignment because the 'usage' count is 0.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2625",
							},
							"#2625",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "this-in-object-properties-in-arrow" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "this"),
						" in object properties in arrow",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						" finder of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" recursed into object properties, and broke code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const navigation = (path) => [\n  {\n    name: "Home",\n    href: `/`,\n    get current() {\n      return this.href === path;\n    },\n  },\n  {\n    name: "Dashboard",\n    href: `/dashboard`,\n    get current() {\n      return this.href === path;\n    },\n  },\n];\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"by replacing ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						" as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "_this"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2634",
							},
							"#2634",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-type-in-export--foo-2613" },
						"typescript: Type in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"export = Foo",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2613",
							},
							"#2613",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" didn't strip the types in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export =",
						),
						" out.\nAs a result, code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export = function (foo: string, bar: number): boolean {\n  return true;\n};\n",
						),
					),
					(0, o.kt)("p", null, "was broken."),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2623",
							},
							"#2623",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "export--default-as-name--2548" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"export { default as name }",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2548",
							},
							"#2548",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" might broke code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export { default as f } from "./f";\nexport * from "./f";\n\nexport { default as g } from "./g";\nexport * from "./g";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/JeremyGrieshop",
							},
							"@JeremyGrieshop",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2583",
							},
							"#2583",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "order-of-imports-2594" },
						"Order of imports (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "Ohttps://github.com/swc-project/swc/issues/2594",
							},
							"#2594",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could broke code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'export * from "./A";\nexport * from "./B";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"because it didn't preserve execution order of import/export statements.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2598",
							},
							"#2598",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "reassignment-to-exported-functions-2606" },
						"Reassignment to exported functions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2606",
							},
							"#2606",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emitted",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'export function warn() {\n  throw new Error("this should not be called");\n}\nexport const test = {};\nexport const test2 = {};\nObject.defineProperty(test, "warn", {\n  get: () => warn,\n  set: (v) => {\n    warn = v;\n  },\n});\nObject.defineProperty(test2, "work", {\n  get: () => warn,\n  set: (v) => {\n    warn = v;\n  },\n});\n',
						),
					),
					(0, o.kt)("p", null, "for"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export function warn() {\n  throw new Error("this should not be called");\n}\nexport const test = {};\nexport const test2 = {};\nObject.defineProperty(test, "warn", {\n  get: () => warn,\n  set: (v) => {\n    (warn as any) = v;\n  },\n});\nObject.defineProperty(test2, "work", {\n  get: () => warn,\n  set: (v) => {\n    warn = v;\n  },\n});\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which does not allow modifying ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "warn"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nexports.warn = warn;\nexports.test2 = exports.test = void 0;\nfunction warn() {\n  throw new Error("this should not be called");\n}\nconst test = {};\nexports.test = test;\nconst test2 = {};\nexports.test2 = test2;\nObject.defineProperty(test, "warn", {\n  get: () => warn,\n  set: (v) => {\n    exports.warn = warn = v;\n  },\n});\nObject.defineProperty(test2, "work", {\n  get: () => warn,\n  set: (v) => {\n    exports.warn = warn = v;\n  },\n});\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which allows modifying ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "warn"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2631",
							},
							"#2631",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
