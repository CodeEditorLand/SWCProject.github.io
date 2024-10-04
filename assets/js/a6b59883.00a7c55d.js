"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1843],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
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
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						i = e.originalType,
						s = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						f = o,
						h = m["".concat(s, ".").concat(f)] || m[f] || u[f] || i;
					return r
						? n.createElement(
								h,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, a({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						a = new Array(i);
					a[0] = m;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(a[1] = c);
					for (var p = 2; p < i; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4655: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.2.80",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2021/08/20/swc-1.2.80",
					source: "@site/blog/2021-08-20-swc-1.2.80.md",
					title: "Changelog: swc v1.2.80",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/181?closed=1",
					date: "2021-08-20T00:00:00.000Z",
					formattedDate: "August 20, 2021",
					tags: [],
					readingTime: 0.285,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.82",
						permalink: "/blog/2021/08/25/swc-1.2.82",
					},
					nextItem: {
						title: "Changelog: swc v1.2.79",
						permalink: "/blog/2021/08/19/swc-1.2.79",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Support for cpus without aes-ni (#1807)",
								id: "support-for-cpus-without-aes-ni-1807",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/181?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/181?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "support-for-cpus-without-aes-ni-1807" },
						"Support for cpus without aes-ni (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1807",
							},
							"#1807",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"swc used ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "aes-ni"),
						" instructions via compiler optimization to make swc faster, but it turns out that some user uses cpu without ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "aes-ni"),
						".\nSo I turned optimization off.",
					),
					(0, i.kt)(
						"p",
						null,
						"This will make swc slower, but it's still fast.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2109",
							},
							"#2109",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
