"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6385],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => d });
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
			function i(e, t) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: i(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var s = r.createContext({}),
				c = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(
						s.Provider,
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
						o = e.mdxType,
						i = e.originalType,
						s = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = o,
						h = m["".concat(s, ".").concat(d)] || m[d] || u[d] || i;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = n.length,
						a = new Array(i);
					a[0] = m;
					var l = {};
					for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(a[1] = l);
					for (var c = 2; c < i; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		9516: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				i = (n(7294), n(3905)),
				a = ["components"],
				l = {
					title: "Changelog: swc v1.2.78",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2021/08/16/swc-1.2.78",
					source: "@site/blog/2021-08-16-swc-1.2.78.md",
					title: "Changelog: swc v1.2.78",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/179?closed=1",
					date: "2021-08-16T00:00:00.000Z",
					formattedDate: "August 16, 2021",
					tags: [],
					readingTime: 1.375,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.79",
						permalink: "/blog/2021/08/19/swc-1.2.79",
					},
					nextItem: {
						title: "Changelog: swc v1.2.77",
						permalink: "/blog/2021/08/13/swc-1.2.77",
					},
				},
				p = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Performance",
								id: "performance",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Mangling of private properties (#2086)",
								id: "mangling-of-private-properties-2086",
								children: [],
							},
							{
								value: "<code>function</code> as a property name (#2075)",
								id: "function-as-a-property-name-2075",
								children: [],
							},
							{
								value: "Type definitions (#1947)",
								id: "type-definitions-1947",
								children: [],
							},
							{
								value: "bundler: Stack overflow (#1963)",
								id: "bundler-stack-overflow-1963",
								children: [],
							},
							{
								value: "minifier bugs (#2072, #2078)",
								id: "minifier-bugs-2072-2078",
								children: [],
							},
							{
								value: "<code>inline_globals</code> (#1294)",
								id: "inline_globals-1294",
								children: [],
							},
							{
								value: "bundler: <code>browser</code>",
								id: "bundler-browser",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/179?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/179?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)("h3", { id: "performance" }, "Performance"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"Now swc uses faster hashing algorithms in various places. ((",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/swc-project/swc/pull/2073",
								},
								"#2073",
							),
							"))",
						),
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "mangling-of-private-properties-2086" },
						"Mangling of private properties (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2086",
							},
							"#2086",
						),
						")",
					),
					(0, i.kt)(
						"h3",
						{ id: "function-as-a-property-name-2075" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"function",
						),
						" as a property name (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2075",
							},
							"#2075",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, swc fails to parse if ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "jsx"),
						" is enabled and ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"function",
						),
						" is used as a property key in jsx experssions.",
					),
					(0, i.kt)("p", null, "It broke code like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const x = <div onclick={(e) => ({ function: 123 })}></div>;\n",
						),
					),
					(0, i.kt)("p", null, "or"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const x = <div onclick={{ function: 123 }}></div>;\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2076",
							},
							"#2076",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "type-definitions-1947" },
						"Type definitions (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1947",
							},
							"#1947",
						),
						")",
					),
					(0, i.kt)("p", null, "Typings for swc api is improved."),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2077",
							},
							"#2077",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-stack-overflow-1963" },
						"bundler: Stack overflow (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1963",
							},
							"#1963",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously bundler wrongly recursed into some functions and it resulted in a stack overflow.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2080",
							},
							"#2080",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-bugs-2072-2078" },
						"minifier bugs (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2072",
							},
							"#2072",
						),
						", ",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2078",
							},
							"#2078",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsouly the minifier could break some valid programs, like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"let rerenderQueue = [1];\nlet queue;\n\nwhile (rerenderQueue.length > 0) {\n  queue = rerenderQueue.sort();\n  rerenderQueue = [];\n  queue.forEach((c) => console.log(c));\n}\n",
						),
					),
					(0, i.kt)("p", null, "(#2708)"),
					(0, i.kt)("p", null, "or"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'function cost(oldItem, newItem) {\n  if (newItem.val === oldItem.val) {\n    return 0;\n  }\n  if (typeof oldItem.val === "object" && typeof newItem.val === "object") {\n    if (oldItem.key === undefined || newItem.key === undefined) {\n      return 1;\n    }\n    if (oldItem.key === newItem.key) {\n      return 0;\n    }\n  }\n  return 1;\n}\n',
						),
					),
					(0, i.kt)("p", null, "(#2072)"),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2058",
							},
							"#2058",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "inline_globals-1294" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"inline_globals",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1294",
							},
							"#1294",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsouly, ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"__DEBUG__",
						),
						" in",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'var __DEBUG__ = "hi";\nconsole.log(__DEBUG__);\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"was replaced with the value declared in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						", but it is wrong because local declarations should have higher priorities than global config.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2058",
							},
							"#2058",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-browser" },
						"bundler: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"browser",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"The bundler of swc now supports using object for ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "browser"),
						" in ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"package.json",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2060",
							},
							"#2060",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
