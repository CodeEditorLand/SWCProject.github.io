"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2243],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => d });
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
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
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
			function o(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
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
									(a[r] = e[r]));
				}
				return a;
			}
			var p = n.createContext({}),
				s = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = s(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						i = e.originalType,
						p = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(r),
						d = a,
						h = u["".concat(p, ".").concat(d)] || u[d] || m[d] || i;
					return r
						? n.createElement(
								h,
								l(l({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(h, l({ ref: t }, c));
				});
			function d(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = r.length,
						l = new Array(i);
					l[0] = u;
					var o = {};
					for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(l[1] = o);
					for (var s = 2; s < i; s++) l[s] = r[s];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		6484: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => o,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => c,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				i = (r(7294), r(3905)),
				l = ["components"],
				o = {
					title: "Changelog: swc v1.2.102",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2021/10/21/swc-1.2.102",
					source: "@site/blog/2021-10-21-swc-1.2.102.md",
					title: "Changelog: swc v1.2.102",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/203?closed=1",
					date: "2021-10-21T00:00:00.000Z",
					formattedDate: "October 21, 2021",
					tags: [],
					readingTime: 0.845,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.103",
						permalink: "/blog/2021/10/25/swc-1.2.103",
					},
					nextItem: {
						title: "Changelog: swc v1.2.101",
						permalink: "/blog/2021/10/20/swc-1.2.101",
					},
				},
				c = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "stage 3: static blocks (#2125)",
								id: "stage-3-static-blocks-2125",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "minifier: RegExp",
								id: "minifier-regexp",
								children: [],
							},
							{
								value: "minifier: join_vars",
								id: "minifier-join_vars",
								children: [],
							},
							{
								value: "parser: Property named <code>async</code>",
								id: "parser-property-named-async",
								children: [],
							},
							{
								value: "parser: <code>declare declare</code> (#2343)",
								id: "parser-declare-declare-2343",
								children: [],
							},
							{
								value: "general: <code>createElement()</code> (#2492)",
								id: "general-createelement-2492",
								children: [],
							},
							{
								value: "<code>inline_globals</code>: Optional (#2490)",
								id: "inline_globals-optional-2490",
								children: [],
							},
							{
								value: "variable renaming pass",
								id: "variable-renaming-pass",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, l);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/203?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/203?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "stage-3-static-blocks-2125" },
						"stage 3: static blocks (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2125",
							},
							"#2125",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports static blocks, which is stage 3.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/sosukesuzuki",
							},
							"@sosukesuzuki",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2474",
							},
							"#2474",
						),
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "minifier-regexp" },
						"minifier: RegExp",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses allowlist a characters while optimizing ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"new RegExpr()",
						),
						" calls.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2489",
							},
							"#2489",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-join_vars" },
						"minifier: join_vars",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" changed the scope of some variables declared with ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "let"),
						" or ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "const"),
						", which resulted in an error.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2494",
							},
							"#2494",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "parser-property-named-async" },
						"parser: Property named ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "async"),
					),
					(0, i.kt)(
						"p",
						null,
						"There was a regression about parsing a property named ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "async"),
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
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2485",
							},
							"#2485",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "parser-declare-declare-2343" },
						"parser: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"declare declare",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2343",
							},
							"#2343",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now reports an error for ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"declare declare",
						),
						" instead of panicking.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2495",
							},
							"#2495",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "general-createelement-2492" },
						"general: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"createElement()",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2492",
							},
							"#2492",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now does not panic on",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"createElement();\n",
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
								href: "https://github.com/swc-project/swc/pull/2495",
							},
							"#2495",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "inline_globals-optional-2490" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"inline_globals",
						),
						": Optional (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2490",
							},
							"#2490",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Now you can disable ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inline_globals",
						),
						" pass by removing ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"optimizer",
						),
						" key.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2495",
							},
							"#2495",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "variable-renaming-pass" },
						"variable renaming pass",
					),
					(0, i.kt)(
						"p",
						null,
						"There was some bugs in the variable renaming pass, and it caused some problems.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2408",
							},
							"#2408",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
