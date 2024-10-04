"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4668],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => d });
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
			function o(e, t) {
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
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: o(Object(r)).forEach(function (t) {
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
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var c = n.createContext({}),
				l = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = l(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						d = a,
						h = m["".concat(c, ".").concat(d)] || m[d] || u[d] || o;
					return r
						? n.createElement(
								h,
								s(s({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(h, s({ ref: t }, p));
				});
			function d(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						s = new Array(o);
					s[0] = m;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var l = 2; l < o; l++) s[l] = r[l];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4703: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => p,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.10",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				l = {
					permalink: "/blog/2020/07/31/swc-1.2.10",
					source: "@site/blog/2020-07-31-swc-1.2.10.md",
					title: "Changelog: swc v1.2.10",
					description: "Bugfixes",
					date: "2020-07-31T00:00:00.000Z",
					formattedDate: "July 31, 2020",
					tags: [],
					readingTime: 2.245,
					truncated: !1,
					prevItem: {
						title: "swc v1.2.11: Fix for almost all typescript bugs",
						permalink: "/blog/2020/08/02/swc-1.2.11",
					},
					nextItem: {
						title: "Changelog: swc v1.2.9",
						permalink: "/blog/2020/07/26/swc-1.2.9",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Error recovery for parser (#896)",
								id: "error-recovery-for-parser-896",
								children: [],
							},
							{
								value: "codegen of private properties (#903)",
								id: "codegen-of-private-properties-903",
								children: [],
							},
							{
								value: "codegen of optional catch parameters (#904)",
								id: "codegen-of-optional-catch-parameters-904",
								children: [],
							},
							{
								value: "nested optional catch parameters (#904)",
								id: "nested-optional-catch-parameters-904",
								children: [],
							},
							{
								value: "readonly class properties (#915)",
								id: "readonly-class-properties-915",
								children: [],
							},
							{
								value: "codegen of template literals with escape (#916)",
								id: "codegen-of-template-literals-with-escape-916",
								children: [],
							},
						],
					},
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Handling of quotes (#910)",
								id: "handling-of-quotes-910",
								children: [],
							},
							{
								value: "No duplicate comments (#856)",
								id: "no-duplicate-comments-856",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "error-recovery-for-parser-896" },
						"Error recovery for parser (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/896",
							},
							"#896",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export type * from "../typings";\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"The code above is invalid, but ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" accepts it and print an error message for it. I decided to follow the behavior of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" and I modified the parser to accept it.",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-of-private-properties-903" },
						"codegen of private properties (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/903",
							},
							"#903",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Because some runtimes support private properties, I implemented printing logic for private properties.",
					),
					(0, o.kt)(
						"p",
						null,
						"An example use case is ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land/" },
							"deno",
						),
						", which uses v8.",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-of-optional-catch-parameters-904" },
						"codegen of optional catch parameters (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/904",
							},
							"#904",
						),
						")",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"try {\n  m.append(key, value);\n} catch {\n  // Pass\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This was problematic if you use only typescript stripper. Code generator for a catch clause emitted ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "("),
						", ",
						(0, o.kt)("inlineCode", { parentName: "p" }, ")"),
						" regardless of existence of the parameter.",
					),
					(0, o.kt)(
						"p",
						null,
						"Now you can use the optional catch binding syntax without the optional catch binding pass.",
					),
					(0, o.kt)(
						"h3",
						{ id: "nested-optional-catch-parameters-904" },
						"nested optional catch parameters (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/904",
							},
							"#904",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, the code below was miscompled, because the transform didn't visit children.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"try {\n  // Write our response!\n  await writeResponse(this.w, r);\n} catch {\n  try {\n    // Eagerly close on error.\n    this.conn.close();\n  } catch {\n    // Pass\n  }\n  err = e;\n}\n",
						),
					),
					(0, o.kt)("p", null, "This is fixed by visiting children."),
					(0, o.kt)(
						"h3",
						{ id: "readonly-class-properties-915" },
						"readonly class properties (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/915",
							},
							"#915",
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
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" miscompiled readonly properties.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.\nimport { LogLevels, getLevelByName, getLevelName } from "./levels.ts";\nexport class Logger {\n  #level;\n  #handlers;\n  readonly #loggerName; // <---- offending line\n  constructor(loggerName, levelName, options = {}) {\n    this.#loggerName = loggerName;\n    this.#level = getLevelByName(levelName);\n    this.#handlers = options.handlers || [];\n  }\n}\n',
						),
					),
					(0, o.kt)("p", null, "Readonly is now properly handled."),
					(0, o.kt)(
						"h3",
						{ id: "codegen-of-template-literals-with-escape-916" },
						"codegen of template literals with escape (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/916",
							},
							"#916",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land/" },
							"deno",
						),
						" contains lots of template literals with escape sequences. By using it as a test suite, I and ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/bartlomieju",
							},
							"Bartek",
						),
						" fixed lots of buf related to it.",
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "handling-of-quotes-910" },
						"Handling of quotes (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/910",
							},
							"#910",
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
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" ignored the original quote of a string literal. This was intentional, and the purpose is to make output smaller by reducing the number of backslashes. But it is too bad for rust users, so I changed ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_ecma_codegen",
						),
						" to preserve quotes.",
					),
					(0, o.kt)(
						"h3",
						{ id: "no-duplicate-comments-856" },
						"No duplicate comments (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/856",
							},
							"#856",
						),
						")",
					),
					(0, o.kt)("p", null, "The bug is occured by two facts"),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							(0, o.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/swc-project/swc",
								},
								"swc",
							),
							" did not check for duplicate comments.",
						),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"TypeScript parser requires backtracking.",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"While backtracking, ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" simply added comments to the comment storage, and didn't care about duplicate comments. If backtracking is successful, there's no problem. But if backtracking fails, cursor of the lexer goes back without removing comments. This is fixed by tracking last position of comments. Now there's two cursor in the lexer - one for code, one for comments. The comments cursor does not go back, so even if backtracking is failed, it remains as-is and duplicated comments are simply ignored.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
