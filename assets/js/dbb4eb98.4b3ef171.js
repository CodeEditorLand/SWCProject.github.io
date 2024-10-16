"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9878],
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
			function p(e) {
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
			function s(e, t) {
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
				c = function (e) {
					var t = n.useContext(a),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : p(p({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
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
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(r),
						d = o,
						h = u["".concat(a, ".").concat(d)] || u[d] || m[d] || i;
					return r
						? n.createElement(
								h,
								p(p({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, p({ ref: t }, l));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						p = new Array(i);
					p[0] = u;
					var s = {};
					for (var a in t) hasOwnProperty.call(t, a) && (s[a] = t[a]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(p[1] = s);
					for (var c = 2; c < i; c++) p[c] = r[c];
					return n.createElement.apply(null, p);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		9508: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => a,
					metadata: () => c,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				p = ["components"],
				s = {
					title: "Changelog: swc v1.2.81",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				a = void 0,
				c = {
					permalink: "/blog/2021/08/25/swc-1.2.81",
					source: "@site/blog/2021-08-25-swc-1.2.81.md",
					title: "Changelog: swc v1.2.81",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/182?closed=1",
					date: "2021-08-25T00:00:00.000Z",
					formattedDate: "August 25, 2021",
					tags: [],
					readingTime: 0.6,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.83",
						permalink: "/blog/2021/08/28/swc-1.2.83",
					},
					nextItem: {
						title: "Changelog: swc v1.2.82",
						permalink: "/blog/2021/08/25/swc-1.2.82",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Support for <code>new.target</code> (#1179)",
								id: "support-for-newtarget-1179",
								children: [],
							},
							{
								value: "<code>jsc.experimental.optimizeHygiene</code> (#1600, #2137)",
								id: "jscexperimentaloptimizehygiene-1600-2137",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "bundler: Reexports from common js modules (#2124)",
								id: "bundler-reexports-from-common-js-modules-2124",
								children: [],
							},
						],
					},
					{
						value: "misc",
						id: "misc",
						children: [
							{
								value: "Typo: <code>strictMode</code> in typings",
								id: "typo-strictmode-in-typings",
								children: [],
							},
							{
								value: "Typo: <code>ExportNamespaceSpecifier</code> in typings",
								id: "typo-exportnamespacespecifier-in-typings",
								children: [],
							},
							{
								value: "Typo: <code>externalModules</code> in typings",
								id: "typo-externalmodules-in-typings",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, p);
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
								href: "https://github.com/swc-project/swc/milestone/182?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/182?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)(
						"h3",
						{ id: "support-for-newtarget-1179" },
						"Support for ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"new.target",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1179",
							},
							"#1179",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"swc now supports transforming ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"new.target",
						),
						". It uses test suite from babel, and all tests are passing.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2129",
							},
							"#2129",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "jscexperimentaloptimizehygiene-1600-2137" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.experimental.optimizeHygiene",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1600",
							},
							"#1600",
						),
						", ",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2137",
							},
							"#2137",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc renamed lots of variable, but you can now speficy ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.experimental.optimizeHygiene",
						),
						" to make swc rename only if required.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2145",
							},
							"#2145",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "bundler-reexports-from-common-js-modules-2124" },
						"bundler: Reexports from common js modules (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2124",
							},
							"#2124",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously the bundler fails to handle esm reexports from cjs modules.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2143",
							},
							"#2143",
						),
						".",
					),
					(0, i.kt)("h2", { id: "misc" }, "misc"),
					(0, i.kt)(
						"h3",
						{ id: "typo-strictmode-in-typings" },
						"Typo: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"strictMode",
						),
						" in typings",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Songkeys",
							},
							"@Songkeys",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2116",
							},
							"#2116",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "typo-exportnamespacespecifier-in-typings" },
						"Typo: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"ExportNamespaceSpecifier",
						),
						" in typings",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/ifiokjr",
							},
							"@ifiokjr",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2136",
							},
							"#2136",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "typo-externalmodules-in-typings" },
						"Typo: ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"externalModules",
						),
						" in typings",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/ifiokjr",
							},
							"@ifiokjr",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2135",
							},
							"#2135",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
