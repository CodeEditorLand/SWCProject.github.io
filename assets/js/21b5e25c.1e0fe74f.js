"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9760],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
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
			function o(e, t) {
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
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: o(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var c = n.createContext({}),
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = p(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						u = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(r),
						f = a,
						m = d["".concat(c, ".").concat(f)] || d[f] || s[f] || o;
					return r
						? n.createElement(
								m,
								i(i({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(m, i({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(i[1] = l);
					for (var p = 2; p < o; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		428: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => u,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				l = {
					title: "Changelog: swc v1.1.57",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/06/11/swc-1.1.57",
					source: "@site/blog/2020-06-11-swc-1.1.57.md",
					title: "Changelog: swc v1.1.57",
					description: "Bugfixes",
					date: "2020-06-11T00:00:00.000Z",
					formattedDate: "June 11, 2020",
					tags: [],
					readingTime: 0.52,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.58",
						permalink: "/blog/2020/06/13/swc-1.1.58",
					},
					nextItem: {
						title: "Changelog: swc v1.1.56",
						permalink: "/blog/2020/06/10/swc-1.1.56",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Source map (#835)",
								id: "source-map-835",
								children: [],
							},
							{
								value: "yield* (#833)",
								id: "yield-833",
								children: [],
							},
							{
								value: "BigInt literals (#837)",
								id: "bigint-literals-837",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "source-map-835" },
						"Source map (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/835",
							},
							"#835",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The source map is fixed. I verified that generated source map point the original source correctly by using ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://sokra.github.io/source-map-visualization/",
							},
							"source map visualizer",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "yield-833" },
						"yield",
						"*",
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/833",
							},
							"#833",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" pass had a bug related to ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "yield*"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" broke code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function* gen() {\n  yield* [1, 2, 3];\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"But it's fixed and the function above correctly yields 3 times.",
					),
					(0, o.kt)(
						"h3",
						{ id: "bigint-literals-837" },
						"BigInt literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/837",
							},
							"#837",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"There was no integration test for bigint literals and the test suite failed to catch it.\nPreviously, due to the bug of swc_ecma_codegen, bigint literal cannot be printed",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var foo = 2n + 7n;\n",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
