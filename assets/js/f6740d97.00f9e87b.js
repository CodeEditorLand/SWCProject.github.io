"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2338],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => d });
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
			function a(e, t) {
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
						? a(Object(r), !0).forEach(function (t) {
								o(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: a(Object(r)).forEach(function (t) {
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
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
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
						a = e.originalType,
						i = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(r),
						d = o,
						f = m["".concat(i, ".").concat(d)] || m[d] || u[d] || a;
					return r
						? n.createElement(
								f,
								s(s({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(f, s({ ref: t }, l));
				});
			function d(e, t) {
				var r = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = r.length,
						s = new Array(a);
					s[0] = m;
					var c = {};
					for (var i in t) hasOwnProperty.call(t, i) && (c[i] = t[i]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(s[1] = c);
					for (var p = 2; p < a; p++) s[p] = r[p];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, r);
			}
			m.displayName = "MDXCreateElement";
		},
		4974: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => i,
					metadata: () => p,
					toc: () => l,
					default: () => m,
				});
			var n = r(7462),
				o = r(3366),
				a = (r(7294), r(3905)),
				s = ["components"],
				c = {
					title: "Changelog: swc v1.2.15",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				i = void 0,
				p = {
					permalink: "/blog/2020/08/09/swc-1.2.15",
					source: "@site/blog/2020-08-09-swc-1.2.15.md",
					title: "Changelog: swc v1.2.15",
					description: "Bugfixes",
					date: "2020-08-09T00:00:00.000Z",
					formattedDate: "August 9, 2020",
					tags: [],
					readingTime: 0.79,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.17",
						permalink: "/blog/2020/08/10/swc-1.2.17",
					},
					nextItem: {
						title: "Changelog: swc v1.2.14",
						permalink: "/blog/2020/08/08/swc-1.2.14",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "emitDecoratorMetadata for parameters (#948)",
								id: "emitdecoratormetadata-for-parameters-948",
								children: [],
							},
							{
								value: "typescript properties (#930)",
								id: "typescript-properties-930",
								children: [],
							},
							{
								value: "delete a?.b (#947)",
								id: "delete-ab-947",
								children: [],
							},
							{
								value: "in operator in class properties (#944)",
								id: "in-operator-in-class-properties-944",
								children: [],
							},
						],
					},
				],
				u = { toc: l };
			function m(e) {
				var t = e.components,
					r = (0, o.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"h3",
						{ id: "emitdecoratormetadata-for-parameters-948" },
						"emitDecoratorMetadata for parameters (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/948",
							},
							"#948",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" emit wrong metadata information for decorators on parameter if decorator metadata is enabled. As a result, the code below was broken.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'class MyController {\n  @Get("/callback")\n  callback(\n    @Res() res: express.Response,\n    @Session() session: express.Express.Session\n  ) {\n    const token = await this.getToken(code);\n    const user = await this.getUserInfo(token.access_token);\n    session.oauth2Token = token;\n    session.user = user;\n    return res.redirect(state.returnUrl ?? "/");\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"Thanks to ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/Brooooooklyn",
							},
							"@Brooooooklyn",
						),
						", this is fixed.",
					),
					(0, a.kt)(
						"h3",
						{ id: "typescript-properties-930" },
						"typescript properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/930",
							},
							"#930",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Now typescript class properties work in the same way as ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsc"),
						". Previously ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"class_properties",
						),
						" pass follows ecmascript spec, and it had broken some codes.",
					),
					(0, a.kt)(
						"h3",
						{ id: "delete-ab-947" },
						"delete a?.b (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/947",
							},
							"#947",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Previously, ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc",
							},
							"swc",
						),
						" emitted an wrong error message for the code below while compiling properly.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"const obj = { myProp: 6 };\ndelete obj?.myProp;\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "in-operator-in-class-properties-944" },
						"in operator in class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/944",
							},
							"#944",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Affected code looks like the code below",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'class CTest {\n  myFunc = () => "key" in {};\n}\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
