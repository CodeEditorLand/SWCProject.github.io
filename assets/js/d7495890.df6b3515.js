"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4737],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => u });
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
			function s(e, t) {
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
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return n.createElement(
						p.Provider,
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(r),
						u = o,
						y = d["".concat(p, ".").concat(u)] || d[u] || m[u] || a;
					return r
						? n.createElement(
								y,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(y, i({ ref: t }, l));
				});
			function u(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = d;
					var s = {};
					for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(i[1] = s);
					for (var c = 2; c < a; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		3099: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.1.5",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2019/12/11/swc-1.1.5",
					source: "@site/blog/2019-12-11-swc-1.1.5.md",
					title: "Changelog: swc v1.1.5",
					description: "dynamic import with es3 target",
					date: "2019-12-11T00:00:00.000Z",
					formattedDate: "December 11, 2019",
					tags: [],
					readingTime: 0.935,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.6",
						permalink: "/blog/2019/12/14/swc-1.1.6",
					},
					nextItem: {
						title: "Changelog: swc v1.1.4",
						permalink: "/blog/2019/12/09/swc-1.1.4",
					},
				},
				l = [
					{
						value: "dynamic import with es3 target",
						id: "dynamic-import-with-es3-target",
						children: [],
					},
					{
						value: "script parser",
						id: "script-parser",
						children: [],
					},
					{
						value: "typescript parser improvement",
						id: "typescript-parser-improvement",
						children: [
							{
								value: "arrow expression in conditional expressions",
								id: "arrow-expression-in-conditional-expressions",
								children: [],
							},
							{
								value: "import type",
								id: "import-type",
								children: [],
							},
							{
								value: "yield object",
								id: "yield-object",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "dynamic-import-with-es3-target" },
						"dynamic import with es3 target",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, swc converts import() to ",
						"_",
						"import() as import is a keyword in es3. But, as import() can be stripped out in many way, swc now emits import if ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.parser.dynamicImport",
						),
						" is true.",
					),
					(0, a.kt)("h2", { id: "script-parser" }, "script parser"),
					(0, a.kt)(
						"p",
						null,
						"Previously, swc only allows parsing a file as module. Now there's an option to parse file as a script.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { transformSync } from "@swc/core";\n\nconst code = transformSync(`with(foo){}`, {\n  isModule: false\n});\n',
						),
					),
					(0, a.kt)(
						"h2",
						{ id: "typescript-parser-improvement" },
						"typescript parser improvement",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_ecma_parser",
						),
						" can now parse typescript compiler and rxjs.",
					),
					(0, a.kt)(
						"h3",
						{ id: "arrow-expression-in-conditional-expressions" },
						"arrow expression in conditional expressions",
					),
					(0, a.kt)("p", null, "From now, complex code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export const assertEachNode = shouldAssert(AssertionLevel.Normal)\n  ? (nodes: Node[], test: (node: Node) => boolean, message?: string): void =>\n      assert(\n        test === undefined || every(nodes, test),\n        message || \"Unexpected node.\",\n        () => `Node array did not pass test '${getFunctionName(test)}'.`,\n        assertEachNode\n      )\n  : noop;\n",
						),
					),
					(0, a.kt)("p", null, "can be parsed."),
					(0, a.kt)("h3", { id: "import-type" }, "import type"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_ecma_parser",
						),
						" now supports import types. It means,",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const tty = require("tty") as typeof import("tty");\n',
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'let a: typeof import("fs");\n',
						),
					),
					(0, a.kt)("p", null, "are valid."),
					(0, a.kt)("h3", { id: "yield-object" }, "yield object"),
					(0, a.kt)("p", null, "Also, codes like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function* gen() {\n  yield {};\n}\n",
						),
					),
					(0, a.kt)("p", null, "become valid."),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
