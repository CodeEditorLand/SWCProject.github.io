"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[8332],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => c, kt: () => m });
			var r = t(7294);
			function s(e, n, t) {
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
			function a(e, n) {
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
			function i(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? a(Object(t), !0).forEach(function (n) {
								s(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: a(Object(t)).forEach(function (n) {
									Object.defineProperty(
										e,
										n,
										Object.getOwnPropertyDescriptor(t, n),
									);
								});
				}
				return e;
			}
			function o(e, n) {
				if (null == e) return {};
				var t,
					r,
					s = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							s = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
						return s;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(t = a[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(s[t] = e[t]));
				}
				return s;
			}
			var l = r.createContext({}),
				p = function (e) {
					var n = r.useContext(l),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : i(i({}, n), e)),
						t
					);
				},
				c = function (e) {
					var n = p(e.components);
					return r.createElement(
						l.Provider,
						{ value: n },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return r.createElement(r.Fragment, {}, n);
					},
				},
				d = r.forwardRef(function (e, n) {
					var t = e.components,
						s = e.mdxType,
						a = e.originalType,
						l = e.parentName,
						c = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(t),
						m = s,
						h = d["".concat(l, ".").concat(m)] || d[m] || u[m] || a;
					return t
						? r.createElement(
								h,
								i(i({ ref: n }, c), {}, { components: t }),
							)
						: r.createElement(h, i({ ref: n }, c));
				});
			function m(e, n) {
				var t = arguments,
					s = n && n.mdxType;
				if ("string" == typeof e || s) {
					var a = t.length,
						i = new Array(a);
					i[0] = d;
					var o = {};
					for (var l in n) hasOwnProperty.call(n, l) && (o[l] = n[l]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : s),
						(i[1] = o);
					for (var p = 2; p < a; p++) i[p] = t[p];
					return r.createElement.apply(null, i);
				}
				return r.createElement.apply(null, t);
			}
			d.displayName = "MDXCreateElement";
		},
		7041: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => o,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => c,
					default: () => d,
				});
			var r = t(7462),
				s = t(3366),
				a = (t(7294), t(3905)),
				i = ["components"],
				o = {
					title: "Changelog: swc v1.2.35",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/10/04/swc-1.2.35",
					source: "@site/blog/2020-10-04-swc-1.2.35.md",
					title: "Changelog: swc v1.2.35",
					description: "Bugfixes",
					date: "2020-10-04T00:00:00.000Z",
					formattedDate: "October 4, 2020",
					tags: [],
					readingTime: 3.615,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.2.36",
						permalink: "/blog/2020/10/06/swc-1.2.36",
					},
					nextItem: {
						title: "ChangeLog: swc v1.2.33",
						permalink: "/blog/2020/09/24/swc-1.2.33",
					},
				},
				c = [
					{
						value: "Bugfixes",
						id: "bugfixes",
						children: [
							{
								value: "optional chaining (#1130)",
								id: "optional-chaining-1130",
								children: [],
							},
							{
								value: "computed typescript properties (#1122)",
								id: "computed-typescript-properties-1122",
								children: [],
							},
							{
								value: "temp var in nullish coalescing (#1123)",
								id: "temp-var-in-nullish-coalescing-1123",
								children: [],
							},
							{
								value: "renaming of private class properties (#1117)",
								id: "renaming-of-private-class-properties-1117",
								children: [],
							},
							{
								value: "bundler: too many exports (#1119)",
								id: "bundler-too-many-exports-1119",
								children: [],
							},
							{
								value: "bundler: export * (#1116)",
								id: "bundler-export--1116",
								children: [],
							},
							{
								value: "stack overflow of inliner (#1127)",
								id: "stack-overflow-of-inliner-1127",
								children: [],
							},
							{
								value: "bundler: import.meta support (#1115)",
								id: "bundler-importmeta-support-1115",
								children: [],
							},
							{
								value: "bundler: namespaced imports (#1109)",
								id: "bundler-namespaced-imports-1109",
								children: [],
							},
							{
								value: "bundler: namedspaced reexports (#1110)",
								id: "bundler-namedspaced-reexports-1110",
								children: [],
							},
							{
								value: "bundler: shorthand properties (#1111)",
								id: "bundler-shorthand-properties-1111",
								children: [],
							},
							{
								value: "bundler: top level await (#1112)",
								id: "bundler-top-level-await-1112",
								children: [],
							},
						],
					},
				],
				u = { toc: c };
			function d(e) {
				var n = e.components,
					t = (0, s.Z)(e, i);
				return (0, a.kt)(
					"wrapper",
					(0, r.Z)({}, u, t, { components: n, mdxType: "MDXLayout" }),
					(0, a.kt)("h2", { id: "bugfixes" }, "Bugfixes"),
					(0, a.kt)(
						"p",
						null,
						"This version includes lots of bugfixes.",
					),
					(0, a.kt)(
						"h3",
						{ id: "optional-chaining-1130" },
						"optional chaining (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1130",
							},
							"#1130",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Nested property access in optional chaining is now properly compiled.",
					),
					(0, a.kt)(
						"p",
						null,
						"The affected code looks like below. Notice that there's no ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "?"),
						" before ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "map"),
						".",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"let data;\nconst result = data\n  ?.filter((item) => Math.random() > 0.5)\n  .map((item) => JSON.stringify(item));\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "computed-typescript-properties-1122" },
						"computed typescript properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1122",
							},
							"#1122",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This is a regression caused by ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "v1.2.18"),
						". The issue is about computed class properties in typescript.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const identifier = "bar";\n\nclass Foo {\n  [identifier] = 5;\n}\n\nconsole.log(new Foo().bar);\n',
						),
					),
					(0, a.kt)("p", null, "The code above now works properly."),
					(0, a.kt)(
						"h3",
						{ id: "temp-var-in-nullish-coalescing-1123" },
						"temp var in nullish coalescing (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1123",
							},
							"#1123",
						),
						")",
					),
					(0, a.kt)("p", null, "Previously,"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'interface SuperSubmission {\n  [key: string]: any;\n}\n\nconst normalizedQuestionSet: any = {};\n\nconst submissions: SuperSubmission[] = (\n  normalizedQuestionSet.submissionIds ?? []\n).map(\n  (id, index): SuperSubmission => {\n    const submission = normalizedQuestionSet.submissions?.[id];\n\n    const submissionAnswers = (submission.answers ?? []).map(\n      (answerId) => normalizedQuestionSet.answers?.[answerId]\n    );\n\n    console.log(id, index);\n\n    return {\n      type: "super-submission",\n    };\n  }\n);\n\nconsole.log(submissions);\n',
						),
					),
					(0, a.kt)("p", null, "was miscompiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'"use strict";\nconst normalizedQuestionSet = {};\nconst submissions = ((_submissionIds = normalizedQuestionSet.submissionIds) !==\n  null && _submissionIds !== void 0\n  ? _submissionIds\n  : []\n).map((id, index) => {\n  var ref, ref1;\n  var _submissionIds;\n  const submission =\n    (ref = normalizedQuestionSet.submissions) === null || ref === void 0\n      ? void 0\n      : ref[id];\n  var _answers;\n  const submissionAnswers = ((_answers = submission.answers) !== null &&\n  _answers !== void 0\n    ? _answers\n    : []\n  ).map((answerId) =>\n    (ref1 = normalizedQuestionSet.answers) === null || ref1 === void 0\n      ? void 0\n      : ref1[answerId]\n  );\n  console.log(id, index);\n  return {\n    type: "super-submission",\n  };\n});\nconsole.log(submissions);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"which is wrong because ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"var _submissionIds;",
						),
						" should be declared at tbe top level. This is fixed by visiting children nodes (like block statement) with a new empty variable buffer.",
					),
					(0, a.kt)(
						"h3",
						{ id: "renaming-of-private-class-properties-1117" },
						"renaming of private class properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1117",
							},
							"#1117",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"At the time of implementing ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" and ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolver",
						),
						", which is the core of the swc, there was no support for private class properties. It resulted in this bug, where ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" pass renaming private properties. This is fixed by not visiting private identifiers.",
					),
					(0, a.kt)("p", null, "Affected code looks like below."),
					(0, a.kt)(
						"p",
						null,
						"Two private identifiers with same name declared in different class, but in same file. This bug is found by ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "http://github.com/kitsonk",
							},
							"@kitsonk",
						),
						" while integrating ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"swc_bundler",
						),
						" into deno.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							"export class G {\n  #g!: number[];\n  constructor(shared: boolean) {\n    if (shared) {\n      this.#g = g;\n    } else {\n      this.#g = [];\n    }\n  }\n}\n\nexport class H {\n  #g!: number[];\n  constructor(shared: boolean) {\n    if (shared) {\n      this.#g = g;\n    } else {\n      this.#g = [];\n    }\n  }\n}\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-too-many-exports-1119" },
						"bundler: too many exports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1119",
							},
							"#1119",
						),
						")",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export function a(...d: string[]): string {\n  return d.join(" ");\n}\n',
						),
					),
					(0, a.kt)("p", null, "resulted in"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const _i = (function () {\n  function a(...d) {\n    return d.join(" ");\n  }\n  return {\n    a,\n    d,\n  };\n})();\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"which is clearly wrong. This is fixed by collecting exported identifiers carefully.",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-export--1116" },
						"bundler: export ",
						"*",
						" (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1116",
							},
							"#1116",
						),
						")",
					),
					(0, a.kt)("p", null, "Code like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export * from "./a.ts";\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"was handled inproperly by ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "spack"),
						".",
					),
					(0, a.kt)(
						"h3",
						{ id: "stack-overflow-of-inliner-1127" },
						"stack overflow of inliner (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/pull/1127",
							},
							"#1127",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"This is fixed by migrating by working with pointers instead of passing structs around.",
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-importmeta-support-1115" },
						"bundler: import.meta support (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1115",
							},
							"#1115",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"As ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"deno bundle",
						),
						", which works with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "tsc"),
						" and in a progress of integrating the bundler of swc into it, supports ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"import.meta",
						),
						", I added support for them.",
					),
					(0, a.kt)(
						"p",
						null,
						"Currently two meta properties are supported.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"import.meta.main; // false for imported modules, and as-is for entries\n",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"import.meta.url; // The path of file. (Customizable for rust users)\n",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-namespaced-imports-1109" },
						"bundler: namespaced imports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1109",
							},
							"#1109",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"entry.ts",
						),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import * as a from "./a.ts";\n\nconsole.log(a);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "a.ts"),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export const a = "a";\n',
						),
					),
					(0, a.kt)("p", null, "is now bundled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'const a = (function () {\n  const a = "a";\n  return {\n    a,\n  };\n})();\nconsole.log(a);\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-namedspaced-reexports-1110" },
						"bundler: namedspaced reexports (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1110",
							},
							"#1110",
						),
						")",
					),
					(0, a.kt)("p", null, "Namespaced export statements like"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export * as c from "./c.ts";\n',
						),
					),
					(0, a.kt)("p", null, "is now properly handled."),
					(0, a.kt)(
						"h3",
						{ id: "bundler-shorthand-properties-1111" },
						"bundler: shorthand properties (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1111",
							},
							"#1111",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"Bundler had a bug related to shorthand properties. But it's now fixed, and",
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"entry.ts",
						),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { d } from "./d.ts";\n\nconsole.log(d);\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "d.ts"),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { a } from "./a.ts";\n\nexport const d = { a }; // This was problematic\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						(0, a.kt)("inlineCode", { parentName: "p" }, "a.ts"),
						":",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'export const a = "a";\n',
						),
					),
					(0, a.kt)("p", null, "is compiled as"),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'const a = "a";\nconst d = {\n  a: "a",\n};\nconsole.log(d);\n',
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "bundler-top-level-await-1112" },
						"bundler: top level await (",
						(0, a.kt)(
							"a",
							{
								parentName: "h3",
								href: "https://github.com/swc-project/swc/issues/1112",
							},
							"#1112",
						),
						")",
					),
					(0, a.kt)(
						"p",
						null,
						"As ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "deno"),
						" supports top level await, I added support for it to the bundler.",
					),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
