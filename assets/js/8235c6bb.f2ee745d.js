"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4872],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => l, kt: () => u });
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
			function s(e) {
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
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				l = function (e) {
					var t = p(e.components);
					return r.createElement(
						c.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				d = r.forwardRef(function (e, t) {
					var n = e.components,
						a = e.mdxType,
						o = e.originalType,
						c = e.parentName,
						l = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						u = a,
						f = d["".concat(c, ".").concat(u)] || d[u] || m[u] || o;
					return n
						? r.createElement(
								f,
								s(s({ ref: t }, l), {}, { components: n }),
							)
						: r.createElement(f, s({ ref: t }, l));
				});
			function u(e, t) {
				var n = arguments,
					a = t && t.mdxType;
				if ("string" == typeof e || a) {
					var o = n.length,
						s = new Array(o);
					s[0] = d;
					var i = {};
					for (var c in t) hasOwnProperty.call(t, c) && (i[c] = t[c]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : a),
						(s[1] = i);
					for (var p = 2; p < o; p++) s[p] = n[p];
					return r.createElement.apply(null, s);
				}
				return r.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		4825: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => c,
					metadata: () => p,
					toc: () => l,
					default: () => d,
				});
			var r = n(7462),
				a = n(3366),
				o = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Changelog: swc v1.2.50",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				c = void 0,
				p = {
					permalink: "/blog/2021/03/03/swc-1.2.50",
					source: "@site/blog/2021-03-03-swc-1.2.50.md",
					title: "Changelog: swc v1.2.50",
					description: "Bugfixes",
					date: "2021-03-03T00:00:00.000Z",
					formattedDate: "March 3, 2021",
					tags: [],
					readingTime: 2.705,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.51",
						permalink: "/blog/2021/03/28/swc-1.2.51",
					},
					nextItem: {
						title: "Changelog: swc v1.2.48",
						permalink: "/blog/2021/02/22/swc-1.2.48",
					},
				},
				l = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "TypeScript metadata for unions (#1421)",
								id: "typescript-metadata-for-unions-1421",
								children: [],
							},
							{
								value: "No duplicated <code>use strict</code> (#1423)",
								id: "no-duplicated-use-strict-1423",
								children: [],
							},
							{
								value: "<code>\r\n</code> in template literals (#1450)",
								id: "rn-in-template-literals-1450",
								children: [],
							},
							{
								value: "bundler: Many improvements (#1427)",
								id: "bundler-many-improvements-1427",
								children: [],
							},
							{
								value: "New option to prserve class name (#1279)",
								id: "new-option-to-prserve-class-name-1279",
								children: [],
							},
							{
								value: "Fix for switch statements in loops (#1415)",
								id: "fix-for-switch-statements-in-loops-1415",
								children: [],
							},
						],
					},
					{
						value: "New features",
						id: "new-features",
						children: [
							{
								value: "<code>.swcrc</code> option to enable sourcemps. (#1309)",
								id: "swcrc-option-to-enable-sourcemps-1309",
								children: [],
							},
							{
								value: "@babel/preset-modules (#1439)",
								id: "babelpreset-modules-1439",
								children: [],
							},
						],
					},
				],
				m = { toc: l };
			function d(e) {
				var t = e.components,
					n = (0, a.Z)(e, s);
				return (0, o.kt)(
					"wrapper",
					(0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, o.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, o.kt)(
						"h3",
						{ id: "typescript-metadata-for-unions-1421" },
						"TypeScript metadata for unions (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1421",
							},
							"#1421",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Now ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" emits proper metadata for union of string literals, like in codes like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import "reflect-metadata";\n\nconst COL_KEY = Symbol("col");\n\nconst column = () => {\n  return (object: any, key: string) => {\n    Reflect.defineMetadata(COL_KEY, "value", object, key);\n  };\n};\n\nclass User {\n  @column() currency!: "usd" | "eur" | "yen";\n}\n\nconsole.log(Reflect.getMetadata("design:type", User.prototype, "currency"));\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"Previously, the code printed ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"undefined",
						),
						" when compiled with ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" which is wrong.\nIt is now ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "String"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "no-duplicated-use-strict-1423" },
						"No duplicated ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "h3" },
							"use strict",
						),
						" (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1423",
							},
							"#1423",
						),
						")",
					),
					(0, o.kt)("p", null, "For code like"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'"use strict";\n\nimport { arrayUtilities } from "necessary";\n\nconst { second } = arrayUtilities;\n\nconst elements = [1, 2, 3],\n  secondElement = second(elements);\n\nconsole.log(secondElement);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now emits",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nvar _necessary = require("necessary");\nvar second = _necessary.arrayUtilities.second;\nvar elements = [1, 2, 3],\n  secondElement = second(elements);\nconsole.log(secondElement);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						"In previous versions, the ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"'use strict'",
						),
						" directive was emitted twice.",
					),
					(0, o.kt)(
						"h3",
						{ id: "rn-in-template-literals-1450" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, "\\r\\n"),
						" in template literals (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1450",
							},
							"#1450",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" miscompiled the code below.",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { MultipartReader } from "https://deno.land/std@0.88.0/mime/multipart.ts";\nimport { StringReader } from "https://deno.land/std@0.88.0/io/readers.ts";\n\n// carriage returns added for running on POSIX, not needed if on windows\nconst content = `--------------------------366796e1c748a2fb\\r\nContent-Disposition: form-data; name="payload"\\r\nContent-Type: text/plain\\r\n\\r\nCONTENT\\r\n--------------------------366796e1c748a2fb--`;\n\nconst boundary = "------------------------366796e1c748a2fb";\n\nconst stringReader = new StringReader(content);\n\nconst multipartReader = new MultipartReader(stringReader, boundary);\nconst formData = await multipartReader.readForm();\nfor (const entry of formData.entries()) {\n  console.log("entry", entry);\n}\nconsole.log("formdata", formData);\n',
						),
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)("inlineCode", { parentName: "p" }, "\\r\\n"),
						" in template literals was previously parsed as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "\\n"),
						", but it's now parsed as ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "\\r\\n"),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "bundler-many-improvements-1427" },
						"bundler: Many improvements (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1427",
							},
							"#1427",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"The bundler of the ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" can now handle much more codes.\nVarious bugs are reported via ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://deno.land" },
							"deno",
						),
						" and those are all fixed.",
					),
					(0, o.kt)(
						"h3",
						{ id: "new-option-to-prserve-class-name-1279" },
						"New option to prserve class name (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1279",
							},
							"#1279",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"To bypass restrictions of rust, ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" uses a trick named ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"span hygiene",
						),
						".\nIt modifies identifier at the end to prevent conflict between identifiers.\nBut this operation can be problematic if the name of class matters.",
					),
					(0, o.kt)("p", null, "For example,"),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"class MyClass {\n  prop = 1;\n}\n\nfunction Decorator(): PropertyDecorator {\n  return () => undefined;\n}\nclass MyDecoratedClass {\n  @Decorator() prop = 1;\n}\n\nconsole.log(MyClass.name, MyDecoratedClass.name);\n",
						),
					),
					(0, o.kt)("p", null, "depends on the class name."),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now has an option to preserve class name.\nSee ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc.rs/docs/configuring-swc/#jsc",
							},
							"the documentation for .swcrc",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "fix-for-switch-statements-in-loops-1415" },
						"Fix for switch statements in loops (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1415",
							},
							"#1415",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"When targeting ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es3"),
						" or ",
						(0, o.kt)("inlineCode", { parentName: "p" }, "es5"),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" broke some codes with switch statements in for loops like",
					),
					(0, o.kt)(
						"pre",
						null,
						(0, o.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export function test(items) {\n  const infoMap = new WeakMap();\n  for (let i = 0; i < items.length; i += 1) {\n    const item = items[i];\n    let info;\n    switch (item.type) {\n      case "branch1":\n        info = item.method1();\n        break;\n      case "branch2":\n        info = item.method2();\n        break;\n      case "branch3":\n        info = item.method3(\n          Object.fromEntries(\n            item.subItems.map((t) => [item.alias ?? t.name, getInfo(t)])\n          )\n        );\n        break;\n      default:\n        throw new Error("boom");\n    }\n    infoMap.set(item, info); // important\n  }\n\n  function getInfo(item) {\n    if (!infoMap.has(item)) {\n      throw new Error("no info yet");\n    }\n    return infoMap.get(item);\n  }\n}\n',
						),
					),
					(0, o.kt)("p", null, "It is now fixed."),
					(0, o.kt)("h2", { id: "new-features" }, "New features"),
					(0, o.kt)(
						"h3",
						{ id: "swcrc-option-to-enable-sourcemps-1309" },
						(0, o.kt)("inlineCode", { parentName: "h3" }, ".swcrc"),
						" option to enable sourcemps. (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1309",
							},
							"#1309",
						),
						")",
					),
					(0, o.kt)(
						"p",
						null,
						"Previously generating sourcemap required calling apis with proper option.\nBut now ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" has an option to enable sourcemap.\nSee ",
						(0, o.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc.rs/docs/configuring-swc/#sourcemaps",
							},
							"the documentation for .swcrc",
						),
						".",
					),
					(0, o.kt)(
						"h3",
						{ id: "babelpreset-modules-1439" },
						"@babel/preset-modules (",
						(0, o.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1439",
							},
							"#1439",
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
								href: "https://github.com/devongovett",
							},
							"@devongovett",
						),
						", ",
						(0, o.kt)(
							"a",
							{ parentName: "p", href: "https://swc.rs" },
							"swc",
						),
						" now has an option to enable bugfix transforms, just like ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"preset-modules",
						),
						" of babel.",
					),
					(0, o.kt)(
						"p",
						null,
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"bugfix/transform-async-arrows-in-class",
						),
						", ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"bugfix/transform-edge-default-parameters",
						),
						" and ",
						(0, o.kt)(
							"inlineCode",
							{ parentName: "p" },
							"bugfix/transform-tagged-template-caching",
						),
						" is added.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
