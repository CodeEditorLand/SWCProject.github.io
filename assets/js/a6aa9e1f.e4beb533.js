"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[3089],
	{
		4428: (e, a, t) => {
			t.r(a), t.d(a, { default: () => g });
			var l = t(7294),
				r = t(2263),
				n = t(2049),
				i = t(3146),
				s = t(6742),
				m = t(4973);
			const o = function (e) {
				var a = e.metadata,
					t = a.previousPage,
					r = a.nextPage;
				return l.createElement(
					"nav",
					{
						className: "pagination-nav",
						"aria-label": (0, m.I)({
							id: "theme.blog.paginator.navAriaLabel",
							message: "Blog list page navigation",
							description:
								"The ARIA label for the blog pagination",
						}),
					},
					l.createElement(
						"div",
						{ className: "pagination-nav__item" },
						t &&
							l.createElement(
								s.Z,
								{ className: "pagination-nav__link", to: t },
								l.createElement(
									"div",
									{ className: "pagination-nav__label" },
									"\xab",
									" ",
									l.createElement(
										m.Z,
										{
											id: "theme.blog.paginator.newerEntries",
											description:
												"The label used to navigate to the newer blog posts page (previous page)",
										},
										"Newer Entries",
									),
								),
							),
					),
					l.createElement(
						"div",
						{
							className:
								"pagination-nav__item pagination-nav__item--next",
						},
						r &&
							l.createElement(
								s.Z,
								{ className: "pagination-nav__link", to: r },
								l.createElement(
									"div",
									{ className: "pagination-nav__label" },
									l.createElement(
										m.Z,
										{
											id: "theme.blog.paginator.olderEntries",
											description:
												"The label used to navigate to the older blog posts page (next page)",
										},
										"Older Entries",
									),
									" ",
									"\xbb",
								),
							),
					),
				);
			};
			var c = t(5601),
				d = t(9306);
			const g = function (e) {
				var a = e.metadata,
					t = e.items,
					s = e.sidebar,
					m = (0, r.Z)().siteConfig.title,
					g = a.blogDescription,
					p = a.blogTitle,
					u = "/" === a.permalink ? m : p;
				return l.createElement(
					n.Z,
					{
						title: u,
						description: g,
						wrapperClassName: d.kM.wrapper.blogPages,
						pageClassName: d.kM.page.blogListPage,
						searchMetadatas: { tag: "blog_posts_list" },
					},
					l.createElement(
						"div",
						{ className: "container margin-vert--lg" },
						l.createElement(
							"div",
							{ className: "row" },
							l.createElement(
								"aside",
								{ className: "col col--3" },
								l.createElement(c.Z, { sidebar: s }),
							),
							l.createElement(
								"main",
								{ className: "col col--7" },
								t.map(function (e) {
									var a = e.content;
									return l.createElement(
										i.Z,
										{
											key: a.metadata.permalink,
											frontMatter: a.frontMatter,
											metadata: a.metadata,
											truncated: a.metadata.truncated,
										},
										l.createElement(a, null),
									);
								}),
								l.createElement(o, { metadata: a }),
							),
						),
					),
				);
			};
		},
		3146: (e, a, t) => {
			t.d(a, { Z: () => v });
			var l = t(7294),
				r = t(6010),
				n = t(3905),
				i = t(4973),
				s = t(6742),
				m = t(9306),
				o = t(7933),
				c = t(1217),
				d = t(6146);
			const g = "blogPostTitle_d4p0",
				p = "blogPostData_-Im+",
				u = "blogPostDetailsFull_xD8n";
			const v = function (e) {
				var a,
					t,
					v,
					E =
						((t = (0, m.c2)().selectMessage),
						function (e) {
							var a = Math.ceil(e);
							return t(
								a,
								(0, i.I)(
									{
										id: "theme.blog.post.readingTime.plurals",
										description:
											'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
										message:
											"One min read|{readingTime} min read",
									},
									{ readingTime: a },
								),
							);
						}),
					b = e.children,
					h = e.frontMatter,
					_ = e.metadata,
					N = e.truncated,
					Z = e.isBlogPostPage,
					f = void 0 !== Z && Z,
					k = _.date,
					T = _.formattedDate,
					w = _.permalink,
					I = _.tags,
					L = _.readingTime,
					P = _.title,
					M = _.editUrl,
					x = h.author,
					y = h.image,
					C = h.keywords,
					A = h.author_url || h.authorURL,
					F = h.author_title || h.authorTitle,
					R = h.author_image_url || h.authorImageURL;
				return l.createElement(
					l.Fragment,
					null,
					l.createElement(c.Z, { keywords: C, image: y }),
					l.createElement(
						"article",
						{ className: f ? void 0 : "margin-bottom--xl" },
						((v = f ? "h1" : "h2"),
						l.createElement(
							"header",
							null,
							l.createElement(
								v,
								{ className: g },
								f ? P : l.createElement(s.Z, { to: w }, P),
							),
							l.createElement(
								"div",
								{ className: (0, r.Z)(p, "margin-vert--md") },
								l.createElement("time", { dateTime: k }, T),
								L &&
									l.createElement(
										l.Fragment,
										null,
										" \xb7 ",
										E(L),
									),
							),
							l.createElement(
								"div",
								{ className: "avatar margin-vert--md" },
								R &&
									l.createElement(
										s.Z,
										{
											className:
												"avatar__photo-link avatar__photo",
											href: A,
										},
										l.createElement("img", {
											src: R,
											alt: x,
										}),
									),
								l.createElement(
									"div",
									{ className: "avatar__intro" },
									x &&
										l.createElement(
											l.Fragment,
											null,
											l.createElement(
												"div",
												{ className: "avatar__name" },
												l.createElement(
													s.Z,
													{ href: A },
													x,
												),
											),
											l.createElement(
												"small",
												{
													className:
														"avatar__subtitle",
												},
												F,
											),
										),
								),
							),
						)),
						l.createElement(
							"div",
							{ className: "markdown" },
							l.createElement(n.Zo, { components: o.Z }, b),
						),
						(I.length > 0 || N) &&
							l.createElement(
								"footer",
								{
									className: (0, r.Z)(
										"row docusaurus-mt-lg",
										((a = {}), (a[u] = f), a),
									),
								},
								I.length > 0 &&
									l.createElement(
										"div",
										{ className: "col" },
										l.createElement(
											"b",
											null,
											l.createElement(
												i.Z,
												{
													id: "theme.tags.tagsListLabel",
													description:
														"The label alongside a tag list",
												},
												"Tags:",
											),
										),
										I.map(function (e) {
											var a = e.label,
												t = e.permalink;
											return l.createElement(
												s.Z,
												{
													key: t,
													className:
														"margin-horiz--sm",
													to: t,
												},
												a,
											);
										}),
									),
								f &&
									M &&
									l.createElement(
										"div",
										{ className: "col margin-top--sm" },
										l.createElement(d.Z, { editUrl: M }),
									),
								!f &&
									N &&
									l.createElement(
										"div",
										{ className: "col text--right" },
										l.createElement(
											s.Z,
											{
												to: _.permalink,
												"aria-label":
													"Read more about " + P,
											},
											l.createElement(
												"b",
												null,
												l.createElement(
													i.Z,
													{
														id: "theme.blog.post.readMore",
														description:
															"The label used in blog post item excerpts to link to full blog posts",
													},
													"Read More",
												),
											),
										),
									),
							),
					),
				);
			};
		},
		5601: (e, a, t) => {
			t.d(a, { Z: () => p });
			var l = t(7294),
				r = t(6010),
				n = t(6742);
			const i = "sidebar_q+wC",
				s = "sidebarItemTitle_9G5K",
				m = "sidebarItemList_6T4b",
				o = "sidebarItem_cjdF",
				c = "sidebarItemLink_zyXk",
				d = "sidebarItemLinkActive_wcJs";
			var g = t(4973);
			function p(e) {
				var a = e.sidebar;
				return 0 === a.items.length
					? null
					: l.createElement(
							"nav",
							{
								className: (0, r.Z)(i, "thin-scrollbar"),
								"aria-label": (0, g.I)({
									id: "theme.blog.sidebar.navAriaLabel",
									message: "Blog recent posts navigation",
									description:
										"The ARIA label for recent posts in the blog sidebar",
								}),
							},
							l.createElement(
								"div",
								{ className: (0, r.Z)(s, "margin-bottom--md") },
								a.title,
							),
							l.createElement(
								"ul",
								{ className: m },
								a.items.map(function (e) {
									return l.createElement(
										"li",
										{ key: e.permalink, className: o },
										l.createElement(
											n.Z,
											{
												isNavLink: !0,
												to: e.permalink,
												className: c,
												activeClassName: d,
											},
											e.title,
										),
									);
								}),
							),
						);
			}
		},
		6146: (e, a, t) => {
			t.d(a, { Z: () => d });
			var l = t(7294),
				r = t(4973),
				n = t(7462),
				i = t(3366),
				s = t(6010);
			const m = "iconEdit_mS5F";
			var o = ["className"];
			const c = function (e) {
				var a = e.className,
					t = (0, i.Z)(e, o);
				return l.createElement(
					"svg",
					(0, n.Z)(
						{
							fill: "currentColor",
							height: "20",
							width: "20",
							viewBox: "0 0 40 40",
							className: (0, s.Z)(m, a),
							"aria-hidden": "true",
						},
						t,
					),
					l.createElement(
						"g",
						null,
						l.createElement("path", {
							d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z",
						}),
					),
				);
			};
			function d(e) {
				var a = e.editUrl;
				return l.createElement(
					"a",
					{ href: a, target: "_blank", rel: "noreferrer noopener" },
					l.createElement(c, null),
					l.createElement(
						r.Z,
						{
							id: "theme.common.editThisPage",
							description:
								"The link label to edit the current page",
						},
						"Edit this page",
					),
				);
			}
		},
	},
]);
