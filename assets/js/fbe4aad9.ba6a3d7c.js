"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4738],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => d });
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
			function i(e) {
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
			function s(e, t) {
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
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
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
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						d = a,
						h = m["".concat(p, ".").concat(d)] || m[d] || u[d] || o;
					return r
						? n.createElement(
								h,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, i({ ref: t }, l));
				});
			function d(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = m;
					var s = {};
					for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : a),
						(i[1] = s);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		3675: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.1.43",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2020/05/16/swc-1.1.43",
					source: "@site/blog/2020-05-16-swc-1.1.43.md",
					title: "Changelog: swc v1.1.43",
					description: "Bugfixes",
					date: "2020-05-16T00:00:00.000Z",
					formattedDate: "May 16, 2020",
					tags: [],
					readingTime: 0.66,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.45",
						permalink: "/blog/2020/05/19/swc-1.1.45",
					},
					nextItem: {
						title: "Changelog: swc v1.1.41",
						permalink: "/blog/2020/05/05/swc-1.1.41",
					},
				},
				l = [
					{ value: "Bugfixes", id: "bugfixes", children: [] },
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "Decorators on parameters (#775)",
								id: "decorators-on-parameters-775",
								children: [],
							},
							{
								value: "No-substitution template literals as type (#767)",
								id: "no-substitution-template-literals-as-type-767",
								children: [],
							},
						],
					},
					{
						value: "Performance improvements",
						id: "performance-improvements",
						children: [
							{
								value: "Parser (#774)",
								id: "parser-774",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "decorators-on-parameters-775" },
						"Decorators on parameters (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/775",
							},
							"#775",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The following is valid TypeScript code:",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class MyClass {\n  myMethod(@myDecorator myParameter: string) {}\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" cannot parse this as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" did not support decorators on a parameter. Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						", the parser gets abillity to handle it.",
					),
					(0, o.kt)(
						"h3",
						{ id: "no-substitution-template-literals-as-type-767" },
						"No-substitution template literals as type (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/767",
							},
							"#767",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The code below is valid, and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports the syntax. Implemented by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						".",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export type Permission = `CREATE_INSTANT_INVITE`;\n",
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "performance-improvements" },
						"Performance improvements",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-774" },
						"Parser (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/774",
							},
							"#774",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Riccardo Dambrosio sent me an email which contains how can I improve the performance of parser. Based on the fact that 99% of input is ascii, he suggested short-circuiting ascii letters in the lexer.",
					),
					(0, o.kt)(
						"p",
						null,
						"I've tested it and it makes the parser of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" 10% ~ 13% faster.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
