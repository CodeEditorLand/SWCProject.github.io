"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5039],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => i, kt: () => m });
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
			function a(e, n) {
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
			function s(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(t), !0).forEach(function (n) {
								o(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: a(Object(t)).forEach(function (n) {
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
					o = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(t = a[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(o[t] = e[t]));
				}
				return o;
			}
			var c = r.createContext({}),
				p = function (e) {
					var n = r.useContext(c),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : s(s({}, n), e)),
						t
					);
				},
				i = function (e) {
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
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						i = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(t),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return t
						? r.createElement(
								f,
								s(s({ ref: n }, i), {}, { components: t }),
							)
						: r.createElement(f, s({ ref: n }, i));
				});
			function m(e, n) {
				var t = arguments,
					o = n && n.mdxType;
				if ("string" == typeof e || o) {
					var a = t.length,
						s = new Array(a);
					s[0] = d;
					var l = {};
					for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(s[1] = l);
					for (var p = 2; p < a; p++) s[p] = t[p];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		8155: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => i,
					default: () => d,
				});
			var r = t(7462),
				o = t(3366),
				a = (t(7294), t(3905)),
				s = ["components"],
				l = {
					title: "Changelog: swc v1.2.20",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/08/15/swc-1.2.20",
					source: "@site/blog/2020-08-15-swc-1.2.20.md",
					title: "Changelog: swc v1.2.20",
					description: "Bugfixes",
					date: "2020-08-15T00:00:00.000Z",
					formattedDate: "August 15, 2020",
					tags: [],
					readingTime: 2.11,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.21",
						permalink: "/blog/2020/08/24/swc-1.2.21",
					},
					nextItem: {
						title: "Changelog: swc v1.2.19",
						permalink: "/blog/2020/08/13/swc-1.2.19",
					},
				},
				i = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "spack respects swcrc (#964)",
								id: "spack-respects-swcrc-964",
								children: [],
							},
							{
								value: "spack handles common js modules properly (#969)",
								id: "spack-handles-common-js-modules-properly-969",
								children: [],
							},
							{
								value: "lodash-es is supported (#963)",
								id: "lodash-es-is-supported-963",
								children: [],
							},
							{
								value: "Parameter decorators (#961)",
								id: "parameter-decorators-961",
								children: [],
							},
						],
					},
				],
				u = { toc: i };
			function d(e) {
				var n = e.components,
					t = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "spack-respects-swcrc-964" },
						"spack respects swcrc (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/964",
							},
							"#964",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Spack supports ",
						(0, a.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" properly. Just like webpack + babel environment, the configuration is determined per-file. You can even mix ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsx"),
						", ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "ts"),
						", ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "js"),
						" if you want.",
					),
					(0, a.kt)(
						"h3",
						{ id: "spack-handles-common-js-modules-properly-969" },
						"spack handles common js modules properly (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/969",
							},
							"#969",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously common js modules were improperly handled. After some very hard work, I managed to fix it and common js imports are transcompiled to compact code.",
					),
					(0, a.kt)(
						"p",
						null,
						"Spack generates clean code, just like the code below.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function __spack_require__(mod) {\n  var cache;\n  return function () {\n    if (cache) {\n      return cache;\n    }\n    var module = {\n      exports: {},\n    };\n    mod(module, module.exports);\n    cache = module.exports;\n    return cache;\n  };\n}\n// a-a-a.js\nvar load = __spack_require__.bind(void 0, function (module, exports) {\n  module.exports = {\n    default: "a-a-a",\n  };\n});\n// a-b.js\nvar load1 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("a-b");\n  exports.default = "ab";\n});\n// a-a.js\nvar load2 = __spack_require__.bind(void 0, function (module, exports) {\n  module.exports = load();\n});\n// b.js\nvar load3 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("b");\n});\n// c.js\nvar load4 = __spack_require__.bind(void 0, function (module, exports) {\n  console.log("c");\n});\n// a.js\nvar load5 = __spack_require__.bind(void 0, function (module, exports) {\n  var aa = load2();\n  var bb = load1();\n  load3();\n  module.exports = {\n    aa: aa,\n    bb: bb,\n  };\n});\n// entry.js\nload5();\nvar b = load3();\nload4();\nconsole.log(b);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Spack is designed to emit bundle as smallest as possible ",
						(0, a.kt)("em", { parentName: "p" }, "when minified"),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"You can now use spack to bundle react projects. See ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/tree/master/spack/integration-tests/react",
							},
							"an integration test for react in the swc main repository",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "lodash-es-is-supported-963" },
						"lodash-es is supported (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/963",
							},
							"#963",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"lodash-es",
						),
						" accesses ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "exports"),
						" even if it's an es module. In order to handle name conflict, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" prevously rename ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "exports"),
						" to something different.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import root from "./_root.js";\nimport stubFalse from "./stubFalse.js";\n\nvar freeExports =\n  typeof exports == "object" && exports && !exports.nodeType && exports;\nvar freeModule =\n  freeExports && typeof module == "object" && module && !module.nodeType && \\;\nmodule;\n\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nexport default isBuffer;\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"It's now handled more sensitively to avoid breaking codes.",
					),
					(0, a.kt)(
						"h3",
						{ id: "parameter-decorators-961" },
						"Parameter decorators (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/961",
							},
							"#961",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Note: this applies to typescript decorators",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, decorators on a parameter which does not have initializer were broken.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Base {\n  constructor() {\n    this.action = new Subject();\n  }\n}\n\nclass Child extends Base {\n  @DefineAction() action: Observable<void>;\n\n  callApi() {\n    console.log(this.action);\n  }\n}\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"It was undefined, which is wrong, and it's now an instance of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "Subject"),
						".",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
