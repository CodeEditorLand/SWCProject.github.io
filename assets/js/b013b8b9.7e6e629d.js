"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1760],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => m });
			var a = n(7294);
			function r(e, t, n) {
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
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(n), !0).forEach(function (t) {
								r(e, t, n[t]);
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
					a,
					r = (function (e, t) {
						if (null == e) return {};
						var n,
							a,
							r = {},
							s = Object.keys(e);
						for (a = 0; a < s.length; a++)
							(n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
						return r;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (a = 0; a < s.length; a++)
						(n = s[a]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(r[n] = e[n]));
				}
				return r;
			}
			var i = a.createContext({}),
				p = function (e) {
					var t = a.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return a.createElement(
						i.Provider,
						{ value: t },
						e.children,
					);
				},
				c = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return a.createElement(a.Fragment, {}, t);
					},
				},
				d = a.forwardRef(function (e, t) {
					var n = e.components,
						r = e.mdxType,
						s = e.originalType,
						i = e.parentName,
						u = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						m = r,
						h = d["".concat(i, ".").concat(m)] || d[m] || c[m] || s;
					return n
						? a.createElement(
								h,
								l(l({ ref: t }, u), {}, { components: n }),
							)
						: a.createElement(h, l({ ref: t }, u));
				});
			function m(e, t) {
				var n = arguments,
					r = t && t.mdxType;
				if ("string" == typeof e || r) {
					var s = n.length,
						l = new Array(s);
					l[0] = d;
					var o = {};
					for (var i in t) hasOwnProperty.call(t, i) && (o[i] = t[i]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(l[1] = o);
					for (var p = 2; p < s; p++) l[p] = n[p];
					return a.createElement.apply(null, l);
				}
				return a.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		9698: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => u,
					default: () => d,
				});
			var a = n(7462),
				r = n(3366),
				s = (n(7294), n(3905)),
				l = ["components"],
				o = {
					title: "Changelog: swc v1.2.40",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				p = {
					permalink: "/blog/2020/12/04/swc-1.2.40",
					source: "@site/blog/2020-12-04-swc-1.2.40.md",
					title: "Changelog: swc v1.2.40",
					description: "Bugfixes",
					date: "2020-12-04T00:00:00.000Z",
					formattedDate: "December 4, 2020",
					tags: [],
					readingTime: 4.9,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.41",
						permalink: "/blog/2020/12/22/swc-1.2.41",
					},
					nextItem: {
						title: "Changelog: swc v1.2.39",
						permalink: "/blog/2020/11/21/swc-1.2.39",
					},
				},
				u = [
					{ value: "Bugfixes", id: "bugfixes", children: [] },
					{
						value: "<code>design;type</code> for typescript enums (#1248)",
						id: "designtype-for-typescript-enums-1248",
						children: [],
					},
					{
						value: "regenerator: ternary with await (#1228)",
						id: "regenerator-ternary-with-await-1228",
						children: [],
					},
					{
						value: "bundler: Circular imports in wrapped module (#1234)",
						id: "bundler-circular-imports-in-wrapped-module-1234",
						children: [],
					},
					{
						value: "bundler: export * as alias (#1234)",
						id: "bundler-export--as-alias-1234",
						children: [],
					},
					{
						value: "bundler: fix deglobbing logic (#1234)",
						id: "bundler-fix-deglobbing-logic-1234",
						children: [],
					},
					{
						value: "codegen: unicode escape sequnces (#1242)",
						id: "codegen-unicode-escape-sequnces-1242",
						children: [],
					},
					{
						value: "bundler: importing a module multiple time (#1242)",
						id: "bundler-importing-a-module-multiple-time-1242",
						children: [],
					},
					{
						value: "bundler: export default in reexport (#1245)",
						id: "bundler-export-default-in-reexport-1245",
						children: [],
					},
					{
						value: "bundler: export specifiers without alias (#1246)",
						id: "bundler-export-specifiers-without-alias-1246",
						children: [],
					},
					{
						value: "bundler: improve sorting (#1246)",
						id: "bundler-improve-sorting-1246",
						children: [],
					},
					{
						value: "bundler: top-level-await flattening (#1246)",
						id: "bundler-top-level-await-flattening-1246",
						children: [],
					},
					{
						value: "codegen: multiline jsx texts (#1241)",
						id: "codegen-multiline-jsx-texts-1241",
						children: [],
					},
					{
						value: "async_to_generator: async method (#1241)",
						id: "async_to_generator-async-method-1241",
						children: [],
					},
					{
						value: "regenerator: no useless statements (#1241)",
						id: "regenerator-no-useless-statements-1241",
						children: [],
					},
					{
						value: "regenerator: track finally properly (#1241)",
						id: "regenerator-track-finally-properly-1241",
						children: [],
					},
				],
				c = { toc: u };
			function d(e) {
				var t = e.components,
					n = (0, r.Z)(e, l);
				return (0, s.kt)(
					"wrapper",
					(0, a.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h2",
						{ id: "designtype-for-typescript-enums-1248" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"design;type",
						),
						" for typescript enums (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1248",
							},
							"#1248",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Decorator metadata can be used to create very convenient tools. ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports it more correctly.",
					),
					(0, s.kt)(
						"p",
						null,
						"For example, the code below works with ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@1.2.40+",
						),
						".",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'enum MyEnum {\n  x = "xxx",\n  y = "yyy",\n}\n\nclass Xpto {\n  @Decorator()\n  value!: MyEnum;\n}\n\nfunction Decorator() {\n  return function (...args) {};\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "regenerator-ternary-with-await-1228" },
						"regenerator: ternary with await (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1228",
							},
							"#1228",
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
						" miscompiled the code below because ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" had a bug.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const source = Math.random() < 2 ? "matilda" : "fred";\nconst details = {\n  _id: "1",\n};\nasync function request(path) {\n  return `success:${path}`;\n}\n\n(async () => {\n  const obj =\n    source === "matilda"\n      ? details\n      : await request(`/${details._id}?source=${source}`);\n\n  console.log({ obj });\n})();\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"I tried hard to mimic its logic as much as possible, but original codebase depends on dynamic nature of javascript and requires shared ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "&mut"),
						", so logic differs even if it's a port.",
					),
					(0, s.kt)(
						"p",
						null,
						"Anyway, the code above works properly with ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						(0, s.kt)("inlineCode", { parentName: "p" }, "@1.2.40"),
						".",
					),
					(0, s.kt)(
						"h2",
						{
							id: "bundler-circular-imports-in-wrapped-module-1234",
						},
						"bundler: Circular imports in wrapped module (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1234",
							},
							"#1234",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import * as path from "https://deno.land/std@0.67.0/path/mod.ts";\nconst { a, ...rest } = { a: 3, b: "bar" };\nconsole.log(a, rest, path);\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						"-based bundlers (",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"deno bundle",
						),
						" and ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "spack"),
						") had a bug which occurs",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Module ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"path",
							),
							" is loaded as a wrapped module.",
						),
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"https://deno.land/std@0.67.0/path/mod.ts",
							),
							" has circular imports internally.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This is now fixed and such code works well.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-export--as-alias-1234" },
						"bundler: export ",
						"*",
						" as alias (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1234",
							},
							"#1234",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"I got the bug report from ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"deno",
						),
						" issue tracker, and fixed it by preserving export info.",
					),
					(0, s.kt)(
						"p",
						null,
						"See: ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/8481",
							},
							"https://github.com/denoland/deno/issues/8481",
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-fix-deglobbing-logic-1234" },
						"bundler: fix deglobbing logic (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1234",
							},
							"#1234",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously, deglobbing logic was to aggressive so that it replaces ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"log.handlers.FileHandler",
						),
						" into ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"FileHandler",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"It was because previous logic only checked the originating module. This is fixed by comparing symbols.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import * as log from "https://deno.land/std/log/mod.ts";\n\nexport async function myCLI(): Promise<void> {\n  await log.setup({\n    handlers: {\n      file: new log.handlers.FileHandler("DEBUG", {\n        filename: "my.log",\n      }),\n      console: new log.handlers.ConsoleHandler("INFO"),\n    },\n    loggers: {\n      default: {\n        level: "DEBUG",\n        handlers: ["console", "file"],\n      },\n    },\n  });\n\n  log.info("Ok!");\n}\n\nif (import.meta.main) {\n  myCLI();\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "codegen-unicode-escape-sequnces-1242" },
						"codegen: unicode escape sequnces (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1242",
							},
							"#1242",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"There was a bug which ignores the value part in unicode escapes while printing result code.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-importing-a-module-multiple-time-1242" },
						"bundler: importing a module multiple time (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1242",
							},
							"#1242",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import Head from "https://deno.land/x/aleph/head.ts";\nimport * as Head2 from "https://deno.land/x/aleph/head.ts";\nconsole.log(Head, Head2);\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"I was a bit curious about the usecase, but I fixed it to be spec-compilant and it works well.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-export-default-in-reexport-1245" },
						"bundler: export default in reexport (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1245",
							},
							"#1245",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the bundler broke code below,",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import * as c from "https://deno.land/x/case@v2.1.0/mod.ts";\nconst s = "one FINE day";\nconsole.log("camel:", c.camelCase(s));\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"because ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"https://deno.land/x/case@v2.1.0/mod.ts",
						),
						" is defined as",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export { default as camelCase } from "./camelCase.ts";\nexport { default as constantCase } from "./constantCase.ts";\nexport { default as dotCase } from "./dotCase.ts";\nexport { default as headerCase } from "./headerCase.ts";\nexport { default as lowerCase } from "./lowerCase.ts";\nexport { default as lowerFirstCase } from "./lowerFirstCase.ts";\nexport { default as normalCase } from "./normalCase.ts";\nexport { default as paramCase } from "./paramCase.ts";\nexport { default as pascalCase } from "./pascalCase.ts";\nexport { default as pathCase } from "./pathCase.ts";\nexport { default as sentenceCase } from "./sentenceCase.ts";\nexport { default as snakeCase } from "./snakeCase.ts";\nexport { default as swapCase } from "./swapCase.ts";\nexport { default as titleCase } from "./titleCase.ts";\nexport { default as upperCase } from "./upperCase.ts";\nexport { default as upperFirstCase } from "./upperFirstCase.ts";\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The bundler can now handle those kinds of reexports properly.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-export-specifiers-without-alias-1246" },
						"bundler: export specifiers without alias (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1246",
							},
							"#1246",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Reported with ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/8573",
							},
							"https://github.com/denoland/deno/issues/8573",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The bundler didn't handled it because while checking for reexports, the bundler modifies ast so that reexport specifier without alias does not exist. But in some circumstances, the bundler injects export specifiers without alias to maintain semantic of a module.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-improve-sorting-1246" },
						"bundler: improve sorting (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1246",
							},
							"#1246",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Reported with ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/8574",
							},
							"https://github.com/denoland/deno/issues/8574",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The bug was that, the code below was not treated as an initializer of ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"globalContext",
						),
						".",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'if (typeof window !== "undefined") {\n  globalContext = window;\n} else if (typeof self !== "undefined") {\n  globalContext = self;\n} else {\n  globalContext = {};\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The fix was trivial as there were already utilities to detect initialization.",
					),
					(0, s.kt)(
						"h2",
						{ id: "bundler-top-level-await-flattening-1246" },
						"bundler: top-level-await flattening (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1246",
							},
							"#1246",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// main.ts\nimport { log } from "./deps.ts";\nawait log.setup({});\n',
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// deps.ts\nexport * as log from "./log.ts";\n',
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"// log.ts\nexport async function setup() {}\nawait setup();\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This resulted in a bug because the bundler assumed wrapped module is not async.",
					),
					(0, s.kt)(
						"p",
						null,
						"At first glance, it seems hard to fix, but there's a simple trick.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const log_ts = await(async function () {\n  export async function setup() {}\n  await setup();\n})();\n",
						),
					),
					(0, s.kt)("p", null, "This fixes the issue."),
					(0, s.kt)(
						"h2",
						{ id: "codegen-multiline-jsx-texts-1241" },
						"codegen: multiline jsx texts (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1241",
							},
							"#1241",
						),
						")",
					),
					(0, s.kt)("p", null, "Affected code looks like"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'function Component() {\n    return React.createElement("div", {\n        name: "A\n    BB"\n    });\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "async_to_generator-async-method-1241" },
						"async_to_generator: async method (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1241",
							},
							"#1241",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Service {\n  async is(a: string): Promise<boolean> {\n    return a.toUpperCase() === a;\n  }\n}\n",
						),
					),
					(0, s.kt)("p", null, "should be"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Service {\n  is(a) {\n    return _asyncToGenerator(function* () {\n      yield Promise.resolve();\n      return a.toUpperCase() === a;\n    })();\n  }\n}\n",
						),
					),
					(0, s.kt)("p", null, "but it was transpiled as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Service {\n  is(a) {\n    return _asyncToGenerator(function* (a) {\n      yield Promise.resolve();\n      return a.toUpperCase() === a;\n    })();\n  }\n}\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"which has wrong ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "a"),
						" in the parameter. This is fixed by simply removing all parameters.",
					),
					(0, s.kt)(
						"h2",
						{ id: "regenerator-no-useless-statements-1241" },
						"regenerator: no useless statements (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1241",
							},
							"#1241",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"I made a mistake while proting ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" pass. The mistake resulted in bit larger code, and very hard time debugging.",
					),
					(0, s.kt)(
						"p",
						null,
						"Now I find the cause of case number being not same as one of regenerator, so future bugs will be easily fixed.",
					),
					(0, s.kt)(
						"h2",
						{ id: "regenerator-track-finally-properly-1241" },
						"regenerator: track finally properly (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1241",
							},
							"#1241",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Again, ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" pass depends on shared mutable state hardly, and I made mistake while porting it.\nFixing it required some dirty code because we have to modify a value stored in a list after inserting it, but it's in managable range.",
					),
					(0, s.kt)("hr", null),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
