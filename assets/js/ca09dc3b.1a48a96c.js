"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[981],
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
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
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							c = Object.keys(e);
						for (n = 0; n < c.length; n++)
							(r = c[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
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
									(a[r] = e[r]));
				}
				return a;
			}
			var l = n.createContext({}),
				s = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = s(e.components);
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						c = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = s(r),
						f = a,
						m = d["".concat(l, ".").concat(f)] || d[f] || u[f] || c;
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
					var c = r.length,
						o = new Array(c);
					o[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var s = 2; s < c; s++) o[s] = r[s];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		4641: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => p,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				c = (r(7294), r(3905)),
				o = ["components"],
				i = {
					id: "usage-spack-cli",
					title: "Using cli (spack)",
					sidebar_label: "cli (spack)",
				},
				l = void 0,
				s = {
					unversionedId: "usage-spack-cli",
					id: "usage-spack-cli",
					isDocsHomePage: !1,
					title: "Using cli (spack)",
					description: "Installation",
					source: "@site/docs/usage-spack-cli.md",
					sourceDirName: ".",
					slug: "/usage-spack-cli",
					permalink: "/docs/usage-spack-cli",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-spack-cli",
						title: "Using cli (spack)",
						sidebar_label: "cli (spack)",
					},
					sidebar: "usage",
					previous: {
						title: "@swc/wasm",
						permalink: "/docs/usage-swc-wasm",
					},
					next: {
						title: "swc-loader (Webpack)",
						permalink: "/docs/usage-swc-loader",
					},
				},
				p = [
					{ value: "Installation", id: "installation", children: [] },
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, c.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)("h2", { id: "installation" }, "Installation"),
					(0, c.kt)(
						"pre",
						null,
						(0, c.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i --save-dev @swc/cli @swc/core\n",
						),
					),
					(0, c.kt)(
						"p",
						null,
						"Create a ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						" file. See ",
						(0, c.kt)(
							"a",
							{ parentName: "p", href: "/docs/spack-basic" },
							"docs",
						),
						" for more detail. Then, just run",
					),
					(0, c.kt)(
						"pre",
						null,
						(0, c.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npx spack\n",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
