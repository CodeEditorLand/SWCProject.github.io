"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5604],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => h });
			var r = n(7294);
			function s(e, t, n) {
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
			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								s(e, t, n[t]);
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
			function o(e, t) {
				if (null == e) return {};
				var n,
					r,
					s = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							s = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s;
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
									(s[n] = e[n]));
				}
				return s;
			}
			var i = r.createContext({}),
				c = function (e) {
					var t = r.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						n
					);
				},
				l = function (e) {
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						s = e.mdxType,
						a = e.originalType,
						i = e.parentName,
						l = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						h = s,
						d = m["".concat(i, ".").concat(h)] || m[h] || u[h] || a;
					return n
						? r.createElement(
								d,
								p(p({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, p({ ref: t }, l));
				});
			function h(e, t) {
				var n = arguments,
					s = t && t.mdxType;
				if ("string" == typeof e || s) {
					var a = n.length,
						p = new Array(a);
					p[0] = m;
					var o = {};
					for (var i in t) hasOwnProperty.call(t, i) && (o[i] = t[i]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : s),
						(p[1] = o);
					for (var c = 2; c < a; c++) p[c] = n[c];
					return r.createElement.apply(null, p);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5315: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => i,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				s = n(3366),
				a = (n(7294), n(3905)),
				p = ["components"],
				o = {
					title: "Changelog: swc v1.2.52",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				c = {
					permalink: "/blog/2021/04/11/swc-1.2.52",
					source: "@site/blog/2021-04-11-swc-1.2.52.md",
					title: "Changelog: swc v1.2.52",
					description: "Bugfixes",
					date: "2021-04-11T00:00:00.000Z",
					formattedDate: "April 11, 2021",
					tags: [],
					readingTime: 7.35,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.53",
						permalink: "/blog/2021/04/17/swc-1.2.53",
					},
					nextItem: {
						title: "Changelog: swc v1.2.51",
						permalink: "/blog/2021/03/28/swc-1.2.51",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "external helper: typeof (#1557, #1458)",
								id: "external-helper-typeof-1557-1458",
								children: [],
							},
							{
								value: "helper bugs (#1555)",
								id: "helper-bugs-1555",
								children: [],
							},
							{
								value: "CR in template literals (#1549)",
								id: "cr-in-template-literals-1549",
								children: [],
							},
							{
								value: "Input sourcemap bug (#1404)",
								id: "input-sourcemap-bug-1404",
								children: [],
							},
							{
								value: "Generic parsing bug (#1526)",
								id: "generic-parsing-bug-1526",
								children: [],
							},
							{
								value: "Dead branch remover bug (#1539)",
								id: "dead-branch-remover-bug-1539",
								children: [],
							},
							{
								value: "TypeScript namespace bug (#1553, #1515)",
								id: "typescript-namespace-bug-1553-1515",
								children: [],
							},
							{
								value: "Sourcemap position bug (#1548)",
								id: "sourcemap-position-bug-1548",
								children: [],
							},
							{
								value: "Visitor bug (#1543)",
								id: "visitor-bug-1543",
								children: [],
							},
							{
								value: "Resolver bug relatead to function expressions (#1540)",
								id: "resolver-bug-relatead-to-function-expressions-1540",
								children: [],
							},
							{
								value: "TypeScript definitions (#1542, #1535)",
								id: "typescript-definitions-1542-1535",
								children: [],
							},
							{
								value: "Branch simplifier bug (#1536)",
								id: "branch-simplifier-bug-1536",
								children: [],
							},
							{
								value: "TypeScript common js import bug (#1448)",
								id: "typescript-common-js-import-bug-1448",
								children: [],
							},
							{
								value: "Default destructuring patterns (#1477, #1449)",
								id: "default-destructuring-patterns-1477-1449",
								children: [],
							},
							{
								value: "this in async object methods (#1455)",
								id: "this-in-async-object-methods-1455",
								children: [],
							},
							{
								value: "Type stripper bug (#1521)",
								id: "type-stripper-bug-1521",
								children: [],
							},
							{
								value: "Comment parsing bug (#1527)",
								id: "comment-parsing-bug-1527",
								children: [],
							},
							{
								value: "Abstract classes (#1454)",
								id: "abstract-classes-1454",
								children: [],
							},
							{
								value: "Super in class methods (#1490)",
								id: "super-in-class-methods-1490",
								children: [],
							},
							{
								value: "Backticks in template literals (#1488)",
								id: "backticks-in-template-literals-1488",
								children: [],
							},
							{
								value: "Declare namespace bug (#1508)",
								id: "declare-namespace-bug-1508",
								children: [],
							},
							{
								value: "ES module interop for dynamic imports (#1480, #1509)",
								id: "es-module-interop-for-dynamic-imports-1480-1509",
								children: [],
							},
							{
								value: "Parenthesis bug of class properties (#1502)",
								id: "parenthesis-bug-of-class-properties-1502",
								children: [],
							},
							{
								value: "Sourcemaps of multiline block comments (#1511)",
								id: "sourcemaps-of-multiline-block-comments-1511",
								children: [],
							},
							{
								value: "Generic parsing bug (#1505)",
								id: "generic-parsing-bug-1505",
								children: [],
							},
							{
								value: "Class names when keepClassNames is true (#1507)",
								id: "class-names-when-keepclassnames-is-true-1507",
								children: [],
							},
							{
								value: "Class properties named readonly (#1514)",
								id: "class-properties-named-readonly-1514",
								children: [],
							},
							{
								value: "Private declare properties (#1503)",
								id: "private-declare-properties-1503",
								children: [],
							},
							{
								value: "Assert after imports (#1512)",
								id: "assert-after-imports-1512",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "TypeScript 4.3",
								id: "typescript-43",
								children: [],
							},
							{
								value: "Pure annotation for react (#1564)",
								id: "pure-annotation-for-react-1564",
								children: [],
							},
							{
								value: "Fast refresh (#1524)",
								id: "fast-refresh-1524",
								children: [],
							},
						],
					},
					{
						value: "UX Improvement",
						id: "ux-improvement",
						children: [
							{
								value: "Better error message for wrong configurations. (#1532)",
								id: "better-error-message-for-wrong-configurations-1532",
								children: [],
							},
							{
								value: "Parser error code (#1551)",
								id: "parser-error-code-1551",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, s.Z)(e, p);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "external-helper-typeof-1557-1458" },
						"external helper: typeof (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1557",
							},
							"#1557",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1458",
							},
							"#1458",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" used incorrect name for ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "typeof"),
						" helpers, if ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"extenalHelpers",
						),
						" is true.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "externalHelpers": true,\n    "target": "es2015"\n  }\n}\n',
						),
					),
					(0, a.kt)("p", null, "This is now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "helper-bugs-1555" },
						"helper bugs (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1555",
							},
							"#1555",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Some helpers were compiled incorrectly due to a bug of the ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolver",
						),
						" pass.",
					),
					(0, a.kt)(
						"p",
						null,
						"The bug made ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" to emit",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function _setPrototypeOf(o, p) {\n  _setPrototypeOf =\n    Object.setPrototypeOf ||\n    function _setPrototypeOf1(o1, p1) {\n      o1.__proto__ = p1;\n      return o1;\n    };\n  return _setPrototypeOf1(o, p);\n}\nexports.default = _setPrototypeOf;\n",
						),
					),
					(0, a.kt)("p", null, "for"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export default function _setPrototypeOf(o, p) {\n  _setPrototypeOf =\n    Object.setPrototypeOf ||\n    function _setPrototypeOf(o, p) {\n      o.__proto__ = p;\n      return o;\n    };\n\n  return _setPrototypeOf(o, p);\n}\n",
						),
					),
					(0, a.kt)("p", null, "This is now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "cr-in-template-literals-1549" },
						"CR in template literals (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1549",
							},
							"#1549",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously the code below resulted in a bug.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const { transform } = require("@swc/core");\n\ntransform("const a = `\\r\\n`;", {\n  jsc: {\n    parser: {\n      syntax: "typescript",\n    },\n    target: "es2015",\n  },\n})\n  .then(({ code }) => code)\n  .then(console.log, console.error);\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "input-sourcemap-bug-1404" },
						"Input sourcemap bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1404",
							},
							"#1404",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now handles input source map correctly.",
					),
					(0, a.kt)(
						"h3",
						{ id: "generic-parsing-bug-1526" },
						"Generic parsing bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1526",
							},
							"#1526",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export const foo = function* <T>() {};\n\nexport const bar = () => {};\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Prevously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" incorrectly failed emitting invalid syntax error.\nIt was due to ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "<T>"),
						" being parsed as jsx and it's now fixed.",
					),
					(0, a.kt)(
						"h3",
						{ id: "dead-branch-remover-bug-1539" },
						"Dead branch remover bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1539",
							},
							"#1539",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function test() {\n  return foo();\n  function foo() {\n    return 2;\n  }\n  console.log("hi");\n}\n',
						),
					),
					(0, a.kt)("p", null, "is now compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function test() {\n  function foo() {\n    return 2;\n  }\n  return foo();\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-namespace-bug-1553-1515" },
						"TypeScript namespace bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1553",
							},
							"#1553",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1515",
							},
							"#1515",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export function a() {}\nexport namespace a {\n  export function b() {}\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"When a typescript namespace is used with another declaration with identical name, ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" produced an invalid code.\nIt's now fixed by tracking names.",
					),
					(0, a.kt)(
						"h3",
						{ id: "sourcemap-position-bug-1548" },
						"Sourcemap position bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1548",
							},
							"#1548",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"It's reported via ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"deno",
						),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" emitted ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "0"),
						" for the column of indented nodes, which made the sourcemap unhelpful.\n",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now considers indention while emiiting sourcemap.",
					),
					(0, a.kt)(
						"h3",
						{ id: "visitor-bug-1543" },
						"Visitor bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1543",
							},
							"#1543",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"There was a change to ast because previous design did not allow getting span of the template part of the template literal.\nBut the node package was not updated and it's fixed by this pr.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/arendjr",
							},
							"@arendjr",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{
							id: "resolver-bug-relatead-to-function-expressions-1540",
						},
						"Resolver bug relatead to function expressions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1540",
							},
							"#1540",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" compiled",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export default function foo() {\n  foo = function foo(x) {\n    return x === 0 ? 1 : 1 + foo(x - 1);\n  };\n  return foo(10);\n}\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export default function foo() {\n  foo = function foo1(x) {\n    return x === 0 ? 1 : 1 + foo1(x - 1);\n  };\n  return foo1(10); // <- this is wrong\n}\n",
						),
					),
					(0, a.kt)("p", null, "which is wrong."),
					(0, a.kt)(
						"p",
						null,
						"The bug is fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						" and ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"test(function foo() {\n  foo = function foo1(x) {\n    return x === 0 ? 1 : 1 + foo1(x - 1);\n  };\n  return foo(10);\n});\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-definitions-1542-1535" },
						"TypeScript definitions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1542",
							},
							"#1542",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1535",
							},
							"#1535",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Some AST type definitions are wrong, and it's now fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/wavesheep",
							},
							"@wavesheep",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "branch-simplifier-bug-1536" },
						"Branch simplifier bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1536",
							},
							"#1536",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously the optimizer of ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" broke codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (Date.now() < 0) {\n  for (let i = 0; i < 10; i++) {\n    if (Date.now() < 0) {\n      console.log(1);\n    }\n  }\n} else {\n  console.log(2);\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"It's now fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-common-js-import-bug-1448" },
						"TypeScript common js import bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1448",
							},
							"#1448",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports common js import of typescript.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import F = require("yaml");\nconsole.log(F);\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "default-destructuring-patterns-1477-1449" },
						"Default destructuring patterns (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1477",
							},
							"#1477",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1449",
							},
							"#1449",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports default patterns in object patterns.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"async function foo() {\n  const { bar: {} = {} } = baz;\n}\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "this-in-async-object-methods-1455" },
						"this in async object methods (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1455",
							},
							"#1455",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" previously broke codes with asynchronous method like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const SampleData = typedModel(\n  "SampleVideo",\n  VideosSchema,\n  undefined,\n  undefined,\n  {\n    byPlatform: async function (platform: string) {\n      const result = await this.find({ platform: { $eq: platform } });\n      return result;\n    },\n  }\n);\n\nSampleData.byPlatform("youtube").then((res) => {\n  console.info(res);\n});\n',
						),
					),
					(0, a.kt)("p", null, "It's now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "type-stripper-bug-1521" },
						"Type stripper bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1521",
							},
							"#1521",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now allows declaring a type with name which is imported.",
					),
					(0, a.kt)("p", null, "For example code below,"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { Test } from "test";\ninterface Test {}\nconsole.log(Test);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							'import { Test } from "test";',
						),
						" is now preserved because ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"console.log(Test);",
						),
						" uses ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "Test"),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "comment-parsing-bug-1527" },
						"Comment parsing bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1527",
							},
							"#1527",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function Bar() {\n  const [foo, setFoo] = useState(0);\n  React.useEffect(() => {\n    // @refresh reset\n  });\n  return <h1>{foo}</h1>;\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now handles comment ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"// @refresh reset",
						),
						" correctly.",
					),
					(0, a.kt)(
						"h3",
						{ id: "abstract-classes-1454" },
						"Abstract classes (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1454",
							},
							"#1454",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export abstract class AbstractProviderDeliveryService {}\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "super-in-class-methods-1490" },
						"Super in class methods (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1490",
							},
							"#1490",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"There were some edge cases where ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" emits wrong code for usages of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "super"),
						" in class methods.",
					),
					(0, a.kt)("p", null, "Affected code looks like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\n\nclass Element {\n  getChildElements() {\n    return this.childElements;\n  }\n}\n\nclass CanvasElement extends Element {\n  createFacets(hidden) {\n    const childElements = this.getChildElements();\n\n    ///\n  }\n}\n\nclass ColouredCanvasElement extends CanvasElement {\n  createFacets(hidden) {\n    hidden = super.createFacets(hidden); /// This line was buggy\n\n    ///\n  }\n}\n\nclass ColouredSquare extends ColouredCanvasElement {}\n\nconst bugExample = () => {\n  const colouredSquare = new ColouredSquare(),\n    hidden = false;\n\n  colouredSquare.createFacets(hidden);\n};\n\nexport default bugExample;\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "backticks-in-template-literals-1488" },
						"Backticks in template literals (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1488",
							},
							"#1488",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" handled",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"`\\``;\n",
						),
					),
					(0, a.kt)("p", null, "in a wrong way.\nIt's now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "declare-namespace-bug-1508" },
						"Declare namespace bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1508",
							},
							"#1508",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" preivously didn't handle ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"declare namespace",
						),
						" correctly.\nIt emitted",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var twttr;\n(function (twttr1) {\n  const txt;\n  twttr1.txt = txt;\n})(twttr || (twttr = {}));\n",
						),
					),
					(0, a.kt)("p", null, "for"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'declare namespace twttr {\n  export const txt: typeof import("twitter-text");\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"which should be an empty file. It's now fixed.",
					),
					(0, a.kt)(
						"h3",
						{
							id: "es-module-interop-for-dynamic-imports-1480-1509",
						},
						"ES module interop for dynamic imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1480",
							},
							"#1480",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1509",
							},
							"#1509",
						),
						")",
					),
					(0, a.kt)("p", null, "Code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const { default: ora } = await import("ora");\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"requires some helpers to work properly, but ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" didn't use helpers.",
					),
					(0, a.kt)(
						"p",
						null,
						"It's now fixed and it works identically as ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsc"),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "parenthesis-bug-of-class-properties-1502" },
						"Parenthesis bug of class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1502",
							},
							"#1502",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" compiled",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A {\n  a = (console.log(1), 2);\n}\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A {\n  a = console.log(1), 2;\n}\n",
						),
					),
					(0, a.kt)("p", null, "but it's now"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A {\n  a = (console.log(1), 2);\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/nayeemrmn",
							},
							"@nayeemrmn",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "sourcemaps-of-multiline-block-comments-1511" },
						"Sourcemaps of multiline block comments (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1511",
							},
							"#1511",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Before:\n",
						(0, a.kt)("img", {
							parentName: "p",
							src: "https://user-images.githubusercontent.com/19409/112752952-8d6b6900-8fa3-11eb-8177-3070896d9170.png",
							alt: "Before",
						}),
					),
					(0, a.kt)(
						"p",
						null,
						"After:\n",
						(0, a.kt)("img", {
							parentName: "p",
							src: "https://user-images.githubusercontent.com/19409/112752955-92301d00-8fa3-11eb-83c1-3552e20a6f12.png",
							alt: "After",
						}),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "generic-parsing-bug-1505" },
						"Generic parsing bug (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1505",
							},
							"#1505",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" has a bug related to backtracking and as a result the following code result in an exception.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type InjectedTeamsProps = {};\nclass Component<_T, _U> {}\nclass ComponentType<_T> {}\nconst withTeamsForUser = <P extends InjectedTeamsProps>(\n  _WrappedComponent: ComponentType<P>\n) =>\n  class extends Component<\n    Omit<P, keyof InjectedTeamsProps> & Partial<InjectedTeamsProps>,\n    InjectedTeamsProps\n  > {\n    static displayName = `x`;\n  };\n",
						),
					),
					(0, a.kt)("p", null, "This is fixed."),
					(0, a.kt)(
						"h3",
						{ id: "class-names-when-keepclassnames-is-true-1507" },
						"Class names when keepClassNames is true (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1507",
							},
							"#1507",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"keepClassNames",
						),
						" didn't work for class expressions.\nThis resulted in decorated class declarations being renamed, which breaks codes depend on ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"relfect-metadata",
						),
						".",
					),
					(0, a.kt)("p", null, "Affected code looks like:"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { Entity, BaseEntity } from "typeorm";\n@Entity()\nexport class Location extends BaseEntity {}\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "class-properties-named-readonly-1514" },
						"Class properties named readonly (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1514",
							},
							"#1514",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class ClassProp {\n  readonly!: boolean;\n}\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "private-declare-properties-1503" },
						"Private declare properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1503",
							},
							"#1503",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Class {\n  private declare prop;\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"The code above now works with ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "assert-after-imports-1512" },
						"Assert after imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1512",
							},
							"#1512",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import assert from "./index";\n\nassert<123>(123);\nassert<123>(123, 123);\nassert<123>(123, 123, 123);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"For the code above, the parser of ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" tried to eat second ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "assert"),
						" to parse it as a part of an import assertion.\nThis is fixed by checking for newlines.",
					),
					(0, a.kt)("h2", { id: "new-features" }, "New features"),
					(0, a.kt)("h3", { id: "typescript-43" }, "TypeScript 4.3"),
					(0, a.kt)(
						"h4",
						{ id: "override-1541" },
						"override (",
						(0, a.kt)(
							"a",
							{
								parentName: "h4",
								href: "https://github.com/swc-project/swc/pull/1541",
							},
							"#1541",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class SpecializedComponent extends SomeComponent {\n    override show() {\n        // ...\n    }\n    override hide() {\n        // ...\n    }\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"See: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/#override-and-the-noimplicitoverride-flag",
							},
							"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/#override-and-the-noimplicitoverride-flag",
						),
					),
					(0, a.kt)(
						"h4",
						{ id: "getter--setters-1517" },
						"getter / setters (",
						(0, a.kt)(
							"a",
							{
								parentName: "h4",
								href: "https://github.com/swc-project/swc/issues/1517",
							},
							"#1517",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"interface X {\n  get foo(): string;\n  set foo(v: string | number);\n}\ntype Y = {\n  get bar(): string;\n  set bar(v: string | number);\n}\n",
						),
					),
					(0, a.kt)(
						"h4",
						{ id: "static-index-signature-1537" },
						"static index signature (",
						(0, a.kt)(
							"a",
							{
								parentName: "h4",
								href: "https://github.com/swc-project/swc/pull/1537",
							},
							"#1537",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'class Foo {\n  static hello = "hello";\n  static world = 1234;\n\n  static [propName: string]: string | number | undefined;\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"See: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/#static-index-signatures",
							},
							"https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/#static-index-signatures",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "pure-annotation-for-react-1564" },
						"Pure annotation for react (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1564",
							},
							"#1564",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"/*#__PURE__*/",
						),
						" for react components, which is used by various optimizers to identify side-effect-free functions.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "fast-refresh-1524" },
						"Fast refresh (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1524",
							},
							"#1524",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports react fast refresh.\nSee ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jsctransformreact",
							},
							"docs",
						),
						" for configurations.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
						".",
					),
					(0, a.kt)("h2", { id: "ux-improvement" }, "UX Improvement"),
					(0, a.kt)(
						"h3",
						{
							id: "better-error-message-for-wrong-configurations-1532",
						},
						"Better error message for wrong configurations. (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1532",
							},
							"#1532",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" sielently used default syntax for the ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" below.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "dynamicImport": true\n    },\n    "externalHelpers": true,\n    "target": "esnext"\n  },\n  "sourceMaps": true\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This config is invalid because ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "target"),
						" does not allow ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "esnext"),
						".\nBut error message was cryptic because it was about parsing failure.",
					),
					(0, a.kt)(
						"p",
						null,
						"It's now fixed and ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" reports proper error for such inputs.",
					),
					(0, a.kt)(
						"h3",
						{ id: "parser-error-code-1551" },
						"Parser error code (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1551",
							},
							"#1551",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" emiited ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "TS1775"),
						" for the code below, but it should be ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "TS1773"),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"class C implements A extends B {}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)("code", { parentName: "pre" }, ""),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
