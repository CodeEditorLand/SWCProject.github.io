"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8249],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => u });
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
			function i(e) {
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
			function l(e, t) {
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
			var c = r.createContext({}),
				s = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = s(e.components);
					return r.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				d = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				h = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						h = s(n),
						u = a,
						m = h["".concat(c, ".").concat(u)] || h[u] || d[u] || o;
					return n
						? r.createElement(
								m,
								i(i({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(m, i({ ref: t }, p));
				});
			function u(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						i = new Array(o);
					i[0] = h;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : a),
						(i[1] = l);
					for (var s = 2; s < o; s++) i[s] = n[s];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			h.displayName = "MDXCreateElement";
		},
		761: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => s,
					toc: () => p,
					default: () => h,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				i = ["components"],
				l = {
					title: "Changelog: swc v1.2.41",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				s = {
					permalink: "/blog/2020/12/22/swc-1.2.41",
					source: "@site/blog/2020-12-22-swc-1.2.41.md",
					title: "Changelog: swc v1.2.41",
					description: "Bugfixes",
					date: "2020-12-22T00:00:00.000Z",
					formattedDate: "December 22, 2020",
					tags: [],
					readingTime: 1.215,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.42",
						permalink: "/blog/2020/12/29/swc-1.2.42",
					},
					nextItem: {
						title: "Changelog: swc v1.2.40",
						permalink: "/blog/2020/12/04/swc-1.2.40",
					},
				},
				p = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Codegen of string literals (#1287)",
								id: "codegen-of-string-literals-1287",
								children: [],
							},
							{
								value: "Normalization of \r\n in template literals (#1286)",
								id: "normalization-of-rn-in-template-literals-1286",
								children: [],
							},
							{
								value: "Span of <code>decalre</code>d items (#1282)",
								id: "span-of-decalred-items-1282",
								children: [],
							},
							{
								value: "No hang on invalid character (#1274)",
								id: "no-hang-on-invalid-character-1274",
								children: [],
							},
							{
								value: "Parse <code>??</code> correctly (#1270)",
								id: "parse--correctly-1270",
								children: [],
							},
						],
					},
					{ value: "New package", id: "new-package", children: [] },
				],
				d = { toc: p };
			function h(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "codegen-of-string-literals-1287" },
						"Codegen of string literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1287",
							},
							"#1287",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The code generator of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" tries to preserve the original input, and it resulted in some bugs.\nIt's now fixed by a huge breaking change - storing quote info in the string literal.",
					),
					(0, o.kt)(
						"p",
						null,
						"Note that this patch is also included in the new version of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"deno",
						),
						", which is also published today.",
					),
					(0, o.kt)(
						"h3",
						{ id: "normalization-of-rn-in-template-literals-1286" },
						"Normalization of \\r\\n in template literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1286",
							},
							"#1286",
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
								href: "https://github.com/Liamolucko",
							},
							"@Liamolucko",
						),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now follows spec more closely.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "\\r\\n"),
						" in template literals are now normlized as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "\\n"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "span-of-decalred-items-1282" },
						"Span of ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"decalre",
						),
						"d items (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1282",
							},
							"#1282",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Now span of various ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "declare"),
						"d nodes like class declarations or function declarations include span of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "declare"),
						" token. Due to how codegen determine codegen print comments, I expect this fix to make codegen print comments correctly.",
					),
					(0, o.kt)(
						"h3",
						{ id: "no-hang-on-invalid-character-1274" },
						"No hang on invalid character (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1274",
							},
							"#1274",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, the lexer of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" hangs on invalid input. This was because it did not update the position of the character in case of error. The fix was trivial, but it's important for some environments like deno shell, which gets input from stdin.",
					),
					(0, o.kt)(
						"h3",
						{ id: "parse--correctly-1270" },
						"Parse ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "??"),
						" correctly (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1270",
							},
							"#1270",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Some tokens were not parsed correctly on ecmascript mode.",
					),
					(0, o.kt)("h2", { id: "new-package" }, "New package"),
					(0, o.kt)(
						"p",
						null,
						"I wish this was a package about TypeScript type checkers, but I am still working hard on it still working hard. Instead, we introduce a package that allows swc to run on the web.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/wasm-web",
						),
						" is a new package which can be used for the web.",
					),
				);
			}
			h.isMDXComponent = !0;
		},
	},
]);
