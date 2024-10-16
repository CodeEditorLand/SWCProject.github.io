"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5185],
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
			function c(e, t) {
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
						? c(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: c(Object(n)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							c = Object.keys(e);
						for (r = 0; r < c.length; r++)
							(n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(e);
					for (r = 0; r < c.length; r++)
						(n = c[r]),
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
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
						c = e.originalType,
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						d = o,
						h = m["".concat(l, ".").concat(d)] || m[d] || u[d] || c;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, s));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = n.length,
						a = new Array(c);
					a[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(a[1] = i);
					for (var p = 2; p < c; p++) a[p] = n[p];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		2768: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				c = (n(7294), n(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.2.87",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/09/15/swc-1.2.87",
					source: "@site/blog/2021-09-15-swc-1.2.87.md",
					title: "Changelog: swc v1.2.87",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/188?closed=1",
					date: "2021-09-15T00:00:00.000Z",
					formattedDate: "September 15, 2021",
					tags: [],
					readingTime: 0.28,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.88",
						permalink: "/blog/2021/09/16/swc-1.2.88",
					},
					nextItem: {
						title: "Changelog: swc v1.2.86",
						permalink: "/blog/2021/09/11/swc-1.2.86",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Automatic <code>tsx</code>",
								id: "automatic-tsx",
								children: [],
							},
							{
								value: "<code>inlineSourceContents</code> (#2244)",
								id: "inlinesourcecontents-2244",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>new.target</code>",
								id: "newtarget",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, a);
				return (0, c.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/188?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/188?closed=1",
						),
					),
					(0, c.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, c.kt)(
						"h3",
						{ id: "automatic-tsx" },
						"Automatic ",
						(0, c.kt)("inlineCode", { parentName: "h3" }, "tsx"),
					),
					(0, c.kt)(
						"p",
						null,
						"Implemeneted by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						" and by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2230",
							},
							"#2230",
						),
					),
					(0, c.kt)(
						"h3",
						{ id: "inlinesourcecontents-2244" },
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"inlineSourceContents",
						),
						" (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2244",
							},
							"#2244",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports inlining sources in a source map.",
					),
					(0, c.kt)(
						"p",
						null,
						"Implemeneted by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2245",
							},
							"#2245",
						),
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "newtarget" },
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"new.target",
						),
					),
					(0, c.kt)(
						"p",
						null,
						"Actually this was implemented in a previous version but not included.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						" and by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2231",
							},
							"#2231",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
