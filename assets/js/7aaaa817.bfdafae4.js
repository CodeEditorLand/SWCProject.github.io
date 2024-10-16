"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5071],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => d });
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
			function l(e, t) {
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
				i = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = i(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
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
						c = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = i(r),
						d = a,
						f = u["".concat(p, ".").concat(d)] || u[d] || m[d] || s;
					return r
						? n.createElement(
								f,
								o(o({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(f, o({ ref: t }, c));
				});
			function d(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = r.length,
						o = new Array(s);
					o[0] = u;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(o[1] = l);
					for (var i = 2; i < s; i++) o[i] = r[i];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		416: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => p,
					metadata: () => i,
					toc: () => c,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				s = (r(7294), r(3905)),
				o = ["components"],
				l = {
					title: "Changelog: swc v1.1.12",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				i = {
					permalink: "/blog/2020/01/08/swc-1.1.12",
					source: "@site/blog/2020-01-08-swc-1.1.12.md",
					title: "Changelog: swc v1.1.12",
					description: "AST",
					date: "2020-01-08T00:00:00.000Z",
					formattedDate: "January 8, 2020",
					tags: [],
					readingTime: 1.205,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.13",
						permalink: "/blog/2020/01/17/swc-1.1.13",
					},
					nextItem: {
						title: "Introducing pmutil",
						permalink: "/blog/2020/01/04/pmutil",
					},
				},
				c = [
					{
						value: "AST",
						id: "ast",
						children: [
							{
								value: "GetterProperty (#557)",
								id: "getterproperty-557",
								children: [],
							},
							{
								value: "TsImportType (#560)",
								id: "tsimporttype-560",
								children: [],
							},
						],
					},
					{
						value: "Parser",
						id: "parser",
						children: [
							{
								value: "Span of patterns (#558)",
								id: "span-of-patterns-558",
								children: [],
							},
							{
								value: "Span of classes and interfaces (#566)",
								id: "span-of-classes-and-interfaces-566",
								children: [],
							},
							{
								value: "Comments on last statement (#555)",
								id: "comments-on-last-statement-555",
								children: [],
							},
							{
								value: "Wrong error messages are removed (#574)",
								id: "wrong-error-messages-are-removed-574",
								children: [],
							},
						],
					},
					{
						value: "Transforms",
						id: "transforms",
						children: [
							{
								value: "Nested if statement (#565)",
								id: "nested-if-statement-565",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "ast" }, "AST"),
					(0, s.kt)(
						"h3",
						{ id: "getterproperty-557" },
						"GetterProperty (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/557",
							},
							"#557",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"The code below is a valid typescript file.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const obj = {\n  get test(): string {\n    return "";\n  }\n};\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Now swc's ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"GetterProperty",
						),
						" has a field named ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"typeAnnotation",
						),
						" and swc can parse it correctly.",
					),
					(0, s.kt)(
						"h3",
						{ id: "tsimporttype-560" },
						"TsImportType (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/560",
							},
							"#560",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Import type havs type arguments rather than type params.",
					),
					(0, s.kt)("h2", { id: "parser" }, "Parser"),
					(0, s.kt)(
						"p",
						null,
						"Thanks to ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						", may span-related bugs of parser is fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "span-of-patterns-558" },
						"Span of patterns (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/558",
							},
							"#558",
						),
						")",
					),
					(0, s.kt)("p", null, "Span of patterns are fixed."),
					(0, s.kt)(
						"h3",
						{ id: "span-of-classes-and-interfaces-566" },
						"Span of classes and interfaces (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/566",
							},
							"#566",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Span of classes and interfaces are fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "comments-on-last-statement-555" },
						"Comments on last statement (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/555",
							},
							"#555",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously comments before ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "}"),
						" was removed silently.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (true) {\n}\n// 2\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "wrong-error-messages-are-removed-574" },
						"Wrong error messages are removed (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/574",
							},
							"#574",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const fn = <T extends string | number>(x: T) => x;\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"is a valid typescript code. ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emitted an error like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre" },
							"error: TS1109\n --\x3e index.ts:1:30\n  |\n1 | const fn = <T extends string | number>(x: T) => x;\n  |\n",
						),
					),
					(0, s.kt)("p", null, "The error is removed."),
					(0, s.kt)("h2", { id: "transforms" }, "Transforms"),
					(0, s.kt)(
						"h3",
						{ id: "nested-if-statement-565" },
						"Nested if statement (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/565",
							},
							"#565",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" optimizes javascript file if possible. But there was a bug related to it.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (x) {\n  if (y) log(1);\n  else if (z) log(2);\n} else log(3);\n",
						),
					),
					(0, s.kt)("p", null, "was miscompiled as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (x)\n  if (y) log(1);\n  else if (z) log(2);\n  else log(3);\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"From now, braces are correctly preserved and ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"if (x) {\n  if (y) log(1);\n  else if (z) log(2);\n} else log(3);\n",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
