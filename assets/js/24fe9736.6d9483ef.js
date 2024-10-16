"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7116],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
			var n = r(7294);
			function o(e, t, r) {
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
			function a(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: a(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var p = n.createContext({}),
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return n.createElement(
						p.Provider,
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
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						h = o,
						d = m["".concat(p, ".").concat(h)] || m[h] || u[h] || a;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = m;
					var s = {};
					for (var p in t) hasOwnProperty.call(t, p) && (s[p] = t[p]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(i[1] = s);
					for (var c = 2; c < a; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		2963: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				s = {
					title: "Changelog: swc v1.2.62",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2021/06/27/swc-1.2.62",
					source: "@site/blog/2021-06-27-swc-1.2.62.md",
					title: "Changelog: swc v1.2.62",
					description: "Bugfixes",
					date: "2021-06-27T00:00:00.000Z",
					formattedDate: "June 27, 2021",
					tags: [],
					readingTime: 0.88,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.63",
						permalink: "/blog/2021/07/05/swc-1.2.63",
					},
					nextItem: {
						title: "Changelog: swc v1.2.61",
						permalink: "/blog/2021/06/16/swc-1.2.61",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Comments (#1165)",
								id: "comments-1165",
								children: [],
							},
							{
								value: "modules: Var names (#1787)",
								id: "modules-var-names-1787",
								children: [],
							},
							{
								value: "typescript: Object pattern (#1835)",
								id: "typescript-object-pattern-1835",
								children: [],
							},
							{
								value: "Fix helper used by module pass (#1829)",
								id: "fix-helper-used-by-module-pass-1829",
								children: [],
							},
						],
					},
					{
						value: "fixer: call in new #1857",
						id: "fixer-call-in-new-1857",
						children: [
							{
								value: "optimizer: nullish coalescing operator (#1851)",
								id: "optimizer-nullish-coalescing-operator-1851",
								children: [],
							},
						],
					},
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Supports for path aliasing (#702)",
								id: "supports-for-path-aliasing-702",
								children: [],
							},
							{
								value: "Better sourcemap (, , )",
								id: "better-sourcemap---",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "comments-1165" },
						"Comments (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1165",
							},
							"#1165",
						),
						")",
					),
					(0, a.kt)("p", null, "swc doesn't drop comments anymore."),
					(0, a.kt)(
						"h3",
						{ id: "modules-var-names-1787" },
						"modules: Var names (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1787",
							},
							"#1787",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc had a bug which can break code if file name meets some condition.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/cspotcode",
							},
							"@cspotcode",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-object-pattern-1835" },
						"typescript: Object pattern (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1835",
							},
							"#1835",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { A } from "./a";\nimport { B } from "./b";\n\nconst { A: AB } = B;\n\nconsole.log(A, AB);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previosuly swc dropped ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "A"),
						" because of bug in variable collector.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Austaras",
							},
							"@Austaras",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "fix-helper-used-by-module-pass-1829" },
						"Fix helper used by module pass (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1829",
							},
							"#1829",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc sometimes used wrong helper for module imports.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/cspotcode",
							},
							"@cspotcode",
						),
						".",
					),
					(0, a.kt)(
						"h2",
						{ id: "fixer-call-in-new-1857" },
						"fixer: call in new ",
						(0, a.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/pull/1857",
							},
							"#1857",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"new (foo())();\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Previously swc incorrrectly striped ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "(foo())"),
						" as ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "foo()"),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/motiz88",
							},
							"@motiz88",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "optimizer-nullish-coalescing-operator-1851" },
						"optimizer: nullish coalescing operator (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1851",
							},
							"#1851",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'x ?? (x = "abc");\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Preivousy the optmizer of swc incorrectly optimized it as ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							'x = "abc";',
						),
						".\nIt's now fixed.",
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"h3",
						{ id: "supports-for-path-aliasing-702" },
						"Supports for path aliasing (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/702",
							},
							"#702",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"swc now supports ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "paths"),
						", which uses identical syntax for ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "paths"),
						" in ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"tsconfig.json",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "better-sourcemap---" },
						"Better sourcemap (",
						(0, a.kt)("a", {
							parentName: "h3",
							href: "https://github.com/swc-project/swc/issues/1796",
						}),
						", ",
						(0, a.kt)("a", {
							parentName: "h3",
							href: "https://github.com/swc-project/swc/issues/1713",
						}),
						", ",
						(0, a.kt)("a", {
							parentName: "h3",
							href: "https://github.com/swc-project/swc/issues/1685",
						}),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Source map generated by swc is greayly improved.",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
