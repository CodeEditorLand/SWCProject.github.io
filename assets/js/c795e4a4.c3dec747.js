"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1386],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
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
			function c(e) {
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
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = p(e.components);
					return n.createElement(
						s.Provider,
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
						o = e.mdxType,
						a = e.originalType,
						s = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						f = o,
						d = m["".concat(s, ".").concat(f)] || m[f] || u[f] || a;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = m;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var p = 2; p < a; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		7825: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.31",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/03/01/swc-1.1.31",
					source: "@site/blog/2020-03-01-swc-1.1.31.md",
					title: "Changelog: swc v1.1.31",
					description: "Performance",
					date: "2020-03-01T00:00:00.000Z",
					formattedDate: "March 1, 2020",
					tags: [],
					readingTime: 0.77,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.33",
						permalink: "/blog/2020/03/04/swc-1.1.33",
					},
					nextItem: {
						title: "Changelog: swc v1.1.30",
						permalink: "/blog/2020/02/29/swc-1.1.30",
					},
				},
				l = [
					{
						value: "Performance",
						id: "performance",
						children: [
							{
								value: "parser becomes 10% ~ 15% faster",
								id: "parser-becomes-10--15-faster",
								children: [],
							},
							{
								value: "codegen with sourcemap becomes 80% faster",
								id: "codegen-with-sourcemap-becomes-80-faster",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "performance" }, "Performance"),
					(0, a.kt)(
						"h3",
						{ id: "parser-becomes-10--15-faster" },
						"parser becomes 10% ~ 15% faster",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" uses a special technique copied from ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "rustc"),
						" to store identifers and spans compactly.\nHowever, it's memory-performance tradeoff, and encoding and decoding is not super fast operation.\nSo, while ",
						(0, a.kt)("em", { parentName: "p" }, "parsing"),
						", swc use un-compact version of span, and uses compact version of span after parsing.\nThe make parser much faster.",
					),
					(0, a.kt)(
						"h3",
						{ id: "codegen-with-sourcemap-becomes-80-faster" },
						"codegen with sourcemap becomes 80% faster",
					),
					(0, a.kt)(
						"p",
						null,
						"I designed ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						"'s core module to support merging multiple file into a file.\nBecause of the design, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" used a concurrent data structures while generating code.\nBut it was not enough for performance. I added a cache layer related to source map, and the layer makes swc much faster",
					),
					(0, a.kt)("h4", { id: "previous" }, "Previous"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"emit_colors ... bench:      23,601 ns/iter (+/- 15,849) = 49 MB/s\n",
						),
					),
					(0, a.kt)("h4", { id: "after" }, "After"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"test emit_colors ... bench:      13,659 ns/iter (+/- 450) = 86 MB/s\ntest emit_large  ... bench:     112,836 ns/iter (+/- 16,139) = 45 MB/s\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
