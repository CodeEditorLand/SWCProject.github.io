(self.webpackChunk = self.webpackChunk || []).push([
	[849],
	{
		3905: (e, t, n) => {
			"use strict";
			n.d(t, { Zo: () => p, kt: () => d });
			var r = n(7294);
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
			function a(e, t) {
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
						? a(Object(n), !0).forEach(function (t) {
								o(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(n),
								)
							: a(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function c(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = (function (e, t) {
						if (null == e) return {};
						var n,
							r,
							o = {},
							a = Object.keys(e);
						for (r = 0; r < a.length; r++)
							(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (r = 0; r < a.length; r++)
						(n = a[r]),
							t.indexOf(n) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									n,
								) &&
									(o[n] = e[n]));
				}
				return o;
			}
			var s = r.createContext({}),
				i = function (e) {
					var t = r.useContext(s),
						n = t;
					return (
						e &&
							(n =
								"function" == typeof e ? e(t) : l(l({}, t), e)),
						n
					);
				},
				p = function (e) {
					var t = i(e.components);
					return r.createElement(
						s.Provider,
						{ value: t },
						e.children,
					);
				},
				u = {
					inlineCode: "code",
					wrapper: function (e) {
						var t = e.children;
						return r.createElement(r.Fragment, {}, t);
					},
				},
				y = r.forwardRef(function (e, t) {
					var n = e.components,
						o = e.mdxType,
						a = e.originalType,
						s = e.parentName,
						p = c(e, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						y = i(n),
						d = o,
						h = y["".concat(s, ".").concat(d)] || y[d] || u[d] || a;
					return n
						? r.createElement(
								h,
								l(l({ ref: t }, p), {}, { components: n }),
							)
						: r.createElement(h, l({ ref: t }, p));
				});
			function d(e, t) {
				var n = arguments,
					o = t && t.mdxType;
				if ("string" == typeof e || o) {
					var a = n.length,
						l = new Array(a);
					l[0] = y;
					var c = {};
					for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
					(c.originalType = e),
						(c.mdxType = "string" == typeof e ? e : o),
						(l[1] = c);
					for (var i = 2; i < a; i++) l[i] = n[i];
					return r.createElement.apply(null, l);
				}
				return r.createElement.apply(null, n);
			}
			y.displayName = "MDXCreateElement";
		},
		6159: (e, t, n) => {
			"use strict";
			n.d(t, { N: () => y, Z: () => d });
			var r = n(3366),
				o = n(7462),
				a = n(7294),
				l = n(6010),
				c = n(4973),
				s = n(9306);
			const i = "enhancedAnchor_WiXH",
				p = "h1Heading_dC7a";
			var u = ["id"],
				y = function (e) {
					var t = Object.assign({}, e);
					return a.createElement(
						"header",
						null,
						a.createElement(
							"h1",
							(0, o.Z)({}, t, { id: void 0, className: p }),
							t.children,
						),
					);
				};
			const d = function (e) {
				return "h1" === e
					? y
					: ((t = e),
						function (e) {
							var n,
								o = e.id,
								p = (0, r.Z)(e, u),
								y = (0, s.LU)().navbar.hideOnScroll;
							return o
								? a.createElement(
										t,
										p,
										a.createElement("a", {
											"aria-hidden": "true",
											tabIndex: -1,
											className: (0, l.Z)(
												"anchor",
												((n = {}), (n[i] = !y), n),
											),
											id: o,
										}),
										p.children,
										a.createElement(
											"a",
											{
												className: "hash-link",
												href: "#" + o,
												title: (0, c.I)({
													id: "theme.common.headingLinkTitle",
													message:
														"Direct link to heading",
													description:
														"Title for link to heading",
												}),
											},
											"#",
										),
									)
								: a.createElement(t, p);
						});
				var t;
			};
		},
		7933: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => _ });
			var r = n(7294),
				o = n(6742),
				a = n(7462),
				l = n(6010);
			const c = {
				plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
				styles: [
					{
						types: [
							"comment",
							"prolog",
							"doctype",
							"cdata",
							"punctuation",
						],
						style: { color: "#6c6783" },
					},
					{ types: ["namespace"], style: { opacity: 0.7 } },
					{
						types: ["tag", "operator", "number"],
						style: { color: "#e09142" },
					},
					{
						types: ["property", "function"],
						style: { color: "#9a86fd" },
					},
					{
						types: ["tag-id", "selector", "atrule-id"],
						style: { color: "#eeebff" },
					},
					{ types: ["attr-name"], style: { color: "#c4b9fe" } },
					{
						types: [
							"boolean",
							"string",
							"entity",
							"url",
							"attr-value",
							"keyword",
							"control",
							"directive",
							"unit",
							"statement",
							"regex",
							"at-rule",
							"placeholder",
							"variable",
						],
						style: { color: "#ffcc99" },
					},
					{
						types: ["deleted"],
						style: { textDecorationLine: "line-through" },
					},
					{
						types: ["inserted"],
						style: { textDecorationLine: "underline" },
					},
					{ types: ["italic"], style: { fontStyle: "italic" } },
					{
						types: ["important", "bold"],
						style: { fontWeight: "bold" },
					},
					{ types: ["important"], style: { color: "#c4b9fe" } },
				],
			};
			var s = { Prism: n(7410).Z, theme: c };
			function i(e, t, n) {
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
			function p() {
				return (
					(p =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = arguments[t];
								for (var r in n)
									Object.prototype.hasOwnProperty.call(
										n,
										r,
									) && (e[r] = n[r]);
							}
							return e;
						}),
					p.apply(this, arguments)
				);
			}
			var u = /\r\n|\r|\n/,
				y = function (e) {
					0 === e.length
						? e.push({ types: ["plain"], content: "\n", empty: !0 })
						: 1 === e.length &&
							"" === e[0].content &&
							((e[0].content = "\n"), (e[0].empty = !0));
				},
				d = function (e, t) {
					var n = e.length;
					return n > 0 && e[n - 1] === t ? e : e.concat(t);
				},
				h = function (e, t) {
					var n = e.plain,
						r = Object.create(null),
						o = e.styles.reduce(function (e, n) {
							var r = n.languages,
								o = n.style;
							return (
								(r && !r.includes(t)) ||
									n.types.forEach(function (t) {
										var n = p({}, e[t], o);
										e[t] = n;
									}),
								e
							);
						}, r);
					return (
						(o.root = n),
						(o.plain = p({}, n, { backgroundColor: null })),
						o
					);
				};
			function m(e, t) {
				var n = {};
				for (var r in e)
					Object.prototype.hasOwnProperty.call(e, r) &&
						-1 === t.indexOf(r) &&
						(n[r] = e[r]);
				return n;
			}
			const f = (function (e) {
				function t() {
					for (var t = this, n = [], r = arguments.length; r--; )
						n[r] = arguments[r];
					e.apply(this, n),
						i(this, "getThemeDict", function (e) {
							if (
								void 0 !== t.themeDict &&
								e.theme === t.prevTheme &&
								e.language === t.prevLanguage
							)
								return t.themeDict;
							(t.prevTheme = e.theme),
								(t.prevLanguage = e.language);
							var n = e.theme ? h(e.theme, e.language) : void 0;
							return (t.themeDict = n);
						}),
						i(this, "getLineProps", function (e) {
							var n = e.key,
								r = e.className,
								o = e.style,
								a = p(
									{},
									m(e, ["key", "className", "style", "line"]),
									{
										className: "token-line",
										style: void 0,
										key: void 0,
									},
								),
								l = t.getThemeDict(t.props);
							return (
								void 0 !== l && (a.style = l.plain),
								void 0 !== o &&
									(a.style =
										void 0 !== a.style
											? p({}, a.style, o)
											: o),
								void 0 !== n && (a.key = n),
								r && (a.className += " " + r),
								a
							);
						}),
						i(this, "getStyleForToken", function (e) {
							var n = e.types,
								r = e.empty,
								o = n.length,
								a = t.getThemeDict(t.props);
							if (void 0 !== a) {
								if (1 === o && "plain" === n[0])
									return r
										? { display: "inline-block" }
										: void 0;
								if (1 === o && !r) return a[n[0]];
								var l = r ? { display: "inline-block" } : {},
									c = n.map(function (e) {
										return a[e];
									});
								return Object.assign.apply(
									Object,
									[l].concat(c),
								);
							}
						}),
						i(this, "getTokenProps", function (e) {
							var n = e.key,
								r = e.className,
								o = e.style,
								a = e.token,
								l = p(
									{},
									m(e, [
										"key",
										"className",
										"style",
										"token",
									]),
									{
										className: "token " + a.types.join(" "),
										children: a.content,
										style: t.getStyleForToken(a),
										key: void 0,
									},
								);
							return (
								void 0 !== o &&
									(l.style =
										void 0 !== l.style
											? p({}, l.style, o)
											: o),
								void 0 !== n && (l.key = n),
								r && (l.className += " " + r),
								l
							);
						}),
						i(this, "tokenize", function (e, t, n, r) {
							var o = {
								code: t,
								grammar: n,
								language: r,
								tokens: [],
							};
							e.hooks.run("before-tokenize", o);
							var a = (o.tokens = e.tokenize(
								o.code,
								o.grammar,
								o.language,
							));
							return e.hooks.run("after-tokenize", o), a;
						});
				}
				return (
					e && (t.__proto__ = e),
					(t.prototype = Object.create(e && e.prototype)),
					(t.prototype.constructor = t),
					(t.prototype.render = function () {
						var e = this.props,
							t = e.Prism,
							n = e.language,
							r = e.code,
							o = e.children,
							a = this.getThemeDict(this.props),
							l = t.languages[n];
						return o({
							tokens: (function (e) {
								for (
									var t = [[]],
										n = [e],
										r = [0],
										o = [e.length],
										a = 0,
										l = 0,
										c = [],
										s = [c];
									l > -1;

								) {
									for (; (a = r[l]++) < o[l]; ) {
										var i = void 0,
											p = t[l],
											h = n[l][a];
										if (
											("string" == typeof h
												? ((p = l > 0 ? p : ["plain"]),
													(i = h))
												: ((p = d(p, h.type)),
													h.alias &&
														(p = d(p, h.alias)),
													(i = h.content)),
											"string" == typeof i)
										) {
											var m = i.split(u),
												f = m.length;
											c.push({ types: p, content: m[0] });
											for (var g = 1; g < f; g++)
												y(c),
													s.push((c = [])),
													c.push({
														types: p,
														content: m[g],
													});
										} else
											l++,
												t.push(p),
												n.push(i),
												r.push(0),
												o.push(i.length);
									}
									l--, t.pop(), n.pop(), r.pop(), o.pop();
								}
								return y(c), s;
							})(void 0 !== l ? this.tokenize(t, r, l, n) : [r]),
							className: "prism-code language-" + n,
							style: void 0 !== a ? a.root : {},
							getLineProps: this.getLineProps,
							getTokenProps: this.getTokenProps,
						});
					}),
					t
				);
			})(r.Component);
			var g = n(7594),
				v = n.n(g);
			const b = {
				plain: { color: "#bfc7d5", backgroundColor: "#292d3e" },
				styles: [
					{
						types: ["comment"],
						style: {
							color: "rgb(105, 112, 152)",
							fontStyle: "italic",
						},
					},
					{
						types: ["string", "inserted"],
						style: { color: "rgb(195, 232, 141)" },
					},
					{
						types: ["number"],
						style: { color: "rgb(247, 140, 108)" },
					},
					{
						types: ["builtin", "char", "constant", "function"],
						style: { color: "rgb(130, 170, 255)" },
					},
					{
						types: ["punctuation", "selector"],
						style: { color: "rgb(199, 146, 234)" },
					},
					{
						types: ["variable"],
						style: { color: "rgb(191, 199, 213)" },
					},
					{
						types: ["class-name", "attr-name"],
						style: { color: "rgb(255, 203, 107)" },
					},
					{
						types: ["tag", "deleted"],
						style: { color: "rgb(255, 85, 114)" },
					},
					{
						types: ["operator"],
						style: { color: "rgb(137, 221, 255)" },
					},
					{
						types: ["boolean"],
						style: { color: "rgb(255, 88, 116)" },
					},
					{ types: ["keyword"], style: { fontStyle: "italic" } },
					{
						types: ["doctype"],
						style: {
							color: "rgb(199, 146, 234)",
							fontStyle: "italic",
						},
					},
					{
						types: ["namespace"],
						style: { color: "rgb(178, 204, 214)" },
					},
					{ types: ["url"], style: { color: "rgb(221, 221, 221)" } },
				],
			};
			var k = n(5350),
				j = n(9306);
			const E = function () {
				var e = (0, j.LU)().prism,
					t = (0, k.Z)().isDarkTheme,
					n = e.theme || b,
					r = e.darkTheme || n;
				return t ? r : n;
			};
			var O = n(4973);
			const T = "codeBlockContainer_J+bg",
				x = "codeBlockContent_csEI",
				P = "codeBlockTitle_oQzk",
				N = "codeBlock_rtdJ",
				Z = "codeBlockWithTitle_ZT05",
				w = "copyButton_M3SB",
				C = "codeBlockLines_1zSZ";
			var S = /{([\d,-]+)}/,
				B = function (e) {
					void 0 === e &&
						(e = ["js", "jsBlock", "jsx", "python", "html"]);
					var t = {
							js: { start: "\\/\\/", end: "" },
							jsBlock: { start: "\\/\\*", end: "\\*\\/" },
							jsx: {
								start: "\\{\\s*\\/\\*",
								end: "\\*\\/\\s*\\}",
							},
							python: { start: "#", end: "" },
							html: { start: "\x3c!--", end: "--\x3e" },
						},
						n = [
							"highlight-next-line",
							"highlight-start",
							"highlight-end",
						].join("|"),
						r = e
							.map(function (e) {
								return (
									"(?:" +
									t[e].start +
									"\\s*(" +
									n +
									")\\s*" +
									t[e].end +
									")"
								);
							})
							.join("|");
					return new RegExp("^\\s*(?:" + r + ")\\s*$");
				};
			function D(e) {
				var t = e.children,
					n = e.className,
					o = e.metastring,
					c = e.title,
					i = (0, j.LU)().prism,
					p = (0, r.useState)(!1),
					u = p[0],
					y = p[1],
					d = (0, r.useState)(!1),
					h = d[0],
					m = d[1];
				(0, r.useEffect)(function () {
					m(!0);
				}, []);
				var g = (0, j.bc)(o) || c,
					b = (0, r.useRef)(null),
					k = [],
					D = E(),
					L = Array.isArray(t) ? t.join("") : t;
				if (o && S.test(o)) {
					var _ = o.match(S)[1];
					k = v()(_).filter(function (e) {
						return e > 0;
					});
				}
				var A = n && n.replace(/language-/, "");
				!A && i.defaultLanguage && (A = i.defaultLanguage);
				var I = L.replace(/\n$/, "");
				if (0 === k.length && void 0 !== A) {
					for (
						var z,
							R = "",
							$ = (function (e) {
								switch (e) {
									case "js":
									case "javascript":
									case "ts":
									case "typescript":
										return B(["js", "jsBlock"]);
									case "jsx":
									case "tsx":
										return B(["js", "jsBlock", "jsx"]);
									case "html":
										return B(["js", "jsBlock", "html"]);
									case "python":
									case "py":
										return B(["python"]);
									default:
										return B();
								}
							})(A),
							F = L.replace(/\n$/, "").split("\n"),
							U = 0;
						U < F.length;

					) {
						var V = U + 1,
							W = F[U].match($);
						if (null !== W) {
							switch (
								W.slice(1).reduce(
									function (e, t) {
										return e || t;
									},
									void 0,
								)
							) {
								case "highlight-next-line":
									R += V + ",";
									break;
								case "highlight-start":
									z = V;
									break;
								case "highlight-end":
									R += z + "-" + (V - 1) + ",";
							}
							F.splice(U, 1);
						} else U += 1;
					}
					(k = v()(R)), (I = F.join("\n"));
				}
				var H = function () {
					!(function (e, t) {
						var n = (void 0 === t ? {} : t).target,
							r = void 0 === n ? document.body : n,
							o = document.createElement("textarea"),
							a = document.activeElement;
						(o.value = e),
							o.setAttribute("readonly", ""),
							(o.style.contain = "strict"),
							(o.style.position = "absolute"),
							(o.style.left = "-9999px"),
							(o.style.fontSize = "12pt");
						var l = document.getSelection(),
							c = !1;
						l.rangeCount > 0 && (c = l.getRangeAt(0)),
							r.append(o),
							o.select(),
							(o.selectionStart = 0),
							(o.selectionEnd = e.length);
						var s = !1;
						try {
							s = document.execCommand("copy");
						} catch (i) {}
						o.remove(),
							c && (l.removeAllRanges(), l.addRange(c)),
							a && a.focus();
					})(I),
						y(!0),
						setTimeout(function () {
							return y(!1);
						}, 2e3);
				};
				return r.createElement(
					f,
					(0, a.Z)({}, s, {
						key: String(h),
						theme: D,
						code: I,
						language: A,
					}),
					function (e) {
						var t,
							n = e.className,
							o = e.style,
							c = e.tokens,
							s = e.getLineProps,
							i = e.getTokenProps;
						return r.createElement(
							"div",
							{ className: T },
							g &&
								r.createElement(
									"div",
									{ style: o, className: P },
									g,
								),
							r.createElement(
								"div",
								{ className: (0, l.Z)(x, A) },
								r.createElement(
									"pre",
									{
										tabIndex: 0,
										className: (0, l.Z)(
											n,
											N,
											"thin-scrollbar",
											((t = {}), (t[Z] = g), t),
										),
										style: o,
									},
									r.createElement(
										"code",
										{ className: C },
										c.map(function (e, t) {
											1 === e.length &&
												"" === e[0].content &&
												(e[0].content = "\n");
											var n = s({ line: e, key: t });
											return (
												k.includes(t + 1) &&
													(n.className +=
														" docusaurus-highlight-code-line"),
												r.createElement(
													"span",
													(0, a.Z)({ key: t }, n),
													e.map(function (e, t) {
														return r.createElement(
															"span",
															(0, a.Z)(
																{ key: t },
																i({
																	token: e,
																	key: t,
																}),
															),
														);
													}),
												)
											);
										}),
									),
								),
								r.createElement(
									"button",
									{
										ref: b,
										type: "button",
										"aria-label": (0, O.I)({
											id: "theme.CodeBlock.copyButtonAriaLabel",
											message: "Copy code to clipboard",
											description:
												"The ARIA label for copy code blocks button",
										}),
										className: (0, l.Z)(w, "clean-btn"),
										onClick: H,
									},
									u
										? r.createElement(
												O.Z,
												{
													id: "theme.CodeBlock.copied",
													description:
														"The copied button label on code blocks",
												},
												"Copied",
											)
										: r.createElement(
												O.Z,
												{
													id: "theme.CodeBlock.copy",
													description:
														"The copy button label on code blocks",
												},
												"Copy",
											),
								),
							),
						);
					},
				);
			}
			var L = n(6159);
			const _ = {
				code: function (e) {
					var t = e.children;
					return (0, r.isValidElement)(t)
						? t
						: t.includes("\n")
							? r.createElement(D, e)
							: r.createElement("code", e);
				},
				a: function (e) {
					return r.createElement(o.Z, e);
				},
				pre: function (e) {
					var t,
						n = e.children;
					return (0, r.isValidElement)(
						null == n || null == (t = n.props)
							? void 0
							: t.children,
					)
						? null == n
							? void 0
							: n.props.children
						: r.createElement(
								D,
								(0, r.isValidElement)(n)
									? null == n
										? void 0
										: n.props
									: { children: n },
							);
				},
				h1: (0, L.Z)("h1"),
				h2: (0, L.Z)("h2"),
				h3: (0, L.Z)("h3"),
				h4: (0, L.Z)("h4"),
				h5: (0, L.Z)("h5"),
				h6: (0, L.Z)("h6"),
			};
		},
		7594: (e, t) => {
			function n(e) {
				let t,
					n = [];
				for (let r of e.split(",").map((e) => e.trim()))
					if (/^-?\d+$/.test(r)) n.push(parseInt(r, 10));
					else if (
						(t = r.match(
							/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/,
						))
					) {
						let [e, r, o, a] = t;
						if (r && a) {
							(r = parseInt(r)), (a = parseInt(a));
							const e = r < a ? 1 : -1;
							("-" !== o && ".." !== o && "\u2025" !== o) ||
								(a += e);
							for (let t = r; t !== a; t += e) n.push(t);
						}
					}
				return n;
			}
			(t.default = n), (e.exports = n);
		},
	},
]);
