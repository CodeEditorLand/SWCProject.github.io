"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6875],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => g });
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
				u = function (e) {
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
					var t = u(e.components);
					return r.createElement(
						l.Provider,
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
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = u(n),
						g = a,
						d = f["".concat(l, ".").concat(g)] || f[g] || s[g] || o;
					return n
						? r.createElement(
								d,
								c(c({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(d, c({ ref: t }, p));
				});
			function g(e, t) {
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
					for (var u = 2; u < o; u++) c[u] = n[u];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			f.displayName = "MDXCreateElement";
		},
		363: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => u,
					toc: () => p,
					default: () => f,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.2.6",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				u = {
					permalink: "/blog/2020/06/21/swc-1.2.6",
					source: "@site/blog/2020-06-21-swc-1.2.6.md",
					title: "Changelog: swc v1.2.6",
					description: "Bugfixes",
					date: "2020-06-21T00:00:00.000Z",
					formattedDate: "June 21, 2020",
					tags: [],
					readingTime: 0.445,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.7",
						permalink: "/blog/2020/07/01/swc-1.2.7",
					},
					nextItem: {
						title: "Changelog: swc v1.2.5",
						permalink: "/blog/2020/06/19/swc-1.2.5",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "catch parameter in regenerator (#854)",
								id: "catch-parameter-in-regenerator-854",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "es2020 output (#847)",
								id: "es2020-output-847",
								children: [],
							},
						],
					},
				],
				s = { toc: p };
			function f(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "catch-parameter-in-regenerator-854" },
						"catch parameter in regenerator (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/854",
							},
							"#854",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"While porting regenerator, I forgot handling catch parameters. The bug was that ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does not touch ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "e"),
						" in the code below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function throwingFn() {\n  throw "Error";\n}\nfunction* gen() {\n  try {\n    yield throwingFn();\n  } catch (e) {\n    yield e;\n  }\n}\nconsole.log(gen().next());\n',
						),
					),
					(0, o.kt)("p", null, "It's now fixed and works correctly."),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "es2020-output-847" },
						"es2020 output (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/847",
							},
							"#847",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Optional chaining and nullish coalescing are enabled by default, and if you want to emit those as-is, you can now specify ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							'target: "es2020"',
						),
						".",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
