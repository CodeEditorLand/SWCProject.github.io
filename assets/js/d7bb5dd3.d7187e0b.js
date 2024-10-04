"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6408],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => m });
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
			function s(e) {
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
			function i(e, t) {
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
			var c = n.createContext({}),
				l = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = l(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				p = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = l(r),
						m = o,
						h = d["".concat(c, ".").concat(m)] || d[m] || p[m] || a;
					return r
						? n.createElement(
								h,
								s(s({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(h, s({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						s = new Array(a);
					s[0] = d;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(s[1] = i);
					for (var l = 2; l < a; l++) s[l] = r[l];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		979: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => l,
					toc: () => u,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.9",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				l = {
					permalink: "/blog/2020/07/26/swc-1.2.9",
					source: "@site/blog/2020-07-26-swc-1.2.9.md",
					title: "Changelog: swc v1.2.9",
					description: "Bugfixes",
					date: "2020-07-26T00:00:00.000Z",
					formattedDate: "July 26, 2020",
					tags: [],
					readingTime: 1.885,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.10",
						permalink: "/blog/2020/07/31/swc-1.2.10",
					},
					nextItem: {
						title: "Changelog: swc v1.2.8",
						permalink: "/blog/2020/07/05/swc-1.2.8",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "hygiene of class properties (#892)",
								id: "hygiene-of-class-properties-892",
								children: [],
							},
							{
								value: "decorators on class and method (#862)",
								id: "decorators-on-class-and-method-862",
								children: [],
							},
							{
								value: "parameter decorators (#863)",
								id: "parameter-decorators-863",
								children: [],
							},
						],
					},
					{
						value: "Performance",
						id: "performance",
						children: [
							{
								value: "Parser (#893)",
								id: "parser-893",
								children: [],
							},
						],
					},
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "works with stable rustc (#886)",
								id: "works-with-stable-rustc-886",
								children: [],
							},
						],
					},
				],
				p = { toc: u };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, p, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "hygiene-of-class-properties-892" },
						"hygiene of class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/892",
							},
							"#892",
						),
						")",
					),
					(0, a.kt)("p", null, "Previously, swc miscompiled"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const DURATION = 1000;\n\nexport class HygieneTest {\n  private readonly duration: number = DURATION;\n\n  constructor(duration?: number) {\n    this.duration = duration ?? DURATION;\n  }\n\n  getDuration() {\n    return this.duration;\n  }\n}\n",
						),
					),
					(0, a.kt)("p", null, "as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const DURATION1 = 1000;\nclass HygieneTest {\n  getDuration() {\n    return this.duration;\n  }\n  constructor(duration) {\n    _defineProperty(this, "duration", DURATION1);\n    this.duration =\n      duration !== null && duration !== void 0 ? duration : DURATION;\n  }\n}\nexports.HygieneTest = HygieneTest;\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This issue happened because class_properties pass did not check if an identifier used in a class constructor is reference. The bug is fixed by changing identifier only if it's used as a binding identifier.",
					),
					(0, a.kt)(
						"p",
						null,
						"The name collision check is required because in the code below, ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "bar"),
						" should be ",
						(0, a.kt)("inlineCode", { parentName: "p" }, '"bar"'),
						', not "foo".',
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'var foo = "bar";\n\nclass Foo {\n  bar = foo;\n  static bar = baz;\n\n  constructor() {\n    var foo = "foo";\n    var baz = "baz";\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "decorators-on-class-and-method-862" },
						"decorators on class and method (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/862",
							},
							"#862",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handle decorators on properties properly, even if it does not have default value.\nPreviously typescript_strip pass removed class properties without value, but I removed such behavior and it works.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'@Entity()\nexport class Product extends TimestampedEntity {\n  @PrimaryGeneratedColumn("uuid")\n  public id!: string;\n\n  @Column()\n  public price!: number;\n\n  @Column({ enum: ProductType })\n  public type!: ProductType;\n\n  @Column()\n  public productEntityId!: string;\n\n  /* ANCHOR: Relations ------------------------------------------------------ */\n  @OneToMany(() => Order, (order) => order.product)\n  public orders!: Order[];\n\n  @OneToMany(() => Discount, (discount) => discount.product)\n  public discounts!: Discount[];\n}\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "parameter-decorators-863" },
						"parameter decorators (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/863",
							},
							"#863",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"While babel does not support this feature, I implemented it because ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" supports it. Code like below now works well.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"function foo() {\n  return function (target, member, ix) {\n    // ...\n  };\n}\n\nclass ProductController {\n  findById(\n    @foo()\n    id: number\n  ) {\n    // ...\n  }\n}\n",
						),
					),
					(0, a.kt)("h2", { id: "performance" }, "Performance"),
					(0, a.kt)(
						"h3",
						{ id: "parser-893" },
						"Parser (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/893",
							},
							"#893",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_ecma_parser",
						),
						" becomes faster by reducing the size of error struct and by providing single-threaded error reporting. Also it reduced possibility of stack overflow.",
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"h3",
						{ id: "works-with-stable-rustc-886" },
						"works with stable rustc (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/886",
							},
							"#886",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" used nightly rustc, which can have some bugs. After very hard work, I've managed to make swc to use stable rustc.",
					),
					(0, a.kt)(
						"p",
						null,
						"This would allow more rust users to use swc as a crate for their own projects.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
