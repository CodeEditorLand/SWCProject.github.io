"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2919],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => f });
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
			function c(e, t) {
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
				l = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = l(e.components);
					return n.createElement(
						p.Provider,
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
						a = e.originalType,
						p = e.parentName,
						s = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = l(r),
						f = o,
						d = u["".concat(p, ".").concat(f)] || u[f] || m[f] || a;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = u;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var l = 2; l < a; l++) i[l] = r[l];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		7135: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => l,
					toc: () => s,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.2.97",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				l = {
					permalink: "/blog/2021/10/15/swc-1.2.97",
					source: "@site/blog/2021-10-15-swc-1.2.97.md",
					title: "Changelog: swc v1.2.97",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/198?closed=1",
					date: "2021-10-15T00:00:00.000Z",
					formattedDate: "October 15, 2021",
					tags: [],
					readingTime: 0.615,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.98",
						permalink: "/blog/2021/10/16/swc-1.2.98",
					},
					nextItem: {
						title: "Changelog: swc v1.2.96",
						permalink: "/blog/2021/10/14/swc-1.2.96",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Performance",
								id: "performance",
								children: [],
							},
							{
								value: "New option",
								id: "new-option",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "minifier: Side effect",
								id: "minifier-side-effect",
								children: [],
							},
							{
								value: "decorator metadata (#2428)",
								id: "decorator-metadata-2428",
								children: [],
							},
						],
					},
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/198?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/198?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)("h3", { id: "performance" }, "Performance"),
					(0, a.kt)(
						"p",
						null,
						"The performance of code generator and the parser is improved by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2406",
							},
							"#2406",
						),
						", and performance of transforms are improved by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2439",
							},
							"#2438",
						),
						".",
					),
					(0, a.kt)("h3", { id: "new-option" }, "New option"),
					(0, a.kt)(
						"p",
						null,
						"You can now specify ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"module.ignoreDynamic",
						),
						" to keep dynamic imports, while targeting other module systems.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2441",
							},
							"#2441",
						),
						".",
					),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "minifier-side-effect" },
						"minifier: Side effect",
					),
					(0, a.kt)(
						"p",
						null,
						"Preivously the minifier skipped an arugment of a call expression instead of aborting inlining, if it should not be inlined because of side effects.",
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2433",
							},
							"#2433",
						),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "decorator-metadata-2428" },
						"decorator metadata (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2428",
							},
							"#2428",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" failed to detect type of a parameter if there was a default value.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"async fnName(\n    ...\n    @Arg('GraphQLArgName', {nullable: true}) argName: boolean = false,\n): Promise<number> {\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Fixed by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2431",
							},
							"#2431",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
