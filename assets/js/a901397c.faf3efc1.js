"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[2954],
	{
		3905: (e, t, n) => {
			n.d(t, { Zo: () => c, kt: () => u });
			var a = n(7294);
			function o(e, t, n) {
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
			function r(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t &&
						(a = a.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						n.push.apply(n, a);
				}
				return n;
			}
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? r(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: r(Object(n)).forEach(function (t) {
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
					a,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							a,
							o = {},
							r = Object.keys(e);
						for (a = 0; a < r.length; a++)
							(n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					for (a = 0; a < r.length; a++)
						(n = r[a]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var l = a.createContext({}),
				p = function (e) {
					var t = a.useContext(l),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						n
					);
				},
				c = function (e) {
					var t = p(e.components);
					return a.createElement(
						l.Provider,
						{ value: t },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return a.createElement(a.Fragment, {}, t);
					},
				},
				d = a.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						r = e.originalType,
						l = e.parentName,
						c = i(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						d = p(n),
						u = o,
						h = d["".concat(l, ".").concat(u)] || d[u] || m[u] || r;
					return n
						? a.createElement(
								h,
								s(s({ ref: t }, c), {}, { components: n }),
							)
						: a.createElement(h, s({ ref: t }, c));
				});
			function u(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var r = n.length,
						s = new Array(r);
					s[0] = d;
					var i = {};
					for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
					(i.originalType = e),
						(i.mdxType = "string" == typeof e ? e : o),
						(s[1] = i);
					for (var p = 2; p < r; p++) s[p] = n[p];
					return a.createElement.apply(null, s);
				}
				return a.createElement.apply(null, n);
			}
			d.displayName = "MDXCreateElement";
		},
		2533: (e, t, n) => {
			n.r(t),
				n.d(t, {
					frontMatter: () => i,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => c,
					default: () => d,
				});
			var a = n(7462),
				o = n(3366),
				r = (n(7294), n(3905)),
				s = ["components"],
				i = {
					title: "Why is swc fast?",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/02/16/why-is-swc-fast",
					source: "@site/blog/2020-02-16-why-is-swc-fast.md",
					title: "Why is swc fast?",
					description:
						"swc is fast. Very fast. It's 18x faster than babel on a single-core benchmark, and on a parallel benchmark, it's 68x faster than babel on a 4 core (8 HT) machine. Why? Just because it's written in rust? No. Its fundamental design differs from any other tool.",
					date: "2020-02-16T00:00:00.000Z",
					formattedDate: "February 16, 2020",
					tags: [],
					readingTime: 4.895,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.25",
						permalink: "/blog/2020/02/17/swc-1.1.25",
					},
					nextItem: {
						title: "Changelog: swc v1.1.21",
						permalink: "/blog/2020/02/13/swc-1.1.21",
					},
				},
				c = [
					{ value: "The language", id: "the-language", children: [] },
					{
						value: "Optimization hints",
						id: "optimization-hints",
						children: [],
					},
					{
						value: "Design",
						id: "design",
						children: [
							{
								value: "String caching",
								id: "string-caching",
								children: [],
							},
							{
								value: "Less scope analysis",
								id: "less-scope-analysis",
								children: [],
							},
							{
								value: "No use of graph data structures",
								id: "no-use-of-graph-data-structures",
								children: [],
							},
						],
					},
				],
				m = { toc: c };
			function d(e) {
				var t = e.components,
					n = (0, o.Z)(e, s);
				return (0, r.kt)(
					"wrapper",
					(0, a.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
					(0, r.kt)(
						"p",
						null,
						(0, r.kt)("inlineCode", { parentName: "p" }, "swc"),
						" is fast. Very fast. It's 18x faster than babel on a single-core benchmark, and on a parallel benchmark, it's 68x faster than babel on a 4 core (8 HT) machine. Why? Just because it's written in rust? No. Its fundamental design differs from any other tool.",
					),
					(0, r.kt)("h2", { id: "the-language" }, "The language"),
					(0, r.kt)(
						"blockquote",
						null,
						(0, r.kt)(
							"p",
							{ parentName: "blockquote" },
							"Just rewriting something in another language does not make it faster.",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"This is ",
						(0, r.kt)("em", { parentName: "p" }, "partially"),
						" correct. Rewriting something in a language with an optimizing compiler can make difference.\nSome compilers including rustc, which uses llvm as a backend, are good at optimizing codes.",
					),
					(0, r.kt)("hr", null),
					(0, r.kt)(
						"p",
						null,
						"Edit: makes -> can make, created an ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"optimization hints",
						),
						" section,",
					),
					(0, r.kt)("hr", null),
					(0, r.kt)(
						"h2",
						{ id: "optimization-hints" },
						"Optimization hints",
					),
					(0, r.kt)(
						"p",
						null,
						"Sometimes, rustc cannot deduce that it's dead code even if it is dead. In swc, we give enough hint if it's the case.",
					),
					(0, r.kt)(
						"p",
						null,
						"For example, not all passes touch all of the ast. Many passes return the given ast node as-is. Especially, most passes have nothing to do with types. So those passes return the typings as-is.\nSo, it would be cool if those handlers are optimized out.\n",
						(0, r.kt)("inlineCode", { parentName: "p" }, "rustc"),
						" failed to optimize it out by default because it changes semantic, but we can help it.",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"macro_rules! noop_fold_type {\n    ($F:ty, $N:tt) => {\n        impl Fold<swc_ecma_ast::$N> for $F {\n            #[inline]\n            fn fold(&mut self, node: swc_ecma_ast::$N) -> swc_ecma_ast::$N {\n                node\n            }\n        }\n    };\n    ($F:ty) => {\n        noop_fold_type!($F, Accessibility);\n        // ...\n        // Simillar code for each ast types\n    };\n}\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"See it on ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/blob/f17e49934c456022f5d6bfa23f7ad6af5ea2e338/ecmascript/transforms/src/macros.rs",
							},
							"github",
						),
						".",
					),
					(0, r.kt)(
						"p",
						null,
						"Now, it's optimized out. However, what matters is allocations. ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Fold<Vec<T>>",
						),
						" is implemented as below.",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"impl<T, F> FoldWith<F> for Vec<T>\nwhere\n    F: Fold<T>,\n{\n    fn fold_children(self, f: &mut F) -> Self {\n        self.move_map(|it| f.fold(it))\n    }\n}\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"move_map()",
						),
						" is a hack to prevent reallocation.\nWhen ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "Fold<T>"),
						" is an identity function, ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Fold<Vec<T>>",
						),
						" is cleary no-op.\nLet's see ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://godbolt.org/z/kJE4Rq",
							},
							"the generated assembly for the code below",
						),
						". The link contains the actual implementation of ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"move_map",
						),
						".",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"pub fn ret(v: Vec<i32>) -> Vec<i32> {\n    v\n}\n\npub fn move_map(v:Vec<i32>) -> Vec<i32> {\n    v.move_map(|v| v)\n}\n",
						),
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-asm" },
							"example::ret:\n        mov     rax, rdi\n        mov     rcx, qword ptr [rsi + 16]\n        mov     qword ptr [rdi + 16], rcx\n        movups  xmm0, xmmword ptr [rsi]\n        movups  xmmword ptr [rdi], xmm0\n        ret\n\nexample::move_map:\n        sub     rsp, 24\n        mov     rax, rdi\n        movups  xmm0, xmmword ptr [rsi]\n        movaps  xmmword ptr [rsp], xmm0\n        mov     rcx, qword ptr [rsi + 16]\n        movups  xmmword ptr [rdi], xmm0\n        mov     qword ptr [rdi + 16], rcx\n        add     rsp, 24\n        ret\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"Great. Although it's a bit longer than no-op, no allocation occurs and thus it's fast enough.\nThe same goes for the ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "Box<T>"),
						". See ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://godbolt.org/z/5fDXQK",
							},
							"https://godbolt.org/z/5fDXQK",
						),
						" if you want.",
					),
					(0, r.kt)("h2", { id: "design" }, "Design"),
					(0, r.kt)("h3", { id: "string-caching" }, "String caching"),
					(0, r.kt)(
						"p",
						null,
						"Identifiers are inherently used multiple times. ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "swc"),
						" utilizes ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/servo/string-cache",
							},
							"string_cache",
						),
						" from the servo project to cache strings. Common identifiers like ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "Object"),
						" is stored as a constant.",
					),
					(0, r.kt)(
						"h3",
						{ id: "less-scope-analysis" },
						"Less scope analysis",
					),
					(0, r.kt)(
						"p",
						null,
						"Scope analysis is done only 2 ~ 4 times per file. One at the start of processing, one at the end of processing, one to strip type-only imports (typescript only), and the last one to transcompile it into the other type of modules. (cjs, amd, umd)",
					),
					(0, r.kt)(
						"p",
						null,
						"I'll explain how it works, and why it's fast.\nFirst, before applying any other transformations, ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolver",
						),
						" pass colors the identifiers.",
					),
					(0, r.kt)(
						"p",
						null,
						"Note that the symbol is not changed. ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "___"),
						" denotes the context number and it's not part of the symbol.",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const foo = 1;\nuse(foo);\n{\n  const foo = 2;\n  use(foo);\n}\n",
						),
					),
					(0, r.kt)("p", null, "becomes"),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const foo___1 = 1;\nuse(foo___1);\n\n{\n  const foo___2 = 2;\n  use(foo___2);\n}\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"Then, other passes insert identifiers if required. There's a helper macro to create a ",
						(0, r.kt)("strong", { parentName: "p" }, "private"),
						" ident.\nLet's suppose that a pass appended a private identifier named ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "foo"),
						" to the top level.",
					),
					(0, r.kt)("p", null, "It's now"),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const foo = 1;\nuse(foo);\n{\n  const foo = 2;\n  use(foo);\n}\nconst foo = 3;\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"and with expanded context number, it's",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const foo___1 = 1;\nuse(foo___1);\n{\n  const foo___2 = 2;\n  use(foo__2);\n}\nconst foo___3 = 3;\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"The last pass, named hygiene, removes context numbers and changes symbol to the appropriate one. It becomes",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							"const foo = 1;\nuse(foo);\n{\n  const foo1 = 2;\n  use(foo1);\n}\nconst foo2 = 3;\n",
						),
					),
					(0, r.kt)(
						"p",
						null,
						"It means that passes between ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"resolver",
						),
						" and ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" can inject identifiers as they want without any heavy operation.",
					),
					(0, r.kt)(
						"p",
						null,
						"For comparison, babel maintains the scope while transcompiling and ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/babel/babel/blob/31b05060409107caa5737f90bdf79fc3538c0a2d/packages/babel-plugin-transform-modules-commonjs/src/index.js#L148-L152",
							},
							"uses it",
						),
						" like ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"scope.rename('require')",
						),
						" to ensure that the name does not conflict.\nHowever, given the fact that ",
						(0, r.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/babel/babel/blob/31b05060409107caa5737f90bdf79fc3538c0a2d/packages/babel-traverse/src/scope/index.js#L370-L378",
							},
							"babel does renaming directly instead of queueing",
						),
						", api like this means that all identifiers in the file are visited on each call. For common js module, babel does like",
					),
					(0, r.kt)(
						"pre",
						null,
						(0, r.kt)(
							"code",
							{ parentName: "pre", className: "language-js" },
							'path.scope.rename("exports");\npath.scope.rename("module");\npath.scope.rename("require");\npath.scope.rename("__filename");\npath.scope.rename("__dirname");\n',
						),
					),
					(0, r.kt)("p", null, "and it results in 5 scope analysis."),
					(0, r.kt)(
						"p",
						null,
						"The basic idea of ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "hygiene"),
						" is taken from the macro system of rustc. Note that no compiler works in this way and I call this approach ",
						(0, r.kt)(
							"em",
							{ parentName: "p" },
							"identifier hygiene",
						),
						". (Please correct me if I'm wrong.)",
					),
					(0, r.kt)(
						"p",
						null,
						"Note that this will also help writing a fast bundler.\nWhile bundling modules, only a single invocation of the resolver pass is enough to distinguish identifiers from multiple modules.\nHygiene pass is invoked only once at the end.",
					),
					(0, r.kt)("hr", null),
					(0, r.kt)("p", null, "Edit: Added how babel works"),
					(0, r.kt)("hr", null),
					(0, r.kt)(
						"h3",
						{ id: "no-use-of-graph-data-structures" },
						"No use of graph data structures",
					),
					(0, r.kt)(
						"p",
						null,
						(0, r.kt)("inlineCode", { parentName: "p" }, "swc"),
						" does not use graph structures for some reason.\nThe most important one is the fact that rust is not a language with a garbage collector.\nAfter parsing, we have ast node, which consists of some vectors.",
					),
					(0, r.kt)(
						"p",
						null,
						"To use a graph data structures like ",
						(0, r.kt)(
							"inlineCode",
							{ parentName: "p" },
							"petgraph::DiGraph",
						),
						", we need to destruct a vector and create a graph of nodes.\nAlso, as js code generator takes ast node, we have to reconstruct the nodes from graph structures.\nThis is an obvious overhead, and I wanted to avoid it.",
					),
					(0, r.kt)(
						"p",
						null,
						"Some graph traversal are possible with vectors, so I decided to go without graph data structures.",
					),
					(0, r.kt)("hr", null),
					(0, r.kt)(
						"p",
						null,
						"Edit: ",
						(0, r.kt)("inlineCode", { parentName: "p" }, "swc"),
						" uses dfs and bfs, so we can't say it does not do graph traversal",
					),
					(0, r.kt)("p", null, "--"),
				);
			}
			d.isMDXComponent = !0;
		},
	},
]);
