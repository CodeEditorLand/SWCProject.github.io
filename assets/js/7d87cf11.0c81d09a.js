"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1794],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => d });
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
			function l(e, t) {
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
			var i = r.createContext({}),
				p = function (e) {
					var t = r.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return r.createElement(
						i.Provider,
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
						i = e.parentName,
						u = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(n),
						d = o,
						m = f["".concat(i, ".").concat(d)] || f[d] || s[d] || a;
					return n
						? r.createElement(
								m,
								c(c({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(m, c({ ref: t }, u));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = f;
					var l = {};
					for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(c[1] = l);
					for (var p = 2; p < a; p++) c[p] = n[p];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		8225: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => u,
					default: () => f,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				c = ["components"],
				l = { title: "Help" },
				i = "Need Help?",
				p = {
					type: "mdx",
					permalink: "/help",
					source: "@site/src/pages/help.md",
				},
				u = [],
				s = { toc: u };
			function f(e) {
				var t = e.components,
					n = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h1", { id: "need-help" }, "Need Help?"),
					(0, a.kt)(
						"p",
						null,
						"This project is maintained by a dedicated group of people",
					),
					(0, a.kt)(
						"div",
						{ class: "container" },
						(0, a.kt)(
							"div",
							{ class: "row" },
							(0, a.kt)(
								"div",
								{ class: "col" },
								(0, a.kt)("h2", null, "Browse Docs"),
								"Learn more about using the ",
								(0, a.kt)(
									"a",
									{ href: "/docs/installation" },
									"documentation on this site",
								),
							),
							(0, a.kt)(
								"div",
								{ class: "col" },
								(0, a.kt)("h2", null, "Join the community"),
								(0, a.kt)(
									"p",
									null,
									"Ask questions about the documentation and project",
								),
							),
							(0, a.kt)(
								"div",
								{ class: "col" },
								(0, a.kt)("h2", null, "Stay up to date"),
								(0, a.kt)(
									"p",
									null,
									"Find out what's new with this project",
								),
							),
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
