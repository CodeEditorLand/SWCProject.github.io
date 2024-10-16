"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5680],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => b });
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
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
			function l(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
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
									(a[r] = e[r]));
				}
				return a;
			}
			var c = n.createContext({}),
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = p(e.components);
					return n.createElement(
						c.Provider,
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
						a = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(r),
						b = a,
						f = u["".concat(c, ".").concat(b)] || u[b] || m[b] || i;
					return r
						? n.createElement(
								f,
								o(o({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(f, o({ ref: t }, s));
				});
			function b(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var i = r.length,
						o = new Array(i);
					o[0] = u;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(o[1] = l);
					for (var p = 2; p < i; p++) o[p] = r[p];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		8214: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				i = (r(7294), r(3905)),
				o = ["components"],
				l = {
					id: "migrating-from-babel-cli",
					title: "Migrating from babel cli",
					sidebar_label: "@babel/cli",
				},
				c = void 0,
				p = {
					unversionedId: "migrating-from-babel-cli",
					id: "migrating-from-babel-cli",
					isDocsHomePage: !1,
					title: "Migrating from babel cli",
					description: "Installation",
					source: "@site/docs/migrating-from-babel-cli.md",
					sourceDirName: ".",
					slug: "/migrating-from-babel-cli",
					permalink: "/docs/migrating-from-babel-cli",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "migrating-from-babel-cli",
						title: "Migrating from babel cli",
						sidebar_label: "@babel/cli",
					},
					sidebar: "usage",
					previous: {
						title: "@babel/core",
						permalink: "/docs/migrating-from-babel-core",
					},
					next: {
						title: "Comparison with babel",
						permalink: "/docs/comparison-babel",
					},
				},
				s = [
					{ value: "Installation", id: "installation", children: [] },
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "installation" }, "Installation"),
					(0, i.kt)("p", null, "Run"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i --save-dev @swc/cli @swc/core\n",
						),
					),
					(0, i.kt)("p", null, "or"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"yarn add --dev @swc/cli @swc/core\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"CLI apis of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/cli",
						),
						" are intentionally almost same as it of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@babel/cli",
						),
						". So you can just replace ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npx babel",
						),
						" to ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "npx swc"),
						". If it results in an error, please ",
						"[report an error][issues]",
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
