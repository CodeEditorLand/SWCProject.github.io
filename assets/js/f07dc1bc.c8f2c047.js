"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7181],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => d, kt: () => m });
			var i = t(7294);
			function a(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[n] = t),
					e
				);
			}
			function l(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					n &&
						(i = i.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, i);
				}
				return t;
			}
			function o(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? l(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: l(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function r(e, n) {
				if (null == e) return {};
				var t,
					i,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							i,
							a = {},
							l = Object.keys(e);
						for (i = 0; i < l.length; i++)
							(t = l[i]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (i = 0; i < l.length; i++)
						(t = l[i]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var p = i.createContext({}),
				s = function (e) {
					var n = i.useContext(p),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : o(o({}, n), e)),
						t
					);
				},
				d = function (e) {
					var n = s(e.components);
					return i.createElement(
						p.Provider,
						{ value: n },
						e.children,
					);
				},
				k = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return i.createElement(i.Fragment, {}, n);
					},
				},
				u = i.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						l = e.originalType,
						p = e.parentName,
						d = r(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(t),
						m = a,
						c = u["".concat(p, ".").concat(m)] || u[m] || k[m] || l;
					return t
						? i.createElement(
								c,
								o(o({ ref: n }, d), {}, { components: t }),
							)
						: i.createElement(c, o({ ref: n }, d));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var l = t.length,
						o = new Array(l);
					o[0] = u;
					var r = {};
					for (var p in n) hasOwnProperty.call(n, p) && (r[p] = n[p]);
					(r.originalType = e),
						(r.mdxType = "string" == typeof e ? e : a),
						(o[1] = r);
					for (var s = 2; s < l; s++) o[s] = t[s];
					return i.createElement.apply(null, o);
				}
				return i.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		7358: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => r,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => d,
					default: () => u,
				});
			var i = t(7462),
				a = t(3366),
				l = (t(7294), t(3905)),
				o = ["components"],
				r = {
					id: "config-js-minify",
					title: "Configuring js minifier",
					sidebar_label: "Minification",
				},
				p = void 0,
				s = {
					unversionedId: "config-js-minify",
					id: "config-js-minify",
					isDocsHomePage: !1,
					title: "Configuring js minifier",
					description: "Requires v1.2.67",
					source: "@site/docs/config-js-minify.md",
					sourceDirName: ".",
					slug: "/config-js-minify",
					permalink: "/docs/config-js-minify",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "config-js-minify",
						title: "Configuring js minifier",
						sidebar_label: "Minification",
					},
					sidebar: "usage",
					previous: {
						title: "Module config",
						permalink: "/docs/config-js-module",
					},
					next: {
						title: "Configuring spack",
						permalink: "/docs/spack-basic",
					},
				},
				d = [
					{
						value: "Config",
						id: "config",
						children: [
							{
								value: "via .swcrc",
								id: "via-swcrc",
								children: [],
							},
							{
								value: "<code>jsc.minify.compress</code>",
								id: "jscminifycompress",
								children: [],
							},
							{
								value: "<code>jsc.minify.mangle</code>",
								id: "jscminifymangle",
								children: [],
							},
						],
					},
					{
						value: "Usage",
						id: "usage",
						children: [
							{
								value: "swc.minify(code, options)",
								id: "swcminifycode-options",
								children: [],
							},
							{
								value: "swc.minifySync(code, options)",
								id: "swcminifysynccode-options",
								children: [],
							},
							{
								value: "APIs for WASM",
								id: "apis-for-wasm",
								children: [],
							},
							{
								value: "Replacing terser without waiting for library developers",
								id: "replacing-terser-without-waiting-for-library-developers",
								children: [],
							},
						],
					},
				],
				k = { toc: d };
			function u(e) {
				var n = e.components,
					t = (0, a.Z)(e, o);
				return (0, l.kt)(
					"wrapper",
					(0, i.Z)({}, k, t, { components: n, mdxType: "MDXLayout" }),
					(0, l.kt)(
						"blockquote",
						null,
						(0, l.kt)(
							"p",
							{ parentName: "blockquote" },
							"Requires v1.2.67",
						),
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("strong", { parentName: "p" }, "Note:"),
						" Currently, it's far from perfect. I decided to focus on real-world usages and only rules used by famous open source libraries are implemented. If the bundle size of your project is not good enough, please let me know. Feel free to file an issue or email me if it's a secret. (",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "mailto:kdy1997.dev@gmail.com",
							},
							"kdy1997.dev@gmail.com",
						),
						")",
					),
					(0, l.kt)("hr", null),
					(0, l.kt)("h2", { id: "config" }, "Config"),
					(0, l.kt)(
						"p",
						null,
						"The minifier uses options which is almost identical to it of ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".\nOptions like ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "ie8"),
						" are ignored, but the minifier accepts it and ignores to be compatible with ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)("h3", { id: "via-swcrc" }, "via .swcrc"),
					(0, l.kt)(
						"p",
						null,
						"You can configure javascript minifier using ",
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Example ",
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" looks like:",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-jsonc" },
							'{\n  "jsc": {\n    "minify": {\n      "compress": {\n        "unused": true\n      },\n      "mangle": true\n    }\n  },\n  // Enable minification in codgen.\n  "minify": true\n}\n',
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "jscminifycompress" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.minify.compress",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Type: ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"boolean | object",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						" is same as an empty object (",
						(0, l.kt)("inlineCode", { parentName: "p" }, "{}"),
						").",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "minify": {\n      "compress": true\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)("p", null, "is identical to"),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "minify": {\n      "compress": {}\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Please refer to ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://terser.org/docs/api-reference.html#compress-options",
							},
							"the compress option",
						),
						" of ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "arguments" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"arguments",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "arrows" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "arrows"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "booleans" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"booleans",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "booleans_as_integers" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"booleans_as_integers",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "collapse_vars" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"collapse_vars",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "comparisons" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"comparisons",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "computed_props" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"computed_props",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "conditionals" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"conditionals",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "dead_code" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"dead_code",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "defaults" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"defaults",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "directives" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"directives",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "drop_console" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"drop_console",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "drop_debugger" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"drop_debugger",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "ecma" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "ecma"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "5"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "evaluate" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"evaluate",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "global_defs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"global_defs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "{}"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "hoist_funs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"hoist_funs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "hoist_props" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"hoist_props",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "hoist_vars" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"hoist_vars",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "ie8" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "ie8"),
					),
					(0, l.kt)("p", null, "Ignored."),
					(0, l.kt)(
						"h4",
						{ id: "if_return" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"if_return",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "inline" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "inline"),
					),
					(0, l.kt)("p", null, "Defaults to ``."),
					(0, l.kt)(
						"h4",
						{ id: "join_vars" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"join_vars",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keep_classnames" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keep_classnames",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keep_fargs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keep_fargs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keep_infinity" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keep_infinity",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "loops" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "loops"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "negate_iife" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"negate_iife",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "passes" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "passes"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "0"),
						", which means no limit.",
					),
					(0, l.kt)(
						"h4",
						{ id: "properties" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"properties",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "pure_getters" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"pure_getters",
						),
					),
					(0, l.kt)("p", null, "Defaults to ``."),
					(0, l.kt)(
						"h4",
						{ id: "pure_funcs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"pure_funcs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "[]"),
						".\nType is an array of string.",
					),
					(0, l.kt)(
						"h4",
						{ id: "reduce_funcs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"reduce_funcs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "reduce_vars" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"reduce_vars",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "sequences" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"sequences",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "side_effects" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"side_effects",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "switches" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"switches",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "top_retain" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"top_retain",
						),
					),
					(0, l.kt)("p", null, "Defaults to ``."),
					(0, l.kt)(
						"h4",
						{ id: "toplevel" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"toplevel",
						),
					),
					(0, l.kt)("p", null, "Defaults to ``."),
					(0, l.kt)(
						"h4",
						{ id: "typeofs" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"typeofs",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "unsafe"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_arrows" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_arrows",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_comps" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_comps",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_function" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_Function",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_math" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_math",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_symbols" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_symbols",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_methods" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_methods",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_proto" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_proto",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_regexp" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_regexp",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unsafe_undefined" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"unsafe_undefined",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "unused" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "unused"),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "module" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "module"),
					),
					(0, l.kt)(
						"p",
						null,
						"Ignored. Currently, all files are treated as module.",
					),
					(0, l.kt)(
						"h3",
						{ id: "jscminifymangle" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.minify.mangle",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Type: ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"boolean | object",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						" is same as an empty object (",
						(0, l.kt)("inlineCode", { parentName: "p" }, "{}"),
						").",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "minify": {\n      "mangle": true\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)("p", null, "is identical to"),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "minify": {\n      "mangle": {}\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Please refer to ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://terser.org/docs/api-reference.html#mangle-options",
							},
							"the mangle option",
						),
						" of ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "properties-1" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"properties",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						", and ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "true"),
						" is identical to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "{}"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "toplevel-1" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"topLevel",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".\nAliased as ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"toplevel",
						),
						" for compatibility with ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keepclassnames" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keepClassNames",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Aliased as ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"keep_classnames",
						),
						" for compatibility with ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keepfnnames" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keepFnNames",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keepfnnames-1" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keepFnNames",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "keepprivateprops" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"keepPrivateProps",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Aliased as ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"keep_private_props",
						),
						" for compatibility with ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "terser"),
						".",
					),
					(0, l.kt)(
						"h4",
						{ id: "ie8-1" },
						(0, l.kt)("inlineCode", { parentName: "h4" }, "ie8"),
					),
					(0, l.kt)("p", null, "Ignored."),
					(0, l.kt)(
						"h4",
						{ id: "safari10" },
						(0, l.kt)(
							"inlineCode",
							{ parentName: "h4" },
							"safari10",
						),
					),
					(0, l.kt)("p", null, "Not implemented yet."),
					(0, l.kt)("h2", { id: "usage" }, "Usage"),
					(0, l.kt)(
						"h3",
						{ id: "swcminifycode-options" },
						"swc.minify(code, options)",
					),
					(0, l.kt)(
						"p",
						null,
						"This API exists on ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Returns ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Promise<{ code: string, map: string }>",
						),
						".",
					),
					(0, l.kt)("hr", null),
					(0, l.kt)(
						"p",
						null,
						"This API is asynchronous and all of parsing, minification and code generation will be done in background thread.\nThe ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "options"),
						" argument is same as ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.minify",
						),
						" object.\nYou can use it like",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import swc from "@swc/core";\n\nconst { code, map } = await swc.minify(\n  "import foo from \'@src/app\'; console.log(foo)",\n  {\n    compress: false,\n    mangle: true,\n  }\n);\n\nexpect(code).toMatchInlineSnapshot(`"import a from\'@src/app\';console.log(a);"`);\n',
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "swcminifysynccode-options" },
						"swc.minifySync(code, options)",
					),
					(0, l.kt)(
						"p",
						null,
						"This API exists on ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core",
						),
						", ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm",
						),
						", ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm-web",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Returns ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"{ code: string, map: string }",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Usage is similar to ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc.minify",
						),
						".",
					),
					(0, l.kt)("h3", { id: "apis-for-wasm" }, "APIs for WASM"),
					(0, l.kt)(
						"h3",
						{
							id: "replacing-terser-without-waiting-for-library-developers",
						},
						"Replacing terser without waiting for library developers",
					),
					(0, l.kt)(
						"p",
						null,
						"If you want to reduce build time without waiting for libraries developers to update their dependency, you can use ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolution",
						),
						" of ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "https://yarnpkg.com/" },
							"yarn",
						),
						" to override terser.",
					),
					(0, l.kt)(
						"p",
						null,
						"Add the code below to the ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						" file.",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							' "resolutions": { "terser": "npm:@swc/core" }\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"This will allow using the minifier of swc instead of terser for all nested dependencies.",
					),
					(0, l.kt)(
						"p",
						null,
						"After patching ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						", you should remove lockfile and reinstall dependencies.",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"$ rm -rf node_modules yarn.lock\n$ yarn\n",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
