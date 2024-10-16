"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4958],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => m });
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
			function a(e, t) {
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
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
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
				f = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(r),
						m = o,
						d = f["".concat(s, ".").concat(m)] || f[m] || u[m] || a;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, l));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = f;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var p = 2; p < a; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		4146: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				c = {
					title: "Hotfix: swc v1.1.50",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2020/05/28/swc-1.1.50",
					source: "@site/blog/2020-05-28-swc-1.1.50.md",
					title: "Hotfix: swc v1.1.50",
					description: "Bugfixes",
					date: "2020-05-28T00:00:00.000Z",
					formattedDate: "May 28, 2020",
					tags: [],
					readingTime: 0.19,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.49",
						permalink: "/blog/2020/05/28/swc-1.1.49",
					},
					nextItem: {
						title: "Changelog: swc v1.1.48",
						permalink: "/blog/2020/05/25/swc-1.1.48",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "New reserved_words pass (#805)",
								id: "new-reserved_words-pass-805",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"em",
							{ parentName: "p" },
							"Note: prebuilt binaries for v1.1.49 are replaced with binaries from v1.1.48, to prevent breaking downstream crates.",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "new-reserved_words-pass-805" },
						"New reserved_words pass (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/805",
							},
							"#805",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"I made a serious mistake at ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.1.49"),
						" which makes swc unusable. This patch fixes it.",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
