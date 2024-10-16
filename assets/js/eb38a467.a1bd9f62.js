"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[785],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => u });
			var o = r(7294);
			function n(e, t, r) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = r),
					e
				);
			}
			function i(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t &&
						(o = o.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						r.push.apply(r, o);
				}
				return r;
			}
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(r), !0).forEach(function (t) {
								n(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function a(e, t) {
				if (null == e) return {};
				var r,
					o,
					n = (function (e, t) {
						if (null == e) return {};
						var r,
							o,
							n = {},
							i = Object.keys(e);
						for (o = 0; o < i.length; o++)
							(r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
						return n;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (o = 0; o < i.length; o++)
						(r = i[o]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(n[r] = e[r]));
				}
				return n;
			}
			var p = o.createContext({}),
				c = function (e) {
					var t = o.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return o.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				h = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return o.createElement(o.Fragment, {}, t);
					},
				},
				d = o.forwardRef(function (e, t) {
					var r = e.components,
						n = e.mdxType,
						i = e.originalType,
						p = e.parentName,
						l = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(r),
						u = n,
						m = d["".concat(p, ".").concat(u)] || d[u] || h[u] || i;
					return r
						? o.createElement(
								m,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: o.createElement(m, s({ ref: t }, l));
				});
			function u(e, t) {
				var r = arguments,
					n = t && t.mdxType;
				if ("string" == typeof e || n) {
					var i = r.length,
						s = new Array(i);
					s[0] = d;
					var a = {};
					for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : n),
						(s[1] = a);
					for (var c = 2; c < i; c++) s[c] = r[c];
					return o.createElement.apply(null, s);
				}
				return o.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		9067: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => d,
				});
			var o = r(7462),
				n = r(3366),
				i = (r(7294), r(3905)),
				s = ["components"],
				a = {
					title: "Changelog: swc v1.2.55",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/05/07/swc-1.2.55",
					source: "@site/blog/2021-05-07-swc-1.2.55.md",
					title: "Changelog: swc v1.2.55",
					description: "Bugfixes",
					date: "2021-05-07T00:00:00.000Z",
					formattedDate: "May 7, 2021",
					tags: [],
					readingTime: 1.89,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.57",
						permalink: "/blog/2021/05/11/swc-1.2.57",
					},
					nextItem: {
						title: "Changelog: swc v1.2.54",
						permalink: "/blog/2021/04/20/swc-1.2.54",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Type definition of FunctionDeclaration (#1602)",
								id: "type-definition-of-functiondeclaration-1602",
								children: [],
							},
							{
								value: "optimizer: Fix for do-while loops (#1518)",
								id: "optimizer-fix-for-do-while-loops-1518",
								children: [],
							},
							{
								value: "Codegen of null character (#1619)",
								id: "codegen-of-null-character-1619",
								children: [],
							},
							{
								value: "preset-env: Import order of core-js modules (#1605)",
								id: "preset-env-import-order-of-core-js-modules-1605",
								children: [],
							},
							{
								value: "<code>&amp;nbsp;</code> in jsx entities (#1446)",
								id: "nbsp-in-jsx-entities-1446",
								children: [],
							},
							{
								value: "Type definition of options (#1621)",
								id: "type-definition-of-options-1621",
								children: [],
							},
							{
								value: "HasDecorators.decorators: optional (#1603)",
								id: "hasdecoratorsdecorators-optional-1603",
								children: [],
							},
							{
								value: "Super in sequence expressions (#1617)",
								id: "super-in-sequence-expressions-1617",
								children: [],
							},
							{
								value: "TypeScript dynamic imports (#1614)",
								id: "typescript-dynamic-imports-1614",
								children: [],
							},
							{
								value: "TypeScript common js exports (#1593)",
								id: "typescript-common-js-exports-1593",
								children: [],
							},
							{
								value: "optimizer: Preserve x instanceof Object (#1630)",
								id: "optimizer-preserve-x-instanceof-object-1630",
								children: [],
							},
							{
								value: "react: Pass ordering (#1639)",
								id: "react-pass-ordering-1639",
								children: [],
							},
							{
								value: "resolver: Fix setter properties (#)",
								id: "resolver-fix-setter-properties-",
								children: [],
							},
							{
								value: "Type definition of JSXOpeningElement (#1608)",
								id: "type-definition-of-jsxopeningelement-1608",
								children: [],
							},
							{
								value: "Method with keyword names (#1651)",
								id: "method-with-keyword-names-1651",
								children: [],
							},
						],
					},
					{
						value: "Performance improvements",
						id: "performance-improvements",
						children: [
							{
								value: "bundler: Skip works (#1599)",
								id: "bundler-skip-works-1599",
								children: [],
							},
							{
								value: "bundler: Rework (#1601)",
								id: "bundler-rework-1601",
								children: [],
							},
							{
								value: "bundler: Detection of circular imports (#1610)",
								id: "bundler-detection-of-circular-imports-1610",
								children: [],
							},
						],
					},
				],
				h = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, n.Z)(e, s);
				return (0, i.kt)(
					"wrapper",
					(0, o.Z)({}, h, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "type-definition-of-functiondeclaration-1602" },
						"Type definition of FunctionDeclaration (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1602",
							},
							"#1602",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/wavesheep",
							},
							"@wavesheep",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "optimizer-fix-for-do-while-loops-1518" },
						"optimizer: Fix for do-while loops (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1618",
							},
							"#1518",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the optimizer of ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" errornously removed some loops.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/wbinnssmith",
							},
							"@wbinnssmith",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-of-null-character-1619" },
						"Codegen of null character (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1619",
							},
							"#1619",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "\\x00"),
						" instead of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "\\00"),
						" for null charcters.",
					),
					(0, i.kt)(
						"h3",
						{
							id: "preset-env-import-order-of-core-js-modules-1605",
						},
						"preset-env: Import order of core-js modules (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1605",
							},
							"#1605",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Now ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" uses indexed sets for managing imports.",
					),
					(0, i.kt)(
						"h3",
						{ id: "nbsp-in-jsx-entities-1446" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "&nbsp;"),
						" in jsx entities (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1446",
							},
							"#1446",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc blindly treated ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "&nbsp;"),
						" in jsx entities as a whitespace (because it is) and it resulted in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "&nbsp;"),
						" being removed. This is now fixed and it works as expected.",
					),
					(0, i.kt)(
						"h3",
						{ id: "type-definition-of-options-1621" },
						"Type definition of options (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1621",
							},
							"#1621",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "hasdecoratorsdecorators-optional-1603" },
						"HasDecorators.decorators: optional (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1603",
							},
							"#1603",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Now ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Parameter",
						),
						" allows ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"decorators",
						),
						" property to be skipped.",
					),
					(0, i.kt)(
						"h3",
						{ id: "super-in-sequence-expressions-1617" },
						"Super in sequence expressions (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1617",
							},
							"#1617",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc miscompiled code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A extends B {\n  foo() {\n    super.foo(), bar();\n  }\n}\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-dynamic-imports-1614" },
						"TypeScript dynamic imports (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1614",
							},
							"#1614",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"There was a bug which occurs if the dynamic import is only import of a module.",
					),
					(0, i.kt)("p", null, "Affected code looks like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'(async () => {\n  const example = await import("./example");\n  console.log(example.foo);\n})();\n',
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "typescript-common-js-exports-1593" },
						"TypeScript common js exports (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1593",
							},
							"#1593",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export Foo = 'example';\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "optimizer-preserve-x-instanceof-object-1630" },
						"optimizer: Preserve x instanceof Object (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1630",
							},
							"#1630",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" mis-optimized",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"let x = undefined;\nif (x instanceof Object) {\n  console.log(x.obj);\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/mischnic",
							},
							"@mischnic",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "react-pass-ordering-1639" },
						"react: Pass ordering (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1639",
							},
							"#1639",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/mischnic",
							},
							"@mischnic",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "resolver-fix-setter-properties-" },
						"resolver: Fix setter properties (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1647",
							},
							"#",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Preivously the scope analyzer of ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" had a bug related to setter property.\nBut this bug is not expected to affect any real world code because it only affects setter properties.",
					),
					(0, i.kt)(
						"h3",
						{ id: "type-definition-of-jsxopeningelement-1608" },
						"Type definition of JSXOpeningElement (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1608",
							},
							"#1608",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/vemoo",
							},
							"@vemoo",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "method-with-keyword-names-1651" },
						"Method with keyword names (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1651",
							},
							"#1651",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"This bug would affect code which uses a keyword as a method name.",
					),
					(0, i.kt)(
						"h2",
						{ id: "performance-improvements" },
						"Performance improvements",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-skip-works-1599" },
						"bundler: Skip works (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1599",
							},
							"#1599",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" did analysis for all modules, even if it does not have any imports.\nIt's not necessary and it's now removed.",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-rework-1601" },
						"bundler: Rework (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1601",
							},
							"#1601",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" had a faulty design, which made the bundler slow.\nThese legacy codes are removed, and ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" becomes much faster.",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-detection-of-circular-imports-1610" },
						"bundler: Detection of circular imports (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1610",
							},
							"#1610",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"With the release, ",
						(0, i.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" does not perform graph operations.\nIt makes bundling modules with lots of ciruclar graph much faster.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
