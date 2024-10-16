"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9529],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => d });
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
			var l = r.createContext({}),
				c = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(
						l.Provider,
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
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = a,
						h = m["".concat(l, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								h,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, s({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var c = 2; c < o; c++) s[c] = n[c];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		4304: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.51",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2021/03/28/swc-1.2.51",
					source: "@site/blog/2021-03-28-swc-1.2.51.md",
					title: "Changelog: swc v1.2.51",
					description: "Bugfixes",
					date: "2021-03-28T00:00:00.000Z",
					formattedDate: "March 28, 2021",
					tags: [],
					readingTime: 0.96,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.52",
						permalink: "/blog/2021/04/11/swc-1.2.52",
					},
					nextItem: {
						title: "Changelog: swc v1.2.50",
						permalink: "/blog/2021/03/03/swc-1.2.50",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Column position in source maps (#1470)",
								id: "column-position-in-source-maps-1470",
								children: [],
							},
							{
								value: "<code>keepClassName</code> (#1453)",
								id: "keepclassname-1453",
								children: [],
							},
							{
								value: "Codegen of arrow functions (#1452)",
								id: "codegen-of-arrow-functions-1452",
								children: [],
							},
							{
								value: "bundler: Stack overflow on windows (#1464)",
								id: "bundler-stack-overflow-on-windows-1464",
								children: [],
							},
							{
								value: "Assignments in await argument (#1475)",
								id: "assignments-in-await-argument-1475",
								children: [],
							},
							{
								value: "Parens in nullish coalescing (#1496)",
								id: "parens-in-nullish-coalescing-1496",
								children: [],
							},
							{
								value: "Jsx entities in jsx attribute values (#1501)",
								id: "jsx-entities-in-jsx-attribute-values-1501",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "column-position-in-source-maps-1470" },
						"Column position in source maps (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1470",
							},
							"#1470",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits correct source map regarding column offsets.",
					),
					(0, o.kt)(
						"h3",
						{ id: "keepclassname-1453" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"keepClassName",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1453",
							},
							"#1453",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The option ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"keepClasName",
						),
						" was introduced in ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" v1.2.50. But there was a bug at configuration merging, and it didn't work.\nIt's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "codegen-of-arrow-functions-1452" },
						"Codegen of arrow functions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1452",
							},
							"#1452",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Arrow functions without parenthesis in arguments like ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"async foo => 0;",
						),
						" is now handled properly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-stack-overflow-on-windows-1464" },
						"bundler: Stack overflow on windows (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1464",
							},
							"#1464",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This was reported via ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"deno",
						),
						", by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/denoland/deno/issues/9752",
							},
							"#9752",
						),
						".\nPreviously bunlding already-bundled file might cause stack overflow on windows, but it's now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "assignments-in-await-argument-1475" },
						"Assignments in await argument (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1475",
							},
							"#1475",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previsouly, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" break the code like ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"await (bar = Promise.resolve(2));",
						),
						" by removing parens.\nThis is now fixed and it works properly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "parens-in-nullish-coalescing-1496" },
						"Parens in nullish coalescing (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1496",
							},
							"#1496",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
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
							'console.log(("a" ?? "b") || "");\n',
						),
					),
					(0, o.kt)("p", null, "into"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'console.log("a" ?? ("b" || ""));\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is wrong. ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'console.log(("a" ?? "b") || "");\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "jsx-entities-in-jsx-attribute-values-1501" },
						"Jsx entities in jsx attribute values (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1501",
							},
							"#1501",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now compiles",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'<div id="abc&gt;" />\n',
						),
					),
					(0, o.kt)("p", null, "as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'React.createElement("div", {\n  id: "abc>",\n});\n',
						),
					),
					(0, o.kt)("p", null, "regardless of target version."),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
