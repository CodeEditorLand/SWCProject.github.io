"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2198],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => m });
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
			function i(e) {
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
			function s(e, t) {
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
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = p(e.components);
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(r),
						m = a,
						h = d["".concat(c, ".").concat(m)] || d[m] || u[m] || o;
					return r
						? n.createElement(
								h,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, i({ ref: t }, l));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : a),
						(i[1] = s);
					for (var p = 2; p < o; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		2022: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.2.48",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/02/22/swc-1.2.48",
					source: "@site/blog/2021-02-22-swc-1.2.48.md",
					title: "Changelog: swc v1.2.48",
					description: "Bugfixes",
					date: "2021-02-22T00:00:00.000Z",
					formattedDate: "February 22, 2021",
					tags: [],
					readingTime: 1.39,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.50",
						permalink: "/blog/2021/03/03/swc-1.2.50",
					},
					nextItem: {
						title: "Changelog: swc v1.2.47",
						permalink: "/blog/2021/01/31/swc-1.2.47",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Parsing of generics (#1405)",
								id: "parsing-of-generics-1405",
								children: [],
							},
							{
								value: "<code>await (await foo)()</code> (#1395)",
								id: "await-await-foo-1395",
								children: [],
							},
							{
								value: "Catch parameters (#1413)",
								id: "catch-parameters-1413",
								children: [],
							},
						],
					},
					{
						value: "Bundler bugfixes",
						id: "bundler-bugfixes",
						children: [
							{
								value: "Correct handling of export defaults (#1373)",
								id: "correct-handling-of-export-defaults-1373",
								children: [],
							},
						],
					},
					{
						value: "Performacne improvements",
						id: "performacne-improvements",
						children: [
							{
								value: "Parser performance improvement (#1411)",
								id: "parser-performance-improvement-1411",
								children: [],
							},
						],
					},
					{ value: "New features", id: "new-features", children: [] },
					{
						value: "New jsx transforms (#1408)",
						id: "new-jsx-transforms-1408",
						children: [
							{
								value: "preset-env with custom config path (#1374)",
								id: "preset-env-with-custom-config-path-1374",
								children: [],
							},
						],
					},
					{
						value: "Misc",
						id: "misc",
						children: [
							{
								value: "Reduction of binary size (#1418)",
								id: "reduction-of-binary-size-1418",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "parsing-of-generics-1405" },
						"Parsing of generics (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1405",
							},
							"#1405",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The parser of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" failed to parse below code if ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsx"),
						" is enabled.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo<P extends RouteParams = RP, S extends State = RS>(\n  name: string,\n  path: string,\n  ...middleware: RouterMiddleware<P, S>[]\n): Router<P extends RP ? P : P & RP, S extends RS ? S : S & RS>;\n{\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This is reported by a deno team member via discord and now it's fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "await-await-foo-1395" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"await (await foo)()",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1395",
							},
							"#1395",
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
						" now doesn't break code like below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"await(await foo)();\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "catch-parameters-1413" },
						"Catch parameters (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1413",
							},
							"#1413",
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
						" previously miscompiled code like below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"var e = 1;\ntry {\n  throw 2;\n} catch {\n  console.log(e);\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This was the case because the ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" passs didn't do caclulated renaming operations while handling a catch clause.\nIt's now fixed.",
					),
					(0, o.kt)(
						"h2",
						{ id: "bundler-bugfixes" },
						"Bundler bugfixes",
					),
					(0, o.kt)(
						"h3",
						{ id: "correct-handling-of-export-defaults-1373" },
						"Correct handling of export defaults (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1373",
							},
							"#1373",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the bundler miscompiled some export-",
						(0, o.kt)("inlineCode", { parentName: "p" }, "default"),
						"-ed functions if it depends on hoisting.",
					),
					(0, o.kt)("p", null, "Affected code looks like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import log from "./log.js";\n\ncli();\n\nexport default async function cli() {\n  log("It works!");\n}\n',
						),
					),
					(0, o.kt)("p", null, "but it's now fixed."),
					(0, o.kt)(
						"h2",
						{ id: "performacne-improvements" },
						"Performacne improvements",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-performance-improvement-1411" },
						"Parser performance improvement (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1411",
							},
							"#1411",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This pr was intended to reduce wasted memry space and it resulted in 10% performance boost of the parser.",
					),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h2",
						{ id: "new-jsx-transforms-1408" },
						"New jsx transforms (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1408",
							},
							"#1408",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Config api is almost identical with the one of babel.",
					),
					(0, o.kt)(
						"h3",
						{ id: "preset-env-with-custom-config-path-1374" },
						"preset-env with custom config path (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1374",
							},
							"#1374",
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
								href: "https://github.com/mcnicholls",
							},
							"@mcnicholls",
						),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports using ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							".browserlistrc",
						),
						" or ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						" in any path for determining environment.",
					),
					(0, o.kt)(
						"p",
						null,
						"See ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc.rs/docs/preset-env#path",
							},
							"docs",
						),
						" for more details.",
					),
					(0, o.kt)("h2", { id: "misc" }, "Misc"),
					(0, o.kt)(
						"h3",
						{ id: "reduction-of-binary-size-1418" },
						"Reduction of binary size (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1418",
							},
							"#1418",
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
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", the binary size of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" is reduced.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
