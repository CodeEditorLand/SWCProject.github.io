"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8114],
	{
		3905: (e, t, o) => {
			o.d(t, { Zo: () => l, kt: () => d });
			var r = o(7294);
			function n(e, t, o) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: o,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = o),
					e
				);
			}
			function a(e, t) {
				var o = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						o.push.apply(o, r);
				}
				return o;
			}
			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var o = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(o), !0).forEach(function (t) {
								n(e, t, o[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(o),
								)
							: a(Object(o)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(o, t),
									);
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var o,
					r,
					n = (function (e, t) {
						if (null == e) return {};
						var o,
							r,
							n = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(o = a[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
						return n;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(o = a[r]),
							t.indexOf(o) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									o,
								) &&
									(n[o] = e[o]));
				}
				return n;
			}
			var i = r.createContext({}),
				c = function (e) {
					var t = r.useContext(i),
						o = t;
					return (
						e &&
							(o =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						o
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
					var o = e.components,
						n = e.mdxType,
						a = e.originalType,
						i = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(o),
						d = n,
						h = m["".concat(i, ".").concat(d)] || m[d] || u[d] || a;
					return o
						? r.createElement(
								h,
								p(p({ ref: t }, l), {}, { components: o }),
							)
						: r.createElement(h, p({ ref: t }, l));
				});
			function d(e, t) {
				var o = arguments,
					n = t && t.mdxType;
				if ("string" == typeof e || n) {
					var a = o.length,
						p = new Array(a);
					p[0] = m;
					var s = {};
					for (var i in t) hasOwnProperty.call(t, i) && (s[i] = t[i]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : n),
						(p[1] = s);
					for (var c = 2; c < a; c++) p[c] = o[c];
					return r.createElement.apply(null, p);
				}
				return r.createElement.apply(null, o);
			}
			m.displayName = "MDXCreateElement";
		},
		6999: (e, t, o) => {
			o.r(t),
				o.d(t, {
					frontMatter: () => s,
					contentTitle: () => i,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var r = o(7462),
				n = o(3366),
				a = (o(7294), o(3905)),
				p = ["components"],
				s = {
					title: "Changelog: swc v1.2.67",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				c = {
					permalink: "/blog/2021/07/31/swc-1.2.67",
					source: "@site/blog/2021-07-31-swc-1.2.67.md",
					title: "Changelog: swc v1.2.67",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/170?closed=1",
					date: "2021-07-31T00:00:00.000Z",
					formattedDate: "July 31, 2021",
					tags: [],
					readingTime: 2.655,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.70",
						permalink: "/blog/2021/08/01/swc-1.2.70",
					},
					nextItem: {
						title: "Changelog: swc v1.2.66",
						permalink: "/blog/2021/07/20/swc-1.2.66",
					},
				},
				l = [
					{
						value: "New API: Minification.",
						id: "new-api-minification",
						children: [],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "License for node packages (#1966)",
								id: "license-for-node-packages-1966",
								children: [],
							},
							{
								value: "Typings for parse options (#1971)",
								id: "typings-for-parse-options-1971",
								children: [],
							},
							{
								value: "TypeScript: Overloads of private methods (#1977)",
								id: "typescript-overloads-of-private-methods-1977",
								children: [],
							},
							{
								value: "codegen: Import statement (#1690)",
								id: "codegen-import-statement-1690",
								children: [],
							},
							{
								value: "Patterns in method parameters (#1948)",
								id: "patterns-in-method-parameters-1948",
								children: [],
							},
							{
								value: "optimizer: Hang (#1901, #1946)",
								id: "optimizer-hang-1901-1946",
								children: [],
							},
							{
								value: "Property access in decorated class (#1869)",
								id: "property-access-in-decorated-class-1869",
								children: [],
							},
							{
								value: "TypeScript: Correct detection of usages (reported via deno)",
								id: "typescript-correct-detection-of-usages-reported-via-deno",
								children: [],
							},
							{
								value: "Namespaced import with other imports (#1938)",
								id: "namespaced-import-with-other-imports-1938",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					o = (0, n.Z)(e, p);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, o, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/170?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/170?closed=1",
						),
					),
					(0, a.kt)(
						"h2",
						{ id: "new-api-minification" },
						"New API: Minification.",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("strong", { parentName: "p" }, "Note:"),
						" Currently, it's far from perfect. I decided to focus on real-world usages and only rules used by famous open source libraries are implemented. If the bundle size of your project is not good enough, please let me know. Feel free to file an issue or email me if it's a secret. (",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "mailto:kdy1997.dev@gmail.com",
							},
							"kdy1997.dev@gmail.com",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"See ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "/docs/config-js-minify" },
							"the documentation",
						),
						" for more details.",
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "license-for-node-packages-1966" },
						"License for node packages (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1966",
							},
							"#1966",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"It's now ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Apache-2.0 AND MIT",
						),
						" instead of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "MIT"),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typings-for-parse-options-1971" },
						"Typings for parse options (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1971",
							},
							"#1971",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Type definitions for options is updated to reflect real config struct in rust.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/sosukesuzuki",
							},
							"@sosukesuzuki",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1971",
							},
							"#1971",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-overloads-of-private-methods-1977" },
						"TypeScript: Overloads of private methods (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1977",
							},
							"#1977",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Preivously overloads of methods with a private name was miscompiled. This bug could break code like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class QueryClient {\n  #executeQuery(_query);\n  #executeQuery(_query);\n  #executeQuery(query) {\n    return this.#connection.query(query);\n  }\n}\n",
						),
					),
					(0, a.kt)("p", null, "but it's now fixed."),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1977",
							},
							"#1977",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "codegen-import-statement-1690" },
						"codegen: Import statement (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1690",
							},
							"#1690",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Useless space is removed from the code from import statements.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/nuintun",
							},
							"@nuintun",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1975",
							},
							"#1975",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "patterns-in-method-parameters-1948" },
						"Patterns in method parameters (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1948",
							},
							"#1948",
						),
						")",
					),
					(0, a.kt)("p", null, "Code like below now works properly."),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function fn1(arg1, { opt1, opt2 }, ...arg2) {\n  console.log(arg1, opt1, opt2, arg2);\n}\n\nfunction fn2(arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n  console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n}\n\nconst fn3 = (arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) => {\n  console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n};\n\nclass cls {\n  constructor(arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n    console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n  }\n\n  fn4(arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n    console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n  }\n}\n\nexport default {\n  fn5(arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n    console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n  },\n  fn7: function* (arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n    console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n    yield null;\n  },\n  *fn6(arg1, { opt1, opt2 }, arg2, { opt3, opt4 }, ...arg3) {\n    console.log(arg1, opt1, opt2, arg2, opt3, opt4, arg3);\n    yield null;\n  },\n};\n",
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
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1964",
							},
							"#1964",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "optimizer-hang-1901-1946" },
						"optimizer: Hang (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1901",
							},
							"#1901",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1946",
							},
							"#1946",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously optimizer had a bug which makes swc hang if object spread is used.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1950",
							},
							"#1950",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "property-access-in-decorated-class-1869" },
						"Property access in decorated class (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1869",
							},
							"#1869",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously there was a bug related to property accesses in a decorated class.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'@someClassDecorator\nclass TestClass {\n  static Something = "hello";\n\n  static SomeProperties = {\n    firstProp: TestClass.Something,\n  };\n}\n\nfunction someClassDecorator(c) {\n  return c;\n}\n',
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
								href: "https://github.com/swc-project/swc/pull/1950",
							},
							"#1950",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{
							id: "typescript-correct-detection-of-usages-reported-via-deno",
						},
						"TypeScript: Correct detection of usages (reported via deno)",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// temp.ts\nimport { Foo } from "./temp2.ts";\n\nconst a: Foo = null;\nconsole.log(a);\nconst b = { Foo: 1 };\nconsole.log(b.Foo);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "Foo"),
						" in ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "b.Foo"),
						" was treated as a usage of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "Foo"),
						", but it's now fixed and it's correctly removed.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1945",
							},
							"#1945",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "namespaced-import-with-other-imports-1938" },
						"Namespaced import with other imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1938",
							},
							"#1938",
						),
						")",
					),
					(0, a.kt)("p", null, "Previously swc throwed an error for"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import reducer, * as SocketStore from "./redux/stores/socket-store";\n',
						),
					),
					(0, a.kt)("p", null, "but it's wrong to do so."),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1940",
							},
							"#1940",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
