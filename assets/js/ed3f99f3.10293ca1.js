"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8965],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
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
			function l(e) {
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
			var p = n.createContext({}),
				i = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = i(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
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
						p = e.parentName,
						u = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = i(r),
						f = o,
						y = m["".concat(p, ".").concat(f)] || m[f] || s[f] || a;
					return r
						? n.createElement(
								y,
								l(l({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(y, l({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						l = new Array(a);
					l[0] = m;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(l[1] = c);
					for (var i = 2; i < a; i++) l[i] = r[i];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		9098: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => i,
					toc: () => u,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				l = ["components"],
				c = {
					title: "Changelog: swc v1.2.43",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				i = {
					permalink: "/blog/2020/12/30/swc-1.2.43",
					source: "@site/blog/2020-12-30-swc-1.2.43.md",
					title: "Changelog: swc v1.2.43",
					description: "New platforms (#1244)",
					date: "2020-12-30T00:00:00.000Z",
					formattedDate: "December 30, 2020",
					tags: [],
					readingTime: 0.135,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.44",
						permalink: "/blog/2021/01/11/swc-1.2.44",
					},
					nextItem: {
						title: "Changelog: swc v1.2.42",
						permalink: "/blog/2020/12/29/swc-1.2.42",
					},
				},
				u = [
					{
						value: "New platforms (#1244)",
						id: "new-platforms-1244",
						children: [],
					},
				],
				s = { toc: u };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, l);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "new-platforms-1244" },
						"New platforms (",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1244",
							},
							"#1244",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Thanks to ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)("li", { parentName: "ul" }, "apple silicon"),
						(0, a.kt)("li", { parentName: "ul" }, "linux aarch64"),
						(0, a.kt)("li", { parentName: "ul" }, "linux armv7"),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"android aarch64",
						),
						(0, a.kt)("li", { parentName: "ul" }, "yarn pnp"),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
