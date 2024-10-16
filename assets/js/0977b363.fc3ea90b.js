"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2947],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => m });
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
			function c(e) {
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
			function i(e, t) {
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
								"function" == typeof e ? e(t) : c(c({}, t), e)),
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
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(n),
						m = o,
						g = f["".concat(l, ".").concat(m)] || f[m] || u[m] || a;
					return n
						? r.createElement(
								g,
								c(c({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(g, c({ ref: t }, s));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = f;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var p = 2; p < a; p++) c[p] = n[p];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		2523: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => f,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.27",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/20/swc-1.1.27",
					source: "@site/blog/2020-02-20-swc-1.1.27.md",
					title: "Changelog: swc v1.1.27",
					description: "Bugfix",
					date: "2020-02-20T00:00:00.000Z",
					formattedDate: "February 20, 2020",
					tags: [],
					readingTime: 0.44,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.28",
						permalink: "/blog/2020/02/22/swc-1.1.28",
					},
					nextItem: {
						title: "Changelog: swc v1.1.26",
						permalink: "/blog/2020/02/19/swc-1.1.26",
					},
				},
				s = [
					{
						value: "Bugfix",
						id: "bugfix",
						children: [
							{
								value: "subscripts with a new.target (#675)",
								id: "subscripts-with-a-newtarget-675",
								children: [],
							},
							{
								value: "nested loop (#682)",
								id: "nested-loop-682",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					n = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfix" }, "Bugfix"),
					(0, a.kt)(
						"h3",
						{ id: "subscripts-with-a-newtarget-675" },
						"subscripts with a new.target (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/675",
							},
							"#675",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"From now on, swc can correcrly parse the codes like",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"Object.setPrototypeOf(this, new.target.prototype);\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "nested-loop-682" },
						"nested loop (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/682",
							},
							"#682",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"block_scoping pass of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a bug. Ut's fixed and nested loops work correctly.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function foo(parts) {\n  let match = null;\n\n  for (let i = 1; i >= 0; i--) {\n    for (let j = 0; j >= 0; j--) {\n      match = parts[i][j];\n\n      if (match) {\n        break;\n      }\n    }\n\n    if (match) {\n      break;\n    }\n  }\n\n  return match;\n}\n\nfoo();\n",
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
