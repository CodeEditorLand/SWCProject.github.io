"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8643],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => s, kt: () => m });
			var a = t(7294);
			function o(e, n, t) {
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
			function r(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					n &&
						(a = a.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? r(Object(t), !0).forEach(function (n) {
								o(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: r(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function l(e, n) {
				if (null == e) return {};
				var t,
					a,
					o = (function (e, n) {
						if (null == e) return {};
						var t,
							a,
							o = {},
							r = Object.keys(e);
						for (a = 0; a < r.length; a++)
							(t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					for (a = 0; a < r.length; a++)
						(t = r[a]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(o[t] = e[t]));
				}
				return o;
			}
			var c = a.createContext({}),
				p = function (e) {
					var n = a.useContext(c),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : i(i({}, n), e)),
						t
					);
				},
				s = function (e) {
					var n = p(e.components);
					return a.createElement(
						c.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return a.createElement(a.Fragment, {}, n);
					},
				},
				d = a.forwardRef(function (e, n) {
					var t = e.components,
						o = e.mdxType,
						r = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(t),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || r;
					return t
						? a.createElement(
								f,
								i(i({ ref: n }, s), {}, { components: t }),
							)
						: a.createElement(f, i({ ref: n }, s));
				});
			function m(e, n) {
				var t = arguments,
					o = n && n.mdxType;
				if ("string" == typeof e || o) {
					var r = t.length,
						i = new Array(r);
					i[0] = d;
					var l = {};
					for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(i[1] = l);
					for (var p = 2; p < r; p++) i[p] = t[p];
					return a.createElement.apply(null, i);
				}
				return a.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		8311: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => d,
				});
			var a = t(7462),
				o = t(3366),
				r = (t(7294), t(3905)),
				i = ["components"],
				l = {
					id: "spack-basic",
					title: "Configuring spack",
					sidebar_label: "Configuring spack",
				},
				c = "Changes of name",
				p = {
					unversionedId: "spack-basic",
					id: "spack-basic",
					isDocsHomePage: !1,
					title: "Configuring spack",
					description:
						"The bundler of swc was called spack, but it will be changed to swcpack.",
					source: "@site/docs/spack-basic.md",
					sourceDirName: ".",
					slug: "/spack-basic",
					permalink: "/docs/spack-basic",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "spack-basic",
						title: "Configuring spack",
						sidebar_label: "Configuring spack",
					},
					sidebar: "usage",
					previous: {
						title: "Minification",
						permalink: "/docs/config-js-minify",
					},
					next: {
						title: "Creating multiple bundles",
						permalink: "/docs/spack-multi-bundle",
					},
				},
				s = [
					{
						value: "Config file",
						id: "config-file",
						children: [
							{
								value: "<code>mode</code>",
								id: "mode",
								children: [],
							},
							{
								value: "<code>entry</code>",
								id: "entry",
								children: [],
							},
							{
								value: "<code>output</code>",
								id: "output",
								children: [],
							},
							{
								value: "<code>options</code>",
								id: "options",
								children: [],
							},
						],
					},
					{ value: "Examples", id: "examples", children: [] },
				],
				u = { toc: s };
			function d(e) {
				var n = e.components,
					t = (0, o.Z)(e, i);
				return (0, r.kt)(
					"wrapper",
					(0, a.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, r.kt)(
						"h1",
						{ id: "changes-of-name" },
						"Changes of name",
					),
					(0, r.kt)(
						"p",
						null,
						"The bundler of swc was called ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "spack"),
						", but it will be changed to ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "swcpack"),
						".\n",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/1113",
							},
							"There's a project called spack",
						),
						", and it's much older than the bundler, so I think it's right to rename new tool.",
					),
					(0, r.kt)(
						"p",
						null,
						"The support for ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						" will be dropped in v2. It will be ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swcpack.config.js",
						),
						" instead, although the new config file is not supported yet.",
					),
					(0, r.kt)("h2", { id: "config-file" }, "Config file"),
					(0, r.kt)(
						"p",
						null,
						"spack can be configured with ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						". Config file for the spack is almost simillar to webpack. In future, I'll add a webpack-compatible plugin system.",
					),
					(0, r.kt)(
						"p",
						null,
						"Currently configuration items should be exported as common js exports, like",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module.exports = {\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n};\n',
						),
					),
					(0, r.kt)(
						"blockquote",
						null,
						(0, r.kt)(
							"p",
							{ parentName: "blockquote" },
							"Note: In future, exporting config using ES modules will be supported.",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"If you want autocompletion or type checking for configuration, you can wrap with ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "config"),
						" function from ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core/spack",
						),
						". It's an identity function with type annotation.",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n});\n',
						),
					),
					(0, r.kt)(
						"h3",
						{ id: "mode" },
						(0, r.kt)("inlineCode", { parentName: "h3" }, "mode"),
					),
					(0, r.kt)(
						"p",
						null,
						"Possible values: ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"production",
						),
						", ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "debug"),
						", ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "none"),
						".",
					),
					(0, r.kt)(
						"p",
						null,
						"Currently this value is not used, but it will behave similarly to one of webpack.",
					),
					(0, r.kt)(
						"h3",
						{ id: "entry" },
						(0, r.kt)("inlineCode", { parentName: "h3" }, "entry"),
					),
					(0, r.kt)(
						"p",
						null,
						"Determines the entry of bundling.\nYou may specify a file or a map of bundle name to file path.",
					),
					(0, r.kt)(
						"blockquote",
						null,
						(0, r.kt)(
							"p",
							{ parentName: "blockquote" },
							"Note: Currently this should be absolute path. You can use ",
							(0, r.kt)(
								"inlineCode",
								{ parentName: "p" },
								"__dirname",
							),
							" to create one.",
						),
						(0, r.kt)(
							"p",
							{ parentName: "blockquote" },
							"But in future, spack will support using relative path and will resolve files relative to ",
							(0, r.kt)(
								"inlineCode",
								{ parentName: "p" },
								"spack.config.js",
							),
							".",
						),
					),
					(0, r.kt)("h4", { id: "example" }, "Example"),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: __dirname + "/src/index.ts",\n});\n',
						),
					),
					(0, r.kt)(
						"p",
						null,
						"You can specify the name of bundle like following.",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n});\n',
						),
					),
					(0, r.kt)(
						"h3",
						{ id: "output" },
						(0, r.kt)("inlineCode", { parentName: "h3" }, "output"),
					),
					(0, r.kt)(
						"p",
						null,
						"You can change destination directory of the bundler using ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "output"),
						".",
					),
					(0, r.kt)("h4", { id: "example-1" }, "Example"),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  output: {\n    path: __dirname + "/lib",\n    // Name is optional.\n    name: "index.js",\n  },\n});\n',
						),
					),
					(0, r.kt)(
						"h3",
						{ id: "options" },
						(0, r.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"options",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"Used to control the behavior of swc. This field is optional.",
					),
					(0, r.kt)(
						"p",
						null,
						"See ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/usage-core#options",
							},
							"Options section of the swc doc",
						),
						" for details.",
					),
					(0, r.kt)("h2", { id: "examples" }, "Examples"),
					(0, r.kt)(
						"ul",
						null,
						(0, r.kt)(
							"li",
							{ parentName: "ul" },
							(0, r.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/swc-project/cli/tree/master/examples/spack-basic",
								},
								"Basic usage",
							),
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
