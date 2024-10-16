"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8871],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => f });
			var r = n(7294);
			function a(e, t, n) {
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
			function i(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: i(Object(n)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return r.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						u = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = a,
						h = m["".concat(l, ".").concat(f)] || m[f] || s[f] || i;
					return n
						? r.createElement(
								h,
								o(o({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(h, o({ ref: t }, u));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = n.length,
						o = new Array(i);
					o[0] = m;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(o[1] = c);
					for (var p = 2; p < i; p++) o[p] = n[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		9875: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				i = (n(7294), n(3905)),
				o = ["components"],
				c = {
					title: "Changelog: swc v1.1.30",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/29/swc-1.1.30",
					source: "@site/blog/2020-02-29-swc-1.1.30.md",
					title: "Changelog: swc v1.1.30",
					description: "Bugfix",
					date: "2020-02-29T00:00:00.000Z",
					formattedDate: "February 29, 2020",
					tags: [],
					readingTime: 0.25,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.31",
						permalink: "/blog/2020/03/01/swc-1.1.31",
					},
					nextItem: {
						title: "Changelog: swc v1.1.29",
						permalink: "/blog/2020/02/27/swc-1.1.29",
					},
				},
				u = [
					{
						value: "Bugfix",
						id: "bugfix",
						children: [
							{
								value: "enum with initializer (#694)",
								id: "enum-with-initializer-694",
								children: [],
							},
							{
								value: "Span of assignment pattern (#693)",
								id: "span-of-assignment-pattern-693",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfix" }, "Bugfix"),
					(0, i.kt)(
						"h3",
						{ id: "enum-with-initializer-694" },
						"enum with initializer (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/694",
							},
							"#694",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" worked well with enum without an initilaizer, but enum with initilaizer was broken.\nFrom now on, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits the same output as ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" for enum.",
					),
					(0, i.kt)(
						"h3",
						{ id: "span-of-assignment-pattern-693" },
						"Span of assignment pattern (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/693",
							},
							"#693",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Thanks to ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						", span of an assignment pattern become exact.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
