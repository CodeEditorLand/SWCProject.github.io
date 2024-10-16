"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6805],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => m });
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
			function l(e, t) {
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
						? l(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: l(Object(r)).forEach(function (t) {
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
							l = Object.keys(e);
						for (n = 0; n < l.length; n++)
							(r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (n = 0; n < l.length; n++)
						(r = l[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var c = n.createContext({}),
				p = function (e) {
					var t = n.useContext(c),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : o(o({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = p(e.components);
					return n.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						l = e.originalType,
						c = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(r),
						m = a,
						k = d["".concat(c, ".").concat(m)] || d[m] || s[m] || l;
					return r
						? n.createElement(
								k,
								o(o({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(k, o({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var l = r.length,
						o = new Array(l);
					o[0] = d;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var p = 2; p < l; p++) o[p] = r[p];
					return n.createElement.apply(null, o);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		9323: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => u,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				l = (r(7294), r(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.2.12",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/08/06/swc-1.2.12",
					source: "@site/blog/2020-08-06-swc-1.2.12.md",
					title: "Changelog: swc v1.2.12",
					description: "Bugfixes",
					date: "2020-08-06T00:00:00.000Z",
					formattedDate: "August 6, 2020",
					tags: [],
					readingTime: 0.59,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.13",
						permalink: "/blog/2020/08/07/swc-1.2.13",
					},
					nextItem: {
						title: "swc v1.2.11: Fix for almost all typescript bugs",
						permalink: "/blog/2020/08/02/swc-1.2.11",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "computed constructors (#933)",
								id: "computed-constructors-933",
								children: [],
							},
						],
					},
					{
						value: "spack",
						id: "spack",
						children: [
							{
								value: "Conditional require (#937)",
								id: "conditional-require-937",
								children: [],
							},
						],
					},
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Reduced size (#928)",
								id: "reduced-size-928",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, o);
				return (0, l.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, l.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, l.kt)(
						"h3",
						{ id: "computed-constructors-933" },
						"computed constructors (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/933",
							},
							"#933",
						),
						")",
					),
					(0, l.kt)("p", null, "Codes like"),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'new (eval("Date"))();\n',
						),
					),
					(0, l.kt)("p", null, "is affected."),
					(0, l.kt)("h2", { id: "spack" }, "spack"),
					(0, l.kt)(
						"h3",
						{ id: "conditional-require-937" },
						"Conditional require (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/937",
							},
							"#937",
						),
						")",
					),
					(0, l.kt)(
						"p",
						null,
						"You can now use spack for client-side applications, too.\nPreviously, codes like",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'if (!Object.defineProperty) {\n  require("./object-property-shim");\n}\n',
						),
					),
					(0, l.kt)(
						"p",
						null,
						"make ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "spack"),
						" crash, but it's fixed and you can use spack with a client-side library like react.",
					),
					(0, l.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, l.kt)(
						"h3",
						{ id: "reduced-size-928" },
						"Reduced size (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/928",
							},
							"#928",
						),
						")",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"opt-level = 'z'",
						),
						" to reduce size. It results in a massive size reduction.",
					),
					(0, l.kt)(
						"table",
						null,
						(0, l.kt)(
							"thead",
							{ parentName: "table" },
							(0, l.kt)(
								"tr",
								{ parentName: "thead" },
								(0, l.kt)("th", {
									parentName: "tr",
									align: null,
								}),
								(0, l.kt)(
									"th",
									{ parentName: "tr", align: null },
									"Preivous",
								),
								(0, l.kt)(
									"th",
									{ parentName: "tr", align: null },
									"New",
								),
							),
						),
						(0, l.kt)(
							"tbody",
							{ parentName: "table" },
							(0, l.kt)(
								"tr",
								{ parentName: "tbody" },
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"OS X",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"32.7 MB",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"22.6 MB",
								),
							),
							(0, l.kt)(
								"tr",
								{ parentName: "tbody" },
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"linux",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"29.4 MB",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"15.8MB",
								),
							),
							(0, l.kt)(
								"tr",
								{ parentName: "tbody" },
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"Windows",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"37.6 MB",
								),
								(0, l.kt)(
									"td",
									{ parentName: "tr", align: null },
									"17.7 MB",
								),
							),
						),
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
