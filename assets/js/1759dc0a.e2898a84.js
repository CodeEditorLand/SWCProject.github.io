"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[5780],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => u, kt: () => m });
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
			function c(e) {
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
			function i(e, t) {
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
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						r
					);
				},
				u = function (e) {
					var t = s(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				l = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return n.createElement(n.Fragment, {}, t);
					},
				},
				f = n.forwardRef(function (e, t) {
					var r = e.components,
						a = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = s(r),
						m = a,
						d = f["".concat(p, ".").concat(m)] || f[m] || l[m] || o;
					return r
						? n.createElement(
								d,
								c(c({ ref: t }, u), {}, { components: r }),
							)
						: n.createElement(d, c({ ref: t }, u));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						c = new Array(o);
					c[0] = f;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(c[1] = i);
					for (var s = 2; s < o; s++) c[s] = r[s];
					return n.createElement.apply(null, c);
				}
				return n.createElement.apply(null, r);
			}
			f.displayName = "MDXCreateElement";
		},
		5721: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => u,
					default: () => f,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				c = ["components"],
				i = {
					title: "Changelog: swc v1.2.13",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2020/08/07/swc-1.2.13",
					source: "@site/blog/2020-08-07-swc-1.2.13.md",
					title: "Changelog: swc v1.2.13",
					description: "New features",
					date: "2020-08-07T00:00:00.000Z",
					formattedDate: "August 7, 2020",
					tags: [],
					readingTime: 0.315,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.14",
						permalink: "/blog/2020/08/08/swc-1.2.14",
					},
					nextItem: {
						title: "Changelog: swc v1.2.12",
						permalink: "/blog/2020/08/06/swc-1.2.12",
					},
				},
				u = [
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "type annotation in catch binding (#942)",
								id: "type-annotation-in-catch-binding-942",
								children: [],
							},
							{
								value: "emitDecoratorMetadata for typescript decorators (#939)",
								id: "emitdecoratormetadata-for-typescript-decorators-939",
								children: [],
							},
						],
					},
				],
				l = { toc: u };
			function f(e) {
				var t = e.components,
					r = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, l, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "type-annotation-in-catch-binding-942" },
						"type annotation in catch binding (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/942",
							},
							"#942",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"TypeScript 4.0 supports using ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "unknown"),
						" as a type of catch parameter, like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre" },
							"try {\n} catch (e: unknown) {\n}\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" now supports it.",
					),
					(0, o.kt)(
						"h3",
						{
							id: "emitdecoratormetadata-for-typescript-decorators-939",
						},
						"emitDecoratorMetadata for typescript decorators (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/939",
							},
							"#939",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"You can now use ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://nestjs.com/" },
							"nest",
						),
						" with ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						"! You need to configure ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" as shown in ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jsctransformdecoratormetadata",
							},
							"the document",
						),
						".",
					),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
