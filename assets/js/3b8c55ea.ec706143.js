"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3217],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => s, kt: () => m });
			var r = t(7294);
			function a(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[n] = t),
					e
				);
			}
			function i(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function o(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? i(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: i(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function l(e, n) {
				if (null == e) return {};
				var t,
					r,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(t = i[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var c = r.createContext({}),
				p = function (e) {
					var n = r.useContext(c),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : o(o({}, n), e)),
						t
					);
				},
				s = function (e) {
					var n = p(e.components);
					return r.createElement(
						c.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				d = r.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(t),
						m = a,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || i;
					return t
						? r.createElement(
								f,
								o(o({ ref: n }, s), {}, { components: t }),
							)
						: r.createElement(f, o({ ref: n }, s));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var i = t.length,
						o = new Array(i);
					o[0] = d;
					var l = {};
					for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(o[1] = l);
					for (var p = 2; p < i; p++) o[p] = t[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		872: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => d,
				});
			var r = t(7462),
				a = t(3366),
				i = (t(7294), t(3905)),
				o = ["components"],
				l = { id: "installation", title: "Installation" },
				c = void 0,
				p = {
					unversionedId: "installation",
					id: "installation",
					isDocsHomePage: !1,
					title: "Installation",
					description: "You can install swc with",
					source: "@site/docs/installation.md",
					sourceDirName: ".",
					slug: "/installation",
					permalink: "/docs/installation",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: { id: "installation", title: "Installation" },
					sidebar: "usage",
					next: {
						title: "Configuring swc",
						permalink: "/docs/configuring-swc",
					},
				},
				s = [],
				u = { toc: s };
			function d(e) {
				var n = e.components,
					t = (0, a.Z)(e, o);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"You can install ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" with",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm i -D @swc/core @swc/cli\n",
						),
					),
					(0, i.kt)("p", null, "or"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"yarn add --dev @swc/core @swc/cli\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"This will download a prebuilt binary instead of building swc if possible.\nCurrently prebuilt binaries are provided only for ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mac (x64)",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"linux (x86_64)",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"win32-x64",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"apple silicon",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"linux aarch64",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"- linux armv7",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"android aarch64",
						),
						" / ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"windows ia32",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"To use on Alpine Linux, also install the ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core-linux-musl",
						),
						" npm package.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
