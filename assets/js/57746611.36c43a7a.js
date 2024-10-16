"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9362],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => g });
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
			function c(e) {
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
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = p(e.components);
					return n.createElement(
						l.Provider,
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
				f = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(r),
						g = o,
						d = f["".concat(l, ".").concat(g)] || f[g] || s[g] || a;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, u));
				});
			function g(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = f;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(c[1] = i);
					for (var p = 2; p < a; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		9527: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.44",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/05/19/swc-1.1.44",
					source: "@site/blog/2020-05-19-swc-1.1.44.md",
					title: "Changelog: swc v1.1.44",
					description: "Bugfixes",
					date: "2020-05-19T00:00:00.000Z",
					formattedDate: "May 19, 2020",
					tags: [],
					readingTime: 0.175,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.46",
						permalink: "/blog/2020/05/21/swc-1.1.46",
					},
					nextItem: {
						title: "Changelog: swc v1.1.45",
						permalink: "/blog/2020/05/19/swc-1.1.45",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "preset-env: regenerator (#780)",
								id: "preset-env-regenerator-780",
								children: [],
							},
						],
					},
					{
						value: "Performance boost",
						id: "performance-boost",
						children: [
							{
								value: "Reduced stack usage (#776)",
								id: "reduced-stack-usage-776",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "preset-env-regenerator-780" },
						"preset-env: regenerator (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/780",
							},
							"#780",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"From now on, the following code works with preset-env.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import "core-js";\nasync function a() {\n  return 1;\n}\na().then(console.log);\n',
						),
					),
					(0, a.kt)(
						"h2",
						{ id: "performance-boost" },
						"Performance boost",
					),
					(0, a.kt)(
						"h3",
						{ id: "reduced-stack-usage-776" },
						"Reduced stack usage (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/776",
							},
							"#776",
						),
						")",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
