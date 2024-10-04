"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[816],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => m });
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
			function i(e) {
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
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = p(e.components);
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
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						c = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						m = o,
						h = d["".concat(l, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								h,
								i(i({ ref: t }, c), {}, { components: n }),
							)
						: r.createElement(h, i({ ref: t }, c));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var s = {};
					for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(i[1] = s);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		5281: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => c,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.2.103",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/10/25/swc-1.2.103",
					source: "@site/blog/2021-10-25-swc-1.2.103.md",
					title: "Changelog: swc v1.2.103",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/204?closed=1",
					date: "2021-10-25T00:00:00.000Z",
					formattedDate: "October 25, 2021",
					tags: [],
					readingTime: 2.12,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.104",
						permalink: "/blog/2021/10/27/swc-1.2.104",
					},
					nextItem: {
						title: "Changelog: swc v1.2.102",
						permalink: "/blog/2021/10/21/swc-1.2.102",
					},
				},
				c = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>minifier</code>: Name mangler",
								id: "minifier-name-mangler",
								children: [],
							},
							{
								value: "<code>browserslist</code> in <code>optionalDependencies</code>",
								id: "browserslist-in-optionaldependencies",
								children: [],
							},
							{
								value: "single-property destructuring",
								id: "single-property-destructuring",
								children: [],
							},
							{
								value: "FreeBSD build",
								id: "freebsd-build",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>async_to_generator</code>: for await in async generators (#2306)",
								id: "async_to_generator-for-await-in-async-generators-2306",
								children: [],
							},
							{
								value: "<code>inline_globals</code>: Assignment to <code>process.env</code> (#2499)",
								id: "inline_globals-assignment-to-processenv-2499",
								children: [],
							},
							{
								value: "<code>bundler</code>: Named export",
								id: "bundler-named-export",
								children: [],
							},
							{
								value: "<code>bundler</code>: cjs helper (#2517)",
								id: "bundler-cjs-helper-2517",
								children: [],
							},
							{
								value: "react fast refresh",
								id: "react-fast-refresh",
								children: [],
							},
							{
								value: "typescript: <code>import A = B</code>",
								id: "typescript-import-a--b",
								children: [],
							},
							{
								value: "this in class fields (#2344)",
								id: "this-in-class-fields-2344",
								children: [],
							},
							{
								value: "minifier: Various bugs",
								id: "minifier-various-bugs",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/204?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/204?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"h3",
						{ id: "minifier-name-mangler" },
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"minifier",
						),
						": Name mangler",
					),
					(0, a.kt)(
						"p",
						null,
						"I reimplemented the name mangler, and now compression rate is on par with terser.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2509",
							},
							"#2509",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "browserslist-in-optionaldependencies" },
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"browserslist",
						),
						" in ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"optionalDependencies",
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"optionalDependencies",
						),
						" correctly.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/iheyunfei",
							},
							"@iheyunfei",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2515",
							},
							"#2515",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "single-property-destructuring" },
						"single-property destructuring",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now compiles",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const { NODE_ENV } = process.env;\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const NODE_ENV = process.env.NODE_ENV;\n",
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
								href: "https://github.com/swc-project/swc/pull/2511",
							},
							"#2511",
						),
						".",
					),
					(0, a.kt)("h3", { id: "freebsd-build" }, "FreeBSD build"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports FreeBSD again.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2497",
							},
							"#2497",
						),
						".",
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{
							id: "async_to_generator-for-await-in-async-generators-2306",
						},
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"async_to_generator",
						),
						": for await in async generators (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2306",
							},
							"#2306",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code like below, because it did not consider the type of function while handling for-await loops.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'async function* g1(): AsyncGenerator<string> {\n  yield "OK";\n  yield "OK";\n  yield "OK";\n}\n\nasync function* g2(): AsyncGenerator<string> {\n  for await (const g of g1()) {\n    yield g;\n  }\n}\n\nfor await (const g of g2()) {\n  console.log(g);\n}\n',
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
								href: "https://github.com/swc-project/swc/pull/2526",
							},
							"#2526",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "inline_globals-assignment-to-processenv-2499" },
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"inline_globals",
						),
						": Assignment to ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"process.env",
						),
						" (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2499",
							},
							"#2499",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inline_globals",
						),
						" did not consider assignment context, and it resulted in a bug if one tries to assign value to e.g. ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"process.env.NODE_ENV",
						),
						".",
					),
					(0, a.kt)("p", null, "Affected code looks like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'process.env.FOO = "bar";\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"and it's now fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2524",
							},
							"#2524",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-named-export" },
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"bundler",
						),
						": Named export",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, the import analyzer did not mark ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "foo"),
						" in ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export { foo }",
						),
						" as unknown-access, and it broke the code if it was the only use.",
					),
					(0, a.kt)("p", null, "Reproduction case looks like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'// temp.js\nimport { foo } from "./temp2.js";\nfoo.hello(1);\n\n// temp2.js\nimport * as foo from "./temp3.js";\nexport { foo };\nfoo.hello(2);\n\n// temp3.js\nexport function hello(n) {\n  console.log("Hello", n);\n}\n',
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
								href: "https://github.com/swc-project/swc/pull/2510",
							},
							"#2510",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-cjs-helper-2517" },
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"bundler",
						),
						": cjs helper (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2517",
							},
							"#2517",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"There was a regression of bundler, and the bug could break code using common js imports.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2518",
							},
							"#2518",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "react-fast-refresh" },
						"react fast refresh",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously react fast refresh has a bug related to the span hygiene which is the own system of swc for managing variables.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2501",
							},
							"#2501",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-import-a--b" },
						"typescript: ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"import A = B",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code using ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"import A = foo.bar",
						),
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
								href: "https://github.com/nayeemrmn",
							},
							"@nayeemrmn",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2496",
							},
							"#2496",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "this-in-class-fields-2344" },
						"this in class fields (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2344",
							},
							"#2344",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class LoggingButton extends React.Component {\n  handleClick = () => {\n    console.log("this is:", this);\n  };\n\n  render() {\n    return <button onClick={this.handleClick}>Click me</button>;\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"because it has a bug related to ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "this"),
						" in arrows in class properties.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2514",
							},
							"#2514",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "minifier-various-bugs" },
						"minifier: Various bugs",
					),
					(0, a.kt)(
						"p",
						null,
						"I used the tests for the deno bundler to test minifier, and fixed some bugs.",
					),
					(0, a.kt)(
						"p",
						null,
						"See ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2503",
							},
							"#2503",
						),
						" for mor details.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
