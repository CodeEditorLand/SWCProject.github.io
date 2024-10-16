"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4266],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => m });
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
			function i(e) {
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
			function s(e, t) {
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
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
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
				h = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						h = p(n),
						m = a,
						d = h["".concat(c, ".").concat(m)] || h[m] || u[m] || o;
					return n
						? r.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, i({ ref: t }, l));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = h;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : a),
						(i[1] = s);
					for (var p = 2; p < o; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			h.displayName = "MDXCreateElement";
		},
		3539: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => h,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				i = ["components"],
				s = {
					title: "ChangeLog: swc v1.2.31",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/09/22/swc-1.2.31",
					source: "@site/blog/2020-09-22-swc-1.2.31.md",
					title: "ChangeLog: swc v1.2.31",
					description: "Domain change",
					date: "2020-09-22T00:00:00.000Z",
					formattedDate: "September 22, 2020",
					tags: [],
					readingTime: 1.585,
					truncated: !1,
					prevItem: {
						title: "Hotfix: swc v1.2.34",
						permalink: "/blog/2020/09/24/swc-1.2.34",
					},
					nextItem: {
						title: "ChangeLog: swc v1.2.32",
						permalink: "/blog/2020/09/22/swc-1.2.32",
					},
				},
				l = [
					{
						value: "Domain change",
						id: "domain-change",
						children: [],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "(spack) export * in entry (1083)",
								id: "spack-export--in-entry-1083",
								children: [],
							},
							{
								value: "let with for in/of (#1086)",
								id: "let-with-for-inof-1086",
								children: [],
							},
							{
								value: "File names in the source map is preserved (#1091)",
								id: "file-names-in-the-source-map-is-preserved-1091",
								children: [],
							},
							{
								value: "(spack) Fixed imports (#1076)",
								id: "spack-fixed-imports-1076",
								children: [],
							},
							{
								value: "optional chaining (#1092)",
								id: "optional-chaining-1092",
								children: [],
							},
							{
								value: "logical operators and function calls (#1093)",
								id: "logical-operators-and-function-calls-1093",
								children: [],
							},
							{
								value: "regenerator scoping issue (#1036)",
								id: "regenerator-scoping-issue-1036",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function h(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "domain-change" }, "Domain change"),
					(0, o.kt)(
						"p",
						null,
						"The swc project now uses ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc.rs",
						),
						", instead of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc-project.github.io",
						),
						".\nThank you contributors!",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "spack-export--in-entry-1083" },
						"(spack) export ",
						"*",
						" in entry (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1083",
							},
							"1083",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * from './a'",
						),
						" only worked in non-entry files.\nIt's a common pattern to export everything from main module, so I think it's an important improvement.",
					),
					(0, o.kt)(
						"h3",
						{ id: "let-with-for-inof-1086" },
						"let with for in/of (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1086",
							},
							"#1086",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled the code shown below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const b = [];\n{\n  let a;\n  for (a in b) {\n    console.log(a);\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"The bug is realted to left hand side in the for-in loop.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "file-names-in-the-source-map-is-preserved-1091",
						},
						"File names in the source map is preserved (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1091",
							},
							"#1091",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This is about feeding source code into ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" after processing using other tools with source map support.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/lujjjh",
							},
							"@lujjjh",
						),
						" kindly found the cause and proposed solution.",
					),
					(0, o.kt)(
						"h3",
						{ id: "spack-fixed-imports-1076" },
						"(spack) Fixed imports (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1076",
							},
							"#1076",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "spack"),
						" had a bug related to packages without ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "main"),
						" field in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "optional-chaining-1092" },
						"optional chaining (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1092",
							},
							"#1092",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Starting with the version, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" can compile",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"a?.b.c();\n",
						),
					),
					(0, o.kt)("p", null, "into the correct output, namely"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"a === null || a === void 0 ? void 0 : a.b.c();\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "logical-operators-and-function-calls-1093" },
						"logical operators and function calls (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1093",
							},
							"#1093",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" erroneously removed the parenthesis which wraps ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"fnA || fnB",
						),
						". This is now fixed.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const fnA = () => {\n  console.log("Output from function A");\n};\n\nconst fnB = () => {\n  console.log("Output from function B");\n};\n\nconst x = (fnA || fnB)();\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "regenerator-scoping-issue-1036" },
						"regenerator scoping issue (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1036",
							},
							"#1036",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I had a hard time debugging this, because all pass work correctly. It was pass ordering issue, and I fixed pass ordering. The bug affects user who used an array pattern (",
						(0, o.kt)("inlineCode", { parentName: "p" }, "[a,,c]"),
						") or an object pattern (",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ a: foo }",
						),
						") within async function.",
					),
					(0, o.kt)(
						"p",
						null,
						"Example of the affected code is show below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const x = async function () {\n  console.log(\n    await Promise.all(\n      [[1], [2], [3]].map(async ([a]) => Promise.resolve().then(() => a * 2))\n    )\n  );\n};\n",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)("code", { parentName: "pre" }, ""),
					),
				);
			}
			h.isMDXComponent = !0;
		},
	},
]);
