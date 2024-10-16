"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1603],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => m });
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
			var p = n.createContext({}),
				s = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = s(e.components);
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						c = e.originalType,
						p = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = s(r),
						m = o,
						f = d["".concat(p, ".").concat(m)] || d[m] || u[m] || c;
					return r
						? n.createElement(
								f,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(f, a({ ref: t }, l));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						a = new Array(c);
					a[0] = d;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(a[1] = i);
					for (var s = 2; s < c; s++) a[s] = r[s];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		6888: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.2.19",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2020/08/13/swc-1.2.19",
					source: "@site/blog/2020-08-13-swc-1.2.19.md",
					title: "Changelog: swc v1.2.19",
					description: "Bugfixes",
					date: "2020-08-13T00:00:00.000Z",
					formattedDate: "August 13, 2020",
					tags: [],
					readingTime: 0.35,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.20",
						permalink: "/blog/2020/08/15/swc-1.2.20",
					},
					nextItem: {
						title: "Changelog: swc v1.2.18",
						permalink: "/blog/2020/08/11/swc-1.2.18",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "optional constructor property parameters (#959)",
								id: "optional-constructor-property-parameters-959",
								children: [],
							},
							{
								value: "Some dce bugs (#959)",
								id: "some-dce-bugs-959",
								children: [],
							},
						],
					},
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "cyclic dependencies (#959)",
								id: "cyclic-dependencies-959",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, c.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "optional-constructor-property-parameters-959" },
						"optional constructor property parameters (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/959",
							},
							"#959",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Previously ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "test?"),
						" in the code below was miscompiled. It's now fixed and ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" generates correct output.",
					),
					(0, c.kt)(
						"pre",
						null,
						(0, c.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class Test {\n  constructor(readonly test?: string) {}\n}\n",
						),
					),
					(0, c.kt)(
						"h3",
						{ id: "some-dce-bugs-959" },
						"Some dce bugs (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/959",
							},
							"#959",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"While abstraction of the spack, I added much more test cases and fixed some tree-shaking bugs.",
					),
					(0, c.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, c.kt)(
						"h3",
						{ id: "cyclic-dependencies-959" },
						"cyclic dependencies (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/959",
							},
							"#959",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						(0, c.kt)("inlineCode", { parentName: "p" }, "spack"),
						" now supprots cyclic dependencies between es modules.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
