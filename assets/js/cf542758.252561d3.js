"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5018],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
			var r = n(7294);
			function a(e, t, n) {
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
			function o(e, t) {
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
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
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
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var l = r.createContext({}),
				s = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = s(e.components);
					return r.createElement(
						l.Provider,
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = s(n),
						m = a,
						f = d["".concat(l, ".").concat(m)] || d[m] || u[m] || o;
					return n
						? r.createElement(
								f,
								c(c({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, c({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						c = new Array(o);
					c[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(c[1] = i);
					for (var s = 2; s < o; s++) c[s] = n[s];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		2601: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				i = {
					id: "usage-swc-loader",
					title: "Using swc with webpack",
					sidebar_label: "swc-loader (Webpack)",
				},
				l = void 0,
				s = {
					unversionedId: "usage-swc-loader",
					id: "usage-swc-loader",
					isDocsHomePage: !1,
					title: "Using swc with webpack",
					description: "Installation",
					source: "@site/docs/usage-swc-loader.md",
					sourceDirName: ".",
					slug: "/usage-swc-loader",
					permalink: "/docs/usage-swc-loader",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-swc-loader",
						title: "Using swc with webpack",
						sidebar_label: "swc-loader (Webpack)",
					},
					sidebar: "usage",
					previous: {
						title: "cli (spack)",
						permalink: "/docs/usage-spack-cli",
					},
					next: {
						title: "@swc/jest",
						permalink: "/docs/usage-swc-jest",
					},
				},
				p = [
					{ value: "Installation", id: "installation", children: [] },
					{
						value: "Configuration",
						id: "configuration",
						children: [
							{
								value: "React development",
								id: "react-development",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "installation" }, "Installation"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre" },
							"npm i --save-dev @swc/core swc-loader\n",
						),
					),
					(0, o.kt)("h2", { id: "configuration" }, "Configuration"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module: {\n  rules: [\n    {\n      test: /\\.m?js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        // `.swcrc` can be used to configure swc\n        loader: "swc-loader"\n      }\n    }\n  ];\n}\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "react-development" },
						"React development",
					),
					(0, o.kt)(
						"p",
						null,
						"The ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jsctransformreact",
							},
							(0, o.kt)(
								"inlineCode",
								{ parentName: "a" },
								"jsc.transform.react.development",
							),
						),
						" option is set automatically based on the Webpack ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "mode"),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"See ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://webpack.js.org/configuration/mode/",
							},
							"https://webpack.js.org/configuration/mode/",
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
