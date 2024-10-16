"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[50],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
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
			var s = r.createContext({}),
				p = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
					return r.createElement(
						s.Provider,
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
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						d = o,
						f = m["".concat(s, ".").concat(d)] || m[d] || u[d] || a;
					return n
						? r.createElement(
								f,
								i(i({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(f, i({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = m;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
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
		3597: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.21",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/02/13/swc-1.1.21",
					source: "@site/blog/2020-02-13-swc-1.1.21.md",
					title: "Changelog: swc v1.1.21",
					description: "Improvements",
					date: "2020-02-13T00:00:00.000Z",
					formattedDate: "February 13, 2020",
					tags: [],
					readingTime: 0.565,
					truncated: !1,
					prevItem: {
						title: "Why is swc fast?",
						permalink: "/blog/2020/02/16/why-is-swc-fast",
					},
					nextItem: {
						title: "Changelog: swc v1.1.22",
						permalink: "/blog/2020/02/13/swc-1.1.22",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Automatic typescript detection (#655)",
								id: "automatic-typescript-detection-655",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "TypeScript const assertion (#656)",
								id: "typescript-const-assertion-656",
								children: [],
							},
							{
								value: "cli bugfixes (#658)",
								id: "cli-bugfixes-658",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"h3",
						{ id: "automatic-typescript-detection-655" },
						"Automatic typescript detection (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/655",
							},
							"#655",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"As typescript support is embedded in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" by default, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" handles it out of the box.",
					),
					(0, a.kt)(
						"p",
						null,
						"You don't need any configuration to use typescript. Also note that It also detects ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsx"),
						" and automatically enables ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsx"),
						" for the files whose name ends with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".tsx"),
						".",
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "typescript-const-assertion-656" },
						"TypeScript const assertion (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/656",
							},
							"#656",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export const x = { text: "hello" } as const;\n',
						),
					),
					(0, a.kt)("p", null, "is transcompiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export const x = { text: "hello" };\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "cli-bugfixes-658" },
						"cli bugfixes (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/658",
							},
							"#658",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Exclude fields in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" now works correctly.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "test": ".*.tsx$",\n  "exclude": ".*.spec.tsx$",\n  "jsc": {\n    "target": "es2018",\n    "parser": {\n      "syntax": "typescript",\n      "tsx": true\n    }\n  }\n}\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
