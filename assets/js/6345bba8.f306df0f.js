"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[57],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
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
			function c(e) {
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
			function i(e, t) {
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
			var l = n.createContext({}),
				s = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = s(e.components);
					return n.createElement(
						l.Provider,
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
						a = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = s(r),
						f = o,
						h = m["".concat(l, ".").concat(f)] || m[f] || u[f] || a;
					return r
						? n.createElement(
								h,
								c(c({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(h, c({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var s = 2; s < a; s++) c[s] = r[s];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		5651: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => p,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.2.70",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				s = {
					permalink: "/blog/2021/08/01/swc-1.2.70",
					source: "@site/blog/2021-08-01-swc-1.2.70.md",
					title: "Changelog: swc v1.2.70",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/172?closed=1",
					date: "2021-08-01T00:00:00.000Z",
					formattedDate: "August 1, 2021",
					tags: [],
					readingTime: 0.44,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.71",
						permalink: "/blog/2021/08/02/swc-1.2.71",
					},
					nextItem: {
						title: "Changelog: swc v1.2.67",
						permalink: "/blog/2021/07/31/swc-1.2.67",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Exception on zero-arg call in ternary (#1984)",
								id: "exception-on-zero-arg-call-in-ternary-1984",
								children: [],
							},
							{
								value: "Exception on wasm (#1982)",
								id: "exception-on-wasm-1982",
								children: [],
							},
							{
								value: "name mangler (#1983)",
								id: "name-mangler-1983",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/172?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/172?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"p",
						null,
						"This version is published to fix serious problems of minifier.",
					),
					(0, a.kt)(
						"h3",
						{ id: "exception-on-zero-arg-call-in-ternary-1984" },
						"Exception on zero-arg call in ternary (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1984",
							},
							"#1984",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Argument count is now properly checked.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1985",
							},
							"#1985",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "exception-on-wasm-1982" },
						"Exception on wasm (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1982",
							},
							"#1982",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc printed logs related to timings. But ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "wasm"),
						" does not support time api, so calls to it panics.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1985",
							},
							"#1985",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "name-mangler-1983" },
						"name mangler (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1983",
							},
							"#1983",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Because of the way used to test compressors, a serious bug of mangler were not detected.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1985",
							},
							"#1985",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
