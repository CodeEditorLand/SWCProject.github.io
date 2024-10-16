"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3127],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => b });
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
			function i(e) {
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
			function c(e, t) {
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
			var l = r.createContext({}),
				u = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = u(e.components);
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
				f = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = u(n),
						b = o,
						g = f["".concat(l, ".").concat(b)] || f[b] || s[b] || a;
					return n
						? r.createElement(
								g,
								i(i({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(g, i({ ref: t }, p));
				});
			function b(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = f;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var u = 2; u < a; u++) i[u] = n[u];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		2752: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => u,
					toc: () => p,
					default: () => f,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.16",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				u = {
					permalink: "/blog/2020/01/26/swc-1.1.16",
					source: "@site/blog/2020-01-26-swc-1.1.16.md",
					title: "Changelog: swc v1.1.16",
					description: "Bugfixes",
					date: "2020-01-26T00:00:00.000Z",
					formattedDate: "January 26, 2020",
					tags: [],
					readingTime: 0.275,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.17",
						permalink: "/blog/2020/01/30/swc-1.1.17",
					},
					nextItem: {
						title: "Changelog: swc v1.1.15",
						permalink: "/blog/2020/01/24/swc-1.1.15",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "variable infection (#610)",
								id: "variable-infection-610",
								children: [],
							},
						],
					},
				],
				s = { toc: p };
			function f(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "variable-infection-610" },
						"variable infection (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/610",
							},
							"#610",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Handle variable infection in the block scoping pass.",
					),
					(0, a.kt)(
						"p",
						null,
						"i.e. In the code below, v is 'infected' by i.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var functions = [];\nfor (let i = 0; i < 10; i++) {\n  let v = i;\n  functions.push(function() {\n    return v;\n  });\n}\nfunctions[0](); // should print 0\n",
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
