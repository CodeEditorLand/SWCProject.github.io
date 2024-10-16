"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4921],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => c, kt: () => d });
			var a = t(7294);
			function r(e, n, t) {
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
			function s(e, n) {
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
			function l(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? s(Object(t), !0).forEach(function (n) {
								r(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: s(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function o(e, n) {
				if (null == e) return {};
				var t,
					a,
					r = (function (e, n) {
						if (null == e) return {};
						var t,
							a,
							r = {},
							s = Object.keys(e);
						for (a = 0; a < s.length; a++)
							(t = s[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
						return r;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (a = 0; a < s.length; a++)
						(t = s[a]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(r[t] = e[t]));
				}
				return r;
			}
			var i = a.createContext({}),
				p = function (e) {
					var n = a.useContext(i),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : l(l({}, n), e)),
						t
					);
				},
				c = function (e) {
					var n = p(e.components);
					return a.createElement(
						i.Provider,
						{ value: n },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return a.createElement(a.Fragment, {}, n);
					},
				},
				u = a.forwardRef(function (e, n) {
					var t = e.components,
						r = e.mdxType,
						s = e.originalType,
						i = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(t),
						d = r,
						k = u["".concat(i, ".").concat(d)] || u[d] || m[d] || s;
					return t
						? a.createElement(
								k,
								l(l({ ref: n }, c), {}, { components: t }),
							)
						: a.createElement(k, l({ ref: n }, c));
				});
			function d(e, n) {
				var t = arguments,
					r = n && n.mdxType;
				if ("string" == typeof e || r) {
					var s = t.length,
						l = new Array(s);
					l[0] = u;
					var o = {};
					for (var i in n) hasOwnProperty.call(n, i) && (o[i] = n[i]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(l[1] = o);
					for (var p = 2; p < s; p++) l[p] = t[p];
					return a.createElement.apply(null, l);
				}
				return a.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		2717: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => o,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => c,
					default: () => u,
				});
			var a = t(7462),
				r = t(3366),
				s = (t(7294), t(3905)),
				l = ["components"],
				o = {
					id: "configuring-swc",
					title: "Configuring swc",
					sidebar_label: "Configuring swc",
				},
				i = void 0,
				p = {
					unversionedId: "configuring-swc",
					id: "configuring-swc",
					isDocsHomePage: !1,
					title: "Configuring swc",
					description: "swc can be configured with .swcrc file.",
					source: "@site/docs/configuring-swc.md",
					sourceDirName: ".",
					slug: "/configuring-swc",
					permalink: "/docs/configuring-swc",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "configuring-swc",
						title: "Configuring swc",
						sidebar_label: "Configuring swc",
					},
					sidebar: "usage",
					previous: {
						title: "Installation",
						permalink: "/docs/installation",
					},
					next: {
						title: "preset-env",
						permalink: "/docs/preset-env",
					},
				},
				c = [
					{ value: "preset-env", id: "preset-env", children: [] },
					{
						value: "jsc.externalHelpers",
						id: "jscexternalhelpers",
						children: [],
					},
					{ value: "jsc.parser", id: "jscparser", children: [] },
					{ value: "jsc.target", id: "jsctarget", children: [] },
					{ value: "jsc.loose", id: "jscloose", children: [] },
					{
						value: "jsc.transform",
						id: "jsctransform",
						children: [
							{
								value: "jsc.transform.legacyDecorator",
								id: "jsctransformlegacydecorator",
								children: [],
							},
							{
								value: "jsc.transform.decoratorMetadata",
								id: "jsctransformdecoratormetadata",
								children: [],
							},
							{
								value: "jsc.transform.react",
								id: "jsctransformreact",
								children: [],
							},
							{
								value: "jsc.transform.constModules",
								id: "jsctransformconstmodules",
								children: [],
							},
							{
								value: "<code>jsc.transform.optimizer</code>",
								id: "jsctransformoptimizer",
								children: [],
							},
						],
					},
					{
						value: "jsc.keepClassNames",
						id: "jsckeepclassnames",
						children: [],
					},
					{
						value: "<code>jsc.paths</code>",
						id: "jscpaths",
						children: [],
					},
					{
						value: "<code>jsc.baseUrl</code>",
						id: "jscbaseurl",
						children: [],
					},
					{
						value: "<code>jsc.minify</code>",
						id: "jscminify",
						children: [],
					},
					{
						value: "<code>jsc.experimental</code>",
						id: "jscexperimental",
						children: [],
					},
					{ value: "module", id: "module", children: [] },
					{ value: "minify", id: "minify", children: [] },
					{
						value: "Multiple entries",
						id: "multiple-entries",
						children: [
							{ value: "test", id: "test", children: [] },
							{ value: "exclude", id: "exclude", children: [] },
						],
					},
					{
						value: "<code>sourceMaps</code>",
						id: "sourcemaps",
						children: [],
					},
					{
						value: "<code>inlineSourcesContent</code>",
						id: "inlinesourcescontent",
						children: [],
					},
				],
				m = { toc: c };
			function u(e) {
				var n = e.components,
					t = (0, r.Z)(e, l);
				return (0, s.kt)(
					"wrapper",
					(0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can be configured with ",
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" file.",
					),
					(0, s.kt)("h2", { id: "preset-env" }, "preset-env"),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "/docs/preset-env" },
							"preset-env",
						),
						" for using swc with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"browserslist",
						),
						".",
					),
					(0, s.kt)("h1", { id: "jsc" }, "jsc"),
					(0, s.kt)("p", null, "This is optional and defaults to"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "topLevelAwait": false,\n      "importMeta": false\n    },\n    "transform": null,\n    "target": "es5",\n    "loose": false,\n    "externalHelpers": false,\n    // Requires v1.2.50 or upper and requires target to be es2016 or upper.\n    "keepClassNames": false\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "jscexternalhelpers" },
						"jsc.externalHelpers",
					),
					(0, s.kt)(
						"p",
						null,
						"The output code may depend on helper functions to support the target environment. By default a helper function is inlined into the output files where it is required.",
					),
					(0, s.kt)(
						"p",
						null,
						"You can use helpers from an external module by enabling ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"externalHelpers",
						),
						" and the helpers code will be imported by the output files from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"node_modules/@swc/helpers",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"While bundling, this option will greatly reduce your file size.",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"em",
							{ parentName: "p" },
							"Note: you must add ",
							(0, s.kt)(
								"a",
								{
									parentName: "em",
									href: "https://www.npmjs.com/package/@swc/helpers",
								},
								(0, s.kt)(
									"inlineCode",
									{ parentName: "a" },
									"@swc/helpers",
								),
							),
							" as a dependency in addition to ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "em" },
								"@swc/core",
							),
							".",
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "externalHelpers": true\n  }\n}\n',
						),
					),
					(0, s.kt)("h2", { id: "jscparser" }, "jsc.parser"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"typescript",
						),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": false,\n      "dynamicImport": false\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"ecmascript",
						),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "classPrivateProperty": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "importMeta": false\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)("h2", { id: "jsctarget" }, "jsc.target"),
					(0, s.kt)(
						"p",
						null,
						"Starting from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core",
						),
						" v1.0.27, you can specify the target environment by using the field.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    // Disable es3 / es5 / es2015 transforms\n    "target": "es2016"\n  }\n}\n',
						),
					),
					(0, s.kt)("h2", { id: "jscloose" }, "jsc.loose"),
					(0, s.kt)(
						"p",
						null,
						"Starting from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core",
						),
						' v1.1.4, you can enable "loose" transformations by enabling ',
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.loose",
						),
						" which works like ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"babel-preset-env",
						),
						" loose mode.",
					),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://2ality.com/2015/12/babel6-loose-mode.html",
							},
							"https://2ality.com/2015/12/babel6-loose-mode.html",
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "loose": true\n  }\n}\n',
						),
					),
					(0, s.kt)("h2", { id: "jsctransform" }, "jsc.transform"),
					(0, s.kt)("p", null, "Example"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "transform": {\n      "react": {\n        "pragma": "React.createElement",\n        "pragmaFrag": "React.Fragment",\n        "throwIfNamespace": true,\n        "development": false,\n        "useBuiltins": false\n      },\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "jsctransformlegacydecorator" },
						"jsc.transform.legacyDecorator",
					),
					(0, s.kt)(
						"p",
						null,
						"You can use the legacy (stage 1) class decorators syntax and behaviour.",
					),
					(0, s.kt)(
						"p",
						null,
						"To enable legacy decorators, set ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.transform.legacyDecorator",
						),
						" and ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.parser.decorators",
						),
						" to true.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "jsctransformdecoratormetadata" },
						"jsc.transform.decoratorMetadata",
					),
					(0, s.kt)(
						"p",
						null,
						"If you are using typescript and decorators with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"emitDecoratorMetadata",
						),
						" enabled, you can use ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" for faster iteration like",
					),
					(0, s.kt)("p", null, "e.g."),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true,\n      "decoratorMetadata": true\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Note: This feature requires ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"v1.2.13+",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "jsctransformreact" },
						"jsc.transform.react",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactruntime" },
						"jsc.transform.react.runtime",
					),
					(0, s.kt)(
						"p",
						null,
						"Possible values: ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"automatic",
						),
						", ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "classic"),
						". This affects how JSX source code will be compiled.",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Use ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"runtime: automatic",
							),
							" to use a JSX runtime module (e.g. ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"react/jsx-runtime",
							),
							" introduced in React 17).",
						),
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Use ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"runtime: classic",
							),
							" to use ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"React.createElement",
							),
							" instead - with this option, you must ensure that ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"React",
							),
							" is in scope when using JSX.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
							},
							"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactimportsource" },
						"jsc.transform.react.importSource",
					),
					(0, s.kt)(
						"p",
						null,
						"When using ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"runtime: automatic",
						),
						", determines the runtime library to import.",
					),
					(0, s.kt)(
						"p",
						null,
						"Defaults to ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "react"),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"This option can be overrided with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@jsxImportSource foo",
						),
						".",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactpragma" },
						"jsc.transform.react.pragma",
					),
					(0, s.kt)(
						"p",
						null,
						"When using ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"runtime: classic",
						),
						", replaces the function used when compiling JSX expressions.",
					),
					(0, s.kt)(
						"p",
						null,
						"Defaults to ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"React.createElement",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"This option can be overrided with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@jsx foo",
						),
						".",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactpragmafrag" },
						"jsc.transform.react.pragmaFrag",
					),
					(0, s.kt)(
						"p",
						null,
						"Replace the component used when compiling JSX fragments.",
					),
					(0, s.kt)(
						"p",
						null,
						"Defaults to ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"React.Fragment",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This option can be overrided with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@jsxFrag foo",
						),
						".",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactthrowifnamespace" },
						"jsc.transform.react.throwIfNamespace",
					),
					(0, s.kt)(
						"p",
						null,
						"Toggles whether or not to throw an error if an XML namespaced tag name is used. For example: ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"<f:image />",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Though the JSX spec allows this, it is disabled by default since React's JSX does not currently have support for it.",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactdevelopment" },
						"jsc.transform.react.development",
					),
					(0, s.kt)(
						"p",
						null,
						"Toggles debug props ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "__self"),
						" and ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"__source",
						),
						" on elements generated from JSX, which are used by development tooling such as React Developer Tools.",
					),
					(0, s.kt)(
						"p",
						null,
						"This option is set automatically based on the Webpack ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "mode"),
						" setting when used with ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc-loader",
						),
						". See ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/usage-swc-loader/",
							},
							"Using swc with webpack",
						),
						".",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactusebuiltins" },
						"jsc.transform.react.useBuiltins",
					),
					(0, s.kt)(
						"p",
						null,
						"Use ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Object.assign()",
						),
						" instead of ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"_extends",
						),
						". Defaults to false.",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformreactrefresh" },
						"jsc.transform.react.refresh",
					),
					(0, s.kt)(
						"p",
						null,
						"Enable ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://www.npmjs.com/package/react-refresh",
							},
							"react-refresh",
						),
						" related transform. Defaults to false as it's considered experimental.",
					),
					(0, s.kt)(
						"p",
						null,
						"Pass ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"refresh: true",
						),
						" to enable this feature, or an object with the following:",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'interface ReactRefreshConfig {\n  /** @default "$RefreshReg$" */\n  refreshReg: String;\n  /** @default "$RefreshSig$" */\n  refreshSig: String;\n  /** @default false */\n  emitFullSignatures: boolean;\n}\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "jsctransformconstmodules" },
						"jsc.transform.constModules",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "transform": {\n      "constModules": {\n        "globals": {\n          "@ember/env-flags": {\n            "DEBUG": "true"\n          },\n          "@ember/features": {\n            "FEATURE_A": "false",\n            "FEATURE_B": "true"\n          }\n        }\n      }\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { DEBUG } from "@ember/env-flags";\nimport { FEATURE_A, FEATURE_B } from "@ember/features";\n\nconsole.log(DEBUG, FEATURE_A, FEATURE_B);\n',
						),
					),
					(0, s.kt)("p", null, "becomes"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"console.log(true, false, true);\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "jsctransformoptimizer" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.transform.optimizer",
						),
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("strong", { parentName: "p" }, "Note"),
						": Optimizer of the swc assumes",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"It's a module or wrapped in an iife.",
						),
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Accessing (get) global variables does not have a side-effect.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"It is the same assumption as the google closure compiler.",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"You don't add fields to literals like a numeric literal, regular expression or a string literal.",
						),
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Files are served as gzipped.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"It means that swc will not focus on reducing the size of non-gzipped file size.",
					),
					(0, s.kt)(
						"p",
						null,
						"Setting this to ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"undefined",
						),
						" skips optimizer pass",
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformoptimizersimplify" },
						"jsc.transform.optimizer.simplify",
					),
					(0, s.kt)(
						"p",
						null,
						"Starting from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"v1.2.101",
						),
						", you can set this value to false to use ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inline_globals",
						),
						" while skipping optimizations.",
					),
					(0, s.kt)(
						"p",
						null,
						"e.g.\n",
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "simplify": false,\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformoptimizerglobals" },
						"jsc.transform.optimizer.globals",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							(0, s.kt)(
								"p",
								{ parentName: "li" },
								(0, s.kt)(
									"inlineCode",
									{ parentName: "p" },
									"vars",
								),
								"\nVariables to inline.",
							),
						),
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							(0, s.kt)(
								"p",
								{ parentName: "li" },
								(0, s.kt)(
									"inlineCode",
									{ parentName: "p" },
									"typeofs",
								),
								"\nIf you set ",
								(0, s.kt)(
									"inlineCode",
									{ parentName: "p" },
									'{ "window": "object" }',
								),
								", ",
								(0, s.kt)(
									"inlineCode",
									{ parentName: "p" },
									"typeof window",
								),
								" will be replaced with ",
								(0, s.kt)(
									"inlineCode",
									{ parentName: "p" },
									'"object"',
								),
								".",
							),
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This option requires ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"v1.2.101",
						),
						" or upper.",
					),
					(0, s.kt)(
						"p",
						null,
						"e.g.\n",
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npx swc '__DEBUG__' --filename input.js",
						),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"true;\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "jsctransformoptimizerjsonify" },
						"jsc.transform.optimizer.jsonify",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("strong", { parentName: "p" }, "Note:"),
						" This feature requires ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.1.1"),
						"+",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								"minCost",
							),
							"\nIf cost of parsing a pure object literal is larger than this value, the object literal is converted to ",
							(0, s.kt)(
								"inlineCode",
								{ parentName: "li" },
								'JSON.parse(\'{"foo": "bar"}\')',
							),
							". Defaults to 1024.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"e.g.\n",
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "jsonify": {\n          "minCost": 0\n        }\n      }\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This will change all ",
						(0, s.kt)("strong", { parentName: "p" }, "pure"),
						" object literals to ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							'JSON.parse("")',
						),
						".",
					),
					(0, s.kt)(
						"h2",
						{ id: "jsckeepclassnames" },
						"jsc.keepClassNames",
					),
					(0, s.kt)(
						"p",
						null,
						"Requires v1.2.50 or upper and requires target to be es2016 or upper.",
					),
					(0, s.kt)(
						"p",
						null,
						"Enabling this option will make swc preserve original class names.",
					),
					(0, s.kt)(
						"h2",
						{ id: "jscpaths" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"jsc.paths",
						),
					),
					(0, s.kt)(
						"blockquote",
						null,
						(0, s.kt)(
							"p",
							{ parentName: "blockquote" },
							"Requires ",
							(0, s.kt)(
								"a",
								{ parentName: "p", href: "mailto:swc@1.2.62" },
								"swc@1.2.62",
							),
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Syntax is identical as it of ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"tsconfig.json",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",
							},
							"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",
						),
						" for more details.",
					),
					(0, s.kt)(
						"p",
						null,
						"Requires ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.baseUrl",
						),
						". See below.",
					),
					(0, s.kt)(
						"h2",
						{ id: "jscbaseurl" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"jsc.baseUrl",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url",
							},
							"https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url",
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "jscminify" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"jsc.minify",
						),
					),
					(0, s.kt)(
						"blockquote",
						null,
						(0, s.kt)(
							"p",
							{ parentName: "blockquote" },
							"Requires ",
							(0, s.kt)(
								"a",
								{ parentName: "p", href: "mailto:swc@1.2.67" },
								"swc@1.2.67",
							),
						),
					),
					(0, s.kt)(
						"p",
						null,
						"See ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "/docs/config-js-minify" },
							"the documentation for minification",
						),
						" for more details.",
					),
					(0, s.kt)(
						"h2",
						{ id: "jscexperimental" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"jsc.experimental",
						),
					),
					(0, s.kt)(
						"blockquote",
						null,
						(0, s.kt)(
							"p",
							{ parentName: "blockquote" },
							"Experimental features can be removed, or modified with a semver-incompatible way.\nUse at your own risk.",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Currently there's no experimental options.",
					),
					(0, s.kt)("h2", { id: "module" }, "module"),
					(0, s.kt)(
						"p",
						null,
						"To configure module system, see the ",
						(0, s.kt)(
							"a",
							{ parentName: "p", href: "/docs/config-js-module" },
							"docs",
						),
						" for it.",
					),
					(0, s.kt)("h2", { id: "minify" }, "minify"),
					(0, s.kt)(
						"p",
						null,
						"To get minified output, you can configure swc by",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "minify": true\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "multiple-entries" },
						"Multiple entries",
					),
					(0, s.kt)(
						"p",
						null,
						"Starting with ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.0.47"),
						", you can specify multiple entries. For example,",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'[\n  {\n    "test": ".*.js$",\n    "module": {\n      "type": "commonjs"\n    }\n  },\n  {\n    "test": ".*.ts$",\n    "module": {\n      "type": "amd"\n    }\n  }\n]\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"this make swc compile javascript files as common js module (uses ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"require('foo')",
						),
						") and compile typescript files as amd modules.",
					),
					(0, s.kt)(
						"p",
						null,
						"Note that ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "test"),
						" option can be used to transcompile only typescript files, like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)("h3", { id: "test" }, "test"),
					(0, s.kt)("p", null, "Type: Regex / Regex[]"),
					(0, s.kt)("p", null, "Usage:"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)("h3", { id: "exclude" }, "exclude"),
					(0, s.kt)("p", null, "Type: Regex / Regex[]"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "exclude": [".*.js$", ".*.map$"],\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "sourcemaps" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"sourceMaps",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Starting from ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "v1.2.50"),
						", you can enable source map by adding ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sourceMaps: true",
						),
						" or ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sourceMaps: 'inline'",
						),
						" to the ",
						(0, s.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						".",
					),
					(0, s.kt)("p", null, "Example:"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "sourceMaps": true\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "inlinesourcescontent" },
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"inlineSourcesContent",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Starting from ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"v1.2.101",
						),
						", this is true by default.",
					),
					(0, s.kt)(
						"p",
						null,
						"If you want to make ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" store contents of files into sourcemap, you can set ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"inlineSourcesContent",
						),
						" to true.",
					),
					(0, s.kt)("p", null, "Example:"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "sourceMaps": true,\n  "inlineSourcesContent": true\n}\n',
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
