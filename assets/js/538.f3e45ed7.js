/*! For license information please see 538.f3e45ed7.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[538],
	{
		3905: (t, e, i) => {
			i.d(e, { Zo: () => c, kt: () => f });
			var s = i(7294);
			function n(t, e, i) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (t[e] = i),
					t
				);
			}
			function o(t, e) {
				var i = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var s = Object.getOwnPropertySymbols(t);
					e &&
						(s = s.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e)
								.enumerable;
						})),
						i.push.apply(i, s);
				}
				return i;
			}
			function a(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2
						? o(Object(i), !0).forEach(function (e) {
								n(t, e, i[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									t,
									Object.getOwnPropertyDescriptors(i),
								)
							: o(Object(i)).forEach(function (e) {
									Object.defineProperty(
										t,
										e,
										Object.getOwnPropertyDescriptor(i, e),
									);
								});
				}
				return t;
			}
			function r(t, e) {
				if (null == t) return {};
				var i,
					s,
					n = (function (t, e) {
						if (null == t) return {};
						var i,
							s,
							n = {},
							o = Object.keys(t);
						for (s = 0; s < o.length; s++)
							(i = o[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					for (s = 0; s < o.length; s++)
						(i = o[s]),
							e.indexOf(i) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									t,
									i,
								) &&
									(n[i] = t[i]));
				}
				return n;
			}
			var l = s.createContext({}),
				h = function (t) {
					var e = s.useContext(l),
						i = e;
					return (
						t &&
							(i =
								"function" == typeof t ? t(e) : a(a({}, e), t)),
						i
					);
				},
				c = function (t) {
					var e = h(t.components);
					return s.createElement(
						l.Provider,
						{ value: e },
						t.children,
					);
				},
				d = {
					inlineCode: "code",
					wrapper: function (t) {
						var e = t.children;
						return s.createElement(s.Fragment, {}, e);
					},
				},
				u = s.forwardRef(function (t, e) {
					var i = t.components,
						n = t.mdxType,
						o = t.originalType,
						l = t.parentName,
						c = r(t, [
							"components",
							"mdxType",
							"originalType",
							"parentName",
						]),
						u = h(i),
						f = n,
						g = u["".concat(l, ".").concat(f)] || u[f] || d[f] || o;
					return i
						? s.createElement(
								g,
								a(a({ ref: e }, c), {}, { components: i }),
							)
						: s.createElement(g, a({ ref: e }, c));
				});
			function f(t, e) {
				var i = arguments,
					n = e && e.mdxType;
				if ("string" == typeof t || n) {
					var o = i.length,
						a = new Array(o);
					a[0] = u;
					var r = {};
					for (var l in e) hasOwnProperty.call(e, l) && (r[l] = e[l]);
					(r.originalType = t),
						(r.mdxType = "string" == typeof t ? t : n),
						(a[1] = r);
					for (var h = 2; h < o; h++) a[h] = i[h];
					return s.createElement.apply(null, a);
				}
				return s.createElement.apply(null, i);
			}
			u.displayName = "MDXCreateElement";
		},
		1262: (t, e, i) => {
			i.d(e, { Z: () => o });
			var s = i(7294),
				n = i(2263);
			const o = function (t) {
				var e = t.children,
					i = t.fallback;
				return (0, n.Z)().isClient && null != e
					? s.createElement(s.Fragment, null, e())
					: i || null;
			};
		},
		5902: (t, e, i) => {
			i.d(e, { x1: () => ma });
			const s =
				"undefined" == typeof window
					? function (t) {
							return t();
						}
					: window.requestAnimationFrame;
			function n(t, e, i) {
				const n = i || ((t) => Array.prototype.slice.call(t));
				let o = !1,
					a = [];
				return function (...i) {
					(a = n(i)),
						o ||
							((o = !0),
							s.call(window, () => {
								(o = !1), t.apply(e, a);
							}));
				};
			}
			const o = (t) =>
					"start" === t ? "left" : "end" === t ? "right" : "center",
				a = (t, e, i) =>
					"start" === t ? e : "end" === t ? i : (e + i) / 2;
			function r() {}
			const l = (function () {
				let t = 0;
				return function () {
					return t++;
				};
			})();
			function h(t) {
				return null == t;
			}
			function c(t) {
				if (Array.isArray && Array.isArray(t)) return !0;
				const e = Object.prototype.toString.call(t);
				return (
					"[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
				);
			}
			function d(t) {
				return (
					null !== t &&
					"[object Object]" === Object.prototype.toString.call(t)
				);
			}
			const u = (t) =>
				("number" == typeof t || t instanceof Number) && isFinite(+t);
			function f(t, e) {
				return u(t) ? t : e;
			}
			function g(t, e) {
				return void 0 === t ? e : t;
			}
			const p = (t, e) =>
				"string" == typeof t && t.endsWith("%")
					? (parseFloat(t) / 100) * e
					: +t;
			function m(t, e, i) {
				if (t && "function" == typeof t.call) return t.apply(i, e);
			}
			function b(t, e, i, s) {
				let n, o, a;
				if (c(t))
					if (((o = t.length), s))
						for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
					else for (n = 0; n < o; n++) e.call(i, t[n], n);
				else if (d(t))
					for (a = Object.keys(t), o = a.length, n = 0; n < o; n++)
						e.call(i, t[a[n]], a[n]);
			}
			function x(t, e) {
				let i, s, n, o;
				if (!t || !e || t.length !== e.length) return !1;
				for (i = 0, s = t.length; i < s; ++i)
					if (
						((n = t[i]),
						(o = e[i]),
						n.datasetIndex !== o.datasetIndex ||
							n.index !== o.index)
					)
						return !1;
				return !0;
			}
			function _(t) {
				if (c(t)) return t.map(_);
				if (d(t)) {
					const e = Object.create(null),
						i = Object.keys(t),
						s = i.length;
					let n = 0;
					for (; n < s; ++n) e[i[n]] = _(t[i[n]]);
					return e;
				}
				return t;
			}
			function y(t) {
				return (
					-1 === ["__proto__", "prototype", "constructor"].indexOf(t)
				);
			}
			function v(t, e, i, s) {
				if (!y(t)) return;
				const n = e[t],
					o = i[t];
				d(n) && d(o) ? w(n, o, s) : (e[t] = _(o));
			}
			function w(t, e, i) {
				const s = c(e) ? e : [e],
					n = s.length;
				if (!d(t)) return t;
				const o = (i = i || {}).merger || v;
				for (let a = 0; a < n; ++a) {
					if (!d((e = s[a]))) continue;
					const n = Object.keys(e);
					for (let s = 0, a = n.length; s < a; ++s) o(n[s], t, e, i);
				}
				return t;
			}
			function M(t, e) {
				return w(t, e, { merger: k });
			}
			function k(t, e, i) {
				if (!y(t)) return;
				const s = e[t],
					n = i[t];
				d(s) && d(n)
					? M(s, n)
					: Object.prototype.hasOwnProperty.call(e, t) ||
						(e[t] = _(n));
			}
			function S(t, e) {
				const i = t.indexOf(".", e);
				return -1 === i ? t.length : i;
			}
			function P(t, e) {
				if ("" === e) return t;
				let i = 0,
					s = S(e, i);
				for (; t && s > i; )
					(t = t[e.substr(i, s - i)]), (i = s + 1), (s = S(e, i));
				return t;
			}
			function O(t) {
				return t.charAt(0).toUpperCase() + t.slice(1);
			}
			const D = (t) => void 0 !== t,
				C = (t) => "function" == typeof t,
				A = Math.PI,
				T = 2 * A,
				E = T + A,
				L = Number.POSITIVE_INFINITY,
				R = A / 180,
				I = A / 2,
				z = A / 4,
				F = (2 * A) / 3,
				V = Math.log10,
				B = Math.sign;
			function j(t) {
				const e = Math.round(t);
				t = N(t, e, t / 1e3) ? e : t;
				const i = Math.pow(10, Math.floor(V(t))),
					s = t / i;
				return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
			}
			function W(t) {
				return !isNaN(parseFloat(t)) && isFinite(t);
			}
			function N(t, e, i) {
				return Math.abs(t - e) < i;
			}
			function H(t, e, i) {
				let s, n, o;
				for (s = 0, n = t.length; s < n; s++)
					(o = t[s][i]),
						isNaN(o) ||
							((e.min = Math.min(e.min, o)),
							(e.max = Math.max(e.max, o)));
			}
			function $(t) {
				return t * (A / 180);
			}
			function Y(t) {
				return t * (180 / A);
			}
			function U(t) {
				if (!u(t)) return;
				let e = 1,
					i = 0;
				for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
				return i;
			}
			function X(t, e) {
				return Math.sqrt(
					Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2),
				);
			}
			function q(t, e) {
				return ((t - e + E) % T) - A;
			}
			function K(t) {
				return ((t % T) + T) % T;
			}
			function Z(t, e, i, s) {
				const n = K(t),
					o = K(e),
					a = K(i),
					r = K(o - n),
					l = K(a - n),
					h = K(n - o),
					c = K(n - a);
				return n === o || n === a || (s && o === a) || (r > l && h < c);
			}
			function G(t, e, i) {
				return Math.max(e, Math.min(i, t));
			}
			const Q = (t) => 0 === t || 1 === t,
				J = (t, e, i) =>
					-Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * T) / i),
				tt = (t, e, i) =>
					Math.pow(2, -10 * t) * Math.sin(((t - e) * T) / i) + 1,
				et = {
					linear: (t) => t,
					easeInQuad: (t) => t * t,
					easeOutQuad: (t) => -t * (t - 2),
					easeInOutQuad: (t) =>
						(t /= 0.5) < 1
							? 0.5 * t * t
							: -0.5 * (--t * (t - 2) - 1),
					easeInCubic: (t) => t * t * t,
					easeOutCubic: (t) => (t -= 1) * t * t + 1,
					easeInOutCubic: (t) =>
						(t /= 0.5) < 1
							? 0.5 * t * t * t
							: 0.5 * ((t -= 2) * t * t + 2),
					easeInQuart: (t) => t * t * t * t,
					easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
					easeInOutQuart: (t) =>
						(t /= 0.5) < 1
							? 0.5 * t * t * t * t
							: -0.5 * ((t -= 2) * t * t * t - 2),
					easeInQuint: (t) => t * t * t * t * t,
					easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
					easeInOutQuint: (t) =>
						(t /= 0.5) < 1
							? 0.5 * t * t * t * t * t
							: 0.5 * ((t -= 2) * t * t * t * t + 2),
					easeInSine: (t) => 1 - Math.cos(t * I),
					easeOutSine: (t) => Math.sin(t * I),
					easeInOutSine: (t) => -0.5 * (Math.cos(A * t) - 1),
					easeInExpo: (t) =>
						0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
					easeOutExpo: (t) =>
						1 === t ? 1 : 1 - Math.pow(2, -10 * t),
					easeInOutExpo: (t) =>
						Q(t)
							? t
							: t < 0.5
								? 0.5 * Math.pow(2, 10 * (2 * t - 1))
								: 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
					easeInCirc: (t) =>
						t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
					easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
					easeInOutCirc: (t) =>
						(t /= 0.5) < 1
							? -0.5 * (Math.sqrt(1 - t * t) - 1)
							: 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
					easeInElastic: (t) => (Q(t) ? t : J(t, 0.075, 0.3)),
					easeOutElastic: (t) => (Q(t) ? t : tt(t, 0.075, 0.3)),
					easeInOutElastic(t) {
						const e = 0.1125;
						return Q(t)
							? t
							: t < 0.5
								? 0.5 * J(2 * t, e, 0.45)
								: 0.5 + 0.5 * tt(2 * t - 1, e, 0.45);
					},
					easeInBack(t) {
						const e = 1.70158;
						return t * t * ((e + 1) * t - e);
					},
					easeOutBack(t) {
						const e = 1.70158;
						return (t -= 1) * t * ((e + 1) * t + e) + 1;
					},
					easeInOutBack(t) {
						let e = 1.70158;
						return (t /= 0.5) < 1
							? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
							: 0.5 *
									((t -= 2) *
										t *
										((1 + (e *= 1.525)) * t + e) +
										2);
					},
					easeInBounce: (t) => 1 - et.easeOutBounce(1 - t),
					easeOutBounce(t) {
						const e = 7.5625,
							i = 2.75;
						return t < 1 / i
							? e * t * t
							: t < 2 / i
								? e * (t -= 1.5 / i) * t + 0.75
								: t < 2.5 / i
									? e * (t -= 2.25 / i) * t + 0.9375
									: e * (t -= 2.625 / i) * t + 0.984375;
					},
					easeInOutBounce: (t) =>
						t < 0.5
							? 0.5 * et.easeInBounce(2 * t)
							: 0.5 * et.easeOutBounce(2 * t - 1) + 0.5,
				},
				it = {
					0: 0,
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
					7: 7,
					8: 8,
					9: 9,
					A: 10,
					B: 11,
					C: 12,
					D: 13,
					E: 14,
					F: 15,
					a: 10,
					b: 11,
					c: 12,
					d: 13,
					e: 14,
					f: 15,
				},
				st = "0123456789ABCDEF",
				nt = (t) => st[15 & t],
				ot = (t) => st[(240 & t) >> 4] + st[15 & t],
				at = (t) => (240 & t) >> 4 == (15 & t);
			function rt(t) {
				var e = (function (t) {
					return at(t.r) && at(t.g) && at(t.b) && at(t.a);
				})(t)
					? nt
					: ot;
				return t
					? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "")
					: t;
			}
			function lt(t) {
				return (t + 0.5) | 0;
			}
			const ht = (t, e, i) => Math.max(Math.min(t, i), e);
			function ct(t) {
				return ht(lt(2.55 * t), 0, 255);
			}
			function dt(t) {
				return ht(lt(255 * t), 0, 255);
			}
			function ut(t) {
				return ht(lt(t / 2.55) / 100, 0, 1);
			}
			function ft(t) {
				return ht(lt(100 * t), 0, 100);
			}
			const gt =
				/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
			const pt =
				/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
			function mt(t, e, i) {
				const s = e * Math.min(i, 1 - i),
					n = (e, n = (e + t / 30) % 12) =>
						i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
				return [n(0), n(8), n(4)];
			}
			function bt(t, e, i) {
				const s = (s, n = (s + t / 60) % 6) =>
					i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
				return [s(5), s(3), s(1)];
			}
			function xt(t, e, i) {
				const s = mt(t, 1, 0.5);
				let n;
				for (
					e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0;
					n < 3;
					n++
				)
					(s[n] *= 1 - e - i), (s[n] += e);
				return s;
			}
			function _t(t) {
				const e = t.r / 255,
					i = t.g / 255,
					s = t.b / 255,
					n = Math.max(e, i, s),
					o = Math.min(e, i, s),
					a = (n + o) / 2;
				let r, l, h;
				return (
					n !== o &&
						((h = n - o),
						(l = a > 0.5 ? h / (2 - n - o) : h / (n + o)),
						(r =
							n === e
								? (i - s) / h + (i < s ? 6 : 0)
								: n === i
									? (s - e) / h + 2
									: (e - i) / h + 4),
						(r = 60 * r + 0.5)),
					[0 | r, l || 0, a]
				);
			}
			function yt(t, e, i, s) {
				return (
					Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)
				).map(dt);
			}
			function vt(t, e, i) {
				return yt(mt, t, e, i);
			}
			function wt(t) {
				return ((t % 360) + 360) % 360;
			}
			function Mt(t) {
				const e = pt.exec(t);
				let i,
					s = 255;
				if (!e) return;
				e[5] !== i && (s = e[6] ? ct(+e[5]) : dt(+e[5]));
				const n = wt(+e[2]),
					o = +e[3] / 100,
					a = +e[4] / 100;
				return (
					(i =
						"hwb" === e[1]
							? (function (t, e, i) {
									return yt(xt, t, e, i);
								})(n, o, a)
							: "hsv" === e[1]
								? (function (t, e, i) {
										return yt(bt, t, e, i);
									})(n, o, a)
								: vt(n, o, a)),
					{ r: i[0], g: i[1], b: i[2], a: s }
				);
			}
			const kt = {
					x: "dark",
					Z: "light",
					Y: "re",
					X: "blu",
					W: "gr",
					V: "medium",
					U: "slate",
					A: "ee",
					T: "ol",
					S: "or",
					B: "ra",
					C: "lateg",
					D: "ights",
					R: "in",
					Q: "turquois",
					E: "hi",
					P: "ro",
					O: "al",
					N: "le",
					M: "de",
					L: "yello",
					F: "en",
					K: "ch",
					G: "arks",
					H: "ea",
					I: "ightg",
					J: "wh",
				},
				St = {
					OiceXe: "f0f8ff",
					antiquewEte: "faebd7",
					aqua: "ffff",
					aquamarRe: "7fffd4",
					azuY: "f0ffff",
					beige: "f5f5dc",
					bisque: "ffe4c4",
					black: "0",
					blanKedOmond: "ffebcd",
					Xe: "ff",
					XeviTet: "8a2be2",
					bPwn: "a52a2a",
					burlywood: "deb887",
					caMtXe: "5f9ea0",
					KartYuse: "7fff00",
					KocTate: "d2691e",
					cSO: "ff7f50",
					cSnflowerXe: "6495ed",
					cSnsilk: "fff8dc",
					crimson: "dc143c",
					cyan: "ffff",
					xXe: "8b",
					xcyan: "8b8b",
					xgTMnPd: "b8860b",
					xWay: "a9a9a9",
					xgYF: "6400",
					xgYy: "a9a9a9",
					xkhaki: "bdb76b",
					xmagFta: "8b008b",
					xTivegYF: "556b2f",
					xSange: "ff8c00",
					xScEd: "9932cc",
					xYd: "8b0000",
					xsOmon: "e9967a",
					xsHgYF: "8fbc8f",
					xUXe: "483d8b",
					xUWay: "2f4f4f",
					xUgYy: "2f4f4f",
					xQe: "ced1",
					xviTet: "9400d3",
					dAppRk: "ff1493",
					dApskyXe: "bfff",
					dimWay: "696969",
					dimgYy: "696969",
					dodgerXe: "1e90ff",
					fiYbrick: "b22222",
					flSOwEte: "fffaf0",
					foYstWAn: "228b22",
					fuKsia: "ff00ff",
					gaRsbSo: "dcdcdc",
					ghostwEte: "f8f8ff",
					gTd: "ffd700",
					gTMnPd: "daa520",
					Way: "808080",
					gYF: "8000",
					gYFLw: "adff2f",
					gYy: "808080",
					honeyMw: "f0fff0",
					hotpRk: "ff69b4",
					RdianYd: "cd5c5c",
					Rdigo: "4b0082",
					ivSy: "fffff0",
					khaki: "f0e68c",
					lavFMr: "e6e6fa",
					lavFMrXsh: "fff0f5",
					lawngYF: "7cfc00",
					NmoncEffon: "fffacd",
					ZXe: "add8e6",
					ZcSO: "f08080",
					Zcyan: "e0ffff",
					ZgTMnPdLw: "fafad2",
					ZWay: "d3d3d3",
					ZgYF: "90ee90",
					ZgYy: "d3d3d3",
					ZpRk: "ffb6c1",
					ZsOmon: "ffa07a",
					ZsHgYF: "20b2aa",
					ZskyXe: "87cefa",
					ZUWay: "778899",
					ZUgYy: "778899",
					ZstAlXe: "b0c4de",
					ZLw: "ffffe0",
					lime: "ff00",
					limegYF: "32cd32",
					lRF: "faf0e6",
					magFta: "ff00ff",
					maPon: "800000",
					VaquamarRe: "66cdaa",
					VXe: "cd",
					VScEd: "ba55d3",
					VpurpN: "9370db",
					VsHgYF: "3cb371",
					VUXe: "7b68ee",
					VsprRggYF: "fa9a",
					VQe: "48d1cc",
					VviTetYd: "c71585",
					midnightXe: "191970",
					mRtcYam: "f5fffa",
					mistyPse: "ffe4e1",
					moccasR: "ffe4b5",
					navajowEte: "ffdead",
					navy: "80",
					Tdlace: "fdf5e6",
					Tive: "808000",
					TivedBb: "6b8e23",
					Sange: "ffa500",
					SangeYd: "ff4500",
					ScEd: "da70d6",
					pOegTMnPd: "eee8aa",
					pOegYF: "98fb98",
					pOeQe: "afeeee",
					pOeviTetYd: "db7093",
					papayawEp: "ffefd5",
					pHKpuff: "ffdab9",
					peru: "cd853f",
					pRk: "ffc0cb",
					plum: "dda0dd",
					powMrXe: "b0e0e6",
					purpN: "800080",
					YbeccapurpN: "663399",
					Yd: "ff0000",
					Psybrown: "bc8f8f",
					PyOXe: "4169e1",
					saddNbPwn: "8b4513",
					sOmon: "fa8072",
					sandybPwn: "f4a460",
					sHgYF: "2e8b57",
					sHshell: "fff5ee",
					siFna: "a0522d",
					silver: "c0c0c0",
					skyXe: "87ceeb",
					UXe: "6a5acd",
					UWay: "708090",
					UgYy: "708090",
					snow: "fffafa",
					sprRggYF: "ff7f",
					stAlXe: "4682b4",
					tan: "d2b48c",
					teO: "8080",
					tEstN: "d8bfd8",
					tomato: "ff6347",
					Qe: "40e0d0",
					viTet: "ee82ee",
					JHt: "f5deb3",
					wEte: "ffffff",
					wEtesmoke: "f5f5f5",
					Lw: "ffff00",
					LwgYF: "9acd32",
				};
			let Pt;
			function Ot(t) {
				Pt ||
					((Pt = (function () {
						const t = {},
							e = Object.keys(St),
							i = Object.keys(kt);
						let s, n, o, a, r;
						for (s = 0; s < e.length; s++) {
							for (a = r = e[s], n = 0; n < i.length; n++)
								(o = i[n]), (r = r.replace(o, kt[o]));
							(o = parseInt(St[a], 16)),
								(t[r] = [
									(o >> 16) & 255,
									(o >> 8) & 255,
									255 & o,
								]);
						}
						return t;
					})()),
					(Pt.transparent = [0, 0, 0, 0]));
				const e = Pt[t.toLowerCase()];
				return (
					e && {
						r: e[0],
						g: e[1],
						b: e[2],
						a: 4 === e.length ? e[3] : 255,
					}
				);
			}
			function Dt(t, e, i) {
				if (t) {
					let s = _t(t);
					(s[e] = Math.max(
						0,
						Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1),
					)),
						(s = vt(s)),
						(t.r = s[0]),
						(t.g = s[1]),
						(t.b = s[2]);
				}
			}
			function Ct(t, e) {
				return t ? Object.assign(e || {}, t) : t;
			}
			function At(t) {
				var e = { r: 0, g: 0, b: 0, a: 255 };
				return (
					Array.isArray(t)
						? t.length >= 3 &&
							((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
							t.length > 3 && (e.a = dt(t[3])))
						: ((e = Ct(t, { r: 0, g: 0, b: 0, a: 1 })).a = dt(e.a)),
					e
				);
			}
			function Tt(t) {
				return "r" === t.charAt(0)
					? (function (t) {
							const e = gt.exec(t);
							let i,
								s,
								n,
								o = 255;
							if (e) {
								if (e[7] !== i) {
									const t = +e[7];
									o = 255 & (e[8] ? ct(t) : 255 * t);
								}
								return (
									(i = +e[1]),
									(s = +e[3]),
									(n = +e[5]),
									(i = 255 & (e[2] ? ct(i) : i)),
									(s = 255 & (e[4] ? ct(s) : s)),
									(n = 255 & (e[6] ? ct(n) : n)),
									{ r: i, g: s, b: n, a: o }
								);
							}
						})(t)
					: Mt(t);
			}
			class Et {
				constructor(t) {
					if (t instanceof Et) return t;
					const e = typeof t;
					let i;
					var s, n, o;
					"object" === e
						? (i = At(t))
						: "string" === e &&
							((o = (s = t).length),
							"#" === s[0] &&
								(4 === o || 5 === o
									? (n = {
											r: 255 & (17 * it[s[1]]),
											g: 255 & (17 * it[s[2]]),
											b: 255 & (17 * it[s[3]]),
											a: 5 === o ? 17 * it[s[4]] : 255,
										})
									: (7 !== o && 9 !== o) ||
										(n = {
											r: (it[s[1]] << 4) | it[s[2]],
											g: (it[s[3]] << 4) | it[s[4]],
											b: (it[s[5]] << 4) | it[s[6]],
											a:
												9 === o
													? (it[s[7]] << 4) | it[s[8]]
													: 255,
										})),
							(i = n || Ot(t) || Tt(t))),
						(this._rgb = i),
						(this._valid = !!i);
				}
				get valid() {
					return this._valid;
				}
				get rgb() {
					var t = Ct(this._rgb);
					return t && (t.a = ut(t.a)), t;
				}
				set rgb(t) {
					this._rgb = At(t);
				}
				rgbString() {
					return this._valid
						? (t = this._rgb) &&
								(t.a < 255
									? `rgba(${t.r}, ${t.g}, ${t.b}, ${ut(t.a)})`
									: `rgb(${t.r}, ${t.g}, ${t.b})`)
						: this._rgb;
					var t;
				}
				hexString() {
					return this._valid ? rt(this._rgb) : this._rgb;
				}
				hslString() {
					return this._valid
						? (function (t) {
								if (!t) return;
								const e = _t(t),
									i = e[0],
									s = ft(e[1]),
									n = ft(e[2]);
								return t.a < 255
									? `hsla(${i}, ${s}%, ${n}%, ${ut(t.a)})`
									: `hsl(${i}, ${s}%, ${n}%)`;
							})(this._rgb)
						: this._rgb;
				}
				mix(t, e) {
					const i = this;
					if (t) {
						const s = i.rgb,
							n = t.rgb;
						let o;
						const a = e === o ? 0.5 : e,
							r = 2 * a - 1,
							l = s.a - n.a,
							h =
								((r * l == -1 ? r : (r + l) / (1 + r * l)) +
									1) /
								2;
						(o = 1 - h),
							(s.r = 255 & (h * s.r + o * n.r + 0.5)),
							(s.g = 255 & (h * s.g + o * n.g + 0.5)),
							(s.b = 255 & (h * s.b + o * n.b + 0.5)),
							(s.a = a * s.a + (1 - a) * n.a),
							(i.rgb = s);
					}
					return i;
				}
				clone() {
					return new Et(this.rgb);
				}
				alpha(t) {
					return (this._rgb.a = dt(t)), this;
				}
				clearer(t) {
					return (this._rgb.a *= 1 - t), this;
				}
				greyscale() {
					const t = this._rgb,
						e = lt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
					return (t.r = t.g = t.b = e), this;
				}
				opaquer(t) {
					return (this._rgb.a *= 1 + t), this;
				}
				negate() {
					const t = this._rgb;
					return (
						(t.r = 255 - t.r),
						(t.g = 255 - t.g),
						(t.b = 255 - t.b),
						this
					);
				}
				lighten(t) {
					return Dt(this._rgb, 2, t), this;
				}
				darken(t) {
					return Dt(this._rgb, 2, -t), this;
				}
				saturate(t) {
					return Dt(this._rgb, 1, t), this;
				}
				desaturate(t) {
					return Dt(this._rgb, 1, -t), this;
				}
				rotate(t) {
					return (
						(function (t, e) {
							var i = _t(t);
							(i[0] = wt(i[0] + e)),
								(i = vt(i)),
								(t.r = i[0]),
								(t.g = i[1]),
								(t.b = i[2]);
						})(this._rgb, t),
						this
					);
				}
			}
			function Lt(t) {
				return new Et(t);
			}
			const Rt = (t) =>
				t instanceof CanvasGradient || t instanceof CanvasPattern;
			function It(t) {
				return Rt(t) ? t : Lt(t);
			}
			function zt(t) {
				return Rt(t) ? t : Lt(t).saturate(0.5).darken(0.1).hexString();
			}
			const Ft = Object.create(null),
				Vt = Object.create(null);
			function Bt(t, e) {
				if (!e) return t;
				const i = e.split(".");
				for (let s = 0, n = i.length; s < n; ++s) {
					const e = i[s];
					t = t[e] || (t[e] = Object.create(null));
				}
				return t;
			}
			function jt(t, e, i) {
				return "string" == typeof e ? w(Bt(t, e), i) : w(Bt(t, ""), e);
			}
			var Wt = new (class {
				constructor(t) {
					(this.animation = void 0),
						(this.backgroundColor = "rgba(0,0,0,0.1)"),
						(this.borderColor = "rgba(0,0,0,0.1)"),
						(this.color = "#666"),
						(this.datasets = {}),
						(this.devicePixelRatio = (t) =>
							t.chart.platform.getDevicePixelRatio()),
						(this.elements = {}),
						(this.events = [
							"mousemove",
							"mouseout",
							"click",
							"touchstart",
							"touchmove",
						]),
						(this.font = {
							family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
							size: 12,
							style: "normal",
							lineHeight: 1.2,
							weight: null,
						}),
						(this.hover = {}),
						(this.hoverBackgroundColor = (t, e) =>
							zt(e.backgroundColor)),
						(this.hoverBorderColor = (t, e) => zt(e.borderColor)),
						(this.hoverColor = (t, e) => zt(e.color)),
						(this.indexAxis = "x"),
						(this.interaction = { mode: "nearest", intersect: !0 }),
						(this.maintainAspectRatio = !0),
						(this.onHover = null),
						(this.onClick = null),
						(this.parsing = !0),
						(this.plugins = {}),
						(this.responsive = !0),
						(this.scale = void 0),
						(this.scales = {}),
						(this.showLine = !0),
						this.describe(t);
				}
				set(t, e) {
					return jt(this, t, e);
				}
				get(t) {
					return Bt(this, t);
				}
				describe(t, e) {
					return jt(Vt, t, e);
				}
				override(t, e) {
					return jt(Ft, t, e);
				}
				route(t, e, i, s) {
					const n = Bt(this, t),
						o = Bt(this, i),
						a = "_" + e;
					Object.defineProperties(n, {
						[a]: { value: n[e], writable: !0 },
						[e]: {
							enumerable: !0,
							get() {
								const t = this[a],
									e = o[s];
								return d(t) ? Object.assign({}, e, t) : g(t, e);
							},
							set(t) {
								this[a] = t;
							},
						},
					});
				}
			})({
				_scriptable: (t) => !t.startsWith("on"),
				_indexable: (t) => "events" !== t,
				hover: { _fallback: "interaction" },
				interaction: { _scriptable: !1, _indexable: !1 },
			});
			function Nt(t, e, i, s, n) {
				let o = e[n];
				return (
					o || ((o = e[n] = t.measureText(n).width), i.push(n)),
					o > s && (s = o),
					s
				);
			}
			function Ht(t, e, i, s) {
				let n = ((s = s || {}).data = s.data || {}),
					o = (s.garbageCollect = s.garbageCollect || []);
				s.font !== e &&
					((n = s.data = {}),
					(o = s.garbageCollect = []),
					(s.font = e)),
					t.save(),
					(t.font = e);
				let a = 0;
				const r = i.length;
				let l, h, d, u, f;
				for (l = 0; l < r; l++)
					if (((u = i[l]), null != u && !0 !== c(u)))
						a = Nt(t, n, o, a, u);
					else if (c(u))
						for (h = 0, d = u.length; h < d; h++)
							(f = u[h]),
								null == f || c(f) || (a = Nt(t, n, o, a, f));
				t.restore();
				const g = o.length / 2;
				if (g > i.length) {
					for (l = 0; l < g; l++) delete n[o[l]];
					o.splice(0, g);
				}
				return a;
			}
			function $t(t, e, i) {
				const s = t.currentDevicePixelRatio,
					n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
				return Math.round((e - n) * s) / s + n;
			}
			function Yt(t, e) {
				(e = e || t.getContext("2d")).save(),
					e.resetTransform(),
					e.clearRect(0, 0, t.width, t.height),
					e.restore();
			}
			function Ut(t, e, i, s) {
				let n, o, a, r, l;
				const h = e.pointStyle,
					c = e.rotation,
					d = e.radius;
				let u = (c || 0) * R;
				if (
					h &&
					"object" == typeof h &&
					((n = h.toString()),
					"[object HTMLImageElement]" === n ||
						"[object HTMLCanvasElement]" === n)
				)
					return (
						t.save(),
						t.translate(i, s),
						t.rotate(u),
						t.drawImage(
							h,
							-h.width / 2,
							-h.height / 2,
							h.width,
							h.height,
						),
						void t.restore()
					);
				if (!(isNaN(d) || d <= 0)) {
					switch ((t.beginPath(), h)) {
						default:
							t.arc(i, s, d, 0, T), t.closePath();
							break;
						case "triangle":
							t.moveTo(i + Math.sin(u) * d, s - Math.cos(u) * d),
								(u += F),
								t.lineTo(
									i + Math.sin(u) * d,
									s - Math.cos(u) * d,
								),
								(u += F),
								t.lineTo(
									i + Math.sin(u) * d,
									s - Math.cos(u) * d,
								),
								t.closePath();
							break;
						case "rectRounded":
							(l = 0.516 * d),
								(r = d - l),
								(o = Math.cos(u + z) * r),
								(a = Math.sin(u + z) * r),
								t.arc(i - o, s - a, l, u - A, u - I),
								t.arc(i + a, s - o, l, u - I, u),
								t.arc(i + o, s + a, l, u, u + I),
								t.arc(i - a, s + o, l, u + I, u + A),
								t.closePath();
							break;
						case "rect":
							if (!c) {
								(r = Math.SQRT1_2 * d),
									t.rect(i - r, s - r, 2 * r, 2 * r);
								break;
							}
							u += z;
						case "rectRot":
							(o = Math.cos(u) * d),
								(a = Math.sin(u) * d),
								t.moveTo(i - o, s - a),
								t.lineTo(i + a, s - o),
								t.lineTo(i + o, s + a),
								t.lineTo(i - a, s + o),
								t.closePath();
							break;
						case "crossRot":
							u += z;
						case "cross":
							(o = Math.cos(u) * d),
								(a = Math.sin(u) * d),
								t.moveTo(i - o, s - a),
								t.lineTo(i + o, s + a),
								t.moveTo(i + a, s - o),
								t.lineTo(i - a, s + o);
							break;
						case "star":
							(o = Math.cos(u) * d),
								(a = Math.sin(u) * d),
								t.moveTo(i - o, s - a),
								t.lineTo(i + o, s + a),
								t.moveTo(i + a, s - o),
								t.lineTo(i - a, s + o),
								(u += z),
								(o = Math.cos(u) * d),
								(a = Math.sin(u) * d),
								t.moveTo(i - o, s - a),
								t.lineTo(i + o, s + a),
								t.moveTo(i + a, s - o),
								t.lineTo(i - a, s + o);
							break;
						case "line":
							(o = Math.cos(u) * d),
								(a = Math.sin(u) * d),
								t.moveTo(i - o, s - a),
								t.lineTo(i + o, s + a);
							break;
						case "dash":
							t.moveTo(i, s),
								t.lineTo(
									i + Math.cos(u) * d,
									s + Math.sin(u) * d,
								);
					}
					t.fill(), e.borderWidth > 0 && t.stroke();
				}
			}
			function Xt(t, e, i) {
				return (
					(i = i || 0.5),
					!e ||
						(t &&
							t.x > e.left - i &&
							t.x < e.right + i &&
							t.y > e.top - i &&
							t.y < e.bottom + i)
				);
			}
			function qt(t, e) {
				t.save(),
					t.beginPath(),
					t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
					t.clip();
			}
			function Kt(t) {
				t.restore();
			}
			function Zt(t, e, i, s, n) {
				if (!e) return t.lineTo(i.x, i.y);
				if ("middle" === n) {
					const s = (e.x + i.x) / 2;
					t.lineTo(s, e.y), t.lineTo(s, i.y);
				} else
					("after" === n) != !!s
						? t.lineTo(e.x, i.y)
						: t.lineTo(i.x, e.y);
				t.lineTo(i.x, i.y);
			}
			function Gt(t, e, i, s) {
				if (!e) return t.lineTo(i.x, i.y);
				t.bezierCurveTo(
					s ? e.cp1x : e.cp2x,
					s ? e.cp1y : e.cp2y,
					s ? i.cp2x : i.cp1x,
					s ? i.cp2y : i.cp1y,
					i.x,
					i.y,
				);
			}
			function Qt(t, e, i, s, n, o = {}) {
				const a = c(e) ? e : [e],
					r = o.strokeWidth > 0 && "" !== o.strokeColor;
				let l, d;
				for (
					t.save(),
						t.font = n.string,
						(function (t, e) {
							e.translation &&
								t.translate(e.translation[0], e.translation[1]);
							h(e.rotation) || t.rotate(e.rotation);
							e.color && (t.fillStyle = e.color);
							e.textAlign && (t.textAlign = e.textAlign);
							e.textBaseline && (t.textBaseline = e.textBaseline);
						})(t, o),
						l = 0;
					l < a.length;
					++l
				)
					(d = a[l]),
						r &&
							(o.strokeColor && (t.strokeStyle = o.strokeColor),
							h(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
							t.strokeText(d, i, s, o.maxWidth)),
						t.fillText(d, i, s, o.maxWidth),
						Jt(t, i, s, d, o),
						(s += n.lineHeight);
				t.restore();
			}
			function Jt(t, e, i, s, n) {
				if (n.strikethrough || n.underline) {
					const o = t.measureText(s),
						a = e - o.actualBoundingBoxLeft,
						r = e + o.actualBoundingBoxRight,
						l = i - o.actualBoundingBoxAscent,
						h = i + o.actualBoundingBoxDescent,
						c = n.strikethrough ? (l + h) / 2 : h;
					(t.strokeStyle = t.fillStyle),
						t.beginPath(),
						(t.lineWidth = n.decorationWidth || 2),
						t.moveTo(a, c),
						t.lineTo(r, c),
						t.stroke();
				}
			}
			function te(t, e) {
				const { x: i, y: s, w: n, h: o, radius: a } = e;
				t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -I, A, !0),
					t.lineTo(i, s + o - a.bottomLeft),
					t.arc(
						i + a.bottomLeft,
						s + o - a.bottomLeft,
						a.bottomLeft,
						A,
						I,
						!0,
					),
					t.lineTo(i + n - a.bottomRight, s + o),
					t.arc(
						i + n - a.bottomRight,
						s + o - a.bottomRight,
						a.bottomRight,
						I,
						0,
						!0,
					),
					t.lineTo(i + n, s + a.topRight),
					t.arc(
						i + n - a.topRight,
						s + a.topRight,
						a.topRight,
						0,
						-I,
						!0,
					),
					t.lineTo(i + a.topLeft, s);
			}
			const ee = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
				ie = new RegExp(
					/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,
				);
			function se(t, e) {
				const i = ("" + t).match(ee);
				if (!i || "normal" === i[1]) return 1.2 * e;
				switch (((t = +i[2]), i[3])) {
					case "px":
						return t;
					case "%":
						t /= 100;
				}
				return e * t;
			}
			function ne(t, e) {
				const i = {},
					s = d(e),
					n = s ? Object.keys(e) : e,
					o = d(t)
						? s
							? (i) => g(t[i], t[e[i]])
							: (e) => t[e]
						: () => t;
				for (const a of n) i[a] = +o(a) || 0;
				return i;
			}
			function oe(t) {
				return ne(t, { top: "y", right: "x", bottom: "y", left: "x" });
			}
			function ae(t) {
				return ne(t, [
					"topLeft",
					"topRight",
					"bottomLeft",
					"bottomRight",
				]);
			}
			function re(t) {
				const e = oe(t);
				return (
					(e.width = e.left + e.right),
					(e.height = e.top + e.bottom),
					e
				);
			}
			function le(t, e) {
				(t = t || {}), (e = e || Wt.font);
				let i = g(t.size, e.size);
				"string" == typeof i && (i = parseInt(i, 10));
				let s = g(t.style, e.style);
				s &&
					!("" + s).match(ie) &&
					(console.warn('Invalid font style specified: "' + s + '"'),
					(s = ""));
				const n = {
					family: g(t.family, e.family),
					lineHeight: se(g(t.lineHeight, e.lineHeight), i),
					size: i,
					style: s,
					weight: g(t.weight, e.weight),
					string: "",
				};
				return (
					(n.string = (function (t) {
						return !t || h(t.size) || h(t.family)
							? null
							: (t.style ? t.style + " " : "") +
									(t.weight ? t.weight + " " : "") +
									t.size +
									"px " +
									t.family;
					})(n)),
					n
				);
			}
			function he(t, e, i, s) {
				let n,
					o,
					a,
					r = !0;
				for (n = 0, o = t.length; n < o; ++n)
					if (
						((a = t[n]),
						void 0 !== a &&
							(void 0 !== e &&
								"function" == typeof a &&
								((a = a(e)), (r = !1)),
							void 0 !== i &&
								c(a) &&
								((a = a[i % a.length]), (r = !1)),
							void 0 !== a))
					)
						return s && !r && (s.cacheable = !1), a;
			}
			function ce(t, e) {
				return Object.assign(Object.create(t), e);
			}
			function de(t, e, i) {
				i = i || ((i) => t[i] < e);
				let s,
					n = t.length - 1,
					o = 0;
				for (; n - o > 1; )
					(s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
				return { lo: o, hi: n };
			}
			const ue = (t, e, i) => de(t, i, (s) => t[s][e] < i),
				fe = (t, e, i) => de(t, i, (s) => t[s][e] >= i);
			const ge = ["push", "pop", "shift", "splice", "unshift"];
			function pe(t, e) {
				const i = t._chartjs;
				if (!i) return;
				const s = i.listeners,
					n = s.indexOf(e);
				-1 !== n && s.splice(n, 1),
					s.length > 0 ||
						(ge.forEach((e) => {
							delete t[e];
						}),
						delete t._chartjs);
			}
			function me(t) {
				const e = new Set();
				let i, s;
				for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
				return e.size === s ? t : Array.from(e);
			}
			function be(t, e = [""], i = t, s, n = () => t[0]) {
				D(s) || (s = De("_fallback", t));
				const o = {
					[Symbol.toStringTag]: "Object",
					_cacheable: !0,
					_scopes: t,
					_rootScopes: i,
					_fallback: s,
					_getTarget: n,
					override: (n) => be([n, ...t], e, i, s),
				};
				return new Proxy(o, {
					deleteProperty: (e, i) => (
						delete e[i], delete e._keys, delete t[0][i], !0
					),
					get: (i, s) =>
						we(i, s, () =>
							(function (t, e, i, s) {
								let n;
								for (const o of e)
									if (((n = De(ye(o, t), i)), D(n)))
										return ve(t, n) ? Pe(i, s, t, n) : n;
							})(s, e, t, i),
						),
					getOwnPropertyDescriptor: (t, e) =>
						Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
					getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
					has: (t, e) => Ce(t).includes(e),
					ownKeys: (t) => Ce(t),
					set: (t, e, i) => (
						((t._storage || (t._storage = n()))[e] = i),
						delete t[e],
						delete t._keys,
						!0
					),
				});
			}
			function xe(t, e, i, s) {
				const n = {
					_cacheable: !1,
					_proxy: t,
					_context: e,
					_subProxy: i,
					_stack: new Set(),
					_descriptors: _e(t, s),
					setContext: (e) => xe(t, e, i, s),
					override: (n) => xe(t.override(n), e, i, s),
				};
				return new Proxy(n, {
					deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
					get: (t, e, i) =>
						we(t, e, () =>
							(function (t, e, i) {
								const {
									_proxy: s,
									_context: n,
									_subProxy: o,
									_descriptors: a,
								} = t;
								let r = s[e];
								C(r) &&
									a.isScriptable(e) &&
									(r = (function (t, e, i, s) {
										const {
											_proxy: n,
											_context: o,
											_subProxy: a,
											_stack: r,
										} = i;
										if (r.has(t))
											throw new Error(
												"Recursion detected: " +
													Array.from(r).join("->") +
													"->" +
													t,
											);
										r.add(t),
											(e = e(o, a || s)),
											r.delete(t),
											d(e) &&
												(e = Pe(n._scopes, n, t, e));
										return e;
									})(e, r, t, i));
								c(r) &&
									r.length &&
									(r = (function (t, e, i, s) {
										const {
											_proxy: n,
											_context: o,
											_subProxy: a,
											_descriptors: r,
										} = i;
										if (D(o.index) && s(t))
											e = e[o.index % e.length];
										else if (d(e[0])) {
											const i = e,
												s = n._scopes.filter(
													(t) => t !== i,
												);
											e = [];
											for (const l of i) {
												const i = Pe(s, n, t, l);
												e.push(xe(i, o, a && a[t], r));
											}
										}
										return e;
									})(e, r, t, a.isIndexable));
								ve(e, r) && (r = xe(r, n, o && o[e], a));
								return r;
							})(t, e, i),
						),
					getOwnPropertyDescriptor: (e, i) =>
						e._descriptors.allKeys
							? Reflect.has(t, i)
								? { enumerable: !0, configurable: !0 }
								: void 0
							: Reflect.getOwnPropertyDescriptor(t, i),
					getPrototypeOf: () => Reflect.getPrototypeOf(t),
					has: (e, i) => Reflect.has(t, i),
					ownKeys: () => Reflect.ownKeys(t),
					set: (e, i, s) => ((t[i] = s), delete e[i], !0),
				});
			}
			function _e(t, e = { scriptable: !0, indexable: !0 }) {
				const {
					_scriptable: i = e.scriptable,
					_indexable: s = e.indexable,
					_allKeys: n = e.allKeys,
				} = t;
				return {
					allKeys: n,
					scriptable: i,
					indexable: s,
					isScriptable: C(i) ? i : () => i,
					isIndexable: C(s) ? s : () => s,
				};
			}
			const ye = (t, e) => (t ? t + O(e) : e),
				ve = (t, e) => d(e) && "adapters" !== t;
			function we(t, e, i) {
				if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
				const s = i();
				return (t[e] = s), s;
			}
			function Me(t, e, i) {
				return C(t) ? t(e, i) : t;
			}
			const ke = (t, e) =>
				!0 === t ? e : "string" == typeof t ? P(e, t) : void 0;
			function Se(t, e, i, s) {
				for (const n of e) {
					const e = ke(i, n);
					if (e) {
						t.add(e);
						const n = Me(e._fallback, i, e);
						if (D(n) && n !== i && n !== s) return n;
					} else if (!1 === e && D(s) && i !== s) return null;
				}
				return !1;
			}
			function Pe(t, e, i, s) {
				const n = e._rootScopes,
					o = Me(e._fallback, i, s),
					a = [...t, ...n],
					r = new Set();
				r.add(s);
				let l = Oe(r, a, i, o || i);
				return (
					null !== l &&
					(!D(o) || o === i || ((l = Oe(r, a, o, l)), null !== l)) &&
					be(Array.from(r), [""], n, o, () =>
						(function (t, e, i) {
							const s = t._getTarget();
							e in s || (s[e] = {});
							const n = s[e];
							if (c(n) && d(i)) return i;
							return n;
						})(e, i, s),
					)
				);
			}
			function Oe(t, e, i, s) {
				for (; i; ) i = Se(t, e, i, s);
				return i;
			}
			function De(t, e) {
				for (const i of e) {
					if (!i) continue;
					const e = i[t];
					if (D(e)) return e;
				}
			}
			function Ce(t) {
				let e = t._keys;
				return (
					e ||
						(e = t._keys =
							(function (t) {
								const e = new Set();
								for (const i of t)
									for (const t of Object.keys(i).filter(
										(t) => !t.startsWith("_"),
									))
										e.add(t);
								return Array.from(e);
							})(t._scopes)),
					e
				);
			}
			const Ae = Number.EPSILON || 1e-14,
				Te = (t, e) => e < t.length && !t[e].skip && t[e],
				Ee = (t) => ("x" === t ? "y" : "x");
			function Le(t, e, i, s) {
				const n = t.skip ? e : t,
					o = e,
					a = i.skip ? e : i,
					r = X(o, n),
					l = X(a, o);
				let h = r / (r + l),
					c = l / (r + l);
				(h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c);
				const d = s * h,
					u = s * c;
				return {
					previous: {
						x: o.x - d * (a.x - n.x),
						y: o.y - d * (a.y - n.y),
					},
					next: {
						x: o.x + u * (a.x - n.x),
						y: o.y + u * (a.y - n.y),
					},
				};
			}
			function Re(t, e = "x") {
				const i = Ee(e),
					s = t.length,
					n = Array(s).fill(0),
					o = Array(s);
				let a,
					r,
					l,
					h = Te(t, 0);
				for (a = 0; a < s; ++a)
					if (((r = l), (l = h), (h = Te(t, a + 1)), l)) {
						if (h) {
							const t = h[e] - l[e];
							n[a] = 0 !== t ? (h[i] - l[i]) / t : 0;
						}
						o[a] = r
							? h
								? B(n[a - 1]) !== B(n[a])
									? 0
									: (n[a - 1] + n[a]) / 2
								: n[a - 1]
							: n[a];
					}
				!(function (t, e, i) {
					const s = t.length;
					let n,
						o,
						a,
						r,
						l,
						h = Te(t, 0);
					for (let c = 0; c < s - 1; ++c)
						(l = h),
							(h = Te(t, c + 1)),
							l &&
								h &&
								(N(e[c], 0, Ae)
									? (i[c] = i[c + 1] = 0)
									: ((n = i[c] / e[c]),
										(o = i[c + 1] / e[c]),
										(r = Math.pow(n, 2) + Math.pow(o, 2)),
										r <= 9 ||
											((a = 3 / Math.sqrt(r)),
											(i[c] = n * a * e[c]),
											(i[c + 1] = o * a * e[c]))));
				})(t, n, o),
					(function (t, e, i = "x") {
						const s = Ee(i),
							n = t.length;
						let o,
							a,
							r,
							l = Te(t, 0);
						for (let h = 0; h < n; ++h) {
							if (((a = r), (r = l), (l = Te(t, h + 1)), !r))
								continue;
							const n = r[i],
								c = r[s];
							a &&
								((o = (n - a[i]) / 3),
								(r[`cp1${i}`] = n - o),
								(r[`cp1${s}`] = c - o * e[h])),
								l &&
									((o = (l[i] - n) / 3),
									(r[`cp2${i}`] = n + o),
									(r[`cp2${s}`] = c + o * e[h]));
						}
					})(t, o, e);
			}
			function Ie(t, e, i) {
				return Math.max(Math.min(t, i), e);
			}
			function ze(t, e, i, s, n) {
				let o, a, r, l;
				if (
					(e.spanGaps && (t = t.filter((t) => !t.skip)),
					"monotone" === e.cubicInterpolationMode)
				)
					Re(t, n);
				else {
					let i = s ? t[t.length - 1] : t[0];
					for (o = 0, a = t.length; o < a; ++o)
						(r = t[o]),
							(l = Le(
								i,
								r,
								t[Math.min(o + 1, a - (s ? 0 : 1)) % a],
								e.tension,
							)),
							(r.cp1x = l.previous.x),
							(r.cp1y = l.previous.y),
							(r.cp2x = l.next.x),
							(r.cp2y = l.next.y),
							(i = r);
				}
				e.capBezierPoints &&
					(function (t, e) {
						let i,
							s,
							n,
							o,
							a,
							r = Xt(t[0], e);
						for (i = 0, s = t.length; i < s; ++i)
							(a = o),
								(o = r),
								(r = i < s - 1 && Xt(t[i + 1], e)),
								o &&
									((n = t[i]),
									a &&
										((n.cp1x = Ie(n.cp1x, e.left, e.right)),
										(n.cp1y = Ie(n.cp1y, e.top, e.bottom))),
									r &&
										((n.cp2x = Ie(n.cp2x, e.left, e.right)),
										(n.cp2y = Ie(
											n.cp2y,
											e.top,
											e.bottom,
										))));
					})(t, i);
			}
			function Fe() {
				return (
					"undefined" != typeof window &&
					"undefined" != typeof document
				);
			}
			function Ve(t) {
				let e = t.parentNode;
				return (
					e && "[object ShadowRoot]" === e.toString() && (e = e.host),
					e
				);
			}
			function Be(t, e, i) {
				let s;
				return (
					"string" == typeof t
						? ((s = parseInt(t, 10)),
							-1 !== t.indexOf("%") &&
								(s = (s / 100) * e.parentNode[i]))
						: (s = t),
					s
				);
			}
			const je = (t) => window.getComputedStyle(t, null);
			const We = ["top", "right", "bottom", "left"];
			function Ne(t, e, i) {
				const s = {};
				i = i ? "-" + i : "";
				for (let n = 0; n < 4; n++) {
					const o = We[n];
					s[o] = parseFloat(t[e + "-" + o + i]) || 0;
				}
				return (
					(s.width = s.left + s.right),
					(s.height = s.top + s.bottom),
					s
				);
			}
			function He(t, e) {
				const { canvas: i, currentDevicePixelRatio: s } = e,
					n = je(i),
					o = "border-box" === n.boxSizing,
					a = Ne(n, "padding"),
					r = Ne(n, "border", "width"),
					{
						x: l,
						y: h,
						box: c,
					} = (function (t, e) {
						const i = t.native || t,
							s = i.touches,
							n = s && s.length ? s[0] : i,
							{ offsetX: o, offsetY: a } = n;
						let r,
							l,
							h = !1;
						if (
							((t, e, i) =>
								(t > 0 || e > 0) && (!i || !i.shadowRoot))(
								o,
								a,
								i.target,
							)
						)
							(r = o), (l = a);
						else {
							const t = e.getBoundingClientRect();
							(r = n.clientX - t.left),
								(l = n.clientY - t.top),
								(h = !0);
						}
						return { x: r, y: l, box: h };
					})(t, i),
					d = a.left + (c && r.left),
					u = a.top + (c && r.top);
				let { width: f, height: g } = e;
				return (
					o && ((f -= a.width + r.width), (g -= a.height + r.height)),
					{
						x: Math.round((((l - d) / f) * i.width) / s),
						y: Math.round((((h - u) / g) * i.height) / s),
					}
				);
			}
			const $e = (t) => Math.round(10 * t) / 10;
			function Ye(t, e, i, s) {
				const n = je(t),
					o = Ne(n, "margin"),
					a = Be(n.maxWidth, t, "clientWidth") || L,
					r = Be(n.maxHeight, t, "clientHeight") || L,
					l = (function (t, e, i) {
						let s, n;
						if (void 0 === e || void 0 === i) {
							const o = Ve(t);
							if (o) {
								const t = o.getBoundingClientRect(),
									a = je(o),
									r = Ne(a, "border", "width"),
									l = Ne(a, "padding");
								(e = t.width - l.width - r.width),
									(i = t.height - l.height - r.height),
									(s = Be(a.maxWidth, o, "clientWidth")),
									(n = Be(a.maxHeight, o, "clientHeight"));
							} else (e = t.clientWidth), (i = t.clientHeight);
						}
						return {
							width: e,
							height: i,
							maxWidth: s || L,
							maxHeight: n || L,
						};
					})(t, e, i);
				let { width: h, height: c } = l;
				if ("content-box" === n.boxSizing) {
					const t = Ne(n, "border", "width"),
						e = Ne(n, "padding");
					(h -= e.width + t.width), (c -= e.height + t.height);
				}
				return (
					(h = Math.max(0, h - o.width)),
					(c = Math.max(0, s ? Math.floor(h / s) : c - o.height)),
					(h = $e(Math.min(h, a, l.maxWidth))),
					(c = $e(Math.min(c, r, l.maxHeight))),
					h && !c && (c = $e(h / 2)),
					{ width: h, height: c }
				);
			}
			function Ue(t, e, i) {
				const s = e || 1,
					n = Math.floor(t.height * s),
					o = Math.floor(t.width * s);
				(t.height = n / s), (t.width = o / s);
				const a = t.canvas;
				return (
					a.style &&
						(i || (!a.style.height && !a.style.width)) &&
						((a.style.height = `${t.height}px`),
						(a.style.width = `${t.width}px`)),
					(t.currentDevicePixelRatio !== s ||
						a.height !== n ||
						a.width !== o) &&
						((t.currentDevicePixelRatio = s),
						(a.height = n),
						(a.width = o),
						t.ctx.setTransform(s, 0, 0, s, 0, 0),
						!0)
				);
			}
			const Xe = (function () {
				let t = !1;
				try {
					const e = {
						get passive() {
							return (t = !0), !1;
						},
					};
					window.addEventListener("test", null, e),
						window.removeEventListener("test", null, e);
				} catch (e) {}
				return t;
			})();
			function qe(t, e) {
				const i = (function (t, e) {
						return je(t).getPropertyValue(e);
					})(t, e),
					s = i && i.match(/^(\d+)(\.\d+)?px$/);
				return s ? +s[1] : void 0;
			}
			function Ke(t, e, i, s) {
				return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
			}
			function Ze(t, e, i, s) {
				return {
					x: t.x + i * (e.x - t.x),
					y:
						"middle" === s
							? i < 0.5
								? t.y
								: e.y
							: "after" === s
								? i < 1
									? t.y
									: e.y
								: i > 0
									? e.y
									: t.y,
				};
			}
			function Ge(t, e, i, s) {
				const n = { x: t.cp2x, y: t.cp2y },
					o = { x: e.cp1x, y: e.cp1y },
					a = Ke(t, n, i),
					r = Ke(n, o, i),
					l = Ke(o, e, i),
					h = Ke(a, r, i),
					c = Ke(r, l, i);
				return Ke(h, c, i);
			}
			const Qe = new Map();
			function Je(t, e, i) {
				return (function (t, e) {
					e = e || {};
					const i = t + JSON.stringify(e);
					let s = Qe.get(i);
					return (
						s || ((s = new Intl.NumberFormat(t, e)), Qe.set(i, s)),
						s
					);
				})(e, i).format(t);
			}
			function ti(t, e, i) {
				return t
					? (function (t, e) {
							return {
								x: (i) => t + t + e - i,
								setWidth(t) {
									e = t;
								},
								textAlign: (t) =>
									"center" === t
										? t
										: "right" === t
											? "left"
											: "right",
								xPlus: (t, e) => t - e,
								leftForLtr: (t, e) => t - e,
							};
						})(e, i)
					: {
							x: (t) => t,
							setWidth(t) {},
							textAlign: (t) => t,
							xPlus: (t, e) => t + e,
							leftForLtr: (t, e) => t,
						};
			}
			function ei(t, e) {
				let i, s;
				("ltr" !== e && "rtl" !== e) ||
					((i = t.canvas.style),
					(s = [
						i.getPropertyValue("direction"),
						i.getPropertyPriority("direction"),
					]),
					i.setProperty("direction", e, "important"),
					(t.prevTextDirection = s));
			}
			function ii(t, e) {
				void 0 !== e &&
					(delete t.prevTextDirection,
					t.canvas.style.setProperty("direction", e[0], e[1]));
			}
			function si(t) {
				return "angle" === t
					? { between: Z, compare: q, normalize: K }
					: {
							between: (t, e, i) =>
								t >= Math.min(e, i) && t <= Math.max(i, e),
							compare: (t, e) => t - e,
							normalize: (t) => t,
						};
			}
			function ni({ start: t, end: e, count: i, loop: s, style: n }) {
				return {
					start: t % i,
					end: e % i,
					loop: s && (e - t + 1) % i == 0,
					style: n,
				};
			}
			function oi(t, e, i) {
				if (!i) return [t];
				const { property: s, start: n, end: o } = i,
					a = e.length,
					{ compare: r, between: l, normalize: h } = si(s),
					{
						start: c,
						end: d,
						loop: u,
						style: f,
					} = (function (t, e, i) {
						const { property: s, start: n, end: o } = i,
							{ between: a, normalize: r } = si(s),
							l = e.length;
						let h,
							c,
							{ start: d, end: u, loop: f } = t;
						if (f) {
							for (
								d += l, u += l, h = 0, c = l;
								h < c && a(r(e[d % l][s]), n, o);
								++h
							)
								d--, u--;
							(d %= l), (u %= l);
						}
						return (
							u < d && (u += l),
							{ start: d, end: u, loop: f, style: t.style }
						);
					})(t, e, i),
					g = [];
				let p,
					m,
					b,
					x = !1,
					_ = null;
				const y = () => x || (l(n, b, p) && 0 !== r(n, b)),
					v = () => !x || 0 === r(o, p) || l(o, b, p);
				for (let w = c, M = c; w <= d; ++w)
					(m = e[w % a]),
						m.skip ||
							((p = h(m[s])),
							p !== b &&
								((x = l(p, n, o)),
								null === _ &&
									y() &&
									(_ = 0 === r(p, n) ? w : M),
								null !== _ &&
									v() &&
									(g.push(
										ni({
											start: _,
											end: w,
											loop: u,
											count: a,
											style: f,
										}),
									),
									(_ = null)),
								(M = w),
								(b = p)));
				return (
					null !== _ &&
						g.push(
							ni({
								start: _,
								end: d,
								loop: u,
								count: a,
								style: f,
							}),
						),
					g
				);
			}
			function ai(t, e) {
				const i = [],
					s = t.segments;
				for (let n = 0; n < s.length; n++) {
					const o = oi(s[n], t.points, e);
					o.length && i.push(...o);
				}
				return i;
			}
			function ri(t, e, i, s) {
				return s && s.setContext && i
					? (function (t, e, i, s) {
							const n = t._chart.getContext(),
								o = li(t.options),
								{
									_datasetIndex: a,
									options: { spanGaps: r },
								} = t,
								l = i.length,
								h = [];
							let c = o,
								d = e[0].start,
								u = d;
							function f(t, e, s, n) {
								const o = r ? -1 : 1;
								if (t !== e) {
									for (t += l; i[t % l].skip; ) t -= o;
									for (; i[e % l].skip; ) e += o;
									t % l != e % l &&
										(h.push({
											start: t % l,
											end: e % l,
											loop: s,
											style: n,
										}),
										(c = n),
										(d = e % l));
								}
							}
							for (const g of e) {
								d = r ? d : g.start;
								let t,
									e = i[d % l];
								for (u = d + 1; u <= g.end; u++) {
									const o = i[u % l];
									(t = li(
										s.setContext(
											ce(n, {
												type: "segment",
												p0: e,
												p1: o,
												p0DataIndex: (u - 1) % l,
												p1DataIndex: u % l,
												datasetIndex: a,
											}),
										),
									)),
										hi(t, c) && f(d, u - 1, g.loop, c),
										(e = o),
										(c = t);
								}
								d < u - 1 && f(d, u - 1, g.loop, c);
							}
							return h;
						})(t, e, i, s)
					: e;
			}
			function li(t) {
				return {
					backgroundColor: t.backgroundColor,
					borderCapStyle: t.borderCapStyle,
					borderDash: t.borderDash,
					borderDashOffset: t.borderDashOffset,
					borderJoinStyle: t.borderJoinStyle,
					borderWidth: t.borderWidth,
					borderColor: t.borderColor,
				};
			}
			function hi(t, e) {
				return e && JSON.stringify(t) !== JSON.stringify(e);
			}
			var ci = new (class {
				constructor() {
					(this._request = null),
						(this._charts = new Map()),
						(this._running = !1),
						(this._lastDate = void 0);
				}
				_notify(t, e, i, s) {
					const n = e.listeners[s],
						o = e.duration;
					n.forEach((s) =>
						s({
							chart: t,
							initial: e.initial,
							numSteps: o,
							currentStep: Math.min(i - e.start, o),
						}),
					);
				}
				_refresh() {
					this._request ||
						((this._running = !0),
						(this._request = s.call(window, () => {
							this._update(),
								(this._request = null),
								this._running && this._refresh();
						})));
				}
				_update(t = Date.now()) {
					let e = 0;
					this._charts.forEach((i, s) => {
						if (!i.running || !i.items.length) return;
						const n = i.items;
						let o,
							a = n.length - 1,
							r = !1;
						for (; a >= 0; --a)
							(o = n[a]),
								o._active
									? (o._total > i.duration &&
											(i.duration = o._total),
										o.tick(t),
										(r = !0))
									: ((n[a] = n[n.length - 1]), n.pop());
						r && (s.draw(), this._notify(s, i, t, "progress")),
							n.length ||
								((i.running = !1),
								this._notify(s, i, t, "complete"),
								(i.initial = !1)),
							(e += n.length);
					}),
						(this._lastDate = t),
						0 === e && (this._running = !1);
				}
				_getAnims(t) {
					const e = this._charts;
					let i = e.get(t);
					return (
						i ||
							((i = {
								running: !1,
								initial: !0,
								items: [],
								listeners: { complete: [], progress: [] },
							}),
							e.set(t, i)),
						i
					);
				}
				listen(t, e, i) {
					this._getAnims(t).listeners[e].push(i);
				}
				add(t, e) {
					e && e.length && this._getAnims(t).items.push(...e);
				}
				has(t) {
					return this._getAnims(t).items.length > 0;
				}
				start(t) {
					const e = this._charts.get(t);
					e &&
						((e.running = !0),
						(e.start = Date.now()),
						(e.duration = e.items.reduce(
							(t, e) => Math.max(t, e._duration),
							0,
						)),
						this._refresh());
				}
				running(t) {
					if (!this._running) return !1;
					const e = this._charts.get(t);
					return !!(e && e.running && e.items.length);
				}
				stop(t) {
					const e = this._charts.get(t);
					if (!e || !e.items.length) return;
					const i = e.items;
					let s = i.length - 1;
					for (; s >= 0; --s) i[s].cancel();
					(e.items = []), this._notify(t, e, Date.now(), "complete");
				}
				remove(t) {
					return this._charts.delete(t);
				}
			})();
			const di = "transparent",
				ui = {
					boolean: (t, e, i) => (i > 0.5 ? e : t),
					color(t, e, i) {
						const s = It(t || di),
							n = s.valid && It(e || di);
						return n && n.valid ? n.mix(s, i).hexString() : e;
					},
					number: (t, e, i) => t + (e - t) * i,
				};
			class fi {
				constructor(t, e, i, s) {
					const n = e[i];
					s = he([t.to, s, n, t.from]);
					const o = he([t.from, n, s]);
					(this._active = !0),
						(this._fn = t.fn || ui[t.type || typeof o]),
						(this._easing = et[t.easing] || et.linear),
						(this._start = Math.floor(Date.now() + (t.delay || 0))),
						(this._duration = this._total = Math.floor(t.duration)),
						(this._loop = !!t.loop),
						(this._target = e),
						(this._prop = i),
						(this._from = o),
						(this._to = s),
						(this._promises = void 0);
				}
				active() {
					return this._active;
				}
				update(t, e, i) {
					if (this._active) {
						this._notify(!1);
						const s = this._target[this._prop],
							n = i - this._start,
							o = this._duration - n;
						(this._start = i),
							(this._duration = Math.floor(
								Math.max(o, t.duration),
							)),
							(this._total += n),
							(this._loop = !!t.loop),
							(this._to = he([t.to, e, s, t.from])),
							(this._from = he([t.from, s, e]));
					}
				}
				cancel() {
					this._active &&
						(this.tick(Date.now()),
						(this._active = !1),
						this._notify(!1));
				}
				tick(t) {
					const e = t - this._start,
						i = this._duration,
						s = this._prop,
						n = this._from,
						o = this._loop,
						a = this._to;
					let r;
					if (
						((this._active = n !== a && (o || e < i)),
						!this._active)
					)
						return (this._target[s] = a), void this._notify(!0);
					e < 0
						? (this._target[s] = n)
						: ((r = (e / i) % 2),
							(r = o && r > 1 ? 2 - r : r),
							(r = this._easing(Math.min(1, Math.max(0, r)))),
							(this._target[s] = this._fn(n, a, r)));
				}
				wait() {
					const t = this._promises || (this._promises = []);
					return new Promise((e, i) => {
						t.push({ res: e, rej: i });
					});
				}
				_notify(t) {
					const e = t ? "res" : "rej",
						i = this._promises || [];
					for (let s = 0; s < i.length; s++) i[s][e]();
				}
			}
			Wt.set("animation", {
				delay: void 0,
				duration: 1e3,
				easing: "easeOutQuart",
				fn: void 0,
				from: void 0,
				loop: void 0,
				to: void 0,
				type: void 0,
			});
			const gi = Object.keys(Wt.animation);
			Wt.describe("animation", {
				_fallback: !1,
				_indexable: !1,
				_scriptable: (t) =>
					"onProgress" !== t && "onComplete" !== t && "fn" !== t,
			}),
				Wt.set("animations", {
					colors: {
						type: "color",
						properties: ["color", "borderColor", "backgroundColor"],
					},
					numbers: {
						type: "number",
						properties: [
							"x",
							"y",
							"borderWidth",
							"radius",
							"tension",
						],
					},
				}),
				Wt.describe("animations", { _fallback: "animation" }),
				Wt.set("transitions", {
					active: { animation: { duration: 400 } },
					resize: { animation: { duration: 0 } },
					show: {
						animations: {
							colors: { from: "transparent" },
							visible: { type: "boolean", duration: 0 },
						},
					},
					hide: {
						animations: {
							colors: { to: "transparent" },
							visible: {
								type: "boolean",
								easing: "linear",
								fn: (t) => 0 | t,
							},
						},
					},
				});
			class pi {
				constructor(t, e) {
					(this._chart = t),
						(this._properties = new Map()),
						this.configure(e);
				}
				configure(t) {
					if (!d(t)) return;
					const e = this._properties;
					Object.getOwnPropertyNames(t).forEach((i) => {
						const s = t[i];
						if (!d(s)) return;
						const n = {};
						for (const t of gi) n[t] = s[t];
						((c(s.properties) && s.properties) || [i]).forEach(
							(t) => {
								(t !== i && e.has(t)) || e.set(t, n);
							},
						);
					});
				}
				_animateOptions(t, e) {
					const i = e.options,
						s = (function (t, e) {
							if (!e) return;
							let i = t.options;
							if (!i) return void (t.options = e);
							i.$shared &&
								(t.options = i =
									Object.assign({}, i, {
										$shared: !1,
										$animations: {},
									}));
							return i;
						})(t, i);
					if (!s) return [];
					const n = this._createAnimations(s, i);
					return (
						i.$shared &&
							(function (t, e) {
								const i = [],
									s = Object.keys(e);
								for (let n = 0; n < s.length; n++) {
									const e = t[s[n]];
									e && e.active() && i.push(e.wait());
								}
								return Promise.all(i);
							})(t.options.$animations, i).then(
								() => {
									t.options = i;
								},
								() => {},
							),
						n
					);
				}
				_createAnimations(t, e) {
					const i = this._properties,
						s = [],
						n = t.$animations || (t.$animations = {}),
						o = Object.keys(e),
						a = Date.now();
					let r;
					for (r = o.length - 1; r >= 0; --r) {
						const l = o[r];
						if ("$" === l.charAt(0)) continue;
						if ("options" === l) {
							s.push(...this._animateOptions(t, e));
							continue;
						}
						const h = e[l];
						let c = n[l];
						const d = i.get(l);
						if (c) {
							if (d && c.active()) {
								c.update(d, h, a);
								continue;
							}
							c.cancel();
						}
						d && d.duration
							? ((n[l] = c = new fi(d, t, l, h)), s.push(c))
							: (t[l] = h);
					}
					return s;
				}
				update(t, e) {
					if (0 === this._properties.size)
						return void Object.assign(t, e);
					const i = this._createAnimations(t, e);
					return i.length ? (ci.add(this._chart, i), !0) : void 0;
				}
			}
			function mi(t, e) {
				const i = (t && t.options) || {},
					s = i.reverse,
					n = void 0 === i.min ? e : 0,
					o = void 0 === i.max ? e : 0;
				return { start: s ? o : n, end: s ? n : o };
			}
			function bi(t, e) {
				const i = [],
					s = t._getSortedDatasetMetas(e);
				let n, o;
				for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
				return i;
			}
			function xi(t, e, i, s = {}) {
				const n = t.keys,
					o = "single" === s.mode;
				let a, r, l, h;
				if (null !== e) {
					for (a = 0, r = n.length; a < r; ++a) {
						if (((l = +n[a]), l === i)) {
							if (s.all) continue;
							break;
						}
						(h = t.values[l]),
							u(h) && (o || 0 === e || B(e) === B(h)) && (e += h);
					}
					return e;
				}
			}
			function _i(t, e) {
				const i = t && t.options.stacked;
				return i || (void 0 === i && void 0 !== e.stack);
			}
			function yi(t, e, i) {
				const s = t[e] || (t[e] = {});
				return s[i] || (s[i] = {});
			}
			function vi(t, e, i, s) {
				for (const n of e.getMatchingVisibleMetas(s).reverse()) {
					const e = t[n.index];
					if ((i && e > 0) || (!i && e < 0)) return n.index;
				}
				return null;
			}
			function wi(t, e) {
				const { chart: i, _cachedMeta: s } = t,
					n = i._stacks || (i._stacks = {}),
					{ iScale: o, vScale: a, index: r } = s,
					l = o.axis,
					h = a.axis,
					c = (function (t, e, i) {
						return `${t.id}.${e.id}.${i.stack || i.type}`;
					})(o, a, s),
					d = e.length;
				let u;
				for (let f = 0; f < d; ++f) {
					const t = e[f],
						{ [l]: i, [h]: o } = t;
					(u = (t._stacks || (t._stacks = {}))[h] = yi(n, c, i)),
						(u[r] = o),
						(u._top = vi(u, a, !0, s.type)),
						(u._bottom = vi(u, a, !1, s.type));
				}
			}
			function Mi(t, e) {
				const i = t.scales;
				return Object.keys(i)
					.filter((t) => i[t].axis === e)
					.shift();
			}
			function ki(t, e) {
				const i = t.controller.index,
					s = t.vScale && t.vScale.axis;
				if (s) {
					e = e || t._parsed;
					for (const t of e) {
						const e = t._stacks;
						if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
						delete e[s][i];
					}
				}
			}
			const Si = (t) => "reset" === t || "none" === t,
				Pi = (t, e) => (e ? t : Object.assign({}, t));
			class Oi {
				constructor(t, e) {
					(this.chart = t),
						(this._ctx = t.ctx),
						(this.index = e),
						(this._cachedDataOpts = {}),
						(this._cachedMeta = this.getMeta()),
						(this._type = this._cachedMeta.type),
						(this.options = void 0),
						(this._parsing = !1),
						(this._data = void 0),
						(this._objectData = void 0),
						(this._sharedOptions = void 0),
						(this._drawStart = void 0),
						(this._drawCount = void 0),
						(this.enableOptionSharing = !1),
						(this.$context = void 0),
						(this._syncList = []),
						this.initialize();
				}
				initialize() {
					const t = this._cachedMeta;
					this.configure(),
						this.linkScales(),
						(t._stacked = _i(t.vScale, t)),
						this.addElements();
				}
				updateIndex(t) {
					this.index !== t && ki(this._cachedMeta), (this.index = t);
				}
				linkScales() {
					const t = this.chart,
						e = this._cachedMeta,
						i = this.getDataset(),
						s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
						n = (e.xAxisID = g(i.xAxisID, Mi(t, "x"))),
						o = (e.yAxisID = g(i.yAxisID, Mi(t, "y"))),
						a = (e.rAxisID = g(i.rAxisID, Mi(t, "r"))),
						r = e.indexAxis,
						l = (e.iAxisID = s(r, n, o, a)),
						h = (e.vAxisID = s(r, o, n, a));
					(e.xScale = this.getScaleForId(n)),
						(e.yScale = this.getScaleForId(o)),
						(e.rScale = this.getScaleForId(a)),
						(e.iScale = this.getScaleForId(l)),
						(e.vScale = this.getScaleForId(h));
				}
				getDataset() {
					return this.chart.data.datasets[this.index];
				}
				getMeta() {
					return this.chart.getDatasetMeta(this.index);
				}
				getScaleForId(t) {
					return this.chart.scales[t];
				}
				_getOtherScale(t) {
					const e = this._cachedMeta;
					return t === e.iScale ? e.vScale : e.iScale;
				}
				reset() {
					this._update("reset");
				}
				_destroy() {
					const t = this._cachedMeta;
					this._data && pe(this._data, this), t._stacked && ki(t);
				}
				_dataCheck() {
					const t = this.getDataset(),
						e = t.data || (t.data = []),
						i = this._data;
					if (d(e))
						this._data = (function (t) {
							const e = Object.keys(t),
								i = new Array(e.length);
							let s, n, o;
							for (s = 0, n = e.length; s < n; ++s)
								(o = e[s]), (i[s] = { x: o, y: t[o] });
							return i;
						})(e);
					else if (i !== e) {
						if (i) {
							pe(i, this);
							const t = this._cachedMeta;
							ki(t), (t._parsed = []);
						}
						e &&
							Object.isExtensible(e) &&
							((n = this),
							(s = e)._chartjs
								? s._chartjs.listeners.push(n)
								: (Object.defineProperty(s, "_chartjs", {
										configurable: !0,
										enumerable: !1,
										value: { listeners: [n] },
									}),
									ge.forEach((t) => {
										const e = "_onData" + O(t),
											i = s[t];
										Object.defineProperty(s, t, {
											configurable: !0,
											enumerable: !1,
											value(...t) {
												const n = i.apply(this, t);
												return (
													s._chartjs.listeners.forEach(
														(i) => {
															"function" ==
																typeof i[e] &&
																i[e](...t);
														},
													),
													n
												);
											},
										});
									}))),
							(this._syncList = []),
							(this._data = e);
					}
					var s, n;
				}
				addElements() {
					const t = this._cachedMeta;
					this._dataCheck(),
						this.datasetElementType &&
							(t.dataset = new this.datasetElementType());
				}
				buildOrUpdateElements(t) {
					const e = this._cachedMeta,
						i = this.getDataset();
					let s = !1;
					this._dataCheck();
					const n = e._stacked;
					(e._stacked = _i(e.vScale, e)),
						e.stack !== i.stack &&
							((s = !0), ki(e), (e.stack = i.stack)),
						this._resyncElements(t),
						(s || n !== e._stacked) && wi(this, e._parsed);
				}
				configure() {
					const t = this.chart.config,
						e = t.datasetScopeKeys(this._type),
						i = t.getOptionScopes(this.getDataset(), e, !0);
					(this.options = t.createResolver(i, this.getContext())),
						(this._parsing = this.options.parsing);
				}
				parse(t, e) {
					const { _cachedMeta: i, _data: s } = this,
						{ iScale: n, _stacked: o } = i,
						a = n.axis;
					let r,
						l,
						h,
						u = (0 === t && e === s.length) || i._sorted,
						f = t > 0 && i._parsed[t - 1];
					if (!1 === this._parsing)
						(i._parsed = s), (i._sorted = !0), (h = s);
					else {
						h = c(s[t])
							? this.parseArrayData(i, s, t, e)
							: d(s[t])
								? this.parseObjectData(i, s, t, e)
								: this.parsePrimitiveData(i, s, t, e);
						const n = () => null === l[a] || (f && l[a] < f[a]);
						for (r = 0; r < e; ++r)
							(i._parsed[r + t] = l = h[r]),
								u && (n() && (u = !1), (f = l));
						i._sorted = u;
					}
					o && wi(this, h);
				}
				parsePrimitiveData(t, e, i, s) {
					const { iScale: n, vScale: o } = t,
						a = n.axis,
						r = o.axis,
						l = n.getLabels(),
						h = n === o,
						c = new Array(s);
					let d, u, f;
					for (d = 0, u = s; d < u; ++d)
						(f = d + i),
							(c[d] = {
								[a]: h || n.parse(l[f], f),
								[r]: o.parse(e[f], f),
							});
					return c;
				}
				parseArrayData(t, e, i, s) {
					const { xScale: n, yScale: o } = t,
						a = new Array(s);
					let r, l, h, c;
					for (r = 0, l = s; r < l; ++r)
						(h = r + i),
							(c = e[h]),
							(a[r] = {
								x: n.parse(c[0], h),
								y: o.parse(c[1], h),
							});
					return a;
				}
				parseObjectData(t, e, i, s) {
					const { xScale: n, yScale: o } = t,
						{ xAxisKey: a = "x", yAxisKey: r = "y" } =
							this._parsing,
						l = new Array(s);
					let h, c, d, u;
					for (h = 0, c = s; h < c; ++h)
						(d = h + i),
							(u = e[d]),
							(l[h] = {
								x: n.parse(P(u, a), d),
								y: o.parse(P(u, r), d),
							});
					return l;
				}
				getParsed(t) {
					return this._cachedMeta._parsed[t];
				}
				getDataElement(t) {
					return this._cachedMeta.data[t];
				}
				applyStack(t, e, i) {
					const s = this.chart,
						n = this._cachedMeta,
						o = e[t.axis];
					return xi(
						{ keys: bi(s, !0), values: e._stacks[t.axis] },
						o,
						n.index,
						{ mode: i },
					);
				}
				updateRangeFromParsed(t, e, i, s) {
					const n = i[e.axis];
					let o = null === n ? NaN : n;
					const a = s && i._stacks[e.axis];
					s &&
						a &&
						((s.values = a),
						(o = xi(s, n, this._cachedMeta.index))),
						(t.min = Math.min(t.min, o)),
						(t.max = Math.max(t.max, o));
				}
				getMinMax(t, e) {
					const i = this._cachedMeta,
						s = i._parsed,
						n = i._sorted && t === i.iScale,
						o = s.length,
						a = this._getOtherScale(t),
						r = ((t, e, i) =>
							t &&
							!e.hidden &&
							e._stacked && { keys: bi(i, !0), values: null })(
							e,
							i,
							this.chart,
						),
						l = {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY,
						},
						{ min: h, max: c } = (function (t) {
							const {
								min: e,
								max: i,
								minDefined: s,
								maxDefined: n,
							} = t.getUserBounds();
							return {
								min: s ? e : Number.NEGATIVE_INFINITY,
								max: n ? i : Number.POSITIVE_INFINITY,
							};
						})(a);
					let d, f;
					function g() {
						f = s[d];
						const e = f[a.axis];
						return !u(f[t.axis]) || h > e || c < e;
					}
					for (
						d = 0;
						d < o &&
						(g() || (this.updateRangeFromParsed(l, t, f, r), !n));
						++d
					);
					if (n)
						for (d = o - 1; d >= 0; --d)
							if (!g()) {
								this.updateRangeFromParsed(l, t, f, r);
								break;
							}
					return l;
				}
				getAllParsedValues(t) {
					const e = this._cachedMeta._parsed,
						i = [];
					let s, n, o;
					for (s = 0, n = e.length; s < n; ++s)
						(o = e[s][t.axis]), u(o) && i.push(o);
					return i;
				}
				getMaxOverflow() {
					return !1;
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = e.iScale,
						s = e.vScale,
						n = this.getParsed(t);
					return {
						label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
						value: s ? "" + s.getLabelForValue(n[s.axis]) : "",
					};
				}
				_update(t) {
					const e = this._cachedMeta;
					this.configure(),
						(this._cachedDataOpts = {}),
						this.update(t || "default"),
						(e._clip = (function (t) {
							let e, i, s, n;
							return (
								d(t)
									? ((e = t.top),
										(i = t.right),
										(s = t.bottom),
										(n = t.left))
									: (e = i = s = n = t),
								{
									top: e,
									right: i,
									bottom: s,
									left: n,
									disabled: !1 === t,
								}
							);
						})(
							g(
								this.options.clip,
								(function (t, e, i) {
									if (!1 === i) return !1;
									const s = mi(t, i),
										n = mi(e, i);
									return {
										top: n.end,
										right: s.end,
										bottom: n.start,
										left: s.start,
									};
								})(e.xScale, e.yScale, this.getMaxOverflow()),
							),
						));
				}
				update(t) {}
				draw() {
					const t = this._ctx,
						e = this.chart,
						i = this._cachedMeta,
						s = i.data || [],
						n = e.chartArea,
						o = [],
						a = this._drawStart || 0,
						r = this._drawCount || s.length - a;
					let l;
					for (
						i.dataset && i.dataset.draw(t, n, a, r), l = a;
						l < a + r;
						++l
					) {
						const e = s[l];
						e.hidden || (e.active ? o.push(e) : e.draw(t, n));
					}
					for (l = 0; l < o.length; ++l) o[l].draw(t, n);
				}
				getStyle(t, e) {
					const i = e ? "active" : "default";
					return void 0 === t && this._cachedMeta.dataset
						? this.resolveDatasetElementOptions(i)
						: this.resolveDataElementOptions(t || 0, i);
				}
				getContext(t, e, i) {
					const s = this.getDataset();
					let n;
					if (t >= 0 && t < this._cachedMeta.data.length) {
						const e = this._cachedMeta.data[t];
						(n =
							e.$context ||
							(e.$context = (function (t, e, i) {
								return ce(t, {
									active: !1,
									dataIndex: e,
									parsed: void 0,
									raw: void 0,
									element: i,
									index: e,
									mode: "default",
									type: "data",
								});
							})(this.getContext(), t, e))),
							(n.parsed = this.getParsed(t)),
							(n.raw = s.data[t]),
							(n.index = n.dataIndex = t);
					} else
						(n =
							this.$context ||
							(this.$context = (function (t, e) {
								return ce(t, {
									active: !1,
									dataset: void 0,
									datasetIndex: e,
									index: e,
									mode: "default",
									type: "dataset",
								});
							})(this.chart.getContext(), this.index))),
							(n.dataset = s),
							(n.index = n.datasetIndex = this.index);
					return (n.active = !!e), (n.mode = i), n;
				}
				resolveDatasetElementOptions(t) {
					return this._resolveElementOptions(
						this.datasetElementType.id,
						t,
					);
				}
				resolveDataElementOptions(t, e) {
					return this._resolveElementOptions(
						this.dataElementType.id,
						e,
						t,
					);
				}
				_resolveElementOptions(t, e = "default", i) {
					const s = "active" === e,
						n = this._cachedDataOpts,
						o = t + "-" + e,
						a = n[o],
						r = this.enableOptionSharing && D(i);
					if (a) return Pi(a, r);
					const l = this.chart.config,
						h = l.datasetElementScopeKeys(this._type, t),
						c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
						d = l.getOptionScopes(this.getDataset(), h),
						u = Object.keys(Wt.elements[t]),
						f = l.resolveNamedOptions(
							d,
							u,
							() => this.getContext(i, s),
							c,
						);
					return (
						f.$shared &&
							((f.$shared = r), (n[o] = Object.freeze(Pi(f, r)))),
						f
					);
				}
				_resolveAnimations(t, e, i) {
					const s = this.chart,
						n = this._cachedDataOpts,
						o = `animation-${e}`,
						a = n[o];
					if (a) return a;
					let r;
					if (!1 !== s.options.animation) {
						const s = this.chart.config,
							n = s.datasetAnimationScopeKeys(this._type, e),
							o = s.getOptionScopes(this.getDataset(), n);
						r = s.createResolver(o, this.getContext(t, i, e));
					}
					const l = new pi(s, r && r.animations);
					return r && r._cacheable && (n[o] = Object.freeze(l)), l;
				}
				getSharedOptions(t) {
					if (t.$shared)
						return (
							this._sharedOptions ||
							(this._sharedOptions = Object.assign({}, t))
						);
				}
				includeOptions(t, e) {
					return !e || Si(t) || this.chart._animationsDisabled;
				}
				updateElement(t, e, i, s) {
					Si(s)
						? Object.assign(t, i)
						: this._resolveAnimations(e, s).update(t, i);
				}
				updateSharedOptions(t, e, i) {
					t &&
						!Si(e) &&
						this._resolveAnimations(void 0, e).update(t, i);
				}
				_setStyle(t, e, i, s) {
					t.active = s;
					const n = this.getStyle(e, s);
					this._resolveAnimations(e, i, s).update(t, {
						options: (!s && this.getSharedOptions(n)) || n,
					});
				}
				removeHoverStyle(t, e, i) {
					this._setStyle(t, i, "active", !1);
				}
				setHoverStyle(t, e, i) {
					this._setStyle(t, i, "active", !0);
				}
				_removeDatasetHoverStyle() {
					const t = this._cachedMeta.dataset;
					t && this._setStyle(t, void 0, "active", !1);
				}
				_setDatasetHoverStyle() {
					const t = this._cachedMeta.dataset;
					t && this._setStyle(t, void 0, "active", !0);
				}
				_resyncElements(t) {
					const e = this._data,
						i = this._cachedMeta.data;
					for (const [a, r, l] of this._syncList) this[a](r, l);
					this._syncList = [];
					const s = i.length,
						n = e.length,
						o = Math.min(n, s);
					o && this.parse(0, o),
						n > s
							? this._insertElements(s, n - s, t)
							: n < s && this._removeElements(n, s - n);
				}
				_insertElements(t, e, i = !0) {
					const s = this._cachedMeta,
						n = s.data,
						o = t + e;
					let a;
					const r = (t) => {
						for (t.length += e, a = t.length - 1; a >= o; a--)
							t[a] = t[a - e];
					};
					for (r(n), a = t; a < o; ++a)
						n[a] = new this.dataElementType();
					this._parsing && r(s._parsed),
						this.parse(t, e),
						i && this.updateElements(n, t, e, "reset");
				}
				updateElements(t, e, i, s) {}
				_removeElements(t, e) {
					const i = this._cachedMeta;
					if (this._parsing) {
						const s = i._parsed.splice(t, e);
						i._stacked && ki(i, s);
					}
					i.data.splice(t, e);
				}
				_sync(t) {
					if (this._parsing) this._syncList.push(t);
					else {
						const [e, i, s] = t;
						this[e](i, s);
					}
				}
				_onDataPush() {
					const t = arguments.length;
					this._sync([
						"_insertElements",
						this.getDataset().data.length - t,
						t,
					]);
				}
				_onDataPop() {
					this._sync([
						"_removeElements",
						this._cachedMeta.data.length - 1,
						1,
					]);
				}
				_onDataShift() {
					this._sync(["_removeElements", 0, 1]);
				}
				_onDataSplice(t, e) {
					this._sync(["_removeElements", t, e]),
						this._sync([
							"_insertElements",
							t,
							arguments.length - 2,
						]);
				}
				_onDataUnshift() {
					this._sync(["_insertElements", 0, arguments.length]);
				}
			}
			function Di(t) {
				const e = t.iScale,
					i = (function (t, e) {
						if (!t._cache.$bar) {
							const i = t.getMatchingVisibleMetas(e);
							let s = [];
							for (let e = 0, n = i.length; e < n; e++)
								s = s.concat(
									i[e].controller.getAllParsedValues(t),
								);
							t._cache.$bar = me(s.sort((t, e) => t - e));
						}
						return t._cache.$bar;
					})(e, t.type);
				let s,
					n,
					o,
					a,
					r = e._length;
				const l = () => {
					32767 !== o &&
						-32768 !== o &&
						(D(a) && (r = Math.min(r, Math.abs(o - a) || r)),
						(a = o));
				};
				for (s = 0, n = i.length; s < n; ++s)
					(o = e.getPixelForValue(i[s])), l();
				for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)
					(o = e.getPixelForTick(s)), l();
				return r;
			}
			function Ci(t, e, i, s) {
				return (
					c(t)
						? (function (t, e, i, s) {
								const n = i.parse(t[0], s),
									o = i.parse(t[1], s),
									a = Math.min(n, o),
									r = Math.max(n, o);
								let l = a,
									h = r;
								Math.abs(a) > Math.abs(r) && ((l = r), (h = a)),
									(e[i.axis] = h),
									(e._custom = {
										barStart: l,
										barEnd: h,
										start: n,
										end: o,
										min: a,
										max: r,
									});
							})(t, e, i, s)
						: (e[i.axis] = i.parse(t, s)),
					e
				);
			}
			function Ai(t, e, i, s) {
				const n = t.iScale,
					o = t.vScale,
					a = n.getLabels(),
					r = n === o,
					l = [];
				let h, c, d, u;
				for (h = i, c = i + s; h < c; ++h)
					(u = e[h]),
						(d = {}),
						(d[n.axis] = r || n.parse(a[h], h)),
						l.push(Ci(u, d, o, h));
				return l;
			}
			function Ti(t) {
				return t && void 0 !== t.barStart && void 0 !== t.barEnd;
			}
			function Ei(t, e, i, s) {
				let n = e.borderSkipped;
				const o = {};
				if (!n) return void (t.borderSkipped = o);
				const {
					start: a,
					end: r,
					reverse: l,
					top: h,
					bottom: c,
				} = (function (t) {
					let e, i, s, n, o;
					return (
						t.horizontal
							? ((e = t.base > t.x), (i = "left"), (s = "right"))
							: ((e = t.base < t.y), (i = "bottom"), (s = "top")),
						e
							? ((n = "end"), (o = "start"))
							: ((n = "start"), (o = "end")),
						{ start: i, end: s, reverse: e, top: n, bottom: o }
					);
				})(t);
				"middle" === n &&
					i &&
					((t.enableBorderRadius = !0),
					(i._top || 0) === s
						? (n = h)
						: (i._bottom || 0) === s
							? (n = c)
							: ((o[Li(c, a, r, l)] = !0), (n = h))),
					(o[Li(n, a, r, l)] = !0),
					(t.borderSkipped = o);
			}
			function Li(t, e, i, s) {
				var n, o, a;
				return (
					s
						? ((a = i),
							(t = Ri(
								(t = (n = t) === (o = e) ? a : n === a ? o : n),
								i,
								e,
							)))
						: (t = Ri(t, e, i)),
					t
				);
			}
			function Ri(t, e, i) {
				return "start" === t ? e : "end" === t ? i : t;
			}
			function Ii(t, { inflateAmount: e }, i) {
				t.inflateAmount = "auto" === e ? (1 === i ? 0.33 : 0) : e;
			}
			(Oi.defaults = {}),
				(Oi.prototype.datasetElementType = null),
				(Oi.prototype.dataElementType = null);
			class zi extends Oi {
				parsePrimitiveData(t, e, i, s) {
					return Ai(t, e, i, s);
				}
				parseArrayData(t, e, i, s) {
					return Ai(t, e, i, s);
				}
				parseObjectData(t, e, i, s) {
					const { iScale: n, vScale: o } = t,
						{ xAxisKey: a = "x", yAxisKey: r = "y" } =
							this._parsing,
						l = "x" === n.axis ? a : r,
						h = "x" === o.axis ? a : r,
						c = [];
					let d, u, f, g;
					for (d = i, u = i + s; d < u; ++d)
						(g = e[d]),
							(f = {}),
							(f[n.axis] = n.parse(P(g, l), d)),
							c.push(Ci(P(g, h), f, o, d));
					return c;
				}
				updateRangeFromParsed(t, e, i, s) {
					super.updateRangeFromParsed(t, e, i, s);
					const n = i._custom;
					n &&
						e === this._cachedMeta.vScale &&
						((t.min = Math.min(t.min, n.min)),
						(t.max = Math.max(t.max, n.max)));
				}
				getMaxOverflow() {
					return 0;
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						{ iScale: i, vScale: s } = e,
						n = this.getParsed(t),
						o = n._custom,
						a = Ti(o)
							? "[" + o.start + ", " + o.end + "]"
							: "" + s.getLabelForValue(n[s.axis]);
					return {
						label: "" + i.getLabelForValue(n[i.axis]),
						value: a,
					};
				}
				initialize() {
					(this.enableOptionSharing = !0), super.initialize();
					this._cachedMeta.stack = this.getDataset().stack;
				}
				update(t) {
					const e = this._cachedMeta;
					this.updateElements(e.data, 0, e.data.length, t);
				}
				updateElements(t, e, i, s) {
					const n = "reset" === s,
						{
							index: o,
							_cachedMeta: { vScale: a },
						} = this,
						r = a.getBasePixel(),
						l = a.isHorizontal(),
						c = this._getRuler(),
						d = this.resolveDataElementOptions(e, s),
						u = this.getSharedOptions(d),
						f = this.includeOptions(s, u);
					this.updateSharedOptions(u, s, d);
					for (let g = e; g < e + i; g++) {
						const e = this.getParsed(g),
							i =
								n || h(e[a.axis])
									? { base: r, head: r }
									: this._calculateBarValuePixels(g),
							d = this._calculateBarIndexPixels(g, c),
							p = (e._stacks || {})[a.axis],
							m = {
								horizontal: l,
								base: i.base,
								enableBorderRadius:
									!p ||
									Ti(e._custom) ||
									o === p._top ||
									o === p._bottom,
								x: l ? i.head : d.center,
								y: l ? d.center : i.head,
								height: l ? d.size : Math.abs(i.size),
								width: l ? Math.abs(i.size) : d.size,
							};
						f &&
							(m.options =
								u ||
								this.resolveDataElementOptions(
									g,
									t[g].active ? "active" : s,
								));
						const b = m.options || t[g].options;
						Ei(m, b, p, o),
							Ii(m, b, c.ratio),
							this.updateElement(t[g], g, m, s);
					}
				}
				_getStacks(t, e) {
					const i = this._cachedMeta.iScale,
						s = i.getMatchingVisibleMetas(this._type),
						n = i.options.stacked,
						o = s.length,
						a = [];
					let r, l;
					for (r = 0; r < o; ++r)
						if (((l = s[r]), l.controller.options.grouped)) {
							if (void 0 !== e) {
								const t =
									l.controller.getParsed(e)[
										l.controller._cachedMeta.vScale.axis
									];
								if (h(t) || isNaN(t)) continue;
							}
							if (
								((!1 === n ||
									-1 === a.indexOf(l.stack) ||
									(void 0 === n && void 0 === l.stack)) &&
									a.push(l.stack),
								l.index === t)
							)
								break;
						}
					return a.length || a.push(void 0), a;
				}
				_getStackCount(t) {
					return this._getStacks(void 0, t).length;
				}
				_getStackIndex(t, e, i) {
					const s = this._getStacks(t, i),
						n = void 0 !== e ? s.indexOf(e) : -1;
					return -1 === n ? s.length - 1 : n;
				}
				_getRuler() {
					const t = this.options,
						e = this._cachedMeta,
						i = e.iScale,
						s = [];
					let n, o;
					for (n = 0, o = e.data.length; n < o; ++n)
						s.push(
							i.getPixelForValue(this.getParsed(n)[i.axis], n),
						);
					const a = t.barThickness;
					return {
						min: a || Di(e),
						pixels: s,
						start: i._startPixel,
						end: i._endPixel,
						stackCount: this._getStackCount(),
						scale: i,
						grouped: t.grouped,
						ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
					};
				}
				_calculateBarValuePixels(t) {
					const {
							_cachedMeta: { vScale: e, _stacked: i },
							options: { base: s, minBarLength: n },
						} = this,
						o = s || 0,
						a = this.getParsed(t),
						r = a._custom,
						l = Ti(r);
					let c,
						d,
						u = a[e.axis],
						f = 0,
						g = i ? this.applyStack(e, a, i) : u;
					g !== u && ((f = g - u), (g = u)),
						l &&
							((u = r.barStart),
							(g = r.barEnd - r.barStart),
							0 !== u && B(u) !== B(r.barEnd) && (f = 0),
							(f += u));
					const p = h(s) || l ? f : s;
					let m = e.getPixelForValue(p);
					if (
						((c = this.chart.getDataVisibility(t)
							? e.getPixelForValue(f + g)
							: m),
						(d = c - m),
						Math.abs(d) < n &&
							((d =
								(function (t, e, i) {
									return 0 !== t
										? B(t)
										: (e.isHorizontal() ? 1 : -1) *
												(e.min >= i ? 1 : -1);
								})(d, e, o) * n),
							u === o && (m -= d / 2),
							(c = m + d)),
						m === e.getPixelForValue(o))
					) {
						const t = (B(d) * e.getLineWidthForValue(o)) / 2;
						(m += t), (d -= t);
					}
					return { size: d, base: m, head: c, center: c + d / 2 };
				}
				_calculateBarIndexPixels(t, e) {
					const i = e.scale,
						s = this.options,
						n = s.skipNull,
						o = g(s.maxBarThickness, 1 / 0);
					let a, r;
					if (e.grouped) {
						const i = n ? this._getStackCount(t) : e.stackCount,
							l =
								"flex" === s.barThickness
									? (function (t, e, i, s) {
											const n = e.pixels,
												o = n[t];
											let a = t > 0 ? n[t - 1] : null,
												r =
													t < n.length - 1
														? n[t + 1]
														: null;
											const l = i.categoryPercentage;
											null === a &&
												(a =
													o -
													(null === r
														? e.end - e.start
														: r - o)),
												null === r && (r = o + o - a);
											const h =
												o -
												((o - Math.min(a, r)) / 2) * l;
											return {
												chunk:
													((Math.abs(r - a) / 2) *
														l) /
													s,
												ratio: i.barPercentage,
												start: h,
											};
										})(t, e, s, i)
									: (function (t, e, i, s) {
											const n = i.barThickness;
											let o, a;
											return (
												h(n)
													? ((o =
															e.min *
															i.categoryPercentage),
														(a = i.barPercentage))
													: ((o = n * s), (a = 1)),
												{
													chunk: o / s,
													ratio: a,
													start: e.pixels[t] - o / 2,
												}
											);
										})(t, e, s, i),
							c = this._getStackIndex(
								this.index,
								this._cachedMeta.stack,
								n ? t : void 0,
							);
						(a = l.start + l.chunk * c + l.chunk / 2),
							(r = Math.min(o, l.chunk * l.ratio));
					} else
						(a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
							(r = Math.min(o, e.min * e.ratio));
					return {
						base: a - r / 2,
						head: a + r / 2,
						center: a,
						size: r,
					};
				}
				draw() {
					const t = this._cachedMeta,
						e = t.vScale,
						i = t.data,
						s = i.length;
					let n = 0;
					for (; n < s; ++n)
						null !== this.getParsed(n)[e.axis] &&
							i[n].draw(this._ctx);
				}
			}
			(zi.id = "bar"),
				(zi.defaults = {
					datasetElementType: !1,
					dataElementType: "bar",
					categoryPercentage: 0.8,
					barPercentage: 0.9,
					grouped: !0,
					animations: {
						numbers: {
							type: "number",
							properties: ["x", "y", "base", "width", "height"],
						},
					},
				}),
				(zi.overrides = {
					scales: {
						_index_: {
							type: "category",
							offset: !0,
							grid: { offset: !0 },
						},
						_value_: { type: "linear", beginAtZero: !0 },
					},
				});
			class Fi extends Oi {
				initialize() {
					(this.enableOptionSharing = !0), super.initialize();
				}
				parsePrimitiveData(t, e, i, s) {
					const n = super.parsePrimitiveData(t, e, i, s);
					for (let o = 0; o < n.length; o++)
						n[o]._custom = this.resolveDataElementOptions(
							o + i,
						).radius;
					return n;
				}
				parseArrayData(t, e, i, s) {
					const n = super.parseArrayData(t, e, i, s);
					for (let o = 0; o < n.length; o++) {
						const t = e[i + o];
						n[o]._custom = g(
							t[2],
							this.resolveDataElementOptions(o + i).radius,
						);
					}
					return n;
				}
				parseObjectData(t, e, i, s) {
					const n = super.parseObjectData(t, e, i, s);
					for (let o = 0; o < n.length; o++) {
						const t = e[i + o];
						n[o]._custom = g(
							t && t.r && +t.r,
							this.resolveDataElementOptions(o + i).radius,
						);
					}
					return n;
				}
				getMaxOverflow() {
					const t = this._cachedMeta.data;
					let e = 0;
					for (let i = t.length - 1; i >= 0; --i)
						e = Math.max(
							e,
							t[i].size(this.resolveDataElementOptions(i)) / 2,
						);
					return e > 0 && e;
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						{ xScale: i, yScale: s } = e,
						n = this.getParsed(t),
						o = i.getLabelForValue(n.x),
						a = s.getLabelForValue(n.y),
						r = n._custom;
					return {
						label: e.label,
						value: "(" + o + ", " + a + (r ? ", " + r : "") + ")",
					};
				}
				update(t) {
					const e = this._cachedMeta.data;
					this.updateElements(e, 0, e.length, t);
				}
				updateElements(t, e, i, s) {
					const n = "reset" === s,
						{ iScale: o, vScale: a } = this._cachedMeta,
						r = this.resolveDataElementOptions(e, s),
						l = this.getSharedOptions(r),
						h = this.includeOptions(s, l),
						c = o.axis,
						d = a.axis;
					for (let u = e; u < e + i; u++) {
						const e = t[u],
							i = !n && this.getParsed(u),
							r = {},
							l = (r[c] = n
								? o.getPixelForDecimal(0.5)
								: o.getPixelForValue(i[c])),
							f = (r[d] = n
								? a.getBasePixel()
								: a.getPixelForValue(i[d]));
						(r.skip = isNaN(l) || isNaN(f)),
							h &&
								((r.options = this.resolveDataElementOptions(
									u,
									e.active ? "active" : s,
								)),
								n && (r.options.radius = 0)),
							this.updateElement(e, u, r, s);
					}
					this.updateSharedOptions(l, s, r);
				}
				resolveDataElementOptions(t, e) {
					const i = this.getParsed(t);
					let s = super.resolveDataElementOptions(t, e);
					s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
					const n = s.radius;
					return (
						"active" !== e && (s.radius = 0),
						(s.radius += g(i && i._custom, n)),
						s
					);
				}
			}
			(Fi.id = "bubble"),
				(Fi.defaults = {
					datasetElementType: !1,
					dataElementType: "point",
					animations: {
						numbers: {
							type: "number",
							properties: ["x", "y", "borderWidth", "radius"],
						},
					},
				}),
				(Fi.overrides = {
					scales: { x: { type: "linear" }, y: { type: "linear" } },
					plugins: { tooltip: { callbacks: { title: () => "" } } },
				});
			class Vi extends Oi {
				constructor(t, e) {
					super(t, e),
						(this.enableOptionSharing = !0),
						(this.innerRadius = void 0),
						(this.outerRadius = void 0),
						(this.offsetX = void 0),
						(this.offsetY = void 0);
				}
				linkScales() {}
				parse(t, e) {
					const i = this.getDataset().data,
						s = this._cachedMeta;
					if (!1 === this._parsing) s._parsed = i;
					else {
						let n,
							o,
							a = (t) => +i[t];
						if (d(i[t])) {
							const { key: t = "value" } = this._parsing;
							a = (e) => +P(i[e], t);
						}
						for (n = t, o = t + e; n < o; ++n) s._parsed[n] = a(n);
					}
				}
				_getRotation() {
					return $(this.options.rotation - 90);
				}
				_getCircumference() {
					return $(this.options.circumference);
				}
				_getRotationExtents() {
					let t = T,
						e = -T;
					for (let i = 0; i < this.chart.data.datasets.length; ++i)
						if (this.chart.isDatasetVisible(i)) {
							const s = this.chart.getDatasetMeta(i).controller,
								n = s._getRotation(),
								o = s._getCircumference();
							(t = Math.min(t, n)), (e = Math.max(e, n + o));
						}
					return { rotation: t, circumference: e - t };
				}
				update(t) {
					const e = this.chart,
						{ chartArea: i } = e,
						s = this._cachedMeta,
						n = s.data,
						o =
							this.getMaxBorderWidth() +
							this.getMaxOffset(n) +
							this.options.spacing,
						a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
						r = Math.min(
							((l = this.options.cutout),
							(h = a),
							"string" == typeof l && l.endsWith("%")
								? parseFloat(l) / 100
								: l / h),
							1,
						);
					var l, h;
					const c = this._getRingWeight(this.index),
						{ circumference: d, rotation: u } =
							this._getRotationExtents(),
						{
							ratioX: f,
							ratioY: g,
							offsetX: m,
							offsetY: b,
						} = (function (t, e, i) {
							let s = 1,
								n = 1,
								o = 0,
								a = 0;
							if (e < T) {
								const r = t,
									l = r + e,
									h = Math.cos(r),
									c = Math.sin(r),
									d = Math.cos(l),
									u = Math.sin(l),
									f = (t, e, s) =>
										Z(t, r, l, !0)
											? 1
											: Math.max(e, e * i, s, s * i),
									g = (t, e, s) =>
										Z(t, r, l, !0)
											? -1
											: Math.min(e, e * i, s, s * i),
									p = f(0, h, d),
									m = f(I, c, u),
									b = g(A, h, d),
									x = g(A + I, c, u);
								(s = (p - b) / 2),
									(n = (m - x) / 2),
									(o = -(p + b) / 2),
									(a = -(m + x) / 2);
							}
							return {
								ratioX: s,
								ratioY: n,
								offsetX: o,
								offsetY: a,
							};
						})(u, d, r),
						x = (i.width - o) / f,
						_ = (i.height - o) / g,
						y = Math.max(Math.min(x, _) / 2, 0),
						v = p(this.options.radius, y),
						w =
							(v - Math.max(v * r, 0)) /
							this._getVisibleDatasetWeightTotal();
					(this.offsetX = m * v),
						(this.offsetY = b * v),
						(s.total = this.calculateTotal()),
						(this.outerRadius =
							v - w * this._getRingWeightOffset(this.index)),
						(this.innerRadius = Math.max(
							this.outerRadius - w * c,
							0,
						)),
						this.updateElements(n, 0, n.length, t);
				}
				_circumference(t, e) {
					const i = this.options,
						s = this._cachedMeta,
						n = this._getCircumference();
					return (e && i.animation.animateRotate) ||
						!this.chart.getDataVisibility(t) ||
						null === s._parsed[t] ||
						s.data[t].hidden
						? 0
						: this.calculateCircumference((s._parsed[t] * n) / T);
				}
				updateElements(t, e, i, s) {
					const n = "reset" === s,
						o = this.chart,
						a = o.chartArea,
						r = o.options.animation,
						l = (a.left + a.right) / 2,
						h = (a.top + a.bottom) / 2,
						c = n && r.animateScale,
						d = c ? 0 : this.innerRadius,
						u = c ? 0 : this.outerRadius,
						f = this.resolveDataElementOptions(e, s),
						g = this.getSharedOptions(f),
						p = this.includeOptions(s, g);
					let m,
						b = this._getRotation();
					for (m = 0; m < e; ++m) b += this._circumference(m, n);
					for (m = e; m < e + i; ++m) {
						const e = this._circumference(m, n),
							i = t[m],
							o = {
								x: l + this.offsetX,
								y: h + this.offsetY,
								startAngle: b,
								endAngle: b + e,
								circumference: e,
								outerRadius: u,
								innerRadius: d,
							};
						p &&
							(o.options =
								g ||
								this.resolveDataElementOptions(
									m,
									i.active ? "active" : s,
								)),
							(b += e),
							this.updateElement(i, m, o, s);
					}
					this.updateSharedOptions(g, s, f);
				}
				calculateTotal() {
					const t = this._cachedMeta,
						e = t.data;
					let i,
						s = 0;
					for (i = 0; i < e.length; i++) {
						const n = t._parsed[i];
						null === n ||
							isNaN(n) ||
							!this.chart.getDataVisibility(i) ||
							e[i].hidden ||
							(s += Math.abs(n));
					}
					return s;
				}
				calculateCircumference(t) {
					const e = this._cachedMeta.total;
					return e > 0 && !isNaN(t) ? T * (Math.abs(t) / e) : 0;
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = this.chart,
						s = i.data.labels || [],
						n = Je(e._parsed[t], i.options.locale);
					return { label: s[t] || "", value: n };
				}
				getMaxBorderWidth(t) {
					let e = 0;
					const i = this.chart;
					let s, n, o, a, r;
					if (!t)
						for (s = 0, n = i.data.datasets.length; s < n; ++s)
							if (i.isDatasetVisible(s)) {
								(o = i.getDatasetMeta(s)),
									(t = o.data),
									(a = o.controller),
									a !== this && a.configure();
								break;
							}
					if (!t) return 0;
					for (s = 0, n = t.length; s < n; ++s)
						(r = a.resolveDataElementOptions(s)),
							"inner" !== r.borderAlign &&
								(e = Math.max(
									e,
									r.borderWidth || 0,
									r.hoverBorderWidth || 0,
								));
					return e;
				}
				getMaxOffset(t) {
					let e = 0;
					for (let i = 0, s = t.length; i < s; ++i) {
						const t = this.resolveDataElementOptions(i);
						e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
					}
					return e;
				}
				_getRingWeightOffset(t) {
					let e = 0;
					for (let i = 0; i < t; ++i)
						this.chart.isDatasetVisible(i) &&
							(e += this._getRingWeight(i));
					return e;
				}
				_getRingWeight(t) {
					return Math.max(
						g(this.chart.data.datasets[t].weight, 1),
						0,
					);
				}
				_getVisibleDatasetWeightTotal() {
					return (
						this._getRingWeightOffset(
							this.chart.data.datasets.length,
						) || 1
					);
				}
			}
			(Vi.id = "doughnut"),
				(Vi.defaults = {
					datasetElementType: !1,
					dataElementType: "arc",
					animation: { animateRotate: !0, animateScale: !1 },
					animations: {
						numbers: {
							type: "number",
							properties: [
								"circumference",
								"endAngle",
								"innerRadius",
								"outerRadius",
								"startAngle",
								"x",
								"y",
								"offset",
								"borderWidth",
								"spacing",
							],
						},
					},
					cutout: "50%",
					rotation: 0,
					circumference: 360,
					radius: "100%",
					spacing: 0,
					indexAxis: "r",
				}),
				(Vi.descriptors = {
					_scriptable: (t) => "spacing" !== t,
					_indexable: (t) => "spacing" !== t,
				}),
				(Vi.overrides = {
					aspectRatio: 1,
					plugins: {
						legend: {
							labels: {
								generateLabels(t) {
									const e = t.data;
									if (e.labels.length && e.datasets.length) {
										const {
											labels: { pointStyle: i },
										} = t.legend.options;
										return e.labels.map((e, s) => {
											const n = t
												.getDatasetMeta(0)
												.controller.getStyle(s);
											return {
												text: e,
												fillStyle: n.backgroundColor,
												strokeStyle: n.borderColor,
												lineWidth: n.borderWidth,
												pointStyle: i,
												hidden: !t.getDataVisibility(s),
												index: s,
											};
										});
									}
									return [];
								},
							},
							onClick(t, e, i) {
								i.chart.toggleDataVisibility(e.index),
									i.chart.update();
							},
						},
						tooltip: {
							callbacks: {
								title: () => "",
								label(t) {
									let e = t.label;
									const i = ": " + t.formattedValue;
									return (
										c(e)
											? ((e = e.slice()), (e[0] += i))
											: (e += i),
										e
									);
								},
							},
						},
					},
				});
			class Bi extends Oi {
				initialize() {
					(this.enableOptionSharing = !0), super.initialize();
				}
				update(t) {
					const e = this._cachedMeta,
						{ dataset: i, data: s = [], _dataset: n } = e,
						o = this.chart._animationsDisabled;
					let { start: a, count: r } = (function (t, e, i) {
						const s = e.length;
						let n = 0,
							o = s;
						if (t._sorted) {
							const { iScale: a, _parsed: r } = t,
								l = a.axis,
								{
									min: h,
									max: c,
									minDefined: d,
									maxDefined: u,
								} = a.getUserBounds();
							d &&
								(n = G(
									Math.min(
										ue(r, a.axis, h).lo,
										i
											? s
											: ue(e, l, a.getPixelForValue(h))
													.lo,
									),
									0,
									s - 1,
								)),
								(o = u
									? G(
											Math.max(
												ue(r, a.axis, c).hi + 1,
												i
													? 0
													: ue(
															e,
															l,
															a.getPixelForValue(
																c,
															),
														).hi + 1,
											),
											n,
											s,
										) - n
									: s - n);
						}
						return { start: n, count: o };
					})(e, s, o);
					(this._drawStart = a),
						(this._drawCount = r),
						(function (t) {
							const { xScale: e, yScale: i, _scaleRanges: s } = t,
								n = {
									xmin: e.min,
									xmax: e.max,
									ymin: i.min,
									ymax: i.max,
								};
							if (!s) return (t._scaleRanges = n), !0;
							const o =
								s.xmin !== e.min ||
								s.xmax !== e.max ||
								s.ymin !== i.min ||
								s.ymax !== i.max;
							return Object.assign(s, n), o;
						})(e) && ((a = 0), (r = s.length)),
						(i._chart = this.chart),
						(i._datasetIndex = this.index),
						(i._decimated = !!n._decimated),
						(i.points = s);
					const l = this.resolveDatasetElementOptions(t);
					this.options.showLine || (l.borderWidth = 0),
						(l.segment = this.options.segment),
						this.updateElement(
							i,
							void 0,
							{ animated: !o, options: l },
							t,
						),
						this.updateElements(s, a, r, t);
				}
				updateElements(t, e, i, s) {
					const n = "reset" === s,
						{
							iScale: o,
							vScale: a,
							_stacked: r,
							_dataset: l,
						} = this._cachedMeta,
						c = this.resolveDataElementOptions(e, s),
						d = this.getSharedOptions(c),
						u = this.includeOptions(s, d),
						f = o.axis,
						g = a.axis,
						{ spanGaps: p, segment: m } = this.options,
						b = W(p) ? p : Number.POSITIVE_INFINITY,
						x = this.chart._animationsDisabled || n || "none" === s;
					let _ = e > 0 && this.getParsed(e - 1);
					for (let y = e; y < e + i; ++y) {
						const e = t[y],
							i = this.getParsed(y),
							c = x ? e : {},
							p = h(i[g]),
							v = (c[f] = o.getPixelForValue(i[f], y)),
							w = (c[g] =
								n || p
									? a.getBasePixel()
									: a.getPixelForValue(
											r ? this.applyStack(a, i, r) : i[g],
											y,
										));
						(c.skip = isNaN(v) || isNaN(w) || p),
							(c.stop = y > 0 && i[f] - _[f] > b),
							m && ((c.parsed = i), (c.raw = l.data[y])),
							u &&
								(c.options =
									d ||
									this.resolveDataElementOptions(
										y,
										e.active ? "active" : s,
									)),
							x || this.updateElement(e, y, c, s),
							(_ = i);
					}
					this.updateSharedOptions(d, s, c);
				}
				getMaxOverflow() {
					const t = this._cachedMeta,
						e = t.dataset,
						i = (e.options && e.options.borderWidth) || 0,
						s = t.data || [];
					if (!s.length) return i;
					const n = s[0].size(this.resolveDataElementOptions(0)),
						o = s[s.length - 1].size(
							this.resolveDataElementOptions(s.length - 1),
						);
					return Math.max(i, n, o) / 2;
				}
				draw() {
					const t = this._cachedMeta;
					t.dataset.updateControlPoints(
						this.chart.chartArea,
						t.iScale.axis,
					),
						super.draw();
				}
			}
			(Bi.id = "line"),
				(Bi.defaults = {
					datasetElementType: "line",
					dataElementType: "point",
					showLine: !0,
					spanGaps: !1,
				}),
				(Bi.overrides = {
					scales: {
						_index_: { type: "category" },
						_value_: { type: "linear" },
					},
				});
			class ji extends Oi {
				constructor(t, e) {
					super(t, e),
						(this.innerRadius = void 0),
						(this.outerRadius = void 0);
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = this.chart,
						s = i.data.labels || [],
						n = Je(e._parsed[t].r, i.options.locale);
					return { label: s[t] || "", value: n };
				}
				update(t) {
					const e = this._cachedMeta.data;
					this._updateRadius(),
						this.updateElements(e, 0, e.length, t);
				}
				_updateRadius() {
					const t = this.chart,
						e = t.chartArea,
						i = t.options,
						s = Math.min(e.right - e.left, e.bottom - e.top),
						n = Math.max(s / 2, 0),
						o =
							(n -
								Math.max(
									i.cutoutPercentage
										? (n / 100) * i.cutoutPercentage
										: 1,
									0,
								)) /
							t.getVisibleDatasetCount();
					(this.outerRadius = n - o * this.index),
						(this.innerRadius = this.outerRadius - o);
				}
				updateElements(t, e, i, s) {
					const n = "reset" === s,
						o = this.chart,
						a = this.getDataset(),
						r = o.options.animation,
						l = this._cachedMeta.rScale,
						h = l.xCenter,
						c = l.yCenter,
						d = l.getIndexAngle(0) - 0.5 * A;
					let u,
						f = d;
					const g = 360 / this.countVisibleElements();
					for (u = 0; u < e; ++u) f += this._computeAngle(u, s, g);
					for (u = e; u < e + i; u++) {
						const e = t[u];
						let i = f,
							p = f + this._computeAngle(u, s, g),
							m = o.getDataVisibility(u)
								? l.getDistanceFromCenterForValue(a.data[u])
								: 0;
						(f = p),
							n &&
								(r.animateScale && (m = 0),
								r.animateRotate && (i = p = d));
						const b = {
							x: h,
							y: c,
							innerRadius: 0,
							outerRadius: m,
							startAngle: i,
							endAngle: p,
							options: this.resolveDataElementOptions(
								u,
								e.active ? "active" : s,
							),
						};
						this.updateElement(e, u, b, s);
					}
				}
				countVisibleElements() {
					const t = this.getDataset(),
						e = this._cachedMeta;
					let i = 0;
					return (
						e.data.forEach((e, s) => {
							!isNaN(t.data[s]) &&
								this.chart.getDataVisibility(s) &&
								i++;
						}),
						i
					);
				}
				_computeAngle(t, e, i) {
					return this.chart.getDataVisibility(t)
						? $(this.resolveDataElementOptions(t, e).angle || i)
						: 0;
				}
			}
			(ji.id = "polarArea"),
				(ji.defaults = {
					dataElementType: "arc",
					animation: { animateRotate: !0, animateScale: !0 },
					animations: {
						numbers: {
							type: "number",
							properties: [
								"x",
								"y",
								"startAngle",
								"endAngle",
								"innerRadius",
								"outerRadius",
							],
						},
					},
					indexAxis: "r",
					startAngle: 0,
				}),
				(ji.overrides = {
					aspectRatio: 1,
					plugins: {
						legend: {
							labels: {
								generateLabels(t) {
									const e = t.data;
									if (e.labels.length && e.datasets.length) {
										const {
											labels: { pointStyle: i },
										} = t.legend.options;
										return e.labels.map((e, s) => {
											const n = t
												.getDatasetMeta(0)
												.controller.getStyle(s);
											return {
												text: e,
												fillStyle: n.backgroundColor,
												strokeStyle: n.borderColor,
												lineWidth: n.borderWidth,
												pointStyle: i,
												hidden: !t.getDataVisibility(s),
												index: s,
											};
										});
									}
									return [];
								},
							},
							onClick(t, e, i) {
								i.chart.toggleDataVisibility(e.index),
									i.chart.update();
							},
						},
						tooltip: {
							callbacks: {
								title: () => "",
								label: (t) =>
									t.chart.data.labels[t.dataIndex] +
									": " +
									t.formattedValue,
							},
						},
					},
					scales: {
						r: {
							type: "radialLinear",
							angleLines: { display: !1 },
							beginAtZero: !0,
							grid: { circular: !0 },
							pointLabels: { display: !1 },
							startAngle: 0,
						},
					},
				});
			class Wi extends Vi {}
			(Wi.id = "pie"),
				(Wi.defaults = {
					cutout: 0,
					rotation: 0,
					circumference: 360,
					radius: "100%",
				});
			class Ni extends Oi {
				getLabelAndValue(t) {
					const e = this._cachedMeta.vScale,
						i = this.getParsed(t);
					return {
						label: e.getLabels()[t],
						value: "" + e.getLabelForValue(i[e.axis]),
					};
				}
				update(t) {
					const e = this._cachedMeta,
						i = e.dataset,
						s = e.data || [],
						n = e.iScale.getLabels();
					if (((i.points = s), "resize" !== t)) {
						const e = this.resolveDatasetElementOptions(t);
						this.options.showLine || (e.borderWidth = 0);
						const o = {
							_loop: !0,
							_fullLoop: n.length === s.length,
							options: e,
						};
						this.updateElement(i, void 0, o, t);
					}
					this.updateElements(s, 0, s.length, t);
				}
				updateElements(t, e, i, s) {
					const n = this.getDataset(),
						o = this._cachedMeta.rScale,
						a = "reset" === s;
					for (let r = e; r < e + i; r++) {
						const e = t[r],
							i = this.resolveDataElementOptions(
								r,
								e.active ? "active" : s,
							),
							l = o.getPointPositionForValue(r, n.data[r]),
							h = a ? o.xCenter : l.x,
							c = a ? o.yCenter : l.y,
							d = {
								x: h,
								y: c,
								angle: l.angle,
								skip: isNaN(h) || isNaN(c),
								options: i,
							};
						this.updateElement(e, r, d, s);
					}
				}
			}
			(Ni.id = "radar"),
				(Ni.defaults = {
					datasetElementType: "line",
					dataElementType: "point",
					indexAxis: "r",
					showLine: !0,
					elements: { line: { fill: "start" } },
				}),
				(Ni.overrides = {
					aspectRatio: 1,
					scales: { r: { type: "radialLinear" } },
				});
			class Hi extends Bi {}
			(Hi.id = "scatter"),
				(Hi.defaults = { showLine: !1, fill: !1 }),
				(Hi.overrides = {
					interaction: { mode: "point" },
					plugins: {
						tooltip: {
							callbacks: {
								title: () => "",
								label: (t) =>
									"(" +
									t.label +
									", " +
									t.formattedValue +
									")",
							},
						},
					},
					scales: { x: { type: "linear" }, y: { type: "linear" } },
				});
			var $i = Object.freeze({
				__proto__: null,
				BarController: zi,
				BubbleController: Fi,
				DoughnutController: Vi,
				LineController: Bi,
				PolarAreaController: ji,
				PieController: Wi,
				RadarController: Ni,
				ScatterController: Hi,
			});
			function Yi() {
				throw new Error(
					"This method is not implemented: Check that a complete date adapter is provided.",
				);
			}
			class Ui {
				constructor(t) {
					this.options = t || {};
				}
				formats() {
					return Yi();
				}
				parse(t, e) {
					return Yi();
				}
				format(t, e) {
					return Yi();
				}
				add(t, e, i) {
					return Yi();
				}
				diff(t, e, i) {
					return Yi();
				}
				startOf(t, e, i) {
					return Yi();
				}
				endOf(t, e) {
					return Yi();
				}
			}
			Ui.override = function (t) {
				Object.assign(Ui.prototype, t);
			};
			var Xi = { _date: Ui };
			function qi(t, e) {
				return "native" in t ? { x: t.x, y: t.y } : He(t, e);
			}
			function Ki(t, e, i, s) {
				const { controller: n, data: o, _sorted: a } = t,
					r = n._cachedMeta.iScale;
				if (r && e === r.axis && a && o.length) {
					const t = r._reversePixels ? fe : ue;
					if (!s) return t(o, e, i);
					if (n._sharedOptions) {
						const s = o[0],
							n =
								"function" == typeof s.getRange &&
								s.getRange(e);
						if (n) {
							const s = t(o, e, i - n),
								a = t(o, e, i + n);
							return { lo: s.lo, hi: a.hi };
						}
					}
				}
				return { lo: 0, hi: o.length - 1 };
			}
			function Zi(t, e, i, s, n) {
				const o = t.getSortedVisibleDatasetMetas(),
					a = i[e];
				for (let r = 0, l = o.length; r < l; ++r) {
					const { index: t, data: i } = o[r],
						{ lo: l, hi: h } = Ki(o[r], e, a, n);
					for (let e = l; e <= h; ++e) {
						const n = i[e];
						n.skip || s(n, t, e);
					}
				}
			}
			function Gi(t, e, i, s) {
				const n = [];
				if (!Xt(e, t.chartArea, t._minPadding)) return n;
				return (
					Zi(
						t,
						i,
						e,
						function (t, i, o) {
							t.inRange(e.x, e.y, s) &&
								n.push({
									element: t,
									datasetIndex: i,
									index: o,
								});
						},
						!0,
					),
					n
				);
			}
			function Qi(t, e, i, s, n) {
				const o = (function (t) {
					const e = -1 !== t.indexOf("x"),
						i = -1 !== t.indexOf("y");
					return function (t, s) {
						const n = e ? Math.abs(t.x - s.x) : 0,
							o = i ? Math.abs(t.y - s.y) : 0;
						return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
					};
				})(i);
				let a = Number.POSITIVE_INFINITY,
					r = [];
				if (!Xt(e, t.chartArea, t._minPadding)) return r;
				return (
					Zi(t, i, e, function (i, l, h) {
						if (s && !i.inRange(e.x, e.y, n)) return;
						const c = i.getCenterPoint(n);
						if (
							!Xt(c, t.chartArea, t._minPadding) &&
							!i.inRange(e.x, e.y, n)
						)
							return;
						const d = o(e, c);
						d < a
							? ((r = [
									{ element: i, datasetIndex: l, index: h },
								]),
								(a = d))
							: d === a &&
								r.push({
									element: i,
									datasetIndex: l,
									index: h,
								});
					}),
					r
				);
			}
			function Ji(t, e, i, s) {
				const n = qi(e, t),
					o = [],
					a = i.axis,
					r = "x" === a ? "inXRange" : "inYRange";
				let l = !1;
				return (
					(function (t, e) {
						const i = t.getSortedVisibleDatasetMetas();
						let s, n, o;
						for (let a = 0, r = i.length; a < r; ++a) {
							({ index: s, data: n } = i[a]);
							for (let t = 0, i = n.length; t < i; ++t)
								(o = n[t]), o.skip || e(o, s, t);
						}
					})(t, (t, e, i) => {
						t[r](n[a], s) &&
							o.push({ element: t, datasetIndex: e, index: i }),
							t.inRange(n.x, n.y, s) && (l = !0);
					}),
					i.intersect && !l ? [] : o
				);
			}
			var ts = {
				modes: {
					index(t, e, i, s) {
						const n = qi(e, t),
							o = i.axis || "x",
							a = i.intersect
								? Gi(t, n, o, s)
								: Qi(t, n, o, !1, s),
							r = [];
						return a.length
							? (t.getSortedVisibleDatasetMetas().forEach((t) => {
									const e = a[0].index,
										i = t.data[e];
									i &&
										!i.skip &&
										r.push({
											element: i,
											datasetIndex: t.index,
											index: e,
										});
								}),
								r)
							: [];
					},
					dataset(t, e, i, s) {
						const n = qi(e, t),
							o = i.axis || "xy";
						let a = i.intersect
							? Gi(t, n, o, s)
							: Qi(t, n, o, !1, s);
						if (a.length > 0) {
							const e = a[0].datasetIndex,
								i = t.getDatasetMeta(e).data;
							a = [];
							for (let t = 0; t < i.length; ++t)
								a.push({
									element: i[t],
									datasetIndex: e,
									index: t,
								});
						}
						return a;
					},
					point: (t, e, i, s) => Gi(t, qi(e, t), i.axis || "xy", s),
					nearest: (t, e, i, s) =>
						Qi(t, qi(e, t), i.axis || "xy", i.intersect, s),
					x: (t, e, i, s) => ((i.axis = "x"), Ji(t, e, i, s)),
					y: (t, e, i, s) => ((i.axis = "y"), Ji(t, e, i, s)),
				},
			};
			const es = ["left", "top", "right", "bottom"];
			function is(t, e) {
				return t.filter((t) => t.pos === e);
			}
			function ss(t, e) {
				return t.filter(
					(t) => -1 === es.indexOf(t.pos) && t.box.axis === e,
				);
			}
			function ns(t, e) {
				return t.sort((t, i) => {
					const s = e ? i : t,
						n = e ? t : i;
					return s.weight === n.weight
						? s.index - n.index
						: s.weight - n.weight;
				});
			}
			function os(t, e) {
				const i = (function (t) {
						const e = {};
						for (const i of t) {
							const { stack: t, pos: s, stackWeight: n } = i;
							if (!t || !es.includes(s)) continue;
							const o =
								e[t] ||
								(e[t] = {
									count: 0,
									placed: 0,
									weight: 0,
									size: 0,
								});
							o.count++, (o.weight += n);
						}
						return e;
					})(t),
					{ vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
				let o, a, r;
				for (o = 0, a = t.length; o < a; ++o) {
					r = t[o];
					const { fullSize: a } = r.box,
						l = i[r.stack],
						h = l && r.stackWeight / l.weight;
					r.horizontal
						? ((r.width = h ? h * s : a && e.availableWidth),
							(r.height = n))
						: ((r.width = s),
							(r.height = h ? h * n : a && e.availableHeight));
				}
				return i;
			}
			function as(t, e, i, s) {
				return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
			}
			function rs(t, e) {
				(t.top = Math.max(t.top, e.top)),
					(t.left = Math.max(t.left, e.left)),
					(t.bottom = Math.max(t.bottom, e.bottom)),
					(t.right = Math.max(t.right, e.right));
			}
			function ls(t, e, i, s) {
				const { pos: n, box: o } = i,
					a = t.maxPadding;
				if (!d(n)) {
					i.size && (t[n] -= i.size);
					const e = s[i.stack] || { size: 0, count: 1 };
					(e.size = Math.max(
						e.size,
						i.horizontal ? o.height : o.width,
					)),
						(i.size = e.size / e.count),
						(t[n] += i.size);
				}
				o.getPadding && rs(a, o.getPadding());
				const r = Math.max(0, e.outerWidth - as(a, t, "left", "right")),
					l = Math.max(0, e.outerHeight - as(a, t, "top", "bottom")),
					h = r !== t.w,
					c = l !== t.h;
				return (
					(t.w = r),
					(t.h = l),
					i.horizontal ? { same: h, other: c } : { same: c, other: h }
				);
			}
			function hs(t, e) {
				const i = e.maxPadding;
				function s(t) {
					const s = { left: 0, top: 0, right: 0, bottom: 0 };
					return (
						t.forEach((t) => {
							s[t] = Math.max(e[t], i[t]);
						}),
						s
					);
				}
				return s(t ? ["left", "right"] : ["top", "bottom"]);
			}
			function cs(t, e, i, s) {
				const n = [];
				let o, a, r, l, h, c;
				for (o = 0, a = t.length, h = 0; o < a; ++o) {
					(r = t[o]),
						(l = r.box),
						l.update(
							r.width || e.w,
							r.height || e.h,
							hs(r.horizontal, e),
						);
					const { same: a, other: d } = ls(e, i, r, s);
					(h |= a && n.length), (c = c || d), l.fullSize || n.push(r);
				}
				return (h && cs(n, e, i, s)) || c;
			}
			function ds(t, e, i, s, n) {
				(t.top = i),
					(t.left = e),
					(t.right = e + s),
					(t.bottom = i + n),
					(t.width = s),
					(t.height = n);
			}
			function us(t, e, i, s) {
				const n = i.padding;
				let { x: o, y: a } = e;
				for (const r of t) {
					const t = r.box,
						l = s[r.stack] || { count: 1, placed: 0, weight: 1 },
						h = r.stackWeight / l.weight || 1;
					if (r.horizontal) {
						const s = e.w * h,
							o = l.size || t.height;
						D(l.start) && (a = l.start),
							t.fullSize
								? ds(
										t,
										n.left,
										a,
										i.outerWidth - n.right - n.left,
										o,
									)
								: ds(t, e.left + l.placed, a, s, o),
							(l.start = a),
							(l.placed += s),
							(a = t.bottom);
					} else {
						const s = e.h * h,
							a = l.size || t.width;
						D(l.start) && (o = l.start),
							t.fullSize
								? ds(
										t,
										o,
										n.top,
										a,
										i.outerHeight - n.bottom - n.top,
									)
								: ds(t, o, e.top + l.placed, a, s),
							(l.start = o),
							(l.placed += s),
							(o = t.right);
					}
				}
				(e.x = o), (e.y = a);
			}
			Wt.set("layout", {
				autoPadding: !0,
				padding: { top: 0, right: 0, bottom: 0, left: 0 },
			});
			var fs = {
				addBox(t, e) {
					t.boxes || (t.boxes = []),
						(e.fullSize = e.fullSize || !1),
						(e.position = e.position || "top"),
						(e.weight = e.weight || 0),
						(e._layers =
							e._layers ||
							function () {
								return [
									{
										z: 0,
										draw(t) {
											e.draw(t);
										},
									},
								];
							}),
						t.boxes.push(e);
				},
				removeBox(t, e) {
					const i = t.boxes ? t.boxes.indexOf(e) : -1;
					-1 !== i && t.boxes.splice(i, 1);
				},
				configure(t, e, i) {
					(e.fullSize = i.fullSize),
						(e.position = i.position),
						(e.weight = i.weight);
				},
				update(t, e, i, s) {
					if (!t) return;
					const n = re(t.options.layout.padding),
						o = Math.max(e - n.width, 0),
						a = Math.max(i - n.height, 0),
						r = (function (t) {
							const e = (function (t) {
									const e = [];
									let i, s, n, o, a, r;
									for (
										i = 0, s = (t || []).length;
										i < s;
										++i
									)
										(n = t[i]),
											({
												position: o,
												options: {
													stack: a,
													stackWeight: r = 1,
												},
											} = n),
											e.push({
												index: i,
												box: n,
												pos: o,
												horizontal: n.isHorizontal(),
												weight: n.weight,
												stack: a && o + a,
												stackWeight: r,
											});
									return e;
								})(t),
								i = ns(
									e.filter((t) => t.box.fullSize),
									!0,
								),
								s = ns(is(e, "left"), !0),
								n = ns(is(e, "right")),
								o = ns(is(e, "top"), !0),
								a = ns(is(e, "bottom")),
								r = ss(e, "x"),
								l = ss(e, "y");
							return {
								fullSize: i,
								leftAndTop: s.concat(o),
								rightAndBottom: n.concat(l).concat(a).concat(r),
								chartArea: is(e, "chartArea"),
								vertical: s.concat(n).concat(l),
								horizontal: o.concat(a).concat(r),
							};
						})(t.boxes),
						l = r.vertical,
						h = r.horizontal;
					b(t.boxes, (t) => {
						"function" == typeof t.beforeLayout && t.beforeLayout();
					});
					const c =
							l.reduce(
								(t, e) =>
									e.box.options &&
									!1 === e.box.options.display
										? t
										: t + 1,
								0,
							) || 1,
						d = Object.freeze({
							outerWidth: e,
							outerHeight: i,
							padding: n,
							availableWidth: o,
							availableHeight: a,
							vBoxMaxWidth: o / 2 / c,
							hBoxMaxHeight: a / 2,
						}),
						u = Object.assign({}, n);
					rs(u, re(s));
					const f = Object.assign(
							{ maxPadding: u, w: o, h: a, x: n.left, y: n.top },
							n,
						),
						g = os(l.concat(h), d);
					cs(r.fullSize, f, d, g),
						cs(l, f, d, g),
						cs(h, f, d, g) && cs(l, f, d, g),
						(function (t) {
							const e = t.maxPadding;
							function i(i) {
								const s = Math.max(e[i] - t[i], 0);
								return (t[i] += s), s;
							}
							(t.y += i("top")),
								(t.x += i("left")),
								i("right"),
								i("bottom");
						})(f),
						us(r.leftAndTop, f, d, g),
						(f.x += f.w),
						(f.y += f.h),
						us(r.rightAndBottom, f, d, g),
						(t.chartArea = {
							left: f.left,
							top: f.top,
							right: f.left + f.w,
							bottom: f.top + f.h,
							height: f.h,
							width: f.w,
						}),
						b(r.chartArea, (e) => {
							const i = e.box;
							Object.assign(i, t.chartArea), i.update(f.w, f.h);
						});
				},
			};
			class gs {
				acquireContext(t, e) {}
				releaseContext(t) {
					return !1;
				}
				addEventListener(t, e, i) {}
				removeEventListener(t, e, i) {}
				getDevicePixelRatio() {
					return 1;
				}
				getMaximumSize(t, e, i, s) {
					return (
						(e = Math.max(0, e || t.width)),
						(i = i || t.height),
						{
							width: e,
							height: Math.max(0, s ? Math.floor(e / s) : i),
						}
					);
				}
				isAttached(t) {
					return !0;
				}
				updateConfig(t) {}
			}
			class ps extends gs {
				acquireContext(t) {
					return (t && t.getContext && t.getContext("2d")) || null;
				}
				updateConfig(t) {
					t.options.animation = !1;
				}
			}
			const ms = {
					touchstart: "mousedown",
					touchmove: "mousemove",
					touchend: "mouseup",
					pointerenter: "mouseenter",
					pointerdown: "mousedown",
					pointermove: "mousemove",
					pointerup: "mouseup",
					pointerleave: "mouseout",
					pointerout: "mouseout",
				},
				bs = (t) => null === t || "" === t;
			const xs = !!Xe && { passive: !0 };
			function _s(t, e, i) {
				t.canvas.removeEventListener(e, i, xs);
			}
			function ys(t, e, i) {
				const s = t.canvas,
					n = new MutationObserver((t) => {
						for (const e of t)
							for (const t of e.addedNodes)
								if (t === s || t.contains(s)) return i();
					});
				return n.observe(document, { childList: !0, subtree: !0 }), n;
			}
			function vs(t, e, i) {
				const s = t.canvas,
					n = new MutationObserver((t) => {
						for (const e of t)
							for (const t of e.removedNodes)
								if (t === s || t.contains(s)) return i();
					});
				return n.observe(document, { childList: !0, subtree: !0 }), n;
			}
			const ws = new Map();
			let Ms = 0;
			function ks() {
				const t = window.devicePixelRatio;
				t !== Ms &&
					((Ms = t),
					ws.forEach((e, i) => {
						i.currentDevicePixelRatio !== t && e();
					}));
			}
			function Ss(t, e, i) {
				const s = t.canvas,
					o = s && Ve(s);
				if (!o) return;
				const a = n((t, e) => {
						const s = o.clientWidth;
						i(t, e), s < o.clientWidth && i();
					}, window),
					r = new ResizeObserver((t) => {
						const e = t[0],
							i = e.contentRect.width,
							s = e.contentRect.height;
						(0 === i && 0 === s) || a(i, s);
					});
				return (
					r.observe(o),
					(function (t, e) {
						ws.size || window.addEventListener("resize", ks),
							ws.set(t, e);
					})(t, a),
					r
				);
			}
			function Ps(t, e, i) {
				i && i.disconnect(),
					"resize" === e &&
						(function (t) {
							ws.delete(t),
								ws.size ||
									window.removeEventListener("resize", ks);
						})(t);
			}
			function Os(t, e, i) {
				const s = t.canvas,
					o = n(
						(e) => {
							null !== t.ctx &&
								i(
									(function (t, e) {
										const i = ms[t.type] || t.type,
											{ x: s, y: n } = He(t, e);
										return {
											type: i,
											chart: e,
											native: t,
											x: void 0 !== s ? s : null,
											y: void 0 !== n ? n : null,
										};
									})(e, t),
								);
						},
						t,
						(t) => {
							const e = t[0];
							return [e, e.offsetX, e.offsetY];
						},
					);
				return (
					(function (t, e, i) {
						t.addEventListener(e, i, xs);
					})(s, e, o),
					o
				);
			}
			class Ds extends gs {
				acquireContext(t, e) {
					const i = t && t.getContext && t.getContext("2d");
					return i && i.canvas === t
						? ((function (t, e) {
								const i = t.style,
									s = t.getAttribute("height"),
									n = t.getAttribute("width");
								if (
									((t.$chartjs = {
										initial: {
											height: s,
											width: n,
											style: {
												display: i.display,
												height: i.height,
												width: i.width,
											},
										},
									}),
									(i.display = i.display || "block"),
									(i.boxSizing = i.boxSizing || "border-box"),
									bs(n))
								) {
									const e = qe(t, "width");
									void 0 !== e && (t.width = e);
								}
								if (bs(s))
									if ("" === t.style.height)
										t.height = t.width / (e || 2);
									else {
										const e = qe(t, "height");
										void 0 !== e && (t.height = e);
									}
							})(t, e),
							i)
						: null;
				}
				releaseContext(t) {
					const e = t.canvas;
					if (!e.$chartjs) return !1;
					const i = e.$chartjs.initial;
					["height", "width"].forEach((t) => {
						const s = i[t];
						h(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
					});
					const s = i.style || {};
					return (
						Object.keys(s).forEach((t) => {
							e.style[t] = s[t];
						}),
						(e.width = e.width),
						delete e.$chartjs,
						!0
					);
				}
				addEventListener(t, e, i) {
					this.removeEventListener(t, e);
					const s = t.$proxies || (t.$proxies = {}),
						n = { attach: ys, detach: vs, resize: Ss }[e] || Os;
					s[e] = n(t, e, i);
				}
				removeEventListener(t, e) {
					const i = t.$proxies || (t.$proxies = {}),
						s = i[e];
					if (!s) return;
					(({ attach: Ps, detach: Ps, resize: Ps })[e] || _s)(
						t,
						e,
						s,
					),
						(i[e] = void 0);
				}
				getDevicePixelRatio() {
					return window.devicePixelRatio;
				}
				getMaximumSize(t, e, i, s) {
					return Ye(t, e, i, s);
				}
				isAttached(t) {
					const e = Ve(t);
					return !(!e || !e.isConnected);
				}
			}
			class Cs {
				constructor() {
					(this.x = void 0),
						(this.y = void 0),
						(this.active = !1),
						(this.options = void 0),
						(this.$animations = void 0);
				}
				tooltipPosition(t) {
					const { x: e, y: i } = this.getProps(["x", "y"], t);
					return { x: e, y: i };
				}
				hasValue() {
					return W(this.x) && W(this.y);
				}
				getProps(t, e) {
					const i = this.$animations;
					if (!e || !i) return this;
					const s = {};
					return (
						t.forEach((t) => {
							s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
						}),
						s
					);
				}
			}
			(Cs.defaults = {}), (Cs.defaultRoutes = void 0);
			const As = {
				values: (t) => (c(t) ? t : "" + t),
				numeric(t, e, i) {
					if (0 === t) return "0";
					const s = this.chart.options.locale;
					let n,
						o = t;
					if (i.length > 1) {
						const e = Math.max(
							Math.abs(i[0].value),
							Math.abs(i[i.length - 1].value),
						);
						(e < 1e-4 || e > 1e15) && (n = "scientific"),
							(o = (function (t, e) {
								let i =
									e.length > 3
										? e[2].value - e[1].value
										: e[1].value - e[0].value;
								Math.abs(i) >= 1 &&
									t !== Math.floor(t) &&
									(i = t - Math.floor(t));
								return i;
							})(t, i));
					}
					const a = V(Math.abs(o)),
						r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
						l = {
							notation: n,
							minimumFractionDigits: r,
							maximumFractionDigits: r,
						};
					return (
						Object.assign(l, this.options.ticks.format), Je(t, s, l)
					);
				},
				logarithmic(t, e, i) {
					if (0 === t) return "0";
					const s = t / Math.pow(10, Math.floor(V(t)));
					return 1 === s || 2 === s || 5 === s
						? As.numeric.call(this, t, e, i)
						: "";
				},
			};
			var Ts = { formatters: As };
			function Es(t, e) {
				const i = t.options.ticks,
					s =
						i.maxTicksLimit ||
						(function (t) {
							const e = t.options.offset,
								i = t._tickSize(),
								s = t._length / i + (e ? 0 : 1),
								n = t._maxLength / i;
							return Math.floor(Math.min(s, n));
						})(t),
					n = i.major.enabled
						? (function (t) {
								const e = [];
								let i, s;
								for (i = 0, s = t.length; i < s; i++)
									t[i].major && e.push(i);
								return e;
							})(e)
						: [],
					o = n.length,
					a = n[0],
					r = n[o - 1],
					l = [];
				if (o > s)
					return (
						(function (t, e, i, s) {
							let n,
								o = 0,
								a = i[0];
							for (s = Math.ceil(s), n = 0; n < t.length; n++)
								n === a && (e.push(t[n]), o++, (a = i[o * s]));
						})(e, l, n, o / s),
						l
					);
				const c = (function (t, e, i) {
					const s = (function (t) {
							const e = t.length;
							let i, s;
							if (e < 2) return !1;
							for (s = t[0], i = 1; i < e; ++i)
								if (t[i] - t[i - 1] !== s) return !1;
							return s;
						})(t),
						n = e.length / i;
					if (!s) return Math.max(n, 1);
					const o = (function (t) {
						const e = [],
							i = Math.sqrt(t);
						let s;
						for (s = 1; s < i; s++)
							t % s == 0 && (e.push(s), e.push(t / s));
						return (
							i === (0 | i) && e.push(i),
							e.sort((t, e) => t - e).pop(),
							e
						);
					})(s);
					for (let a = 0, r = o.length - 1; a < r; a++) {
						const t = o[a];
						if (t > n) return t;
					}
					return Math.max(n, 1);
				})(n, e, s);
				if (o > 0) {
					let t, i;
					const s = o > 1 ? Math.round((r - a) / (o - 1)) : null;
					for (
						Ls(e, l, c, h(s) ? 0 : a - s, a), t = 0, i = o - 1;
						t < i;
						t++
					)
						Ls(e, l, c, n[t], n[t + 1]);
					return Ls(e, l, c, r, h(s) ? e.length : r + s), l;
				}
				return Ls(e, l, c), l;
			}
			function Ls(t, e, i, s, n) {
				const o = g(s, 0),
					a = Math.min(g(n, t.length), t.length);
				let r,
					l,
					h,
					c = 0;
				for (
					i = Math.ceil(i),
						n && ((r = n - s), (i = r / Math.floor(r / i))),
						h = o;
					h < 0;

				)
					c++, (h = Math.round(o + c * i));
				for (l = Math.max(o, 0); l < a; l++)
					l === h && (e.push(t[l]), c++, (h = Math.round(o + c * i)));
			}
			Wt.set("scale", {
				display: !0,
				offset: !1,
				reverse: !1,
				beginAtZero: !1,
				bounds: "ticks",
				grace: 0,
				grid: {
					display: !0,
					lineWidth: 1,
					drawBorder: !0,
					drawOnChartArea: !0,
					drawTicks: !0,
					tickLength: 8,
					tickWidth: (t, e) => e.lineWidth,
					tickColor: (t, e) => e.color,
					offset: !1,
					borderDash: [],
					borderDashOffset: 0,
					borderWidth: 1,
				},
				title: {
					display: !1,
					text: "",
					padding: { top: 4, bottom: 4 },
				},
				ticks: {
					minRotation: 0,
					maxRotation: 50,
					mirror: !1,
					textStrokeWidth: 0,
					textStrokeColor: "",
					padding: 3,
					display: !0,
					autoSkip: !0,
					autoSkipPadding: 3,
					labelOffset: 0,
					callback: Ts.formatters.values,
					minor: {},
					major: {},
					align: "center",
					crossAlign: "near",
					showLabelBackdrop: !1,
					backdropColor: "rgba(255, 255, 255, 0.75)",
					backdropPadding: 2,
				},
			}),
				Wt.route("scale.ticks", "color", "", "color"),
				Wt.route("scale.grid", "color", "", "borderColor"),
				Wt.route("scale.grid", "borderColor", "", "borderColor"),
				Wt.route("scale.title", "color", "", "color"),
				Wt.describe("scale", {
					_fallback: !1,
					_scriptable: (t) =>
						!t.startsWith("before") &&
						!t.startsWith("after") &&
						"callback" !== t &&
						"parser" !== t,
					_indexable: (t) =>
						"borderDash" !== t && "tickBorderDash" !== t,
				}),
				Wt.describe("scales", { _fallback: "scale" }),
				Wt.describe("scale.ticks", {
					_scriptable: (t) =>
						"backdropPadding" !== t && "callback" !== t,
					_indexable: (t) => "backdropPadding" !== t,
				});
			const Rs = (t, e, i) =>
				"top" === e || "left" === e ? t[e] + i : t[e] - i;
			function Is(t, e) {
				const i = [],
					s = t.length / e,
					n = t.length;
				let o = 0;
				for (; o < n; o += s) i.push(t[Math.floor(o)]);
				return i;
			}
			function zs(t, e, i) {
				const s = t.ticks.length,
					n = Math.min(e, s - 1),
					o = t._startPixel,
					a = t._endPixel,
					r = 1e-6;
				let l,
					h = t.getPixelForTick(n);
				if (
					!(
						i &&
						((l =
							1 === s
								? Math.max(h - o, a - h)
								: 0 === e
									? (t.getPixelForTick(1) - h) / 2
									: (h - t.getPixelForTick(n - 1)) / 2),
						(h += n < e ? l : -l),
						h < o - r || h > a + r)
					)
				)
					return h;
			}
			function Fs(t) {
				return t.drawTicks ? t.tickLength : 0;
			}
			function Vs(t, e) {
				if (!t.display) return 0;
				const i = le(t.font, e),
					s = re(t.padding);
				return (
					(c(t.text) ? t.text.length : 1) * i.lineHeight + s.height
				);
			}
			function Bs(t, e, i) {
				let s = o(t);
				return (
					((i && "right" !== e) || (!i && "right" === e)) &&
						(s = ((t) =>
							"left" === t
								? "right"
								: "right" === t
									? "left"
									: t)(s)),
					s
				);
			}
			class js extends Cs {
				constructor(t) {
					super(),
						(this.id = t.id),
						(this.type = t.type),
						(this.options = void 0),
						(this.ctx = t.ctx),
						(this.chart = t.chart),
						(this.top = void 0),
						(this.bottom = void 0),
						(this.left = void 0),
						(this.right = void 0),
						(this.width = void 0),
						(this.height = void 0),
						(this._margins = {
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
						}),
						(this.maxWidth = void 0),
						(this.maxHeight = void 0),
						(this.paddingTop = void 0),
						(this.paddingBottom = void 0),
						(this.paddingLeft = void 0),
						(this.paddingRight = void 0),
						(this.axis = void 0),
						(this.labelRotation = void 0),
						(this.min = void 0),
						(this.max = void 0),
						(this._range = void 0),
						(this.ticks = []),
						(this._gridLineItems = null),
						(this._labelItems = null),
						(this._labelSizes = null),
						(this._length = 0),
						(this._maxLength = 0),
						(this._longestTextCache = {}),
						(this._startPixel = void 0),
						(this._endPixel = void 0),
						(this._reversePixels = !1),
						(this._userMax = void 0),
						(this._userMin = void 0),
						(this._suggestedMax = void 0),
						(this._suggestedMin = void 0),
						(this._ticksLength = 0),
						(this._borderValue = 0),
						(this._cache = {}),
						(this._dataLimitsCached = !1),
						(this.$context = void 0);
				}
				init(t) {
					(this.options = t.setContext(this.getContext())),
						(this.axis = t.axis),
						(this._userMin = this.parse(t.min)),
						(this._userMax = this.parse(t.max)),
						(this._suggestedMin = this.parse(t.suggestedMin)),
						(this._suggestedMax = this.parse(t.suggestedMax));
				}
				parse(t, e) {
					return t;
				}
				getUserBounds() {
					let {
						_userMin: t,
						_userMax: e,
						_suggestedMin: i,
						_suggestedMax: s,
					} = this;
					return (
						(t = f(t, Number.POSITIVE_INFINITY)),
						(e = f(e, Number.NEGATIVE_INFINITY)),
						(i = f(i, Number.POSITIVE_INFINITY)),
						(s = f(s, Number.NEGATIVE_INFINITY)),
						{
							min: f(t, i),
							max: f(e, s),
							minDefined: u(t),
							maxDefined: u(e),
						}
					);
				}
				getMinMax(t) {
					let e,
						{
							min: i,
							max: s,
							minDefined: n,
							maxDefined: o,
						} = this.getUserBounds();
					if (n && o) return { min: i, max: s };
					const a = this.getMatchingVisibleMetas();
					for (let r = 0, l = a.length; r < l; ++r)
						(e = a[r].controller.getMinMax(this, t)),
							n || (i = Math.min(i, e.min)),
							o || (s = Math.max(s, e.max));
					return (
						(i = o && i > s ? s : i),
						(s = n && i > s ? i : s),
						{ min: f(i, f(s, i)), max: f(s, f(i, s)) }
					);
				}
				getPadding() {
					return {
						left: this.paddingLeft || 0,
						top: this.paddingTop || 0,
						right: this.paddingRight || 0,
						bottom: this.paddingBottom || 0,
					};
				}
				getTicks() {
					return this.ticks;
				}
				getLabels() {
					const t = this.chart.data;
					return (
						this.options.labels ||
						(this.isHorizontal() ? t.xLabels : t.yLabels) ||
						t.labels ||
						[]
					);
				}
				beforeLayout() {
					(this._cache = {}), (this._dataLimitsCached = !1);
				}
				beforeUpdate() {
					m(this.options.beforeUpdate, [this]);
				}
				update(t, e, i) {
					const { beginAtZero: s, grace: n, ticks: o } = this.options,
						a = o.sampleSize;
					this.beforeUpdate(),
						(this.maxWidth = t),
						(this.maxHeight = e),
						(this._margins = i =
							Object.assign(
								{ left: 0, right: 0, top: 0, bottom: 0 },
								i,
							)),
						(this.ticks = null),
						(this._labelSizes = null),
						(this._gridLineItems = null),
						(this._labelItems = null),
						this.beforeSetDimensions(),
						this.setDimensions(),
						this.afterSetDimensions(),
						(this._maxLength = this.isHorizontal()
							? this.width + i.left + i.right
							: this.height + i.top + i.bottom),
						this._dataLimitsCached ||
							(this.beforeDataLimits(),
							this.determineDataLimits(),
							this.afterDataLimits(),
							(this._range = (function (t, e, i) {
								const { min: s, max: n } = t,
									o = p(e, (n - s) / 2),
									a = (t, e) => (i && 0 === t ? 0 : t + e);
								return {
									min: a(s, -Math.abs(o)),
									max: a(n, o),
								};
							})(this, n, s)),
							(this._dataLimitsCached = !0)),
						this.beforeBuildTicks(),
						(this.ticks = this.buildTicks() || []),
						this.afterBuildTicks();
					const r = a < this.ticks.length;
					this._convertTicksToLabels(
						r ? Is(this.ticks, a) : this.ticks,
					),
						this.configure(),
						this.beforeCalculateLabelRotation(),
						this.calculateLabelRotation(),
						this.afterCalculateLabelRotation(),
						o.display &&
							(o.autoSkip || "auto" === o.source) &&
							((this.ticks = Es(this, this.ticks)),
							(this._labelSizes = null)),
						r && this._convertTicksToLabels(this.ticks),
						this.beforeFit(),
						this.fit(),
						this.afterFit(),
						this.afterUpdate();
				}
				configure() {
					let t,
						e,
						i = this.options.reverse;
					this.isHorizontal()
						? ((t = this.left), (e = this.right))
						: ((t = this.top), (e = this.bottom), (i = !i)),
						(this._startPixel = t),
						(this._endPixel = e),
						(this._reversePixels = i),
						(this._length = e - t),
						(this._alignToPixels = this.options.alignToPixels);
				}
				afterUpdate() {
					m(this.options.afterUpdate, [this]);
				}
				beforeSetDimensions() {
					m(this.options.beforeSetDimensions, [this]);
				}
				setDimensions() {
					this.isHorizontal()
						? ((this.width = this.maxWidth),
							(this.left = 0),
							(this.right = this.width))
						: ((this.height = this.maxHeight),
							(this.top = 0),
							(this.bottom = this.height)),
						(this.paddingLeft = 0),
						(this.paddingTop = 0),
						(this.paddingRight = 0),
						(this.paddingBottom = 0);
				}
				afterSetDimensions() {
					m(this.options.afterSetDimensions, [this]);
				}
				_callHooks(t) {
					this.chart.notifyPlugins(t, this.getContext()),
						m(this.options[t], [this]);
				}
				beforeDataLimits() {
					this._callHooks("beforeDataLimits");
				}
				determineDataLimits() {}
				afterDataLimits() {
					this._callHooks("afterDataLimits");
				}
				beforeBuildTicks() {
					this._callHooks("beforeBuildTicks");
				}
				buildTicks() {
					return [];
				}
				afterBuildTicks() {
					this._callHooks("afterBuildTicks");
				}
				beforeTickToLabelConversion() {
					m(this.options.beforeTickToLabelConversion, [this]);
				}
				generateTickLabels(t) {
					const e = this.options.ticks;
					let i, s, n;
					for (i = 0, s = t.length; i < s; i++)
						(n = t[i]),
							(n.label = m(e.callback, [n.value, i, t], this));
				}
				afterTickToLabelConversion() {
					m(this.options.afterTickToLabelConversion, [this]);
				}
				beforeCalculateLabelRotation() {
					m(this.options.beforeCalculateLabelRotation, [this]);
				}
				calculateLabelRotation() {
					const t = this.options,
						e = t.ticks,
						i = this.ticks.length,
						s = e.minRotation || 0,
						n = e.maxRotation;
					let o,
						a,
						r,
						l = s;
					if (
						!this._isVisible() ||
						!e.display ||
						s >= n ||
						i <= 1 ||
						!this.isHorizontal()
					)
						return void (this.labelRotation = s);
					const h = this._getLabelSizes(),
						c = h.widest.width,
						d = h.highest.height,
						u = G(this.chart.width - c, 0, this.maxWidth);
					(o = t.offset ? this.maxWidth / i : u / (i - 1)),
						c + 6 > o &&
							((o = u / (i - (t.offset ? 0.5 : 1))),
							(a =
								this.maxHeight -
								Fs(t.grid) -
								e.padding -
								Vs(t.title, this.chart.options.font)),
							(r = Math.sqrt(c * c + d * d)),
							(l = Y(
								Math.min(
									Math.asin(
										G((h.highest.height + 6) / o, -1, 1),
									),
									Math.asin(G(a / r, -1, 1)) -
										Math.asin(G(d / r, -1, 1)),
								),
							)),
							(l = Math.max(s, Math.min(n, l)))),
						(this.labelRotation = l);
				}
				afterCalculateLabelRotation() {
					m(this.options.afterCalculateLabelRotation, [this]);
				}
				beforeFit() {
					m(this.options.beforeFit, [this]);
				}
				fit() {
					const t = { width: 0, height: 0 },
						{
							chart: e,
							options: { ticks: i, title: s, grid: n },
						} = this,
						o = this._isVisible(),
						a = this.isHorizontal();
					if (o) {
						const o = Vs(s, e.options.font);
						if (
							(a
								? ((t.width = this.maxWidth),
									(t.height = Fs(n) + o))
								: ((t.height = this.maxHeight),
									(t.width = Fs(n) + o)),
							i.display && this.ticks.length)
						) {
							const {
									first: e,
									last: s,
									widest: n,
									highest: o,
								} = this._getLabelSizes(),
								r = 2 * i.padding,
								l = $(this.labelRotation),
								h = Math.cos(l),
								c = Math.sin(l);
							if (a) {
								const e = i.mirror
									? 0
									: c * n.width + h * o.height;
								t.height = Math.min(
									this.maxHeight,
									t.height + e + r,
								);
							} else {
								const e = i.mirror
									? 0
									: h * n.width + c * o.height;
								t.width = Math.min(
									this.maxWidth,
									t.width + e + r,
								);
							}
							this._calculatePadding(e, s, c, h);
						}
					}
					this._handleMargins(),
						a
							? ((this.width = this._length =
									e.width -
									this._margins.left -
									this._margins.right),
								(this.height = t.height))
							: ((this.width = t.width),
								(this.height = this._length =
									e.height -
									this._margins.top -
									this._margins.bottom));
				}
				_calculatePadding(t, e, i, s) {
					const {
							ticks: { align: n, padding: o },
							position: a,
						} = this.options,
						r = 0 !== this.labelRotation,
						l = "top" !== a && "x" === this.axis;
					if (this.isHorizontal()) {
						const a = this.getPixelForTick(0) - this.left,
							h =
								this.right -
								this.getPixelForTick(this.ticks.length - 1);
						let c = 0,
							d = 0;
						r
							? l
								? ((c = s * t.width), (d = i * e.height))
								: ((c = i * t.height), (d = s * e.width))
							: "start" === n
								? (d = e.width)
								: "end" === n
									? (c = t.width)
									: ((c = t.width / 2), (d = e.width / 2)),
							(this.paddingLeft = Math.max(
								((c - a + o) * this.width) / (this.width - a),
								0,
							)),
							(this.paddingRight = Math.max(
								((d - h + o) * this.width) / (this.width - h),
								0,
							));
					} else {
						let i = e.height / 2,
							s = t.height / 2;
						"start" === n
							? ((i = 0), (s = t.height))
							: "end" === n && ((i = e.height), (s = 0)),
							(this.paddingTop = i + o),
							(this.paddingBottom = s + o);
					}
				}
				_handleMargins() {
					this._margins &&
						((this._margins.left = Math.max(
							this.paddingLeft,
							this._margins.left,
						)),
						(this._margins.top = Math.max(
							this.paddingTop,
							this._margins.top,
						)),
						(this._margins.right = Math.max(
							this.paddingRight,
							this._margins.right,
						)),
						(this._margins.bottom = Math.max(
							this.paddingBottom,
							this._margins.bottom,
						)));
				}
				afterFit() {
					m(this.options.afterFit, [this]);
				}
				isHorizontal() {
					const { axis: t, position: e } = this.options;
					return "top" === e || "bottom" === e || "x" === t;
				}
				isFullSize() {
					return this.options.fullSize;
				}
				_convertTicksToLabels(t) {
					let e, i;
					for (
						this.beforeTickToLabelConversion(),
							this.generateTickLabels(t),
							e = 0,
							i = t.length;
						e < i;
						e++
					)
						h(t[e].label) && (t.splice(e, 1), i--, e--);
					this.afterTickToLabelConversion();
				}
				_getLabelSizes() {
					let t = this._labelSizes;
					if (!t) {
						const e = this.options.ticks.sampleSize;
						let i = this.ticks;
						e < i.length && (i = Is(i, e)),
							(this._labelSizes = t =
								this._computeLabelSizes(i, i.length));
					}
					return t;
				}
				_computeLabelSizes(t, e) {
					const { ctx: i, _longestTextCache: s } = this,
						n = [],
						o = [];
					let a,
						r,
						l,
						d,
						u,
						f,
						g,
						p,
						m,
						x,
						_,
						y = 0,
						v = 0;
					for (a = 0; a < e; ++a) {
						if (
							((d = t[a].label),
							(u = this._resolveTickFontOptions(a)),
							(i.font = f = u.string),
							(g = s[f] = s[f] || { data: {}, gc: [] }),
							(p = u.lineHeight),
							(m = x = 0),
							h(d) || c(d))
						) {
							if (c(d))
								for (r = 0, l = d.length; r < l; ++r)
									(_ = d[r]),
										h(_) ||
											c(_) ||
											((m = Nt(i, g.data, g.gc, m, _)),
											(x += p));
						} else (m = Nt(i, g.data, g.gc, m, d)), (x = p);
						n.push(m),
							o.push(x),
							(y = Math.max(m, y)),
							(v = Math.max(x, v));
					}
					!(function (t, e) {
						b(t, (t) => {
							const i = t.gc,
								s = i.length / 2;
							let n;
							if (s > e) {
								for (n = 0; n < s; ++n) delete t.data[i[n]];
								i.splice(0, s);
							}
						});
					})(s, e);
					const w = n.indexOf(y),
						M = o.indexOf(v),
						k = (t) => ({ width: n[t] || 0, height: o[t] || 0 });
					return {
						first: k(0),
						last: k(e - 1),
						widest: k(w),
						highest: k(M),
						widths: n,
						heights: o,
					};
				}
				getLabelForValue(t) {
					return t;
				}
				getPixelForValue(t, e) {
					return NaN;
				}
				getValueForPixel(t) {}
				getPixelForTick(t) {
					const e = this.ticks;
					return t < 0 || t > e.length - 1
						? null
						: this.getPixelForValue(e[t].value);
				}
				getPixelForDecimal(t) {
					this._reversePixels && (t = 1 - t);
					const e = this._startPixel + t * this._length;
					return G(
						this._alignToPixels ? $t(this.chart, e, 0) : e,
						-32768,
						32767,
					);
				}
				getDecimalForPixel(t) {
					const e = (t - this._startPixel) / this._length;
					return this._reversePixels ? 1 - e : e;
				}
				getBasePixel() {
					return this.getPixelForValue(this.getBaseValue());
				}
				getBaseValue() {
					const { min: t, max: e } = this;
					return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
				}
				getContext(t) {
					const e = this.ticks || [];
					if (t >= 0 && t < e.length) {
						const i = e[t];
						return (
							i.$context ||
							(i.$context = (function (t, e, i) {
								return ce(t, {
									tick: i,
									index: e,
									type: "tick",
								});
							})(this.getContext(), t, i))
						);
					}
					return (
						this.$context ||
						(this.$context = ce(this.chart.getContext(), {
							scale: this,
							type: "scale",
						}))
					);
				}
				_tickSize() {
					const t = this.options.ticks,
						e = $(this.labelRotation),
						i = Math.abs(Math.cos(e)),
						s = Math.abs(Math.sin(e)),
						n = this._getLabelSizes(),
						o = t.autoSkipPadding || 0,
						a = n ? n.widest.width + o : 0,
						r = n ? n.highest.height + o : 0;
					return this.isHorizontal()
						? r * i > a * s
							? a / i
							: r / s
						: r * s < a * i
							? r / i
							: a / s;
				}
				_isVisible() {
					const t = this.options.display;
					return "auto" !== t
						? !!t
						: this.getMatchingVisibleMetas().length > 0;
				}
				_computeGridLineItems(t) {
					const e = this.axis,
						i = this.chart,
						s = this.options,
						{ grid: n, position: o } = s,
						a = n.offset,
						r = this.isHorizontal(),
						l = this.ticks.length + (a ? 1 : 0),
						h = Fs(n),
						c = [],
						u = n.setContext(this.getContext()),
						f = u.drawBorder ? u.borderWidth : 0,
						p = f / 2,
						m = function (t) {
							return $t(i, t, f);
						};
					let b, x, _, y, v, w, M, k, S, P, O, D;
					if ("top" === o)
						(b = m(this.bottom)),
							(w = this.bottom - h),
							(k = b - p),
							(P = m(t.top) + p),
							(D = t.bottom);
					else if ("bottom" === o)
						(b = m(this.top)),
							(P = t.top),
							(D = m(t.bottom) - p),
							(w = b + p),
							(k = this.top + h);
					else if ("left" === o)
						(b = m(this.right)),
							(v = this.right - h),
							(M = b - p),
							(S = m(t.left) + p),
							(O = t.right);
					else if ("right" === o)
						(b = m(this.left)),
							(S = t.left),
							(O = m(t.right) - p),
							(v = b + p),
							(M = this.left + h);
					else if ("x" === e) {
						if ("center" === o) b = m((t.top + t.bottom) / 2 + 0.5);
						else if (d(o)) {
							const t = Object.keys(o)[0],
								e = o[t];
							b = m(this.chart.scales[t].getPixelForValue(e));
						}
						(P = t.top), (D = t.bottom), (w = b + p), (k = w + h);
					} else if ("y" === e) {
						if ("center" === o) b = m((t.left + t.right) / 2);
						else if (d(o)) {
							const t = Object.keys(o)[0],
								e = o[t];
							b = m(this.chart.scales[t].getPixelForValue(e));
						}
						(v = b - p), (M = v - h), (S = t.left), (O = t.right);
					}
					const C = g(s.ticks.maxTicksLimit, l),
						A = Math.max(1, Math.ceil(l / C));
					for (x = 0; x < l; x += A) {
						const t = n.setContext(this.getContext(x)),
							e = t.lineWidth,
							s = t.color,
							o = n.borderDash || [],
							l = t.borderDashOffset,
							h = t.tickWidth,
							d = t.tickColor,
							u = t.tickBorderDash || [],
							f = t.tickBorderDashOffset;
						(_ = zs(this, x, a)),
							void 0 !== _ &&
								((y = $t(i, _, e)),
								r ? (v = M = S = O = y) : (w = k = P = D = y),
								c.push({
									tx1: v,
									ty1: w,
									tx2: M,
									ty2: k,
									x1: S,
									y1: P,
									x2: O,
									y2: D,
									width: e,
									color: s,
									borderDash: o,
									borderDashOffset: l,
									tickWidth: h,
									tickColor: d,
									tickBorderDash: u,
									tickBorderDashOffset: f,
								}));
					}
					return (this._ticksLength = l), (this._borderValue = b), c;
				}
				_computeLabelItems(t) {
					const e = this.axis,
						i = this.options,
						{ position: s, ticks: n } = i,
						o = this.isHorizontal(),
						a = this.ticks,
						{ align: r, crossAlign: l, padding: h, mirror: u } = n,
						f = Fs(i.grid),
						g = f + h,
						p = u ? -h : g,
						m = -$(this.labelRotation),
						b = [];
					let x,
						_,
						y,
						v,
						w,
						M,
						k,
						S,
						P,
						O,
						D,
						C,
						A = "middle";
					if ("top" === s)
						(M = this.bottom - p),
							(k = this._getXAxisLabelAlignment());
					else if ("bottom" === s)
						(M = this.top + p),
							(k = this._getXAxisLabelAlignment());
					else if ("left" === s) {
						const t = this._getYAxisLabelAlignment(f);
						(k = t.textAlign), (w = t.x);
					} else if ("right" === s) {
						const t = this._getYAxisLabelAlignment(f);
						(k = t.textAlign), (w = t.x);
					} else if ("x" === e) {
						if ("center" === s) M = (t.top + t.bottom) / 2 + g;
						else if (d(s)) {
							const t = Object.keys(s)[0],
								e = s[t];
							M = this.chart.scales[t].getPixelForValue(e) + g;
						}
						k = this._getXAxisLabelAlignment();
					} else if ("y" === e) {
						if ("center" === s) w = (t.left + t.right) / 2 - g;
						else if (d(s)) {
							const t = Object.keys(s)[0],
								e = s[t];
							w = this.chart.scales[t].getPixelForValue(e);
						}
						k = this._getYAxisLabelAlignment(f).textAlign;
					}
					"y" === e &&
						("start" === r
							? (A = "top")
							: "end" === r && (A = "bottom"));
					const T = this._getLabelSizes();
					for (x = 0, _ = a.length; x < _; ++x) {
						(y = a[x]), (v = y.label);
						const t = n.setContext(this.getContext(x));
						(S = this.getPixelForTick(x) + n.labelOffset),
							(P = this._resolveTickFontOptions(x)),
							(O = P.lineHeight),
							(D = c(v) ? v.length : 1);
						const e = D / 2,
							i = t.color,
							r = t.textStrokeColor,
							h = t.textStrokeWidth;
						let d;
						if (
							(o
								? ((w = S),
									(C =
										"top" === s
											? "near" === l || 0 !== m
												? -D * O + O / 2
												: "center" === l
													? -T.highest.height / 2 -
														e * O +
														O
													: -T.highest.height + O / 2
											: "near" === l || 0 !== m
												? O / 2
												: "center" === l
													? T.highest.height / 2 -
														e * O
													: T.highest.height - D * O),
									u && (C *= -1))
								: ((M = S), (C = ((1 - D) * O) / 2)),
							t.showLabelBackdrop)
						) {
							const e = re(t.backdropPadding),
								i = T.heights[x],
								s = T.widths[x];
							let n = M + C - e.top,
								o = w - e.left;
							switch (A) {
								case "middle":
									n -= i / 2;
									break;
								case "bottom":
									n -= i;
							}
							switch (k) {
								case "center":
									o -= s / 2;
									break;
								case "right":
									o -= s;
							}
							d = {
								left: o,
								top: n,
								width: s + e.width,
								height: i + e.height,
								color: t.backdropColor,
							};
						}
						b.push({
							rotation: m,
							label: v,
							font: P,
							color: i,
							strokeColor: r,
							strokeWidth: h,
							textOffset: C,
							textAlign: k,
							textBaseline: A,
							translation: [w, M],
							backdrop: d,
						});
					}
					return b;
				}
				_getXAxisLabelAlignment() {
					const { position: t, ticks: e } = this.options;
					if (-$(this.labelRotation))
						return "top" === t ? "left" : "right";
					let i = "center";
					return (
						"start" === e.align
							? (i = "left")
							: "end" === e.align && (i = "right"),
						i
					);
				}
				_getYAxisLabelAlignment(t) {
					const {
							position: e,
							ticks: { crossAlign: i, mirror: s, padding: n },
						} = this.options,
						o = t + n,
						a = this._getLabelSizes().widest.width;
					let r, l;
					return (
						"left" === e
							? s
								? ((l = this.right + n),
									"near" === i
										? (r = "left")
										: "center" === i
											? ((r = "center"), (l += a / 2))
											: ((r = "right"), (l += a)))
								: ((l = this.right - o),
									"near" === i
										? (r = "right")
										: "center" === i
											? ((r = "center"), (l -= a / 2))
											: ((r = "left"), (l = this.left)))
							: "right" === e
								? s
									? ((l = this.left + n),
										"near" === i
											? (r = "right")
											: "center" === i
												? ((r = "center"), (l -= a / 2))
												: ((r = "left"), (l -= a)))
									: ((l = this.left + o),
										"near" === i
											? (r = "left")
											: "center" === i
												? ((r = "center"), (l += a / 2))
												: ((r = "right"),
													(l = this.right)))
								: (r = "right"),
						{ textAlign: r, x: l }
					);
				}
				_computeLabelArea() {
					if (this.options.ticks.mirror) return;
					const t = this.chart,
						e = this.options.position;
					return "left" === e || "right" === e
						? {
								top: 0,
								left: this.left,
								bottom: t.height,
								right: this.right,
							}
						: "top" === e || "bottom" === e
							? {
									top: this.top,
									left: 0,
									bottom: this.bottom,
									right: t.width,
								}
							: void 0;
				}
				drawBackground() {
					const {
						ctx: t,
						options: { backgroundColor: e },
						left: i,
						top: s,
						width: n,
						height: o,
					} = this;
					e &&
						(t.save(),
						(t.fillStyle = e),
						t.fillRect(i, s, n, o),
						t.restore());
				}
				getLineWidthForValue(t) {
					const e = this.options.grid;
					if (!this._isVisible() || !e.display) return 0;
					const i = this.ticks.findIndex((e) => e.value === t);
					if (i >= 0) {
						return e.setContext(this.getContext(i)).lineWidth;
					}
					return 0;
				}
				drawGrid(t) {
					const e = this.options.grid,
						i = this.ctx,
						s =
							this._gridLineItems ||
							(this._gridLineItems =
								this._computeGridLineItems(t));
					let n, o;
					const a = (t, e, s) => {
						s.width &&
							s.color &&
							(i.save(),
							(i.lineWidth = s.width),
							(i.strokeStyle = s.color),
							i.setLineDash(s.borderDash || []),
							(i.lineDashOffset = s.borderDashOffset),
							i.beginPath(),
							i.moveTo(t.x, t.y),
							i.lineTo(e.x, e.y),
							i.stroke(),
							i.restore());
					};
					if (e.display)
						for (n = 0, o = s.length; n < o; ++n) {
							const t = s[n];
							e.drawOnChartArea &&
								a(
									{ x: t.x1, y: t.y1 },
									{ x: t.x2, y: t.y2 },
									t,
								),
								e.drawTicks &&
									a(
										{ x: t.tx1, y: t.ty1 },
										{ x: t.tx2, y: t.ty2 },
										{
											color: t.tickColor,
											width: t.tickWidth,
											borderDash: t.tickBorderDash,
											borderDashOffset:
												t.tickBorderDashOffset,
										},
									);
						}
				}
				drawBorder() {
					const {
							chart: t,
							ctx: e,
							options: { grid: i },
						} = this,
						s = i.setContext(this.getContext()),
						n = i.drawBorder ? s.borderWidth : 0;
					if (!n) return;
					const o = i.setContext(this.getContext(0)).lineWidth,
						a = this._borderValue;
					let r, l, h, c;
					this.isHorizontal()
						? ((r = $t(t, this.left, n) - n / 2),
							(l = $t(t, this.right, o) + o / 2),
							(h = c = a))
						: ((h = $t(t, this.top, n) - n / 2),
							(c = $t(t, this.bottom, o) + o / 2),
							(r = l = a)),
						e.save(),
						(e.lineWidth = s.borderWidth),
						(e.strokeStyle = s.borderColor),
						e.beginPath(),
						e.moveTo(r, h),
						e.lineTo(l, c),
						e.stroke(),
						e.restore();
				}
				drawLabels(t) {
					if (!this.options.ticks.display) return;
					const e = this.ctx,
						i = this._computeLabelArea();
					i && qt(e, i);
					const s =
						this._labelItems ||
						(this._labelItems = this._computeLabelItems(t));
					let n, o;
					for (n = 0, o = s.length; n < o; ++n) {
						const t = s[n],
							i = t.font,
							o = t.label;
						t.backdrop &&
							((e.fillStyle = t.backdrop.color),
							e.fillRect(
								t.backdrop.left,
								t.backdrop.top,
								t.backdrop.width,
								t.backdrop.height,
							)),
							Qt(e, o, 0, t.textOffset, i, t);
					}
					i && Kt(e);
				}
				drawTitle() {
					const {
						ctx: t,
						options: { position: e, title: i, reverse: s },
					} = this;
					if (!i.display) return;
					const n = le(i.font),
						o = re(i.padding),
						r = i.align;
					let l = n.lineHeight / 2;
					"bottom" === e || "center" === e || d(e)
						? ((l += o.bottom),
							c(i.text) &&
								(l += n.lineHeight * (i.text.length - 1)))
						: (l += o.top);
					const {
						titleX: h,
						titleY: u,
						maxWidth: f,
						rotation: g,
					} = (function (t, e, i, s) {
						const {
								top: n,
								left: o,
								bottom: r,
								right: l,
								chart: h,
							} = t,
							{ chartArea: c, scales: u } = h;
						let f,
							g,
							p,
							m = 0;
						const b = r - n,
							x = l - o;
						if (t.isHorizontal()) {
							if (((g = a(s, o, l)), d(i))) {
								const t = Object.keys(i)[0],
									s = i[t];
								p = u[t].getPixelForValue(s) + b - e;
							} else
								p =
									"center" === i
										? (c.bottom + c.top) / 2 + b - e
										: Rs(t, i, e);
							f = l - o;
						} else {
							if (d(i)) {
								const t = Object.keys(i)[0],
									s = i[t];
								g = u[t].getPixelForValue(s) - x + e;
							} else
								g =
									"center" === i
										? (c.left + c.right) / 2 - x + e
										: Rs(t, i, e);
							(p = a(s, r, n)), (m = "left" === i ? -I : I);
						}
						return {
							titleX: g,
							titleY: p,
							maxWidth: f,
							rotation: m,
						};
					})(this, l, e, r);
					Qt(t, i.text, 0, 0, n, {
						color: i.color,
						maxWidth: f,
						rotation: g,
						textAlign: Bs(r, e, s),
						textBaseline: "middle",
						translation: [h, u],
					});
				}
				draw(t) {
					this._isVisible() &&
						(this.drawBackground(),
						this.drawGrid(t),
						this.drawBorder(),
						this.drawTitle(),
						this.drawLabels(t));
				}
				_layers() {
					const t = this.options,
						e = (t.ticks && t.ticks.z) || 0,
						i = g(t.grid && t.grid.z, -1);
					return this._isVisible() && this.draw === js.prototype.draw
						? [
								{
									z: i,
									draw: (t) => {
										this.drawBackground(),
											this.drawGrid(t),
											this.drawTitle();
									},
								},
								{
									z: i + 1,
									draw: () => {
										this.drawBorder();
									},
								},
								{
									z: e,
									draw: (t) => {
										this.drawLabels(t);
									},
								},
							]
						: [
								{
									z: e,
									draw: (t) => {
										this.draw(t);
									},
								},
							];
				}
				getMatchingVisibleMetas(t) {
					const e = this.chart.getSortedVisibleDatasetMetas(),
						i = this.axis + "AxisID",
						s = [];
					let n, o;
					for (n = 0, o = e.length; n < o; ++n) {
						const o = e[n];
						o[i] !== this.id || (t && o.type !== t) || s.push(o);
					}
					return s;
				}
				_resolveTickFontOptions(t) {
					return le(
						this.options.ticks.setContext(this.getContext(t)).font,
					);
				}
				_maxDigits() {
					const t = this._resolveTickFontOptions(0).lineHeight;
					return (this.isHorizontal() ? this.width : this.height) / t;
				}
			}
			class Ws {
				constructor(t, e, i) {
					(this.type = t),
						(this.scope = e),
						(this.override = i),
						(this.items = Object.create(null));
				}
				isForType(t) {
					return Object.prototype.isPrototypeOf.call(
						this.type.prototype,
						t.prototype,
					);
				}
				register(t) {
					const e = Object.getPrototypeOf(t);
					let i;
					(function (t) {
						return "id" in t && "defaults" in t;
					})(e) && (i = this.register(e));
					const s = this.items,
						n = t.id,
						o = this.scope + "." + n;
					if (!n) throw new Error("class does not have id: " + t);
					return (
						n in s ||
							((s[n] = t),
							(function (t, e, i) {
								const s = w(Object.create(null), [
									i ? Wt.get(i) : {},
									Wt.get(e),
									t.defaults,
								]);
								Wt.set(e, s),
									t.defaultRoutes &&
										(function (t, e) {
											Object.keys(e).forEach((i) => {
												const s = i.split("."),
													n = s.pop(),
													o = [t].concat(s).join("."),
													a = e[i].split("."),
													r = a.pop(),
													l = a.join(".");
												Wt.route(o, n, l, r);
											});
										})(e, t.defaultRoutes);
								t.descriptors && Wt.describe(e, t.descriptors);
							})(t, o, i),
							this.override && Wt.override(t.id, t.overrides)),
						o
					);
				}
				get(t) {
					return this.items[t];
				}
				unregister(t) {
					const e = this.items,
						i = t.id,
						s = this.scope;
					i in e && delete e[i],
						s &&
							i in Wt[s] &&
							(delete Wt[s][i], this.override && delete Ft[i]);
				}
			}
			var Ns = new (class {
				constructor() {
					(this.controllers = new Ws(Oi, "datasets", !0)),
						(this.elements = new Ws(Cs, "elements")),
						(this.plugins = new Ws(Object, "plugins")),
						(this.scales = new Ws(js, "scales")),
						(this._typedRegistries = [
							this.controllers,
							this.scales,
							this.elements,
						]);
				}
				add(...t) {
					this._each("register", t);
				}
				remove(...t) {
					this._each("unregister", t);
				}
				addControllers(...t) {
					this._each("register", t, this.controllers);
				}
				addElements(...t) {
					this._each("register", t, this.elements);
				}
				addPlugins(...t) {
					this._each("register", t, this.plugins);
				}
				addScales(...t) {
					this._each("register", t, this.scales);
				}
				getController(t) {
					return this._get(t, this.controllers, "controller");
				}
				getElement(t) {
					return this._get(t, this.elements, "element");
				}
				getPlugin(t) {
					return this._get(t, this.plugins, "plugin");
				}
				getScale(t) {
					return this._get(t, this.scales, "scale");
				}
				removeControllers(...t) {
					this._each("unregister", t, this.controllers);
				}
				removeElements(...t) {
					this._each("unregister", t, this.elements);
				}
				removePlugins(...t) {
					this._each("unregister", t, this.plugins);
				}
				removeScales(...t) {
					this._each("unregister", t, this.scales);
				}
				_each(t, e, i) {
					[...e].forEach((e) => {
						const s = i || this._getRegistryForType(e);
						i || s.isForType(e) || (s === this.plugins && e.id)
							? this._exec(t, s, e)
							: b(e, (e) => {
									const s = i || this._getRegistryForType(e);
									this._exec(t, s, e);
								});
					});
				}
				_exec(t, e, i) {
					const s = O(t);
					m(i["before" + s], [], i),
						e[t](i),
						m(i["after" + s], [], i);
				}
				_getRegistryForType(t) {
					for (let e = 0; e < this._typedRegistries.length; e++) {
						const i = this._typedRegistries[e];
						if (i.isForType(t)) return i;
					}
					return this.plugins;
				}
				_get(t, e, i) {
					const s = e.get(t);
					if (void 0 === s)
						throw new Error(
							'"' + t + '" is not a registered ' + i + ".",
						);
					return s;
				}
			})();
			class Hs {
				constructor() {
					this._init = [];
				}
				notify(t, e, i, s) {
					"beforeInit" === e &&
						((this._init = this._createDescriptors(t, !0)),
						this._notify(this._init, t, "install"));
					const n = s
							? this._descriptors(t).filter(s)
							: this._descriptors(t),
						o = this._notify(n, t, e, i);
					return (
						"destroy" === e &&
							(this._notify(n, t, "stop"),
							this._notify(this._init, t, "uninstall")),
						o
					);
				}
				_notify(t, e, i, s) {
					s = s || {};
					for (const n of t) {
						const t = n.plugin;
						if (
							!1 === m(t[i], [e, s, n.options], t) &&
							s.cancelable
						)
							return !1;
					}
					return !0;
				}
				invalidate() {
					h(this._cache) ||
						((this._oldCache = this._cache),
						(this._cache = void 0));
				}
				_descriptors(t) {
					if (this._cache) return this._cache;
					const e = (this._cache = this._createDescriptors(t));
					return this._notifyStateChanges(t), e;
				}
				_createDescriptors(t, e) {
					const i = t && t.config,
						s = g(i.options && i.options.plugins, {}),
						n = (function (t) {
							const e = [],
								i = Object.keys(Ns.plugins.items);
							for (let n = 0; n < i.length; n++)
								e.push(Ns.getPlugin(i[n]));
							const s = t.plugins || [];
							for (let n = 0; n < s.length; n++) {
								const t = s[n];
								-1 === e.indexOf(t) && e.push(t);
							}
							return e;
						})(i);
					return !1 !== s || e
						? (function (t, e, i, s) {
								const n = [],
									o = t.getContext();
								for (let a = 0; a < e.length; a++) {
									const r = e[a],
										l = $s(i[r.id], s);
									null !== l &&
										n.push({
											plugin: r,
											options: Ys(t.config, r, l, o),
										});
								}
								return n;
							})(t, n, s, e)
						: [];
				}
				_notifyStateChanges(t) {
					const e = this._oldCache || [],
						i = this._cache,
						s = (t, e) =>
							t.filter(
								(t) =>
									!e.some((e) => t.plugin.id === e.plugin.id),
							);
					this._notify(s(e, i), t, "stop"),
						this._notify(s(i, e), t, "start");
				}
			}
			function $s(t, e) {
				return e || !1 !== t ? (!0 === t ? {} : t) : null;
			}
			function Ys(t, e, i, s) {
				const n = t.pluginScopeKeys(e),
					o = t.getOptionScopes(i, n);
				return t.createResolver(o, s, [""], {
					scriptable: !1,
					indexable: !1,
					allKeys: !0,
				});
			}
			function Us(t, e) {
				const i = Wt.datasets[t] || {};
				return (
					((e.datasets || {})[t] || {}).indexAxis ||
					e.indexAxis ||
					i.indexAxis ||
					"x"
				);
			}
			function Xs(t, e) {
				return "x" === t || "y" === t
					? t
					: e.axis ||
							("top" === (i = e.position) || "bottom" === i
								? "x"
								: "left" === i || "right" === i
									? "y"
									: void 0) ||
							t.charAt(0).toLowerCase();
				var i;
			}
			function qs(t) {
				const e = t.options || (t.options = {});
				(e.plugins = g(e.plugins, {})),
					(e.scales = (function (t, e) {
						const i = Ft[t.type] || { scales: {} },
							s = e.scales || {},
							n = Us(t.type, e),
							o = Object.create(null),
							a = Object.create(null);
						return (
							Object.keys(s).forEach((t) => {
								const e = s[t];
								if (!d(e))
									return console.error(
										`Invalid scale configuration for scale: ${t}`,
									);
								if (e._proxy)
									return console.warn(
										`Ignoring resolver passed as options for scale: ${t}`,
									);
								const r = Xs(t, e),
									l = (function (t, e) {
										return t === e ? "_index_" : "_value_";
									})(r, n),
									h = i.scales || {};
								(o[r] = o[r] || t),
									(a[t] = M(Object.create(null), [
										{ axis: r },
										e,
										h[r],
										h[l],
									]));
							}),
							t.data.datasets.forEach((i) => {
								const n = i.type || t.type,
									r = i.indexAxis || Us(n, e),
									l = (Ft[n] || {}).scales || {};
								Object.keys(l).forEach((t) => {
									const e = (function (t, e) {
											let i = t;
											return (
												"_index_" === t
													? (i = e)
													: "_value_" === t &&
														(i =
															"x" === e
																? "y"
																: "x"),
												i
											);
										})(t, r),
										n = i[e + "AxisID"] || o[e] || e;
									(a[n] = a[n] || Object.create(null)),
										M(a[n], [{ axis: e }, s[n], l[t]]);
								});
							}),
							Object.keys(a).forEach((t) => {
								const e = a[t];
								M(e, [Wt.scales[e.type], Wt.scale]);
							}),
							a
						);
					})(t, e));
			}
			function Ks(t) {
				return (
					((t = t || {}).datasets = t.datasets || []),
					(t.labels = t.labels || []),
					t
				);
			}
			const Zs = new Map(),
				Gs = new Set();
			function Qs(t, e) {
				let i = Zs.get(t);
				return i || ((i = e()), Zs.set(t, i), Gs.add(i)), i;
			}
			const Js = (t, e, i) => {
				const s = P(e, i);
				void 0 !== s && t.add(s);
			};
			class tn {
				constructor(t) {
					(this._config = (function (t) {
						return ((t = t || {}).data = Ks(t.data)), qs(t), t;
					})(t)),
						(this._scopeCache = new Map()),
						(this._resolverCache = new Map());
				}
				get platform() {
					return this._config.platform;
				}
				get type() {
					return this._config.type;
				}
				set type(t) {
					this._config.type = t;
				}
				get data() {
					return this._config.data;
				}
				set data(t) {
					this._config.data = Ks(t);
				}
				get options() {
					return this._config.options;
				}
				set options(t) {
					this._config.options = t;
				}
				get plugins() {
					return this._config.plugins;
				}
				update() {
					const t = this._config;
					this.clearCache(), qs(t);
				}
				clearCache() {
					this._scopeCache.clear(), this._resolverCache.clear();
				}
				datasetScopeKeys(t) {
					return Qs(t, () => [[`datasets.${t}`, ""]]);
				}
				datasetAnimationScopeKeys(t, e) {
					return Qs(`${t}.transition.${e}`, () => [
						[`datasets.${t}.transitions.${e}`, `transitions.${e}`],
						[`datasets.${t}`, ""],
					]);
				}
				datasetElementScopeKeys(t, e) {
					return Qs(`${t}-${e}`, () => [
						[
							`datasets.${t}.elements.${e}`,
							`datasets.${t}`,
							`elements.${e}`,
							"",
						],
					]);
				}
				pluginScopeKeys(t) {
					const e = t.id;
					return Qs(`${this.type}-plugin-${e}`, () => [
						[`plugins.${e}`, ...(t.additionalOptionScopes || [])],
					]);
				}
				_cachedScopes(t, e) {
					const i = this._scopeCache;
					let s = i.get(t);
					return (s && !e) || ((s = new Map()), i.set(t, s)), s;
				}
				getOptionScopes(t, e, i) {
					const { options: s, type: n } = this,
						o = this._cachedScopes(t, i),
						a = o.get(e);
					if (a) return a;
					const r = new Set();
					e.forEach((e) => {
						t && (r.add(t), e.forEach((e) => Js(r, t, e))),
							e.forEach((t) => Js(r, s, t)),
							e.forEach((t) => Js(r, Ft[n] || {}, t)),
							e.forEach((t) => Js(r, Wt, t)),
							e.forEach((t) => Js(r, Vt, t));
					});
					const l = Array.from(r);
					return (
						0 === l.length && l.push(Object.create(null)),
						Gs.has(e) && o.set(e, l),
						l
					);
				}
				chartOptionScopes() {
					const { options: t, type: e } = this;
					return [
						t,
						Ft[e] || {},
						Wt.datasets[e] || {},
						{ type: e },
						Wt,
						Vt,
					];
				}
				resolveNamedOptions(t, e, i, s = [""]) {
					const n = { $shared: !0 },
						{ resolver: o, subPrefixes: a } = en(
							this._resolverCache,
							t,
							s,
						);
					let r = o;
					if (
						(function (t, e) {
							const { isScriptable: i, isIndexable: s } = _e(t);
							for (const n of e) {
								const e = i(n),
									o = s(n),
									a = (o || e) && t[n];
								if ((e && (C(a) || sn(a))) || (o && c(a)))
									return !0;
							}
							return !1;
						})(o, e)
					) {
						n.$shared = !1;
						r = xe(
							o,
							(i = C(i) ? i() : i),
							this.createResolver(t, i, a),
						);
					}
					for (const l of e) n[l] = r[l];
					return n;
				}
				createResolver(t, e, i = [""], s) {
					const { resolver: n } = en(this._resolverCache, t, i);
					return d(e) ? xe(n, e, void 0, s) : n;
				}
			}
			function en(t, e, i) {
				let s = t.get(e);
				s || ((s = new Map()), t.set(e, s));
				const n = i.join();
				let o = s.get(n);
				if (!o) {
					(o = {
						resolver: be(e, i),
						subPrefixes: i.filter(
							(t) => !t.toLowerCase().includes("hover"),
						),
					}),
						s.set(n, o);
				}
				return o;
			}
			const sn = (t) =>
				d(t) &&
				Object.getOwnPropertyNames(t).reduce(
					(e, i) => e || C(t[i]),
					!1,
				);
			const nn = ["top", "bottom", "left", "right", "chartArea"];
			function on(t, e) {
				return (
					"top" === t ||
					"bottom" === t ||
					(-1 === nn.indexOf(t) && "x" === e)
				);
			}
			function an(t, e) {
				return function (i, s) {
					return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
				};
			}
			function rn(t) {
				const e = t.chart,
					i = e.options.animation;
				e.notifyPlugins("afterRender"), m(i && i.onComplete, [t], e);
			}
			function ln(t) {
				const e = t.chart,
					i = e.options.animation;
				m(i && i.onProgress, [t], e);
			}
			function hn(t) {
				return (
					Fe() && "string" == typeof t
						? (t = document.getElementById(t))
						: t && t.length && (t = t[0]),
					t && t.canvas && (t = t.canvas),
					t
				);
			}
			const cn = {},
				dn = (t) => {
					const e = hn(t);
					return Object.values(cn)
						.filter((t) => t.canvas === e)
						.pop();
				};
			class un {
				constructor(t, e) {
					const i = (this.config = new tn(e)),
						s = hn(t),
						n = dn(s);
					if (n)
						throw new Error(
							"Canvas is already in use. Chart with ID '" +
								n.id +
								"' must be destroyed before the canvas can be reused.",
						);
					const o = i.createResolver(
						i.chartOptionScopes(),
						this.getContext(),
					);
					(this.platform = new (i.platform ||
						(function (t) {
							return !Fe() ||
								("undefined" != typeof OffscreenCanvas &&
									t instanceof OffscreenCanvas)
								? ps
								: Ds;
						})(s))()),
						this.platform.updateConfig(i);
					const a = this.platform.acquireContext(s, o.aspectRatio),
						r = a && a.canvas,
						h = r && r.height,
						c = r && r.width;
					(this.id = l()),
						(this.ctx = a),
						(this.canvas = r),
						(this.width = c),
						(this.height = h),
						(this._options = o),
						(this._aspectRatio = this.aspectRatio),
						(this._layers = []),
						(this._metasets = []),
						(this._stacks = void 0),
						(this.boxes = []),
						(this.currentDevicePixelRatio = void 0),
						(this.chartArea = void 0),
						(this._active = []),
						(this._lastEvent = void 0),
						(this._listeners = {}),
						(this._responsiveListeners = void 0),
						(this._sortedMetasets = []),
						(this.scales = {}),
						(this._plugins = new Hs()),
						(this.$proxies = {}),
						(this._hiddenIndices = {}),
						(this.attached = !1),
						(this._animationsDisabled = void 0),
						(this.$context = void 0),
						(this._doResize = (function (t, e) {
							let i;
							return function (...s) {
								return (
									e
										? (clearTimeout(i),
											(i = setTimeout(t, e, s)))
										: t.apply(this, s),
									e
								);
							};
						})((t) => this.update(t), o.resizeDelay || 0)),
						(cn[this.id] = this),
						a && r
							? (ci.listen(this, "complete", rn),
								ci.listen(this, "progress", ln),
								this._initialize(),
								this.attached && this.update())
							: console.error(
									"Failed to create chart: can't acquire context from the given item",
								);
				}
				get aspectRatio() {
					const {
						options: { aspectRatio: t, maintainAspectRatio: e },
						width: i,
						height: s,
						_aspectRatio: n,
					} = this;
					return h(t) ? (e && n ? n : s ? i / s : null) : t;
				}
				get data() {
					return this.config.data;
				}
				set data(t) {
					this.config.data = t;
				}
				get options() {
					return this._options;
				}
				set options(t) {
					this.config.options = t;
				}
				_initialize() {
					return (
						this.notifyPlugins("beforeInit"),
						this.options.responsive
							? this.resize()
							: Ue(this, this.options.devicePixelRatio),
						this.bindEvents(),
						this.notifyPlugins("afterInit"),
						this
					);
				}
				clear() {
					return Yt(this.canvas, this.ctx), this;
				}
				stop() {
					return ci.stop(this), this;
				}
				resize(t, e) {
					ci.running(this)
						? (this._resizeBeforeDraw = { width: t, height: e })
						: this._resize(t, e);
				}
				_resize(t, e) {
					const i = this.options,
						s = this.canvas,
						n = i.maintainAspectRatio && this.aspectRatio,
						o = this.platform.getMaximumSize(s, t, e, n),
						a =
							i.devicePixelRatio ||
							this.platform.getDevicePixelRatio(),
						r = this.width ? "resize" : "attach";
					(this.width = o.width),
						(this.height = o.height),
						(this._aspectRatio = this.aspectRatio),
						Ue(this, a, !0) &&
							(this.notifyPlugins("resize", { size: o }),
							m(i.onResize, [this, o], this),
							this.attached &&
								this._doResize(r) &&
								this.render());
				}
				ensureScalesHaveIDs() {
					b(this.options.scales || {}, (t, e) => {
						t.id = e;
					});
				}
				buildOrUpdateScales() {
					const t = this.options,
						e = t.scales,
						i = this.scales,
						s = Object.keys(i).reduce(
							(t, e) => ((t[e] = !1), t),
							{},
						);
					let n = [];
					e &&
						(n = n.concat(
							Object.keys(e).map((t) => {
								const i = e[t],
									s = Xs(t, i),
									n = "r" === s,
									o = "x" === s;
								return {
									options: i,
									dposition: n
										? "chartArea"
										: o
											? "bottom"
											: "left",
									dtype: n
										? "radialLinear"
										: o
											? "category"
											: "linear",
								};
							}),
						)),
						b(n, (e) => {
							const n = e.options,
								o = n.id,
								a = Xs(o, n),
								r = g(n.type, e.dtype);
							(void 0 !== n.position &&
								on(n.position, a) === on(e.dposition)) ||
								(n.position = e.dposition),
								(s[o] = !0);
							let l = null;
							if (o in i && i[o].type === r) l = i[o];
							else {
								(l = new (Ns.getScale(r))({
									id: o,
									type: r,
									ctx: this.ctx,
									chart: this,
								})),
									(i[l.id] = l);
							}
							l.init(n, t);
						}),
						b(s, (t, e) => {
							t || delete i[e];
						}),
						b(i, (t) => {
							fs.configure(this, t, t.options),
								fs.addBox(this, t);
						});
				}
				_updateMetasets() {
					const t = this._metasets,
						e = this.data.datasets.length,
						i = t.length;
					if ((t.sort((t, e) => t.index - e.index), i > e)) {
						for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
						t.splice(e, i - e);
					}
					this._sortedMetasets = t
						.slice(0)
						.sort(an("order", "index"));
				}
				_removeUnreferencedMetasets() {
					const {
						_metasets: t,
						data: { datasets: e },
					} = this;
					t.length > e.length && delete this._stacks,
						t.forEach((t, i) => {
							0 === e.filter((e) => e === t._dataset).length &&
								this._destroyDatasetMeta(i);
						});
				}
				buildOrUpdateControllers() {
					const t = [],
						e = this.data.datasets;
					let i, s;
					for (
						this._removeUnreferencedMetasets(), i = 0, s = e.length;
						i < s;
						i++
					) {
						const s = e[i];
						let n = this.getDatasetMeta(i);
						const o = s.type || this.config.type;
						if (
							(n.type &&
								n.type !== o &&
								(this._destroyDatasetMeta(i),
								(n = this.getDatasetMeta(i))),
							(n.type = o),
							(n.indexAxis = s.indexAxis || Us(o, this.options)),
							(n.order = s.order || 0),
							(n.index = i),
							(n.label = "" + s.label),
							(n.visible = this.isDatasetVisible(i)),
							n.controller)
						)
							n.controller.updateIndex(i),
								n.controller.linkScales();
						else {
							const e = Ns.getController(o),
								{ datasetElementType: s, dataElementType: a } =
									Wt.datasets[o];
							Object.assign(e.prototype, {
								dataElementType: Ns.getElement(a),
								datasetElementType: s && Ns.getElement(s),
							}),
								(n.controller = new e(this, i)),
								t.push(n.controller);
						}
					}
					return this._updateMetasets(), t;
				}
				_resetElements() {
					b(
						this.data.datasets,
						(t, e) => {
							this.getDatasetMeta(e).controller.reset();
						},
						this,
					);
				}
				reset() {
					this._resetElements(), this.notifyPlugins("reset");
				}
				update(t) {
					const e = this.config;
					e.update();
					const i = (this._options = e.createResolver(
						e.chartOptionScopes(),
						this.getContext(),
					));
					b(this.scales, (t) => {
						fs.removeBox(this, t);
					});
					const s = (this._animationsDisabled = !i.animation);
					this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
					if (
						((((t, e) => {
							if (t.size !== e.size) return !1;
							for (const i of t) if (!e.has(i)) return !1;
							return !0;
						})(
							new Set(Object.keys(this._listeners)),
							new Set(i.events),
						) &&
							!!this._responsiveListeners === i.responsive) ||
							(this.unbindEvents(), this.bindEvents()),
						this._plugins.invalidate(),
						!1 ===
							this.notifyPlugins("beforeUpdate", {
								mode: t,
								cancelable: !0,
							}))
					)
						return;
					const n = this.buildOrUpdateControllers();
					this.notifyPlugins("beforeElementsUpdate");
					let o = 0;
					for (let a = 0, r = this.data.datasets.length; a < r; a++) {
						const { controller: t } = this.getDatasetMeta(a),
							e = !s && -1 === n.indexOf(t);
						t.buildOrUpdateElements(e),
							(o = Math.max(+t.getMaxOverflow(), o));
					}
					(o = this._minPadding = i.layout.autoPadding ? o : 0),
						this._updateLayout(o),
						s ||
							b(n, (t) => {
								t.reset();
							}),
						this._updateDatasets(t),
						this.notifyPlugins("afterUpdate", { mode: t }),
						this._layers.sort(an("z", "_idx")),
						this._lastEvent &&
							this._eventHandler(this._lastEvent, !0),
						this.render();
				}
				_updateLayout(t) {
					if (
						!1 ===
						this.notifyPlugins("beforeLayout", { cancelable: !0 })
					)
						return;
					fs.update(this, this.width, this.height, t);
					const e = this.chartArea,
						i = e.width <= 0 || e.height <= 0;
					(this._layers = []),
						b(
							this.boxes,
							(t) => {
								(i && "chartArea" === t.position) ||
									(t.configure && t.configure(),
									this._layers.push(...t._layers()));
							},
							this,
						),
						this._layers.forEach((t, e) => {
							t._idx = e;
						}),
						this.notifyPlugins("afterLayout");
				}
				_updateDatasets(t) {
					if (
						!1 !==
						this.notifyPlugins("beforeDatasetsUpdate", {
							mode: t,
							cancelable: !0,
						})
					) {
						for (
							let e = 0, i = this.data.datasets.length;
							e < i;
							++e
						)
							this._updateDataset(
								e,
								C(t) ? t({ datasetIndex: e }) : t,
							);
						this.notifyPlugins("afterDatasetsUpdate", { mode: t });
					}
				}
				_updateDataset(t, e) {
					const i = this.getDatasetMeta(t),
						s = { meta: i, index: t, mode: e, cancelable: !0 };
					!1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
						(i.controller._update(e),
						(s.cancelable = !1),
						this.notifyPlugins("afterDatasetUpdate", s));
				}
				render() {
					!1 !==
						this.notifyPlugins("beforeRender", {
							cancelable: !0,
						}) &&
						(ci.has(this)
							? this.attached &&
								!ci.running(this) &&
								ci.start(this)
							: (this.draw(), rn({ chart: this })));
				}
				draw() {
					let t;
					if (this._resizeBeforeDraw) {
						const { width: t, height: e } = this._resizeBeforeDraw;
						this._resize(t, e), (this._resizeBeforeDraw = null);
					}
					if ((this.clear(), this.width <= 0 || this.height <= 0))
						return;
					if (
						!1 ===
						this.notifyPlugins("beforeDraw", { cancelable: !0 })
					)
						return;
					const e = this._layers;
					for (t = 0; t < e.length && e[t].z <= 0; ++t)
						e[t].draw(this.chartArea);
					for (this._drawDatasets(); t < e.length; ++t)
						e[t].draw(this.chartArea);
					this.notifyPlugins("afterDraw");
				}
				_getSortedDatasetMetas(t) {
					const e = this._sortedMetasets,
						i = [];
					let s, n;
					for (s = 0, n = e.length; s < n; ++s) {
						const n = e[s];
						(t && !n.visible) || i.push(n);
					}
					return i;
				}
				getSortedVisibleDatasetMetas() {
					return this._getSortedDatasetMetas(!0);
				}
				_drawDatasets() {
					if (
						!1 ===
						this.notifyPlugins("beforeDatasetsDraw", {
							cancelable: !0,
						})
					)
						return;
					const t = this.getSortedVisibleDatasetMetas();
					for (let e = t.length - 1; e >= 0; --e)
						this._drawDataset(t[e]);
					this.notifyPlugins("afterDatasetsDraw");
				}
				_drawDataset(t) {
					const e = this.ctx,
						i = t._clip,
						s = !i.disabled,
						n = this.chartArea,
						o = { meta: t, index: t.index, cancelable: !0 };
					!1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
						(s &&
							qt(e, {
								left: !1 === i.left ? 0 : n.left - i.left,
								right:
									!1 === i.right
										? this.width
										: n.right + i.right,
								top: !1 === i.top ? 0 : n.top - i.top,
								bottom:
									!1 === i.bottom
										? this.height
										: n.bottom + i.bottom,
							}),
						t.controller.draw(),
						s && Kt(e),
						(o.cancelable = !1),
						this.notifyPlugins("afterDatasetDraw", o));
				}
				getElementsAtEventForMode(t, e, i, s) {
					const n = ts.modes[e];
					return "function" == typeof n ? n(this, t, i, s) : [];
				}
				getDatasetMeta(t) {
					const e = this.data.datasets[t],
						i = this._metasets;
					let s = i.filter((t) => t && t._dataset === e).pop();
					return (
						s ||
							((s = {
								type: null,
								data: [],
								dataset: null,
								controller: null,
								hidden: null,
								xAxisID: null,
								yAxisID: null,
								order: (e && e.order) || 0,
								index: t,
								_dataset: e,
								_parsed: [],
								_sorted: !1,
							}),
							i.push(s)),
						s
					);
				}
				getContext() {
					return (
						this.$context ||
						(this.$context = ce(null, {
							chart: this,
							type: "chart",
						}))
					);
				}
				getVisibleDatasetCount() {
					return this.getSortedVisibleDatasetMetas().length;
				}
				isDatasetVisible(t) {
					const e = this.data.datasets[t];
					if (!e) return !1;
					const i = this.getDatasetMeta(t);
					return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
				}
				setDatasetVisibility(t, e) {
					this.getDatasetMeta(t).hidden = !e;
				}
				toggleDataVisibility(t) {
					this._hiddenIndices[t] = !this._hiddenIndices[t];
				}
				getDataVisibility(t) {
					return !this._hiddenIndices[t];
				}
				_updateVisibility(t, e, i) {
					const s = i ? "show" : "hide",
						n = this.getDatasetMeta(t),
						o = n.controller._resolveAnimations(void 0, s);
					D(e)
						? ((n.data[e].hidden = !i), this.update())
						: (this.setDatasetVisibility(t, i),
							o.update(n, { visible: i }),
							this.update((e) =>
								e.datasetIndex === t ? s : void 0,
							));
				}
				hide(t, e) {
					this._updateVisibility(t, e, !1);
				}
				show(t, e) {
					this._updateVisibility(t, e, !0);
				}
				_destroyDatasetMeta(t) {
					const e = this._metasets[t];
					e && e.controller && e.controller._destroy(),
						delete this._metasets[t];
				}
				_stop() {
					let t, e;
					for (
						this.stop(),
							ci.remove(this),
							t = 0,
							e = this.data.datasets.length;
						t < e;
						++t
					)
						this._destroyDatasetMeta(t);
				}
				destroy() {
					const { canvas: t, ctx: e } = this;
					this._stop(),
						this.config.clearCache(),
						t &&
							(this.unbindEvents(),
							Yt(t, e),
							this.platform.releaseContext(e),
							(this.canvas = null),
							(this.ctx = null)),
						this.notifyPlugins("destroy"),
						delete cn[this.id];
				}
				toBase64Image(...t) {
					return this.canvas.toDataURL(...t);
				}
				bindEvents() {
					this.bindUserEvents(),
						this.options.responsive
							? this.bindResponsiveEvents()
							: (this.attached = !0);
				}
				bindUserEvents() {
					const t = this._listeners,
						e = this.platform,
						i = (i, s) => {
							e.addEventListener(this, i, s), (t[i] = s);
						},
						s = (t, e, i) => {
							(t.offsetX = e),
								(t.offsetY = i),
								this._eventHandler(t);
						};
					b(this.options.events, (t) => i(t, s));
				}
				bindResponsiveEvents() {
					this._responsiveListeners ||
						(this._responsiveListeners = {});
					const t = this._responsiveListeners,
						e = this.platform,
						i = (i, s) => {
							e.addEventListener(this, i, s), (t[i] = s);
						},
						s = (i, s) => {
							t[i] &&
								(e.removeEventListener(this, i, s),
								delete t[i]);
						},
						n = (t, e) => {
							this.canvas && this.resize(t, e);
						};
					let o;
					const a = () => {
						s("attach", a),
							(this.attached = !0),
							this.resize(),
							i("resize", n),
							i("detach", o);
					};
					(o = () => {
						(this.attached = !1),
							s("resize", n),
							this._stop(),
							this._resize(0, 0),
							i("attach", a);
					}),
						e.isAttached(this.canvas) ? a() : o();
				}
				unbindEvents() {
					b(this._listeners, (t, e) => {
						this.platform.removeEventListener(this, e, t);
					}),
						(this._listeners = {}),
						b(this._responsiveListeners, (t, e) => {
							this.platform.removeEventListener(this, e, t);
						}),
						(this._responsiveListeners = void 0);
				}
				updateHoverStyle(t, e, i) {
					const s = i ? "set" : "remove";
					let n, o, a, r;
					for (
						"dataset" === e &&
							((n = this.getDatasetMeta(t[0].datasetIndex)),
							n.controller["_" + s + "DatasetHoverStyle"]()),
							a = 0,
							r = t.length;
						a < r;
						++a
					) {
						o = t[a];
						const e =
							o && this.getDatasetMeta(o.datasetIndex).controller;
						e &&
							e[s + "HoverStyle"](
								o.element,
								o.datasetIndex,
								o.index,
							);
					}
				}
				getActiveElements() {
					return this._active || [];
				}
				setActiveElements(t) {
					const e = this._active || [],
						i = t.map(({ datasetIndex: t, index: e }) => {
							const i = this.getDatasetMeta(t);
							if (!i)
								throw new Error(
									"No dataset found at index " + t,
								);
							return {
								datasetIndex: t,
								element: i.data[e],
								index: e,
							};
						});
					!x(i, e) &&
						((this._active = i), this._updateHoverStyles(i, e));
				}
				notifyPlugins(t, e, i) {
					return this._plugins.notify(this, t, e, i);
				}
				_updateHoverStyles(t, e, i) {
					const s = this.options.hover,
						n = (t, e) =>
							t.filter(
								(t) =>
									!e.some(
										(e) =>
											t.datasetIndex === e.datasetIndex &&
											t.index === e.index,
									),
							),
						o = n(e, t),
						a = i ? t : n(t, e);
					o.length && this.updateHoverStyle(o, s.mode, !1),
						a.length &&
							s.mode &&
							this.updateHoverStyle(a, s.mode, !0);
				}
				_eventHandler(t, e) {
					const i = { event: t, replay: e, cancelable: !0 },
						s = (e) =>
							(e.options.events || this.options.events).includes(
								t.native.type,
							);
					if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
					const n = this._handleEvent(t, e);
					return (
						(i.cancelable = !1),
						this.notifyPlugins("afterEvent", i, s),
						(n || i.changed) && this.render(),
						this
					);
				}
				_handleEvent(t, e) {
					const { _active: i = [], options: s } = this,
						n = s.hover,
						o = e;
					let a = [],
						r = !1,
						l = null;
					return (
						"mouseout" !== t.type &&
							((a = this.getElementsAtEventForMode(
								t,
								n.mode,
								n,
								o,
							)),
							(l = "click" === t.type ? this._lastEvent : t)),
						(this._lastEvent = null),
						Xt(t, this.chartArea, this._minPadding) &&
							(m(s.onHover, [t, a, this], this),
							("mouseup" !== t.type &&
								"click" !== t.type &&
								"contextmenu" !== t.type) ||
								m(s.onClick, [t, a, this], this)),
						(r = !x(a, i)),
						(r || e) &&
							((this._active = a),
							this._updateHoverStyles(a, i, e)),
						(this._lastEvent = l),
						r
					);
				}
			}
			const fn = () => b(un.instances, (t) => t._plugins.invalidate()),
				gn = !0;
			function pn(t, e, i) {
				const {
					startAngle: s,
					pixelMargin: n,
					x: o,
					y: a,
					outerRadius: r,
					innerRadius: l,
				} = e;
				let h = n / r;
				t.beginPath(),
					t.arc(o, a, r, s - h, i + h),
					l > n
						? ((h = n / l), t.arc(o, a, l, i + h, s - h, !0))
						: t.arc(o, a, n, i + I, s - I),
					t.closePath(),
					t.clip();
			}
			function mn(t, e, i, s) {
				const n = ne(t.options.borderRadius, [
					"outerStart",
					"outerEnd",
					"innerStart",
					"innerEnd",
				]);
				const o = (i - e) / 2,
					a = Math.min(o, (s * e) / 2),
					r = (t) => {
						const e = ((i - Math.min(o, t)) * s) / 2;
						return G(t, 0, Math.min(o, e));
					};
				return {
					outerStart: r(n.outerStart),
					outerEnd: r(n.outerEnd),
					innerStart: G(n.innerStart, 0, a),
					innerEnd: G(n.innerEnd, 0, a),
				};
			}
			function bn(t, e, i, s) {
				return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
			}
			function xn(t, e, i, s, n) {
				const {
						x: o,
						y: a,
						startAngle: r,
						pixelMargin: l,
						innerRadius: h,
					} = e,
					c = Math.max(e.outerRadius + s + i - l, 0),
					d = h > 0 ? h + s + i + l : 0;
				let u = 0;
				const f = n - r;
				if (s) {
					const t = ((h > 0 ? h - s : 0) + (c > 0 ? c - s : 0)) / 2;
					u = (f - (0 !== t ? (f * t) / (t + s) : f)) / 2;
				}
				const g = (f - Math.max(0.001, f * c - i / A) / c) / 2,
					p = r + g + u,
					m = n - g - u,
					{
						outerStart: b,
						outerEnd: x,
						innerStart: _,
						innerEnd: y,
					} = mn(e, d, c, m - p),
					v = c - b,
					w = c - x,
					M = p + b / v,
					k = m - x / w,
					S = d + _,
					P = d + y,
					O = p + _ / S,
					D = m - y / P;
				if ((t.beginPath(), t.arc(o, a, c, M, k), x > 0)) {
					const e = bn(w, k, o, a);
					t.arc(e.x, e.y, x, k, m + I);
				}
				const C = bn(P, m, o, a);
				if ((t.lineTo(C.x, C.y), y > 0)) {
					const e = bn(P, D, o, a);
					t.arc(e.x, e.y, y, m + I, D + Math.PI);
				}
				if ((t.arc(o, a, d, m - y / d, p + _ / d, !0), _ > 0)) {
					const e = bn(S, O, o, a);
					t.arc(e.x, e.y, _, O + Math.PI, p - I);
				}
				const T = bn(v, p, o, a);
				if ((t.lineTo(T.x, T.y), b > 0)) {
					const e = bn(v, M, o, a);
					t.arc(e.x, e.y, b, p - I, M);
				}
				t.closePath();
			}
			function _n(t, e, i, s, n) {
				const { options: o } = e,
					a = "inner" === o.borderAlign;
				o.borderWidth &&
					(a
						? ((t.lineWidth = 2 * o.borderWidth),
							(t.lineJoin = "round"))
						: ((t.lineWidth = o.borderWidth),
							(t.lineJoin = "bevel")),
					e.fullCircles &&
						(function (t, e, i) {
							const {
									x: s,
									y: n,
									startAngle: o,
									pixelMargin: a,
									fullCircles: r,
								} = e,
								l = Math.max(e.outerRadius - a, 0),
								h = e.innerRadius + a;
							let c;
							for (
								i && pn(t, e, o + T),
									t.beginPath(),
									t.arc(s, n, h, o + T, o, !0),
									c = 0;
								c < r;
								++c
							)
								t.stroke();
							for (
								t.beginPath(), t.arc(s, n, l, o, o + T), c = 0;
								c < r;
								++c
							)
								t.stroke();
						})(t, e, a),
					a && pn(t, e, n),
					xn(t, e, i, s, n),
					t.stroke());
			}
			Object.defineProperties(un, {
				defaults: { enumerable: gn, value: Wt },
				instances: { enumerable: gn, value: cn },
				overrides: { enumerable: gn, value: Ft },
				registry: { enumerable: gn, value: Ns },
				version: { enumerable: gn, value: "3.6.0" },
				getChart: { enumerable: gn, value: dn },
				register: {
					enumerable: gn,
					value: (...t) => {
						Ns.add(...t), fn();
					},
				},
				unregister: {
					enumerable: gn,
					value: (...t) => {
						Ns.remove(...t), fn();
					},
				},
			});
			class yn extends Cs {
				constructor(t) {
					super(),
						(this.options = void 0),
						(this.circumference = void 0),
						(this.startAngle = void 0),
						(this.endAngle = void 0),
						(this.innerRadius = void 0),
						(this.outerRadius = void 0),
						(this.pixelMargin = 0),
						(this.fullCircles = 0),
						t && Object.assign(this, t);
				}
				inRange(t, e, i) {
					const s = this.getProps(["x", "y"], i),
						{ angle: n, distance: o } = (function (t, e) {
							const i = e.x - t.x,
								s = e.y - t.y,
								n = Math.sqrt(i * i + s * s);
							let o = Math.atan2(s, i);
							return (
								o < -0.5 * A && (o += T),
								{ angle: o, distance: n }
							);
						})(s, { x: t, y: e }),
						{
							startAngle: a,
							endAngle: r,
							innerRadius: l,
							outerRadius: h,
							circumference: c,
						} = this.getProps(
							[
								"startAngle",
								"endAngle",
								"innerRadius",
								"outerRadius",
								"circumference",
							],
							i,
						),
						d = this.options.spacing / 2;
					return (c >= T || Z(n, a, r)) && o >= l + d && o <= h + d;
				}
				getCenterPoint(t) {
					const {
							x: e,
							y: i,
							startAngle: s,
							endAngle: n,
							innerRadius: o,
							outerRadius: a,
						} = this.getProps(
							[
								"x",
								"y",
								"startAngle",
								"endAngle",
								"innerRadius",
								"outerRadius",
								"circumference",
							],
							t,
						),
						{ offset: r, spacing: l } = this.options,
						h = (s + n) / 2,
						c = (o + a + l + r) / 2;
					return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c };
				}
				tooltipPosition(t) {
					return this.getCenterPoint(t);
				}
				draw(t) {
					const { options: e, circumference: i } = this,
						s = (e.offset || 0) / 2,
						n = (e.spacing || 0) / 2;
					if (
						((this.pixelMargin =
							"inner" === e.borderAlign ? 0.33 : 0),
						(this.fullCircles = i > T ? Math.floor(i / T) : 0),
						0 === i || this.innerRadius < 0 || this.outerRadius < 0)
					)
						return;
					t.save();
					let o = 0;
					if (s) {
						o = s / 2;
						const e = (this.startAngle + this.endAngle) / 2;
						t.translate(Math.cos(e) * o, Math.sin(e) * o),
							this.circumference >= A && (o = s);
					}
					(t.fillStyle = e.backgroundColor),
						(t.strokeStyle = e.borderColor);
					const a = (function (t, e, i, s) {
						const {
							fullCircles: n,
							startAngle: o,
							circumference: a,
						} = e;
						let r = e.endAngle;
						if (n) {
							xn(t, e, i, s, o + T);
							for (let e = 0; e < n; ++e) t.fill();
							isNaN(a) ||
								((r = o + (a % T)), a % T == 0 && (r += T));
						}
						return xn(t, e, i, s, r), t.fill(), r;
					})(t, this, o, n);
					_n(t, this, o, n, a), t.restore();
				}
			}
			function vn(t, e, i = e) {
				(t.lineCap = g(i.borderCapStyle, e.borderCapStyle)),
					t.setLineDash(g(i.borderDash, e.borderDash)),
					(t.lineDashOffset = g(
						i.borderDashOffset,
						e.borderDashOffset,
					)),
					(t.lineJoin = g(i.borderJoinStyle, e.borderJoinStyle)),
					(t.lineWidth = g(i.borderWidth, e.borderWidth)),
					(t.strokeStyle = g(i.borderColor, e.borderColor));
			}
			function wn(t, e, i) {
				t.lineTo(i.x, i.y);
			}
			function Mn(t, e, i = {}) {
				const s = t.length,
					{ start: n = 0, end: o = s - 1 } = i,
					{ start: a, end: r } = e,
					l = Math.max(n, a),
					h = Math.min(o, r),
					c = (n < a && o < a) || (n > r && o > r);
				return {
					count: s,
					start: l,
					loop: e.loop,
					ilen: h < l && !c ? s + h - l : h - l,
				};
			}
			function kn(t, e, i, s) {
				const { points: n, options: o } = e,
					{ count: a, start: r, loop: l, ilen: h } = Mn(n, i, s),
					c = (function (t) {
						return t.stepped
							? Zt
							: t.tension ||
								  "monotone" === t.cubicInterpolationMode
								? Gt
								: wn;
					})(o);
				let d,
					u,
					f,
					{ move: g = !0, reverse: p } = s || {};
				for (d = 0; d <= h; ++d)
					(u = n[(r + (p ? h - d : d)) % a]),
						u.skip ||
							(g
								? (t.moveTo(u.x, u.y), (g = !1))
								: c(t, f, u, p, o.stepped),
							(f = u));
				return (
					l &&
						((u = n[(r + (p ? h : 0)) % a]),
						c(t, f, u, p, o.stepped)),
					!!l
				);
			}
			function Sn(t, e, i, s) {
				const n = e.points,
					{ count: o, start: a, ilen: r } = Mn(n, i, s),
					{ move: l = !0, reverse: h } = s || {};
				let c,
					d,
					u,
					f,
					g,
					p,
					m = 0,
					b = 0;
				const x = (t) => (a + (h ? r - t : t)) % o,
					_ = () => {
						f !== g &&
							(t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
					};
				for (
					l && ((d = n[x(0)]), t.moveTo(d.x, d.y)), c = 0;
					c <= r;
					++c
				) {
					if (((d = n[x(c)]), d.skip)) continue;
					const e = d.x,
						i = d.y,
						s = 0 | e;
					s === u
						? (i < f ? (f = i) : i > g && (g = i),
							(m = (b * m + e) / ++b))
						: (_(), t.lineTo(e, i), (u = s), (b = 0), (f = g = i)),
						(p = i);
				}
				_();
			}
			function Pn(t) {
				const e = t.options,
					i = e.borderDash && e.borderDash.length;
				return !(
					t._decimated ||
					t._loop ||
					e.tension ||
					"monotone" === e.cubicInterpolationMode ||
					e.stepped ||
					i
				)
					? Sn
					: kn;
			}
			(yn.id = "arc"),
				(yn.defaults = {
					borderAlign: "center",
					borderColor: "#fff",
					borderRadius: 0,
					borderWidth: 2,
					offset: 0,
					spacing: 0,
					angle: void 0,
				}),
				(yn.defaultRoutes = { backgroundColor: "backgroundColor" });
			const On = "function" == typeof Path2D;
			function Dn(t, e, i, s) {
				On && !e.options.segment
					? (function (t, e, i, s) {
							let n = e._path;
							n ||
								((n = e._path = new Path2D()),
								e.path(n, i, s) && n.closePath()),
								vn(t, e.options),
								t.stroke(n);
						})(t, e, i, s)
					: (function (t, e, i, s) {
							const { segments: n, options: o } = e,
								a = Pn(e);
							for (const r of n)
								vn(t, o, r.style),
									t.beginPath(),
									a(t, e, r, { start: i, end: i + s - 1 }) &&
										t.closePath(),
									t.stroke();
						})(t, e, i, s);
			}
			class Cn extends Cs {
				constructor(t) {
					super(),
						(this.animated = !0),
						(this.options = void 0),
						(this._chart = void 0),
						(this._loop = void 0),
						(this._fullLoop = void 0),
						(this._path = void 0),
						(this._points = void 0),
						(this._segments = void 0),
						(this._decimated = !1),
						(this._pointsUpdated = !1),
						(this._datasetIndex = void 0),
						t && Object.assign(this, t);
				}
				updateControlPoints(t, e) {
					const i = this.options;
					if (
						(i.tension ||
							"monotone" === i.cubicInterpolationMode) &&
						!i.stepped &&
						!this._pointsUpdated
					) {
						const s = i.spanGaps ? this._loop : this._fullLoop;
						ze(this._points, i, t, s, e),
							(this._pointsUpdated = !0);
					}
				}
				set points(t) {
					(this._points = t),
						delete this._segments,
						delete this._path,
						(this._pointsUpdated = !1);
				}
				get points() {
					return this._points;
				}
				get segments() {
					return (
						this._segments ||
						(this._segments = (function (t, e) {
							const i = t.points,
								s = t.options.spanGaps,
								n = i.length;
							if (!n) return [];
							const o = !!t._loop,
								{ start: a, end: r } = (function (t, e, i, s) {
									let n = 0,
										o = e - 1;
									if (i && !s)
										for (; n < e && !t[n].skip; ) n++;
									for (; n < e && t[n].skip; ) n++;
									for (
										n %= e, i && (o += n);
										o > n && t[o % e].skip;

									)
										o--;
									return (o %= e), { start: n, end: o };
								})(i, n, o, s);
							return ri(
								t,
								!0 === s
									? [{ start: a, end: r, loop: o }]
									: (function (t, e, i, s) {
											const n = t.length,
												o = [];
											let a,
												r = e,
												l = t[e];
											for (a = e + 1; a <= i; ++a) {
												const i = t[a % n];
												i.skip || i.stop
													? l.skip ||
														((s = !1),
														o.push({
															start: e % n,
															end: (a - 1) % n,
															loop: s,
														}),
														(e = r =
															i.stop ? a : null))
													: ((r = a),
														l.skip && (e = a)),
													(l = i);
											}
											return (
												null !== r &&
													o.push({
														start: e % n,
														end: r % n,
														loop: s,
													}),
												o
											);
										})(
											i,
											a,
											r < a ? r + n : r,
											!!t._fullLoop &&
												0 === a &&
												r === n - 1,
										),
								i,
								e,
							);
						})(this, this.options.segment))
					);
				}
				first() {
					const t = this.segments,
						e = this.points;
					return t.length && e[t[0].start];
				}
				last() {
					const t = this.segments,
						e = this.points,
						i = t.length;
					return i && e[t[i - 1].end];
				}
				interpolate(t, e) {
					const i = this.options,
						s = t[e],
						n = this.points,
						o = ai(this, { property: e, start: s, end: s });
					if (!o.length) return;
					const a = [],
						r = (function (t) {
							return t.stepped
								? Ze
								: t.tension ||
									  "monotone" === t.cubicInterpolationMode
									? Ge
									: Ke;
						})(i);
					let l, h;
					for (l = 0, h = o.length; l < h; ++l) {
						const { start: h, end: c } = o[l],
							d = n[h],
							u = n[c];
						if (d === u) {
							a.push(d);
							continue;
						}
						const f = r(
							d,
							u,
							Math.abs((s - d[e]) / (u[e] - d[e])),
							i.stepped,
						);
						(f[e] = t[e]), a.push(f);
					}
					return 1 === a.length ? a[0] : a;
				}
				pathSegment(t, e, i) {
					return Pn(this)(t, this, e, i);
				}
				path(t, e, i) {
					const s = this.segments,
						n = Pn(this);
					let o = this._loop;
					(e = e || 0), (i = i || this.points.length - e);
					for (const a of s)
						o &= n(t, this, a, { start: e, end: e + i - 1 });
					return !!o;
				}
				draw(t, e, i, s) {
					const n = this.options || {};
					(this.points || []).length &&
						n.borderWidth &&
						(t.save(), Dn(t, this, i, s), t.restore()),
						this.animated &&
							((this._pointsUpdated = !1), (this._path = void 0));
				}
			}
			function An(t, e, i, s) {
				const n = t.options,
					{ [i]: o } = t.getProps([i], s);
				return Math.abs(e - o) < n.radius + n.hitRadius;
			}
			(Cn.id = "line"),
				(Cn.defaults = {
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0,
					borderJoinStyle: "miter",
					borderWidth: 3,
					capBezierPoints: !0,
					cubicInterpolationMode: "default",
					fill: !1,
					spanGaps: !1,
					stepped: !1,
					tension: 0,
				}),
				(Cn.defaultRoutes = {
					backgroundColor: "backgroundColor",
					borderColor: "borderColor",
				}),
				(Cn.descriptors = {
					_scriptable: !0,
					_indexable: (t) => "borderDash" !== t && "fill" !== t,
				});
			class Tn extends Cs {
				constructor(t) {
					super(),
						(this.options = void 0),
						(this.parsed = void 0),
						(this.skip = void 0),
						(this.stop = void 0),
						t && Object.assign(this, t);
				}
				inRange(t, e, i) {
					const s = this.options,
						{ x: n, y: o } = this.getProps(["x", "y"], i);
					return (
						Math.pow(t - n, 2) + Math.pow(e - o, 2) <
						Math.pow(s.hitRadius + s.radius, 2)
					);
				}
				inXRange(t, e) {
					return An(this, t, "x", e);
				}
				inYRange(t, e) {
					return An(this, t, "y", e);
				}
				getCenterPoint(t) {
					const { x: e, y: i } = this.getProps(["x", "y"], t);
					return { x: e, y: i };
				}
				size(t) {
					let e = (t = t || this.options || {}).radius || 0;
					e = Math.max(e, (e && t.hoverRadius) || 0);
					return 2 * (e + ((e && t.borderWidth) || 0));
				}
				draw(t, e) {
					const i = this.options;
					this.skip ||
						i.radius < 0.1 ||
						!Xt(this, e, this.size(i) / 2) ||
						((t.strokeStyle = i.borderColor),
						(t.lineWidth = i.borderWidth),
						(t.fillStyle = i.backgroundColor),
						Ut(t, i, this.x, this.y));
				}
				getRange() {
					const t = this.options || {};
					return t.radius + t.hitRadius;
				}
			}
			function En(t, e) {
				const {
					x: i,
					y: s,
					base: n,
					width: o,
					height: a,
				} = t.getProps(["x", "y", "base", "width", "height"], e);
				let r, l, h, c, d;
				return (
					t.horizontal
						? ((d = a / 2),
							(r = Math.min(i, n)),
							(l = Math.max(i, n)),
							(h = s - d),
							(c = s + d))
						: ((d = o / 2),
							(r = i - d),
							(l = i + d),
							(h = Math.min(s, n)),
							(c = Math.max(s, n))),
					{ left: r, top: h, right: l, bottom: c }
				);
			}
			function Ln(t, e, i, s) {
				return t ? 0 : G(e, i, s);
			}
			function Rn(t) {
				const e = En(t),
					i = e.right - e.left,
					s = e.bottom - e.top,
					n = (function (t, e, i) {
						const s = t.options.borderWidth,
							n = t.borderSkipped,
							o = oe(s);
						return {
							t: Ln(n.top, o.top, 0, i),
							r: Ln(n.right, o.right, 0, e),
							b: Ln(n.bottom, o.bottom, 0, i),
							l: Ln(n.left, o.left, 0, e),
						};
					})(t, i / 2, s / 2),
					o = (function (t, e, i) {
						const { enableBorderRadius: s } = t.getProps([
								"enableBorderRadius",
							]),
							n = t.options.borderRadius,
							o = ae(n),
							a = Math.min(e, i),
							r = t.borderSkipped,
							l = s || d(n);
						return {
							topLeft: Ln(!l || r.top || r.left, o.topLeft, 0, a),
							topRight: Ln(
								!l || r.top || r.right,
								o.topRight,
								0,
								a,
							),
							bottomLeft: Ln(
								!l || r.bottom || r.left,
								o.bottomLeft,
								0,
								a,
							),
							bottomRight: Ln(
								!l || r.bottom || r.right,
								o.bottomRight,
								0,
								a,
							),
						};
					})(t, i / 2, s / 2);
				return {
					outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
					inner: {
						x: e.left + n.l,
						y: e.top + n.t,
						w: i - n.l - n.r,
						h: s - n.t - n.b,
						radius: {
							topLeft: Math.max(
								0,
								o.topLeft - Math.max(n.t, n.l),
							),
							topRight: Math.max(
								0,
								o.topRight - Math.max(n.t, n.r),
							),
							bottomLeft: Math.max(
								0,
								o.bottomLeft - Math.max(n.b, n.l),
							),
							bottomRight: Math.max(
								0,
								o.bottomRight - Math.max(n.b, n.r),
							),
						},
					},
				};
			}
			function In(t, e, i, s) {
				const n = null === e,
					o = null === i,
					a = t && !(n && o) && En(t, s);
				return (
					a &&
					(n || (e >= a.left && e <= a.right)) &&
					(o || (i >= a.top && i <= a.bottom))
				);
			}
			function zn(t, e) {
				t.rect(e.x, e.y, e.w, e.h);
			}
			function Fn(t, e, i = {}) {
				const s = t.x !== i.x ? -e : 0,
					n = t.y !== i.y ? -e : 0,
					o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
					a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
				return {
					x: t.x + s,
					y: t.y + n,
					w: t.w + o,
					h: t.h + a,
					radius: t.radius,
				};
			}
			(Tn.id = "point"),
				(Tn.defaults = {
					borderWidth: 1,
					hitRadius: 1,
					hoverBorderWidth: 1,
					hoverRadius: 4,
					pointStyle: "circle",
					radius: 3,
					rotation: 0,
				}),
				(Tn.defaultRoutes = {
					backgroundColor: "backgroundColor",
					borderColor: "borderColor",
				});
			class Vn extends Cs {
				constructor(t) {
					super(),
						(this.options = void 0),
						(this.horizontal = void 0),
						(this.base = void 0),
						(this.width = void 0),
						(this.height = void 0),
						(this.inflateAmount = void 0),
						t && Object.assign(this, t);
				}
				draw(t) {
					const {
							inflateAmount: e,
							options: { borderColor: i, backgroundColor: s },
						} = this,
						{ inner: n, outer: o } = Rn(this),
						a =
							(r = o.radius).topLeft ||
							r.topRight ||
							r.bottomLeft ||
							r.bottomRight
								? te
								: zn;
					var r;
					t.save(),
						(o.w === n.w && o.h === n.h) ||
							(t.beginPath(),
							a(t, Fn(o, e, n)),
							t.clip(),
							a(t, Fn(n, -e, o)),
							(t.fillStyle = i),
							t.fill("evenodd")),
						t.beginPath(),
						a(t, Fn(n, e)),
						(t.fillStyle = s),
						t.fill(),
						t.restore();
				}
				inRange(t, e, i) {
					return In(this, t, e, i);
				}
				inXRange(t, e) {
					return In(this, t, null, e);
				}
				inYRange(t, e) {
					return In(this, null, t, e);
				}
				getCenterPoint(t) {
					const {
						x: e,
						y: i,
						base: s,
						horizontal: n,
					} = this.getProps(["x", "y", "base", "horizontal"], t);
					return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
				}
				getRange(t) {
					return "x" === t ? this.width / 2 : this.height / 2;
				}
			}
			(Vn.id = "bar"),
				(Vn.defaults = {
					borderSkipped: "start",
					borderWidth: 0,
					borderRadius: 0,
					inflateAmount: "auto",
					pointStyle: void 0,
				}),
				(Vn.defaultRoutes = {
					backgroundColor: "backgroundColor",
					borderColor: "borderColor",
				});
			var Bn = Object.freeze({
				__proto__: null,
				ArcElement: yn,
				LineElement: Cn,
				PointElement: Tn,
				BarElement: Vn,
			});
			function jn(t) {
				if (t._decimated) {
					const e = t._data;
					delete t._decimated,
						delete t._data,
						Object.defineProperty(t, "data", { value: e });
				}
			}
			function Wn(t) {
				t.data.datasets.forEach((t) => {
					jn(t);
				});
			}
			var Nn = {
				id: "decimation",
				defaults: { algorithm: "min-max", enabled: !1 },
				beforeElementsUpdate: (t, e, i) => {
					if (!i.enabled) return void Wn(t);
					const s = t.width;
					t.data.datasets.forEach((e, n) => {
						const { _data: o, indexAxis: a } = e,
							r = t.getDatasetMeta(n),
							l = o || e.data;
						if ("y" === he([a, t.options.indexAxis])) return;
						if ("line" !== r.type) return;
						const c = t.scales[r.xAxisID];
						if ("linear" !== c.type && "time" !== c.type) return;
						if (t.options.parsing) return;
						let { start: d, count: u } = (function (t, e) {
							const i = e.length;
							let s,
								n = 0;
							const { iScale: o } = t,
								{
									min: a,
									max: r,
									minDefined: l,
									maxDefined: h,
								} = o.getUserBounds();
							return (
								l && (n = G(ue(e, o.axis, a).lo, 0, i - 1)),
								(s = h
									? G(ue(e, o.axis, r).hi + 1, n, i) - n
									: i - n),
								{ start: n, count: s }
							);
						})(r, l);
						if (u <= (i.threshold || 4 * s)) return void jn(e);
						let f;
						switch (
							(h(o) &&
								((e._data = l),
								delete e.data,
								Object.defineProperty(e, "data", {
									configurable: !0,
									enumerable: !0,
									get: function () {
										return this._decimated;
									},
									set: function (t) {
										this._data = t;
									},
								})),
							i.algorithm)
						) {
							case "lttb":
								f = (function (t, e, i, s, n) {
									const o = n.samples || s;
									if (o >= i) return t.slice(e, e + i);
									const a = [],
										r = (i - 2) / (o - 2);
									let l = 0;
									const h = e + i - 1;
									let c,
										d,
										u,
										f,
										g,
										p = e;
									for (a[l++] = t[p], c = 0; c < o - 2; c++) {
										let s,
											n = 0,
											o = 0;
										const h =
												Math.floor((c + 1) * r) + 1 + e,
											m =
												Math.min(
													Math.floor((c + 2) * r) + 1,
													i,
												) + e,
											b = m - h;
										for (s = h; s < m; s++)
											(n += t[s].x), (o += t[s].y);
										(n /= b), (o /= b);
										const x = Math.floor(c * r) + 1 + e,
											_ =
												Math.min(
													Math.floor((c + 1) * r) + 1,
													i,
												) + e,
											{ x: y, y: v } = t[p];
										for (u = f = -1, s = x; s < _; s++)
											(f =
												0.5 *
												Math.abs(
													(y - n) * (t[s].y - v) -
														(y - t[s].x) * (o - v),
												)),
												f > u &&
													((u = f),
													(d = t[s]),
													(g = s));
										(a[l++] = d), (p = g);
									}
									return (a[l++] = t[h]), a;
								})(l, d, u, s, i);
								break;
							case "min-max":
								f = (function (t, e, i, s) {
									let n,
										o,
										a,
										r,
										l,
										c,
										d,
										u,
										f,
										g,
										p = 0,
										m = 0;
									const b = [],
										x = e + i - 1,
										_ = t[e].x,
										y = t[x].x - _;
									for (n = e; n < e + i; ++n) {
										(o = t[n]),
											(a = ((o.x - _) / y) * s),
											(r = o.y);
										const e = 0 | a;
										if (e === l)
											r < f
												? ((f = r), (c = n))
												: r > g && ((g = r), (d = n)),
												(p = (m * p + o.x) / ++m);
										else {
											const i = n - 1;
											if (!h(c) && !h(d)) {
												const e = Math.min(c, d),
													s = Math.max(c, d);
												e !== u &&
													e !== i &&
													b.push({ ...t[e], x: p }),
													s !== u &&
														s !== i &&
														b.push({
															...t[s],
															x: p,
														});
											}
											n > 0 && i !== u && b.push(t[i]),
												b.push(o),
												(l = e),
												(m = 0),
												(f = g = r),
												(c = d = u = n);
										}
									}
									return b;
								})(l, d, u, s);
								break;
							default:
								throw new Error(
									`Unsupported decimation algorithm '${i.algorithm}'`,
								);
						}
						e._decimated = f;
					});
				},
				destroy(t) {
					Wn(t);
				},
			};
			function Hn(t, e, i) {
				const s = (function (t) {
					const e = t.options,
						i = e.fill;
					let s = g(i && i.target, i);
					return (
						void 0 === s && (s = !!e.backgroundColor),
						!1 !== s && null !== s && (!0 === s ? "origin" : s)
					);
				})(t);
				if (d(s)) return !isNaN(s.value) && s;
				let n = parseFloat(s);
				return u(n) && Math.floor(n) === n
					? (("-" !== s[0] && "+" !== s[0]) || (n = e + n),
						!(n === e || n < 0 || n >= i) && n)
					: ["origin", "start", "end", "stack", "shape"].indexOf(s) >=
							0 && s;
			}
			class $n {
				constructor(t) {
					(this.x = t.x), (this.y = t.y), (this.radius = t.radius);
				}
				pathSegment(t, e, i) {
					const { x: s, y: n, radius: o } = this;
					return (
						(e = e || { start: 0, end: T }),
						t.arc(s, n, o, e.end, e.start, !0),
						!i.bounds
					);
				}
				interpolate(t) {
					const { x: e, y: i, radius: s } = this,
						n = t.angle;
					return {
						x: e + Math.cos(n) * s,
						y: i + Math.sin(n) * s,
						angle: n,
					};
				}
			}
			function Yn(t) {
				return (t.scale || {}).getPointPositionForValue
					? (function (t) {
							const { scale: e, fill: i } = t,
								s = e.options,
								n = e.getLabels().length,
								o = [],
								a = s.reverse ? e.max : e.min,
								r = s.reverse ? e.min : e.max;
							let l, h, c;
							if (
								((c =
									"start" === i
										? a
										: "end" === i
											? r
											: d(i)
												? i.value
												: e.getBaseValue()),
								s.grid.circular)
							)
								return (
									(h = e.getPointPositionForValue(0, a)),
									new $n({
										x: h.x,
										y: h.y,
										radius: e.getDistanceFromCenterForValue(
											c,
										),
									})
								);
							for (l = 0; l < n; ++l)
								o.push(e.getPointPositionForValue(l, c));
							return o;
						})(t)
					: (function (t) {
							const { scale: e = {}, fill: i } = t;
							let s,
								n = null;
							return (
								"start" === i
									? (n = e.bottom)
									: "end" === i
										? (n = e.top)
										: d(i)
											? (n = e.getPixelForValue(i.value))
											: e.getBasePixel &&
												(n = e.getBasePixel()),
								u(n)
									? ((s = e.isHorizontal()),
										{ x: s ? n : null, y: s ? null : n })
									: null
							);
						})(t);
			}
			function Un(t, e, i) {
				for (; e > t; e--) {
					const t = i[e];
					if (!isNaN(t.x) && !isNaN(t.y)) break;
				}
				return e;
			}
			function Xn(t, e, i) {
				const s = [];
				for (let n = 0; n < i.length; n++) {
					const o = i[n],
						{ first: a, last: r, point: l } = qn(o, e, "x");
					if (!(!l || (a && r)))
						if (a) s.unshift(l);
						else if ((t.push(l), !r)) break;
				}
				t.push(...s);
			}
			function qn(t, e, i) {
				const s = t.interpolate(e, i);
				if (!s) return {};
				const n = s[i],
					o = t.segments,
					a = t.points;
				let r = !1,
					l = !1;
				for (let h = 0; h < o.length; h++) {
					const t = o[h],
						e = a[t.start][i],
						s = a[t.end][i];
					if (n >= e && n <= s) {
						(r = n === e), (l = n === s);
						break;
					}
				}
				return { first: r, last: l, point: s };
			}
			function Kn(t) {
				const { chart: e, fill: i, line: s } = t;
				if (u(i))
					return (function (t, e) {
						const i = t.getDatasetMeta(e);
						return i && t.isDatasetVisible(e) ? i.dataset : null;
					})(e, i);
				if ("stack" === i)
					return (function (t) {
						const { scale: e, index: i, line: s } = t,
							n = [],
							o = s.segments,
							a = s.points,
							r = (function (t, e) {
								const i = [],
									s = t.getMatchingVisibleMetas("line");
								for (let n = 0; n < s.length; n++) {
									const t = s[n];
									if (t.index === e) break;
									t.hidden || i.unshift(t.dataset);
								}
								return i;
							})(e, i);
						r.push(Zn({ x: null, y: e.bottom }, s));
						for (let l = 0; l < o.length; l++) {
							const t = o[l];
							for (let e = t.start; e <= t.end; e++)
								Xn(n, a[e], r);
						}
						return new Cn({ points: n, options: {} });
					})(t);
				if ("shape" === i) return !0;
				const n = Yn(t);
				return n instanceof $n ? n : Zn(n, s);
			}
			function Zn(t, e) {
				let i = [],
					s = !1;
				return (
					c(t)
						? ((s = !0), (i = t))
						: (i = (function (t, e) {
								const { x: i = null, y: s = null } = t || {},
									n = e.points,
									o = [];
								return (
									e.segments.forEach(
										({ start: t, end: e }) => {
											e = Un(t, e, n);
											const a = n[t],
												r = n[e];
											null !== s
												? (o.push({ x: a.x, y: s }),
													o.push({ x: r.x, y: s }))
												: null !== i &&
													(o.push({ x: i, y: a.y }),
													o.push({ x: i, y: r.y }));
										},
									),
									o
								);
							})(t, e)),
					i.length
						? new Cn({
								points: i,
								options: { tension: 0 },
								_loop: s,
								_fullLoop: s,
							})
						: null
				);
			}
			function Gn(t, e, i) {
				let s = t[e].fill;
				const n = [e];
				let o;
				if (!i) return s;
				for (; !1 !== s && -1 === n.indexOf(s); ) {
					if (!u(s)) return s;
					if (((o = t[s]), !o)) return !1;
					if (o.visible) return s;
					n.push(s), (s = o.fill);
				}
				return !1;
			}
			function Qn(t, e, i) {
				t.beginPath(),
					e.path(t),
					t.lineTo(e.last().x, i),
					t.lineTo(e.first().x, i),
					t.closePath(),
					t.clip();
			}
			function Jn(t, e, i, s) {
				if (s) return;
				let n = e[t],
					o = i[t];
				return (
					"angle" === t && ((n = K(n)), (o = K(o))),
					{ property: t, start: n, end: o }
				);
			}
			function to(t, e, i, s) {
				return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
			}
			function eo(t, e, i) {
				const { top: s, bottom: n } = e.chart.chartArea,
					{ property: o, start: a, end: r } = i || {};
				"x" === o &&
					(t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
			}
			function io(t, e, i, s) {
				const n = e.interpolate(i, s);
				n && t.lineTo(n.x, n.y);
			}
			function so(t, e) {
				const {
						line: i,
						target: s,
						property: n,
						color: o,
						scale: a,
					} = e,
					r = (function (t, e, i) {
						const s = t.segments,
							n = t.points,
							o = e.points,
							a = [];
						for (const r of s) {
							let { start: t, end: s } = r;
							s = Un(t, s, n);
							const l = Jn(i, n[t], n[s], r.loop);
							if (!e.segments) {
								a.push({
									source: r,
									target: l,
									start: n[t],
									end: n[s],
								});
								continue;
							}
							const h = ai(e, l);
							for (const e of h) {
								const t = Jn(i, o[e.start], o[e.end], e.loop),
									s = oi(r, n, t);
								for (const n of s)
									a.push({
										source: n,
										target: e,
										start: {
											[i]: to(l, t, "start", Math.max),
										},
										end: { [i]: to(l, t, "end", Math.min) },
									});
							}
						}
						return a;
					})(i, s, n);
				for (const { source: l, target: h, start: c, end: d } of r) {
					const { style: { backgroundColor: e = o } = {} } = l,
						r = !0 !== s;
					t.save(),
						(t.fillStyle = e),
						eo(t, a, r && Jn(n, c, d)),
						t.beginPath();
					const u = !!i.pathSegment(t, l);
					let f;
					if (r) {
						u ? t.closePath() : io(t, s, d, n);
						const e = !!s.pathSegment(t, h, {
							move: u,
							reverse: !0,
						});
						(f = u && e), f || io(t, s, c, n);
					}
					t.closePath(),
						t.fill(f ? "evenodd" : "nonzero"),
						t.restore();
				}
			}
			function no(t, e, i) {
				const s = Kn(e),
					{ line: n, scale: o, axis: a } = e,
					r = n.options,
					l = r.fill,
					h = r.backgroundColor,
					{ above: c = h, below: d = h } = l || {};
				s &&
					n.points.length &&
					(qt(t, i),
					(function (t, e) {
						const {
								line: i,
								target: s,
								above: n,
								below: o,
								area: a,
								scale: r,
							} = e,
							l = i._loop ? "angle" : e.axis;
						t.save(),
							"x" === l &&
								o !== n &&
								(Qn(t, s, a.top),
								so(t, {
									line: i,
									target: s,
									color: n,
									scale: r,
									property: l,
								}),
								t.restore(),
								t.save(),
								Qn(t, s, a.bottom)),
							so(t, {
								line: i,
								target: s,
								color: o,
								scale: r,
								property: l,
							}),
							t.restore();
					})(t, {
						line: n,
						target: s,
						above: c,
						below: d,
						area: i,
						scale: o,
						axis: a,
					}),
					Kt(t));
			}
			var oo = {
				id: "filler",
				afterDatasetsUpdate(t, e, i) {
					const s = (t.data.datasets || []).length,
						n = [];
					let o, a, r, l;
					for (a = 0; a < s; ++a)
						(o = t.getDatasetMeta(a)),
							(r = o.dataset),
							(l = null),
							r &&
								r.options &&
								r instanceof Cn &&
								(l = {
									visible: t.isDatasetVisible(a),
									index: a,
									fill: Hn(r, a, s),
									chart: t,
									axis: o.controller.options.indexAxis,
									scale: o.vScale,
									line: r,
								}),
							(o.$filler = l),
							n.push(l);
					for (a = 0; a < s; ++a)
						(l = n[a]),
							l &&
								!1 !== l.fill &&
								(l.fill = Gn(n, a, i.propagate));
				},
				beforeDraw(t, e, i) {
					const s = "beforeDraw" === i.drawTime,
						n = t.getSortedVisibleDatasetMetas(),
						o = t.chartArea;
					for (let a = n.length - 1; a >= 0; --a) {
						const e = n[a].$filler;
						e &&
							(e.line.updateControlPoints(o, e.axis),
							s && no(t.ctx, e, o));
					}
				},
				beforeDatasetsDraw(t, e, i) {
					if ("beforeDatasetsDraw" !== i.drawTime) return;
					const s = t.getSortedVisibleDatasetMetas();
					for (let n = s.length - 1; n >= 0; --n) {
						const e = s[n].$filler;
						e && no(t.ctx, e, t.chartArea);
					}
				},
				beforeDatasetDraw(t, e, i) {
					const s = e.meta.$filler;
					s &&
						!1 !== s.fill &&
						"beforeDatasetDraw" === i.drawTime &&
						no(t.ctx, s, t.chartArea);
				},
				defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
			};
			const ao = (t, e) => {
				let { boxHeight: i = e, boxWidth: s = e } = t;
				return (
					t.usePointStyle &&
						((i = Math.min(i, e)), (s = Math.min(s, e))),
					{ boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
				);
			};
			class ro extends Cs {
				constructor(t) {
					super(),
						(this._added = !1),
						(this.legendHitBoxes = []),
						(this._hoveredItem = null),
						(this.doughnutMode = !1),
						(this.chart = t.chart),
						(this.options = t.options),
						(this.ctx = t.ctx),
						(this.legendItems = void 0),
						(this.columnSizes = void 0),
						(this.lineWidths = void 0),
						(this.maxHeight = void 0),
						(this.maxWidth = void 0),
						(this.top = void 0),
						(this.bottom = void 0),
						(this.left = void 0),
						(this.right = void 0),
						(this.height = void 0),
						(this.width = void 0),
						(this._margins = void 0),
						(this.position = void 0),
						(this.weight = void 0),
						(this.fullSize = void 0);
				}
				update(t, e, i) {
					(this.maxWidth = t),
						(this.maxHeight = e),
						(this._margins = i),
						this.setDimensions(),
						this.buildLabels(),
						this.fit();
				}
				setDimensions() {
					this.isHorizontal()
						? ((this.width = this.maxWidth),
							(this.left = this._margins.left),
							(this.right = this.width))
						: ((this.height = this.maxHeight),
							(this.top = this._margins.top),
							(this.bottom = this.height));
				}
				buildLabels() {
					const t = this.options.labels || {};
					let e = m(t.generateLabels, [this.chart], this) || [];
					t.filter &&
						(e = e.filter((e) => t.filter(e, this.chart.data))),
						t.sort &&
							(e = e.sort((e, i) =>
								t.sort(e, i, this.chart.data),
							)),
						this.options.reverse && e.reverse(),
						(this.legendItems = e);
				}
				fit() {
					const { options: t, ctx: e } = this;
					if (!t.display) return void (this.width = this.height = 0);
					const i = t.labels,
						s = le(i.font),
						n = s.size,
						o = this._computeTitleHeight(),
						{ boxWidth: a, itemHeight: r } = ao(i, n);
					let l, h;
					(e.font = s.string),
						this.isHorizontal()
							? ((l = this.maxWidth),
								(h = this._fitRows(o, n, a, r) + 10))
							: ((h = this.maxHeight),
								(l = this._fitCols(o, n, a, r) + 10)),
						(this.width = Math.min(l, t.maxWidth || this.maxWidth)),
						(this.height = Math.min(
							h,
							t.maxHeight || this.maxHeight,
						));
				}
				_fitRows(t, e, i, s) {
					const {
							ctx: n,
							maxWidth: o,
							options: {
								labels: { padding: a },
							},
						} = this,
						r = (this.legendHitBoxes = []),
						l = (this.lineWidths = [0]),
						h = s + a;
					let c = t;
					(n.textAlign = "left"), (n.textBaseline = "middle");
					let d = -1,
						u = -h;
					return (
						this.legendItems.forEach((t, f) => {
							const g = i + e / 2 + n.measureText(t.text).width;
							(0 === f || l[l.length - 1] + g + 2 * a > o) &&
								((c += h),
								(l[l.length - (f > 0 ? 0 : 1)] = 0),
								(u += h),
								d++),
								(r[f] = {
									left: 0,
									top: u,
									row: d,
									width: g,
									height: s,
								}),
								(l[l.length - 1] += g + a);
						}),
						c
					);
				}
				_fitCols(t, e, i, s) {
					const {
							ctx: n,
							maxHeight: o,
							options: {
								labels: { padding: a },
							},
						} = this,
						r = (this.legendHitBoxes = []),
						l = (this.columnSizes = []),
						h = o - t;
					let c = a,
						d = 0,
						u = 0,
						f = 0,
						g = 0;
					return (
						this.legendItems.forEach((t, o) => {
							const p = i + e / 2 + n.measureText(t.text).width;
							o > 0 &&
								u + s + 2 * a > h &&
								((c += d + a),
								l.push({ width: d, height: u }),
								(f += d + a),
								g++,
								(d = u = 0)),
								(r[o] = {
									left: f,
									top: u,
									col: g,
									width: p,
									height: s,
								}),
								(d = Math.max(d, p)),
								(u += s + a);
						}),
						(c += d),
						l.push({ width: d, height: u }),
						c
					);
				}
				adjustHitBoxes() {
					if (!this.options.display) return;
					const t = this._computeTitleHeight(),
						{
							legendHitBoxes: e,
							options: {
								align: i,
								labels: { padding: s },
								rtl: n,
							},
						} = this,
						o = ti(n, this.left, this.width);
					if (this.isHorizontal()) {
						let n = 0,
							r = a(
								i,
								this.left + s,
								this.right - this.lineWidths[n],
							);
						for (const l of e)
							n !== l.row &&
								((n = l.row),
								(r = a(
									i,
									this.left + s,
									this.right - this.lineWidths[n],
								))),
								(l.top += this.top + t + s),
								(l.left = o.leftForLtr(o.x(r), l.width)),
								(r += l.width + s);
					} else {
						let n = 0,
							r = a(
								i,
								this.top + t + s,
								this.bottom - this.columnSizes[n].height,
							);
						for (const l of e)
							l.col !== n &&
								((n = l.col),
								(r = a(
									i,
									this.top + t + s,
									this.bottom - this.columnSizes[n].height,
								))),
								(l.top = r),
								(l.left += this.left + s),
								(l.left = o.leftForLtr(o.x(l.left), l.width)),
								(r += l.height + s);
					}
				}
				isHorizontal() {
					return (
						"top" === this.options.position ||
						"bottom" === this.options.position
					);
				}
				draw() {
					if (this.options.display) {
						const t = this.ctx;
						qt(t, this), this._draw(), Kt(t);
					}
				}
				_draw() {
					const {
							options: t,
							columnSizes: e,
							lineWidths: i,
							ctx: s,
						} = this,
						{ align: n, labels: o } = t,
						r = Wt.color,
						l = ti(t.rtl, this.left, this.width),
						h = le(o.font),
						{ color: c, padding: d } = o,
						u = h.size,
						f = u / 2;
					let p;
					this.drawTitle(),
						(s.textAlign = l.textAlign("left")),
						(s.textBaseline = "middle"),
						(s.lineWidth = 0.5),
						(s.font = h.string);
					const {
							boxWidth: m,
							boxHeight: b,
							itemHeight: x,
						} = ao(o, u),
						_ = this.isHorizontal(),
						y = this._computeTitleHeight();
					(p = _
						? {
								x: a(n, this.left + d, this.right - i[0]),
								y: this.top + d + y,
								line: 0,
							}
						: {
								x: this.left + d,
								y: a(
									n,
									this.top + y + d,
									this.bottom - e[0].height,
								),
								line: 0,
							}),
						ei(this.ctx, t.textDirection);
					const v = x + d;
					this.legendItems.forEach((w, M) => {
						(s.strokeStyle = w.fontColor || c),
							(s.fillStyle = w.fontColor || c);
						const k = s.measureText(w.text).width,
							S = l.textAlign(
								w.textAlign || (w.textAlign = o.textAlign),
							),
							P = m + f + k;
						let O = p.x,
							D = p.y;
						l.setWidth(this.width),
							_
								? M > 0 &&
									O + P + d > this.right &&
									((D = p.y += v),
									p.line++,
									(O = p.x =
										a(
											n,
											this.left + d,
											this.right - i[p.line],
										)))
								: M > 0 &&
									D + v > this.bottom &&
									((O = p.x = O + e[p.line].width + d),
									p.line++,
									(D = p.y =
										a(
											n,
											this.top + y + d,
											this.bottom - e[p.line].height,
										)));
						!(function (t, e, i) {
							if (isNaN(m) || m <= 0 || isNaN(b) || b < 0) return;
							s.save();
							const n = g(i.lineWidth, 1);
							if (
								((s.fillStyle = g(i.fillStyle, r)),
								(s.lineCap = g(i.lineCap, "butt")),
								(s.lineDashOffset = g(i.lineDashOffset, 0)),
								(s.lineJoin = g(i.lineJoin, "miter")),
								(s.lineWidth = n),
								(s.strokeStyle = g(i.strokeStyle, r)),
								s.setLineDash(g(i.lineDash, [])),
								o.usePointStyle)
							) {
								const o = {
										radius: (m * Math.SQRT2) / 2,
										pointStyle: i.pointStyle,
										rotation: i.rotation,
										borderWidth: n,
									},
									a = l.xPlus(t, m / 2);
								Ut(s, o, a, e + f);
							} else {
								const o = e + Math.max((u - b) / 2, 0),
									a = l.leftForLtr(t, m),
									r = ae(i.borderRadius);
								s.beginPath(),
									Object.values(r).some((t) => 0 !== t)
										? te(s, {
												x: a,
												y: o,
												w: m,
												h: b,
												radius: r,
											})
										: s.rect(a, o, m, b),
									s.fill(),
									0 !== n && s.stroke();
							}
							s.restore();
						})(l.x(O), D, w),
							(O = ((t, e, i, s) =>
								t === (s ? "left" : "right")
									? i
									: "center" === t
										? (e + i) / 2
										: e)(
								S,
								O + m + f,
								_ ? O + P : this.right,
								t.rtl,
							)),
							(function (t, e, i) {
								Qt(s, i.text, t, e + x / 2, h, {
									strikethrough: i.hidden,
									textAlign: l.textAlign(i.textAlign),
								});
							})(l.x(O), D, w),
							_ ? (p.x += P + d) : (p.y += v);
					}),
						ii(this.ctx, t.textDirection);
				}
				drawTitle() {
					const t = this.options,
						e = t.title,
						i = le(e.font),
						s = re(e.padding);
					if (!e.display) return;
					const n = ti(t.rtl, this.left, this.width),
						r = this.ctx,
						l = e.position,
						h = i.size / 2,
						c = s.top + h;
					let d,
						u = this.left,
						f = this.width;
					if (this.isHorizontal())
						(f = Math.max(...this.lineWidths)),
							(d = this.top + c),
							(u = a(t.align, u, this.right - f));
					else {
						const e = this.columnSizes.reduce(
							(t, e) => Math.max(t, e.height),
							0,
						);
						d =
							c +
							a(
								t.align,
								this.top,
								this.bottom -
									e -
									t.labels.padding -
									this._computeTitleHeight(),
							);
					}
					const g = a(l, u, u + f);
					(r.textAlign = n.textAlign(o(l))),
						(r.textBaseline = "middle"),
						(r.strokeStyle = e.color),
						(r.fillStyle = e.color),
						(r.font = i.string),
						Qt(r, e.text, g, d, i);
				}
				_computeTitleHeight() {
					const t = this.options.title,
						e = le(t.font),
						i = re(t.padding);
					return t.display ? e.lineHeight + i.height : 0;
				}
				_getLegendItemAt(t, e) {
					let i, s, n;
					if (
						t >= this.left &&
						t <= this.right &&
						e >= this.top &&
						e <= this.bottom
					)
						for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
							if (
								((s = n[i]),
								t >= s.left &&
									t <= s.left + s.width &&
									e >= s.top &&
									e <= s.top + s.height)
							)
								return this.legendItems[i];
					return null;
				}
				handleEvent(t) {
					const e = this.options;
					if (
						!(function (t, e) {
							if ("mousemove" === t && (e.onHover || e.onLeave))
								return !0;
							if (e.onClick && ("click" === t || "mouseup" === t))
								return !0;
							return !1;
						})(t.type, e)
					)
						return;
					const i = this._getLegendItemAt(t.x, t.y);
					if ("mousemove" === t.type) {
						const o = this._hoveredItem,
							a =
								((n = i),
								null !== (s = o) &&
									null !== n &&
									s.datasetIndex === n.datasetIndex &&
									s.index === n.index);
						o && !a && m(e.onLeave, [t, o, this], this),
							(this._hoveredItem = i),
							i && !a && m(e.onHover, [t, i, this], this);
					} else i && m(e.onClick, [t, i, this], this);
					var s, n;
				}
			}
			var lo = {
				id: "legend",
				_element: ro,
				start(t, e, i) {
					const s = (t.legend = new ro({
						ctx: t.ctx,
						options: i,
						chart: t,
					}));
					fs.configure(t, s, i), fs.addBox(t, s);
				},
				stop(t) {
					fs.removeBox(t, t.legend), delete t.legend;
				},
				beforeUpdate(t, e, i) {
					const s = t.legend;
					fs.configure(t, s, i), (s.options = i);
				},
				afterUpdate(t) {
					const e = t.legend;
					e.buildLabels(), e.adjustHitBoxes();
				},
				afterEvent(t, e) {
					e.replay || t.legend.handleEvent(e.event);
				},
				defaults: {
					display: !0,
					position: "top",
					align: "center",
					fullSize: !0,
					reverse: !1,
					weight: 1e3,
					onClick(t, e, i) {
						const s = e.datasetIndex,
							n = i.chart;
						n.isDatasetVisible(s)
							? (n.hide(s), (e.hidden = !0))
							: (n.show(s), (e.hidden = !1));
					},
					onHover: null,
					onLeave: null,
					labels: {
						color: (t) => t.chart.options.color,
						boxWidth: 40,
						padding: 10,
						generateLabels(t) {
							const e = t.data.datasets,
								{
									labels: {
										usePointStyle: i,
										pointStyle: s,
										textAlign: n,
										color: o,
									},
								} = t.legend.options;
							return t._getSortedDatasetMetas().map((t) => {
								const a = t.controller.getStyle(i ? 0 : void 0),
									r = re(a.borderWidth);
								return {
									text: e[t.index].label,
									fillStyle: a.backgroundColor,
									fontColor: o,
									hidden: !t.visible,
									lineCap: a.borderCapStyle,
									lineDash: a.borderDash,
									lineDashOffset: a.borderDashOffset,
									lineJoin: a.borderJoinStyle,
									lineWidth: (r.width + r.height) / 4,
									strokeStyle: a.borderColor,
									pointStyle: s || a.pointStyle,
									rotation: a.rotation,
									textAlign: n || a.textAlign,
									borderRadius: 0,
									datasetIndex: t.index,
								};
							}, this);
						},
					},
					title: {
						color: (t) => t.chart.options.color,
						display: !1,
						position: "center",
						text: "",
					},
				},
				descriptors: {
					_scriptable: (t) => !t.startsWith("on"),
					labels: {
						_scriptable: (t) =>
							!["generateLabels", "filter", "sort"].includes(t),
					},
				},
			};
			class ho extends Cs {
				constructor(t) {
					super(),
						(this.chart = t.chart),
						(this.options = t.options),
						(this.ctx = t.ctx),
						(this._padding = void 0),
						(this.top = void 0),
						(this.bottom = void 0),
						(this.left = void 0),
						(this.right = void 0),
						(this.width = void 0),
						(this.height = void 0),
						(this.position = void 0),
						(this.weight = void 0),
						(this.fullSize = void 0);
				}
				update(t, e) {
					const i = this.options;
					if (((this.left = 0), (this.top = 0), !i.display))
						return void (this.width =
							this.height =
							this.right =
							this.bottom =
								0);
					(this.width = this.right = t),
						(this.height = this.bottom = e);
					const s = c(i.text) ? i.text.length : 1;
					this._padding = re(i.padding);
					const n = s * le(i.font).lineHeight + this._padding.height;
					this.isHorizontal() ? (this.height = n) : (this.width = n);
				}
				isHorizontal() {
					const t = this.options.position;
					return "top" === t || "bottom" === t;
				}
				_drawArgs(t) {
					const {
							top: e,
							left: i,
							bottom: s,
							right: n,
							options: o,
						} = this,
						r = o.align;
					let l,
						h,
						c,
						d = 0;
					return (
						this.isHorizontal()
							? ((h = a(r, i, n)), (c = e + t), (l = n - i))
							: ("left" === o.position
									? ((h = i + t),
										(c = a(r, s, e)),
										(d = -0.5 * A))
									: ((h = n - t),
										(c = a(r, e, s)),
										(d = 0.5 * A)),
								(l = s - e)),
						{ titleX: h, titleY: c, maxWidth: l, rotation: d }
					);
				}
				draw() {
					const t = this.ctx,
						e = this.options;
					if (!e.display) return;
					const i = le(e.font),
						s = i.lineHeight / 2 + this._padding.top,
						{
							titleX: n,
							titleY: a,
							maxWidth: r,
							rotation: l,
						} = this._drawArgs(s);
					Qt(t, e.text, 0, 0, i, {
						color: e.color,
						maxWidth: r,
						rotation: l,
						textAlign: o(e.align),
						textBaseline: "middle",
						translation: [n, a],
					});
				}
			}
			var co = {
				id: "title",
				_element: ho,
				start(t, e, i) {
					!(function (t, e) {
						const i = new ho({ ctx: t.ctx, options: e, chart: t });
						fs.configure(t, i, e),
							fs.addBox(t, i),
							(t.titleBlock = i);
					})(t, i);
				},
				stop(t) {
					const e = t.titleBlock;
					fs.removeBox(t, e), delete t.titleBlock;
				},
				beforeUpdate(t, e, i) {
					const s = t.titleBlock;
					fs.configure(t, s, i), (s.options = i);
				},
				defaults: {
					align: "center",
					display: !1,
					font: { weight: "bold" },
					fullSize: !0,
					padding: 10,
					position: "top",
					text: "",
					weight: 2e3,
				},
				defaultRoutes: { color: "color" },
				descriptors: { _scriptable: !0, _indexable: !1 },
			};
			const uo = new WeakMap();
			var fo = {
				id: "subtitle",
				start(t, e, i) {
					const s = new ho({ ctx: t.ctx, options: i, chart: t });
					fs.configure(t, s, i), fs.addBox(t, s), uo.set(t, s);
				},
				stop(t) {
					fs.removeBox(t, uo.get(t)), uo.delete(t);
				},
				beforeUpdate(t, e, i) {
					const s = uo.get(t);
					fs.configure(t, s, i), (s.options = i);
				},
				defaults: {
					align: "center",
					display: !1,
					font: { weight: "normal" },
					fullSize: !0,
					padding: 0,
					position: "top",
					text: "",
					weight: 1500,
				},
				defaultRoutes: { color: "color" },
				descriptors: { _scriptable: !0, _indexable: !1 },
			};
			const go = {
				average(t) {
					if (!t.length) return !1;
					let e,
						i,
						s = 0,
						n = 0,
						o = 0;
					for (e = 0, i = t.length; e < i; ++e) {
						const i = t[e].element;
						if (i && i.hasValue()) {
							const t = i.tooltipPosition();
							(s += t.x), (n += t.y), ++o;
						}
					}
					return { x: s / o, y: n / o };
				},
				nearest(t, e) {
					if (!t.length) return !1;
					let i,
						s,
						n,
						o = e.x,
						a = e.y,
						r = Number.POSITIVE_INFINITY;
					for (i = 0, s = t.length; i < s; ++i) {
						const s = t[i].element;
						if (s && s.hasValue()) {
							const t = X(e, s.getCenterPoint());
							t < r && ((r = t), (n = s));
						}
					}
					if (n) {
						const t = n.tooltipPosition();
						(o = t.x), (a = t.y);
					}
					return { x: o, y: a };
				},
			};
			function po(t, e) {
				return (
					e && (c(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
					t
				);
			}
			function mo(t) {
				return ("string" == typeof t || t instanceof String) &&
					t.indexOf("\n") > -1
					? t.split("\n")
					: t;
			}
			function bo(t, e) {
				const { element: i, datasetIndex: s, index: n } = e,
					o = t.getDatasetMeta(s).controller,
					{ label: a, value: r } = o.getLabelAndValue(n);
				return {
					chart: t,
					label: a,
					parsed: o.getParsed(n),
					raw: t.data.datasets[s].data[n],
					formattedValue: r,
					dataset: o.getDataset(),
					dataIndex: n,
					datasetIndex: s,
					element: i,
				};
			}
			function xo(t, e) {
				const i = t._chart.ctx,
					{ body: s, footer: n, title: o } = t,
					{ boxWidth: a, boxHeight: r } = e,
					l = le(e.bodyFont),
					h = le(e.titleFont),
					c = le(e.footerFont),
					d = o.length,
					u = n.length,
					f = s.length,
					g = re(e.padding);
				let p = g.height,
					m = 0,
					x = s.reduce(
						(t, e) =>
							t +
							e.before.length +
							e.lines.length +
							e.after.length,
						0,
					);
				if (
					((x += t.beforeBody.length + t.afterBody.length),
					d &&
						(p +=
							d * h.lineHeight +
							(d - 1) * e.titleSpacing +
							e.titleMarginBottom),
					x)
				) {
					p +=
						f *
							(e.displayColors
								? Math.max(r, l.lineHeight)
								: l.lineHeight) +
						(x - f) * l.lineHeight +
						(x - 1) * e.bodySpacing;
				}
				u &&
					(p +=
						e.footerMarginTop +
						u * c.lineHeight +
						(u - 1) * e.footerSpacing);
				let _ = 0;
				const y = function (t) {
					m = Math.max(m, i.measureText(t).width + _);
				};
				return (
					i.save(),
					(i.font = h.string),
					b(t.title, y),
					(i.font = l.string),
					b(t.beforeBody.concat(t.afterBody), y),
					(_ = e.displayColors ? a + 2 + e.boxPadding : 0),
					b(s, (t) => {
						b(t.before, y), b(t.lines, y), b(t.after, y);
					}),
					(_ = 0),
					(i.font = c.string),
					b(t.footer, y),
					i.restore(),
					(m += g.width),
					{ width: m, height: p }
				);
			}
			function _o(t, e, i, s) {
				const { x: n, width: o } = i,
					{
						width: a,
						chartArea: { left: r, right: l },
					} = t;
				let h = "center";
				return (
					"center" === s
						? (h = n <= (r + l) / 2 ? "left" : "right")
						: n <= o / 2
							? (h = "left")
							: n >= a - o / 2 && (h = "right"),
					(function (t, e, i, s) {
						const { x: n, width: o } = s,
							a = i.caretSize + i.caretPadding;
						return (
							("left" === t && n + o + a > e.width) ||
							("right" === t && n - o - a < 0) ||
							void 0
						);
					})(h, t, e, i) && (h = "center"),
					h
				);
			}
			function yo(t, e, i) {
				const s =
					e.yAlign ||
					(function (t, e) {
						const { y: i, height: s } = e;
						return i < s / 2
							? "top"
							: i > t.height - s / 2
								? "bottom"
								: "center";
					})(t, i);
				return { xAlign: e.xAlign || _o(t, e, i, s), yAlign: s };
			}
			function vo(t, e, i, s) {
				const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
					{ xAlign: r, yAlign: l } = i,
					h = n + o,
					{
						topLeft: c,
						topRight: d,
						bottomLeft: u,
						bottomRight: f,
					} = ae(a);
				let g = (function (t, e) {
					let { x: i, width: s } = t;
					return (
						"right" === e
							? (i -= s)
							: "center" === e && (i -= s / 2),
						i
					);
				})(e, r);
				const p = (function (t, e, i) {
					let { y: s, height: n } = t;
					return (
						"top" === e
							? (s += i)
							: (s -= "bottom" === e ? n + i : n / 2),
						s
					);
				})(e, l, h);
				return (
					"center" === l
						? "left" === r
							? (g += h)
							: "right" === r && (g -= h)
						: "left" === r
							? (g -= Math.max(c, u) + o)
							: "right" === r && (g += Math.max(d, f) + o),
					{
						x: G(g, 0, s.width - e.width),
						y: G(p, 0, s.height - e.height),
					}
				);
			}
			function wo(t, e, i) {
				const s = re(i.padding);
				return "center" === e
					? t.x + t.width / 2
					: "right" === e
						? t.x + t.width - s.right
						: t.x + s.left;
			}
			function Mo(t) {
				return po([], mo(t));
			}
			function ko(t, e) {
				const i =
					e &&
					e.dataset &&
					e.dataset.tooltip &&
					e.dataset.tooltip.callbacks;
				return i ? t.override(i) : t;
			}
			class So extends Cs {
				constructor(t) {
					super(),
						(this.opacity = 0),
						(this._active = []),
						(this._chart = t._chart),
						(this._eventPosition = void 0),
						(this._size = void 0),
						(this._cachedAnimations = void 0),
						(this._tooltipItems = []),
						(this.$animations = void 0),
						(this.$context = void 0),
						(this.options = t.options),
						(this.dataPoints = void 0),
						(this.title = void 0),
						(this.beforeBody = void 0),
						(this.body = void 0),
						(this.afterBody = void 0),
						(this.footer = void 0),
						(this.xAlign = void 0),
						(this.yAlign = void 0),
						(this.x = void 0),
						(this.y = void 0),
						(this.height = void 0),
						(this.width = void 0),
						(this.caretX = void 0),
						(this.caretY = void 0),
						(this.labelColors = void 0),
						(this.labelPointStyles = void 0),
						(this.labelTextColors = void 0);
				}
				initialize(t) {
					(this.options = t),
						(this._cachedAnimations = void 0),
						(this.$context = void 0);
				}
				_resolveAnimations() {
					const t = this._cachedAnimations;
					if (t) return t;
					const e = this._chart,
						i = this.options.setContext(this.getContext()),
						s = i.enabled && e.options.animation && i.animations,
						n = new pi(this._chart, s);
					return (
						s._cacheable &&
							(this._cachedAnimations = Object.freeze(n)),
						n
					);
				}
				getContext() {
					return (
						this.$context ||
						(this.$context =
							((t = this._chart.getContext()),
							(e = this),
							(i = this._tooltipItems),
							ce(t, {
								tooltip: e,
								tooltipItems: i,
								type: "tooltip",
							})))
					);
					var t, e, i;
				}
				getTitle(t, e) {
					const { callbacks: i } = e,
						s = i.beforeTitle.apply(this, [t]),
						n = i.title.apply(this, [t]),
						o = i.afterTitle.apply(this, [t]);
					let a = [];
					return (
						(a = po(a, mo(s))),
						(a = po(a, mo(n))),
						(a = po(a, mo(o))),
						a
					);
				}
				getBeforeBody(t, e) {
					return Mo(e.callbacks.beforeBody.apply(this, [t]));
				}
				getBody(t, e) {
					const { callbacks: i } = e,
						s = [];
					return (
						b(t, (t) => {
							const e = { before: [], lines: [], after: [] },
								n = ko(i, t);
							po(e.before, mo(n.beforeLabel.call(this, t))),
								po(e.lines, n.label.call(this, t)),
								po(e.after, mo(n.afterLabel.call(this, t))),
								s.push(e);
						}),
						s
					);
				}
				getAfterBody(t, e) {
					return Mo(e.callbacks.afterBody.apply(this, [t]));
				}
				getFooter(t, e) {
					const { callbacks: i } = e,
						s = i.beforeFooter.apply(this, [t]),
						n = i.footer.apply(this, [t]),
						o = i.afterFooter.apply(this, [t]);
					let a = [];
					return (
						(a = po(a, mo(s))),
						(a = po(a, mo(n))),
						(a = po(a, mo(o))),
						a
					);
				}
				_createItems(t) {
					const e = this._active,
						i = this._chart.data,
						s = [],
						n = [],
						o = [];
					let a,
						r,
						l = [];
					for (a = 0, r = e.length; a < r; ++a)
						l.push(bo(this._chart, e[a]));
					return (
						t.filter &&
							(l = l.filter((e, s, n) => t.filter(e, s, n, i))),
						t.itemSort &&
							(l = l.sort((e, s) => t.itemSort(e, s, i))),
						b(l, (e) => {
							const i = ko(t.callbacks, e);
							s.push(i.labelColor.call(this, e)),
								n.push(i.labelPointStyle.call(this, e)),
								o.push(i.labelTextColor.call(this, e));
						}),
						(this.labelColors = s),
						(this.labelPointStyles = n),
						(this.labelTextColors = o),
						(this.dataPoints = l),
						l
					);
				}
				update(t, e) {
					const i = this.options.setContext(this.getContext()),
						s = this._active;
					let n,
						o = [];
					if (s.length) {
						const t = go[i.position].call(
							this,
							s,
							this._eventPosition,
						);
						(o = this._createItems(i)),
							(this.title = this.getTitle(o, i)),
							(this.beforeBody = this.getBeforeBody(o, i)),
							(this.body = this.getBody(o, i)),
							(this.afterBody = this.getAfterBody(o, i)),
							(this.footer = this.getFooter(o, i));
						const e = (this._size = xo(this, i)),
							a = Object.assign({}, t, e),
							r = yo(this._chart, i, a),
							l = vo(i, a, r, this._chart);
						(this.xAlign = r.xAlign),
							(this.yAlign = r.yAlign),
							(n = {
								opacity: 1,
								x: l.x,
								y: l.y,
								width: e.width,
								height: e.height,
								caretX: t.x,
								caretY: t.y,
							});
					} else 0 !== this.opacity && (n = { opacity: 0 });
					(this._tooltipItems = o),
						(this.$context = void 0),
						n && this._resolveAnimations().update(this, n),
						t &&
							i.external &&
							i.external.call(this, {
								chart: this._chart,
								tooltip: this,
								replay: e,
							});
				}
				drawCaret(t, e, i, s) {
					const n = this.getCaretPosition(t, i, s);
					e.lineTo(n.x1, n.y1),
						e.lineTo(n.x2, n.y2),
						e.lineTo(n.x3, n.y3);
				}
				getCaretPosition(t, e, i) {
					const { xAlign: s, yAlign: n } = this,
						{ caretSize: o, cornerRadius: a } = i,
						{
							topLeft: r,
							topRight: l,
							bottomLeft: h,
							bottomRight: c,
						} = ae(a),
						{ x: d, y: u } = t,
						{ width: f, height: g } = e;
					let p, m, b, x, _, y;
					return (
						"center" === n
							? ((_ = u + g / 2),
								"left" === s
									? ((p = d),
										(m = p - o),
										(x = _ + o),
										(y = _ - o))
									: ((p = d + f),
										(m = p + o),
										(x = _ - o),
										(y = _ + o)),
								(b = p))
							: ((m =
									"left" === s
										? d + Math.max(r, h) + o
										: "right" === s
											? d + f - Math.max(l, c) - o
											: this.caretX),
								"top" === n
									? ((x = u),
										(_ = x - o),
										(p = m - o),
										(b = m + o))
									: ((x = u + g),
										(_ = x + o),
										(p = m + o),
										(b = m - o)),
								(y = x)),
						{ x1: p, x2: m, x3: b, y1: x, y2: _, y3: y }
					);
				}
				drawTitle(t, e, i) {
					const s = this.title,
						n = s.length;
					let o, a, r;
					if (n) {
						const l = ti(i.rtl, this.x, this.width);
						for (
							t.x = wo(this, i.titleAlign, i),
								e.textAlign = l.textAlign(i.titleAlign),
								e.textBaseline = "middle",
								o = le(i.titleFont),
								a = i.titleSpacing,
								e.fillStyle = i.titleColor,
								e.font = o.string,
								r = 0;
							r < n;
							++r
						)
							e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2),
								(t.y += o.lineHeight + a),
								r + 1 === n && (t.y += i.titleMarginBottom - a);
					}
				}
				_drawColorBox(t, e, i, s, n) {
					const o = this.labelColors[i],
						a = this.labelPointStyles[i],
						{ boxHeight: r, boxWidth: l, boxPadding: h } = n,
						c = le(n.bodyFont),
						d = wo(this, "left", n),
						u = s.x(d),
						f = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0,
						g = e.y + f;
					if (n.usePointStyle) {
						const e = {
								radius: Math.min(l, r) / 2,
								pointStyle: a.pointStyle,
								rotation: a.rotation,
								borderWidth: 1,
							},
							i = s.leftForLtr(u, l) + l / 2,
							h = g + r / 2;
						(t.strokeStyle = n.multiKeyBackground),
							(t.fillStyle = n.multiKeyBackground),
							Ut(t, e, i, h),
							(t.strokeStyle = o.borderColor),
							(t.fillStyle = o.backgroundColor),
							Ut(t, e, i, h);
					} else {
						(t.lineWidth = o.borderWidth || 1),
							(t.strokeStyle = o.borderColor),
							t.setLineDash(o.borderDash || []),
							(t.lineDashOffset = o.borderDashOffset || 0);
						const e = s.leftForLtr(u, l - h),
							i = s.leftForLtr(s.xPlus(u, 1), l - h - 2),
							a = ae(o.borderRadius);
						Object.values(a).some((t) => 0 !== t)
							? (t.beginPath(),
								(t.fillStyle = n.multiKeyBackground),
								te(t, { x: e, y: g, w: l, h: r, radius: a }),
								t.fill(),
								t.stroke(),
								(t.fillStyle = o.backgroundColor),
								t.beginPath(),
								te(t, {
									x: i,
									y: g + 1,
									w: l - 2,
									h: r - 2,
									radius: a,
								}),
								t.fill())
							: ((t.fillStyle = n.multiKeyBackground),
								t.fillRect(e, g, l, r),
								t.strokeRect(e, g, l, r),
								(t.fillStyle = o.backgroundColor),
								t.fillRect(i, g + 1, l - 2, r - 2));
					}
					t.fillStyle = this.labelTextColors[i];
				}
				drawBody(t, e, i) {
					const { body: s } = this,
						{
							bodySpacing: n,
							bodyAlign: o,
							displayColors: a,
							boxHeight: r,
							boxWidth: l,
							boxPadding: h,
						} = i,
						c = le(i.bodyFont);
					let d = c.lineHeight,
						u = 0;
					const f = ti(i.rtl, this.x, this.width),
						g = function (i) {
							e.fillText(i, f.x(t.x + u), t.y + d / 2),
								(t.y += d + n);
						},
						p = f.textAlign(o);
					let m, x, _, y, v, w, M;
					for (
						e.textAlign = o,
							e.textBaseline = "middle",
							e.font = c.string,
							t.x = wo(this, p, i),
							e.fillStyle = i.bodyColor,
							b(this.beforeBody, g),
							u =
								a && "right" !== p
									? "center" === o
										? l / 2 + h
										: l + 2 + h
									: 0,
							y = 0,
							w = s.length;
						y < w;
						++y
					) {
						for (
							m = s[y],
								x = this.labelTextColors[y],
								e.fillStyle = x,
								b(m.before, g),
								_ = m.lines,
								a &&
									_.length &&
									(this._drawColorBox(e, t, y, f, i),
									(d = Math.max(c.lineHeight, r))),
								v = 0,
								M = _.length;
							v < M;
							++v
						)
							g(_[v]), (d = c.lineHeight);
						b(m.after, g);
					}
					(u = 0),
						(d = c.lineHeight),
						b(this.afterBody, g),
						(t.y -= n);
				}
				drawFooter(t, e, i) {
					const s = this.footer,
						n = s.length;
					let o, a;
					if (n) {
						const r = ti(i.rtl, this.x, this.width);
						for (
							t.x = wo(this, i.footerAlign, i),
								t.y += i.footerMarginTop,
								e.textAlign = r.textAlign(i.footerAlign),
								e.textBaseline = "middle",
								o = le(i.footerFont),
								e.fillStyle = i.footerColor,
								e.font = o.string,
								a = 0;
							a < n;
							++a
						)
							e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
								(t.y += o.lineHeight + i.footerSpacing);
					}
				}
				drawBackground(t, e, i, s) {
					const { xAlign: n, yAlign: o } = this,
						{ x: a, y: r } = t,
						{ width: l, height: h } = i,
						{
							topLeft: c,
							topRight: d,
							bottomLeft: u,
							bottomRight: f,
						} = ae(s.cornerRadius);
					(e.fillStyle = s.backgroundColor),
						(e.strokeStyle = s.borderColor),
						(e.lineWidth = s.borderWidth),
						e.beginPath(),
						e.moveTo(a + c, r),
						"top" === o && this.drawCaret(t, e, i, s),
						e.lineTo(a + l - d, r),
						e.quadraticCurveTo(a + l, r, a + l, r + d),
						"center" === o &&
							"right" === n &&
							this.drawCaret(t, e, i, s),
						e.lineTo(a + l, r + h - f),
						e.quadraticCurveTo(a + l, r + h, a + l - f, r + h),
						"bottom" === o && this.drawCaret(t, e, i, s),
						e.lineTo(a + u, r + h),
						e.quadraticCurveTo(a, r + h, a, r + h - u),
						"center" === o &&
							"left" === n &&
							this.drawCaret(t, e, i, s),
						e.lineTo(a, r + c),
						e.quadraticCurveTo(a, r, a + c, r),
						e.closePath(),
						e.fill(),
						s.borderWidth > 0 && e.stroke();
				}
				_updateAnimationTarget(t) {
					const e = this._chart,
						i = this.$animations,
						s = i && i.x,
						n = i && i.y;
					if (s || n) {
						const i = go[t.position].call(
							this,
							this._active,
							this._eventPosition,
						);
						if (!i) return;
						const o = (this._size = xo(this, t)),
							a = Object.assign({}, i, this._size),
							r = yo(e, t, a),
							l = vo(t, a, r, e);
						(s._to === l.x && n._to === l.y) ||
							((this.xAlign = r.xAlign),
							(this.yAlign = r.yAlign),
							(this.width = o.width),
							(this.height = o.height),
							(this.caretX = i.x),
							(this.caretY = i.y),
							this._resolveAnimations().update(this, l));
					}
				}
				draw(t) {
					const e = this.options.setContext(this.getContext());
					let i = this.opacity;
					if (!i) return;
					this._updateAnimationTarget(e);
					const s = { width: this.width, height: this.height },
						n = { x: this.x, y: this.y };
					i = Math.abs(i) < 0.001 ? 0 : i;
					const o = re(e.padding),
						a =
							this.title.length ||
							this.beforeBody.length ||
							this.body.length ||
							this.afterBody.length ||
							this.footer.length;
					e.enabled &&
						a &&
						(t.save(),
						(t.globalAlpha = i),
						this.drawBackground(n, t, s, e),
						ei(t, e.textDirection),
						(n.y += o.top),
						this.drawTitle(n, t, e),
						this.drawBody(n, t, e),
						this.drawFooter(n, t, e),
						ii(t, e.textDirection),
						t.restore());
				}
				getActiveElements() {
					return this._active || [];
				}
				setActiveElements(t, e) {
					const i = this._active,
						s = t.map(({ datasetIndex: t, index: e }) => {
							const i = this._chart.getDatasetMeta(t);
							if (!i)
								throw new Error(
									"Cannot find a dataset at index " + t,
								);
							return {
								datasetIndex: t,
								element: i.data[e],
								index: e,
							};
						}),
						n = !x(i, s),
						o = this._positionChanged(s, e);
					(n || o) &&
						((this._active = s),
						(this._eventPosition = e),
						this.update(!0));
				}
				handleEvent(t, e) {
					const i = this.options,
						s = this._active || [];
					let n = !1,
						o = [];
					"mouseout" !== t.type &&
						((o = this._chart.getElementsAtEventForMode(
							t,
							i.mode,
							i,
							e,
						)),
						i.reverse && o.reverse());
					const a = this._positionChanged(o, t);
					return (
						(n = e || !x(o, s) || a),
						n &&
							((this._active = o),
							(i.enabled || i.external) &&
								((this._eventPosition = { x: t.x, y: t.y }),
								this.update(!0, e))),
						n
					);
				}
				_positionChanged(t, e) {
					const { caretX: i, caretY: s, options: n } = this,
						o = go[n.position].call(this, t, e);
					return !1 !== o && (i !== o.x || s !== o.y);
				}
			}
			So.positioners = go;
			var Po = {
					id: "tooltip",
					_element: So,
					positioners: go,
					afterInit(t, e, i) {
						i && (t.tooltip = new So({ _chart: t, options: i }));
					},
					beforeUpdate(t, e, i) {
						t.tooltip && t.tooltip.initialize(i);
					},
					reset(t, e, i) {
						t.tooltip && t.tooltip.initialize(i);
					},
					afterDraw(t) {
						const e = t.tooltip,
							i = { tooltip: e };
						!1 !== t.notifyPlugins("beforeTooltipDraw", i) &&
							(e && e.draw(t.ctx),
							t.notifyPlugins("afterTooltipDraw", i));
					},
					afterEvent(t, e) {
						if (t.tooltip) {
							const i = e.replay;
							t.tooltip.handleEvent(e.event, i) &&
								(e.changed = !0);
						}
					},
					defaults: {
						enabled: !0,
						external: null,
						position: "average",
						backgroundColor: "rgba(0,0,0,0.8)",
						titleColor: "#fff",
						titleFont: { weight: "bold" },
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleAlign: "left",
						bodyColor: "#fff",
						bodySpacing: 2,
						bodyFont: {},
						bodyAlign: "left",
						footerColor: "#fff",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFont: { weight: "bold" },
						footerAlign: "left",
						padding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						boxHeight: (t, e) => e.bodyFont.size,
						boxWidth: (t, e) => e.bodyFont.size,
						multiKeyBackground: "#fff",
						displayColors: !0,
						boxPadding: 0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						animation: { duration: 400, easing: "easeOutQuart" },
						animations: {
							numbers: {
								type: "number",
								properties: [
									"x",
									"y",
									"width",
									"height",
									"caretX",
									"caretY",
								],
							},
							opacity: { easing: "linear", duration: 200 },
						},
						callbacks: {
							beforeTitle: r,
							title(t) {
								if (t.length > 0) {
									const e = t[0],
										i = e.chart.data.labels,
										s = i ? i.length : 0;
									if (
										this &&
										this.options &&
										"dataset" === this.options.mode
									)
										return e.dataset.label || "";
									if (e.label) return e.label;
									if (s > 0 && e.dataIndex < s)
										return i[e.dataIndex];
								}
								return "";
							},
							afterTitle: r,
							beforeBody: r,
							beforeLabel: r,
							label(t) {
								if (
									this &&
									this.options &&
									"dataset" === this.options.mode
								)
									return (
										t.label + ": " + t.formattedValue ||
										t.formattedValue
									);
								let e = t.dataset.label || "";
								e && (e += ": ");
								const i = t.formattedValue;
								return h(i) || (e += i), e;
							},
							labelColor(t) {
								const e = t.chart
									.getDatasetMeta(t.datasetIndex)
									.controller.getStyle(t.dataIndex);
								return {
									borderColor: e.borderColor,
									backgroundColor: e.backgroundColor,
									borderWidth: e.borderWidth,
									borderDash: e.borderDash,
									borderDashOffset: e.borderDashOffset,
									borderRadius: 0,
								};
							},
							labelTextColor() {
								return this.options.bodyColor;
							},
							labelPointStyle(t) {
								const e = t.chart
									.getDatasetMeta(t.datasetIndex)
									.controller.getStyle(t.dataIndex);
								return {
									pointStyle: e.pointStyle,
									rotation: e.rotation,
								};
							},
							afterLabel: r,
							afterBody: r,
							beforeFooter: r,
							footer: r,
							afterFooter: r,
						},
					},
					defaultRoutes: {
						bodyFont: "font",
						footerFont: "font",
						titleFont: "font",
					},
					descriptors: {
						_scriptable: (t) =>
							"filter" !== t &&
							"itemSort" !== t &&
							"external" !== t,
						_indexable: !1,
						callbacks: { _scriptable: !1, _indexable: !1 },
						animation: { _fallback: !1 },
						animations: { _fallback: "animation" },
					},
					additionalOptionScopes: ["interaction"],
				},
				Oo = Object.freeze({
					__proto__: null,
					Decimation: Nn,
					Filler: oo,
					Legend: lo,
					SubTitle: fo,
					Title: co,
					Tooltip: Po,
				});
			function Do(t, e, i) {
				const s = t.indexOf(e);
				if (-1 === s)
					return ((t, e, i) =>
						"string" == typeof e
							? t.push(e) - 1
							: isNaN(e)
								? null
								: i)(t, e, i);
				return s !== t.lastIndexOf(e) ? i : s;
			}
			class Co extends js {
				constructor(t) {
					super(t),
						(this._startValue = void 0),
						(this._valueRange = 0);
				}
				parse(t, e) {
					if (h(t)) return null;
					const i = this.getLabels();
					return ((t, e) =>
						null === t ? null : G(Math.round(t), 0, e))(
						(e = isFinite(e) && i[e] === t ? e : Do(i, t, g(e, t))),
						i.length - 1,
					);
				}
				determineDataLimits() {
					const { minDefined: t, maxDefined: e } =
						this.getUserBounds();
					let { min: i, max: s } = this.getMinMax(!0);
					"ticks" === this.options.bounds &&
						(t || (i = 0), e || (s = this.getLabels().length - 1)),
						(this.min = i),
						(this.max = s);
				}
				buildTicks() {
					const t = this.min,
						e = this.max,
						i = this.options.offset,
						s = [];
					let n = this.getLabels();
					(n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
						(this._valueRange = Math.max(
							n.length - (i ? 0 : 1),
							1,
						)),
						(this._startValue = this.min - (i ? 0.5 : 0));
					for (let o = t; o <= e; o++) s.push({ value: o });
					return s;
				}
				getLabelForValue(t) {
					const e = this.getLabels();
					return t >= 0 && t < e.length ? e[t] : t;
				}
				configure() {
					super.configure(),
						this.isHorizontal() ||
							(this._reversePixels = !this._reversePixels);
				}
				getPixelForValue(t) {
					return (
						"number" != typeof t && (t = this.parse(t)),
						null === t
							? NaN
							: this.getPixelForDecimal(
									(t - this._startValue) / this._valueRange,
								)
					);
				}
				getPixelForTick(t) {
					const e = this.ticks;
					return t < 0 || t > e.length - 1
						? null
						: this.getPixelForValue(e[t].value);
				}
				getValueForPixel(t) {
					return Math.round(
						this._startValue +
							this.getDecimalForPixel(t) * this._valueRange,
					);
				}
				getBasePixel() {
					return this.bottom;
				}
			}
			function Ao(t, e) {
				const i = [],
					{
						bounds: s,
						step: n,
						min: o,
						max: a,
						precision: r,
						count: l,
						maxTicks: c,
						maxDigits: d,
						includeBounds: u,
					} = t,
					f = n || 1,
					g = c - 1,
					{ min: p, max: m } = e,
					b = !h(o),
					x = !h(a),
					_ = !h(l),
					y = (m - p) / (d + 1);
				let v,
					w,
					M,
					k,
					S = j((m - p) / g / f) * f;
				if (S < 1e-14 && !b && !x) return [{ value: p }, { value: m }];
				(k = Math.ceil(m / S) - Math.floor(p / S)),
					k > g && (S = j((k * S) / g / f) * f),
					h(r) || ((v = Math.pow(10, r)), (S = Math.ceil(S * v) / v)),
					"ticks" === s
						? ((w = Math.floor(p / S) * S),
							(M = Math.ceil(m / S) * S))
						: ((w = p), (M = m)),
					b &&
					x &&
					n &&
					(function (t, e) {
						const i = Math.round(t);
						return i - e <= t && i + e >= t;
					})((a - o) / n, S / 1e3)
						? ((k = Math.round(Math.min((a - o) / S, c))),
							(S = (a - o) / k),
							(w = o),
							(M = a))
						: _
							? ((w = b ? o : w),
								(M = x ? a : M),
								(k = l - 1),
								(S = (M - w) / k))
							: ((k = (M - w) / S),
								(k = N(k, Math.round(k), S / 1e3)
									? Math.round(k)
									: Math.ceil(k)));
				const P = Math.max(U(S), U(w));
				(v = Math.pow(10, h(r) ? P : r)),
					(w = Math.round(w * v) / v),
					(M = Math.round(M * v) / v);
				let O = 0;
				for (
					b &&
					(u && w !== o
						? (i.push({ value: o }),
							w < o && O++,
							N(
								Math.round((w + O * S) * v) / v,
								o,
								To(o, y, t),
							) && O++)
						: w < o && O++);
					O < k;
					++O
				)
					i.push({ value: Math.round((w + O * S) * v) / v });
				return (
					x && u && M !== a
						? i.length && N(i[i.length - 1].value, a, To(a, y, t))
							? (i[i.length - 1].value = a)
							: i.push({ value: a })
						: (x && M !== a) || i.push({ value: M }),
					i
				);
			}
			function To(t, e, { horizontal: i, minRotation: s }) {
				const n = $(s),
					o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
					a = 0.75 * e * ("" + t).length;
				return Math.min(e / o, a);
			}
			(Co.id = "category"),
				(Co.defaults = {
					ticks: { callback: Co.prototype.getLabelForValue },
				});
			class Eo extends js {
				constructor(t) {
					super(t),
						(this.start = void 0),
						(this.end = void 0),
						(this._startValue = void 0),
						(this._endValue = void 0),
						(this._valueRange = 0);
				}
				parse(t, e) {
					return h(t) ||
						(("number" == typeof t || t instanceof Number) &&
							!isFinite(+t))
						? null
						: +t;
				}
				handleTickRangeOptions() {
					const { beginAtZero: t } = this.options,
						{ minDefined: e, maxDefined: i } = this.getUserBounds();
					let { min: s, max: n } = this;
					const o = (t) => (s = e ? s : t),
						a = (t) => (n = i ? n : t);
					if (t) {
						const t = B(s),
							e = B(n);
						t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
					}
					if (s === n) {
						let e = 1;
						(n >= Number.MAX_SAFE_INTEGER ||
							s <= Number.MIN_SAFE_INTEGER) &&
							(e = Math.abs(0.05 * n)),
							a(n + e),
							t || o(s - e);
					}
					(this.min = s), (this.max = n);
				}
				getTickLimit() {
					const t = this.options.ticks;
					let e,
						{ maxTicksLimit: i, stepSize: s } = t;
					return (
						s
							? ((e =
									Math.ceil(this.max / s) -
									Math.floor(this.min / s) +
									1),
								e > 1e3 &&
									(console.warn(
										`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`,
									),
									(e = 1e3)))
							: ((e = this.computeTickLimit()), (i = i || 11)),
						i && (e = Math.min(i, e)),
						e
					);
				}
				computeTickLimit() {
					return Number.POSITIVE_INFINITY;
				}
				buildTicks() {
					const t = this.options,
						e = t.ticks;
					let i = this.getTickLimit();
					i = Math.max(2, i);
					const s = Ao(
						{
							maxTicks: i,
							bounds: t.bounds,
							min: t.min,
							max: t.max,
							precision: e.precision,
							step: e.stepSize,
							count: e.count,
							maxDigits: this._maxDigits(),
							horizontal: this.isHorizontal(),
							minRotation: e.minRotation || 0,
							includeBounds: !1 !== e.includeBounds,
						},
						this._range || this,
					);
					return (
						"ticks" === t.bounds && H(s, this, "value"),
						t.reverse
							? (s.reverse(),
								(this.start = this.max),
								(this.end = this.min))
							: ((this.start = this.min), (this.end = this.max)),
						s
					);
				}
				configure() {
					const t = this.ticks;
					let e = this.min,
						i = this.max;
					if ((super.configure(), this.options.offset && t.length)) {
						const s = (i - e) / Math.max(t.length - 1, 1) / 2;
						(e -= s), (i += s);
					}
					(this._startValue = e),
						(this._endValue = i),
						(this._valueRange = i - e);
				}
				getLabelForValue(t) {
					return Je(t, this.chart.options.locale);
				}
			}
			class Lo extends Eo {
				determineDataLimits() {
					const { min: t, max: e } = this.getMinMax(!0);
					(this.min = u(t) ? t : 0),
						(this.max = u(e) ? e : 1),
						this.handleTickRangeOptions();
				}
				computeTickLimit() {
					const t = this.isHorizontal(),
						e = t ? this.width : this.height,
						i = $(this.options.ticks.minRotation),
						s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
						n = this._resolveTickFontOptions(0);
					return Math.ceil(e / Math.min(40, n.lineHeight / s));
				}
				getPixelForValue(t) {
					return null === t
						? NaN
						: this.getPixelForDecimal(
								(t - this._startValue) / this._valueRange,
							);
				}
				getValueForPixel(t) {
					return (
						this._startValue +
						this.getDecimalForPixel(t) * this._valueRange
					);
				}
			}
			function Ro(t) {
				return 1 === t / Math.pow(10, Math.floor(V(t)));
			}
			(Lo.id = "linear"),
				(Lo.defaults = { ticks: { callback: Ts.formatters.numeric } });
			class Io extends js {
				constructor(t) {
					super(t),
						(this.start = void 0),
						(this.end = void 0),
						(this._startValue = void 0),
						(this._valueRange = 0);
				}
				parse(t, e) {
					const i = Eo.prototype.parse.apply(this, [t, e]);
					if (0 !== i) return u(i) && i > 0 ? i : null;
					this._zero = !0;
				}
				determineDataLimits() {
					const { min: t, max: e } = this.getMinMax(!0);
					(this.min = u(t) ? Math.max(0, t) : null),
						(this.max = u(e) ? Math.max(0, e) : null),
						this.options.beginAtZero && (this._zero = !0),
						this.handleTickRangeOptions();
				}
				handleTickRangeOptions() {
					const { minDefined: t, maxDefined: e } =
						this.getUserBounds();
					let i = this.min,
						s = this.max;
					const n = (e) => (i = t ? i : e),
						o = (t) => (s = e ? s : t),
						a = (t, e) => Math.pow(10, Math.floor(V(t)) + e);
					i === s &&
						(i <= 0 ? (n(1), o(10)) : (n(a(i, -1)), o(a(s, 1)))),
						i <= 0 && n(a(s, -1)),
						s <= 0 && o(a(i, 1)),
						this._zero &&
							this.min !== this._suggestedMin &&
							i === a(this.min, 0) &&
							n(a(i, -1)),
						(this.min = i),
						(this.max = s);
				}
				buildTicks() {
					const t = this.options,
						e = (function (t, e) {
							const i = Math.floor(V(e.max)),
								s = Math.ceil(e.max / Math.pow(10, i)),
								n = [];
							let o = f(
									t.min,
									Math.pow(10, Math.floor(V(e.min))),
								),
								a = Math.floor(V(o)),
								r = Math.floor(o / Math.pow(10, a)),
								l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
							do {
								n.push({ value: o, major: Ro(o) }),
									++r,
									10 === r &&
										((r = 1), ++a, (l = a >= 0 ? 1 : l)),
									(o =
										Math.round(r * Math.pow(10, a) * l) /
										l);
							} while (a < i || (a === i && r < s));
							const h = f(t.max, o);
							return n.push({ value: h, major: Ro(o) }), n;
						})({ min: this._userMin, max: this._userMax }, this);
					return (
						"ticks" === t.bounds && H(e, this, "value"),
						t.reverse
							? (e.reverse(),
								(this.start = this.max),
								(this.end = this.min))
							: ((this.start = this.min), (this.end = this.max)),
						e
					);
				}
				getLabelForValue(t) {
					return void 0 === t
						? "0"
						: Je(t, this.chart.options.locale);
				}
				configure() {
					const t = this.min;
					super.configure(),
						(this._startValue = V(t)),
						(this._valueRange = V(this.max) - V(t));
				}
				getPixelForValue(t) {
					return (
						(void 0 !== t && 0 !== t) || (t = this.min),
						null === t || isNaN(t)
							? NaN
							: this.getPixelForDecimal(
									t === this.min
										? 0
										: (V(t) - this._startValue) /
												this._valueRange,
								)
					);
				}
				getValueForPixel(t) {
					const e = this.getDecimalForPixel(t);
					return Math.pow(
						10,
						this._startValue + e * this._valueRange,
					);
				}
			}
			function zo(t) {
				const e = t.ticks;
				if (e.display && t.display) {
					const t = re(e.backdropPadding);
					return g(e.font && e.font.size, Wt.font.size) + t.height;
				}
				return 0;
			}
			function Fo(t, e, i, s, n) {
				return t === s || t === n
					? { start: e - i / 2, end: e + i / 2 }
					: t < s || t > n
						? { start: e - i, end: e }
						: { start: e, end: e + i };
			}
			function Vo(t) {
				const e = {
						l: 0,
						r: t.width,
						t: 0,
						b: t.height - t.paddingTop,
					},
					i = {},
					s = [],
					n = [],
					o = t.getLabels().length;
				for (let h = 0; h < o; h++) {
					const o = t.options.pointLabels.setContext(
						t.getPointLabelContext(h),
					);
					n[h] = o.padding;
					const d = t.getPointPosition(h, t.drawingArea + n[h]),
						u = le(o.font),
						f =
							((a = t.ctx),
							(r = u),
							(l = c((l = t._pointLabels[h])) ? l : [l]),
							{
								w: Ht(a, r.string, l),
								h: l.length * r.lineHeight,
							});
					s[h] = f;
					const g = t.getIndexAngle(h),
						p = Y(g),
						m = Fo(p, d.x, f.w, 0, 180),
						b = Fo(p, d.y, f.h, 90, 270);
					m.start < e.l && ((e.l = m.start), (i.l = g)),
						m.end > e.r && ((e.r = m.end), (i.r = g)),
						b.start < e.t && ((e.t = b.start), (i.t = g)),
						b.end > e.b && ((e.b = b.end), (i.b = g));
				}
				var a, r, l;
				t._setReductions(t.drawingArea, e, i),
					(t._pointLabelItems = (function (t, e, i) {
						const s = [],
							n = t.getLabels().length,
							o = t.options,
							a = zo(o),
							r = t.getDistanceFromCenterForValue(
								o.ticks.reverse ? t.min : t.max,
							);
						for (let l = 0; l < n; l++) {
							const n = 0 === l ? a / 2 : 0,
								o = t.getPointPosition(l, r + n + i[l]),
								h = Y(t.getIndexAngle(l)),
								c = e[l],
								d = Wo(o.y, c.h, h),
								u = Bo(h),
								f = jo(o.x, c.w, u);
							s.push({
								x: o.x,
								y: d,
								textAlign: u,
								left: f,
								top: d,
								right: f + c.w,
								bottom: d + c.h,
							});
						}
						return s;
					})(t, s, n));
			}
			function Bo(t) {
				return 0 === t || 180 === t
					? "center"
					: t < 180
						? "left"
						: "right";
			}
			function jo(t, e, i) {
				return (
					"right" === i ? (t -= e) : "center" === i && (t -= e / 2), t
				);
			}
			function Wo(t, e, i) {
				return (
					90 === i || 270 === i
						? (t -= e / 2)
						: (i > 270 || i < 90) && (t -= e),
					t
				);
			}
			function No(t, e, i, s) {
				const { ctx: n } = t;
				if (i) n.arc(t.xCenter, t.yCenter, e, 0, T);
				else {
					let i = t.getPointPosition(0, e);
					n.moveTo(i.x, i.y);
					for (let o = 1; o < s; o++)
						(i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y);
				}
			}
			function Ho(t) {
				return W(t) ? t : 0;
			}
			(Io.id = "logarithmic"),
				(Io.defaults = {
					ticks: {
						callback: Ts.formatters.logarithmic,
						major: { enabled: !0 },
					},
				});
			class $o extends Eo {
				constructor(t) {
					super(t),
						(this.xCenter = void 0),
						(this.yCenter = void 0),
						(this.drawingArea = void 0),
						(this._pointLabels = []),
						(this._pointLabelItems = []);
				}
				setDimensions() {
					(this.width = this.maxWidth),
						(this.height = this.maxHeight),
						(this.paddingTop = zo(this.options) / 2),
						(this.xCenter = Math.floor(this.width / 2)),
						(this.yCenter = Math.floor(
							(this.height - this.paddingTop) / 2,
						)),
						(this.drawingArea =
							Math.min(
								this.height - this.paddingTop,
								this.width,
							) / 2);
				}
				determineDataLimits() {
					const { min: t, max: e } = this.getMinMax(!1);
					(this.min = u(t) && !isNaN(t) ? t : 0),
						(this.max = u(e) && !isNaN(e) ? e : 0),
						this.handleTickRangeOptions();
				}
				computeTickLimit() {
					return Math.ceil(this.drawingArea / zo(this.options));
				}
				generateTickLabels(t) {
					Eo.prototype.generateTickLabels.call(this, t),
						(this._pointLabels = this.getLabels().map((t, e) => {
							const i = m(
								this.options.pointLabels.callback,
								[t, e],
								this,
							);
							return i || 0 === i ? i : "";
						}));
				}
				fit() {
					const t = this.options;
					t.display && t.pointLabels.display
						? Vo(this)
						: this.setCenterPoint(0, 0, 0, 0);
				}
				_setReductions(t, e, i) {
					let s = e.l / Math.sin(i.l),
						n = Math.max(e.r - this.width, 0) / Math.sin(i.r),
						o = -e.t / Math.cos(i.t),
						a =
							-Math.max(
								e.b - (this.height - this.paddingTop),
								0,
							) / Math.cos(i.b);
					(s = Ho(s)),
						(n = Ho(n)),
						(o = Ho(o)),
						(a = Ho(a)),
						(this.drawingArea = Math.max(
							t / 2,
							Math.min(
								Math.floor(t - (s + n) / 2),
								Math.floor(t - (o + a) / 2),
							),
						)),
						this.setCenterPoint(s, n, o, a);
				}
				setCenterPoint(t, e, i, s) {
					const n = this.width - e - this.drawingArea,
						o = t + this.drawingArea,
						a = i + this.drawingArea,
						r =
							this.height -
							this.paddingTop -
							s -
							this.drawingArea;
					(this.xCenter = Math.floor((o + n) / 2 + this.left)),
						(this.yCenter = Math.floor(
							(a + r) / 2 + this.top + this.paddingTop,
						));
				}
				getIndexAngle(t) {
					return K(
						t * (T / this.getLabels().length) +
							$(this.options.startAngle || 0),
					);
				}
				getDistanceFromCenterForValue(t) {
					if (h(t)) return NaN;
					const e = this.drawingArea / (this.max - this.min);
					return this.options.reverse
						? (this.max - t) * e
						: (t - this.min) * e;
				}
				getValueForDistanceFromCenter(t) {
					if (h(t)) return NaN;
					const e = t / (this.drawingArea / (this.max - this.min));
					return this.options.reverse ? this.max - e : this.min + e;
				}
				getPointLabelContext(t) {
					const e = this._pointLabels || [];
					if (t >= 0 && t < e.length) {
						const i = e[t];
						return (function (t, e, i) {
							return ce(t, {
								label: i,
								index: e,
								type: "pointLabel",
							});
						})(this.getContext(), t, i);
					}
				}
				getPointPosition(t, e) {
					const i = this.getIndexAngle(t) - I;
					return {
						x: Math.cos(i) * e + this.xCenter,
						y: Math.sin(i) * e + this.yCenter,
						angle: i,
					};
				}
				getPointPositionForValue(t, e) {
					return this.getPointPosition(
						t,
						this.getDistanceFromCenterForValue(e),
					);
				}
				getBasePosition(t) {
					return this.getPointPositionForValue(
						t || 0,
						this.getBaseValue(),
					);
				}
				getPointLabelPosition(t) {
					const {
						left: e,
						top: i,
						right: s,
						bottom: n,
					} = this._pointLabelItems[t];
					return { left: e, top: i, right: s, bottom: n };
				}
				drawBackground() {
					const {
						backgroundColor: t,
						grid: { circular: e },
					} = this.options;
					if (t) {
						const i = this.ctx;
						i.save(),
							i.beginPath(),
							No(
								this,
								this.getDistanceFromCenterForValue(
									this._endValue,
								),
								e,
								this.getLabels().length,
							),
							i.closePath(),
							(i.fillStyle = t),
							i.fill(),
							i.restore();
					}
				}
				drawGrid() {
					const t = this.ctx,
						e = this.options,
						{ angleLines: i, grid: s } = e,
						n = this.getLabels().length;
					let o, a, r;
					if (
						(e.pointLabels.display &&
							(function (t, e) {
								const {
									ctx: i,
									options: { pointLabels: s },
								} = t;
								for (let n = e - 1; n >= 0; n--) {
									const e = s.setContext(
											t.getPointLabelContext(n),
										),
										o = le(e.font),
										{
											x: a,
											y: r,
											textAlign: l,
											left: c,
											top: d,
											right: u,
											bottom: f,
										} = t._pointLabelItems[n],
										{ backdropColor: g } = e;
									if (!h(g)) {
										const t = re(e.backdropPadding);
										(i.fillStyle = g),
											i.fillRect(
												c - t.left,
												d - t.top,
												u - c + t.width,
												f - d + t.height,
											);
									}
									Qt(
										i,
										t._pointLabels[n],
										a,
										r + o.lineHeight / 2,
										o,
										{
											color: e.color,
											textAlign: l,
											textBaseline: "middle",
										},
									);
								}
							})(this, n),
						s.display &&
							this.ticks.forEach((t, e) => {
								if (0 !== e) {
									a = this.getDistanceFromCenterForValue(
										t.value,
									);
									!(function (t, e, i, s) {
										const n = t.ctx,
											o = e.circular,
											{ color: a, lineWidth: r } = e;
										(!o && !s) ||
											!a ||
											!r ||
											i < 0 ||
											(n.save(),
											(n.strokeStyle = a),
											(n.lineWidth = r),
											n.setLineDash(e.borderDash),
											(n.lineDashOffset =
												e.borderDashOffset),
											n.beginPath(),
											No(t, i, o, s),
											n.closePath(),
											n.stroke(),
											n.restore());
									})(
										this,
										s.setContext(this.getContext(e - 1)),
										a,
										n,
									);
								}
							}),
						i.display)
					) {
						for (
							t.save(), o = this.getLabels().length - 1;
							o >= 0;
							o--
						) {
							const s = i.setContext(
									this.getPointLabelContext(o),
								),
								{ color: n, lineWidth: l } = s;
							l &&
								n &&
								((t.lineWidth = l),
								(t.strokeStyle = n),
								t.setLineDash(s.borderDash),
								(t.lineDashOffset = s.borderDashOffset),
								(a = this.getDistanceFromCenterForValue(
									e.ticks.reverse ? this.min : this.max,
								)),
								(r = this.getPointPosition(o, a)),
								t.beginPath(),
								t.moveTo(this.xCenter, this.yCenter),
								t.lineTo(r.x, r.y),
								t.stroke());
						}
						t.restore();
					}
				}
				drawBorder() {}
				drawLabels() {
					const t = this.ctx,
						e = this.options,
						i = e.ticks;
					if (!i.display) return;
					const s = this.getIndexAngle(0);
					let n, o;
					t.save(),
						t.translate(this.xCenter, this.yCenter),
						t.rotate(s),
						(t.textAlign = "center"),
						(t.textBaseline = "middle"),
						this.ticks.forEach((s, a) => {
							if (0 === a && !e.reverse) return;
							const r = i.setContext(this.getContext(a)),
								l = le(r.font);
							if (
								((n = this.getDistanceFromCenterForValue(
									this.ticks[a].value,
								)),
								r.showLabelBackdrop)
							) {
								(t.font = l.string),
									(o = t.measureText(s.label).width),
									(t.fillStyle = r.backdropColor);
								const e = re(r.backdropPadding);
								t.fillRect(
									-o / 2 - e.left,
									-n - l.size / 2 - e.top,
									o + e.width,
									l.size + e.height,
								);
							}
							Qt(t, s.label, 0, -n, l, { color: r.color });
						}),
						t.restore();
				}
				drawTitle() {}
			}
			($o.id = "radialLinear"),
				($o.defaults = {
					display: !0,
					animate: !0,
					position: "chartArea",
					angleLines: {
						display: !0,
						lineWidth: 1,
						borderDash: [],
						borderDashOffset: 0,
					},
					grid: { circular: !1 },
					startAngle: 0,
					ticks: {
						showLabelBackdrop: !0,
						callback: Ts.formatters.numeric,
					},
					pointLabels: {
						backdropColor: void 0,
						backdropPadding: 2,
						display: !0,
						font: { size: 10 },
						callback: (t) => t,
						padding: 5,
					},
				}),
				($o.defaultRoutes = {
					"angleLines.color": "borderColor",
					"pointLabels.color": "color",
					"ticks.color": "color",
				}),
				($o.descriptors = { angleLines: { _fallback: "grid" } });
			const Yo = {
					millisecond: { common: !0, size: 1, steps: 1e3 },
					second: { common: !0, size: 1e3, steps: 60 },
					minute: { common: !0, size: 6e4, steps: 60 },
					hour: { common: !0, size: 36e5, steps: 24 },
					day: { common: !0, size: 864e5, steps: 30 },
					week: { common: !1, size: 6048e5, steps: 4 },
					month: { common: !0, size: 2628e6, steps: 12 },
					quarter: { common: !1, size: 7884e6, steps: 4 },
					year: { common: !0, size: 3154e7 },
				},
				Uo = Object.keys(Yo);
			function Xo(t, e) {
				return t - e;
			}
			function qo(t, e) {
				if (h(e)) return null;
				const i = t._adapter,
					{ parser: s, round: n, isoWeekday: o } = t._parseOpts;
				let a = e;
				return (
					"function" == typeof s && (a = s(a)),
					u(a) ||
						(a = "string" == typeof s ? i.parse(a, s) : i.parse(a)),
					null === a
						? null
						: (n &&
								(a =
									"week" !== n || (!W(o) && !0 !== o)
										? i.startOf(a, n)
										: i.startOf(a, "isoWeek", o)),
							+a)
				);
			}
			function Ko(t, e, i, s) {
				const n = Uo.length;
				for (let o = Uo.indexOf(t); o < n - 1; ++o) {
					const t = Yo[Uo[o]],
						n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
					if (t.common && Math.ceil((i - e) / (n * t.size)) <= s)
						return Uo[o];
				}
				return Uo[n - 1];
			}
			function Zo(t, e, i) {
				if (i) {
					if (i.length) {
						const { lo: s, hi: n } = de(i, e);
						t[i[s] >= e ? i[s] : i[n]] = !0;
					}
				} else t[e] = !0;
			}
			function Go(t, e, i) {
				const s = [],
					n = {},
					o = e.length;
				let a, r;
				for (a = 0; a < o; ++a)
					(r = e[a]), (n[r] = a), s.push({ value: r, major: !1 });
				return 0 !== o && i
					? (function (t, e, i, s) {
							const n = t._adapter,
								o = +n.startOf(e[0].value, s),
								a = e[e.length - 1].value;
							let r, l;
							for (r = o; r <= a; r = +n.add(r, 1, s))
								(l = i[r]), l >= 0 && (e[l].major = !0);
							return e;
						})(t, s, n, i)
					: s;
			}
			class Qo extends js {
				constructor(t) {
					super(t),
						(this._cache = { data: [], labels: [], all: [] }),
						(this._unit = "day"),
						(this._majorUnit = void 0),
						(this._offsets = {}),
						(this._normalized = !1),
						(this._parseOpts = void 0);
				}
				init(t, e) {
					const i = t.time || (t.time = {}),
						s = (this._adapter = new Xi._date(t.adapters.date));
					M(i.displayFormats, s.formats()),
						(this._parseOpts = {
							parser: i.parser,
							round: i.round,
							isoWeekday: i.isoWeekday,
						}),
						super.init(t),
						(this._normalized = e.normalized);
				}
				parse(t, e) {
					return void 0 === t ? null : qo(this, t);
				}
				beforeLayout() {
					super.beforeLayout(),
						(this._cache = { data: [], labels: [], all: [] });
				}
				determineDataLimits() {
					const t = this.options,
						e = this._adapter,
						i = t.time.unit || "day";
					let {
						min: s,
						max: n,
						minDefined: o,
						maxDefined: a,
					} = this.getUserBounds();
					function r(t) {
						o || isNaN(t.min) || (s = Math.min(s, t.min)),
							a || isNaN(t.max) || (n = Math.max(n, t.max));
					}
					(o && a) ||
						(r(this._getLabelBounds()),
						("ticks" === t.bounds && "labels" === t.ticks.source) ||
							r(this.getMinMax(!1))),
						(s = u(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
						(n =
							u(n) && !isNaN(n)
								? n
								: +e.endOf(Date.now(), i) + 1),
						(this.min = Math.min(s, n - 1)),
						(this.max = Math.max(s + 1, n));
				}
				_getLabelBounds() {
					const t = this.getLabelTimestamps();
					let e = Number.POSITIVE_INFINITY,
						i = Number.NEGATIVE_INFINITY;
					return (
						t.length && ((e = t[0]), (i = t[t.length - 1])),
						{ min: e, max: i }
					);
				}
				buildTicks() {
					const t = this.options,
						e = t.time,
						i = t.ticks,
						s =
							"labels" === i.source
								? this.getLabelTimestamps()
								: this._generate();
					"ticks" === t.bounds &&
						s.length &&
						((this.min = this._userMin || s[0]),
						(this.max = this._userMax || s[s.length - 1]));
					const n = this.min,
						o = (function (t, e, i) {
							let s = 0,
								n = t.length;
							for (; s < n && t[s] < e; ) s++;
							for (; n > s && t[n - 1] > i; ) n--;
							return s > 0 || n < t.length ? t.slice(s, n) : t;
						})(s, n, this.max);
					return (
						(this._unit =
							e.unit ||
							(i.autoSkip
								? Ko(
										e.minUnit,
										this.min,
										this.max,
										this._getLabelCapacity(n),
									)
								: (function (t, e, i, s, n) {
										for (
											let o = Uo.length - 1;
											o >= Uo.indexOf(i);
											o--
										) {
											const i = Uo[o];
											if (
												Yo[i].common &&
												t._adapter.diff(n, s, i) >=
													e - 1
											)
												return i;
										}
										return Uo[i ? Uo.indexOf(i) : 0];
									})(
										this,
										o.length,
										e.minUnit,
										this.min,
										this.max,
									))),
						(this._majorUnit =
							i.major.enabled && "year" !== this._unit
								? (function (t) {
										for (
											let e = Uo.indexOf(t) + 1,
												i = Uo.length;
											e < i;
											++e
										)
											if (Yo[Uo[e]].common) return Uo[e];
									})(this._unit)
								: void 0),
						this.initOffsets(s),
						t.reverse && o.reverse(),
						Go(this, o, this._majorUnit)
					);
				}
				initOffsets(t) {
					let e,
						i,
						s = 0,
						n = 0;
					this.options.offset &&
						t.length &&
						((e = this.getDecimalForValue(t[0])),
						(s =
							1 === t.length
								? 1 - e
								: (this.getDecimalForValue(t[1]) - e) / 2),
						(i = this.getDecimalForValue(t[t.length - 1])),
						(n =
							1 === t.length
								? i
								: (i -
										this.getDecimalForValue(
											t[t.length - 2],
										)) /
									2));
					const o = t.length < 3 ? 0.5 : 0.25;
					(s = G(s, 0, o)),
						(n = G(n, 0, o)),
						(this._offsets = {
							start: s,
							end: n,
							factor: 1 / (s + 1 + n),
						});
				}
				_generate() {
					const t = this._adapter,
						e = this.min,
						i = this.max,
						s = this.options,
						n = s.time,
						o =
							n.unit ||
							Ko(n.minUnit, e, i, this._getLabelCapacity(e)),
						a = g(n.stepSize, 1),
						r = "week" === o && n.isoWeekday,
						l = W(r) || !0 === r,
						h = {};
					let c,
						d,
						u = e;
					if (
						(l && (u = +t.startOf(u, "isoWeek", r)),
						(u = +t.startOf(u, l ? "day" : o)),
						t.diff(i, e, o) > 1e5 * a)
					)
						throw new Error(
							e +
								" and " +
								i +
								" are too far apart with stepSize of " +
								a +
								" " +
								o,
						);
					const f =
						"data" === s.ticks.source && this.getDataTimestamps();
					for (c = u, d = 0; c < i; c = +t.add(c, a, o), d++)
						Zo(h, c, f);
					return (
						(c !== i && "ticks" !== s.bounds && 1 !== d) ||
							Zo(h, c, f),
						Object.keys(h)
							.sort((t, e) => t - e)
							.map((t) => +t)
					);
				}
				getLabelForValue(t) {
					const e = this._adapter,
						i = this.options.time;
					return i.tooltipFormat
						? e.format(t, i.tooltipFormat)
						: e.format(t, i.displayFormats.datetime);
				}
				_tickFormatFunction(t, e, i, s) {
					const n = this.options,
						o = n.time.displayFormats,
						a = this._unit,
						r = this._majorUnit,
						l = a && o[a],
						h = r && o[r],
						c = i[e],
						d = r && h && c && c.major,
						u = this._adapter.format(t, s || (d ? h : l)),
						f = n.ticks.callback;
					return f ? m(f, [u, e, i], this) : u;
				}
				generateTickLabels(t) {
					let e, i, s;
					for (e = 0, i = t.length; e < i; ++e)
						(s = t[e]),
							(s.label = this._tickFormatFunction(s.value, e, t));
				}
				getDecimalForValue(t) {
					return null === t
						? NaN
						: (t - this.min) / (this.max - this.min);
				}
				getPixelForValue(t) {
					const e = this._offsets,
						i = this.getDecimalForValue(t);
					return this.getPixelForDecimal((e.start + i) * e.factor);
				}
				getValueForPixel(t) {
					const e = this._offsets,
						i = this.getDecimalForPixel(t) / e.factor - e.end;
					return this.min + i * (this.max - this.min);
				}
				_getLabelSize(t) {
					const e = this.options.ticks,
						i = this.ctx.measureText(t).width,
						s = $(
							this.isHorizontal() ? e.maxRotation : e.minRotation,
						),
						n = Math.cos(s),
						o = Math.sin(s),
						a = this._resolveTickFontOptions(0).size;
					return { w: i * n + a * o, h: i * o + a * n };
				}
				_getLabelCapacity(t) {
					const e = this.options.time,
						i = e.displayFormats,
						s = i[e.unit] || i.millisecond,
						n = this._tickFormatFunction(
							t,
							0,
							Go(this, [t], this._majorUnit),
							s,
						),
						o = this._getLabelSize(n),
						a =
							Math.floor(
								this.isHorizontal()
									? this.width / o.w
									: this.height / o.h,
							) - 1;
					return a > 0 ? a : 1;
				}
				getDataTimestamps() {
					let t,
						e,
						i = this._cache.data || [];
					if (i.length) return i;
					const s = this.getMatchingVisibleMetas();
					if (this._normalized && s.length)
						return (this._cache.data =
							s[0].controller.getAllParsedValues(this));
					for (t = 0, e = s.length; t < e; ++t)
						i = i.concat(s[t].controller.getAllParsedValues(this));
					return (this._cache.data = this.normalize(i));
				}
				getLabelTimestamps() {
					const t = this._cache.labels || [];
					let e, i;
					if (t.length) return t;
					const s = this.getLabels();
					for (e = 0, i = s.length; e < i; ++e)
						t.push(qo(this, s[e]));
					return (this._cache.labels = this._normalized
						? t
						: this.normalize(t));
				}
				normalize(t) {
					return me(t.sort(Xo));
				}
			}
			function Jo(t, e, i) {
				let s,
					n,
					o,
					a,
					r = 0,
					l = t.length - 1;
				i
					? (e >= t[r].pos &&
							e <= t[l].pos &&
							({ lo: r, hi: l } = ue(t, "pos", e)),
						({ pos: s, time: o } = t[r]),
						({ pos: n, time: a } = t[l]))
					: (e >= t[r].time &&
							e <= t[l].time &&
							({ lo: r, hi: l } = ue(t, "time", e)),
						({ time: s, pos: o } = t[r]),
						({ time: n, pos: a } = t[l]));
				const h = n - s;
				return h ? o + ((a - o) * (e - s)) / h : o;
			}
			(Qo.id = "time"),
				(Qo.defaults = {
					bounds: "data",
					adapters: {},
					time: {
						parser: !1,
						unit: !1,
						round: !1,
						isoWeekday: !1,
						minUnit: "millisecond",
						displayFormats: {},
					},
					ticks: { source: "auto", major: { enabled: !1 } },
				});
			class ta extends Qo {
				constructor(t) {
					super(t),
						(this._table = []),
						(this._minPos = void 0),
						(this._tableRange = void 0);
				}
				initOffsets() {
					const t = this._getTimestampsForTable(),
						e = (this._table = this.buildLookupTable(t));
					(this._minPos = Jo(e, this.min)),
						(this._tableRange = Jo(e, this.max) - this._minPos),
						super.initOffsets(t);
				}
				buildLookupTable(t) {
					const { min: e, max: i } = this,
						s = [],
						n = [];
					let o, a, r, l, h;
					for (o = 0, a = t.length; o < a; ++o)
						(l = t[o]), l >= e && l <= i && s.push(l);
					if (s.length < 2)
						return [
							{ time: e, pos: 0 },
							{ time: i, pos: 1 },
						];
					for (o = 0, a = s.length; o < a; ++o)
						(h = s[o + 1]),
							(r = s[o - 1]),
							(l = s[o]),
							Math.round((h + r) / 2) !== l &&
								n.push({ time: l, pos: o / (a - 1) });
					return n;
				}
				_getTimestampsForTable() {
					let t = this._cache.all || [];
					if (t.length) return t;
					const e = this.getDataTimestamps(),
						i = this.getLabelTimestamps();
					return (
						(t =
							e.length && i.length
								? this.normalize(e.concat(i))
								: e.length
									? e
									: i),
						(t = this._cache.all = t),
						t
					);
				}
				getDecimalForValue(t) {
					return (
						(Jo(this._table, t) - this._minPos) / this._tableRange
					);
				}
				getValueForPixel(t) {
					const e = this._offsets,
						i = this.getDecimalForPixel(t) / e.factor - e.end;
					return Jo(
						this._table,
						i * this._tableRange + this._minPos,
						!0,
					);
				}
			}
			(ta.id = "timeseries"), (ta.defaults = Qo.defaults);
			const ea = [
				$i,
				Bn,
				Oo,
				Object.freeze({
					__proto__: null,
					CategoryScale: Co,
					LinearScale: Lo,
					LogarithmicScale: Io,
					RadialLinearScale: $o,
					TimeScale: Qo,
					TimeSeriesScale: ta,
				}),
			];
			un.register(...ea);
			const ia = un;
			var sa = i(7294);
			function na(t, e, i) {
				return (
					e in t
						? Object.defineProperty(t, e, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (t[e] = i),
					t
				);
			}
			function oa(t) {
				for (
					var e = arguments,
						i = function (i) {
							var s = null != e[i] ? e[i] : {},
								n = Object.keys(s);
							"function" == typeof Object.getOwnPropertySymbols &&
								(n = n.concat(
									Object.getOwnPropertySymbols(s).filter(
										function (t) {
											return Object.getOwnPropertyDescriptor(
												s,
												t,
											).enumerable;
										},
									),
								)),
								n.forEach(function (e) {
									na(t, e, s[e]);
								});
						},
						s = 1;
					s < arguments.length;
					s++
				)
					i(s);
				return t;
			}
			function aa(t, e) {
				if (null == t) return {};
				var i,
					s,
					n = (function (t, e) {
						if (null == t) return {};
						var i,
							s,
							n = {},
							o = Object.keys(t);
						for (s = 0; s < o.length; s++)
							(i = o[s]), e.indexOf(i) >= 0 || (n[i] = t[i]);
						return n;
					})(t, e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(t);
					for (s = 0; s < o.length; s++)
						(i = o[s]),
							e.indexOf(i) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(
									t,
									i,
								) &&
									(n[i] = t[i]));
				}
				return n;
			}
			function ra(t, e) {
				return (
					(function (t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function (t) {
						if (
							Symbol.iterator in Object(t) ||
							"[object Arguments]" ===
								Object.prototype.toString.call(t)
						)
							return Array.from(t);
					})(t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance",
						);
					})()
				);
			}
			function la(t, e) {
				"function" == typeof t ? t(e) : t && (t.current = e);
			}
			function ha(t, e) {
				t.labels = e;
			}
			function ca(t, e) {
				t.datasets = e.map(function (e) {
					var i = t.datasets.find(function (t) {
						return t.label === e.label && t.type === e.type;
					});
					return i && e.data ? (Object.assign(i, e), i) : oa({}, e);
				});
			}
			function da(t) {
				var e = { labels: [], datasets: [] };
				return ha(e, t.labels), ca(e, t.datasets), e;
			}
			var ua = { datasets: [] };
			function fa(t, e) {
				var i = t.height,
					s = void 0 === i ? 150 : i,
					n = t.width,
					o = void 0 === n ? 300 : n,
					a = t.redraw,
					r = void 0 !== a && a,
					l = t.type,
					h = t.data,
					c = t.options,
					d = t.plugins,
					u = void 0 === d ? [] : d,
					f = t.getDatasetAtEvent,
					g = t.getElementAtEvent,
					p = t.getElementsAtEvent,
					m = t.fallbackContent,
					b = t.onClick,
					x = aa(t, [
						"height",
						"width",
						"redraw",
						"type",
						"data",
						"options",
						"plugins",
						"getDatasetAtEvent",
						"getElementAtEvent",
						"getElementsAtEvent",
						"fallbackContent",
						"onClick",
					]),
					_ = (0, sa.useRef)(null),
					y = (0, sa.useRef)(),
					v = ra((0, sa.useState)()),
					w = v[0],
					M = v[1],
					k = w || ("function" == typeof h ? ua : h),
					S = function () {
						_.current &&
							((y.current = new ia(_.current, {
								type: l,
								data: da(k),
								options: c,
								plugins: u,
							})),
							la(e, y.current));
					},
					P = function () {
						la(e, null),
							y.current &&
								(y.current.destroy(), (y.current = null));
					};
				return (
					(0, sa.useEffect)(
						function () {
							"function" == typeof h &&
								_.current &&
								M(h(_.current));
						},
						[h],
					),
					(0, sa.useEffect)(
						function () {
							var t, e;
							!r &&
								y.current &&
								c &&
								((t = y.current),
								(e = c),
								(t.options = oa({}, e)));
						},
						[r, c],
					),
					(0, sa.useEffect)(
						function () {
							!r &&
								y.current &&
								ha(y.current.config.data, k.labels);
						},
						[r, k.labels],
					),
					(0, sa.useEffect)(
						function () {
							!r &&
								y.current &&
								k.datasets &&
								ca(y.current.config.data, k.datasets);
						},
						[r, k.datasets],
					),
					(0, sa.useEffect)(
						function () {
							y.current &&
								(r ? (P(), setTimeout(S)) : y.current.update());
						},
						[r, c, k.labels, k.datasets],
					),
					(0, sa.useEffect)(function () {
						return (
							S(),
							function () {
								return P();
							}
						);
					}, []),
					sa.createElement(
						"canvas",
						Object.assign(
							{
								ref: _,
								role: "img",
								height: s,
								width: o,
								onClick: function (t) {
									b && b(t);
									var e = y.current;
									e &&
										(f &&
											f(
												e.getElementsAtEventForMode(
													t.nativeEvent,
													"dataset",
													{ intersect: !0 },
													!1,
												),
												t,
											),
										g &&
											g(
												e.getElementsAtEventForMode(
													t.nativeEvent,
													"nearest",
													{ intersect: !0 },
													!1,
												),
												t,
											),
										p &&
											p(
												e.getElementsAtEventForMode(
													t.nativeEvent,
													"index",
													{ intersect: !0 },
													!1,
												),
												t,
											));
								},
							},
							x,
						),
						m,
					)
				);
			}
			var ga = (0, sa.forwardRef)(fa);
			function pa(t) {
				return (0, sa.forwardRef)(function (e, i) {
					return sa.createElement(
						ga,
						Object.assign({}, e, { ref: i, type: t }),
					);
				});
			}
			var ma = pa("line");
			pa("bar"),
				pa("radar"),
				pa("doughnut"),
				pa("polarArea"),
				pa("bubble"),
				pa("pie"),
				pa("scatter");
		},
		5196: (t, e, i) => {
			function s(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
				return s;
			}
			function n(t, e) {
				var i =
					("undefined" != typeof Symbol && t[Symbol.iterator]) ||
					t["@@iterator"];
				if (i) return (i = i.call(t)).next.bind(i);
				if (
					Array.isArray(t) ||
					(i = (function (t, e) {
						if (t) {
							if ("string" == typeof t) return s(t, e);
							var i = Object.prototype.toString
								.call(t)
								.slice(8, -1);
							return (
								"Object" === i &&
									t.constructor &&
									(i = t.constructor.name),
								"Map" === i || "Set" === i
									? Array.from(t)
									: "Arguments" === i ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
												i,
										  )
										? s(t, e)
										: void 0
							);
						}
					})(t)) ||
					(e && t && "number" == typeof t.length)
				) {
					i && (t = i);
					var n = 0;
					return function () {
						return n >= t.length
							? { done: !0 }
							: { done: !1, value: t[n++] };
					};
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
				);
			}
			i.d(e, { Z: () => n });
		},
	},
]);
