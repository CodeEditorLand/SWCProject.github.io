"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5505],
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
			var l = n.createContext({}),
				p = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
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
						u = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = p(r),
						m = o,
						d = f["".concat(l, ".").concat(m)] || f[m] || s[m] || a;
					return r
						? n.createElement(
								d,
								i(i({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(d, i({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						i = new Array(a);
					i[0] = f;
					var c = {};
					for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(i[1] = c);
					for (var p = 2; p < a; p++) i[p] = r[p];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		5796: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => f,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.1.26",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/19/swc-1.1.26",
					source: "@site/blog/2020-02-19-swc-1.1.26.md",
					title: "Changelog: swc v1.1.26",
					description: "Bugfix",
					date: "2020-02-19T00:00:00.000Z",
					formattedDate: "February 19, 2020",
					tags: [],
					readingTime: 0.3,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.27",
						permalink: "/blog/2020/02/20/swc-1.1.27",
					},
					nextItem: {
						title: "Changelog: swc v1.1.25",
						permalink: "/blog/2020/02/17/swc-1.1.25",
					},
				},
				u = [
					{
						value: "Bugfix",
						id: "bugfix",
						children: [
							{
								value: "recursive function reference within a method property (#679)",
								id: "recursive-function-reference-within-a-method-property-679",
								children: [],
							},
							{
								value: "await-for loop",
								id: "await-for-loop",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function f(e) {
				var t = e.components,
					r = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfix" }, "Bugfix"),
					(0, a.kt)(
						"h3",
						{
							id: "recursive-function-reference-within-a-method-property-679",
						},
						"recursive function reference within a method property (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/678",
							},
							"#679",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, codes like below can crash swc.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"({\n  foo() {\n    function bar() {\n      bar;\n    }\n  }\n});\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This is fixed with ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@v1.1.26",
						),
						".",
					),
					(0, a.kt)("h3", { id: "await-for-loop" }, "await-for loop"),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" emits identical code as babel when it meets an await-for loop.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"for await (const row of stream) {\n}\n",
						),
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
