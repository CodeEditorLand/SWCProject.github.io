"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1043],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => f });
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
			function i(e, t) {
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
						? i(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
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
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var l = n.createContext({}),
				s = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = s(e.components);
					return n.createElement(
						l.Provider,
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
						i = e.originalType,
						l = e.parentName,
						c = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = s(r),
						f = o,
						d = m["".concat(l, ".").concat(f)] || m[f] || u[f] || i;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, c));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						a = new Array(i);
					a[0] = m;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(a[1] = p);
					for (var s = 2; s < i; s++) a[s] = r[s];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4487: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => c,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				p = {
					title: "Changelog: swc v1.2.101",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				s = {
					permalink: "/blog/2021/10/20/swc-1.2.101",
					source: "@site/blog/2021-10-20-swc-1.2.101.md",
					title: "Changelog: swc v1.2.101",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/202?closed=1",
					date: "2021-10-20T00:00:00.000Z",
					formattedDate: "October 20, 2021",
					tags: [],
					readingTime: 0.61,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.102",
						permalink: "/blog/2021/10/21/swc-1.2.102",
					},
					nextItem: {
						title: "Changelog: swc v1.2.100",
						permalink: "/blog/2021/10/19/swc-1.2.100",
					},
				},
				c = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Performance of typescript parsing",
								id: "performance-of-typescript-parsing",
								children: [],
							},
							{
								value: "<code>inline_globals</code>: typeof, member expression",
								id: "inline_globals-typeof-member-expression",
								children: [],
							},
							{
								value: "Default value for source maps",
								id: "default-value-for-source-maps",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "private static properties (#2476)",
								id: "private-static-properties-2476",
								children: [],
							},
							{ value: "minifier", id: "minifier", children: [] },
						],
					},
				],
				u = { toc: c };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/202?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/202?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "performance-of-typescript-parsing" },
						"Performance of typescript parsing",
					),
					(0, i.kt)(
						"p",
						null,
						"There was some useless backtracking while parsing typescript.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2483",
							},
							"#2483",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "inline_globals-typeof-member-expression" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"inline_globals",
						),
						": typeof, member expression",
					),
					(0, i.kt)(
						"p",
						null,
						"You can now use ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" to replace ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "typeof"),
						"s and complex expressions like ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"process.browser",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2479",
							},
							"#2479",
						),
						" and ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2473",
							},
							"#2473",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "default-value-for-source-maps" },
						"Default value for source maps",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits source map context by default, and you can disable it using ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inlineSourcesContent: false",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2471",
							},
							"#2471",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "private-static-properties-2476" },
						"private static properties (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2476",
							},
							"#2476",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class Foo {\n  static #_ = (() => {\n    this.bar = "3";\n  })();\n}\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2478",
							},
							"#2478",
						),
						".",
					),
					(0, i.kt)("h3", { id: "minifier" }, "minifier"),
					(0, i.kt)(
						"p",
						null,
						"There was a bug in inlining pass of the minifier.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2477",
							},
							"#2477",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
