"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1017],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => m });
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
			function o(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: o(Object(r)).forEach(function (t) {
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
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
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
				u = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = u(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = u(r),
						m = a,
						f = d["".concat(c, ".").concat(m)] || d[m] || s[m] || o;
					return r
						? n.createElement(
								f,
								i(i({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(f, i({ ref: t }, p));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(i[1] = l);
					for (var u = 2; u < o; u++) i[u] = r[u];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		1640: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => u,
					toc: () => p,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				l = {
					id: "spack-multi-bundle",
					title: "Creating multiple bundles",
					sidebar_label: "Creating multiple bundles",
				},
				c = void 0,
				u = {
					unversionedId: "spack-multi-bundle",
					id: "spack-multi-bundle",
					isDocsHomePage: !1,
					title: "Creating multiple bundles",
					description: "",
					source: "@site/docs/spack-multi-bundle.md",
					sourceDirName: ".",
					slug: "/spack-multi-bundle",
					permalink: "/docs/spack-multi-bundle",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "spack-multi-bundle",
						title: "Creating multiple bundles",
						sidebar_label: "Creating multiple bundles",
					},
					sidebar: "usage",
					previous: {
						title: "Configuring spack",
						permalink: "/docs/spack-basic",
					},
					next: {
						title: "cli (swc)",
						permalink: "/docs/usage-swc-cli",
					},
				},
				p = [],
				s = { toc: p };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
