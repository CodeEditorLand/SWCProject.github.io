"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[9514, 4608],
	{
		3616: (e, t, a) => {
			a.r(t), a.d(t, { default: () => J });
			var n = a(7294),
				i = a(3905),
				o = a(2263),
				r = a(6291),
				l = a(2049),
				c = a(7462),
				s = a(3366),
				d = a(6010),
				u = a(9306),
				m = a(1839),
				b = a(3783),
				p = a(7898),
				h = a(6742),
				f = a(3919),
				v = a(5537);
			const E = function (e) {
				return n.createElement(
					"svg",
					(0, c.Z)(
						{ width: "20", height: "20", "aria-hidden": "true" },
						e,
					),
					n.createElement(
						"g",
						{ fill: "#7a7a7a" },
						n.createElement("path", {
							d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0",
						}),
						n.createElement("path", {
							d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0",
						}),
					),
				);
			};
			var C = a(4478),
				g = a(8617),
				k = a(4973);
			const _ = "sidebar_a3j0",
				Z = "sidebarWithHideableNavbar_VlPv",
				N = "sidebarHidden_OqfG",
				S = "sidebarLogo_hmkv",
				I = "menu_cyFh",
				T = "menuLinkText_lRH+",
				M = "menuWithAnnouncementBar_+O1J",
				y = "collapseSidebarButton_eoK2",
				R = "collapseSidebarButtonIcon_e+kA",
				x = "sidebarMenuIcon_iZzd",
				w = "sidebarMenuCloseIcon_6kU2";
			var A = ["items"],
				P = ["item", "onItemClick", "collapsible", "activePath"],
				L = ["item", "onItemClick", "activePath", "collapsible"],
				B = function e(t, a) {
					return "link" === t.type
						? (0, u.Mg)(t.href, a)
						: "category" === t.type &&
								t.items.some(function (t) {
									return e(t, a);
								});
				},
				D = (0, n.memo)(function (e) {
					var t = e.items,
						a = (0, s.Z)(e, A);
					return t.map(function (e, t) {
						return n.createElement(
							H,
							(0, c.Z)({ key: t, item: e }, a),
						);
					});
				});
			function H(e) {
				return "category" === e.item.type
					? n.createElement(W, e)
					: n.createElement(O, e);
			}
			function W(e) {
				var t,
					a = e.item,
					i = e.onItemClick,
					o = e.collapsible,
					r = e.activePath,
					l = (0, s.Z)(e, P),
					m = a.items,
					b = a.label,
					p = B(a, r),
					h = (0, u.D9)(p),
					f = (0, n.useState)(function () {
						return !!o && !p && a.collapsed;
					}),
					v = f[0],
					E = f[1],
					C = (0, n.useRef)(null),
					g = (0, n.useState)(void 0),
					k = g[0],
					_ = g[1],
					Z = function (e) {
						var t;
						void 0 === e && (e = !0),
							_(
								e
									? (null == (t = C.current)
											? void 0
											: t.scrollHeight) + "px"
									: void 0,
							);
					};
				(0, n.useEffect)(
					function () {
						p && !h && v && E(!1);
					},
					[p, h, v],
				);
				var N = (0, n.useCallback)(
					function (e) {
						e.preventDefault(),
							k || Z(),
							setTimeout(function () {
								return E(function (e) {
									return !e;
								});
							}, 100);
					},
					[k],
				);
				return 0 === m.length
					? null
					: n.createElement(
							"li",
							{
								className: (0, d.Z)("menu__list-item", {
									"menu__list-item--collapsed": v,
								}),
							},
							n.createElement(
								"a",
								(0, c.Z)(
									{
										className: (0, d.Z)(
											"menu__link",
											((t = {
												"menu__link--sublist": o,
												"menu__link--active": o && p,
											}),
											(t[T] = !o),
											t),
										),
										onClick: o ? N : void 0,
										href: o ? "#" : void 0,
									},
									l,
								),
								b,
							),
							n.createElement(
								"ul",
								{
									className: "menu__list",
									ref: C,
									style: { height: k },
									onTransitionEnd: function () {
										v || Z(!1);
									},
								},
								n.createElement(D, {
									items: m,
									tabIndex: v ? "-1" : "0",
									onItemClick: i,
									collapsible: o,
									activePath: r,
								}),
							),
						);
			}
			function O(e) {
				var t = e.item,
					a = e.onItemClick,
					i = e.activePath,
					o = (e.collapsible, (0, s.Z)(e, L)),
					r = t.href,
					l = t.label,
					u = B(t, i);
				return n.createElement(
					"li",
					{ className: "menu__list-item", key: l },
					n.createElement(
						h.Z,
						(0, c.Z)(
							{
								className: (0, d.Z)("menu__link", {
									"menu__link--active": u,
								}),
								to: r,
							},
							(0, f.Z)(r) && {
								isNavLink: !0,
								exact: !0,
								onClick: a,
							},
							o,
						),
						(0, f.Z)(r)
							? l
							: n.createElement(
									"span",
									null,
									l,
									n.createElement(g.Z, null),
								),
					),
				);
			}
			function F(e) {
				var t = e.onClick;
				return n.createElement(
					"button",
					{
						type: "button",
						title: (0, k.I)({
							id: "theme.docs.sidebar.collapseButtonTitle",
							message: "Collapse sidebar",
							description:
								"The title attribute for collapse button of doc sidebar",
						}),
						"aria-label": (0, k.I)({
							id: "theme.docs.sidebar.collapseButtonAriaLabel",
							message: "Collapse sidebar",
							description:
								"The title attribute for collapse button of doc sidebar",
						}),
						className: (0, d.Z)(
							"button button--secondary button--outline",
							y,
						),
						onClick: t,
					},
					n.createElement(E, { className: R }),
				);
			}
			function z(e) {
				var t = e.responsiveSidebarOpened,
					a = e.onClick;
				return n.createElement(
					"button",
					{
						"aria-label": t
							? (0, k.I)({
									id: "theme.docs.sidebar.responsiveCloseButtonLabel",
									message: "Close menu",
									description:
										"The ARIA label for close button of mobile doc sidebar",
								})
							: (0, k.I)({
									id: "theme.docs.sidebar.responsiveOpenButtonLabel",
									message: "Open menu",
									description:
										"The ARIA label for open button of mobile doc sidebar",
								}),
						"aria-haspopup": "true",
						className:
							"button button--secondary button--sm menu__button",
						type: "button",
						onClick: a,
					},
					t
						? n.createElement(
								"span",
								{ className: (0, d.Z)(x, w) },
								"\xd7",
							)
						: n.createElement(C.Z, {
								className: x,
								height: 24,
								width: 24,
							}),
				);
			}
			const U = function (e) {
				var t,
					a,
					i = e.path,
					o = e.sidebar,
					r = e.sidebarCollapsible,
					l = void 0 === r || r,
					c = e.onCollapse,
					s = e.isHidden,
					h = (function () {
						var e = (0, u.nT)().isClosed,
							t = (0, n.useState)(!e),
							a = t[0],
							i = t[1];
						return (
							(0, p.Z)(function (t) {
								var a = t.scrollY;
								e || i(0 === a);
							}),
							a
						);
					})(),
					f = (0, u.LU)(),
					E = f.navbar.hideOnScroll,
					C = f.hideableSidebar,
					g = (0, u.nT)().isClosed,
					T = (function () {
						var e = (0, n.useState)(!1),
							t = e[0],
							a = e[1];
						(0, m.Z)(t);
						var i = (0, b.Z)();
						return (
							(0, n.useEffect)(
								function () {
									i === b.D.desktop && a(!1);
								},
								[i],
							),
							{
								showResponsiveSidebar: t,
								closeResponsiveSidebar: (0, n.useCallback)(
									function (e) {
										e.target.blur(), a(!1);
									},
									[a],
								),
								toggleResponsiveSidebar: (0, n.useCallback)(
									function () {
										a(function (e) {
											return !e;
										});
									},
									[a],
								),
							}
						);
					})(),
					y = T.showResponsiveSidebar,
					R = T.closeResponsiveSidebar,
					x = T.toggleResponsiveSidebar;
				return n.createElement(
					"div",
					{
						className: (0, d.Z)(
							_,
							((t = {}), (t[Z] = E), (t[N] = s), t),
						),
					},
					E && n.createElement(v.Z, { tabIndex: -1, className: S }),
					n.createElement(
						"nav",
						{
							className: (0, d.Z)(
								"menu",
								"menu--responsive",
								"thin-scrollbar",
								I,
								((a = { "menu--show": y }),
								(a[M] = !g && h),
								a),
							),
							"aria-label": (0, k.I)({
								id: "theme.docs.sidebar.navAriaLabel",
								message: "Sidebar navigation",
								description:
									"The ARIA label for documentation menu",
							}),
						},
						n.createElement(z, {
							responsiveSidebarOpened: y,
							onClick: x,
						}),
						n.createElement(
							"ul",
							{ className: "menu__list" },
							n.createElement(D, {
								items: o,
								onItemClick: R,
								collapsible: l,
								activePath: i,
							}),
						),
					),
					C && n.createElement(F, { onClick: c }),
				);
			};
			var q = a(7933),
				K = a(4608),
				Y = a(5977);
			const j = {
				docPage: "docPage_lDyR",
				docMainContainer: "docMainContainer_r8cw",
				docMainContainerEnhanced: "docMainContainerEnhanced_SOUu",
				docSidebarContainer: "docSidebarContainer_0YBq",
				docSidebarContainerHidden: "docSidebarContainerHidden_Qlt2",
				collapsedDocSidebar: "collapsedDocSidebar_zZpm",
				expandSidebarButtonIcon: "expandSidebarButtonIcon_cxi8",
				docItemWrapperEnhanced: "docItemWrapperEnhanced_aT5H",
			};
			function G(e) {
				var t,
					a,
					r,
					c,
					s,
					m = e.currentDocRoute,
					b = e.versionMetadata,
					p = e.children,
					h = (0, o.Z)(),
					f = h.siteConfig,
					v = h.isClient,
					C = b.pluginId,
					g = b.version,
					_ = (function (e) {
						var t,
							a = e.versionMetadata,
							n = e.currentDocRoute,
							i = a.permalinkToSidebar,
							o = a.docsSidebars,
							r =
								i[n.path] ||
								i[
									((t = n.path),
									t.endsWith("/") ? t : t + "/")
								] ||
								i[
									(function (e) {
										return e.endsWith("/")
											? e.slice(0, -1)
											: e;
									})(n.path)
								];
						return { sidebar: o[r], sidebarName: r };
					})({ versionMetadata: b, currentDocRoute: m }),
					Z = _.sidebarName,
					N = _.sidebar,
					S = (0, n.useState)(!1),
					I = S[0],
					T = S[1],
					M = (0, n.useState)(!1),
					y = M[0],
					R = M[1],
					x = (0, n.useCallback)(
						function () {
							y && R(!1), T(!I);
						},
						[y],
					);
				return n.createElement(
					l.Z,
					{
						key: v,
						wrapperClassName: u.kM.wrapper.docPages,
						pageClassName: u.kM.page.docPage,
						searchMetadatas: { version: g, tag: (0, u.os)(C, g) },
					},
					n.createElement(
						"div",
						{ className: j.docPage },
						N &&
							n.createElement(
								"aside",
								{
									className: (0, d.Z)(
										j.docSidebarContainer,
										((t = {}),
										(t[j.docSidebarContainerHidden] = I),
										t),
									),
									onTransitionEnd: function (e) {
										e.currentTarget.classList.contains(
											j.docSidebarContainer,
										) &&
											I &&
											R(!0);
									},
								},
								n.createElement(U, {
									key: Z,
									sidebar: N,
									path: m.path,
									sidebarCollapsible:
										null ==
											(a =
												null == (r = f.themeConfig)
													? void 0
													: r.sidebarCollapsible) ||
										a,
									onCollapse: x,
									isHidden: y,
								}),
								y &&
									n.createElement(
										"div",
										{
											className: j.collapsedDocSidebar,
											title: (0, k.I)({
												id: "theme.docs.sidebar.expandButtonTitle",
												message: "Expand sidebar",
												description:
													"The ARIA label and title attribute for expand button of doc sidebar",
											}),
											"aria-label": (0, k.I)({
												id: "theme.docs.sidebar.expandButtonAriaLabel",
												message: "Expand sidebar",
												description:
													"The ARIA label and title attribute for expand button of doc sidebar",
											}),
											tabIndex: 0,
											role: "button",
											onKeyDown: x,
											onClick: x,
										},
										n.createElement(E, {
											className:
												j.expandSidebarButtonIcon,
										}),
									),
							),
						n.createElement(
							"main",
							{
								className: (0, d.Z)(
									j.docMainContainer,
									((c = {}),
									(c[j.docMainContainerEnhanced] = I || !N),
									c),
								),
							},
							n.createElement(
								"div",
								{
									className: (0, d.Z)(
										"container padding-top--md padding-bottom--lg",
										j.docItemWrapper,
										((s = {}),
										(s[j.docItemWrapperEnhanced] = I),
										s),
									),
								},
								n.createElement(i.Zo, { components: q.Z }, p),
							),
						),
					),
				);
			}
			const J = function (e) {
				var t = e.route.routes,
					a = e.versionMetadata,
					i = e.location,
					o = t.find(function (e) {
						return (0, Y.LX)(i.pathname, e);
					});
				return o
					? n.createElement(
							G,
							{ currentDocRoute: o, versionMetadata: a },
							(0, r.Z)(t, { versionMetadata: a }),
						)
					: n.createElement(K.default, e);
			};
		},
		4608: (e, t, a) => {
			a.r(t), a.d(t, { default: () => r });
			var n = a(7294),
				i = a(2049),
				o = a(4973);
			const r = function () {
				return n.createElement(
					i.Z,
					{
						title: (0, o.I)({
							id: "theme.NotFound.title",
							message: "Page Not Found",
						}),
					},
					n.createElement(
						"main",
						{ className: "container margin-vert--xl" },
						n.createElement(
							"div",
							{ className: "row" },
							n.createElement(
								"div",
								{ className: "col col--6 col--offset-3" },
								n.createElement(
									"h1",
									{ className: "hero__title" },
									n.createElement(
										o.Z,
										{
											id: "theme.NotFound.title",
											description:
												"The title of the 404 page",
										},
										"Page Not Found",
									),
								),
								n.createElement(
									"p",
									null,
									n.createElement(
										o.Z,
										{
											id: "theme.NotFound.p1",
											description:
												"The first paragraph of the 404 page",
										},
										"We could not find what you were looking for.",
									),
								),
								n.createElement(
									"p",
									null,
									n.createElement(
										o.Z,
										{
											id: "theme.NotFound.p2",
											description:
												"The 2nd paragraph of the 404 page",
										},
										"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.",
									),
								),
							),
						),
					),
				);
			};
		},
	},
]);
