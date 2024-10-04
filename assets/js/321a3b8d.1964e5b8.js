"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7243],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => d });
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
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
			function p(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
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
									(o[n] = e[n]));
				}
				return o;
			}
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = c(e.components);
					return r.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						s = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(n),
						d = o,
						f = u["".concat(l, ".").concat(d)] || u[d] || m[d] || i;
					return n
						? r.createElement(
								f,
								a(a({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(f, a({ ref: t }, s));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = n.length,
						a = new Array(i);
					a[0] = u;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(a[1] = p);
					for (var c = 2; c < i; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		2335: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => p,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => s,
					default: () => u,
				});
			var r = n(7462),
				o = n(3366),
				i = (n(7294), n(3905)),
				a = ["components"],
				p = {
					title: "Changelog: swc v1.2.100",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2021/10/19/swc-1.2.100",
					source: "@site/blog/2021-10-19-swc-1.2.100.md",
					title: "Changelog: swc v1.2.100",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/201?closed=1",
					date: "2021-10-19T00:00:00.000Z",
					formattedDate: "October 19, 2021",
					tags: [],
					readingTime: 0.535,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.101",
						permalink: "/blog/2021/10/20/swc-1.2.101",
					},
					nextItem: {
						title: "Changelog: swc v1.2.99",
						permalink: "/blog/2021/10/18/swc-1.2.99",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Better testing",
								id: "better-testing",
								children: [],
							},
							{
								value: "map for <code>globals</code>",
								id: "map-for-globals",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "sourcemap: <code>names</code>",
								id: "sourcemap-names",
								children: [],
							},
							{
								value: "minifier: Inlining",
								id: "minifier-inlining",
								children: [],
							},
							{
								value: "regenerator",
								id: "regenerator",
								children: [],
							},
						],
					},
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					n = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/201?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/201?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)("h3", { id: "better-testing" }, "Better testing"),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses extensive test suite of typescript to prevent regressions.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2456",
							},
							"#2456",
						),
						" and ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2468",
							},
							"#2468",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "map-for-globals" },
						"map for ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"globals",
						),
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports specifying a map in optimizer config.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2467",
							},
							"#2467",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "sourcemap-names" },
						"sourcemap: ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "names"),
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits proper ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mappings",
						),
						" for sourcemap. Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" did not used 5th value of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mappings",
						),
						" field, which is index to the entry in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "names"),
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
								href: "https://github.com/swc-project/swc/pull/2457",
							},
							"#2457",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-inlining" },
						"minifier: Inlining",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now check more conditions before inlining.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2459",
							},
							"#2459",
						),
						".",
					),
					(0, i.kt)("h3", { id: "regenerator" }, "regenerator"),
					(0, i.kt)(
						"p",
						null,
						"There was some bugs in the ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" pass.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2460",
							},
							"#2460",
						),
						" and ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2463",
							},
							"#2463",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
