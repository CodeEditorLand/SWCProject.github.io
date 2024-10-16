"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8852],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => d });
			var n = r(7294);
			function o(e, t, r) {
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
			function c(e, t) {
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
						? c(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: c(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function a(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							c = Object.keys(e);
						for (n = 0; n < c.length; n++)
							(r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(e);
					for (n = 0; n < c.length; n++)
						(r = c[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var p = n.createContext({}),
				l = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = l(e.components);
					return n.createElement(
						p.Provider,
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
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						c = e.originalType,
						p = e.parentName,
						s = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						d = o,
						f = m["".concat(p, ".").concat(d)] || m[d] || u[d] || c;
					return r
						? n.createElement(
								f,
								i(i({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(f, i({ ref: t }, s));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						i = new Array(c);
					i[0] = m;
					var a = {};
					for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : o),
						(i[1] = a);
					for (var l = 2; l < c; l++) i[l] = r[l];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		5028: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				i = ["components"],
				a = {
					title: "Changelog: swc v1.2.95",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2021/10/09/swc-1.2.95",
					source: "@site/blog/2021-10-09-swc-1.2.95.md",
					title: "Changelog: swc v1.2.95",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/196?closed=1",
					date: "2021-10-09T00:00:00.000Z",
					formattedDate: "October 9, 2021",
					tags: [],
					readingTime: 0.29,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.96",
						permalink: "/blog/2021/10/14/swc-1.2.96",
					},
					nextItem: {
						title: "Changelog: swc v1.2.94",
						permalink: "/blog/2021/10/08/swc-1.2.94",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>minify</code>: <code>sourceMap</code>",
								id: "minify-sourcemap",
								children: [],
							},
							{
								value: "<code>codgen</code>: <code>import</code> sourcemap",
								id: "codgen-import-sourcemap",
								children: [],
							},
							{
								value: "<code>typescript</code>: React",
								id: "typescript-react",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, c.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/196?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/196?closed=1",
						),
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "minify-sourcemap" },
						(0, c.kt)("inlineCode", { parentName: "h3" }, "minify"),
						": ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"sourceMap",
						),
					),
					(0, c.kt)(
						"p",
						null,
						"Now ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" supports speicifying object in ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sourceMap",
						),
						", just like terser.",
					),
					(0, c.kt)(
						"p",
						null,
						"Implemented by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2380",
							},
							"#2380",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "codgen-import-sourcemap" },
						(0, c.kt)("inlineCode", { parentName: "h3" }, "codgen"),
						": ",
						(0, c.kt)("inlineCode", { parentName: "h3" }, "import"),
						" sourcemap",
					),
					(0, c.kt)(
						"p",
						null,
						"Now ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" generates source map entry for ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "import"),
						" tokens.",
					),
					(0, c.kt)(
						"p",
						null,
						"Implemented by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2383",
							},
							"#2383",
						),
					),
					(0, c.kt)(
						"h3",
						{ id: "typescript-react" },
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"typescript",
						),
						": React",
					),
					(0, c.kt)(
						"p",
						null,
						"Previous version introduced a regression, and it's now fixed.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2383",
							},
							"#2383",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
