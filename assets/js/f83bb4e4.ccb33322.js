"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4249],
	{
		3905: (e, t, a) => {
			a.d(t, { Zo: () => c, kt: () => d });
			var n = a(7294);
			function r(e, t, a) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: a,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = a),
					e
				);
			}
			function l(e, t) {
				var a = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						a.push.apply(a, n);
				}
				return a;
			}
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = null != arguments[t] ? arguments[t] : {};
					t % 2
						? l(Object(a), !0).forEach(function (t) {
								r(e, t, a[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(a),
								)
							: l(Object(a)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(a, t),
									);
								});
				}
				return e;
			}
			function o(e, t) {
				if (null == e) return {};
				var a,
					n,
					r = (function (e, t) {
						if (null == e) return {};
						var a,
							n,
							r = {},
							l = Object.keys(e);
						for (n = 0; n < l.length; n++)
							(a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
						return r;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (n = 0; n < l.length; n++)
						(a = l[n]),
							t.indexOf(a) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									a,
								) &&
									(r[a] = e[a]));
				}
				return r;
			}
			var s = n.createContext({}),
				p = function (e) {
					var t = n.useContext(s),
						a = t;
					return (
						e &&
							(a =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						a
					);
				},
				c = function (e) {
					var t = p(e.components);
					return n.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				m = n.forwardRef(function (e, t) {
					var a = e.components,
						r = e.mdxType,
						l = e.originalType,
						s = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(a),
						d = r,
						k = m["".concat(s, ".").concat(d)] || m[d] || u[d] || l;
					return a
						? n.createElement(
								k,
								i(i({ ref: t }, c), {}, { components: a }),
							)
						: n.createElement(k, i({ ref: t }, c));
				});
			function d(e, t) {
				var a = arguments,
					r = t && t.mdxType;
				if ("string" == typeof e || r) {
					var l = a.length,
						i = new Array(l);
					i[0] = m;
					var o = {};
					for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(i[1] = o);
					for (var p = 2; p < l; p++) i[p] = a[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, a);
			}
			m.displayName = "MDXCreateElement";
		},
		2386: (e, t, a) => {
			a.r(t),
				a.d(t, {
					frontMatter: () => o,
					contentTitle: () => s,
					metadata: () => p,
					toc: () => c,
					default: () => m,
				});
			var n = a(7462),
				r = a(3366),
				l = (a(7294), a(3905)),
				i = ["components"],
				o = {
					title: "Introducing swc 1.0",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				p = {
					permalink: "/blog/2019/02/08/Introducing-swc-1.0",
					source: "@site/blog/2019-02-08-Introducing-swc-1.0.md",
					title: "Introducing swc 1.0",
					description: "Introduction",
					date: "2019-02-08T00:00:00.000Z",
					formattedDate: "February 8, 2019",
					tags: [],
					readingTime: 2.16,
					truncated: !1,
					prevItem: {
						title: "Announcing swc v1.1.0",
						permalink: "/blog/2019/11/30/announcing-swc-1.1.0",
					},
				},
				c = [
					{
						value: "Introduction",
						id: "introduction",
						children: [
							{
								value: "What is swc?",
								id: "what-is-swc",
								children: [],
							},
							{
								value: "What can swc do?",
								id: "what-can-swc-do",
								children: [],
							},
							{
								value: "How fast is swc?",
								id: "how-fast-is-swc",
								children: [],
							},
						],
					},
					{ value: "Installation", id: "installation", children: [] },
					{
						value: "What is included in swc 1.0.0?",
						id: "what-is-included-in-swc-100",
						children: [
							{
								value: "ECMAScript 2019 support",
								id: "ecmascript-2019-support",
								children: [],
							},
							{
								value: "React (with jsx)",
								id: "react-with-jsx",
								children: [],
							},
							{
								value: "Typescript support",
								id: "typescript-support",
								children: [],
							},
							{
								value: "Various transforms",
								id: "various-transforms",
								children: [],
							},
						],
					},
					{
						value: "Migrating from babel",
						id: "migrating-from-babel",
						children: [
							{
								value: "@babel/core",
								id: "babelcore",
								children: [],
							},
							{
								value: "@babel/cli",
								id: "babelcli",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function m(e) {
				var t = e.components,
					a = (0, r.Z)(e, i);
				return (0, l.kt)(
					"wrapper",
					(0, n.Z)({}, u, a, { components: t, mdxType: "MDXLayout" }),
					(0, l.kt)("h2", { id: "introduction" }, "Introduction"),
					(0, l.kt)("h3", { id: "what-is-swc" }, "What is swc?"),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						"(speedy web compiler) is a super-fast javascript to javascript compiler.",
					),
					(0, l.kt)(
						"h3",
						{ id: "what-can-swc-do" },
						"What can swc do?",
					),
					(0, l.kt)(
						"p",
						null,
						"It can transpile typescript / jsx / ecmascript 2019 to browser-compatible javascript.",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"input.js",
						),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Foo {\n  set foo(v) {}\n}\nclass Bar extends Foo {\n  get bar1() {}\n  async bar2() {}\n}\n",
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "how-fast-is-swc" },
						"How fast is swc?",
					),
					(0, l.kt)(
						"p",
						null,
						"It's 16x - 20x faster than babel even on single-core synchronous benchmark. Note that actual performance gap is larger because swc works on worker thread while babel works on event loop thread.",
					),
					(0, l.kt)("h2", { id: "installation" }, "Installation"),
					(0, l.kt)(
						"p",
						null,
						"You can install ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" with",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"npm install --save-dev @swc/core\n",
						),
					),
					(0, l.kt)("p", null, "or"),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-sh" },
							"yarn add --dev @swc/core\n",
						),
					),
					(0, l.kt)(
						"p",
						null,
						"See ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "/docs" },
							"installation guide",
						),
						" for more details.",
					),
					(0, l.kt)(
						"h2",
						{ id: "what-is-included-in-swc-100" },
						"What is included in swc 1.0.0?",
					),
					(0, l.kt)(
						"p",
						null,
						"Swc implements almost all babel plugins. As of 1.0.0, swc can understand various dialects of ecmascript and compiles them into es5.",
					),
					(0, l.kt)(
						"h3",
						{ id: "ecmascript-2019-support" },
						"ECMAScript 2019 support",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript"\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "react-with-jsx" },
						"React (with jsx)",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": true\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "typescript-support" },
						"Typescript support",
					),
					(0, l.kt)(
						"p",
						null,
						"Swc can also compile typescript / tsx to ecmascript. Note that it does not type-check at the time of writing. Type checking is tracked at ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/126",
							},
							"#126",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						":",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-json" },
							'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false\n    }\n  }\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"See ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "/docs/configuring-swc" },
							"docs",
						),
						" for more details.",
					),
					(0, l.kt)(
						"h3",
						{ id: "various-transforms" },
						"Various transforms",
					),
					(0, l.kt)(
						"ul",
						null,
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "es3"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"member-expression-literals",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"property-literals",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"reserved-words",
								),
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "es2015"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"arrow-functions",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"block-scoped-functions",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"block-scoping",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"classes",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"computed-properties",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"destructuring",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"duplicate-keys",
								),
								(0, l.kt)("li", { parentName: "ul" }, "for-of"),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"function-name",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"instanceof",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"literals",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"new-target",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"parameters",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"shorthand-properties",
								),
								(0, l.kt)("li", { parentName: "ul" }, "spread"),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"sticky regex (",
									(0, l.kt)(
										"inlineCode",
										{ parentName: "li" },
										"y",
									),
									" flag)",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"template-literals",
								),
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"typeof-symbol",
								),
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "es2016"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"exponentiation-operator",
								),
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "es2017"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"async-to-generator",
								),
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "es2018"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)(
									"li",
									{ parentName: "ul" },
									"object-rest-spread",
								),
							),
						),
						(0, l.kt)(
							"li",
							{ parentName: "ul" },
							(0, l.kt)("p", { parentName: "li" }, "react"),
							(0, l.kt)(
								"ul",
								{ parentName: "li" },
								(0, l.kt)("li", { parentName: "ul" }, "jsx"),
							),
						),
					),
					(0, l.kt)(
						"h2",
						{ id: "migrating-from-babel" },
						"Migrating from babel",
					),
					(0, l.kt)("h3", { id: "babelcore" }, "@babel/core"),
					(0, l.kt)(
						"p",
						null,
						"Run ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npm i --save-dev @swc/core",
						),
						" or ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"yarn add --dev @swc/core",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"Swc enables all passes by default. So if you are using only standard ecmascript, you can just delete ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							".babelrc",
						),
						" and change ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"babel.transform()",
						),
						" to ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc.transform()",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"See ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "/docs/usage-core" },
							"usage docs",
						),
						" and ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/migrating-from-babel-core",
							},
							"migration docs",
						),
						" for more details.\nAlso note that swc does not support custom plugin yet.",
					),
					(0, l.kt)("h3", { id: "babelcli" }, "@babel/cli"),
					(0, l.kt)(
						"p",
						null,
						"Run ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npm i --save-dev @swc/core @swc/cli",
						),
						" or ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"yarn add --dev @swc/core @swc/cli",
						),
						" to install. CLI apis of ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/cli",
						),
						" is almost equivalent to it of ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@babel/cli",
						),
						". So if you are using standard ecmascript, you can just replace ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npx babel",
						),
						" to ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "npx swc"),
						". If it results in an error, please ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues",
							},
							"report an error",
						),
						".",
					),
					(0, l.kt)(
						"p",
						null,
						"See ",
						(0, l.kt)(
							"a",
							{ parentName: "p", href: "/docs/usage-swc-cli" },
							"usage docs",
						),
						" and ",
						(0, l.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/migrating-from-babel-cli",
							},
							"migration docs",
						),
						" for more details. Also note that swc does not support custom plugin yet.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
