"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3764],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => i, kt: () => d });
			var r = n(7294);
			function s(e, t, n) {
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
								s(e, t, n[t]);
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
			function p(e, t) {
				if (null == e) return {};
				var n,
					r,
					s = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							s = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s;
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
									(s[n] = e[n]));
				}
				return s;
			}
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				i = function (e) {
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						s = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						i = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = s,
						f = m["".concat(l, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								f,
								a(a({ ref: t }, i), {}, { components: n }),
							)
						: r.createElement(f, a({ ref: t }, i));
				});
			function d(e, t) {
				var n = arguments,
					s = t && t.mdxType;
				if ("string" == typeof e || s) {
					var o = n.length,
						a = new Array(o);
					a[0] = m;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : s),
						(a[1] = p);
					for (var c = 2; c < o; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		1331: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => p,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => i,
					default: () => m,
				});
			var r = n(7462),
				s = n(3366),
				o = (n(7294), n(3905)),
				a = ["components"],
				p = {
					title: "Changelog: swc v1.1.10: preset-env",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2019/12/29/swc-1.1.10",
					source: "@site/blog/2019-12-29-swc-1.1.10.md",
					title: "Changelog: swc v1.1.10: preset-env",
					description: "preset-env (#421)",
					date: "2019-12-29T00:00:00.000Z",
					formattedDate: "December 29, 2019",
					tags: [],
					readingTime: 1.19,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.11",
						permalink: "/blog/2020/01/02/swc-1.1.11",
					},
					nextItem: {
						title: "Changelog: swc v1.1.9",
						permalink: "/blog/2019/12/25/swc-1.1.9",
					},
				},
				i = [
					{
						value: "preset-env (#421)",
						id: "preset-env-421",
						children: [],
					},
					{
						value: "parser bugfixes",
						id: "parser-bugfixes",
						children: [
							{
								value: "span of from clauses (#535)",
								id: "span-of-from-clauses-535",
								children: [],
							},
							{
								value: "declare (#538)",
								id: "declare-538",
								children: [],
							},
							{
								value: "comments (#541)",
								id: "comments-541",
								children: [],
							},
						],
					},
				],
				u = { toc: i };
			function m(e) {
				var t = e.components,
					n = (0, s.Z)(e, a);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "preset-env-421" },
						"preset-env (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/421",
							},
							"#421",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" gets ability to detect required transforms and polyfills based on target. Target includes browser with specific version (",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							'"chrome 49"',
						),
						"), or complex query (",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							'"last 2 versions"',
						),
						").",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "mode": "entry",\n    "targets": "last 2 versions",\n    "coreJs": 3\n  }\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"would enable transformations and inject polyfills to run code on last 2 versions of browsers and node js.",
					),
					(0, o.kt)(
						"p",
						null,
						"If you want to use existing browserslist config, you can just omit ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "targets"),
						".",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "mode": "entry",\n    "coreJs": 3\n  }\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This will follow ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/browserslist/browserslist#queries",
							},
							"browserslist queries",
						),
						" of the project.",
					),
					(0, o.kt)(
						"p",
						null,
						"See ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/preset-env#options",
							},
							"docs",
						),
						" for more information.",
					),
					(0, o.kt)(
						"h2",
						{ id: "parser-bugfixes" },
						"parser bugfixes",
					),
					(0, o.kt)(
						"h3",
						{ id: "span-of-from-clauses-535" },
						"span of from clauses (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/535",
							},
							"#535",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Span of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, '"test";'),
						" in",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'export * from "test";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"incorrectly contained the span of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, ";"),
						". ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now parses it correctly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "declare-538" },
						"declare (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/538",
							},
							"#538",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Some users uses swc's parser within their rust project, and reported an error.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export declare function test(): string;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Note that this had no effects on users who use swc via javascript api.",
					),
					(0, o.kt)(
						"h3",
						{ id: "comments-541" },
						"comments (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/541",
							},
							"#541",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"/*pre:1*/\ntest(/*lost:2*/);\ntest(123 /*post:3*/);\ntest(/*pre:4*/ 123);\ntest(/*pre:5*/ 123 /*post:6*/);\ntest(/*pre:7*/ 123, /*pre:8*/ 456);\ntest(123 /*post:9*/, 456 /*post:10*/);\n",
						),
					),
					(0, o.kt)("p", null, "is now compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"/*pre:1*/\ntest();\ntest(123 /*post:3*/);\ntest(/*pre:4*/ 123);\ntest(/*pre:5*/ 123 /*post:6*/);\ntest(/*pre:7*/ 123, /*pre:8*/ 456);\ntest(123 /*post:9*/, 456 /*post:10*/);\n",
						),
					),
					(0, o.kt)("p", null, "Originally, it was compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"/*pre:1*/\ntest();\ntest(\n  /*post:3*/\n  123\n);\ntest(123);\ntest(\n  /*post:6*/\n  123\n);\ntest(123, 456);\ntest(\n  /*post:9*/\n  123 /*post:10*/,\n  456\n);\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
