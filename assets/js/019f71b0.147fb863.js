"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7154],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => m });
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
			function l(e, t) {
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
						? l(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: l(Object(n)).forEach(function (t) {
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
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++)
							(n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++)
						(n = l[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var s = r.createContext({}),
				p = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return r.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				d = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				c = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						l = e.originalType,
						s = e.parentName,
						u = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						c = p(n),
						m = a,
						k = c["".concat(s, ".").concat(m)] || c[m] || d[m] || l;
					return n
						? r.createElement(
								k,
								i(i({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(k, i({ ref: t }, u));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var l = n.length,
						i = new Array(l);
					i[0] = c;
					var o = {};
					for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(i[1] = o);
					for (var p = 2; p < l; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			c.displayName = "MDXCreateElement";
		},
		7131: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => u,
					default: () => c,
				});
			var r = n(7462),
				a = n(3366),
				l = (n(7294), n(3905)),
				i = ["components"],
				o = {
					id: "preset-env",
					title: "preset-env",
					sidebar_label: "preset-env",
				},
				s = void 0,
				p = {
					unversionedId: "preset-env",
					id: "preset-env",
					isDocsHomePage: !1,
					title: "preset-env",
					description:
						"Starting with v1.1.10, you can now use browserslist to automaticallly configure swc.",
					source: "@site/docs/configuring-preset-env.md",
					sourceDirName: ".",
					slug: "/preset-env",
					permalink: "/docs/preset-env",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "preset-env",
						title: "preset-env",
						sidebar_label: "preset-env",
					},
					sidebar: "usage",
					previous: {
						title: "Configuring swc",
						permalink: "/docs/configuring-swc",
					},
					next: {
						title: "Module config",
						permalink: "/docs/config-js-module",
					},
				},
				u = [
					{
						value: "Usage",
						id: "usage",
						children: [
							{ value: "Example", id: "example", children: [] },
							{
								value: "browserslist",
								id: "browserslist",
								children: [],
							},
						],
					},
					{
						value: "Options",
						id: "options",
						children: [
							{ value: "targets", id: "targets", children: [] },
							{ value: "path", id: "path", children: [] },
							{ value: "mode", id: "mode", children: [] },
							{ value: "debug", id: "debug", children: [] },
							{
								value: "dynamicImport",
								id: "dynamicimport",
								children: [],
							},
							{ value: "loose", id: "loose", children: [] },
							{ value: "skip", id: "skip", children: [] },
							{ value: "include", id: "include", children: [] },
							{ value: "exclude", id: "exclude", children: [] },
							{ value: "coreJs", id: "corejs", children: [] },
							{
								value: "shippedProposals",
								id: "shippedproposals",
								children: [],
							},
							{
								value: "forceAllTransforms",
								id: "forcealltransforms",
								children: [],
							},
						],
					},
				],
				d = { toc: u };
			function c(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, l.kt)(
					"wrapper",
					(0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
					(0, l.kt)(
						"p",
						null,
						"Starting with ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "v1.1.10"),
						", you can now use browserslist to automaticallly configure swc.",
					),
					(0, l.kt)(
						"p",
						null,
						"You need to install ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"browserslist",
						),
						" to use this feature.",
					),
					(0, l.kt)("h2", { id: "usage" }, "Usage"),
					(0, l.kt)("h3", { id: "example" }, "Example"),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "targets": {\n      "chrome": "79"\n    },\n    "mode": "entry",\n    "coreJs": 3\n  }\n}\n',
						),
					),
					(0, l.kt)("h3", { id: "browserslist" }, "browserslist"),
					(0, l.kt)(
						"p",
						null,
						"If you want to use ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"browserslist",
						),
						" with swc, you can just omit ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "targets"),
						" field like",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "coreJs": 3\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Note that ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/browserslist/browserslist",
							},
							"browserlists",
						),
						" can be configured in multiple ways.",
					),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								".browserslistrc",
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"browserslist",
							),
							" field in package.json",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"You can use ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "#path" },
							"path",
						),
						" to specify a custom path to load these configuration files from.",
					),
					(0, l.kt)("h2", { id: "options" }, "Options"),
					(0, l.kt)("h3", { id: "targets" }, "targets"),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"string | Array<string> | { [string]: string }",
						),
						", defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "{}"),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Describes the environments you support/target for your project.",
					),
					(0, l.kt)(
						"p",
						null,
						"This can either be a ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/ai/browserslist",
							},
							"browserslist-compatible",
						),
						" query:",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "targets": "> 0.25%, not dead"\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Or an object of minimum environment versions to support:",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "targets": {\n      "chrome": "58",\n      "ie": "11"\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Example environments: ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "chrome"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "opera"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "edge"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "firefox"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "safari"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "ie"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "ios"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "android"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "node"),
						", ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"electron",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"If ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "targets"),
						" is not specified, ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" uses ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"browserslist",
						),
						" to get target information. See ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "#browserslist" },
							"browserslist",
						),
					),
					(0, l.kt)("h3", { id: "path" }, "path"),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "string"),
						", defaults to current directory.",
					),
					(0, l.kt)(
						"p",
						null,
						"The path specifies the directory to load the browserslist module and any browserslist configuration files\n(e.g. ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							".browserslistrc",
						),
						", ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"browserslist",
						),
						" field in package.json).",
					),
					(0, l.kt)(
						"p",
						null,
						"This can be useful if your build system isn't in the root of your project.",
					),
					(0, l.kt)("h3", { id: "mode" }, "mode"),
					(0, l.kt)(
						"p",
						null,
						"See: ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://babeljs.io/docs/en/babel-preset-env#usebuiltins",
							},
							"https://babeljs.io/docs/en/babel-preset-env#usebuiltins",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"Possible values: ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "usage"),
						", ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "entry"),
						", ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"undefined",
						),
						"\nDefaults to ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"undefined",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("em", { parentName: "p" }, "Note:"),
						" Currently ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "usage"),
						" is not efficient as one of babel. Even though, it does not matter in real world codes.",
					),
					(0, l.kt)("h3", { id: "debug" }, "debug"),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)("h3", { id: "dynamicimport" }, "dynamicImport"),
					(0, l.kt)(
						"p",
						null,
						"Defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)("h3", { id: "loose" }, "loose"),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "boolean"),
						", defaults to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "false"),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Enable ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "http://2ality.com/2015/12/babel6-loose-mode.html",
							},
							'"loose" transformations',
						),
						" for any plugins in this preset that allow them.",
					),
					(0, l.kt)("h3", { id: "skip" }, "skip"),
					(0, l.kt)(
						"p",
						null,
						"Skip some es features. You can use this option to reduce bundle size.",
					),
					(0, l.kt)(
						"p",
						null,
						"For example, to exclude ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"core-js/modules/foo",
						),
						", you can use",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "env": {\n    "skip": ["core-js/modules/foo"]\n  }\n}\n',
						),
					),
					(0, l.kt)("h3", { id: "include" }, "include"),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							"Type is string[]",
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							"can be a core-js module (",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"es.math.sign",
							),
							") or a swc pass (",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"transform-spread",
							),
							")",
						),
					),
					(0, l.kt)("h3", { id: "exclude" }, "exclude"),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"string[]",
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							"can be a core-js module (",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"es.math.sign",
							),
							") or a swc pass (",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"transform-spread",
							),
							")",
						),
					),
					(0, l.kt)("h3", { id: "corejs" }, "coreJs"),
					(0, l.kt)(
						"p",
						null,
						"The version of the used core js. Defaults to undefined, which panic when mode is configured.",
					),
					(0, l.kt)(
						"h3",
						{ id: "shippedproposals" },
						"shippedProposals",
					),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"boolean",
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							"Defaults to ",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"false",
							),
							".",
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "forcealltransforms" },
						"forceAllTransforms",
					),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"boolean",
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							"Defaults to ",
							(0, l.kt)(
								"inlineCode",
								{ parentName: "li" },
								"false",
							),
							".",
						),
					),
					(0, l.kt)("p", null, "Enable all transforms"),
				);
			}
			c.isMDXComponent = !0;
		},
	},
]);
