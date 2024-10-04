"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6185],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => m });
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
			function i(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = p(e.components);
					return n.createElement(
						s.Provider,
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
						i = e.originalType,
						s = e.parentName,
						c = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(r),
						m = a,
						h = d["".concat(s, ".").concat(m)] || d[m] || u[m] || i;
					return r
						? n.createElement(
								h,
								o(o({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(h, o({ ref: t }, c));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = r.length,
						o = new Array(i);
					o[0] = d;
					var l = {};
					for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(o[1] = l);
					for (var p = 2; p < i; p++) o[p] = r[p];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		5714: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => c,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				i = (r(7294), r(3905)),
				o = ["components"],
				l = {
					title: "Changelog: swc v1.2.94",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2021/10/08/swc-1.2.94",
					source: "@site/blog/2021-10-08-swc-1.2.94.md",
					title: "Changelog: swc v1.2.94",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/195?closed=1",
					date: "2021-10-08T00:00:00.000Z",
					formattedDate: "October 8, 2021",
					tags: [],
					readingTime: 1.74,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.95",
						permalink: "/blog/2021/10/09/swc-1.2.95",
					},
					nextItem: {
						title: "Changelog: swc v1.2.93",
						permalink: "/blog/2021/10/03/swc-1.2.93",
					},
				},
				c = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Improved performance",
								id: "improved-performance",
								children: [],
							},
							{
								value: "bundler: Concurrent bundling",
								id: "bundler-concurrent-bundling",
								children: [],
							},
							{
								value: "jsx: Allow directives in any statement",
								id: "jsx-allow-directives-in-any-statement",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "parser: Error for array patterns",
								id: "parser-error-for-array-patterns",
								children: [],
							},
							{
								value: "parser: Error for array expressions",
								id: "parser-error-for-array-expressions",
								children: [],
							},
							{
								value: "minifier: inlining of iife",
								id: "minifier-inlining-of-iife",
								children: [],
							},
							{
								value: "minifier: inlining and shorthand",
								id: "minifier-inlining-and-shorthand",
								children: [],
							},
							{
								value: "minifier: <code>new String</code>",
								id: "minifier-new-string",
								children: [],
							},
							{
								value: "<code>dead_branch_remover</code> bug (#2328)",
								id: "dead_branch_remover-bug-2328",
								children: [],
							},
							{
								value: "bundler: trivial bug",
								id: "bundler-trivial-bug",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/195?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/195?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "improved-performance" },
						"Improved performance",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is now even faster than before.\nIt uses faster ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Mutex"),
						" implementation for global locks, and does not do syscall if it's not required.\nI also removed some useless memory operations like ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "memmove"),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Done by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2329",
							},
							"#2329",
						),
						" and ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2356",
							},
							"#2356",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Additionally, some duplicated passes are removed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2347",
							},
							"#2347",
						),
						" and ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2367",
							},
							"#2367",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-concurrent-bundling" },
						"bundler: Concurrent bundling",
					),
					(0, i.kt)(
						"p",
						null,
						"Although the bundler of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is designed to be run in parallel, ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"concurrent",
						),
						" mode was not enabled because I was busy working on other bugs.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2356",
							},
							"#2356",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "jsx-allow-directives-in-any-statement" },
						"jsx: Allow directives in any statement",
					),
					(0, i.kt)(
						"p",
						null,
						"This is required to use ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mdx-loader",
						),
						" with ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2377",
							},
							"#2377",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "parser-error-for-array-patterns" },
						"parser: Error for array patterns",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" allowed",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const [a b] = arr\n",
						),
					),
					(0, i.kt)("p", null, "but now it's an error."),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2365",
							},
							"#2365",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "parser-error-for-array-expressions" },
						"parser: Error for array expressions",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" allowed",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const arr = [a b]\n",
						),
					),
					(0, i.kt)("p", null, "but now it's an error."),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2366",
							},
							"#2366",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-inlining-of-iife" },
						"minifier: inlining of iife",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" replaces parameters of an IIFE if the corresponding argument is an identifier or a literal. But replacing identifier can cause problems, so ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now only replaces with literals.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2355",
							},
							"#2355",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-inlining-and-shorthand" },
						"minifier: inlining and shorthand",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, if the minifier of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" decides to inline something which is used only once in a shorthand, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" revmoed the node without modifying the usage part in a shorthand property.",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-new-string" },
						"minifier: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"new String",
						),
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had some assumptions about code, just like the old version of the google closure compiler. The assumption was that a property of string is never modified. But the rule does not fit real-world codes, and the assumption broke some code.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2341",
							},
							"#2341",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "dead_branch_remover-bug-2328" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"dead_branch_remover",
						),
						" bug (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2328",
							},
							"#2328",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'switch (true) {\n  case true:\n    console.error("true (expected branch)");\n    break;\n\n  case false:\n    console.error("false (dead branch)");\n    break;\n\n  default:\n    console.error("default (dead branch)");\n    break;\n}\n',
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
								href: "https://github.com/mischnic",
							},
							"@mischnic",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2373",
							},
							"#2373",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-trivial-bug" },
						"bundler: trivial bug",
					),
					(0, i.kt)(
						"p",
						null,
						"The code for handling configs had a trivial bug.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/amoshydra",
							},
							"@amoshydra",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2335",
							},
							"#2335",
						),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
