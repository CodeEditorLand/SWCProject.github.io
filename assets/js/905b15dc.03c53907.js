"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1790],
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
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
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
						a = e.originalType,
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(r),
						m = o,
						g = f["".concat(l, ".").concat(m)] || f[m] || u[m] || a;
					return r
						? n.createElement(
								g,
								c(c({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(g, c({ ref: t }, s));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = f;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var p = 2; p < a; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		9697: (e, t, r) => {
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
				a = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.52",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/06/02/swc-1.1.52",
					source: "@site/blog/2020-06-02-swc-1.1.52.md",
					title: "Changelog: swc v1.1.52",
					description: "Bugfixes",
					date: "2020-06-02T00:00:00.000Z",
					formattedDate: "June 2, 2020",
					tags: [],
					readingTime: 0.085,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.53",
						permalink: "/blog/2020/06/03/swc-1.1.53",
					},
					nextItem: {
						title: "Changelog: swc v1.1.51",
						permalink: "/blog/2020/05/30/swc-1.1.51",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Parser improvements (#811)",
								id: "parser-improvements-811",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "parser-improvements-811" },
						"Parser improvements (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/811",
							},
							"#811",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"From now on, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can parse almost all valid typescript files.",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
