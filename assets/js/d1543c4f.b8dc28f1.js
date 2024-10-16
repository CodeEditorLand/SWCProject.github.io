"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7737],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => d });
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
			var p = r.createContext({}),
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = l(e.components);
					return r.createElement(
						p.Provider,
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
						p = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						d = i,
						f = m["".concat(p, ".").concat(d)] || m[d] || u[d] || o;
					return n
						? r.createElement(
								f,
								a(a({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(f, a({ ref: t }, s));
				});
			function d(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = n.length,
						a = new Array(o);
					a[0] = m;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : i),
						(a[1] = c);
					for (var l = 2; l < o; l++) a[l] = n[l];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		9244: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				i = n(3366),
				o = (n(7294), n(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.2.88",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2021/09/16/swc-1.2.88",
					source: "@site/blog/2021-09-16-swc-1.2.88.md",
					title: "Changelog: swc v1.2.88",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/189?closed=1",
					date: "2021-09-16T00:00:00.000Z",
					formattedDate: "September 16, 2021",
					tags: [],
					readingTime: 0.59,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.89",
						permalink: "/blog/2021/09/22/swc-1.2.89",
					},
					nextItem: {
						title: "Changelog: swc v1.2.87",
						permalink: "/blog/2021/09/15/swc-1.2.87",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{ value: "minifier", id: "minifier", children: [] },
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript: <code>import =</code> (#2234)",
								id: "typescript-import--2234",
								children: [],
							},
							{
								value: "<code>this</code> in class properties (#2228)",
								id: "this-in-class-properties-2228",
								children: [],
							},
							{
								value: "minifier: <code>RegExp</code>",
								id: "minifier-regexp",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
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
								href: "https://github.com/swc-project/swc/milestone/189?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/189?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)("h3", { id: "minifier" }, "minifier"),
					(0, o.kt)(
						"p",
						null,
						"I ported some more minification rules.",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "typescript-import--2234" },
						"typescript: ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"import =",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2234",
							},
							"#2234",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" miscompiled",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"import polygons = Shapes.Polygons;\nlet sq = new polygons.Square();\n",
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
								href: "https://github.com/swc-project/swc/pull/2249",
							},
							"#2249",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "this-in-class-properties-2228" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "this"),
						" in class properties (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2228",
							},
							"#2228",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previsouly, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" broke code if a class property in a child class uses ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						".",
					),
					(0, o.kt)("p", null, "e.g."),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'export default class extends Wepy {\n  events = {\n    "abc: click": function abcClick() {\n      this.data = 123;\n      console.log("abc");\n    },\n  };\n\n  setData() {\n    this.data = 456;\n  }\n}\n',
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
								href: "https://github.com/swc-project/swc/pull/2249",
							},
							"#2249",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-regexp" },
						"minifier: ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "RegExp"),
					),
					(0, o.kt)(
						"p",
						null,
						"The minifier had a bug related to handling of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "RegExp"),
						", and it could break some codes.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2229",
							},
							"#2229",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
