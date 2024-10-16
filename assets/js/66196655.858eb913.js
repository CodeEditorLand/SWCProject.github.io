"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6445],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
			var r = n(7294);
			function o(e, t, n) {
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
			function a(e, t) {
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
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var c = r.createContext({}),
				l = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						p = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(n),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								f,
								i(i({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, i({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(i[1] = s);
					for (var l = 2; l < a; l++) i[l] = n[l];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		9903: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				s = {
					id: "usage-core",
					title: "swc core api",
					sidebar_label: "swc (core)",
				},
				c = void 0,
				l = {
					unversionedId: "usage-core",
					id: "usage-core",
					isDocsHomePage: !1,
					title: "swc core api",
					description: "APIs",
					source: "@site/docs/usage-core.md",
					sourceDirName: ".",
					slug: "/usage-core",
					permalink: "/docs/usage-core",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-core",
						title: "swc core api",
						sidebar_label: "swc (core)",
					},
					sidebar: "usage",
					previous: {
						title: "@swc/jest",
						permalink: "/docs/usage-swc-jest",
					},
					next: { title: "Plugin", permalink: "/docs/usage-plugin" },
				},
				p = [
					{
						value: "APIs",
						id: "apis",
						children: [
							{
								value: "transform",
								id: "transform",
								children: [],
							},
							{
								value: "transformSync",
								id: "transformsync",
								children: [],
							},
							{
								value: "transformFile",
								id: "transformfile",
								children: [],
							},
							{
								value: "transformFileSync",
								id: "transformfilesync",
								children: [],
							},
						],
					},
					{ value: "Options", id: "options", children: [] },
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "apis" }, "APIs"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"em",
							{ parentName: "p" },
							"Note: If you are ",
							(0, a.kt)("strong", { parentName: "em" }, "not"),
							" developing build tools, you can skip this.",
						),
					),
					(0, a.kt)("h3", { id: "transform" }, "transform"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("em", { parentName: "p" }, "Note:"),
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"Package ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								"@swc/core",
							),
							" provides appropriate ",
							(0, a.kt)(
								"inlineCode",
								{ parentName: "li" },
								".d.ts",
							),
							" file, so you may not need this document",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Returns ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Promise<{ code: string, map?: string }>",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const swc = require("@swc/core");\n\nswc\n  .transform("source code", {\n    // Some options cannot be specified in .swcrc\n    filename: "input.js",\n    sourceMaps: true,\n    // Input files are treated as module by default.\n    isModule: false,\n\n    // All options below can be configured via .swcrc\n    jsc: {\n      parser: {\n        syntax: "ecmascript",\n      },\n      transform: {},\n    },\n  })\n  .then((output) => {\n    output.code; // transformed code\n    output.map; // source map (in string)\n  });\n',
						),
					),
					(0, a.kt)("h3", { id: "transformsync" }, "transformSync"),
					(0, a.kt)(
						"p",
						null,
						"Returns ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ code: string, map?: string }",
						),
					),
					(0, a.kt)("h3", { id: "transformfile" }, "transformFile"),
					(0, a.kt)(
						"p",
						null,
						"Returns ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Promise<{ code: string, map?: string }>",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "transformfilesync" },
						"transformFileSync",
					),
					(0, a.kt)(
						"p",
						null,
						"Returns ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ code: string, map?: string }",
						),
					),
					(0, a.kt)("h2", { id: "options" }, "Options"),
					(0, a.kt)("p", null, "TODO:"),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
