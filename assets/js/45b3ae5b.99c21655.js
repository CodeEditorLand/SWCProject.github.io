"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1254],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
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
			function p(e, t) {
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
			var s = n.createContext({}),
				c = function (e) {
					var t = n.useContext(s),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : i(i({}, t), e)),
						r
					);
				},
				l = function (e) {
					var t = c(e.components);
					return n.createElement(
						s.Provider,
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
				d = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						s = e.parentName,
						l = p(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = c(r),
						f = a,
						h = d["".concat(s, ".").concat(f)] || d[f] || u[f] || o;
					return r
						? n.createElement(
								h,
								i(i({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, i({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						i = new Array(o);
					i[0] = d;
					var p = {};
					for (var s in t) hasOwnProperty.call(t, s) && (p[s] = t[s]);
					(p.originalType = e),
						(p.mdxType = "string" == typeof e ? e : a),
						(i[1] = p);
					for (var c = 2; c < o; c++) i[c] = r[c];
					return n.createElement.apply(null, i);
				}
				return n.createElement.apply(null, r);
			}
			d.displayName = "MDXCreateElement";
		},
		5318: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => p,
					contentTitle: () => s,
					metadata: () => c,
					toc: () => l,
					default: () => d,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				i = ["components"],
				p = {
					title: "Changelog: swc v1.2.39",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				s = void 0,
				c = {
					permalink: "/blog/2020/11/21/swc-1.2.39",
					source: "@site/blog/2020-11-21-swc-1.2.39.md",
					title: "Changelog: swc v1.2.39",
					description: "Bugfixes",
					date: "2020-11-21T00:00:00.000Z",
					formattedDate: "November 21, 2020",
					tags: [],
					readingTime: 0.545,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.40",
						permalink: "/blog/2020/12/04/swc-1.2.40",
					},
					nextItem: {
						title: "Changelog: swc v1.2.38",
						permalink: "/blog/2020/11/08/swc-1.2.38",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "Preserved input (#1221)",
								id: "preserved-input-1221",
								children: [],
							},
							{
								value: "Private name in interfaces (#1211)",
								id: "private-name-in-interfaces-1211",
								children: [],
							},
							{
								value: "Bundler rework (#1212)",
								id: "bundler-rework-1212",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "BigInt literals as property keys (#1192)",
								id: "bigint-literals-as-property-keys-1192",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function d(e) {
				var t = e.components,
					r = (0, a.Z)(e, i);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "preserved-input-1221" },
						"Preserved input (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1221",
							},
							"#1221",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now respects the input, and preserves escapes.",
					),
					(0, o.kt)(
						"h3",
						{ id: "private-name-in-interfaces-1211" },
						"Private name in interfaces (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1211",
							},
							"#1211",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" previously aborted on input like the below. This is changed to normal error.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"interface Foo {\n  #bar();\n}\n",
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-rework-1212" },
						"Bundler rework (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1212",
							},
							"#1212",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "spack"),
						", the bundler of ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" project, got a large refactoring and it can now handle almost all valid es codes. As the bundler is also used by ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land/" },
							"deno",
						),
						", the pr contains lots of test for ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land/" },
							"deno",
						),
						".",
					),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "bigint-literals-as-property-keys-1192" },
						"BigInt literals as property keys (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1192",
							},
							"#1192",
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
								href: "https://github.com/braddunbar",
							},
							"@braddunbar",
						),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now supports using bigint literal as a key of property.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
