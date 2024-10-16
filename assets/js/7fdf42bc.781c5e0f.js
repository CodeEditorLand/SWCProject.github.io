"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[20],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => s, kt: () => g });
			var r = t(7294);
			function o(e, n, t) {
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
			function a(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? i(Object(t), !0).forEach(function (n) {
								o(e, n, t[n]);
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
			function c(e, n) {
				if (null == e) return {};
				var t,
					r,
					o = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
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
									(o[t] = e[t]));
				}
				return o;
			}
			var l = r.createContext({}),
				u = function (e) {
					var n = r.useContext(l),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : a(a({}, n), e)),
						t
					);
				},
				s = function (e) {
					var n = u(e.components);
					return r.createElement(
						l.Provider,
						{ value: n },
						e.children,
					);
				},
				p = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				f = r.forwardRef(function (e, n) {
					var t = e.components,
						o = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = u(t),
						g = o,
						m = f["".concat(l, ".").concat(g)] || f[g] || p[g] || i;
					return t
						? r.createElement(
								m,
								a(a({ ref: n }, s), {}, { components: t }),
							)
						: r.createElement(m, a({ ref: n }, s));
				});
			function g(e, n) {
				var t = arguments,
					o = n && n.mdxType;
				if ("string" == typeof e || o) {
					var i = t.length,
						a = new Array(i);
					a[0] = f;
					var c = {};
					for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(a[1] = c);
					for (var u = 2; u < i; u++) a[u] = t[u];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, t);
			}
			f.displayName = "MDXCreateElement";
		},
		6824: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => u,
					toc: () => s,
					default: () => f,
				});
			var r = t(7462),
				o = t(3366),
				i = (t(7294), t(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.1.15",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				u = {
					permalink: "/blog/2020/01/24/swc-1.1.15",
					source: "@site/blog/2020-01-24-swc-1.1.15.md",
					title: "Changelog: swc v1.1.15",
					description: "Bugfixes",
					date: "2020-01-24T00:00:00.000Z",
					formattedDate: "January 24, 2020",
					tags: [],
					readingTime: 0.94,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.16",
						permalink: "/blog/2020/01/26/swc-1.1.16",
					},
					nextItem: {
						title: "Changelog: swc v1.1.14",
						permalink: "/blog/2020/01/23/swc-1.1.14",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "block scoping (#604)",
								id: "block-scoping-604",
								children: [],
							},
							{
								value: "hygiene (#604)",
								id: "hygiene-604",
								children: [],
							},
						],
					},
				],
				p = { toc: s };
			function f(e) {
				var n = e.components,
					t = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "block-scoping-604" },
						"block scoping (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/604",
							},
							"#604",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a serious bug bug.",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" compiled",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let functions = [];\nfor (let i = 0; i < 10; i++) {\n  functions.push(function() {\n    console.log(i);\n  });\n}\nfunctions[0]();\nfunctions[7]();\n",
						),
					),
					(0, i.kt)("p", null, "as"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var functions = [];\nfor (var i = 0; i < 10; i++) {\n  functions.push(function() {\n    console.log(i);\n  });\n}\nfunctions[0]();\nfunctions[7]();\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"which is wrong. By tracking idetifier usages in nested function, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits correct output.",
					),
					(0, i.kt)(
						"p",
						null,
						"New output is very simillar to the one of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "babel"),
						".",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var _loop = function(i) {\n  functions.push(function() {\n    console.log(i);\n  });\n};\nvar functions = [];\nfor (var i = 0; i < 10; i++) _loop(i);\nfunctions[0]();\nfunctions[7]();\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "hygiene-604" },
						"hygiene (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/604",
							},
							"#604",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Use-use conflict detection introduced in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "v1.1.14"),
						" had a serious bug. Some identifiers like ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Object"),
						" are inherently used multiple time. It resulted in an use-use conflict and there was a bug.\nBy making an use-bind conflict for global objects, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can handle a code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function foo(Object) {\n  Object.foo();\n}\n",
						),
					),
					(0, i.kt)("p", null, "It will be compiled as"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"function foo(Object1) {\n  Object1.foo();\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"to make other usages of native identifier safe.",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
