"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6462],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => m });
			var n = r(7294);
			function a(e, t, r) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
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
			function i(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
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
									(a[r] = e[r]));
				}
				return a;
			}
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				d = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						s = e.originalType,
						p = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(r),
						m = a,
						h = u["".concat(p, ".").concat(m)] || u[m] || d[m] || s;
					return r
						? n.createElement(
								h,
								o(o({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, o({ ref: t }, l));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = r.length,
						o = new Array(s);
					o[0] = u;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var c = 2; c < s; c++) o[c] = r[c];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		6383: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				s = (r(7294), r(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.2.54",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/04/20/swc-1.2.54",
					source: "@site/blog/2021-04-20-swc-1.2.54.md",
					title: "Changelog: swc v1.2.54",
					description: "Bugfixes",
					date: "2021-04-20T00:00:00.000Z",
					formattedDate: "April 20, 2021",
					tags: [],
					readingTime: 2.63,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.55",
						permalink: "/blog/2021/05/07/swc-1.2.55",
					},
					nextItem: {
						title: "Changelog: swc v1.2.53",
						permalink: "/blog/2021/04/17/swc-1.2.53",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript: async override (#1558)",
								id: "typescript-async-override-1558",
								children: [],
							},
							{
								value: "dce bug (#1533)",
								id: "dce-bug-1533",
								children: [],
							},
							{
								value: "SIGILL (#1583)",
								id: "sigill-1583",
								children: [],
							},
							{
								value: "Logical nullish assigments (#1570)",
								id: "logical-nullish-assigments-1570",
								children: [],
							},
							{
								value: "Order of statements regarding imports (#1457)",
								id: "order-of-statements-regarding-imports-1457",
								children: [],
							},
							{
								value: "Syntax context of super classes (#1586)",
								id: "syntax-context-of-super-classes-1586",
								children: [],
							},
							{
								value: "Statement order of default imports. (#1568)",
								id: "statement-order-of-default-imports-1568",
								children: [],
							},
							{
								value: "Mixed import of default (#1525)",
								id: "mixed-import-of-default-1525",
								children: [],
							},
							{
								value: "SourceMaps (#1581)",
								id: "sourcemaps-1581",
								children: [],
							},
							{
								value: "Parameter property decorators (#1456)",
								id: "parameter-property-decorators-1456",
								children: [],
							},
							{
								value: "Fix for <code>arguments</code> (#1585)",
								id: "fix-for-arguments-1585",
								children: [],
							},
							{
								value: "Fix for decorators (#1362)",
								id: "fix-for-decorators-1362",
								children: [],
							},
						],
					},
				],
				d = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "typescript-async-override-1558" },
						"typescript: async override (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1558",
							},
							"#1558",
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
						" now supports ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"async override",
						),
						" in addition to ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"override async",
						),
						".",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Base {\n    method1() {}\n    method2() {}\n}\n\nclass Test extends Base {\n    public override async method1() {\n        return Promise.resolve(1);\n    }\n\n    public async override method2() {\n        return Promise.resolve(1);\n    }\n}\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "dce-bug-1533" },
						"dce bug (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1533",
							},
							"#1533",
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
						" had a bug that causes a usage of a variable in the discriminant of a switch statement not treated as a usage.\nIt's now fixed and code like below works even if the optimizer is enabled.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var this_will_disappear; // <-- this variable declaration disappears\nfunction a(x) {\n  switch (this_will_disappear) {\n    case x:\n      return;\n  }\n}\nfunction b() {\n  c();\n}\nfunction c() {\n  b();\n  d();\n}\nfunction d() {\n  a();\n}\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "sigill-1583" },
						"SIGILL (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1583",
							},
							"#1583",
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
						" used ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "aes"),
						" feature of cpus as an optimization, but it caused ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "SIGILL"),
						" on a user's pc.\nSo I disabled ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "aes"),
						" feature.",
					),
					(0, s.kt)(
						"h3",
						{ id: "logical-nullish-assigments-1570" },
						"Logical nullish assigments (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1570",
							},
							"#1570",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const a: { [a: string]: string } = {};\na.b ??= \"1\";\nconsole.log(a); // expect: { b: '1' }\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The code above was miscompieled by ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						", but it's now fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "order-of-statements-regarding-imports-1457" },
						"Order of statements regarding imports (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1457",
							},
							"#1457",
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
						" now preserve order of statements even if there are some imports.\nThis is to fix code like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import {\n  setGlobalOptions,\n  plugin,\n  buildSchema,\n  addModelToTypegoose,\n  deleteModel,\n} from "@typegoose/typegoose";\nimport * as typegoose from "@typegoose/typegoose";\n// typegoose.mongoose.set(\'debug\', true);\nsetGlobalOptions({\n  options: {\n    allowMixed: typegoose.Severity.ALLOW,\n  },\n  schemaOptions: {\n    timestamps: {\n      createdAt: "created_at",\n      updatedAt: "updated_at",\n    },\n  },\n});\nimport { schemas } from "./schemas";\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "syntax-context-of-super-classes-1586" },
						"Syntax context of super classes (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1586",
							},
							"#1586",
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
						" had a bug which makes",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {}\nclass Test extends Foo {\n  foo() {\n    console.log(Foo);\n  }\n}\nFoo = 3;\nnew Foo().foo();\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"to emit ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "Foo"),
						" instead of 3.",
					),
					(0, s.kt)(
						"p",
						null,
						"It's fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "statement-order-of-default-imports-1568" },
						"Statement order of default imports. (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1568",
							},
							"#1568",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"To workaroudn ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/webpack/webpack/issues/7767",
							},
							"a bug of webpack",
						),
						", I modified order of statements generated from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export default function",
						),
						"s.",
					),
					(0, s.kt)(
						"p",
						null,
						"Thankfully, ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/josteph",
							},
							"@josteph",
						),
						" explained the problem and suggested the way to fix.",
					),
					(0, s.kt)(
						"h3",
						{ id: "mixed-import-of-default-1525" },
						"Mixed import of default (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1525",
							},
							"#1525",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { Component, default as React } from "react";\n\nclass X extends Component {}\n\nReact.render(document.getElementById("root"), <X></X>);\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" previously miscompied this, because it wasn't careful enough about ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"default as Foo",
						),
						"-style imports.\nIt's fixed and ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var _react = _interopRequireWildcard(require("react"));\n\nclass X extends _react.Component {}\n_react.default.render(\n  document.getElementById("root"),\n  /*#__PURE__*/ _react.default.createElement(X, null)\n);\n',
						),
					),
					(0, s.kt)("p", null, "which is correct."),
					(0, s.kt)(
						"h3",
						{ id: "sourcemaps-1581" },
						"SourceMaps (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1581",
							},
							"#1581",
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
						" had a bug related to inline source maps and as a result it generated empty sourcemap.\nIt's fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "parameter-property-decorators-1456" },
						"Parameter property decorators (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1456",
							},
							"#1456",
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
						" had a bug in logic for determining if it should work.\nWhile checking existance of decortor, ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" didn't check decorators of typescript parameter properties.",
					),
					(0, s.kt)(
						"p",
						null,
						"As a result, decorator didn't work if ",
						(0, s.kt)("strong", { parentName: "p" }, "all"),
						" constructor parameters are parameter properties.\nIt's now fixed and decorators are properly applied.",
					),
					(0, s.kt)(
						"h3",
						{ id: "fix-for-arguments-1585" },
						"Fix for ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"arguments",
						),
						" (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1585",
							},
							"#1585",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"There was a bug of ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" which may break some codes using arguments in arrow functions.",
					),
					(0, s.kt)("p", null, "It could break codes like"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function test() {\n  return () => arguments[0];\n}\n",
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
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "fix-for-decorators-1362" },
						"Fix for decorators (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1362",
							},
							"#1362",
						),
						")",
					),
					(0, s.kt)("p", null, "Fixed as a part of decorator fixes."),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
