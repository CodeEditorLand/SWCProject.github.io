"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9186],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => h });
			var n = r(7294);
			function a(e, t, r) {
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
			function o(e, t) {
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
			function i(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								a(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: o(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var r,
					n,
					a = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
						return a;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (n = 0; n < o.length; n++)
						(r = o[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(a[r] = e[r]));
				}
				return a;
			}
			var p = n.createContext({}),
				s = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = s(e.components);
					return n.createElement(
						p.Provider,
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
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(r),
						h = a,
						f = u["".concat(p, ".").concat(h)] || u[h] || m[h] || o;
					return r
						? n.createElement(
								f,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(f, i({ ref: t }, l));
				});
			function h(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = u;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : a),
						(i[1] = c);
					for (var s = 2; s < o; s++) i[s] = r[s];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		599: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				c = {
					title: "Changelog: swc v1.2.22",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2020/08/31/swc-1.2.22",
					source: "@site/blog/2020-08-31-swc-1.2.22.md",
					title: "Changelog: swc v1.2.22",
					description: "General improvements",
					date: "2020-08-31T00:00:00.000Z",
					formattedDate: "August 31, 2020",
					tags: [],
					readingTime: 0.605,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.23",
						permalink: "/blog/2020/09/08/swc-1.2.23",
					},
					nextItem: {
						title: "Changelog: swc v1.2.21",
						permalink: "/blog/2020/08/24/swc-1.2.21",
					},
				},
				l = [
					{
						value: "General improvements",
						id: "general-improvements",
						children: [
							{
								value: "No install script (#1009)",
								id: "no-install-script-1009",
								children: [],
							},
							{
								value: "emitDecoratorMetadata checks for <code>Reflect</code> (#1011)",
								id: "emitdecoratormetadata-checks-for-reflect-1011",
								children: [],
							},
						],
					},
					{
						value: "Performance improvements",
						id: "performance-improvements",
						children: [
							{
								value: "Parser (#1004)",
								id: "parser-1004",
								children: [],
							},
							{
								value: "TypeScript transpilation (#993)",
								id: "typescript-transpilation-993",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "general-improvements" },
						"General improvements",
					),
					(0, o.kt)(
						"h3",
						{ id: "no-install-script-1009" },
						"No install script (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1009",
							},
							"#1009",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"With ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/napi-rs/napi-rs",
							},
							"napi-rs",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" becomes faster and install script is removed. ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"npm i @swc/core",
						),
						" is enough!",
					),
					(0, o.kt)(
						"h3",
						{ id: "emitdecoratormetadata-checks-for-reflect-1011" },
						"emitDecoratorMetadata checks for ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"Reflect",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1011",
							},
							"#1011",
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
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" now works just like official tsc while transpiling decorators.",
					),
					(0, o.kt)(
						"h2",
						{ id: "performance-improvements" },
						"Performance improvements",
					),
					(0, o.kt)(
						"h3",
						{ id: "parser-1004" },
						"Parser (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1004",
							},
							"#1004",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, parser of the ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-project.github.io",
							},
							"swc",
						),
						" did many crazy things.\nFor example, while parsing keywords, it allocated an interned string for them, and convert them to cheap enums. And now, the cheap enums are created directly.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixing various crazy things like this, parser becomes 10% faster.",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-transpilation-993" },
						"TypeScript transpilation (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/993",
							},
							"#993",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"TypeScript pass got 5 times faster. Previously it was slow due to a design flaw, but is's now fixed.",
					),
					(0, o.kt)("hr", null),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
