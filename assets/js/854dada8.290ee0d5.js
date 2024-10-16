"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[638],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => p, kt: () => h });
			var n = r(7294);
			function s(e, t, r) {
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
								s(e, t, r[t]);
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
			function o(e, t) {
				if (null == e) return {};
				var r,
					n,
					s = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							s = {},
							i = Object.keys(e);
						for (n = 0; n < i.length; n++)
							(r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
						return s;
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
									(s[r] = e[r]));
				}
				return s;
			}
			var l = n.createContext({}),
				c = function (e) {
					var t = n.useContext(l),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						r
					);
				},
				p = function (e) {
					var t = c(e.components);
					return n.createElement(
						l.Provider,
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
						s = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						p = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(r),
						h = s,
						d = m["".concat(l, ".").concat(h)] || m[h] || u[h] || i;
					return r
						? n.createElement(
								d,
								a(a({ ref: t }, p), {}, { components: r }),
							)
						: n.createElement(d, a({ ref: t }, p));
				});
			function h(e, t) {
				var r = arguments,
					s = t && t.mdxType;
				if ("string" == typeof e || s) {
					var i = r.length,
						a = new Array(i);
					a[0] = m;
					var o = {};
					for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : s),
						(a[1] = o);
					for (var c = 2; c < i; c++) a[c] = r[c];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		1025: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => o,
					contentTitle: () => l,
					metadata: () => c,
					toc: () => p,
					default: () => m,
				});
			var n = r(7462),
				s = r(3366),
				i = (r(7294), r(3905)),
				a = ["components"],
				o = {
					title: "Changelog: swc v1.2.61",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				c = {
					permalink: "/blog/2021/06/16/swc-1.2.61",
					source: "@site/blog/2021-06-16-swc-1.2.61.md",
					title: "Changelog: swc v1.2.61",
					description: "Bugfixes",
					date: "2021-06-16T00:00:00.000Z",
					formattedDate: "June 16, 2021",
					tags: [],
					readingTime: 1.015,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.62",
						permalink: "/blog/2021/06/27/swc-1.2.62",
					},
					nextItem: {
						title: "Changelog: swc v1.2.60",
						permalink: "/blog/2021/06/07/swc-1.2.60",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "parser: Long numeric literals (#1803, #1806)",
								id: "parser-long-numeric-literals-1803-1806",
								children: [],
							},
							{
								value: "logical assignments (#1788)",
								id: "logical-assignments-1788",
								children: [],
							},
							{
								value: "escapes in jsx properties (#1782)",
								id: "escapes-in-jsx-properties-1782",
								children: [],
							},
							{
								value: "preset-env: Nullish assignments (#1812)",
								id: "preset-env-nullish-assignments-1812",
								children: [],
							},
							{
								value: "Line terminators in literals (#1754)",
								id: "line-terminators-in-literals-1754",
								children: [],
							},
							{
								value: "optimizer: Side effects of while (#1825)",
								id: "optimizer-side-effects-of-while-1825",
								children: [],
							},
							{
								value: "parser: Undefined unicode codepoints (#1813)",
								id: "parser-undefined-unicode-codepoints-1813",
								children: [],
							},
						],
					},
					{
						value: "Platform support",
						id: "platform-support",
						children: [
							{
								value: "old linux (#1809)",
								id: "old-linux-1809",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					r = (0, s.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "parser-long-numeric-literals-1803-1806" },
						"parser: Long numeric literals (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1803",
							},
							"#1803",
						),
						", ",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1806",
							},
							"#1806",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"swc now can handle very long numeric literals like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"00000020000000000000000000000000;\n",
						),
					),
					(0, i.kt)("p", null, "or"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507201;\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "logical-assignments-1788" },
						"logical assignments (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1788",
							},
							"#1788",
						),
						")",
					),
					(0, i.kt)("p", null, "swc now transpiles"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"a ||= b;\n",
						),
					),
					(0, i.kt)("p", null, "and"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"a ??= b;\n",
						),
					),
					(0, i.kt)("p", null, "properly."),
					(0, i.kt)(
						"h3",
						{ id: "escapes-in-jsx-properties-1782" },
						"escapes in jsx properties (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1782",
							},
							"#1782",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"There was a bug which make using unicode chracters in jsx properties hard.",
					),
					(0, i.kt)(
						"h3",
						{ id: "preset-env-nullish-assignments-1812" },
						"preset-env: Nullish assignments (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1812",
							},
							"#1812",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Because some browsers support nullish coaelscing operator while not supporting nullish assignments, I patched swc to transpile assignments to assignment with nullish coaelscing operator.",
					),
					(0, i.kt)(
						"h3",
						{ id: "line-terminators-in-literals-1754" },
						"Line terminators in literals (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1754",
							},
							"#1754",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"EcmaScript allows some strange chracters to be used in a string literal.\nPreviously swc didn't allow it, but it's now fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "optimizer-side-effects-of-while-1825" },
						"optimizer: Side effects of while (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1825",
							},
							"#1825",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsously the dead branch remover of swc was to aggressive and could break codes like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"while ((p(), 1)) {}\nwhile ((await something.foo, 1)) {}\n",
						),
					),
					(0, i.kt)("p", null, "This is now fixed."),
					(0, i.kt)(
						"h3",
						{ id: "parser-undefined-unicode-codepoints-1813" },
						"parser: Undefined unicode codepoints (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1813",
							},
							"#1813",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"For rust-side users of swc, the code below made program error with arithmetic overlfow.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"\\u{cccccccccsccccccQcXt[uc(~).const[uctor().const[uctor())tbr())\n",
						),
					),
					(0, i.kt)(
						"h2",
						{ id: "platform-support" },
						"Platform support",
					),
					(0, i.kt)(
						"h3",
						{ id: "old-linux-1809" },
						"old linux (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1809",
							},
							"#1809",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"swc now uses older version of glibc to support old linux environments.",
					),
					(0, i.kt)(
						"p",
						null,
						"Done by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
