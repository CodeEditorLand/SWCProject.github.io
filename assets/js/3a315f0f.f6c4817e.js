"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9870],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => h });
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
			function c(e) {
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
			var l = r.createContext({}),
				s = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = s(e.components);
					return r.createElement(
						l.Provider,
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
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = s(n),
						h = o,
						f = m["".concat(l, ".").concat(h)] || m[h] || u[h] || a;
					return n
						? r.createElement(
								f,
								c(c({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, c({ ref: t }, p));
				});
			function h(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var s = 2; s < a; s++) c[s] = n[s];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		650: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "ChangeLog: swc v1.2.30",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				s = {
					permalink: "/blog/2020/09/18/swc-1.2.30",
					source: "@site/blog/2020-09-18-swc-1.2.30.md",
					title: "ChangeLog: swc v1.2.30",
					description: "Documentations",
					date: "2020-09-18T00:00:00.000Z",
					formattedDate: "September 18, 2020",
					tags: [],
					readingTime: 0.755,
					truncated: !1,
					prevItem: {
						title: "ChangeLog: swc v1.2.32",
						permalink: "/blog/2020/09/22/swc-1.2.32",
					},
					nextItem: {
						title: "ChangeLog: swc v1.2.27",
						permalink: "/blog/2020/09/13/swc-1.2.27",
					},
				},
				p = [
					{
						value: "Documentations",
						id: "documentations",
						children: [],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "spack (#1075, #1078)",
								id: "spack-1075-1078",
								children: [],
							},
						],
					},
					{ value: "musl support", id: "musl-support", children: [] },
					{ value: "@swc/jest", id: "swcjest", children: [] },
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "documentations" }, "Documentations"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, ".d.ts"),
						" files and the documentation of ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" is now consistent.",
					),
					(0, a.kt)(
						"p",
						null,
						"See: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/docs/configuring-swc.html",
							},
							"configuring swc",
						),
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "spack-1075-1078" },
						"spack (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1075",
							},
							"#1075",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1078",
							},
							"#1078",
						),
						")",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Panic while calculating the least common ancestor.",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, in some cases, lca calculation resulted in a panic because root entries do not have any ancestor.",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Cyclic imports mixed with normal imports",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This was tricky to fix because ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "spack"),
						" works in the parallel manner. You can't know which module is loaded first, and even the order of processing is not determined.",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Cyclic imports in the root entry",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" could not handle cyclic imports in the root entry. But it's now fixed.",
					),
					(0, a.kt)("h2", { id: "musl-support" }, "musl support"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" finally supports musl. It was my long-cherished project, and finally fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						".",
					),
					(0, a.kt)("h2", { id: "swcjest" }, "@swc/jest"),
					(0, a.kt)(
						"p",
						null,
						"It's a much faster alternative for ts-jest without type checking.",
					),
					(0, a.kt)(
						"p",
						null,
						"Homepage: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/jest",
							},
							"https://github.com/swc-project/jest",
						),
					),
					(0, a.kt)("p", null, "Usage:"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jest.config.js",
						),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module.exports = {\n  transform: {\n    "^.+\\\\.(t|j)sx?$": ["@swc/jest"],\n  },\n};\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
