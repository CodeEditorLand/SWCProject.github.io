"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4393],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => f });
			var r = n(7294);
			function o(e, t, n) {
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
			function a(e, t) {
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
			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var p = r.createContext({}),
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = l(e.components);
					return r.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						f = o,
						y = m["".concat(p, ".").concat(f)] || m[f] || u[f] || a;
					return n
						? r.createElement(
								y,
								c(c({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(y, c({ ref: t }, s));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = m;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var l = 2; l < a; l++) c[l] = n[l];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		9174: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.1",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2019/12/01/swc-1.1.1",
					source: "@site/blog/2019-12-01-swc-1.1.1.md",
					title: "Changelog: swc v1.1.1",
					description: "TypeScript enum",
					date: "2019-12-01T00:00:00.000Z",
					formattedDate: "December 1, 2019",
					tags: [],
					readingTime: 0.24,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.2",
						permalink: "/blog/2019/12/02/swc-1.1.2",
					},
					nextItem: {
						title: "Announcing swc v1.1.0",
						permalink: "/blog/2019/11/30/announcing-swc-1.1.0",
					},
				},
				s = [
					{
						value: "TypeScript enum",
						id: "typescript-enum",
						children: [],
					},
					{
						value: "jsonify (#409)",
						id: "jsonify-409",
						children: [],
					},
				],
				u = { toc: s };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "typescript-enum" },
						"TypeScript enum",
					),
					(0, a.kt)(
						"p",
						null,
						"There was a bug related to typescript enum. I guess many compilation errors came from this.",
					),
					(0, a.kt)(
						"p",
						null,
						"From now, typescript enums work exactly same as enums compiled with babel.",
					),
					(0, a.kt)(
						"h2",
						{ id: "jsonify-409" },
						"jsonify (",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/409",
							},
							"#409",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This optimization technique make loading script faster. This is port of ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/nd-02110114/babel-plugin-object-to-json-parse",
							},
							"babel-plugin-object-to-json-parse",
						),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"See ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jsctransformoptimizerjsonify",
							},
							"documentation",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
