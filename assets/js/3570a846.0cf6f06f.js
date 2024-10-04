"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6503],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
			var n = r(7294);
			function c(e, t, r) {
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
								c(e, t, r[t]);
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
					c = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							c = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (c[r] = e[r]);
						return c;
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
									(c[r] = e[r]));
				}
				return c;
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
						c = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						h = c,
						d = m["".concat(s, ".").concat(h)] || m[h] || u[h] || o;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					c = t && t.mdxType;
				if ("string" == typeof e || c) {
					var o = r.length,
						a = new Array(o);
					a[0] = m;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : c),
						(a[1] = i);
					for (var p = 2; p < o; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		8141: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				c = r(3366),
				o = (r(7294), r(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.2.91",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2021/09/25/swc-1.2.91",
					source: "@site/blog/2021-09-25-swc-1.2.91.md",
					title: "Changelog: swc v1.2.91",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/192?closed=1",
					date: "2021-09-25T00:00:00.000Z",
					formattedDate: "September 25, 2021",
					tags: [],
					readingTime: 0.535,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.92",
						permalink: "/blog/2021/09/29/swc-1.2.92",
					},
					nextItem: {
						title: "Changelog: swc v1.2.90",
						permalink: "/blog/2021/09/23/swc-1.2.90",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>hygiene</code> (#2297)",
								id: "hygiene-2297",
								children: [],
							},
							{
								value: "<code>parser</code>: JSX (#2264)",
								id: "parser-jsx-2264",
								children: [],
							},
							{
								value: "<code>parser</code>: Function in tsx (#2237)",
								id: "parser-function-in-tsx-2237",
								children: [],
							},
							{
								value: "<code>sourceMap: true</code> in <code>.swcrc</code> (#2194)",
								id: "sourcemap-true-in-swcrc-2194",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, c.Z)(e, a);
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
								href: "https://github.com/swc-project/swc/milestone/192?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/192?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "hygiene-2297" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2297",
							},
							"#2297",
						),
						")",
					),
					(0, o.kt)("p", null, "There was an edge case I missed."),
					(0, o.kt)(
						"p",
						null,
						"Fixed (again) by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2299",
							},
							"#2299",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-jsx-2264" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "parser"),
						": JSX (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2264",
							},
							"#2264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" sometimes collect the jsx text below as comments.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-tsx" },
							"const t = <Switch>// 1 /* 2 */</Switch>;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2255",
							},
							"#2255",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-function-in-tsx-2237" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "parser"),
						": Function in tsx (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2237",
							},
							"#2237",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the parser of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" failed to parse the input below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-tsx" },
							'import React from "react";\n\nexport function Results() {\n  return (\n    <div>\n      {[].map(() => {\n        function onClick(): void {}\n\n        return null;\n      })}\n    </div>\n  );\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2255",
							},
							"#2255",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "sourcemap-true-in-swcrc-2194" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"sourceMap: true",
						),
						" in ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, ".swcrc"),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2194",
							},
							"#2194",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2292",
							},
							"#2292",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
