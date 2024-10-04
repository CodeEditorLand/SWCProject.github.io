/*! For license information please see be0067a2.2e0f395f.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
	[7221],
	{
		8131: (e, t, r) => {
			"use strict";
			var n = r(3585),
				i = r(7775),
				a = r(3076);
			function s(e, t, r) {
				return new n(e, t, r);
			}
			(s.version = r(4336)),
				(s.AlgoliaSearchHelper = n),
				(s.SearchParameters = i),
				(s.SearchResults = a),
				(e.exports = s);
		},
		696: (e) => {
			function t() {
				(this._events = this._events || {}),
					(this._maxListeners = this._maxListeners || void 0);
			}
			function r(e) {
				return "function" == typeof e;
			}
			function n(e) {
				return "object" == typeof e && null !== e;
			}
			function i(e) {
				return void 0 === e;
			}
			(e.exports = t),
				(t.EventEmitter = t),
				(t.prototype._events = void 0),
				(t.prototype._maxListeners = void 0),
				(t.defaultMaxListeners = 10),
				(t.prototype.setMaxListeners = function (e) {
					if ("number" != typeof e || e < 0 || isNaN(e))
						throw TypeError("n must be a positive number");
					return (this._maxListeners = e), this;
				}),
				(t.prototype.emit = function (e) {
					var t, a, s, c, u, o;
					if (
						(this._events || (this._events = {}),
						"error" === e &&
							(!this._events.error ||
								(n(this._events.error) &&
									!this._events.error.length)))
					) {
						if ((t = arguments[1]) instanceof Error) throw t;
						var h = new Error(
							'Uncaught, unspecified "error" event. (' + t + ")",
						);
						throw ((h.context = t), h);
					}
					if (i((a = this._events[e]))) return !1;
					if (r(a))
						switch (arguments.length) {
							case 1:
								a.call(this);
								break;
							case 2:
								a.call(this, arguments[1]);
								break;
							case 3:
								a.call(this, arguments[1], arguments[2]);
								break;
							default:
								(c = Array.prototype.slice.call(arguments, 1)),
									a.apply(this, c);
						}
					else if (n(a))
						for (
							c = Array.prototype.slice.call(arguments, 1),
								s = (o = a.slice()).length,
								u = 0;
							u < s;
							u++
						)
							o[u].apply(this, c);
					return !0;
				}),
				(t.prototype.addListener = function (e, a) {
					var s;
					if (!r(a)) throw TypeError("listener must be a function");
					return (
						this._events || (this._events = {}),
						this._events.newListener &&
							this.emit(
								"newListener",
								e,
								r(a.listener) ? a.listener : a,
							),
						this._events[e]
							? n(this._events[e])
								? this._events[e].push(a)
								: (this._events[e] = [this._events[e], a])
							: (this._events[e] = a),
						n(this._events[e]) &&
							!this._events[e].warned &&
							(s = i(this._maxListeners)
								? t.defaultMaxListeners
								: this._maxListeners) &&
							s > 0 &&
							this._events[e].length > s &&
							((this._events[e].warned = !0),
							console.error(
								"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
								this._events[e].length,
							),
							"function" == typeof console.trace &&
								console.trace()),
						this
					);
				}),
				(t.prototype.on = t.prototype.addListener),
				(t.prototype.once = function (e, t) {
					if (!r(t)) throw TypeError("listener must be a function");
					var n = !1;
					function i() {
						this.removeListener(e, i),
							n || ((n = !0), t.apply(this, arguments));
					}
					return (i.listener = t), this.on(e, i), this;
				}),
				(t.prototype.removeListener = function (e, t) {
					var i, a, s, c;
					if (!r(t)) throw TypeError("listener must be a function");
					if (!this._events || !this._events[e]) return this;
					if (
						((s = (i = this._events[e]).length),
						(a = -1),
						i === t || (r(i.listener) && i.listener === t))
					)
						delete this._events[e],
							this._events.removeListener &&
								this.emit("removeListener", e, t);
					else if (n(i)) {
						for (c = s; c-- > 0; )
							if (
								i[c] === t ||
								(i[c].listener && i[c].listener === t)
							) {
								a = c;
								break;
							}
						if (a < 0) return this;
						1 === i.length
							? ((i.length = 0), delete this._events[e])
							: i.splice(a, 1),
							this._events.removeListener &&
								this.emit("removeListener", e, t);
					}
					return this;
				}),
				(t.prototype.removeAllListeners = function (e) {
					var t, n;
					if (!this._events) return this;
					if (!this._events.removeListener)
						return (
							0 === arguments.length
								? (this._events = {})
								: this._events[e] && delete this._events[e],
							this
						);
					if (0 === arguments.length) {
						for (t in this._events)
							"removeListener" !== t &&
								this.removeAllListeners(t);
						return (
							this.removeAllListeners("removeListener"),
							(this._events = {}),
							this
						);
					}
					if (r((n = this._events[e]))) this.removeListener(e, n);
					else if (n)
						for (; n.length; )
							this.removeListener(e, n[n.length - 1]);
					return delete this._events[e], this;
				}),
				(t.prototype.listeners = function (e) {
					return this._events && this._events[e]
						? r(this._events[e])
							? [this._events[e]]
							: this._events[e].slice()
						: [];
				}),
				(t.prototype.listenerCount = function (e) {
					if (this._events) {
						var t = this._events[e];
						if (r(t)) return 1;
						if (t) return t.length;
					}
					return 0;
				}),
				(t.listenerCount = function (e, t) {
					return e.listenerCount(t);
				});
		},
		8078: (e, t, r) => {
			"use strict";
			var n = r(696);
			function i(e, t) {
				(this.main = e), (this.fn = t), (this.lastResults = null);
			}
			r(4853)(i, n.EventEmitter),
				(i.prototype.detach = function () {
					this.removeAllListeners(),
						this.main.detachDerivedHelper(this);
				}),
				(i.prototype.getModifiedState = function (e) {
					return this.fn(e);
				}),
				(e.exports = i);
		},
		2437: (e, t, r) => {
			"use strict";
			var n = r(2344),
				i = r(9803),
				a = r(116),
				s = {
					addRefinement: function (e, t, r) {
						if (s.isRefined(e, t, r)) return e;
						var i = "" + r,
							a = e[t] ? e[t].concat(i) : [i],
							c = {};
						return (c[t] = a), n({}, c, e);
					},
					removeRefinement: function (e, t, r) {
						if (void 0 === r)
							return s.clearRefinement(e, function (e, r) {
								return t === r;
							});
						var n = "" + r;
						return s.clearRefinement(e, function (e, r) {
							return t === r && n === e;
						});
					},
					toggleRefinement: function (e, t, r) {
						if (void 0 === r)
							throw new Error(
								"toggleRefinement should be used with a value",
							);
						return s.isRefined(e, t, r)
							? s.removeRefinement(e, t, r)
							: s.addRefinement(e, t, r);
					},
					clearRefinement: function (e, t, r) {
						if (void 0 === t) return a(e) ? {} : e;
						if ("string" == typeof t) return i(e, [t]);
						if ("function" == typeof t) {
							var n = !1,
								s = Object.keys(e).reduce(function (i, a) {
									var s = e[a] || [],
										c = s.filter(function (e) {
											return !t(e, a, r);
										});
									return (
										c.length !== s.length && (n = !0),
										(i[a] = c),
										i
									);
								}, {});
							return n ? s : e;
						}
					},
					isRefined: function (e, t, r) {
						var n = !!e[t] && e[t].length > 0;
						if (void 0 === r || !n) return n;
						var i = "" + r;
						return -1 !== e[t].indexOf(i);
					},
				};
			e.exports = s;
		},
		7775: (e, t, r) => {
			"use strict";
			var n = r(185),
				i = r(2344),
				a = r(2686),
				s = r(1170),
				c = r(8023),
				u = r(9803),
				o = r(116),
				h = r(6801),
				f = r(2437);
			function l(e, t) {
				return Array.isArray(e) && Array.isArray(t)
					? e.length === t.length &&
							e.every(function (e, r) {
								return l(t[r], e);
							})
					: e === t;
			}
			function m(e) {
				var t = e ? m._parseNumbers(e) : {};
				void 0 === t.userToken ||
					h(t.userToken) ||
					console.warn(
						"[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}",
					),
					(this.facets = t.facets || []),
					(this.disjunctiveFacets = t.disjunctiveFacets || []),
					(this.hierarchicalFacets = t.hierarchicalFacets || []),
					(this.facetsRefinements = t.facetsRefinements || {}),
					(this.facetsExcludes = t.facetsExcludes || {}),
					(this.disjunctiveFacetsRefinements =
						t.disjunctiveFacetsRefinements || {}),
					(this.numericRefinements = t.numericRefinements || {}),
					(this.tagRefinements = t.tagRefinements || []),
					(this.hierarchicalFacetsRefinements =
						t.hierarchicalFacetsRefinements || {});
				var r = this;
				Object.keys(t).forEach(function (e) {
					var n = -1 !== m.PARAMETERS.indexOf(e),
						i = void 0 !== t[e];
					!n && i && (r[e] = t[e]);
				});
			}
			(m.PARAMETERS = Object.keys(new m())),
				(m._parseNumbers = function (e) {
					if (e instanceof m) return e;
					var t = {};
					if (
						([
							"aroundPrecision",
							"aroundRadius",
							"getRankingInfo",
							"minWordSizefor2Typos",
							"minWordSizefor1Typo",
							"page",
							"maxValuesPerFacet",
							"distinct",
							"minimumAroundRadius",
							"hitsPerPage",
							"minProximity",
						].forEach(function (r) {
							var n = e[r];
							if ("string" == typeof n) {
								var i = parseFloat(n);
								t[r] = isNaN(i) ? n : i;
							}
						}),
						Array.isArray(e.insideBoundingBox) &&
							(t.insideBoundingBox = e.insideBoundingBox.map(
								function (e) {
									return Array.isArray(e)
										? e.map(function (e) {
												return parseFloat(e);
											})
										: e;
								},
							)),
						e.numericRefinements)
					) {
						var r = {};
						Object.keys(e.numericRefinements).forEach(function (t) {
							var n = e.numericRefinements[t] || {};
							(r[t] = {}),
								Object.keys(n).forEach(function (e) {
									var i = n[e].map(function (e) {
										return Array.isArray(e)
											? e.map(function (e) {
													return "string" == typeof e
														? parseFloat(e)
														: e;
												})
											: "string" == typeof e
												? parseFloat(e)
												: e;
									});
									r[t][e] = i;
								});
						}),
							(t.numericRefinements = r);
					}
					return n({}, e, t);
				}),
				(m.make = function (e) {
					var t = new m(e);
					return (
						(e.hierarchicalFacets || []).forEach(function (e) {
							if (e.rootPath) {
								var r = t.getHierarchicalRefinement(e.name);
								r.length > 0 &&
									0 !== r[0].indexOf(e.rootPath) &&
									(t = t.clearRefinements(e.name)),
									0 ===
										(r = t.getHierarchicalRefinement(
											e.name,
										)).length &&
										(t =
											t.toggleHierarchicalFacetRefinement(
												e.name,
												e.rootPath,
											));
							}
						}),
						t
					);
				}),
				(m.validate = function (e, t) {
					var r = t || {};
					return e.tagFilters &&
						r.tagRefinements &&
						r.tagRefinements.length > 0
						? new Error(
								"[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.",
							)
						: e.tagRefinements.length > 0 && r.tagFilters
							? new Error(
									"[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.",
								)
							: e.numericFilters &&
								  r.numericRefinements &&
								  o(r.numericRefinements)
								? new Error(
										"[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.",
									)
								: o(e.numericRefinements) && r.numericFilters
									? new Error(
											"[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.",
										)
									: null;
				}),
				(m.prototype = {
					constructor: m,
					clearRefinements: function (e) {
						var t = {
							numericRefinements:
								this._clearNumericRefinements(e),
							facetsRefinements: f.clearRefinement(
								this.facetsRefinements,
								e,
								"conjunctiveFacet",
							),
							facetsExcludes: f.clearRefinement(
								this.facetsExcludes,
								e,
								"exclude",
							),
							disjunctiveFacetsRefinements: f.clearRefinement(
								this.disjunctiveFacetsRefinements,
								e,
								"disjunctiveFacet",
							),
							hierarchicalFacetsRefinements: f.clearRefinement(
								this.hierarchicalFacetsRefinements,
								e,
								"hierarchicalFacet",
							),
						};
						return t.numericRefinements ===
							this.numericRefinements &&
							t.facetsRefinements === this.facetsRefinements &&
							t.facetsExcludes === this.facetsExcludes &&
							t.disjunctiveFacetsRefinements ===
								this.disjunctiveFacetsRefinements &&
							t.hierarchicalFacetsRefinements ===
								this.hierarchicalFacetsRefinements
							? this
							: this.setQueryParameters(t);
					},
					clearTags: function () {
						return void 0 === this.tagFilters &&
							0 === this.tagRefinements.length
							? this
							: this.setQueryParameters({
									tagFilters: void 0,
									tagRefinements: [],
								});
					},
					setIndex: function (e) {
						return e === this.index
							? this
							: this.setQueryParameters({ index: e });
					},
					setQuery: function (e) {
						return e === this.query
							? this
							: this.setQueryParameters({ query: e });
					},
					setPage: function (e) {
						return e === this.page
							? this
							: this.setQueryParameters({ page: e });
					},
					setFacets: function (e) {
						return this.setQueryParameters({ facets: e });
					},
					setDisjunctiveFacets: function (e) {
						return this.setQueryParameters({
							disjunctiveFacets: e,
						});
					},
					setHitsPerPage: function (e) {
						return this.hitsPerPage === e
							? this
							: this.setQueryParameters({ hitsPerPage: e });
					},
					setTypoTolerance: function (e) {
						return this.typoTolerance === e
							? this
							: this.setQueryParameters({ typoTolerance: e });
					},
					addNumericRefinement: function (e, t, r) {
						var i = c(r);
						if (this.isNumericRefined(e, t, i)) return this;
						var a = n({}, this.numericRefinements);
						return (
							(a[e] = n({}, a[e])),
							a[e][t]
								? ((a[e][t] = a[e][t].slice()), a[e][t].push(i))
								: (a[e][t] = [i]),
							this.setQueryParameters({ numericRefinements: a })
						);
					},
					getConjunctiveRefinements: function (e) {
						return (
							(this.isConjunctiveFacet(e) &&
								this.facetsRefinements[e]) ||
							[]
						);
					},
					getDisjunctiveRefinements: function (e) {
						return (
							(this.isDisjunctiveFacet(e) &&
								this.disjunctiveFacetsRefinements[e]) ||
							[]
						);
					},
					getHierarchicalRefinement: function (e) {
						return this.hierarchicalFacetsRefinements[e] || [];
					},
					getExcludeRefinements: function (e) {
						return (
							(this.isConjunctiveFacet(e) &&
								this.facetsExcludes[e]) ||
							[]
						);
					},
					removeNumericRefinement: function (e, t, r) {
						return void 0 !== r
							? this.isNumericRefined(e, t, r)
								? this.setQueryParameters({
										numericRefinements:
											this._clearNumericRefinements(
												function (n, i) {
													return (
														i === e &&
														n.op === t &&
														l(n.val, c(r))
													);
												},
											),
									})
								: this
							: void 0 !== t
								? this.isNumericRefined(e, t)
									? this.setQueryParameters({
											numericRefinements:
												this._clearNumericRefinements(
													function (r, n) {
														return (
															n === e &&
															r.op === t
														);
													},
												),
										})
									: this
								: this.isNumericRefined(e)
									? this.setQueryParameters({
											numericRefinements:
												this._clearNumericRefinements(
													function (t, r) {
														return r === e;
													},
												),
										})
									: this;
					},
					getNumericRefinements: function (e) {
						return this.numericRefinements[e] || {};
					},
					getNumericRefinement: function (e, t) {
						return (
							this.numericRefinements[e] &&
							this.numericRefinements[e][t]
						);
					},
					_clearNumericRefinements: function (e) {
						if (void 0 === e)
							return o(this.numericRefinements)
								? {}
								: this.numericRefinements;
						if ("string" == typeof e)
							return u(this.numericRefinements, [e]);
						if ("function" == typeof e) {
							var t = !1,
								r = this.numericRefinements,
								n = Object.keys(r).reduce(function (n, i) {
									var a = r[i],
										s = {};
									return (
										(a = a || {}),
										Object.keys(a).forEach(function (r) {
											var n = a[r] || [],
												c = [];
											n.forEach(function (t) {
												e(
													{ val: t, op: r },
													i,
													"numeric",
												) || c.push(t);
											}),
												c.length !== n.length &&
													(t = !0),
												(s[r] = c);
										}),
										(n[i] = s),
										n
									);
								}, {});
							return t ? n : this.numericRefinements;
						}
					},
					addFacet: function (e) {
						return this.isConjunctiveFacet(e)
							? this
							: this.setQueryParameters({
									facets: this.facets.concat([e]),
								});
					},
					addDisjunctiveFacet: function (e) {
						return this.isDisjunctiveFacet(e)
							? this
							: this.setQueryParameters({
									disjunctiveFacets:
										this.disjunctiveFacets.concat([e]),
								});
					},
					addHierarchicalFacet: function (e) {
						if (this.isHierarchicalFacet(e.name))
							throw new Error(
								"Cannot declare two hierarchical facets with the same name: `" +
									e.name +
									"`",
							);
						return this.setQueryParameters({
							hierarchicalFacets: this.hierarchicalFacets.concat([
								e,
							]),
						});
					},
					addFacetRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return f.isRefined(this.facetsRefinements, e, t)
							? this
							: this.setQueryParameters({
									facetsRefinements: f.addRefinement(
										this.facetsRefinements,
										e,
										t,
									),
								});
					},
					addExcludeRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return f.isRefined(this.facetsExcludes, e, t)
							? this
							: this.setQueryParameters({
									facetsExcludes: f.addRefinement(
										this.facetsExcludes,
										e,
										t,
									),
								});
					},
					addDisjunctiveFacetRefinement: function (e, t) {
						if (!this.isDisjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the disjunctiveFacets attribute of the helper configuration",
							);
						return f.isRefined(
							this.disjunctiveFacetsRefinements,
							e,
							t,
						)
							? this
							: this.setQueryParameters({
									disjunctiveFacetsRefinements:
										f.addRefinement(
											this.disjunctiveFacetsRefinements,
											e,
											t,
										),
								});
					},
					addTagRefinement: function (e) {
						if (this.isTagRefined(e)) return this;
						var t = {
							tagRefinements: this.tagRefinements.concat(e),
						};
						return this.setQueryParameters(t);
					},
					removeFacet: function (e) {
						return this.isConjunctiveFacet(e)
							? this.clearRefinements(e).setQueryParameters({
									facets: this.facets.filter(function (t) {
										return t !== e;
									}),
								})
							: this;
					},
					removeDisjunctiveFacet: function (e) {
						return this.isDisjunctiveFacet(e)
							? this.clearRefinements(e).setQueryParameters({
									disjunctiveFacets:
										this.disjunctiveFacets.filter(
											function (t) {
												return t !== e;
											},
										),
								})
							: this;
					},
					removeHierarchicalFacet: function (e) {
						return this.isHierarchicalFacet(e)
							? this.clearRefinements(e).setQueryParameters({
									hierarchicalFacets:
										this.hierarchicalFacets.filter(
											function (t) {
												return t.name !== e;
											},
										),
								})
							: this;
					},
					removeFacetRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return f.isRefined(this.facetsRefinements, e, t)
							? this.setQueryParameters({
									facetsRefinements: f.removeRefinement(
										this.facetsRefinements,
										e,
										t,
									),
								})
							: this;
					},
					removeExcludeRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return f.isRefined(this.facetsExcludes, e, t)
							? this.setQueryParameters({
									facetsExcludes: f.removeRefinement(
										this.facetsExcludes,
										e,
										t,
									),
								})
							: this;
					},
					removeDisjunctiveFacetRefinement: function (e, t) {
						if (!this.isDisjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the disjunctiveFacets attribute of the helper configuration",
							);
						return f.isRefined(
							this.disjunctiveFacetsRefinements,
							e,
							t,
						)
							? this.setQueryParameters({
									disjunctiveFacetsRefinements:
										f.removeRefinement(
											this.disjunctiveFacetsRefinements,
											e,
											t,
										),
								})
							: this;
					},
					removeTagRefinement: function (e) {
						if (!this.isTagRefined(e)) return this;
						var t = {
							tagRefinements: this.tagRefinements.filter(
								function (t) {
									return t !== e;
								},
							),
						};
						return this.setQueryParameters(t);
					},
					toggleRefinement: function (e, t) {
						return this.toggleFacetRefinement(e, t);
					},
					toggleFacetRefinement: function (e, t) {
						if (this.isHierarchicalFacet(e))
							return this.toggleHierarchicalFacetRefinement(e, t);
						if (this.isConjunctiveFacet(e))
							return this.toggleConjunctiveFacetRefinement(e, t);
						if (this.isDisjunctiveFacet(e))
							return this.toggleDisjunctiveFacetRefinement(e, t);
						throw new Error(
							"Cannot refine the undeclared facet " +
								e +
								"; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets",
						);
					},
					toggleConjunctiveFacetRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return this.setQueryParameters({
							facetsRefinements: f.toggleRefinement(
								this.facetsRefinements,
								e,
								t,
							),
						});
					},
					toggleExcludeFacetRefinement: function (e, t) {
						if (!this.isConjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the facets attribute of the helper configuration",
							);
						return this.setQueryParameters({
							facetsExcludes: f.toggleRefinement(
								this.facetsExcludes,
								e,
								t,
							),
						});
					},
					toggleDisjunctiveFacetRefinement: function (e, t) {
						if (!this.isDisjunctiveFacet(e))
							throw new Error(
								e +
									" is not defined in the disjunctiveFacets attribute of the helper configuration",
							);
						return this.setQueryParameters({
							disjunctiveFacetsRefinements: f.toggleRefinement(
								this.disjunctiveFacetsRefinements,
								e,
								t,
							),
						});
					},
					toggleHierarchicalFacetRefinement: function (e, t) {
						if (!this.isHierarchicalFacet(e))
							throw new Error(
								e +
									" is not defined in the hierarchicalFacets attribute of the helper configuration",
							);
						var r = this._getHierarchicalFacetSeparator(
								this.getHierarchicalFacetByName(e),
							),
							n = {};
						return (
							void 0 !== this.hierarchicalFacetsRefinements[e] &&
							this.hierarchicalFacetsRefinements[e].length > 0 &&
							(this.hierarchicalFacetsRefinements[e][0] === t ||
								0 ===
									this.hierarchicalFacetsRefinements[
										e
									][0].indexOf(t + r))
								? -1 === t.indexOf(r)
									? (n[e] = [])
									: (n[e] = [t.slice(0, t.lastIndexOf(r))])
								: (n[e] = [t]),
							this.setQueryParameters({
								hierarchicalFacetsRefinements: i(
									{},
									n,
									this.hierarchicalFacetsRefinements,
								),
							})
						);
					},
					addHierarchicalFacetRefinement: function (e, t) {
						if (this.isHierarchicalFacetRefined(e))
							throw new Error(e + " is already refined.");
						if (!this.isHierarchicalFacet(e))
							throw new Error(
								e +
									" is not defined in the hierarchicalFacets attribute of the helper configuration.",
							);
						var r = {};
						return (
							(r[e] = [t]),
							this.setQueryParameters({
								hierarchicalFacetsRefinements: i(
									{},
									r,
									this.hierarchicalFacetsRefinements,
								),
							})
						);
					},
					removeHierarchicalFacetRefinement: function (e) {
						if (!this.isHierarchicalFacetRefined(e)) return this;
						var t = {};
						return (
							(t[e] = []),
							this.setQueryParameters({
								hierarchicalFacetsRefinements: i(
									{},
									t,
									this.hierarchicalFacetsRefinements,
								),
							})
						);
					},
					toggleTagRefinement: function (e) {
						return this.isTagRefined(e)
							? this.removeTagRefinement(e)
							: this.addTagRefinement(e);
					},
					isDisjunctiveFacet: function (e) {
						return this.disjunctiveFacets.indexOf(e) > -1;
					},
					isHierarchicalFacet: function (e) {
						return void 0 !== this.getHierarchicalFacetByName(e);
					},
					isConjunctiveFacet: function (e) {
						return this.facets.indexOf(e) > -1;
					},
					isFacetRefined: function (e, t) {
						return (
							!!this.isConjunctiveFacet(e) &&
							f.isRefined(this.facetsRefinements, e, t)
						);
					},
					isExcludeRefined: function (e, t) {
						return (
							!!this.isConjunctiveFacet(e) &&
							f.isRefined(this.facetsExcludes, e, t)
						);
					},
					isDisjunctiveFacetRefined: function (e, t) {
						return (
							!!this.isDisjunctiveFacet(e) &&
							f.isRefined(this.disjunctiveFacetsRefinements, e, t)
						);
					},
					isHierarchicalFacetRefined: function (e, t) {
						if (!this.isHierarchicalFacet(e)) return !1;
						var r = this.getHierarchicalRefinement(e);
						return t ? -1 !== r.indexOf(t) : r.length > 0;
					},
					isNumericRefined: function (e, t, r) {
						if (void 0 === r && void 0 === t)
							return !!this.numericRefinements[e];
						var n =
							this.numericRefinements[e] &&
							void 0 !== this.numericRefinements[e][t];
						if (void 0 === r || !n) return n;
						var i,
							a,
							u = c(r),
							o =
								void 0 !==
								((i = this.numericRefinements[e][t]),
								(a = u),
								s(i, function (e) {
									return l(e, a);
								}));
						return n && o;
					},
					isTagRefined: function (e) {
						return -1 !== this.tagRefinements.indexOf(e);
					},
					getRefinedDisjunctiveFacets: function () {
						var e = this,
							t = a(
								Object.keys(this.numericRefinements).filter(
									function (t) {
										return (
											Object.keys(e.numericRefinements[t])
												.length > 0
										);
									},
								),
								this.disjunctiveFacets,
							);
						return Object.keys(this.disjunctiveFacetsRefinements)
							.filter(function (t) {
								return (
									e.disjunctiveFacetsRefinements[t].length > 0
								);
							})
							.concat(t)
							.concat(this.getRefinedHierarchicalFacets());
					},
					getRefinedHierarchicalFacets: function () {
						var e = this;
						return a(
							this.hierarchicalFacets.map(function (e) {
								return e.name;
							}),
							Object.keys(
								this.hierarchicalFacetsRefinements,
							).filter(function (t) {
								return (
									e.hierarchicalFacetsRefinements[t].length >
									0
								);
							}),
						);
					},
					getUnrefinedDisjunctiveFacets: function () {
						var e = this.getRefinedDisjunctiveFacets();
						return this.disjunctiveFacets.filter(function (t) {
							return -1 === e.indexOf(t);
						});
					},
					managedParameters: [
						"index",
						"facets",
						"disjunctiveFacets",
						"facetsRefinements",
						"hierarchicalFacets",
						"facetsExcludes",
						"disjunctiveFacetsRefinements",
						"numericRefinements",
						"tagRefinements",
						"hierarchicalFacetsRefinements",
					],
					getQueryParams: function () {
						var e = this.managedParameters,
							t = {},
							r = this;
						return (
							Object.keys(this).forEach(function (n) {
								var i = r[n];
								-1 === e.indexOf(n) &&
									void 0 !== i &&
									(t[n] = i);
							}),
							t
						);
					},
					setQueryParameter: function (e, t) {
						if (this[e] === t) return this;
						var r = {};
						return (r[e] = t), this.setQueryParameters(r);
					},
					setQueryParameters: function (e) {
						if (!e) return this;
						var t = m.validate(this, e);
						if (t) throw t;
						var r = this,
							n = m._parseNumbers(e),
							i = Object.keys(this).reduce(function (e, t) {
								return (e[t] = r[t]), e;
							}, {}),
							a = Object.keys(n).reduce(function (e, t) {
								var r = void 0 !== e[t],
									i = void 0 !== n[t];
								return r && !i
									? u(e, [t])
									: (i && (e[t] = n[t]), e);
							}, i);
						return new this.constructor(a);
					},
					resetPage: function () {
						return void 0 === this.page ? this : this.setPage(0);
					},
					_getHierarchicalFacetSortBy: function (e) {
						return e.sortBy || ["isRefined:desc", "name:asc"];
					},
					_getHierarchicalFacetSeparator: function (e) {
						return e.separator || " > ";
					},
					_getHierarchicalRootPath: function (e) {
						return e.rootPath || null;
					},
					_getHierarchicalShowParentLevel: function (e) {
						return (
							"boolean" != typeof e.showParentLevel ||
							e.showParentLevel
						);
					},
					getHierarchicalFacetByName: function (e) {
						return s(this.hierarchicalFacets, function (t) {
							return t.name === e;
						});
					},
					getHierarchicalFacetBreadcrumb: function (e) {
						if (!this.isHierarchicalFacet(e)) return [];
						var t = this.getHierarchicalRefinement(e)[0];
						if (!t) return [];
						var r = this._getHierarchicalFacetSeparator(
							this.getHierarchicalFacetByName(e),
						);
						return t.split(r).map(function (e) {
							return e.trim();
						});
					},
					toString: function () {
						return JSON.stringify(this, null, 2);
					},
				}),
				(e.exports = m);
		},
		210: (e, t, r) => {
			"use strict";
			e.exports = function (e) {
				return function (t, r) {
					var s = e.hierarchicalFacets[r],
						c =
							(e.hierarchicalFacetsRefinements[s.name] &&
								e.hierarchicalFacetsRefinements[s.name][0]) ||
							"",
						u = e._getHierarchicalFacetSeparator(s),
						o = e._getHierarchicalRootPath(s),
						h = e._getHierarchicalShowParentLevel(s),
						f = a(e._getHierarchicalFacetSortBy(s)),
						l = t.every(function (e) {
							return e.exhaustive;
						}),
						m = (function (e, t, r, a, s) {
							return function (c, u, o) {
								var h = c;
								if (o > 0) {
									var f = 0;
									for (h = c; f < o; ) {
										var l =
											h && Array.isArray(h.data)
												? h.data
												: [];
										(h = i(l, function (e) {
											return e.isRefined;
										})),
											f++;
									}
								}
								if (h) {
									var m = Object.keys(u.data)
										.map(function (e) {
											return [e, u.data[e]];
										})
										.filter(function (e) {
											return (function (
												e,
												t,
												r,
												n,
												i,
												a,
											) {
												if (
													i &&
													(0 !== e.indexOf(i) ||
														i === e)
												)
													return !1;
												return (
													(!i &&
														-1 === e.indexOf(n)) ||
													(i &&
														e.split(n).length -
															i.split(n).length ==
															1) ||
													(-1 === e.indexOf(n) &&
														-1 === r.indexOf(n)) ||
													0 === r.indexOf(e) ||
													(0 === e.indexOf(t + n) &&
														(a ||
															0 === e.indexOf(r)))
												);
											})(e[0], h.path || r, s, t, r, a);
										});
									h.data = n(
										m.map(function (e) {
											var r = e[0];
											return (function (e, t, r, n, i) {
												var a = t.split(r);
												return {
													name: a[
														a.length - 1
													].trim(),
													path: t,
													count: e,
													isRefined:
														n === t ||
														0 === n.indexOf(t + r),
													exhaustive: i,
													data: null,
												};
											})(e[1], r, t, s, u.exhaustive);
										}),
										e[0],
										e[1],
									);
								}
								return c;
							};
						})(f, u, o, h, c),
						d = t;
					return (
						o && (d = t.slice(o.split(u).length)),
						d.reduce(m, {
							name: e.hierarchicalFacets[r].name,
							count: null,
							isRefined: !0,
							path: null,
							exhaustive: l,
							data: null,
						})
					);
				};
			};
			var n = r(2148),
				i = r(1170),
				a = r(2293);
		},
		3076: (e, t, r) => {
			"use strict";
			var n = r(185),
				i = r(2344),
				a = r(2148),
				s = r(4587),
				c = r(1170),
				u = r(9725),
				o = r(2293),
				h = r(210);
			function f(e) {
				var t = {};
				return (
					e.forEach(function (e, r) {
						t[e] = r;
					}),
					t
				);
			}
			function l(e, t, r) {
				t && t[r] && (e.stats = t[r]);
			}
			function m(e, t) {
				var r = t[0];
				this._rawResults = t;
				var a = this;
				Object.keys(r).forEach(function (e) {
					a[e] = r[e];
				}),
					(this.processingTimeMS = t.reduce(function (e, t) {
						return void 0 === t.processingTimeMS
							? e
							: e + t.processingTimeMS;
					}, 0)),
					(this.disjunctiveFacets = []),
					(this.hierarchicalFacets = e.hierarchicalFacets.map(
						function () {
							return [];
						},
					)),
					(this.facets = []);
				var o = e.getRefinedDisjunctiveFacets(),
					m = f(e.facets),
					d = f(e.disjunctiveFacets),
					v = 1,
					p = r.facets || {};
				Object.keys(p).forEach(function (t) {
					var n,
						i,
						s = p[t],
						o =
							((n = e.hierarchicalFacets),
							(i = t),
							c(n, function (e) {
								return (e.attributes || []).indexOf(i) > -1;
							}));
					if (o) {
						var h = o.attributes.indexOf(t),
							f = u(e.hierarchicalFacets, function (e) {
								return e.name === o.name;
							});
						a.hierarchicalFacets[f][h] = {
							attribute: t,
							data: s,
							exhaustive: r.exhaustiveFacetsCount,
						};
					} else {
						var v,
							g = -1 !== e.disjunctiveFacets.indexOf(t),
							y = -1 !== e.facets.indexOf(t);
						g &&
							((v = d[t]),
							(a.disjunctiveFacets[v] = {
								name: t,
								data: s,
								exhaustive: r.exhaustiveFacetsCount,
							}),
							l(a.disjunctiveFacets[v], r.facets_stats, t)),
							y &&
								((v = m[t]),
								(a.facets[v] = {
									name: t,
									data: s,
									exhaustive: r.exhaustiveFacetsCount,
								}),
								l(a.facets[v], r.facets_stats, t));
					}
				}),
					(this.hierarchicalFacets = s(this.hierarchicalFacets)),
					o.forEach(function (s) {
						var c = t[v],
							o = c && c.facets ? c.facets : {},
							h = e.getHierarchicalFacetByName(s);
						Object.keys(o).forEach(function (t) {
							var s,
								f = o[t];
							if (h) {
								s = u(e.hierarchicalFacets, function (e) {
									return e.name === h.name;
								});
								var m = u(
									a.hierarchicalFacets[s],
									function (e) {
										return e.attribute === t;
									},
								);
								if (-1 === m) return;
								a.hierarchicalFacets[s][m].data = n(
									{},
									a.hierarchicalFacets[s][m].data,
									f,
								);
							} else {
								s = d[t];
								var v = (r.facets && r.facets[t]) || {};
								(a.disjunctiveFacets[s] = {
									name: t,
									data: i({}, f, v),
									exhaustive: c.exhaustiveFacetsCount,
								}),
									l(
										a.disjunctiveFacets[s],
										c.facets_stats,
										t,
									),
									e.disjunctiveFacetsRefinements[t] &&
										e.disjunctiveFacetsRefinements[
											t
										].forEach(function (r) {
											!a.disjunctiveFacets[s].data[r] &&
												e.disjunctiveFacetsRefinements[
													t
												].indexOf(r) > -1 &&
												(a.disjunctiveFacets[s].data[
													r
												] = 0);
										});
							}
						}),
							v++;
					}),
					e.getRefinedHierarchicalFacets().forEach(function (r) {
						var n = e.getHierarchicalFacetByName(r),
							s = e._getHierarchicalFacetSeparator(n),
							c = e.getHierarchicalRefinement(r);
						if (!(0 === c.length || c[0].split(s).length < 2)) {
							var o = t[v],
								h = o && o.facets ? o.facets : {};
							Object.keys(h).forEach(function (t) {
								var r = h[t],
									o = u(e.hierarchicalFacets, function (e) {
										return e.name === n.name;
									}),
									f = u(
										a.hierarchicalFacets[o],
										function (e) {
											return e.attribute === t;
										},
									);
								if (-1 !== f) {
									var l = {};
									if (c.length > 0) {
										var m = c[0].split(s)[0];
										l[m] =
											a.hierarchicalFacets[o][f].data[m];
									}
									a.hierarchicalFacets[o][f].data = i(
										l,
										r,
										a.hierarchicalFacets[o][f].data,
									);
								}
							}),
								v++;
						}
					}),
					Object.keys(e.facetsExcludes).forEach(function (t) {
						var n = e.facetsExcludes[t],
							i = m[t];
						(a.facets[i] = {
							name: t,
							data: r.facets[t],
							exhaustive: r.exhaustiveFacetsCount,
						}),
							n.forEach(function (e) {
								(a.facets[i] = a.facets[i] || { name: t }),
									(a.facets[i].data = a.facets[i].data || {}),
									(a.facets[i].data[e] = 0);
							});
					}),
					(this.hierarchicalFacets = this.hierarchicalFacets.map(
						h(e),
					)),
					(this.facets = s(this.facets)),
					(this.disjunctiveFacets = s(this.disjunctiveFacets)),
					(this._state = e);
			}
			function d(e, t, r, n) {
				if (((n = n || 0), Array.isArray(t))) return e(t, r[n]);
				if (!t.data || 0 === t.data.length) return t;
				var a = t.data.map(function (t) {
						return d(e, t, r, n + 1);
					}),
					s = e(a, r[n]);
				return i({ data: s }, t);
			}
			function v(e, t) {
				var r = c(e, function (e) {
					return e.name === t;
				});
				return r && r.stats;
			}
			function p(e, t, r, n, i) {
				var a = c(i, function (e) {
						return e.name === r;
					}),
					s = a && a.data && a.data[n] ? a.data[n] : 0,
					u = (a && a.exhaustive) || !1;
				return {
					type: t,
					attributeName: r,
					name: n,
					count: s,
					exhaustive: u,
				};
			}
			(m.prototype.getFacetByName = function (e) {
				function t(t) {
					return t.name === e;
				}
				return (
					c(this.facets, t) ||
					c(this.disjunctiveFacets, t) ||
					c(this.hierarchicalFacets, t)
				);
			}),
				(m.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"]),
				(m.prototype.getFacetValues = function (e, t) {
					var r = (function (e, t) {
						function r(e) {
							return e.name === t;
						}
						if (e._state.isConjunctiveFacet(t)) {
							var n = c(e.facets, r);
							return n
								? Object.keys(n.data).map(function (r) {
										return {
											name: r,
											count: n.data[r],
											isRefined: e._state.isFacetRefined(
												t,
												r,
											),
											isExcluded:
												e._state.isExcludeRefined(t, r),
										};
									})
								: [];
						}
						if (e._state.isDisjunctiveFacet(t)) {
							var i = c(e.disjunctiveFacets, r);
							return i
								? Object.keys(i.data).map(function (r) {
										return {
											name: r,
											count: i.data[r],
											isRefined:
												e._state.isDisjunctiveFacetRefined(
													t,
													r,
												),
										};
									})
								: [];
						}
						if (e._state.isHierarchicalFacet(t))
							return c(e.hierarchicalFacets, r);
					})(this, e);
					if (r) {
						var n,
							s = i({}, t, {
								sortBy: m.DEFAULT_SORT,
								facetOrdering: !(t && t.sortBy),
							}),
							u = this;
						if (Array.isArray(r)) n = [e];
						else
							n = u._state.getHierarchicalFacetByName(
								r.name,
							).attributes;
						return d(
							function (e, t) {
								if (s.facetOrdering) {
									var r = (function (e, t) {
										return (
											e.renderingContent &&
											e.renderingContent.facetOrdering &&
											e.renderingContent.facetOrdering
												.values &&
											e.renderingContent.facetOrdering
												.values[t]
										);
									})(u, t);
									if (Boolean(r))
										return (function (e, t) {
											var r = [],
												n = [],
												i = (t.order || []).reduce(
													function (e, t, r) {
														return (e[t] = r), e;
													},
													{},
												);
											e.forEach(function (e) {
												var t = e.path || e.name;
												void 0 !== i[t]
													? (r[i[t]] = e)
													: n.push(e);
											}),
												(r = r.filter(function (e) {
													return e;
												}));
											var s,
												c = t.sortRemainingBy;
											return "hidden" === c
												? r
												: ((s =
														"alpha" === c
															? [
																	[
																		"path",
																		"name",
																	],
																	[
																		"asc",
																		"asc",
																	],
																]
															: [
																	["count"],
																	["desc"],
																]),
													r.concat(a(n, s[0], s[1])));
										})(e, r);
								}
								if (Array.isArray(s.sortBy)) {
									var n = o(s.sortBy, m.DEFAULT_SORT);
									return a(e, n[0], n[1]);
								}
								if ("function" == typeof s.sortBy)
									return (function (e, t) {
										return t.sort(e);
									})(s.sortBy, e);
								throw new Error(
									"options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function",
								);
							},
							r,
							n,
						);
					}
				}),
				(m.prototype.getFacetStats = function (e) {
					return this._state.isConjunctiveFacet(e)
						? v(this.facets, e)
						: this._state.isDisjunctiveFacet(e)
							? v(this.disjunctiveFacets, e)
							: void 0;
				}),
				(m.prototype.getRefinements = function () {
					var e = this._state,
						t = this,
						r = [];
					return (
						Object.keys(e.facetsRefinements).forEach(function (n) {
							e.facetsRefinements[n].forEach(function (i) {
								r.push(p(e, "facet", n, i, t.facets));
							});
						}),
						Object.keys(e.facetsExcludes).forEach(function (n) {
							e.facetsExcludes[n].forEach(function (i) {
								r.push(p(e, "exclude", n, i, t.facets));
							});
						}),
						Object.keys(e.disjunctiveFacetsRefinements).forEach(
							function (n) {
								e.disjunctiveFacetsRefinements[n].forEach(
									function (i) {
										r.push(
											p(
												e,
												"disjunctive",
												n,
												i,
												t.disjunctiveFacets,
											),
										);
									},
								);
							},
						),
						Object.keys(e.hierarchicalFacetsRefinements).forEach(
							function (n) {
								e.hierarchicalFacetsRefinements[n].forEach(
									function (i) {
										r.push(
											(function (e, t, r, n) {
												var i =
														e.getHierarchicalFacetByName(
															t,
														),
													a =
														e._getHierarchicalFacetSeparator(
															i,
														),
													s = r.split(a),
													u = c(n, function (e) {
														return e.name === t;
													}),
													o = s.reduce(function (
														e,
														t,
													) {
														var r =
															e &&
															c(
																e.data,
																function (e) {
																	return (
																		e.name ===
																		t
																	);
																},
															);
														return void 0 !== r
															? r
															: e;
													}, u),
													h = (o && o.count) || 0,
													f =
														(o && o.exhaustive) ||
														!1,
													l = (o && o.path) || "";
												return {
													type: "hierarchical",
													attributeName: t,
													name: l,
													count: h,
													exhaustive: f,
												};
											})(e, n, i, t.hierarchicalFacets),
										);
									},
								);
							},
						),
						Object.keys(e.numericRefinements).forEach(function (t) {
							var n = e.numericRefinements[t];
							Object.keys(n).forEach(function (e) {
								n[e].forEach(function (n) {
									r.push({
										type: "numeric",
										attributeName: t,
										name: n,
										numericValue: n,
										operator: e,
									});
								});
							});
						}),
						e.tagRefinements.forEach(function (e) {
							r.push({
								type: "tag",
								attributeName: "_tags",
								name: e,
							});
						}),
						r
					);
				}),
				(e.exports = m);
		},
		3585: (e, t, r) => {
			"use strict";
			var n = r(7775),
				i = r(3076),
				a = r(8078),
				s = r(6394),
				c = r(696),
				u = r(4853),
				o = r(116),
				h = r(9803),
				f = r(185),
				l = r(4336);
			function m(e, t, r) {
				"function" == typeof e.addAlgoliaAgent &&
					e.addAlgoliaAgent("JS Helper (" + l + ")"),
					this.setClient(e);
				var i = r || {};
				(i.index = t),
					(this.state = n.make(i)),
					(this.lastResults = null),
					(this._queryId = 0),
					(this._lastQueryIdReceived = -1),
					(this.derivedHelpers = []),
					(this._currentNbQueries = 0);
			}
			function d(e) {
				if (e < 0) throw new Error("Page requested below 0.");
				return (
					this._change({
						state: this.state.setPage(e),
						isPageReset: !1,
					}),
					this
				);
			}
			function v() {
				return this.state.page;
			}
			u(m, c.EventEmitter),
				(m.prototype.search = function () {
					return this._search({ onlyWithDerivedHelpers: !1 }), this;
				}),
				(m.prototype.searchOnlyWithDerivedHelpers = function () {
					return this._search({ onlyWithDerivedHelpers: !0 }), this;
				}),
				(m.prototype.getQuery = function () {
					var e = this.state;
					return s._getHitsSearchParams(e);
				}),
				(m.prototype.searchOnce = function (e, t) {
					var r = e ? this.state.setQueryParameters(e) : this.state,
						n = s._getQueries(r.index, r),
						a = this;
					if (
						(this._currentNbQueries++,
						this.emit("searchOnce", { state: r }),
						!t)
					)
						return this.client.search(n).then(
							function (e) {
								return (
									a._currentNbQueries--,
									0 === a._currentNbQueries &&
										a.emit("searchQueueEmpty"),
									{
										content: new i(r, e.results),
										state: r,
										_originalResponse: e,
									}
								);
							},
							function (e) {
								throw (
									(a._currentNbQueries--,
									0 === a._currentNbQueries &&
										a.emit("searchQueueEmpty"),
									e)
								);
							},
						);
					this.client
						.search(n)
						.then(function (e) {
							a._currentNbQueries--,
								0 === a._currentNbQueries &&
									a.emit("searchQueueEmpty"),
								t(null, new i(r, e.results), r);
						})
						.catch(function (e) {
							a._currentNbQueries--,
								0 === a._currentNbQueries &&
									a.emit("searchQueueEmpty"),
								t(e, null, r);
						});
				}),
				(m.prototype.findAnswers = function (e) {
					var t = this.state,
						r = this.derivedHelpers[0];
					if (!r) return Promise.resolve([]);
					var n = r.getModifiedState(t),
						i = f(
							{
								attributesForPrediction:
									e.attributesForPrediction,
								nbHits: e.nbHits,
							},
							{
								params: h(s._getHitsSearchParams(n), [
									"attributesToSnippet",
									"hitsPerPage",
									"restrictSearchableAttributes",
									"snippetEllipsisText",
								]),
							},
						),
						a =
							"search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
					if ("function" != typeof this.client.initIndex)
						throw new Error(a);
					var c = this.client.initIndex(n.index);
					if ("function" != typeof c.findAnswers) throw new Error(a);
					return c.findAnswers(n.query, e.queryLanguages, i);
				}),
				(m.prototype.searchForFacetValues = function (e, t, r, n) {
					var i =
						"function" == typeof this.client.searchForFacetValues;
					if (!i && "function" != typeof this.client.initIndex)
						throw new Error(
							"search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues",
						);
					var a = this.state.setQueryParameters(n || {}),
						c = a.isDisjunctiveFacet(e),
						u = s.getSearchForFacetQuery(e, t, r, a);
					this._currentNbQueries++;
					var o = this;
					return (
						this.emit("searchForFacetValues", {
							state: a,
							facet: e,
							query: t,
						}),
						(i
							? this.client.searchForFacetValues([
									{ indexName: a.index, params: u },
								])
							: this.client
									.initIndex(a.index)
									.searchForFacetValues(u)
						).then(
							function (t) {
								return (
									o._currentNbQueries--,
									0 === o._currentNbQueries &&
										o.emit("searchQueueEmpty"),
									(t = Array.isArray(t)
										? t[0]
										: t).facetHits.forEach(function (t) {
										t.isRefined = c
											? a.isDisjunctiveFacetRefined(
													e,
													t.value,
												)
											: a.isFacetRefined(e, t.value);
									}),
									t
								);
							},
							function (e) {
								throw (
									(o._currentNbQueries--,
									0 === o._currentNbQueries &&
										o.emit("searchQueueEmpty"),
									e)
								);
							},
						)
					);
				}),
				(m.prototype.setQuery = function (e) {
					return (
						this._change({
							state: this.state.resetPage().setQuery(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.clearRefinements = function (e) {
					return (
						this._change({
							state: this.state.resetPage().clearRefinements(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.clearTags = function () {
					return (
						this._change({
							state: this.state.resetPage().clearTags(),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addDisjunctiveFacetRefinement = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.addDisjunctiveFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addDisjunctiveRefine = function () {
					return this.addDisjunctiveFacetRefinement.apply(
						this,
						arguments,
					);
				}),
				(m.prototype.addHierarchicalFacetRefinement = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.addHierarchicalFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addNumericRefinement = function (e, t, r) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.addNumericRefinement(e, t, r),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addFacetRefinement = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.addFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addRefine = function () {
					return this.addFacetRefinement.apply(this, arguments);
				}),
				(m.prototype.addFacetExclusion = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.addExcludeRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.addExclude = function () {
					return this.addFacetExclusion.apply(this, arguments);
				}),
				(m.prototype.addTag = function (e) {
					return (
						this._change({
							state: this.state.resetPage().addTagRefinement(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeNumericRefinement = function (e, t, r) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeNumericRefinement(e, t, r),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeDisjunctiveFacetRefinement = function (
					e,
					t,
				) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeDisjunctiveFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeDisjunctiveRefine = function () {
					return this.removeDisjunctiveFacetRefinement.apply(
						this,
						arguments,
					);
				}),
				(m.prototype.removeHierarchicalFacetRefinement = function (e) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeHierarchicalFacetRefinement(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeFacetRefinement = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeRefine = function () {
					return this.removeFacetRefinement.apply(this, arguments);
				}),
				(m.prototype.removeFacetExclusion = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeExcludeRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.removeExclude = function () {
					return this.removeFacetExclusion.apply(this, arguments);
				}),
				(m.prototype.removeTag = function (e) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.removeTagRefinement(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.toggleFacetExclusion = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.toggleExcludeFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.toggleExclude = function () {
					return this.toggleFacetExclusion.apply(this, arguments);
				}),
				(m.prototype.toggleRefinement = function (e, t) {
					return this.toggleFacetRefinement(e, t);
				}),
				(m.prototype.toggleFacetRefinement = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.toggleFacetRefinement(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.toggleRefine = function () {
					return this.toggleFacetRefinement.apply(this, arguments);
				}),
				(m.prototype.toggleTag = function (e) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.toggleTagRefinement(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.nextPage = function () {
					var e = this.state.page || 0;
					return this.setPage(e + 1);
				}),
				(m.prototype.previousPage = function () {
					var e = this.state.page || 0;
					return this.setPage(e - 1);
				}),
				(m.prototype.setCurrentPage = d),
				(m.prototype.setPage = d),
				(m.prototype.setIndex = function (e) {
					return (
						this._change({
							state: this.state.resetPage().setIndex(e),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.setQueryParameter = function (e, t) {
					return (
						this._change({
							state: this.state
								.resetPage()
								.setQueryParameter(e, t),
							isPageReset: !0,
						}),
						this
					);
				}),
				(m.prototype.setState = function (e) {
					return (
						this._change({ state: n.make(e), isPageReset: !1 }),
						this
					);
				}),
				(m.prototype.overrideStateWithoutTriggeringChangeEvent =
					function (e) {
						return (this.state = new n(e)), this;
					}),
				(m.prototype.hasRefinements = function (e) {
					return (
						!!o(this.state.getNumericRefinements(e)) ||
						(this.state.isConjunctiveFacet(e)
							? this.state.isFacetRefined(e)
							: this.state.isDisjunctiveFacet(e)
								? this.state.isDisjunctiveFacetRefined(e)
								: !!this.state.isHierarchicalFacet(e) &&
									this.state.isHierarchicalFacetRefined(e))
					);
				}),
				(m.prototype.isExcluded = function (e, t) {
					return this.state.isExcludeRefined(e, t);
				}),
				(m.prototype.isDisjunctiveRefined = function (e, t) {
					return this.state.isDisjunctiveFacetRefined(e, t);
				}),
				(m.prototype.hasTag = function (e) {
					return this.state.isTagRefined(e);
				}),
				(m.prototype.isTagRefined = function () {
					return this.hasTagRefinements.apply(this, arguments);
				}),
				(m.prototype.getIndex = function () {
					return this.state.index;
				}),
				(m.prototype.getCurrentPage = v),
				(m.prototype.getPage = v),
				(m.prototype.getTags = function () {
					return this.state.tagRefinements;
				}),
				(m.prototype.getRefinements = function (e) {
					var t = [];
					if (this.state.isConjunctiveFacet(e))
						this.state
							.getConjunctiveRefinements(e)
							.forEach(function (e) {
								t.push({ value: e, type: "conjunctive" });
							}),
							this.state
								.getExcludeRefinements(e)
								.forEach(function (e) {
									t.push({ value: e, type: "exclude" });
								});
					else if (this.state.isDisjunctiveFacet(e)) {
						this.state
							.getDisjunctiveRefinements(e)
							.forEach(function (e) {
								t.push({ value: e, type: "disjunctive" });
							});
					}
					var r = this.state.getNumericRefinements(e);
					return (
						Object.keys(r).forEach(function (e) {
							var n = r[e];
							t.push({ value: n, operator: e, type: "numeric" });
						}),
						t
					);
				}),
				(m.prototype.getNumericRefinement = function (e, t) {
					return this.state.getNumericRefinement(e, t);
				}),
				(m.prototype.getHierarchicalFacetBreadcrumb = function (e) {
					return this.state.getHierarchicalFacetBreadcrumb(e);
				}),
				(m.prototype._search = function (e) {
					var t = this.state,
						r = [],
						n = [];
					e.onlyWithDerivedHelpers ||
						((n = s._getQueries(t.index, t)),
						r.push({
							state: t,
							queriesCount: n.length,
							helper: this,
						}),
						this.emit("search", {
							state: t,
							results: this.lastResults,
						}));
					var i = this.derivedHelpers.map(function (e) {
							var n = e.getModifiedState(t),
								i = s._getQueries(n.index, n);
							return (
								r.push({
									state: n,
									queriesCount: i.length,
									helper: e,
								}),
								e.emit("search", {
									state: n,
									results: e.lastResults,
								}),
								i
							);
						}),
						a = Array.prototype.concat.apply(n, i),
						c = this._queryId++;
					this._currentNbQueries++;
					try {
						this.client
							.search(a)
							.then(
								this._dispatchAlgoliaResponse.bind(this, r, c),
							)
							.catch(this._dispatchAlgoliaError.bind(this, c));
					} catch (u) {
						this.emit("error", { error: u });
					}
				}),
				(m.prototype._dispatchAlgoliaResponse = function (e, t, r) {
					if (!(t < this._lastQueryIdReceived)) {
						(this._currentNbQueries -=
							t - this._lastQueryIdReceived),
							(this._lastQueryIdReceived = t),
							0 === this._currentNbQueries &&
								this.emit("searchQueueEmpty");
						var n = r.results.slice();
						e.forEach(function (e) {
							var t = e.state,
								r = e.queriesCount,
								a = e.helper,
								s = n.splice(0, r),
								c = (a.lastResults = new i(t, s));
							a.emit("result", { results: c, state: t });
						});
					}
				}),
				(m.prototype._dispatchAlgoliaError = function (e, t) {
					e < this._lastQueryIdReceived ||
						((this._currentNbQueries -=
							e - this._lastQueryIdReceived),
						(this._lastQueryIdReceived = e),
						this.emit("error", { error: t }),
						0 === this._currentNbQueries &&
							this.emit("searchQueueEmpty"));
				}),
				(m.prototype.containsRefinement = function (e, t, r, n) {
					return (
						e || 0 !== t.length || 0 !== r.length || 0 !== n.length
					);
				}),
				(m.prototype._hasDisjunctiveRefinements = function (e) {
					return (
						this.state.disjunctiveRefinements[e] &&
						this.state.disjunctiveRefinements[e].length > 0
					);
				}),
				(m.prototype._change = function (e) {
					var t = e.state,
						r = e.isPageReset;
					t !== this.state &&
						((this.state = t),
						this.emit("change", {
							state: this.state,
							results: this.lastResults,
							isPageReset: r,
						}));
				}),
				(m.prototype.clearCache = function () {
					return (
						this.client.clearCache && this.client.clearCache(), this
					);
				}),
				(m.prototype.setClient = function (e) {
					return (
						this.client === e ||
							("function" == typeof e.addAlgoliaAgent &&
								e.addAlgoliaAgent("JS Helper (" + l + ")"),
							(this.client = e)),
						this
					);
				}),
				(m.prototype.getClient = function () {
					return this.client;
				}),
				(m.prototype.derive = function (e) {
					var t = new a(this, e);
					return this.derivedHelpers.push(t), t;
				}),
				(m.prototype.detachDerivedHelper = function (e) {
					var t = this.derivedHelpers.indexOf(e);
					if (-1 === t)
						throw new Error("Derived helper already detached");
					this.derivedHelpers.splice(t, 1);
				}),
				(m.prototype.hasPendingRequests = function () {
					return this._currentNbQueries > 0;
				}),
				(e.exports = m);
		},
		4587: (e) => {
			"use strict";
			e.exports = function (e) {
				return Array.isArray(e) ? e.filter(Boolean) : [];
			};
		},
		2344: (e) => {
			"use strict";
			e.exports = function () {
				var e = Array.prototype.slice.call(arguments);
				return e.reduceRight(function (e, t) {
					return (
						Object.keys(Object(t)).forEach(function (r) {
							void 0 !== t[r] &&
								(void 0 !== e[r] && delete e[r], (e[r] = t[r]));
						}),
						e
					);
				}, {});
			};
		},
		1170: (e) => {
			"use strict";
			e.exports = function (e, t) {
				if (Array.isArray(e))
					for (var r = 0; r < e.length; r++) if (t(e[r])) return e[r];
			};
		},
		9725: (e) => {
			"use strict";
			e.exports = function (e, t) {
				if (!Array.isArray(e)) return -1;
				for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
				return -1;
			};
		},
		2293: (e, t, r) => {
			"use strict";
			var n = r(1170);
			e.exports = function (e, t) {
				var r = (t || []).map(function (e) {
					return e.split(":");
				});
				return e.reduce(
					function (e, t) {
						var i = t.split(":"),
							a = n(r, function (e) {
								return e[0] === i[0];
							});
						return i.length > 1 || !a
							? (e[0].push(i[0]), e[1].push(i[1]), e)
							: (e[0].push(a[0]), e[1].push(a[1]), e);
					},
					[[], []],
				);
			};
		},
		4853: (e) => {
			"use strict";
			e.exports = function (e, t) {
				e.prototype = Object.create(t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				});
			};
		},
		2686: (e) => {
			"use strict";
			e.exports = function (e, t) {
				return e.filter(function (r, n) {
					return t.indexOf(r) > -1 && e.indexOf(r) === n;
				});
			};
		},
		185: (e) => {
			"use strict";
			function t(e) {
				return (
					"function" == typeof e ||
					Array.isArray(e) ||
					"[object Object]" === Object.prototype.toString.call(e)
				);
			}
			function r(e, n) {
				if (e === n) return e;
				for (var i in n)
					if (
						Object.prototype.hasOwnProperty.call(n, i) &&
						"__proto__" !== i
					) {
						var a = n[i],
							s = e[i];
						(void 0 !== s && void 0 === a) ||
							(t(s) && t(a)
								? (e[i] = r(s, a))
								: (e[i] =
										"object" == typeof (c = a) && null !== c
											? r(Array.isArray(c) ? [] : {}, c)
											: c));
					}
				var c;
				return e;
			}
			e.exports = function (e) {
				t(e) || (e = {});
				for (var n = 1, i = arguments.length; n < i; n++) {
					var a = arguments[n];
					t(a) && r(e, a);
				}
				return e;
			};
		},
		116: (e) => {
			"use strict";
			e.exports = function (e) {
				return e && Object.keys(e).length > 0;
			};
		},
		9803: (e) => {
			"use strict";
			e.exports = function (e, t) {
				if (null === e) return {};
				var r,
					n,
					i = {},
					a = Object.keys(e);
				for (n = 0; n < a.length; n++)
					(r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
				return i;
			};
		},
		2148: (e) => {
			"use strict";
			function t(e, t) {
				if (e !== t) {
					var r = void 0 !== e,
						n = null === e,
						i = void 0 !== t,
						a = null === t;
					if ((!a && e > t) || (n && i) || !r) return 1;
					if ((!n && e < t) || (a && r) || !i) return -1;
				}
				return 0;
			}
			e.exports = function (e, r, n) {
				if (!Array.isArray(e)) return [];
				Array.isArray(n) || (n = []);
				var i = e.map(function (e, t) {
					return {
						criteria: r.map(function (t) {
							return e[t];
						}),
						index: t,
						value: e,
					};
				});
				return (
					i.sort(function (e, r) {
						for (var i = -1; ++i < e.criteria.length; ) {
							var a = t(e.criteria[i], r.criteria[i]);
							if (a)
								return i >= n.length
									? a
									: "desc" === n[i]
										? -a
										: a;
						}
						return e.index - r.index;
					}),
					i.map(function (e) {
						return e.value;
					})
				);
			};
		},
		8023: (e) => {
			"use strict";
			e.exports = function e(t) {
				if ("number" == typeof t) return t;
				if ("string" == typeof t) return parseFloat(t);
				if (Array.isArray(t)) return t.map(e);
				throw new Error(
					"The value should be a number, a parsable string or an array of those.",
				);
			};
		},
		6394: (e, t, r) => {
			"use strict";
			var n = r(185),
				i = {
					_getQueries: function (e, t) {
						var r = [];
						return (
							r.push({
								indexName: e,
								params: i._getHitsSearchParams(t),
							}),
							t
								.getRefinedDisjunctiveFacets()
								.forEach(function (n) {
									r.push({
										indexName: e,
										params: i._getDisjunctiveFacetSearchParams(
											t,
											n,
										),
									});
								}),
							t
								.getRefinedHierarchicalFacets()
								.forEach(function (n) {
									var a = t.getHierarchicalFacetByName(n),
										s = t.getHierarchicalRefinement(n),
										c = t._getHierarchicalFacetSeparator(a);
									s.length > 0 &&
										s[0].split(c).length > 1 &&
										r.push({
											indexName: e,
											params: i._getDisjunctiveFacetSearchParams(
												t,
												n,
												!0,
											),
										});
								}),
							r
						);
					},
					_getHitsSearchParams: function (e) {
						var t = e.facets
								.concat(e.disjunctiveFacets)
								.concat(
									i._getHitsHierarchicalFacetsAttributes(e),
								),
							r = i._getFacetFilters(e),
							a = i._getNumericFilters(e),
							s = i._getTagFilters(e),
							c = {
								facets: t.indexOf("*") > -1 ? ["*"] : t,
								tagFilters: s,
							};
						return (
							r.length > 0 && (c.facetFilters = r),
							a.length > 0 && (c.numericFilters = a),
							n({}, e.getQueryParams(), c)
						);
					},
					_getDisjunctiveFacetSearchParams: function (e, t, r) {
						var a = i._getFacetFilters(e, t, r),
							s = i._getNumericFilters(e, t),
							c = {
								hitsPerPage: 1,
								page: 0,
								attributesToRetrieve: [],
								attributesToHighlight: [],
								attributesToSnippet: [],
								tagFilters: i._getTagFilters(e),
								analytics: !1,
								clickAnalytics: !1,
							},
							u = e.getHierarchicalFacetByName(t);
						return (
							(c.facets = u
								? i._getDisjunctiveHierarchicalFacetAttribute(
										e,
										u,
										r,
									)
								: t),
							s.length > 0 && (c.numericFilters = s),
							a.length > 0 && (c.facetFilters = a),
							n({}, e.getQueryParams(), c)
						);
					},
					_getNumericFilters: function (e, t) {
						if (e.numericFilters) return e.numericFilters;
						var r = [];
						return (
							Object.keys(e.numericRefinements).forEach(
								function (n) {
									var i = e.numericRefinements[n] || {};
									Object.keys(i).forEach(function (e) {
										var a = i[e] || [];
										t !== n &&
											a.forEach(function (t) {
												if (Array.isArray(t)) {
													var i = t.map(function (t) {
														return n + e + t;
													});
													r.push(i);
												} else r.push(n + e + t);
											});
									});
								},
							),
							r
						);
					},
					_getTagFilters: function (e) {
						return e.tagFilters
							? e.tagFilters
							: e.tagRefinements.join(",");
					},
					_getFacetFilters: function (e, t, r) {
						var n = [],
							i = e.facetsRefinements || {};
						Object.keys(i).forEach(function (e) {
							(i[e] || []).forEach(function (t) {
								n.push(e + ":" + t);
							});
						});
						var a = e.facetsExcludes || {};
						Object.keys(a).forEach(function (e) {
							(a[e] || []).forEach(function (t) {
								n.push(e + ":-" + t);
							});
						});
						var s = e.disjunctiveFacetsRefinements || {};
						Object.keys(s).forEach(function (e) {
							var r = s[e] || [];
							if (e !== t && r && 0 !== r.length) {
								var i = [];
								r.forEach(function (t) {
									i.push(e + ":" + t);
								}),
									n.push(i);
							}
						});
						var c = e.hierarchicalFacetsRefinements || {};
						return (
							Object.keys(c).forEach(function (i) {
								var a = (c[i] || [])[0];
								if (void 0 !== a) {
									var s,
										u,
										o = e.getHierarchicalFacetByName(i),
										h = e._getHierarchicalFacetSeparator(o),
										f = e._getHierarchicalRootPath(o);
									if (t === i) {
										if (
											-1 === a.indexOf(h) ||
											(!f && !0 === r) ||
											(f &&
												f.split(h).length ===
													a.split(h).length)
										)
											return;
										f
											? ((u = f.split(h).length - 1),
												(a = f))
											: ((u = a.split(h).length - 2),
												(a = a.slice(
													0,
													a.lastIndexOf(h),
												))),
											(s = o.attributes[u]);
									} else
										(u = a.split(h).length - 1),
											(s = o.attributes[u]);
									s && n.push([s + ":" + a]);
								}
							}),
							n
						);
					},
					_getHitsHierarchicalFacetsAttributes: function (e) {
						return e.hierarchicalFacets.reduce(function (t, r) {
							var n = e.getHierarchicalRefinement(r.name)[0];
							if (!n) return t.push(r.attributes[0]), t;
							var i = e._getHierarchicalFacetSeparator(r),
								a = n.split(i).length,
								s = r.attributes.slice(0, a + 1);
							return t.concat(s);
						}, []);
					},
					_getDisjunctiveHierarchicalFacetAttribute: function (
						e,
						t,
						r,
					) {
						var n = e._getHierarchicalFacetSeparator(t);
						if (!0 === r) {
							var i = e._getHierarchicalRootPath(t),
								a = 0;
							return (
								i && (a = i.split(n).length), [t.attributes[a]]
							);
						}
						var s =
							(
								e.getHierarchicalRefinement(t.name)[0] || ""
							).split(n).length - 1;
						return t.attributes.slice(0, s + 1);
					},
					getSearchForFacetQuery: function (e, t, r, a) {
						var s = a.isDisjunctiveFacet(e)
								? a.clearRefinements(e)
								: a,
							c = { facetQuery: t, facetName: e };
						return (
							"number" == typeof r && (c.maxFacetHits = r),
							n({}, i._getHitsSearchParams(s), c)
						);
					},
				};
			e.exports = i;
		},
		6801: (e) => {
			"use strict";
			e.exports = function (e) {
				return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e);
			};
		},
		4336: (e) => {
			"use strict";
			e.exports = "3.6.2";
		},
		290: function (e) {
			e.exports = (function () {
				"use strict";
				function e(e, t, r) {
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
				function t(e, t) {
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
				function r(r) {
					for (var n = 1; n < arguments.length; n++) {
						var i = null != arguments[n] ? arguments[n] : {};
						n % 2
							? t(Object(i), !0).forEach(function (t) {
									e(r, t, i[t]);
								})
							: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										r,
										Object.getOwnPropertyDescriptors(i),
									)
								: t(Object(i)).forEach(function (e) {
										Object.defineProperty(
											r,
											e,
											Object.getOwnPropertyDescriptor(
												i,
												e,
											),
										);
									});
					}
					return r;
				}
				function n(e, t) {
					if (null == e) return {};
					var r,
						n,
						i = (function (e, t) {
							if (null == e) return {};
							var r,
								n,
								i = {},
								a = Object.keys(e);
							for (n = 0; n < a.length; n++)
								(r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
							return i;
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
										(i[r] = e[r]));
					}
					return i;
				}
				function i(e, t) {
					return (
						(function (e) {
							if (Array.isArray(e)) return e;
						})(e) ||
						(function (e, t) {
							if (
								Symbol.iterator in Object(e) ||
								"[object Arguments]" ===
									Object.prototype.toString.call(e)
							) {
								var r = [],
									n = !0,
									i = !1,
									a = void 0;
								try {
									for (
										var s, c = e[Symbol.iterator]();
										!(n = (s = c.next()).done) &&
										(r.push(s.value), !t || r.length !== t);
										n = !0
									);
								} catch (e) {
									(i = !0), (a = e);
								} finally {
									try {
										n || null == c.return || c.return();
									} finally {
										if (i) throw a;
									}
								}
								return r;
							}
						})(e, t) ||
						(function () {
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance",
							);
						})()
					);
				}
				function a(e) {
					return (
						(function (e) {
							if (Array.isArray(e)) {
								for (
									var t = 0, r = new Array(e.length);
									t < e.length;
									t++
								)
									r[t] = e[t];
								return r;
							}
						})(e) ||
						(function (e) {
							if (
								Symbol.iterator in Object(e) ||
								"[object Arguments]" ===
									Object.prototype.toString.call(e)
							)
								return Array.from(e);
						})(e) ||
						(function () {
							throw new TypeError(
								"Invalid attempt to spread non-iterable instance",
							);
						})()
					);
				}
				function s(e) {
					var t,
						r = "algoliasearch-client-js-".concat(e.key),
						n = function () {
							return (
								void 0 === t &&
									(t = e.localStorage || window.localStorage),
								t
							);
						},
						a = function () {
							return JSON.parse(n().getItem(r) || "{}");
						};
					return {
						get: function (e, t) {
							var r =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: {
											miss: function () {
												return Promise.resolve();
											},
										};
							return Promise.resolve()
								.then(function () {
									var r = JSON.stringify(e),
										n = a()[r];
									return Promise.all([
										n || t(),
										void 0 !== n,
									]);
								})
								.then(function (e) {
									var t = i(e, 2),
										n = t[0],
										a = t[1];
									return Promise.all([n, a || r.miss(n)]);
								})
								.then(function (e) {
									return i(e, 1)[0];
								});
						},
						set: function (e, t) {
							return Promise.resolve().then(function () {
								var i = a();
								return (
									(i[JSON.stringify(e)] = t),
									n().setItem(r, JSON.stringify(i)),
									t
								);
							});
						},
						delete: function (e) {
							return Promise.resolve().then(function () {
								var t = a();
								delete t[JSON.stringify(e)],
									n().setItem(r, JSON.stringify(t));
							});
						},
						clear: function () {
							return Promise.resolve().then(function () {
								n().removeItem(r);
							});
						},
					};
				}
				function c(e) {
					var t = a(e.caches),
						r = t.shift();
					return void 0 === r
						? {
								get: function (e, t) {
									var r =
										arguments.length > 2 &&
										void 0 !== arguments[2]
											? arguments[2]
											: {
													miss: function () {
														return Promise.resolve();
													},
												};
									return t()
										.then(function (e) {
											return Promise.all([e, r.miss(e)]);
										})
										.then(function (e) {
											return i(e, 1)[0];
										});
								},
								set: function (e, t) {
									return Promise.resolve(t);
								},
								delete: function (e) {
									return Promise.resolve();
								},
								clear: function () {
									return Promise.resolve();
								},
							}
						: {
								get: function (e, n) {
									var i =
										arguments.length > 2 &&
										void 0 !== arguments[2]
											? arguments[2]
											: {
													miss: function () {
														return Promise.resolve();
													},
												};
									return r.get(e, n, i).catch(function () {
										return c({ caches: t }).get(e, n, i);
									});
								},
								set: function (e, n) {
									return r.set(e, n).catch(function () {
										return c({ caches: t }).set(e, n);
									});
								},
								delete: function (e) {
									return r.delete(e).catch(function () {
										return c({ caches: t }).delete(e);
									});
								},
								clear: function () {
									return r.clear().catch(function () {
										return c({ caches: t }).clear();
									});
								},
							};
				}
				function u() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: { serializable: !0 },
						t = {};
					return {
						get: function (r, n) {
							var i =
									arguments.length > 2 &&
									void 0 !== arguments[2]
										? arguments[2]
										: {
												miss: function () {
													return Promise.resolve();
												},
											},
								a = JSON.stringify(r);
							if (a in t)
								return Promise.resolve(
									e.serializable ? JSON.parse(t[a]) : t[a],
								);
							var s = n(),
								c =
									(i && i.miss) ||
									function () {
										return Promise.resolve();
									};
							return s
								.then(function (e) {
									return c(e);
								})
								.then(function () {
									return s;
								});
						},
						set: function (r, n) {
							return (
								(t[JSON.stringify(r)] = e.serializable
									? JSON.stringify(n)
									: n),
								Promise.resolve(n)
							);
						},
						delete: function (e) {
							return (
								delete t[JSON.stringify(e)], Promise.resolve()
							);
						},
						clear: function () {
							return (t = {}), Promise.resolve();
						},
					};
				}
				function o(e) {
					for (var t = e.length - 1; t > 0; t--) {
						var r = Math.floor(Math.random() * (t + 1)),
							n = e[t];
						(e[t] = e[r]), (e[r] = n);
					}
					return e;
				}
				function h(e, t) {
					return t
						? (Object.keys(t).forEach(function (r) {
								e[r] = t[r](e);
							}),
							e)
						: e;
				}
				function f(e) {
					for (
						var t = arguments.length,
							r = new Array(t > 1 ? t - 1 : 0),
							n = 1;
						n < t;
						n++
					)
						r[n - 1] = arguments[n];
					var i = 0;
					return e.replace(/%s/g, function () {
						return encodeURIComponent(r[i++]);
					});
				}
				var l = { WithinQueryParameters: 0, WithinHeaders: 1 };
				function m(e, t) {
					var r = e || {},
						n = r.data || {};
					return (
						Object.keys(r).forEach(function (e) {
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
				var d = { Read: 1, Write: 2, Any: 3 },
					v = 1,
					p = 2,
					g = 3;
				function y(e) {
					var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: v;
					return r(
						r({}, e),
						{},
						{ status: t, lastUpdate: Date.now() },
					);
				}
				function R(e) {
					return "string" == typeof e
						? { protocol: "https", url: e, accept: d.Any }
						: {
								protocol: e.protocol || "https",
								url: e.url,
								accept: e.accept || d.Any,
							};
				}
				var F = "GET",
					b = "POST";
				function P(e, t) {
					return Promise.all(
						t.map(function (t) {
							return e.get(t, function () {
								return Promise.resolve(y(t));
							});
						}),
					).then(function (e) {
						var r = e.filter(function (e) {
								return (function (e) {
									return (
										e.status === v ||
										Date.now() - e.lastUpdate > 12e4
									);
								})(e);
							}),
							n = e.filter(function (e) {
								return (function (e) {
									return (
										e.status === g &&
										Date.now() - e.lastUpdate <= 12e4
									);
								})(e);
							}),
							i = [].concat(a(r), a(n));
						return {
							getTimeout: function (e, t) {
								return (
									(0 === n.length && 0 === e
										? 1
										: n.length + 3 + e) * t
								);
							},
							statelessHosts:
								i.length > 0
									? i.map(function (e) {
											return R(e);
										})
									: t,
						};
					});
				}
				function j(e, t, n, i) {
					var s = [],
						c = (function (e, t) {
							if (
								e.method !== F &&
								(void 0 !== e.data || void 0 !== t.data)
							) {
								var n = Array.isArray(e.data)
									? e.data
									: r(r({}, e.data), t.data);
								return JSON.stringify(n);
							}
						})(n, i),
						u = (function (e, t) {
							var n = r(r({}, e.headers), t.headers),
								i = {};
							return (
								Object.keys(n).forEach(function (e) {
									var t = n[e];
									i[e.toLowerCase()] = t;
								}),
								i
							);
						})(e, i),
						o = n.method,
						h = n.method !== F ? {} : r(r({}, n.data), i.data),
						f = r(
							r(
								r(
									{ "x-algolia-agent": e.userAgent.value },
									e.queryParameters,
								),
								h,
							),
							i.queryParameters,
						),
						l = 0,
						m = function t(r, a) {
							var h = r.pop();
							if (void 0 === h)
								throw {
									name: "RetryError",
									message:
										"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
									transporterStackTrace: O(s),
								};
							var m = {
									data: c,
									headers: u,
									method: o,
									url: E(h, n.path, f),
									connectTimeout: a(l, e.timeouts.connect),
									responseTimeout: a(l, i.timeout),
								},
								d = function (e) {
									var t = {
										request: m,
										response: e,
										host: h,
										triesLeft: r.length,
									};
									return s.push(t), t;
								},
								v = {
									onSuccess: function (e) {
										return (function (e) {
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
										})(e);
									},
									onRetry: function (n) {
										var i = d(n);
										return (
											n.isTimedOut && l++,
											Promise.all([
												e.logger.info(
													"Retryable failure",
													w(i),
												),
												e.hostsCache.set(
													h,
													y(h, n.isTimedOut ? g : p),
												),
											]).then(function () {
												return t(r, a);
											})
										);
									},
									onFail: function (e) {
										throw (
											(d(e),
											(function (e, t) {
												var r = e.content,
													n = e.status,
													i = r;
												try {
													i = JSON.parse(r).message;
												} catch (e) {}
												return (function (e, t, r) {
													return {
														name: "ApiError",
														message: e,
														status: t,
														transporterStackTrace:
															r,
													};
												})(i, n, t);
											})(e, O(s)))
										);
									},
								};
							return e.requester.send(m).then(function (e) {
								return (function (e, t) {
									return (function (e) {
										var t = e.status;
										return (
											e.isTimedOut ||
											(function (e) {
												var t = e.isTimedOut,
													r = e.status;
												return !t && 0 == ~~r;
											})(e) ||
											(2 != ~~(t / 100) &&
												4 != ~~(t / 100))
										);
									})(e)
										? t.onRetry(e)
										: 2 == ~~(e.status / 100)
											? t.onSuccess(e)
											: t.onFail(e);
								})(e, v);
							});
						};
					return P(e.hostsCache, t).then(function (e) {
						return m(a(e.statelessHosts).reverse(), e.getTimeout);
					});
				}
				function _(e) {
					var t = {
						value: "Algolia for JavaScript (".concat(e, ")"),
						add: function (e) {
							var r = "; "
								.concat(e.segment)
								.concat(
									void 0 !== e.version
										? " (".concat(e.version, ")")
										: "",
								);
							return (
								-1 === t.value.indexOf(r) &&
									(t.value = "".concat(t.value).concat(r)),
								t
							);
						},
					};
					return t;
				}
				function E(e, t, r) {
					var n = x(r),
						i = ""
							.concat(e.protocol, "://")
							.concat(e.url, "/")
							.concat("/" === t.charAt(0) ? t.substr(1) : t);
					return n.length && (i += "?".concat(n)), i;
				}
				function x(e) {
					return Object.keys(e)
						.map(function (t) {
							return f(
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
				function O(e) {
					return e.map(function (e) {
						return w(e);
					});
				}
				function w(e) {
					var t = e.request.headers["x-algolia-api-key"]
						? { "x-algolia-api-key": "*****" }
						: {};
					return r(
						r({}, e),
						{},
						{
							request: r(
								r({}, e.request),
								{},
								{ headers: r(r({}, e.request.headers), t) },
							),
						},
					);
				}
				var N = function (e) {
						var t = e.appId,
							n = (function (e, t, r) {
								var n = {
									"x-algolia-api-key": r,
									"x-algolia-application-id": t,
								};
								return {
									headers: function () {
										return e === l.WithinHeaders ? n : {};
									},
									queryParameters: function () {
										return e === l.WithinQueryParameters
											? n
											: {};
									},
								};
							})(
								void 0 !== e.authMode
									? e.authMode
									: l.WithinHeaders,
								t,
								e.apiKey,
							),
							a = (function (e) {
								var t = e.hostsCache,
									r = e.logger,
									n = e.requester,
									a = e.requestsCache,
									s = e.responsesCache,
									c = e.timeouts,
									u = e.userAgent,
									o = e.hosts,
									h = e.queryParameters,
									f = {
										hostsCache: t,
										logger: r,
										requester: n,
										requestsCache: a,
										responsesCache: s,
										timeouts: c,
										userAgent: u,
										headers: e.headers,
										queryParameters: h,
										hosts: o.map(function (e) {
											return R(e);
										}),
										read: function (e, t) {
											var r = m(t, f.timeouts.read),
												n = function () {
													return j(
														f,
														f.hosts.filter(
															function (e) {
																return (
																	0 !=
																	(e.accept &
																		d.Read)
																);
															},
														),
														e,
														r,
													);
												};
											if (
												!0 !==
												(void 0 !== r.cacheable
													? r.cacheable
													: e.cacheable)
											)
												return n();
											var a = {
												request: e,
												mappedRequestOptions: r,
												transporter: {
													queryParameters:
														f.queryParameters,
													headers: f.headers,
												},
											};
											return f.responsesCache.get(
												a,
												function () {
													return f.requestsCache.get(
														a,
														function () {
															return f.requestsCache
																.set(a, n())
																.then(
																	function (
																		e,
																	) {
																		return Promise.all(
																			[
																				f.requestsCache.delete(
																					a,
																				),
																				e,
																			],
																		);
																	},
																	function (
																		e,
																	) {
																		return Promise.all(
																			[
																				f.requestsCache.delete(
																					a,
																				),
																				Promise.reject(
																					e,
																				),
																			],
																		);
																	},
																)
																.then(
																	function (
																		e,
																	) {
																		var t =
																			i(
																				e,
																				2,
																			);
																		return (
																			t[0],
																			t[1]
																		);
																	},
																);
														},
													);
												},
												{
													miss: function (e) {
														return f.responsesCache.set(
															a,
															e,
														);
													},
												},
											);
										},
										write: function (e, t) {
											return j(
												f,
												f.hosts.filter(function (e) {
													return (
														0 !=
														(e.accept & d.Write)
													);
												}),
												e,
												m(t, f.timeouts.write),
											);
										},
									};
								return f;
							})(
								r(
									r(
										{
											hosts: [
												{
													url: "".concat(
														t,
														"-dsn.algolia.net",
													),
													accept: d.Read,
												},
												{
													url: "".concat(
														t,
														".algolia.net",
													),
													accept: d.Write,
												},
											].concat(
												o([
													{
														url: "".concat(
															t,
															"-1.algolianet.com",
														),
													},
													{
														url: "".concat(
															t,
															"-2.algolianet.com",
														),
													},
													{
														url: "".concat(
															t,
															"-3.algolianet.com",
														),
													},
												]),
											),
										},
										e,
									),
									{},
									{
										headers: r(
											r(r({}, n.headers()), {
												"content-type":
													"application/x-www-form-urlencoded",
											}),
											e.headers,
										),
										queryParameters: r(
											r({}, n.queryParameters()),
											e.queryParameters,
										),
									},
								),
							);
						return h(
							{
								transporter: a,
								appId: t,
								addAlgoliaAgent: function (e, t) {
									a.userAgent.add({ segment: e, version: t });
								},
								clearCache: function () {
									return Promise.all([
										a.requestsCache.clear(),
										a.responsesCache.clear(),
									]).then(function () {});
								},
							},
							e.methods,
						);
					},
					A = function (e) {
						return function (t, r) {
							return t.method === F
								? e.transporter.read(t, r)
								: e.transporter.write(t, r);
						};
					},
					H = function (e) {
						return function (t) {
							var r =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return h(
								{
									transporter: e.transporter,
									appId: e.appId,
									indexName: t,
								},
								r.methods,
							);
						};
					},
					S = function (e) {
						return function (t, n) {
							var i = t.map(function (e) {
								return r(
									r({}, e),
									{},
									{ params: x(e.params || {}) },
								);
							});
							return e.transporter.read(
								{
									method: b,
									path: "1/indexes/*/queries",
									data: { requests: i },
									cacheable: !0,
								},
								n,
							);
						};
					},
					T = function (e) {
						return function (t, i) {
							return Promise.all(
								t.map(function (t) {
									var a = t.params,
										s = a.facetName,
										c = a.facetQuery,
										u = n(a, ["facetName", "facetQuery"]);
									return H(e)(t.indexName, {
										methods: { searchForFacetValues: k },
									}).searchForFacetValues(
										s,
										c,
										r(r({}, i), u),
									);
								}),
							);
						};
					},
					Q = function (e) {
						return function (t, r, n) {
							return e.transporter.read(
								{
									method: b,
									path: f(
										"1/answers/%s/prediction",
										e.indexName,
									),
									data: { query: t, queryLanguages: r },
									cacheable: !0,
								},
								n,
							);
						};
					},
					C = function (e) {
						return function (t, r) {
							return e.transporter.read(
								{
									method: b,
									path: f("1/indexes/%s/query", e.indexName),
									data: { query: t },
									cacheable: !0,
								},
								r,
							);
						};
					},
					k = function (e) {
						return function (t, r, n) {
							return e.transporter.read(
								{
									method: b,
									path: f(
										"1/indexes/%s/facets/%s/query",
										e.indexName,
										t,
									),
									data: { facetQuery: r },
									cacheable: !0,
								},
								n,
							);
						};
					},
					D = 1,
					I = 2,
					q = 3;
				function L(e, t, n) {
					var i,
						a = {
							appId: e,
							apiKey: t,
							timeouts: { connect: 1, read: 2, write: 30 },
							requester: {
								send: function (e) {
									return new Promise(function (t) {
										var r = new XMLHttpRequest();
										r.open(e.method, e.url, !0),
											Object.keys(e.headers).forEach(
												function (t) {
													return r.setRequestHeader(
														t,
														e.headers[t],
													);
												},
											);
										var n,
											i = function (e, n) {
												return setTimeout(function () {
													r.abort(),
														t({
															status: 0,
															content: n,
															isTimedOut: !0,
														});
												}, 1e3 * e);
											},
											a = i(
												e.connectTimeout,
												"Connection timeout",
											);
										(r.onreadystatechange = function () {
											r.readyState > r.OPENED &&
												void 0 === n &&
												(clearTimeout(a),
												(n = i(
													e.responseTimeout,
													"Socket timeout",
												)));
										}),
											(r.onerror = function () {
												0 === r.status &&
													(clearTimeout(a),
													clearTimeout(n),
													t({
														content:
															r.responseText ||
															"Network request failed",
														status: r.status,
														isTimedOut: !1,
													}));
											}),
											(r.onload = function () {
												clearTimeout(a),
													clearTimeout(n),
													t({
														content: r.responseText,
														status: r.status,
														isTimedOut: !1,
													});
											}),
											r.send(e.data);
									});
								},
							},
							logger:
								((i = q),
								{
									debug: function (e, t) {
										return (
											D >= i && console.debug(e, t),
											Promise.resolve()
										);
									},
									info: function (e, t) {
										return (
											I >= i && console.info(e, t),
											Promise.resolve()
										);
									},
									error: function (e, t) {
										return (
											console.error(e, t),
											Promise.resolve()
										);
									},
								}),
							responsesCache: u(),
							requestsCache: u({ serializable: !1 }),
							hostsCache: c({
								caches: [
									s({
										key: "".concat("4.11.0", "-").concat(e),
									}),
									u(),
								],
							}),
							userAgent: _("4.11.0").add({
								segment: "Browser",
								version: "lite",
							}),
							authMode: l.WithinQueryParameters,
						};
					return N(
						r(
							r(r({}, a), n),
							{},
							{
								methods: {
									search: S,
									searchForFacetValues: T,
									multipleQueries: S,
									multipleSearchForFacetValues: T,
									customRequest: A,
									initIndex: function (e) {
										return function (t) {
											return H(e)(t, {
												methods: {
													search: C,
													searchForFacetValues: k,
													findAnswers: Q,
												},
											});
										};
									},
								},
							},
						),
					);
				}
				return (L.version = "4.11.0"), L;
			})();
		},
		9343: (e, t, r) => {
			"use strict";
			r.r(t), r.d(t, { default: () => T });
			var n = r(7294),
				i = r(290),
				a = r.n(i),
				s = r(8131),
				c = r.n(s),
				u = r(6010),
				o = r(9105),
				h = r(6742),
				f = r(412),
				l = r(9306),
				m = r(2263),
				d = r(907),
				v = r(6397),
				p = r(2049),
				g = r(4973);
			const y = "searchQueryInput_4zAW",
				R = "searchVersionInput_ozis",
				F = "searchResultsColumn_7sbA",
				b = "algoliaLogo_ayeM",
				P = "algoliaLogoPathFill_UrkK",
				j = "searchResultItem_Hr8z",
				_ = "searchResultItemHeading_Ydj3",
				E = "searchResultItemPath_tbl0",
				x = "searchResultItemSummary_ESJ1",
				O = "searchQueryColumn_+SJI",
				w = "searchVersionColumn_nDgT",
				N = "searchLogoColumn_CHXe",
				A = "loadingSpinner_qctK",
				H = "loader_g07B";
			var S = function (e) {
				var t = e.docsSearchVersionsHelpers,
					r = Object.entries(t.allDocsData).filter(function (e) {
						return e[1].versions.length > 1;
					});
				return n.createElement(
					"div",
					{
						className: (0, u.Z)(
							"col",
							"col--3",
							"padding-left--none",
							w,
						),
					},
					r.map(function (e) {
						var i = e[0],
							a = e[1],
							s = r.length > 1 ? i + ": " : "";
						return n.createElement(
							"select",
							{
								key: i,
								onChange: function (e) {
									return t.setSearchVersion(
										i,
										e.target.value,
									);
								},
								defaultValue: t.searchVersions[i],
								className: R,
							},
							a.versions.map(function (e, t) {
								return n.createElement("option", {
									key: t,
									label: "" + s + e.label,
									value: e.name,
								});
							}),
						);
					}),
				);
			};
			const T = function () {
				var e,
					t,
					r,
					i,
					s,
					R,
					w = (0, m.Z)(),
					T = w.siteConfig.themeConfig.algolia,
					Q = T.appId,
					C = T.apiKey,
					k = T.indexName,
					D = w.i18n.currentLocale,
					I =
						((e = (0, l.c2)().selectMessage),
						function (t) {
							return e(
								t,
								(0, g.I)(
									{
										id: "theme.SearchPage.documentsFound.plurals",
										description:
											'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
										message:
											"One document found|{count} documents found",
									},
									{ count: t },
								),
							);
						}),
					q =
						((t = (0, d._r)()),
						(r = (0, n.useState)(function () {
							return Object.entries(t).reduce(function (e, t) {
								var r,
									n = t[0],
									i = t[1];
								return Object.assign(
									{},
									e,
									(((r = {})[n] = i.versions[0].name), r),
								);
							}, {});
						})),
						(i = r[0]),
						(s = r[1]),
						(R = Object.values(t).some(function (e) {
							return e.versions.length > 1;
						})),
						{
							allDocsData: t,
							versioningEnabled: R,
							searchVersions: i,
							setSearchVersion: function (e, t) {
								return s(function (r) {
									var n;
									return Object.assign(
										{},
										r,
										(((n = {})[e] = t), n),
									);
								});
							},
						}),
					L = (0, v.Z)(),
					V = L.searchValue,
					z = L.updateSearchPath,
					B = (0, n.useState)(V),
					M = B[0],
					J = B[1],
					W = {
						items: [],
						query: null,
						totalResults: null,
						totalPages: null,
						lastPage: null,
						hasMore: null,
						loading: null,
					},
					U = (0, n.useReducer)(function (e, t) {
						var r = t.type,
							n = t.value;
						switch (r) {
							case "reset":
								return W;
							case "loading":
								return Object.assign({}, e, { loading: !0 });
							case "update":
								return M !== n.query
									? e
									: Object.assign({}, n, {
											items:
												0 === n.lastPage
													? n.items
													: e.items.concat(n.items),
										});
							case "advance":
								var i = e.totalPages > e.lastPage + 1;
								return Object.assign({}, e, {
									lastPage: i ? e.lastPage + 1 : e.lastPage,
									hasMore: i,
								});
							default:
								return e;
						}
					}, W),
					Z = U[0],
					K = U[1],
					X = a()(Q, C),
					G = c()(X, k, {
						hitsPerPage: 15,
						advancedSyntax: !0,
						disjunctiveFacets: ["language", "docusaurus_tag"],
					});
				G.on("result", function (e) {
					var t = e.results,
						r = t.query,
						n = t.hits,
						i = t.page,
						a = t.nbHits,
						s = t.nbPages;
					if ("" !== r && n instanceof Array) {
						var c = function (e) {
								return e.replace(
									/algolia-docsearch-suggestion--highlight/g,
									"search-result-match",
								);
							},
							u = n.map(function (e) {
								var t = e.url,
									r = e._highlightResult.hierarchy,
									n = e._snippetResult,
									i = void 0 === n ? {} : n,
									a = new URL(t),
									s = a.pathname,
									u = a.hash,
									o = Object.keys(r).map(function (e) {
										return c(r[e].value);
									});
								return {
									title: o.pop(),
									url: s + u,
									summary: i.content
										? c(i.content.value) + "..."
										: "",
									breadcrumbs: o,
								};
							});
						K({
							type: "update",
							value: {
								items: u,
								query: r,
								totalResults: a,
								totalPages: s,
								lastPage: i,
								hasMore: s > i + 1,
								loading: !1,
							},
						});
					} else K({ type: "reset" });
				});
				var Y = (0, n.useState)(null),
					$ = Y[0],
					ee = Y[1],
					te = (0, n.useRef)(0),
					re = (0, n.useRef)(
						f.Z.canUseDOM &&
							new IntersectionObserver(
								function (e) {
									var t = e[0],
										r = t.isIntersecting,
										n = t.boundingClientRect.y;
									r &&
										te.current > n &&
										K({ type: "advance" }),
										(te.current = n);
								},
								{ threshold: 1 },
							),
					),
					ne = function () {
						return M
							? (0, g.I)(
									{
										id: "theme.SearchPage.existingResultsTitle",
										message: 'Search results for "{query}"',
										description:
											"The search page title for non-empty query",
									},
									{ query: M },
								)
							: (0, g.I)({
									id: "theme.SearchPage.emptyResultsTitle",
									message: "Search the documentation",
									description:
										"The search page title for empty query",
								});
					},
					ie = function (e) {
						void 0 === e && (e = 0),
							G.addDisjunctiveFacetRefinement(
								"docusaurus_tag",
								"default",
							),
							G.addDisjunctiveFacetRefinement("language", D),
							Object.entries(q.searchVersions).forEach(
								function (e) {
									var t = e[0],
										r = e[1];
									G.addDisjunctiveFacetRefinement(
										"docusaurus_tag",
										"docs-" + t + "-" + r,
									);
								},
							),
							G.setQuery(M).setPage(e).search();
					};
				return (
					(0, n.useEffect)(
						function () {
							if ($)
								return (
									re.current.observe($),
									function () {
										re.current.unobserve($);
									}
								);
						},
						[$],
					),
					(0, n.useEffect)(
						function () {
							z(M),
								K({ type: "reset" }),
								M &&
									(K({ type: "loading" }),
									setTimeout(function () {
										ie();
									}, 300));
						},
						[M, q.searchVersions],
					),
					(0, n.useEffect)(
						function () {
							Z.lastPage && 0 !== Z.lastPage && ie(Z.lastPage);
						},
						[Z.lastPage],
					),
					(0, n.useEffect)(
						function () {
							V && V !== M && J(V);
						},
						[V],
					),
					n.createElement(
						p.Z,
						{ wrapperClassName: "search-page-wrapper" },
						n.createElement(
							o.Z,
							null,
							n.createElement("title", null, (0, l.pe)(ne())),
							n.createElement("meta", {
								property: "robots",
								content: "noindex, follow",
							}),
						),
						n.createElement(
							"div",
							{ className: "container margin-vert--lg" },
							n.createElement("h1", null, ne()),
							n.createElement(
								"form",
								{
									className: "row",
									onSubmit: function (e) {
										return e.preventDefault();
									},
								},
								n.createElement(
									"div",
									{
										className: (0, u.Z)("col", O, {
											"col--9": q.versioningEnabled,
											"col--12": !q.versioningEnabled,
										}),
									},
									n.createElement("input", {
										type: "search",
										name: "q",
										className: y,
										placeholder: (0, g.I)({
											id: "theme.SearchPage.inputPlaceholder",
											message: "Type your search here",
											description:
												"The placeholder for search page input",
										}),
										"aria-label": (0, g.I)({
											id: "theme.SearchPage.inputLabel",
											message: "Search",
											description:
												"The ARIA label for search page input",
										}),
										onChange: function (e) {
											return J(e.target.value);
										},
										value: M,
										autoComplete: "off",
										autoFocus: !0,
									}),
								),
								q.versioningEnabled &&
									n.createElement(S, {
										docsSearchVersionsHelpers: q,
									}),
							),
							n.createElement(
								"div",
								{ className: "row" },
								n.createElement(
									"div",
									{ className: (0, u.Z)("col", "col--8", F) },
									!!Z.totalResults && I(Z.totalResults),
								),
								n.createElement(
									"div",
									{
										className: (0, u.Z)(
											"col",
											"col--4",
											"text--right",
											N,
										),
									},
									n.createElement(
										"a",
										{
											target: "_blank",
											rel: "noopener noreferrer",
											href: "https://www.algolia.com/",
											"aria-label": (0, g.I)({
												id: "theme.SearchPage.algoliaLabel",
												message: "Search by Algolia",
												description:
													"The ARIA label for Algolia mention",
											}),
										},
										n.createElement(
											"svg",
											{
												viewBox: "0 0 168 24",
												className: b,
											},
											n.createElement(
												"g",
												{ fill: "none" },
												n.createElement("path", {
													className: P,
													d: "M120.925 18.804c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199 5.7 5.7 0 0 0-.897.069 2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874a32.5 32.5 0 0 1-1.868.314c-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525a3.24 3.24 0 0 1 1.047-1.106c.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483a6.8 6.8 0 0 1 .233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.75 7.75 0 0 0-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423a4.88 4.88 0 0 1 1.753 1.216 5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17zM6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503a61.27 61.27 0 0 1-.582-.271 13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z",
												}),
												n.createElement("path", {
													fill: "#5468FF",
													d: "M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938z",
												}),
												n.createElement("path", {
													fill: "white",
													d: "M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729 6.37 6.37 0 0 0 6.372-6.368 6.358 6.358 0 0 0-6.371-6.36",
												}),
											),
										),
									),
								),
							),
							Z.items.length > 0
								? n.createElement(
										"main",
										null,
										Z.items.map(function (e, t) {
											var r = e.title,
												i = e.url,
												a = e.summary,
												s = e.breadcrumbs;
											return n.createElement(
												"article",
												{ key: t, className: j },
												n.createElement(
													"h2",
													{ className: _ },
													n.createElement(h.Z, {
														to: i,
														dangerouslySetInnerHTML:
															{ __html: r },
													}),
												),
												s.length > 0 &&
													n.createElement(
														"nav",
														{
															"aria-label":
																"breadcrumbs",
														},
														n.createElement(
															"ul",
															{
																className: (0,
																u.Z)(
																	"breadcrumbs",
																	E,
																),
															},
															s.map(
																function (
																	e,
																	t,
																) {
																	return n.createElement(
																		"li",
																		{
																			key: t,
																			className:
																				"breadcrumbs__item",
																			dangerouslySetInnerHTML:
																				{
																					__html: e,
																				},
																		},
																	);
																},
															),
														),
													),
												a &&
													n.createElement("p", {
														className: x,
														dangerouslySetInnerHTML:
															{ __html: a },
													}),
											);
										}),
									)
								: [
										M &&
											!Z.loading &&
											n.createElement(
												"p",
												{ key: "no-results" },
												n.createElement(
													g.Z,
													{
														id: "theme.SearchPage.noResultsText",
														description:
															"The paragraph for empty search result",
													},
													"No results were found",
												),
											),
										!!Z.loading &&
											n.createElement("div", {
												key: "spinner",
												className: A,
											}),
									],
							Z.hasMore &&
								n.createElement(
									"div",
									{ className: H, ref: ee },
									n.createElement(
										g.Z,
										{
											id: "theme.SearchPage.fetchingNewResults",
											description:
												"The paragraph for fetching new search results",
										},
										"Fetching new results...",
									),
								),
						),
					)
				);
			};
		},
	},
]);
