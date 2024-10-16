"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6707],
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
			function p(e, t) {
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
				i = function (e) {
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
					var t = i(e.components);
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						s = e.parentName,
						l = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = i(r),
						f = o,
						m = d["".concat(s, ".").concat(f)] || d[f] || u[f] || a;
					return r
						? n.createElement(
								m,
								c(c({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(m, c({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = d;
					var p = {};
					for (var s in t) hasOwnProperty.call(t, s) && (p[s] = t[s]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(c[1] = p);
					for (var i = 2; i < a; i++) c[i] = r[i];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		575: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => s,
					metadata: () => i,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				p = {
					title: "Changelog: swc v1.1.34",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				i = {
					permalink: "/blog/2020/03/10/swc-1.1.34",
					source: "@site/blog/2020-03-10-swc-1.1.34.md",
					title: "Changelog: swc v1.1.34",
					description: "Bugfixes",
					date: "2020-03-10T00:00:00.000Z",
					formattedDate: "March 10, 2020",
					tags: [],
					readingTime: 0.385,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.35",
						permalink: "/blog/2020/03/14/swc-1.1.35",
					},
					nextItem: {
						title: "Changelog: swc v1.1.32",
						permalink: "/blog/2020/03/04/swc-1.1.32",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Source maps (#705, #707)",
								id: "source-maps-705-707",
								children: [],
							},
							{
								value: ".d.ts support typescript parser",
								id: "dts-support-typescript-parser",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "source-maps-705-707" },
						"Source maps (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/705",
							},
							"#705",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/707",
							},
							"#707",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Starting from v1.1.34, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" handles the source map correctly.",
					),
					(0, a.kt)(
						"h3",
						{ id: "dts-support-typescript-parser" },
						".d.ts support typescript parser",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could not handle ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".d.ts"),
						" files properly, as the syntax differs.\nI've added a feature to parse optional binding patterns in the code below.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"declare namespace __event {\n  export class EventInit {\n    constructor({\n      bubbles,\n      cancelable,\n      composed\n    }?: {\n      bubbles?: boolean | undefined;\n      cancelable?: boolean | undefined;\n      composed?: boolean | undefined;\n    });\n  }\n}\n",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
