"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7349],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => s, kt: () => d });
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
			function c(e) {
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
			var l = r.createContext({}),
				p = function (e) {
					var t = r.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				s = function (e) {
					var t = p(e.components);
					return r.createElement(
						l.Provider,
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
						a = e.mdxType,
						o = e.originalType,
						l = e.parentName,
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = p(n),
						d = a,
						f = u["".concat(l, ".").concat(d)] || u[d] || m[d] || o;
					return n
						? r.createElement(
								f,
								c(c({ ref: t }, s), {}, { components: n }),
							)
						: r.createElement(f, c({ ref: t }, s));
				});
			function d(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						c = new Array(o);
					c[0] = u;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(c[1] = i);
					for (var p = 2; p < o; p++) c[p] = n[p];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			u.displayName = "MDXCreateElement";
		},
		8543: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => s,
					default: () => u,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.1.53",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/06/03/swc-1.1.53",
					source: "@site/blog/2020-06-03-swc-1.1.53.md",
					title: "Changelog: swc v1.1.53",
					description: "Bugfixes",
					date: "2020-06-03T00:00:00.000Z",
					formattedDate: "June 3, 2020",
					tags: [],
					readingTime: 0.755,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.54",
						permalink: "/blog/2020/06/06/swc-1.1.54",
					},
					nextItem: {
						title: "Changelog: swc v1.1.52",
						permalink: "/blog/2020/06/02/swc-1.1.52",
					},
				},
				s = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Parser improvements (#816)",
								id: "parser-improvements-816",
								children: [],
							},
							{
								value: "class member named declare (#822)",
								id: "class-member-named-declare-822",
								children: [],
							},
							{
								value: "Typescript enums (#821)",
								id: "typescript-enums-821",
								children: [],
							},
						],
					},
				],
				m = { toc: s };
			function u(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "parser-improvements-816" },
						"Parser improvements (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/816",
							},
							"#816",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" had a bug related to parsing of type annotations. This is fixed by the pr and ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can ",
						(0, o.kt)("em", { parentName: "p" }, "really"),
						" parse almost all typescript codes.",
					),
					(0, o.kt)(
						"h3",
						{ id: "class-member-named-declare-822" },
						"class member named declare (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/822",
							},
							"#822",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The code below is quite simple, but need some careful approach to parse it correctly, as declare is one of contextual keywords.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class A {\n  declare() {}\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can now parse class memebers named ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "declare"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-enums-821" },
						"Typescript enums (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/821",
							},
							"#821",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" miscompiled typescript enums if an enum member references other variant.",
					),
					(0, o.kt)("p", null, "Affected code looks like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"enum Direction {\n  Up = 1,\n  Down = 2,\n  Left = Up + Down,\n}\n",
						),
					),
					(0, o.kt)("p", null, "and it's now compiled as"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"var Direction;\n(function (Direction) {\n    Direction[Direction['Up'] = 1] = 'Up';\n    Direction[Direction['Down'] = 2] = 'Down';\n    Direction[Direction['Left'] = 3] = 'Left';\n})(Direction || (Direction = {}));\"\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"which is exactly same as it of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
