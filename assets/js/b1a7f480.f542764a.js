"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8737],
	{
		3905: (e, r, t) => {
			t.d(r, { Zo: () => l, kt: () => m });
			var n = t(7294);
			function o(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[r] = t),
					e
				);
			}
			function a(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r)
								.enumerable;
						})),
						t.push.apply(t, n);
				}
				return t;
			}
			function c(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? a(Object(t), !0).forEach(function (r) {
								o(e, r, t[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: a(Object(t)).forEach(function (r) {
									Object.defineProperty(
										e,
										r,
										Object.getOwnPropertyDescriptor(t, r),
									);
								});
				}
				return e;
			}
			function p(e, r) {
				if (null == e) return {};
				var t,
					n,
					o = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(t = a[n]),
							r.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(o[t] = e[t]));
				}
				return o;
			}
			var i = n.createContext({}),
				s = function (e) {
					var r = n.useContext(i),
						t = r;
					return (
						e &&
							(t =
								"function" == typeof e ? e(r) : c(c({}, r), e)),
						t
					);
				},
				l = function (e) {
					var r = s(e.components);
					return n.createElement(
						i.Provider,
						{ value: r },
						e.children,
					);
				},
				f = {
					inlineCode: "code",
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				u = n.forwardRef(function (e, r) {
					var t = e.components,
						o = e.mdxType,
						a = e.originalType,
						i = e.parentName,
						l = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(t),
						m = o,
						g = u["".concat(i, ".").concat(m)] || u[m] || f[m] || a;
					return t
						? n.createElement(
								g,
								c(c({ ref: r }, l), {}, { components: t }),
							)
						: n.createElement(g, c({ ref: r }, l));
				});
			function m(e, r) {
				var t = arguments,
					o = r && r.mdxType;
				if ("string" == typeof e || o) {
					var a = t.length,
						c = new Array(a);
					c[0] = u;
					var p = {};
					for (var i in r) hasOwnProperty.call(r, i) && (p[i] = r[i]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : o),
						(c[1] = p);
					for (var s = 2; s < a; s++) c[s] = t[s];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		8568: (e, r, t) => {
			t.r(r),
				t.d(r, {
					frontMatter: () => p,
					contentTitle: () => i,
					metadata: () => s,
					toc: () => l,
					default: () => u,
				});
			var n = t(7462),
				o = t(3366),
				a = (t(7294), t(3905)),
				c = ["components"],
				p = {
					title: "Changelog: swc v1.1.6",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				s = {
					permalink: "/blog/2019/12/14/swc-1.1.6",
					source: "@site/blog/2019-12-14-swc-1.1.6.md",
					title: "Changelog: swc v1.1.6",
					description: "performance of transforms",
					date: "2019-12-14T00:00:00.000Z",
					formattedDate: "December 14, 2019",
					tags: [],
					readingTime: 0.28,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.7",
						permalink: "/blog/2019/12/21/swc-1.1.7",
					},
					nextItem: {
						title: "Changelog: swc v1.1.5",
						permalink: "/blog/2019/12/11/swc-1.1.5",
					},
				},
				l = [
					{
						value: "performance of transforms",
						id: "performance-of-transforms",
						children: [],
					},
					{
						value: "typescript parser bugfix (#507)",
						id: "typescript-parser-bugfix-507",
						children: [],
					},
				],
				f = { toc: l };
			function u(e) {
				var r = e.components,
					t = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, f, t, { components: r, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "performance-of-transforms" },
						"performance of transforms",
					),
					(0, a.kt)(
						"p",
						null,
						"Overall performance of transform passes are improved, thanks to ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/commit/3ec395ba7519a552d20d8120877fae2f270de887",
							},
							"hygiene optimization",
						),
						". Especially, performance of resolver pass is drastically (~60%) improved.",
					),
					(0, a.kt)(
						"h2",
						{ id: "typescript-parser-bugfix-507" },
						"typescript parser bugfix (",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/507",
							},
							"#507",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"There was a bug which sets target of parser to es3, and it result in a bug that parser fails to parse getter and setter in typescript.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
