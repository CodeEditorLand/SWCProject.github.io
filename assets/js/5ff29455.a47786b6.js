"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3062],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => c, kt: () => m });
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
			function o(e, n) {
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
			function l(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? o(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: o(Object(t)).forEach(function (n) {
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
							o = Object.keys(e);
						for (i = 0; i < o.length; i++)
							(t = o[i]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (i = 0; i < o.length; i++)
						(t = o[i]),
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
								"function" == typeof e ? e(n) : l(l({}, n), e)),
						t
					);
				},
				c = function (e) {
					var n = s(e.components);
					return i.createElement(
						p.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return i.createElement(i.Fragment, {}, n);
					},
				},
				d = i.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						c = r(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = s(t),
						m = a,
						g = d["".concat(p, ".").concat(m)] || d[m] || u[m] || o;
					return t
						? i.createElement(
								g,
								l(l({ ref: n }, c), {}, { components: t }),
							)
						: i.createElement(g, l({ ref: n }, c));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var o = t.length,
						l = new Array(o);
					l[0] = d;
					var r = {};
					for (var p in n) hasOwnProperty.call(n, p) && (r[p] = n[p]);
					(r.originalType = e),
						(r.mdxType = "string" == typeof e ? e : a),
						(l[1] = r);
					for (var s = 2; s < o; s++) l[s] = t[s];
					return i.createElement.apply(null, l);
				}
				return i.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		4030: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => r,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => c,
					default: () => d,
				});
			var i = t(7462),
				a = t(3366),
				o = (t(7294), t(3905)),
				l = ["components"],
				r = {
					title: "v1.2: spack: Yet another asset bundler",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2020/06/18/swc-1.2",
					source: "@site/blog/2020-06-18-swc-1.2.md",
					title: "v1.2: spack: Yet another asset bundler",
					description: "Features",
					date: "2020-06-18T00:00:00.000Z",
					formattedDate: "June 18, 2020",
					tags: [],
					readingTime: 3.43,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.5",
						permalink: "/blog/2020/06/19/swc-1.2.5",
					},
					nextItem: {
						title: "Changelog: swc v1.1.58",
						permalink: "/blog/2020/06/13/swc-1.1.58",
					},
				},
				c = [
					{
						value: "Features",
						id: "features",
						children: [
							{
								value: "Compact output",
								id: "compact-output",
								children: [],
							},
							{
								value: "Tree shaking",
								id: "tree-shaking",
								children: [],
							},
							{
								value: "Import deglobbing",
								id: "import-deglobbing",
								children: [],
							},
							{
								value: "Common js support",
								id: "common-js-support",
								children: [],
							},
							{
								value: "Optimizations",
								id: "optimizations",
								children: [],
							},
							{
								value: "High performance",
								id: "high-performance",
								children: [],
							},
							{
								value: "swc integration",
								id: "swc-integration",
								children: [],
							},
							{
								value: "Multiple entries",
								id: "multiple-entries",
								children: [],
							},
							{
								value: "Built-in chunking",
								id: "built-in-chunking",
								children: [],
							},
							{
								value: "Type annotation for config file",
								id: "type-annotation-for-config-file",
								children: [],
							},
							{
								value: "Fine config",
								id: "fine-config",
								children: [],
							},
						],
					},
					{
						value: "Roadmap (spack)",
						id: "roadmap-spack",
						children: [
							{
								value: "webpack-compatible plugin api",
								id: "webpack-compatible-plugin-api",
								children: [],
							},
							{
								value: "dynamic imports (and code splitting)",
								id: "dynamic-imports-and-code-splitting",
								children: [],
							},
							{
								value: "minification (#826)",
								id: "minification-826",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var n = e.components,
					t = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, i.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "features" }, "Features"),
					(0, o.kt)("h3", { id: "compact-output" }, "Compact output"),
					(0, o.kt)(
						"p",
						null,
						"Just like rollup, spack emits compact output.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "a.js"),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log("loading A");\nexport function a() {\n  console.log("use!");\n}\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "lib.js"),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { a } from "./a";\na();\n',
						),
					),
					(0, o.kt)("p", null, "becomes"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log("loading A");\nfunction a() {\n  console.log("use!");\n}\na();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Because ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" was designed with this type of merging in mind, files are merged without any problems even if the same name exists in multiple files.",
					),
					(0, o.kt)("h3", { id: "tree-shaking" }, "Tree shaking"),
					(0, o.kt)(
						"p",
						null,
						"Just like other modern bundlers, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "spack"),
						" can remove unused exports.",
					),
					(0, o.kt)(
						"h3",
						{ id: "import-deglobbing" },
						"Import deglobbing",
					),
					(0, o.kt)(
						"p",
						null,
						"To aid tree shaking, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "spack"),
						" deglobs import if possible.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import * as lib from "lib";\nlib.foo();\n',
						),
					),
					(0, o.kt)("p", null, "behaves exactly same as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { foo } from "lib";\nfoo();\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Note that all side effects are preserved.",
					),
					(0, o.kt)(
						"h3",
						{ id: "common-js-support" },
						"Common js support",
					),
					(0, o.kt)(
						"p",
						null,
						"As almost all modules on npm are published as common js module, spack supports importing common js module. Also, spack emits compact output compared to webpack.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import * as lib from "lib";\nconsole.log(lib); // Prevent dce\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"If the ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "lib"),
						" above is common js module, it's transcompiled as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const load = __spack_require.bind(void 0, function (module, exports) {\n  // Code from lib goes here\n});\nconst lib = load();\nconsole.log(lib); // Prevent dce\n",
						),
					),
					(0, o.kt)("h3", { id: "optimizations" }, "Optimizations"),
					(0, o.kt)(
						"p",
						null,
						"Currently ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"global inlining (e.g. ",
							(0, o.kt)(
								"inlineCode",
								{ parentName: "li" },
								"process.env.NODE_ENV",
							),
							")",
						),
						(0, o.kt)("li", { parentName: "ul" }, "inlining"),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"constant propagation",
						),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"dead code elimination",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Actually the tree shaking described above is implemented using the dead code elimination pass. Currently, spack / swc can deduce",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let b = 2;\nlet a = 1;\nif (b) {\n  a = 2;\n}\nlet c;\nif (a) {\n  c = 3;\n}\nconsole.log(c);\n",
						),
					),
					(0, o.kt)("p", null, "into"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"console.log(3);\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "high-performance" },
						"High performance",
					),
					(0, o.kt)(
						"p",
						null,
						"As always, performance is a first-class citizen. It's very fast because it uses all cpu cores, and optimized by llvm.",
					),
					(0, o.kt)(
						"h3",
						{ id: "swc-integration" },
						"swc integration",
					),
					(0, o.kt)(
						"p",
						null,
						"You can use es2018, module import / export-s and some staged proposals without installing any additional dependency.",
					),
					(0, o.kt)(
						"h3",
						{ id: "multiple-entries" },
						"Multiple entries",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/web.ts",\n    android: __dirname + "/src/android.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "built-in-chunking" },
						"Built-in chunking",
					),
					(0, o.kt)(
						"p",
						null,
						"Let's suppose that we have the same config as above. If ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"android.ts",
						),
						" and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "web.ts"),
						" both references a file, it will be extracted as a separate chunk and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "web.ts"),
						" and ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"amdroid.ts",
						),
						" will import it.",
					),
					(0, o.kt)(
						"h3",
						{ id: "type-annotation-for-config-file" },
						"Type annotation for config file",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "spack"),
						" provides type annotations for the config. You can get assists from ide just by wrappping your configuration object with ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "config"),
						". Note that it's just an identity function with type annoatations.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						":",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n',
						),
					),
					(0, o.kt)("h3", { id: "fine-config" }, "Fine config"),
					(0, o.kt)(
						"p",
						null,
						"If you want to bundle everything in each bundle, you can provide an array of configurations.",
					),
					(0, o.kt)("p", null, "e.g."),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config([\n  {\n    entry: {\n      desktop: __dirname + "/src/desktop.ts",\n    },\n    output: {\n      path: __dirname + "/lib",\n    },\n    module: {},\n  },\n  {\n    entry: {\n      mobile: __dirname + "/src/mobile.ts",\n    },\n    output: {\n      path: __dirname + "/lib",\n    },\n    module: {},\n  },\n]);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"results in two full bundle (",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"desktop.js",
						),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mobile.js",
						),
						"), while",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    desktop: __dirname + "/src/desktop.ts",\n    mobile: __dirname + "/src/mobile.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n  module: {},\n});\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"results in chunking. In this case, the output will be ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"desktop.js",
						),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mobile.js",
						),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"common-[hash].js",
						),
						", assuming there's a common dependency.",
					),
					(0, o.kt)("h2", { id: "roadmap-spack" }, "Roadmap (spack)"),
					(0, o.kt)(
						"h3",
						{ id: "webpack-compatible-plugin-api" },
						"webpack-compatible plugin api",
					),
					(0, o.kt)(
						"p",
						null,
						"spack will provide webpack-compatible apis, so you will be able to use webpack loaders and plugins without changing the plugin. All you need to do will be changing file name and imports.",
					),
					(0, o.kt)(
						"p",
						null,
						"I couldn't implement this because currently there's no way to wait for a promise to be resolved from rust code.\nI'll implement this feature as soon as possible after ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/neon-bindings/neon/issues/73",
							},
							"neon#73",
						),
						" or ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/infinyon/node-bindgen/issues/37",
							},
							"node-bidgen#37",
						),
						" is fixed. (I'm open to switchig from neon to node-bindgen).",
					),
					(0, o.kt)(
						"h3",
						{ id: "dynamic-imports-and-code-splitting" },
						"dynamic imports (and code splitting)",
					),
					(0, o.kt)(
						"h3",
						{ id: "minification-826" },
						"minification (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/826",
							},
							"#826",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"I think this is one of the core features of a bundler. I'll implement it soon.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
