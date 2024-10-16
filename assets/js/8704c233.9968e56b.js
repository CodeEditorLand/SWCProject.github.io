"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6603],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
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
			function l(e, t) {
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
			var i = r.createContext({}),
				s = function (e) {
					var t = r.useContext(i),
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
						i.Provider,
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						i = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = s(n),
						f = a,
						d = m["".concat(i, ".").concat(f)] || m[f] || u[f] || o;
					return n
						? r.createElement(
								d,
								c(c({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(d, c({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						c = new Array(o);
					c[0] = m;
					var l = {};
					for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(c[1] = l);
					for (var s = 2; s < o; s++) c[s] = n[s];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		4926: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => i,
					metadata: () => s,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				l = {
					title: "Changelog: swc v1.1.58",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				s = {
					permalink: "/blog/2020/06/13/swc-1.1.58",
					source: "@site/blog/2020-06-13-swc-1.1.58.md",
					title: "Changelog: swc v1.1.58",
					description: "Improvements",
					date: "2020-06-13T00:00:00.000Z",
					formattedDate: "June 13, 2020",
					tags: [],
					readingTime: 0.33,
					truncated: !1,
					prevItem: {
						title: "v1.2: spack: Yet another asset bundler",
						permalink: "/blog/2020/06/18/swc-1.2",
					},
					nextItem: {
						title: "Changelog: swc v1.1.57",
						permalink: "/blog/2020/06/11/swc-1.1.57",
					},
				},
				p = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "default syntax (#840)",
								id: "default-syntax-840",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "default-syntax-840" },
						"default syntax (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/840",
							},
							"#840",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previosuly, ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"options.jsc.parser.syntax",
						),
						" was required, and",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var transpiledJs = swc.transformSync(js, {\n  minify: true,\n  jsc: {\n    parser: {\n      nullishCoalescing: true,\n      numericSeparator: true,\n    },\n  },\n});\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"didn't work as intended. From now, the code above works exactly same as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var transpiledJs = swc.transformSync(js, {\n  minify: true,\n  jsc: {\n    parser: {\n      syntax: "ecmascript",\n      nullishCoalescing: true,\n      numericSeparator: true,\n    },\n  },\n});\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
