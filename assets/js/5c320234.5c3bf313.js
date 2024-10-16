"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[146],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => f });
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
			function l(e) {
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
			var c = r.createContext({}),
				p = function (e) {
					var t = r.useContext(c),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = p(e.components);
					return r.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				s = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				m = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = p(n),
						f = a,
						d = m["".concat(c, ".").concat(f)] || m[f] || s[f] || o;
					return n
						? r.createElement(
								d,
								l(l({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(d, l({ ref: t }, u));
				});
			function f(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						l = new Array(o);
					l[0] = m;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(l[1] = i);
					for (var p = 2; p < o; p++) l[p] = n[p];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		8510: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => u,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				l = ["components"],
				i = {
					title: "Changelog: swc v1.1.28",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2020/02/22/swc-1.1.28",
					source: "@site/blog/2020-02-22-swc-1.1.28.md",
					title: "Changelog: swc v1.1.28",
					description: "Bugfix",
					date: "2020-02-22T00:00:00.000Z",
					formattedDate: "February 22, 2020",
					tags: [],
					readingTime: 0.78,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.29",
						permalink: "/blog/2020/02/27/swc-1.1.29",
					},
					nextItem: {
						title: "Changelog: swc v1.1.27",
						permalink: "/blog/2020/02/20/swc-1.1.27",
					},
				},
				u = [
					{
						value: "Bugfix",
						id: "bugfix",
						children: [
							{
								value: "for loops with continue (#686)",
								id: "for-loops-with-continue-686",
								children: [],
							},
							{
								value: "export-defaulted type (#685)",
								id: "export-defaulted-type-685",
								children: [],
							},
						],
					},
				],
				s = { toc: u };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, l);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfix" }, "Bugfix"),
					(0, o.kt)(
						"h3",
						{ id: "for-loops-with-continue-686" },
						"for loops with continue (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/686",
							},
							"#686",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Starting from v1.1.28, swc does not break the code like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module.exports = function(values) {\n  var vars = [];\n  var elem = null,\n    name,\n    val;\n  for (var i = 0; i < this.elements.length; i++) {\n    elem = this.elements[i];\n    name = elem.name;\n    if (!name) continue;\n    val = values[name];\n    if (val == null) val = "";\n    switch (elem.type) {\n      case "submit":\n        break;\n      case "radio":\n      case "checkbox":\n        elem.checked = val.some(function(str) {\n          return str.toString() == elem.value;\n        });\n        break;\n      case "select-multiple":\n        elem.fill(val);\n        break;\n      case "textarea":\n        elem.innerText = val;\n        break;\n      case "hidden":\n        break;\n      default:\n        if (elem.fill) {\n          elem.fill(val);\n        } else {\n          elem.value = val;\n        }\n        break;\n    }\n  }\n  return vars;\n};\n',
						),
					),
					(0, o.kt)(
						"h3",
						{ id: "export-defaulted-type-685" },
						"export-defaulted type (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/685",
							},
							"#685",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"swc now strips ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"export default MyType",
						),
						" from the code below",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"type MyType = string;\nexport default MyType;\n",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"and emits an empty file. Previously, swc emitted the code below, which is wrong.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"export default MyType;\n",
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
