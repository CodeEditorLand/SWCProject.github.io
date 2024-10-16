"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7058],
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
			var p = n.createContext({}),
				i = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = i(e.components);
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
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = i(r),
						f = o,
						d = u["".concat(p, ".").concat(f)] || u[f] || m[f] || a;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, s));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						c = new Array(a);
					c[0] = u;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(c[1] = l);
					for (var i = 2; i < a; i++) c[i] = r[i];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		9001: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => l,
					contentTitle: () => p,
					metadata: () => i,
					toc: () => s,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				c = ["components"],
				l = {
					title: "Changelog: swc v1.2.82",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				i = {
					permalink: "/blog/2021/08/25/swc-1.2.82",
					source: "@site/blog/2021-08-25-swc-1.2.82.md",
					title: "Changelog: swc v1.2.82",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/183?closed=1",
					date: "2021-08-25T00:00:00.000Z",
					formattedDate: "August 25, 2021",
					tags: [],
					readingTime: 0.28,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.81",
						permalink: "/blog/2021/08/25/swc-1.2.81",
					},
					nextItem: {
						title: "Changelog: swc v1.2.80",
						permalink: "/blog/2021/08/20/swc-1.2.80",
					},
				},
				s = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Source map handling",
								id: "source-map-handling",
								children: [],
							},
							{
								value: "Better error message for <code>TS1031</code>",
								id: "better-error-message-for-ts1031",
								children: [],
							},
						],
					},
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, c);
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
								href: "https://github.com/swc-project/swc/milestone/183?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/183?closed=1",
						),
					),
					(0, a.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, a.kt)(
						"h3",
						{ id: "source-map-handling" },
						"Source map handling",
					),
					(0, a.kt)(
						"p",
						null,
						"The ecmascript code generator of swc now uses code span correctly for most of keywords.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2142",
							},
							"#2142",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "better-error-message-for-ts1031" },
						"Better error message for ",
						(0, a.kt)("inlineCode", { parentName: "h3" }, "TS1031"),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" updated the error message for ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "TS1031"),
						", and ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" follows it.",
					),
					(0, a.kt)(
						"p",
						null,
						"Implemented by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Shinyaigeek",
							},
							"@Shinyaigeek",
						),
						" and by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2148",
							},
							"#2148",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
