"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[725],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
			var n = r(7294);
			function a(e, t, r) {
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
			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
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
			function i(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
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
									(a[r] = e[r]));
				}
				return a;
			}
			var s = n.createContext({}),
				c = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
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
						a = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						h = a,
						d = m["".concat(s, ".").concat(h)] || m[h] || u[h] || o;
					return r
						? n.createElement(
								d,
								p(p({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, p({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						p = new Array(o);
					p[0] = m;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(p[1] = i);
					for (var c = 2; c < o; c++) p[c] = r[c];
					return n.createElement.apply(null, p);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		5463: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				p = ["components"],
				i = {
					title: "Changelog: swc v1.2.86",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2021/09/11/swc-1.2.86",
					source: "@site/blog/2021-09-11-swc-1.2.86.md",
					title: "Changelog: swc v1.2.86",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/187?closed=1",
					date: "2021-09-11T00:00:00.000Z",
					formattedDate: "September 11, 2021",
					tags: [],
					readingTime: 0.575,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.87",
						permalink: "/blog/2021/09/15/swc-1.2.87",
					},
					nextItem: {
						title: "Changelog: swc v1.2.85",
						permalink: "/blog/2021/09/09/swc-1.2.85",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>this</code> in arrow expressions (#2212)",
								id: "this-in-arrow-expressions-2212",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "unary with exponential operation (#2191)",
								id: "unary-with-exponential-operation-2191",
								children: [],
							},
							{
								value: "parser: Ternary (#2196)",
								id: "parser-ternary-2196",
								children: [],
							},
							{
								value: "stack overflow (#2223)",
								id: "stack-overflow-2223",
								children: [],
							},
							{
								value: "<code>jsc.paths</code> (#2050)",
								id: "jscpaths-2050",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, p);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/187?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/187?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "this-in-arrow-expressions-2212" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "this"),
						" in arrow expressions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2212",
							},
							"#2212",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits similar output to babel instead of using ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "bind"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Implemented by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2222",
							},
							"#2222",
						),
						".",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "unary-with-exponential-operation-2191" },
						"unary with exponential operation (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2191",
							},
							"#2191",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now wraps an unary expression before an exponentation operator.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2222",
							},
							"#2222",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-ternary-2196" },
						"parser: Ternary (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2196",
							},
							"#2196",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now parse",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export const reproValue = true\n  ? {}\n  : {\n      reproFunc: (_: any): any => {},\n    };\n",
						),
					),
					(0, o.kt)("p", null, "correctly."),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2222",
							},
							"#2222",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "stack-overflow-2223" },
						"stack overflow (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2223",
							},
							"#2223",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" throwed an error if a ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "Program"),
						" is too large.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2222",
							},
							"#2222",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "jscpaths-2050" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.paths",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2050",
							},
							"#2050",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Finally ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" correctly implements support for ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "paths"),
						" and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "baseUrl"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2227",
							},
							"#2227",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
