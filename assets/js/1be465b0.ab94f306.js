"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5497],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function i(e, t) {
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
						? i(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function a(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var p = n.createContext({}),
				l = function (e) {
					var t = n.useContext(p),
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
						p.Provider,
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
						i = e.originalType,
						p = e.parentName,
						s = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						f = o,
						d = m["".concat(p, ".").concat(f)] || m[f] || u[f] || i;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						c = new Array(i);
					c[0] = m;
					var a = {};
					for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : o),
						(c[1] = a);
					for (var l = 2; l < i; l++) c[l] = r[l];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		1080: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				c = ["components"],
				a = {
					title: "Changelog: swc v1.2.93",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2021/10/03/swc-1.2.93",
					source: "@site/blog/2021-10-03-swc-1.2.93.md",
					title: "Changelog: swc v1.2.93",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/194?closed=1",
					date: "2021-10-03T00:00:00.000Z",
					formattedDate: "October 3, 2021",
					tags: [],
					readingTime: 0.335,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.94",
						permalink: "/blog/2021/10/08/swc-1.2.94",
					},
					nextItem: {
						title: "Changelog: swc v1.2.92",
						permalink: "/blog/2021/09/29/swc-1.2.92",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Updated rustc (#2277)",
								id: "updated-rustc-2277",
								children: [],
							},
							{
								value: "Less malloc",
								id: "less-malloc",
								children: [],
							},
							{
								value: "Various perf improvements",
								id: "various-perf-improvements",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>minifier</code>: Infinite loop",
								id: "minifier-infinite-loop",
								children: [],
							},
							{
								value: "<code>codegen</code>: Fix for numbers (#2294)",
								id: "codegen-fix-for-numbers-2294",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/194?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/194?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "updated-rustc-2277" },
						"Updated rustc (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2277",
							},
							"#2277",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses latest version of rustc.",
					),
					(0, i.kt)(
						"p",
						null,
						"Done by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2332",
							},
							"#2332",
						),
						".",
					),
					(0, i.kt)("h3", { id: "less-malloc" }, "Less malloc"),
					(0, i.kt)(
						"p",
						null,
						"Done by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2318",
							},
							"#2318",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "various-perf-improvements" },
						"Various perf improvements",
					),
					(0, i.kt)(
						"p",
						null,
						"Done by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2313",
							},
							"#2313",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "minifier-infinite-loop" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"minifier",
						),
						": Infinite loop",
					),
					(0, i.kt)(
						"p",
						null,
						"It was reported by a ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "next.js"),
						" team member.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2323",
							},
							"#2323",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-fix-for-numbers-2294" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"codegen",
						),
						": Fix for numbers (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2294",
							},
							"#2294",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2317",
							},
							"#2317",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
