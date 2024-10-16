"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6876],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => f });
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
			function i(e, t) {
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
			var l = r.createContext({}),
				s = function (e) {
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
					var t = s(e.components);
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
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = s(n),
						f = o,
						d = m["".concat(l, ".").concat(f)] || m[f] || u[f] || a;
					return n
						? r.createElement(
								d,
								c(c({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(d, c({ ref: t }, p));
				});
			function f(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						c = new Array(a);
					c[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var s = 2; s < a; s++) c[s] = n[s];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		3059: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => s,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.2.25",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				s = {
					permalink: "/blog/2020/09/11/swc-1.2.25",
					source: "@site/blog/2020-09-11-swc-1.2.25.md",
					title: "Changelog: swc v1.2.25",
					description: "Bugfixes",
					date: "2020-09-11T00:00:00.000Z",
					formattedDate: "September 11, 2020",
					tags: [],
					readingTime: 1.54,
					truncated: !1,
					prevItem: {
						title: "ChangeLog: swc v1.2.27",
						permalink: "/blog/2020/09/13/swc-1.2.27",
					},
					nextItem: {
						title: "Hotfix: swc v1.2.26",
						permalink: "/blog/2020/09/11/swc-1.2.26",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "codegen of block comment (#1062)",
								id: "codegen-of-block-comment-1062",
								children: [],
							},
							{
								value: "meta properties (#1053)",
								id: "meta-properties-1053",
								children: [],
							},
							{
								value: "common js: order of exports (#1057)",
								id: "common-js-order-of-exports-1057",
								children: [],
							},
							{
								value: "calling conditional expressions (#1051)",
								id: "calling-conditional-expressions-1051",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "codegen-of-block-comment-1062" },
						"codegen of block comment (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1062",
							},
							"#1062",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" injected a newline after block comments.",
					),
					(0, a.kt)(
						"p",
						null,
						"This is wrong behavior, as it can break some codes. Especially, the code below is broken.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"return /*****/ function () {};\n",
						),
					),
					(0, a.kt)("p", null, "It was compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"return /*****/\nfunction () {};\n",
						),
					),
					(0, a.kt)("p", null, "which is equal to"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"return /*****/;\nfunction () {};\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"due to automatic semicolon insertion and it's broken as the return value is changed and ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"function () {}",
						),
						" is a function declaration, not a function expression.",
					),
					(0, a.kt)(
						"h3",
						{ id: "meta-properties-1053" },
						"meta properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1053",
							},
							"#1053",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" now compiles meta properties correctly.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'class ArgumentValidationError extends Error {\n  constructor(public validationErrors: ValidationError[]) {\n    super("Argument Validation Error");\n\n    Object.setPrototypeOf(this, new.target.prototype);\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "common-js-order-of-exports-1057" },
						"common js: order of exports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1057",
							},
							"#1057",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io/",
							},
							"swc",
						),
						" does not follow the order declared in the soruce file while emitting imports and exports.\nAs a result, cyclic imports were broken.\nThis is now fixed, and",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export * from "./http";\nexport { Scope } from "./interfaces";\n',
						),
					),
					(0, a.kt)("p", null, "is compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nvar _interfaces = require("./interfaces");\nvar _http = require("./http");\nObject.defineProperty(exports, "Scope", {\n  enumerable: true,\n  get: function () {\n    return _interfaces.Scope;\n  },\n});\nObject.keys(_http).forEach(function (key) {\n  if (key === "default" || key === "__esModule") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _http[key];\n    },\n  });\n});\n',
						),
					),
					(0, a.kt)("p", null, "instead of"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nObject.defineProperty(exports, "Scope", {\n  enumerable: true,\n  get: function () {\n    return _interfaces.Abstract;\n  },\n});\n\nvar _interfaces = require("./interfaces");\nvar _http = require("./http");\n\nObject.keys(_http).forEach(function (key) {\n  if (key === "default" || key === "__esModule") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _http[key];\n    },\n  });\n});\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "calling-conditional-expressions-1051" },
						"calling conditional expressions (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1051",
							},
							"#1051",
						),
						")",
					),
					(0, a.kt)("p", null, "This affects code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"(a) => (set) => (elemE(a, set) ? removeE : insertE)(a)(set);\n",
						),
					),
					(0, a.kt)("hr", null),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
