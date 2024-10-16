"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8049],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => h });
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
			function c(e) {
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
			function o(e, t) {
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
			var i = r.createContext({}),
				p = function (e) {
					var t = r.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
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
						a = e.mdxType,
						s = e.originalType,
						i = e.parentName,
						l = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						h = a,
						d = m["".concat(i, ".").concat(h)] || m[h] || u[h] || s;
					return n
						? r.createElement(
								d,
								c(c({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, c({ ref: t }, l));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = n.length,
						c = new Array(s);
					c[0] = m;
					var o = {};
					for (var i in t) hasOwnProperty.call(t, i) && (o[i] = t[i]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(c[1] = o);
					for (var p = 2; p < s; p++) c[p] = n[p];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		1548: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				s = (n(7294), n(3905)),
				c = ["components"],
				o = {
					title: "Changelog: swc v1.2.63",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				p = {
					permalink: "/blog/2021/07/05/swc-1.2.63",
					source: "@site/blog/2021-07-05-swc-1.2.63.md",
					title: "Changelog: swc v1.2.63",
					description: "Bugfixes",
					date: "2021-07-05T00:00:00.000Z",
					formattedDate: "July 5, 2021",
					tags: [],
					readingTime: 1.39,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.64",
						permalink: "/blog/2021/07/14/swc-1.2.64",
					},
					nextItem: {
						title: "Changelog: swc v1.2.62",
						permalink: "/blog/2021/06/27/swc-1.2.62",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "common js: Duplicate named exports (#1780)",
								id: "common-js-duplicate-named-exports-1780",
								children: [],
							},
							{
								value: "bundler: Infinite hang (#1756)",
								id: "bundler-infinite-hang-1756",
								children: [],
							},
							{
								value: "comments in empty file (#1878)",
								id: "comments-in-empty-file-1878",
								children: [],
							},
							{
								value: "typescript: <code>&lt;</code> and <code>&gt;</code> in template literal types. (#1862)",
								id: "typescript--and--in-template-literal-types-1862",
								children: [],
							},
							{
								value: "typescript + react: declare module (#1865)",
								id: "typescript--react-declare-module-1865",
								children: [],
							},
							{
								value: "method with keyword as the name (#1838)",
								id: "method-with-keyword-as-the-name-1838",
								children: [],
							},
							{
								value: "Visitor bugs (#906, #1625, #1819, #1888)",
								id: "visitor-bugs-906-1625-1819-1888",
								children: [],
							},
						],
					},
					{
						value: "misc",
						id: "misc",
						children: [
							{
								value: "License of wasm (#1798)",
								id: "license-of-wasm-1798",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, s.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "common-js-duplicate-named-exports-1780" },
						"common js: Duplicate named exports (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1780",
							},
							"#1780",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc had a bug in common js handler which can break codes like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"// constant.ts\nexport enum Foo {}\n",
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// File1.ts\nexport { Foo } from "./constant";\n',
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// file2.ts\nexport { Foo } from "./constant";\n',
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// index.ts\nexport const BIZ = "biz";\nexport * from "./file1";\nexport * from "./file2";\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1846",
							},
							"#1846",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/IronLu233",
							},
							"@IronLu233",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "bundler-infinite-hang-1756" },
						"bundler: Infinite hang (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1756",
							},
							"#1756",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the bundler hang on some complex circular import scenario.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1872",
							},
							"#1872",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "comments-in-empty-file-1878" },
						"comments in empty file (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1878",
							},
							"#1878",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc stored comments in a file without any code as trailng comments, which is counterintuitive.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1879",
							},
							"#1879",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
					),
					(0, s.kt)(
						"h3",
						{
							id: "typescript--and--in-template-literal-types-1862",
						},
						"typescript: ",
						(0, s.kt)("inlineCode", { parentName: "h3" }, "<"),
						" and ",
						(0, s.kt)("inlineCode", { parentName: "h3" }, ">"),
						" in template literal types. (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1862",
							},
							"#1862",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the parser of swc failed to parse ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "<"),
						" and ",
						(0, s.kt)("inlineCode", { parentName: "p" }, ">"),
						" used in template literals, like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type A = `<`;\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1885",
							},
							"#1885",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/SimonRask",
							},
							"@SimonRask",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "typescript--react-declare-module-1865" },
						"typescript + react: declare module (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1865",
							},
							"#1865",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previsouly react fast refresh transform of swc were broken by typescript declare module statements, like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'function useHooks() {\n  return useMemo(() => 1);\n}\n\ndeclare module "x" {}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1875",
							},
							"#1875",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "method-with-keyword-as-the-name-1838" },
						"method with keyword as the name (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1838",
							},
							"#1838",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previsouly swc had a bug which breaks code if a keyword is used as a method name, like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Foo {\n  let() {}\n}\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1891",
							},
							"#1891",
						),
						" and by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "visitor-bugs-906-1625-1819-1888" },
						"Visitor bugs (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/906",
							},
							"#906",
						),
						", ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1625",
							},
							"#1625",
						),
						", ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1819",
							},
							"#1819",
						),
						", ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1888",
							},
							"#1888",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1890",
							},
							"#1890",
						),
					),
					(0, s.kt)("h2", { id: "misc" }, "misc"),
					(0, s.kt)(
						"h3",
						{ id: "license-of-wasm-1798" },
						"License of wasm (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1798",
							},
							"#1798",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"License of ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm",
						),
						" and ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm-web",
						),
						" is now ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Apache-2.0 AND MIT",
						),
						", not ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Apache-2.0/MIT",
						),
						".\nThis may affect license checking tools.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1874",
							},
							"#1874",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
