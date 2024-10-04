"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1311],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
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
			function s(e, t) {
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
						? s(Object(r), !0).forEach(function (t) {
								i(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: s(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function o(e, t) {
				if (null == e) return {};
				var r,
					n,
					i = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							i = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (n = 0; n < s.length; n++)
						(r = s[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(i[r] = e[r]));
				}
				return i;
			}
			var p = n.createContext({}),
				c = function (e) {
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
					var t = c(e.components);
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
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						i = e.mdxType,
						s = e.originalType,
						p = e.parentName,
						l = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						h = i,
						f = m["".concat(p, ".").concat(h)] || m[h] || u[h] || s;
					return r
						? n.createElement(
								f,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(f, a({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var s = r.length,
						a = new Array(s);
					a[0] = m;
					var o = {};
					for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : i),
						(a[1] = o);
					for (var c = 2; c < s; c++) a[c] = r[c];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		1261: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => o,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				i = r(3366),
				s = (r(7294), r(3905)),
				a = ["components"],
				o = {
					title: "Changelog: swc v1.2.75",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/08/08/swc-1.2.75",
					source: "@site/blog/2021-08-08-swc-1.2.75.md",
					title: "Changelog: swc v1.2.75",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/176?closed=1",
					date: "2021-08-08T00:00:00.000Z",
					formattedDate: "August 8, 2021",
					tags: [],
					readingTime: 1.06,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.76",
						permalink: "/blog/2021/08/10/swc-1.2.76",
					},
					nextItem: {
						title: "Changelog: swc v1.2.72",
						permalink: "/blog/2021/08/04/swc-1.2.72",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Error reporting: import in scripts",
								id: "error-reporting-import-in-scripts",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Escapes in jsx (#2013)",
								id: "escapes-in-jsx-2013",
								children: [],
							},
							{
								value: "Super access (#1959)",
								id: "super-access-1959",
								children: [],
							},
							{
								value: "Performance of the minifier (#1987)",
								id: "performance-of-the-minifier-1987",
								children: [],
							},
							{
								value: "<code>transform</code>: <code>fileName</code> support (#2023)",
								id: "transform-filename-support-2023",
								children: [],
							},
							{
								value: "minifier: Infinite loop (#2028)",
								id: "minifier-infinite-loop-2028",
								children: [],
							},
							{
								value: "minifier: Name mangler (#2022)",
								id: "minifier-name-mangler-2022",
								children: [],
							},
							{
								value: "minifier: Respect settings (#2022)",
								id: "minifier-respect-settings-2022",
								children: [],
							},
							{
								value: "codegen: <code>return async ()</code> (#2020)",
								id: "codegen-return-async--2020",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, i.Z)(e, a);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/176?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/176?closed=1",
						),
					),
					(0, s.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, s.kt)(
						"h3",
						{ id: "error-reporting-import-in-scripts" },
						"Error reporting: import in scripts",
					),
					(0, s.kt)(
						"p",
						null,
						"Error report for import statements like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import "foo";\n',
						),
					),
					(0, s.kt)("p", null, "in script mode was improved."),
					(0, s.kt)(
						"p",
						null,
						"Implemented by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/sosukesuzuki",
							},
							"@sosukesuzuki",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2025",
							},
							"#2025",
						),
						".",
					),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "escapes-in-jsx-2013" },
						"Escapes in jsx (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/2013",
							},
							"#2013",
						),
						")",
					),
					(0, s.kt)("p", null, "This bug affects code like"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'<Bla title="\xda" />\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2014",
							},
							"#2014",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "super-access-1959" },
						"Super access (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1959",
							},
							"#1959",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Preivously some accesses to ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "super"),
						" was not transpiled correctly.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1960",
							},
							"#1960",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "performance-of-the-minifier-1987" },
						"Performance of the minifier (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1987",
							},
							"#1987",
						),
						")",
					),
					(0, s.kt)("p", null, "The minifier now works in parallel."),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2009",
							},
							"#2009",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "transform-filename-support-2023" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"transform",
						),
						": ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"fileName",
						),
						" support (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2023",
							},
							"#2023",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Preivously swc generated bad sourcemap if plugin is specified.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2031",
							},
							"#2031",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "minifier-infinite-loop-2028" },
						"minifier: Infinite loop (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2028",
							},
							"#2028",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previous version of minifier throwed an error for",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function isSymbol(s) {\n  return s != null;\n}\n\nfunction isKey(value, object) {\n  if (value == null || isSymbol(value)) {\n    return true;\n  }\n  return false;\n}\n\nmodule.exports = isKey;\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2032",
							},
							"#2032",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "minifier-name-mangler-2022" },
						"minifier: Name mangler (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2022",
							},
							"#2022",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"This resulted in a bug when transforms create variables.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2032",
							},
							"#2032",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "minifier-respect-settings-2022" },
						"minifier: Respect settings (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2022",
							},
							"#2022",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previsouly minifier was enabled even you pass ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"minify: false",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2032",
							},
							"#2032",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "codegen-return-async--2020" },
						"codegen: ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"return async ()",
						),
						" (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2020",
							},
							"#2020",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously minified codegen didn't emit a space between ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "return"),
						" and ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "async"),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2032",
							},
							"#2032",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
