"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6825],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => c, kt: () => m });
			var a = t(7294);
			function r(e, n, t) {
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
			function s(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					n &&
						(a = a.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function l(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? s(Object(t), !0).forEach(function (n) {
								r(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: s(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function o(e, n) {
				if (null == e) return {};
				var t,
					a,
					r = (function (e, n) {
						if (null == e) return {};
						var t,
							a,
							r = {},
							s = Object.keys(e);
						for (a = 0; a < s.length; a++)
							(t = s[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
						return r;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (a = 0; a < s.length; a++)
						(t = s[a]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(r[t] = e[t]));
				}
				return r;
			}
			var p = a.createContext({}),
				i = function (e) {
					var n = a.useContext(p),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : l(l({}, n), e)),
						t
					);
				},
				c = function (e) {
					var n = i(e.components);
					return a.createElement(
						p.Provider,
						{ value: n },
						e.children,
					);
				},
				d = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return a.createElement(a.Fragment, {}, n);
					},
				},
				u = a.forwardRef(function (e, n) {
					var t = e.components,
						r = e.mdxType,
						s = e.originalType,
						p = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = i(t),
						m = r,
						k = u["".concat(p, ".").concat(m)] || u[m] || d[m] || s;
					return t
						? a.createElement(
								k,
								l(l({ ref: n }, c), {}, { components: t }),
							)
						: a.createElement(k, l({ ref: n }, c));
				});
			function m(e, n) {
				var t = arguments,
					r = n && n.mdxType;
				if ("string" == typeof e || r) {
					var s = t.length,
						l = new Array(s);
					l[0] = u;
					var o = {};
					for (var p in n) hasOwnProperty.call(n, p) && (o[p] = n[p]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(l[1] = o);
					for (var i = 2; i < s; i++) l[i] = t[i];
					return a.createElement.apply(null, l);
				}
				return a.createElement.apply(null, t);
			}
			u.displayName = "MDXCreateElement";
		},
		6726: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => o,
					contentTitle: () => p,
					metadata: () => i,
					toc: () => c,
					default: () => u,
				});
			var a = t(7462),
				r = t(3366),
				s = (t(7294), t(3905)),
				l = ["components"],
				o = {
					title: "Changelog: swc v1.1.4",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				i = {
					permalink: "/blog/2019/12/09/swc-1.1.4",
					source: "@site/blog/2019-12-09-swc-1.1.4.md",
					title: "Changelog: swc v1.1.4",
					description: "loose mode",
					date: "2019-12-09T00:00:00.000Z",
					formattedDate: "December 9, 2019",
					tags: [],
					readingTime: 3.475,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.5",
						permalink: "/blog/2019/12/11/swc-1.1.5",
					},
					nextItem: {
						title: "Changelog: swc v1.1.3",
						permalink: "/blog/2019/12/04/swc-1.1.3",
					},
				},
				c = [
					{ value: "loose mode", id: "loose-mode", children: [] },
					{
						value: "Lots of bug fix (#489)",
						id: "lots-of-bug-fix-489",
						children: [
							{
								value: "resolver pass",
								id: "resolver-pass",
								children: [],
							},
							{
								value: "hygiene pass",
								id: "hygiene-pass",
								children: [],
							},
							{
								value: "fixer pass",
								id: "fixer-pass",
								children: [],
							},
							{
								value: "classes pass",
								id: "classes-pass",
								children: [],
							},
							{
								value: "computed_properties pass",
								id: "computed_properties-pass",
								children: [],
							},
							{
								value: "destructuring pass",
								id: "destructuring-pass",
								children: [],
							},
							{
								value: "for_of pass",
								id: "for_of-pass",
								children: [],
							},
							{
								value: "spread pass",
								id: "spread-pass",
								children: [],
							},
							{
								value: "template_literal pass",
								id: "template_literal-pass",
								children: [],
							},
							{
								value: "class_properties pass",
								id: "class_properties-pass",
								children: [],
							},
							{
								value: "object rest spread pass",
								id: "object-rest-spread-pass",
								children: [],
							},
							{
								value: "async_to_generator pass",
								id: "async_to_generator-pass",
								children: [],
							},
						],
					},
				],
				d = { toc: c };
			function u(e) {
				var n = e.components,
					t = (0, r.Z)(e, l);
				return (0, s.kt)(
					"wrapper",
					(0, a.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "loose-mode" }, "loose mode"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now has a loose mode, just like babel 2015 transform.\nSee ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jscloose",
							},
							"doc",
						),
						" for more detail.",
					),
					(0, s.kt)(
						"h2",
						{ id: "lots-of-bug-fix-489" },
						"Lots of bug fix (",
						(0, s.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/489",
							},
							"#489",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"I copied almost all tests from babel, and fixed lots of bugs.",
					),
					(0, s.kt)("h3", { id: "resolver-pass" }, "resolver pass"),
					(0, s.kt)(
						"p",
						null,
						"Resolver pass, along with hygiene and fixer, is core of the swc.",
					),
					(0, s.kt)(
						"h4",
						{ id: "handle-object-literals-correctly" },
						"Handle object literals correctly",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously, key of an object literal may interfere with outer identifiers. It means,",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'let a = {\n  b: "c"\n};\nuse(b);\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Second usage of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "b"),
						" could be interfered by ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "b"),
						" in ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "a"),
						". ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now hanldes it correctly.",
					),
					(0, s.kt)("h3", { id: "hygiene-pass" }, "hygiene pass"),
					(0, s.kt)(
						"h4",
						{ id: "renaming-of-computed-property-name" },
						"Renaming of computed property name",
					),
					(0, s.kt)("p", null, "Previously,"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class A {\n  [key#1]: "foo";\n  [key#2]: "bar";\n}\n',
						),
					),
					(0, s.kt)("p", null, "(where #n is hygiene number)"),
					(0, s.kt)("p", null, "was compiled to"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class A {\n  [key]: "foo";\n  [key]: "bar";\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"which results in a bug. It is now compiled as",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class A {\n  [key]: "foo";\n  [key1]: "bar";\n}\n',
						),
					),
					(0, s.kt)("h3", { id: "fixer-pass" }, "fixer pass"),
					(0, s.kt)(
						"h4",
						{ id: "export-default-expression" },
						"export default expression",
					),
					(0, s.kt)("p", null, "The arrow expression lke"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export default arrow => foo;\n",
						),
					),
					(0, s.kt)("p", null, "and sequence expression like"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export default a, b, c;\n",
						),
					),
					(0, s.kt)("p", null, "is now wrapped with a parenthesis."),
					(0, s.kt)(
						"h4",
						{ id: "sequence-expression-in-an-arrow-expression" },
						"sequence expression in an arrow expression",
					),
					(0, s.kt)("p", null, "Previously"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"() => (a, b, c);\n",
						),
					),
					(0, s.kt)("p", null, "was compiled as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"() => a, b, c;\n",
						),
					),
					(0, s.kt)("p", null, "which is wrong."),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now compiles it as",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"() => (a, b, c);\n",
						),
					),
					(0, s.kt)("h3", { id: "classes-pass" }, "classes pass"),
					(0, s.kt)(
						"h4",
						{ id: "handle-super-accesses-correctly" },
						"Handle super accesses correctly",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles all valid super accesses. It includes something strange like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class Parent {}\nclass Outer extends Parent {\n  constructor() {\n    class Inner {\n      [super()] = 1;\n    }\n  }\n}\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "computed_properties-pass" },
						"computed_properties pass",
					),
					(0, s.kt)("h4", { id: "better-codegen" }, "Better codegen"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let foo = { a, [b]: c };\n",
						),
					),
					(0, s.kt)("p", null, "is now compiled as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let((_ref = { a }), defineProperty(_ref, b, c), _ref);\n",
						),
					),
					(0, s.kt)("p", null, "instead of"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let((_ref = {}), defineProperty(_ref, a, a), defineProperty(_ref, b, c), _ref);\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "destructuring-pass" },
						"destructuring pass",
					),
					(0, s.kt)(
						"h4",
						{ id: "for-of-for-in-loop-support" },
						"for-of, for-in loop support",
					),
					(0, s.kt)(
						"p",
						null,
						"From now, for-of loop and for-in are supported.",
					),
					(0, s.kt)(
						"h4",
						{ id: "loose-mode-is-here" },
						"loose mode is here",
					),
					(0, s.kt)(
						"p",
						null,
						"If you want smaller output, you can turn on loose mode.",
					),
					(0, s.kt)("h3", { id: "for_of-pass" }, "for_of pass"),
					(0, s.kt)(
						"h4",
						{ id: "assume_array-mode-is-here" },
						"assume_array mode is here",
					),
					(0, s.kt)(
						"p",
						null,
						"If you want smaller output, you can turn on assume_array by enabling loose mode.",
					),
					(0, s.kt)(
						"h4",
						{ id: "labelled-for-loop-is-handled-correctly" },
						"labelled for loop is handled correctly",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously, label was stripped out without any error message, and it resulted in a runtime error. ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles labaelled loops correctly.",
					),
					(0, s.kt)("h3", { id: "spread-pass" }, "spread pass"),
					(0, s.kt)(
						"h4",
						{ id: "loose-mode-is-here-1" },
						"loose mode is here",
					),
					(0, s.kt)(
						"p",
						null,
						"If you don't want ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"_toConsumableArray",
						),
						" in output, you can turn on loose mode.",
					),
					(0, s.kt)(
						"h3",
						{ id: "template_literal-pass" },
						"template_literal pass",
					),
					(0, s.kt)("h4", { id: "performance" }, "Performance"),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"template_literal",
						),
						" pass become much more performant by removing redundant ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							".clone()",
						),
						"s.",
					),
					(0, s.kt)("h4", { id: "literal" }, "Literal"),
					(0, s.kt)(
						"p",
						null,
						"The pass try it's best to reduce template literals into constant.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'let a = `${"foo"}bar`;\n',
						),
					),
					(0, s.kt)("p", null, "is compiled as"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'let a = "foobar";\n',
						),
					),
					(0, s.kt)("h4", { id: "caching" }, "Caching"),
					(0, s.kt)(
						"p",
						null,
						"Functions generated for tagged template literals are cached. This behavior is same as it of babel.",
					),
					(0, s.kt)(
						"h3",
						{ id: "class_properties-pass" },
						"class_properties pass",
					),
					(0, s.kt)(
						"h4",
						{ id: "handle-this-inside-static-properties" },
						"Handle ",
						(0, s.kt)("inlineCode", { parentName: "h4" }, "this"),
						" inside static properties",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now handle",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A {\n  static f = 1;\n}\n\nclass B extends A {\n  static c = super.f;\n}\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "handle-private-field-in-complex-assignment" },
						"Handle private field in complex assignment",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now handle",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A {\n  #f = 0;\n  #g = 0;\n\n  constructor() {\n      ([#f, #g = 3] = [1, 2])\n  }\n}\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "handle-super-access-in-properties" },
						"Handle super access in properties",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now can handle",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A {\n  f = 1;\n}\n\nclass B extends A {\n  c = super.f;\n}\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "handle-complex-super-initialization" },
						"Handle complex super initialization",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now can handle",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"class A extends Parent {\n  constructor() {\n    class B extends (super(), Parent) {}\n  }\n}\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "object-rest-spread-pass" },
						"object rest spread pass",
					),
					(0, s.kt)(
						"h4",
						{ id: "computed-key-with-side-effect" },
						"Computed key with side effect",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now handle complex object pattern like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const { a, [key++]: b, ...c } = foo;\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "destructuring-null" },
						"Destructuring null",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const {} = null;\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"now throws an error, instead of being silent.",
					),
					(0, s.kt)(
						"h3",
						{ id: "async_to_generator-pass" },
						"async_to_generator pass",
					),
					(0, s.kt)(
						"h4",
						{ id: "efficient-handling-of-simple-async-functions" },
						"Efficient handling of simple async functions",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits minimal output for",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"async () => await promise;\n",
						),
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"async () => {\n  await promise;\n};\n",
						),
					),
					(0, s.kt)(
						"h4",
						{ id: "correct-number-of-parameters" },
						"Correct number of parameters",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now convert async functions in a way that preserves function.length.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
