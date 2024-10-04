"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[7301],
	{
		3905: (e, t, i) => {
			i.d(t, { Zo: () => m, kt: () => d });
			var n = i(7294);
			function r(e, t, i) {
				return (
					t in e
						? Object.defineProperty(e, t, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = i),
					e
				);
			}
			function a(e, t) {
				var i = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t &&
						(n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t)
								.enumerable;
						})),
						i.push.apply(i, n);
				}
				return i;
			}
			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var i = null != arguments[t] ? arguments[t] : {};
					t % 2
						? a(Object(i), !0).forEach(function (t) {
								r(e, t, i[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(i),
								)
							: a(Object(i)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(i, t),
									);
								});
				}
				return e;
			}
			function l(e, t) {
				if (null == e) return {};
				var i,
					n,
					r = (function (e, t) {
						if (null == e) return {};
						var i,
							n,
							r = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
						return r;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(i = a[n]),
							t.indexOf(i) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									i,
								) &&
									(r[i] = e[i]));
				}
				return r;
			}
			var p = n.createContext({}),
				o = function (e) {
					var t = n.useContext(p),
						i = t;
					return (
						e &&
							(i =
								"function" == typeof e ? e(t) : s(s({}, t), e)),
						i
					);
				},
				m = function (e) {
					var t = o(e.components);
					return n.createElement(
						p.Provider,
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
				c = n.forwardRef(function (e, t) {
					var i = e.components,
						r = e.mdxType,
						a = e.originalType,
						p = e.parentName,
						m = l(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						c = o(i),
						d = r,
						N = c["".concat(p, ".").concat(d)] || c[d] || u[d] || a;
					return i
						? n.createElement(
								N,
								s(s({ ref: t }, m), {}, { components: i }),
							)
						: n.createElement(N, s({ ref: t }, m));
				});
			function d(e, t) {
				var i = arguments,
					r = t && t.mdxType;
				if ("string" == typeof e || r) {
					var a = i.length,
						s = new Array(a);
					s[0] = c;
					var l = {};
					for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
					(l.originalType = e),
						(l.mdxType = "string" == typeof e ? e : r),
						(s[1] = l);
					for (var o = 2; o < a; o++) s[o] = i[o];
					return n.createElement.apply(null, s);
				}
				return n.createElement.apply(null, i);
			}
			c.displayName = "MDXCreateElement";
		},
		5094: (e, t, i) => {
			i.r(t),
				i.d(t, {
					frontMatter: () => l,
					contentTitle: () => p,
					metadata: () => o,
					toc: () => m,
					default: () => c,
				});
			var n = i(7462),
				r = i(3366),
				a = (i(7294), i(3905)),
				s = ["components"],
				l = {
					id: "usage-plugin",
					title: "Using custom plugins with swc",
					sidebar_label: "Plugin",
				},
				p = void 0,
				o = {
					unversionedId: "usage-plugin",
					id: "usage-plugin",
					isDocsHomePage: !1,
					title: "Using custom plugins with swc",
					description:
						"Warning: Passing the AST to the JS Plugin system is a performance bottleneck.",
					source: "@site/docs/usage-plugin.md",
					sourceDirName: ".",
					slug: "/usage-plugin",
					permalink: "/docs/usage-plugin",
					version: "current",
					lastUpdatedBy: "Donny",
					lastUpdatedAt: 1636280974,
					formattedLastUpdatedAt: "11/7/2021",
					frontMatter: {
						id: "usage-plugin",
						title: "Using custom plugins with swc",
						sidebar_label: "Plugin",
					},
					sidebar: "usage",
					previous: {
						title: "swc (core)",
						permalink: "/docs/usage-core",
					},
					next: {
						title: "@babel/core",
						permalink: "/docs/migrating-from-babel-core",
					},
				},
				m = [
					{
						value: "JS Plugin Api",
						id: "js-plugin-api",
						children: [
							{
								value: "Plugin Example",
								id: "plugin-example",
								children: [],
							},
							{
								value: "Visitor API",
								id: "visitor-api",
								children: [],
							},
							{
								value: "Using multiple plugins",
								id: "using-multiple-plugins",
								children: [],
							},
						],
					},
				],
				u = { toc: m };
			function c(e) {
				var t = e.components,
					i = (0, r.Z)(e, s);
				return (0, a.kt)(
					"wrapper",
					(0, n.Z)({}, u, i, { components: t, mdxType: "MDXLayout" }),
					(0, a.kt)(
						"blockquote",
						null,
						(0, a.kt)(
							"p",
							{ parentName: "blockquote" },
							"Warning: Passing the AST to the JS Plugin system is a performance bottleneck.",
						),
						(0, a.kt)(
							"p",
							{ parentName: "blockquote" },
							"Therefore we are concidering two approaches for the next SWC major version:",
						),
						(0, a.kt)(
							"ol",
							{ parentName: "blockquote" },
							(0, a.kt)(
								"li",
								{ parentName: "ol" },
								"Creating a plugin system in Rust (",
								(0, a.kt)(
									"a",
									{
										parentName: "li",
										href: "https://github.com/swc-project/swc/discussions/2337",
									},
									"#2337",
								),
								")",
							),
							(0, a.kt)(
								"li",
								{ parentName: "ol" },
								"Solve the bottleneck to keep a JS plugin system (",
								(0, a.kt)(
									"a",
									{
										parentName: "li",
										href: "https://github.com/swc-project/swc/issues/2175",
									},
									"#2175",
								),
								")",
							),
						),
					),
					(0, a.kt)("h2", { id: "js-plugin-api" }, "JS Plugin Api"),
					(0, a.kt)(
						"p",
						null,
						"There are some helpers to help writing a transform.",
					),
					(0, a.kt)("h3", { id: "plugin-example" }, "Plugin Example"),
					(0, a.kt)(
						"p",
						null,
						"The following custom plugin example will replace all ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"console.log(...)",
						),
						" statements with ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "void 0"),
						".",
						(0, a.kt)("br", { parentName: "p" }),
						"\n",
						"You can turn on optimizer with ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "/docs/configuring-swc#jsctransformoptimizer",
							},
							(0, a.kt)(
								"inlineCode",
								{ parentName: "a" },
								"jsc.transform.optimizer",
							),
						),
						" to remove ",
						(0, a.kt)("inlineCode", { parentName: "p" }, "void 0"),
						".",
					),
					(0, a.kt)(
						"p",
						null,
						"From: ",
						(0, a.kt)(
							"a",
							{
								parentName: "p",
								href: "https://github.com/swc-project/plugin-strip-console",
							},
							"https://github.com/swc-project/plugin-strip-console",
						),
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { CallExpression, Expression } from "@swc/core";\nimport Visitor from "@swc/core/Visitor";\n\nclass ConsoleStripper extends Visitor {\n  visitCallExpression(expression: CallExpression): Expression {\n    if (expression.callee.type !== "MemberExpression") {\n      return expression;\n    }\n\n    if (\n      expression.callee.object.type === "Identifier" &&\n      expression.callee.object.value === "console"\n    ) {\n      if (expression.callee.property.type === "Identifier") {\n        return {\n          type: "UnaryExpression",\n          span: expression.span,\n          operator: "void",\n          argument: {\n            type: "NumericLiteral",\n            span: expression.span,\n            value: 0,\n          },\n        };\n      }\n    }\n\n    return expression;\n  }\n}\n\nconst out = transformSync(\n  `\nif (foo) {\n    console.log("Foo")\n} else {\n    console.log("Bar")\n}`,\n  {\n    plugin: (m) => new ConsoleStripper().visitProgram(m),\n  }\n);\n\nout.code ===\n  `if (foo) {\n    void 0;\n} else {\n    void 0;\n}`;\n',
						),
					),
					(0, a.kt)("h3", { id: "visitor-api" }, "Visitor API"),
					(0, a.kt)(
						"p",
						null,
						"Visitors are a pattern used in AST traversal across languages. Simply put they are an object with methods defined for accepting particular node types in a tree. That's a bit abstract so let's look at an example.",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'/// @ts-check\nimport Visitor from "@swc/core/Visitor";\n\nclass MyVisitor extends Visitor {\n  visitIdentifier(node) {\n    console.log("called")\n    return node;\n  }\n}\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"This is a basic visitor that when used during a traversal will call the visitIdentifier() method for every Identifier in the tree.",
					),
					(0, a.kt)(
						"p",
						null,
						"So with this code the visitIdentifier() method will be called four times with each Identifier (including square).",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { transformSync } from "@swc/core";\n\ntransformSync(`\n\n  function square(n) {\n    return n * n;\n  }\n\n`, {\n  plugin: MyVisitor,\n});\n\n// Called!\n// Called!\n// Called!\n// Called!\n',
						),
					),
					(0, a.kt)(
						"p",
						null,
						"By extending ",
						(0, a.kt)(
							"inlineCode",
							{ parentName: "p" },
							"@swc/core/Visitor",
						),
						"[https://unpkg.com/browse/@swc/core/Visitor.d.ts]",
						" you can choose from a variety of visitors:",
					),
					(0, a.kt)(
						"ul",
						null,
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitProgram(n: Program): Program;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitModule(m: Module): Module;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitScript(m: Script): Script;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitModuleItems(items: ModuleItem[]): ModuleItem[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitModuleItem(n: ModuleItem): ModuleItem;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitModuleDeclaration(n: ModuleDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsNamespaceExportDeclaration(n: TsNamespaceExportDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsExportAssignment(n: TsExportAssignment): TsExportAssignment;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsImportEqualsDeclaration(n: TsImportEqualsDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsModuleReference(n: TsModuleReference): TsModuleReference;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsExternalModuleReference(n: TsExternalModuleReference): TsExternalModuleReference;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportAllDeclration(n: ExportAllDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportDefaultExpression(n: ExportDefaultExpression): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportNamedDeclration(n: ExportNamedDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportSpecifiers(nodes: ExportSpecifier[]): ExportSpecifier[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportSpecifier(n: ExportSpecifier): ExportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitNamedExportSpecifier(n: NamedExportSpecifier): ExportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportNamespaceSpecifier(n: ExportNamespaceSpecifier): ExportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportDefaultSpecifier(n: ExportDefaultSpecifier): ExportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitOptionalStringLiteral(n: StringLiteral | undefined): StringLiteral | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportDefaultDeclaration(n: ExportDefaultDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDefaultDeclaration(n: DefaultDecl): DefaultDecl;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitFunctionExpression(n: FunctionExpression): FunctionExpression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassExpression(n: ClassExpression): ClassExpression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExportDeclaration(n: ExportDeclaration): ModuleDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrayExpression(e: ArrayExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrayElement(e: ExprOrSpread | undefined): ExprOrSpread | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExprOrSpread(e: ExprOrSpread): ExprOrSpread;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSpreadElement(e: SpreadElement): SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitOptionalExpression(e: Expression | undefined): Expression | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrowFunctionExpression(e: ArrowFunctionExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrowBody(body: BlockStatement | Expression): BlockStatement | Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitBlockStatement(block: BlockStatement): BlockStatement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitStatements(stmts: Statement[]): Statement[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitStatement(stmt: Statement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSwitchStatement(stmt: SwitchStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSwitchCases(cases: SwitchCase[]): SwitchCase[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSwitchCase(c: SwitchCase): SwitchCase;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitIfStatement(stmt: IfStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitOptionalStatement(stmt: Statement | undefined): Statement | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitBreakStatement(stmt: BreakStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitWhileStatement(stmt: WhileStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTryStatement(stmt: TryStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitCatchClause(handler: CatchClause | undefined): CatchClause | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitThrowStatement(stmt: ThrowStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitReturnStatement(stmt: ReturnStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitLabeledStatement(stmt: LabeledStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitForStatement(stmt: ForStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitForOfStatement(stmt: ForOfStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitForInStatement(stmt: ForInStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitEmptyStatement(stmt: EmptyStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDoWhileStatement(stmt: DoWhileStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDebuggerStatement(stmt: DebuggerStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitWithStatement(stmt: WithStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDeclaration(decl: Declaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitVariableDeclaration(n: VariableDeclaration): VariableDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitVariableDeclarators(nodes: VariableDeclarator[]): VariableDeclarator[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitVariableDeclarator(n: VariableDeclarator): VariableDeclarator;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeAliasDeclaration(n: TsTypeAliasDeclaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsModuleDeclaration(n: TsModuleDeclaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsModuleName(n: TsModuleName): TsModuleName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsNamespaceBody(n: TsNamespaceBody): TsNamespaceBody | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsNamespaceDeclaration(n: TsNamespaceDeclaration): TsModuleBlock | TsNamespaceDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsModuleBlock(n: TsModuleBlock): TsModuleBlock | TsNamespaceDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsInterfaceDeclaration(n: TsInterfaceDeclaration): TsInterfaceDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsInterfaceBody(n: TsInterfaceBody): TsInterfaceBody;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeElements(nodes: TsTypeElement[]): TsTypeElement[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeElement(n: TsTypeElement): TsTypeElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsEnumDeclaration(n: TsEnumDeclaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsEnumMembers(nodes: TsEnumMember[]): TsEnumMember[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsEnumMember(n: TsEnumMember): TsEnumMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsEnumMemberId(n: TsEnumMemberId): TsEnumMemberId;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitFunctionDeclaration(decl: FunctionDeclaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassDeclartion(decl: ClassDeclaration): Declaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassBody(members: ClassMember[]): ClassMember[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassMember(member: ClassMember): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsIndexSignature(n: TsIndexSignature): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsFnParameters(params: TsFnParameter[]): TsFnParameter[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsFnParameter(n: TsFnParameter): TsFnParameter;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPrivateProperty(n: PrivateProperty): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPrivateMethod(n: PrivateMethod): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPrivateName(n: PrivateName): PrivateName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitConstructor(n: Constructor): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitConstructorParameters(nodes: (Param | TsParameterProperty)[]): (Param | TsParameterProperty)[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitConstructorParameter(n: Param | TsParameterProperty): Param | TsParameterProperty;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsParameterProperty(n: TsParameterProperty): TsParameterProperty | Param;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsParameterPropertyParameter(n: TsParameterPropertyParameter): TsParameterPropertyParameter;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPropertyName(key: PropertyName): PropertyName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAccessibility(n: Accessibility | undefined): Accessibility | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassProperty(n: ClassProperty): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClassMethod(n: ClassMethod): ClassMember;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPropertName(n: PropertyName): PropertyName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitComputedPropertyKey(n: ComputedPropName): ComputedPropName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitClass(n: T): T;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitFunction(n: T): T;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsExpressionsWithTypeArguments(nodes: TsExpressionWithTypeArguments[]): TsExpressionWithTypeArguments[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsExpressionWithTypeArguments(n: TsExpressionWithTypeArguments): TsExpressionWithTypeArguments;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeParameterInstantiation(n: TsTypeParameterInstantiation | undefined): TsTypeParameterInstantiation | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypes(nodes: TsType[]): TsType[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsEntityName(n: TsEntityName): TsEntityName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsQualifiedName(n: TsQualifiedName): TsQualifiedName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDecorators(nodes: Decorator[] | undefined): Decorator[] | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitDecorator(n: Decorator): Decorator;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExpressionStatement(stmt: ExpressionStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitContinueStatement(stmt: ContinueStatement): Statement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExpression(n: Expression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitOptionalChainingExpression(n: OptionalChainingExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAssignmentExpression(n: AssignmentExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPatternOrExpressison(n: Pattern | Expression): Pattern | Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitYieldExpression(n: YieldExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitUpdateExpression(n: UpdateExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitUnaryExpression(n: UnaryExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeAssertion(n: TsTypeAssertion): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsConstAssertion(n: TsConstAssertion): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsNonNullExpression(n: TsNonNullExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsAsExpression(n: TsAsExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitThisExpression(n: ThisExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTemplateLiteral(n: TemplateLiteral): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitParameters(n: Param[]): Param[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitParameter(n: Param): Param;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTaggedTemplateExpression(n: TaggedTemplateExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSequenceExpression(n: SequenceExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitRegExpLiteral(n: RegExpLiteral): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitParenthesisExpression(n: ParenthesisExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectExpression(n: ObjectExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectProperties(nodes: (Property | SpreadElement)[]): (Property | SpreadElement)[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectProperty(n: Property | SpreadElement): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitProperty(n: Property): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitSetterProperty(n: SetterProperty): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitMethodProperty(n: MethodProperty): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitKeyValueProperty(n: KeyValueProperty): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitGetterProperty(n: GetterProperty): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAssignmentProperty(n: AssignmentProperty): Property | SpreadElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitNullLiteral(n: NullLiteral): NullLiteral;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitNewExpression(n: NewExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeArguments(n: TsTypeParameterInstantiation | undefined): TsTypeParameterInstantiation | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArguments(nodes: Argument[]): Argument[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArgument(n: Argument): Argument;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitMetaProperty(n: MetaProperty): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitMemberExpression(n: MemberExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitExpressionOrSuper(n: Expression | Super): Expression | Super;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXText(n: JSXText): JSXText;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXNamespacedName(n: JSXNamespacedName): JSXNamespacedName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXMemberExpression(n: JSXMemberExpression): JSXMemberExpression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXObject(n: JSXObject): JSXObject;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXFragment(n: JSXFragment): JSXFragment;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXClosingFragment(n: JSXClosingFragment): JSXClosingFragment;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXElementChildren(nodes: JSXElementChild[]): JSXElementChild[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXElementChild(n: JSXElementChild): JSXElementChild;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXExpressionContainer(n: JSXExpressionContainer): JSXExpressionContainer;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXSpreadChild(n: JSXSpreadChild): JSXElementChild;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXOpeningFragment(n: JSXOpeningFragment): JSXOpeningFragment;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXEmptyExpression(n: JSXEmptyExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXElement(n: JSXElement): JSXElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXClosingElement(n: JSXClosingElement | undefined): JSXClosingElement | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXElementName(n: JSXElementName): JSXElementName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXOpeningElement(n: JSXOpeningElement): JSXOpeningElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXAttributes(attrs: JSXAttributeOrSpread[] | undefined): JSXAttributeOrSpread[] | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXAttributeOrSpread(n: JSXAttributeOrSpread): JSXAttributeOrSpread;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXAttribute(n: JSXAttribute): JSXAttributeOrSpread;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXAttributeValue(n: JSXAttrValue | undefined): JSXAttrValue | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitJSXAttributeName(n: JSXAttributeName): JSXAttributeName;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitConditionalExpression(n: ConditionalExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitCallExpression(n: CallExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitBooleanLiteral(n: BooleanLiteral): BooleanLiteral;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitBinaryExpression(n: BinaryExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAwaitExpression(n: AwaitExpression): Expression;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeParameterDeclaration(n: TsTypeParameterDeclaration | undefined): TsTypeParameterDeclaration | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeParameters(nodes: TsTypeParameter[]): TsTypeParameter[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeParameter(n: TsTypeParameter): TsTypeParameter;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsTypeAnnotation(a: TsTypeAnnotation | undefined): TsTypeAnnotation | undefined;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitTsType(n: TsType): TsType;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPatterns(nodes: Pattern[]): Pattern[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitImportDeclaration(n: ImportDeclaration): ImportDeclaration;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitImportSpecifiers(nodes: ImportSpecifier[]): ImportSpecifier[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitImportSpecifier(node: ImportSpecifier): ImportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitNamedImportSpecifier(node: NamedImportSpecifier): NamedImportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitImportNamespaceSpecifier(node: ImportNamespaceSpecifier): ImportNamespaceSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitImportDefaultSpecifier(node: ImportDefaultSpecifier): ImportSpecifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitBindingIdentifier(i: Identifier): Identifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitIdentifierReference(i: Identifier): Identifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitLabelIdentifier(label: Identifier): Identifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitIdentifier(n: Identifier): Identifier;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitStringLiteral(n: StringLiteral): StringLiteral;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitNumericLiteral(n: NumericLiteral): NumericLiteral;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitPattern(n: Pattern): Pattern;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitRestElement(n: RestElement): RestElement;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAssignmentPattern(n: AssignmentPattern): Pattern;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectPattern(n: ObjectPattern): Pattern;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectPatternProperties(nodes: ObjectPatternProperty[]): ObjectPatternProperty[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitObjectPatternProperty(n: ObjectPatternProperty): ObjectPatternProperty;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitKeyValuePatternProperty(n: KeyValuePatternProperty): ObjectPatternProperty;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitAssignmentPatternProperty(n: AssignmentPatternProperty): ObjectPatternProperty;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrayPattern(n: ArrayPattern): Pattern;",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrayPatternElements(nodes: (Pattern | undefined)[]): (Pattern | undefined)[];",
						),
						(0, a.kt)(
							"li",
							{ parentName: "ul" },
							"visitArrayPatternElement(n: Pattern | undefined): Pattern | undefined;",
						),
					),
					(0, a.kt)(
						"h3",
						{ id: "using-multiple-plugins" },
						"Using multiple plugins",
					),
					(0, a.kt)(
						"pre",
						null,
						(0, a.kt)(
							"code",
							{ parentName: "pre", className: "language-ts" },
							'import { transformSync, plugins } from "@swc/core";\n\nconst out = transformSync(src, {\n  plugin: plugins(pluginA, pluginB),\n});\n',
						),
					),
				);
			}
			c.isMDXComponent = !0;
		},
	},
]);
