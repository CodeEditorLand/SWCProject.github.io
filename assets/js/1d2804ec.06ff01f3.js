"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5349],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => h });
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
			function s(e, t) {
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
						? s(Object(n), !0).forEach(function (t) {
								a(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: s(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function o(e, t) {
				if (null == e) return {};
				var n,
					r,
					a = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							a = {},
							s = Object.keys(e);
						for (r = 0; r < s.length; r++)
							(n = s[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(e);
					for (r = 0; r < s.length; r++)
						(n = s[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(a[n] = e[n]));
				}
				return a;
			}
			var p = r.createContext({}),
				c = function (e) {
					var t = r.useContext(p),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = c(e.components);
					return r.createElement(
						p.Provider,
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
						s = e.originalType,
						p = e.parentName,
						l = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						h = a,
						d = m["".concat(p, ".").concat(h)] || m[h] || u[h] || s;
					return n
						? r.createElement(
								d,
								i(i({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(d, i({ ref: t }, l));
				});
			function h(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var s = n.length,
						i = new Array(s);
					i[0] = m;
					var o = {};
					for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : a),
						(i[1] = o);
					for (var c = 2; c < s; c++) i[c] = n[c];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		1979: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => o,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => l,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				s = (n(7294), n(3905)),
				i = ["components"],
				o = {
					title: "Changelog: swc v1.2.7",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2020/07/01/swc-1.2.7",
					source: "@site/blog/2020-07-01-swc-1.2.7.md",
					title: "Changelog: swc v1.2.7",
					description: "Bugfixes",
					date: "2020-07-01T00:00:00.000Z",
					formattedDate: "July 1, 2020",
					tags: [],
					readingTime: 1.575,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.8",
						permalink: "/blog/2020/07/05/swc-1.2.8",
					},
					nextItem: {
						title: "Changelog: swc v1.2.6",
						permalink: "/blog/2020/06/21/swc-1.2.6",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "crash of spack (#872)",
								id: "crash-of-spack-872",
								children: [],
							},
							{
								value: "Paren expression in left side (#861)",
								id: "paren-expression-in-left-side-861",
								children: [],
							},
						],
					},
					{
						value: "TypeScript 4.0 support",
						id: "typescript-40-support",
						children: [
							{
								value: "non-last rest element in tuple (#864)",
								id: "non-last-rest-element-in-tuple-864",
								children: [],
							},
							{
								value: "new assignment operators (#866)",
								id: "new-assignment-operators-866",
								children: [],
							},
							{
								value: "labels in tuple types (#865)",
								id: "labels-in-tuple-types-865",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, i);
				return (0, s.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, s.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, s.kt)(
						"h3",
						{ id: "crash-of-spack-872" },
						"crash of spack (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/872",
							},
							"#872",
						),
						")",
					),
					(0, s.kt)(
						"p",
						null,
						"The swc manages the span in a fairly unusual way. It manages span information by creating a global map and assigning a range in it. The global map should be protected with an atomic variable or mutex because swc supports threading.",
					),
					(0, s.kt)(
						"p",
						null,
						"To improve performance, area allocation is processed as one atomic operation and actual file data is protected using mutex, which was mixed with a bug that overlaps the span of multiple files. This bug later caused a crash in the process of printing javascript code, thus aborting the process. (Aborting is a limitation of neon)",
					),
					(0, s.kt)(
						"p",
						null,
						"I changed the code so that the two don't mix. As a multi-threading issue, I can't say it's 100% solved because it's hard to reproduce, but it's likely that it's fixed.",
					),
					(0, s.kt)(
						"h3",
						{ id: "paren-expression-in-left-side-861" },
						"Paren expression in left side (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/861",
							},
							"#861",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre" },
							"(x) = (6);\n",
						),
					),
					(0, s.kt)(
						"p",
						null,
						"Previous versions of swc interpreted this code differently than it was.",
					),
					(0, s.kt)(
						"p",
						null,
						"In the case of JavaScript, grammar was so complicated that various tricks were involved when implementing parser. Among them, there is a trick to determine whether it is a pattern or an expression. It is, when an unknown token comes after the left parenthesis, it is first treated with an expression, and then if it is assignment to a variable or if it is a pattern it is parsed as pattern again. The bug occurred because there was a bug that processes '(x)' as 'x' in the process of parsing again.",
					),
					(0, s.kt)(
						"h2",
						{ id: "typescript-40-support" },
						"TypeScript 4.0 support",
					),
					(0, s.kt)(
						"h3",
						{ id: "non-last-rest-element-in-tuple-864" },
						"non-last rest element in tuple (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/864",
							},
							"#864",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type Strings = [string, string];\ntype Numbers = [number, number];\n\n// [string, string, number, number]\ntype StrStrNumNum = [...Strings, ...Numbers]; // works now\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "new-assignment-operators-866" },
						"new assignment operators (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/866",
							},
							"#866",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"a &&= b;\na ||= b;\na ??= b;\n",
						),
					),
					(0, s.kt)(
						"h3",
						{ id: "labels-in-tuple-types-865" },
						"labels in tuple types (",
						(0, s.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/865",
							},
							"#865",
						),
						")",
					),
					(0, s.kt)(
						"pre",
						null,
						(0, s.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"type Range = [start: number, end: number];\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
