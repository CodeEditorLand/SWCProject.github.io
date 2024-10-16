"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8226],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
			var r = n(7294);
			function o(e, t, n) {
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
			function i(e, t) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? i(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: i(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function s(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(n = i[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
					return r.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				u = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						i = e.originalType,
						c = e.parentName,
						l = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(n),
						d = o,
						h = u["".concat(c, ".").concat(d)] || u[d] || m[d] || i;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = n.length,
						a = new Array(i);
					a[0] = u;
					var s = {};
					for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(a[1] = s);
					for (var p = 2; p < i; p++) a[p] = n[p];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		2260: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => u,
				});
			var r = n(7462),
				o = n(3366),
				i = (n(7294), n(3905)),
				a = ["components"],
				s = {
					title: "Changelog: swc v1.2.83",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/08/28/swc-1.2.83",
					source: "@site/blog/2021-08-28-swc-1.2.83.md",
					title: "Changelog: swc v1.2.83",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/184?closed=1",
					date: "2021-08-28T00:00:00.000Z",
					formattedDate: "August 28, 2021",
					tags: [],
					readingTime: 1.01,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.84",
						permalink: "/blog/2021/09/01/swc-1.2.84",
					},
					nextItem: {
						title: "Changelog: swc v1.2.81",
						permalink: "/blog/2021/08/25/swc-1.2.81",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "sourcemap",
								id: "sourcemap",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "<code>||</code> in <code>await</code> (#2155)",
								id: "-in-await-2155",
								children: [],
							},
							{
								value: "<code>minify</code>: Options for terser compat (#2153)",
								id: "minify-options-for-terser-compat-2153",
								children: [],
							},
							{
								value: "<code>parser</code>: Generics with jsx (#2161)",
								id: "parser-generics-with-jsx-2161",
								children: [],
							},
							{
								value: "<code>codegen</code>: Assignment as an arrow body (#2163)",
								id: "codegen-assignment-as-an-arrow-body-2163",
								children: [],
							},
							{
								value: "<code>expr_simplifier</code>: Assignments with operator (#2165)",
								id: "expr_simplifier-assignments-with-operator-2165",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					n = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/184?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/184?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)("h3", { id: "sourcemap" }, "sourcemap"),
					(0, i.kt)(
						"p",
						null,
						"Now ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does not emit ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"sourceContents",
						),
						" in situations where ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "sources"),
						" is enough.\nAdditionally, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now emits ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "names"),
						" properly.",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "-in-await-2155" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "||"),
						" in ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "await"),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2155",
							},
							"#2155",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2157",
							},
							"#2157",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "minify-options-for-terser-compat-2153" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "minify"),
						": Options for terser compat (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2153",
							},
							"#2153",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"When using ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core",
						),
						" via yarn resolution, it may resulted in an error because of some terser options.\n",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now accepts this option and ignores them (for now), so it does not result in a json deserialization error.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2158",
							},
							"#2158",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "parser-generics-with-jsx-2161" },
						(0, i.kt)("inlineCode", { parentName: "h3" }, "parser"),
						": Generics with jsx (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2161",
							},
							"#2161",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" failed to pares",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const x = <P extends object>(\n  a: React.ComponentType<P>\n): React.ComponentType<P & { a: string }> => React.memo();\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2166",
							},
							"#2166",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "codegen-assignment-as-an-arrow-body-2163" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"codegen",
						),
						": Assignment as an arrow body (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2163",
							},
							"#2163",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"() => ({ foo } = bar());\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2166",
							},
							"#2166",
						),
					),
					(0, i.kt)(
						"h3",
						{
							id: "expr_simplifier-assignments-with-operator-2165",
						},
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"expr_simplifier",
						),
						": Assignments with operator (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2165",
							},
							"#2165",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsouly ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" mis-optimized",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var bit = 0;\nvar sum = 0;\nsum += (bit ^= 1) ? 0 : 1;\nsum += (bit ^= 1) ? 0 : 1;\nconsole.log(sum);\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"because it didn't check the operator of assignment while caculating value of an expression.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2166",
							},
							"#2166",
						),
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
