"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1970],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
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
			function s(e) {
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
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				l = function (e) {
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
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						d = a,
						g = m["".concat(c, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								g,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(g, s({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = m;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var p = 2; p < o; p++) s[p] = n[p];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5441: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.1.7",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2019/12/21/swc-1.1.7",
					source: "@site/blog/2019-12-21-swc-1.1.7.md",
					title: "Changelog: swc v1.1.7",
					description: "Statement Expression type (#512)",
					date: "2019-12-21T00:00:00.000Z",
					formattedDate: "December 21, 2019",
					tags: [],
					readingTime: 0.915,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.8",
						permalink: "/blog/2019/12/24/swc-1.1.8",
					},
					nextItem: {
						title: "Changelog: swc v1.1.6",
						permalink: "/blog/2019/12/14/swc-1.1.6",
					},
				},
				l = [
					{
						value: "Statement Expression type (#512)",
						id: "statement-expression-type-512",
						children: [],
					},
					{
						value: "Regex type (#511)",
						id: "regex-type-511",
						children: [],
					},
					{
						value: "Fixed parsing of const enum (#516)",
						id: "fixed-parsing-of-const-enum-516",
						children: [],
					},
					{
						value: "Fixed space bug of the jsx trnasform (#519)",
						id: "fixed-space-bug-of-the-jsx-trnasform-519",
						children: [],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "statement-expression-type-512" },
						"Statement Expression type (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/512",
							},
							"#512",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("em", { parentName: "p" }, "NOTE:"),
						" Although this is a technically breaking change, I decided not to bump major version as I don't think someone has created a plugin which depends on exact type of an expression statement.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now stores expression statements as a new type named ExpressionStatement. This change is made to provide exact span of an expression statement.",
					),
					(0, o.kt)(
						"h2",
						{ id: "regex-type-511" },
						"Regex type (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/511",
							},
							"#511",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("em", { parentName: "p" }, "NOTE:"),
						" Although this is a technically breaking change, I decided not to bump major version as I don't think someone has created a plugin which depends on exact type of a regexp literal.",
					),
					(0, o.kt)(
						"p",
						null,
						"Type of Regex.expression and Regex.flags is string, not StringLiteral. This matches regexp type from babel and typescript.",
					),
					(0, o.kt)(
						"h2",
						{ id: "fixed-parsing-of-const-enum-516" },
						"Fixed parsing of const enum (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/516",
							},
							"#516",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" previously parsed const enum correctly on debug mode, but it has a bug in release mode. This is fixed and (currently) a const enum works as a normal enum.",
					),
					(0, o.kt)(
						"h2",
						{ id: "fixed-space-bug-of-the-jsx-trnasform-519" },
						"Fixed space bug of the jsx trnasform (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/519",
							},
							"#519",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"<div>Hello World</div>\n",
						),
					),
					(0, o.kt)("p", null, "is compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'React.createElement("div", null, "Hello World");\n',
						),
					),
					(0, o.kt)("p", null, "instead of"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'React.createElement("div", null, "Hello World ");\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
