"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8322],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => p, kt: () => m });
			var r = t(7294);
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
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function s(e) {
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
			function l(e, n) {
				if (null == e) return {};
				var t,
					r,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(t = o[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var i = r.createContext({}),
				c = function (e) {
					var n = r.useContext(i),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : s(s({}, n), e)),
						t
					);
				},
				p = function (e) {
					var n = c(e.components);
					return r.createElement(
						i.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				d = r.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						o = e.originalType,
						i = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(t),
						m = a,
						f = d["".concat(i, ".").concat(m)] || d[m] || u[m] || o;
					return t
						? r.createElement(
								f,
								s(s({ ref: n }, p), {}, { components: t }),
							)
						: r.createElement(f, s({ ref: n }, p));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var o = t.length,
						s = new Array(o);
					s[0] = d;
					var l = {};
					for (var i in n) hasOwnProperty.call(n, i) && (l[i] = n[i]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(s[1] = l);
					for (var c = 2; c < o; c++) s[c] = t[c];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		5823: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => l,
					contentTitle: () => i,
					metadata: () => c,
					toc: () => p,
					default: () => d,
				});
			var r = t(7462),
				a = t(3366),
				o = (t(7294), t(3905)),
				s = ["components"],
				l = {
					title: "Changelog: swc v1.1.35",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				c = {
					permalink: "/blog/2020/03/14/swc-1.1.35",
					source: "@site/blog/2020-03-14-swc-1.1.35.md",
					title: "Changelog: swc v1.1.35",
					description: "Span regressions",
					date: "2020-03-14T00:00:00.000Z",
					formattedDate: "March 14, 2020",
					tags: [],
					readingTime: 1.045,
					truncated: !1,
					prevItem: {
						title: "Call for help and roadmap",
						permalink: "/blog/2020/03/16/roadmap-and-call-for-help",
					},
					nextItem: {
						title: "Changelog: swc v1.1.34",
						permalink: "/blog/2020/03/10/swc-1.1.34",
					},
				},
				p = [
					{
						value: "Span regressions",
						id: "span-regressions",
						children: [
							{
								value: "Start of arrow in conditional expression (#712)",
								id: "start-of-arrow-in-conditional-expression-712",
								children: [],
							},
							{
								value: "Decorators on class (#711)",
								id: "decorators-on-class-711",
								children: [],
							},
							{
								value: "Tagged template literals (#714)",
								id: "tagged-template-literals-714",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Ambient context (#715)",
								id: "ambient-context-715",
								children: [],
							},
							{
								value: "async in start of conditional expression (#717)",
								id: "async-in-start-of-conditional-expression-717",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "&quot;inline&quot; source maps",
								id: "inline-source-maps",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var n = e.components,
					t = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "span-regressions" },
						"Span regressions",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc@v.1.1.34",
						),
						" made many changes to the parser, and it also introduced some regressions of span.",
					),
					(0, o.kt)(
						"h3",
						{ id: "start-of-arrow-in-conditional-expression-712" },
						"Start of arrow in conditional expression (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/712",
							},
							"#712",
						),
						")",
					),
					(0, o.kt)("p", null, "The span of the code like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"referrer ? false : ([, specifier]): string => specifier;\n",
						),
					),
					(0, o.kt)("p", null, "is now fixed."),
					(0, o.kt)(
						"h3",
						{ id: "decorators-on-class-711" },
						"Decorators on class (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/711",
							},
							"#711",
						),
						")",
					),
					(0, o.kt)("p", null, "Example code:"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"\n@decorator<string>()\nclass Test {}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "tagged-template-literals-714" },
						"Tagged template literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/714",
							},
							"#714",
						),
						")",
					),
					(0, o.kt)("p", null, "Example code:"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"f<T>``;\n",
						),
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "ambient-context-715" },
						"Ambient context (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/715",
							},
							"#715",
						),
						")",
					),
					(0, o.kt)("p", null, "Example code:"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"declare namespace __event {\n  export class EventInit {\n    constructor({\n      bubbles,\n      cancelable,\n      composed\n    }?: {\n      bubbles?: boolean | undefined;\n      cancelable?: boolean | undefined;\n      composed?: boolean | undefined;\n    });\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "async-in-start-of-conditional-expression-717" },
						"async in start of conditional expression (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/717",
							},
							"#717",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a bug which make ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" reject codes like the below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function functionFlags(async: boolean) {\n  return async ? 1 : 0;\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This is fixed, and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "async"),
						" can be the start of a conditional expression.",
					),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "inline-source-maps" },
						'"inline" source maps',
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc/cli"),
						" handled this, and providing ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"'inline'",
						),
						" to ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc/core",
						),
						" had no effect.\nFrom now, ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc/core",
						),
						" handles it so code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'let output = swc.transformSync("let x = 3;", {\n  sourceMaps: "inline",\n\n  jsc: {\n    parser: {\n      syntax: "ecmascript"\n    },\n    transform: {}\n  }\n});\n\nconsole.log(output.code);\n',
						),
					),
					(0, o.kt)("p", null, "works as expected."),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
