"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2376],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => f });
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
			function s(e) {
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
			function c(e, t) {
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
			var a = r.createContext({}),
				p = function (e) {
					var t = r.useContext(a),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
					return r.createElement(
						a.Provider,
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
						a = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = i,
						h = m["".concat(a, ".").concat(f)] || m[f] || u[f] || o;
					return n
						? r.createElement(
								h,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, s({ ref: t }, l));
				});
			function f(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = n.length,
						s = new Array(o);
					s[0] = m;
					var c = {};
					for (var a in t) hasOwnProperty.call(t, a) && (c[a] = t[a]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : i),
						(s[1] = c);
					for (var p = 2; p < o; p++) s[p] = n[p];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		5081: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => a,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				i = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				c = {
					title: "Changelog: swc v1.2.72",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				a = void 0,
				p = {
					permalink: "/blog/2021/08/04/swc-1.2.72",
					source: "@site/blog/2021-08-04-swc-1.2.72.md",
					title: "Changelog: swc v1.2.72",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/171?closed=1",
					date: "2021-08-04T00:00:00.000Z",
					formattedDate: "August 4, 2021",
					tags: [],
					readingTime: 0.43,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.75",
						permalink: "/blog/2021/08/08/swc-1.2.75",
					},
					nextItem: {
						title: "Changelog: swc v1.2.73",
						permalink: "/blog/2021/08/04/swc-1.2.73",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "codegen when minify = true (#1986)",
								id: "codegen-when-minify--true-1986",
								children: [],
							},
							{
								value: "Minifier improvements",
								id: "minifier-improvements",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Using minification with transform (#1989)",
								id: "using-minification-with-transform-1989",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, i.Z)(e, s);
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
								href: "https://github.com/swc-project/swc/milestone/171?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/171?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "codegen-when-minify--true-1986" },
						"codegen when minify = true (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1986",
							},
							"#1986",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The code generator got lots of patches and now it emits optimal output for mant test cases.\n(It's tested with test262 test suite)",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1990",
							},
							"#1990",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-improvements" },
						"Minifier improvements",
					),
					(0, o.kt)(
						"p",
						null,
						"This version includes some more rules for compressing AST nodes.",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "using-minification-with-transform-1989" },
						"Using minification with transform (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1989",
							},
							"#1989",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previous version did not support using the minifier with ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"transform*",
						),
						" apis.\nThis is a bug and it's now fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1990",
							},
							"#1990",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
