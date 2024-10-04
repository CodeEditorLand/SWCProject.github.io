"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8345],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
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
			function p(e, t) {
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
						? p(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: p(Object(r)).forEach(function (t) {
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
							p = Object.keys(e);
						for (n = 0; n < p.length; n++)
							(r = p[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var p = Object.getOwnPropertySymbols(e);
					for (n = 0; n < p.length; n++)
						(r = p[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var c = n.createContext({}),
				s = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = s(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						p = e.originalType,
						c = e.parentName,
						l = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(r),
						h = o,
						d = u["".concat(c, ".").concat(h)] || u[h] || m[h] || p;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var p = r.length,
						i = new Array(p);
					i[0] = u;
					var a = {};
					for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : o),
						(i[1] = a);
					for (var s = 2; s < p; s++) i[s] = r[s];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		4956: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => c,
					metadata: () => s,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				p = (r(7294), r(3905)),
				i = ["components"],
				a = {
					title: "Changelog: swc v1.2.92",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				s = {
					permalink: "/blog/2021/09/29/swc-1.2.92",
					source: "@site/blog/2021-09-29-swc-1.2.92.md",
					title: "Changelog: swc v1.2.92",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/193?closed=1",
					date: "2021-09-29T00:00:00.000Z",
					formattedDate: "September 29, 2021",
					tags: [],
					readingTime: 0.595,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.93",
						permalink: "/blog/2021/10/03/swc-1.2.93",
					},
					nextItem: {
						title: "Changelog: swc v1.2.91",
						permalink: "/blog/2021/09/25/swc-1.2.91",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>parser</code>: Error for import/export specifiers without comma",
								id: "parser-error-for-importexport-specifiers-without-comma",
								children: [],
							},
							{
								value: "<code>parser</code>: Improved error message.",
								id: "parser-improved-error-message",
								children: [],
							},
							{
								value: "<code>Visitor</code>",
								id: "visitor",
								children: [],
							},
							{
								value: "ergonomic brand checks (#2064)",
								id: "ergonomic-brand-checks-2064",
								children: [],
							},
							{
								value: "type-only import/export specifiers (#2309)",
								id: "type-only-importexport-specifiers-2309",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>minifier</code>: Infinite loop (#2257)",
								id: "minifier-infinite-loop-2257",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, p.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, p.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/193?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/193?closed=1",
						),
					),
					(0, p.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, p.kt)(
						"h3",
						{
							id: "parser-error-for-importexport-specifiers-without-comma",
						},
						(0, p.kt)("inlineCode", { parentName: "h3" }, "parser"),
						": Error for import/export specifiers without comma",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits parsing errors for",
					),
					(0, p.kt)(
						"pre",
						null,
						(0, p.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"import { a b c } from 'mod'\n\nexport { a b c }\n",
						),
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2302",
							},
							"#2302",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "parser-improved-error-message" },
						(0, p.kt)("inlineCode", { parentName: "h3" }, "parser"),
						": Improved error message.",
					),
					(0, p.kt)(
						"p",
						null,
						(0, p.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now use quotes to denote tokens on parsing failure.",
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2304",
							},
							"#2304",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "visitor" },
						(0, p.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"Visitor",
						),
					),
					(0, p.kt)("p", null, "You can now import visitor like"),
					(0, p.kt)(
						"pre",
						null,
						(0, p.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { Visitor } from "@swc/core/Visitor";\n',
						),
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/xnuk",
							},
							"@xnuk",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2291",
							},
							"#2291",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "ergonomic-brand-checks-2064" },
						"ergonomic brand checks (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2064",
							},
							"#2064",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2079",
							},
							"#2079",
						),
						".",
					),
					(0, p.kt)(
						"h3",
						{ id: "type-only-importexport-specifiers-2309" },
						"type-only import/export specifiers (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/2309",
							},
							"#2309",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						"Implemented by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2309",
							},
							"#2309",
						),
						".",
					),
					(0, p.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, p.kt)(
						"h3",
						{ id: "minifier-infinite-loop-2257" },
						(0, p.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"minifier",
						),
						": Infinite loop (",
						(0, p.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2257",
							},
							"#2257",
						),
						")",
					),
					(0, p.kt)(
						"p",
						null,
						"Fixed by ",
						(0, p.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2283",
							},
							"#2283",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
