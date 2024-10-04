"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3019],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = p(e.components);
					return n.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(r),
						f = o,
						h = u["".concat(l, ".").concat(f)] || u[f] || m[f] || i;
					return r
						? n.createElement(
								h,
								a(a({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(h, a({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						a = new Array(i);
					a[0] = u;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(a[1] = c);
					for (var p = 2; p < i; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		7995: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.2.99",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/10/18/swc-1.2.99",
					source: "@site/blog/2021-10-18-swc-1.2.99.md",
					title: "Changelog: swc v1.2.99",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/200?closed=1",
					date: "2021-10-18T00:00:00.000Z",
					formattedDate: "October 18, 2021",
					tags: [],
					readingTime: 0.285,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.100",
						permalink: "/blog/2021/10/19/swc-1.2.100",
					},
					nextItem: {
						title: "Changelog: swc v1.2.98",
						permalink: "/blog/2021/10/16/swc-1.2.98",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Performance",
								id: "performance",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "minifier: React hooks",
								id: "minifier-react-hooks",
								children: [],
							},
							{
								value: "minifier: backtick",
								id: "minifier-backtick",
								children: [],
							},
						],
					},
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/200?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/200?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)("h3", { id: "performance" }, "Performance"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							(0, i.kt)(
								"p",
								{ parentName: "li" },
								(0, i.kt)(
									"a",
									{
										parentName: "p",
										href: "https://github.com/swc-project/swc/pull/2442",
									},
									"#2442",
								),
								" removed operations with exponential time complexity.",
							),
						),
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							(0, i.kt)(
								"p",
								{ parentName: "li" },
								(0, i.kt)(
									"a",
									{
										parentName: "p",
										href: "https://github.com/swc-project/swc/pull/2449",
									},
									"#2449",
								),
								" made transforms parallel.",
							),
						),
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "minifier-react-hooks" },
						"minifier: React hooks",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the minifier could break some react hooks.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2450",
							},
							"#2450",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-backtick" },
						"minifier: backtick",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the minifier modified metadata of string wrongly.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2453",
							},
							"#2453",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
