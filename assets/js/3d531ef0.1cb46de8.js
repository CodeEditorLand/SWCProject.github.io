"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6224],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => f });
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
				s = function (e) {
					var t = p(e.components);
					return r.createElement(
						l.Provider,
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
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = o,
						d = m["".concat(l, ".").concat(f)] || m[f] || u[f] || a;
					return n
						? r.createElement(
								d,
								i(i({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(d, i({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
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
			m.displayName = "MDXCreateElement";
		},
		237: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.22",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/13/swc-1.1.22",
					source: "@site/blog/2020-02-13-swc-1.1.22.md",
					title: "Changelog: swc v1.1.22",
					description: "Improvements",
					date: "2020-02-13T00:00:00.000Z",
					formattedDate: "February 13, 2020",
					tags: [],
					readingTime: 0.265,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.21",
						permalink: "/blog/2020/02/13/swc-1.1.21",
					},
					nextItem: {
						title: "Changelog: swc v1.1.23 - hotfix",
						permalink: "/blog/2020/02/13/swc-1.1.23",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Optimizer",
								id: "optimizer",
								children: [],
							},
						],
					},
					{
						value: "Hotfix",
						id: "hotfix",
						children: [
							{
								value: "hygiene pass",
								id: "hygiene-pass",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)("h3", { id: "optimizer" }, "Optimizer"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can reduce",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let b = 2;\n\nlet a = 1;\nif (b) {\n  a = 2;\n}\n\nlet c;\nif (a) {\n  c = 3;\n}\nconsole.log(c);\n",
						),
					),
					(0, a.kt)("p", null, "down to"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"console.log(3);\n",
						),
					),
					(0, a.kt)("h2", { id: "hotfix" }, "Hotfix"),
					(0, a.kt)("h3", { id: "hygiene-pass" }, "hygiene pass"),
					(0, a.kt)(
						"p",
						null,
						"Global variable accesses are marked with the same mark.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
