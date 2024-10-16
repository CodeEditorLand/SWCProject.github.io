"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2586],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => m });
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
			function s(e) {
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
			function c(e, t) {
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
			var l = r.createContext({}),
				i = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = i(e.components);
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						p = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = i(n),
						m = a,
						g = d["".concat(l, ".").concat(m)] || d[m] || u[m] || o;
					return n
						? r.createElement(
								g,
								s(s({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(g, s({ ref: t }, p));
				});
			function m(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = d;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(s[1] = c);
					for (var i = 2; i < o; i++) s[i] = n[i];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		1276: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => i,
					toc: () => p,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				c = {
					title: "Changelog: swc v1.1.49",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				i = {
					permalink: "/blog/2020/05/28/swc-1.1.49",
					source: "@site/blog/2020-05-28-swc-1.1.49.md",
					title: "Changelog: swc v1.1.49",
					description: "Bugfixes",
					date: "2020-05-28T00:00:00.000Z",
					formattedDate: "May 28, 2020",
					tags: [],
					readingTime: 0.75,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.51",
						permalink: "/blog/2020/05/30/swc-1.1.51",
					},
					nextItem: {
						title: "Hotfix: swc v1.1.50",
						permalink: "/blog/2020/05/28/swc-1.1.50",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "typescript strip pass (#800)",
								id: "typescript-strip-pass-800",
								children: [],
							},
							{
								value: "(new) reserved words pass (#801)",
								id: "new-reserved-words-pass-801",
								children: [],
							},
							{
								value: "block scoping pass (#803)",
								id: "block-scoping-pass-803",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "typescript-strip-pass-800" },
						"typescript strip pass (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/800",
							},
							"#800",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" did not drop type parameters in classes. This caused",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class FeatureSet<Name extends string> {\n  log(a: Name) {\n    console.log(a);\n  }\n}\n",
						),
					),
					(0, o.kt)("p", null, "to be compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class FeatureSet<Name extends string> {\n  log(a) {\n    console.log(a);\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is obviously not a valid javascript. This is now fixed and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export class FeatureSet {\n  log(a) {\n    console.log(a);\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "new-reserved-words-pass-801" },
						"(new) reserved words pass (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/801",
							},
							"#801",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" did not handle keywords if you target es5+. But it's wrong because es2019 also has reserved words.\nSo I added a new pass to rename reserved words.",
					),
					(0, o.kt)("p", null, "Problematic codes include"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class Foo {\n  delete(object: string, key: string) {\n    delete object[key];\n  }\n}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "block-scoping-pass-803" },
						"block scoping pass (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/803",
							},
							"#803",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"block_scoping",
						),
						" pass emits almost identical output with babel. It can now handle continue, break and return correctly.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
