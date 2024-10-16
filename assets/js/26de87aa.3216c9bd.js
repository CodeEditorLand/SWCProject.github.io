"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7393],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => d, kt: () => m });
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
			function i(e) {
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
			function c(e, n) {
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
			var l = r.createContext({}),
				p = function (e) {
					var n = r.useContext(l),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : i(i({}, n), e)),
						t
					);
				},
				d = function (e) {
					var n = p(e.components);
					return r.createElement(
						l.Provider,
						{ value: n },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				u = r.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						d = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(t),
						m = a,
						f = u["".concat(l, ".").concat(m)] || u[m] || s[m] || o;
					return t
						? r.createElement(
								f,
								i(i({ ref: n }, d), {}, { components: t }),
							)
						: r.createElement(f, i({ ref: n }, d));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var o = t.length,
						i = new Array(o);
					i[0] = u;
					var c = {};
					for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(i[1] = c);
					for (var p = 2; p < o; p++) i[p] = t[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		8064: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => d,
					default: () => u,
				});
			var r = t(7462),
				a = t(3366),
				o = (t(7294), t(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.25",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/17/swc-1.1.25",
					source: "@site/blog/2020-02-17-swc-1.1.25.md",
					title: "Changelog: swc v1.1.25",
					description: "Reduced dependencies",
					date: "2020-02-17T00:00:00.000Z",
					formattedDate: "February 17, 2020",
					tags: [],
					readingTime: 0.73,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.26",
						permalink: "/blog/2020/02/19/swc-1.1.26",
					},
					nextItem: {
						title: "Why is swc fast?",
						permalink: "/blog/2020/02/16/why-is-swc-fast",
					},
				},
				d = [
					{
						value: "Reduced dependencies",
						id: "reduced-dependencies",
						children: [],
					},
					{
						value: "Removed random panic (#672)",
						id: "removed-random-panic-672",
						children: [],
					},
					{
						value: "Fixed source map of async generator (#669)",
						id: "fixed-source-map-of-async-generator-669",
						children: [],
					},
				],
				s = { toc: d };
			function u(e) {
				var n = e.components,
					t = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "reduced-dependencies" },
						"Reduced dependencies",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							(0, o.kt)(
								"inlineCode",
								{ parentName: "li" },
								"npmlog",
							),
							" is replaced with ",
							(0, o.kt)(
								"inlineCode",
								{ parentName: "li" },
								"progress",
							),
						),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							(0, o.kt)(
								"inlineCode",
								{ parentName: "li" },
								"request",
							),
							" is replaced with ",
							(0, o.kt)(
								"inlineCode",
								{ parentName: "li" },
								"node-fetch",
							),
						),
					),
					(0, o.kt)("p", null, "The tree of dependency is now"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre" },
							"@swc/core@1.1.25 /Users/kdy1/projects/node-swc\n\u251c\u2500\u252c mkdirp@0.5.1\n\u2502 \u2514\u2500\u2500 minimist@0.0.8\n\u251c\u2500\u2500 node-fetch@2.6.0\n\u251c\u2500\u2500 progress@2.0.3\n\u2514\u2500\u252c true-case-path@1.0.3\n  \u2514\u2500\u252c glob@7.1.6\n    \u251c\u2500\u2500 fs.realpath@1.0.0\n    \u251c\u2500\u252c inflight@1.0.6\n    \u2502 \u251c\u2500\u2500 once@1.4.0 deduped\n    \u2502 \u2514\u2500\u2500 wrappy@1.0.2\n    \u251c\u2500\u2500 inherits@2.0.4\n    \u251c\u2500\u252c minimatch@3.0.4\n    \u2502 \u2514\u2500\u252c brace-expansion@1.1.11\n    \u2502   \u251c\u2500\u2500 balanced-match@1.0.0\n    \u2502   \u2514\u2500\u2500 concat-map@0.0.1\n    \u251c\u2500\u252c once@1.4.0\n    \u2502 \u2514\u2500\u2500 wrappy@1.0.2 deduped\n    \u2514\u2500\u2500 path-is-absolute@1.0.1\n\n",
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "removed-random-panic-672" },
						"Removed random panic (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/672",
							},
							"#672",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" internally maintain positions information in a struct named SourceMap.\nPreviously, it had a bug that different files have overlapping spans when ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"new_source_file",
						),
						" is called concurrently.\nIt was fixed by introducing an atomic variable.",
					),
					(0, o.kt)(
						"h2",
						{ id: "fixed-source-map-of-async-generator-669" },
						"Fixed source map of async generator (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/669",
							},
							"#669",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" previously had a bug which generated invalid source map for the code below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function* foo() {\n  try {\n    return yield call();\n  } finally {\n  }\n}\n",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
