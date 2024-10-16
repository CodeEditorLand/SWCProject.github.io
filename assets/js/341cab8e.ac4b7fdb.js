"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[782],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => f });
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
			function o(e, t) {
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
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: o(Object(r)).forEach(function (t) {
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
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
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
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						f = a,
						d = m["".concat(l, ".").concat(f)] || m[f] || s[f] || o;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, u));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						c = new Array(o);
					c[0] = m;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(c[1] = i);
					for (var p = 2; p < o; p++) c[p] = r[p];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		8693: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => m,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.36",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/03/26/swc-1.1.36",
					source: "@site/blog/2020-03-26-swc-1.1.36.md",
					title: "Changelog: swc v1.1.36",
					description: "Bugfixes",
					date: "2020-03-26T00:00:00.000Z",
					formattedDate: "March 26, 2020",
					tags: [],
					readingTime: 0.28,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.37",
						permalink: "/blog/2020/03/28/swc-1.1.37",
					},
					nextItem: {
						title: "Call for help and roadmap",
						permalink: "/blog/2020/03/16/roadmap-and-call-for-help",
					},
				},
				u = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "TypeScript enum with key / value (#730)",
								id: "typescript-enum-with-key--value-730",
								children: [],
							},
							{
								value: "await after yield (#720)",
								id: "await-after-yield-720",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function m(e) {
				var t = e.components,
					r = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, s, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "typescript-enum-with-key--value-730" },
						"TypeScript enum with key / value (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/730",
							},
							"#730",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Thanks to ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/gus3inov",
							},
							"@gus3inov",
						),
						", swc now handles typescript enum correctly.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'enum StateNum {\n  closed = "cl0",\n  opened = "op1",\n  mounted = "mo2"\n}\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "await-after-yield-720" },
						"await after yield (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/720",
							},
							"#720",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The code like below is parsed correctly.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"async function* main() {\n  yield await 0;\n}\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
