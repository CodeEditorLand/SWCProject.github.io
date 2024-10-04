"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1042],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => h });
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
			var c = r.createContext({}),
				l = function (e) {
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
					var t = l(e.components);
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						h = a,
						d = m["".concat(c, ".").concat(h)] || m[h] || u[h] || o;
					return n
						? r.createElement(
								d,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(d, s({ ref: t }, p));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = m;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var l = 2; l < o; l++) s[l] = n[l];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		4715: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.23",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				l = {
					permalink: "/blog/2020/09/08/swc-1.2.23",
					source: "@site/blog/2020-09-08-swc-1.2.23.md",
					title: "Changelog: swc v1.2.23",
					description: "New features",
					date: "2020-09-08T00:00:00.000Z",
					formattedDate: "September 8, 2020",
					tags: [],
					readingTime: 2.615,
					truncated: !1,
					prevItem: {
						title: "Hotfix: swc v1.2.26",
						permalink: "/blog/2020/09/11/swc-1.2.26",
					},
					nextItem: {
						title: "Changelog: swc v1.2.22",
						permalink: "/blog/2020/08/31/swc-1.2.22",
					},
				},
				p = [
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "jsx pragma (#1015)",
								id: "jsx-pragma-1015",
								children: [],
							},
							{
								value: "BingInt literal type (#1020)",
								id: "bingint-literal-type-1020",
								children: [],
							},
							{
								value: "Dynamic imports in non-es6 modules (#1028)",
								id: "dynamic-imports-in-non-es6-modules-1028",
								children: [],
							},
							{
								value: "Block scoping (#1029)",
								id: "block-scoping-1029",
								children: [],
							},
							{
								value: "fixer: binary expression in callee of new (#1030)",
								id: "fixer-binary-expression-in-callee-of-new-1030",
								children: [],
							},
							{
								value: "Support for large binary expressions (#1032)",
								id: "support-for-large-binary-expressions-1032",
								children: [],
							},
							{
								value: "Correct this in optional chaining (#1035)",
								id: "correct-this-in-optional-chaining-1035",
								children: [],
							},
						],
					},
					{
						value: "spack (#1016, #1031, #1034)",
						id: "spack-1016-1031-1034",
						children: [],
					},
					{
						value: "Performance improvement",
						id: "performance-improvement",
						children: [],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "jsx-pragma-1015" },
						"jsx pragma (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1015",
							},
							"#1015",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" finally suports jsx pragma, which is required to use some libraries like ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://emotion.sh/docs/introduction",
							},
							"emotion.sh",
						),
						".",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement\n/** @jsx jsx */\nimport { css, jsx } from "@emotion/core";\n\nconst color = "white";\n\nrender(\n  <div\n    css={css`\n      padding: 32px;\n      background-color: hotpink;\n      font-size: 24px;\n      border-radius: 4px;\n      &:hover {\n        color: ${color};\n      }\n    `}\n  >\n    Hover to change color.\n  </div>\n);\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "bingint-literal-type-1020" },
						"BingInt literal type (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1020",
							},
							"#1020",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I didn't know that it is valid syntax, but the code below is validl, and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" now supports it.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const a: 1000n = 1000n;\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "dynamic-imports-in-non-es6-modules-1028" },
						"Dynamic imports in non-es6 modules (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1028",
							},
							"#1028",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Dynamic imports are not widely supported, so it should be transcompiled.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'describe("foo", () => {\n  it("should import", async () => {\n    expect.assertions(1);\n\n    const { FOO } = await import("./foo");\n\n    expect(FOO).toBe(true);\n  });\n});\n',
						),
					),
					(0, o.kt)("p", null, "is now compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'describe("foo", () => {\n  it("should import", async () => {\n    expect.assertions(1);\n\n    const { FOO } = await Promise.resolve().then(function () {\n      return require("./foo");\n    });\n\n    expect(FOO).toBe(true);\n  });\n});\n',
						),
					),
					(0, o.kt)("p", null, "if the module config is common js."),
					(0, o.kt)(
						"h3",
						{ id: "block-scoping-1029" },
						"Block scoping (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1029",
							},
							"#1029",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						" is now correctly handled in the loops.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class C {\n  m() {\n    for (let x = 0; x < 10; x++) console.log(this, (y) => y != x);\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Also, you can now mutate the index variable while iterating.",
					),
					(0, o.kt)("p", null, "e.g."),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"for (let i = 0; i < 5; i++) {\n  console.log(\n    i++,\n    [2].every((x) => x != i)\n  );\n}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "fixer-binary-expression-in-callee-of-new-1030" },
						"fixer: binary expression in callee of new (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1030",
							},
							"#1030",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" miscompiled",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"return new (P || (P = Promise))(function (resolve, reject) {\n  // ....\n});\n",
						),
					),
					(0, o.kt)("p", null, "into"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"return (\n  new P() ||\n  (P = Promise)(function (resolve, reject) {\n    // ....\n  })\n);\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is wrong. Now it's fixed and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" emits correct output.",
					),
					(0, o.kt)(
						"h3",
						{ id: "support-for-large-binary-expressions-1032" },
						"Support for large binary expressions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1032",
							},
							"#1032",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I fixed the code generator, parser, typescript stripper, fixer pass, resolver pass and hygiene pass to handle very large binary expressions.",
					),
					(0, o.kt)(
						"p",
						null,
						"As a result, ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" can now compile very large binary expressions like those in ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/use-seedling/seedling/blob/3c92c53b9fa2038a934d7cc5f646e726215147ef/src/css/prose.ts",
							},
							"seedlings",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "correct-this-in-optional-chaining-1035" },
						"Correct this in optional chaining (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1035",
							},
							"#1035",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
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
							"a.focus?.();\n",
						),
					),
					(0, o.kt)("p", null, "into"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nvar ref;\n(ref = a.focus) === null || ref === void 0 ? void 0 : ref.call(ref);\n',
						),
					),
					(0, o.kt)("p", null, "which is wrong. It should be"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nvar ref;\n(ref = a.focus) === null || ref === void 0 ? void 0 : ref.call(a);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" now emits correct code.",
					),
					(0, o.kt)(
						"h2",
						{ id: "spack-1016-1031-1034" },
						"spack (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1016",
							},
							"#1016",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1031",
							},
							"#1031",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1034",
							},
							"#1034",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I did very hard work on it, and many edge cases are fixed. I don't think it's production ready yet, but it will be in a near future.",
					),
					(0, o.kt)(
						"p",
						null,
						"As a side note, ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1016",
							},
							"#1016",
						),
						" is about ecmascript imports and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1031",
							},
							"#1031",
						),
						" and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1034",
							},
							"#0134",
						),
						" are about complex reexports and common js support, respectively.",
					),
					(0, o.kt)(
						"h2",
						{ id: "performance-improvement" },
						"Performance improvement",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" becomes faster and it will be much faster with the next version. Its performance is similar to it of ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/evanw/esbuild",
							},
							"esbuild",
						),
						", even though there are so many low-hanging fruits.",
					),
					(0, o.kt)("hr", null),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/129?closed=1",
							},
							"Full change log",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
