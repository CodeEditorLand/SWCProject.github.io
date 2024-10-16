"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3497],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => m });
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
			function i(e, t) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
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
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
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
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = l(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				f = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				s = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						i = e.originalType,
						p = e.parentName,
						u = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						s = l(r),
						m = o,
						d = s["".concat(p, ".").concat(m)] || s[m] || f[m] || i;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						a = new Array(i);
					a[0] = s;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(a[1] = c);
					for (var l = 2; l < i; l++) a[l] = r[l];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			s.displayName = "MDXCreateElement";
		},
		9898: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => u,
					default: () => s,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.1.23 - hotfix",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2020/02/13/swc-1.1.23",
					source: "@site/blog/2020-02-13-swc-1.1.23.md",
					title: "Changelog: swc v1.1.23 - hotfix",
					description: "Hotfix - optimizer",
					date: "2020-02-13T00:00:00.000Z",
					formattedDate: "February 13, 2020",
					tags: [],
					readingTime: 0.125,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.22",
						permalink: "/blog/2020/02/13/swc-1.1.22",
					},
					nextItem: {
						title: "Changelog: swc v1.1.24",
						permalink: "/blog/2020/02/13/swc-1.1.24",
					},
				},
				u = [
					{
						value: "Hotfix - optimizer",
						id: "hotfix---optimizer",
						children: [],
					},
				],
				f = { toc: u };
			function s(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, f, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"h2",
						{ id: "hotfix---optimizer" },
						"Hotfix - optimizer",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						"'s optimizer (added in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "v1.1.22"),
						") previously drops exports, even if it is used. This is clearly wrong, and fixed with ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "v1.1.23"),
						".",
					),
				);
			}
			s.isMDXComponent = !0;
		},
	},
]);
