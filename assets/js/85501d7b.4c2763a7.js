"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3842],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => f });
			var r = n(7294);
			function o(e, t, n) {
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
			function a(e, t) {
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
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var p = r.createContext({}),
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = l(e.components);
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
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						f = o,
						g = m["".concat(p, ".").concat(f)] || m[f] || u[f] || a;
					return n
						? r.createElement(
								g,
								i(i({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(g, i({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var l = 2; l < a; l++) i[l] = n[l];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		8050: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.37",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2020/03/28/swc-1.1.37",
					source: "@site/blog/2020-03-28-swc-1.1.37.md",
					title: "Changelog: swc v1.1.37",
					description: "Bugfixes",
					date: "2020-03-28T00:00:00.000Z",
					formattedDate: "March 28, 2020",
					tags: [],
					readingTime: 0.21,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.38",
						permalink: "/blog/2020/04/05/swc-1.1.38",
					},
					nextItem: {
						title: "Changelog: swc v1.1.36",
						permalink: "/blog/2020/03/26/swc-1.1.36",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Deep nesting in optional chaining expression (#735)",
								id: "deep-nesting-in-optional-chaining-expression-735",
								children: [],
							},
						],
					},
					{ value: "Improvements", id: "improvements", children: [] },
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{
							id: "deep-nesting-in-optional-chaining-expression-735",
						},
						"Deep nesting in optional chaining expression (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/735",
							},
							"#735",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now handle codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"test.a?.b.c.d.e.f.g.h.i;\n",
						),
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"p",
						null,
						"Starting from v1.1.37, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" accepts an input source map.\n",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inputSourceMap",
						),
						" can be ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "true"),
						", ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "false"),
						",",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							'"inline"',
						),
						" or the content of a source map.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
