"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8424],
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
				s = function (e) {
					var t = l(e.components);
					return n.createElement(
						p.Provider,
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
						p = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						f = o,
						y = m["".concat(p, ".").concat(f)] || m[f] || u[f] || c;
					return r
						? n.createElement(
								y,
								a(a({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(y, a({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						a = new Array(c);
					a[0] = m;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(a[1] = i);
					for (var l = 2; l < c; l++) a[l] = r[l];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		7213: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				a = ["components"],
				i = {
					title: "Changelog: swc v1.1.3",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2019/12/04/swc-1.1.3",
					source: "@site/blog/2019-12-04-swc-1.1.3.md",
					title: "Changelog: swc v1.1.3",
					description: "try catch(#483",
					date: "2019-12-04T00:00:00.000Z",
					formattedDate: "December 4, 2019",
					tags: [],
					readingTime: 0.145,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.4",
						permalink: "/blog/2019/12/09/swc-1.1.4",
					},
					nextItem: {
						title: "Changelog: swc v1.1.2",
						permalink: "/blog/2019/12/02/swc-1.1.2",
					},
				},
				s = [
					{
						value: "try catch(#483",
						id: "try-catch483",
						children: [],
					},
					{
						value: "Typescript enum (#486)",
						id: "typescript-enum-486",
						children: [],
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
						"h2",
						{ id: "try-catch483" },
						"try catch(",
						(0, c.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/483",
							},
							"#483",
						),
					),
					(0, c.kt)(
						"p",
						null,
						(0, c.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles catch parameter properly.",
					),
					(0, c.kt)(
						"h2",
						{ id: "typescript-enum-486" },
						"Typescript enum (",
						(0, c.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/486",
							},
							"#486",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Previously, code generated for typescript enums with initializers was wrong.\nFrom now, valid code is generated.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
