"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4568],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
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
			function i(e) {
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
			function s(e, t) {
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
			var c = r.createContext({}),
				l = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = l(e.components);
					return r.createElement(
						c.Provider,
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
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						p = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(n),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								f,
								i(i({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(f, i({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(i[1] = s);
					for (var l = 2; l < a; l++) i[l] = n[l];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		6068: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.1.51",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				l = {
					permalink: "/blog/2020/05/30/swc-1.1.51",
					source: "@site/blog/2020-05-30-swc-1.1.51.md",
					title: "Changelog: swc v1.1.51",
					description: "Integration tests",
					date: "2020-05-30T00:00:00.000Z",
					formattedDate: "May 30, 2020",
					tags: [],
					readingTime: 0.81,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.52",
						permalink: "/blog/2020/06/02/swc-1.1.52",
					},
					nextItem: {
						title: "Changelog: swc v1.1.49",
						permalink: "/blog/2020/05/28/swc-1.1.49",
					},
				},
				p = [
					{
						value: "Integration tests",
						id: "integration-tests",
						children: [],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "new expression",
								id: "new-expression",
								children: [],
							},
							{
								value: "Keywords in method name (#801)",
								id: "keywords-in-method-name-801",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "integration-tests" },
						"Integration tests",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now compiles and run the test suite of three.js and redux as a part of ci process. I tried to add more stuffs, but the build system of other projects were too complex to make it use swc.",
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)("h3", { id: "new-expression" }, "new expression"),
					(0, a.kt)(
						"p",
						null,
						"As part of integration test, I found that swc miscompiles",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"new (a ? b : c)();\n",
						),
					),
					(0, a.kt)("p", null, "into"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"new a() ? b : c();\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This is fixed by the pr which introduced integration tests.",
					),
					(0, a.kt)(
						"h3",
						{ id: "keywords-in-method-name-801" },
						"Keywords in method name (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/801",
							},
							"#801",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" compiles",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class Foo {\n  delete(object: string, key: string) {\n    delete object[key];\n  }\n}\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var Foo = function() {\n    'use strict';\n    function Foo() {\n        _classCallCheck(this, Foo);\n    }\n    _createClass(Foo, [\n        {\n            key: 'delete',\n            value: function delete(object, key) {\n                delete object[key];\n            }\n        }\n    ]);\n    return Foo;\n}();\nexports.Foo = Foo;\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						", which is wrong as function name cannot be ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "delete"),
						". ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now compiles it as ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"function _delete",
						),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
