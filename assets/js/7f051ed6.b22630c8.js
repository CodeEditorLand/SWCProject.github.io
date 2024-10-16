"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9032],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => m });
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
			function l(e, t) {
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
			var i = n.createContext({}),
				s = function (e) {
					var t = n.useContext(i),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = s(e.components);
					return n.createElement(
						i.Provider,
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						a = e.originalType,
						i = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = s(r),
						m = o,
						f = d["".concat(i, ".").concat(m)] || d[m] || u[m] || a;
					return r
						? n.createElement(
								f,
								c(c({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(f, c({ ref: t }, p));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = d;
					var l = {};
					for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(c[1] = l);
					for (var s = 2; s < a; s++) c[s] = r[s];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		214: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => i,
					metadata: () => s,
					toc: () => p,
					default: () => d,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				l = {
					title: "Changelog: swc v1.2.44",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				s = {
					permalink: "/blog/2021/01/11/swc-1.2.44",
					source: "@site/blog/2021-01-11-swc-1.2.44.md",
					title: "Changelog: swc v1.2.44",
					description: "Bugfixes",
					date: "2021-01-11T00:00:00.000Z",
					formattedDate: "January 11, 2021",
					tags: [],
					readingTime: 0.46,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.45",
						permalink: "/blog/2021/01/14/swc-1.2.45",
					},
					nextItem: {
						title: "Changelog: swc v1.2.43",
						permalink: "/blog/2020/12/30/swc-1.2.43",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Various dce bugs (#1301)",
								id: "various-dce-bugs-1301",
								children: [],
							},
							{
								value: "Small bundler rework (#1318)",
								id: "small-bundler-rework-1318",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function d(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "various-dce-bugs-1301" },
						"Various dce bugs (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1301",
							},
							"#1301",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"The dead code elimination pass of ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" was too aggressive and it broke some code.\nIt's now overly conservative, and I'll improve it over time.",
					),
					(0, a.kt)(
						"h3",
						{ id: "small-bundler-rework-1318" },
						"Small bundler rework (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1318",
							},
							"#1318",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"The ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" project uses very creatitve (and strange) approach to handle scoping issue because rust does not allow two mutable reference to same data.\nPreviously, the bundler of ",
						(0, a.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" tried to do something smart. I patched it to depend on the approach I mentioned and as a result, almost all bugs are fixed.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
