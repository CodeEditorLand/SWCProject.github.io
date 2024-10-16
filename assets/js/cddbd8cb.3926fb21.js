"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8079],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
			var n = r(7294);
			function i(e, t, r) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								i(e, t, r[t]);
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
			function c(e, t) {
				if (null == e) return {};
				var r,
					n,
					i = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							i = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
						return i;
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
									(i[r] = e[r]));
				}
				return i;
			}
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
						i = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						f = i,
						d = m["".concat(s, ".").concat(f)] || m[f] || u[f] || o;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = r.length,
						a = new Array(o);
					a[0] = m;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : i),
						(a[1] = c);
					for (var p = 2; p < o; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		7795: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				i = r(3366),
				o = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.1.40",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/05/03/swc-1.1.40",
					source: "@site/blog/2020-05-03-swc-1.1.40.md",
					title: "Changelog: swc v1.1.40",
					description: "Bugfixes",
					date: "2020-05-03T00:00:00.000Z",
					formattedDate: "May 3, 2020",
					tags: [],
					readingTime: 0.31,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.42",
						permalink: "/blog/2020/05/05/swc-1.1.42",
					},
					nextItem: {
						title: "Changelog: swc v1.1.39",
						permalink: "/blog/2020/04/10/swc-1.1.39",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "@swc/register (#754)",
								id: "swcregister-754",
								children: [],
							},
							{
								value: "typescript enum (#757)",
								id: "typescript-enum-757",
								children: [],
							},
							{
								value: "requires with es6 imports (#724)",
								id: "requires-with-es6-imports-724",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, i.Z)(e, a);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "swcregister-754" },
						"@swc/register (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/754",
							},
							"#754",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/register",
						),
						" emitted error on normal files. This is fixed in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/register@0.1.7",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-enum-757" },
						"typescript enum (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/757",
							},
							"#757",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"You can now ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export default",
						),
						" typescript enums.",
					),
					(0, o.kt)(
						"h3",
						{ id: "requires-with-es6-imports-724" },
						"requires with es6 imports (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/724",
							},
							"#724",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously swc miscompiled code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { A } from "a";\nconst B = require("B");\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This is now fixed, and it works without any problem.\n`",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
