"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9405],
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
			function p(e) {
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
			function s(e, t) {
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
			var c = n.createContext({}),
				i = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = i(e.components);
					return n.createElement(
						c.Provider,
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
						c = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = i(r),
						f = o,
						y = m["".concat(c, ".").concat(f)] || m[f] || u[f] || a;
					return r
						? n.createElement(
								y,
								p(p({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(y, p({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						p = new Array(a);
					p[0] = m;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(p[1] = s);
					for (var i = 2; i < a; i++) p[i] = r[i];
					return n.createElement.apply(null, p);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		1049: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => i,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				p = ["components"],
				s = {
					title: "Changelog: swc v1.1.47",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				i = {
					permalink: "/blog/2020/05/22/swc-1.1.47",
					source: "@site/blog/2020-05-22-swc-1.1.47.md",
					title: "Changelog: swc v1.1.47",
					description: "Bugfixes",
					date: "2020-05-22T00:00:00.000Z",
					formattedDate: "May 22, 2020",
					tags: [],
					readingTime: 0.585,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.48",
						permalink: "/blog/2020/05/25/swc-1.1.48",
					},
					nextItem: {
						title: "Changelog: swc v1.1.46",
						permalink: "/blog/2020/05/21/swc-1.1.46",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript imports (#791)",
								id: "typescript-imports-791",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, p);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "typescript-imports-791" },
						"typescript imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/791",
							},
							"#791",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a bug related to type-only imports. Problematic codes include",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { IPerson } from "../types/types";\nexport interface IEmployee extends IPerson {}\nexport function createPerson(person: IPerson) {\n  const a = {} as IPerson;\n}\n',
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { IPerson } from "../types/types";\nexport class Employee implements IPerson {}\nexport function createPerson(person: IPerson) {\n  const a = {} as IPerson;\n}\n',
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { IPerson } from "../types/types";\nexport type MyPerson = IPerson;\nexport function createPerson(person: MyPerson) {\n  const a = {} as MyPerson;\n}\n',
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { A, B } from "../types/types";\n\nexport class Child extends A implements B {}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"These code works correctly with ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "mailto:swc@v1.1.47" },
							"swc@v1.1.47",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
