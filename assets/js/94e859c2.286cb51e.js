"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[1316],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => u, kt: () => m });
			var r = t(7294);
			function a(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
								value: t,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[n] = t),
					e
				);
			}
			function l(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n &&
						(r = r.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, r);
				}
				return t;
			}
			function o(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? l(Object(t), !0).forEach(function (n) {
								a(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: l(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function i(e, n) {
				if (null == e) return {};
				var t,
					r,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							a = {},
							l = Object.keys(e);
						for (r = 0; r < l.length; r++)
							(t = l[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (r = 0; r < l.length; r++)
						(t = l[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var c = r.createContext({}),
				s = function (e) {
					var n = r.useContext(c),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : o(o({}, n), e)),
						t
					);
				},
				u = function (e) {
					var n = s(e.components);
					return r.createElement(
						c.Provider,
						{ value: n },
						e.children,
					);
				},
				p = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				f = r.forwardRef(function (e, n) {
					var t = e.components,
						a = e.mdxType,
						l = e.originalType,
						c = e.parentName,
						u = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						f = s(t),
						m = a,
						d = f["".concat(c, ".").concat(m)] || f[m] || p[m] || l;
					return t
						? r.createElement(
								d,
								o(o({ ref: n }, u), {}, { components: t }),
							)
						: r.createElement(d, o({ ref: n }, u));
				});
			function m(e, n) {
				var t = arguments,
					a = n && n.mdxType;
				if ("string" == typeof e || a) {
					var l = t.length,
						o = new Array(l);
					o[0] = f;
					var i = {};
					for (var c in n) hasOwnProperty.call(n, c) && (i[c] = n[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(o[1] = i);
					for (var s = 2; s < l; s++) o[s] = t[s];
					return r.createElement.apply(null, o);
				}
				return r.createElement.apply(null, t);
			}
			f.displayName = "MDXCreateElement";
		},
		9374: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => s,
					toc: () => u,
					default: () => f,
				});
			var r = t(7462),
				a = t(3366),
				l = (t(7294), t(3905)),
				o = ["components"],
				i = {
					title: "Changelog: swc v1.1.32",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				s = {
					permalink: "/blog/2020/03/04/swc-1.1.32",
					source: "@site/blog/2020-03-04-swc-1.1.32.md",
					title: "Changelog: swc v1.1.32",
					description: "Performance",
					date: "2020-03-04T00:00:00.000Z",
					formattedDate: "March 4, 2020",
					tags: [],
					readingTime: 1.175,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.34",
						permalink: "/blog/2020/03/10/swc-1.1.34",
					},
					nextItem: {
						title: "Changelog: swc v1.1.33",
						permalink: "/blog/2020/03/04/swc-1.1.33",
					},
				},
				u = [
					{
						value: "Performance",
						id: "performance",
						children: [
							{
								value: "24x faster for a large file (#697)",
								id: "24x-faster-for-a-large-file-697",
								children: [],
							},
						],
					},
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "this in for loop (#698)",
								id: "this-in-for-loop-698",
								children: [],
							},
							{
								value: "function renaming (#699)",
								id: "function-renaming-699",
								children: [],
							},
						],
					},
				],
				p = { toc: u };
			function f(e) {
				var n = e.components,
					t = (0, a.Z)(e, o);
				return (0, l.kt)(
					"wrapper",
					(0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }),
					(0, l.kt)("h2", { id: "performance" }, "Performance"),
					(0, l.kt)(
						"h3",
						{ id: "24x-faster-for-a-large-file-697" },
						"24x faster for a large file (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/697",
							},
							"#697",
						),
						")",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" now handles large source maps correctly, and",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre" },
							"$ time swc large.js -o dist.js -s > /dev/null\n\nswc large.js -o dist.js -s > /dev/null  16.19s user 0.24s system 100% cpu 16.295 total\n",
						),
					),
					(0, l.kt)("p", null, "becomes"),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre" },
							"$ time swc large.js -o dist.js -s > /dev/null\n\nswc large.js -o dist.js -s > /dev/null  2.49s user 0.28s system 110% cpu 2.497 total\n",
						),
					),
					(0, l.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, l.kt)(
						"h3",
						{ id: "this-in-for-loop-698" },
						"this in for loop (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/698",
							},
							"#698",
						),
						")",
					),
					(0, l.kt)(
						"p",
						null,
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" can handle this in a for loop with closure. An example is at below.",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'module.exports = function(values) {\n  var vars = [];\n  var elem = null,\n    name,\n    val;\n  for (var i = 0; i < this.elements.length; i++) {\n    elem = this.elements[i];\n    name = elem.name;\n    if (!name) continue;\n    val = values[name];\n    if (val == null) val = "";\n    switch (elem.type) {\n      case "submit":\n        break;\n      case "radio":\n      case "checkbox":\n        elem.checked = val.some(function(str) {\n          return str.toString() == elem.value;\n        });\n        break;\n      case "select-multiple":\n        elem.fill(val);\n        break;\n      case "textarea":\n        elem.innerText = val;\n        break;\n      case "hidden":\n        break;\n      default:\n        if (elem.fill) {\n          elem.fill(val);\n        } else {\n          elem.value = val;\n        }\n        break;\n    }\n  }\n  return vars;\n};\n',
						),
					),
					(0, l.kt)(
						"h3",
						{ id: "function-renaming-699" },
						"function renaming (",
						(0, l.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/699",
							},
							"#699",
						),
						")",
					),
					(0, l.kt)(
						"p",
						null,
						"Previously, ",
						(0, l.kt)("inlineCode", { parentName: "p" }, "swc"),
						" failed to handle code like the code below because of a bug in ",
						(0, l.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolver",
						),
						" pass.",
					),
					(0, l.kt)(
						"pre",
						null,
						(0, l.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'function foo() {\n  return () => {\n    function Bar() {}\n\n    Bar.qux = "";\n\n    return Bar;\n  };\n}\n\nfoo()();\n',
						),
					),
					(0, l.kt)("p", null, "It is now fixed."),
				);
			}
			f.isMDXComponent = !0;
		},
	},
]);
