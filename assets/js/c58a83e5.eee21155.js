"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9640],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => d });
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
			function i(e, t) {
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
						? i(Object(n), !0).forEach(function (t) {
								r(e, t, n[t]);
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
			function o(e, t) {
				if (null == e) return {};
				var n,
					a,
					r = (function (e, t) {
						if (null == e) return {};
						var n,
							a,
							r = {},
							i = Object.keys(e);
						for (a = 0; a < i.length; a++)
							(n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
						return r;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (a = 0; a < i.length; a++)
						(n = i[a]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(r[n] = e[n]));
				}
				return r;
			}
			var s = a.createContext({}),
				p = function (e) {
					var t = a.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = p(e.components);
					return a.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return a.createElement(a.Fragment, {}, t);
					},
				},
				u = a.forwardRef(function (e, t) {
					var n = e.components,
						r = e.mdxType,
						i = e.originalType,
						s = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(n),
						d = r,
						f = u["".concat(s, ".").concat(d)] || u[d] || m[d] || i;
					return n
						? a.createElement(
								f,
								l(l({ ref: t }, c), {}, { components: n }),
							)
						: a.createElement(f, l({ ref: t }, c));
				});
			function d(e, t) {
				var n = arguments,
					r = t && t.mdxType;
				if ("string" == typeof e || r) {
					var i = n.length,
						l = new Array(i);
					l[0] = u;
					var o = {};
					for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(l[1] = o);
					for (var p = 2; p < i; p++) l[p] = n[p];
					return a.createElement.apply(null, l);
				}
				return a.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		5323: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => c,
					default: () => u,
				});
			var a = n(7462),
				r = n(3366),
				i = (n(7294), n(3905)),
				l = ["components"],
				o = {
					title: "Changelog: swc v1.1.11",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/01/02/swc-1.1.11",
					source: "@site/blog/2020-01-02-swc-1.1.11.md",
					title: "Changelog: swc v1.1.11",
					description: "AST",
					date: "2020-01-02T00:00:00.000Z",
					formattedDate: "January 2, 2020",
					tags: [],
					readingTime: 1.465,
					truncated: !1,
					prevItem: {
						title: "Introducing pmutil",
						permalink: "/blog/2020/01/04/pmutil",
					},
					nextItem: {
						title: "Changelog: swc v1.1.10: preset-env",
						permalink: "/blog/2019/12/29/swc-1.1.10",
					},
				},
				c = [
					{
						value: "AST",
						id: "ast",
						children: [
							{
								value: "TsExpressionWithTypeArguments",
								id: "tsexpressionwithtypearguments",
								children: [],
							},
						],
					},
					{
						value: "Parser",
						id: "parser",
						children: [
							{
								value: "span of import / export (#540)",
								id: "span-of-import--export-540",
								children: [],
							},
							{
								value: "span of await in for-of statement (#551)",
								id: "span-of-await-in-for-of-statement-551",
								children: [],
							},
							{
								value: "readonly properties in class (#547)",
								id: "readonly-properties-in-class-547",
								children: [],
							},
							{
								value: "import.meta (#545)",
								id: "importmeta-545",
								children: [],
							},
						],
					},
					{
						value: "Codegen",
						id: "codegen",
						children: [
							{
								value: "default import with namespace (#546)",
								id: "default-import-with-namespace-546",
								children: [],
							},
							{
								value: "indent after line comment (#544)",
								id: "indent-after-line-comment-544",
								children: [],
							},
						],
					},
					{
						value: "Transforms",
						id: "transforms",
						children: [
							{
								value: "regenerator (#554)",
								id: "regenerator-554",
								children: [],
							},
							{
								value: "whitespace after inner JSX tag is preserved (#542)",
								id: "whitespace-after-inner-jsx-tag-is-preserved-542",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function u(e) {
				var t = e.components,
					n = (0, r.Z)(e, l);
				return (0, i.kt)(
					"wrapper",
					(0, a.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "ast" }, "AST"),
					(0, i.kt)(
						"h3",
						{ id: "tsexpressionwithtypearguments" },
						"TsExpressionWithTypeArguments",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"TsExpressionWithTypeArguments",
						),
						" has ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"typeArguments",
						),
						" instead of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"typeParams",
						),
						". This is ",
						(0, i.kt)("em", { parentName: "p" }, "technically"),
						" breaking change, but I didn't bumped major version because I don't think the change break real world code.",
					),
					(0, i.kt)("h2", { id: "parser" }, "Parser"),
					(0, i.kt)(
						"h3",
						{ id: "span-of-import--export-540" },
						"span of import / export (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/540",
							},
							"#540",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Spans of import statements and export statements are fixed.",
					),
					(0, i.kt)(
						"h3",
						{ id: "span-of-await-in-for-of-statement-551" },
						"span of await in for-of statement (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/551",
							},
							"#551",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Spans of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "await"),
						" token in for-of statement is fixed.",
					),
					(0, i.kt)(
						"h3",
						{ id: "readonly-properties-in-class-547" },
						"readonly properties in class (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/547",
							},
							"#547",
						),
						")",
					),
					(0, i.kt)("p", null, "Previously,"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {\n  readonly t: string;\n}\n",
						),
					),
					(0, i.kt)("p", null, "was parsed as"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {\n  t: string;\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"But from now on, it's correctly parsed as readonly.",
					),
					(0, i.kt)(
						"h3",
						{ id: "importmeta-545" },
						"import.meta (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/545",
							},
							"#545",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now accepts",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const test = import.meta.someProp;\n",
						),
					),
					(0, i.kt)("p", null, "and"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"import.meta.someProp;\n",
						),
					),
					(0, i.kt)("h2", { id: "codegen" }, "Codegen"),
					(0, i.kt)(
						"h3",
						{ id: "default-import-with-namespace-546" },
						"default import with namespace (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/546",
							},
							"#546",
						),
						")",
					),
					(0, i.kt)("p", null, "Previously,"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import availabilities, * as availabilityFunctions from "reducers/availabilities";\n',
						),
					),
					(0, i.kt)("p", null, "is printed as"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"import availabilities* as availabilityFunctions from 'reducers/availabilities';\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"which is wrong. It is now printed correctly as",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import availabilities, * as availabilityFunctions from "reducers/availabilities";\n',
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "indent-after-line-comment-544" },
						"indent after line comment (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/544",
							},
							"#544",
						),
						")",
					),
					(0, i.kt)("p", null, "It means,"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function b() {\n  // comment\n  a = 1;\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"is preserved. Previously, indent after a line comment was removed.",
					),
					(0, i.kt)("h2", { id: "transforms" }, "Transforms"),
					(0, i.kt)(
						"h3",
						{ id: "regenerator-554" },
						"regenerator (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/554",
							},
							"#554",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"transform-regenerator",
						),
						" (from babel) is implemented in swc, and invoked automatically if you target ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "es3"),
						" or ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "es5"),
						".",
					),
					(0, i.kt)(
						"h3",
						{
							id: "whitespace-after-inner-jsx-tag-is-preserved-542",
						},
						"whitespace after inner JSX tag is preserved (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/542",
							},
							"#542",
						),
						")",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let page = (\n  <p>\n    Click <em>New melody</em> listen to a randomly generated melody\n  </p>\n);\n",
						),
					),
					(0, i.kt)("p", null, "is compiled as"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var page = React.createElement(\n  "p",\n  null,\n  "Click ",\n  React.createElement("em", null, "New melody"),\n  " listen to a randomly generated melody"\n);\n',
						),
					),
					(0, i.kt)("p", null, "instead of"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var page = React.createElement(\n  "p",\n  null,\n  "Click ",\n  React.createElement("em", null, "New melody"),\n  "listen to a randomly generated melody"\n);\n',
						),
					),
					(0, i.kt)("p", null, "which is wrong."),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
