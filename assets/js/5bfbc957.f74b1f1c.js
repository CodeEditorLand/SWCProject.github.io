"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7964],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => f });
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
			function c(e) {
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
			function a(e, t) {
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
			var s = n.createContext({}),
				l = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = l(e.components);
					return n.createElement(
						s.Provider,
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
						s = e.parentName,
						p = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = l(r),
						f = o,
						d = u["".concat(s, ".").concat(f)] || u[f] || m[f] || i;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						c = new Array(i);
					c[0] = u;
					var a = {};
					for (var s in t) hasOwnProperty.call(t, s) && (a[s] = t[s]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : o),
						(c[1] = a);
					for (var l = 2; l < i; l++) c[l] = r[l];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		9598: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => s,
					metadata: () => l,
					toc: () => p,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				c = ["components"],
				a = {
					title: "Changelog: swc v1.2.79",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				l = {
					permalink: "/blog/2021/08/19/swc-1.2.79",
					source: "@site/blog/2021-08-19-swc-1.2.79.md",
					title: "Changelog: swc v1.2.79",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/180?closed=1",
					date: "2021-08-19T00:00:00.000Z",
					formattedDate: "August 19, 2021",
					tags: [],
					readingTime: 0.375,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.80",
						permalink: "/blog/2021/08/20/swc-1.2.80",
					},
					nextItem: {
						title: "Changelog: swc v1.2.78",
						permalink: "/blog/2021/08/16/swc-1.2.78",
					},
				},
				p = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Error for top-level await in sciprts",
								id: "error-for-top-level-await-in-sciprts",
								children: [],
							},
							{
								value: "<code>minify.format.comments</code> (#2095)",
								id: "minifyformatcomments-2095",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "codegen: <code>~</code> (#2091)",
								id: "codegen--2091",
								children: [],
							},
						],
					},
				],
				m = { toc: p };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
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
								href: "https://github.com/swc-project/swc/milestone/180?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/180?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "error-for-top-level-await-in-sciprts" },
						"Error for top-level await in sciprts",
					),
					(0, i.kt)(
						"p",
						null,
						"swc now emits a user-friendly error message for top level awaits in a script.",
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
								href: "https://github.com/swc-project/swc/pull/2094",
							},
							"#2094",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "minifyformatcomments-2095" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"minify.format.comments",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/2095",
							},
							"#2095",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"swc now supports ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"format.comments",
						),
						" of terser, which controls the comments.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2095",
							},
							"#2095",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "codegen--2091" },
						"codegen: ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "~"),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2091",
							},
							"#2091",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc wrongly skipped a semicolon before ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "~"),
						" when minification is enabled.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2104",
							},
							"#2104",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
