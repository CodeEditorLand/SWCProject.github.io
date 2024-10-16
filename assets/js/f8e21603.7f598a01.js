"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9905],
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
			function p(e, t) {
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
			var a = n.createContext({}),
				l = function (e) {
					var t = n.useContext(a),
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
						a.Provider,
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
						a = e.parentName,
						s = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						f = o,
						d = m["".concat(a, ".").concat(f)] || m[f] || u[f] || i;
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
					var p = {};
					for (var a in t) hasOwnProperty.call(t, a) && (p[a] = t[a]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(c[1] = p);
					for (var l = 2; l < i; l++) c[l] = r[l];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4759: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => a,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				c = ["components"],
				p = {
					title: "Changelog: swc v1.2.85",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				a = void 0,
				l = {
					permalink: "/blog/2021/09/09/swc-1.2.85",
					source: "@site/blog/2021-09-09-swc-1.2.85.md",
					title: "Changelog: swc v1.2.85",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/186?closed=1",
					date: "2021-09-09T00:00:00.000Z",
					formattedDate: "September 9, 2021",
					tags: [],
					readingTime: 0.575,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.86",
						permalink: "/blog/2021/09/11/swc-1.2.86",
					},
					nextItem: {
						title: "Changelog: swc v1.2.84",
						permalink: "/blog/2021/09/01/swc-1.2.84",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "minifier (#21083)",
								id: "minifier-21083",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "minifier: Empty return (#2214)",
								id: "minifier-empty-return-2214",
								children: [],
							},
							{
								value: "codegen: unary minus (#2213)",
								id: "codegen-unary-minus-2213",
								children: [],
							},
							{
								value: "typescript: re-export of type (#2219)",
								id: "typescript-re-export-of-type-2219",
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
								href: "https://github.com/swc-project/swc/milestone/186?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/186?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "minifier-21083" },
						"minifier (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/2183",
							},
							"#21083",
						),
						")",
					),
					(0, i.kt)("p", null, "Lots of rules are implemeneted."),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "minifier-empty-return-2214" },
						"minifier: Empty return (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2214",
							},
							"#2214",
						),
						")",
					),
					(0, i.kt)("p", null, "Previously swc broke code like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function f(a, b) {\n  if (a) {\n    if (b) return;\n    foo();\n  }\n  bar();\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2183",
							},
							"#2183",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-unary-minus-2213" },
						"codegen: unary minus (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2213",
							},
							"#2213",
						),
						")",
					),
					(0, i.kt)("p", null, "Preivsouly swc broke code like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function f(a, b, c) {\n  return a - -b * c;\n}\n",
						),
					),
					(0, i.kt)("p", null, "if minification is enabled."),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2183",
							},
							"#2183",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-re-export-of-type-2219" },
						"typescript: re-export of type (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2219",
							},
							"#2219",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsouly swc didn't remove ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export { TestInfo }",
						),
						" in the code below.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import type { TestInfo } from "./config";\n\nexport { TestInfo };\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2220",
							},
							"#2220",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
