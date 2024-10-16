"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4514],
	{
		3905: (e, n, t) => {
			t.d(n, { Zo: () => u, kt: () => d });
			var a = t(7294);
			function r(e, n, t) {
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
			function i(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					n &&
						(a = a.filter(function (n) {
							return Object.getOwnPropertyDescriptor(e, n)
								.enumerable;
						})),
						t.push.apply(t, a);
				}
				return t;
			}
			function s(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2
						? i(Object(t), !0).forEach(function (n) {
								r(e, n, t[n]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(t),
								)
							: i(Object(t)).forEach(function (n) {
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
					a,
					r = (function (e, n) {
						if (null == e) return {};
						var t,
							a,
							r = {},
							i = Object.keys(e);
						for (a = 0; a < i.length; a++)
							(t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
						return r;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (a = 0; a < i.length; a++)
						(t = i[a]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									t,
								) &&
									(r[t] = e[t]));
				}
				return r;
			}
			var l = a.createContext({}),
				p = function (e) {
					var n = a.useContext(l),
						t = n;
					return (
						e &&
							(t =
								"function" == typeof e ? e(n) : s(s({}, n), e)),
						t
					);
				},
				u = function (e) {
					var n = p(e.components);
					return a.createElement(
						l.Provider,
						{ value: n },
						e.children,
					);
				},
				m = {
					inlineCode: "code",
					wrapper: function (e) {
						var n = e.children;
						return a.createElement(a.Fragment, {}, n);
					},
				},
				c = a.forwardRef(function (e, n) {
					var t = e.components,
						r = e.mdxType,
						i = e.originalType,
						l = e.parentName,
						u = o(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						c = p(t),
						d = r,
						k = c["".concat(l, ".").concat(d)] || c[d] || m[d] || i;
					return t
						? a.createElement(
								k,
								s(s({ ref: n }, u), {}, { components: t }),
							)
						: a.createElement(k, s({ ref: n }, u));
				});
			function d(e, n) {
				var t = arguments,
					r = n && n.mdxType;
				if ("string" == typeof e || r) {
					var i = t.length,
						s = new Array(i);
					s[0] = c;
					var o = {};
					for (var l in n) hasOwnProperty.call(n, l) && (o[l] = n[l]);
					(o.originalType = e),
						(o.mdxType = "string" == typeof e ? e : r),
						(s[1] = o);
					for (var p = 2; p < i; p++) s[p] = t[p];
					return a.createElement.apply(null, s);
				}
				return a.createElement.apply(null, t);
			}
			c.displayName = "MDXCreateElement";
		},
		9135: (e, n, t) => {
			t.r(n),
				t.d(n, {
					frontMatter: () => o,
					contentTitle: () => l,
					metadata: () => p,
					toc: () => u,
					default: () => c,
				});
			var a = t(7462),
				r = t(3366),
				i = (t(7294), t(3905)),
				s = ["components"],
				o = {
					title: "Introducing pmutil",
					author: "DongYoon Kang",
					authorURL: "http://github.com/kdy1",
					authorFBID: 0x5af8dbecdbce,
				},
				l = void 0,
				p = {
					permalink: "/blog/2020/01/04/pmutil",
					source: "@site/blog/2020-01-04-pmutil.md",
					title: "Introducing pmutil",
					description:
						"swc uses proc macros extensively. I use a procedural macro if possible to reduce boilerplates and to avoid rewriting boilerplates when something is changed. Behind the scene, there's a hero crate called pmutil. It provides useful stuffs for proc macros.",
					date: "2020-01-04T00:00:00.000Z",
					formattedDate: "January 4, 2020",
					tags: [],
					readingTime: 9.21,
					truncated: !1,
					prevItem: {
						title: "Changelog: swc v1.1.12",
						permalink: "/blog/2020/01/08/swc-1.1.12",
					},
					nextItem: {
						title: "Changelog: swc v1.1.11",
						permalink: "/blog/2020/01/02/swc-1.1.11",
					},
				},
				u = [
					{
						value: "Features",
						id: "features",
						children: [
							{
								value: "smart_quote!",
								id: "smart_quote",
								children: [],
							},
							{
								value: "Naming convention",
								id: "naming-convention",
								children: [],
							},
							{
								value: "Quote.parse() and error reporting",
								id: "quoteparse-and-error-reporting",
								children: [],
							},
							{
								value: "ToTokensExt",
								id: "totokensext",
								children: [],
							},
						],
					},
					{
						value: "Macros built with pmutil",
						id: "macros-built-with-pmutil",
						children: [
							{
								value: "FromVariant (swc)",
								id: "fromvariant-swc",
								children: [],
							},
							{
								value: "ast_node (swc)",
								id: "ast_node-swc",
								children: [],
							},
							{
								value: "Fold, Visit (swc)",
								id: "fold-visit-swc",
								children: [],
							},
							{
								value: "Spanned (swc)",
								id: "spanned-swc",
								children: [],
							},
							{
								value: "enum_kind (swc)",
								id: "enum_kind-swc",
								children: [],
							},
							{
								value: "string_enum (swc)",
								id: "string_enum-swc",
								children: [],
							},
							{
								value: "swc_ecma_parser_macros (swc)",
								id: "swc_ecma_parser_macros-swc",
								children: [],
							},
							{
								value: "swc_ecma_codegen_macros (swc)",
								id: "swc_ecma_codegen_macros-swc",
								children: [],
							},
							{ value: "is-macro", id: "is-macro", children: [] },
							{ value: "st-map", id: "st-map", children: [] },
						],
					},
				],
				m = { toc: u };
			function c(e) {
				var n = e.components,
					t = (0, r.Z)(e, s);
				return (0, i.kt)(
					"wrapper",
					(0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)("inlineCode", { parentName: "p" }, "swc"),
						" uses proc macros extensively. I use a procedural macro if possible to reduce boilerplates and to avoid rewriting boilerplates when something is changed. Behind the scene, there's a hero crate called ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kdy1/rust-pmutil",
							},
							"pmutil",
						),
						". It provides useful stuffs for proc macros.",
					),
					(0, i.kt)("h2", { id: "features" }, "Features"),
					(0, i.kt)("h3", { id: "smart_quote" }, "smart_quote!"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://docs.rs/pmutil/0.5.2/pmutil/macro.smart_quote.html",
								},
								"doc",
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"It's a rustfmt-friendly quasi quotter. It exploits the fact that ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "rustfmt"),
						" can format function-call-like macros.",
					),
					(0, i.kt)(
						"p",
						null,
						"It takes two arguments. The first argument is to list variables, and should be wrapped with ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Vars { }",
						),
						". You can think this as constructing a struct named ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Vars"),
						". It's really the same, as shorthand notation is supported. It means, you can pass",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"// type is not required in real code\nlet i: Ident = {\n    // ..\n};\nlet v = {\n    // ..\n};\nsmart_quote!(Vars {\n    i,\n    TypeName: &v,\n}, {\n    // ignore second argument at now\n});\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Currently, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Vars{}"),
						" is required even if no variable is passed in. This restriction may be removed in the future.",
					),
					(0, i.kt)(
						"p",
						null,
						"The second argument is a template, wrapped with a group (",
						(0, i.kt)("inlineCode", { parentName: "p" }, "()"),
						", ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "[]"),
						", ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "{}"),
						"). In most cases, wrapping with ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "{"),
						" and ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "}"),
						" is best.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"smart_quote!(Vars {\n    i,\n    mtd_name: &method,\n    TypeName: &input.ident,\n}, {\n    impl TypeName {\n        pub const fn mtd_name(&self) -> usize{\n            i\n        }\n    }\n})\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"where the method is ident named ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "len"),
						", i is an arbitrary value (we use ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "10"),
						" at here) and TypeName is the name of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"DeriveInput",
						),
						" (we use ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Enum"),
						" at here), expands to",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"impl Enum {\n    pub const fn len(&self) -> usize {\n        10\n    }\n}\n",
						),
					),
					(0, i.kt)("p", null, "As rustfmt is happy with"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"function-call-like macro invokation",
						),
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"a block containing multiple items",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"you can do something like without breaking rustfmt.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"smart_quote!(Vars {\n    is_body,\n    mtd_name: &method,\n    TypeName: &input.ident,\n}, {\n    impl TypeName {\n        pub const fn mtd_name(&self) -> usize {\n            i\n        }\n    }\n\n    impl TypeName {\n        pub fn is(&self) -> bool {\n            is_body\n        }\n    }\n})\n",
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "naming-convention" },
						"Naming convention",
					),
					(0, i.kt)(
						"p",
						null,
						"I recommend to follow the naming convention of template argument. It means, identifier of a type should be passed in PascalCase although it is passed as a field initialization.",
					),
					(0, i.kt)(
						"h3",
						{ id: "quoteparse-and-error-reporting" },
						"Quote.parse() and error reporting",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://docs.rs/pmutil/0.5.2/pmutil/struct.Quote.html#method.parse",
								},
								"doc",
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"You might think quasi quoting is enough and parsing quoted tokens to ast type is just waisting compile time.\nIt's true if your project is small. But debugging proc macro is hard. I made 10+ proc macros and you should trust me. It's really hard.",
					),
					(0, i.kt)(
						"p",
						null,
						"Let's start with a simple wrong code.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"use syn::Expr;\n\nlet expr: Expr = Quote::new(def_site::<Span>())\n    .quote_with(smart_quote!(\n        Vars {\n        },\n        {\n            impl Type {\n\n            }\n        }\n    ))\n    .parse();\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"As you generated a wrong token (impl block is not an expression), ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Quote.parse()",
						),
						" will panic, reports the line of ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"smart_quote!",
						),
						" invocations and tell you to rerun after setting an environment variable named ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"DBG_DUMP",
						),
						" to 1. When you run with it, ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"Quote.parse()",
						),
						" will print the tokens you quoted.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre" },
							"error: custom attribute panicked\n --\x3e ecmascript/codegen/src/decl.rs:7:5\n  |\n7 |     #[emitter]\n  |     ^^^^^^^^^^\n  |\n  = help: message: Quote::parse() failed.\n                          Note: quasi quotting was invoked from:\n                 ecmascript/codegen/macros/src/lib.rs:54:25\n\n          Error from syn: expected expression\n              >>>>>\n                  To get code failed to parse,\n           please set environment variable `DBG_DUMP` and run in again\n              <<<<<\n\nerror: aborting due to previous error\n\nerror: could not compile `swc_ecma_codegen`.\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Yes, I broke code to show the message. With ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"DBG_DUMP=1",
						),
						",",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre" },
							"error: custom attribute panicked\n --\x3e ecmascript/codegen/src/decl.rs:7:5\n  |\n7 |     #[emitter]\n  |     ^^^^^^^^^^\n  |\n  = help: message: Quote::parse() failed.\n                          Note: quasi quotting was invoked from:\n                 ecmascript/codegen/macros/src/lib.rs:54:25\n\n          Error from syn: expected expression\n              >>>>>\n                  impl Type { }\n              <<<<<\n\nerror: aborting due to previous error\n\nerror: could not compile `swc_ecma_codegen`.\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"You can see the code, which is clearly not an expression, and fix it.",
					),
					(0, i.kt)("h3", { id: "totokensext" }, "ToTokensExt"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://docs.rs/pmutil/0.5.2/pmutil/trait.ToTokensExt.html",
								},
								"doc",
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"If you have an experience of writing a proc macro, you may know ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"proc_macro::TokenStream",
						),
						" and ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"proc_macro2::TokenStream",
						),
						" interop badly, as name is equal to each other. ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"ToTokensExt",
						),
						" helps you.",
					),
					(0, i.kt)(
						"p",
						null,
						"It provides a ",
						(0, i.kt)("inlineCode", { parentName: "p" }, ".dump()"),
						" method, which returns ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"proc_macro2::TokenStream",
						),
						" without bringing the name into scope.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'// more imports\nuse proc_macro::TokenStream;\n\n#[proc_macro_derive(Is, attributes(is))]\npub fn is(input: TokenStream) -> TokenStream {\n    let input: DeriveInput = syn::parse(input).expect("failed to parse derive input");\n    let generics: Generics = input.generics.clone();\n\n    let items = match input.data {\n        Data::Enum(e) => expand(e),\n        _ => panic!("`Is` can be applied only on enums"),\n    };\n\n    ItemImpl {\n        attrs: vec![],\n        defaultness: None,\n        unsafety: None,\n        impl_token: Default::default(),\n        generics: Default::default(),\n        trait_: None,\n        self_ty: Box::new(Type::Path(TypePath {\n            qself: None,\n            path: Path::from(input.ident),\n        })),\n        brace_token: Default::default(),\n        items,\n    }\n    .with_generics(generics)\n    .dump()\n    .into()\n}\n\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"The method is also useful for debugging as ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"proc_macro2::TokenStream",
						),
						" implements Display while ast types from syn do not implement it.",
					),
					(0, i.kt)(
						"h2",
						{ id: "macros-built-with-pmutil" },
						"Macros built with pmutil",
					),
					(0, i.kt)(
						"p",
						null,
						"Lots of macros are built over ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/kdy1/rust-pmutil",
							},
							"pmutil",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"If you want a macro below to be a standalone crate, please ping me on slack (",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://swc-slackin.herokuapp.com/",
							},
							"slackin for swc",
						),
						") or ",
						(0, i.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/swc/issues/new",
							},
							"file an issue at github",
						),
						".",
					),
					(0, i.kt)(
						"p",
						null,
						"(This is one of the reasons why I'm writing this section)",
					),
					(0, i.kt)(
						"h3",
						{ id: "fromvariant-swc" },
						"FromVariant (swc)",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/ast_node/derive.FromVariant.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[derive(FromVariant)]",
								),
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"#[derive(Debug, Clone, FromVariant)]\npub enum Expr {\n    Lit(Lit),\n    Ident(Ident),\n}\n\n// Generated impls:\nimpl From<Lit> for Expr {}\nimpl From<Ident> for Expr {}\n",
						),
					),
					(0, i.kt)("p", null, "It uses pmutil like"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"// In real code, ItemImpl is inferred\nlet from_impl: ItemImpl = Quote::new_call_site()\n    .quote_with(smart_quote!(\n        Vars {\n            VariantType: field.ty,\n            Variant: variant_name,\n            Type: &ident,\n        },\n        {\n            impl From<VariantType> for Type {\n                fn from(v: VariantType) -> Self {\n                    Type::Variant(v)\n                }\n            }\n        }\n    ))\n    .parse();\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"where ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"VariantType",
						),
						" is replaced with the type of the only field of the variant, ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Variant"),
						" is replaced with the name of the variant, and Type is replaced with the name of the enum itself.",
					),
					(0, i.kt)("h3", { id: "ast_node-swc" }, "ast_node (swc)"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/ast_node/attr.ast_node.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[ast_node]",
								),
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Alias for ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"#[derive(Spanned, Fold, Clone, Debug, PartialEq)]",
						),
						" for a struct and ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"#[derive(Spanned, Fold, Clone, Debug, PartialEq, FromVariant)]",
						),
						" for an enum.",
					),
					(0, i.kt)(
						"h3",
						{ id: "fold-visit-swc" },
						"Fold, Visit (swc)",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/ast_node/derive.Fold.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[derive(Fold)]",
								),
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"#[derive(Fold)]\npub struct Ident {\n    pub span: Span,\n    pub sym: String,\n}\n\n#[derive(Fold)]\npub struct Lit {\n    pub span: Span,\n    pub value: String,\n}\n\n#[derive(Fold)]\npub enum Expr {\n    Ident(ident),\n    Lit(Str)\n}\n\n\n\n// Generated impls:\nimpl ::swc_common::FoldWith for Ident {\n    // fn fold_children()\n}\nimpl ::swc_common::VisitWith for Ident {\n    // fn visit_children()\n}\n\nimpl ::swc_common::FoldWith for Lit {\n    // fn fold_children()\n}\nimpl ::swc_common::VisitWith for Lit {\n    // fn visit_children()\n}\n\nimpl ::swc_common::FoldWith for Expr {\n    // fn fold_children()\n}\nimpl ::swc_common::VisitWith for Expr {\n    // fn visit_children()\n}\n\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"With specialization, which requires nightly, it becomes an automagical weapon.",
					),
					(0, i.kt)(
						"p",
						null,
						"You can collect all identifiers in ast node with 20 lines of code however it is stored (unless you are using ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"#[fold(ignore)]",
						),
						").",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"struct IdentCollector {\n    ids: Vec<Ident>\n}\n\nimpl Visit<Ident> for IdentCollector {\n    fn visit(&mut self, i: &Ident) {\n        self.ids.push(i.clone());\n    }\n}\n\npub fn find_ids<T: VisitWith<IdentCollector>>(node: &T) -> Vec<Ident> {\n    let mut v = IdentCollector { ids: vec![] };\n    node.visit_with(&mut v);\n    v.ids\n}\n\n\nassert_eq!(find_ids(box vec![Expr::Ident(i1), Expr::Lit(lit), Expr::Ident(i2)]) , vec![i1, i2]);\n",
						),
					),
					(0, i.kt)("h3", { id: "spanned-swc" }, "Spanned (swc)"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/ast_node/derive.Spanned.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[derive(Spanned)]",
								),
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"#[derive(Spanned)]\npub struct Ident {\n    pub span: Span,\n    pub symbol: String,\n}\n\n#[derive(Spanned)]\npub struct Lit {\n    pub span: Span,\n    pub value: String,\n}\n\n#[derive(Spanned)]\npub enum Expr {\n    Lit(Lit),\n    Ident(Ident)\n}\n\n// Generated impls:\nimpl ::swc_common::Spannned for Ident {}\nimpl ::swc_common::Spannned for Lit {}\nimpl ::swc_common::Spannned for Expr {}\n",
						),
					),
					(0, i.kt)("h3", { id: "enum_kind-swc" }, "enum_kind (swc)"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/enum_kind/derive.Kind.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[derive(Kind)]",
								),
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'#[macro_use]\nextern crate enum_kind;\n\n/// You can split attributes if you want.\n#[derive(Kind)]\n#[kind(functions(is_a = "bool", is_b = "bool"))]\n#[kind(functions(is_a_or_b = "bool", num = "u8"))]\npub enum E {\n    #[kind(is_a, is_a_or_b, num = "1")]\n    A,\n    /// You can split attributes if you want.\n    #[kind(is_b)]\n    #[kind(is_a_or_b)]\n    #[kind(num = "2")]\n    B(u8),\n    /// Default value of bool is false if not specified and true if specified.\n    ///\n    /// Both struct like variant and tuple like variant are supported.\n    #[kind(num = "3")]\n    C {},\n}\n\nassert!(E::A.is_a() && E::A.is_a_or_b() && !E::A.is_b());\nassert_eq!(E::A.num(), 1);\n\nassert!(!E::B(0).is_a() && E::B(0).is_a_or_b() && E::B(0).is_b());\nassert_eq!(E::B(0).num(), 2);\n\nassert!(!E::C {}.is_a() && !E::C {}.is_a_or_b() && !E::C {}.is_b());\nassert_eq!(E::C {}.num(), 3);\n',
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "string_enum-swc" },
						"string_enum (swc)",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/string_enum/derive.StringEnum.html",
								},
								"#[derive(StringEnum)]",
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'#[derive(StringEnum)]\npub enum Tokens {\n    /// `a`\n    A,\n    /// `bar`\n    B,\n}\n\n// Generated:\n//\n// pub fn as_str(&self) -> &\'static str\n// impl serde::Serilaize\n// impl serde::Deserilaize\n// impl FromStr\n// impl Debug\n// impl Display\n\nassert_eq!(Tokens::A.as_str(), "a");\nassert_eq!(Tokens::B.as_str(), "bar");\n\nassert_eq!(Tokens::A.to_string(), "a");\nassert_eq!(format!("{:?}", Tokens::A), format!("{:?}", "a"));\n',
						),
					),
					(0, i.kt)(
						"h3",
						{ id: "swc_ecma_parser_macros-swc" },
						"swc_ecma_parser_macros (swc)",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/swc_ecma_parser_macros/attr.parser.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[parser]",
								),
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"I'll show you the code and then tell how it works.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"#[parser]\nimpl<'a, I: Tokens> Parser<'a, I> {\n    fn parse_yield_expr(&mut self) -> PResult<'a, Box<Expr>> {\n        let start = cur_pos!();\n\n        assert_and_bump!(\"yield\");\n        debug_assert!(self.ctx().in_generator);\n\n        // Spec says\n        // YieldExpression cannot be used within the FormalParameters of a generator\n        // function because any expressions that are part of FormalParameters are\n        // evaluated before the resulting generator object is in a resumable state.\n        if self.ctx().in_parameters {\n            syntax_error!(self.input.prev_span(), SyntaxError::YieldParamInGen)\n        }\n\n        if is!(';') || (!is!('*') && !cur!(false).map(Token::starts_expr).unwrap_or(true)) {\n            Ok(Box::new(Expr::Yield(YieldExpr {\n                span: span!(start),\n                arg: None,\n                delegate: false,\n            })))\n        } else {\n            let has_star = eat!('*');\n            let arg = self.parse_assignment_expr()?;\n\n            Ok(Box::new(Expr::Yield(YieldExpr {\n                span: span!(start),\n                arg: Some(arg),\n                delegate: has_star,\n            })))\n        }\n    }\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Did you get it? As ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Input"),
						" is stored in ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Parser"),
						", you should pass an instance of ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Parser"),
						" into macro, so code to consume a token should be",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'expect!(self, "yield");\n',
						),
					),
					(0, i.kt)(
						"p",
						null,
						"But ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"#[parser]",
						),
						" injects self to the code automatically. It knows the list of macros that accept ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Parser"),
						" as a first argument and inject self into the macro call.",
					),
					(0, i.kt)(
						"h3",
						{ id: "swc_ecma_codegen_macros-swc" },
						"swc_ecma_codegen_macros (swc)",
					),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"doc: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://swc-project.github.io/rustdoc/swc_ecma_codegen_macros/attr.emitter.html",
								},
								(0, i.kt)(
									"inlineCode",
									{ parentName: "a" },
									"#[emitter]",
								),
							),
						),
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"impl Emitter {\n    #[emitter]\n    pub fn emit_module(&mut self, m: &Module) -> Result {\n        // ..\n    }\n}\n",
						),
					),
					(0, i.kt)("p", null, "becomes"),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"impl Emitter {\n    pub fn emit_module(&mut self, m: &Module) -> Result {\n        // ..\n    }\n}\n\nimpl Node for Module {\n    fn emit_with(&self, emitter: &mut Emitter) -> Result {\n        emitter.emit_module(self)\n    }\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"Thus ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "emit!"),
						" works for any emittable types. ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "emit!"),
						" is defined as",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							"macro_rules! emit {\n    ($emitter:expr, $e:expr) => {{\n        crate::Node::emit_with(&$e, $emitter)?;\n    }};\n}\n",
						),
					),
					(0, i.kt)(
						"p",
						null,
						"As the macro creates an impl block from a method, it reduced the amount of code drastically. (Writing impl Node for T every time is cumbersome.)",
					),
					(0, i.kt)("h3", { id: "is-macro" }, "is-macro"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"Repository: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/kdy1/is-macro",
								},
								"https://github.com/kdy1/is-macro",
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							"is-macro",
						),
						" is a proc macro to generate methods for enum to allow using it like ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Option"),
						" / ",
						(0, i.kt)("inlineCode", { parentName: "p" }, "Result"),
						".",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'use is_macro::Is;\n#[derive(Debug, Is)]\npub enum Enum<T> {\n    A,\n    B(T),\n    C(Option<T>),\n}\n\n// Generated methods:\n//\n// is_a(&self), is_b(&self), is_c(&self)\n// b(self) -> Option<T>, c(self) -> Option<Option<T>>\n// expect_b(self) -> T, expect_c(self) -> Option<T>\n//\n\n// Rust\'s type inference cannot handle this.\nassert!(Enum::<()>::A.is_a());\n\nassert_eq!(Enum::B(String::from("foo")).b(), Some(String::from("foo")));\n\nassert_eq!(Enum::B(String::from("foo")).expect_b(), String::from("foo"));\n',
						),
					),
					(0, i.kt)("h3", { id: "st-map" }, "st-map"),
					(0, i.kt)(
						"ul",
						null,
						(0, i.kt)(
							"li",
							{ parentName: "ul" },
							"Repository: ",
							(0, i.kt)(
								"a",
								{
									parentName: "li",
									href: "https://github.com/kdy1/rust-static-map",
								},
								"https://github.com/kdy1/rust-static-map",
							),
						),
					),
					(0, i.kt)(
						"p",
						null,
						"This macro adds ",
						(0, i.kt)("inlineCode", { parentName: "p" }, ".iter()"),
						", ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							".iter_mut()",
						),
						", ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							".into_iter()",
						),
						", ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							".map(|k, v| {})",
						),
						", ",
						(0, i.kt)(
							"inlineCode",
							{ parentName: "p" },
							".map_values(|v| {})",
						),
						" to a map-like structs.\nMap-like means that all fields have the same type.",
					),
					(0, i.kt)(
						"pre",
						null,
						(0, i.kt)(
							"code",
							{ parentName: "pre", className: "language-rust" },
							'#[derive(Debug, PartialEq, Default, StaticMap)]\nstruct BrowserData<T: Default> {\n    chrome: T,\n    safari: T,\n    android: T,\n}\n\n // Example of using generated methods.\n {\n    // .iter(), .iter_mut(), .into_iter()\n    let mut data = BrowserData {\n        chrome: true,\n        safari: false,\n        android: true,\n    };\n    assert_eq!(\n        data.iter().collect::<Vec<_>>(),\n        vec![("chrome", &true), ("safari", &false), ("android", &true),]\n    );\n\n    assert_eq!(\n        data.iter_mut().collect::<Vec<_>>(),\n        vec![\n            ("chrome", &mut true),\n            ("safari", &mut false),\n            ("android", &mut true),\n        ]\n    );\n\n    assert_eq!(\n        data.into_iter().collect::<Vec<_>>(),\n        vec![("chrome", true), ("safari", false), ("android", true),]\n    );\n }\n\n {\n    // .map(), .map_values()\n\n    let data = BrowserData {\n        chrome: 20000,\n        safari: 10000,\n        ..Default::default()\n    };\n\n    assert_eq!(\n        data.map_value(|v| v > 15000),\n        BrowserData {\n            chrome: true,\n            safari: false,\n            android: false,\n        }\n    );\n }\n',
						),
					),
				);
			}
			c.isMDXComponent = !0;
		},
	},
]);
