"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7071],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => l, kt: () => f });
			var n = r(7294);
			function i(e, t, r) {
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
			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? o(Object(r), !0).forEach(function (t) {
								i(e, t, r[t]);
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
					i = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							i = {},
							o = Object.keys(e);
						for (n = 0; n < o.length; n++)
							(r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
						return i;
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
									(i[r] = e[r]));
				}
				return i;
			}
			var p = n.createContext({}),
				s = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : a(a({}, t), e)),
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
						i = e.mdxType,
						o = e.originalType,
						p = e.parentName,
						l = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = s(r),
						f = i,
						h = u["".concat(p, ".").concat(f)] || u[f] || m[f] || o;
					return r
						? n.createElement(
								h,
								a(a({ ref: t }, l), {}, { components: r }),
							)
						: n.createElement(h, a({ ref: t }, l));
				});
			function f(e, t) {
				var r = arguments,
					i = t && t.mdxType;
				if ("string" == typeof e || i) {
					var o = r.length,
						a = new Array(o);
					a[0] = u;
					var c = {};
					for (var p in t) hasOwnProperty.call(t, p) && (c[p] = t[p]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : i),
						(a[1] = c);
					for (var s = 2; s < o; s++) a[s] = r[s];
					return n.createElement.apply(null, a);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		7205: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => c,
					contentTitle: () => p,
					metadata: () => s,
					toc: () => l,
					default: () => u,
				});
			var n = r(7462),
				i = r(3366),
				o = (r(7294), r(3905)),
				a = ["components"],
				c = {
					title: "Changelog: swc v1.2.104",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				s = {
					permalink: "/blog/2021/10/27/swc-1.2.104",
					source: "@site/blog/2021-10-27-swc-1.2.104.md",
					title: "Changelog: swc v1.2.104",
					description:
						"To see full list of patches, please visit https://github.com/swc-project/swc/milestone/205?closed=1",
					date: "2021-10-27T00:00:00.000Z",
					formattedDate: "October 27, 2021",
					tags: [],
					readingTime: 0.59,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.105",
						permalink: "/blog/2021/10/28/swc-1.2.105",
					},
					nextItem: {
						title: "Changelog: swc v1.2.103",
						permalink: "/blog/2021/10/25/swc-1.2.103",
					},
				},
				l = [
					{
						value: "Improvements",
						id: "improvements",
						children: [
							{
								value: "minifier: Performance",
								id: "minifier-performance",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "method parameters (#2539)",
								id: "method-parameters-2539",
								children: [],
							},
							{
								value: "object rest in for-of/in (#2531)",
								id: "object-rest-in-for-ofin-2531",
								children: [],
							},
							{
								value: "typescript: <code>declare</code>-d properties",
								id: "typescript-declare-d-properties",
								children: [],
							},
							{
								value: "minifier bugs",
								id: "minifier-bugs",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function u(e) {
				var t = e.components,
					r = (0, i.Z)(e, a);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, m, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"p",
						null,
						"To see full list of patches, please visit ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/milestone/205?closed=1",
							},
							"https://github.com/swc-project/swc/milestone/205?closed=1",
						),
					),
					(0, o.kt)("h2", { id: "improvements" }, "Improvements"),
					(0, o.kt)(
						"h3",
						{ id: "minifier-performance" },
						"minifier: Performance",
					),
					(0, o.kt)(
						"p",
						null,
						"The minifier of swc now mangles name in parallel.",
					),
					(0, o.kt)(
						"p",
						null,
						"Implemented by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2527",
							},
							"#2527",
						),
						".",
					),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "method-parameters-2539" },
						"method parameters (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2539",
							},
							"#2539",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously there was a regression in variable renaming pass which make it not mark method properties of an object literal as a scope.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2538",
							},
							"#2538",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "object-rest-in-for-ofin-2531" },
						"object rest in for-of/in (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/2531",
							},
							"#2531",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"There was a regression of ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"object_rest",
						),
						" pass which resulted in an exception.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2538",
							},
							"#2538",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-declare-d-properties" },
						"typescript: ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"declare",
						),
						"-d properties",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" could break code if it uses ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "declare"),
						" properties in a class.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/nayeemrmn",
							},
							"@nayeemrmn",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2530",
							},
							"#2530",
						),
						".",
					),
					(0, o.kt)("h3", { id: "minifier-bugs" }, "minifier bugs"),
					(0, o.kt)(
						"p",
						null,
						"There was some bugs in the minifier.",
					),
					(0, o.kt)(
						"p",
						null,
						"Fixed by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2528",
							},
							"#2528",
						),
						" and by ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/pull/2551",
							},
							"#2551",
						),
						".",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
