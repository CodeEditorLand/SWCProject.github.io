"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5651],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => m });
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
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = p(e.components);
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
				f = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(n),
						m = a,
						g = f["".concat(l, ".").concat(m)] || f[m] || u[m] || o;
					return n
						? r.createElement(
								g,
								c(c({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(g, c({ ref: t }, s));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						c = new Array(o);
					c[0] = f;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(c[1] = i);
					for (var p = 2; p < o; p++) c[p] = n[p];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		921: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => f,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.17",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/01/30/swc-1.1.17",
					source: "@site/blog/2020-01-30-swc-1.1.17.md",
					title: "Changelog: swc v1.1.17",
					description: "Bugfixes",
					date: "2020-01-30T00:00:00.000Z",
					formattedDate: "January 30, 2020",
					tags: [],
					readingTime: 0.325,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.20",
						permalink: "/blog/2020/02/07/swc-1.1.20",
					},
					nextItem: {
						title: "Changelog: swc v1.1.16",
						permalink: "/blog/2020/01/26/swc-1.1.16",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "jsx attribute (#615)",
								id: "jsx-attribute-615",
								children: [],
							},
							{
								value: "parsing of async generator function (#612)",
								id: "parsing-of-async-generator-function-612",
								children: [],
							},
						],
					},
					{
						value: "swc-cli improvement",
						id: "swc-cli-improvement",
						children: [],
					},
				],
				u = { toc: s };
			function f(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "jsx-attribute-615" },
						"jsx attribute (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/615",
							},
							"#615",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, '= "5"'),
						" in the code below breaks ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						".",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'let c = <Test attrib="5" />;\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles it without any problem.",
					),
					(0, o.kt)(
						"h3",
						{ id: "parsing-of-async-generator-function-612" },
						"parsing of async generator function (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/612",
							},
							"#612",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now parse an async generator function like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"async function* agf() {}\n",
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "swc-cli-improvement" },
						"swc-cli improvement",
					),
					(0, o.kt)(
						"p",
						null,
						"You can now use ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "--sync"),
						" to get correct panic mesage.",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
