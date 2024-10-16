"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7354],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => d, kt: () => m });
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
			function l(e) {
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
			var s = r.createContext({}),
				c = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				d = function (e) {
					var t = c(e.components);
					return r.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				p = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						d = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(n),
						m = a,
						h = u["".concat(s, ".").concat(m)] || u[m] || p[m] || o;
					return n
						? r.createElement(
								h,
								l(l({ ref: t }, d), {}, { components: n }),
							)
						: r.createElement(h, l({ ref: t }, d));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						l = new Array(o);
					l[0] = u;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(l[1] = i);
					for (var c = 2; c < o; c++) l[c] = n[c];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		5478: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => d,
					default: () => u,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				l = ["components"],
				i = {
					title: "Changelog: swc v1.2.42",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2020/12/29/swc-1.2.42",
					source: "@site/blog/2020-12-29-swc-1.2.42.md",
					title: "Changelog: swc v1.2.42",
					description: "Bugfixes",
					date: "2020-12-29T00:00:00.000Z",
					formattedDate: "December 29, 2020",
					tags: [],
					readingTime: 1.77,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.43",
						permalink: "/blog/2020/12/30/swc-1.2.43",
					},
					nextItem: {
						title: "Changelog: swc v1.2.41",
						permalink: "/blog/2020/12/22/swc-1.2.41",
					},
				},
				d = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "bundler: Handle of <code>export *</code> correctly. (#1264)",
								id: "bundler-handle-of-export--correctly-1264",
								children: [],
							},
							{
								value: "bundler: Fix statement ordering. (#1264)",
								id: "bundler-fix-statement-ordering-1264",
								children: [],
							},
							{
								value: "bundler: Group statements from same module. (#1264)",
								id: "bundler-group-statements-from-same-module-1264",
								children: [],
							},
							{
								value: "fixer: Handle assignmnet in new exprssion correctly. (#1264)",
								id: "fixer-handle-assignmnet-in-new-exprssion-correctly-1264",
								children: [],
							},
							{
								value: "fixer: Handle comma expression in new exprssion correctly. (#1264)",
								id: "fixer-handle-comma-expression-in-new-exprssion-correctly-1264",
								children: [],
							},
							{
								value: "bundler: Prevent duplicate variable. (#1296)",
								id: "bundler-prevent-duplicate-variable-1296",
								children: [],
							},
							{
								value: "bundler: Handle keywords. (#1296)",
								id: "bundler-handle-keywords-1296",
								children: [],
							},
							{
								value: "dce: Prevent tags in tagged template literals. (#1296)",
								id: "dce-prevent-tags-in-tagged-template-literals-1296",
								children: [],
							},
							{
								value: "dce: Handle throw statement correctly. (#1296)",
								id: "dce-handle-throw-statement-correctly-1296",
								children: [],
							},
						],
					},
				],
				p = { toc: d };
			function u(e) {
				var t = e.components,
					n = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "bundler-handle-of-export--correctly-1264" },
						"bundler: Handle of ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"export *",
						),
						" correctly. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1264",
							},
							"#1264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the bundler of ",
						"[swc][]",
						" did not exclude ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "default"),
						" while handling ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export *",
						),
						".\nThis is wrong and it's fixed.\nAs a result, you can now export default while using ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * from './foo'",
						),
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export { default } from "./foo";\nexport * from "./foo";\n',
						),
					),
					(0, o.kt)("p", null, "The code above now works."),
					(0, o.kt)(
						"h3",
						{ id: "bundler-fix-statement-ordering-1264" },
						"bundler: Fix statement ordering. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1264",
							},
							"#1264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Order of statements are now preserved.\nPreviously, the bundler only considers about dependancy, but it resulted in some bugs so I patched it to preserve original order.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "bundler-group-statements-from-same-module-1264",
						},
						"bundler: Group statements from same module. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1264",
							},
							"#1264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"While flattening all statements, the bundler now prefers statements from same module.\nIt will help debugging the bundle, as related statements live at simillar place.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "fixer-handle-assignmnet-in-new-exprssion-correctly-1264",
						},
						"fixer: Handle assignmnet in new exprssion correctly. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1264",
							},
							"#1264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						"[swc][]",
						" errornously removed parenthesis from ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"const a = new (a = b);",
						),
						".\nIt resulted in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"const a = new a = b;",
						),
						", which has different meaning.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "fixer-handle-comma-expression-in-new-exprssion-correctly-1264",
						},
						"fixer: Handle comma expression in new exprssion correctly. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1264",
							},
							"#1264",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						"[swc][]",
						" errornously removed parenthesis from ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"const a = new (a, b);",
						),
						".\nIt resulted in ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"const a = new a, b;",
						),
						" , which has different meaning.\nThis is now fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-prevent-duplicate-variable-1296" },
						"bundler: Prevent duplicate variable. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1296",
							},
							"#1296",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"This bug occurrs when ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * as foo",
						),
						" is mixed with ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export * from ''",
						),
						" more than three times, and with ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "import"),
						".\nIt's now fixed and bundler bundles it correctly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-handle-keywords-1296" },
						"bundler: Handle keywords. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1296",
							},
							"#1296",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"EcmaScript allows using keywords as an identifier in some places.\nAs the bundler flatten statements, it made a variable named ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"instanceof",
						),
						" when it met ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export { foo as instanceof }",
						),
						".",
					),
					(0, o.kt)(
						"p",
						null,
						"But this is a bug and it's now renamed to something other.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "dce-prevent-tags-in-tagged-template-literals-1296",
						},
						"dce: Prevent tags in tagged template literals. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1296",
							},
							"#1296",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The dce was too aggresive and it removed tagged template literals.\nIt now preserves as tagged template literals can have side effect.",
					),
					(0, o.kt)("p", null, "Note:"),
					(0, o.kt)(
						"blockquote",
						null,
						(0, o.kt)(
							"p",
							{ parentName: "blockquote" },
							"If you are using some old target, you are not affected.",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "dce-handle-throw-statement-correctly-1296" },
						"dce: Handle throw statement correctly. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1296",
							},
							"#1296",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Again, it errornously removed something used by throw statement.\nI patched it to mark argument as used correctly.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
