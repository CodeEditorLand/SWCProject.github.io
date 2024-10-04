"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[4300],
	{
		4300: (e, t, r) => {
			function n(e, t) {
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
			function o(e, t, r) {
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
			function a(e, t, r) {
				var a = t.initialState;
				return {
					getState: function () {
						return a;
					},
					dispatch: function (c, i) {
						var l = (function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r =
									null != arguments[t] ? arguments[t] : {};
								t % 2
									? n(Object(r), !0).forEach(function (t) {
											o(e, t, r[t]);
										})
									: Object.getOwnPropertyDescriptors
										? Object.defineProperties(
												e,
												Object.getOwnPropertyDescriptors(
													r,
												),
											)
										: n(Object(r)).forEach(function (t) {
												Object.defineProperty(
													e,
													t,
													Object.getOwnPropertyDescriptor(
														r,
														t,
													),
												);
											});
							}
							return e;
						})({}, a);
						(a = e(a, { type: c, props: t, payload: i })),
							r({ state: a, prevState: l });
					},
				};
			}
			function c(e) {
				return e.reduce(function (e, t) {
					return e.concat(t);
				}, []);
			}
			function i(e, t) {
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
						? i(Object(r), !0).forEach(function (t) {
								u(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: i(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function u(e, t, r) {
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
			function s(e) {
				return 0 === e.collections.length
					? 0
					: e.collections.reduce(function (e, t) {
							return e + t.items.length;
						}, 0);
			}
			r.r(t), r.d(t, { DocSearchModal: () => Wt });
			var f = 0;
			var m = function () {};
			function p(e, t) {
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
			function h(e, t, r) {
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
			function d(e) {
				return (
					(d =
						"function" == typeof Symbol &&
						"symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? "symbol"
										: typeof e;
								}),
					d(e)
				);
			}
			function v(e, t) {
				var r = [];
				return Promise.resolve(e(t)).then(function (e) {
					return (
						Array.isArray(e),
						"The `getSources` function must return an array of sources but returned type "
							.concat(JSON.stringify(d(e)), ":\n\n")
							.concat(JSON.stringify(e, null, 2)),
						Promise.all(
							e
								.filter(function (e) {
									return Boolean(e);
								})
								.map(function (e) {
									if ((e.sourceId, r.includes(e.sourceId)))
										throw new Error(
											"[Autocomplete] The `sourceId` ".concat(
												JSON.stringify(e.sourceId),
												" is not unique.",
											),
										);
									r.push(e.sourceId);
									var t = (function (e) {
										for (
											var t = 1;
											t < arguments.length;
											t++
										) {
											var r =
												null != arguments[t]
													? arguments[t]
													: {};
											t % 2
												? p(Object(r), !0).forEach(
														function (t) {
															h(e, t, r[t]);
														},
													)
												: Object.getOwnPropertyDescriptors
													? Object.defineProperties(
															e,
															Object.getOwnPropertyDescriptors(
																r,
															),
														)
													: p(Object(r)).forEach(
															function (t) {
																Object.defineProperty(
																	e,
																	t,
																	Object.getOwnPropertyDescriptor(
																		r,
																		t,
																	),
																);
															},
														);
										}
										return e;
									})(
										{
											getItemInputValue: function (e) {
												return e.state.query;
											},
											getItemUrl: function () {},
											onSelect: function (e) {
												(0, e.setIsOpen)(!1);
											},
											onActive: m,
										},
										e,
									);
									return Promise.resolve(t);
								}),
						)
					);
				});
			}
			function y(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return g(e);
					})(e) ||
					(function (e) {
						if (
							"undefined" != typeof Symbol &&
							Symbol.iterator in Object(e)
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return g(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r &&
							e.constructor &&
							(r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if (
							"Arguments" === r ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
						)
							return g(e, t);
					})(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function g(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function b(e, t) {
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
			function O(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? b(Object(r), !0).forEach(function (t) {
								S(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: b(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function S(e, t, r) {
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
			function E(e, t) {
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
			function w(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? E(Object(r), !0).forEach(function (t) {
								j(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: E(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function j(e, t, r) {
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
			function P(e) {
				return (
					(P =
						"function" == typeof Symbol &&
						"symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? "symbol"
										: typeof e;
								}),
					P(e)
				);
			}
			function I(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return D(e);
					})(e) ||
					(function (e) {
						if (
							"undefined" != typeof Symbol &&
							Symbol.iterator in Object(e)
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return D(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r &&
							e.constructor &&
							(r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if (
							"Arguments" === r ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
						)
							return D(e, t);
					})(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function D(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function C(e, t) {
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
			function k(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? C(Object(r), !0).forEach(function (t) {
								N(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: C(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function N(e, t, r) {
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
			function A(e) {
				return Boolean(e.execute);
			}
			function x(e, t) {
				return (
					(r = e),
					Boolean(null == r ? void 0 : r.execute)
						? k(
								k({}, e),
								{},
								{
									requests: e.queries.map(function (r) {
										return {
											query: r,
											sourceId: t,
											transformResponse:
												e.transformResponse,
										};
									}),
								},
							)
						: { items: e, sourceId: t }
				);
				var r;
			}
			function q(e) {
				var t = e
					.reduce(function (e, t) {
						if (!A(t)) return e.push(t), e;
						var r = t.searchClient,
							n = t.execute,
							o = t.requests,
							a = e.find(function (e) {
								return (
									A(t) &&
									A(e) &&
									e.searchClient === r &&
									e.execute === n
								);
							});
						if (a) {
							var c;
							(c = a.items).push.apply(c, I(o));
						} else {
							var i = { execute: n, items: o, searchClient: r };
							e.push(i);
						}
						return e;
					}, [])
					.map(function (e) {
						if (!A(e)) return Promise.resolve(e);
						var t = e,
							r = t.execute,
							n = t.items;
						return r({ searchClient: t.searchClient, requests: n });
					});
				return Promise.all(t).then(function (e) {
					return c(e);
				});
			}
			function R(e, t) {
				return t.map(function (t) {
					var r = e.filter(function (e) {
							return e.sourceId === t.sourceId;
						}),
						n = r.map(function (e) {
							return e.items;
						}),
						o = r[0].transformResponse,
						a = o
							? o(
									(function (e) {
										var t = e.map(function (e) {
											var t;
											return w(
												w({}, e),
												{},
												{
													hits:
														null === (t = e.hits) ||
														void 0 === t
															? void 0
															: t.map(
																	function (
																		t,
																	) {
																		return w(
																			w(
																				{},
																				t,
																			),
																			{},
																			{
																				__autocomplete_indexName:
																					e.index,
																				__autocomplete_queryID:
																					e.queryID,
																			},
																		);
																	},
																),
												},
											);
										});
										return {
											results: t,
											hits: t
												.map(function (e) {
													return e.hits;
												})
												.filter(Boolean),
											facetHits: t
												.map(function (e) {
													var t;
													return null ===
														(t = e.facetHits) ||
														void 0 === t
														? void 0
														: t.map(function (e) {
																return {
																	label: e.value,
																	count: e.count,
																	_highlightResult:
																		{
																			label: {
																				value: e.highlighted,
																			},
																		},
																};
															});
												})
												.filter(Boolean),
										};
									})(n),
								)
							: n;
					return (
						Array.isArray(a),
						'The `getItems` function from source "'
							.concat(
								t.sourceId,
								'" must return an array of items but returned type ',
							)
							.concat(JSON.stringify(P(a)), ":\n\n")
							.concat(
								JSON.stringify(a, null, 2),
								".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems",
							),
						a.every(Boolean),
						'The `getItems` function from source "'
							.concat(
								t.sourceId,
								'" must return an array of items but returned ',
							)
							.concat(
								JSON.stringify(void 0),
								".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems",
							),
						{ source: t, items: a }
					);
				});
			}
			function _(e) {
				var t = (function (e) {
					var t = e.collections
						.map(function (e) {
							return e.items.length;
						})
						.reduce(function (e, t, r) {
							var n = (e[r - 1] || 0) + t;
							return e.push(n), e;
						}, [])
						.reduce(function (t, r) {
							return r <= e.activeItemId ? t + 1 : t;
						}, 0);
					return e.collections[t];
				})(e);
				if (!t) return null;
				var r =
						t.items[
							(function (e) {
								for (
									var t = e.state,
										r = e.collection,
										n = !1,
										o = 0,
										a = 0;
									!1 === n;

								) {
									var c = t.collections[o];
									if (c === r) {
										n = !0;
										break;
									}
									(a += c.items.length), o++;
								}
								return t.activeItemId - a;
							})({ state: e, collection: t })
						],
					n = t.source;
				return {
					item: r,
					itemInputValue: n.getItemInputValue({ item: r, state: e }),
					itemUrl: n.getItemUrl({ item: r, state: e }),
					source: n,
				};
			}
			function T(e, t) {
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
			function H(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? T(Object(r), !0).forEach(function (t) {
								M(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: T(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function M(e, t, r) {
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
			function L(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			var F = null;
			function U(e) {
				var t = e.event,
					r = e.nextState,
					n = void 0 === r ? {} : r,
					o = e.props,
					a = e.query,
					c = e.refresh,
					i = e.store,
					l = L(e, [
						"event",
						"nextState",
						"props",
						"query",
						"refresh",
						"store",
					]);
				F && o.environment.clearTimeout(F);
				var u,
					s = l.setCollections,
					f = l.setIsOpen,
					m = l.setQuery,
					p = l.setActiveItemId,
					h = l.setStatus;
				return (
					m(a),
					p(o.defaultActiveItemId),
					a || !1 !== o.openOnFocus
						? (h("loading"),
							(F = o.environment.setTimeout(function () {
								h("stalled");
							}, o.stallThreshold)),
							o
								.getSources(
									H(
										{
											query: a,
											refresh: c,
											state: i.getState(),
										},
										l,
									),
								)
								.then(function (e) {
									return (
										h("loading"),
										Promise.all(
											e.map(function (e) {
												return Promise.resolve(
													e.getItems(
														H(
															{
																query: a,
																refresh: c,
																state: i.getState(),
															},
															l,
														),
													),
												).then(function (t) {
													return x(t, e.sourceId);
												});
											}),
										)
											.then(q)
											.then(function (t) {
												return R(t, e);
											})
											.then(function (e) {
												var r;
												h("idle"), s(e);
												var u = o.shouldPanelOpen({
													state: i.getState(),
												});
												f(
													null !== (r = n.isOpen) &&
														void 0 !== r
														? r
														: (o.openOnFocus &&
																!a &&
																u) ||
																u,
												);
												var m = _(i.getState());
												if (
													null !==
														i.getState()
															.activeItemId &&
													m
												) {
													var p = m.item,
														d = m.itemInputValue,
														v = m.itemUrl,
														y = m.source;
													y.onActive(
														H(
															{
																event: t,
																item: p,
																itemInputValue:
																	d,
																itemUrl: v,
																refresh: c,
																source: y,
																state: i.getState(),
															},
															l,
														),
													);
												}
											})
											.finally(function () {
												F &&
													o.environment.clearTimeout(
														F,
													);
											})
									);
								}))
						: (h("idle"),
							s(
								i.getState().collections.map(function (e) {
									return H(H({}, e), {}, { items: [] });
								}),
							),
							f(
								null !== (u = n.isOpen) && void 0 !== u
									? u
									: o.shouldPanelOpen({
											state: i.getState(),
										}),
							),
							Promise.resolve())
				);
			}
			function V(e, t) {
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
			function z(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? V(Object(r), !0).forEach(function (t) {
								B(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: V(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function B(e, t, r) {
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
			function J(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			function K(e, t) {
				return e === t || e.contains(t);
			}
			function $(e, t) {
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
			function W(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? $(Object(r), !0).forEach(function (t) {
								Q(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: $(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function Q(e, t, r) {
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
			function Y(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			function G(e) {
				var t = e.props,
					r = e.refresh,
					n = e.store,
					o = Y(e, ["props", "refresh", "store"]);
				return {
					getEnvironmentProps: function (e) {
						var r = e.inputElement,
							o = e.formElement,
							a = e.panelElement;
						return W(
							{
								onTouchStart: function (e) {
									!1 !== n.getState().isOpen &&
										e.target !== r &&
										!1 ===
											[o, a].some(function (r) {
												return (
													K(r, e.target) ||
													K(
														r,
														t.environment.document
															.activeElement,
													)
												);
											}) &&
										n.dispatch("blur", null);
								},
								onTouchMove: function (e) {
									!1 !== n.getState().isOpen &&
										r ===
											t.environment.document
												.activeElement &&
										e.target !== r &&
										r.blur();
								},
							},
							Y(e, [
								"inputElement",
								"formElement",
								"panelElement",
							]),
						);
					},
					getRootProps: function (e) {
						return W(
							{
								role: "combobox",
								"aria-expanded": n.getState().isOpen,
								"aria-haspopup": "listbox",
								"aria-owns": n.getState().isOpen
									? "".concat(t.id, "-list")
									: void 0,
								"aria-labelledby": "".concat(t.id, "-label"),
							},
							e,
						);
					},
					getFormProps: function (e) {
						e.inputElement;
						return W(
							{
								action: "",
								noValidate: !0,
								role: "search",
								onSubmit: function (a) {
									var c;
									a.preventDefault(),
										t.onSubmit(
											W(
												{
													event: a,
													refresh: r,
													state: n.getState(),
												},
												o,
											),
										),
										n.dispatch("submit", null),
										null === (c = e.inputElement) ||
											void 0 === c ||
											c.blur();
								},
								onReset: function (a) {
									var c;
									a.preventDefault(),
										t.onReset(
											W(
												{
													event: a,
													refresh: r,
													state: n.getState(),
												},
												o,
											),
										),
										n.dispatch("reset", null),
										null === (c = e.inputElement) ||
											void 0 === c ||
											c.focus();
								},
							},
							Y(e, ["inputElement"]),
						);
					},
					getLabelProps: function (e) {
						return W(
							{
								htmlFor: "".concat(t.id, "-input"),
								id: "".concat(t.id, "-label"),
							},
							e,
						);
					},
					getInputProps: function (e) {
						function a(e) {
							(t.openOnFocus || Boolean(n.getState().query)) &&
								U(
									W(
										{
											event: e,
											props: t,
											query:
												n.getState().completion ||
												n.getState().query,
											refresh: r,
											store: n,
										},
										o,
									),
								),
								n.dispatch("focus", null);
						}
						var c = "ontouchstart" in t.environment,
							i = e || {},
							l = (i.inputElement, i.maxLength),
							u = void 0 === l ? 512 : l,
							s = Y(i, ["inputElement", "maxLength"]),
							f = _(n.getState());
						return W(
							{
								"aria-autocomplete": "both",
								"aria-activedescendant":
									n.getState().isOpen &&
									null !== n.getState().activeItemId
										? ""
												.concat(t.id, "-item-")
												.concat(
													n.getState().activeItemId,
												)
										: void 0,
								"aria-controls": n.getState().isOpen
									? "".concat(t.id, "-list")
									: void 0,
								"aria-labelledby": "".concat(t.id, "-label"),
								value:
									n.getState().completion ||
									n.getState().query,
								id: "".concat(t.id, "-input"),
								autoComplete: "off",
								autoCorrect: "off",
								autoCapitalize: "off",
								enterKeyHint:
									null != f && f.itemUrl ? "go" : "search",
								spellCheck: "false",
								autoFocus: t.autoFocus,
								placeholder: t.placeholder,
								maxLength: u,
								type: "search",
								onChange: function (e) {
									U(
										W(
											{
												event: e,
												props: t,
												query: e.currentTarget.value.slice(
													0,
													u,
												),
												refresh: r,
												store: n,
											},
											o,
										),
									);
								},
								onKeyDown: function (e) {
									!(function (e) {
										var t = e.event,
											r = e.props,
											n = e.refresh,
											o = e.store,
											a = J(e, [
												"event",
												"props",
												"refresh",
												"store",
											]);
										if (
											"ArrowUp" === t.key ||
											"ArrowDown" === t.key
										) {
											var c = function () {
													var e =
														r.environment.document.getElementById(
															""
																.concat(
																	r.id,
																	"-item-",
																)
																.concat(
																	o.getState()
																		.activeItemId,
																),
														);
													e &&
														(e.scrollIntoViewIfNeeded
															? e.scrollIntoViewIfNeeded(
																	!1,
																)
															: e.scrollIntoView(
																	!1,
																));
												},
												i = function () {
													var e = _(o.getState());
													if (
														null !==
															o.getState()
																.activeItemId &&
														e
													) {
														var r = e.item,
															c =
																e.itemInputValue,
															i = e.itemUrl,
															l = e.source;
														l.onActive(
															z(
																{
																	event: t,
																	item: r,
																	itemInputValue:
																		c,
																	itemUrl: i,
																	refresh: n,
																	source: l,
																	state: o.getState(),
																},
																a,
															),
														);
													}
												};
											t.preventDefault(),
												!1 === o.getState().isOpen &&
												(r.openOnFocus ||
													Boolean(o.getState().query))
													? U(
															z(
																{
																	event: t,
																	props: r,
																	query: o.getState()
																		.query,
																	refresh: n,
																	store: o,
																},
																a,
															),
														).then(function () {
															o.dispatch(t.key, {
																nextActiveItemId:
																	r.defaultActiveItemId,
															}),
																i(),
																setTimeout(
																	c,
																	0,
																);
														})
													: (o.dispatch(t.key, {}),
														i(),
														c());
										} else if ("Escape" === t.key)
											t.preventDefault(),
												o.dispatch(t.key, null);
										else if ("Enter" === t.key) {
											if (
												null ===
													o.getState().activeItemId ||
												o
													.getState()
													.collections.every(
														function (e) {
															return (
																0 ===
																e.items.length
															);
														},
													)
											)
												return;
											t.preventDefault();
											var l = _(o.getState()),
												u = l.item,
												s = l.itemInputValue,
												f = l.itemUrl,
												m = l.source;
											if (t.metaKey || t.ctrlKey)
												void 0 !== f &&
													(m.onSelect(
														z(
															{
																event: t,
																item: u,
																itemInputValue:
																	s,
																itemUrl: f,
																refresh: n,
																source: m,
																state: o.getState(),
															},
															a,
														),
													),
													r.navigator.navigateNewTab({
														itemUrl: f,
														item: u,
														state: o.getState(),
													}));
											else if (t.shiftKey)
												void 0 !== f &&
													(m.onSelect(
														z(
															{
																event: t,
																item: u,
																itemInputValue:
																	s,
																itemUrl: f,
																refresh: n,
																source: m,
																state: o.getState(),
															},
															a,
														),
													),
													r.navigator.navigateNewWindow(
														{
															itemUrl: f,
															item: u,
															state: o.getState(),
														},
													));
											else if (t.altKey);
											else {
												if (void 0 !== f)
													return (
														m.onSelect(
															z(
																{
																	event: t,
																	item: u,
																	itemInputValue:
																		s,
																	itemUrl: f,
																	refresh: n,
																	source: m,
																	state: o.getState(),
																},
																a,
															),
														),
														void r.navigator.navigate(
															{
																itemUrl: f,
																item: u,
																state: o.getState(),
															},
														)
													);
												U(
													z(
														{
															event: t,
															nextState: {
																isOpen: !1,
															},
															props: r,
															query: s,
															refresh: n,
															store: o,
														},
														a,
													),
												).then(function () {
													m.onSelect(
														z(
															{
																event: t,
																item: u,
																itemInputValue:
																	s,
																itemUrl: f,
																refresh: n,
																source: m,
																state: o.getState(),
															},
															a,
														),
													);
												});
											}
										}
									})(
										W(
											{
												event: e,
												props: t,
												refresh: r,
												store: n,
											},
											o,
										),
									);
								},
								onFocus: a,
								onBlur: function () {
									c || n.dispatch("blur", null);
								},
								onClick: function (r) {
									e.inputElement !==
										t.environment.document.activeElement ||
										n.getState().isOpen ||
										a(r);
								},
							},
							s,
						);
					},
					getPanelProps: function (e) {
						return W(
							{
								onMouseDown: function (e) {
									e.preventDefault();
								},
								onMouseLeave: function () {
									n.dispatch("mouseleave", null);
								},
							},
							e,
						);
					},
					getListProps: function (e) {
						return W(
							{
								role: "listbox",
								"aria-labelledby": "".concat(t.id, "-label"),
								id: "".concat(t.id, "-list"),
							},
							e,
						);
					},
					getItemProps: function (e) {
						var a = e.item,
							c = e.source,
							i = Y(e, ["item", "source"]);
						return W(
							{
								id: ""
									.concat(t.id, "-item-")
									.concat(a.__autocomplete_id),
								role: "option",
								"aria-selected":
									n.getState().activeItemId ===
									a.__autocomplete_id,
								onMouseMove: function (e) {
									if (
										a.__autocomplete_id !==
										n.getState().activeItemId
									) {
										n.dispatch(
											"mousemove",
											a.__autocomplete_id,
										);
										var t = _(n.getState());
										if (
											null !==
												n.getState().activeItemId &&
											t
										) {
											var c = t.item,
												i = t.itemInputValue,
												l = t.itemUrl,
												u = t.source;
											u.onActive(
												W(
													{
														event: e,
														item: c,
														itemInputValue: i,
														itemUrl: l,
														refresh: r,
														source: u,
														state: n.getState(),
													},
													o,
												),
											);
										}
									}
								},
								onMouseDown: function (e) {
									e.preventDefault();
								},
								onClick: function (e) {
									var i = c.getItemInputValue({
											item: a,
											state: n.getState(),
										}),
										l = c.getItemUrl({
											item: a,
											state: n.getState(),
										});
									(l
										? Promise.resolve()
										: U(
												W(
													{
														event: e,
														nextState: {
															isOpen: !1,
														},
														props: t,
														query: i,
														refresh: r,
														store: n,
													},
													o,
												),
											)
									).then(function () {
										c.onSelect(
											W(
												{
													event: e,
													item: a,
													itemInputValue: i,
													itemUrl: l,
													refresh: r,
													source: c,
													state: n.getState(),
												},
												o,
											),
										);
									});
								},
							},
							i,
						);
					},
				};
			}
			function X(e) {
				var t,
					r = e.state;
				return !1 === r.isOpen || null === r.activeItemId
					? null
					: (null === (t = _(r)) || void 0 === t
							? void 0
							: t.itemInputValue) || null;
			}
			function Z(e, t, r, n) {
				if (!r) return null;
				if (e < 0 && (null === t || (null !== n && 0 === t)))
					return r + e;
				var o = (null === t ? -1 : t) + e;
				return o <= -1 || o >= r ? (null === n ? null : 0) : o;
			}
			function ee(e, t) {
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
			function te(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? ee(Object(r), !0).forEach(function (t) {
								re(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: ee(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function re(e, t, r) {
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
			var ne = function (e, t) {
				switch (t.type) {
					case "setActiveItemId":
					case "mousemove":
						return te(te({}, e), {}, { activeItemId: t.payload });
					case "setQuery":
						return te(
							te({}, e),
							{},
							{ query: t.payload, completion: null },
						);
					case "setCollections":
						return te(te({}, e), {}, { collections: t.payload });
					case "setIsOpen":
						return te(te({}, e), {}, { isOpen: t.payload });
					case "setStatus":
						return te(te({}, e), {}, { status: t.payload });
					case "setContext":
						return te(
							te({}, e),
							{},
							{ context: te(te({}, e.context), t.payload) },
						);
					case "ArrowDown":
						var r = te(
							te({}, e),
							{},
							{
								activeItemId: t.payload.hasOwnProperty(
									"nextActiveItemId",
								)
									? t.payload.nextActiveItemId
									: Z(
											1,
											e.activeItemId,
											s(e),
											t.props.defaultActiveItemId,
										),
							},
						);
						return te(
							te({}, r),
							{},
							{ completion: X({ state: r }) },
						);
					case "ArrowUp":
						var n = te(
							te({}, e),
							{},
							{
								activeItemId: Z(
									-1,
									e.activeItemId,
									s(e),
									t.props.defaultActiveItemId,
								),
							},
						);
						return te(
							te({}, n),
							{},
							{ completion: X({ state: n }) },
						);
					case "Escape":
						return e.isOpen
							? te(
									te({}, e),
									{},
									{
										activeItemId: null,
										isOpen: !1,
										completion: null,
									},
								)
							: te(
									te({}, e),
									{},
									{
										activeItemId: null,
										query: "",
										status: "idle",
										collections: [],
									},
								);
					case "submit":
						return te(
							te({}, e),
							{},
							{ activeItemId: null, isOpen: !1, status: "idle" },
						);
					case "reset":
						return te(
							te({}, e),
							{},
							{
								activeItemId:
									!0 === t.props.openOnFocus
										? t.props.defaultActiveItemId
										: null,
								status: "idle",
								query: "",
							},
						);
					case "focus":
						return te(
							te({}, e),
							{},
							{
								activeItemId: t.props.defaultActiveItemId,
								isOpen:
									(t.props.openOnFocus || Boolean(e.query)) &&
									t.props.shouldPanelOpen({ state: e }),
							},
						);
					case "blur":
						return t.props.debug
							? e
							: te(
									te({}, e),
									{},
									{ isOpen: !1, activeItemId: null },
								);
					case "mouseleave":
						return te(
							te({}, e),
							{},
							{ activeItemId: t.props.defaultActiveItemId },
						);
					default:
						return (
							"The reducer action ".concat(
								JSON.stringify(t.type),
								" is not supported.",
							),
							e
						);
				}
			};
			function oe(e, t) {
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
			function ae(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? oe(Object(r), !0).forEach(function (t) {
								ce(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: oe(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function ce(e, t, r) {
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
			function ie(e) {
				var t = [],
					r = (function (e, t) {
						var r,
							n = "undefined" != typeof window ? window : {},
							o = e.plugins || [];
						return O(
							O(
								{
									debug: !1,
									openOnFocus: !1,
									placeholder: "",
									autoFocus: !1,
									defaultActiveItemId: null,
									stallThreshold: 300,
									environment: n,
									shouldPanelOpen: function (e) {
										return s(e.state) > 0;
									},
								},
								e,
							),
							{},
							{
								id:
									null !== (r = e.id) && void 0 !== r
										? r
										: "autocomplete-".concat(f++),
								plugins: o,
								initialState: O(
									{
										activeItemId: null,
										query: "",
										completion: null,
										collections: [],
										isOpen: !1,
										status: "idle",
										context: {},
									},
									e.initialState,
								),
								onStateChange: function (t) {
									var r;
									null === (r = e.onStateChange) ||
										void 0 === r ||
										r.call(e, t),
										o.forEach(function (e) {
											var r;
											return null ===
												(r = e.onStateChange) ||
												void 0 === r
												? void 0
												: r.call(e, t);
										});
								},
								onSubmit: function (t) {
									var r;
									null === (r = e.onSubmit) ||
										void 0 === r ||
										r.call(e, t),
										o.forEach(function (e) {
											var r;
											return null === (r = e.onSubmit) ||
												void 0 === r
												? void 0
												: r.call(e, t);
										});
								},
								onReset: function (t) {
									var r;
									null === (r = e.onReset) ||
										void 0 === r ||
										r.call(e, t),
										o.forEach(function (e) {
											var r;
											return null === (r = e.onReset) ||
												void 0 === r
												? void 0
												: r.call(e, t);
										});
								},
								getSources: function (r) {
									return Promise.all(
										[]
											.concat(
												y(
													o.map(function (e) {
														return e.getSources;
													}),
												),
												[e.getSources],
											)
											.filter(Boolean)
											.map(function (e) {
												return v(e, r);
											}),
									)
										.then(function (e) {
											return c(e);
										})
										.then(function (e) {
											return e.map(function (e) {
												return O(
													O({}, e),
													{},
													{
														onSelect: function (r) {
															e.onSelect(r),
																t.forEach(
																	function (
																		e,
																	) {
																		var t;
																		return null ===
																			(t =
																				e.onSelect) ||
																			void 0 ===
																				t
																			? void 0
																			: t.call(
																					e,
																					r,
																				);
																	},
																);
														},
														onActive: function (r) {
															e.onActive(r),
																t.forEach(
																	function (
																		e,
																	) {
																		var t;
																		return null ===
																			(t =
																				e.onActive) ||
																			void 0 ===
																				t
																			? void 0
																			: t.call(
																					e,
																					r,
																				);
																	},
																);
														},
													},
												);
											});
										});
								},
								navigator: O(
									{
										navigate: function (e) {
											var t = e.itemUrl;
											n.location.assign(t);
										},
										navigateNewTab: function (e) {
											var t = e.itemUrl,
												r = n.open(
													t,
													"_blank",
													"noopener",
												);
											null == r || r.focus();
										},
										navigateNewWindow: function (e) {
											var t = e.itemUrl;
											n.open(t, "_blank", "noopener");
										},
									},
									e.navigator,
								),
							},
						);
					})(e, t),
					n = a(ne, r, function (e) {
						var t = e.prevState,
							n = e.state;
						r.onStateChange(
							ae({ prevState: t, state: n, refresh: u }, o),
						);
					}),
					o = (function (e) {
						var t = e.store;
						return {
							setActiveItemId: function (e) {
								t.dispatch("setActiveItemId", e);
							},
							setQuery: function (e) {
								t.dispatch("setQuery", e);
							},
							setCollections: function (e) {
								var r = 0,
									n = e.map(function (e) {
										return l(
											l({}, e),
											{},
											{
												items: c(e.items).map(
													function (e) {
														return l(
															l({}, e),
															{},
															{
																__autocomplete_id:
																	r++,
															},
														);
													},
												),
											},
										);
									});
								t.dispatch("setCollections", n);
							},
							setIsOpen: function (e) {
								t.dispatch("setIsOpen", e);
							},
							setStatus: function (e) {
								t.dispatch("setStatus", e);
							},
							setContext: function (e) {
								t.dispatch("setContext", e);
							},
						};
					})({ store: n }),
					i = G(ae({ props: r, refresh: u, store: n }, o));
				function u() {
					return U(
						ae(
							{
								event: new Event("input"),
								nextState: { isOpen: n.getState().isOpen },
								props: r,
								query: n.getState().query,
								refresh: u,
								store: n,
							},
							o,
						),
					);
				}
				return (
					r.plugins.forEach(function (e) {
						var r;
						return null === (r = e.subscribe) || void 0 === r
							? void 0
							: r.call(
									e,
									ae(
										ae({}, o),
										{},
										{
											refresh: u,
											onSelect: function (e) {
												t.push({ onSelect: e });
											},
											onActive: function (e) {
												t.push({ onActive: e });
											},
										},
									),
								);
					}),
					ae(ae({ refresh: u }, i), o)
				);
			}
			var le = r(7294);
			function ue() {
				return le.createElement(
					"a",
					{
						href: "https://www.algolia.com/docsearch",
						target: "_blank",
						rel: "noopener noreferrer",
					},
					le.createElement(
						"span",
						{ className: "DocSearch-Label" },
						"Search by",
					),
					le.createElement(
						"svg",
						{ width: "77", height: "19" },
						le.createElement("path", {
							d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
							fill: "currentColor",
							fillRule: "evenodd",
						}),
					),
				);
			}
			function se() {
				return le.createElement(
					le.Fragment,
					null,
					le.createElement(
						"div",
						{ className: "DocSearch-Logo" },
						le.createElement(ue, null),
					),
					le.createElement(
						"ul",
						{ className: "DocSearch-Commands" },
						le.createElement(
							"li",
							null,
							le.createElement(
								"span",
								{ className: "DocSearch-Commands-Key" },
								le.createElement(
									fe,
									null,
									le.createElement("path", {
										d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3",
									}),
								),
							),
							le.createElement(
								"span",
								{ className: "DocSearch-Label" },
								"to select",
							),
						),
						le.createElement(
							"li",
							null,
							le.createElement(
								"span",
								{ className: "DocSearch-Commands-Key" },
								le.createElement(
									fe,
									null,
									le.createElement("path", {
										d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3",
									}),
								),
							),
							le.createElement(
								"span",
								{ className: "DocSearch-Commands-Key" },
								le.createElement(
									fe,
									null,
									le.createElement("path", {
										d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3",
									}),
								),
							),
							le.createElement(
								"span",
								{ className: "DocSearch-Label" },
								"to navigate",
							),
						),
						le.createElement(
							"li",
							null,
							le.createElement(
								"span",
								{ className: "DocSearch-Commands-Key" },
								le.createElement(
									fe,
									null,
									le.createElement("path", {
										d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
									}),
								),
							),
							le.createElement(
								"span",
								{ className: "DocSearch-Label" },
								"to close",
							),
						),
					),
				);
			}
			function fe(e) {
				return le.createElement(
					"svg",
					{ width: "15", height: "15" },
					le.createElement(
						"g",
						{
							fill: "none",
							stroke: "currentColor",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "1.2",
						},
						e.children,
					),
				);
			}
			function me(e) {
				var t = e.hit,
					r = e.children;
				return le.createElement("a", { href: t.url }, r);
			}
			function pe() {
				return le.createElement(
					"svg",
					{
						width: "40",
						height: "40",
						viewBox: "0 0 20 20",
						fill: "none",
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
					},
					le.createElement("path", {
						d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0",
					}),
				);
			}
			function he() {
				return le.createElement(
					"div",
					{ className: "DocSearch-ErrorScreen" },
					le.createElement(
						"div",
						{ className: "DocSearch-Screen-Icon" },
						le.createElement(pe, null),
					),
					le.createElement(
						"p",
						{ className: "DocSearch-Title" },
						"Unable to fetch results",
					),
					le.createElement(
						"p",
						{ className: "DocSearch-Help" },
						"You might want to check your network connection.",
					),
				);
			}
			function de() {
				return le.createElement(
					"svg",
					{
						width: "40",
						height: "40",
						viewBox: "0 0 20 20",
						fill: "none",
						fillRule: "evenodd",
						stroke: "currentColor",
						strokeLinecap: "round",
						strokeLinejoin: "round",
					},
					le.createElement("path", {
						d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2",
					}),
				);
			}
			function ve(e) {
				return (
					(function (e) {
						if (Array.isArray(e)) return ye(e);
					})(e) ||
					(function (e) {
						if (
							("undefined" != typeof Symbol &&
								null != e[Symbol.iterator]) ||
							null != e["@@iterator"]
						)
							return Array.from(e);
					})(e) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return ye(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r &&
							e.constructor &&
							(r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if (
							"Arguments" === r ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
						)
							return ye(e, t);
					})(e) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function ye(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function ge(e) {
				var t = e.state.context.searchSuggestions;
				return le.createElement(
					"div",
					{ className: "DocSearch-NoResults" },
					le.createElement(
						"div",
						{ className: "DocSearch-Screen-Icon" },
						le.createElement(de, null),
					),
					le.createElement(
						"p",
						{ className: "DocSearch-Title" },
						'No results for "',
						le.createElement("strong", null, e.state.query),
						'"',
					),
					t &&
						t.length > 0 &&
						le.createElement(
							"div",
							{ className: "DocSearch-NoResults-Prefill-List" },
							le.createElement(
								"p",
								{ className: "DocSearch-Help" },
								"Try searching for:",
							),
							le.createElement(
								"ul",
								null,
								t.slice(0, 3).reduce(function (t, r) {
									return [].concat(ve(t), [
										le.createElement(
											"li",
											{ key: r },
											le.createElement(
												"button",
												{
													className:
														"DocSearch-Prefill",
													key: r,
													onClick: function () {
														e.setQuery(
															r.toLowerCase() +
																" ",
														),
															e.refresh(),
															e.inputRef.current.focus();
													},
												},
												r,
											),
										),
									]);
								}, []),
							),
						),
					le.createElement(
						"p",
						{ className: "DocSearch-Help" },
						"Believe this query should return results?",
						" ",
						le.createElement(
							"a",
							{
								href: "https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=["
									.concat(
										e.indexName,
										']+Missing+results+for+query+"',
									)
									.concat(e.state.query, '"'),
								target: "_blank",
								rel: "noopener noreferrer",
							},
							"Let us know",
						),
						".",
					),
				);
			}
			function be(e) {
				switch (e.type) {
					case "lvl1":
						return le.createElement(Oe, null);
					case "content":
						return le.createElement(Ee, null);
					default:
						return le.createElement(Se, null);
				}
			}
			function Oe() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement("path", {
						d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
						stroke: "currentColor",
						fill: "none",
						fillRule: "evenodd",
						strokeLinejoin: "round",
					}),
				);
			}
			function Se() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement("path", {
						d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
						stroke: "currentColor",
						fill: "none",
						fillRule: "evenodd",
						strokeLinecap: "round",
						strokeLinejoin: "round",
					}),
				);
			}
			function Ee() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement("path", {
						d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
						stroke: "currentColor",
						fill: "none",
						fillRule: "evenodd",
						strokeLinejoin: "round",
					}),
				);
			}
			function we() {
				return le.createElement(
					"svg",
					{
						className: "DocSearch-Hit-Select-Icon",
						width: "20",
						height: "20",
						viewBox: "0 0 20 20",
					},
					le.createElement(
						"g",
						{
							stroke: "currentColor",
							fill: "none",
							fillRule: "evenodd",
							strokeLinecap: "round",
							strokeLinejoin: "round",
						},
						le.createElement("path", {
							d: "M18 3v4c0 2-2 4-4 4H2",
						}),
						le.createElement("path", { d: "M8 17l-6-6 6-6" }),
					),
				);
			}
			function je(e, t) {
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
			function Pe(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? je(Object(r), !0).forEach(function (t) {
								Ie(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: je(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function Ie(e, t, r) {
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
			function De(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			function Ce(e, t) {
				return t.split(".").reduce(function (e, t) {
					return e && e[t];
				}, e);
			}
			function ke(e) {
				var t = e.hit,
					r = e.attribute,
					n = e.tagName,
					o = void 0 === n ? "span" : n,
					a = De(e, ["hit", "attribute", "tagName"]);
				return (0, le.createElement)(
					o,
					Pe(
						Pe({}, a),
						{},
						{
							dangerouslySetInnerHTML: {
								__html:
									Ce(
										t,
										"_snippetResult.".concat(r, ".value"),
									) || Ce(t, r),
							},
						},
					),
				);
			}
			function Ne(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var r =
							null == e
								? null
								: ("undefined" != typeof Symbol &&
										e[Symbol.iterator]) ||
									e["@@iterator"];
						if (null == r) return;
						var n,
							o,
							a = [],
							c = !0,
							i = !1;
						try {
							for (
								r = r.call(e);
								!(c = (n = r.next()).done) &&
								(a.push(n.value), !t || a.length !== t);
								c = !0
							);
						} catch (l) {
							(i = !0), (o = l);
						} finally {
							try {
								c || null == r.return || r.return();
							} finally {
								if (i) throw o;
							}
						}
						return a;
					})(e, t) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return Ae(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r &&
							e.constructor &&
							(r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if (
							"Arguments" === r ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
						)
							return Ae(e, t);
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function Ae(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function xe() {
				return (
					(xe =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					xe.apply(this, arguments)
				);
			}
			function qe(e) {
				return e.collection && 0 !== e.collection.items.length
					? le.createElement(
							"section",
							{ className: "DocSearch-Hits" },
							le.createElement(
								"div",
								{ className: "DocSearch-Hit-source" },
								e.title,
							),
							le.createElement(
								"ul",
								e.getListProps(),
								e.collection.items.map(function (t, r) {
									return le.createElement(
										Re,
										xe(
											{
												key: [e.title, t.objectID].join(
													":",
												),
												item: t,
												index: r,
											},
											e,
										),
									);
								}),
							),
						)
					: null;
			}
			function Re(e) {
				var t = e.item,
					r = e.index,
					n = e.renderIcon,
					o = e.renderAction,
					a = e.getItemProps,
					c = e.onItemClick,
					i = e.collection,
					l = e.hitComponent,
					u = Ne(le.useState(!1), 2),
					s = u[0],
					f = u[1],
					m = Ne(le.useState(!1), 2),
					p = m[0],
					h = m[1],
					d = le.useRef(null),
					v = l;
				return le.createElement(
					"li",
					xe(
						{
							className: [
								"DocSearch-Hit",
								t.__docsearch_parent && "DocSearch-Hit--Child",
								s && "DocSearch-Hit--deleting",
								p && "DocSearch-Hit--favoriting",
							]
								.filter(Boolean)
								.join(" "),
							onTransitionEnd: function () {
								d.current && d.current();
							},
						},
						a({
							item: t,
							source: i.source,
							onClick: function () {
								c(t);
							},
						}),
					),
					le.createElement(
						v,
						{ hit: t },
						le.createElement(
							"div",
							{ className: "DocSearch-Hit-Container" },
							n({ item: t, index: r }),
							t.hierarchy[t.type] &&
								"lvl1" === t.type &&
								le.createElement(
									"div",
									{
										className:
											"DocSearch-Hit-content-wrapper",
									},
									le.createElement(ke, {
										className: "DocSearch-Hit-title",
										hit: t,
										attribute: "hierarchy.lvl1",
									}),
									t.content &&
										le.createElement(ke, {
											className: "DocSearch-Hit-path",
											hit: t,
											attribute: "content",
										}),
								),
							t.hierarchy[t.type] &&
								("lvl2" === t.type ||
									"lvl3" === t.type ||
									"lvl4" === t.type ||
									"lvl5" === t.type ||
									"lvl6" === t.type) &&
								le.createElement(
									"div",
									{
										className:
											"DocSearch-Hit-content-wrapper",
									},
									le.createElement(ke, {
										className: "DocSearch-Hit-title",
										hit: t,
										attribute: "hierarchy.".concat(t.type),
									}),
									le.createElement(ke, {
										className: "DocSearch-Hit-path",
										hit: t,
										attribute: "hierarchy.lvl1",
									}),
								),
							"content" === t.type &&
								le.createElement(
									"div",
									{
										className:
											"DocSearch-Hit-content-wrapper",
									},
									le.createElement(ke, {
										className: "DocSearch-Hit-title",
										hit: t,
										attribute: "content",
									}),
									le.createElement(ke, {
										className: "DocSearch-Hit-path",
										hit: t,
										attribute: "hierarchy.lvl1",
									}),
								),
							o({
								item: t,
								runDeleteTransition: function (e) {
									f(!0), (d.current = e);
								},
								runFavoriteTransition: function (e) {
									h(!0), (d.current = e);
								},
							}),
						),
					),
				);
			}
			var _e = /(<mark>|<\/mark>)/g,
				Te = RegExp(_e.source);
			function He(e) {
				var t,
					r,
					n,
					o,
					a,
					c = e;
				if (!c.__docsearch_parent && !e._highlightResult)
					return e.hierarchy.lvl0;
				var i = (
					(c.__docsearch_parent
						? null === (t = c.__docsearch_parent) ||
							void 0 === t ||
							null === (r = t._highlightResult) ||
							void 0 === r ||
							null === (n = r.hierarchy) ||
							void 0 === n
							? void 0
							: n.lvl0
						: null === (o = e._highlightResult) ||
							  void 0 === o ||
							  null === (a = o.hierarchy) ||
							  void 0 === a
							? void 0
							: a.lvl0) || {}
				).value;
				return i && Te.test(i) ? i.replace(_e, "") : i;
			}
			function Me() {
				return (
					(Me =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					Me.apply(this, arguments)
				);
			}
			function Le(e) {
				return le.createElement(
					"div",
					{ className: "DocSearch-Dropdown-Container" },
					e.state.collections.map(function (t, r) {
						if (0 === t.items.length) return null;
						var n = He(t.items[0]);
						return le.createElement(
							qe,
							Me({}, e, {
								key: r,
								title: n,
								collection: t,
								renderIcon: function (e) {
									var r,
										n = e.item,
										o = e.index;
									return le.createElement(
										le.Fragment,
										null,
										n.__docsearch_parent &&
											le.createElement(
												"svg",
												{
													className:
														"DocSearch-Hit-Tree",
													viewBox: "0 0 24 54",
												},
												le.createElement(
													"g",
													{
														stroke: "currentColor",
														fill: "none",
														fillRule: "evenodd",
														strokeLinecap: "round",
														strokeLinejoin: "round",
													},
													n.__docsearch_parent !==
														(null ===
															(r =
																t.items[
																	o + 1
																]) ||
														void 0 === r
															? void 0
															: r.__docsearch_parent)
														? le.createElement(
																"path",
																{
																	d: "M8 6v21M20 27H8.3",
																},
															)
														: le.createElement(
																"path",
																{
																	d: "M8 6v42M20 27H8.3",
																},
															),
												),
											),
										le.createElement(
											"div",
											{ className: "DocSearch-Hit-icon" },
											le.createElement(be, {
												type: n.type,
											}),
										),
									);
								},
								renderAction: function () {
									return le.createElement(
										"div",
										{ className: "DocSearch-Hit-action" },
										le.createElement(we, null),
									);
								},
							}),
						);
					}),
					e.resultsFooterComponent &&
						le.createElement(
							"section",
							{ className: "DocSearch-HitsFooter" },
							le.createElement(e.resultsFooterComponent, {
								state: e.state,
							}),
						),
				);
			}
			function Fe() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement(
						"g",
						{
							stroke: "currentColor",
							fill: "none",
							fillRule: "evenodd",
							strokeLinecap: "round",
							strokeLinejoin: "round",
						},
						le.createElement("path", {
							d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0",
						}),
						le.createElement("path", {
							d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13",
						}),
					),
				);
			}
			function Ue() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement("path", {
						d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
						stroke: "currentColor",
						fill: "none",
						fillRule: "evenodd",
						strokeLinejoin: "round",
					}),
				);
			}
			function Ve() {
				return le.createElement(
					"svg",
					{ width: "20", height: "20", viewBox: "0 0 20 20" },
					le.createElement("path", {
						d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
						stroke: "currentColor",
						fill: "none",
						fillRule: "evenodd",
						strokeLinecap: "round",
						strokeLinejoin: "round",
					}),
				);
			}
			function ze() {
				return (
					(ze =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					ze.apply(this, arguments)
				);
			}
			function Be(e) {
				return "idle" === e.state.status && !1 === e.hasCollections
					? e.disableUserPersonalization
						? null
						: le.createElement(
								"div",
								{ className: "DocSearch-StartScreen" },
								le.createElement(
									"p",
									{ className: "DocSearch-Help" },
									"No recent searches",
								),
							)
					: !1 === e.hasCollections
						? null
						: le.createElement(
								"div",
								{ className: "DocSearch-Dropdown-Container" },
								le.createElement(
									qe,
									ze({}, e, {
										title: "Recent",
										collection: e.state.collections[0],
										renderIcon: function () {
											return le.createElement(
												"div",
												{
													className:
														"DocSearch-Hit-icon",
												},
												le.createElement(Fe, null),
											);
										},
										renderAction: function (t) {
											var r = t.item,
												n = t.runFavoriteTransition,
												o = t.runDeleteTransition;
											return le.createElement(
												le.Fragment,
												null,
												le.createElement(
													"div",
													{
														className:
															"DocSearch-Hit-action",
													},
													le.createElement(
														"button",
														{
															className:
																"DocSearch-Hit-action-button",
															title: "Save this search",
															onClick: function (
																t,
															) {
																t.preventDefault(),
																	t.stopPropagation(),
																	n(
																		function () {
																			e.favoriteSearches.add(
																				r,
																			),
																				e.recentSearches.remove(
																					r,
																				),
																				e.refresh();
																		},
																	);
															},
														},
														le.createElement(
															Ue,
															null,
														),
													),
												),
												le.createElement(
													"div",
													{
														className:
															"DocSearch-Hit-action",
													},
													le.createElement(
														"button",
														{
															className:
																"DocSearch-Hit-action-button",
															title: "Remove this search from history",
															onClick: function (
																t,
															) {
																t.preventDefault(),
																	t.stopPropagation(),
																	o(
																		function () {
																			e.recentSearches.remove(
																				r,
																			),
																				e.refresh();
																		},
																	);
															},
														},
														le.createElement(
															Ve,
															null,
														),
													),
												),
											);
										},
									}),
								),
								le.createElement(
									qe,
									ze({}, e, {
										title: "Favorites",
										collection: e.state.collections[1],
										renderIcon: function () {
											return le.createElement(
												"div",
												{
													className:
														"DocSearch-Hit-icon",
												},
												le.createElement(Ue, null),
											);
										},
										renderAction: function (t) {
											var r = t.item,
												n = t.runDeleteTransition;
											return le.createElement(
												"div",
												{
													className:
														"DocSearch-Hit-action",
												},
												le.createElement(
													"button",
													{
														className:
															"DocSearch-Hit-action-button",
														title: "Remove this search from favorites",
														onClick: function (t) {
															t.preventDefault(),
																t.stopPropagation(),
																n(function () {
																	e.favoriteSearches.remove(
																		r,
																	),
																		e.refresh();
																});
														},
													},
													le.createElement(Ve, null),
												),
											);
										},
									}),
								),
							);
			}
			function Je() {
				return (
					(Je =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					Je.apply(this, arguments)
				);
			}
			var Ke = le.memo(
				function (e) {
					if ("error" === e.state.status)
						return le.createElement(he, null);
					var t = e.state.collections.some(function (e) {
						return e.items.length > 0;
					});
					return e.state.query
						? !1 === t
							? le.createElement(ge, e)
							: le.createElement(Le, e)
						: le.createElement(
								Be,
								Je({}, e, { hasCollections: t }),
							);
				},
				function (e, t) {
					return (
						"loading" === t.state.status ||
						"stalled" === t.state.status
					);
				},
			);
			function $e() {
				return le.createElement(
					"svg",
					{
						viewBox: "0 0 38 38",
						stroke: "currentColor",
						strokeOpacity: ".5",
					},
					le.createElement(
						"g",
						{ fill: "none", fillRule: "evenodd" },
						le.createElement(
							"g",
							{ transform: "translate(1 1)", strokeWidth: "2" },
							le.createElement("circle", {
								strokeOpacity: ".3",
								cx: "18",
								cy: "18",
								r: "18",
							}),
							le.createElement(
								"path",
								{ d: "M36 18c0-9.94-8.06-18-18-18" },
								le.createElement("animateTransform", {
									attributeName: "transform",
									type: "rotate",
									from: "0 18 18",
									to: "360 18 18",
									dur: "1s",
									repeatCount: "indefinite",
								}),
							),
						),
					),
				);
			}
			var We = r(830);
			function Qe() {
				return (
					(Qe =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					Qe.apply(this, arguments)
				);
			}
			function Ye(e) {
				var t = e.getFormProps({
					inputElement: e.inputRef.current,
				}).onReset;
				return (
					le.useEffect(
						function () {
							e.autoFocus &&
								e.inputRef.current &&
								e.inputRef.current.focus();
						},
						[e.autoFocus, e.inputRef],
					),
					le.useEffect(
						function () {
							e.isFromSelection &&
								e.inputRef.current &&
								e.inputRef.current.select();
						},
						[e.isFromSelection, e.inputRef],
					),
					le.createElement(
						le.Fragment,
						null,
						le.createElement(
							"form",
							{
								className: "DocSearch-Form",
								onSubmit: function (e) {
									e.preventDefault();
								},
								onReset: t,
							},
							le.createElement(
								"label",
								Qe(
									{ className: "DocSearch-MagnifierLabel" },
									e.getLabelProps(),
								),
								le.createElement(We.W, null),
							),
							le.createElement(
								"div",
								{ className: "DocSearch-LoadingIndicator" },
								le.createElement($e, null),
							),
							le.createElement(
								"input",
								Qe(
									{
										className: "DocSearch-Input",
										ref: e.inputRef,
									},
									e.getInputProps({
										inputElement: e.inputRef.current,
										autoFocus: e.autoFocus,
										maxLength: 64,
									}),
								),
							),
							le.createElement(
								"button",
								{
									type: "reset",
									title: "Clear the query",
									className: "DocSearch-Reset",
									hidden: !e.state.query,
								},
								le.createElement(Ve, null),
							),
						),
						le.createElement(
							"button",
							{
								className: "DocSearch-Cancel",
								onClick: e.onClose,
							},
							"Cancel",
						),
					)
				);
			}
			function Ge(e, t) {
				if (null == e) return {};
				var r,
					n,
					o = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							o = {},
							a = Object.keys(e);
						for (n = 0; n < a.length; n++)
							(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
						return o;
					})(e, t);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (n = 0; n < a.length; n++)
						(r = a[n]),
							t.indexOf(r) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									e,
									r,
								) &&
									(o[r] = e[r]));
				}
				return o;
			}
			function Xe(e) {
				return !1 ===
					(function () {
						var e = "__TEST_KEY__";
						try {
							return (
								localStorage.setItem(e, ""),
								localStorage.removeItem(e),
								!0
							);
						} catch (t) {
							return !1;
						}
					})()
					? {
							setItem: function () {},
							getItem: function () {
								return [];
							},
						}
					: {
							setItem: function (t) {
								return window.localStorage.setItem(
									e,
									JSON.stringify(t),
								);
							},
							getItem: function () {
								var t = window.localStorage.getItem(e);
								return t ? JSON.parse(t) : [];
							},
						};
			}
			function Ze(e) {
				var t = e.key,
					r = e.limit,
					n = void 0 === r ? 5 : r,
					o = Xe(t),
					a = o.getItem().slice(0, n);
				return {
					add: function (e) {
						var t = e,
							r =
								(t._highlightResult,
								t._snippetResult,
								Ge(t, ["_highlightResult", "_snippetResult"])),
							c = a.findIndex(function (e) {
								return e.objectID === r.objectID;
							});
						c > -1 && a.splice(c, 1),
							a.unshift(r),
							(a = a.slice(0, n)),
							o.setItem(a);
					},
					remove: function (e) {
						(a = a.filter(function (t) {
							return t.objectID !== e.objectID;
						})),
							o.setItem(a);
					},
					getAll: function () {
						return a;
					},
				};
			}
			function et(e) {
				const t = `algoliasearch-client-js-${e.key}`;
				let r;
				const n = () => (
						void 0 === r &&
							(r = e.localStorage || window.localStorage),
						r
					),
					o = () => JSON.parse(n().getItem(t) || "{}");
				return {
					get: (e, t, r = { miss: () => Promise.resolve() }) =>
						Promise.resolve()
							.then(() => {
								const r = JSON.stringify(e),
									n = o()[r];
								return Promise.all([n || t(), void 0 !== n]);
							})
							.then(([e, t]) => Promise.all([e, t || r.miss(e)]))
							.then(([e]) => e),
					set: (e, r) =>
						Promise.resolve().then(() => {
							const a = o();
							return (
								(a[JSON.stringify(e)] = r),
								n().setItem(t, JSON.stringify(a)),
								r
							);
						}),
					delete: (e) =>
						Promise.resolve().then(() => {
							const r = o();
							delete r[JSON.stringify(e)],
								n().setItem(t, JSON.stringify(r));
						}),
					clear: () =>
						Promise.resolve().then(() => {
							n().removeItem(t);
						}),
				};
			}
			function tt(e) {
				const t = [...e.caches],
					r = t.shift();
				return void 0 === r
					? {
							get: (
								e,
								t,
								r = { miss: () => Promise.resolve() },
							) =>
								t()
									.then((e) => Promise.all([e, r.miss(e)]))
									.then(([e]) => e),
							set: (e, t) => Promise.resolve(t),
							delete: (e) => Promise.resolve(),
							clear: () => Promise.resolve(),
						}
					: {
							get: (
								e,
								n,
								o = { miss: () => Promise.resolve() },
							) =>
								r
									.get(e, n, o)
									.catch(() =>
										tt({ caches: t }).get(e, n, o),
									),
							set: (e, n) =>
								r
									.set(e, n)
									.catch(() => tt({ caches: t }).set(e, n)),
							delete: (e) =>
								r
									.delete(e)
									.catch(() => tt({ caches: t }).delete(e)),
							clear: () =>
								r
									.clear()
									.catch(() => tt({ caches: t }).clear()),
						};
			}
			function rt(e = { serializable: !0 }) {
				let t = {};
				return {
					get(r, n, o = { miss: () => Promise.resolve() }) {
						const a = JSON.stringify(r);
						if (a in t)
							return Promise.resolve(
								e.serializable ? JSON.parse(t[a]) : t[a],
							);
						const c = n(),
							i = (o && o.miss) || (() => Promise.resolve());
						return c.then((e) => i(e)).then(() => c);
					},
					set: (r, n) => (
						(t[JSON.stringify(r)] = e.serializable
							? JSON.stringify(n)
							: n),
						Promise.resolve(n)
					),
					delete: (e) => (
						delete t[JSON.stringify(e)], Promise.resolve()
					),
					clear: () => ((t = {}), Promise.resolve()),
				};
			}
			function nt(e) {
				let t = e.length - 1;
				for (; t > 0; t--) {
					const r = Math.floor(Math.random() * (t + 1)),
						n = e[t];
					(e[t] = e[r]), (e[r] = n);
				}
				return e;
			}
			function ot(e, t) {
				return t
					? (Object.keys(t).forEach((r) => {
							e[r] = t[r](e);
						}),
						e)
					: e;
			}
			function at(e, ...t) {
				let r = 0;
				return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
			}
			const ct = "4.11.0",
				it = { WithinQueryParameters: 0, WithinHeaders: 1 };
			function lt(e, t) {
				const r = e || {},
					n = r.data || {};
				return (
					Object.keys(r).forEach((e) => {
						-1 ===
							[
								"timeout",
								"headers",
								"queryParameters",
								"data",
								"cacheable",
							].indexOf(e) && (n[e] = r[e]);
					}),
					{
						data: Object.entries(n).length > 0 ? n : void 0,
						timeout: r.timeout || t,
						headers: r.headers || {},
						queryParameters: r.queryParameters || {},
						cacheable: r.cacheable,
					}
				);
			}
			const ut = { Read: 1, Write: 2, Any: 3 },
				st = 1,
				ft = 2,
				mt = 3,
				pt = 12e4;
			function ht(e, t = st) {
				return { ...e, status: t, lastUpdate: Date.now() };
			}
			function dt(e) {
				return "string" == typeof e
					? { protocol: "https", url: e, accept: ut.Any }
					: {
							protocol: e.protocol || "https",
							url: e.url,
							accept: e.accept || ut.Any,
						};
			}
			const vt = "GET",
				yt = "POST";
			function gt(e, t) {
				return Promise.all(
					t.map((t) => e.get(t, () => Promise.resolve(ht(t)))),
				).then((e) => {
					const r = e.filter((e) =>
							(function (e) {
								return (
									e.status === st ||
									Date.now() - e.lastUpdate > pt
								);
							})(e),
						),
						n = e.filter((e) =>
							(function (e) {
								return (
									e.status === mt &&
									Date.now() - e.lastUpdate <= pt
								);
							})(e),
						),
						o = [...r, ...n];
					return {
						getTimeout: (e, t) =>
							(0 === n.length && 0 === e ? 1 : n.length + 3 + e) *
							t,
						statelessHosts: o.length > 0 ? o.map((e) => dt(e)) : t,
					};
				});
			}
			function bt(e, t, r, n) {
				const o = [],
					a = (function (e, t) {
						if (
							e.method === vt ||
							(void 0 === e.data && void 0 === t.data)
						)
							return;
						const r = Array.isArray(e.data)
							? e.data
							: { ...e.data, ...t.data };
						return JSON.stringify(r);
					})(r, n),
					c = (function (e, t) {
						const r = { ...e.headers, ...t.headers },
							n = {};
						return (
							Object.keys(r).forEach((e) => {
								const t = r[e];
								n[e.toLowerCase()] = t;
							}),
							n
						);
					})(e, n),
					i = r.method,
					l = r.method !== vt ? {} : { ...r.data, ...n.data },
					u = {
						"x-algolia-agent": e.userAgent.value,
						...e.queryParameters,
						...l,
						...n.queryParameters,
					};
				let s = 0;
				const f = (t, l) => {
					const m = t.pop();
					if (void 0 === m)
						throw {
							name: "RetryError",
							message:
								"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
							transporterStackTrace: wt(o),
						};
					const p = {
							data: a,
							headers: c,
							method: i,
							url: St(m, r.path, u),
							connectTimeout: l(s, e.timeouts.connect),
							responseTimeout: l(s, n.timeout),
						},
						h = (e) => {
							const r = {
								request: p,
								response: e,
								host: m,
								triesLeft: t.length,
							};
							return o.push(r), r;
						},
						d = {
							onSuccess: (e) =>
								(function (e) {
									try {
										return JSON.parse(e.content);
									} catch (t) {
										throw (function (e, t) {
											return {
												name: "DeserializationError",
												message: e,
												response: t,
											};
										})(t.message, e);
									}
								})(e),
							onRetry(r) {
								const n = h(r);
								return (
									r.isTimedOut && s++,
									Promise.all([
										e.logger.info(
											"Retryable failure",
											jt(n),
										),
										e.hostsCache.set(
											m,
											ht(m, r.isTimedOut ? mt : ft),
										),
									]).then(() => f(t, l))
								);
							},
							onFail(e) {
								throw (
									(h(e),
									(function ({ content: e, status: t }, r) {
										let n = e;
										try {
											n = JSON.parse(e).message;
										} catch (o) {}
										return (function (e, t, r) {
											return {
												name: "ApiError",
												message: e,
												status: t,
												transporterStackTrace: r,
											};
										})(n, t, r);
									})(e, wt(o)))
								);
							},
						};
					return e.requester.send(p).then((e) =>
						((e, t) =>
							((e) => {
								const t = e.status;
								return (
									e.isTimedOut ||
									(({ isTimedOut: e, status: t }) =>
										!e && 0 == ~~t)(e) ||
									(2 != ~~(t / 100) && 4 != ~~(t / 100))
								);
							})(e)
								? t.onRetry(e)
								: (({ status: e }) => 2 == ~~(e / 100))(e)
									? t.onSuccess(e)
									: t.onFail(e))(e, d),
					);
				};
				return gt(e.hostsCache, t).then((e) =>
					f([...e.statelessHosts].reverse(), e.getTimeout),
				);
			}
			function Ot(e) {
				const t = {
					value: `Algolia for JavaScript (${e})`,
					add(e) {
						const r = `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ""}`;
						return (
							-1 === t.value.indexOf(r) &&
								(t.value = `${t.value}${r}`),
							t
						);
					},
				};
				return t;
			}
			function St(e, t, r) {
				const n = Et(r);
				let o = `${e.protocol}://${e.url}/${"/" === t.charAt(0) ? t.substr(1) : t}`;
				return n.length && (o += `?${n}`), o;
			}
			function Et(e) {
				return Object.keys(e)
					.map((t) => {
						return at(
							"%s=%s",
							t,
							((r = e[t]),
							"[object Object]" ===
								Object.prototype.toString.call(r) ||
							"[object Array]" ===
								Object.prototype.toString.call(r)
								? JSON.stringify(e[t])
								: e[t]),
						);
						var r;
					})
					.join("&");
			}
			function wt(e) {
				return e.map((e) => jt(e));
			}
			function jt(e) {
				const t = e.request.headers["x-algolia-api-key"]
					? { "x-algolia-api-key": "*****" }
					: {};
				return {
					...e,
					request: {
						...e.request,
						headers: { ...e.request.headers, ...t },
					},
				};
			}
			const Pt = (e) => {
					const t = e.appId,
						r = (function (e, t, r) {
							const n = {
								"x-algolia-api-key": r,
								"x-algolia-application-id": t,
							};
							return {
								headers: () =>
									e === it.WithinHeaders ? n : {},
								queryParameters: () =>
									e === it.WithinQueryParameters ? n : {},
							};
						})(
							void 0 !== e.authMode
								? e.authMode
								: it.WithinHeaders,
							t,
							e.apiKey,
						),
						n = (function (e) {
							const {
									hostsCache: t,
									logger: r,
									requester: n,
									requestsCache: o,
									responsesCache: a,
									timeouts: c,
									userAgent: i,
									hosts: l,
									queryParameters: u,
									headers: s,
								} = e,
								f = {
									hostsCache: t,
									logger: r,
									requester: n,
									requestsCache: o,
									responsesCache: a,
									timeouts: c,
									userAgent: i,
									headers: s,
									queryParameters: u,
									hosts: l.map((e) => dt(e)),
									read(e, t) {
										const r = lt(t, f.timeouts.read),
											n = () =>
												bt(
													f,
													f.hosts.filter(
														(e) =>
															0 !=
															(e.accept &
																ut.Read),
													),
													e,
													r,
												);
										if (
											!0 !==
											(void 0 !== r.cacheable
												? r.cacheable
												: e.cacheable)
										)
											return n();
										const o = {
											request: e,
											mappedRequestOptions: r,
											transporter: {
												queryParameters:
													f.queryParameters,
												headers: f.headers,
											},
										};
										return f.responsesCache.get(
											o,
											() =>
												f.requestsCache.get(o, () =>
													f.requestsCache
														.set(o, n())
														.then(
															(e) =>
																Promise.all([
																	f.requestsCache.delete(
																		o,
																	),
																	e,
																]),
															(e) =>
																Promise.all([
																	f.requestsCache.delete(
																		o,
																	),
																	Promise.reject(
																		e,
																	),
																]),
														)
														.then(([e, t]) => t),
												),
											{
												miss: (e) =>
													f.responsesCache.set(o, e),
											},
										);
									},
									write: (e, t) =>
										bt(
											f,
											f.hosts.filter(
												(e) =>
													0 != (e.accept & ut.Write),
											),
											e,
											lt(t, f.timeouts.write),
										),
								};
							return f;
						})({
							hosts: [
								{
									url: `${t}-dsn.algolia.net`,
									accept: ut.Read,
								},
								{ url: `${t}.algolia.net`, accept: ut.Write },
							].concat(
								nt([
									{ url: `${t}-1.algolianet.com` },
									{ url: `${t}-2.algolianet.com` },
									{ url: `${t}-3.algolianet.com` },
								]),
							),
							...e,
							headers: {
								...r.headers(),
								"content-type":
									"application/x-www-form-urlencoded",
								...e.headers,
							},
							queryParameters: {
								...r.queryParameters(),
								...e.queryParameters,
							},
						}),
						o = {
							transporter: n,
							appId: t,
							addAlgoliaAgent(e, t) {
								n.userAgent.add({ segment: e, version: t });
							},
							clearCache: () =>
								Promise.all([
									n.requestsCache.clear(),
									n.responsesCache.clear(),
								]).then(() => {}),
						};
					return ot(o, e.methods);
				},
				It = (e) => (t, r) =>
					t.method === vt
						? e.transporter.read(t, r)
						: e.transporter.write(t, r),
				Dt =
					(e) =>
					(t, r = {}) =>
						ot(
							{
								transporter: e.transporter,
								appId: e.appId,
								indexName: t,
							},
							r.methods,
						),
				Ct = (e) => (t, r) => {
					const n = t.map((e) => ({
						...e,
						params: Et(e.params || {}),
					}));
					return e.transporter.read(
						{
							method: yt,
							path: "1/indexes/*/queries",
							data: { requests: n },
							cacheable: !0,
						},
						r,
					);
				},
				kt = (e) => (t, r) =>
					Promise.all(
						t.map((t) => {
							const {
								facetName: n,
								facetQuery: o,
								...a
							} = t.params;
							return Dt(e)(t.indexName, {
								methods: { searchForFacetValues: xt },
							}).searchForFacetValues(n, o, { ...r, ...a });
						}),
					),
				Nt = (e) => (t, r, n) =>
					e.transporter.read(
						{
							method: yt,
							path: at("1/answers/%s/prediction", e.indexName),
							data: { query: t, queryLanguages: r },
							cacheable: !0,
						},
						n,
					),
				At = (e) => (t, r) =>
					e.transporter.read(
						{
							method: yt,
							path: at("1/indexes/%s/query", e.indexName),
							data: { query: t },
							cacheable: !0,
						},
						r,
					),
				xt = (e) => (t, r, n) =>
					e.transporter.read(
						{
							method: yt,
							path: at(
								"1/indexes/%s/facets/%s/query",
								e.indexName,
								t,
							),
							data: { facetQuery: r },
							cacheable: !0,
						},
						n,
					),
				qt = 1,
				Rt = 2,
				_t = 3;
			function Tt(e, t, r) {
				const n = {
					appId: e,
					apiKey: t,
					timeouts: { connect: 1, read: 2, write: 30 },
					requester: {
						send: (e) =>
							new Promise((t) => {
								const r = new XMLHttpRequest();
								r.open(e.method, e.url, !0),
									Object.keys(e.headers).forEach((t) =>
										r.setRequestHeader(t, e.headers[t]),
									);
								const n = (e, n) =>
										setTimeout(() => {
											r.abort(),
												t({
													status: 0,
													content: n,
													isTimedOut: !0,
												});
										}, 1e3 * e),
									o = n(
										e.connectTimeout,
										"Connection timeout",
									);
								let a;
								(r.onreadystatechange = () => {
									r.readyState > r.OPENED &&
										void 0 === a &&
										(clearTimeout(o),
										(a = n(
											e.responseTimeout,
											"Socket timeout",
										)));
								}),
									(r.onerror = () => {
										0 === r.status &&
											(clearTimeout(o),
											clearTimeout(a),
											t({
												content:
													r.responseText ||
													"Network request failed",
												status: r.status,
												isTimedOut: !1,
											}));
									}),
									(r.onload = () => {
										clearTimeout(o),
											clearTimeout(a),
											t({
												content: r.responseText,
												status: r.status,
												isTimedOut: !1,
											});
									}),
									r.send(e.data);
							}),
					},
					logger:
						((o = _t),
						{
							debug: (e, t) => (
								qt >= o && console.debug(e, t),
								Promise.resolve()
							),
							info: (e, t) => (
								Rt >= o && console.info(e, t), Promise.resolve()
							),
							error: (e, t) => (
								console.error(e, t), Promise.resolve()
							),
						}),
					responsesCache: rt(),
					requestsCache: rt({ serializable: !1 }),
					hostsCache: tt({
						caches: [et({ key: `4.11.0-${e}` }), rt()],
					}),
					userAgent: Ot(ct).add({
						segment: "Browser",
						version: "lite",
					}),
					authMode: it.WithinQueryParameters,
				};
				var o;
				return Pt({
					...n,
					...r,
					methods: {
						search: Ct,
						searchForFacetValues: kt,
						multipleQueries: Ct,
						multipleSearchForFacetValues: kt,
						customRequest: It,
						initIndex: (e) => (t) =>
							Dt(e)(t, {
								methods: {
									search: At,
									searchForFacetValues: xt,
									findAnswers: Nt,
								},
							}),
					},
				});
			}
			Tt.version = ct;
			const Ht = Tt;
			var Mt = "3.0.0-alpha.41";
			function Lt() {}
			function Ft(e) {
				return e;
			}
			function Ut(e, t) {
				return e.reduce(function (e, r) {
					var n = t(r);
					return (
						e.hasOwnProperty(n) || (e[n] = []),
						e[n].length < 5 && e[n].push(r),
						e
					);
				}, {});
			}
			function Vt() {
				return (
					(Vt =
						Object.assign ||
						function (e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = arguments[t];
								for (var n in r)
									Object.prototype.hasOwnProperty.call(
										r,
										n,
									) && (e[n] = r[n]);
							}
							return e;
						}),
					Vt.apply(this, arguments)
				);
			}
			function zt(e, t) {
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
			function Bt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2
						? zt(Object(r), !0).forEach(function (t) {
								Jt(e, t, r[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors(r),
								)
							: zt(Object(r)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(r, t),
									);
								});
				}
				return e;
			}
			function Jt(e, t, r) {
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
			function Kt(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var r =
							null == e
								? null
								: ("undefined" != typeof Symbol &&
										e[Symbol.iterator]) ||
									e["@@iterator"];
						if (null == r) return;
						var n,
							o,
							a = [],
							c = !0,
							i = !1;
						try {
							for (
								r = r.call(e);
								!(c = (n = r.next()).done) &&
								(a.push(n.value), !t || a.length !== t);
								c = !0
							);
						} catch (l) {
							(i = !0), (o = l);
						} finally {
							try {
								c || null == r.return || r.return();
							} finally {
								if (i) throw o;
							}
						}
						return a;
					})(e, t) ||
					(function (e, t) {
						if (!e) return;
						if ("string" == typeof e) return $t(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === r &&
							e.constructor &&
							(r = e.constructor.name);
						if ("Map" === r || "Set" === r) return Array.from(e);
						if (
							"Arguments" === r ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
						)
							return $t(e, t);
					})(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function $t(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n;
			}
			function Wt(e) {
				var t = e.appId,
					r = void 0 === t ? "BH4D9OD16A" : t,
					n = e.apiKey,
					o = e.indexName,
					a = e.placeholder,
					c = void 0 === a ? "Search docs" : a,
					i = e.searchParameters,
					l = e.onClose,
					u = void 0 === l ? Lt : l,
					s = e.transformItems,
					f = void 0 === s ? Ft : s,
					m = e.hitComponent,
					p = void 0 === m ? me : m,
					h = e.resultsFooterComponent,
					d =
						void 0 === h
							? function () {
									return null;
								}
							: h,
					v = e.navigator,
					y = e.initialScrollY,
					g = void 0 === y ? 0 : y,
					b = e.transformSearchClient,
					O = void 0 === b ? Ft : b,
					S = e.disableUserPersonalization,
					E = void 0 !== S && S,
					w = e.initialQuery,
					j = void 0 === w ? "" : w,
					P = Kt(
						le.useState({
							query: "",
							collections: [],
							completion: null,
							context: {},
							isOpen: !1,
							activeItemId: null,
							status: "idle",
						}),
						2,
					),
					I = P[0],
					D = P[1],
					C = le.useRef(null),
					k = le.useRef(null),
					N = le.useRef(null),
					A = le.useRef(null),
					x = le.useRef(null),
					q = le.useRef(10),
					R = le.useRef(
						"undefined" != typeof window
							? window.getSelection().toString().slice(0, 64)
							: "",
					).current,
					_ = le.useRef(j || R).current,
					T = (function (e, t, r) {
						return le.useMemo(
							function () {
								var n = Ht(e, t);
								return (
									n.addAlgoliaAgent("docsearch", Mt),
									!1 ===
										/docsearch.js \(.*\)/.test(
											n.transporter.userAgent.value,
										) &&
										n.addAlgoliaAgent(
											"docsearch-react",
											Mt,
										),
									r(n)
								);
							},
							[e, t, r],
						);
					})(r, n, O),
					H = le.useRef(
						Ze({
							key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(o),
							limit: 10,
						}),
					).current,
					M = le.useRef(
						Ze({
							key: "__DOCSEARCH_RECENT_SEARCHES__".concat(o),
							limit: 0 === H.getAll().length ? 7 : 4,
						}),
					).current,
					L = le.useCallback(
						function (e) {
							if (!E) {
								var t =
									"content" === e.type
										? e.__docsearch_parent
										: e;
								t &&
									-1 ===
										H.getAll().findIndex(function (e) {
											return e.objectID === t.objectID;
										}) &&
									M.add(t);
							}
						},
						[H, M, E],
					),
					F = le.useMemo(
						function () {
							return ie({
								id: "docsearch",
								defaultActiveItemId: 0,
								placeholder: c,
								openOnFocus: !0,
								initialState: {
									query: _,
									context: { searchSuggestions: [] },
								},
								navigator: v,
								onStateChange: function (e) {
									var t = e.state;
									D(t);
								},
								getSources: function (e) {
									var t = e.query,
										r = e.state,
										n = e.setContext,
										a = e.setStatus;
									return t
										? T.search([
												{
													query: t,
													indexName: o,
													params: Bt(
														{
															attributesToRetrieve:
																[
																	"hierarchy.lvl0",
																	"hierarchy.lvl1",
																	"hierarchy.lvl2",
																	"hierarchy.lvl3",
																	"hierarchy.lvl4",
																	"hierarchy.lvl5",
																	"hierarchy.lvl6",
																	"content",
																	"type",
																	"url",
																],
															attributesToSnippet:
																[
																	"hierarchy.lvl1:".concat(
																		q.current,
																	),
																	"hierarchy.lvl2:".concat(
																		q.current,
																	),
																	"hierarchy.lvl3:".concat(
																		q.current,
																	),
																	"hierarchy.lvl4:".concat(
																		q.current,
																	),
																	"hierarchy.lvl5:".concat(
																		q.current,
																	),
																	"hierarchy.lvl6:".concat(
																		q.current,
																	),
																	"content:".concat(
																		q.current,
																	),
																],
															snippetEllipsisText:
																"\u2026",
															highlightPreTag:
																"<mark>",
															highlightPostTag:
																"</mark>",
															hitsPerPage: 20,
														},
														i,
													),
												},
											])
												.catch(function (e) {
													throw (
														("RetryError" ===
															e.name &&
															a("error"),
														e)
													);
												})
												.then(function (e) {
													var t = e.results[0],
														o = t.hits,
														a = t.nbHits,
														c = Ut(o, function (e) {
															return He(e);
														});
													return (
														r.context
															.searchSuggestions
															.length <
															Object.keys(c)
																.length &&
															n({
																searchSuggestions:
																	Object.keys(
																		c,
																	),
															}),
														n({ nbHits: a }),
														Object.values(c).map(
															function (e, t) {
																return {
																	sourceId:
																		"hits".concat(
																			t,
																		),
																	onSelect:
																		function (
																			e,
																		) {
																			var t =
																					e.item,
																				r =
																					e.event;
																			L(
																				t,
																			),
																				r.shiftKey ||
																					r.ctrlKey ||
																					r.metaKey ||
																					u();
																		},
																	getItemUrl:
																		function (
																			e,
																		) {
																			return e
																				.item
																				.url;
																		},
																	getItems:
																		function () {
																			return Object.values(
																				Ut(
																					e,
																					function (
																						e,
																					) {
																						return e
																							.hierarchy
																							.lvl1;
																					},
																				),
																			)
																				.map(
																					f,
																				)
																				.map(
																					function (
																						e,
																					) {
																						return e.map(
																							function (
																								t,
																							) {
																								return Bt(
																									Bt(
																										{},
																										t,
																									),
																									{},
																									{
																										__docsearch_parent:
																											"lvl1" !==
																												t.type &&
																											e.find(
																												function (
																													e,
																												) {
																													return (
																														"lvl1" ===
																															e.type &&
																														e
																															.hierarchy
																															.lvl1 ===
																															t
																																.hierarchy
																																.lvl1
																													);
																												},
																											),
																									},
																								);
																							},
																						);
																					},
																				)
																				.flat();
																		},
																};
															},
														)
													);
												})
										: E
											? []
											: [
													{
														sourceId:
															"recentSearches",
														onSelect: function (e) {
															var t = e.item,
																r = e.event;
															L(t),
																r.shiftKey ||
																	r.ctrlKey ||
																	r.metaKey ||
																	u();
														},
														getItemUrl: function (
															e,
														) {
															return e.item.url;
														},
														getItems: function () {
															return M.getAll();
														},
													},
													{
														sourceId:
															"favoriteSearches",
														onSelect: function (e) {
															var t = e.item,
																r = e.event;
															L(t),
																r.shiftKey ||
																	r.ctrlKey ||
																	r.metaKey ||
																	u();
														},
														getItemUrl: function (
															e,
														) {
															return e.item.url;
														},
														getItems: function () {
															return H.getAll();
														},
													},
												];
								},
							});
						},
						[o, i, T, u, M, H, L, _, c, v, f, E],
					),
					U = F.getEnvironmentProps,
					V = F.getRootProps,
					z = F.refresh;
				return (
					(function (e) {
						var t = e.getEnvironmentProps,
							r = e.panelElement,
							n = e.formElement,
							o = e.inputElement;
						le.useEffect(
							function () {
								if (r && n && o) {
									var e = t({
											panelElement: r,
											formElement: n,
											inputElement: o,
										}),
										a = e.onTouchStart,
										c = e.onTouchMove;
									return (
										window.addEventListener(
											"touchstart",
											a,
										),
										window.addEventListener("touchmove", c),
										function () {
											window.removeEventListener(
												"touchstart",
												a,
											),
												window.removeEventListener(
													"touchmove",
													c,
												);
										}
									);
								}
							},
							[t, r, n, o],
						);
					})({
						getEnvironmentProps: U,
						panelElement: A.current,
						formElement: N.current,
						inputElement: x.current,
					}),
					(function (e) {
						var t = e.container;
						le.useEffect(
							function () {
								if (t) {
									var e = t.querySelectorAll(
											"a[href]:not([disabled]), button:not([disabled]), input:not([disabled])",
										),
										r = e[0],
										n = e[e.length - 1];
									return (
										t.addEventListener("keydown", o),
										function () {
											t.removeEventListener("keydown", o);
										}
									);
								}
								function o(e) {
									"Tab" === e.key &&
										(e.shiftKey
											? document.activeElement === r &&
												(e.preventDefault(), n.focus())
											: document.activeElement === n &&
												(e.preventDefault(),
												r.focus()));
								}
							},
							[t],
						);
					})({ container: C.current }),
					le.useEffect(function () {
						return (
							document.body.classList.add("DocSearch--active"),
							function () {
								var e, t;
								document.body.classList.remove(
									"DocSearch--active",
								),
									null === (e = (t = window).scrollTo) ||
										void 0 === e ||
										e.call(t, 0, g);
							}
						);
					}, []),
					le.useEffect(function () {
						window.matchMedia("(max-width: 750px)").matches &&
							(q.current = 5);
					}, []),
					le.useEffect(
						function () {
							A.current && (A.current.scrollTop = 0);
						},
						[I.query],
					),
					le.useEffect(
						function () {
							_.length > 0 &&
								(z(), x.current && x.current.focus());
						},
						[_, z],
					),
					le.useEffect(function () {
						function e() {
							if (k.current) {
								var e = 0.01 * window.innerHeight;
								k.current.style.setProperty(
									"--docsearch-vh",
									"".concat(e, "px"),
								);
							}
						}
						return (
							e(),
							window.addEventListener("resize", e),
							function () {
								window.removeEventListener("resize", e);
							}
						);
					}, []),
					le.createElement(
						"div",
						Vt({ ref: C }, V({ "aria-expanded": !0 }), {
							className: [
								"DocSearch",
								"DocSearch-Container",
								"stalled" === I.status &&
									"DocSearch-Container--Stalled",
								"error" === I.status &&
									"DocSearch-Container--Errored",
							]
								.filter(Boolean)
								.join(" "),
							onMouseDown: function (e) {
								e.target === e.currentTarget && u();
							},
						}),
						le.createElement(
							"div",
							{ className: "DocSearch-Modal", ref: k },
							le.createElement(
								"header",
								{ className: "DocSearch-SearchBar", ref: N },
								le.createElement(
									Ye,
									Vt({}, F, {
										state: I,
										autoFocus: 0 === _.length,
										onClose: u,
										inputRef: x,
										isFromSelection: Boolean(_) && _ === R,
									}),
								),
							),
							le.createElement(
								"div",
								{ className: "DocSearch-Dropdown", ref: A },
								le.createElement(
									Ke,
									Vt({}, F, {
										indexName: o,
										state: I,
										hitComponent: p,
										resultsFooterComponent: d,
										disableUserPersonalization: E,
										recentSearches: M,
										favoriteSearches: H,
										onItemClick: function (e) {
											L(e), u();
										},
										inputRef: x,
									}),
								),
							),
							le.createElement(
								"footer",
								{ className: "DocSearch-Footer" },
								le.createElement(se, null),
							),
						),
					)
				);
			}
		},
	},
]);
