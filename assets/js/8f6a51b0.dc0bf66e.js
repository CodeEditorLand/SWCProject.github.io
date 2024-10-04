"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2776],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
			var n = r(7294);
			function o(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = r),
					e
				);
			}
			function s(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: s(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function p(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (n = 0; n < s.length; n++)
						(r = s[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var l = n.createContext({}),
				i = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = i(e.components);
					return n.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				c = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						s = e.originalType,
						l = e.parentName,
						u = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = i(r),
						f = o,
						h = d["".concat(l, ".").concat(f)] || d[f] || c[f] || s;
					return r
						? n.createElement(
								h,
								a(a({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(h, a({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var s = r.length,
						a = new Array(s);
					a[0] = d;
					var p = {};
					for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(a[1] = p);
					for (var i = 2; i < s; i++) a[i] = r[i];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		4833: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => l,
					metadata: () => i,
					toc: () => u,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				s = (r(7294), r(3905)),
				a = ["components"],
				p = {
					title: "Changelog: swc v1.2.47",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				i = {
					permalink: "/blog/2021/01/31/swc-1.2.47",
					source: "@site/blog/2021-01-31-swc-1.2.47.md",
					title: "Changelog: swc v1.2.47",
					description: "Bugfixes",
					date: "2021-01-31T00:00:00.000Z",
					formattedDate: "January 31, 2021",
					tags: [],
					readingTime: 2.035,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.48",
						permalink: "/blog/2021/02/22/swc-1.2.48",
					},
					nextItem: {
						title: "Changelog: swc v1.2.46",
						permalink: "/blog/2021/01/23/swc-1.2.46",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "bundler: No more infinite loop (#1369)",
								id: "bundler-no-more-infinite-loop-1369",
								children: [],
							},
							{
								value: "bundler: Refinsed cjs support (#1349)",
								id: "bundler-refinsed-cjs-support-1349",
								children: [],
							},
							{
								value: "bundler: Support for node js builtin modules (#1349)",
								id: "bundler-support-for-node-js-builtin-modules-1349",
								children: [],
							},
							{
								value: "bundler: Various bugfixes (#1349, )",
								id: "bundler-various-bugfixes-1349-",
								children: [],
							},
							{
								value: "sourceMappingURL is respected (#1236)",
								id: "sourcemappingurl-is-respected-1236",
								children: [],
							},
							{
								value: "sourceMappingURL relative to input file (#1255)",
								id: "sourcemappingurl-relative-to-input-file-1255",
								children: [],
							},
							{
								value: "parser: Generator function with jsx enabled (#1299)",
								id: "parser-generator-function-with-jsx-enabled-1299",
								children: [],
							},
							{
								value: "js api: Respect <code>isModule: false</code> (#1258)",
								id: "js-api-respect-ismodule-false-1258",
								children: [],
							},
							{
								value: "cjs: Fix for export default-ed classes (#1213)",
								id: "cjs-fix-for-export-default-ed-classes-1213",
								children: [],
							},
							{
								value: "typescript: Support for type-only namespaces (#1361)",
								id: "typescript-support-for-type-only-namespaces-1361",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "bundler: Support for json modules (#1368)",
								id: "bundler-support-for-json-modules-1368",
								children: [],
							},
						],
					},
					{
						value: "New platform support",
						id: "new-platform-support",
						children: [
							{
								value: "windows ia32 (#1367)",
								id: "windows-ia32-1367",
								children: [],
							},
						],
					},
				],
				c = { toc: u };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, c, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "bundler-no-more-infinite-loop-1369" },
						"bundler: No more infinite loop (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1369",
							},
							"#1369",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"This was reported by a ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"Deno",
						),
						" user at ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/8224",
							},
							"https://github.com/denoland/deno/issues/8224",
						),
						". It was hard to debug because there was no test case, but fix was simple.",
					),
					(0, s.kt)(
						"h3",
						{ id: "bundler-refinsed-cjs-support-1349" },
						"bundler: Refinsed cjs support (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1349",
							},
							"#1349",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"You can now use ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator",
						),
						" with spack, the bundler for the ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" project.",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously some cjs modules are incorrectly compiled.",
					),
					(0, s.kt)(
						"h3",
						{
							id: "bundler-support-for-node-js-builtin-modules-1349",
						},
						"bundler: Support for node js builtin modules (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1349",
							},
							"#1349",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"The bundler now supports importing / reexporting node js builtin modules. It currently does not touch such imports / exports.",
					),
					(0, s.kt)(
						"h3",
						{ id: "bundler-various-bugfixes-1349-" },
						"bundler: Various bugfixes (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1349",
							},
							"#1349",
						),
						", )",
					),
					(0, s.kt)("p", null, "Some more bugs are fixed."),
					(0, s.kt)(
						"h3",
						{ id: "sourcemappingurl-is-respected-1236" },
						"sourceMappingURL is respected (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1236",
							},
							"#1236",
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
						" now respectes ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"//# sourceMappingURL=",
						),
						" in the input file.",
					),
					(0, s.kt)(
						"h3",
						{ id: "sourcemappingurl-relative-to-input-file-1255" },
						"sourceMappingURL relative to input file (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1255",
							},
							"#1255",
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
						" now resolves source maps from two location (to prevent regression).\nIt will try relative path first, and tries to resolve from root if source map isn't found.",
					),
					(0, s.kt)(
						"p",
						null,
						"Second check is to preserve breaking existing tools.",
					),
					(0, s.kt)(
						"h3",
						{
							id: "parser-generator-function-with-jsx-enabled-1299",
						},
						"parser: Generator function with jsx enabled (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1299",
							},
							"#1299",
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
						" can now parse code like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export const iteratorMapGenerator = function* <T, R>(\n  values: IterableIterator<T>,\n  execute: IteratorExecution<T, R>\n): IterableIterator<R> {};\n",
						),
					),
					(0, s.kt)("p", null, "correctly."),
					(0, s.kt)(
						"h3",
						{ id: "js-api-respect-ismodule-false-1258" },
						"js api: Respect ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"isModule: false",
						),
						" (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1258",
							},
							"#1258",
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
						" now supports parsing a file as script.\nIt would be useful if you are using non-strict mode codes.",
					),
					(0, s.kt)(
						"h3",
						{ id: "cjs-fix-for-export-default-ed-classes-1213" },
						"cjs: Fix for export default-ed classes (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1213",
							},
							"#1213",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import foo from "foo";\n\nclass OK {\n  constructor() {\n    console.log(foo);\n  }\n}\n\nexport default class NotOK {\n  constructor() {\n    console.log(foo);\n  }\n}\n',
						),
					),
					(0, s.kt)("p", null, "as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nexports.default = void 0;\nvar _foo = _interopRequireDefault(require("foo"));\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule\n    ? obj\n    : {\n        default: obj,\n      };\n}\nclass OK {\n  constructor() {\n    console.log(_foo.default);\n  }\n}\nclass NotOK {\n  constructor() {\n    console.log(foo); // <- this is wrong\n  }\n}\nexports.default = NotOK;\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"which is wrong because of the line commented. It's now fixed.",
					),
					(0, s.kt)(
						"h3",
						{
							id: "typescript-support-for-type-only-namespaces-1361",
						},
						"typescript: Support for type-only namespaces (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1361",
							},
							"#1361",
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
						" now correctly removes the namespace ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"TestClass",
						),
						" from the code below.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class TestClass {\n  public testMethod(args: TestClass.TestArgs) {\n    return args.param1;\n  }\n}\n\ndeclare namespace TestClass {\n  export interface TestArgs {\n    param1: boolean;\n  }\n}\n",
						),
					),
					(0, s.kt)("h2", { id: "new-features" }, "New features"),
					(0, s.kt)(
						"h3",
						{ id: "bundler-support-for-json-modules-1368" },
						"bundler: Support for json modules (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1368",
							},
							"#1368",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Reported as ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/1225",
							},
							"axios import error",
						),
						", but actually it was a bug related to importing json files.",
					),
					(0, s.kt)(
						"h2",
						{ id: "new-platform-support" },
						"New platform support",
					),
					(0, s.kt)(
						"h3",
						{ id: "windows-ia32-1367" },
						"windows ia32 (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1367",
							},
							"#1367",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Thanks to ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports windows-ia32.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
