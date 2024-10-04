"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6066],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => h });
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
			function s(e, t) {
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
						? s(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: s(Object(n)).forEach(function (t) {
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
							s = Object.keys(e);
						for (r = 0; r < s.length; r++)
							(n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (r = 0; r < s.length; r++)
						(n = s[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var p = r.createContext({}),
				l = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = l(e.components);
					return r.createElement(
						p.Provider,
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
						s = e.originalType,
						p = e.parentName,
						c = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(n),
						h = a,
						m = d["".concat(p, ".").concat(h)] || d[h] || u[h] || s;
					return n
						? r.createElement(
								m,
								o(o({ ref: t }, c), {}, { components: n }),
							)
						: r.createElement(m, o({ ref: t }, c));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = n.length,
						o = new Array(s);
					o[0] = d;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var l = 2; l < s; l++) o[l] = n[l];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		258: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => c,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				s = (n(7294), n(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.1.13",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2020/01/17/swc-1.1.13",
					source: "@site/blog/2020-01-17-swc-1.1.13.md",
					title: "Changelog: swc v1.1.13",
					description: "Bugfixes",
					date: "2020-01-17T00:00:00.000Z",
					formattedDate: "January 17, 2020",
					tags: [],
					readingTime: 1.45,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.14",
						permalink: "/blog/2020/01/23/swc-1.1.14",
					},
					nextItem: {
						title: "Changelog: swc v1.1.12",
						permalink: "/blog/2020/01/08/swc-1.1.12",
					},
				},
				c = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Class methods (#579)",
								id: "class-methods-579",
								children: [],
							},
							{
								value: "jsx container (#584)",
								id: "jsx-container-584",
								children: [],
							},
							{
								value: "hygiene (#591)",
								id: "hygiene-591",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "TypePredicate.asserts (#567)",
								id: "typepredicateasserts-567",
								children: [],
							},
						],
					},
					{
						value: "Span improvements",
						id: "span-improvements",
						children: [
							{
								value: "TypePredicate (#580)",
								id: "typepredicate-580",
								children: [],
							},
							{
								value: "Class (#581)",
								id: "class-581",
								children: [],
							},
							{
								value: "Jsx (#582)",
								id: "jsx-582",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, o);
				return (0, s.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "class-methods-579" },
						"Class methods (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/579",
							},
							"#579",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"There was a bug of swc that identifiers in the body of class methods are not handled by resolver pass. It results in ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/578",
							},
							"a bug",
						),
						" and it's now fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "jsx-container-584" },
						"jsx container (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/584",
							},
							"#584",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously you cannot get the span of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "{4}"),
						". Instead, you can only get span of ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "4"),
						".",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const t = <test other={4} />;\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This is fixed by ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/592",
							},
							"a pr",
						),
						", and you can now get the span of jsx expression container.",
					),
					(0, s.kt)(
						"h3",
						{ id: "hygiene-591" },
						"hygiene (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/591",
							},
							"#591",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Initialization of exported variable is now properly handled. Previously,",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export class Example {\n  @foo() bar = "1";\n  @foo() baz = "2";\n}\n',
						),
					),
					(0, s.kt)("p", null, "was miscompiled, while"),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'class Example {\n  @foo() bar = "1";\n  @foo() baz = "2";\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"is compiled correctly (and tested). I added some tests to prevent regression.",
					),
					(0, s.kt)("h2", { id: "new-features" }, "New features"),
					(0, s.kt)(
						"h3",
						{ id: "typepredicateasserts-567" },
						"TypePredicate.asserts (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/567",
							},
							"#567",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Starting with v1.1.13, ",
						(0, s.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can parse asserts type predicate.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'function isString(x: unknown): asserts x is string {\n  if (typeof x !== "string") throw new Error("Not a string.");\n}\n',
						),
					),
					(0, s.kt)(
						"p",
						null,
						"This is a feature of typescript 3.7. Also note that type is changed slightly.",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export interface TsTypePredicate extends Node, HasSpan {\n  type: "TsTypePredicate";\n\n  // This is added\n  asserts: boolean;\n\n  paramName: TsThisTypeOrIdent;\n  typeAnnotation: TsTypeAnnotation;\n}\n',
						),
					),
					(0, s.kt)(
						"h2",
						{ id: "span-improvements" },
						"Span improvements",
					),
					(0, s.kt)(
						"p",
						null,
						"Thanks to ",
						(0, s.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/dsherret",
							},
							"@dsherret",
						),
						", there are more span improvements.",
					),
					(0, s.kt)(
						"h3",
						{ id: "typepredicate-580" },
						"TypePredicate (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/580",
							},
							"#580",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Previously starts of span of some type predicates started too early and it's now fixed so that the span points type predicate correctly.",
					),
					(0, s.kt)(
						"h3",
						{ id: "class-581" },
						"Class (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/581",
							},
							"#581",
						),
						")",
					),
					(0, s.kt)(
						"ul",
						null,
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Spans of class members and classes should include decorators.",
						),
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Fix hi position for class parameter properties.",
						),
						(0, s.kt)(
							"li",
							{ parentName: "ul" },
							"Fix span of members with accessibility.",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "jsx-582" },
						"Jsx (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/582",
							},
							"#582",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"Span of jsx opening element, closing element, spread child, and expression containers are fixed.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
