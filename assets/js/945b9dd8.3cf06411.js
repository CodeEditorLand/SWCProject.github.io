"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6175],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
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
			function s(e) {
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
			function i(e, t) {
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
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = c(e.components);
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
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = o,
						f = m["".concat(p, ".").concat(d)] || m[d] || u[d] || a;
					return n
						? r.createElement(
								f,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(f, s({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						s = new Array(a);
					s[0] = m;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(s[1] = i);
					for (var c = 2; c < a; c++) s[c] = n[c];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		2880: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.1.46",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2020/05/21/swc-1.1.46",
					source: "@site/blog/2020-05-21-swc-1.1.46.md",
					title: "Changelog: swc v1.1.46",
					description: "Bugfixes",
					date: "2020-05-21T00:00:00.000Z",
					formattedDate: "May 21, 2020",
					tags: [],
					readingTime: 0.725,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.47",
						permalink: "/blog/2020/05/22/swc-1.1.47",
					},
					nextItem: {
						title: "Changelog: swc v1.1.44",
						permalink: "/blog/2020/05/19/swc-1.1.44",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "resolver: arrow expression (#790)",
								id: "resolver-arrow-expression-790",
								children: [],
							},
							{
								value: "types in <code>as</code> expressions (#787)",
								id: "types-in-as-expressions-787",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "resolver-arrow-expression-790" },
						"resolver: arrow expression (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/790",
							},
							"#790",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a bug that occurs if an arrow parameter and local binding has a same name. Due to the bug, code like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'window.addEventListener("message", (e) => {\n  try {\n    console.log(e.data);\n  } catch (e) {\n    console.log(e);\n  }\n});\n',
						),
					),
					(0, a.kt)("p", null, "was miscompiled. It is now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "types-in-as-expressions-787" },
						"types in ",
						(0, a.kt)("inlineCode", { parentName: "h3" }, "as"),
						" expressions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/787",
							},
							"#787",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" didn't detect type-only imports correctly if ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "as"),
						" is used. It means,",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { IPerson } from "../types/types";\nexport function createPerson(person: IPerson) {\n  const a = {} as IPerson;\n}\n',
						),
					),
					(0, a.kt)("p", null, "was compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { IPerson } from "../types/types";\nexport function createPerson(person) {\n  const a = {};\n}\n',
						),
					),
					(0, a.kt)("p", null, "instead of"),
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
						"p",
						null,
						"Fix was quite simple. By making ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" drop type before visiting whole expression, typescript type casting expressions are now stripped out.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
