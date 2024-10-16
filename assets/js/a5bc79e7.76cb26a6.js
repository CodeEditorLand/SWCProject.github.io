"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8163],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => d });
			var n = r(7294);
			function o(e, t, r) {
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
			function a(e, t) {
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
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: a(Object(r)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var l = n.createContext({}),
				c = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = c(e.components);
					return n.createElement(
						l.Provider,
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
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						d = o,
						y = m["".concat(l, ".").concat(d)] || m[d] || u[d] || a;
					return r
						? n.createElement(
								y,
								i(i({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(y, i({ ref: t }, s));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = m;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(i[1] = p);
					for (var c = 2; c < a; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4446: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				p = {
					title: "Changelog: swc v1.1.24",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2020/02/13/swc-1.1.24",
					source: "@site/blog/2020-02-13-swc-1.1.24.md",
					title: "Changelog: swc v1.1.24",
					description: "Features",
					date: "2020-02-13T00:00:00.000Z",
					formattedDate: "February 13, 2020",
					tags: [],
					readingTime: 0.24,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.23 - hotfix",
						permalink: "/blog/2020/02/13/swc-1.1.23",
					},
					nextItem: {
						title: "Changelog: swc v1.1.19",
						permalink: "/blog/2020/02/07/swc-1.1.19",
					},
				},
				s = [
					{
						value: "Features",
						id: "features",
						children: [
							{
								value: "type-only imports and exports (TS 3.8) (#662)",
								id: "type-only-imports-and-exports-ts-38-662",
								children: [],
							},
						],
					},
					{
						value: "Binary size reduction (#663)",
						id: "binary-size-reduction-663",
						children: [],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "features" }, "Features"),
					(0, a.kt)(
						"h3",
						{ id: "type-only-imports-and-exports-ts-38-662" },
						"type-only imports and exports (TS 3.8) (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/662",
							},
							"#662",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This is enabled by default, and see ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports",
							},
							"https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports",
						),
						" for details.",
					),
					(0, a.kt)(
						"h2",
						{ id: "binary-size-reduction-663" },
						"Binary size reduction (",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/663",
							},
							"#663",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Binary size is reduced without any performance drop.",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Windows: ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"31.1MB",
							),
							" => ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"24.4MB",
							),
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Darwin: ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"23.3MB",
							),
							" => ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"19MB",
							),
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Linux: ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"22.3MB",
							),
							" => ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"18.2MB",
							),
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
