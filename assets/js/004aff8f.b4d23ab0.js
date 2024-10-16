"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1797],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => u });
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
			function p(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? p(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: p(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							p = Object.keys(e);
						for (r = 0; r < p.length; r++)
							(n = p[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var p = Object.getOwnPropertySymbols(e);
					for (r = 0; r < p.length; r++)
						(n = p[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var s = r.createContext({}),
				o = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = o(e.components);
					return r.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				h = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						p = e.originalType,
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						h = o(n),
						u = a,
						d = h["".concat(s, ".").concat(u)] || h[u] || m[u] || p;
					return n
						? r.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, i({ ref: t }, l));
				});
			function u(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var p = n.length,
						i = new Array(p);
					i[0] = h;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(i[1] = c);
					for (var o = 2; o < p; o++) i[o] = n[o];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			h.displayName = "MDXCreateElement";
		},
		8595: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => o,
					toc: () => l,
					default: () => h,
				});
			var r = n(7462),
				a = n(3366),
				p = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.2.96",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				o = {
					permalink: "/blog/2021/10/14/swc-1.2.96",
					source: "@site/blog/2021-10-14-swc-1.2.96.md",
					title: "Changelog: swc v1.2.96",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/197?closed=1",
					date: "2021-10-14T00:00:00.000Z",
					formattedDate: "October 14, 2021",
					tags: [],
					readingTime: 1.31,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.97",
						permalink: "/blog/2021/10/15/swc-1.2.97",
					},
					nextItem: {
						title: "Changelog: swc v1.2.95",
						permalink: "/blog/2021/10/09/swc-1.2.95",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Better performance",
								id: "better-performance",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "parser: Parameter named <code>async</code>",
								id: "parser-parameter-named-async",
								children: [],
							},
							{
								value: "minifier: Callables",
								id: "minifier-callables",
								children: [],
							},
							{
								value: "codegen: Comments",
								id: "codegen-comments",
								children: [],
							},
							{
								value: "react: Attribute texts (#2351)",
								id: "react-attribute-texts-2351",
								children: [],
							},
							{
								value: "minifier: Inlining",
								id: "minifier-inlining",
								children: [],
							},
							{
								value: "codegen: Sourcemap",
								id: "codegen-sourcemap",
								children: [],
							},
							{
								value: "parser: ASI in class",
								id: "parser-asi-in-class",
								children: [],
							},
							{
								value: "pass ordering (#2418)",
								id: "pass-ordering-2418",
								children: [],
							},
							{
								value: "react: Escape of html entitires (#2303)",
								id: "react-escape-of-html-entitires-2303",
								children: [],
							},
							{
								value: "<code>hygiene</code>: <code>var</code> handling",
								id: "hygiene-var-handling",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function h(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, p.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, p.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/197?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/197?closed=1",
						),
					),
					(0, p.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, p.kt)(
						"h3",
						{ id: "better-performance" },
						"Better performance",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses faster hash algorithm, namely ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "ahash"),
						".\nAlso, the bundler now performs tree shaking in parallel, and there are more operations which become parallel. Stay tuned!",
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2384",
							},
							"#2384",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2392",
							},
							"#2392",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2394",
							},
							"#2394",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2411",
							},
							"#2411",
						),
						".",
					),
					(0, p.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, p.kt)(
						"h3",
						{ id: "parser-parameter-named-async" },
						"parser: Parameter named ",
						(0, p.kt)("inlineCode", { parentName: "h3" }, "async"),
					),
					(0, p.kt)(
						"p",
						null,
						"You can now use ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "async"),
						" as a binding identifier in more places.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2386",
							},
							"#2386",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2395",
							},
							"#2395",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2399",
							},
							"@2399",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "minifier-callables" },
						"minifier: Callables",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sequences",
						),
						" pass now considers if the next expression is callable type, e.g. an arrow expression or a function expression.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2379",
							},
							"#2379",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "codegen-comments" },
						"codegen: Comments",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now check for comments deeply while emitting return statements.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2396",
							},
							"#2396",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "react-attribute-texts-2351" },
						"react: Attribute texts (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2351",
							},
							"#2351",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles text in jsx atributes properly.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2396",
							},
							"#2396",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "minifier-inlining" },
						"minifier: Inlining",
					),
					(0, p.kt)(
						"p",
						null,
						"The minifier of ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now inline variables properly.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2397",
							},
							"#2379",
						),
						", ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2412",
							},
							"#2412",
						),
						", and ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2424",
							},
							"#2424",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "codegen-sourcemap" },
						"codegen: Sourcemap",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now generates proper sourcemap entry for ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "import"),
						" and ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "export"),
						".",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2397",
							},
							"#2379",
						),
					),
					(0, p.kt)(
						"h3",
						{ id: "parser-asi-in-class" },
						"parser: ASI in class",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now parses",
					),
					(0, p.kt)(
						"pre",
						null,
						(0, p.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class C {\n  get // ignore this. comment to prevent foramtting\n  x() {\n    return 0;\n  }\n\n  set // ignore this. comment to prevent foramtting\n  x(value) {}\n}\n",
						),
					),
					(0, p.kt)("p", null, "as a class with two members."),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2409",
							},
							"#2409",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "pass-ordering-2418" },
						"pass ordering (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2418",
							},
							"#2418",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						"There was a regresssion related to pass ordering.",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2422",
							},
							"#2422",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2427",
							},
							"#2427",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "react-escape-of-html-entitires-2303" },
						"react: Escape of html entitires (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2303",
							},
							"#2303",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/bojan88",
							},
							"@bojan88",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2419",
							},
							"#2419",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "hygiene-var-handling" },
						(0, p.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
						": ",
						(0, p.kt)("inlineCode", { parentName: "h3" }, "var"),
						" handling",
					),
					(0, p.kt)(
						"p",
						null,
						"Now ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						", the variable renaming pass, understand the scoping of ",
						(0, p.kt)("inlineCode", { parentName: "p" }, "var"),
						".",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2421",
							},
							"#2421",
						),
						".",
					),
				);
			}
			h.isMDXComponent = !0;
		},
	},
]);
