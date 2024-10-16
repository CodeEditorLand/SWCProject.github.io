"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1450],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
			var n = r(7294);
			function a(e, t, r) {
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
			function s(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: s(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function o(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (n = 0; n < s.length; n++)
						(r = s[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return n.createElement(
						p.Provider,
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
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						s = e.originalType,
						p = e.parentName,
						l = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						f = a,
						d = m["".concat(p, ".").concat(f)] || m[f] || u[f] || s;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = r.length,
						i = new Array(s);
					i[0] = m;
					var o = {};
					for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(i[1] = o);
					for (var c = 2; c < s; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		2546: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => o,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				s = (r(7294), r(3905)),
				i = ["components"],
				o = {
					title: "Changelog: swc v1.2.45",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/01/14/swc-1.2.45",
					source: "@site/blog/2021-01-14-swc-1.2.45.md",
					title: "Changelog: swc v1.2.45",
					description: "Bugfixes",
					date: "2021-01-14T00:00:00.000Z",
					formattedDate: "January 14, 2021",
					tags: [],
					readingTime: 0.67,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.46",
						permalink: "/blog/2021/01/23/swc-1.2.46",
					},
					nextItem: {
						title: "Changelog: swc v1.2.44",
						permalink: "/blog/2021/01/11/swc-1.2.44",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Escapes in string literals (#1227)",
								id: "escapes-in-string-literals-1227",
								children: [],
							},
							{
								value: "Panic on aliased reexports (#1307)",
								id: "panic-on-aliased-reexports-1307",
								children: [],
							},
							{
								value: "Private class properties (#1306)",
								id: "private-class-properties-1306",
								children: [],
							},
							{
								value: "Preserve imports (#1134)",
								id: "preserve-imports-1134",
								children: [],
							},
						],
					},
					{
						value: "Features",
						id: "features",
						children: [
							{
								value: "Support for typescript namespace (#1325)",
								id: "support-for-typescript-namespace-1325",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "escapes-in-string-literals-1227" },
						"Escapes in string literals (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1227",
							},
							"#1227",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"This was a regression caused by some works related to span (and sourcemaps). I fixed it and ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" can emit es5 code as before.",
					),
					(0, s.kt)(
						"h3",
						{ id: "panic-on-aliased-reexports-1307" },
						"Panic on aliased reexports (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1307",
							},
							"#1307",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"This is a regresssion caused by promoting namespaced re-exports like (",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * as foo from 'foo'",
						),
						") to ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "es2020"),
						" from ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "esnext"),
						". This is now fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "private-class-properties-1306" },
						"Private class properties (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1306",
							},
							"#1306",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" previously miscompiled",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Animal {\n  readonly #name: string;\n\n  constructor(name: string) {\n    this.#name = name;\n  }\n\n  public noise() {\n    return this.#name.toUpperCase();\n  }\n}\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"but now ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" compiles it correctly. Actaully the fix was addition of one line.",
					),
					(0, s.kt)(
						"h3",
						{ id: "preserve-imports-1134" },
						"Preserve imports (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1134",
							},
							"#1134",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"This is also a regression, but it's now fixed.",
					),
					(0, s.kt)("h2", { id: "features" }, "Features"),
					(0, s.kt)(
						"h3",
						{ id: "support-for-typescript-namespace-1325" },
						"Support for typescript namespace (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1325",
							},
							"#1325",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports typescript namespace.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
