"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6923],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => p, kt: () => d });
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
			function l(e, t) {
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
			var s = r.createContext({}),
				c = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
						o = e.mdxType,
						i = e.originalType,
						s = e.parentName,
						p = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = c(n),
						d = o,
						h = m["".concat(s, ".").concat(d)] || m[d] || u[d] || i;
					return n
						? r.createElement(
								h,
								a(a({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, a({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var i = n.length,
						a = new Array(i);
					a[0] = m;
					var l = {};
					for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : o),
						(a[1] = l);
					for (var c = 2; c < i; c++) a[c] = n[c];
					return r.createElement.apply(null, a);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		4167: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => l,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => p,
					default: () => m,
				});
			var r = n(7462),
				o = n(3366),
				i = (n(7294), n(3905)),
				a = ["components"],
				l = {
					title: "Changelog: swc v1.2.77",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2021/08/13/swc-1.2.77",
					source: "@site/blog/2021-08-13-swc-1.2.77.md",
					title: "Changelog: swc v1.2.77",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/178?closed=1",
					date: "2021-08-13T00:00:00.000Z",
					formattedDate: "August 13, 2021",
					tags: [],
					readingTime: 1.34,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.78",
						permalink: "/blog/2021/08/16/swc-1.2.78",
					},
					nextItem: {
						title: "Changelog: swc v1.2.76",
						permalink: "/blog/2021/08/10/swc-1.2.76",
					},
				},
				p = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{ value: "mimalloc", id: "mimalloc", children: [] },
							{
								value: "Better error handling (#2035)",
								id: "better-error-handling-2035",
								children: [],
							},
							{
								value: "bundler: <code>paths</code> support",
								id: "bundler-paths-support",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Type definition of <code>ImportDeclaration</code> (#2059)",
								id: "type-definition-of-importdeclaration-2059",
								children: [],
							},
							{
								value: "Optional chaining (#2063)",
								id: "optional-chaining-2063",
								children: [],
							},
							{
								value: "<code>class-validator</code> (#1362)",
								id: "class-validator-1362",
								children: [],
							},
							{
								value: "async generator (#1918)",
								id: "async-generator-1918",
								children: [],
							},
							{
								value: "minifier bugs (#2051, #2011)",
								id: "minifier-bugs-2051-2011",
								children: [],
							},
						],
					},
				],
				u = { toc: p };
			function m(e) {
				var t = e.components,
					n = (0, o.Z)(e, a);
				return (0, i.kt)(
					"wrapper",
					(0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/178?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/178?closed=1",
						),
					),
					(0, i.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, i.kt)("h3", { id: "mimalloc" }, "mimalloc"),
					(0, i.kt)(
						"p",
						null,
						"Now swc uses ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"mimalloc",
						),
						" instead of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"jemalloc",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2068",
							},
							"#2068",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "better-error-handling-2035" },
						"Better error handling (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2035",
							},
							"#2035",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Due to the some initial misdesign, handling errors from swc was inconvinient.\nYou can now use the exception thrown from the swc node apis.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2065",
							},
							"#2065",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "bundler-paths-support" },
						"bundler: ",
						(0, i.kt)("inlineCode", { parentName: "h3" }, "paths"),
						" support",
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"options.jsc.paths",
						),
						" in ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"spack.config.js",
						),
						" is respected when resolving modules.",
					),
					(0, i.kt)(
						"p",
						null,
						"Implemented by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/tmpfs",
							},
							"@tmpfs",
						),
						" and by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2054",
							},
							"#2054",
						),
						".",
					),
					(0, i.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, i.kt)(
						"h3",
						{ id: "type-definition-of-importdeclaration-2059" },
						"Type definition of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"ImportDeclaration",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2059",
							},
							"#2059",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previsouly typescript type definition did not contain the field ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"typeOnly",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2067",
							},
							"#2067",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "optional-chaining-2063" },
						"Optional chaining (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2063",
							},
							"#2063",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously swc miscompiled optional chaining in some cases.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2067",
							},
							"#2067",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "class-validator-1362" },
						(0, i.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"class-validator",
						),
						" (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1362",
							},
							"#1362",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previously using ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"class-validator",
						),
						" with swc resulted in an error if decorator metadata is enabled but ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"reflect-metadata",
						),
						" is not imported.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2055",
							},
							"#2055",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "async-generator-1918" },
						"async generator (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1918",
							},
							"#1918",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"Previosuly swc miscompiled code like",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let resolve;\nlet promise = new Promise((r) => (resolve = r));\nlet iterable = {\n  [Symbol.asyncIterator]() {\n    return {\n      next() {\n        return promise;\n      },\n    };\n  },\n};\n\n(async () => {\n  for await (let value of iterable) {\n    console.log(value);\n  }\n})();\n\n(async function () {\n  resolve({ value: 0, done: false });\n  promise = new Promise((r) => (resolve = r));\n\n  await null;\n  resolve({ value: 1, done: false });\n  promise = new Promise((r) => (resolve = r));\n\n  resolve({ value: undefined, done: true });\n})();\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"This fix does not affect many users.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2055",
							},
							"#2055",
						),
						".",
					),
					(0, i.kt)(
						"h3",
						{ id: "minifier-bugs-2051-2011" },
						"minifier bugs (",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2051",
							},
							"#2051",
						),
						", ",
						(0, i.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2011",
							},
							"#2011",
						),
						")",
					),
					(0, i.kt)(
						"p",
						null,
						"While mangling, shorthand properties are now handled corrctly, and some self-reassigning functions from swc or babel is now treated correctly.",
					),
					(0, i.kt)(
						"p",
						null,
						"Fixed by ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2052",
							},
							"#2052",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
