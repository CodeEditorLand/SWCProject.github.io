"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[449],
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
			function l(e) {
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
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						r
					);
				},
				s = function (e) {
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
				f = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = c(r),
						m = o,
						d = f["".concat(p, ".").concat(m)] || f[m] || u[m] || a;
					return r
						? n.createElement(
								d,
								l(l({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(d, l({ ref: t }, s));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						l = new Array(a);
					l[0] = f;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(l[1] = i);
					for (var c = 2; c < a; c++) l[c] = r[c];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		1118: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => s,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				l = ["components"],
				i = {
					id: "online-repl",
					title: "Online Repl",
					sidebar_label: "Online Repl",
					author: "Joel Mun",
					authorURL: "http://github.com/9oelM",
				},
				p = void 0,
				c = {
					unversionedId: "online-repl",
					id: "online-repl",
					isDocsHomePage: !1,
					title: "Online Repl",
					description: "See https://play.swc.rs",
					source: "@site/docs/repl.md",
					sourceDirName: ".",
					slug: "/online-repl",
					permalink: "/docs/online-repl",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "online-repl",
						title: "Online Repl",
						sidebar_label: "Online Repl",
						author: "Joel Mun",
						authorURL: "http://github.com/9oelM",
					},
					sidebar: "usage",
					previous: {
						title: "Transforms",
						permalink: "/docs/benchmark-transform",
					},
				},
				s = [],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, l);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"See ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://play.swc.rs" },
							"https://play.swc.rs",
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
