"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4327],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => m });
			var a = n(7294);
			function r(e, t, n) {
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
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								r(e, t, n[t]);
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
					a,
					r = (function (e, t) {
						if (null == e) return {};
						var n,
							a,
							r = {},
							o = Object.keys(e);
						for (a = 0; a < o.length; a++)
							(n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
						return r;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (a = 0; a < o.length; a++)
						(n = o[a]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(r[n] = e[n]));
				}
				return r;
			}
			var s = a.createContext({}),
				p = function (e) {
					var t = a.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = p(e.components);
					return a.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return a.createElement(a.Fragment, {}, t);
					},
				},
				d = a.forwardRef(function (e, t) {
					var n = e.components,
						r = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						c = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						m = r,
						h = d["".concat(s, ".").concat(m)] || d[m] || u[m] || o;
					return n
						? a.createElement(
								h,
								l(l({ ref: t }, c), {}, { components: n }),
							)
						: a.createElement(h, l({ ref: t }, c));
				});
			function m(e, t) {
				var n = arguments,
					r = t && t.mdxType;
				if ("string" == typeof e || r) {
					var o = n.length,
						l = new Array(o);
					l[0] = d;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : r),
						(l[1] = i);
					for (var p = 2; p < o; p++) l[p] = n[p];
					return a.createElement.apply(null, l);
				}
				return a.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		1722: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => c,
					default: () => d,
				});
			var a = n(7462),
				r = n(3366),
				o = (n(7294), n(3905)),
				l = ["components"],
				i = {
					title: "swc v1.2.11: Fix for almost all typescript bugs",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/08/02/swc-1.2.11",
					source: "@site/blog/2020-08-02-swc-1.2.11.md",
					title: "swc v1.2.11: Fix for almost all typescript bugs",
					description: "Bugfixes",
					date: "2020-08-02T00:00:00.000Z",
					formattedDate: "August 2, 2020",
					tags: [],
					readingTime: 2.435,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.12",
						permalink: "/blog/2020/08/06/swc-1.2.12",
					},
					nextItem: {
						title: "Changelog: swc v1.2.10",
						permalink: "/blog/2020/07/31/swc-1.2.10",
					},
				},
				c = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "super statements (#918)",
								id: "super-statements-918",
								children: [],
							},
							{
								value: "key: string: Type is stripped out properly (#922)",
								id: "key-string-type-is-stripped-out-properly-922",
								children: [],
							},
							{
								value: "binding identifier named await (#924)",
								id: "binding-identifier-named-await-924",
								children: [],
							},
							{
								value: "export declare class (#924)",
								id: "export-declare-class-924",
								children: [],
							},
							{
								value: "declare var (#924)",
								id: "declare-var-924",
								children: [],
							},
							{
								value: "conditional enum declarations in if (#924)",
								id: "conditional-enum-declarations-in-if-924",
								children: [],
							},
							{
								value: "sequence expression in key (#924)",
								id: "sequence-expression-in-key-924",
								children: [],
							},
							{
								value: "await in heritage clause (#924)",
								id: "await-in-heritage-clause-924",
								children: [],
							},
							{
								value: "optional array / object pattern (#924)",
								id: "optional-array--object-pattern-924",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var t = e.components,
					n = (0, r.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "super-statements-918" },
						"super statements (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/918",
							},
							"#918",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", no statement will be injected before ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "super()"),
						". The patch affects code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class BadRequestError extends Error {\n  constructor(public readonly message: string) {\n    super(message);\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"by making the call to ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"_definedProperty",
						),
						" generated because of ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"public readonly message",
						),
						" to be injected after ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"super(message);",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "key-string-type-is-stripped-out-properly-922" },
						"[key: string]",
						": Type is stripped out properly (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/922",
							},
							"#922",
						),
						")",
					),
					(0, o.kt)("p", null, "Previously, in the code below,"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export abstract class Kernel {\n  /**\n   * Multiple variables that will be defined during runtime,\n   * holding the values of the commands passed from the user\n   */\n  [key: string]: any;\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"[key: string]: any;",
						),
						" was not stripped out properly. This is reported by the deno team, and the bug makes me look for a way to find typescript-related bugs, and as a result, ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc@v1.2.11",
						),
						" is full of typescript related patches. I used tests from the official typescript repository to ensure generated ecmascript files are valid.",
					),
					(0, o.kt)(
						"h3",
						{ id: "binding-identifier-named-await-924" },
						"binding identifier named await (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I think this will not affect real-world codes, but it's fixed anyway.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo(await = await) {\n  // ???\n}\n",
						),
					),
					(0, o.kt)("p", null, "was incorrectly parsed as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo(this = await) {\n  // ???\n}\n",
						),
					),
					(0, o.kt)("p", null, "but it's now fixed."),
					(0, o.kt)(
						"h3",
						{ id: "export-declare-class-924" },
						"export declare class (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Because ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "declare"),
						" is typically used in .d.ts files, it will not affect many codes. Code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export declare class Foo {}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"should be compiled out, and it is, starting from ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc@v1.2.11",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "declare-var-924" },
						"declare var (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I expect this patch to affect some of codebases.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"declare var a: string;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "a"),
						" in the code above is now removed completely.",
					),
					(0, o.kt)(
						"h3",
						{ id: "conditional-enum-declarations-in-if-924" },
						"conditional enum declarations in if (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Just don't do this. Although ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" handles it, it's not the right thing to do.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"if (2) enum A {}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "sequence-expression-in-key-924" },
						"sequence expression in key (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Again, don't do this. You can does not mean you should. Anyway, because ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" tries to follow the spec as much as possible, I added some code to handle the code below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'class C extends Base {\n  [(super(), "prop")]() {}\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Note: The bug will not affect your code if you are targeting ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es3"),
						" or ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es5"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "await-in-heritage-clause-924" },
						"await in heritage clause (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Accoarding to the ecmascript spec, the code below is valid.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A extends (await B) {}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Note: The bug will not affect your code if you are targeting ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es3"),
						" or ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es5"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "optional-array--object-pattern-924" },
						"optional array / object pattern (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/924",
							},
							"#924",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "?"),
						" in the code below was problematic.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo([a, b, c]?) {}\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo({ a, b, c }?) {}\n",
						),
					),
					(0, o.kt)("p", null, "They should both be compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo([a, b, c]) {}\n",
						),
					),
					(0, o.kt)("p", null, "but they were compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo([a, b, c]?) {}\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo({ a, b, c }?) {}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"respectively, and the typescript code handler is fixed. If you were using ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es3"),
						" or ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es5"),
						" as a target, the bug will not affect you.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
