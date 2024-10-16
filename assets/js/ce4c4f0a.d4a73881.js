"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[904],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
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
			function l(e) {
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
			function s(e, t) {
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
			var i = r.createContext({}),
				c = function (e) {
					var t = r.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(
						i.Provider,
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						i = e.parentName,
						p = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(n),
						m = o,
						h = d["".concat(i, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								h,
								l(l({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, l({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						l = new Array(a);
					l[0] = d;
					var s = {};
					for (var i in t) hasOwnProperty.call(t, i) && (s[i] = t[i]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(l[1] = s);
					for (var c = 2; c < a; c++) l[c] = n[c];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		8191: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => i,
					metadata: () => c,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				l = ["components"],
				s = {
					title: "Changelog: swc v1.2.38",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				c = {
					permalink: "/blog/2020/11/08/swc-1.2.38",
					source: "@site/blog/2020-11-08-swc-1.2.38.md",
					title: "Changelog: swc v1.2.38",
					description: "Bugfixes",
					date: "2020-11-08T00:00:00.000Z",
					formattedDate: "November 8, 2020",
					tags: [],
					readingTime: 1.21,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.39",
						permalink: "/blog/2020/11/21/swc-1.2.39",
					},
					nextItem: {
						title: "Changelog: swc v1.2.37",
						permalink: "/blog/2020/10/29/swc-1.2.37",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Parenthesis with comments (#1203)",
								id: "parenthesis-with-comments-1203",
								children: [],
							},
							{
								value: "bundler: Stack overflow / circular imports (#1196, #1205)",
								id: "bundler-stack-overflow--circular-imports-1196-1205",
								children: [],
							},
							{
								value: "bundler: Handle swc helpers (#1199)",
								id: "bundler-handle-swc-helpers-1199",
								children: [],
							},
							{
								value: "Caching of import.meta (#1201)",
								id: "caching-of-importmeta-1201",
								children: [],
							},
							{
								value: "resolver: hoist class decls (#1200)",
								id: "resolver-hoist-class-decls-1200",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, l);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "parenthesis-with-comments-1203" },
						"Parenthesis with comments (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1203",
							},
							"#1203",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						"[swc][]",
						" miscompiled",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'function isModuleWrapper(node: Expression) {\n  return (\n    // It\'s an anonymous function expression that wraps module\n    (node.type === "FunctionExpression" && !node.id) ||\n    node.type === "ArrowFunctionExpression" ||\n    isModuleId(node) ||\n    (node.type === "ArrayExpression" &&\n      node.elements.length > 1 &&\n      isModuleId(node.elements[0]))\n  );\n}\n',
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function isModuleWrapper(node) {\n  return; // It\'s an anonymous function expression that wraps module\n  (node.type === "FunctionExpression" && !node.id) ||\n    node.type === "ArrowFunctionExpression" ||\n    isModuleId(node) ||\n    (node.type === "ArrayExpression" &&\n      node.elements.length > 1 &&\n      isModuleId(node.elements[0]));\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This is now fixed fundamentally. The parenthesis remover pass now checks if a comment exists for inner node.",
					),
					(0, a.kt)(
						"h3",
						{
							id: "bundler-stack-overflow--circular-imports-1196-1205",
						},
						"bundler: Stack overflow / circular imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1196",
							},
							"#1196",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1205",
							},
							"#1205",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Now dependencies of circular imports of exports are handled correctly and topo sort algorithm is now applied correctly.\nThe pr fixes number of bugs of ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"deno bundle",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-handle-swc-helpers-1199" },
						"bundler: Handle swc helpers (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1199",
							},
							"#1199",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Now if you use bundler with ",
						"[swc]",
						", the helpers of ",
						"[swc][]",
						" will be efficiently emitted.",
					),
					(0, a.kt)(
						"h3",
						{ id: "caching-of-importmeta-1201" },
						"Caching of import.meta (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1201",
							},
							"#1201",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Thanks to ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/nayeemrmn",
							},
							"@nayeemrmn",
						),
						", multiple usage of ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"import.meta",
						),
						" does not create multiple ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"import.meta",
						),
						" object.",
					),
					(0, a.kt)(
						"h3",
						{ id: "resolver-hoist-class-decls-1200" },
						"resolver: hoist class decls (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1200",
							},
							"#1200",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Although class declarations are not hoisted, it's a top-level item and should be handled before function bodies.",
					),
					(0, a.kt)("p", null, "I mean,"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"(() => {\n  function foo() {\n    return new Bar();\n  }\n  class Bar {}\n})();\n",
						),
					),
					(0, a.kt)("p", null, "should be treated as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"(() => {\n  function foo__1() {\n    return new Bar__1();\n  }\n  class Bar__1 {}\n})();\n",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
