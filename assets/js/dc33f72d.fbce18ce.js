"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6380],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
			var r = n(7294);
			function a(e, t, n) {
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
			function o(e, t) {
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
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(n),
						f = a,
						h = d["".concat(l, ".").concat(f)] || d[f] || u[f] || o;
					return n
						? r.createElement(
								h,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, s({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var c = 2; c < o; c++) s[c] = n[c];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		1106: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.53",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2021/04/17/swc-1.2.53",
					source: "@site/blog/2021-04-17-swc-1.2.53.md",
					title: "Changelog: swc v1.2.53",
					description: "Bugfixes",
					date: "2021-04-17T00:00:00.000Z",
					formattedDate: "April 17, 2021",
					tags: [],
					readingTime: 2.435,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.54",
						permalink: "/blog/2021/04/20/swc-1.2.54",
					},
					nextItem: {
						title: "Changelog: swc v1.2.52",
						permalink: "/blog/2021/04/11/swc-1.2.52",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "bundler: Complex reexports within cycles (#1576)",
								id: "bundler-complex-reexports-within-cycles-1576",
								children: [],
							},
							{
								value: "regnerator: Fix for delegating yields (#1580)",
								id: "regnerator-fix-for-delegating-yields-1580",
								children: [],
							},
							{
								value: "Correct helper name (#1578)",
								id: "correct-helper-name-1578",
								children: [],
							},
							{
								value: "fixer: Fix for yields in ternaries (#1577)",
								id: "fixer-fix-for-yields-in-ternaries-1577",
								children: [],
							},
							{
								value: "codegen: Fix for rest patterns (#1573)",
								id: "codegen-fix-for-rest-patterns-1573",
								children: [],
							},
							{
								value: "bundler: Various bugfixes (#1572)",
								id: "bundler-various-bugfixes-1572",
								children: [],
							},
							{
								value: "Fix for scope of functions (#1559)",
								id: "fix-for-scope-of-functions-1559",
								children: [],
							},
							{
								value: "Fix for unknown object property accesses (#1567)",
								id: "fix-for-unknown-object-property-accesses-1567",
								children: [],
							},
							{
								value: "Fix for parens of sequence expressions in callee and params (#1566)",
								id: "fix-for-parens-of-sequence-expressions-in-callee-and-params-1566",
								children: [],
							},
							{
								value: "this = globalThis in imported functions (#1561)",
								id: "this--globalthis-in-imported-functions-1561",
								children: [],
							},
							{
								value: "Block scoping of class declarations (#1569)",
								id: "block-scoping-of-class-declarations-1569",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "bundler-complex-reexports-within-cycles-1576" },
						"bundler: Complex reexports within cycles (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1576",
							},
							"#1576",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously there was some edge cases which is not properly handled by the ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" bundler.\nThe bug ocurred only when it's reexported using ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export *",
						),
						", was in a cylcle of dependency and requires some more complex conditions.\nIt's is now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "regnerator-fix-for-delegating-yields-1580" },
						"regnerator: Fix for delegating yields (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1580",
							},
							"#1580",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"There was a bug related to delegating yields (",
						(0, o.kt)("inlineCode", { parentName: "p" }, "yield *"),
						") and it affected codes like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function* a() {\n  yield 5;\n  return 7;\n}\nfunction* b() {\n  let x = yield* a();\n  yield x + 1;\n}\nexpect([...b()]).toEqual([5, 8]);\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"It's fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "correct-helper-name-1578" },
						"Correct helper name (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1578",
							},
							"#1578",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" used incorrect helper name in some cases. It's fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/grimly",
							},
							"@grimly",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "fixer-fix-for-yields-in-ternaries-1577" },
						"fixer: Fix for yields in ternaries (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1577",
							},
							"#1577",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							'(yield foo) ? "bar" : "baz"',
						),
						" as ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							'yield foo ? "bar" : "baz"',
						),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"It's fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-fix-for-rest-patterns-1573" },
						"codegen: Fix for rest patterns (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1573",
							},
							"#1573",
						),
						")",
					),
					(0, o.kt)("p", null, "Affected code looks like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function myFunc({ ...data }: { field: string }) {}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-various-bugfixes-1572" },
						"bundler: Various bugfixes (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1572",
							},
							"#1572",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"It includes bugfixes for complexly nested ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export *",
						),
						"-s and the fix for a dead-code-elimination bug.",
					),
					(0, o.kt)(
						"h3",
						{ id: "fix-for-scope-of-functions-1559" },
						"Fix for scope of functions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1559",
							},
							"#1559",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" compiled",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var Test = (function () {\n  var Test = (function () {\n    var Test = 2;\n    return Test;\n  })();\n\n  return Test;\n})();\n",
						),
					),
					(0, o.kt)("p", null, "into"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var Test = (function () {\n  var Test = (function () {\n    var Test1 = 2;\n    return Test; // <- this is wrong\n  })();\n  return Test;\n})();\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is wrong, but the bug is now fixed and it emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var Test1 = (function () {\n  var Test2 = (function () {\n    var Test3 = 2;\n    return Test3;\n  })();\n\n  return Test2;\n})();\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "fix-for-unknown-object-property-accesses-1567" },
						"Fix for unknown object property accesses (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1567",
							},
							"#1567",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now does not compile ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "{}.foo"),
						" as ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"undefined",
						),
						" anymore.\nPreviously ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" wrongly compiled it as such if optimizer is enabled.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/mischnic",
							},
							"@mischnic",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{
							id: "fix-for-parens-of-sequence-expressions-in-callee-and-params-1566",
						},
						"Fix for parens of sequence expressions in callee and params (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1566",
							},
							"#1566",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previsously ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let x = ({}, () => 2)();\n",
						),
					),
					(0, o.kt)("p", null, "as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre" },
							"let x = {\n}, ()=>2\n();\n",
						),
					),
					(0, o.kt)("p", null, "which is clearly wrong."),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "this--globalthis-in-imported-functions-1561" },
						"this = globalThis in imported functions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1561",
							},
							"#1561",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import foo from "foo";\nfoo.bar();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"is now compiled with ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"module: commonjs",
						),
						" as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const foo = require("foo"); // This is bit different.\n(0, foo).bar();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"to make ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						" in ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "bar"),
						" point the module.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "block-scoping-of-class-declarations-1569" },
						"Block scoping of class declarations (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1569",
							},
							"#1569",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const g = 20;\n\nfunction baz() {\n  {\n    class g {}\n  }\n\n  return g;\n}\n",
						),
					),
					(0, o.kt)("p", null, "is now"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const g = 20;\nfunction baz() {\n  {\n    class g1 {}\n    console.log(g1);\n  }\n  return g;\n}\n",
						),
					),
					(0, o.kt)("p", null, "instead of previous"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const g1 = 20; // <- this is wrong\nfunction baz() {\n  {\n    class g1 {}\n  }\n  return g; // <- this is wrong\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
