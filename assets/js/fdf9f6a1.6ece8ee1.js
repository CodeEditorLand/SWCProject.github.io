"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2327],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => c, kt: () => d });
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
			function l(e) {
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
			function s(e, t) {
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
				p = function (e) {
					var t = n.useContext(i),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						r
					);
				},
				c = function (e) {
					var t = p(e.components);
					return n.createElement(
						i.Provider,
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
						i = e.parentName,
						c = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(r),
						d = o,
						f = u["".concat(i, ".").concat(d)] || u[d] || m[d] || a;
					return r
						? n.createElement(
								f,
								l(l({ ref: t }, c), {}, { components: r }),
							)
						: n.createElement(f, l({ ref: t }, c));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						l = new Array(a);
					l[0] = u;
					var s = {};
					for (var i in t) hasOwnProperty.call(t, i) && (s[i] = t[i]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : o),
						(l[1] = s);
					for (var p = 2; p < a; p++) l[p] = r[p];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		5149: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => s,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => c,
					default: () => u,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				l = ["components"],
				s = {
					title: "Changelog: swc v1.2.21",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				p = {
					permalink: "/blog/2020/08/24/swc-1.2.21",
					source: "@site/blog/2020-08-24-swc-1.2.21.md",
					title: "Changelog: swc v1.2.21",
					description: "General improvements",
					date: "2020-08-24T00:00:00.000Z",
					formattedDate: "August 24, 2020",
					tags: [],
					readingTime: 1.425,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.22",
						permalink: "/blog/2020/08/31/swc-1.2.22",
					},
					nextItem: {
						title: "Changelog: swc v1.2.20",
						permalink: "/blog/2020/08/15/swc-1.2.20",
					},
				},
				c = [
					{
						value: "General improvements",
						id: "general-improvements",
						children: [
							{
								value: "Support optional named tuple elements (#982)",
								id: "support-optional-named-tuple-elements-982",
								children: [],
							},
							{
								value: "Better error messages (#980)",
								id: "better-error-messages-980",
								children: [],
							},
						],
					},
					{
						value: "Performance improvement",
						id: "performance-improvement",
						children: [
							{
								value: "Performance of swc is improved (#992)",
								id: "performance-of-swc-is-improved-992",
								children: [],
							},
							{
								value: "sse2 is enabled",
								id: "sse2-is-enabled",
								children: [],
							},
							{
								value: "Performance of spack is improved (#992, #972)",
								id: "performance-of-spack-is-improved-992-972",
								children: [],
							},
							{
								value: "Binary size is reduced (#973)",
								id: "binary-size-is-reduced-973",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function u(e) {
				var t = e.components,
					r = (0, o.Z)(e, l);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"h2",
						{ id: "general-improvements" },
						"General improvements",
					),
					(0, a.kt)(
						"h3",
						{ id: "support-optional-named-tuple-elements-982" },
						"Support optional named tuple elements (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/982",
							},
							"#982",
						),
						")",
					),
					(0, a.kt)("p", null, "TypeScript 4 allows"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type Foo = [first: number, second?: string, ...rest: any[]];\n",
						),
					),
					(0, a.kt)(
						"p",
						null,
						"and ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" now supports it.",
					),
					(0, a.kt)(
						"h3",
						{ id: "better-error-messages-980" },
						"Better error messages (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/980",
							},
							"#980",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Error messages were crpytic, mainly because I'm too lazy. Anyway, it's finally got improved.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"error: Unexpected token Some(Semi)\n --\x3e $DIR/tests/typescript-errors/type-arguments/input.ts:1:9\n  |\n1 | new A<T>;\n",
						),
					),
					(0, a.kt)("p", null, "becomes"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre" },
							"error: Unexpected token `;`. Expected this, import, async, function, [ for array literal, { for object literal, @ for decorator, function, class, null, true, false, number, bigint, string, regexp, ` for template literal, (, or an identifier\n --\x3e $DIR/tests/typescript-errors/type-arguments/input.ts:1:9\n  |\n1 | new A<T>;\n",
						),
					),
					(0, a.kt)(
						"h2",
						{ id: "performance-improvement" },
						"Performance improvement",
					),
					(0, a.kt)(
						"h3",
						{ id: "performance-of-swc-is-improved-992" },
						"Performance of swc is improved (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/992",
							},
							"#992",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" spend all time moving the memory with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "memmove"),
						". I've managed to remove some memmoves.\nAlso, panic cases are handled properly.",
					),
					(0, a.kt)("p", null, "For example, I changed code from"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'\nlet prev = match self.cur.take() {\n    Some(t) => t,\n\n    None => unreachable!(\n        "Current token is `None`. Parser should not call bump()without knowing current \\\n          token"\n    ),\n};\n',
						),
					),
					(0, a.kt)("p", null, "to"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'\n#[cold]\n#[inline(never)]\nfn invalid_state() -> ! {\n    unreachable!(\n        "Current token is `None`. Parser should not call bump() without knowing current \\\n          token"\n    )\n}\n\nlet prev = match self.cur.take() {\n    Some(t) => t,\n\n    None => invalid_state(),\n};\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This technique aids cpu cache issue.",
					),
					(0, a.kt)(
						"h3",
						{ id: "sse2-is-enabled" },
						"sse2 is enabled",
					),
					(0, a.kt)(
						"p",
						null,
						"It drastically reduces times used to memmove.",
					),
					(0, a.kt)(
						"h3",
						{ id: "performance-of-spack-is-improved-992-972" },
						"Performance of spack is improved (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/992",
							},
							"#992",
						),
						", ",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/972",
							},
							"#972",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Some design flaws are fixed, it's fully parallelzed, and it does not transform files from node_modules.",
					),
					(0, a.kt)(
						"h3",
						{ id: "binary-size-is-reduced-973" },
						"Binary size is reduced (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/973",
							},
							"#973",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Some useless allocations are removed, some memmoves are removed.\nAlso, merging of reexports in spack now works in parallel manner.",
					),
					(0, a.kt)("hr", null),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
