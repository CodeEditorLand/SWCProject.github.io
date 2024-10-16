"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7535],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => s, kt: () => m });
			var l = t(7294);
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
			function i(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					n &&
						(l = l.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, l);
				}
				return t;
			}
			function o(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? i(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: i(Object(t)).forEach(function (n) {
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
					l,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							l,
							a = {},
							i = Object.keys(e);
						for (l = 0; l < i.length; l++)
							(t = i[l]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (l = 0; l < i.length; l++)
						(t = i[l]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var c = l.createContext({}),
				p = function (e) {
					var n = l.useContext(c),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : o(o({}, n), e)),
						t
					);
				},
				s = function (e) {
					var n = p(e.components);
					return l.createElement(
						c.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return l.createElement(l.Fragment, {}, n);
					},
				},
				d = l.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						s = r(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(t),
						m = a,
						k = d["".concat(c, ".").concat(m)] || d[m] || u[m] || i;
					return t
						? l.createElement(
								k,
								o(o({ ref: n }, s), {}, { components: t }),
							)
						: l.createElement(k, o({ ref: n }, s));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var i = t.length,
						o = new Array(i);
					o[0] = d;
					var r = {};
					for (var c in n) hasOwnProperty.call(n, c) && (r[c] = n[c]);
					(r.originalType = e),
						(r.mdxType = "string" == typeof e ? e : a),
						(o[1] = r);
					for (var p = 2; p < i; p++) o[p] = t[p];
					return l.createElement.apply(null, o);
				}
				return l.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		5198: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => r,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => d,
				});
			var l = t(7462),
				a = t(3366),
				i = (t(7294), t(3905)),
				o = ["components"],
				r = {
					id: "usage-swc-cli",
					title: "Using cli (swc)",
					sidebar_label: "cli (swc)",
				},
				c = void 0,
				p = {
					unversionedId: "usage-swc-cli",
					id: "usage-swc-cli",
					isDocsHomePage: !1,
					title: "Using cli (swc)",
					description: "Installation",
					source: "@site/docs/usage-swc-cli.md",
					sourceDirName: ".",
					slug: "/usage-swc-cli",
					permalink: "/docs/usage-swc-cli",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-swc-cli",
						title: "Using cli (swc)",
						sidebar_label: "cli (swc)",
					},
					sidebar: "usage",
					previous: {
						title: "Creating multiple bundles",
						permalink: "/docs/spack-multi-bundle",
					},
					next: {
						title: "@swc/wasm",
						permalink: "/docs/usage-swc-wasm",
					},
				},
				s = [
					{ value: "Installation", id: "installation", children: [] },
					{ value: "Usage", id: "usage", children: [] },
					{ value: "Watching", id: "watching", children: [] },
					{
						value: "Available Options",
						id: "available-options",
						children: [
							{
								value: "<code>--filename</code>",
								id: "--filename",
								children: [],
							},
							{
								value: "<code>--config-file</code>",
								id: "--config-file",
								children: [],
							},
							{
								value: "<code>--env-name</code>",
								id: "--env-name",
								children: [],
							},
							{
								value: "<code>--no-swcrc</code>",
								id: "--no-swcrc",
								children: [],
							},
							{
								value: "<code>--ignore</code>",
								id: "--ignore",
								children: [],
							},
							{
								value: "<code>--only</code>",
								id: "--only",
								children: [],
							},
							{
								value: "<code>--watch</code>",
								id: "--watch",
								children: [],
							},
							{
								value: "<code>--quiet</code>",
								id: "--quiet",
								children: [],
							},
							{
								value: "<code>--source-maps</code>",
								id: "--source-maps",
								children: [],
							},
							{
								value: "<code>--source-map-target</code>",
								id: "--source-map-target",
								children: [],
							},
							{
								value: "<code>--source-file-name</code>",
								id: "--source-file-name",
								children: [],
							},
							{
								value: "<code>--source-root</code>",
								id: "--source-root",
								children: [],
							},
							{
								value: "<code>--out-file</code>",
								id: "--out-file",
								children: [],
							},
							{
								value: "<code>--out-dir</code>",
								id: "--out-dir",
								children: [],
							},
							{
								value: "<code>--copy-files</code>",
								id: "--copy-files",
								children: [],
							},
							{
								value: "<code>--include-dotfiles</code>",
								id: "--include-dotfiles",
								children: [],
							},
							{
								value: "<code>--config</code>",
								id: "--config",
								children: [],
							},
							{
								value: "<code>--sync</code>",
								id: "--sync",
								children: [],
							},
							{
								value: "<code>--log-watch-compilation</code>",
								id: "--log-watch-compilation",
								children: [],
							},
							{
								value: "<code>--extensions</code>",
								id: "--extensions",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function d(e) {
				var n = e.components,
					t = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, l.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "installation" }, "Installation"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i --save-dev @swc/cli @swc/core\n",
						),
					),
					(0, i.kt)("h2", { id: "usage" }, "Usage"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"# Transpile one file and emit to stdout.\nnpx swc FILE\n\n# Transpile one file and emit to `output.js`.\nnpx swc FILE -o output.js\n\n# Transpile and write output to dir\nnpx swc DIR -d dir\n",
						),
					),
					(0, i.kt)("h2", { id: "watching" }, "Watching"),
					(0, i.kt)(
						"p",
						null,
						"To rebuild automatically on file change, you need to install ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"chokidar",
						),
						" like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i -D chokidar\n\n",
						),
					),
					(0, i.kt)(
						"h2",
						{ id: "available-options" },
						"Available Options",
					),
					(0, i.kt)(
						"h3",
						{ id: "--filename" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--filename",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Filename to use when reading from stdin - this will be used in source-maps, errors etc.",
					),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-f"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc -f input.js\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--config-file" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--config-file",
						),
					),
					(0, i.kt)("p", null, "Path to a .swcrc file to use."),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js --config-file .swcrc\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--env-name" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--env-name",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"The name of the 'env' to use when loading configs and plugins.\nDefaults to the value of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "SWC_ENV"),
						", or else ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"NODE_ENV",
						),
						", or else 'development'.",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js --env-name='test'\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--no-swcrc" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--no-swcrc",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Whether or not to look up .swcrc files",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js --no-swcrc\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--ignore" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--ignore",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"List of glob paths to ",
						(0, i.kt)("strong", { parentName: "p" }, "not"),
						" compile",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src --ignore **/*.test.js\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--only" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "--only"),
					),
					(0, i.kt)(
						"p",
						null,
						"List of glob paths to ",
						(0, i.kt)("strong", { parentName: "p" }, "only"),
						" compile",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src --only **/*.js\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--watch" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--watch",
						),
					),
					(0, i.kt)("p", null, "Recompile files on changes"),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-w"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js -w\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--quiet" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--quiet",
						),
					),
					(0, i.kt)("p", null, "Suppress compilation output"),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-q"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js -q\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--source-maps" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--source-maps",
						),
					),
					(0, i.kt)("p", null, "Source maps"),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-s"),
					),
					(0, i.kt)("p", null, "Values: true|false|inline|both"),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js -s\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--source-map-target" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--source-map-target",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Set ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "file"),
						" on returned source map",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js -s --source-map-target input.map.js\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--source-file-name" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--source-file-name",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Set ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sources[0]",
						),
						" on returned source map",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)("p", null, "// TODO"),
					(0, i.kt)(
						"h3",
						{ id: "--source-root" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--source-root",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"The root from which all sources are relative",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)("p", null, "// TODO"),
					(0, i.kt)(
						"h3",
						{ id: "--out-file" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--out-file",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Compile all input files into a single file",
					),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-o"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js -o output.js\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--out-dir" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--out-dir",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Compile an input directory of modules into an output directory",
					),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-d"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src -d dist\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--copy-files" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--copy-files",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"When compiling a directory copy over non-compilable files",
					),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-D"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src --copy-files\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--include-dotfiles" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--include-dotfiles",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Include dotfiles when compiling and copying non-compilable files",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src --include-dotfiles\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--config" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--config",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Override a config from .swcrc file. e.g. -C module.type=amd -C module.moduleId=hello",
					),
					(0, i.kt)(
						"p",
						null,
						"Alias: ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "-C"),
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src -C module.type=amd\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--sync" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "--sync"),
					),
					(0, i.kt)(
						"p",
						null,
						"Invoke swc synchronously. Useful for debugging.",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc src --sync\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--log-watch-compilation" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--log-watch-compilation",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Log a message when a watched file is successfully compiled.",
					),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx swc input.js --log-watch-compilation\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "--extensions" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"--extensions",
						),
					),
					(0, i.kt)("p", null, "Use specific extensions"),
					(0, i.kt)("p", null, "Example:"),
					(0, i.kt)("p", null, "// TODO"),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
