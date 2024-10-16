"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3672],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
			var n = r(7294);
			function a(e, t, r) {
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
			function s(e, t) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: s(Object(r)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (n = 0; n < s.length; n++)
						(r = s[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var i = n.createContext({}),
				l = function (e) {
					var t = n.useContext(i),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = l(e.components);
					return n.createElement(
						i.Provider,
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						s = e.originalType,
						i = e.parentName,
						p = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(r),
						f = a,
						m = d["".concat(i, ".").concat(f)] || d[f] || u[f] || s;
					return r
						? n.createElement(
								m,
								o(o({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(m, o({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = r.length,
						o = new Array(s);
					o[0] = d;
					var c = {};
					for (var i in t) hasOwnProperty.call(t, i) && (c[i] = t[i]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(o[1] = c);
					for (var l = 2; l < s; l++) o[l] = r[l];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		8958: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => i,
					metadata: () => l,
					toc: () => p,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				s = (r(7294), r(3905)),
				o = ["components"],
				c = {
					id: "usage-swc-jest",
					title: "Using swc with jest",
					sidebar_label: "@swc/jest",
				},
				i = void 0,
				l = {
					unversionedId: "usage-swc-jest",
					id: "usage-swc-jest",
					isDocsHomePage: !1,
					title: "Using swc with jest",
					description: "Installation",
					source: "@site/docs/usage-swc-jest.md",
					sourceDirName: ".",
					slug: "/usage-swc-jest",
					permalink: "/docs/usage-swc-jest",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-swc-jest",
						title: "Using swc with jest",
						sidebar_label: "@swc/jest",
					},
					sidebar: "usage",
					previous: {
						title: "swc-loader (Webpack)",
						permalink: "/docs/usage-swc-loader",
					},
					next: {
						title: "swc (core)",
						permalink: "/docs/usage-core",
					},
				},
				p = [
					{ value: "Installation", id: "installation", children: [] },
					{ value: "Usage", id: "usage", children: [] },
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "installation" }, "Installation"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre" },
							"npm i -D jest @swc/jest\n",
						),
					),
					(0, s.kt)("h2", { id: "usage" }, "Usage"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jest.config.js",
						),
						":",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module.exports = {\n  transform: {\n    "^.+\\\\.(t|j)sx?$": ["@swc/jest"],\n  },\n};\n',
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
