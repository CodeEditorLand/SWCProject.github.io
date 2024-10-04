"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8295],
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
						f = o,
						h = m["".concat(l, ".").concat(f)] || m[f] || u[f] || c;
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
		433: (e, t, r) => {
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
					title: "Changelog: swc v1.2.66",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2021/07/20/swc-1.2.66",
					source: "@site/blog/2021-07-20-swc-1.2.66.md",
					title: "Changelog: swc v1.2.66",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/169?closed=1",
					date: "2021-07-20T00:00:00.000Z",
					formattedDate: "July 20, 2021",
					tags: [],
					readingTime: 0.235,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.67",
						permalink: "/blog/2021/07/31/swc-1.2.67",
					},
					nextItem: {
						title: "Changelog: swc v1.2.65",
						permalink: "/blog/2021/07/18/swc-1.2.65",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "m1 mac (#1937)",
								id: "m1-mac-1937",
								children: [],
							},
							{
								value: "codegen (#1791)",
								id: "codegen-1791",
								children: [],
							},
							{
								value: "typings (#1923)",
								id: "typings-1923",
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
								href: "https://github.com/swc-project/swc/milestone/169?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/169?closed=1",
						),
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "m1-mac-1937" },
						"m1 mac (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1937",
							},
							"#1937",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						" and by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1939",
							},
							"#1939",
						),
					),
					(0, c.kt)(
						"h3",
						{ id: "codegen-1791" },
						"codegen (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1791",
							},
							"#1791",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Code generation for template literals is fixed.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1936",
							},
							"#1936",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "typings-1923" },
						"typings (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1923",
							},
							"#1923",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"There was a typo in type definitions.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/plylrnsdy",
							},
							"@plylrnsdy",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
