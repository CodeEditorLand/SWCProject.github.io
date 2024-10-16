"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9418],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => h });
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
			function i(e) {
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
			function c(e, t) {
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
				d = {
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
						l = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						h = a,
						u = m["".concat(l, ".").concat(h)] || m[h] || d[h] || o;
					return n
						? r.createElement(
								u,
								i(i({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(u, i({ ref: t }, s));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = m;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(i[1] = c);
					for (var p = 2; p < o; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		6234: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.2.89",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/09/22/swc-1.2.89",
					source: "@site/blog/2021-09-22-swc-1.2.89.md",
					title: "Changelog: swc v1.2.89",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/190?closed=1",
					date: "2021-09-22T00:00:00.000Z",
					formattedDate: "September 22, 2021",
					tags: [],
					readingTime: 0.615,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.90",
						permalink: "/blog/2021/09/23/swc-1.2.90",
					},
					nextItem: {
						title: "Changelog: swc v1.2.88",
						permalink: "/blog/2021/09/16/swc-1.2.88",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>wasm</code>: <code>paths</code>, <code>baseUrl</code>, <code>hygiene</code>",
								id: "wasm-paths-baseurl-hygiene",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>hygiene</code> (#2211)",
								id: "hygiene-2211",
								children: [],
							},
							{
								value: "<code>codegen</code>: Sourcemap of string literals (#2253)",
								id: "codegen-sourcemap-of-string-literals-2253",
								children: [],
							},
							{
								value: "<code>codegen</code>: <code>static</code> before <code>readonly</code>",
								id: "codegen-static-before-readonly",
								children: [],
							},
							{
								value: "<code>minifier</code>: Variable merging (#2262)",
								id: "minifier-variable-merging-2262",
								children: [],
							},
							{
								value: "<code>opt-chain</code>: ES2019",
								id: "opt-chain-es2019",
								children: [],
							},
						],
					},
				],
				d = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/190?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/190?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "wasm-paths-baseurl-hygiene" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "wasm"),
						": ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "paths"),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"baseUrl",
						),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Now ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm",
						),
						" supports ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.paths",
						),
						" and ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.baseUrl",
						),
						". Additionally, it now renames variables correctly.",
					),
					(0, o.kt)(
						"p",
						null,
						"Implemented by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2279",
							},
							"#2279",
						),
						".",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "hygiene-2211" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2211",
							},
							"#2211",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" pass didn't consider child scope correctly.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2266",
							},
							"#2266",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-sourcemap-of-string-literals-2253" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"codegen",
						),
						": Sourcemap of string literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2253",
							},
							"#2253",
						),
						")",
					),
					(0, o.kt)("p", null, "SourceMaps were off by one."),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2256",
							},
							"#2256",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-static-before-readonly" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"codegen",
						),
						": ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "static"),
						" before ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"readonly",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the code emitted ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"readonly",
						),
						" before ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "static"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2271",
							},
							"#2271",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-variable-merging-2262" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"minifier",
						),
						": Variable merging (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2262",
							},
							"#2262",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the minifier wrongly dropped some variables.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2271",
							},
							"#2271",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "opt-chain-es2019" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"opt-chain",
						),
						": ES2019",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" treated it as a pass for ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "ES2018"),
						", but now it's treated as a pass for ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "ES2019"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2247",
							},
							"#2247",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
