"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1019],
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
			var p = n.createContext({}),
				l = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = l(e.components);
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
						f = l(r),
						m = o,
						g = f["".concat(p, ".").concat(m)] || f[m] || u[m] || a;
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
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var l = 2; l < a; l++) c[l] = r[l];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		9309: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.2.16",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2020/08/10/swc-1.2.16",
					source: "@site/blog/2020-08-10-swc-1.2.16.md",
					title: "Changelog: swc v1.2.16",
					description: "Bugfixes",
					date: "2020-08-10T00:00:00.000Z",
					formattedDate: "August 10, 2020",
					tags: [],
					readingTime: 0.24,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.18",
						permalink: "/blog/2020/08/11/swc-1.2.18",
					},
					nextItem: {
						title: "Changelog: swc v1.2.17",
						permalink: "/blog/2020/08/10/swc-1.2.17",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript class properties (#951)",
								id: "typescript-class-properties-951",
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
						{ id: "typescript-class-properties-951" },
						"typescript class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/951",
							},
							"#951",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This is a bugfix for a new feature introduced in ",
						"[swc][]",
						"@",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.2.15"),
						".",
					),
					(0, a.kt)("p", null, "An example of affected code is"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class B {}\n\nclass A extends B {\n  foo = new Subject();\n  b = this.a;\n\n  constructor(readonly a) {\n    super();\n    this.foo.subscribe();\n  }\n}\n",
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
