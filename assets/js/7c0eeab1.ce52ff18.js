"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4255],
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
			function o(e, t) {
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
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
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
								"function" == typeof e ? e(t) : l(l({}, t), e)),
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
						o = e.originalType,
						c = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = a,
						d = m["".concat(c, ".").concat(f)] || m[f] || u[f] || o;
					return n
						? r.createElement(
								d,
								l(l({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(d, l({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						l = new Array(o);
					l[0] = m;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(l[1] = i);
					for (var p = 2; p < o; p++) l[p] = n[p];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		466: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				l = ["components"],
				i = {
					title: "Changelog: swc v1.1.14",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/01/23/swc-1.1.14",
					source: "@site/blog/2020-01-23-swc-1.1.14.md",
					title: "Changelog: swc v1.1.14",
					description: "Bugfixes",
					date: "2020-01-23T00:00:00.000Z",
					formattedDate: "January 23, 2020",
					tags: [],
					readingTime: 0.905,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.15",
						permalink: "/blog/2020/01/24/swc-1.1.15",
					},
					nextItem: {
						title: "Changelog: swc v1.1.13",
						permalink: "/blog/2020/01/17/swc-1.1.13",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "throw in nested finally block (#601)",
								id: "throw-in-nested-finally-block-601",
								children: [],
							},
							{
								value: "use-use conflict in hygiene (#599)",
								id: "use-use-conflict-in-hygiene-599",
								children: [],
							},
							{
								value: "Optimizer bug (#596)",
								id: "optimizer-bug-596",
								children: [],
							},
						],
					},
					{
						value: "Span improvements",
						id: "span-improvements",
						children: [],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "throw-in-nested-finally-block-601" },
						"throw in nested finally block (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/601",
							},
							"#601",
						),
						")",
					),
					(0, o.kt)("p", null, "Previously,"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function* foo() {\n  try {\n  } finally {\n    try {\n    } finally {\n      throw new Error("foo");\n    }\n  }\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"make ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" panic. ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is now ok with it.",
					),
					(0, o.kt)(
						"p",
						null,
						"It was really hard to create a minimal reporduction case.",
					),
					(0, o.kt)(
						"h3",
						{ id: "use-use-conflict-in-hygiene-599" },
						"use-use conflict in hygiene (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/599",
							},
							"#599",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"All of the ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"_templateObject",
						),
						" in below code refer to differect function.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export function foo() {\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n  console.log(i18n(_templateObject()));\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"But as previously swc cannot detect use-use conflict, it was miscompiled as-is.",
					),
					(0, o.kt)(
						"h3",
						{ id: "optimizer-bug-596" },
						"Optimizer bug (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/596",
							},
							"#596",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/erikdesjardins",
							},
							"@erikdesjardins",
						),
						", swc's optimizer does not break codes like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (0 | x) y = 1;\nelse y = 2;\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (1 | x) y = 1;\nelse y = 2;\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (0 & x) y = 1;\nelse y = 2;\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (1 & x) y = 1;\nelse y = 2;\n",
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "span-improvements" },
						"Span improvements",
					),
					(0, o.kt)(
						"p",
						null,
						"Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						", there are more span improvements.",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"as and const assertions (",
							(0, o.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/swc-project/swc/pull/593",
								},
								"#593",
							),
							")",
						),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"semicolon of a dynamic import statement (",
							(0, o.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/swc-project/swc/pull/595",
								},
								"#595",
							),
							")",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
