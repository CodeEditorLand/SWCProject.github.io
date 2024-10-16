"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5617],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
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
			function s(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: s(Object(n)).forEach(function (t) {
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
							s = Object.keys(e);
						for (r = 0; r < s.length; r++)
							(n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (r = 0; r < s.length; r++)
						(n = s[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var p = r.createContext({}),
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = c(e.components);
					return r.createElement(
						p.Provider,
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
				h = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						s = e.originalType,
						p = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						h = c(n),
						d = a,
						m = h["".concat(p, ".").concat(d)] || h[d] || u[d] || s;
					return n
						? r.createElement(
								m,
								o(o({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(m, o({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = n.length,
						o = new Array(s);
					o[0] = h;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var c = 2; c < s; c++) o[c] = n[c];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			h.displayName = "MDXCreateElement";
		},
		2294: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => h,
				});
			var r = n(7462),
				a = n(3366),
				s = (n(7294), n(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.2.46",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/01/23/swc-1.2.46",
					source: "@site/blog/2021-01-23-swc-1.2.46.md",
					title: "Changelog: swc v1.2.46",
					description: "Bugfixes",
					date: "2021-01-23T00:00:00.000Z",
					formattedDate: "January 23, 2021",
					tags: [],
					readingTime: 2.205,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.47",
						permalink: "/blog/2021/01/31/swc-1.2.47",
					},
					nextItem: {
						title: "Changelog: swc v1.2.45",
						permalink: "/blog/2021/01/14/swc-1.2.45",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Enums in namespaces (#1340)",
								id: "enums-in-namespaces-1340",
								children: [],
							},
							{
								value: "Private class properties (#1353)",
								id: "private-class-properties-1353",
								children: [],
							},
							{
								value: "Block scoping (#1353)",
								id: "block-scoping-1353",
								children: [],
							},
							{
								value: "This in complex async arrow (#1353)",
								id: "this-in-complex-async-arrow-1353",
								children: [],
							},
							{
								value: "bundler: Reserved word as an ident (#1346)",
								id: "bundler-reserved-word-as-an-ident-1346",
								children: [],
							},
						],
					},
					{
						value: "New feautres",
						id: "new-feautres",
						children: [
							{
								value: "Support for legacy decorators on methods with computed keys (#1347)",
								id: "support-for-legacy-decorators-on-methods-with-computed-keys-1347",
								children: [],
							},
							{
								value: "Support for TypeScript 4.2 (#1330)",
								id: "support-for-typescript-42-1330",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function h(e) {
				var t = e.components,
					n = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "enums-in-namespaces-1340" },
						"Enums in namespaces (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1340",
							},
							"#1340",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" had support for namespaces since ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.2.46"),
						". But the support was not complete and enums were not handled properly.\n",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.2.46"),
						" adds support for enums, so the code below works as expected.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'namespace Test {\n  export enum DummyValues {\n    A = "A",\n    B = "B",\n  }\n}\n\nconsole.log(Test.DummyValues.A);\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "private-class-properties-1353" },
						"Private class properties (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1353",
							},
							"#1353",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously, ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" didn't compile ",
						(0, s.kt)("em", { parentName: "p" }, "some"),
						" of accesses to private properties of classes.\nThis is fixed as of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.2.46"),
						", by visiting all children in the ast visitor.",
					),
					(0, s.kt)(
						"h3",
						{ id: "block-scoping-1353" },
						"Block scoping (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1353",
							},
							"#1353",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Preivously, ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled some of loops including",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function combineOverlappingMatches(matches) {\n  let hasOverlaps = false;\n\n  for (let i = matches.length - 1; i >= 0; i--) {\n    let currentMatch = matches[i];\n    let overlap = matches.find((match) => {\n      return (\n        match !== currentMatch && match.itemsType === currentMatch.itemsType\n      );\n    });\n\n    if (overlap) {\n      hasOverlaps = true;\n      matches.splice(i, 1);\n    }\n  }\n\n  if (hasOverlaps) {\n    combineOverlappingMatches(matches);\n  }\n}\n\ncombineOverlappingMatches([1]);\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This is now fixed by making block statement transparent in point of view of the block scoping visitor.\nAs this fix applies to all block statements, ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" would not break such loops.",
					),
					(0, s.kt)(
						"h3",
						{ id: "this-in-complex-async-arrow-1353" },
						"This in complex async arrow (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1353",
							},
							"#1353",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously, ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" errornously changed ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "this"),
						" in the asynchronous arrow function below.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A {\n  val = \"1\";\n  async foo() {\n    try {\n      return await (async (x) => x + this.val)(\"a\"); // this is undefined\n      // return await Promise.all(['a', 'b'].map(async (x) => x + this.val)); // this is undefined\n    } catch (e) {\n      throw e;\n    }\n  }\n}\n\nnew A().foo();\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This is fixed as of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.2.46"),
						". Now ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" uses quite general logic for handling such code, and I expect it not to break asynchronous arrows anymore.",
					),
					(0, s.kt)(
						"h3",
						{ id: "bundler-reserved-word-as-an-ident-1346" },
						"bundler: Reserved word as an ident (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1346",
							},
							"#1346",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"As the bundler of ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" is falttening bundler just like rollup, it had some code to handle difference of identifier context.\nFor example, ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"instanceof",
						),
						" in the code below is valid,",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import * as foo from "./util";\nconst x = foo.instanceof;\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"while ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"instanceof",
						),
						" in the code below is invalid.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const instanceof = function () {\n  // ...\n};\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The bundler renames ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"instanceof",
						),
						" in below to something different, but it had a bug related to object patterns in assignments.\nThis is now fixed and the bundler will not break code using reserved works in object patterns.",
					),
					(0, s.kt)("h2", { id: "new-feautres" }, "New feautres"),
					(0, s.kt)(
						"h3",
						{
							id: "support-for-legacy-decorators-on-methods-with-computed-keys-1347",
						},
						"Support for legacy decorators on methods with computed keys (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1347",
							},
							"#1347",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports typescript code like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {\n  @dec\n  [bar]() {}\n}\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"which uses decorator with computed keys.",
					),
					(0, s.kt)(
						"h3",
						{ id: "support-for-typescript-42-1330" },
						"Support for TypeScript 4.2 (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1330",
							},
							"#1330",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports parsing and transcompiling typescript 4.2 files.",
					),
				);
			}
			h.isMDXComponent = !0;
		},
	},
]);
