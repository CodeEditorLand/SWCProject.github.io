"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8862],
	{
		3905: (e, r, t) => {
			t.d(r, { Zo: () => s, kt: () => b });
			var n = t(7294);
			function a(e, r, t) {
				return (
					r in e
						? Object.defineProperty(e, r, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[r] = t),
					e
				);
			}
			function o(e, r) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					r &&
						(n = n.filter(function (r) {
							return Object.getOwnPropertyDescriptor(e, r)
								.enumerable;
						})),
						t.push.apply(t, n);
				}
				return t;
			}
			function i(e) {
				for (var r = 1; r < arguments.length; r++) {
					var t = null != arguments[r] ? arguments[r] : {};
					r % 2
						? o(Object(t), !0).forEach(function (r) {
								a(e, r, t[r]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: o(Object(t)).forEach(function (r) {
									Object.defineProperty(
										e,
										r,
										Object.getOwnPropertyDescriptor(t, r),
									);
								});
				}
				return e;
			}
			function l(e, r) {
				if (null == e) return {};
				var t,
					n,
					a = (function (e, r) {
						if (null == e) return {};
						var t,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(t = o[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, r);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(t = o[n]),
							r.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var c = n.createContext({}),
				p = function (e) {
					var r = n.useContext(c),
						t = r;
					return (
						e &&
							(t =
								"function" == typeof e ? e(r) : i(i({}, r), e)),
						t
					);
				},
				s = function (e) {
					var r = p(e.components);
					return n.createElement(
						c.Provider,
						{ value: r },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var r = e.children;
						return n.createElement(n.Fragment, {}, r);
					},
				},
				m = n.forwardRef(function (e, r) {
					var t = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(t),
						b = a,
						f = m["".concat(c, ".").concat(b)] || m[b] || u[b] || o;
					return t
						? n.createElement(
								f,
								i(i({ ref: r }, s), {}, { components: t }),
							)
						: n.createElement(f, i({ ref: r }, s));
				});
			function b(e, r) {
				var t = arguments,
					a = r && r.mdxType;
				if ("string" == typeof e || a) {
					var o = t.length,
						i = new Array(o);
					i[0] = m;
					var l = {};
					for (var c in r) hasOwnProperty.call(r, c) && (l[c] = r[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(i[1] = l);
					for (var p = 2; p < o; p++) i[p] = t[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, t);
			}
			m.displayName = "MDXCreateElement";
		},
		6196: (e, r, t) => {
			t.r(r),
				t.d(r, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => m,
				});
			var n = t(7462),
				a = t(3366),
				o = (t(7294), t(3905)),
				i = ["components"],
				l = {
					id: "migrating-from-babel-core",
					title: "Migrating from @babel/core",
					sidebar_label: "@babel/core",
				},
				c = void 0,
				p = {
					unversionedId: "migrating-from-babel-core",
					id: "migrating-from-babel-core",
					isDocsHomePage: !1,
					title: "Migrating from @babel/core",
					description: "Installation",
					source: "@site/docs/migrating-from-babel-core.md",
					sourceDirName: ".",
					slug: "/migrating-from-babel-core",
					permalink: "/docs/migrating-from-babel-core",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "migrating-from-babel-core",
						title: "Migrating from @babel/core",
						sidebar_label: "@babel/core",
					},
					sidebar: "usage",
					previous: {
						title: "Plugin",
						permalink: "/docs/usage-plugin",
					},
					next: {
						title: "@babel/cli",
						permalink: "/docs/migrating-from-babel-cli",
					},
				},
				s = [
					{ value: "Installation", id: "installation", children: [] },
					{ value: "Usage", id: "usage", children: [] },
				],
				u = { toc: s };
			function m(e) {
				var r = e.components,
					t = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, t, { components: r, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "installation" }, "Installation"),
					(0, o.kt)("p", null, "Run"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i --save-dev @swc/core\n",
						),
					),
					(0, o.kt)("p", null, "or"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"yarn add --dev @swc/core\n",
						),
					),
					(0, o.kt)("h2", { id: "usage" }, "Usage"),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
