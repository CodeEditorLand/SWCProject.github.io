"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5749],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => l, kt: () => d });
			var r = t(7294);
			function s(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[n] = t),
					e
				);
			}
			function a(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function o(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(t), !0).forEach(function (n) {
								s(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: a(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function i(e, n) {
				if (null == e) return {};
				var t,
					r,
					s = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							s = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
						return s;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(t = a[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(s[t] = e[t]));
				}
				return s;
			}
			var p = r.createContext({}),
				c = function (e) {
					var n = r.useContext(p),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : o(o({}, n), e)),
						t
					);
				},
				l = function (e) {
					var n = c(e.components);
					return r.createElement(
						p.Provider,
						{ value: n },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				u = r.forwardRef(function (e, n) {
					var t = e.components,
						s = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(t),
						d = s,
						f = u["".concat(p, ".").concat(d)] || u[d] || m[d] || a;
					return t
						? r.createElement(
								f,
								o(o({ ref: n }, l), {}, { components: t }),
							)
						: r.createElement(f, o({ ref: n }, l));
				});
			function d(e, n) {
				var t = arguments,
					s = n && n.mdxType;
				if ("string" == typeof e || s) {
					var a = t.length,
						o = new Array(a);
					o[0] = u;
					var i = {};
					for (var p in n) hasOwnProperty.call(n, p) && (i[p] = n[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : s),
						(o[1] = i);
					for (var c = 2; c < a; c++) o[c] = t[c];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		9849: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => u,
				});
			var r = t(7462),
				s = t(3366),
				a = (t(7294), t(3905)),
				o = ["components"],
				i = {
					title: "Announcing swc v1.1.0",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2019/11/30/announcing-swc-1.1.0",
					source: "@site/blog/2019-11-30-announcing-swc-1.1.0.md",
					title: "Announcing swc v1.1.0",
					description: "Plugin",
					date: "2019-11-30T00:00:00.000Z",
					formattedDate: "November 30, 2019",
					tags: [],
					readingTime: 3.32,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.1",
						permalink: "/blog/2019/12/01/swc-1.1.1",
					},
					nextItem: {
						title: "Introducing swc 1.0",
						permalink: "/blog/2019/02/08/Introducing-swc-1.0",
					},
				},
				l = [
					{
						value: "Plugin",
						id: "plugin",
						children: [
							{
								value: "Performance",
								id: "performance",
								children: [],
							},
							{
								value: "Example plugin",
								id: "example-plugin",
								children: [],
							},
						],
					},
					{
						value: "Parser",
						id: "parser",
						children: [
							{
								value: "Performance",
								id: "performance-1",
								children: [],
							},
							{
								value: "Optional chaining (#442)",
								id: "optional-chaining-442",
								children: [],
							},
							{
								value: "Error recovery",
								id: "error-recovery",
								children: [],
							},
							{ value: "Span", id: "span", children: [] },
						],
					},
					{
						value: ".swcrc",
						id: "swcrc",
						children: [
							{
								value: "Multiple entries",
								id: "multiple-entries",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var n = e.components,
					t = (0, s.Z)(e, o);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "plugin" }, "Plugin"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports custom plugins written in javascript and friends! Note that ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".d.ts"),
						" file for ast nodes and ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "Visitor"),
						" is provided.",
					),
					(0, a.kt)("h3", { id: "performance" }, "Performance"),
					(0, a.kt)(
						"p",
						null,
						"One of difference of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "babel"),
						" is performance. I optimized ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" binary in many ways and here's the benchmark result ran on my MacBook Pro (2.3GHz, 16GB Memory)",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"[plugin]\n  parse x 3,156 ops/sec \xb10.43% (89 runs sampled)\n  parse + print x 740 ops/sec \xb10.35% (88 runs sampled)\n  parse + transform x 734 ops/sec \xb10.22% (88 runs sampled)\n  plugin x 720 ops/sec \xb10.32% (87 runs sampled)\n[transform]\n  swc (es3) x 761 ops/sec \xb10.23% (89 runs sampled)\n  swc (es2015) x 800 ops/sec \xb11.02% (87 runs sampled)\n  swc (es2016) x 2,123 ops/sec \xb10.84% (88 runs sampled)\n  swc (es2017) x 2,131 ops/sec \xb11.13% (90 runs sampled)\n  swc (es2018) x 2,981 ops/sec \xb10.25% (90 runs sampled)\n  swc-optimize (es3) x 712 ops/sec \xb10.21% (86 runs sampled)\n  babel (es5) x 41.75 ops/sec \xb18.07% (56 runs sampled)\n[typescript]\n  swc (es3) x 646 ops/sec \xb12.25% (87 runs sampled)\n  swc (es5) x 703 ops/sec \xb10.55% (89 runs sampled)\n  swc (es2015) x 708 ops/sec \xb10.26% (87 runs sampled)\n  swc (es2016) x 1,656 ops/sec \xb10.17% (90 runs sampled)\n  swc (es2017) x 1,661 ops/sec \xb10.33% (91 runs sampled)\n  swc (es2018) x 2,135 ops/sec \xb10.25% (88 runs sampled)\n  swc-optimize (es3) x 631 ops/sec \xb10.13% (88 runs sampled)\n  babel (es5) x 41.89 ops/sec \xb14.62% (54 runs sampled)\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, ":babel"),
						' does same tasks as "swc (es5)" while ',
						(0, a.kt)("inlineCode", { parentName: "p" }, ":plugin"),
						' does tasks of "swc (es3)" and javsacript-based traversal of all ast nodes. ',
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is much faster than babel even though ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does more work.",
					),
					(0, a.kt)("h3", { id: "example-plugin" }, "Example plugin"),
					(0, a.kt)(
						"p",
						null,
						"Let's write a transform which removes console calls such as ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"console.log()",
						),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { CallExpression, Expression } from "@swc/core";\nimport Visitor from "@swc/core/Visitor";\n\nexport default class ConsoleStripper extends Visitor {\n  visitCallExpression(e: CallExpression): Expression {\n    if (e.callee.type !== "MemberExpression") {\n      return e;\n    }\n\n    if (\n      e.callee.object.type === "Identifier" &&\n      e.callee.object.value === "console"\n    ) {\n      if (e.callee.property.type === "Identifier") {\n        return {\n          type: "UnaryExpression",\n          span: e.span,\n          operator: "void",\n          argument: {\n            type: "NumericLiteral",\n            span: e.span,\n            value: 0\n          }\n        };\n      }\n    }\n\n    return e;\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"You are done. You can turn on swc's optimizer with ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.transform.optimizer",
						),
						" to remove void 0.",
					),
					(0, a.kt)(
						"p",
						null,
						"See: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/plugin-strip-console",
							},
							"https://github.com/swc-project/plugin-strip-console",
						),
					),
					(0, a.kt)("h2", { id: "parser" }, "Parser"),
					(0, a.kt)("h3", { id: "performance-1" }, "Performance"),
					(0, a.kt)(
						"p",
						null,
						"Again, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is fast.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"test angular          ... bench:  30,891,704 ns/iter (+/- 772,962) = 23 MB/s\ntest backbone         ... bench:   4,373,650 ns/iter (+/- 180,866) = 13 MB/s\ntest colors           ... bench:      51,904 ns/iter (+/- 18,036) = 22 MB/s\ntest jquery           ... bench:  24,994,575 ns/iter (+/- 859,167) = 10 MB/s\ntest jquery_mobile    ... bench:  38,977,299 ns/iter (+/- 1,264,947) = 11 MB/s\ntest mootools         ... bench:  20,026,818 ns/iter (+/- 552,056) = 8 MB/s\ntest underscore       ... bench:   3,628,824 ns/iter (+/- 101,667) = 12 MB/s\ntest yui              ... bench:  18,176,174 ns/iter (+/- 213,133) = 18 MB/s\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "optional-chaining-442" },
						"Optional chaining (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/442",
							},
							"#442",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports optional chaining from ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html",
							},
							"typescript 3.7",
						),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"let foo = a?.b?.c;\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"As this is official syntax, this is enabled by default if you configure ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							'{ syntax: "typescript" }',
						),
						" in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						".",
					),
					(0, a.kt)("h3", { id: "error-recovery" }, "Error recovery"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_ecma_parser",
						),
						" did not supported any error recovert when ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.0.0"),
						" was released. As it made debugging hard, I implemented lot of error recovery logic. Note that I'll keep improving error recovery while ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" matches the grade of tsc.",
					),
					(0, a.kt)(
						"p",
						null,
						"I stored reference errors of each file in ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/tree/master/ecmascript/parser/tests/test262-error-references/fail",
							},
							"ecmascript parser's test suite",
						),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"error: Unexpected token Some(Comma)\n --\x3e $DIR/tests/test262-parser/fail/0557c70da3f698b5.module.js:1:11\n  |\n1 | import {b,,c} from 'a';\n  |           ^\n\n",
						),
					),
					(0, a.kt)("p", null, "This is an example of reference."),
					(0, a.kt)("h3", { id: "span" }, "Span"),
					(0, a.kt)(
						"p",
						null,
						"Span of error becomes much more accurate. Swc has an error reporting test which tests many tests from ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tc39/test262",
							},
							"test262",
						),
						", the official ecmascript test suite.",
					),
					(0, a.kt)("h2", { id: "swcrc" }, ".swcrc"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" file is improved.",
					),
					(0, a.kt)(
						"h3",
						{ id: "multiple-entries" },
						"Multiple entries",
					),
					(0, a.kt)(
						"p",
						null,
						"Starting with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.0.47"),
						", you can specify multiple entries in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'[\n  {\n    "test": ".*.js$",\n    "module": {\n      "type": "commonjs"\n    }\n  },\n  {\n    "test": ".*.ts$",\n    "module": {\n      "type": "amd"\n    }\n  }\n]\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This make swc compile javascript files as common js module (uses ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"require('foo')",
						),
						") and compile typescript files as amd modules.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
