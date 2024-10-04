"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9659],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => m });
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
			function c(e, t) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: c(Object(r)).forEach(function (t) {
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
							c = Object.keys(e);
						for (n = 0; n < c.length; n++)
							(r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(e);
					for (n = 0; n < c.length; n++)
						(r = c[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = p(e.components);
					return n.createElement(
						l.Provider,
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
				f = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						c = e.originalType,
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(r),
						m = o,
						g = f["".concat(l, ".").concat(m)] || f[m] || u[m] || c;
					return r
						? n.createElement(
								g,
								a(a({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(g, a({ ref: t }, s));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						a = new Array(c);
					a[0] = f;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(a[1] = i);
					for (var p = 2; p < c; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		3764: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.2.90",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/09/23/swc-1.2.90",
					source: "@site/blog/2021-09-23-swc-1.2.90.md",
					title: "Changelog: swc v1.2.90",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/191?closed=1",
					date: "2021-09-23T00:00:00.000Z",
					formattedDate: "September 23, 2021",
					tags: [],
					readingTime: 0.155,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.91",
						permalink: "/blog/2021/09/25/swc-1.2.91",
					},
					nextItem: {
						title: "Changelog: swc v1.2.89",
						permalink: "/blog/2021/09/22/swc-1.2.89",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>hygiene</code> (#2211)",
								id: "hygiene-2211",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, c.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/191?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/191?closed=1",
						),
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "hygiene-2211" },
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
						" (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2211",
							},
							"#2211",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"I thought this was fixed by ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "v1.2.89"),
						", but it was not the case.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed (again) by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2282",
							},
							"#2282",
						),
						".",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
