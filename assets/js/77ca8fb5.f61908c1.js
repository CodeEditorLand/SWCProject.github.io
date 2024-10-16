"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9918],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => u, kt: () => w });
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
			function c(e) {
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
			function s(e, t) {
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
			var i = r.createContext({}),
				l = function (e) {
					var t = r.useContext(i),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : c(c({}, t), e)),
						n
					);
				},
				u = function (e) {
					var t = l(e.components);
					return r.createElement(
						i.Provider,
						{ value: t },
						e.children,
					);
				},
				p = {
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
						i = e.parentName,
						u = s(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						m = l(n),
						w = a,
						d = m["".concat(i, ".").concat(w)] || m[w] || p[w] || o;
					return n
						? r.createElement(
								d,
								c(c({ ref: t }, u), {}, { components: n }),
							)
						: r.createElement(d, c({ ref: t }, u));
				});
			function w(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						c = new Array(o);
					c[0] = m;
					var s = {};
					for (var i in t) hasOwnProperty.call(t, i) && (s[i] = t[i]);
					(s.originalType = e),
						(s.mdxType = "string" == typeof e ? e : a),
						(c[1] = s);
					for (var l = 2; l < o; l++) c[l] = n[l];
					return r.createElement.apply(null, c);
				}
				return r.createElement.apply(null, n);
			}
			m.displayName = "MDXCreateElement";
		},
		3375: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => s,
					contentTitle: () => i,
					metadata: () => l,
					toc: () => u,
					default: () => m,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				c = ["components"],
				s = {
					id: "usage-swc-wasm",
					title: "Using @swc/wasm or @swc/wasm-web",
					sidebar_label: "@swc/wasm",
				},
				i = void 0,
				l = {
					unversionedId: "usage-swc-wasm",
					id: "usage-swc-wasm",
					isDocsHomePage: !1,
					title: "Using @swc/wasm or @swc/wasm-web",
					description: "@swc/wasm-web",
					source: "@site/docs/usage-swc-wasm.md",
					sourceDirName: ".",
					slug: "/usage-swc-wasm",
					permalink: "/docs/usage-swc-wasm",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-swc-wasm",
						title: "Using @swc/wasm or @swc/wasm-web",
						sidebar_label: "@swc/wasm",
					},
					sidebar: "usage",
					previous: {
						title: "cli (swc)",
						permalink: "/docs/usage-swc-cli",
					},
					next: {
						title: "cli (spack)",
						permalink: "/docs/usage-spack-cli",
					},
				},
				u = [
					{
						value: "<code>@swc/wasm-web</code>",
						id: "swcwasm-web",
						children: [
							{
								value: "Example react component",
								id: "example-react-component",
								children: [],
							},
						],
					},
				],
				p = { toc: u };
			function m(e) {
				var t = e.components,
					n = (0, a.Z)(e, c);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)(
						"h2",
						{ id: "swcwasm-web" },
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h2" },
							"@swc/wasm-web",
						),
					),
					(0, o.kt)(
						"p",
						null,
						"You have to initialize the module before you use it.",
					),
					(0, o.kt)(
						"h3",
						{ id: "example-react-component" },
						"Example react component",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-tsx" },
							'import { useEffect, useState } from "react";\nimport initSwc, { transformSync } from "@swc/wasm-web";\n\nexport default function App() {\n  const [initialized, setInitialized] = useState(false);\n\n  useEffect(() => {\n    async function importAndRunSwcOnMount() {\n      await initSwc();\n      setInitialized(true);\n    }\n    importAndRunSwcOnMount();\n  }, []);\n\n  function compile() {\n    if (!initialized) {\n      return;\n    }\n    const result = transformSync(`console.log(\'hello\')`, {});\n    console.log(result);\n  }\n\n  return (\n    <div className="App">\n      <button onClick={compile}>Compile</button>\n    </div>\n  );\n}\n',
						),
					),
				);
			}
			m.isMDXComponent = !0;
		},
	},
]);
