"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6481],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => h });
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
			function a(e, t) {
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
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = p(e.components);
					return r.createElement(
						l.Provider,
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
				f = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(n),
						h = o,
						g = f["".concat(l, ".").concat(h)] || f[h] || u[h] || a;
					return n
						? r.createElement(
								g,
								i(i({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(g, i({ ref: t }, s));
				});
			function h(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = f;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		7029: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => f,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.19",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/07/swc-1.1.19",
					source: "@site/blog/2020-02-07-swc-1.1.19.md",
					title: "Changelog: swc v1.1.19",
					description: "New features",
					date: "2020-02-07T00:00:00.000Z",
					formattedDate: "February 7, 2020",
					tags: [],
					readingTime: 0.42,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.24",
						permalink: "/blog/2020/02/13/swc-1.1.24",
					},
					nextItem: {
						title: "Changelog: swc v1.1.20",
						permalink: "/blog/2020/02/07/swc-1.1.20",
					},
				},
				s = [
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "Optional chaining in es (#619)",
								id: "optional-chaining-in-es-619",
								children: [],
							},
							{
								value: "top-level await (#627)",
								id: "top-level-await-627",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "new-features" }, "New features"),
					(0, a.kt)(
						"h3",
						{ id: "optional-chaining-in-es-619" },
						"Optional chaining in es (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/619",
							},
							"#619",
						),
						")",
					),
					(0, a.kt)("p", null, "Code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"a?.b?.c;\n",
						),
					),
					(0, a.kt)("p", null, "is now possible within ecmascript."),
					(0, a.kt)(
						"p",
						null,
						"As it's stage 3, you need to set an option to use it. See ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/docs/configuring-swc.html#jscparser",
							},
							"the doc",
						),
						" for the option.",
					),
					(0, a.kt)(
						"h3",
						{ id: "top-level-await-627" },
						"top-level await (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/627",
							},
							"#627",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can parse codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"await foo();\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"As it's stage 3, you need to set an option to use it. See ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/docs/configuring-swc.html#jscparser",
							},
							"the doc",
						),
						" for the option. Also, note that you need to target es2017 or higher to use this feature.",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
