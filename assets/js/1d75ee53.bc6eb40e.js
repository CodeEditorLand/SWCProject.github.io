"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3597],
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
			function a(e) {
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
			var s = n.createContext({}),
				l = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				m = n.forwardRef(function (e, t) {
					var r = e.components,
						o = e.mdxType,
						i = e.originalType,
						s = e.parentName,
						p = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(r),
						f = o,
						d = m["".concat(s, ".").concat(f)] || m[f] || u[f] || i;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, p));
				});
			function f(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = r.length,
						a = new Array(i);
					a[0] = m;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(a[1] = c);
					for (var l = 2; l < i; l++) a[l] = r[l];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		9468: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => s,
					metadata: () => l,
					toc: () => p,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.1.45",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				l = {
					permalink: "/blog/2020/05/19/swc-1.1.45",
					source: "@site/blog/2020-05-19-swc-1.1.45.md",
					title: "Changelog: swc v1.1.45",
					description: "Bugfixes",
					date: "2020-05-19T00:00:00.000Z",
					formattedDate: "May 19, 2020",
					tags: [],
					readingTime: 0.56,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.44",
						permalink: "/blog/2020/05/19/swc-1.1.44",
					},
					nextItem: {
						title: "Changelog: swc v1.1.43",
						permalink: "/blog/2020/05/16/swc-1.1.43",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "preset-env: non-swcrc config (#783)",
								id: "preset-env-non-swcrc-config-783",
								children: [],
							},
						],
					},
					{
						value: "UX Improvements",
						id: "ux-improvements",
						children: [
							{
								value: "Better error message (#781)",
								id: "better-error-message-781",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "preset-env-non-swcrc-config-783" },
						"preset-env: non-swcrc config (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/783",
							},
							"#783",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously if you use ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"transformSync",
						),
						" without a file name, configuration related to preset-env was ignored. This is obviously wrong and it's fixed with ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "v1.1.45"),
						".",
					),
					(0, i.kt)(
						"h2",
						{ id: "ux-improvements" },
						"UX Improvements",
					),
					(0, i.kt)(
						"h3",
						{ id: "better-error-message-781" },
						"Better error message (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/781",
							},
							"#781",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"When ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swcrc"),
						" file contains invalid value, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" prints a more detailed error message. Note that although ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" supports specifing multiple entries in the ",
						(0, i.kt)("inlineCode", { parentName: "p" }, ".swcrc"),
						" file, error message for multiple item is not improved yet.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre" },
							"    failed to load config for file 'SourceFile(/Users/kdy1/projects/node-swc/__tests__/../tests/error/simple.js)'\n\n    Caused by:\n        0: failed to deserialize .swcrc (json) file: unmatched data: 2:6\n        1: unknown field `js`, expected one of `env`, `test`, `exclude`, `jsc`, `module`, `minify` at line 2 column 6\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
