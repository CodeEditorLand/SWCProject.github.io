"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2589],
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
			function s(e) {
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
			function l(e, t) {
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
			var c = r.createContext({}),
				i = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = i(e.components);
					return r.createElement(
						c.Provider,
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
						c = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = i(n),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								f,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, s({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						s = new Array(a);
					s[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(s[1] = l);
					for (var i = 2; i < a; i++) s[i] = n[i];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		9608: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => i,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				s = ["components"],
				l = {
					title: "Changelog: swc v1.2.60",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				i = {
					permalink: "/blog/2021/06/07/swc-1.2.60",
					source: "@site/blog/2021-06-07-swc-1.2.60.md",
					title: "Changelog: swc v1.2.60",
					description: "Bugfixes",
					date: "2021-06-07T00:00:00.000Z",
					formattedDate: "June 7, 2021",
					tags: [],
					readingTime: 1.535,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.61",
						permalink: "/blog/2021/06/16/swc-1.2.61",
					},
					nextItem: {
						title: "Changelog: swc v1.2.59",
						permalink: "/blog/2021/05/30/swc-1.2.59",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "super in decorated methods (#846)",
								id: "super-in-decorated-methods-846",
								children: [],
							},
						],
					},
					{
						value: "dce: Fix for decorated classes (#1769)",
						id: "dce-fix-for-decorated-classes-1769",
						children: [
							{
								value: "bundler: Prevent hang (#1779)",
								id: "bundler-prevent-hang-1779",
								children: [],
							},
							{
								value: "fixer: Binary expressions in unary operands (#1781, #1789)",
								id: "fixer-binary-expressions-in-unary-operands-1781-1789",
								children: [],
							},
							{
								value: "Support for <code>export *</code> with same name (#1780)",
								id: "support-for-export--with-same-name-1780",
								children: [],
							},
							{
								value: "Fix for double imports (#1757)",
								id: "fix-for-double-imports-1757",
								children: [],
							},
							{
								value: "Fix for async generator (#1752)",
								id: "fix-for-async-generator-1752",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "super-in-decorated-methods-846" },
						"super in decorated methods (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/846",
							},
							"#846",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc emitted wrong code if a method call from super is used.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class SomeClass {\n  @dec\n  someMethod() {}\n}\n\nclass OtherClass extends SomeClass {\n  @dec\n  anotherMethod() {\n    super.someMethod();\n  }\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Codes like above now works properly.",
					),
					(0, a.kt)(
						"h2",
						{ id: "dce-fix-for-decorated-classes-1769" },
						"dce: Fix for decorated classes (",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1769",
							},
							"#1769",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"@decorator\nclass Class {}\n\nfunction decorator(cls: any) {\n  console.log(cls.name);\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc dropped a class if it's decorated and not instantiated. This is wrong because decorators can have side effects and now it's fixed.",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-prevent-hang-1779" },
						"bundler: Prevent hang (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1779",
							},
							"#1779",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"In certain complex import scenarios, the bundler of swc hanged while determinging cycle imports. This is now fixed and fairly complex imports are now handled by the bundler.",
					),
					(0, a.kt)(
						"h3",
						{
							id: "fixer-binary-expressions-in-unary-operands-1781-1789",
						},
						"fixer: Binary expressions in unary operands (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1781",
							},
							"#1781",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1789",
							},
							"#1789",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"There was a regression related to parenthesis.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const n = ~~(Math.PI * 10);\n",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const c = +(+1 / 4);\nconsole.log(c);\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"These was miscompiled but it's now fixed.",
					),
					(0, a.kt)(
						"h3",
						{ id: "support-for-export--with-same-name-1780" },
						"Support for ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"export *",
						),
						" with same name (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1780",
							},
							"#1780",
						),
						")",
					),
					(0, a.kt)("p", null, "swc now supports code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"// constant.ts\nexport enum Foo {}\n",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// File1.ts\nexport { Foo } from "./constant";\n',
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// file2.ts\nexport { Foo } from "./constant";\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "fix-for-double-imports-1757" },
						"Fix for double imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1757",
							},
							"#1757",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc throwed an error for double imports like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import "testlibrary";\nimport { aFunc } from "testlibrary";\n\nconsole.log("aFunc: ", aFunc(1, 2));\n',
						),
					),
					(0, a.kt)("p", null, "It's now fixed."),
					(0, a.kt)(
						"h3",
						{ id: "fix-for-async-generator-1752" },
						"Fix for async generator (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1752",
							},
							"#1752",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc miscompiled ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "await"),
						" in async generators and codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"async function* generate(): AsyncGenerator {\n  const results = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3),\n  ]);\n  for (const result of results) {\n    console.log(`yield ${result}`);\n    yield result;\n  }\n}\n\nasync function printValues() {\n  const iterator = generate();\n  for await (const value of iterator) {\n    console.log(`iterator value: ${value}`);\n  }\n}\n\nprintValues();\n",
						),
					),
					(0, a.kt)("p", null, "was broken. It's now fixed."),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
