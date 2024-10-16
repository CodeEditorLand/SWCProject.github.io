"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7001],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => f });
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
			var s = r.createContext({}),
				p = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
					return r.createElement(
						s.Provider,
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
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = o,
						d = m["".concat(s, ".").concat(f)] || m[f] || u[f] || a;
					return n
						? r.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, i({ ref: t }, l));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5890: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.48",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/05/25/swc-1.1.48",
					source: "@site/blog/2020-05-25-swc-1.1.48.md",
					title: "Changelog: swc v1.1.48",
					description: "Bugfixes",
					date: "2020-05-25T00:00:00.000Z",
					formattedDate: "May 25, 2020",
					tags: [],
					readingTime: 0.59,
					truncated: !1,
					prevItem: {
						title: "Hotfix: swc v1.1.50",
						permalink: "/blog/2020/05/28/swc-1.1.50",
					},
					nextItem: {
						title: "Changelog: swc v1.1.47",
						permalink: "/blog/2020/05/22/swc-1.1.47",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript casts (#794)",
								id: "typescript-casts-794",
								children: [],
							},
							{
								value: "Plugin (#785)",
								id: "plugin-785",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "typescript-casts-794" },
						"typescript casts (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/794",
							},
							"#794",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" dropped the type information in casts without visiting it. It caused",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { IPerson } from "../types/types";\nexport function createPerson(person) {\n  const a = {} as IPerson;\n}\n',
						),
					),
					(0, a.kt)("p", null, "to be compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// The import is not dropped.\nimport { IPerson } from "../types/types";\nexport function createPerson(person) {\n  const a = {};\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This is fixed by visiting types, and ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export function createPerson(person) {\n  const a = {};\n}\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "plugin-785" },
						"Plugin (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/785",
							},
							"#785",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Plugin was broken because ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc.transformSync",
						),
						" emits original code even though user modified the ast. This is fixed and to prevent such regession, I moved node-swc into the main repository.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
