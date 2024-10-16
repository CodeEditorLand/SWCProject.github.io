"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4091],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => h });
			var n = r(7294);
			function a(e, t, r) {
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
			function s(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						r.push.apply(r, n);
				}
				return r;
			}
			function o(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? s(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: s(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							s = Object.keys(e);
						for (n = 0; n < s.length; n++)
							(r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (n = 0; n < s.length; n++)
						(r = s[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var l = n.createContext({}),
				c = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = c(e.components);
					return n.createElement(
						l.Provider,
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						s = e.originalType,
						l = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(r),
						h = a,
						m = d["".concat(l, ".").concat(h)] || d[h] || u[h] || s;
					return r
						? n.createElement(
								m,
								o(o({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(m, o({ ref: t }, p));
				});
			function h(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = r.length,
						o = new Array(s);
					o[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var c = 2; c < s; c++) o[c] = r[c];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		9456: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => p,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				s = (r(7294), r(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.2.59",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2021/05/30/swc-1.2.59",
					source: "@site/blog/2021-05-30-swc-1.2.59.md",
					title: "Changelog: swc v1.2.59",
					description: "Bugfixes",
					date: "2021-05-30T00:00:00.000Z",
					formattedDate: "May 30, 2021",
					tags: [],
					readingTime: 2.45,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.60",
						permalink: "/blog/2021/06/07/swc-1.2.60",
					},
					nextItem: {
						title: "Changelog: swc v1.2.58",
						permalink: "/blog/2021/05/21/swc-1.2.58",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Fix for <code>arguments</code> in for loops (#1462)",
								id: "fix-for-arguments-in-for-loops-1462",
								children: [],
							},
							{
								value: "regnerator: var in proper level (#1718)",
								id: "regnerator-var-in-proper-level-1718",
								children: [],
							},
							{
								value: "escapes in jsx attribute values (#1661)",
								id: "escapes-in-jsx-attribute-values-1661",
								children: [],
							},
							{
								value: "regenerator: <code>||</code> handled properly (#1684)",
								id: "regenerator--handled-properly-1684",
								children: [],
							},
							{
								value: "bundler: Complex circular imports (#1739)",
								id: "bundler-complex-circular-imports-1739",
								children: [],
							},
							{
								value: "typscript: Arrow expr with class expr https://github.com/swc-project/swc/issues/1738",
								id: "typscript-arrow-expr-with-class-expr-httpsgithubcomswc-projectswcissues1738",
								children: [],
							},
							{
								value: "codegen: Unicode characters (#1744)",
								id: "codegen-unicode-characters-1744",
								children: [],
							},
							{
								value: "<code>this</code> in tagged template literals (#1742)",
								id: "this-in-tagged-template-literals-1742",
								children: [],
							},
							{
								value: "parser: TS1031 https://github.com/swc-project/swc/issues/1751",
								id: "parser-ts1031-httpsgithubcomswc-projectswcissues1751",
								children: [],
							},
							{
								value: "API type definition #1746",
								id: "api-type-definition-1746",
								children: [],
							},
							{
								value: "bundler: Support for file names ending with period. (#1748)",
								id: "bundler-support-for-file-names-ending-with-period-1748",
								children: [],
							},
							{
								value: "bundler: Updated list for core modules. (#1749)",
								id: "bundler-updated-list-for-core-modules-1749",
								children: [],
							},
							{
								value: "codegen: Class with minify and higher target (#1764)",
								id: "codegen-class-with-minify-and-higher-target-1764",
								children: [],
							},
						],
					},
					{
						value: "New platform support",
						id: "new-platform-support",
						children: [
							{
								value: "FreeBSD (#1758)",
								id: "freebsd-1758",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "fix-for-arguments-in-for-loops-1462" },
						"Fix for ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"arguments",
						),
						" in for loops (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1462",
							},
							"#1462",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the helper of swc was broken by this bug.\nIt's now fixed and new version of ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/helpers",
						),
						" works properly.",
					),
					(0, s.kt)(
						"h3",
						{ id: "regnerator-var-in-proper-level-1718" },
						"regnerator: var in proper level (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1718",
							},
							"#1718",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc might break codes like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'async function scanUser(groups: { users: number[] }[]) {\n  await Promise.all(\n    groups.map(async ({ users }) => {\n      for (const user of users) {\n        console.log("user", user);\n        await new Promise((resolve) => setTimeout(resolve, 30));\n      }\n    })\n  );\n}\n\nscanUser([{ users: [1, 2, 3, 4, 5] }, { users: [11, 12, 13, 14, 15] }]);\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"because the variable for iterator are recycled while it should not.\nIt's now fixed by injecting variables at proper level.",
					),
					(0, s.kt)(
						"h3",
						{ id: "escapes-in-jsx-attribute-values-1661" },
						"escapes in jsx attribute values (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1661",
							},
							"#1661",
						),
						")",
					),
					(0, s.kt)("p", null, "The afffected code looks like"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log(<h1 value="abc\\nas">s</h1>);\n',
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "regenerator--handled-properly-1684" },
						"regenerator: ",
						(0, s.kt)("inlineCode", { parentName: "h3" }, "||"),
						" handled properly (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1684",
							},
							"#1684",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc had a bug related to ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "await"),
						" in rhs of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "||"),
						" and code like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const cache = {};\n\nasync function getThing(key) {\n  const it = cache[key] || (await fetchThing(key));\n  return it;\n}\n\nfunction fetchThing(key) {\n  return Promise.resolve(key.toUpperCase()).then((val) => (cache[key] = val));\n}\n",
						),
					),
					(0, s.kt)("p", null, "was miscompiled."),
					(0, s.kt)("p", null, "It's now fixed."),
					(0, s.kt)(
						"h3",
						{ id: "bundler-complex-circular-imports-1739" },
						"bundler: Complex circular imports (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1739",
							},
							"#1739",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"In a very complex cirular import scenario, the bundler may hang because of infinite recursions.",
					),
					(0, s.kt)("p", null, "It's now fixed."),
					(0, s.kt)(
						"h3",
						{
							id: "typscript-arrow-expr-with-class-expr-httpsgithubcomswc-projectswcissues1738",
						},
						"typscript: Arrow expr with class expr ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1738",
							},
							"https://github.com/swc-project/swc/issues/1738",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The typescript type stripped of swc compiled arrow expressions with a class expression as a body wonrly.",
					),
					(0, s.kt)(
						"p",
						null,
						"The affected code looks like and it's now fixed.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const fn = () => class Bug {};\nconsole.log(fn());\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "codegen-unicode-characters-1744" },
						"codegen: Unicode characters (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1744",
							},
							"#1744",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc could break codes for old targets like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'console.log("\ud83e\udd2d \xfc");\n',
						),
					),
					(0, s.kt)("p", null, "It's not fixed."),
					(0, s.kt)(
						"h3",
						{ id: "this-in-tagged-template-literals-1742" },
						(0, s.kt)("inlineCode", { parentName: "h3" }, "this"),
						" in tagged template literals (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1742",
							},
							"#1742",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"swc, just like babel, had a bug related to ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "this"),
						" in tagged template literals.\nThis bug could break code like",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {\n  #tag() {\n    return this;\n  }\n\n  #tag2 = this.#tag;\n\n  constructor() {\n    const receiver = this.#tag`tagged template`;\n    console.log(receiver === this);\n\n    const receiver2 = this.#tag2`tagged template`;\n    console.log(receiver2 === this);\n  }\n}\nnew Foo();\n",
						),
					),
					(0, s.kt)(
						"h3",
						{
							id: "parser-ts1031-httpsgithubcomswc-projectswcissues1751",
						},
						"parser: TS1031 ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1751",
							},
							"https://github.com/swc-project/swc/issues/1751",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc wrongly emitted an error for",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class Foo {\n  declare a: string;\n}\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Shinyaigeek",
							},
							"@Shinyaigeek",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "api-type-definition-1746" },
						"API type definition ",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1746",
							},
							"#1746",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"The typescript type checker will not report error for ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"keepClassNames",
						),
						" anymore.",
					),
					(0, s.kt)(
						"h3",
						{
							id: "bundler-support-for-file-names-ending-with-period-1748",
						},
						"bundler: Support for file names ending with period. (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1748",
							},
							"#1748",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously the bundler failed to bundler ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"core-js@^2",
						),
						" because of a bug in the resolver.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{ id: "bundler-updated-list-for-core-modules-1749" },
						"bundler: Updated list for core modules. (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1749",
							},
							"#1749",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"node.js added some core modules and using them with the bundler resulted in an error because it tried to resolve it in ",
						(0, s.kt)(
							"inlineCode",
							{ parentName: "p" },
							"node_modules",
						),
						".",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						".",
					),
					(0, s.kt)(
						"h3",
						{
							id: "codegen-class-with-minify-and-higher-target-1764",
						},
						"codegen: Class with minify and higher target (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1764",
							},
							"#1764",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously swc had a codegen bug related to a class with ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "es2016"),
						"+ target and minify enabled.",
					),
					(0, s.kt)(
						"p",
						null,
						"Fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Shinyaigeek",
							},
							"@Shinyaigeek",
						),
						".",
					),
					(0, s.kt)(
						"h2",
						{ id: "new-platform-support" },
						"New platform support",
					),
					(0, s.kt)(
						"h3",
						{ id: "freebsd-1758" },
						"FreeBSD (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1758",
							},
							"#1758",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", the author of ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/napi-rs/napi-rs",
							},
							"a wonderful rust library",
						),
						" for creating node modules, added supports for FreeBSD.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
