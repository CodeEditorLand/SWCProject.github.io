"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[813],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
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
			function c(e, t) {
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
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? c(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: c(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function a(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							c = Object.keys(e);
						for (n = 0; n < c.length; n++)
							(r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(e);
					for (n = 0; n < c.length; n++)
						(r = c[n]),
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
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = p(e.components);
					return n.createElement(
						i.Provider,
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
						c = e.originalType,
						i = e.parentName,
						l = a(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						h = o,
						d = m["".concat(i, ".").concat(h)] || m[h] || u[h] || c;
					return r
						? n.createElement(
								d,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(d, s({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var c = r.length,
						s = new Array(c);
					s[0] = m;
					var a = {};
					for (var i in t) hasOwnProperty.call(t, i) && (a[i] = t[i]);
					(a.originalType = e),
						(a.mdxType = "string" == typeof e ? e : o),
						(s[1] = a);
					for (var p = 2; p < c; p++) s[p] = r[p];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		8698: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => a,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				c = (r(7294), r(3905)),
				s = ["components"],
				a = {
					title: "Changelog: swc v1.2.76",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				p = {
					permalink: "/blog/2021/08/10/swc-1.2.76",
					source: "@site/blog/2021-08-10-swc-1.2.76.md",
					title: "Changelog: swc v1.2.76",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/177?closed=1",
					date: "2021-08-10T00:00:00.000Z",
					formattedDate: "August 10, 2021",
					tags: [],
					readingTime: 1.05,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.77",
						permalink: "/blog/2021/08/13/swc-1.2.77",
					},
					nextItem: {
						title: "Changelog: swc v1.2.75",
						permalink: "/blog/2021/08/08/swc-1.2.75",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{ value: "minifier", id: "minifier", children: [] },
							{
								value: "bundler: <code>browser</code> in package.json (#1956)",
								id: "bundler-browser-in-packagejson-1956",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Block scoping (#2027)",
								id: "block-scoping-2027",
								children: [],
							},
							{
								value: "Mixed import specifiers (#1734)",
								id: "mixed-import-specifiers-1734",
								children: [],
							},
							{
								value: "Constructor arguments (#2021)",
								id: "constructor-arguments-2021",
								children: [],
							},
							{
								value: "regenerator: <code>||</code> (#2024)",
								id: "regenerator--2024",
								children: [],
							},
							{
								value: "<code>jsc.paths</code> (#1934, #1935)",
								id: "jscpaths-1934-1935",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, c.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, c.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/177?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/177?closed=1",
						),
					),
					(0, c.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, c.kt)("h3", { id: "minifier" }, "minifier"),
					(0, c.kt)(
						"p",
						null,
						"More rules are implemented and it will emit more compact code than before.",
					),
					(0, c.kt)(
						"p",
						null,
						"Related: ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2039",
							},
							"#2039",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "bundler-browser-in-packagejson-1956" },
						"bundler: ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"browser",
						),
						" in package.json (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1956",
							},
							"#1956",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"The bundler now supports ",
						(0, c.kt)("inlineCode", { parentName: "p" }, "browser"),
						" field of package.json.",
					),
					(0, c.kt)(
						"p",
						null,
						"Implemented by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						" and by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2045",
							},
							"#2045",
						),
					),
					(0, c.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, c.kt)(
						"h3",
						{ id: "block-scoping-2027" },
						"Block scoping (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2027",
							},
							"#2027",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Previously swc could break code like",
					),
					(0, c.kt)(
						"pre",
						null,
						(0, c.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const keys = {\n  a: 1,\n  b: 2,\n};\n\nconst controller = {};\n\nfor (const key in keys) {\n  controller[key] = (c, ...d) => {\n    console.log(keys[key]);\n  };\n}\n",
						),
					),
					(0, c.kt)(
						"p",
						null,
						"which defines a rest argument in an arrow expression in a for loop.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2034",
							},
							"#2034",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "mixed-import-specifiers-1734" },
						"Mixed import specifiers (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1734",
							},
							"#1734",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Previously swc had a bug which can break your code if you import from a module using both of default specifier and named spaecifier, but with different import statemetns.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2034",
							},
							"#2034",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "constructor-arguments-2021" },
						"Constructor arguments (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2021",
							},
							"#2021",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"This bug is caused by code written 3 years ago, and could break some class codes if constructor uses declared class properties.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2034",
							},
							"#2034",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "regenerator--2024" },
						"regenerator: ",
						(0, c.kt)("inlineCode", { parentName: "h3" }, "||"),
						" (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2024",
							},
							"#2024",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Now ",
						(0, c.kt)(
							"inlineCode",
							{ parentName: "p" },
							"(await sleep()) || 'fallback'",
						),
						" works properly.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2034",
							},
							"#2034",
						),
						".",
					),
					(0, c.kt)(
						"h3",
						{ id: "jscpaths-1934-1935" },
						(0, c.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"jsc.paths",
						),
						" (",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1934",
							},
							"#1934",
						),
						", ",
						(0, c.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1935",
							},
							"#1935",
						),
						")",
					),
					(0, c.kt)(
						"p",
						null,
						"Previously it was not usable with typescript, but it's finally fixed and it will work as expected.",
					),
					(0, c.kt)(
						"p",
						null,
						"Fixed by ",
						(0, c.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2043",
							},
							"#2043",
						),
						".",
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
