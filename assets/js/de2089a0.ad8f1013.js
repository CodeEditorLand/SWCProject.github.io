"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7860],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => h });
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
			function i(e, t) {
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
						? i(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: i(Object(n)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
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
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = l(e.components);
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						i = e.originalType,
						p = e.parentName,
						c = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(n),
						h = a,
						m = d["".concat(p, ".").concat(h)] || d[h] || u[h] || i;
					return n
						? r.createElement(
								m,
								o(o({ ref: t }, c), {}, { components: n }),
							)
						: r.createElement(m, o({ ref: t }, c));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = n.length,
						o = new Array(i);
					o[0] = d;
					var s = {};
					for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : a),
						(o[1] = s);
					for (var l = 2; l < i; l++) o[l] = n[l];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		1802: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => c,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				i = (n(7294), n(3905)),
				o = ["components"],
				s = {
					title: "Changelog: swc v1.2.37",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2020/10/29/swc-1.2.37",
					source: "@site/blog/2020-10-29-swc-1.2.37.md",
					title: "Changelog: swc v1.2.37",
					description: "Bugfixes",
					date: "2020-10-29T00:00:00.000Z",
					formattedDate: "October 29, 2020",
					tags: [],
					readingTime: 3.075,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.38",
						permalink: "/blog/2020/11/08/swc-1.2.38",
					},
					nextItem: {
						title: "Changelog: swc v1.2.36",
						permalink: "/blog/2020/10/06/swc-1.2.36",
					},
				},
				c = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "ascii-only output (#1191)",
								id: "ascii-only-output-1191",
								children: [],
							},
							{
								value: "error instead of panic (#1170)",
								id: "error-instead-of-panic-1170",
								children: [],
							},
							{
								value: "codegen bug of if (#1185)",
								id: "codegen-bug-of-if-1185",
								children: [],
							},
							{
								value: "typeof helper issue (#1183)",
								id: "typeof-helper-issue-1183",
								children: [],
							},
							{
								value: "invalid escapes in template literals (#1175)",
								id: "invalid-escapes-in-template-literals-1175",
								children: [],
							},
							{
								value: "error recoveries (#1189)",
								id: "error-recoveries-1189",
								children: [],
							},
							{
								value: "dce bug (#1157)",
								id: "dce-bug-1157",
								children: [],
							},
							{
								value: "hygiene bug (#1144)",
								id: "hygiene-bug-1144",
								children: [],
							},
						],
					},
					{
						value: "Bundler",
						id: "bundler",
						children: [
							{
								value: "import and export from a module (#1152)",
								id: "import-and-export-from-a-module-1152",
								children: [],
							},
							{
								value: "computed access to namespace imports (#1159)",
								id: "computed-access-to-namespace-imports-1159",
								children: [],
							},
							{
								value: "determinisctic output (#1166)",
								id: "determinisctic-output-1166",
								children: [],
							},
							{
								value: "pass ordering (#1171)",
								id: "pass-ordering-1171",
								children: [],
							},
							{
								value: "export * (#1154)",
								id: "export--1154",
								children: [],
							},
							{
								value: "codegen of single arg arrow functions (#1186)",
								id: "codegen-of-single-arg-arrow-functions-1186",
								children: [],
							},
						],
					},
					{
						value: "TypeScript 4.1",
						id: "typescript-41",
						children: [
							{
								value: "as in mapped type (#1151)",
								id: "as-in-mapped-type-1151",
								children: [],
							},
							{
								value: "template literal type (#1190)",
								id: "template-literal-type-1190",
								children: [],
							},
							{
								value: "intrinsic type (#1193)",
								id: "intrinsic-type-1193",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "ascii-only-output-1191" },
						"ascii-only output (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1191",
							},
							"#1191",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						"[swc]",
						" emitted utf-8 output and had some bug related to escape, but",
						"[swc]",
						" now emits only ascii characters.",
					),
					(0, i.kt)(
						"h3",
						{ id: "error-instead-of-panic-1170" },
						"error instead of panic (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1170",
							},
							"#1170",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						"[swc]",
						" panicked if the ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "parse"),
						" is called with the code below.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre" },
							"const toString: (local)(this: Function) => string) = undefined;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"This behavior is wrong and ",
						"[swc]",
						" now emits error instead of panicking.",
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-bug-of-if-1185" },
						"codegen bug of if (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1185",
							},
							"#1185",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						"[swc]",
						" emitted a wrong output for the code below.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"if (...) {}\nelse foo++;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/braddunbar",
							},
							"@braddunbar",
						),
						", it's now fixed and the generated code works as expected.",
					),
					(0, i.kt)(
						"h3",
						{ id: "typeof-helper-issue-1183" },
						"typeof helper issue (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1183",
							},
							"#1183",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "typeof"),
						" helper had a bug which occurs in a runtime without ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Symbol"),
						". It's fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/wessberg",
							},
							"@wessberg",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "invalid-escapes-in-template-literals-1175" },
						"invalid escapes in template literals (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1175",
							},
							"#1175",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"According to ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "es2018"),
						" specification, the code below is valid.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"latex`\\unicode`;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"But previously, ",
						"[swc]",
						" could not parse it. This is now fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/braddunbar",
							},
							"@braddunbar",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "error-recoveries-1189" },
						"error recoveries (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1189",
							},
							"#1189",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"The parser of ",
						"[swc]",
						" can now recover from strict-mode violations.",
					),
					(0, i.kt)(
						"p",
						null,
						"It means, even if your file has some errors, you can still get ast although it's not valid.\nAs one purpose of ",
						"[swc]",
						" is being a basic building block, this is big win.",
					),
					(0, i.kt)(
						"h3",
						{ id: "dce-bug-1157" },
						"dce bug (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1157",
							},
							"#1157",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"The dead code elimination pass had a bug related to class properties, and it's now fixed.",
					),
					(0, i.kt)(
						"p",
						null,
						"Now code like below works well after optimizing.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export interface D {\n  resolve: any;\n  reject: any;\n}\n\nexport function d(): D {\n  let methods;\n  const promise = new Promise((resolve, reject) => {\n    methods = { resolve, reject };\n  });\n  return Object.assign(promise, methods);\n}\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "hygiene-bug-1144" },
						"hygiene bug (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1144",
							},
							"#1144",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"[swc]",
						" had a bug which makes default value in object patterns miscompiled. This is now fixed.",
					),
					(0, i.kt)("h2", { id: "bundler" }, "Bundler"),
					(0, i.kt)(
						"p",
						null,
						"Starting from ",
						"[deno]",
						"@1.5, there's an option ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"--no-check",
						),
						" in options of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"deno bundle",
						),
						".\nIt uses ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_bundler",
						),
						", which is a general implementation of a web asset bundler.\nWhile integrating, the ",
						"[deno]",
						" team reported many bugs and those are all fixed.",
					),
					(0, i.kt)(
						"h3",
						{ id: "import-and-export-from-a-module-1152" },
						"import and export from a module (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1152",
							},
							"#1152",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the bundler failed to process code below.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { a as defaultA, O } from "./m.ts";\nexport { O } from "./m.ts";\n\ninterface AOptions {\n  a?(): void;\n  c?: O;\n}\n\nclass A {\n  #a: () => void;\n  #c?: O;\n  constructor(o: AOptions = {}) {\n    const { a = defaultA, c } = o;\n    this.#a = a;\n    this.#c = c;\n  }\n\n  a() {\n    this.#a();\n  }\n\n  c() {\n    console.log(this.#c);\n  }\n}\n\nlet a = new A();\na.a();\na.c();\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"This is because there was no logic to handle exports and imports from a module. This is fixed by adding such logic.",
					),
					(0, i.kt)(
						"h3",
						{ id: "computed-access-to-namespace-imports-1159" },
						"computed access to namespace imports (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1159",
							},
							"#1159",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"This made ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://deno.land/x/oak@v6.3.1/examples/server.ts",
							},
							"https://deno.land/x/oak@v6.3.1/examples/server.ts",
						),
						" work after bundling.",
					),
					(0, i.kt)(
						"h3",
						{ id: "determinisctic-output-1166" },
						"determinisctic output (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1166",
							},
							"#1166",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"For reliability, I made the output of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_bundler",
						),
						" deterministic.",
					),
					(0, i.kt)(
						"h3",
						{ id: "pass-ordering-1171" },
						"pass ordering (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1171",
							},
							"#1171",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"The pass ordering was wrong, and resulted in a bug, which prevents ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://deno.land/x/oak@v6.3.1/examples/sseServer.ts",
							},
							"https://deno.land/x/oak@v6.3.1/examples/sseServer.ts",
						),
						" from working after bundling.",
					),
					(0, i.kt)(
						"h3",
						{ id: "export--1154" },
						"export ",
						"*",
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1154",
							},
							"#1154",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"The bundler of ",
						"[swc]",
						" had a bug related to ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export *",
						),
						" where a function or a class is exported. This is fixed by applying same rule as variable exports.",
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-of-single-arg-arrow-functions-1186" },
						"codegen of single arg arrow functions (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1186",
							},
							"#1186",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/braddunbar",
							},
							"@braddunbar",
						),
						", ",
						"[swc]",
						" now prints arrow function with single arguement properly.",
					),
					(0, i.kt)("h2", { id: "typescript-41" }, "TypeScript 4.1"),
					(0, i.kt)(
						"h3",
						{ id: "as-in-mapped-type-1151" },
						"as in mapped type (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1151",
							},
							"#1151",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						", the code below now works.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"let map: { [P in string as string]: number };\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "template-literal-type-1190" },
						"template literal type (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1190",
							},
							"#1190",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						", the code below now works.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type MultiLine = `\nsome value\n`;\ntype WithTypes = `with-a-${string}`;\ntype WithTypes2 = `with-a-${MyAlias}-end`;\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "intrinsic-type-1193" },
						"intrinsic type (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1193",
							},
							"#1193",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						", the code below now works.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"let i: intrinsic;\n```\n\n[swc]: https://swc.rs\n[deno]: https://deno.land\n",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
