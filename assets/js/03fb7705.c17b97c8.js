"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6203],
	{
		3905: (e, t, r) => {
			r.d(t, { Zo: () => s, kt: () => m });
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
			function l(e) {
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
				c = function (e) {
					var t = n.useContext(p),
						r = t;
					return (
						e &&
							(r =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						r
					);
				},
				s = function (e) {
					var t = c(e.components);
					return n.createElement(
						p.Provider,
						{ value: t },
						e.children,
					);
				},
				d = {
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
						s = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = c(r),
						m = a,
						h = u["".concat(p, ".").concat(m)] || u[m] || d[m] || o;
					return r
						? n.createElement(
								h,
								l(l({ ref: t }, s), {}, { components: r }),
							)
						: n.createElement(h, l({ ref: t }, s));
				});
			function m(e, t) {
				var r = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = r.length,
						l = new Array(o);
					l[0] = u;
					var i = {};
					for (var p in t) hasOwnProperty.call(t, p) && (i[p] = t[p]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(l[1] = i);
					for (var c = 2; c < o; c++) l[c] = r[c];
					return n.createElement.apply(null, l);
				}
				return n.createElement.apply(null, r);
			}
			u.displayName = "MDXCreateElement";
		},
		198: (e, t, r) => {
			r.r(t),
				r.d(t, {
					frontMatter: () => i,
					contentTitle: () => p,
					metadata: () => c,
					toc: () => s,
					default: () => u,
				});
			var n = r(7462),
				a = r(3366),
				o = (r(7294), r(3905)),
				l = ["components"],
				i = {
					title: "Call for help and roadmap",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				p = void 0,
				c = {
					permalink: "/blog/2020/03/16/roadmap-and-call-for-help",
					source: "@site/blog/2020-03-16-roadmap-and-call-for-help.md",
					title: "Call for help and roadmap",
					description: "Call for help",
					date: "2020-03-16T00:00:00.000Z",
					formattedDate: "March 16, 2020",
					tags: [],
					readingTime: 1.885,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.36",
						permalink: "/blog/2020/03/26/swc-1.1.36",
					},
					nextItem: {
						title: "Changelog: swc v1.1.35",
						permalink: "/blog/2020/03/14/swc-1.1.35",
					},
				},
				s = [
					{
						value: "Call for help",
						id: "call-for-help",
						children: [],
					},
					{
						value: "Roadmap",
						id: "roadmap",
						children: [
							{
								value: ".d.ts generator",
								id: "dts-generator",
								children: [],
							},
							{
								value: "TypeScript type checker",
								id: "typescript-type-checker",
								children: [],
							},
							{ value: "Bundler", id: "bundler", children: [] },
							{
								value: "parser error recovery",
								id: "parser-error-recovery",
								children: [],
							},
						],
					},
				],
				d = { toc: s };
			function u(e) {
				var t = e.components,
					r = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, n.Z)({}, d, r, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "call-for-help" }, "Call for help"),
					(0, o.kt)(
						"p",
						null,
						"I'm an undergraduate and while on a vacation, I could and did invest 12 ~ 14 hours to swc per day.\nBut vacation is over and I can't afford to spend so much time.\nSo I want some help from the community.",
					),
					(0, o.kt)(
						"p",
						null,
						"I welcome the contribution of any way, including developer time contribution or ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://opencollective.com/swc",
							},
							"financial contribution",
						),
						".",
					),
					(0, o.kt)("h2", { id: "roadmap" }, "Roadmap"),
					(0, o.kt)(
						"p",
						null,
						"I'll write in an order that I initially planned to work on.\nAlso, I'll mention progress of the work and the hard parts.",
					),
					(0, o.kt)("h3", { id: "dts-generator" }, ".d.ts generator"),
					(0, o.kt)(
						"p",
						null,
						"I'm working on this at ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kdy1/swc/tree/dts",
							},
							"kdy1/swc#dts",
						),
						".\nMany tasks like return type inference and simple type narrowing are done and the remainging hard parts are",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"argument type inference",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"It is very hard. In most case, making swc pass a single type inference test requires building it again and again with modified ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "dbg!"),
						"-s and it's really time-consuming. Sometimes, I failed to fix a single test for a whole day.",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							"handling of circular references",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"This includes clas members, type parameters and function declartions.",
					),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)("li", { parentName: "ul" }, "handling this"),
					),
					(0, o.kt)(
						"h3",
						{ id: "typescript-type-checker" },
						"TypeScript type checker",
					),
					(0, o.kt)(
						"p",
						null,
						"I'm a full stack developer and I typically use react with typescript for web client and typescript for server.\nIf you have developed a web app with typescript, you will know how annoying slowness of ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" is. (Well, maybe it's just me being impatient)",
					),
					(0, o.kt)(
						"p",
						null,
						"If ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can check all type errors, developing with typescript would be significantly faster.",
					),
					(0, o.kt)(
						"p",
						null,
						"Note that adding an error checking logic is not very hard in many case.\nHard part is the fact that some of the tests coppied from the official typescript reposirory are very large and contain lots of error reportinh result in a single file. Due to the way test suite work, your console may contain 1k line, just because the official typescript test file contains lots of errors to match on.",
					),
					(0, o.kt)("h3", { id: "bundler" }, "Bundler"),
					(0, o.kt)(
						"p",
						null,
						"I worked for a while on this at ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kdy1/swc/tree/spack",
							},
							"kdy1/swc#spack",
						),
						".\nCurrently it can perform some dce (including tree-shaking) and can merge multiple modules into a module.",
					),
					(0, o.kt)("p", null, "Hard parts are"),
					(0, o.kt)(
						"ul",
						null,
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							(0, o.kt)(
								"p",
								{ parentName: "li" },
								"chunking bundles",
							),
						),
						(0, o.kt)(
							"li",
							{ parentName: "ul" },
							(0, o.kt)(
								"p",
								{ parentName: "li" },
								"dynamic imports",
							),
						),
					),
					(0, o.kt)("p", null, "This depends on chunking."),
					(0, o.kt)(
						"h3",
						{ id: "parser-error-recovery" },
						"parser error recovery",
					),
					(0, o.kt)(
						"p",
						null,
						"Purpose of the task is to completely replace ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" completely. When it's finished, it will be a real game-changer.\nI postponed it because modifing parser is hard.",
					),
				);
			}
			u.isMDXComponent = !0;
		},
	},
]);
