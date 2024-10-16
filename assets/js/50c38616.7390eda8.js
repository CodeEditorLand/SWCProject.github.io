"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2576],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => f });
			var r = n(7294);
			function a(e, t, n) {
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
			function i(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: i(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = p(e.components);
					return r.createElement(
						c.Provider,
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
						a = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = a,
						d = m["".concat(c, ".").concat(f)] || m[f] || u[f] || i;
					return n
						? r.createElement(
								d,
								o(o({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(d, o({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = n.length,
						o = new Array(i);
					o[0] = m;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(o[1] = l);
					for (var p = 2; p < i; p++) o[p] = n[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5719: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				i = (n(7294), n(3905)),
				o = ["components"],
				l = {
					title: "Changelog: swc v1.2.98",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/10/16/swc-1.2.98",
					source: "@site/blog/2021-10-16-swc-1.2.98.md",
					title: "Changelog: swc v1.2.98",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/199?closed=1",
					date: "2021-10-16T00:00:00.000Z",
					formattedDate: "October 16, 2021",
					tags: [],
					readingTime: 0.53,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.99",
						permalink: "/blog/2021/10/18/swc-1.2.99",
					},
					nextItem: {
						title: "Changelog: swc v1.2.97",
						permalink: "/blog/2021/10/15/swc-1.2.97",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "variable analyzer",
								id: "variable-analyzer",
								children: [],
							},
							{
								value: "ecapes in jsx (#2351)",
								id: "ecapes-in-jsx-2351",
								children: [],
							},
							{
								value: "minifier: <code>let</code> (#2446)",
								id: "minifier-let-2446",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/199?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/199?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "variable-analyzer" },
						"variable analyzer",
					),
					(0, i.kt)(
						"p",
						null,
						"Due to recent changes, there was a regression in the variable analyzer.",
					),
					(0, i.kt)("p", null, "In the code below,"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const bar = () => {\n  console.log(a);\n};\n\nconst { a = b } = foo;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"if a pass before variable analyzer drops ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "b"),
						", it resulted in a bug because ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "{ a }"),
						" is different from ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ a = <n/a> }",
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
								href: "https://github.com/swc-project/swc/pull/2448",
							},
							"#2448",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "ecapes-in-jsx-2351" },
						"ecapes in jsx (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2351",
							},
							"#2351",
						),
						")",
					),
					(0, i.kt)("p", null, "The escape in jsx is fixed."),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2447",
							},
							"#2447",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-let-2446" },
						"minifier: ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "let"),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2446",
							},
							"#2446",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the minifier may made a variable named ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "let"),
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
								href: "https://github.com/swc-project/swc/pull/2447",
							},
							"#2447",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
