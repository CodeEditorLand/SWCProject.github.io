"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8853],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => m });
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
			function a(e, t) {
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
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
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
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = p(e.components);
					return r.createElement(
						c.Provider,
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
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						c = e.parentName,
						s = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						m = o,
						f = d["".concat(c, ".").concat(m)] || d[m] || u[m] || a;
					return n
						? r.createElement(
								f,
								i(i({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(f, i({ ref: t }, s));
				});
			function m(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						i = new Array(a);
					i[0] = d;
					var l = {};
					for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(i[1] = l);
					for (var p = 2; p < a; p++) i[p] = n[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		2795: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => s,
					default: () => d,
				});
			var r = n(7462),
				o = n(3366),
				a = (n(7294), n(3905)),
				i = ["components"],
				l = {
					title: "Changelog: swc v1.1.42",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/05/05/swc-1.1.42",
					source: "@site/blog/2020-05-05-swc-1.1.42.md",
					title: "Changelog: swc v1.1.42",
					description: "Bugfixes",
					date: "2020-05-05T00:00:00.000Z",
					formattedDate: "May 5, 2020",
					tags: [],
					readingTime: 0.435,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.41",
						permalink: "/blog/2020/05/05/swc-1.1.41",
					},
					nextItem: {
						title: "Changelog: swc v1.1.40",
						permalink: "/blog/2020/05/03/swc-1.1.40",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Dead code elimination (#763)",
								id: "dead-code-elimination-763",
								children: [],
							},
						],
					},
				],
				u = { toc: s };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "dead-code-elimination-763" },
						"Dead code elimination (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/763",
							},
							"#763",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, dead code elimination pass of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" dropped some used imports. It was cause by iteration order.",
					),
					(0, a.kt)("p", null, "In the code below,"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'import { A, B } from "library";\nconst arr = [A, B];\n\nconsole.log(B);\narr.map((v) => console.log(v));\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"after ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"console.log(B)",
						),
						" and ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"arr.map(...)",
						),
						" are evaluated, the import statement is visited and incorrectly dropped ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "A"),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"This is fixed by extracting import handling as a new phase. The new version of ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does not drop imports while every other things are evaluated.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
