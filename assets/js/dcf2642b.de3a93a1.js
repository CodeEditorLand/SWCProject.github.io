"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[891],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => h });
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
			function a(e) {
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
			function i(e, t) {
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
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						h = o,
						f = m["".concat(l, ".").concat(h)] || m[h] || u[h] || c;
					return r
						? n.createElement(
								f,
								a(a({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(f, a({ ref: t }, s));
				});
			function h(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						a = new Array(c);
					a[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(a[1] = i);
					for (var p = 2; p < c; p++) a[p] = r[p];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4716: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.2.105",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/10/28/swc-1.2.105",
					source: "@site/blog/2021-10-28-swc-1.2.105.md",
					title: "Changelog: swc v1.2.105",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/205?closed=1",
					date: "2021-10-28T00:00:00.000Z",
					formattedDate: "October 28, 2021",
					tags: [],
					readingTime: 0.32,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.106",
						permalink: "/blog/2021/10/30/swc-1.2.106",
					},
					nextItem: {
						title: "Changelog: swc v1.2.104",
						permalink: "/blog/2021/10/27/swc-1.2.104",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "typescript: ergonomic branch check",
								id: "typescript-ergonomic-branch-check",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "name mangler",
								id: "name-mangler",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
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
								href: "https://github.com/swc-project/swc/milestone/205?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/205?closed=1",
						),
					),
					(0, c.kt)(
						"p",
						null,
						"This version is published because ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "p" },
							"v1.2.104",
						),
						" is not installable.",
					),
					(0, c.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, c.kt)(
						"h3",
						{ id: "typescript-ergonomic-branch-check" },
						"typescript: ergonomic branch check",
					),
					(0, c.kt)(
						"p",
						null,
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now supports ergonomic branch checks for typescript.",
					),
					(0, c.kt)(
						"p",
						null,
						"Enabled by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						" and by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2562",
							},
							"#2562",
						),
						".",
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)("h3", { id: "name-mangler" }, "name mangler"),
					(0, c.kt)(
						"p",
						null,
						"Previously the name mangler treated a catch clause as a scope, but it's wrong thing to do.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2557",
							},
							"#2557",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
