"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7439],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => m });
			var r = n(7294);
			function s(e, t, n) {
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
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(n), !0).forEach(function (t) {
								s(e, t, n[t]);
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
			function i(e, t) {
				if (null == e) return {};
				var n,
					r,
					s = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							s = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s;
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
									(s[n] = e[n]));
				}
				return s;
			}
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
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
						s = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						m = s,
						h = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								h,
								o(o({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, o({ ref: t }, l));
				});
			function m(e, t) {
				var n = arguments,
					s = t && t.mdxType;
				if ("string" == typeof e || s) {
					var a = n.length,
						o = new Array(a);
					o[0] = d;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : s),
						(o[1] = i);
					for (var p = 2; p < a; p++) o[p] = n[p];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		4511: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => d,
				});
			var r = n(7462),
				s = n(3366),
				a = (n(7294), n(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.2.57",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/05/11/swc-1.2.57",
					source: "@site/blog/2021-05-11-swc-1.2.57.md",
					title: "Changelog: swc v1.2.57",
					description: "Imrpovements",
					date: "2021-05-11T00:00:00.000Z",
					formattedDate: "May 11, 2021",
					tags: [],
					readingTime: 2.235,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.58",
						permalink: "/blog/2021/05/21/swc-1.2.58",
					},
					nextItem: {
						title: "Changelog: swc v1.2.55",
						permalink: "/blog/2021/05/07/swc-1.2.55",
					},
				},
				l = [
					{
						value: "Imrpovements",
						id: "imrpovements",
						children: [
							{
								value: "Perfoemance (#1673)",
								id: "perfoemance-1673",
								children: [],
							},
							{
								value: "Codegen of class expressions (#1660)",
								id: "codegen-of-class-expressions-1660",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "Pure comment for classes pass. (#1646)",
								id: "pure-comment-for-classes-pass-1646",
								children: [],
							},
							{
								value: "TypeScript: <code>override</code> with <code>static</code> (#1663)",
								id: "typescript-override-with-static-1663",
								children: [],
							},
							{
								value: "TypeScript: Support <code>override</code> in parameter properties (#1667)",
								id: "typescript-support-override-in-parameter-properties-1667",
								children: [],
							},
						],
					},
					{
						value: "Internals",
						id: "internals",
						children: [
							{
								value: "Function declarations in ts modules (#1665)",
								id: "function-declarations-in-ts-modules-1665",
								children: [],
							},
							{
								value: "Function declarations in arrow expressions (#1666)",
								id: "function-declarations-in-arrow-expressions-1666",
								children: [],
							},
							{
								value: "For of/in loops (#1672)",
								id: "for-ofin-loops-1672",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					n = (0, s.Z)(e, o);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "imrpovements" }, "Imrpovements"),
					(0, a.kt)(
						"h3",
						{ id: "perfoemance-1673" },
						"Perfoemance (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1673",
							},
							"#1673",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This pr adds lots of fast path for es2015 passes, and the addition of fast-paths removes lots of useless ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "memcpy"),
						" calls. The time used for ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"es2015 -> es5",
						),
						" transforms is reduced about 33%. (It's now 50% faster).",
					),
					(0, a.kt)(
						"h3",
						{ id: "codegen-of-class-expressions-1660" },
						"Codegen of class expressions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1660",
							},
							"#1660",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" compiled",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"console.log(\n  class {\n    run() {}\n  }\n);\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log(\n  (function () {\n    var _class = /*#__PURE__*/ (function () {\n      "use strict";\n      function _class() {\n        _classCallCheck(this, _class);\n      }\n      _createClass(_class, [\n        {\n          key: "run",\n          value: function run() {},\n        },\n      ]);\n      return _class;\n    })();\n    return _class;\n  })()\n);\n',
						),
					),
					(0, a.kt)("p", null, "which is not optimal."),
					(0, a.kt)(
						"p",
						null,
						"Starting from ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" v1.2.57, ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" emits",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log(/*#__PURE__*/ function() {\n        "use strict";\n        function _class() {\n            _classCallCheck(this, _class);\n        }\n        _createClass(...);\n        return _class;\n    }()\n);\n',
						),
					),
					(0, a.kt)("h2", { id: "new-features" }, "New features"),
					(0, a.kt)(
						"h3",
						{ id: "pure-comment-for-classes-pass-1646" },
						"Pure comment for classes pass. (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1646",
							},
							"#1646",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"/*#__PURE__*/",
						),
						" for classes to help javascript minifiers.",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-override-with-static-1663" },
						"TypeScript: ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"override",
						),
						" with ",
						(0, a.kt)("inlineCode", { parentName: "h3" }, "static"),
						" (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1663",
							},
							"#1663",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{
							id: "typescript-support-override-in-parameter-properties-1667",
						},
						"TypeScript: Support ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"override",
						),
						" in parameter properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1667",
							},
							"#1667",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/g-plane",
							},
							"@g-plane",
						),
						".",
					),
					(0, a.kt)("h2", { id: "internals" }, "Internals"),
					(0, a.kt)(
						"p",
						null,
						"This section contains internal improvements, which are mostly done for the new typesciprt checker I'm working on.",
					),
					(0, a.kt)(
						"h3",
						{ id: "function-declarations-in-ts-modules-1665" },
						"Function declarations in ts modules (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1665",
							},
							"#1665",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" didn't identified ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "F2"),
						"s in below code.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"module M {\n  export class A {\n    name: string;\n  }\n\n  export function F2(x: number): string {\n    return x.toString();\n  }\n}\n\nmodule N {\n  export class A {\n    id: number;\n  }\n\n  export function F2(x: number): string {\n    return x.toString();\n  }\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This bug resulted in a bug of ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://stc.dudy.dev" },
							"stc",
						),
						", the typescript type checker I'm working on.",
					),
					(0, a.kt)(
						"h3",
						{
							id: "function-declarations-in-arrow-expressions-1666",
						},
						"Function declarations in arrow expressions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1666",
							},
							"#1666",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, the ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"ts_resolver",
						),
						" pass did not distinguish two ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "bar"),
						" in code below.\nThe bug does not affect ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" users because the bug only occurs when ",
						(0, a.kt)(
							"strong",
							{ parentName: "p" },
							"two separate",
						),
						" arrow expressions contains a function named identically.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"var f3 = <T, U extends T>(x: T, y: U) => {\n  function bar<V extends T, W extends U>() {\n    var g = <X extends W, Y extends V>(a: X, b: Y): T => {\n      x = y;\n      return y;\n    };\n  }\n};\nvar f4 = <U extends T, T>(x: T, y: U) => {\n  function bar<V extends T, W extends U>() {\n    var g = <X extends W, Y extends V>(a: X, b: Y): T => {\n      x = y;\n      return y;\n    };\n  }\n};\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "for-ofin-loops-1672" },
						"For of/in loops (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1672",
							},
							"#1672",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, the ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"ts_resolver",
						),
						" pass did not distinguish ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v"),
						" in code below.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"for (const v of new FooIterator()) {\n  const v = 0; // new scope\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This bug is theoritically possible to affect real world codes, but it would not. So it is listed on the misc section.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
