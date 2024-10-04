"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6436],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => d });
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
			function i(e, t) {
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
						? i(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
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
			function c(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (n = 0; n < i.length; n++)
						(r = i[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var a = n.createContext({}),
				p = function (e) {
					var t = n.useContext(a),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = p(e.components);
					return n.createElement(
						a.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				u = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						i = e.originalType,
						a = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(r),
						d = o,
						f = u["".concat(a, ".").concat(d)] || u[d] || m[d] || i;
					return r
						? n.createElement(
								f,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(f, s({ ref: t }, l));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						s = new Array(i);
					s[0] = u;
					var c = {};
					for (var a in t) hasOwnProperty.call(t, a) && (c[a] = t[a]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(s[1] = c);
					for (var p = 2; p < i; p++) s[p] = r[p];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		7208: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => a,
					metadata: () => p,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				s = ["components"],
				c = {
					title: "Changelog: swc v1.2.73",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				a = void 0,
				p = {
					permalink: "/blog/2021/08/04/swc-1.2.73",
					source: "@site/blog/2021-08-04-swc-1.2.73.md",
					title: "Changelog: swc v1.2.73",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/174?closed=1",
					date: "2021-08-04T00:00:00.000Z",
					formattedDate: "August 4, 2021",
					tags: [],
					readingTime: 0.445,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.72",
						permalink: "/blog/2021/08/04/swc-1.2.72",
					},
					nextItem: {
						title: "Changelog: swc v1.2.71",
						permalink: "/blog/2021/08/02/swc-1.2.71",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "<code>import.meta</code> in scripts",
								id: "importmeta-in-scripts",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "codegen of regex (minified) (#2000)",
								id: "codegen-of-regex-minified-2000",
								children: [],
							},
							{
								value: "Order of import statements",
								id: "order-of-import-statements",
								children: [],
							},
							{
								value: "jsx: <code>@jsxImportSource</code> in <code>classic</code> mode (#1933)",
								id: "jsx-jsximportsource-in-classic-mode-1933",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/174?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/174?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "importmeta-in-scripts" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"import.meta",
						),
						" in scripts",
					),
					(0, i.kt)(
						"p",
						null,
						"Now swc reports an error if ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"import.meta",
						),
						" is used in scripts.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/sosukesuzuki",
							},
							"@sosukesuzuki",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/1999",
							},
							"#1999",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "codegen-of-regex-minified-2000" },
						"codegen of regex (minified) (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2000",
							},
							"#2000",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc omitted a semicolon in some cases.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2004",
							},
							"#2004",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "order-of-import-statements" },
						"Order of import statements",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the minifier changed order of import statements.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2005",
							},
							"#2005",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "jsx-jsximportsource-in-classic-mode-1933" },
						"jsx: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"@jsxImportSource",
						),
						" in ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"classic",
						),
						" mode (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1933",
							},
							"#1933",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc ignored ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@jsxImportSource",
						),
						" if runtime is ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "classic"),
						", but this is wrong.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2004",
							},
							"#2004",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
