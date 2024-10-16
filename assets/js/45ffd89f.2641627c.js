"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1988],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => g });
			var r = n(7294);
			function o(e, t, n) {
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
			function a(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return r.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				f = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						u = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(n),
						g = o,
						m = f["".concat(l, ".").concat(g)] || f[g] || s[g] || a;
					return n
						? r.createElement(
								m,
								i(i({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(m, i({ ref: t }, u));
				});
			function g(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = f;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		9822: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => f,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.29",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/27/swc-1.1.29",
					source: "@site/blog/2020-02-27-swc-1.1.29.md",
					title: "Changelog: swc v1.1.29",
					description: "Bugfix",
					date: "2020-02-27T00:00:00.000Z",
					formattedDate: "February 27, 2020",
					tags: [],
					readingTime: 0.16,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.30",
						permalink: "/blog/2020/02/29/swc-1.1.30",
					},
					nextItem: {
						title: "Changelog: swc v1.1.28",
						permalink: "/blog/2020/02/22/swc-1.1.28",
					},
				},
				u = [
					{
						value: "Bugfix",
						id: "bugfix",
						children: [
							{
								value: "hoisting (#689)",
								id: "hoisting-689",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function f(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfix" }, "Bugfix"),
					(0, a.kt)(
						"h3",
						{ id: "hoisting-689" },
						"hoisting (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/689",
							},
							"#689",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports declaring a ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "var"),
						" after usage.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function test() {\n  if (typeof Missing == typeof EXTENDS) {\n    console.log("missing");\n  }\n  var EXTENDS = "test";\n}\n',
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
