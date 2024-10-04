"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4597],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => g });
			var r = n(7294);
			function a(e, t, n) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = n),
					e
				);
			}
			function o(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t &&
						(r = r.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function l(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: o(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function i(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++)
						(n = o[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var s = r.createContext({}),
				c = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = c(e.components);
					return r.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						p = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						g = a,
						h = m["".concat(s, ".").concat(g)] || m[g] || u[g] || o;
					return n
						? r.createElement(
								h,
								l(l({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, l({ ref: t }, p));
				});
			function g(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						l = new Array(o);
					l[0] = m;
					var i = {};
					for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(l[1] = i);
					for (var c = 2; c < o; c++) l[c] = n[c];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		215: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				l = ["components"],
				i = {
					title: "Changelog: swc v1.1.8",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2019/12/24/swc-1.1.8",
					source: "@site/blog/2019-12-24-swc-1.1.8.md",
					title: "Changelog: swc v1.1.8",
					description: "Optional Chaining (#525)",
					date: "2019-12-24T00:00:00.000Z",
					formattedDate: "December 24, 2019",
					tags: [],
					readingTime: 0.93,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.9",
						permalink: "/blog/2019/12/25/swc-1.1.9",
					},
					nextItem: {
						title: "Changelog: swc v1.1.7",
						permalink: "/blog/2019/12/21/swc-1.1.7",
					},
				},
				p = [
					{
						value: "Optional Chaining (#525)",
						id: "optional-chaining-525",
						children: [],
					},
					{
						value: "Nullish coalescing (#526)",
						id: "nullish-coalescing-526",
						children: [],
					},
					{
						value: "BigInt literals (#520)",
						id: "bigint-literals-520",
						children: [],
					},
					{
						value: "Numeric separators (#521)",
						id: "numeric-separators-521",
						children: [],
					},
					{
						value: "Comments improvements (#528)",
						id: "comments-improvements-528",
						children: [],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "optional-chaining-525" },
						"Optional Chaining (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/525",
							},
							"#525",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"As this is stage 4, it's automatically enabled.",
					),
					(0, o.kt)("p", null, "You can write code like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"a?.b?.c;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"in ecmascript too. Previously it was possible only in typescript.",
					),
					(0, o.kt)(
						"h2",
						{ id: "nullish-coalescing-526" },
						"Nullish coalescing (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/526",
							},
							"#526",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"As this is stage 3, you need to set ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.parser.nullishCoalescing",
						),
						" to true to use it.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now handle ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "??"),
						" operator.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const someValue = myOtherValue ?? "default value";\n',
						),
					),
					(0, o.kt)("p", null, "is compield as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const someValue =\n  myOtherValue !== null && myOtherValue !== void 0\n    ? myOtherValue\n    : "default value";\n',
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "bigint-literals-520" },
						"BigInt literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/520",
							},
							"#520",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"As this is stage 4, it's automatically enabled.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"4n + 10n;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This is also usable from typescript without any additional configuration.",
					),
					(0, o.kt)(
						"h2",
						{ id: "numeric-separators-521" },
						"Numeric separators (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/521",
							},
							"#521",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"As this is stage 3, you need to set ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jsc.parser.numericSeparator",
						),
						" to true to use it.",
					),
					(0, o.kt)(
						"p",
						null,
						"Long numeric literals can be written as",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"10_200;\n0b10101_0001;\n0xa0_b0_c0;\n",
						),
					),
					(0, o.kt)(
						"h2",
						{ id: "comments-improvements-528" },
						"Comments improvements (",
						(0, o.kt)(
							"a",
							{
								parentName: "h2",
								href: "https://github.com/swc-project/swc/issues/528",
							},
							"#528",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Comments on paren expressions are moved to inner expresssion correctly.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"// bar\n[\n  // foo\n  a,\n\n  //bar\n  (\n    //baz\n    b\n  )\n];\n",
						),
					),
					(0, o.kt)("p", null, "is compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"// bar\n[\n  // foo\n  a,\n\n  //bar\n  //baz\n  b\n];\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
