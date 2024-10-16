"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3249],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function c(e) {
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
			function p(e, t) {
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
			var i = n.createContext({}),
				l = function (e) {
					var t = n.useContext(i),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = l(e.components);
					return n.createElement(
						i.Provider,
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
						i = e.parentName,
						s = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						f = a,
						d = m["".concat(i, ".").concat(f)] || m[f] || u[f] || o;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						c = new Array(o);
					c[0] = m;
					var p = {};
					for (var i in t) hasOwnProperty.call(t, i) && (p[i] = t[i]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : a),
						(c[1] = p);
					for (var l = 2; l < o; l++) c[l] = r[l];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		9534: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => i,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				c = ["components"],
				p = {
					title: "Changelog: swc v1.1.2",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				l = {
					permalink: "/blog/2019/12/02/swc-1.1.2",
					source: "@site/blog/2019-12-02-swc-1.1.2.md",
					title: "Changelog: swc v1.1.2",
					description: "Fixed a parser bug (#480)",
					date: "2019-12-02T00:00:00.000Z",
					formattedDate: "December 2, 2019",
					tags: [],
					readingTime: 0.325,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.3",
						permalink: "/blog/2019/12/04/swc-1.1.3",
					},
					nextItem: {
						title: "Changelog: swc v1.1.1",
						permalink: "/blog/2019/12/01/swc-1.1.1",
					},
				},
				s = [
					{
						value: "Fixed a parser bug (#480)",
						id: "fixed-a-parser-bug-480",
						children: [],
					},
					{
						value: "Preserve space in jsx (#481)",
						id: "preserve-space-in-jsx-481",
						children: [],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "fixed-a-parser-bug-480" },
						"Fixed a parser bug (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/480",
							},
							"#480",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						"'s parser incorrectly parsed ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "1.09"),
						" as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "1.9"),
						". ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now parses it correctly.",
					),
					(0, o.kt)(
						"h2",
						{ id: "preserve-space-in-jsx-481" },
						"Preserve space in jsx (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/481",
							},
							"#481",
						),
						")",
					),
					(0, o.kt)("p", null, "Previousely,"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-jsx" },
							"const a = <span> {foo}</span>;\n",
						),
					),
					(0, o.kt)("p", null, "was compield to"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const a = React.createElement("span", null, foo);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						", which is wrong. Starting with ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "v1.1.2"),
						", ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" compiles it as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const a = React.createElement("span", null, " ", foo);\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
