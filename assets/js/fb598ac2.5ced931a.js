"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[388],
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
			function s(e) {
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
			function c(e, t) {
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
			var p = n.createContext({}),
				i = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = i(e.components);
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
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = i(r),
						f = o,
						h = m["".concat(p, ".").concat(f)] || m[f] || u[f] || a;
					return r
						? n.createElement(
								h,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, s({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						s = new Array(a);
					s[0] = m;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(s[1] = c);
					for (var i = 2; i < a; i++) s[i] = r[i];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		5737: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => i,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				s = ["components"],
				c = {
					title: "Changelog: swc v1.2.65",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				i = {
					permalink: "/blog/2021/07/18/swc-1.2.65",
					source: "@site/blog/2021-07-18-swc-1.2.65.md",
					title: "Changelog: swc v1.2.65",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/168?closed=1",
					date: "2021-07-18T00:00:00.000Z",
					formattedDate: "July 18, 2021",
					tags: [],
					readingTime: 0.565,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.66",
						permalink: "/blog/2021/07/20/swc-1.2.66",
					},
					nextItem: {
						title: "Changelog: swc v1.2.64",
						permalink: "/blog/2021/07/14/swc-1.2.64",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>paths</code> (from <code>tsconfig.json</code>) (#1858)",
								id: "paths-from-tsconfigjson-1858",
								children: [],
							},
							{
								value: "input source map (#1930)",
								id: "input-source-map-1930",
								children: [],
							},
							{
								value: "regenerator: Fix for helpers (#1924)",
								id: "regenerator-fix-for-helpers-1924",
								children: [],
							},
							{
								value: "rest patterns in arrow functions (#1926)",
								id: "rest-patterns-in-arrow-functions-1926",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/168?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/168?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "paths-from-tsconfigjson-1858" },
						(0, a.kt)("inlineCode", { parentName: "h3" }, "paths"),
						" (from ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"tsconfig.json",
						),
						") (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1858",
							},
							"#1858",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"The support for ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "paths"),
						" is implemented in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.2.62"),
						" but actually there was a bug and it's now also tested from node side codes.\nPreviously only rust-side tests existed.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1932",
							},
							"#1932",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "input-source-map-1930" },
						"input source map (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1930",
							},
							"#1930",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now input sourcemap correctly.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1932",
							},
							"#1932",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "regenerator-fix-for-helpers-1924" },
						"regenerator: Fix for helpers (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1924",
							},
							"#1924",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Pass ordering was wrong and it could cause problem if the ",
						(0, a.kt)("strong", { parentName: "p" }, "only"),
						" helper used comes from ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" pass.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1931",
							},
							"#1931",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "rest-patterns-in-arrow-functions-1926" },
						"rest patterns in arrow functions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1926",
							},
							"#1926",
						),
						")",
					),
					(0, a.kt)("p", null, "Now codes like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const foo = (...args) => {\n  console.log(args);\n};\n",
						),
					),
					(0, a.kt)("p", null, "will work."),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
