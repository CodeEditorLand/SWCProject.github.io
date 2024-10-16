"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2204],
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
			function i(e, t) {
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
			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function o(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var l = n.createContext({}),
				s = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = s(e.components);
					return n.createElement(
						l.Provider,
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
						i = e.originalType,
						l = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(r),
						d = a,
						f = u["".concat(l, ".").concat(d)] || u[d] || m[d] || i;
					return r
						? n.createElement(
								f,
								p(p({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(f, p({ ref: t }, c));
				});
			function d(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = r.length,
						p = new Array(i);
					p[0] = u;
					var o = {};
					for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(p[1] = o);
					for (var s = 2; s < i; s++) p[s] = r[s];
					return n.createElement.apply(null, p);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		4950: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => o,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => c,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				i = (r(7294), r(3905)),
				p = ["components"],
				o = {
					title: "Changelog: swc v1.1.20",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				s = {
					permalink: "/blog/2020/02/07/swc-1.1.20",
					source: "@site/blog/2020-02-07-swc-1.1.20.md",
					title: "Changelog: swc v1.1.20",
					description: "Improvements",
					date: "2020-02-07T00:00:00.000Z",
					formattedDate: "February 7, 2020",
					tags: [],
					readingTime: 1.04,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.19",
						permalink: "/blog/2020/02/07/swc-1.1.19",
					},
					nextItem: {
						title: "Changelog: swc v1.1.17",
						permalink: "/blog/2020/01/30/swc-1.1.17",
					},
				},
				c = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Smaller runtime dependency (#631)",
								id: "smaller-runtime-dependency-631",
								children: [],
							},
							{
								value: "Better error message (#650)",
								id: "better-error-message-650",
								children: [],
							},
							{
								value: "TypeScript privatge fields (#642)",
								id: "typescript-privatge-fields-642",
								children: [],
							},
							{
								value: "TypeScript: export namespace from (#647)",
								id: "typescript-export-namespace-from-647",
								children: [],
							},
						],
					},
					{ value: "Bugfixes", id: "bugfixes", children: [] },
					{
						value: "Escpaes in template literals (#652)",
						id: "escpaes-in-template-literals-652",
						children: [
							{
								value: "TypeScript imports (#641)",
								id: "typescript-imports-641",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, p);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "smaller-runtime-dependency-631" },
						"Smaller runtime dependency (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/631",
							},
							"#631",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now imports ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator-runtime",
						),
						" instead of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@babel/runtime/regenerator",
						),
						". This is not a breaking change because ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@babel/runtime",
						),
						" depends on ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"regenerator-runtime",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"From now on, you can remove ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@babel/runtime",
						),
						" from dependencies.",
					),
					(0, i.kt)(
						"h3",
						{ id: "better-error-message-650" },
						"Better error message (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/650",
							},
							"#650",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Instead of showing ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"require failed",
						),
						", ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits proper error message (",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc: You have to install browserslist to use env",
						),
						") to stderr.",
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-privatge-fields-642" },
						"TypeScript privatge fields (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/642",
							},
							"#642",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"TypeScript 3.8 added the concept of private fields. As ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had private field support for ecmascript, adding support for typescript was easy.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Person {\n    #name: string\n\n    constructor(name: string) {\n        this.#name = name;\n    }\n\n    greet() {\n        console.log(`Hello, my name is ${this.#name}!`);\n    }\n}\n\nlet jeremy = new Person(\"Jeremy Bearimy\");\n\njeremy.#name\n//     ~~~~~\n// Property '#name' is not accessible outside class 'Person'\n// because it has a private identifier.\n\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-export-namespace-from-647" },
						"TypeScript: export namespace from (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/647",
							},
							"#647",
						),
						")",
					),
					(0, i.kt)("p", null, "TypeScript 3.8 allows code like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export * as utilities from "./utilities.js";\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"As it's official typescript syntax, ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * as namespace from 'foo'",
						),
						" does not require changing any config.",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h2",
						{ id: "escpaes-in-template-literals-652" },
						"Escpaes in template literals (",
						(0, i.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/652",
							},
							"#652",
						),
						")",
					),
					(0, i.kt)("p", null, "Previously, codes like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"`\\x1b[33m Yellow \\x1b[0m`;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"were broken by ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						". ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" handles escapes in template literals correctly.",
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-imports-641" },
						"TypeScript imports (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/641",
							},
							"#641",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" strips out type-only imports correctly.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
