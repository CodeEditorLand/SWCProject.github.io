"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4724],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => d });
			var r = n(7294);
			function i(e, t, n) {
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
			function o(e, t) {
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
						? o(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(i[n] = e[n]));
				}
				return i;
			}
			var c = r.createContext({}),
				l = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = l(e.components);
					return r.createElement(
						c.Provider,
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
						i = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						d = i,
						h = m["".concat(c, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = n.length,
						a = new Array(o);
					a[0] = m;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : i),
						(a[1] = s);
					for (var l = 2; l < o; l++) a[l] = n[l];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5522: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				i = n(3366),
				o = (n(7294), n(3905)),
				a = ["components"],
				s = {
					title: "Changelog: swc v1.2.84",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				l = {
					permalink: "/blog/2021/09/01/swc-1.2.84",
					source: "@site/blog/2021-09-01-swc-1.2.84.md",
					title: "Changelog: swc v1.2.84",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/184?closed=1",
					date: "2021-09-01T00:00:00.000Z",
					formattedDate: "September 1, 2021",
					tags: [],
					readingTime: 0.765,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.85",
						permalink: "/blog/2021/09/09/swc-1.2.85",
					},
					nextItem: {
						title: "Changelog: swc v1.2.83",
						permalink: "/blog/2021/08/28/swc-1.2.83",
					},
				},
				p = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>hygiene</code>: Less renaming of variables (#1600)",
								id: "hygiene-less-renaming-of-variables-1600",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Variables in for-in loops (#2164)",
								id: "variables-in-for-in-loops-2164",
								children: [],
							},
							{
								value: "parser: arrow in cond (#2174)",
								id: "parser-arrow-in-cond-2174",
								children: [],
							},
							{
								value: "jsx: <code>&lt;&gt;</code> with single child (#2177)",
								id: "jsx--with-single-child-2177",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, i.Z)(e, a);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/184?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/184?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "hygiene-less-renaming-of-variables-1600" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"hygiene",
						),
						": Less renaming of variables (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1600",
							},
							"#1600",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" uses special system for managing identifiers. The system modifies lots of identifiers, even when it's not required.\nThis is now fixed and swc renames only if required.",
					),
					(0, o.kt)(
						"p",
						null,
						"Implemented by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2193",
							},
							"#2193",
						),
						".",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "variables-in-for-in-loops-2164" },
						"Variables in for-in loops (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2164",
							},
							"#2164",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" dropped some variables declared in for-in loops in async functions, when targeting ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es5"),
						" or lower.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2181",
							},
							"#2181",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-arrow-in-cond-2174" },
						"parser: arrow in cond (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2174",
							},
							"#2174",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" tried to parse the code below as function expression with a typescript type annotation.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const x = {\n  prop: isCorrect ? (fn) => ({}) : (fn) => true,\n};\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2178",
							},
							"#2178",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "jsx--with-single-child-2177" },
						"jsx: ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "<>"),
						" with single child (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2177",
							},
							"#2177",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" did not produce optimal code for",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export var App = function () {\n  return (\n    <>\n      <div>1</div>\n    </>\n  );\n};\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2178",
							},
							"#2178",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
