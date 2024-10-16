"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8092],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => d });
			var r = n(7294);
			function i(e, t, n) {
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
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(n), !0).forEach(function (t) {
								i(e, t, n[t]);
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
			function a(e, t) {
				if (null == e) return {};
				var n,
					r,
					i = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							i = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++)
							(n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i;
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
									(i[n] = e[n]));
				}
				return i;
			}
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
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
						i = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						l = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(n),
						d = i,
						h = u["".concat(c, ".").concat(d)] || u[d] || m[d] || o;
					return n
						? r.createElement(
								h,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(h, s({ ref: t }, l));
				});
			function d(e, t) {
				var n = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = n.length,
						s = new Array(o);
					s[0] = u;
					var a = {};
					for (var c in t) hasOwnProperty.call(t, c) && (a[c] = t[c]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : i),
						(s[1] = a);
					for (var p = 2; p < o; p++) s[p] = n[p];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		8378: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => a,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => u,
				});
			var r = n(7462),
				i = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				a = {
					title: "Changelog: swc v1.2.106",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/10/30/swc-1.2.106",
					source: "@site/blog/2021-10-30-swc-1.2.106.md",
					title: "Changelog: swc v1.2.106",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/207?closed=1",
					date: "2021-10-30T00:00:00.000Z",
					formattedDate: "October 30, 2021",
					tags: [],
					readingTime: 1.015,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.107",
						permalink: "/blog/2021/11/07/swc-1.2.107",
					},
					nextItem: {
						title: "Changelog: swc v1.2.105",
						permalink: "/blog/2021/10/28/swc-1.2.105",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "Performance",
								id: "performance",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "multiple jsx pragma in single comment (#2560{https://github.com/swc-project/swc/issues/2560})",
								id: "multiple-jsx-pragma-in-single-comment-2560httpsgithubcomswc-projectswcissues2560",
								children: [],
							},
							{
								value: "Parsing of interpreters",
								id: "parsing-of-interpreters",
								children: [],
							},
							{
								value: "inlined sourcemap",
								id: "inlined-sourcemap",
								children: [],
							},
							{
								value: "minifier: block",
								id: "minifier-block",
								children: [],
							},
							{
								value: "dead_branch_remover: <code>this</code> (#2465, #2466)",
								id: "dead_branch_remover-this-2465-2466",
								children: [],
							},
							{
								value: "minifier: module mode (#2254)",
								id: "minifier-module-mode-2254",
								children: [],
							},
							{
								value: "minifier: depth of function (#2558)",
								id: "minifier-depth-of-function-2558",
								children: [],
							},
							{
								value: "assignment to exported function (#2549)",
								id: "assignment-to-exported-function-2549",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					n = (0, i.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/207?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/207?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)("h3", { id: "performance" }, "Performance"),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now parse input in worker thread, instead of blocking js thread.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2590",
							},
							"#2590",
						),
						".",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{
							id: "multiple-jsx-pragma-in-single-comment-2560httpsgithubcomswc-projectswcissues2560",
						},
						"multiple jsx pragma in single comment (",
						"[#2560]",
						"{",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2560%7D",
							},
							"https://github.com/swc-project/swc/issues/2560}",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now understands ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"/* @jsxRuntime automatic @jsxImportSource preact */",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/hlubek",
							},
							"@hlubek",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2561",
							},
							"#2561",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "parsing-of-interpreters" },
						"Parsing of interpreters",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the parser of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" parsed interpreters wrongly.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/antoniomuso",
							},
							"@antoniomuso",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2589",
							},
							"#2589",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "inlined-sourcemap" },
						"inlined sourcemap",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now uses correct base64 encoding for inlined source maps.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Kaciras",
							},
							"@Kaciras",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2585",
							},
							"#2585",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-block" },
						"minifier: block",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the minifier removed some necessary block and it resulted in an error.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2570",
							},
							"#2570",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "dead_branch_remover-this-2465-2466" },
						"dead_branch_remover: ",
						(0, o.kt)("inlineCode", { parentName: "h3" }, "this"),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2465",
							},
							"#2465",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2466",
							},
							"#2466",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"dead_branch_remover",
						),
						" didn't preserved ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "this"),
						" in some cases.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/2466",
							},
							"#2466",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-module-mode-2254" },
						"minifier: module mode (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2254",
							},
							"#2254",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The minifier will now enable optimization of top level nodes if ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"module: true",
						),
						" is provided.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2564",
							},
							"#2564",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "minifier-depth-of-function-2558" },
						"minifier: depth of function (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2558",
							},
							"#2558",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously the minifier didn't consider 'depth' of a function declaration while negating if statements and it could break some libraries.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2564",
							},
							"#2564",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "assignment-to-exported-function-2549" },
						"assignment to exported function (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2549",
							},
							"#2549",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" didn't allow reassignment to exported functions. This was problematic for ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "jest"),
						" users.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kwonoj",
							},
							"@kwonoj",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2569",
							},
							"#2569",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
