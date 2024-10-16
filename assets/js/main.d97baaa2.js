/*! For license information please see main.d97baaa2.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
	[179],
	{
		9782: (e, t, n) => {
			"use strict";
			n.r(t), n.d(t, { default: () => r });
			const r = {
				title: "swc",
				tagline: "Speedy web compiler",
				url: "https://swc.rs",
				baseUrl: "/",
				organizationName: "swc-project",
				projectName: "swc",
				favicon: "img/favicon.png",
				customFields: {
					users: [
						{
							caption: "Next.js",
							lightImage: "/img/users/nextjs-logotype-light.svg",
							darkImage: "/img/users/nextjs-logotype-dark.svg",
							infoLink: "https://nextjs.org/",
							pinned: !0,
						},
						{
							caption: "Parcel",
							lightImage: "/img/users/parceljs.png",
							darkImage: "/img/users/parceljs.png",
							infoLink: "https://parceljs.org/",
							pinned: !0,
						},
						{
							caption: "Deno",
							lightImage: "/img/users/deno.svg",
							darkImage: "/img/users/deno.svg",
							infoLink: "https://deno.land",
							pinned: !0,
						},
						{
							caption: "Tencent",
							image: "/img/users/tencent.svg",
							infoLink: "https://www.tencent.com",
							pinned: !1,
						},
						{
							caption: "Shopify",
							image: "/img/users/shopify.svg",
							infoLink: "https://www.shopify.com/",
							pinned: !1,
						},
						{
							caption: "ByteDance",
							image: "/img/users/byte-dance.png",
							infoLink: "https://www.bytedance.com",
							pinned: !1,
						},
						{
							caption: "Framer",
							image: "/img/users/framer.svg",
							infoLink: "https://framer.com/",
							pinned: !1,
						},
						{
							caption: "Fundamentei",
							image: "/img/users/fundamentei.png",
							infoLink: "https://fundamentei.com/",
							pinned: !1,
						},
						{
							caption: "strapi",
							lightImage: "/img/users/strapi.svg",
							darkImage: "/img/users/strapi-dark.svg",
							infoLink: "https://strapi.io/",
							pinned: !0,
						},
						{
							caption: "octopol",
							image: "/img/users/octopol.jpeg",
							infoLink: "https://octopol.io/",
							pinned: !1,
						},
						{
							caption: "Pollen",
							image: "/img/users/pollen.png",
							infoLink: "https://team.pollen.co/",
							pinned: !1,
						},
					],
					repoUrl: "https://github.com/swc-project/swc",
					sponsors: [],
					twitterImage: "img/swc.png",
					facebookAppId: "3577925395580880",
				},
				onBrokenLinks: "log",
				onBrokenMarkdownLinks: "log",
				presets: [
					[
						"@docusaurus/preset-classic",
						{
							docs: {
								sidebarPath:
									"/home/runner/work/website/website/sidebars.json",
								showLastUpdateAuthor: !0,
								showLastUpdateTime: !0,
							},
							theme: {
								customCss: [
									"/home/runner/work/website/website/src/css/custom.css",
								],
							},
							blog: { blogSidebarCount: 1e3 },
						},
					],
				],
				plugins: [],
				themeConfig: {
					navbar: {
						title: "SWC",
						items: [
							{
								to: "docs/installation",
								label: "Docs",
								position: "right",
							},
							{
								href: "https://rustdoc.swc.rs/swc/",
								label: "Rustdocs",
								position: "right",
							},
							{ to: "blog", label: "Blog", position: "right" },
							{
								href: "https://play.swc.rs/",
								label: "Playground",
								position: "right",
							},
							{
								href: "https://opencollective.com/swc",
								label: "Donate",
								position: "right",
							},
							{
								href: "https://github.com/swc-project/swc",
								label: "GitHub",
								position: "right",
							},
						],
						hideOnScroll: !1,
					},
					image: "img/swc.png",
					footer: {
						links: [],
						copyright:
							"Copyright \xa9 2020 The swc project developers",
						logo: {
							src: "https://raw.githubusercontent.com/swc-project/logo/master/swc.png",
						},
						style: "light",
					},
					algolia: {
						apiKey: "5b6acdf7dc8baaa86317236bb5e2bb9e",
						indexName: "swc-project",
						algoliaOptions: {},
						contextualSearch: !1,
						appId: "BH4D9OD16A",
						searchParameters: {},
					},
					gtag: { trackingID: "UA-81467907-3" },
					colorMode: {
						defaultMode: "light",
						disableSwitch: !1,
						respectPrefersColorScheme: !1,
						switchConfig: {
							darkIcon: "\ud83c\udf1c",
							darkIconStyle: {},
							lightIcon: "\ud83c\udf1e",
							lightIconStyle: {},
						},
					},
					docs: { versionPersistence: "localStorage" },
					metadatas: [],
					prism: { additionalLanguages: [] },
					hideableSidebar: !1,
				},
				baseUrlIssueBanner: !0,
				i18n: {
					defaultLocale: "en",
					locales: ["en"],
					localeConfigs: {},
				},
				onDuplicateRoutes: "warn",
				themes: [],
				titleDelimiter: "|",
				noIndex: !1,
			};
		},
		8845: (e, t, n) => {
			"use strict";
			var r = n(7294),
				o = n(3935),
				a = n(3727),
				i = n(2203),
				c = n.n(i);
			const l = function (e) {
					var t = e.error,
						n = e.retry,
						o = e.pastDelay;
					return t
						? r.createElement(
								"div",
								{
									style: {
										align: "center",
										color: "#fff",
										backgroundColor: "#fa383e",
										borderColor: "#fa383e",
										borderStyle: "solid",
										borderRadius: "0.25rem",
										borderWidth: "1px",
										boxSizing: "border-box",
										display: "block",
										padding: "1rem",
										flex: "0 0 50%",
										marginLeft: "25%",
										marginRight: "25%",
										marginTop: "5rem",
										maxWidth: "50%",
										width: "100%",
									},
								},
								r.createElement("p", null, t.message),
								r.createElement(
									"div",
									null,
									r.createElement(
										"button",
										{ type: "button", onClick: n },
										"Retry",
									),
								),
							)
						: o
							? r.createElement(
									"div",
									{
										style: {
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											height: "100vh",
										},
									},
									r.createElement(
										"svg",
										{
											id: "loader",
											style: {
												width: 128,
												height: 110,
												position: "absolute",
												top: "calc(100vh - 64%)",
											},
											viewBox: "0 0 45 45",
											xmlns: "http://www.w3.org/2000/svg",
											stroke: "#61dafb",
										},
										r.createElement(
											"g",
											{
												fill: "none",
												fillRule: "evenodd",
												transform: "translate(1 1)",
												strokeWidth: "2",
											},
											r.createElement(
												"circle",
												{
													cx: "22",
													cy: "22",
													r: "6",
													strokeOpacity: "0",
												},
												r.createElement("animate", {
													attributeName: "r",
													begin: "1.5s",
													dur: "3s",
													values: "6;22",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
												r.createElement("animate", {
													attributeName:
														"stroke-opacity",
													begin: "1.5s",
													dur: "3s",
													values: "1;0",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
												r.createElement("animate", {
													attributeName:
														"stroke-width",
													begin: "1.5s",
													dur: "3s",
													values: "2;0",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
											),
											r.createElement(
												"circle",
												{
													cx: "22",
													cy: "22",
													r: "6",
													strokeOpacity: "0",
												},
												r.createElement("animate", {
													attributeName: "r",
													begin: "3s",
													dur: "3s",
													values: "6;22",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
												r.createElement("animate", {
													attributeName:
														"stroke-opacity",
													begin: "3s",
													dur: "3s",
													values: "1;0",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
												r.createElement("animate", {
													attributeName:
														"stroke-width",
													begin: "3s",
													dur: "3s",
													values: "2;0",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
											),
											r.createElement(
												"circle",
												{ cx: "22", cy: "22", r: "8" },
												r.createElement("animate", {
													attributeName: "r",
													begin: "0s",
													dur: "1.5s",
													values: "6;1;2;3;4;5;6",
													calcMode: "linear",
													repeatCount: "indefinite",
												}),
											),
										),
									),
								)
							: null;
				},
				s = JSON.parse(
					'{"/-f49":{"component":"1df93b7f","config":"5e9f5e1a"},"/blog-b9f":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"3fcffd6e"},{"content":"0b430dd0"},{"content":"3d7cd003"},{"content":"c8c33d06"},{"content":"0558bf90"},{"content":"a1ae0022"},{"content":"acbead03"},{"content":"a4944005"},{"content":"922b86b8"},{"content":"2894c377"}],"metadata":"b2b675dd"},"/blog/2019/02/08/Introducing-swc-1.0-9e8":{"component":"ccc49370","sidebar":"814f3328","content":"b219c29f"},"/blog/2019/11/30/announcing-swc-1.1.0-537":{"component":"ccc49370","sidebar":"814f3328","content":"dc2f8904"},"/blog/2019/12/01/swc-1.1.1-653":{"component":"ccc49370","sidebar":"814f3328","content":"4f28247e"},"/blog/2019/12/02/swc-1.1.2-36b":{"component":"ccc49370","sidebar":"814f3328","content":"1800142e"},"/blog/2019/12/04/swc-1.1.3-33e":{"component":"ccc49370","sidebar":"814f3328","content":"9d79f51b"},"/blog/2019/12/09/swc-1.1.4-723":{"component":"ccc49370","sidebar":"814f3328","content":"9128d9a7"},"/blog/2019/12/11/swc-1.1.5-8d3":{"component":"ccc49370","sidebar":"814f3328","content":"d7495890"},"/blog/2019/12/14/swc-1.1.6-7e3":{"component":"ccc49370","sidebar":"814f3328","content":"b1a7f480"},"/blog/2019/12/21/swc-1.1.7-a33":{"component":"ccc49370","sidebar":"814f3328","content":"cf94f071"},"/blog/2019/12/24/swc-1.1.8-bcc":{"component":"ccc49370","sidebar":"814f3328","content":"fb0db5ed"},"/blog/2019/12/25/swc-1.1.9-2ff":{"component":"ccc49370","sidebar":"814f3328","content":"3e7e1859"},"/blog/2019/12/29/swc-1.1.10-883":{"component":"ccc49370","sidebar":"814f3328","content":"989b6397"},"/blog/2020/01/02/swc-1.1.11-a95":{"component":"ccc49370","sidebar":"814f3328","content":"c58a83e5"},"/blog/2020/01/04/pmutil-675":{"component":"ccc49370","sidebar":"814f3328","content":"0d6dc4dc"},"/blog/2020/01/08/swc-1.1.12-2f9":{"component":"ccc49370","sidebar":"814f3328","content":"b1d6ece5"},"/blog/2020/01/17/swc-1.1.13-3d7":{"component":"ccc49370","sidebar":"814f3328","content":"77de598d"},"/blog/2020/01/23/swc-1.1.14-48e":{"component":"ccc49370","sidebar":"814f3328","content":"4806b341"},"/blog/2020/01/24/swc-1.1.15-c98":{"component":"ccc49370","sidebar":"814f3328","content":"a97447a1"},"/blog/2020/01/26/swc-1.1.16-f5b":{"component":"ccc49370","sidebar":"814f3328","content":"b4695bfa"},"/blog/2020/01/30/swc-1.1.17-29a":{"component":"ccc49370","sidebar":"814f3328","content":"825b9d9a"},"/blog/2020/02/07/swc-1.1.19-4a8":{"component":"ccc49370","sidebar":"814f3328","content":"4942d1d1"},"/blog/2020/02/07/swc-1.1.20-cea":{"component":"ccc49370","sidebar":"814f3328","content":"772a62c1"},"/blog/2020/02/13/swc-1.1.21-b4d":{"component":"ccc49370","sidebar":"814f3328","content":"df5e78cf"},"/blog/2020/02/13/swc-1.1.22-ac3":{"component":"ccc49370","sidebar":"814f3328","content":"7b8f660b"},"/blog/2020/02/13/swc-1.1.23-502":{"component":"ccc49370","sidebar":"814f3328","content":"6b40274c"},"/blog/2020/02/13/swc-1.1.24-b6b":{"component":"ccc49370","sidebar":"814f3328","content":"6b07550b"},"/blog/2020/02/16/why-is-swc-fast-911":{"component":"ccc49370","sidebar":"814f3328","content":"a901397c"},"/blog/2020/02/17/swc-1.1.25-7da":{"component":"ccc49370","sidebar":"814f3328","content":"26de87aa"},"/blog/2020/02/19/swc-1.1.26-b0d":{"component":"ccc49370","sidebar":"814f3328","content":"1b24304e"},"/blog/2020/02/20/swc-1.1.27-e80":{"component":"ccc49370","sidebar":"814f3328","content":"0977b363"},"/blog/2020/02/22/swc-1.1.28-913":{"component":"ccc49370","sidebar":"814f3328","content":"1d28b59d"},"/blog/2020/02/27/swc-1.1.29-a95":{"component":"ccc49370","sidebar":"814f3328","content":"6387e397"},"/blog/2020/02/29/swc-1.1.30-476":{"component":"ccc49370","sidebar":"814f3328","content":"9168b223"},"/blog/2020/03/01/swc-1.1.31-b92":{"component":"ccc49370","sidebar":"814f3328","content":"c795e4a4"},"/blog/2020/03/04/swc-1.1.32-e4d":{"component":"ccc49370","sidebar":"814f3328","content":"94e859c2"},"/blog/2020/03/04/swc-1.1.33-0d8":{"component":"ccc49370","sidebar":"814f3328","content":"161c94df"},"/blog/2020/03/10/swc-1.1.34-48c":{"component":"ccc49370","sidebar":"814f3328","content":"833223a1"},"/blog/2020/03/14/swc-1.1.35-847":{"component":"ccc49370","sidebar":"814f3328","content":"3e9cc81f"},"/blog/2020/03/16/roadmap-and-call-for-help-dac":{"component":"ccc49370","sidebar":"814f3328","content":"74bf6e98"},"/blog/2020/03/26/swc-1.1.36-7cc":{"component":"ccc49370","sidebar":"814f3328","content":"341cab8e"},"/blog/2020/03/28/swc-1.1.37-cd5":{"component":"ccc49370","sidebar":"814f3328","content":"434996a9"},"/blog/2020/04/05/swc-1.1.38-9d0":{"component":"ccc49370","sidebar":"814f3328","content":"f51e94d9"},"/blog/2020/04/10/swc-1.1.39-989":{"component":"ccc49370","sidebar":"814f3328","content":"fbe2974c"},"/blog/2020/05/03/swc-1.1.40-40a":{"component":"ccc49370","sidebar":"814f3328","content":"cddbd8cb"},"/blog/2020/05/05/swc-1.1.41-935":{"component":"ccc49370","sidebar":"814f3328","content":"b763582e"},"/blog/2020/05/05/swc-1.1.42-95b":{"component":"ccc49370","sidebar":"814f3328","content":"2fa16b25"},"/blog/2020/05/16/swc-1.1.43-8b6":{"component":"ccc49370","sidebar":"814f3328","content":"fbe4aad9"},"/blog/2020/05/19/swc-1.1.44-039":{"component":"ccc49370","sidebar":"814f3328","content":"64a149bf"},"/blog/2020/05/19/swc-1.1.45-104":{"component":"ccc49370","sidebar":"814f3328","content":"e0c13094"},"/blog/2020/05/21/swc-1.1.46-c8a":{"component":"ccc49370","sidebar":"814f3328","content":"99fdcaee"},"/blog/2020/05/22/swc-1.1.47-4b9":{"component":"ccc49370","sidebar":"814f3328","content":"b49cdfa0"},"/blog/2020/05/25/swc-1.1.48-26e":{"component":"ccc49370","sidebar":"814f3328","content":"83152060"},"/blog/2020/05/28/swc-1.1.49-ca3":{"component":"ccc49370","sidebar":"814f3328","content":"8907e3cb"},"/blog/2020/05/28/swc-1.1.50-eed":{"component":"ccc49370","sidebar":"814f3328","content":"6fc60a08"},"/blog/2020/05/30/swc-1.1.51-6d3":{"component":"ccc49370","sidebar":"814f3328","content":"2330f997"},"/blog/2020/06/02/swc-1.1.52-5ac":{"component":"ccc49370","sidebar":"814f3328","content":"0b20075c"},"/blog/2020/06/03/swc-1.1.53-fa9":{"component":"ccc49370","sidebar":"814f3328","content":"4ec4d251"},"/blog/2020/06/06/swc-1.1.54-515":{"component":"ccc49370","sidebar":"814f3328","content":"7e3bff33"},"/blog/2020/06/09/swc-1.1.55-a1b":{"component":"ccc49370","sidebar":"814f3328","content":"b785dbd1"},"/blog/2020/06/10/swc-1.1.56-888":{"component":"ccc49370","sidebar":"814f3328","content":"be4e9357"},"/blog/2020/06/11/swc-1.1.57-4e7":{"component":"ccc49370","sidebar":"814f3328","content":"117ed7b3"},"/blog/2020/06/13/swc-1.1.58-2f8":{"component":"ccc49370","sidebar":"814f3328","content":"f68824d8"},"/blog/2020/06/18/swc-1.2-39b":{"component":"ccc49370","sidebar":"814f3328","content":"5ff29455"},"/blog/2020/06/19/swc-1.2.5-019":{"component":"ccc49370","sidebar":"814f3328","content":"1f39bfda"},"/blog/2020/06/21/swc-1.2.6-2fe":{"component":"ccc49370","sidebar":"814f3328","content":"e409479c"},"/blog/2020/07/01/swc-1.2.7-863":{"component":"ccc49370","sidebar":"814f3328","content":"1d2804ec"},"/blog/2020/07/05/swc-1.2.8-f17":{"component":"ccc49370","sidebar":"814f3328","content":"00d0a9ab"},"/blog/2020/07/26/swc-1.2.9-32c":{"component":"ccc49370","sidebar":"814f3328","content":"d7bb5dd3"},"/blog/2020/07/31/swc-1.2.10-784":{"component":"ccc49370","sidebar":"814f3328","content":"4b82c06a"},"/blog/2020/08/02/swc-1.2.11-318":{"component":"ccc49370","sidebar":"814f3328","content":"cb337519"},"/blog/2020/08/06/swc-1.2.12-88a":{"component":"ccc49370","sidebar":"814f3328","content":"e1729d04"},"/blog/2020/08/07/swc-1.2.13-0cf":{"component":"ccc49370","sidebar":"814f3328","content":"1759dc0a"},"/blog/2020/08/08/swc-1.2.14-bd0":{"component":"ccc49370","sidebar":"814f3328","content":"1c9d37b8"},"/blog/2020/08/09/swc-1.2.15-c4e":{"component":"ccc49370","sidebar":"814f3328","content":"4070f6c4"},"/blog/2020/08/10/swc-1.2.16-7fc":{"component":"ccc49370","sidebar":"814f3328","content":"63fda32f"},"/blog/2020/08/10/swc-1.2.17-b0d":{"component":"ccc49370","sidebar":"814f3328","content":"fcbc8326"},"/blog/2020/08/11/swc-1.2.18-cdf":{"component":"ccc49370","sidebar":"814f3328","content":"986f48a4"},"/blog/2020/08/13/swc-1.2.19-42a":{"component":"ccc49370","sidebar":"814f3328","content":"4fe74b07"},"/blog/2020/08/15/swc-1.2.20-295":{"component":"ccc49370","sidebar":"814f3328","content":"220946db"},"/blog/2020/08/24/swc-1.2.21-dbf":{"component":"ccc49370","sidebar":"814f3328","content":"fdf9f6a1"},"/blog/2020/08/31/swc-1.2.22-fc6":{"component":"ccc49370","sidebar":"814f3328","content":"a890692f"},"/blog/2020/09/08/swc-1.2.23-757":{"component":"ccc49370","sidebar":"814f3328","content":"072831cc"},"/blog/2020/09/11/swc-1.2.25-a47":{"component":"ccc49370","sidebar":"814f3328","content":"33f6bb93"},"/blog/2020/09/11/swc-1.2.26-ed3":{"component":"ccc49370","sidebar":"814f3328","content":"018f923c"},"/blog/2020/09/13/swc-1.2.27-60a":{"component":"ccc49370","sidebar":"814f3328","content":"886f08e8"},"/blog/2020/09/18/swc-1.2.30-bbf":{"component":"ccc49370","sidebar":"814f3328","content":"d6197210"},"/blog/2020/09/22/swc-1.2.31-8ed":{"component":"ccc49370","sidebar":"814f3328","content":"ea7feea2"},"/blog/2020/09/22/swc-1.2.32-02d":{"component":"ccc49370","sidebar":"814f3328","content":"5b73194e"},"/blog/2020/09/24/swc-1.2.33-ffe":{"component":"ccc49370","sidebar":"814f3328","content":"c611b9c3"},"/blog/2020/09/24/swc-1.2.34-713":{"component":"ccc49370","sidebar":"814f3328","content":"ef909456"},"/blog/2020/10/04/swc-1.2.35-2fb":{"component":"ccc49370","sidebar":"814f3328","content":"e891a997"},"/blog/2020/10/06/swc-1.2.36-d23":{"component":"ccc49370","sidebar":"814f3328","content":"2010f2e7"},"/blog/2020/10/29/swc-1.2.37-c83":{"component":"ccc49370","sidebar":"814f3328","content":"293753c6"},"/blog/2020/11/08/swc-1.2.38-7fd":{"component":"ccc49370","sidebar":"814f3328","content":"7102d853"},"/blog/2020/11/21/swc-1.2.39-604":{"component":"ccc49370","sidebar":"814f3328","content":"45b3ae5b"},"/blog/2020/12/04/swc-1.2.40-153":{"component":"ccc49370","sidebar":"814f3328","content":"b541701e"},"/blog/2020/12/22/swc-1.2.41-891":{"component":"ccc49370","sidebar":"814f3328","content":"98471a5b"},"/blog/2020/12/29/swc-1.2.42-afe":{"component":"ccc49370","sidebar":"814f3328","content":"6e37a9bb"},"/blog/2020/12/30/swc-1.2.43-171":{"component":"ccc49370","sidebar":"814f3328","content":"ed3f99f3"},"/blog/2021/01/11/swc-1.2.44-38e":{"component":"ccc49370","sidebar":"814f3328","content":"8a477436"},"/blog/2021/01/14/swc-1.2.45-196":{"component":"ccc49370","sidebar":"814f3328","content":"cbc539f8"},"/blog/2021/01/23/swc-1.2.46-eb0":{"component":"ccc49370","sidebar":"814f3328","content":"56fdd1a6"},"/blog/2021/01/31/swc-1.2.47-93b":{"component":"ccc49370","sidebar":"814f3328","content":"4810fa33"},"/blog/2021/02/22/swc-1.2.48-c73":{"component":"ccc49370","sidebar":"814f3328","content":"fb3916ba"},"/blog/2021/03/03/swc-1.2.50-5f0":{"component":"ccc49370","sidebar":"814f3328","content":"e92903c7"},"/blog/2021/03/28/swc-1.2.51-c8e":{"component":"ccc49370","sidebar":"814f3328","content":"daef0d89"},"/blog/2021/04/11/swc-1.2.52-c6d":{"component":"ccc49370","sidebar":"814f3328","content":"07b9bbce"},"/blog/2021/04/17/swc-1.2.53-27f":{"component":"ccc49370","sidebar":"814f3328","content":"c1496a49"},"/blog/2021/04/20/swc-1.2.54-ec4":{"component":"ccc49370","sidebar":"814f3328","content":"0195933b"},"/blog/2021/05/07/swc-1.2.55-0cf":{"component":"ccc49370","sidebar":"814f3328","content":"1ee73d83"},"/blog/2021/05/11/swc-1.2.57-3d6":{"component":"ccc49370","sidebar":"814f3328","content":"f07713a0"},"/blog/2021/05/21/swc-1.2.58-2a3":{"component":"ccc49370","sidebar":"814f3328","content":"8d74f920"},"/blog/2021/05/30/swc-1.2.59-cc2":{"component":"ccc49370","sidebar":"814f3328","content":"82aeadee"},"/blog/2021/06/07/swc-1.2.60-446":{"component":"ccc49370","sidebar":"814f3328","content":"854c100d"},"/blog/2021/06/16/swc-1.2.61-17e":{"component":"ccc49370","sidebar":"814f3328","content":"854dada8"},"/blog/2021/06/27/swc-1.2.62-e5b":{"component":"ccc49370","sidebar":"814f3328","content":"5c719ff9"},"/blog/2021/07/05/swc-1.2.63-24c":{"component":"ccc49370","sidebar":"814f3328","content":"779a27db"},"/blog/2021/07/14/swc-1.2.64-78e":{"component":"ccc49370","sidebar":"814f3328","content":"d54358a0"},"/blog/2021/07/18/swc-1.2.65-916":{"component":"ccc49370","sidebar":"814f3328","content":"f0275856"},"/blog/2021/07/20/swc-1.2.66-467":{"component":"ccc49370","sidebar":"814f3328","content":"3ba4118d"},"/blog/2021/07/31/swc-1.2.67-e1e":{"component":"ccc49370","sidebar":"814f3328","content":"ca654d34"},"/blog/2021/08/01/swc-1.2.70-560":{"component":"ccc49370","sidebar":"814f3328","content":"f69025dd"},"/blog/2021/08/02/swc-1.2.71-381":{"component":"ccc49370","sidebar":"814f3328","content":"51557494"},"/blog/2021/08/04/swc-1.2.72-d4a":{"component":"ccc49370","sidebar":"814f3328","content":"3581f01d"},"/blog/2021/08/04/swc-1.2.73-a21":{"component":"ccc49370","sidebar":"814f3328","content":"e0bf19f5"},"/blog/2021/08/08/swc-1.2.75-7a2":{"component":"ccc49370","sidebar":"814f3328","content":"3cb2b861"},"/blog/2021/08/10/swc-1.2.76-5ad":{"component":"ccc49370","sidebar":"814f3328","content":"58a37e7b"},"/blog/2021/08/13/swc-1.2.77-a92":{"component":"ccc49370","sidebar":"814f3328","content":"b0fddbba"},"/blog/2021/08/16/swc-1.2.78-4b6":{"component":"ccc49370","sidebar":"814f3328","content":"4520efc8"},"/blog/2021/08/19/swc-1.2.79-ac9":{"component":"ccc49370","sidebar":"814f3328","content":"113f402a"},"/blog/2021/08/20/swc-1.2.80-09c":{"component":"ccc49370","sidebar":"814f3328","content":"a6b59883"},"/blog/2021/08/25/swc-1.2.81-380":{"component":"ccc49370","sidebar":"814f3328","content":"dbb4eb98"},"/blog/2021/08/25/swc-1.2.82-a8a":{"component":"ccc49370","sidebar":"814f3328","content":"28ab4419"},"/blog/2021/08/28/swc-1.2.83-0c1":{"component":"ccc49370","sidebar":"814f3328","content":"f635ecc0"},"/blog/2021/09/01/swc-1.2.84-53b":{"component":"ccc49370","sidebar":"814f3328","content":"be4476b8"},"/blog/2021/09/09/swc-1.2.85-ca8":{"component":"ccc49370","sidebar":"814f3328","content":"f8e21603"},"/blog/2021/09/11/swc-1.2.86-de3":{"component":"ccc49370","sidebar":"814f3328","content":"61ccdfbb"},"/blog/2021/09/15/swc-1.2.87-4ac":{"component":"ccc49370","sidebar":"814f3328","content":"c0741ed3"},"/blog/2021/09/16/swc-1.2.88-053":{"component":"ccc49370","sidebar":"814f3328","content":"d1543c4f"},"/blog/2021/09/22/swc-1.2.89-33b":{"component":"ccc49370","sidebar":"814f3328","content":"d203ef3e"},"/blog/2021/09/23/swc-1.2.90-1d9":{"component":"ccc49370","sidebar":"814f3328","content":"841491c9"},"/blog/2021/09/25/swc-1.2.91-98c":{"component":"ccc49370","sidebar":"814f3328","content":"3570a846"},"/blog/2021/09/29/swc-1.2.92-0c6":{"component":"ccc49370","sidebar":"814f3328","content":"83b975c7"},"/blog/2021/10/03/swc-1.2.93-557":{"component":"ccc49370","sidebar":"814f3328","content":"1be465b0"},"/blog/2021/10/08/swc-1.2.94-20b":{"component":"ccc49370","sidebar":"814f3328","content":"cbc6861e"},"/blog/2021/10/09/swc-1.2.95-c59":{"component":"ccc49370","sidebar":"814f3328","content":"314883aa"},"/blog/2021/10/14/swc-1.2.96-0f1":{"component":"ccc49370","sidebar":"814f3328","content":"811756d9"},"/blog/2021/10/15/swc-1.2.97-adc":{"component":"ccc49370","sidebar":"814f3328","content":"8ffce989"},"/blog/2021/10/16/swc-1.2.98-de7":{"component":"ccc49370","sidebar":"814f3328","content":"50c38616"},"/blog/2021/10/18/swc-1.2.99-041":{"component":"ccc49370","sidebar":"814f3328","content":"16c51240"},"/blog/2021/10/19/swc-1.2.100-f8e":{"component":"ccc49370","sidebar":"814f3328","content":"321a3b8d"},"/blog/2021/10/20/swc-1.2.101-2b2":{"component":"ccc49370","sidebar":"814f3328","content":"91eeac31"},"/blog/2021/10/21/swc-1.2.102-0b7":{"component":"ccc49370","sidebar":"814f3328","content":"220519cd"},"/blog/2021/10/25/swc-1.2.103-2a8":{"component":"ccc49370","sidebar":"814f3328","content":"2ea007dc"},"/blog/2021/10/27/swc-1.2.104-41f":{"component":"ccc49370","sidebar":"814f3328","content":"dd52c2e1"},"/blog/2021/10/28/swc-1.2.105-910":{"component":"ccc49370","sidebar":"814f3328","content":"dcf2642b"},"/blog/2021/10/30/swc-1.2.106-15c":{"component":"ccc49370","sidebar":"814f3328","content":"5a935253"},"/blog/2021/11/07/swc-1.2.107-c03":{"component":"ccc49370","sidebar":"814f3328","content":"948cbcc2"},"/blog/page/10-b5c":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"6747fd5b"},{"content":"27c8fe95"},{"content":"ed992011"},{"content":"413cdd6a"},{"content":"1f874392"},{"content":"f826d3d4"},{"content":"8704c233"},{"content":"21b5e25c"},{"content":"a739fcd9"},{"content":"d4b25b6c"}],"metadata":"9006ed44"},"/blog/page/11-5e6":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"a83ee2ea"},{"content":"8809d1ed"},{"content":"905b15dc"},{"content":"cd1fbe90"},{"content":"e7f6118c"},{"content":"869c15ce"},{"content":"5e4d0a1d"},{"content":"6ad7f141"},{"content":"945b9dd8"},{"content":"57746611"}],"metadata":"d285ed2c"},"/blog/page/12-346":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"1d75ee53"},{"content":"7a9a6638"},{"content":"0e1b7215"},{"content":"c1812efe"},{"content":"666501ea"},{"content":"dd12c637"},{"content":"35b76702"},{"content":"85501d7b"},{"content":"6e52c467"},{"content":"03fb7705"}],"metadata":"9f0ef2b0"},"/blog/page/13-a46":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"e4744c41"},{"content":"6175ed5f"},{"content":"de80cd54"},{"content":"0f503b1d"},{"content":"51f4f74d"},{"content":"d975a9dc"},{"content":"45ffd89f"},{"content":"5c320234"},{"content":"0e750030"},{"content":"899edc56"}],"metadata":"f4165232"},"/blog/page/14-818":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"14b73f97"},{"content":"ce797fda"},{"content":"e56714ad"},{"content":"3d531ef0"},{"content":"e8953e1b"},{"content":"a5bc79e7"},{"content":"d78971d5"},{"content":"0139a14b"},{"content":"2b3d3d2b"},{"content":"d2662f1a"}],"metadata":"8d351656"},"/blog/page/15-e8c":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"7fdf42bc"},{"content":"7c0eeab1"},{"content":"6ffd1882"},{"content":"7aaaa817"},{"content":"95e17e83"},{"content":"848f31c4"},{"content":"2407db01"},{"content":"f132baba"},{"content":"ba892ba4"},{"content":"edc99e2a"}],"metadata":"72095f03"},"/blog/page/16-f31":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"f6c1d565"},{"content":"125a3c7e"},{"content":"78a4e30b"},{"content":"bc8893a9"},{"content":"e00eba5b"},{"content":"2ec5306d"},{"content":"0fc08948"},{"content":"f83bb4e4"}],"metadata":"6249c28d"},"/blog/page/2-7ec":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"817f2b31"},{"content":"004aff8f"},{"content":"ecc818c4"},{"content":"775a5bd9"},{"content":"f3e552c5"},{"content":"bc0f7fbb"},{"content":"89e1621e"},{"content":"9f5d8c3d"},{"content":"2b6cbf91"},{"content":"04dec0f4"}],"metadata":"8eb4e46b"},"/blog/page/3-fed":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"82a6508c"},{"content":"b881275d"},{"content":"ba4368d0"},{"content":"a71b0182"},{"content":"e54c5e7a"},{"content":"c322a198"},{"content":"3ed1e10e"},{"content":"ce491c9b"},{"content":"5bfbc957"},{"content":"b8f5ed52"}],"metadata":"92999a1c"},"/blog/page/4-1f0":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"e1c2f979"},{"content":"2f286103"},{"content":"fbe91200"},{"content":"ee9a2829"},{"content":"cafaed19"},{"content":"7eed7fbc"},{"content":"6345bba8"},{"content":"5632e4e5"},{"content":"c27d217c"},{"content":"fb598ac2"}],"metadata":"7d9726a8"},"/blog/page/5-590":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"34b77466"},{"content":"c3a22a80"},{"content":"24fe9736"},{"content":"aa6e63f3"},{"content":"1b180dfe"},{"content":"5317f01a"},{"content":"cac39ab0"},{"content":"4e6596fa"},{"content":"eb38a467"},{"content":"269b2262"}],"metadata":"11ce4159"},"/blog/page/6-a06":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"dc33f72d"},{"content":"0486d9c2"},{"content":"d4ae352e"},{"content":"8235c6bb"},{"content":"a1980811"},{"content":"8f6a51b0"},{"content":"73dc499d"},{"content":"bc7acbb9"},{"content":"7f051ed6"},{"content":"a1892a13"}],"metadata":"44ac4dbb"},"/blog/page/7-97a":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"ca990617"},{"content":"8dbac861"},{"content":"b013b8b9"},{"content":"74d81549"},{"content":"ce4c4f0a"},{"content":"de2089a0"},{"content":"a7f8c33f"},{"content":"beca0f8e"},{"content":"d7902655"},{"content":"a5c85080"}],"metadata":"52099127"},"/blog/page/8-c5e":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"f27c2aa4"},{"content":"2f0cc6c2"},{"content":"3a315f0f"},{"content":"88984e55"},{"content":"6af175f8"},{"content":"7547c175"},{"content":"54384ab0"},{"content":"b7ceb803"},{"content":"6b9f65dc"},{"content":"30fa2ea4"}],"metadata":"98b657d8"},"/blog/page/9-5fb":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"2cb78a2e"},{"content":"87c9b9d6"},{"content":"72c37805"},{"content":"3d484800"},{"content":"f6740d97"},{"content":"130bf564"},{"content":"32d56cf7"},{"content":"ce4764e8"},{"content":"1e82915b"},{"content":"ce848033"}],"metadata":"f091cc2c"},"/help-ae4":{"component":"1f391b9e","content":"7d87cf11"},"/repl-9e4":{"component":"e12b9eca","config":"5e9f5e1a"},"/search-2d8":{"component":"be0067a2"},"/users-5e4":{"component":"4bc8650c","config":"5e9f5e1a"},"/docs-6ac":{"component":"1be78505","versionMetadata":"935f2afb"},"/docs/benchmark-autogen-8da":{"component":"17896441","content":"47893932"},"/docs/benchmark-transform-6b9":{"component":"17896441","content":"e03fdf64"},"/docs/comparison-babel-ce7":{"component":"17896441","content":"a2d69860"},"/docs/config-js-minify-481":{"component":"17896441","content":"f07dc1bc"},"/docs/config-js-module-5b1":{"component":"17896441","content":"d01c0d9f"},"/docs/configuring-swc-110":{"component":"17896441","content":"11ee862c"},"/docs/installation-b2a":{"component":"17896441","content":"3b8c55ea"},"/docs/migrating-from-babel-cli-326":{"component":"17896441","content":"2ecf4f42"},"/docs/migrating-from-babel-core-e7b":{"component":"17896441","content":"174aa16c"},"/docs/online-repl-112":{"component":"17896441","content":"529c8b28"},"/docs/preset-env-ee2":{"component":"17896441","content":"019f71b0"},"/docs/spack-basic-796":{"component":"17896441","content":"999a7ae7"},"/docs/spack-multi-bundle-a7a":{"component":"17896441","content":"ae93d13f"},"/docs/usage-core-ab8":{"component":"17896441","content":"66196655"},"/docs/usage-plugin-052":{"component":"17896441","content":"ad9848ef"},"/docs/usage-spack-cli-e98":{"component":"17896441","content":"ca09dc3b"},"/docs/usage-swc-cli-abd":{"component":"17896441","content":"a24ccb6b"},"/docs/usage-swc-jest-494":{"component":"17896441","content":"9db08d6f"},"/docs/usage-swc-loader-228":{"component":"17896441","content":"cf542758"},"/docs/usage-swc-wasm-871":{"component":"17896441","content":"77ca8fb5"}}',
				),
				u = {
					"004aff8f": [
						function () {
							return n.e(1797).then(n.bind(n, 8595));
						},
						"@site/blog/2021-10-14-swc-1.2.96.md?truncated=true",
						8595,
					],
					"00d0a9ab": [
						function () {
							return n.e(9439).then(n.bind(n, 5302));
						},
						"@site/blog/2020-07-05-swc-1.2.8.md",
						5302,
					],
					"0139a14b": [
						function () {
							return n.e(2204).then(n.bind(n, 4950));
						},
						"@site/blog/2020-02-07-swc-1.1.20.md?truncated=true",
						4950,
					],
					"018f923c": [
						function () {
							return n.e(3248).then(n.bind(n, 8341));
						},
						"@site/blog/2020-09-11-swc-1.2.26.md",
						8341,
					],
					"0195933b": [
						function () {
							return n.e(6462).then(n.bind(n, 6383));
						},
						"@site/blog/2021-04-20-swc-1.2.54.md",
						6383,
					],
					"019f71b0": [
						function () {
							return n.e(7154).then(n.bind(n, 7131));
						},
						"@site/docs/configuring-preset-env.md",
						7131,
					],
					"03fb7705": [
						function () {
							return n.e(6203).then(n.bind(n, 198));
						},
						"@site/blog/2020-03-16-roadmap-and-call-for-help.md?truncated=true",
						198,
					],
					"0486d9c2": [
						function () {
							return n.e(1443).then(n.bind(n, 7983));
						},
						"@site/blog/2021-04-11-swc-1.2.52.md?truncated=true",
						7983,
					],
					"04dec0f4": [
						function () {
							return n.e(5977).then(n.bind(n, 6259));
						},
						"@site/blog/2021-09-16-swc-1.2.88.md?truncated=true",
						6259,
					],
					"0558bf90": [
						function () {
							return n.e(4755).then(n.bind(n, 9827));
						},
						"@site/blog/2021-10-25-swc-1.2.103.md?truncated=true",
						9827,
					],
					"072831cc": [
						function () {
							return n.e(7394).then(n.bind(n, 733));
						},
						"@site/blog/2020-09-08-swc-1.2.23.md",
						733,
					],
					"07b9bbce": [
						function () {
							return n.e(5604).then(n.bind(n, 5315));
						},
						"@site/blog/2021-04-11-swc-1.2.52.md",
						5315,
					],
					"0977b363": [
						function () {
							return n.e(2947).then(n.bind(n, 2523));
						},
						"@site/blog/2020-02-20-swc-1.1.27.md",
						2523,
					],
					"0b20075c": [
						function () {
							return n.e(3850).then(n.bind(n, 8006));
						},
						"@site/blog/2020-06-02-swc-1.1.52.md",
						8006,
					],
					"0b430dd0": [
						function () {
							return n.e(8092).then(n.bind(n, 8378));
						},
						"@site/blog/2021-10-30-swc-1.2.106.md?truncated=true",
						8378,
					],
					"0d6dc4dc": [
						function () {
							return n.e(4514).then(n.bind(n, 9135));
						},
						"@site/blog/2020-01-04-pmutil.md",
						9135,
					],
					"0e1b7215": [
						function () {
							return n.e(5593).then(n.bind(n, 767));
						},
						"@site/blog/2020-05-05-swc-1.1.41.md?truncated=true",
						767,
					],
					"0e750030": [
						function () {
							return n.e(7139).then(n.bind(n, 9213));
						},
						"@site/blog/2020-02-20-swc-1.1.27.md?truncated=true",
						9213,
					],
					"0f503b1d": [
						function () {
							return n.e(9906).then(n.bind(n, 3901));
						},
						"@site/blog/2020-03-04-swc-1.1.33.md?truncated=true",
						3901,
					],
					"0fc08948": [
						function () {
							return n.e(5697).then(n.bind(n, 1146));
						},
						"@site/blog/2019-11-30-announcing-swc-1.1.0.md?truncated=true",
						1146,
					],
					"113f402a": [
						function () {
							return n.e(9213).then(n.bind(n, 8177));
						},
						"@site/blog/2021-08-19-swc-1.2.79.md",
						8177,
					],
					"117ed7b3": [
						function () {
							return n.e(9887).then(n.bind(n, 867));
						},
						"@site/blog/2020-06-11-swc-1.1.57.md",
						867,
					],
					"11ce4159": [
						function () {
							return n.e(1531).then(n.t.bind(n, 5034, 19));
						},
						"~blog/default/blog-page-5-c6b.json",
						5034,
					],
					"11ee862c": [
						function () {
							return n.e(4921).then(n.bind(n, 2717));
						},
						"@site/docs/configuring-swc.md",
						2717,
					],
					"125a3c7e": [
						function () {
							return n.e(7531).then(n.bind(n, 8599));
						},
						"@site/blog/2019-12-11-swc-1.1.5.md?truncated=true",
						8599,
					],
					"130bf564": [
						function () {
							return n.e(6961).then(n.bind(n, 3987));
						},
						"@site/blog/2020-08-08-swc-1.2.14.md?truncated=true",
						3987,
					],
					"14b73f97": [
						function () {
							return n.e(3977).then(n.bind(n, 8876));
						},
						"@site/blog/2020-02-17-swc-1.1.25.md?truncated=true",
						8876,
					],
					"161c94df": [
						function () {
							return n.e(2318).then(n.bind(n, 4741));
						},
						"@site/blog/2020-03-04-swc-1.1.33.md",
						4741,
					],
					"16c51240": [
						function () {
							return n.e(3019).then(n.bind(n, 7995));
						},
						"@site/blog/2021-10-18-swc-1.2.99.md",
						7995,
					],
					"174aa16c": [
						function () {
							return n.e(8862).then(n.bind(n, 6196));
						},
						"@site/docs/migrating-from-babel-core.md",
						6196,
					],
					"1759dc0a": [
						function () {
							return n.e(5780).then(n.bind(n, 5721));
						},
						"@site/blog/2020-08-07-swc-1.2.13.md",
						5721,
					],
					17896441: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(7918),
							]).then(n.bind(n, 8070));
						},
						"@theme/DocItem",
						8070,
					],
					"1800142e": [
						function () {
							return n.e(3249).then(n.bind(n, 9534));
						},
						"@site/blog/2019-12-02-swc-1.1.2.md",
						9534,
					],
					"1b180dfe": [
						function () {
							return n.e(8418).then(n.bind(n, 7871));
						},
						"@site/blog/2021-06-07-swc-1.2.60.md?truncated=true",
						7871,
					],
					"1b24304e": [
						function () {
							return n.e(5505).then(n.bind(n, 5796));
						},
						"@site/blog/2020-02-19-swc-1.1.26.md",
						5796,
					],
					"1be465b0": [
						function () {
							return n.e(5497).then(n.bind(n, 1080));
						},
						"@site/blog/2021-10-03-swc-1.2.93.md",
						1080,
					],
					"1be78505": [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(849),
								n.e(9514),
							]).then(n.bind(n, 3616));
						},
						"@theme/DocPage",
						3616,
					],
					"1c9d37b8": [
						function () {
							return n.e(1913).then(n.bind(n, 4268));
						},
						"@site/blog/2020-08-08-swc-1.2.14.md",
						4268,
					],
					"1d2804ec": [
						function () {
							return n.e(5349).then(n.bind(n, 1979));
						},
						"@site/blog/2020-07-01-swc-1.2.7.md",
						1979,
					],
					"1d28b59d": [
						function () {
							return n.e(75).then(n.bind(n, 5711));
						},
						"@site/blog/2020-02-22-swc-1.1.28.md",
						5711,
					],
					"1d75ee53": [
						function () {
							return n.e(3597).then(n.bind(n, 9468));
						},
						"@site/blog/2020-05-19-swc-1.1.45.md?truncated=true",
						9468,
					],
					"1df93b7f": [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(3237),
							]).then(n.bind(n, 5792));
						},
						"@site/src/pages/index.tsx",
						5792,
					],
					"1e82915b": [
						function () {
							return n.e(9856).then(n.bind(n, 3095));
						},
						"@site/blog/2020-08-02-swc-1.2.11.md?truncated=true",
						3095,
					],
					"1ee73d83": [
						function () {
							return n.e(8982).then(n.bind(n, 1159));
						},
						"@site/blog/2021-05-07-swc-1.2.55.md",
						1159,
					],
					"1f391b9e": [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(849),
								n.e(3085),
							]).then(n.bind(n, 7979));
						},
						"@theme/MDXPage",
						7979,
					],
					"1f39bfda": [
						function () {
							return n.e(8504).then(n.bind(n, 4442));
						},
						"@site/blog/2020-06-19-swc-1.2.5.md",
						4442,
					],
					"1f874392": [
						function () {
							return n.e(4190).then(n.bind(n, 901));
						},
						"@site/blog/2020-06-19-swc-1.2.5.md?truncated=true",
						901,
					],
					"2010f2e7": [
						function () {
							return n.e(4612).then(n.bind(n, 9533));
						},
						"@site/blog/2020-10-06-swc-1.2.36.md",
						9533,
					],
					"21b5e25c": [
						function () {
							return n.e(9760).then(n.bind(n, 428));
						},
						"@site/blog/2020-06-11-swc-1.1.57.md?truncated=true",
						428,
					],
					"220519cd": [
						function () {
							return n.e(6237).then(n.bind(n, 4124));
						},
						"@site/blog/2021-10-21-swc-1.2.102.md",
						4124,
					],
					"220946db": [
						function () {
							return n.e(5039).then(n.bind(n, 8155));
						},
						"@site/blog/2020-08-15-swc-1.2.20.md",
						8155,
					],
					"2330f997": [
						function () {
							return n.e(6455).then(n.bind(n, 5385));
						},
						"@site/blog/2020-05-30-swc-1.1.51.md",
						5385,
					],
					"2407db01": [
						function () {
							return n.e(21).then(n.bind(n, 4214));
						},
						"@site/blog/2019-12-29-swc-1.1.10.md?truncated=true",
						4214,
					],
					"24fe9736": [
						function () {
							return n.e(7116).then(n.bind(n, 2963));
						},
						"@site/blog/2021-06-27-swc-1.2.62.md?truncated=true",
						2963,
					],
					"269b2262": [
						function () {
							return n.e(8834).then(n.bind(n, 7296));
						},
						"@site/blog/2021-04-20-swc-1.2.54.md?truncated=true",
						7296,
					],
					"26de87aa": [
						function () {
							return n.e(7393).then(n.bind(n, 8064));
						},
						"@site/blog/2020-02-17-swc-1.1.25.md",
						8064,
					],
					"27c8fe95": [
						function () {
							return n.e(7296).then(n.bind(n, 5137));
						},
						"@site/blog/2020-07-05-swc-1.2.8.md?truncated=true",
						5137,
					],
					"2894c377": [
						function () {
							return n.e(3370).then(n.bind(n, 2670));
						},
						"@site/blog/2021-10-16-swc-1.2.98.md?truncated=true",
						2670,
					],
					"28ab4419": [
						function () {
							return n.e(1713).then(n.bind(n, 1513));
						},
						"@site/blog/2021-08-25-swc-1.2.82.md",
						1513,
					],
					"293753c6": [
						function () {
							return n.e(5242).then(n.bind(n, 903));
						},
						"@site/blog/2020-10-29-swc-1.2.37.md",
						903,
					],
					"2b3d3d2b": [
						function () {
							return n.e(5651).then(n.bind(n, 921));
						},
						"@site/blog/2020-01-30-swc-1.1.17.md?truncated=true",
						921,
					],
					"2b6cbf91": [
						function () {
							return n.e(9225).then(n.bind(n, 3477));
						},
						"@site/blog/2021-09-22-swc-1.2.89.md?truncated=true",
						3477,
					],
					"2cb78a2e": [
						function () {
							return n.e(2304).then(n.bind(n, 8153));
						},
						"@site/blog/2020-08-13-swc-1.2.19.md?truncated=true",
						8153,
					],
					"2ea007dc": [
						function () {
							return n.e(816).then(n.bind(n, 5281));
						},
						"@site/blog/2021-10-25-swc-1.2.103.md",
						5281,
					],
					"2ec5306d": [
						function () {
							return n.e(4393).then(n.bind(n, 9174));
						},
						"@site/blog/2019-12-01-swc-1.1.1.md?truncated=true",
						9174,
					],
					"2ecf4f42": [
						function () {
							return n.e(5680).then(n.bind(n, 8214));
						},
						"@site/docs/migrating-from-babel-cli.md",
						8214,
					],
					"2f0cc6c2": [
						function () {
							return n.e(4807).then(n.bind(n, 1437));
						},
						"@site/blog/2020-09-22-swc-1.2.32.md?truncated=true",
						1437,
					],
					"2f286103": [
						function () {
							return n.e(813).then(n.bind(n, 8698));
						},
						"@site/blog/2021-08-10-swc-1.2.76.md?truncated=true",
						8698,
					],
					"2fa16b25": [
						function () {
							return n.e(7163).then(n.bind(n, 7736));
						},
						"@site/blog/2020-05-05-swc-1.1.42.md",
						7736,
					],
					"30fa2ea4": [
						function () {
							return n.e(8963).then(n.bind(n, 6855));
						},
						"@site/blog/2020-08-15-swc-1.2.20.md?truncated=true",
						6855,
					],
					"314883aa": [
						function () {
							return n.e(8852).then(n.bind(n, 5028));
						},
						"@site/blog/2021-10-09-swc-1.2.95.md",
						5028,
					],
					"321a3b8d": [
						function () {
							return n.e(7243).then(n.bind(n, 2335));
						},
						"@site/blog/2021-10-19-swc-1.2.100.md",
						2335,
					],
					"32d56cf7": [
						function () {
							return n.e(9411).then(n.bind(n, 6492));
						},
						"@site/blog/2020-08-07-swc-1.2.13.md?truncated=true",
						6492,
					],
					"33f6bb93": [
						function () {
							return n.e(5508).then(n.bind(n, 9969));
						},
						"@site/blog/2020-09-11-swc-1.2.25.md",
						9969,
					],
					"341cab8e": [
						function () {
							return n.e(782).then(n.bind(n, 8693));
						},
						"@site/blog/2020-03-26-swc-1.1.36.md",
						8693,
					],
					"34b77466": [
						function () {
							return n.e(8821).then(n.bind(n, 3885));
						},
						"@site/blog/2021-07-14-swc-1.2.64.md?truncated=true",
						3885,
					],
					"3570a846": [
						function () {
							return n.e(6503).then(n.bind(n, 8141));
						},
						"@site/blog/2021-09-25-swc-1.2.91.md",
						8141,
					],
					"3581f01d": [
						function () {
							return n.e(2376).then(n.bind(n, 5081));
						},
						"@site/blog/2021-08-04-swc-1.2.72.md",
						5081,
					],
					"35b76702": [
						function () {
							return n.e(9419).then(n.bind(n, 1452));
						},
						"@site/blog/2020-04-05-swc-1.1.38.md?truncated=true",
						1452,
					],
					"3a315f0f": [
						function () {
							return n.e(9870).then(n.bind(n, 650));
						},
						"@site/blog/2020-09-18-swc-1.2.30.md?truncated=true",
						650,
					],
					"3b8c55ea": [
						function () {
							return n.e(3217).then(n.bind(n, 872));
						},
						"@site/docs/installation.md",
						872,
					],
					"3ba4118d": [
						function () {
							return n.e(8295).then(n.bind(n, 433));
						},
						"@site/blog/2021-07-20-swc-1.2.66.md",
						433,
					],
					"3cb2b861": [
						function () {
							return n.e(2548).then(n.bind(n, 2947));
						},
						"@site/blog/2021-08-08-swc-1.2.75.md",
						2947,
					],
					"3d484800": [
						function () {
							return n.e(9650).then(n.bind(n, 2604));
						},
						"@site/blog/2020-08-10-swc-1.2.17.md?truncated=true",
						2604,
					],
					"3d531ef0": [
						function () {
							return n.e(6224).then(n.bind(n, 237));
						},
						"@site/blog/2020-02-13-swc-1.1.22.md?truncated=true",
						237,
					],
					"3d7cd003": [
						function () {
							return n.e(9259).then(n.bind(n, 2246));
						},
						"@site/blog/2021-10-28-swc-1.2.105.md?truncated=true",
						2246,
					],
					"3e7e1859": [
						function () {
							return n.e(2320).then(n.bind(n, 137));
						},
						"@site/blog/2019-12-25-swc-1.1.9.md",
						137,
					],
					"3e9cc81f": [
						function () {
							return n.e(8322).then(n.bind(n, 5823));
						},
						"@site/blog/2020-03-14-swc-1.1.35.md",
						5823,
					],
					"3ed1e10e": [
						function () {
							return n.e(7058).then(n.bind(n, 9001));
						},
						"@site/blog/2021-08-25-swc-1.2.82.md?truncated=true",
						9001,
					],
					"3fcffd6e": [
						function () {
							return n.e(9861).then(n.bind(n, 658));
						},
						"@site/blog/2021-11-07-swc-1.2.107.md?truncated=true",
						658,
					],
					"4070f6c4": [
						function () {
							return n.e(5056).then(n.bind(n, 6569));
						},
						"@site/blog/2020-08-09-swc-1.2.15.md",
						6569,
					],
					"413cdd6a": [
						function () {
							return n.e(3106).then(n.bind(n, 864));
						},
						"@site/blog/2020-06-21-swc-1.2.6.md?truncated=true",
						864,
					],
					"434996a9": [
						function () {
							return n.e(7511).then(n.bind(n, 8483));
						},
						"@site/blog/2020-03-28-swc-1.1.37.md",
						8483,
					],
					"44ac4dbb": [
						function () {
							return n.e(7142).then(n.t.bind(n, 399, 19));
						},
						"~blog/default/blog-page-6-772.json",
						399,
					],
					"4520efc8": [
						function () {
							return n.e(1691).then(n.bind(n, 6430));
						},
						"@site/blog/2021-08-16-swc-1.2.78.md",
						6430,
					],
					"45b3ae5b": [
						function () {
							return n.e(1254).then(n.bind(n, 5318));
						},
						"@site/blog/2020-11-21-swc-1.2.39.md",
						5318,
					],
					"45ffd89f": [
						function () {
							return n.e(1988).then(n.bind(n, 9822));
						},
						"@site/blog/2020-02-27-swc-1.1.29.md?truncated=true",
						9822,
					],
					47893932: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(538),
								n.e(3685),
							]).then(n.bind(n, 3696));
						},
						"@site/docs/benchmark-autogen.md",
						3696,
					],
					"4806b341": [
						function () {
							return n.e(8030).then(n.bind(n, 6985));
						},
						"@site/blog/2020-01-23-swc-1.1.14.md",
						6985,
					],
					"4810fa33": [
						function () {
							return n.e(2314).then(n.bind(n, 5572));
						},
						"@site/blog/2021-01-31-swc-1.2.47.md",
						5572,
					],
					"4942d1d1": [
						function () {
							return n.e(6481).then(n.bind(n, 7029));
						},
						"@site/blog/2020-02-07-swc-1.1.19.md",
						7029,
					],
					"4b82c06a": [
						function () {
							return n.e(3471).then(n.bind(n, 4243));
						},
						"@site/blog/2020-07-31-swc-1.2.10.md",
						4243,
					],
					"4bc8650c": [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(6477),
							]).then(n.bind(n, 694));
						},
						"@site/src/pages/users.tsx",
						694,
					],
					"4e6596fa": [
						function () {
							return n.e(3941).then(n.bind(n, 8725));
						},
						"@site/blog/2021-05-11-swc-1.2.57.md?truncated=true",
						8725,
					],
					"4ec4d251": [
						function () {
							return n.e(7349).then(n.bind(n, 8543));
						},
						"@site/blog/2020-06-03-swc-1.1.53.md",
						8543,
					],
					"4f28247e": [
						function () {
							return n.e(2910).then(n.bind(n, 6155));
						},
						"@site/blog/2019-12-01-swc-1.1.1.md",
						6155,
					],
					"4fe74b07": [
						function () {
							return n.e(1603).then(n.bind(n, 6888));
						},
						"@site/blog/2020-08-13-swc-1.2.19.md",
						6888,
					],
					"50c38616": [
						function () {
							return n.e(2576).then(n.bind(n, 5719));
						},
						"@site/blog/2021-10-16-swc-1.2.98.md",
						5719,
					],
					51557494: [
						function () {
							return n.e(5940).then(n.bind(n, 2878));
						},
						"@site/blog/2021-08-02-swc-1.2.71.md",
						2878,
					],
					"51f4f74d": [
						function () {
							return n.e(8029).then(n.bind(n, 2511));
						},
						"@site/blog/2020-03-01-swc-1.1.31.md?truncated=true",
						2511,
					],
					52099127: [
						function () {
							return n.e(1426).then(n.t.bind(n, 4708, 19));
						},
						"~blog/default/blog-page-7-af4.json",
						4708,
					],
					"529c8b28": [
						function () {
							return n.e(449).then(n.bind(n, 1118));
						},
						"@site/docs/repl.md",
						1118,
					],
					"5317f01a": [
						function () {
							return n.e(1451).then(n.bind(n, 1086));
						},
						"@site/blog/2021-05-30-swc-1.2.59.md?truncated=true",
						1086,
					],
					"54384ab0": [
						function () {
							return n.e(1042).then(n.bind(n, 4715));
						},
						"@site/blog/2020-09-08-swc-1.2.23.md?truncated=true",
						4715,
					],
					"5632e4e5": [
						function () {
							return n.e(8114).then(n.bind(n, 6999));
						},
						"@site/blog/2021-07-31-swc-1.2.67.md?truncated=true",
						6999,
					],
					"56fdd1a6": [
						function () {
							return n.e(5617).then(n.bind(n, 2294));
						},
						"@site/blog/2021-01-23-swc-1.2.46.md",
						2294,
					],
					57746611: [
						function () {
							return n.e(9362).then(n.bind(n, 9527));
						},
						"@site/blog/2020-05-19-swc-1.1.44.md?truncated=true",
						9527,
					],
					"58a37e7b": [
						function () {
							return n.e(9342).then(n.bind(n, 3211));
						},
						"@site/blog/2021-08-10-swc-1.2.76.md",
						3211,
					],
					"5a935253": [
						function () {
							return n.e(2403).then(n.bind(n, 1679));
						},
						"@site/blog/2021-10-30-swc-1.2.106.md",
						1679,
					],
					"5b73194e": [
						function () {
							return n.e(5081).then(n.bind(n, 5058));
						},
						"@site/blog/2020-09-22-swc-1.2.32.md",
						5058,
					],
					"5bfbc957": [
						function () {
							return n.e(7964).then(n.bind(n, 9598));
						},
						"@site/blog/2021-08-19-swc-1.2.79.md?truncated=true",
						9598,
					],
					"5c320234": [
						function () {
							return n.e(146).then(n.bind(n, 8510));
						},
						"@site/blog/2020-02-22-swc-1.1.28.md?truncated=true",
						8510,
					],
					"5c719ff9": [
						function () {
							return n.e(9389).then(n.bind(n, 2673));
						},
						"@site/blog/2021-06-27-swc-1.2.62.md",
						2673,
					],
					"5e4d0a1d": [
						function () {
							return n.e(7001).then(n.bind(n, 5890));
						},
						"@site/blog/2020-05-25-swc-1.1.48.md?truncated=true",
						5890,
					],
					"5e9f5e1a": [
						function () {
							return Promise.resolve().then(n.bind(n, 9782));
						},
						"@generated/docusaurus.config",
						9782,
					],
					"5ff29455": [
						function () {
							return n.e(3062).then(n.bind(n, 4030));
						},
						"@site/blog/2020-06-18-swc-1.2.md",
						4030,
					],
					"6175ed5f": [
						function () {
							return n.e(9621).then(n.bind(n, 8242));
						},
						"@site/blog/2020-03-10-swc-1.1.34.md?truncated=true",
						8242,
					],
					"61ccdfbb": [
						function () {
							return n.e(725).then(n.bind(n, 5463));
						},
						"@site/blog/2021-09-11-swc-1.2.86.md",
						5463,
					],
					"6249c28d": [
						function () {
							return n.e(4465).then(n.t.bind(n, 6191, 19));
						},
						"~blog/default/blog-page-16-746.json",
						6191,
					],
					"6345bba8": [
						function () {
							return n.e(57).then(n.bind(n, 5651));
						},
						"@site/blog/2021-08-01-swc-1.2.70.md?truncated=true",
						5651,
					],
					"6387e397": [
						function () {
							return n.e(9132).then(n.bind(n, 9187));
						},
						"@site/blog/2020-02-27-swc-1.1.29.md",
						9187,
					],
					"63fda32f": [
						function () {
							return n.e(9977).then(n.bind(n, 9189));
						},
						"@site/blog/2020-08-10-swc-1.2.16.md",
						9189,
					],
					"64a149bf": [
						function () {
							return n.e(2045).then(n.bind(n, 9377));
						},
						"@site/blog/2020-05-19-swc-1.1.44.md",
						9377,
					],
					66196655: [
						function () {
							return n.e(6445).then(n.bind(n, 9903));
						},
						"@site/docs/usage-core.md",
						9903,
					],
					"666501ea": [
						function () {
							return n.e(8254).then(n.bind(n, 7888));
						},
						"@site/blog/2020-05-03-swc-1.1.40.md?truncated=true",
						7888,
					],
					"6747fd5b": [
						function () {
							return n.e(193).then(n.bind(n, 4494));
						},
						"@site/blog/2020-07-26-swc-1.2.9.md?truncated=true",
						4494,
					],
					"6ad7f141": [
						function () {
							return n.e(4659).then(n.bind(n, 978));
						},
						"@site/blog/2020-05-22-swc-1.1.47.md?truncated=true",
						978,
					],
					"6af175f8": [
						function () {
							return n.e(6876).then(n.bind(n, 3059));
						},
						"@site/blog/2020-09-11-swc-1.2.25.md?truncated=true",
						3059,
					],
					"6b07550b": [
						function () {
							return n.e(8065).then(n.bind(n, 1658));
						},
						"@site/blog/2020-02-13-swc-1.1.24.md",
						1658,
					],
					"6b40274c": [
						function () {
							return n.e(3497).then(n.bind(n, 9898));
						},
						"@site/blog/2020-02-13-swc-1.1.23.md",
						9898,
					],
					"6b9f65dc": [
						function () {
							return n.e(4556).then(n.bind(n, 5032));
						},
						"@site/blog/2020-08-24-swc-1.2.21.md?truncated=true",
						5032,
					],
					"6e37a9bb": [
						function () {
							return n.e(7693).then(n.bind(n, 6833));
						},
						"@site/blog/2020-12-29-swc-1.2.42.md",
						6833,
					],
					"6e52c467": [
						function () {
							return n.e(734).then(n.bind(n, 7542));
						},
						"@site/blog/2020-03-26-swc-1.1.36.md?truncated=true",
						7542,
					],
					"6fc60a08": [
						function () {
							return n.e(305).then(n.bind(n, 6491));
						},
						"@site/blog/2020-05-28-swc-1.1.50.md",
						6491,
					],
					"6ffd1882": [
						function () {
							return n.e(6066).then(n.bind(n, 258));
						},
						"@site/blog/2020-01-17-swc-1.1.13.md?truncated=true",
						258,
					],
					"7102d853": [
						function () {
							return n.e(4356).then(n.bind(n, 988));
						},
						"@site/blog/2020-11-08-swc-1.2.38.md",
						988,
					],
					"72095f03": [
						function () {
							return n.e(9028).then(n.t.bind(n, 825, 19));
						},
						"~blog/default/blog-page-15-669.json",
						825,
					],
					"72c37805": [
						function () {
							return n.e(1019).then(n.bind(n, 9309));
						},
						"@site/blog/2020-08-10-swc-1.2.16.md?truncated=true",
						9309,
					],
					"73dc499d": [
						function () {
							return n.e(4360).then(n.bind(n, 8748));
						},
						"@site/blog/2021-01-23-swc-1.2.46.md?truncated=true",
						8748,
					],
					"74bf6e98": [
						function () {
							return n.e(2477).then(n.bind(n, 9126));
						},
						"@site/blog/2020-03-16-roadmap-and-call-for-help.md",
						9126,
					],
					"74d81549": [
						function () {
							return n.e(7801).then(n.bind(n, 6271));
						},
						"@site/blog/2020-11-21-swc-1.2.39.md?truncated=true",
						6271,
					],
					"7547c175": [
						function () {
							return n.e(3802).then(n.bind(n, 1619));
						},
						"@site/blog/2020-09-11-swc-1.2.26.md?truncated=true",
						1619,
					],
					"772a62c1": [
						function () {
							return n.e(3272).then(n.bind(n, 9191));
						},
						"@site/blog/2020-02-07-swc-1.1.20.md",
						9191,
					],
					"775a5bd9": [
						function () {
							return n.e(866).then(n.bind(n, 1727));
						},
						"@site/blog/2021-10-08-swc-1.2.94.md?truncated=true",
						1727,
					],
					"779a27db": [
						function () {
							return n.e(3445).then(n.bind(n, 2806));
						},
						"@site/blog/2021-07-05-swc-1.2.63.md",
						2806,
					],
					"77ca8fb5": [
						function () {
							return n.e(9918).then(n.bind(n, 3375));
						},
						"@site/docs/usage-swc-wasm.md",
						3375,
					],
					"77de598d": [
						function () {
							return n.e(6323).then(n.bind(n, 6950));
						},
						"@site/blog/2020-01-17-swc-1.1.13.md",
						6950,
					],
					"78a4e30b": [
						function () {
							return n.e(4187).then(n.bind(n, 2187));
						},
						"@site/blog/2019-12-09-swc-1.1.4.md?truncated=true",
						2187,
					],
					"7a9a6638": [
						function () {
							return n.e(7370).then(n.bind(n, 4817));
						},
						"@site/blog/2020-05-16-swc-1.1.43.md?truncated=true",
						4817,
					],
					"7aaaa817": [
						function () {
							return n.e(5071).then(n.bind(n, 416));
						},
						"@site/blog/2020-01-08-swc-1.1.12.md?truncated=true",
						416,
					],
					"7b8f660b": [
						function () {
							return n.e(1431).then(n.bind(n, 5879));
						},
						"@site/blog/2020-02-13-swc-1.1.22.md",
						5879,
					],
					"7c0eeab1": [
						function () {
							return n.e(4255).then(n.bind(n, 466));
						},
						"@site/blog/2020-01-23-swc-1.1.14.md?truncated=true",
						466,
					],
					"7d87cf11": [
						function () {
							return n.e(1794).then(n.bind(n, 8225));
						},
						"@site/src/pages/help.md",
						8225,
					],
					"7d9726a8": [
						function () {
							return n.e(7429).then(n.t.bind(n, 9494, 19));
						},
						"~blog/default/blog-page-4-30b.json",
						9494,
					],
					"7e3bff33": [
						function () {
							return n.e(5687).then(n.bind(n, 8872));
						},
						"@site/blog/2020-06-06-swc-1.1.54.md",
						8872,
					],
					"7eed7fbc": [
						function () {
							return n.e(1435).then(n.bind(n, 5595));
						},
						"@site/blog/2021-08-02-swc-1.2.71.md?truncated=true",
						5595,
					],
					"7f051ed6": [
						function () {
							return n.e(9032).then(n.bind(n, 214));
						},
						"@site/blog/2021-01-11-swc-1.2.44.md?truncated=true",
						214,
					],
					"7fdf42bc": [
						function () {
							return n.e(20).then(n.bind(n, 6824));
						},
						"@site/blog/2020-01-24-swc-1.1.15.md?truncated=true",
						6824,
					],
					"811756d9": [
						function () {
							return n.e(5886).then(n.bind(n, 6129));
						},
						"@site/blog/2021-10-14-swc-1.2.96.md",
						6129,
					],
					"814f3328": [
						function () {
							return n.e(2535).then(n.t.bind(n, 5641, 19));
						},
						"~blog/default/blog-post-list-prop-default.json",
						5641,
					],
					"817f2b31": [
						function () {
							return n.e(7187).then(n.bind(n, 7545));
						},
						"@site/blog/2021-10-15-swc-1.2.97.md?truncated=true",
						7545,
					],
					"8235c6bb": [
						function () {
							return n.e(4872).then(n.bind(n, 4825));
						},
						"@site/blog/2021-03-03-swc-1.2.50.md?truncated=true",
						4825,
					],
					"825b9d9a": [
						function () {
							return n.e(7657).then(n.bind(n, 3139));
						},
						"@site/blog/2020-01-30-swc-1.1.17.md",
						3139,
					],
					"82a6508c": [
						function () {
							return n.e(5185).then(n.bind(n, 2768));
						},
						"@site/blog/2021-09-15-swc-1.2.87.md?truncated=true",
						2768,
					],
					"82aeadee": [
						function () {
							return n.e(4091).then(n.bind(n, 9456));
						},
						"@site/blog/2021-05-30-swc-1.2.59.md",
						9456,
					],
					83152060: [
						function () {
							return n.e(4368).then(n.bind(n, 5006));
						},
						"@site/blog/2020-05-25-swc-1.1.48.md",
						5006,
					],
					"833223a1": [
						function () {
							return n.e(6707).then(n.bind(n, 575));
						},
						"@site/blog/2020-03-10-swc-1.1.34.md",
						575,
					],
					"83b975c7": [
						function () {
							return n.e(8345).then(n.bind(n, 4956));
						},
						"@site/blog/2021-09-29-swc-1.2.92.md",
						4956,
					],
					"841491c9": [
						function () {
							return n.e(1574).then(n.bind(n, 2562));
						},
						"@site/blog/2021-09-23-swc-1.2.90.md",
						2562,
					],
					"848f31c4": [
						function () {
							return n.e(7852).then(n.bind(n, 3302));
						},
						"@site/blog/2020-01-02-swc-1.1.11.md?truncated=true",
						3302,
					],
					"854c100d": [
						function () {
							return n.e(2589).then(n.bind(n, 9608));
						},
						"@site/blog/2021-06-07-swc-1.2.60.md",
						9608,
					],
					"854dada8": [
						function () {
							return n.e(638).then(n.bind(n, 1025));
						},
						"@site/blog/2021-06-16-swc-1.2.61.md",
						1025,
					],
					"85501d7b": [
						function () {
							return n.e(3842).then(n.bind(n, 8050));
						},
						"@site/blog/2020-03-28-swc-1.1.37.md?truncated=true",
						8050,
					],
					"869c15ce": [
						function () {
							return n.e(4958).then(n.bind(n, 4146));
						},
						"@site/blog/2020-05-28-swc-1.1.50.md?truncated=true",
						4146,
					],
					"8704c233": [
						function () {
							return n.e(6603).then(n.bind(n, 4926));
						},
						"@site/blog/2020-06-13-swc-1.1.58.md?truncated=true",
						4926,
					],
					"87c9b9d6": [
						function () {
							return n.e(1238).then(n.bind(n, 9205));
						},
						"@site/blog/2020-08-11-swc-1.2.18.md?truncated=true",
						9205,
					],
					"8809d1ed": [
						function () {
							return n.e(8945).then(n.bind(n, 1108));
						},
						"@site/blog/2020-06-03-swc-1.1.53.md?truncated=true",
						1108,
					],
					"886f08e8": [
						function () {
							return n.e(3206).then(n.bind(n, 4707));
						},
						"@site/blog/2020-09-13-swc-1.2.27.md",
						4707,
					],
					"88984e55": [
						function () {
							return n.e(1413).then(n.bind(n, 5974));
						},
						"@site/blog/2020-09-13-swc-1.2.27.md?truncated=true",
						5974,
					],
					"8907e3cb": [
						function () {
							return n.e(5121).then(n.bind(n, 1381));
						},
						"@site/blog/2020-05-28-swc-1.1.49.md",
						1381,
					],
					"899edc56": [
						function () {
							return n.e(1403).then(n.bind(n, 2104));
						},
						"@site/blog/2020-02-19-swc-1.1.26.md?truncated=true",
						2104,
					],
					"89e1621e": [
						function () {
							return n.e(7842).then(n.bind(n, 4242));
						},
						"@site/blog/2021-09-25-swc-1.2.91.md?truncated=true",
						4242,
					],
					"8a477436": [
						function () {
							return n.e(7949).then(n.bind(n, 2120));
						},
						"@site/blog/2021-01-11-swc-1.2.44.md",
						2120,
					],
					"8d351656": [
						function () {
							return n.e(6326).then(n.t.bind(n, 2400, 19));
						},
						"~blog/default/blog-page-14-c05.json",
						2400,
					],
					"8d74f920": [
						function () {
							return n.e(2503).then(n.bind(n, 972));
						},
						"@site/blog/2021-05-21-swc-1.2.58.md",
						972,
					],
					"8dbac861": [
						function () {
							return n.e(8249).then(n.bind(n, 761));
						},
						"@site/blog/2020-12-22-swc-1.2.41.md?truncated=true",
						761,
					],
					"8eb4e46b": [
						function () {
							return n.e(1).then(n.t.bind(n, 2638, 19));
						},
						"~blog/default/blog-page-2-677.json",
						2638,
					],
					"8f6a51b0": [
						function () {
							return n.e(2776).then(n.bind(n, 4833));
						},
						"@site/blog/2021-01-31-swc-1.2.47.md?truncated=true",
						4833,
					],
					"8ffce989": [
						function () {
							return n.e(2919).then(n.bind(n, 7135));
						},
						"@site/blog/2021-10-15-swc-1.2.97.md",
						7135,
					],
					"9006ed44": [
						function () {
							return n.e(9849).then(n.t.bind(n, 4225, 19));
						},
						"~blog/default/blog-page-10-9a3.json",
						4225,
					],
					"905b15dc": [
						function () {
							return n.e(1790).then(n.bind(n, 9697));
						},
						"@site/blog/2020-06-02-swc-1.1.52.md?truncated=true",
						9697,
					],
					"9128d9a7": [
						function () {
							return n.e(6825).then(n.bind(n, 6726));
						},
						"@site/blog/2019-12-09-swc-1.1.4.md",
						6726,
					],
					"9168b223": [
						function () {
							return n.e(8871).then(n.bind(n, 9875));
						},
						"@site/blog/2020-02-29-swc-1.1.30.md",
						9875,
					],
					"91eeac31": [
						function () {
							return n.e(1043).then(n.bind(n, 4487));
						},
						"@site/blog/2021-10-20-swc-1.2.101.md",
						4487,
					],
					"922b86b8": [
						function () {
							return n.e(3410).then(n.bind(n, 4367));
						},
						"@site/blog/2021-10-18-swc-1.2.99.md?truncated=true",
						4367,
					],
					"92999a1c": [
						function () {
							return n.e(8442).then(n.t.bind(n, 5310, 19));
						},
						"~blog/default/blog-page-3-fd4.json",
						5310,
					],
					"935f2afb": [
						function () {
							return n.e(53).then(n.t.bind(n, 1109, 19));
						},
						"~docs/default/version-current-metadata-prop-751.json",
						1109,
					],
					"945b9dd8": [
						function () {
							return n.e(6175).then(n.bind(n, 2880));
						},
						"@site/blog/2020-05-21-swc-1.1.46.md?truncated=true",
						2880,
					],
					"948cbcc2": [
						function () {
							return n.e(2734).then(n.bind(n, 7859));
						},
						"@site/blog/2021-11-07-swc-1.2.107.md",
						7859,
					],
					"94e859c2": [
						function () {
							return n.e(1316).then(n.bind(n, 9374));
						},
						"@site/blog/2020-03-04-swc-1.1.32.md",
						9374,
					],
					"95e17e83": [
						function () {
							return n.e(9026).then(n.bind(n, 5316));
						},
						"@site/blog/2020-01-04-pmutil.md?truncated=true",
						5316,
					],
					"98471a5b": [
						function () {
							return n.e(2805).then(n.bind(n, 5842));
						},
						"@site/blog/2020-12-22-swc-1.2.41.md",
						5842,
					],
					"986f48a4": [
						function () {
							return n.e(9797).then(n.bind(n, 6522));
						},
						"@site/blog/2020-08-11-swc-1.2.18.md",
						6522,
					],
					"989b6397": [
						function () {
							return n.e(3764).then(n.bind(n, 1331));
						},
						"@site/blog/2019-12-29-swc-1.1.10.md",
						1331,
					],
					"98b657d8": [
						function () {
							return n.e(8486).then(n.t.bind(n, 5509, 19));
						},
						"~blog/default/blog-page-8-1bb.json",
						5509,
					],
					"999a7ae7": [
						function () {
							return n.e(8643).then(n.bind(n, 8311));
						},
						"@site/docs/spack-basic.md",
						8311,
					],
					"99fdcaee": [
						function () {
							return n.e(7038).then(n.bind(n, 1837));
						},
						"@site/blog/2020-05-21-swc-1.1.46.md",
						1837,
					],
					"9d79f51b": [
						function () {
							return n.e(8424).then(n.bind(n, 7213));
						},
						"@site/blog/2019-12-04-swc-1.1.3.md",
						7213,
					],
					"9db08d6f": [
						function () {
							return n.e(3672).then(n.bind(n, 8958));
						},
						"@site/docs/usage-swc-jest.md",
						8958,
					],
					"9f0ef2b0": [
						function () {
							return n.e(2308).then(n.t.bind(n, 8455, 19));
						},
						"~blog/default/blog-page-12-723.json",
						8455,
					],
					"9f5d8c3d": [
						function () {
							return n.e(9659).then(n.bind(n, 3764));
						},
						"@site/blog/2021-09-23-swc-1.2.90.md?truncated=true",
						3764,
					],
					a1892a13: [
						function () {
							return n.e(8180).then(n.bind(n, 331));
						},
						"@site/blog/2020-12-30-swc-1.2.43.md?truncated=true",
						331,
					],
					a1980811: [
						function () {
							return n.e(2198).then(n.bind(n, 2022));
						},
						"@site/blog/2021-02-22-swc-1.2.48.md?truncated=true",
						2022,
					],
					a1ae0022: [
						function () {
							return n.e(2243).then(n.bind(n, 6484));
						},
						"@site/blog/2021-10-21-swc-1.2.102.md?truncated=true",
						6484,
					],
					a24ccb6b: [
						function () {
							return n.e(7535).then(n.bind(n, 5198));
						},
						"@site/docs/usage-swc-cli.md",
						5198,
					],
					a2d69860: [
						function () {
							return n.e(6427).then(n.bind(n, 438));
						},
						"@site/docs/comparison-babel.md",
						438,
					],
					a4944005: [
						function () {
							return n.e(7519).then(n.bind(n, 4591));
						},
						"@site/blog/2021-10-19-swc-1.2.100.md?truncated=true",
						4591,
					],
					a5bc79e7: [
						function () {
							return n.e(8163).then(n.bind(n, 4446));
						},
						"@site/blog/2020-02-13-swc-1.1.24.md?truncated=true",
						4446,
					],
					a5c85080: [
						function () {
							return n.e(3347).then(n.bind(n, 6659));
						},
						"@site/blog/2020-09-24-swc-1.2.34.md?truncated=true",
						6659,
					],
					a6aa9e1f: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(849),
								n.e(3089),
							]).then(n.bind(n, 4428));
						},
						"@theme/BlogListPage",
						4428,
					],
					a6b59883: [
						function () {
							return n.e(1843).then(n.bind(n, 4655));
						},
						"@site/blog/2021-08-20-swc-1.2.80.md",
						4655,
					],
					a71b0182: [
						function () {
							return n.e(9173).then(n.bind(n, 7675));
						},
						"@site/blog/2021-09-01-swc-1.2.84.md?truncated=true",
						7675,
					],
					a739fcd9: [
						function () {
							return n.e(8728).then(n.bind(n, 1375));
						},
						"@site/blog/2020-06-10-swc-1.1.56.md?truncated=true",
						1375,
					],
					a7f8c33f: [
						function () {
							return n.e(524).then(n.bind(n, 1717));
						},
						"@site/blog/2020-10-06-swc-1.2.36.md?truncated=true",
						1717,
					],
					a83ee2ea: [
						function () {
							return n.e(5079).then(n.bind(n, 8705));
						},
						"@site/blog/2020-06-06-swc-1.1.54.md?truncated=true",
						8705,
					],
					a890692f: [
						function () {
							return n.e(9186).then(n.bind(n, 599));
						},
						"@site/blog/2020-08-31-swc-1.2.22.md",
						599,
					],
					a901397c: [
						function () {
							return n.e(2954).then(n.bind(n, 2533));
						},
						"@site/blog/2020-02-16-why-is-swc-fast.md",
						2533,
					],
					a97447a1: [
						function () {
							return n.e(1958).then(n.bind(n, 9779));
						},
						"@site/blog/2020-01-24-swc-1.1.15.md",
						9779,
					],
					aa6e63f3: [
						function () {
							return n.e(5845).then(n.bind(n, 8554));
						},
						"@site/blog/2021-06-16-swc-1.2.61.md?truncated=true",
						8554,
					],
					acbead03: [
						function () {
							return n.e(5601).then(n.bind(n, 9149));
						},
						"@site/blog/2021-10-20-swc-1.2.101.md?truncated=true",
						9149,
					],
					ad9848ef: [
						function () {
							return n.e(7301).then(n.bind(n, 5094));
						},
						"@site/docs/usage-plugin.md",
						5094,
					],
					ae93d13f: [
						function () {
							return n.e(1017).then(n.bind(n, 1640));
						},
						"@site/docs/spack-multi-bundle.md",
						1640,
					],
					b013b8b9: [
						function () {
							return n.e(1760).then(n.bind(n, 9698));
						},
						"@site/blog/2020-12-04-swc-1.2.40.md?truncated=true",
						9698,
					],
					b0fddbba: [
						function () {
							return n.e(6923).then(n.bind(n, 4167));
						},
						"@site/blog/2021-08-13-swc-1.2.77.md",
						4167,
					],
					b1a7f480: [
						function () {
							return n.e(8737).then(n.bind(n, 8568));
						},
						"@site/blog/2019-12-14-swc-1.1.6.md",
						8568,
					],
					b1d6ece5: [
						function () {
							return n.e(1321).then(n.bind(n, 7405));
						},
						"@site/blog/2020-01-08-swc-1.1.12.md",
						7405,
					],
					b219c29f: [
						function () {
							return n.e(4038).then(n.bind(n, 5788));
						},
						"@site/blog/2019-02-08-Introducing-swc-1.0.md",
						5788,
					],
					b2b675dd: [
						function () {
							return n.e(533).then(n.t.bind(n, 8017, 19));
						},
						"~blog/default/blog-c06.json",
						8017,
					],
					b4695bfa: [
						function () {
							return n.e(5).then(n.bind(n, 1002));
						},
						"@site/blog/2020-01-26-swc-1.1.16.md",
						1002,
					],
					b49cdfa0: [
						function () {
							return n.e(9405).then(n.bind(n, 1049));
						},
						"@site/blog/2020-05-22-swc-1.1.47.md",
						1049,
					],
					b541701e: [
						function () {
							return n.e(8639).then(n.bind(n, 6673));
						},
						"@site/blog/2020-12-04-swc-1.2.40.md",
						6673,
					],
					b763582e: [
						function () {
							return n.e(842).then(n.bind(n, 9469));
						},
						"@site/blog/2020-05-05-swc-1.1.41.md",
						9469,
					],
					b785dbd1: [
						function () {
							return n.e(7159).then(n.bind(n, 879));
						},
						"@site/blog/2020-06-09-swc-1.1.55.md",
						879,
					],
					b7ceb803: [
						function () {
							return n.e(9426).then(n.bind(n, 2807));
						},
						"@site/blog/2020-08-31-swc-1.2.22.md?truncated=true",
						2807,
					],
					b881275d: [
						function () {
							return n.e(3153).then(n.bind(n, 7891));
						},
						"@site/blog/2021-09-11-swc-1.2.86.md?truncated=true",
						7891,
					],
					b8f5ed52: [
						function () {
							return n.e(6385).then(n.bind(n, 9516));
						},
						"@site/blog/2021-08-16-swc-1.2.78.md?truncated=true",
						9516,
					],
					ba4368d0: [
						function () {
							return n.e(3678).then(n.bind(n, 5493));
						},
						"@site/blog/2021-09-09-swc-1.2.85.md?truncated=true",
						5493,
					],
					ba892ba4: [
						function () {
							return n.e(4597).then(n.bind(n, 215));
						},
						"@site/blog/2019-12-24-swc-1.1.8.md?truncated=true",
						215,
					],
					bc0f7fbb: [
						function () {
							return n.e(413).then(n.bind(n, 9593));
						},
						"@site/blog/2021-09-29-swc-1.2.92.md?truncated=true",
						9593,
					],
					bc7acbb9: [
						function () {
							return n.e(6827).then(n.bind(n, 887));
						},
						"@site/blog/2021-01-14-swc-1.2.45.md?truncated=true",
						887,
					],
					bc8893a9: [
						function () {
							return n.e(1529).then(n.bind(n, 8692));
						},
						"@site/blog/2019-12-04-swc-1.1.3.md?truncated=true",
						8692,
					],
					be0067a2: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(7221),
							]).then(n.bind(n, 9343));
						},
						"/home/runner/work/website/website/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchPage/index.js",
						9343,
					],
					be4476b8: [
						function () {
							return n.e(4724).then(n.bind(n, 5522));
						},
						"@site/blog/2021-09-01-swc-1.2.84.md",
						5522,
					],
					be4e9357: [
						function () {
							return n.e(6341).then(n.bind(n, 2751));
						},
						"@site/blog/2020-06-10-swc-1.1.56.md",
						2751,
					],
					beca0f8e: [
						function () {
							return n.e(9069).then(n.bind(n, 5756));
						},
						"@site/blog/2020-10-04-swc-1.2.35.md?truncated=true",
						5756,
					],
					c0741ed3: [
						function () {
							return n.e(4101).then(n.bind(n, 2512));
						},
						"@site/blog/2021-09-15-swc-1.2.87.md",
						2512,
					],
					c1496a49: [
						function () {
							return n.e(9499).then(n.bind(n, 822));
						},
						"@site/blog/2021-04-17-swc-1.2.53.md",
						822,
					],
					c1812efe: [
						function () {
							return n.e(8853).then(n.bind(n, 2795));
						},
						"@site/blog/2020-05-05-swc-1.1.42.md?truncated=true",
						2795,
					],
					c27d217c: [
						function () {
							return n.e(402).then(n.bind(n, 7234));
						},
						"@site/blog/2021-07-20-swc-1.2.66.md?truncated=true",
						7234,
					],
					c322a198: [
						function () {
							return n.e(8074).then(n.bind(n, 753));
						},
						"@site/blog/2021-08-25-swc-1.2.81.md?truncated=true",
						753,
					],
					c3a22a80: [
						function () {
							return n.e(8049).then(n.bind(n, 1548));
						},
						"@site/blog/2021-07-05-swc-1.2.63.md?truncated=true",
						1548,
					],
					c58a83e5: [
						function () {
							return n.e(9640).then(n.bind(n, 5323));
						},
						"@site/blog/2020-01-02-swc-1.1.11.md",
						5323,
					],
					c611b9c3: [
						function () {
							return n.e(9012).then(n.bind(n, 1945));
						},
						"@site/blog/2020-09-24-swc-1.2.33.md",
						1945,
					],
					c795e4a4: [
						function () {
							return n.e(1386).then(n.bind(n, 7825));
						},
						"@site/blog/2020-03-01-swc-1.1.31.md",
						7825,
					],
					c8c33d06: [
						function () {
							return n.e(7071).then(n.bind(n, 7205));
						},
						"@site/blog/2021-10-27-swc-1.2.104.md?truncated=true",
						7205,
					],
					ca09dc3b: [
						function () {
							return n.e(981).then(n.bind(n, 4641));
						},
						"@site/docs/usage-spack-cli.md",
						4641,
					],
					ca654d34: [
						function () {
							return n.e(3661).then(n.bind(n, 2453));
						},
						"@site/blog/2021-07-31-swc-1.2.67.md",
						2453,
					],
					ca990617: [
						function () {
							return n.e(7354).then(n.bind(n, 5478));
						},
						"@site/blog/2020-12-29-swc-1.2.42.md?truncated=true",
						5478,
					],
					cac39ab0: [
						function () {
							return n.e(115).then(n.bind(n, 8224));
						},
						"@site/blog/2021-05-21-swc-1.2.58.md?truncated=true",
						8224,
					],
					cafaed19: [
						function () {
							return n.e(6436).then(n.bind(n, 7208));
						},
						"@site/blog/2021-08-04-swc-1.2.73.md?truncated=true",
						7208,
					],
					cb337519: [
						function () {
							return n.e(4327).then(n.bind(n, 1722));
						},
						"@site/blog/2020-08-02-swc-1.2.11.md",
						1722,
					],
					cbc539f8: [
						function () {
							return n.e(1450).then(n.bind(n, 2546));
						},
						"@site/blog/2021-01-14-swc-1.2.45.md",
						2546,
					],
					cbc6861e: [
						function () {
							return n.e(6185).then(n.bind(n, 5714));
						},
						"@site/blog/2021-10-08-swc-1.2.94.md",
						5714,
					],
					ccc49370: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(849),
								n.e(6103),
							]).then(n.bind(n, 4147));
						},
						"@theme/BlogPostPage",
						4147,
					],
					cd1fbe90: [
						function () {
							return n.e(4568).then(n.bind(n, 6068));
						},
						"@site/blog/2020-05-30-swc-1.1.51.md?truncated=true",
						6068,
					],
					cddbd8cb: [
						function () {
							return n.e(8079).then(n.bind(n, 7795));
						},
						"@site/blog/2020-05-03-swc-1.1.40.md",
						7795,
					],
					ce4764e8: [
						function () {
							return n.e(5107).then(n.bind(n, 3148));
						},
						"@site/blog/2020-08-06-swc-1.2.12.md?truncated=true",
						3148,
					],
					ce491c9b: [
						function () {
							return n.e(4457).then(n.bind(n, 8487));
						},
						"@site/blog/2021-08-20-swc-1.2.80.md?truncated=true",
						8487,
					],
					ce4c4f0a: [
						function () {
							return n.e(904).then(n.bind(n, 8191));
						},
						"@site/blog/2020-11-08-swc-1.2.38.md?truncated=true",
						8191,
					],
					ce797fda: [
						function () {
							return n.e(5387).then(n.bind(n, 574));
						},
						"@site/blog/2020-02-16-why-is-swc-fast.md?truncated=true",
						574,
					],
					ce848033: [
						function () {
							return n.e(4668).then(n.bind(n, 4703));
						},
						"@site/blog/2020-07-31-swc-1.2.10.md?truncated=true",
						4703,
					],
					cf542758: [
						function () {
							return n.e(5018).then(n.bind(n, 2601));
						},
						"@site/docs/usage-swc-loader.md",
						2601,
					],
					cf94f071: [
						function () {
							return n.e(2266).then(n.bind(n, 5539));
						},
						"@site/blog/2019-12-21-swc-1.1.7.md",
						5539,
					],
					d01c0d9f: [
						function () {
							return n.e(9804).then(n.bind(n, 7348));
						},
						"@site/docs/config-js-module.md",
						7348,
					],
					d1543c4f: [
						function () {
							return n.e(7737).then(n.bind(n, 9244));
						},
						"@site/blog/2021-09-16-swc-1.2.88.md",
						9244,
					],
					d203ef3e: [
						function () {
							return n.e(9418).then(n.bind(n, 6234));
						},
						"@site/blog/2021-09-22-swc-1.2.89.md",
						6234,
					],
					d2662f1a: [
						function () {
							return n.e(3127).then(n.bind(n, 2752));
						},
						"@site/blog/2020-01-26-swc-1.1.16.md?truncated=true",
						2752,
					],
					d285ed2c: [
						function () {
							return n.e(6011).then(n.t.bind(n, 5770, 19));
						},
						"~blog/default/blog-page-11-34f.json",
						5770,
					],
					d4ae352e: [
						function () {
							return n.e(6143).then(n.bind(n, 354));
						},
						"@site/blog/2021-03-28-swc-1.2.51.md?truncated=true",
						354,
					],
					d4b25b6c: [
						function () {
							return n.e(1349).then(n.bind(n, 4831));
						},
						"@site/blog/2020-06-09-swc-1.1.55.md?truncated=true",
						4831,
					],
					d54358a0: [
						function () {
							return n.e(6898).then(n.bind(n, 6716));
						},
						"@site/blog/2021-07-14-swc-1.2.64.md",
						6716,
					],
					d6197210: [
						function () {
							return n.e(3574).then(n.bind(n, 2549));
						},
						"@site/blog/2020-09-18-swc-1.2.30.md",
						2549,
					],
					d7495890: [
						function () {
							return n.e(4737).then(n.bind(n, 3099));
						},
						"@site/blog/2019-12-11-swc-1.1.5.md",
						3099,
					],
					d78971d5: [
						function () {
							return n.e(7108).then(n.bind(n, 9298));
						},
						"@site/blog/2020-02-07-swc-1.1.19.md?truncated=true",
						9298,
					],
					d7902655: [
						function () {
							return n.e(5931).then(n.bind(n, 1491));
						},
						"@site/blog/2020-09-24-swc-1.2.33.md?truncated=true",
						1491,
					],
					d7bb5dd3: [
						function () {
							return n.e(6408).then(n.bind(n, 979));
						},
						"@site/blog/2020-07-26-swc-1.2.9.md",
						979,
					],
					d975a9dc: [
						function () {
							return n.e(7836).then(n.bind(n, 3618));
						},
						"@site/blog/2020-02-29-swc-1.1.30.md?truncated=true",
						3618,
					],
					daef0d89: [
						function () {
							return n.e(9529).then(n.bind(n, 4304));
						},
						"@site/blog/2021-03-28-swc-1.2.51.md",
						4304,
					],
					dbb4eb98: [
						function () {
							return n.e(9878).then(n.bind(n, 9508));
						},
						"@site/blog/2021-08-25-swc-1.2.81.md",
						9508,
					],
					dc2f8904: [
						function () {
							return n.e(5749).then(n.bind(n, 9849));
						},
						"@site/blog/2019-11-30-announcing-swc-1.1.0.md",
						9849,
					],
					dc33f72d: [
						function () {
							return n.e(6380).then(n.bind(n, 1106));
						},
						"@site/blog/2021-04-17-swc-1.2.53.md?truncated=true",
						1106,
					],
					dcf2642b: [
						function () {
							return n.e(891).then(n.bind(n, 4716));
						},
						"@site/blog/2021-10-28-swc-1.2.105.md",
						4716,
					],
					dd12c637: [
						function () {
							return n.e(7264).then(n.bind(n, 1123));
						},
						"@site/blog/2020-04-10-swc-1.1.39.md?truncated=true",
						1123,
					],
					dd52c2e1: [
						function () {
							return n.e(3634).then(n.bind(n, 6478));
						},
						"@site/blog/2021-10-27-swc-1.2.104.md",
						6478,
					],
					de2089a0: [
						function () {
							return n.e(7860).then(n.bind(n, 1802));
						},
						"@site/blog/2020-10-29-swc-1.2.37.md?truncated=true",
						1802,
					],
					de80cd54: [
						function () {
							return n.e(1527).then(n.bind(n, 8136));
						},
						"@site/blog/2020-03-04-swc-1.1.32.md?truncated=true",
						8136,
					],
					df5e78cf: [
						function () {
							return n.e(50).then(n.bind(n, 3597));
						},
						"@site/blog/2020-02-13-swc-1.1.21.md",
						3597,
					],
					e00eba5b: [
						function () {
							return n.e(9908).then(n.bind(n, 5375));
						},
						"@site/blog/2019-12-02-swc-1.1.2.md?truncated=true",
						5375,
					],
					e03fdf64: [
						function () {
							return n.e(6029).then(n.bind(n, 3097));
						},
						"@site/docs/benchmark-transform.md",
						3097,
					],
					e0bf19f5: [
						function () {
							return n.e(7649).then(n.bind(n, 356));
						},
						"@site/blog/2021-08-04-swc-1.2.73.md",
						356,
					],
					e0c13094: [
						function () {
							return n.e(4628).then(n.bind(n, 5544));
						},
						"@site/blog/2020-05-19-swc-1.1.45.md",
						5544,
					],
					e12b9eca: [
						function () {
							return Promise.all([
								n.e(532),
								n.e(5486),
								n.e(2049),
								n.e(9447),
							]).then(n.bind(n, 370));
						},
						"@site/src/pages/repl.tsx",
						370,
					],
					e1729d04: [
						function () {
							return n.e(6805).then(n.bind(n, 9323));
						},
						"@site/blog/2020-08-06-swc-1.2.12.md",
						9323,
					],
					e1c2f979: [
						function () {
							return n.e(6217).then(n.bind(n, 992));
						},
						"@site/blog/2021-08-13-swc-1.2.77.md?truncated=true",
						992,
					],
					e409479c: [
						function () {
							return n.e(6875).then(n.bind(n, 363));
						},
						"@site/blog/2020-06-21-swc-1.2.6.md",
						363,
					],
					e4744c41: [
						function () {
							return n.e(8980).then(n.bind(n, 2861));
						},
						"@site/blog/2020-03-14-swc-1.1.35.md?truncated=true",
						2861,
					],
					e54c5e7a: [
						function () {
							return n.e(8226).then(n.bind(n, 2260));
						},
						"@site/blog/2021-08-28-swc-1.2.83.md?truncated=true",
						2260,
					],
					e56714ad: [
						function () {
							return n.e(2286).then(n.bind(n, 6457));
						},
						"@site/blog/2020-02-13-swc-1.1.21.md?truncated=true",
						6457,
					],
					e7f6118c: [
						function () {
							return n.e(2586).then(n.bind(n, 1276));
						},
						"@site/blog/2020-05-28-swc-1.1.49.md?truncated=true",
						1276,
					],
					e891a997: [
						function () {
							return n.e(8332).then(n.bind(n, 7041));
						},
						"@site/blog/2020-10-04-swc-1.2.35.md",
						7041,
					],
					e8953e1b: [
						function () {
							return n.e(7305).then(n.bind(n, 8138));
						},
						"@site/blog/2020-02-13-swc-1.1.23.md?truncated=true",
						8138,
					],
					e92903c7: [
						function () {
							return n.e(2399).then(n.bind(n, 4961));
						},
						"@site/blog/2021-03-03-swc-1.2.50.md",
						4961,
					],
					ea7feea2: [
						function () {
							return n.e(4266).then(n.bind(n, 3539));
						},
						"@site/blog/2020-09-22-swc-1.2.31.md",
						3539,
					],
					eb38a467: [
						function () {
							return n.e(785).then(n.bind(n, 9067));
						},
						"@site/blog/2021-05-07-swc-1.2.55.md?truncated=true",
						9067,
					],
					ecc818c4: [
						function () {
							return n.e(8894).then(n.bind(n, 6265));
						},
						"@site/blog/2021-10-09-swc-1.2.95.md?truncated=true",
						6265,
					],
					ed3f99f3: [
						function () {
							return n.e(8965).then(n.bind(n, 9098));
						},
						"@site/blog/2020-12-30-swc-1.2.43.md",
						9098,
					],
					ed992011: [
						function () {
							return n.e(8172).then(n.bind(n, 8178));
						},
						"@site/blog/2020-07-01-swc-1.2.7.md?truncated=true",
						8178,
					],
					edc99e2a: [
						function () {
							return n.e(1970).then(n.bind(n, 5441));
						},
						"@site/blog/2019-12-21-swc-1.1.7.md?truncated=true",
						5441,
					],
					ee9a2829: [
						function () {
							return n.e(6650).then(n.bind(n, 8183));
						},
						"@site/blog/2021-08-04-swc-1.2.72.md?truncated=true",
						8183,
					],
					ef909456: [
						function () {
							return n.e(4292).then(n.bind(n, 5871));
						},
						"@site/blog/2020-09-24-swc-1.2.34.md",
						5871,
					],
					f0275856: [
						function () {
							return n.e(8110).then(n.bind(n, 4771));
						},
						"@site/blog/2021-07-18-swc-1.2.65.md",
						4771,
					],
					f07713a0: [
						function () {
							return n.e(7439).then(n.bind(n, 4511));
						},
						"@site/blog/2021-05-11-swc-1.2.57.md",
						4511,
					],
					f07dc1bc: [
						function () {
							return n.e(7181).then(n.bind(n, 7358));
						},
						"@site/docs/config-js-minify.md",
						7358,
					],
					f091cc2c: [
						function () {
							return n.e(215).then(n.t.bind(n, 6592, 19));
						},
						"~blog/default/blog-page-9-54e.json",
						6592,
					],
					f132baba: [
						function () {
							return n.e(8985).then(n.bind(n, 610));
						},
						"@site/blog/2019-12-25-swc-1.1.9.md?truncated=true",
						610,
					],
					f27c2aa4: [
						function () {
							return n.e(3196).then(n.bind(n, 4585));
						},
						"@site/blog/2020-09-22-swc-1.2.31.md?truncated=true",
						4585,
					],
					f3e552c5: [
						function () {
							return n.e(9164).then(n.bind(n, 5100));
						},
						"@site/blog/2021-10-03-swc-1.2.93.md?truncated=true",
						5100,
					],
					f4165232: [
						function () {
							return n.e(2106).then(n.t.bind(n, 2710, 19));
						},
						"~blog/default/blog-page-13-d43.json",
						2710,
					],
					f51e94d9: [
						function () {
							return n.e(9331).then(n.bind(n, 3936));
						},
						"@site/blog/2020-04-05-swc-1.1.38.md",
						3936,
					],
					f635ecc0: [
						function () {
							return n.e(261).then(n.bind(n, 7463));
						},
						"@site/blog/2021-08-28-swc-1.2.83.md",
						7463,
					],
					f6740d97: [
						function () {
							return n.e(2338).then(n.bind(n, 4974));
						},
						"@site/blog/2020-08-09-swc-1.2.15.md?truncated=true",
						4974,
					],
					f68824d8: [
						function () {
							return n.e(8885).then(n.bind(n, 6471));
						},
						"@site/blog/2020-06-13-swc-1.1.58.md",
						6471,
					],
					f69025dd: [
						function () {
							return n.e(5378).then(n.bind(n, 5997));
						},
						"@site/blog/2021-08-01-swc-1.2.70.md",
						5997,
					],
					f6c1d565: [
						function () {
							return n.e(3788).then(n.bind(n, 8368));
						},
						"@site/blog/2019-12-14-swc-1.1.6.md?truncated=true",
						8368,
					],
					f826d3d4: [
						function () {
							return n.e(714).then(n.bind(n, 2139));
						},
						"@site/blog/2020-06-18-swc-1.2.md?truncated=true",
						2139,
					],
					f83bb4e4: [
						function () {
							return n.e(4249).then(n.bind(n, 2386));
						},
						"@site/blog/2019-02-08-Introducing-swc-1.0.md?truncated=true",
						2386,
					],
					f8e21603: [
						function () {
							return n.e(9905).then(n.bind(n, 4759));
						},
						"@site/blog/2021-09-09-swc-1.2.85.md",
						4759,
					],
					fb0db5ed: [
						function () {
							return n.e(923).then(n.bind(n, 8762));
						},
						"@site/blog/2019-12-24-swc-1.1.8.md",
						8762,
					],
					fb3916ba: [
						function () {
							return n.e(3859).then(n.bind(n, 5656));
						},
						"@site/blog/2021-02-22-swc-1.2.48.md",
						5656,
					],
					fb598ac2: [
						function () {
							return n.e(388).then(n.bind(n, 5737));
						},
						"@site/blog/2021-07-18-swc-1.2.65.md?truncated=true",
						5737,
					],
					fbe2974c: [
						function () {
							return n.e(9511).then(n.bind(n, 9417));
						},
						"@site/blog/2020-04-10-swc-1.1.39.md",
						9417,
					],
					fbe4aad9: [
						function () {
							return n.e(4738).then(n.bind(n, 3675));
						},
						"@site/blog/2020-05-16-swc-1.1.43.md",
						3675,
					],
					fbe91200: [
						function () {
							return n.e(1311).then(n.bind(n, 1261));
						},
						"@site/blog/2021-08-08-swc-1.2.75.md?truncated=true",
						1261,
					],
					fcbc8326: [
						function () {
							return n.e(1796).then(n.bind(n, 1408));
						},
						"@site/blog/2020-08-10-swc-1.2.17.md",
						1408,
					],
					fdf9f6a1: [
						function () {
							return n.e(2327).then(n.bind(n, 5149));
						},
						"@site/blog/2020-08-24-swc-1.2.21.md",
						5149,
					],
				};
			const d = function (e) {
				var t = {};
				return (
					(function e(n, r) {
						Object.keys(n).forEach(function (o) {
							var a = n[o],
								i = r ? r + "." + o : o;
							"object" === typeof a &&
							!!a &&
							Object.keys(a).length
								? e(a, i)
								: (t[i] = a);
						});
					})(e),
					t
				);
			};
			const f = function (e, t) {
					if ("*" === e)
						return c()({
							loading: l,
							loader: function () {
								return Promise.all([
									n.e(532),
									n.e(5486),
									n.e(2049),
									n.e(4608),
								]).then(n.bind(n, 4608));
							},
						});
					var o = s[e + "-" + t],
						a = [],
						i = [],
						f = {},
						p = d(o);
					return (
						Object.keys(p).forEach(function (e) {
							var t = u[p[e]];
							t && ((f[e] = t[0]), a.push(t[1]), i.push(t[2]));
						}),
						c().Map({
							loading: l,
							loader: f,
							modules: a,
							webpack: function () {
								return i;
							},
							render: function (e, t) {
								var n = JSON.parse(JSON.stringify(o));
								Object.keys(e).forEach(function (t) {
									for (
										var r = n, o = t.split("."), a = 0;
										a < o.length - 1;
										a += 1
									)
										r = r[o[a]];
									r[o[o.length - 1]] = e[t].default;
									var i = Object.keys(e[t]).filter(
										function (e) {
											return "default" !== e;
										},
									);
									i &&
										i.length &&
										i.forEach(function (n) {
											r[o[o.length - 1]][n] = e[t][n];
										});
								});
								var a = n.component;
								return (
									delete n.component,
									r.createElement(a, Object.assign({}, n, t))
								);
							},
						})
					);
				},
				p = [
					{ path: "/", component: f("/", "f49"), exact: !0 },
					{ path: "/blog", component: f("/blog", "b9f"), exact: !0 },
					{
						path: "/blog/2019/02/08/Introducing-swc-1.0",
						component: f(
							"/blog/2019/02/08/Introducing-swc-1.0",
							"9e8",
						),
						exact: !0,
					},
					{
						path: "/blog/2019/11/30/announcing-swc-1.1.0",
						component: f(
							"/blog/2019/11/30/announcing-swc-1.1.0",
							"537",
						),
						exact: !0,
					},
					{
						path: "/blog/2019/12/01/swc-1.1.1",
						component: f("/blog/2019/12/01/swc-1.1.1", "653"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/02/swc-1.1.2",
						component: f("/blog/2019/12/02/swc-1.1.2", "36b"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/04/swc-1.1.3",
						component: f("/blog/2019/12/04/swc-1.1.3", "33e"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/09/swc-1.1.4",
						component: f("/blog/2019/12/09/swc-1.1.4", "723"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/11/swc-1.1.5",
						component: f("/blog/2019/12/11/swc-1.1.5", "8d3"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/14/swc-1.1.6",
						component: f("/blog/2019/12/14/swc-1.1.6", "7e3"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/21/swc-1.1.7",
						component: f("/blog/2019/12/21/swc-1.1.7", "a33"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/24/swc-1.1.8",
						component: f("/blog/2019/12/24/swc-1.1.8", "bcc"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/25/swc-1.1.9",
						component: f("/blog/2019/12/25/swc-1.1.9", "2ff"),
						exact: !0,
					},
					{
						path: "/blog/2019/12/29/swc-1.1.10",
						component: f("/blog/2019/12/29/swc-1.1.10", "883"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/02/swc-1.1.11",
						component: f("/blog/2020/01/02/swc-1.1.11", "a95"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/04/pmutil",
						component: f("/blog/2020/01/04/pmutil", "675"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/08/swc-1.1.12",
						component: f("/blog/2020/01/08/swc-1.1.12", "2f9"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/17/swc-1.1.13",
						component: f("/blog/2020/01/17/swc-1.1.13", "3d7"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/23/swc-1.1.14",
						component: f("/blog/2020/01/23/swc-1.1.14", "48e"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/24/swc-1.1.15",
						component: f("/blog/2020/01/24/swc-1.1.15", "c98"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/26/swc-1.1.16",
						component: f("/blog/2020/01/26/swc-1.1.16", "f5b"),
						exact: !0,
					},
					{
						path: "/blog/2020/01/30/swc-1.1.17",
						component: f("/blog/2020/01/30/swc-1.1.17", "29a"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/07/swc-1.1.19",
						component: f("/blog/2020/02/07/swc-1.1.19", "4a8"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/07/swc-1.1.20",
						component: f("/blog/2020/02/07/swc-1.1.20", "cea"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/13/swc-1.1.21",
						component: f("/blog/2020/02/13/swc-1.1.21", "b4d"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/13/swc-1.1.22",
						component: f("/blog/2020/02/13/swc-1.1.22", "ac3"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/13/swc-1.1.23",
						component: f("/blog/2020/02/13/swc-1.1.23", "502"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/13/swc-1.1.24",
						component: f("/blog/2020/02/13/swc-1.1.24", "b6b"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/16/why-is-swc-fast",
						component: f("/blog/2020/02/16/why-is-swc-fast", "911"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/17/swc-1.1.25",
						component: f("/blog/2020/02/17/swc-1.1.25", "7da"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/19/swc-1.1.26",
						component: f("/blog/2020/02/19/swc-1.1.26", "b0d"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/20/swc-1.1.27",
						component: f("/blog/2020/02/20/swc-1.1.27", "e80"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/22/swc-1.1.28",
						component: f("/blog/2020/02/22/swc-1.1.28", "913"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/27/swc-1.1.29",
						component: f("/blog/2020/02/27/swc-1.1.29", "a95"),
						exact: !0,
					},
					{
						path: "/blog/2020/02/29/swc-1.1.30",
						component: f("/blog/2020/02/29/swc-1.1.30", "476"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/01/swc-1.1.31",
						component: f("/blog/2020/03/01/swc-1.1.31", "b92"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/04/swc-1.1.32",
						component: f("/blog/2020/03/04/swc-1.1.32", "e4d"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/04/swc-1.1.33",
						component: f("/blog/2020/03/04/swc-1.1.33", "0d8"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/10/swc-1.1.34",
						component: f("/blog/2020/03/10/swc-1.1.34", "48c"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/14/swc-1.1.35",
						component: f("/blog/2020/03/14/swc-1.1.35", "847"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/16/roadmap-and-call-for-help",
						component: f(
							"/blog/2020/03/16/roadmap-and-call-for-help",
							"dac",
						),
						exact: !0,
					},
					{
						path: "/blog/2020/03/26/swc-1.1.36",
						component: f("/blog/2020/03/26/swc-1.1.36", "7cc"),
						exact: !0,
					},
					{
						path: "/blog/2020/03/28/swc-1.1.37",
						component: f("/blog/2020/03/28/swc-1.1.37", "cd5"),
						exact: !0,
					},
					{
						path: "/blog/2020/04/05/swc-1.1.38",
						component: f("/blog/2020/04/05/swc-1.1.38", "9d0"),
						exact: !0,
					},
					{
						path: "/blog/2020/04/10/swc-1.1.39",
						component: f("/blog/2020/04/10/swc-1.1.39", "989"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/03/swc-1.1.40",
						component: f("/blog/2020/05/03/swc-1.1.40", "40a"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/05/swc-1.1.41",
						component: f("/blog/2020/05/05/swc-1.1.41", "935"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/05/swc-1.1.42",
						component: f("/blog/2020/05/05/swc-1.1.42", "95b"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/16/swc-1.1.43",
						component: f("/blog/2020/05/16/swc-1.1.43", "8b6"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/19/swc-1.1.44",
						component: f("/blog/2020/05/19/swc-1.1.44", "039"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/19/swc-1.1.45",
						component: f("/blog/2020/05/19/swc-1.1.45", "104"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/21/swc-1.1.46",
						component: f("/blog/2020/05/21/swc-1.1.46", "c8a"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/22/swc-1.1.47",
						component: f("/blog/2020/05/22/swc-1.1.47", "4b9"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/25/swc-1.1.48",
						component: f("/blog/2020/05/25/swc-1.1.48", "26e"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/28/swc-1.1.49",
						component: f("/blog/2020/05/28/swc-1.1.49", "ca3"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/28/swc-1.1.50",
						component: f("/blog/2020/05/28/swc-1.1.50", "eed"),
						exact: !0,
					},
					{
						path: "/blog/2020/05/30/swc-1.1.51",
						component: f("/blog/2020/05/30/swc-1.1.51", "6d3"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/02/swc-1.1.52",
						component: f("/blog/2020/06/02/swc-1.1.52", "5ac"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/03/swc-1.1.53",
						component: f("/blog/2020/06/03/swc-1.1.53", "fa9"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/06/swc-1.1.54",
						component: f("/blog/2020/06/06/swc-1.1.54", "515"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/09/swc-1.1.55",
						component: f("/blog/2020/06/09/swc-1.1.55", "a1b"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/10/swc-1.1.56",
						component: f("/blog/2020/06/10/swc-1.1.56", "888"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/11/swc-1.1.57",
						component: f("/blog/2020/06/11/swc-1.1.57", "4e7"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/13/swc-1.1.58",
						component: f("/blog/2020/06/13/swc-1.1.58", "2f8"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/18/swc-1.2",
						component: f("/blog/2020/06/18/swc-1.2", "39b"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/19/swc-1.2.5",
						component: f("/blog/2020/06/19/swc-1.2.5", "019"),
						exact: !0,
					},
					{
						path: "/blog/2020/06/21/swc-1.2.6",
						component: f("/blog/2020/06/21/swc-1.2.6", "2fe"),
						exact: !0,
					},
					{
						path: "/blog/2020/07/01/swc-1.2.7",
						component: f("/blog/2020/07/01/swc-1.2.7", "863"),
						exact: !0,
					},
					{
						path: "/blog/2020/07/05/swc-1.2.8",
						component: f("/blog/2020/07/05/swc-1.2.8", "f17"),
						exact: !0,
					},
					{
						path: "/blog/2020/07/26/swc-1.2.9",
						component: f("/blog/2020/07/26/swc-1.2.9", "32c"),
						exact: !0,
					},
					{
						path: "/blog/2020/07/31/swc-1.2.10",
						component: f("/blog/2020/07/31/swc-1.2.10", "784"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/02/swc-1.2.11",
						component: f("/blog/2020/08/02/swc-1.2.11", "318"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/06/swc-1.2.12",
						component: f("/blog/2020/08/06/swc-1.2.12", "88a"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/07/swc-1.2.13",
						component: f("/blog/2020/08/07/swc-1.2.13", "0cf"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/08/swc-1.2.14",
						component: f("/blog/2020/08/08/swc-1.2.14", "bd0"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/09/swc-1.2.15",
						component: f("/blog/2020/08/09/swc-1.2.15", "c4e"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/10/swc-1.2.16",
						component: f("/blog/2020/08/10/swc-1.2.16", "7fc"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/10/swc-1.2.17",
						component: f("/blog/2020/08/10/swc-1.2.17", "b0d"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/11/swc-1.2.18",
						component: f("/blog/2020/08/11/swc-1.2.18", "cdf"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/13/swc-1.2.19",
						component: f("/blog/2020/08/13/swc-1.2.19", "42a"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/15/swc-1.2.20",
						component: f("/blog/2020/08/15/swc-1.2.20", "295"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/24/swc-1.2.21",
						component: f("/blog/2020/08/24/swc-1.2.21", "dbf"),
						exact: !0,
					},
					{
						path: "/blog/2020/08/31/swc-1.2.22",
						component: f("/blog/2020/08/31/swc-1.2.22", "fc6"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/08/swc-1.2.23",
						component: f("/blog/2020/09/08/swc-1.2.23", "757"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/11/swc-1.2.25",
						component: f("/blog/2020/09/11/swc-1.2.25", "a47"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/11/swc-1.2.26",
						component: f("/blog/2020/09/11/swc-1.2.26", "ed3"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/13/swc-1.2.27",
						component: f("/blog/2020/09/13/swc-1.2.27", "60a"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/18/swc-1.2.30",
						component: f("/blog/2020/09/18/swc-1.2.30", "bbf"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/22/swc-1.2.31",
						component: f("/blog/2020/09/22/swc-1.2.31", "8ed"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/22/swc-1.2.32",
						component: f("/blog/2020/09/22/swc-1.2.32", "02d"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/24/swc-1.2.33",
						component: f("/blog/2020/09/24/swc-1.2.33", "ffe"),
						exact: !0,
					},
					{
						path: "/blog/2020/09/24/swc-1.2.34",
						component: f("/blog/2020/09/24/swc-1.2.34", "713"),
						exact: !0,
					},
					{
						path: "/blog/2020/10/04/swc-1.2.35",
						component: f("/blog/2020/10/04/swc-1.2.35", "2fb"),
						exact: !0,
					},
					{
						path: "/blog/2020/10/06/swc-1.2.36",
						component: f("/blog/2020/10/06/swc-1.2.36", "d23"),
						exact: !0,
					},
					{
						path: "/blog/2020/10/29/swc-1.2.37",
						component: f("/blog/2020/10/29/swc-1.2.37", "c83"),
						exact: !0,
					},
					{
						path: "/blog/2020/11/08/swc-1.2.38",
						component: f("/blog/2020/11/08/swc-1.2.38", "7fd"),
						exact: !0,
					},
					{
						path: "/blog/2020/11/21/swc-1.2.39",
						component: f("/blog/2020/11/21/swc-1.2.39", "604"),
						exact: !0,
					},
					{
						path: "/blog/2020/12/04/swc-1.2.40",
						component: f("/blog/2020/12/04/swc-1.2.40", "153"),
						exact: !0,
					},
					{
						path: "/blog/2020/12/22/swc-1.2.41",
						component: f("/blog/2020/12/22/swc-1.2.41", "891"),
						exact: !0,
					},
					{
						path: "/blog/2020/12/29/swc-1.2.42",
						component: f("/blog/2020/12/29/swc-1.2.42", "afe"),
						exact: !0,
					},
					{
						path: "/blog/2020/12/30/swc-1.2.43",
						component: f("/blog/2020/12/30/swc-1.2.43", "171"),
						exact: !0,
					},
					{
						path: "/blog/2021/01/11/swc-1.2.44",
						component: f("/blog/2021/01/11/swc-1.2.44", "38e"),
						exact: !0,
					},
					{
						path: "/blog/2021/01/14/swc-1.2.45",
						component: f("/blog/2021/01/14/swc-1.2.45", "196"),
						exact: !0,
					},
					{
						path: "/blog/2021/01/23/swc-1.2.46",
						component: f("/blog/2021/01/23/swc-1.2.46", "eb0"),
						exact: !0,
					},
					{
						path: "/blog/2021/01/31/swc-1.2.47",
						component: f("/blog/2021/01/31/swc-1.2.47", "93b"),
						exact: !0,
					},
					{
						path: "/blog/2021/02/22/swc-1.2.48",
						component: f("/blog/2021/02/22/swc-1.2.48", "c73"),
						exact: !0,
					},
					{
						path: "/blog/2021/03/03/swc-1.2.50",
						component: f("/blog/2021/03/03/swc-1.2.50", "5f0"),
						exact: !0,
					},
					{
						path: "/blog/2021/03/28/swc-1.2.51",
						component: f("/blog/2021/03/28/swc-1.2.51", "c8e"),
						exact: !0,
					},
					{
						path: "/blog/2021/04/11/swc-1.2.52",
						component: f("/blog/2021/04/11/swc-1.2.52", "c6d"),
						exact: !0,
					},
					{
						path: "/blog/2021/04/17/swc-1.2.53",
						component: f("/blog/2021/04/17/swc-1.2.53", "27f"),
						exact: !0,
					},
					{
						path: "/blog/2021/04/20/swc-1.2.54",
						component: f("/blog/2021/04/20/swc-1.2.54", "ec4"),
						exact: !0,
					},
					{
						path: "/blog/2021/05/07/swc-1.2.55",
						component: f("/blog/2021/05/07/swc-1.2.55", "0cf"),
						exact: !0,
					},
					{
						path: "/blog/2021/05/11/swc-1.2.57",
						component: f("/blog/2021/05/11/swc-1.2.57", "3d6"),
						exact: !0,
					},
					{
						path: "/blog/2021/05/21/swc-1.2.58",
						component: f("/blog/2021/05/21/swc-1.2.58", "2a3"),
						exact: !0,
					},
					{
						path: "/blog/2021/05/30/swc-1.2.59",
						component: f("/blog/2021/05/30/swc-1.2.59", "cc2"),
						exact: !0,
					},
					{
						path: "/blog/2021/06/07/swc-1.2.60",
						component: f("/blog/2021/06/07/swc-1.2.60", "446"),
						exact: !0,
					},
					{
						path: "/blog/2021/06/16/swc-1.2.61",
						component: f("/blog/2021/06/16/swc-1.2.61", "17e"),
						exact: !0,
					},
					{
						path: "/blog/2021/06/27/swc-1.2.62",
						component: f("/blog/2021/06/27/swc-1.2.62", "e5b"),
						exact: !0,
					},
					{
						path: "/blog/2021/07/05/swc-1.2.63",
						component: f("/blog/2021/07/05/swc-1.2.63", "24c"),
						exact: !0,
					},
					{
						path: "/blog/2021/07/14/swc-1.2.64",
						component: f("/blog/2021/07/14/swc-1.2.64", "78e"),
						exact: !0,
					},
					{
						path: "/blog/2021/07/18/swc-1.2.65",
						component: f("/blog/2021/07/18/swc-1.2.65", "916"),
						exact: !0,
					},
					{
						path: "/blog/2021/07/20/swc-1.2.66",
						component: f("/blog/2021/07/20/swc-1.2.66", "467"),
						exact: !0,
					},
					{
						path: "/blog/2021/07/31/swc-1.2.67",
						component: f("/blog/2021/07/31/swc-1.2.67", "e1e"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/01/swc-1.2.70",
						component: f("/blog/2021/08/01/swc-1.2.70", "560"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/02/swc-1.2.71",
						component: f("/blog/2021/08/02/swc-1.2.71", "381"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/04/swc-1.2.72",
						component: f("/blog/2021/08/04/swc-1.2.72", "d4a"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/04/swc-1.2.73",
						component: f("/blog/2021/08/04/swc-1.2.73", "a21"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/08/swc-1.2.75",
						component: f("/blog/2021/08/08/swc-1.2.75", "7a2"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/10/swc-1.2.76",
						component: f("/blog/2021/08/10/swc-1.2.76", "5ad"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/13/swc-1.2.77",
						component: f("/blog/2021/08/13/swc-1.2.77", "a92"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/16/swc-1.2.78",
						component: f("/blog/2021/08/16/swc-1.2.78", "4b6"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/19/swc-1.2.79",
						component: f("/blog/2021/08/19/swc-1.2.79", "ac9"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/20/swc-1.2.80",
						component: f("/blog/2021/08/20/swc-1.2.80", "09c"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/25/swc-1.2.81",
						component: f("/blog/2021/08/25/swc-1.2.81", "380"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/25/swc-1.2.82",
						component: f("/blog/2021/08/25/swc-1.2.82", "a8a"),
						exact: !0,
					},
					{
						path: "/blog/2021/08/28/swc-1.2.83",
						component: f("/blog/2021/08/28/swc-1.2.83", "0c1"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/01/swc-1.2.84",
						component: f("/blog/2021/09/01/swc-1.2.84", "53b"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/09/swc-1.2.85",
						component: f("/blog/2021/09/09/swc-1.2.85", "ca8"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/11/swc-1.2.86",
						component: f("/blog/2021/09/11/swc-1.2.86", "de3"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/15/swc-1.2.87",
						component: f("/blog/2021/09/15/swc-1.2.87", "4ac"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/16/swc-1.2.88",
						component: f("/blog/2021/09/16/swc-1.2.88", "053"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/22/swc-1.2.89",
						component: f("/blog/2021/09/22/swc-1.2.89", "33b"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/23/swc-1.2.90",
						component: f("/blog/2021/09/23/swc-1.2.90", "1d9"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/25/swc-1.2.91",
						component: f("/blog/2021/09/25/swc-1.2.91", "98c"),
						exact: !0,
					},
					{
						path: "/blog/2021/09/29/swc-1.2.92",
						component: f("/blog/2021/09/29/swc-1.2.92", "0c6"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/03/swc-1.2.93",
						component: f("/blog/2021/10/03/swc-1.2.93", "557"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/08/swc-1.2.94",
						component: f("/blog/2021/10/08/swc-1.2.94", "20b"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/09/swc-1.2.95",
						component: f("/blog/2021/10/09/swc-1.2.95", "c59"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/14/swc-1.2.96",
						component: f("/blog/2021/10/14/swc-1.2.96", "0f1"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/15/swc-1.2.97",
						component: f("/blog/2021/10/15/swc-1.2.97", "adc"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/16/swc-1.2.98",
						component: f("/blog/2021/10/16/swc-1.2.98", "de7"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/18/swc-1.2.99",
						component: f("/blog/2021/10/18/swc-1.2.99", "041"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/19/swc-1.2.100",
						component: f("/blog/2021/10/19/swc-1.2.100", "f8e"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/20/swc-1.2.101",
						component: f("/blog/2021/10/20/swc-1.2.101", "2b2"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/21/swc-1.2.102",
						component: f("/blog/2021/10/21/swc-1.2.102", "0b7"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/25/swc-1.2.103",
						component: f("/blog/2021/10/25/swc-1.2.103", "2a8"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/27/swc-1.2.104",
						component: f("/blog/2021/10/27/swc-1.2.104", "41f"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/28/swc-1.2.105",
						component: f("/blog/2021/10/28/swc-1.2.105", "910"),
						exact: !0,
					},
					{
						path: "/blog/2021/10/30/swc-1.2.106",
						component: f("/blog/2021/10/30/swc-1.2.106", "15c"),
						exact: !0,
					},
					{
						path: "/blog/2021/11/07/swc-1.2.107",
						component: f("/blog/2021/11/07/swc-1.2.107", "c03"),
						exact: !0,
					},
					{
						path: "/blog/page/10",
						component: f("/blog/page/10", "b5c"),
						exact: !0,
					},
					{
						path: "/blog/page/11",
						component: f("/blog/page/11", "5e6"),
						exact: !0,
					},
					{
						path: "/blog/page/12",
						component: f("/blog/page/12", "346"),
						exact: !0,
					},
					{
						path: "/blog/page/13",
						component: f("/blog/page/13", "a46"),
						exact: !0,
					},
					{
						path: "/blog/page/14",
						component: f("/blog/page/14", "818"),
						exact: !0,
					},
					{
						path: "/blog/page/15",
						component: f("/blog/page/15", "e8c"),
						exact: !0,
					},
					{
						path: "/blog/page/16",
						component: f("/blog/page/16", "f31"),
						exact: !0,
					},
					{
						path: "/blog/page/2",
						component: f("/blog/page/2", "7ec"),
						exact: !0,
					},
					{
						path: "/blog/page/3",
						component: f("/blog/page/3", "fed"),
						exact: !0,
					},
					{
						path: "/blog/page/4",
						component: f("/blog/page/4", "1f0"),
						exact: !0,
					},
					{
						path: "/blog/page/5",
						component: f("/blog/page/5", "590"),
						exact: !0,
					},
					{
						path: "/blog/page/6",
						component: f("/blog/page/6", "a06"),
						exact: !0,
					},
					{
						path: "/blog/page/7",
						component: f("/blog/page/7", "97a"),
						exact: !0,
					},
					{
						path: "/blog/page/8",
						component: f("/blog/page/8", "c5e"),
						exact: !0,
					},
					{
						path: "/blog/page/9",
						component: f("/blog/page/9", "5fb"),
						exact: !0,
					},
					{ path: "/help", component: f("/help", "ae4"), exact: !0 },
					{ path: "/repl", component: f("/repl", "9e4"), exact: !0 },
					{
						path: "/search",
						component: f("/search", "2d8"),
						exact: !0,
					},
					{
						path: "/users",
						component: f("/users", "5e4"),
						exact: !0,
					},
					{
						path: "/docs",
						component: f("/docs", "6ac"),
						routes: [
							{
								path: "/docs/benchmark-autogen",
								component: f("/docs/benchmark-autogen", "8da"),
								exact: !0,
							},
							{
								path: "/docs/benchmark-transform",
								component: f(
									"/docs/benchmark-transform",
									"6b9",
								),
								exact: !0,
							},
							{
								path: "/docs/comparison-babel",
								component: f("/docs/comparison-babel", "ce7"),
								exact: !0,
							},
							{
								path: "/docs/config-js-minify",
								component: f("/docs/config-js-minify", "481"),
								exact: !0,
							},
							{
								path: "/docs/config-js-module",
								component: f("/docs/config-js-module", "5b1"),
								exact: !0,
							},
							{
								path: "/docs/configuring-swc",
								component: f("/docs/configuring-swc", "110"),
								exact: !0,
							},
							{
								path: "/docs/installation",
								component: f("/docs/installation", "b2a"),
								exact: !0,
							},
							{
								path: "/docs/migrating-from-babel-cli",
								component: f(
									"/docs/migrating-from-babel-cli",
									"326",
								),
								exact: !0,
							},
							{
								path: "/docs/migrating-from-babel-core",
								component: f(
									"/docs/migrating-from-babel-core",
									"e7b",
								),
								exact: !0,
							},
							{
								path: "/docs/online-repl",
								component: f("/docs/online-repl", "112"),
								exact: !0,
							},
							{
								path: "/docs/preset-env",
								component: f("/docs/preset-env", "ee2"),
								exact: !0,
							},
							{
								path: "/docs/spack-basic",
								component: f("/docs/spack-basic", "796"),
								exact: !0,
							},
							{
								path: "/docs/spack-multi-bundle",
								component: f("/docs/spack-multi-bundle", "a7a"),
								exact: !0,
							},
							{
								path: "/docs/usage-core",
								component: f("/docs/usage-core", "ab8"),
								exact: !0,
							},
							{
								path: "/docs/usage-plugin",
								component: f("/docs/usage-plugin", "052"),
								exact: !0,
							},
							{
								path: "/docs/usage-spack-cli",
								component: f("/docs/usage-spack-cli", "e98"),
								exact: !0,
							},
							{
								path: "/docs/usage-swc-cli",
								component: f("/docs/usage-swc-cli", "abd"),
								exact: !0,
							},
							{
								path: "/docs/usage-swc-jest",
								component: f("/docs/usage-swc-jest", "494"),
								exact: !0,
							},
							{
								path: "/docs/usage-swc-loader",
								component: f("/docs/usage-swc-loader", "228"),
								exact: !0,
							},
							{
								path: "/docs/usage-swc-wasm",
								component: f("/docs/usage-swc-wasm", "871"),
								exact: !0,
							},
						],
					},
					{ path: "*", component: f("*") },
				];
			var b = n(412),
				m = n(9782);
			const g = JSON.parse(
					'{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"installation","docs":[{"id":"benchmark-autogen","path":"/docs/benchmark-autogen","sidebar":"usage"},{"id":"benchmark-transform","path":"/docs/benchmark-transform","sidebar":"usage"},{"id":"comparison-babel","path":"/docs/comparison-babel","sidebar":"usage"},{"id":"config-js-minify","path":"/docs/config-js-minify","sidebar":"usage"},{"id":"config-js-module","path":"/docs/config-js-module","sidebar":"usage"},{"id":"configuring-swc","path":"/docs/configuring-swc","sidebar":"usage"},{"id":"installation","path":"/docs/installation","sidebar":"usage"},{"id":"migrating-from-babel-cli","path":"/docs/migrating-from-babel-cli","sidebar":"usage"},{"id":"migrating-from-babel-core","path":"/docs/migrating-from-babel-core","sidebar":"usage"},{"id":"online-repl","path":"/docs/online-repl","sidebar":"usage"},{"id":"preset-env","path":"/docs/preset-env","sidebar":"usage"},{"id":"spack-basic","path":"/docs/spack-basic","sidebar":"usage"},{"id":"spack-multi-bundle","path":"/docs/spack-multi-bundle","sidebar":"usage"},{"id":"usage-core","path":"/docs/usage-core","sidebar":"usage"},{"id":"usage-plugin","path":"/docs/usage-plugin","sidebar":"usage"},{"id":"usage-spack-cli","path":"/docs/usage-spack-cli","sidebar":"usage"},{"id":"usage-swc-cli","path":"/docs/usage-swc-cli","sidebar":"usage"},{"id":"usage-swc-jest","path":"/docs/usage-swc-jest","sidebar":"usage"},{"id":"usage-swc-loader","path":"/docs/usage-swc-loader","sidebar":"usage"},{"id":"usage-swc-wasm","path":"/docs/usage-swc-wasm","sidebar":"usage"}]}]}}}',
				),
				h = JSON.parse(
					'{"defaultLocale":"en","locales":["en"],"currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr"}}}',
				);
			var w = n(7529);
			const v = JSON.parse(
				'{"docusaurusVersion":"2.0.0-beta.3","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.0.0-beta.3"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.0.0-beta.3"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.0.0-beta.3"},"docusaurus-plugin-google-gtag":{"type":"package","name":"@docusaurus/plugin-google-gtag","version":"2.0.0-beta.3"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.0.0-beta.3"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.0.0-beta.3"},"docusaurus-theme-search-algolia":{"type":"package","name":"@docusaurus/theme-search-algolia","version":"2.0.0-beta.3"}}}',
			);
			var y = n(6291),
				k = n(4748),
				x = n(1721),
				E = n(5977),
				S = n(4865),
				T = n.n(S);
			const C = [
				n(7771),
				n(7771),
				n(7771),
				n(1678),
				n(2497),
				n(5345),
				n(2295),
			];
			function P(e) {
				for (
					var t = arguments.length,
						n = new Array(t > 1 ? t - 1 : 0),
						r = 1;
					r < t;
					r++
				)
					n[r - 1] = arguments[r];
				C.forEach(function (t) {
					var r,
						o,
						a =
							null !==
								(o =
									null ===
										(r = null == t ? void 0 : t.default) ||
									void 0 === r
										? void 0
										: r[e]) && void 0 !== o
								? o
								: t[e];
					a && a.apply(void 0, n);
				});
			}
			const A = {
				onRouteUpdate: function () {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					P.apply(void 0, ["onRouteUpdate"].concat(t));
				},
				onRouteUpdateDelayed: function () {
					for (
						var e = arguments.length, t = new Array(e), n = 0;
						n < e;
						n++
					)
						t[n] = arguments[n];
					P.apply(void 0, ["onRouteUpdateDelayed"].concat(t));
				},
			};
			var O = n(8790);
			function _(e, t) {
				var n = (0, O.f)(e, t);
				return Promise.all(
					n.map(function (e) {
						var t = e.route.component;
						if (t && t.preload) return t.preload();
					}),
				);
			}
			var R = {};
			const N = function (e) {
				if (R[e.pathname])
					return Object.assign({}, e, { pathname: R[e.pathname] });
				var t = e.pathname || "/";
				return (
					"" === (t = t.trim().replace(/\/index\.html$/, "")) &&
						(t = "/"),
					(R[e.pathname] = t),
					Object.assign({}, e, { pathname: t })
				);
			};
			T().configure({ showSpinner: !1 });
			var L = (function (e) {
				function t(t) {
					var n;
					return (
						((n = e.call(this, t) || this).previousLocation = null),
						(n.progressBarTimeout = null),
						(n.state = { nextRouteHasLoaded: !0 }),
						n
					);
				}
				(0, x.Z)(t, e);
				var n = t.prototype;
				return (
					(n.shouldComponentUpdate = function (e, t) {
						var n = this,
							r = e.location !== this.props.location,
							o = this.props,
							a = o.routes,
							i = o.delay,
							c = void 0 === i ? 1e3 : i;
						if (r) {
							var l = N(e.location);
							return (
								this.startProgressBar(c),
								(this.previousLocation = N(
									this.props.location,
								)),
								this.setState({ nextRouteHasLoaded: !1 }),
								_(a, l.pathname)
									.then(function () {
										A.onRouteUpdate({
											previousLocation:
												n.previousLocation,
											location: l,
										}),
											(n.previousLocation = null),
											n.setState(
												{ nextRouteHasLoaded: !0 },
												n.stopProgressBar,
											);
										var e = l.hash;
										if (e) {
											var t = decodeURIComponent(
													e.substring(1),
												),
												r = document.getElementById(t);
											r && r.scrollIntoView();
										} else window.scrollTo(0, 0);
									})
									.catch(function (e) {
										return console.warn(e);
									}),
								!1
							);
						}
						return !!t.nextRouteHasLoaded;
					}),
					(n.clearProgressBarTimeout = function () {
						this.progressBarTimeout &&
							(clearTimeout(this.progressBarTimeout),
							(this.progressBarTimeout = null));
					}),
					(n.startProgressBar = function (e) {
						var t = this;
						this.clearProgressBarTimeout(),
							(this.progressBarTimeout = setTimeout(function () {
								A.onRouteUpdateDelayed({
									location: N(t.props.location),
								}),
									T().start();
							}, e));
					}),
					(n.stopProgressBar = function () {
						this.clearProgressBarTimeout(), T().done();
					}),
					(n.render = function () {
						var e = this.props,
							t = e.children,
							n = e.location;
						return r.createElement(E.AW, {
							location: N(n),
							render: function () {
								return t;
							},
						});
					}),
					t
				);
			})(r.Component);
			const I = (0, E.EN)(L);
			var D = n(9105),
				F = n(2263),
				M = "docusaurus-base-url-issue-banner-container",
				j = "docusaurus-base-url-issue-banner-suggestion-container",
				B = "__DOCUSAURUS_INSERT_BASEURL_BANNER";
			function z(e) {
				return (
					"\nwindow['" +
					B +
					"'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['" +
					B +
					"'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('" +
					M +
					"');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = " +
					JSON.stringify(
						(function (e) {
							return (
								'\n<div id="docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">' +
								e +
								"</span> " +
								("/" === e ? " (default value)" : "") +
								'</p>\n   <p>We suggest trying baseUrl = <span id="' +
								j +
								'" style="font-weight: bold; color: green;"></span></p>\n</div>\n'
							);
						})(e),
					).replace(/</g, "\\<") +
					";\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('" +
					j +
					"');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n"
				);
			}
			function U() {
				var e = (0, F.Z)().siteConfig.baseUrl;
				return (
					(0, r.useLayoutEffect)(function () {
						window[B] = !1;
					}, []),
					r.createElement(
						r.Fragment,
						null,
						!b.Z.canUseDOM &&
							r.createElement(
								D.Z,
								null,
								r.createElement("script", null, z(e)),
							),
						r.createElement("div", { id: M }),
					)
				);
			}
			function $() {
				var e = (0, F.Z)().siteConfig,
					t = e.baseUrl,
					n = e.baseUrlIssueBanner,
					o = (0, E.TH)().pathname;
				return n && o === t ? r.createElement(U, null) : null;
			}
			const G = function (e) {
				var t = e.children;
				return r.createElement(r.Fragment, null, t);
			};
			const q = function () {
				var e = (0, r.useState)(!1),
					t = e[0],
					n = e[1];
				return (
					(0, r.useEffect)(function () {
						n(!0);
					}, []),
					r.createElement(
						k.Z.Provider,
						{
							value: {
								siteConfig: m.default,
								siteMetadata: v,
								globalData: g,
								i18n: h,
								codeTranslations: w,
								isClient: t,
							},
						},
						r.createElement(
							G,
							null,
							r.createElement($, null),
							r.createElement(I, { routes: p }, (0, y.Z)(p)),
						),
					)
				);
			};
			var H = (function (e) {
					if ("undefined" == typeof document) return !1;
					var t = document.createElement("link");
					try {
						if (
							t.relList &&
							"function" == typeof t.relList.supports
						)
							return t.relList.supports(e);
					} catch (n) {
						return !1;
					}
					return !1;
				})("prefetch")
					? function (e) {
							return new Promise(function (t, n) {
								if ("undefined" != typeof document) {
									var r = document.createElement("link");
									r.setAttribute("rel", "prefetch"),
										r.setAttribute("href", e),
										(r.onload = t),
										(r.onerror = n),
										(
											document.getElementsByTagName(
												"head",
											)[0] ||
											document.getElementsByName(
												"script",
											)[0].parentNode
										).appendChild(r);
								} else n();
							});
						}
					: function (e) {
							return new Promise(function (t, n) {
								var r = new XMLHttpRequest();
								r.open("GET", e, !0),
									(r.withCredentials = !0),
									(r.onload = function () {
										200 === r.status ? t() : n();
									}),
									r.send(null);
							});
						},
				W = {};
			const V = function (e) {
				return new Promise(function (t) {
					W[e]
						? t()
						: H(e)
								.then(function () {
									t(), (W[e] = !0);
								})
								.catch(function () {});
				});
			};
			var Z = {},
				K = {},
				Q = function () {
					return !(
						!("connection" in navigator) ||
						-1 ===
							(navigator.connection.effectiveType || "").indexOf(
								"2g",
							) ||
						!navigator.connection.saveData
					);
				},
				Y = function (e) {
					return Array.prototype.concat.apply([], e);
				};
			const X = {
				prefetch: function (e) {
					if (
						!(function (e) {
							return !Q() && !K[e] && !Z[e];
						})(e)
					)
						return !1;
					Z[e] = !0;
					var t = (0, O.f)(p, e);
					return (
						Y(
							t.map(function (e) {
								return (
									(t = e.route.path),
									Y(
										Object.entries(s)
											.filter(function (e) {
												return (
													e[0].replace(
														/(-[^-]+)$/,
														"",
													) === t
												);
											})
											.map(function (e) {
												var t = e[1];
												return Object.values(d(t));
											}),
									)
								);
								var t;
							}),
						).forEach(function (e) {
							var t = n.gca(e);
							t && !/undefined/.test(t) && V(t);
						}),
						!0
					);
				},
				preload: function (e) {
					return (
						!!(function (e) {
							return !Q() && !K[e];
						})(e) && ((K[e] = !0), _(p, e), !0)
					);
				},
			};
			if (b.Z.canUseDOM) {
				window.docusaurus = X;
				var J = o.hydrate;
				_(p, window.location.pathname).then(function () {
					J(
						r.createElement(a.VK, null, r.createElement(q, null)),
						document.getElementById("__docusaurus"),
					);
				});
			}
		},
		412: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => o });
			var r = !(
				"undefined" == typeof window ||
				!window.document ||
				!window.document.createElement
			);
			const o = {
				canUseDOM: r,
				canUseEventListeners:
					r && !(!window.addEventListener && !window.attachEvent),
				canUseIntersectionObserver:
					r && "IntersectionObserver" in window,
				canUseViewport: r && !!window.screen,
			};
		},
		9105: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => ge });
			var r,
				o,
				a,
				i,
				c = n(7294),
				l = n(5697),
				s = n.n(l),
				u = n(3524),
				d = n.n(u),
				f = n(9590),
				p = n.n(f),
				b = n(7418),
				m = n.n(b),
				g = "bodyAttributes",
				h = "htmlAttributes",
				w = "titleAttributes",
				v = {
					BASE: "base",
					BODY: "body",
					HEAD: "head",
					HTML: "html",
					LINK: "link",
					META: "meta",
					NOSCRIPT: "noscript",
					SCRIPT: "script",
					STYLE: "style",
					TITLE: "title",
				},
				y =
					(Object.keys(v).map(function (e) {
						return v[e];
					}),
					"charset"),
				k = "cssText",
				x = "href",
				E = "http-equiv",
				S = "innerHTML",
				T = "itemprop",
				C = "name",
				P = "property",
				A = "rel",
				O = "src",
				_ = "target",
				R = {
					accesskey: "accessKey",
					charset: "charSet",
					class: "className",
					contenteditable: "contentEditable",
					contextmenu: "contextMenu",
					"http-equiv": "httpEquiv",
					itemprop: "itemProp",
					tabindex: "tabIndex",
				},
				N = "defaultTitle",
				L = "defer",
				I = "encodeSpecialCharacters",
				D = "onChangeClientState",
				F = "titleTemplate",
				M = Object.keys(R).reduce(function (e, t) {
					return (e[R[t]] = t), e;
				}, {}),
				j = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
				B = "data-react-helmet",
				z =
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
							},
				U = function (e, t) {
					if (!(e instanceof t))
						throw new TypeError(
							"Cannot call a class as a function",
						);
				},
				$ = (function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							(r.enumerable = r.enumerable || !1),
								(r.configurable = !0),
								"value" in r && (r.writable = !0),
								Object.defineProperty(e, r.key, r);
						}
					}
					return function (t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t;
					};
				})(),
				G =
					Object.assign ||
					function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) &&
									(e[r] = n[r]);
						}
						return e;
					},
				q = function (e, t) {
					var n = {};
					for (var r in e)
						t.indexOf(r) >= 0 ||
							(Object.prototype.hasOwnProperty.call(e, r) &&
								(n[r] = e[r]));
					return n;
				},
				H = function (e, t) {
					if (!e)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called",
						);
					return !t ||
						("object" != typeof t && "function" != typeof t)
						? e
						: t;
				},
				W = function (e) {
					var t =
						!(arguments.length > 1 && void 0 !== arguments[1]) ||
						arguments[1];
					return !1 === t
						? String(e)
						: String(e)
								.replace(/&/g, "&amp;")
								.replace(/</g, "&lt;")
								.replace(/>/g, "&gt;")
								.replace(/"/g, "&quot;")
								.replace(/'/g, "&#x27;");
				},
				V = function (e) {
					var t = X(e, v.TITLE),
						n = X(e, F);
					if (n && t)
						return n.replace(/%s/g, function () {
							return Array.isArray(t) ? t.join("") : t;
						});
					var r = X(e, N);
					return t || r || void 0;
				},
				Z = function (e) {
					return X(e, D) || function () {};
				},
				K = function (e, t) {
					return t
						.filter(function (t) {
							return void 0 !== t[e];
						})
						.map(function (t) {
							return t[e];
						})
						.reduce(function (e, t) {
							return G({}, e, t);
						}, {});
				},
				Q = function (e, t) {
					return t
						.filter(function (e) {
							return void 0 !== e[v.BASE];
						})
						.map(function (e) {
							return e[v.BASE];
						})
						.reverse()
						.reduce(function (t, n) {
							if (!t.length)
								for (
									var r = Object.keys(n), o = 0;
									o < r.length;
									o++
								) {
									var a = r[o].toLowerCase();
									if (-1 !== e.indexOf(a) && n[a])
										return t.concat(n);
								}
							return t;
						}, []);
				},
				Y = function (e, t, n) {
					var r = {};
					return n
						.filter(function (t) {
							return (
								!!Array.isArray(t[e]) ||
								(void 0 !== t[e] &&
									re(
										"Helmet: " +
											e +
											' should be of type "Array". Instead found type "' +
											z(t[e]) +
											'"',
									),
								!1)
							);
						})
						.map(function (t) {
							return t[e];
						})
						.reverse()
						.reduce(function (e, n) {
							var o = {};
							n.filter(function (e) {
								for (
									var n = void 0, a = Object.keys(e), i = 0;
									i < a.length;
									i++
								) {
									var c = a[i],
										l = c.toLowerCase();
									-1 === t.indexOf(l) ||
										(n === A &&
											"canonical" ===
												e[n].toLowerCase()) ||
										(l === A &&
											"stylesheet" ===
												e[l].toLowerCase()) ||
										(n = l),
										-1 === t.indexOf(c) ||
											(c !== S && c !== k && c !== T) ||
											(n = c);
								}
								if (!n || !e[n]) return !1;
								var s = e[n].toLowerCase();
								return (
									r[n] || (r[n] = {}),
									o[n] || (o[n] = {}),
									!r[n][s] && ((o[n][s] = !0), !0)
								);
							})
								.reverse()
								.forEach(function (t) {
									return e.push(t);
								});
							for (
								var a = Object.keys(o), i = 0;
								i < a.length;
								i++
							) {
								var c = a[i],
									l = m()({}, r[c], o[c]);
								r[c] = l;
							}
							return e;
						}, [])
						.reverse();
				},
				X = function (e, t) {
					for (var n = e.length - 1; n >= 0; n--) {
						var r = e[n];
						if (r.hasOwnProperty(t)) return r[t];
					}
					return null;
				},
				J =
					((r = Date.now()),
					function (e) {
						var t = Date.now();
						t - r > 16
							? ((r = t), e(t))
							: setTimeout(function () {
									J(e);
								}, 0);
					}),
				ee = function (e) {
					return clearTimeout(e);
				},
				te =
					"undefined" != typeof window
						? (window.requestAnimationFrame &&
								window.requestAnimationFrame.bind(window)) ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							J
						: n.g.requestAnimationFrame || J,
				ne =
					"undefined" != typeof window
						? window.cancelAnimationFrame ||
							window.webkitCancelAnimationFrame ||
							window.mozCancelAnimationFrame ||
							ee
						: n.g.cancelAnimationFrame || ee,
				re = function (e) {
					return (
						console &&
						"function" == typeof console.warn &&
						console.warn(e)
					);
				},
				oe = null,
				ae = function (e, t) {
					var n = e.baseTag,
						r = e.bodyAttributes,
						o = e.htmlAttributes,
						a = e.linkTags,
						i = e.metaTags,
						c = e.noscriptTags,
						l = e.onChangeClientState,
						s = e.scriptTags,
						u = e.styleTags,
						d = e.title,
						f = e.titleAttributes;
					le(v.BODY, r), le(v.HTML, o), ce(d, f);
					var p = {
							baseTag: se(v.BASE, n),
							linkTags: se(v.LINK, a),
							metaTags: se(v.META, i),
							noscriptTags: se(v.NOSCRIPT, c),
							scriptTags: se(v.SCRIPT, s),
							styleTags: se(v.STYLE, u),
						},
						b = {},
						m = {};
					Object.keys(p).forEach(function (e) {
						var t = p[e],
							n = t.newTags,
							r = t.oldTags;
						n.length && (b[e] = n),
							r.length && (m[e] = p[e].oldTags);
					}),
						t && t(),
						l(e, b, m);
				},
				ie = function (e) {
					return Array.isArray(e) ? e.join("") : e;
				},
				ce = function (e, t) {
					void 0 !== e &&
						document.title !== e &&
						(document.title = ie(e)),
						le(v.TITLE, t);
				},
				le = function (e, t) {
					var n = document.getElementsByTagName(e)[0];
					if (n) {
						for (
							var r = n.getAttribute(B),
								o = r ? r.split(",") : [],
								a = [].concat(o),
								i = Object.keys(t),
								c = 0;
							c < i.length;
							c++
						) {
							var l = i[c],
								s = t[l] || "";
							n.getAttribute(l) !== s && n.setAttribute(l, s),
								-1 === o.indexOf(l) && o.push(l);
							var u = a.indexOf(l);
							-1 !== u && a.splice(u, 1);
						}
						for (var d = a.length - 1; d >= 0; d--)
							n.removeAttribute(a[d]);
						o.length === a.length
							? n.removeAttribute(B)
							: n.getAttribute(B) !== i.join(",") &&
								n.setAttribute(B, i.join(","));
					}
				},
				se = function (e, t) {
					var n = document.head || document.querySelector(v.HEAD),
						r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
						o = Array.prototype.slice.call(r),
						a = [],
						i = void 0;
					return (
						t &&
							t.length &&
							t.forEach(function (t) {
								var n = document.createElement(e);
								for (var r in t)
									if (t.hasOwnProperty(r))
										if (r === S) n.innerHTML = t.innerHTML;
										else if (r === k)
											n.styleSheet
												? (n.styleSheet.cssText =
														t.cssText)
												: n.appendChild(
														document.createTextNode(
															t.cssText,
														),
													);
										else {
											var c = void 0 === t[r] ? "" : t[r];
											n.setAttribute(r, c);
										}
								n.setAttribute(B, "true"),
									o.some(function (e, t) {
										return (i = t), n.isEqualNode(e);
									})
										? o.splice(i, 1)
										: a.push(n);
							}),
						o.forEach(function (e) {
							return e.parentNode.removeChild(e);
						}),
						a.forEach(function (e) {
							return n.appendChild(e);
						}),
						{ oldTags: o, newTags: a }
					);
				},
				ue = function (e) {
					return Object.keys(e).reduce(function (t, n) {
						var r =
							void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
						return t ? t + " " + r : r;
					}, "");
				},
				de = function (e) {
					var t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {};
					return Object.keys(e).reduce(function (t, n) {
						return (t[R[n] || n] = e[n]), t;
					}, t);
				},
				fe = function (e, t, n) {
					switch (e) {
						case v.TITLE:
							return {
								toComponent: function () {
									return (
										(e = t.title),
										(n = t.titleAttributes),
										((r = { key: e })[B] = !0),
										(o = de(n, r)),
										[c.createElement(v.TITLE, o, e)]
									);
									var e, n, r, o;
								},
								toString: function () {
									return (function (e, t, n, r) {
										var o = ue(n),
											a = ie(t);
										return o
											? "<" +
													e +
													' data-react-helmet="true" ' +
													o +
													">" +
													W(a, r) +
													"</" +
													e +
													">"
											: "<" +
													e +
													' data-react-helmet="true">' +
													W(a, r) +
													"</" +
													e +
													">";
									})(e, t.title, t.titleAttributes, n);
								},
							};
						case g:
						case h:
							return {
								toComponent: function () {
									return de(t);
								},
								toString: function () {
									return ue(t);
								},
							};
						default:
							return {
								toComponent: function () {
									return (function (e, t) {
										return t.map(function (t, n) {
											var r,
												o =
													(((r = { key: n })[B] = !0),
													r);
											return (
												Object.keys(t).forEach(
													function (e) {
														var n = R[e] || e;
														if (
															n === S ||
															n === k
														) {
															var r =
																t.innerHTML ||
																t.cssText;
															o.dangerouslySetInnerHTML =
																{ __html: r };
														} else o[n] = t[e];
													},
												),
												c.createElement(e, o)
											);
										});
									})(e, t);
								},
								toString: function () {
									return (function (e, t, n) {
										return t.reduce(function (t, r) {
											var o = Object.keys(r)
													.filter(function (e) {
														return !(
															e === S || e === k
														);
													})
													.reduce(function (e, t) {
														var o =
															void 0 === r[t]
																? t
																: t +
																	'="' +
																	W(r[t], n) +
																	'"';
														return e
															? e + " " + o
															: o;
													}, ""),
												a =
													r.innerHTML ||
													r.cssText ||
													"",
												i = -1 === j.indexOf(e);
											return (
												t +
												"<" +
												e +
												' data-react-helmet="true" ' +
												o +
												(i
													? "/>"
													: ">" + a + "</" + e + ">")
											);
										}, "");
									})(e, t, n);
								},
							};
					}
				},
				pe = function (e) {
					var t = e.baseTag,
						n = e.bodyAttributes,
						r = e.encode,
						o = e.htmlAttributes,
						a = e.linkTags,
						i = e.metaTags,
						c = e.noscriptTags,
						l = e.scriptTags,
						s = e.styleTags,
						u = e.title,
						d = void 0 === u ? "" : u,
						f = e.titleAttributes;
					return {
						base: fe(v.BASE, t, r),
						bodyAttributes: fe(g, n, r),
						htmlAttributes: fe(h, o, r),
						link: fe(v.LINK, a, r),
						meta: fe(v.META, i, r),
						noscript: fe(v.NOSCRIPT, c, r),
						script: fe(v.SCRIPT, l, r),
						style: fe(v.STYLE, s, r),
						title: fe(v.TITLE, { title: d, titleAttributes: f }, r),
					};
				},
				be = d()(
					function (e) {
						return {
							baseTag: Q([x, _], e),
							bodyAttributes: K(g, e),
							defer: X(e, L),
							encode: X(e, I),
							htmlAttributes: K(h, e),
							linkTags: Y(v.LINK, [A, x], e),
							metaTags: Y(v.META, [C, y, E, P, T], e),
							noscriptTags: Y(v.NOSCRIPT, [S], e),
							onChangeClientState: Z(e),
							scriptTags: Y(v.SCRIPT, [O, S], e),
							styleTags: Y(v.STYLE, [k], e),
							title: V(e),
							titleAttributes: K(w, e),
						};
					},
					function (e) {
						oe && ne(oe),
							e.defer
								? (oe = te(function () {
										ae(e, function () {
											oe = null;
										});
									}))
								: (ae(e), (oe = null));
					},
					pe,
				)(function () {
					return null;
				}),
				me =
					((o = be),
					(i = a =
						(function (e) {
							function t() {
								return (
									U(this, t),
									H(this, e.apply(this, arguments))
								);
							}
							return (
								(function (e, t) {
									if ("function" != typeof t && null !== t)
										throw new TypeError(
											"Super expression must either be null or a function, not " +
												typeof t,
										);
									(e.prototype = Object.create(
										t && t.prototype,
										{
											constructor: {
												value: e,
												enumerable: !1,
												writable: !0,
												configurable: !0,
											},
										},
									)),
										t &&
											(Object.setPrototypeOf
												? Object.setPrototypeOf(e, t)
												: (e.__proto__ = t));
								})(t, e),
								(t.prototype.shouldComponentUpdate = function (
									e,
								) {
									return !p()(this.props, e);
								}),
								(t.prototype.mapNestedChildrenToProps =
									function (e, t) {
										if (!t) return null;
										switch (e.type) {
											case v.SCRIPT:
											case v.NOSCRIPT:
												return { innerHTML: t };
											case v.STYLE:
												return { cssText: t };
										}
										throw new Error(
											"<" +
												e.type +
												" /> elements are self-closing and can not contain children. Refer to our API for more information.",
										);
									}),
								(t.prototype.flattenArrayTypeChildren =
									function (e) {
										var t,
											n = e.child,
											r = e.arrayTypeChildren,
											o = e.newChildProps,
											a = e.nestedChildren;
										return G(
											{},
											r,
											(((t = {})[n.type] = [].concat(
												r[n.type] || [],
												[
													G(
														{},
														o,
														this.mapNestedChildrenToProps(
															n,
															a,
														),
													),
												],
											)),
											t),
										);
									}),
								(t.prototype.mapObjectTypeChildren = function (
									e,
								) {
									var t,
										n,
										r = e.child,
										o = e.newProps,
										a = e.newChildProps,
										i = e.nestedChildren;
									switch (r.type) {
										case v.TITLE:
											return G(
												{},
												o,
												(((t = {})[r.type] = i),
												(t.titleAttributes = G({}, a)),
												t),
											);
										case v.BODY:
											return G({}, o, {
												bodyAttributes: G({}, a),
											});
										case v.HTML:
											return G({}, o, {
												htmlAttributes: G({}, a),
											});
									}
									return G(
										{},
										o,
										(((n = {})[r.type] = G({}, a)), n),
									);
								}),
								(t.prototype.mapArrayTypeChildrenToProps =
									function (e, t) {
										var n = G({}, t);
										return (
											Object.keys(e).forEach(
												function (t) {
													var r;
													n = G(
														{},
														n,
														(((r = {})[t] = e[t]),
														r),
													);
												},
											),
											n
										);
									}),
								(t.prototype.warnOnInvalidChildren = function (
									e,
									t,
								) {
									return !0;
								}),
								(t.prototype.mapChildrenToProps = function (
									e,
									t,
								) {
									var n = this,
										r = {};
									return (
										c.Children.forEach(e, function (e) {
											if (e && e.props) {
												var o = e.props,
													a = o.children,
													i = (function (e) {
														var t =
															arguments.length >
																1 &&
															void 0 !==
																arguments[1]
																? arguments[1]
																: {};
														return Object.keys(
															e,
														).reduce(function (
															t,
															n,
														) {
															return (
																(t[M[n] || n] =
																	e[n]),
																t
															);
														}, t);
													})(q(o, ["children"]));
												switch (
													(n.warnOnInvalidChildren(
														e,
														a,
													),
													e.type)
												) {
													case v.LINK:
													case v.META:
													case v.NOSCRIPT:
													case v.SCRIPT:
													case v.STYLE:
														r =
															n.flattenArrayTypeChildren(
																{
																	child: e,
																	arrayTypeChildren:
																		r,
																	newChildProps:
																		i,
																	nestedChildren:
																		a,
																},
															);
														break;
													default:
														t =
															n.mapObjectTypeChildren(
																{
																	child: e,
																	newProps: t,
																	newChildProps:
																		i,
																	nestedChildren:
																		a,
																},
															);
												}
											}
										}),
										(t = this.mapArrayTypeChildrenToProps(
											r,
											t,
										))
									);
								}),
								(t.prototype.render = function () {
									var e = this.props,
										t = e.children,
										n = q(e, ["children"]),
										r = G({}, n);
									return (
										t &&
											(r = this.mapChildrenToProps(t, r)),
										c.createElement(o, r)
									);
								}),
								$(t, null, [
									{
										key: "canUseDOM",
										set: function (e) {
											o.canUseDOM = e;
										},
									},
								]),
								t
							);
						})(c.Component)),
					(a.propTypes = {
						base: s().object,
						bodyAttributes: s().object,
						children: s().oneOfType([
							s().arrayOf(s().node),
							s().node,
						]),
						defaultTitle: s().string,
						defer: s().bool,
						encodeSpecialCharacters: s().bool,
						htmlAttributes: s().object,
						link: s().arrayOf(s().object),
						meta: s().arrayOf(s().object),
						noscript: s().arrayOf(s().object),
						onChangeClientState: s().func,
						script: s().arrayOf(s().object),
						style: s().arrayOf(s().object),
						title: s().string,
						titleAttributes: s().object,
						titleTemplate: s().string,
					}),
					(a.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0,
					}),
					(a.peek = o.peek),
					(a.rewind = function () {
						var e = o.rewind();
						return (
							e ||
								(e = pe({
									baseTag: [],
									bodyAttributes: {},
									encodeSpecialCharacters: !0,
									htmlAttributes: {},
									linkTags: [],
									metaTags: [],
									noscriptTags: [],
									scriptTags: [],
									styleTags: [],
									title: "",
									titleAttributes: {},
								})),
							e
						);
					}),
					i);
			me.renderStatic = me.rewind;
			const ge = function (e) {
				return c.createElement(me, Object.assign({}, e));
			};
		},
		4748: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => r });
			const r = n(7294).createContext(null);
		},
		6291: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => r });
			const r = n(8790).H;
		},
		2263: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => a });
			var r = n(7294),
				o = n(4748);
			const a = function () {
				var e = (0, r.useContext)(o.Z);
				if (null === e)
					throw new Error("Docusaurus context not provided.");
				return e;
			};
		},
		1678: (e, t, n) => {
			"use strict";
			n.r(t), n.d(t, { default: () => a });
			var r = n(412),
				o = n(9782);
			const a = (function () {
				if (!r.Z.canUseDOM) return null;
				var e = o.default.themeConfig.gtag.trackingID;
				return {
					onRouteUpdate: function (t) {
						var n = t.location;
						window.gtag("config", e, {
							page_path: n.pathname,
							page_title: document.title,
						}),
							window.gtag("event", "page_view", {
								page_title: document.title,
								page_location: n.href,
								page_path: n.pathname,
							});
					},
				};
			})();
		},
		2203: (e, t, n) => {
			"use strict";
			function r(e, t) {
				(e.prototype = Object.create(t.prototype)),
					(e.prototype.constructor = e),
					(e.__proto__ = t);
			}
			function o(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called",
					);
				return e;
			}
			function a(e, t, n) {
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
			function i() {
				return (
					(i =
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
					i.apply(this, arguments)
				);
			}
			var c = n(7294),
				l = n(5697),
				s = [],
				u = [];
			function d(e) {
				var t = e(),
					n = { loading: !0, loaded: null, error: null };
				return (
					(n.promise = t
						.then(function (e) {
							return (n.loading = !1), (n.loaded = e), e;
						})
						.catch(function (e) {
							throw ((n.loading = !1), (n.error = e), e);
						})),
					n
				);
			}
			function f(e) {
				var t = { loading: !1, loaded: {}, error: null },
					n = [];
				try {
					Object.keys(e).forEach(function (r) {
						var o = d(e[r]);
						o.loading
							? (t.loading = !0)
							: ((t.loaded[r] = o.loaded), (t.error = o.error)),
							n.push(o.promise),
							o.promise
								.then(function (e) {
									t.loaded[r] = e;
								})
								.catch(function (e) {
									t.error = e;
								});
					});
				} catch (r) {
					t.error = r;
				}
				return (
					(t.promise = Promise.all(n)
						.then(function (e) {
							return (t.loading = !1), e;
						})
						.catch(function (e) {
							throw ((t.loading = !1), e);
						})),
					t
				);
			}
			function p(e, t) {
				return c.createElement(
					(n = e) && n.__esModule ? n.default : n,
					t,
				);
				var n;
			}
			function b(e, t) {
				var d, f;
				if (!t.loading)
					throw new Error(
						"react-loadable requires a `loading` component",
					);
				var b = i(
						{
							loader: null,
							loading: null,
							delay: 200,
							timeout: null,
							render: p,
							webpack: null,
							modules: null,
						},
						t,
					),
					m = null;
				function g() {
					return m || (m = e(b.loader)), m.promise;
				}
				return (
					s.push(g),
					"function" == typeof b.webpack &&
						u.push(function () {
							if (
								(0, b.webpack)().every(function (e) {
									return void 0 !== e && void 0 !== n.m[e];
								})
							)
								return g();
						}),
					(f = d =
						(function (t) {
							function n(n) {
								var r;
								return (
									a(
										o(o((r = t.call(this, n) || this))),
										"retry",
										function () {
											r.setState({
												error: null,
												loading: !0,
												timedOut: !1,
											}),
												(m = e(b.loader)),
												r._loadModule();
										},
									),
									g(),
									(r.state = {
										error: m.error,
										pastDelay: !1,
										timedOut: !1,
										loading: m.loading,
										loaded: m.loaded,
									}),
									r
								);
							}
							r(n, t),
								(n.preload = function () {
									return g();
								});
							var i = n.prototype;
							return (
								(i.UNSAFE_componentWillMount = function () {
									this._loadModule();
								}),
								(i.componentDidMount = function () {
									this._mounted = !0;
								}),
								(i._loadModule = function () {
									var e = this;
									if (
										(this.context.loadable &&
											Array.isArray(b.modules) &&
											b.modules.forEach(function (t) {
												e.context.loadable.report(t);
											}),
										m.loading)
									) {
										var t = function (t) {
											e._mounted && e.setState(t);
										};
										"number" == typeof b.delay &&
											(0 === b.delay
												? this.setState({
														pastDelay: !0,
													})
												: (this._delay = setTimeout(
														function () {
															t({
																pastDelay: !0,
															});
														},
														b.delay,
													))),
											"number" == typeof b.timeout &&
												(this._timeout = setTimeout(
													function () {
														t({ timedOut: !0 });
													},
													b.timeout,
												));
										var n = function () {
											t({
												error: m.error,
												loaded: m.loaded,
												loading: m.loading,
											}),
												e._clearTimeouts();
										};
										m.promise
											.then(function () {
												return n(), null;
											})
											.catch(function (e) {
												return n(), null;
											});
									}
								}),
								(i.componentWillUnmount = function () {
									(this._mounted = !1), this._clearTimeouts();
								}),
								(i._clearTimeouts = function () {
									clearTimeout(this._delay),
										clearTimeout(this._timeout);
								}),
								(i.render = function () {
									return this.state.loading ||
										this.state.error
										? c.createElement(b.loading, {
												isLoading: this.state.loading,
												pastDelay: this.state.pastDelay,
												timedOut: this.state.timedOut,
												error: this.state.error,
												retry: this.retry,
											})
										: this.state.loaded
											? b.render(
													this.state.loaded,
													this.props,
												)
											: null;
								}),
								n
							);
						})(c.Component)),
					a(d, "contextTypes", {
						loadable: l.shape({ report: l.func.isRequired }),
					}),
					f
				);
			}
			function m(e) {
				return b(d, e);
			}
			m.Map = function (e) {
				if ("function" != typeof e.render)
					throw new Error(
						"LoadableMap requires a `render(loaded, props)` function",
					);
				return b(f, e);
			};
			var g = (function (e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				r(t, e);
				var n = t.prototype;
				return (
					(n.getChildContext = function () {
						return { loadable: { report: this.props.report } };
					}),
					(n.render = function () {
						return c.Children.only(this.props.children);
					}),
					t
				);
			})(c.Component);
			function h(e) {
				for (var t = []; e.length; ) {
					var n = e.pop();
					t.push(n());
				}
				return Promise.all(t).then(function () {
					if (e.length) return h(e);
				});
			}
			a(g, "propTypes", { report: l.func.isRequired }),
				a(g, "childContextTypes", {
					loadable: l.shape({ report: l.func.isRequired }).isRequired,
				}),
				(m.Capture = g),
				(m.preloadAll = function () {
					return new Promise(function (e, t) {
						h(s).then(e, t);
					});
				}),
				(m.preloadReady = function () {
					return new Promise(function (e, t) {
						h(u).then(e, e);
					});
				}),
				(e.exports = m);
		},
		5345: (e, t, n) => {
			"use strict";
			n.r(t);
			var r = n(7410),
				o = n(412),
				a = n(9782);
			(function (e) {
				if (o.Z.canUseDOM) {
					var t = a.default.themeConfig.prism,
						r = (t = void 0 === t ? {} : t).additionalLanguages,
						i = void 0 === r ? [] : r;
					(window.Prism = e),
						i.forEach(function (e) {
							n(6500)("./prism-" + e);
						}),
						delete window.Prism;
				}
			})(r.Z);
		},
		71: (e, t, n) => {
			"use strict";
			n.d(t, {
				lX: () => E,
				q_: () => O,
				ob: () => m,
				PP: () => R,
				Ep: () => b,
				Hp: () => g,
			});
			var r = n(7462);
			function o(e) {
				return "/" === e.charAt(0);
			}
			function a(e, t) {
				for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
					e[n] = e[r];
				e.pop();
			}
			const i = function (e, t) {
				void 0 === t && (t = "");
				var n,
					r = (e && e.split("/")) || [],
					i = (t && t.split("/")) || [],
					c = e && o(e),
					l = t && o(t),
					s = c || l;
				if (
					(e && o(e)
						? (i = r)
						: r.length && (i.pop(), (i = i.concat(r))),
					!i.length)
				)
					return "/";
				if (i.length) {
					var u = i[i.length - 1];
					n = "." === u || ".." === u || "" === u;
				} else n = !1;
				for (var d = 0, f = i.length; f >= 0; f--) {
					var p = i[f];
					"." === p
						? a(i, f)
						: ".." === p
							? (a(i, f), d++)
							: d && (a(i, f), d--);
				}
				if (!s) for (; d--; d) i.unshift("..");
				!s || "" === i[0] || (i[0] && o(i[0])) || i.unshift("");
				var b = i.join("/");
				return n && "/" !== b.substr(-1) && (b += "/"), b;
			};
			function c(e) {
				return e.valueOf
					? e.valueOf()
					: Object.prototype.valueOf.call(e);
			}
			const l = function e(t, n) {
				if (t === n) return !0;
				if (null == t || null == n) return !1;
				if (Array.isArray(t))
					return (
						Array.isArray(n) &&
						t.length === n.length &&
						t.every(function (t, r) {
							return e(t, n[r]);
						})
					);
				if ("object" == typeof t || "object" == typeof n) {
					var r = c(t),
						o = c(n);
					return r !== t || o !== n
						? e(r, o)
						: Object.keys(Object.assign({}, t, n)).every(
								function (r) {
									return e(t[r], n[r]);
								},
							);
				}
				return !1;
			};
			var s = n(2177);
			function u(e) {
				return "/" === e.charAt(0) ? e : "/" + e;
			}
			function d(e) {
				return "/" === e.charAt(0) ? e.substr(1) : e;
			}
			function f(e, t) {
				return (function (e, t) {
					return (
						0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
						-1 !== "/?#".indexOf(e.charAt(t.length))
					);
				})(e, t)
					? e.substr(t.length)
					: e;
			}
			function p(e) {
				return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
			}
			function b(e) {
				var t = e.pathname,
					n = e.search,
					r = e.hash,
					o = t || "/";
				return (
					n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
					r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
					o
				);
			}
			function m(e, t, n, o) {
				var a;
				"string" == typeof e
					? ((a = (function (e) {
							var t = e || "/",
								n = "",
								r = "",
								o = t.indexOf("#");
							-1 !== o &&
								((r = t.substr(o)), (t = t.substr(0, o)));
							var a = t.indexOf("?");
							return (
								-1 !== a &&
									((n = t.substr(a)), (t = t.substr(0, a))),
								{
									pathname: t,
									search: "?" === n ? "" : n,
									hash: "#" === r ? "" : r,
								}
							);
						})(e)),
						(a.state = t))
					: (void 0 === (a = (0, r.Z)({}, e)).pathname &&
							(a.pathname = ""),
						a.search
							? "?" !== a.search.charAt(0) &&
								(a.search = "?" + a.search)
							: (a.search = ""),
						a.hash
							? "#" !== a.hash.charAt(0) &&
								(a.hash = "#" + a.hash)
							: (a.hash = ""),
						void 0 !== t && void 0 === a.state && (a.state = t));
				try {
					a.pathname = decodeURI(a.pathname);
				} catch (c) {
					throw c instanceof URIError
						? new URIError(
								'Pathname "' +
									a.pathname +
									'" could not be decoded. This is likely caused by an invalid percent-encoding.',
							)
						: c;
				}
				return (
					n && (a.key = n),
					o
						? a.pathname
							? "/" !== a.pathname.charAt(0) &&
								(a.pathname = i(a.pathname, o.pathname))
							: (a.pathname = o.pathname)
						: a.pathname || (a.pathname = "/"),
					a
				);
			}
			function g(e, t) {
				return (
					e.pathname === t.pathname &&
					e.search === t.search &&
					e.hash === t.hash &&
					e.key === t.key &&
					l(e.state, t.state)
				);
			}
			function h() {
				var e = null;
				var t = [];
				return {
					setPrompt: function (t) {
						return (
							(e = t),
							function () {
								e === t && (e = null);
							}
						);
					},
					confirmTransitionTo: function (t, n, r, o) {
						if (null != e) {
							var a = "function" == typeof e ? e(t, n) : e;
							"string" == typeof a
								? "function" == typeof r
									? r(a, o)
									: o(!0)
								: o(!1 !== a);
						} else o(!0);
					},
					appendListener: function (e) {
						var n = !0;
						function r() {
							n && e.apply(void 0, arguments);
						}
						return (
							t.push(r),
							function () {
								(n = !1),
									(t = t.filter(function (e) {
										return e !== r;
									}));
							}
						);
					},
					notifyListeners: function () {
						for (
							var e = arguments.length, n = new Array(e), r = 0;
							r < e;
							r++
						)
							n[r] = arguments[r];
						t.forEach(function (e) {
							return e.apply(void 0, n);
						});
					},
				};
			}
			var w = !(
				"undefined" == typeof window ||
				!window.document ||
				!window.document.createElement
			);
			function v(e, t) {
				t(window.confirm(e));
			}
			var y = "popstate",
				k = "hashchange";
			function x() {
				try {
					return window.history.state || {};
				} catch (e) {
					return {};
				}
			}
			function E(e) {
				void 0 === e && (e = {}), w || (0, s.Z)(!1);
				var t,
					n = window.history,
					o =
						((-1 ===
							(t = window.navigator.userAgent).indexOf(
								"Android 2.",
							) &&
							-1 === t.indexOf("Android 4.0")) ||
							-1 === t.indexOf("Mobile Safari") ||
							-1 !== t.indexOf("Chrome") ||
							-1 !== t.indexOf("Windows Phone")) &&
						window.history &&
						"pushState" in window.history,
					a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
					i = e,
					c = i.forceRefresh,
					l = void 0 !== c && c,
					d = i.getUserConfirmation,
					g = void 0 === d ? v : d,
					E = i.keyLength,
					S = void 0 === E ? 6 : E,
					T = e.basename ? p(u(e.basename)) : "";
				function C(e) {
					var t = e || {},
						n = t.key,
						r = t.state,
						o = window.location,
						a = o.pathname + o.search + o.hash;
					return T && (a = f(a, T)), m(a, r, n);
				}
				function P() {
					return Math.random().toString(36).substr(2, S);
				}
				var A = h();
				function O(e) {
					(0, r.Z)(U, e),
						(U.length = n.length),
						A.notifyListeners(U.location, U.action);
				}
				function _(e) {
					(function (e) {
						return (
							void 0 === e.state &&
							-1 === navigator.userAgent.indexOf("CriOS")
						);
					})(e) || L(C(e.state));
				}
				function R() {
					L(C(x()));
				}
				var N = !1;
				function L(e) {
					if (N) (N = !1), O();
					else {
						A.confirmTransitionTo(e, "POP", g, function (t) {
							t
								? O({ action: "POP", location: e })
								: (function (e) {
										var t = U.location,
											n = D.indexOf(t.key);
										-1 === n && (n = 0);
										var r = D.indexOf(e.key);
										-1 === r && (r = 0);
										var o = n - r;
										o && ((N = !0), M(o));
									})(e);
						});
					}
				}
				var I = C(x()),
					D = [I.key];
				function F(e) {
					return T + b(e);
				}
				function M(e) {
					n.go(e);
				}
				var j = 0;
				function B(e) {
					1 === (j += e) && 1 === e
						? (window.addEventListener(y, _),
							a && window.addEventListener(k, R))
						: 0 === j &&
							(window.removeEventListener(y, _),
							a && window.removeEventListener(k, R));
				}
				var z = !1;
				var U = {
					length: n.length,
					action: "POP",
					location: I,
					createHref: F,
					push: function (e, t) {
						var r = "PUSH",
							a = m(e, t, P(), U.location);
						A.confirmTransitionTo(a, r, g, function (e) {
							if (e) {
								var t = F(a),
									i = a.key,
									c = a.state;
								if (o)
									if (
										(n.pushState(
											{ key: i, state: c },
											null,
											t,
										),
										l)
									)
										window.location.href = t;
									else {
										var s = D.indexOf(U.location.key),
											u = D.slice(0, s + 1);
										u.push(a.key),
											(D = u),
											O({ action: r, location: a });
									}
								else window.location.href = t;
							}
						});
					},
					replace: function (e, t) {
						var r = "REPLACE",
							a = m(e, t, P(), U.location);
						A.confirmTransitionTo(a, r, g, function (e) {
							if (e) {
								var t = F(a),
									i = a.key,
									c = a.state;
								if (o)
									if (
										(n.replaceState(
											{ key: i, state: c },
											null,
											t,
										),
										l)
									)
										window.location.replace(t);
									else {
										var s = D.indexOf(U.location.key);
										-1 !== s && (D[s] = a.key),
											O({ action: r, location: a });
									}
								else window.location.replace(t);
							}
						});
					},
					go: M,
					goBack: function () {
						M(-1);
					},
					goForward: function () {
						M(1);
					},
					block: function (e) {
						void 0 === e && (e = !1);
						var t = A.setPrompt(e);
						return (
							z || (B(1), (z = !0)),
							function () {
								return z && ((z = !1), B(-1)), t();
							}
						);
					},
					listen: function (e) {
						var t = A.appendListener(e);
						return (
							B(1),
							function () {
								B(-1), t();
							}
						);
					},
				};
				return U;
			}
			var S = "hashchange",
				T = {
					hashbang: {
						encodePath: function (e) {
							return "!" === e.charAt(0) ? e : "!/" + d(e);
						},
						decodePath: function (e) {
							return "!" === e.charAt(0) ? e.substr(1) : e;
						},
					},
					noslash: { encodePath: d, decodePath: u },
					slash: { encodePath: u, decodePath: u },
				};
			function C(e) {
				var t = e.indexOf("#");
				return -1 === t ? e : e.slice(0, t);
			}
			function P() {
				var e = window.location.href,
					t = e.indexOf("#");
				return -1 === t ? "" : e.substring(t + 1);
			}
			function A(e) {
				window.location.replace(C(window.location.href) + "#" + e);
			}
			function O(e) {
				void 0 === e && (e = {}), w || (0, s.Z)(!1);
				var t = window.history,
					n = (window.navigator.userAgent.indexOf("Firefox"), e),
					o = n.getUserConfirmation,
					a = void 0 === o ? v : o,
					i = n.hashType,
					c = void 0 === i ? "slash" : i,
					l = e.basename ? p(u(e.basename)) : "",
					d = T[c],
					g = d.encodePath,
					y = d.decodePath;
				function k() {
					var e = y(P());
					return l && (e = f(e, l)), m(e);
				}
				var x = h();
				function E(e) {
					(0, r.Z)(z, e),
						(z.length = t.length),
						x.notifyListeners(z.location, z.action);
				}
				var O = !1,
					_ = null;
				function R() {
					var e,
						t,
						n = P(),
						r = g(n);
					if (n !== r) A(r);
					else {
						var o = k(),
							i = z.location;
						if (
							!O &&
							((t = o),
							(e = i).pathname === t.pathname &&
								e.search === t.search &&
								e.hash === t.hash)
						)
							return;
						if (_ === b(o)) return;
						(_ = null),
							(function (e) {
								if (O) (O = !1), E();
								else {
									var t = "POP";
									x.confirmTransitionTo(
										e,
										t,
										a,
										function (n) {
											n
												? E({ action: t, location: e })
												: (function (e) {
														var t = z.location,
															n = D.lastIndexOf(
																b(t),
															);
														-1 === n && (n = 0);
														var r = D.lastIndexOf(
															b(e),
														);
														-1 === r && (r = 0);
														var o = n - r;
														o && ((O = !0), F(o));
													})(e);
										},
									);
								}
							})(o);
					}
				}
				var N = P(),
					L = g(N);
				N !== L && A(L);
				var I = k(),
					D = [b(I)];
				function F(e) {
					t.go(e);
				}
				var M = 0;
				function j(e) {
					1 === (M += e) && 1 === e
						? window.addEventListener(S, R)
						: 0 === M && window.removeEventListener(S, R);
				}
				var B = !1;
				var z = {
					length: t.length,
					action: "POP",
					location: I,
					createHref: function (e) {
						var t = document.querySelector("base"),
							n = "";
						return (
							t &&
								t.getAttribute("href") &&
								(n = C(window.location.href)),
							n + "#" + g(l + b(e))
						);
					},
					push: function (e, t) {
						var n = "PUSH",
							r = m(e, void 0, void 0, z.location);
						x.confirmTransitionTo(r, n, a, function (e) {
							if (e) {
								var t = b(r),
									o = g(l + t);
								if (P() !== o) {
									(_ = t),
										(function (e) {
											window.location.hash = e;
										})(o);
									var a = D.lastIndexOf(b(z.location)),
										i = D.slice(0, a + 1);
									i.push(t),
										(D = i),
										E({ action: n, location: r });
								} else E();
							}
						});
					},
					replace: function (e, t) {
						var n = "REPLACE",
							r = m(e, void 0, void 0, z.location);
						x.confirmTransitionTo(r, n, a, function (e) {
							if (e) {
								var t = b(r),
									o = g(l + t);
								P() !== o && ((_ = t), A(o));
								var a = D.indexOf(b(z.location));
								-1 !== a && (D[a] = t),
									E({ action: n, location: r });
							}
						});
					},
					go: F,
					goBack: function () {
						F(-1);
					},
					goForward: function () {
						F(1);
					},
					block: function (e) {
						void 0 === e && (e = !1);
						var t = x.setPrompt(e);
						return (
							B || (j(1), (B = !0)),
							function () {
								return B && ((B = !1), j(-1)), t();
							}
						);
					},
					listen: function (e) {
						var t = x.appendListener(e);
						return (
							j(1),
							function () {
								j(-1), t();
							}
						);
					},
				};
				return z;
			}
			function _(e, t, n) {
				return Math.min(Math.max(e, t), n);
			}
			function R(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.getUserConfirmation,
					o = t.initialEntries,
					a = void 0 === o ? ["/"] : o,
					i = t.initialIndex,
					c = void 0 === i ? 0 : i,
					l = t.keyLength,
					s = void 0 === l ? 6 : l,
					u = h();
				function d(e) {
					(0, r.Z)(y, e),
						(y.length = y.entries.length),
						u.notifyListeners(y.location, y.action);
				}
				function f() {
					return Math.random().toString(36).substr(2, s);
				}
				var p = _(c, 0, a.length - 1),
					g = a.map(function (e) {
						return m(
							e,
							void 0,
							"string" == typeof e ? f() : e.key || f(),
						);
					}),
					w = b;
				function v(e) {
					var t = _(y.index + e, 0, y.entries.length - 1),
						r = y.entries[t];
					u.confirmTransitionTo(r, "POP", n, function (e) {
						e ? d({ action: "POP", location: r, index: t }) : d();
					});
				}
				var y = {
					length: g.length,
					action: "POP",
					location: g[p],
					index: p,
					entries: g,
					createHref: w,
					push: function (e, t) {
						var r = "PUSH",
							o = m(e, t, f(), y.location);
						u.confirmTransitionTo(o, r, n, function (e) {
							if (e) {
								var t = y.index + 1,
									n = y.entries.slice(0);
								n.length > t
									? n.splice(t, n.length - t, o)
									: n.push(o),
									d({
										action: r,
										location: o,
										index: t,
										entries: n,
									});
							}
						});
					},
					replace: function (e, t) {
						var r = "REPLACE",
							o = m(e, t, f(), y.location);
						u.confirmTransitionTo(o, r, n, function (e) {
							e &&
								((y.entries[y.index] = o),
								d({ action: r, location: o }));
						});
					},
					go: v,
					goBack: function () {
						v(-1);
					},
					goForward: function () {
						v(1);
					},
					canGo: function (e) {
						var t = y.index + e;
						return t >= 0 && t < y.entries.length;
					},
					block: function (e) {
						return void 0 === e && (e = !1), u.setPrompt(e);
					},
					listen: function (e) {
						return u.appendListener(e);
					},
				};
				return y;
			}
		},
		8679: (e, t, n) => {
			"use strict";
			var r = n(9864),
				o = {
					childContextTypes: !0,
					contextType: !0,
					contextTypes: !0,
					defaultProps: !0,
					displayName: !0,
					getDefaultProps: !0,
					getDerivedStateFromError: !0,
					getDerivedStateFromProps: !0,
					mixins: !0,
					propTypes: !0,
					type: !0,
				},
				a = {
					name: !0,
					length: !0,
					prototype: !0,
					caller: !0,
					callee: !0,
					arguments: !0,
					arity: !0,
				},
				i = {
					$$typeof: !0,
					compare: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0,
					type: !0,
				},
				c = {};
			function l(e) {
				return r.isMemo(e) ? i : c[e.$$typeof] || o;
			}
			(c[r.ForwardRef] = {
				$$typeof: !0,
				render: !0,
				defaultProps: !0,
				displayName: !0,
				propTypes: !0,
			}),
				(c[r.Memo] = i);
			var s = Object.defineProperty,
				u = Object.getOwnPropertyNames,
				d = Object.getOwnPropertySymbols,
				f = Object.getOwnPropertyDescriptor,
				p = Object.getPrototypeOf,
				b = Object.prototype;
			e.exports = function e(t, n, r) {
				if ("string" != typeof n) {
					if (b) {
						var o = p(n);
						o && o !== b && e(t, o, r);
					}
					var i = u(n);
					d && (i = i.concat(d(n)));
					for (var c = l(t), m = l(n), g = 0; g < i.length; ++g) {
						var h = i[g];
						if (
							!(a[h] || (r && r[h]) || (m && m[h]) || (c && c[h]))
						) {
							var w = f(n, h);
							try {
								s(t, h, w);
							} catch (v) {}
						}
					}
				}
				return t;
			};
		},
		2497: (e, t, n) => {
			"use strict";
			n.r(t);
		},
		7771: (e, t, n) => {
			"use strict";
			n.r(t);
		},
		2295: (e, t, n) => {
			"use strict";
			n.r(t);
		},
		4865: function (e, t, n) {
			var r, o;
			(r = function () {
				var e,
					t,
					n = { version: "0.2.0" },
					r = (n.settings = {
						minimum: 0.08,
						easing: "ease",
						positionUsing: "",
						speed: 200,
						trickle: !0,
						trickleRate: 0.02,
						trickleSpeed: 800,
						showSpinner: !0,
						barSelector: '[role="bar"]',
						spinnerSelector: '[role="spinner"]',
						parent: "body",
						template:
							'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
					});
				function o(e, t, n) {
					return e < t ? t : e > n ? n : e;
				}
				function a(e) {
					return 100 * (-1 + e);
				}
				function i(e, t, n) {
					var o;
					return (
						((o =
							"translate3d" === r.positionUsing
								? {
										transform:
											"translate3d(" + a(e) + "%,0,0)",
									}
								: "translate" === r.positionUsing
									? {
											transform:
												"translate(" + a(e) + "%,0)",
										}
									: {
											"margin-left": a(e) + "%",
										}).transition = "all " + t + "ms " + n),
						o
					);
				}
				(n.configure = function (e) {
					var t, n;
					for (t in e)
						void 0 !== (n = e[t]) &&
							e.hasOwnProperty(t) &&
							(r[t] = n);
					return this;
				}),
					(n.status = null),
					(n.set = function (e) {
						var t = n.isStarted();
						(e = o(e, r.minimum, 1)),
							(n.status = 1 === e ? null : e);
						var a = n.render(!t),
							s = a.querySelector(r.barSelector),
							u = r.speed,
							d = r.easing;
						return (
							a.offsetWidth,
							c(function (t) {
								"" === r.positionUsing &&
									(r.positionUsing = n.getPositioningCSS()),
									l(s, i(e, u, d)),
									1 === e
										? (l(a, {
												transition: "none",
												opacity: 1,
											}),
											a.offsetWidth,
											setTimeout(function () {
												l(a, {
													transition:
														"all " +
														u +
														"ms linear",
													opacity: 0,
												}),
													setTimeout(function () {
														n.remove(), t();
													}, u);
											}, u))
										: setTimeout(t, u);
							}),
							this
						);
					}),
					(n.isStarted = function () {
						return "number" == typeof n.status;
					}),
					(n.start = function () {
						n.status || n.set(0);
						var e = function () {
							setTimeout(function () {
								n.status && (n.trickle(), e());
							}, r.trickleSpeed);
						};
						return r.trickle && e(), this;
					}),
					(n.done = function (e) {
						return e || n.status
							? n.inc(0.3 + 0.5 * Math.random()).set(1)
							: this;
					}),
					(n.inc = function (e) {
						var t = n.status;
						return t
							? ("number" != typeof e &&
									(e =
										(1 - t) *
										o(Math.random() * t, 0.1, 0.95)),
								(t = o(t + e, 0, 0.994)),
								n.set(t))
							: n.start();
					}),
					(n.trickle = function () {
						return n.inc(Math.random() * r.trickleRate);
					}),
					(e = 0),
					(t = 0),
					(n.promise = function (r) {
						return r && "resolved" !== r.state()
							? (0 === t && n.start(),
								e++,
								t++,
								r.always(function () {
									0 == --t
										? ((e = 0), n.done())
										: n.set((e - t) / e);
								}),
								this)
							: this;
					}),
					(n.render = function (e) {
						if (n.isRendered())
							return document.getElementById("nprogress");
						u(document.documentElement, "nprogress-busy");
						var t = document.createElement("div");
						(t.id = "nprogress"), (t.innerHTML = r.template);
						var o,
							i = t.querySelector(r.barSelector),
							c = e ? "-100" : a(n.status || 0),
							s = document.querySelector(r.parent);
						return (
							l(i, {
								transition: "all 0 linear",
								transform: "translate3d(" + c + "%,0,0)",
							}),
							r.showSpinner ||
								((o = t.querySelector(r.spinnerSelector)) &&
									p(o)),
							s != document.body &&
								u(s, "nprogress-custom-parent"),
							s.appendChild(t),
							t
						);
					}),
					(n.remove = function () {
						d(document.documentElement, "nprogress-busy"),
							d(
								document.querySelector(r.parent),
								"nprogress-custom-parent",
							);
						var e = document.getElementById("nprogress");
						e && p(e);
					}),
					(n.isRendered = function () {
						return !!document.getElementById("nprogress");
					}),
					(n.getPositioningCSS = function () {
						var e = document.body.style,
							t =
								"WebkitTransform" in e
									? "Webkit"
									: "MozTransform" in e
										? "Moz"
										: "msTransform" in e
											? "ms"
											: "OTransform" in e
												? "O"
												: "";
						return t + "Perspective" in e
							? "translate3d"
							: t + "Transform" in e
								? "translate"
								: "margin";
					});
				var c = (function () {
						var e = [];
						function t() {
							var n = e.shift();
							n && n(t);
						}
						return function (n) {
							e.push(n), 1 == e.length && t();
						};
					})(),
					l = (function () {
						var e = ["Webkit", "O", "Moz", "ms"],
							t = {};
						function n(e) {
							return e
								.replace(/^-ms-/, "ms-")
								.replace(/-([\da-z])/gi, function (e, t) {
									return t.toUpperCase();
								});
						}
						function r(t) {
							var n = document.body.style;
							if (t in n) return t;
							for (
								var r,
									o = e.length,
									a = t.charAt(0).toUpperCase() + t.slice(1);
								o--;

							)
								if ((r = e[o] + a) in n) return r;
							return t;
						}
						function o(e) {
							return (e = n(e)), t[e] || (t[e] = r(e));
						}
						function a(e, t, n) {
							(t = o(t)), (e.style[t] = n);
						}
						return function (e, t) {
							var n,
								r,
								o = arguments;
							if (2 == o.length)
								for (n in t)
									void 0 !== (r = t[n]) &&
										t.hasOwnProperty(n) &&
										a(e, n, r);
							else a(e, o[1], o[2]);
						};
					})();
				function s(e, t) {
					return (
						("string" == typeof e ? e : f(e)).indexOf(
							" " + t + " ",
						) >= 0
					);
				}
				function u(e, t) {
					var n = f(e),
						r = n + t;
					s(n, t) || (e.className = r.substring(1));
				}
				function d(e, t) {
					var n,
						r = f(e);
					s(e, t) &&
						((n = r.replace(" " + t + " ", " ")),
						(e.className = n.substring(1, n.length - 1)));
				}
				function f(e) {
					return (" " + (e.className || "") + " ").replace(
						/\s+/gi,
						" ",
					);
				}
				function p(e) {
					e && e.parentNode && e.parentNode.removeChild(e);
				}
				return n;
			}),
				void 0 ===
					(o = "function" == typeof r ? r.call(t, n, t, e) : r) ||
					(e.exports = o);
		},
		7418: (e) => {
			"use strict";
			var t = Object.getOwnPropertySymbols,
				n = Object.prototype.hasOwnProperty,
				r = Object.prototype.propertyIsEnumerable;
			function o(e) {
				if (null == e)
					throw new TypeError(
						"Object.assign cannot be called with null or undefined",
					);
				return Object(e);
			}
			e.exports = (function () {
				try {
					if (!Object.assign) return !1;
					var e = new String("abc");
					if (
						((e[5] = "de"),
						"5" === Object.getOwnPropertyNames(e)[0])
					)
						return !1;
					for (var t = {}, n = 0; n < 10; n++)
						t["_" + String.fromCharCode(n)] = n;
					if (
						"0123456789" !==
						Object.getOwnPropertyNames(t)
							.map(function (e) {
								return t[e];
							})
							.join("")
					)
						return !1;
					var r = {};
					return (
						"abcdefghijklmnopqrst".split("").forEach(function (e) {
							r[e] = e;
						}),
						"abcdefghijklmnopqrst" ===
							Object.keys(Object.assign({}, r)).join("")
					);
				} catch (o) {
					return !1;
				}
			})()
				? Object.assign
				: function (e, a) {
						for (
							var i, c, l = o(e), s = 1;
							s < arguments.length;
							s++
						) {
							for (var u in (i = Object(arguments[s])))
								n.call(i, u) && (l[u] = i[u]);
							if (t) {
								c = t(i);
								for (var d = 0; d < c.length; d++)
									r.call(i, c[d]) && (l[c[d]] = i[c[d]]);
							}
						}
						return l;
					};
		},
		7410: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => c });
			var r,
				o,
				a,
				i =
					((r = 0),
					(o = {
						util: {
							encode: function (e) {
								return e instanceof a
									? new a(
											e.type,
											o.util.encode(e.content),
											e.alias,
										)
									: "Array" === o.util.type(e)
										? e.map(o.util.encode)
										: e
												.replace(/&/g, "&amp;")
												.replace(/</g, "&lt;")
												.replace(/\u00a0/g, " ");
							},
							type: function (e) {
								return Object.prototype.toString
									.call(e)
									.match(/\[object (\w+)\]/)[1];
							},
							objId: function (e) {
								return (
									e.__id ||
										Object.defineProperty(e, "__id", {
											value: ++r,
										}),
									e.__id
								);
							},
							clone: function (e, t) {
								var n = o.util.type(e);
								switch (((t = t || {}), n)) {
									case "Object":
										if (t[o.util.objId(e)])
											return t[o.util.objId(e)];
										var r = {};
										for (var a in ((t[o.util.objId(e)] = r),
										e))
											e.hasOwnProperty(a) &&
												(r[a] = o.util.clone(e[a], t));
										return r;
									case "Array":
										return t[o.util.objId(e)]
											? t[o.util.objId(e)]
											: ((r = []),
												(t[o.util.objId(e)] = r),
												e.forEach(function (e, n) {
													r[n] = o.util.clone(e, t);
												}),
												r);
								}
								return e;
							},
						},
						languages: {
							extend: function (e, t) {
								var n = o.util.clone(o.languages[e]);
								for (var r in t) n[r] = t[r];
								return n;
							},
							insertBefore: function (e, t, n, r) {
								var a = (r = r || o.languages)[e];
								if (2 == arguments.length) {
									for (var i in (n = arguments[1]))
										n.hasOwnProperty(i) && (a[i] = n[i]);
									return a;
								}
								var c = {};
								for (var l in a)
									if (a.hasOwnProperty(l)) {
										if (l == t)
											for (var i in n)
												n.hasOwnProperty(i) &&
													(c[i] = n[i]);
										c[l] = a[l];
									}
								return (
									o.languages.DFS(
										o.languages,
										function (t, n) {
											n === r[e] &&
												t != e &&
												(this[t] = c);
										},
									),
									(r[e] = c)
								);
							},
							DFS: function (e, t, n, r) {
								for (var a in ((r = r || {}), e))
									e.hasOwnProperty(a) &&
										(t.call(e, a, e[a], n || a),
										"Object" !== o.util.type(e[a]) ||
										r[o.util.objId(e[a])]
											? "Array" !== o.util.type(e[a]) ||
												r[o.util.objId(e[a])] ||
												((r[o.util.objId(e[a])] = !0),
												o.languages.DFS(e[a], t, a, r))
											: ((r[o.util.objId(e[a])] = !0),
												o.languages.DFS(
													e[a],
													t,
													null,
													r,
												)));
							},
						},
						plugins: {},
						highlight: function (e, t, n) {
							var r = { code: e, grammar: t, language: n };
							return (
								o.hooks.run("before-tokenize", r),
								(r.tokens = o.tokenize(r.code, r.grammar)),
								o.hooks.run("after-tokenize", r),
								a.stringify(o.util.encode(r.tokens), r.language)
							);
						},
						matchGrammar: function (e, t, n, r, a, i, c) {
							var l = o.Token;
							for (var s in n)
								if (n.hasOwnProperty(s) && n[s]) {
									if (s == c) return;
									var u = n[s];
									u = "Array" === o.util.type(u) ? u : [u];
									for (var d = 0; d < u.length; ++d) {
										var f = u[d],
											p = f.inside,
											b = !!f.lookbehind,
											m = !!f.greedy,
											g = 0,
											h = f.alias;
										if (m && !f.pattern.global) {
											var w = f.pattern
												.toString()
												.match(/[imuy]*$/)[0];
											f.pattern = RegExp(
												f.pattern.source,
												w + "g",
											);
										}
										f = f.pattern || f;
										for (
											var v = r, y = a;
											v < t.length;
											y += t[v].length, ++v
										) {
											var k = t[v];
											if (t.length > e.length) return;
											if (!(k instanceof l)) {
												if (m && v != t.length - 1) {
													if (
														((f.lastIndex = y),
														!(P = f.exec(e)))
													)
														break;
													for (
														var x =
																P.index +
																(b
																	? P[1]
																			.length
																	: 0),
															E =
																P.index +
																P[0].length,
															S = v,
															T = y,
															C = t.length;
														S < C &&
														(T < E ||
															(!t[S].type &&
																!t[S - 1]
																	.greedy));
														++S
													)
														x >=
															(T +=
																t[S].length) &&
															(++v, (y = T));
													if (t[v] instanceof l)
														continue;
													(A = S - v),
														(k = e.slice(y, T)),
														(P.index -= y);
												} else {
													f.lastIndex = 0;
													var P = f.exec(k),
														A = 1;
												}
												if (P) {
													b &&
														(g = P[1]
															? P[1].length
															: 0),
														(E =
															(x = P.index + g) +
															(P = P[0].slice(g))
																.length);
													var O = k.slice(0, x),
														_ = k.slice(E),
														R = [v, A];
													O &&
														(++v,
														(y += O.length),
														R.push(O));
													var N = new l(
														s,
														p
															? o.tokenize(P, p)
															: P,
														h,
														P,
														m,
													);
													if (
														(R.push(N),
														_ && R.push(_),
														Array.prototype.splice.apply(
															t,
															R,
														),
														1 != A &&
															o.matchGrammar(
																e,
																t,
																n,
																v,
																y,
																!0,
																s,
															),
														i)
													)
														break;
												} else if (i) break;
											}
										}
									}
								}
						},
						hooks: { add: function () {}, run: function (e, t) {} },
						tokenize: function (e, t, n) {
							var r = [e],
								a = t.rest;
							if (a) {
								for (var i in a) t[i] = a[i];
								delete t.rest;
							}
							return o.matchGrammar(e, r, t, 0, 0, !1), r;
						},
					}),
					((a = o.Token =
						function (e, t, n, r, o) {
							(this.type = e),
								(this.content = t),
								(this.alias = n),
								(this.length = 0 | (r || "").length),
								(this.greedy = !!o);
						}).stringify = function (e, t, n) {
						if ("string" == typeof e) return e;
						if ("Array" === o.util.type(e))
							return e
								.map(function (n) {
									return a.stringify(n, t, e);
								})
								.join("");
						var r = {
							type: e.type,
							content: a.stringify(e.content, t, n),
							tag: "span",
							classes: ["token", e.type],
							attributes: {},
							language: t,
							parent: n,
						};
						if (e.alias) {
							var i =
								"Array" === o.util.type(e.alias)
									? e.alias
									: [e.alias];
							Array.prototype.push.apply(r.classes, i);
						}
						var c = Object.keys(r.attributes)
							.map(function (e) {
								return (
									e +
									'="' +
									(r.attributes[e] || "").replace(
										/"/g,
										"&quot;",
									) +
									'"'
								);
							})
							.join(" ");
						return (
							"<" +
							r.tag +
							' class="' +
							r.classes.join(" ") +
							'"' +
							(c ? " " + c : "") +
							">" +
							r.content +
							"</" +
							r.tag +
							">"
						);
					}),
					o);
			(i.languages.markup = {
				comment: /<!--[\s\S]*?-->/,
				prolog: /<\?[\s\S]+?\?>/,
				doctype: {
					pattern:
						/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
					greedy: !0,
					inside: {
						"internal-subset": {
							pattern: /(\[)[\s\S]+(?=\]>$)/,
							lookbehind: !0,
							greedy: !0,
							inside: null,
						},
						string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
						punctuation: /^<!|>$|[[\]]/,
						"doctype-tag": /^DOCTYPE/,
						name: /[^\s<>'"]+/,
					},
				},
				cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
				tag: {
					pattern:
						/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
					greedy: !0,
					inside: {
						tag: {
							pattern: /^<\/?[^\s>\/]+/,
							inside: {
								punctuation: /^<\/?/,
								namespace: /^[^\s>\/:]+:/,
							},
						},
						"attr-value": {
							pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
							inside: {
								punctuation: [
									{ pattern: /^=/, alias: "attr-equals" },
									/"|'/,
								],
							},
						},
						punctuation: /\/?>/,
						"attr-name": {
							pattern: /[^\s>\/]+/,
							inside: { namespace: /^[^\s>\/:]+:/ },
						},
					},
				},
				entity: [
					{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
					/&#x?[\da-f]{1,8};/i,
				],
			}),
				(i.languages.markup.tag.inside["attr-value"].inside.entity =
					i.languages.markup.entity),
				(i.languages.markup.doctype.inside["internal-subset"].inside =
					i.languages.markup),
				i.hooks.add("wrap", function (e) {
					"entity" === e.type &&
						(e.attributes.title = e.content.replace(/&amp;/, "&"));
				}),
				Object.defineProperty(i.languages.markup.tag, "addInlined", {
					value: function (e, t) {
						var n = {};
						(n["language-" + t] = {
							pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
							lookbehind: !0,
							inside: i.languages[t],
						}),
							(n.cdata = /^<!\[CDATA\[|\]\]>$/i);
						var r = {
							"included-cdata": {
								pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
								inside: n,
							},
						};
						r["language-" + t] = {
							pattern: /[\s\S]+/,
							inside: i.languages[t],
						};
						var o = {};
						(o[e] = {
							pattern: RegExp(
								/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
									/__/g,
									function () {
										return e;
									},
								),
								"i",
							),
							lookbehind: !0,
							greedy: !0,
							inside: r,
						}),
							i.languages.insertBefore("markup", "cdata", o);
					},
				}),
				(i.languages.html = i.languages.markup),
				(i.languages.mathml = i.languages.markup),
				(i.languages.svg = i.languages.markup),
				(i.languages.xml = i.languages.extend("markup", {})),
				(i.languages.ssml = i.languages.xml),
				(i.languages.atom = i.languages.xml),
				(i.languages.rss = i.languages.xml),
				(function (e) {
					var t =
							"\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
						n = {
							pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
							lookbehind: !0,
							alias: "punctuation",
							inside: null,
						},
						r = {
							bash: n,
							environment: {
								pattern: RegExp("\\$" + t),
								alias: "constant",
							},
							variable: [
								{
									pattern: /\$?\(\([\s\S]+?\)\)/,
									greedy: !0,
									inside: {
										variable: [
											{
												pattern: /(^\$\(\([\s\S]+)\)\)/,
												lookbehind: !0,
											},
											/^\$\(\(/,
										],
										number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
										operator:
											/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
										punctuation: /\(\(?|\)\)?|,|;/,
									},
								},
								{
									pattern:
										/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
									greedy: !0,
									inside: { variable: /^\$\(|^`|\)$|`$/ },
								},
								{
									pattern: /\$\{[^}]+\}/,
									greedy: !0,
									inside: {
										operator:
											/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
										punctuation: /[\[\]]/,
										environment: {
											pattern: RegExp("(\\{)" + t),
											lookbehind: !0,
											alias: "constant",
										},
									},
								},
								/\$(?:\w+|[#?*!@$])/,
							],
							entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
						};
					(e.languages.bash = {
						shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
						comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
						"function-name": [
							{
								pattern:
									/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
								lookbehind: !0,
								alias: "function",
							},
							{
								pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
								alias: "function",
							},
						],
						"for-or-select": {
							pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
							alias: "variable",
							lookbehind: !0,
						},
						"assign-left": {
							pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
							inside: {
								environment: {
									pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
									lookbehind: !0,
									alias: "constant",
								},
							},
							alias: "variable",
							lookbehind: !0,
						},
						string: [
							{
								pattern:
									/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
								lookbehind: !0,
								greedy: !0,
								inside: r,
							},
							{
								pattern:
									/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
								lookbehind: !0,
								greedy: !0,
								inside: { bash: n },
							},
							{
								pattern:
									/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
								lookbehind: !0,
								greedy: !0,
								inside: r,
							},
						],
						environment: {
							pattern: RegExp("\\$?" + t),
							alias: "constant",
						},
						variable: r.variable,
						function: {
							pattern:
								/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
							lookbehind: !0,
						},
						keyword: {
							pattern:
								/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
							lookbehind: !0,
						},
						builtin: {
							pattern:
								/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
							lookbehind: !0,
							alias: "class-name",
						},
						boolean: {
							pattern:
								/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
							lookbehind: !0,
						},
						"file-descriptor": {
							pattern: /\B&\d\b/,
							alias: "important",
						},
						operator: {
							pattern:
								/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
							inside: {
								"file-descriptor": {
									pattern: /^\d/,
									alias: "important",
								},
							},
						},
						punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
						number: {
							pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
							lookbehind: !0,
						},
					}),
						(n.inside = e.languages.bash);
					for (
						var o = [
								"comment",
								"function-name",
								"for-or-select",
								"assign-left",
								"string",
								"environment",
								"function",
								"keyword",
								"builtin",
								"boolean",
								"file-descriptor",
								"operator",
								"punctuation",
								"number",
							],
							a = r.variable[1].inside,
							i = 0;
						i < o.length;
						i++
					)
						a[o[i]] = e.languages.bash[o[i]];
					e.languages.shell = e.languages.bash;
				})(i),
				(i.languages.clike = {
					comment: [
						{
							pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
							lookbehind: !0,
							greedy: !0,
						},
						{
							pattern: /(^|[^\\:])\/\/.*/,
							lookbehind: !0,
							greedy: !0,
						},
					],
					string: {
						pattern:
							/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
						greedy: !0,
					},
					"class-name": {
						pattern:
							/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
						lookbehind: !0,
						inside: { punctuation: /[.\\]/ },
					},
					keyword:
						/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
					boolean: /\b(?:true|false)\b/,
					function: /\w+(?=\()/,
					number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
					operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
					punctuation: /[{}[\];(),.:]/,
				}),
				(i.languages.c = i.languages.extend("clike", {
					comment: {
						pattern:
							/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
						greedy: !0,
					},
					"class-name": {
						pattern:
							/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
						lookbehind: !0,
					},
					keyword:
						/\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
					function: /[a-z_]\w*(?=\s*\()/i,
					number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
					operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
				})),
				i.languages.insertBefore("c", "string", {
					macro: {
						pattern:
							/(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
						lookbehind: !0,
						greedy: !0,
						alias: "property",
						inside: {
							string: [
								{
									pattern: /^(#\s*include\s*)<[^>]+>/,
									lookbehind: !0,
								},
								i.languages.c.string,
							],
							comment: i.languages.c.comment,
							"macro-name": [
								{
									pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
									lookbehind: !0,
								},
								{
									pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
									lookbehind: !0,
									alias: "function",
								},
							],
							directive: {
								pattern: /^(#\s*)[a-z]+/,
								lookbehind: !0,
								alias: "keyword",
							},
							"directive-hash": /^#/,
							punctuation: /##|\\(?=[\r\n])/,
							expression: {
								pattern: /\S[\s\S]*/,
								inside: i.languages.c,
							},
						},
					},
					constant:
						/\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
				}),
				delete i.languages.c.boolean,
				(function (e) {
					var t =
						/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
					(e.languages.cpp = e.languages.extend("c", {
						"class-name": [
							{
								pattern: RegExp(
									/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
										/<keyword>/g,
										function () {
											return t.source;
										},
									),
								),
								lookbehind: !0,
							},
							/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
							/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
							/\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
						],
						keyword: t,
						number: {
							pattern:
								/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
							greedy: !0,
						},
						operator:
							/>>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
						boolean: /\b(?:true|false)\b/,
					})),
						e.languages.insertBefore("cpp", "string", {
							"raw-string": {
								pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
								alias: "string",
								greedy: !0,
							},
						}),
						e.languages.insertBefore("cpp", "class-name", {
							"base-clause": {
								pattern:
									/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
								lookbehind: !0,
								greedy: !0,
								inside: e.languages.extend("cpp", {}),
							},
						}),
						e.languages.insertBefore(
							"inside",
							"operator",
							{ "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
							e.languages.cpp["base-clause"],
						);
				})(i),
				(function (e) {
					var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
					(e.languages.css = {
						comment: /\/\*[\s\S]*?\*\//,
						atrule: {
							pattern:
								/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
							inside: {
								rule: /^@[\w-]+/,
								"selector-function-argument": {
									pattern:
										/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
									lookbehind: !0,
									alias: "selector",
								},
								keyword: {
									pattern:
										/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
									lookbehind: !0,
								},
							},
						},
						url: {
							pattern: RegExp(
								"\\burl\\((?:" +
									t.source +
									"|" +
									/(?:[^\\\r\n()"']|\\[\s\S])*/.source +
									")\\)",
								"i",
							),
							greedy: !0,
							inside: {
								function: /^url/i,
								punctuation: /^\(|\)$/,
								string: {
									pattern: RegExp("^" + t.source + "$"),
									alias: "url",
								},
							},
						},
						selector: RegExp(
							"[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
								t.source +
								")*(?=\\s*\\{)",
						),
						string: { pattern: t, greedy: !0 },
						property:
							/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
						important: /!important\b/i,
						function: /[-a-z0-9]+(?=\()/i,
						punctuation: /[(){};:,]/,
					}),
						(e.languages.css.atrule.inside.rest = e.languages.css);
					var n = e.languages.markup;
					n &&
						(n.tag.addInlined("style", "css"),
						e.languages.insertBefore(
							"inside",
							"attr-value",
							{
								"style-attr": {
									pattern:
										/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
									lookbehind: !0,
									inside: {
										"attr-value": {
											pattern:
												/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
											inside: {
												style: {
													pattern:
														/(["'])[\s\S]+(?=["']$)/,
													lookbehind: !0,
													alias: "language-css",
													inside: e.languages.css,
												},
												punctuation: [
													{
														pattern: /^=/,
														alias: "attr-equals",
													},
													/"|'/,
												],
											},
										},
										"attr-name": /^style/i,
									},
								},
							},
							n.tag,
						));
				})(i),
				(function (e) {
					var t,
						n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
					(e.languages.css.selector = {
						pattern: e.languages.css.selector,
						inside: (t = {
							"pseudo-element":
								/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
							"pseudo-class": /:[-\w]+/,
							class: /\.[-\w]+/,
							id: /#[-\w]+/,
							attribute: {
								pattern: RegExp(
									"\\[(?:[^[\\]\"']|" + n.source + ")*\\]",
								),
								greedy: !0,
								inside: {
									punctuation: /^\[|\]$/,
									"case-sensitivity": {
										pattern: /(\s)[si]$/i,
										lookbehind: !0,
										alias: "keyword",
									},
									namespace: {
										pattern:
											/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
										lookbehind: !0,
										inside: { punctuation: /\|$/ },
									},
									"attr-name": {
										pattern:
											/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
										lookbehind: !0,
									},
									"attr-value": [
										n,
										{
											pattern:
												/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
											lookbehind: !0,
										},
									],
									operator: /[|~*^$]?=/,
								},
							},
							"n-th": [
								{
									pattern:
										/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
									lookbehind: !0,
									inside: {
										number: /[\dn]+/,
										operator: /[+-]/,
									},
								},
								{
									pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
									lookbehind: !0,
								},
							],
							combinator: />|\+|~|\|\|/,
							punctuation: /[(),]/,
						}),
					}),
						(e.languages.css.atrule.inside[
							"selector-function-argument"
						].inside = t),
						e.languages.insertBefore("css", "property", {
							variable: {
								pattern:
									/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
								lookbehind: !0,
							},
						});
					var r = {
							pattern: /(\b\d+)(?:%|[a-z]+\b)/,
							lookbehind: !0,
						},
						o = {
							pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
							lookbehind: !0,
						};
					e.languages.insertBefore("css", "function", {
						operator: {
							pattern: /(\s)[+\-*\/](?=\s)/,
							lookbehind: !0,
						},
						hexcode: {
							pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
							alias: "color",
						},
						color: [
							/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
							{
								pattern:
									/\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
								inside: {
									unit: r,
									number: o,
									function: /[\w-]+(?=\()/,
									punctuation: /[(),]/,
								},
							},
						],
						entity: /\\[\da-f]{1,8}/i,
						unit: r,
						number: o,
					});
				})(i),
				(i.languages.javascript = i.languages.extend("clike", {
					"class-name": [
						i.languages.clike["class-name"],
						{
							pattern:
								/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
							lookbehind: !0,
						},
					],
					keyword: [
						{
							pattern: /((?:^|})\s*)(?:catch|finally)\b/,
							lookbehind: !0,
						},
						{
							pattern:
								/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
							lookbehind: !0,
						},
					],
					function:
						/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
					number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
					operator:
						/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
				})),
				(i.languages.javascript["class-name"][0].pattern =
					/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
				i.languages.insertBefore("javascript", "keyword", {
					regex: {
						pattern:
							/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
						lookbehind: !0,
						greedy: !0,
						inside: {
							"regex-source": {
								pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
								lookbehind: !0,
								alias: "language-regex",
								inside: i.languages.regex,
							},
							"regex-flags": /[a-z]+$/,
							"regex-delimiter": /^\/|\/$/,
						},
					},
					"function-variable": {
						pattern:
							/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
						alias: "function",
					},
					parameter: [
						{
							pattern:
								/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
							lookbehind: !0,
							inside: i.languages.javascript,
						},
						{
							pattern:
								/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
							inside: i.languages.javascript,
						},
						{
							pattern:
								/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
							lookbehind: !0,
							inside: i.languages.javascript,
						},
						{
							pattern:
								/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
							lookbehind: !0,
							inside: i.languages.javascript,
						},
					],
					constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
				}),
				i.languages.insertBefore("javascript", "string", {
					"template-string": {
						pattern:
							/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
						greedy: !0,
						inside: {
							"template-punctuation": {
								pattern: /^`|`$/,
								alias: "string",
							},
							interpolation: {
								pattern:
									/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
								lookbehind: !0,
								inside: {
									"interpolation-punctuation": {
										pattern: /^\${|}$/,
										alias: "punctuation",
									},
									rest: i.languages.javascript,
								},
							},
							string: /[\s\S]+/,
						},
					},
				}),
				i.languages.markup &&
					i.languages.markup.tag.addInlined("script", "javascript"),
				(i.languages.js = i.languages.javascript),
				(function (e) {
					var t = e.util.clone(e.languages.javascript);
					(e.languages.jsx = e.languages.extend("markup", t)),
						(e.languages.jsx.tag.pattern =
							/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
						(e.languages.jsx.tag.inside.tag.pattern =
							/^<\/?[^\s>\/]*/i),
						(e.languages.jsx.tag.inside["attr-value"].pattern =
							/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
						(e.languages.jsx.tag.inside.tag.inside["class-name"] =
							/^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
						e.languages.insertBefore(
							"inside",
							"attr-name",
							{
								spread: {
									pattern:
										/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
									inside: {
										punctuation: /\.{3}|[{}.]/,
										"attr-value": /\w+/,
									},
								},
							},
							e.languages.jsx.tag,
						),
						e.languages.insertBefore(
							"inside",
							"attr-value",
							{
								script: {
									pattern:
										/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
									inside: {
										"script-punctuation": {
											pattern: /^=(?={)/,
											alias: "punctuation",
										},
										rest: e.languages.jsx,
									},
									alias: "language-javascript",
								},
							},
							e.languages.jsx.tag,
						);
					var n = function (e) {
							return e
								? "string" == typeof e
									? e
									: "string" == typeof e.content
										? e.content
										: e.content.map(n).join("")
								: "";
						},
						r = function (t) {
							for (var o = [], a = 0; a < t.length; a++) {
								var i = t[a],
									c = !1;
								if (
									("string" != typeof i &&
										("tag" === i.type &&
										i.content[0] &&
										"tag" === i.content[0].type
											? "</" ===
												i.content[0].content[0].content
												? o.length > 0 &&
													o[o.length - 1].tagName ===
														n(
															i.content[0]
																.content[1],
														) &&
													o.pop()
												: "/>" ===
														i.content[
															i.content.length - 1
														].content ||
													o.push({
														tagName: n(
															i.content[0]
																.content[1],
														),
														openedBraces: 0,
													})
											: o.length > 0 &&
												  "punctuation" === i.type &&
												  "{" === i.content
												? o[o.length - 1].openedBraces++
												: o.length > 0 &&
													  o[o.length - 1]
															.openedBraces > 0 &&
													  "punctuation" ===
															i.type &&
													  "}" === i.content
													? o[o.length - 1]
															.openedBraces--
													: (c = !0)),
									(c || "string" == typeof i) &&
										o.length > 0 &&
										0 === o[o.length - 1].openedBraces)
								) {
									var l = n(i);
									a < t.length - 1 &&
										("string" == typeof t[a + 1] ||
											"plain-text" === t[a + 1].type) &&
										((l += n(t[a + 1])),
										t.splice(a + 1, 1)),
										a > 0 &&
											("string" == typeof t[a - 1] ||
												"plain-text" ===
													t[a - 1].type) &&
											((l = n(t[a - 1]) + l),
											t.splice(a - 1, 1),
											a--),
										(t[a] = new e.Token(
											"plain-text",
											l,
											null,
											l,
										));
								}
								i.content &&
									"string" != typeof i.content &&
									r(i.content);
							}
						};
					e.hooks.add("after-tokenize", function (e) {
						("jsx" !== e.language && "tsx" !== e.language) ||
							r(e.tokens);
					});
				})(i),
				(function (e) {
					function t(e, t) {
						return RegExp(
							e.replace(/<ID>/g, function () {
								return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
									.source;
							}),
							t,
						);
					}
					e.languages.insertBefore(
						"javascript",
						"function-variable",
						{
							"method-variable": {
								pattern: RegExp(
									"(\\.\\s*)" +
										e.languages.javascript[
											"function-variable"
										].pattern.source,
								),
								lookbehind: !0,
								alias: [
									"function-variable",
									"method",
									"function",
									"property-access",
								],
							},
						},
					),
						e.languages.insertBefore("javascript", "function", {
							method: {
								pattern: RegExp(
									"(\\.\\s*)" +
										e.languages.javascript.function.source,
								),
								lookbehind: !0,
								alias: ["function", "property-access"],
							},
						}),
						e.languages.insertBefore("javascript", "constant", {
							"known-class-name": [
								{
									pattern:
										/\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
									alias: "class-name",
								},
								{
									pattern: /\b(?:[A-Z]\w*)Error\b/,
									alias: "class-name",
								},
							],
						}),
						e.languages.insertBefore("javascript", "keyword", {
							imports: {
								pattern: t(
									/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
										.source,
								),
								lookbehind: !0,
								inside: e.languages.javascript,
							},
							exports: {
								pattern: t(
									/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
										.source,
								),
								lookbehind: !0,
								inside: e.languages.javascript,
							},
						}),
						e.languages.javascript.keyword.unshift(
							{
								pattern:
									/\b(?:as|default|export|from|import)\b/,
								alias: "module",
							},
							{
								pattern:
									/\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
								alias: "control-flow",
							},
							{ pattern: /\bnull\b/, alias: ["null", "nil"] },
							{ pattern: /\bundefined\b/, alias: "nil" },
						),
						e.languages.insertBefore("javascript", "operator", {
							spread: { pattern: /\.{3}/, alias: "operator" },
							arrow: { pattern: /=>/, alias: "operator" },
						}),
						e.languages.insertBefore("javascript", "punctuation", {
							"property-access": {
								pattern: t(/(\.\s*)#?<ID>/.source),
								lookbehind: !0,
							},
							"maybe-class-name": {
								pattern:
									/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
								lookbehind: !0,
							},
							dom: {
								pattern:
									/\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
								alias: "variable",
							},
							console: {
								pattern: /\bconsole(?=\s*\.)/,
								alias: "class-name",
							},
						});
					for (
						var n = [
								"function",
								"function-variable",
								"method",
								"method-variable",
								"property-access",
							],
							r = 0;
						r < n.length;
						r++
					) {
						var o = n[r],
							a = e.languages.javascript[o];
						"RegExp" === e.util.type(a) &&
							(a = e.languages.javascript[o] = { pattern: a });
						var i = a.inside || {};
						(a.inside = i),
							(i["maybe-class-name"] = /^[A-Z][\s\S]*/);
					}
				})(i),
				(function (e) {
					var t = /#(?!\{).+/,
						n = { pattern: /#\{[^}]+\}/, alias: "variable" };
					(e.languages.coffeescript = e.languages.extend(
						"javascript",
						{
							comment: t,
							string: [
								{
									pattern: /'(?:\\[\s\S]|[^\\'])*'/,
									greedy: !0,
								},
								{
									pattern: /"(?:\\[\s\S]|[^\\"])*"/,
									greedy: !0,
									inside: { interpolation: n },
								},
							],
							keyword:
								/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
							"class-member": {
								pattern: /@(?!\d)\w+/,
								alias: "variable",
							},
						},
					)),
						e.languages.insertBefore("coffeescript", "comment", {
							"multiline-comment": {
								pattern: /###[\s\S]+?###/,
								alias: "comment",
							},
							"block-regex": {
								pattern: /\/{3}[\s\S]*?\/{3}/,
								alias: "regex",
								inside: { comment: t, interpolation: n },
							},
						}),
						e.languages.insertBefore("coffeescript", "string", {
							"inline-javascript": {
								pattern: /`(?:\\[\s\S]|[^\\`])*`/,
								inside: {
									delimiter: {
										pattern: /^`|`$/,
										alias: "punctuation",
									},
									script: {
										pattern: /[\s\S]+/,
										alias: "language-javascript",
										inside: e.languages.javascript,
									},
								},
							},
							"multiline-string": [
								{
									pattern: /'''[\s\S]*?'''/,
									greedy: !0,
									alias: "string",
								},
								{
									pattern: /"""[\s\S]*?"""/,
									greedy: !0,
									alias: "string",
									inside: { interpolation: n },
								},
							],
						}),
						e.languages.insertBefore("coffeescript", "keyword", {
							property: /(?!\d)\w+(?=\s*:(?!:))/,
						}),
						delete e.languages.coffeescript["template-string"],
						(e.languages.coffee = e.languages.coffeescript);
				})(i),
				(function (e) {
					e.languages.diff = {
						coord: [
							/^(?:\*{3}|-{3}|\+{3}).*$/m,
							/^@@.*@@$/m,
							/^\d.*$/m,
						],
					};
					var t = {
						"deleted-sign": "-",
						"deleted-arrow": "<",
						"inserted-sign": "+",
						"inserted-arrow": ">",
						unchanged: " ",
						diff: "!",
					};
					Object.keys(t).forEach(function (n) {
						var r = t[n],
							o = [];
						/^\w+$/.test(n) || o.push(/\w+/.exec(n)[0]),
							"diff" === n && o.push("bold"),
							(e.languages.diff[n] = {
								pattern: RegExp(
									"^(?:[" +
										r +
										"].*(?:\r\n?|\n|(?![\\s\\S])))+",
									"m",
								),
								alias: o,
								inside: {
									line: {
										pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
										lookbehind: !0,
									},
									prefix: {
										pattern: /[\s\S]/,
										alias: /\w+/.exec(n)[0],
									},
								},
							});
					}),
						Object.defineProperty(e.languages.diff, "PREFIXES", {
							value: t,
						});
				})(i),
				(i.languages.git = {
					comment: /^#.*/m,
					deleted: /^[-\u2013].*/m,
					inserted: /^\+.*/m,
					string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
					command: {
						pattern: /^.*\$ git .*$/m,
						inside: { parameter: /\s--?\w+/m },
					},
					coord: /^@@.*@@$/m,
					"commit-sha1": /^commit \w{40}$/m,
				}),
				(i.languages.go = i.languages.extend("clike", {
					string: {
						pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
						greedy: !0,
					},
					keyword:
						/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
					boolean: /\b(?:_|iota|nil|true|false)\b/,
					number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
					operator:
						/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
					builtin:
						/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
				})),
				delete i.languages.go["class-name"],
				(i.languages.graphql = {
					comment: /#.*/,
					description: {
						pattern:
							/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
						greedy: !0,
						alias: "string",
						inside: {
							"language-markdown": {
								pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
								lookbehind: !0,
								inside: i.languages.markdown,
							},
						},
					},
					string: {
						pattern:
							/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
						greedy: !0,
					},
					number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
					boolean: /\b(?:true|false)\b/,
					variable: /\$[a-z_]\w*/i,
					directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
					"attr-name": {
						pattern:
							/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
						greedy: !0,
					},
					"class-name": {
						pattern:
							/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
						lookbehind: !0,
					},
					fragment: {
						pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
						lookbehind: !0,
						alias: "function",
					},
					keyword:
						/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
					operator: /[!=|&]|\.{3}/,
					punctuation: /[!(){}\[\]:=,]/,
					constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
				}),
				(function (e) {
					function t(e, t) {
						return "___" + e.toUpperCase() + t + "___";
					}
					Object.defineProperties(
						(e.languages["markup-templating"] = {}),
						{
							buildPlaceholders: {
								value: function (n, r, o, a) {
									if (n.language === r) {
										var i = (n.tokenStack = []);
										(n.code = n.code.replace(
											o,
											function (e) {
												if (
													"function" == typeof a &&
													!a(e)
												)
													return e;
												for (
													var o, c = i.length;
													-1 !==
													n.code.indexOf(
														(o = t(r, c)),
													);

												)
													++c;
												return (i[c] = e), o;
											},
										)),
											(n.grammar = e.languages.markup);
									}
								},
							},
							tokenizePlaceholders: {
								value: function (n, r) {
									if (n.language === r && n.tokenStack) {
										n.grammar = e.languages[r];
										var o = 0,
											a = Object.keys(n.tokenStack);
										!(function i(c) {
											for (
												var l = 0;
												l < c.length &&
												!(o >= a.length);
												l++
											) {
												var s = c[l];
												if (
													"string" == typeof s ||
													(s.content &&
														"string" ==
															typeof s.content)
												) {
													var u = a[o],
														d = n.tokenStack[u],
														f =
															"string" == typeof s
																? s
																: s.content,
														p = t(r, u),
														b = f.indexOf(p);
													if (b > -1) {
														++o;
														var m = f.substring(
																0,
																b,
															),
															g = new e.Token(
																r,
																e.tokenize(
																	d,
																	n.grammar,
																),
																"language-" + r,
																d,
															),
															h = f.substring(
																b + p.length,
															),
															w = [];
														m &&
															w.push.apply(
																w,
																i([m]),
															),
															w.push(g),
															h &&
																w.push.apply(
																	w,
																	i([h]),
																),
															"string" == typeof s
																? c.splice.apply(
																		c,
																		[
																			l,
																			1,
																		].concat(
																			w,
																		),
																	)
																: (s.content =
																		w);
													}
												} else
													s.content && i(s.content);
											}
											return c;
										})(n.tokens);
									}
								},
							},
						},
					);
				})(i),
				(function (e) {
					(e.languages.handlebars = {
						comment: /\{\{![\s\S]*?\}\}/,
						delimiter: {
							pattern: /^\{\{\{?|\}\}\}?$/i,
							alias: "punctuation",
						},
						string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
						number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
						boolean: /\b(?:true|false)\b/,
						block: {
							pattern:
								/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
							lookbehind: !0,
							alias: "keyword",
						},
						brackets: {
							pattern: /\[[^\]]+\]/,
							inside: {
								punctuation: /\[|\]/,
								variable: /[\s\S]+/,
							},
						},
						punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
						variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
					}),
						e.hooks.add("before-tokenize", function (t) {
							e.languages["markup-templating"].buildPlaceholders(
								t,
								"handlebars",
								/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g,
							);
						}),
						e.hooks.add("after-tokenize", function (t) {
							e.languages[
								"markup-templating"
							].tokenizePlaceholders(t, "handlebars");
						});
				})(i),
				(i.languages.json = {
					property: {
						pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
						greedy: !0,
					},
					string: {
						pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
						greedy: !0,
					},
					comment: {
						pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
						greedy: !0,
					},
					number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
					punctuation: /[{}[\],]/,
					operator: /:/,
					boolean: /\b(?:true|false)\b/,
					null: { pattern: /\bnull\b/, alias: "keyword" },
				}),
				(i.languages.webmanifest = i.languages.json),
				(i.languages.less = i.languages.extend("css", {
					comment: [
						/\/\*[\s\S]*?\*\//,
						{ pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
					],
					atrule: {
						pattern:
							/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
						inside: { punctuation: /[:()]/ },
					},
					selector: {
						pattern:
							/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
						inside: { variable: /@+[\w-]+/ },
					},
					property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
					operator: /[+\-*\/]/,
				})),
				i.languages.insertBefore("less", "property", {
					variable: [
						{
							pattern: /@[\w-]+\s*:/,
							inside: { punctuation: /:/ },
						},
						/@@?[\w-]+/,
					],
					"mixin-usage": {
						pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
						lookbehind: !0,
						alias: "function",
					},
				}),
				(i.languages.makefile = {
					comment: {
						pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
						lookbehind: !0,
					},
					string: {
						pattern:
							/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
						greedy: !0,
					},
					builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
					symbol: {
						pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
						inside: {
							variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/,
						},
					},
					variable:
						/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
					keyword: [
						/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
						{
							pattern:
								/(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
							lookbehind: !0,
						},
					],
					operator: /(?:::|[?:+!])?=|[|@]/,
					punctuation: /[:;(){}]/,
				}),
				(function (e) {
					var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
					function n(e) {
						return (
							(e = e.replace(/<inner>/g, function () {
								return t;
							})),
							RegExp(
								/((?:^|[^\\])(?:\\{2})*)/.source +
									"(?:" +
									e +
									")",
							)
						);
					}
					var r =
							/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
								.source,
						o =
							/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
								/__/g,
								function () {
									return r;
								},
							),
						a =
							/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
								.source;
					(e.languages.markdown = e.languages.extend("markup", {})),
						e.languages.insertBefore("markdown", "prolog", {
							"front-matter-block": {
								pattern:
									/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
								lookbehind: !0,
								greedy: !0,
								inside: {
									punctuation: /^---|---$/,
									"font-matter": {
										pattern: /\S+(?:\s+\S+)*/,
										alias: ["yaml", "language-yaml"],
										inside: e.languages.yaml,
									},
								},
							},
							blockquote: {
								pattern: /^>(?:[\t ]*>)*/m,
								alias: "punctuation",
							},
							table: {
								pattern: RegExp(
									"^" + o + a + "(?:" + o + ")*",
									"m",
								),
								inside: {
									"table-data-rows": {
										pattern: RegExp(
											"^(" + o + a + ")(?:" + o + ")*$",
										),
										lookbehind: !0,
										inside: {
											"table-data": {
												pattern: RegExp(r),
												inside: e.languages.markdown,
											},
											punctuation: /\|/,
										},
									},
									"table-line": {
										pattern: RegExp(
											"^(" + o + ")" + a + "$",
										),
										lookbehind: !0,
										inside: { punctuation: /\||:?-{3,}:?/ },
									},
									"table-header-row": {
										pattern: RegExp("^" + o + "$"),
										inside: {
											"table-header": {
												pattern: RegExp(r),
												alias: "important",
												inside: e.languages.markdown,
											},
											punctuation: /\|/,
										},
									},
								},
							},
							code: [
								{
									pattern:
										/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
									lookbehind: !0,
									alias: "keyword",
								},
								{
									pattern: /``.+?``|`[^`\r\n]+`/,
									alias: "keyword",
								},
								{
									pattern: /^```[\s\S]*?^```$/m,
									greedy: !0,
									inside: {
										"code-block": {
											pattern:
												/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
											lookbehind: !0,
										},
										"code-language": {
											pattern: /^(```).+/,
											lookbehind: !0,
										},
										punctuation: /```/,
									},
								},
							],
							title: [
								{
									pattern:
										/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
									alias: "important",
									inside: { punctuation: /==+$|--+$/ },
								},
								{
									pattern: /(^\s*)#.+/m,
									lookbehind: !0,
									alias: "important",
									inside: { punctuation: /^#+|#+$/ },
								},
							],
							hr: {
								pattern:
									/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
								lookbehind: !0,
								alias: "punctuation",
							},
							list: {
								pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
								lookbehind: !0,
								alias: "punctuation",
							},
							"url-reference": {
								pattern:
									/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
								inside: {
									variable: {
										pattern: /^(!?\[)[^\]]+/,
										lookbehind: !0,
									},
									string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
									punctuation: /^[\[\]!:]|[<>]/,
								},
								alias: "url",
							},
							bold: {
								pattern: n(
									/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
										.source,
								),
								lookbehind: !0,
								greedy: !0,
								inside: {
									content: {
										pattern: /(^..)[\s\S]+(?=..$)/,
										lookbehind: !0,
										inside: {},
									},
									punctuation: /\*\*|__/,
								},
							},
							italic: {
								pattern: n(
									/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
										.source,
								),
								lookbehind: !0,
								greedy: !0,
								inside: {
									content: {
										pattern: /(^.)[\s\S]+(?=.$)/,
										lookbehind: !0,
										inside: {},
									},
									punctuation: /[*_]/,
								},
							},
							strike: {
								pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
								lookbehind: !0,
								greedy: !0,
								inside: {
									content: {
										pattern: /(^~~?)[\s\S]+(?=\1$)/,
										lookbehind: !0,
										inside: {},
									},
									punctuation: /~~?/,
								},
							},
							url: {
								pattern: n(
									/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
										.source,
								),
								lookbehind: !0,
								greedy: !0,
								inside: {
									operator: /^!/,
									content: {
										pattern: /(^\[)[^\]]+(?=\])/,
										lookbehind: !0,
										inside: {},
									},
									variable: {
										pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
										lookbehind: !0,
									},
									url: {
										pattern: /(^\]\()[^\s)]+/,
										lookbehind: !0,
									},
									string: {
										pattern:
											/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
										lookbehind: !0,
									},
								},
							},
						}),
						["url", "bold", "italic", "strike"].forEach(
							function (t) {
								["url", "bold", "italic", "strike"].forEach(
									function (n) {
										t !== n &&
											(e.languages.markdown[
												t
											].inside.content.inside[n] =
												e.languages.markdown[n]);
									},
								);
							},
						),
						e.hooks.add("after-tokenize", function (e) {
							("markdown" !== e.language &&
								"md" !== e.language) ||
								(function e(t) {
									if (t && "string" != typeof t)
										for (
											var n = 0, r = t.length;
											n < r;
											n++
										) {
											var o = t[n];
											if ("code" === o.type) {
												var a = o.content[1],
													i = o.content[3];
												if (
													a &&
													i &&
													"code-language" ===
														a.type &&
													"code-block" === i.type &&
													"string" == typeof a.content
												) {
													var c = a.content
															.replace(
																/\b#/g,
																"sharp",
															)
															.replace(
																/\b\+\+/g,
																"pp",
															),
														l =
															"language-" +
															(c =
																(/[a-z][\w-]*/i.exec(
																	c,
																) || [
																	"",
																])[0].toLowerCase());
													i.alias
														? "string" ==
															typeof i.alias
															? (i.alias = [
																	i.alias,
																	l,
																])
															: i.alias.push(l)
														: (i.alias = [l]);
												}
											} else e(o.content);
										}
								})(e.tokens);
						}),
						e.hooks.add("wrap", function (t) {
							if ("code-block" === t.type) {
								for (
									var n = "", r = 0, o = t.classes.length;
									r < o;
									r++
								) {
									var a = t.classes[r],
										i = /language-(.+)/.exec(a);
									if (i) {
										n = i[1];
										break;
									}
								}
								var c = e.languages[n];
								if (c) {
									var l = t.content
										.replace(/&lt;/g, "<")
										.replace(/&amp;/g, "&");
									t.content = e.highlight(l, c, n);
								} else if (
									n &&
									"none" !== n &&
									e.plugins.autoloader
								) {
									var s =
										"md-" +
										new Date().valueOf() +
										"-" +
										Math.floor(1e16 * Math.random());
									(t.attributes.id = s),
										e.plugins.autoloader.loadLanguages(
											n,
											function () {
												var t =
													document.getElementById(s);
												t &&
													(t.innerHTML = e.highlight(
														t.textContent,
														e.languages[n],
														n,
													));
											},
										);
								}
							}
						}),
						(e.languages.md = e.languages.markdown);
				})(i),
				(i.languages.objectivec = i.languages.extend("c", {
					string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
					keyword:
						/\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
					operator:
						/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
				})),
				delete i.languages.objectivec["class-name"],
				(i.languages.objc = i.languages.objectivec),
				(i.languages.ocaml = {
					comment: /\(\*[\s\S]*?\*\)/,
					string: [
						{ pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
						{
							pattern:
								/(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
							greedy: !0,
						},
					],
					number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
					directive: { pattern: /\B#\w+/, alias: "important" },
					label: { pattern: /\B~\w+/, alias: "function" },
					"type-variable": { pattern: /\B'\w+/, alias: "function" },
					variant: { pattern: /`\w+/, alias: "variable" },
					module: { pattern: /\b[A-Z]\w+/, alias: "variable" },
					keyword:
						/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
					boolean: /\b(?:false|true)\b/,
					operator:
						/:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
					punctuation: /[(){}\[\]|.,:;]|\b_\b/,
				}),
				(i.languages.python = {
					comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
					"string-interpolation": {
						pattern:
							/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
						greedy: !0,
						inside: {
							interpolation: {
								pattern:
									/((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
								lookbehind: !0,
								inside: {
									"format-spec": {
										pattern: /(:)[^:(){}]+(?=}$)/,
										lookbehind: !0,
									},
									"conversion-option": {
										pattern: /![sra](?=[:}]$)/,
										alias: "punctuation",
									},
									rest: null,
								},
							},
							string: /[\s\S]+/,
						},
					},
					"triple-quoted-string": {
						pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
						greedy: !0,
						alias: "string",
					},
					string: {
						pattern:
							/(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
						greedy: !0,
					},
					function: {
						pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
						lookbehind: !0,
					},
					"class-name": {
						pattern: /(\bclass\s+)\w+/i,
						lookbehind: !0,
					},
					decorator: {
						pattern: /(^\s*)@\w+(?:\.\w+)*/im,
						lookbehind: !0,
						alias: ["annotation", "punctuation"],
						inside: { punctuation: /\./ },
					},
					keyword:
						/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
					builtin:
						/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
					boolean: /\b(?:True|False|None)\b/,
					number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
					operator:
						/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
					punctuation: /[{}[\];(),.:]/,
				}),
				(i.languages.python[
					"string-interpolation"
				].inside.interpolation.inside.rest = i.languages.python),
				(i.languages.py = i.languages.python),
				(i.languages.reason = i.languages.extend("clike", {
					string: {
						pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
						greedy: !0,
					},
					"class-name": /\b[A-Z]\w*/,
					keyword:
						/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
					operator:
						/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
				})),
				i.languages.insertBefore("reason", "class-name", {
					character: {
						pattern:
							/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
						alias: "string",
					},
					constructor: {
						pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
						alias: "variable",
					},
					label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
				}),
				delete i.languages.reason.function,
				(function (e) {
					(e.languages.sass = e.languages.extend("css", {
						comment: {
							pattern:
								/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
							lookbehind: !0,
						},
					})),
						e.languages.insertBefore("sass", "atrule", {
							"atrule-line": {
								pattern: /^(?:[ \t]*)[@+=].+/m,
								inside: { atrule: /(?:@[\w-]+|[+=])/m },
							},
						}),
						delete e.languages.sass.atrule;
					var t = /\$[-\w]+|#\{\$[-\w]+\}/,
						n = [
							/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
							{ pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
						];
					e.languages.insertBefore("sass", "property", {
						"variable-line": {
							pattern: /^[ \t]*\$.+/m,
							inside: {
								punctuation: /:/,
								variable: t,
								operator: n,
							},
						},
						"property-line": {
							pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
							inside: {
								property: [
									/[^:\s]+(?=\s*:)/,
									{ pattern: /(:)[^:\s]+/, lookbehind: !0 },
								],
								punctuation: /:/,
								variable: t,
								operator: n,
								important: e.languages.sass.important,
							},
						},
					}),
						delete e.languages.sass.property,
						delete e.languages.sass.important,
						e.languages.insertBefore("sass", "punctuation", {
							selector: {
								pattern:
									/([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
								lookbehind: !0,
							},
						});
				})(i),
				(i.languages.scss = i.languages.extend("css", {
					comment: {
						pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
						lookbehind: !0,
					},
					atrule: {
						pattern:
							/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
						inside: { rule: /@[\w-]+/ },
					},
					url: /(?:[-a-z]+-)?url(?=\()/i,
					selector: {
						pattern:
							/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
						inside: {
							parent: { pattern: /&/, alias: "important" },
							placeholder: /%[-\w]+/,
							variable: /\$[-\w]+|#\{\$[-\w]+\}/,
						},
					},
					property: {
						pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
						inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
					},
				})),
				i.languages.insertBefore("scss", "atrule", {
					keyword: [
						/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
						{
							pattern: /( +)(?:from|through)(?= )/,
							lookbehind: !0,
						},
					],
				}),
				i.languages.insertBefore("scss", "important", {
					variable: /\$[-\w]+|#\{\$[-\w]+\}/,
				}),
				i.languages.insertBefore("scss", "function", {
					"module-modifier": {
						pattern: /\b(?:as|with|show|hide)\b/i,
						alias: "keyword",
					},
					placeholder: { pattern: /%[-\w]+/, alias: "selector" },
					statement: {
						pattern: /\B!(?:default|optional)\b/i,
						alias: "keyword",
					},
					boolean: /\b(?:true|false)\b/,
					null: { pattern: /\bnull\b/, alias: "keyword" },
					operator: {
						pattern:
							/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
						lookbehind: !0,
					},
				}),
				(i.languages.scss.atrule.inside.rest = i.languages.scss),
				(i.languages.sql = {
					comment: {
						pattern:
							/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
						lookbehind: !0,
					},
					variable: [
						{
							pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
							greedy: !0,
						},
						/@[\w.$]+/,
					],
					string: {
						pattern:
							/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
						greedy: !0,
						lookbehind: !0,
					},
					function:
						/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
					keyword:
						/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
					boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
					number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
					operator:
						/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
					punctuation: /[;[\]()`,.]/,
				}),
				(function (e) {
					var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
						n = {
							pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
							lookbehind: !0,
						},
						r = {
							comment: {
								pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
								lookbehind: !0,
							},
							url: {
								pattern: /url\((["']?).*?\1\)/i,
								greedy: !0,
							},
							string: {
								pattern:
									/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
								greedy: !0,
							},
							interpolation: null,
							func: null,
							important: /\B!(?:important|optional)\b/i,
							keyword: {
								pattern:
									/(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
								lookbehind: !0,
							},
							hexcode: /#[\da-f]{3,6}/i,
							color: [
								/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
								{
									pattern:
										/\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
									inside: {
										unit: t,
										number: n,
										function: /[\w-]+(?=\()/,
										punctuation: /[(),]/,
									},
								},
							],
							entity: /\\[\da-f]{1,8}/i,
							unit: t,
							boolean: /\b(?:true|false)\b/,
							operator: [
								/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
							],
							number: n,
							punctuation: /[{}()\[\];:,]/,
						};
					(r.interpolation = {
						pattern: /\{[^\r\n}:]+\}/,
						alias: "variable",
						inside: {
							delimiter: {
								pattern: /^{|}$/,
								alias: "punctuation",
							},
							rest: r,
						},
					}),
						(r.func = {
							pattern: /[\w-]+\([^)]*\).*/,
							inside: { function: /^[^(]+/, rest: r },
						}),
						(e.languages.stylus = {
							"atrule-declaration": {
								pattern: /(^\s*)@.+/m,
								lookbehind: !0,
								inside: { atrule: /^@[\w-]+/, rest: r },
							},
							"variable-declaration": {
								pattern:
									/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
								lookbehind: !0,
								inside: { variable: /^\S+/, rest: r },
							},
							statement: {
								pattern:
									/(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
								lookbehind: !0,
								inside: { keyword: /^\S+/, rest: r },
							},
							"property-declaration": {
								pattern:
									/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
								lookbehind: !0,
								inside: {
									property: {
										pattern: /^[^\s:]+/,
										inside: {
											interpolation: r.interpolation,
										},
									},
									rest: r,
								},
							},
							selector: {
								pattern:
									/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
								lookbehind: !0,
								inside: {
									interpolation: r.interpolation,
									comment: r.comment,
									punctuation: /[{},]/,
								},
							},
							func: r.func,
							string: r.string,
							comment: {
								pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
								lookbehind: !0,
								greedy: !0,
							},
							interpolation: r.interpolation,
							punctuation: /[{}()\[\];:.]/,
						});
				})(i),
				(function (e) {
					(e.languages.typescript = e.languages.extend("javascript", {
						"class-name": {
							pattern:
								/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
							lookbehind: !0,
							greedy: !0,
							inside: null,
						},
						keyword:
							/\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
						builtin:
							/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
					})),
						delete e.languages.typescript.parameter;
					var t = e.languages.extend("typescript", {});
					delete t["class-name"],
						(e.languages.typescript["class-name"].inside = t),
						e.languages.insertBefore("typescript", "function", {
							"generic-function": {
								pattern:
									/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
								greedy: !0,
								inside: {
									function:
										/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
									generic: {
										pattern: /<[\s\S]+/,
										alias: "class-name",
										inside: t,
									},
								},
							},
						}),
						(e.languages.ts = e.languages.typescript);
				})(i),
				(function (e) {
					var t = e.util.clone(e.languages.typescript);
					e.languages.tsx = e.languages.extend("jsx", t);
					var n = e.languages.tsx.tag;
					(n.pattern = RegExp(
						/(^|[^\w$]|(?=<\/))/.source +
							"(?:" +
							n.pattern.source +
							")",
						n.pattern.flags,
					)),
						(n.lookbehind = !0);
				})(i),
				(i.languages.wasm = {
					comment: [
						/\(;[\s\S]*?;\)/,
						{ pattern: /;;.*/, greedy: !0 },
					],
					string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
					keyword: [
						{
							pattern: /\b(?:align|offset)=/,
							inside: { operator: /=/ },
						},
						{
							pattern:
								/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
							inside: { punctuation: /\./ },
						},
						/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
					],
					variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
					number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
					punctuation: /[()]/,
				}),
				(function (e) {
					var t = /[*&][^\s[\]{},]+/,
						n =
							/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
						r =
							"(?:" +
							n.source +
							"(?:[ \t]+" +
							t.source +
							")?|" +
							t.source +
							"(?:[ \t]+" +
							n.source +
							")?)",
						o =
							/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
								/<PLAIN>/g,
								function () {
									return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
										.source;
								},
							),
						a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/
							.source;
					function i(e, t) {
						t = (t || "").replace(/m/g, "") + "m";
						var n =
							/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
								.replace(/<<prop>>/g, function () {
									return r;
								})
								.replace(/<<value>>/g, function () {
									return e;
								});
						return RegExp(n, t);
					}
					(e.languages.yaml = {
						scalar: {
							pattern: RegExp(
								/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
									/<<prop>>/g,
									function () {
										return r;
									},
								),
							),
							lookbehind: !0,
							alias: "string",
						},
						comment: /#.*/,
						key: {
							pattern: RegExp(
								/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
									.replace(/<<prop>>/g, function () {
										return r;
									})
									.replace(/<<key>>/g, function () {
										return "(?:" + o + "|" + a + ")";
									}),
							),
							lookbehind: !0,
							greedy: !0,
							alias: "atrule",
						},
						directive: {
							pattern: /(^[ \t]*)%.+/m,
							lookbehind: !0,
							alias: "important",
						},
						datetime: {
							pattern: i(
								/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
									.source,
							),
							lookbehind: !0,
							alias: "number",
						},
						boolean: {
							pattern: i(/true|false/.source, "i"),
							lookbehind: !0,
							alias: "important",
						},
						null: {
							pattern: i(/null|~/.source, "i"),
							lookbehind: !0,
							alias: "important",
						},
						string: { pattern: i(a), lookbehind: !0, greedy: !0 },
						number: {
							pattern: i(
								/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
									.source,
								"i",
							),
							lookbehind: !0,
						},
						tag: n,
						important: t,
						punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
					}),
						(e.languages.yml = e.languages.yaml);
				})(i);
			const c = i;
		},
		9901: (e) => {
			e.exports &&
				(e.exports = {
					core: {
						meta: {
							path: "components/prism-core.js",
							option: "mandatory",
						},
						core: "Core",
					},
					themes: {
						meta: {
							path: "themes/{id}.css",
							link: "index.html?theme={id}",
							exclusive: !0,
						},
						prism: { title: "Default", option: "default" },
						"prism-dark": "Dark",
						"prism-funky": "Funky",
						"prism-okaidia": { title: "Okaidia", owner: "ocodia" },
						"prism-twilight": {
							title: "Twilight",
							owner: "remybach",
						},
						"prism-coy": { title: "Coy", owner: "tshedor" },
						"prism-solarizedlight": {
							title: "Solarized Light",
							owner: "hectormatos2011 ",
						},
						"prism-tomorrow": {
							title: "Tomorrow Night",
							owner: "Rosey",
						},
					},
					languages: {
						meta: {
							path: "components/prism-{id}",
							noCSS: !0,
							examplesPath: "examples/prism-{id}",
							addCheckAll: !0,
						},
						markup: {
							title: "Markup",
							alias: [
								"html",
								"xml",
								"svg",
								"mathml",
								"ssml",
								"atom",
								"rss",
							],
							aliasTitles: {
								html: "HTML",
								xml: "XML",
								svg: "SVG",
								mathml: "MathML",
								ssml: "SSML",
								atom: "Atom",
								rss: "RSS",
							},
							option: "default",
						},
						css: {
							title: "CSS",
							option: "default",
							modify: "markup",
						},
						clike: { title: "C-like", option: "default" },
						javascript: {
							title: "JavaScript",
							require: "clike",
							modify: "markup",
							optional: "regex",
							alias: "js",
							option: "default",
						},
						abap: { title: "ABAP", owner: "dellagustin" },
						abnf: { title: "ABNF", owner: "RunDevelopment" },
						actionscript: {
							title: "ActionScript",
							require: "javascript",
							modify: "markup",
							owner: "Golmote",
						},
						ada: { title: "Ada", owner: "Lucretia" },
						agda: { title: "Agda", owner: "xy-ren" },
						al: { title: "AL", owner: "RunDevelopment" },
						antlr4: {
							title: "ANTLR4",
							alias: "g4",
							owner: "RunDevelopment",
						},
						apacheconf: {
							title: "Apache Configuration",
							owner: "GuiTeK",
						},
						apex: {
							title: "Apex",
							require: ["clike", "sql"],
							owner: "RunDevelopment",
						},
						apl: { title: "APL", owner: "ngn" },
						applescript: { title: "AppleScript", owner: "Golmote" },
						aql: { title: "AQL", owner: "RunDevelopment" },
						arduino: {
							title: "Arduino",
							require: "cpp",
							owner: "dkern",
						},
						arff: { title: "ARFF", owner: "Golmote" },
						asciidoc: {
							alias: "adoc",
							title: "AsciiDoc",
							owner: "Golmote",
						},
						aspnet: {
							title: "ASP.NET (C#)",
							require: ["markup", "csharp"],
							owner: "nauzilus",
						},
						asm6502: { title: "6502 Assembly", owner: "kzurawel" },
						autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
						autoit: { title: "AutoIt", owner: "Golmote" },
						avisynth: {
							title: "AviSynth",
							alias: "avs",
							owner: "Zinfidel",
						},
						"avro-idl": {
							title: "Avro IDL",
							alias: "avdl",
							owner: "RunDevelopment",
						},
						bash: {
							title: "Bash",
							alias: "shell",
							aliasTitles: { shell: "Shell" },
							owner: "zeitgeist87",
						},
						basic: { title: "BASIC", owner: "Golmote" },
						batch: { title: "Batch", owner: "Golmote" },
						bbcode: {
							title: "BBcode",
							alias: "shortcode",
							aliasTitles: { shortcode: "Shortcode" },
							owner: "RunDevelopment",
						},
						bicep: { title: "Bicep", owner: "johnnyreilly" },
						birb: {
							title: "Birb",
							require: "clike",
							owner: "Calamity210",
						},
						bison: {
							title: "Bison",
							require: "c",
							owner: "Golmote",
						},
						bnf: {
							title: "BNF",
							alias: "rbnf",
							aliasTitles: { rbnf: "RBNF" },
							owner: "RunDevelopment",
						},
						brainfuck: { title: "Brainfuck", owner: "Golmote" },
						brightscript: {
							title: "BrightScript",
							owner: "RunDevelopment",
						},
						bro: { title: "Bro", owner: "wayward710" },
						bsl: {
							title: "BSL (1C:Enterprise)",
							alias: "oscript",
							aliasTitles: { oscript: "OneScript" },
							owner: "Diversus23",
						},
						c: {
							title: "C",
							require: "clike",
							owner: "zeitgeist87",
						},
						csharp: {
							title: "C#",
							require: "clike",
							alias: ["cs", "dotnet"],
							owner: "mvalipour",
						},
						cpp: {
							title: "C++",
							require: "c",
							owner: "zeitgeist87",
						},
						cfscript: {
							title: "CFScript",
							require: "clike",
							alias: "cfc",
							owner: "mjclemente",
						},
						chaiscript: {
							title: "ChaiScript",
							require: ["clike", "cpp"],
							owner: "RunDevelopment",
						},
						cil: { title: "CIL", owner: "sbrl" },
						clojure: { title: "Clojure", owner: "troglotit" },
						cmake: { title: "CMake", owner: "mjrogozinski" },
						cobol: { title: "COBOL", owner: "RunDevelopment" },
						coffeescript: {
							title: "CoffeeScript",
							require: "javascript",
							alias: "coffee",
							owner: "R-osey",
						},
						concurnas: {
							title: "Concurnas",
							alias: "conc",
							owner: "jasontatton",
						},
						csp: {
							title: "Content-Security-Policy",
							owner: "ScottHelme",
						},
						coq: { title: "Coq", owner: "RunDevelopment" },
						crystal: {
							title: "Crystal",
							require: "ruby",
							owner: "MakeNowJust",
						},
						"css-extras": {
							title: "CSS Extras",
							require: "css",
							modify: "css",
							owner: "milesj",
						},
						csv: { title: "CSV", owner: "RunDevelopment" },
						cypher: { title: "Cypher", owner: "RunDevelopment" },
						d: { title: "D", require: "clike", owner: "Golmote" },
						dart: {
							title: "Dart",
							require: "clike",
							owner: "Golmote",
						},
						dataweave: { title: "DataWeave", owner: "machaval" },
						dax: { title: "DAX", owner: "peterbud" },
						dhall: { title: "Dhall", owner: "RunDevelopment" },
						diff: { title: "Diff", owner: "uranusjr" },
						django: {
							title: "Django/Jinja2",
							require: "markup-templating",
							alias: "jinja2",
							owner: "romanvm",
						},
						"dns-zone-file": {
							title: "DNS zone file",
							owner: "RunDevelopment",
							alias: "dns-zone",
						},
						docker: {
							title: "Docker",
							alias: "dockerfile",
							owner: "JustinBeckwith",
						},
						dot: {
							title: "DOT (Graphviz)",
							alias: "gv",
							optional: "markup",
							owner: "RunDevelopment",
						},
						ebnf: { title: "EBNF", owner: "RunDevelopment" },
						editorconfig: {
							title: "EditorConfig",
							owner: "osipxd",
						},
						eiffel: { title: "Eiffel", owner: "Conaclos" },
						ejs: {
							title: "EJS",
							require: ["javascript", "markup-templating"],
							owner: "RunDevelopment",
							alias: "eta",
							aliasTitles: { eta: "Eta" },
						},
						elixir: { title: "Elixir", owner: "Golmote" },
						elm: { title: "Elm", owner: "zwilias" },
						etlua: {
							title: "Embedded Lua templating",
							require: ["lua", "markup-templating"],
							owner: "RunDevelopment",
						},
						erb: {
							title: "ERB",
							require: ["ruby", "markup-templating"],
							owner: "Golmote",
						},
						erlang: { title: "Erlang", owner: "Golmote" },
						"excel-formula": {
							title: "Excel Formula",
							alias: ["xlsx", "xls"],
							owner: "RunDevelopment",
						},
						fsharp: {
							title: "F#",
							require: "clike",
							owner: "simonreynolds7",
						},
						factor: { title: "Factor", owner: "catb0t" },
						false: { title: "False", owner: "edukisto" },
						"firestore-security-rules": {
							title: "Firestore security rules",
							require: "clike",
							owner: "RunDevelopment",
						},
						flow: {
							title: "Flow",
							require: "javascript",
							owner: "Golmote",
						},
						fortran: { title: "Fortran", owner: "Golmote" },
						ftl: {
							title: "FreeMarker Template Language",
							require: "markup-templating",
							owner: "RunDevelopment",
						},
						gml: {
							title: "GameMaker Language",
							alias: "gamemakerlanguage",
							require: "clike",
							owner: "LiarOnce",
						},
						gap: { title: "GAP (CAS)", owner: "RunDevelopment" },
						gcode: { title: "G-code", owner: "RunDevelopment" },
						gdscript: {
							title: "GDScript",
							owner: "RunDevelopment",
						},
						gedcom: { title: "GEDCOM", owner: "Golmote" },
						gherkin: { title: "Gherkin", owner: "hason" },
						git: { title: "Git", owner: "lgiraudel" },
						glsl: { title: "GLSL", require: "c", owner: "Golmote" },
						gn: {
							title: "GN",
							alias: "gni",
							owner: "RunDevelopment",
						},
						go: {
							title: "Go",
							require: "clike",
							owner: "arnehormann",
						},
						graphql: {
							title: "GraphQL",
							optional: "markdown",
							owner: "Golmote",
						},
						groovy: {
							title: "Groovy",
							require: "clike",
							owner: "robfletcher",
						},
						haml: {
							title: "Haml",
							require: "ruby",
							optional: [
								"css",
								"css-extras",
								"coffeescript",
								"erb",
								"javascript",
								"less",
								"markdown",
								"scss",
								"textile",
							],
							owner: "Golmote",
						},
						handlebars: {
							title: "Handlebars",
							require: "markup-templating",
							alias: "hbs",
							owner: "Golmote",
						},
						haskell: {
							title: "Haskell",
							alias: "hs",
							owner: "bholst",
						},
						haxe: {
							title: "Haxe",
							require: "clike",
							owner: "Golmote",
						},
						hcl: { title: "HCL", owner: "outsideris" },
						hlsl: {
							title: "HLSL",
							require: "c",
							owner: "RunDevelopment",
						},
						hoon: { title: "Hoon", owner: "matildepark" },
						http: {
							title: "HTTP",
							optional: [
								"css",
								"javascript",
								"json",
								"markup",
								"uri",
							],
							owner: "danielgtaylor",
						},
						hpkp: {
							title: "HTTP Public-Key-Pins",
							owner: "ScottHelme",
						},
						hsts: {
							title: "HTTP Strict-Transport-Security",
							owner: "ScottHelme",
						},
						ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
						icon: { title: "Icon", owner: "Golmote" },
						"icu-message-format": {
							title: "ICU Message Format",
							owner: "RunDevelopment",
						},
						idris: {
							title: "Idris",
							alias: "idr",
							owner: "KeenS",
							require: "haskell",
						},
						ignore: {
							title: ".ignore",
							owner: "osipxd",
							alias: ["gitignore", "hgignore", "npmignore"],
							aliasTitles: {
								gitignore: ".gitignore",
								hgignore: ".hgignore",
								npmignore: ".npmignore",
							},
						},
						inform7: { title: "Inform 7", owner: "Golmote" },
						ini: { title: "Ini", owner: "aviaryan" },
						io: { title: "Io", owner: "AlesTsurko" },
						j: { title: "J", owner: "Golmote" },
						java: {
							title: "Java",
							require: "clike",
							owner: "sherblot",
						},
						javadoc: {
							title: "JavaDoc",
							require: ["markup", "java", "javadoclike"],
							modify: "java",
							optional: "scala",
							owner: "RunDevelopment",
						},
						javadoclike: {
							title: "JavaDoc-like",
							modify: ["java", "javascript", "php"],
							owner: "RunDevelopment",
						},
						javastacktrace: {
							title: "Java stack trace",
							owner: "RunDevelopment",
						},
						jexl: { title: "Jexl", owner: "czosel" },
						jolie: {
							title: "Jolie",
							require: "clike",
							owner: "thesave",
						},
						jq: { title: "JQ", owner: "RunDevelopment" },
						jsdoc: {
							title: "JSDoc",
							require: [
								"javascript",
								"javadoclike",
								"typescript",
							],
							modify: "javascript",
							optional: ["actionscript", "coffeescript"],
							owner: "RunDevelopment",
						},
						"js-extras": {
							title: "JS Extras",
							require: "javascript",
							modify: "javascript",
							optional: [
								"actionscript",
								"coffeescript",
								"flow",
								"n4js",
								"typescript",
							],
							owner: "RunDevelopment",
						},
						json: {
							title: "JSON",
							alias: "webmanifest",
							aliasTitles: { webmanifest: "Web App Manifest" },
							owner: "CupOfTea696",
						},
						json5: {
							title: "JSON5",
							require: "json",
							owner: "RunDevelopment",
						},
						jsonp: {
							title: "JSONP",
							require: "json",
							owner: "RunDevelopment",
						},
						jsstacktrace: {
							title: "JS stack trace",
							owner: "sbrl",
						},
						"js-templates": {
							title: "JS Templates",
							require: "javascript",
							modify: "javascript",
							optional: [
								"css",
								"css-extras",
								"graphql",
								"markdown",
								"markup",
								"sql",
							],
							owner: "RunDevelopment",
						},
						julia: { title: "Julia", owner: "cdagnino" },
						keyman: { title: "Keyman", owner: "mcdurdin" },
						kotlin: {
							title: "Kotlin",
							alias: ["kt", "kts"],
							aliasTitles: { kts: "Kotlin Script" },
							require: "clike",
							owner: "Golmote",
						},
						kumir: {
							title: "KuMir (\u041a\u0443\u041c\u0438\u0440)",
							alias: "kum",
							owner: "edukisto",
						},
						kusto: { title: "Kusto", owner: "RunDevelopment" },
						latex: {
							title: "LaTeX",
							alias: ["tex", "context"],
							aliasTitles: { tex: "TeX", context: "ConTeXt" },
							owner: "japborst",
						},
						latte: {
							title: "Latte",
							require: ["clike", "markup-templating", "php"],
							owner: "nette",
						},
						less: {
							title: "Less",
							require: "css",
							optional: "css-extras",
							owner: "Golmote",
						},
						lilypond: {
							title: "LilyPond",
							require: "scheme",
							alias: "ly",
							owner: "RunDevelopment",
						},
						liquid: {
							title: "Liquid",
							require: "markup-templating",
							owner: "cinhtau",
						},
						lisp: {
							title: "Lisp",
							alias: ["emacs", "elisp", "emacs-lisp"],
							owner: "JuanCaicedo",
						},
						livescript: { title: "LiveScript", owner: "Golmote" },
						llvm: { title: "LLVM IR", owner: "porglezomp" },
						log: {
							title: "Log file",
							optional: "javastacktrace",
							owner: "RunDevelopment",
						},
						lolcode: { title: "LOLCODE", owner: "Golmote" },
						lua: { title: "Lua", owner: "Golmote" },
						magma: {
							title: "Magma (CAS)",
							owner: "RunDevelopment",
						},
						makefile: { title: "Makefile", owner: "Golmote" },
						markdown: {
							title: "Markdown",
							require: "markup",
							optional: "yaml",
							alias: "md",
							owner: "Golmote",
						},
						"markup-templating": {
							title: "Markup templating",
							require: "markup",
							owner: "Golmote",
						},
						matlab: { title: "MATLAB", owner: "Golmote" },
						maxscript: {
							title: "MAXScript",
							owner: "RunDevelopment",
						},
						mel: { title: "MEL", owner: "Golmote" },
						mermaid: { title: "Mermaid", owner: "RunDevelopment" },
						mizar: { title: "Mizar", owner: "Golmote" },
						mongodb: {
							title: "MongoDB",
							owner: "airs0urce",
							require: "javascript",
						},
						monkey: { title: "Monkey", owner: "Golmote" },
						moonscript: {
							title: "MoonScript",
							alias: "moon",
							owner: "RunDevelopment",
						},
						n1ql: { title: "N1QL", owner: "TMWilds" },
						n4js: {
							title: "N4JS",
							require: "javascript",
							optional: "jsdoc",
							alias: "n4jsd",
							owner: "bsmith-n4",
						},
						"nand2tetris-hdl": {
							title: "Nand To Tetris HDL",
							owner: "stephanmax",
						},
						naniscript: {
							title: "Naninovel Script",
							owner: "Elringus",
							alias: "nani",
						},
						nasm: { title: "NASM", owner: "rbmj" },
						neon: { title: "NEON", owner: "nette" },
						nevod: { title: "Nevod", owner: "nezaboodka" },
						nginx: { title: "nginx", owner: "volado" },
						nim: { title: "Nim", owner: "Golmote" },
						nix: { title: "Nix", owner: "Golmote" },
						nsis: { title: "NSIS", owner: "idleberg" },
						objectivec: {
							title: "Objective-C",
							require: "c",
							alias: "objc",
							owner: "uranusjr",
						},
						ocaml: { title: "OCaml", owner: "Golmote" },
						opencl: {
							title: "OpenCL",
							require: "c",
							modify: ["c", "cpp"],
							owner: "Milania1",
						},
						openqasm: {
							title: "OpenQasm",
							alias: "qasm",
							owner: "RunDevelopment",
						},
						oz: { title: "Oz", owner: "Golmote" },
						parigp: { title: "PARI/GP", owner: "Golmote" },
						parser: {
							title: "Parser",
							require: "markup",
							owner: "Golmote",
						},
						pascal: {
							title: "Pascal",
							alias: "objectpascal",
							aliasTitles: { objectpascal: "Object Pascal" },
							owner: "Golmote",
						},
						pascaligo: {
							title: "Pascaligo",
							owner: "DefinitelyNotAGoat",
						},
						psl: {
							title: "PATROL Scripting Language",
							owner: "bertysentry",
						},
						pcaxis: {
							title: "PC-Axis",
							alias: "px",
							owner: "RunDevelopment",
						},
						peoplecode: {
							title: "PeopleCode",
							alias: "pcode",
							owner: "RunDevelopment",
						},
						perl: { title: "Perl", owner: "Golmote" },
						php: {
							title: "PHP",
							require: "markup-templating",
							owner: "milesj",
						},
						phpdoc: {
							title: "PHPDoc",
							require: ["php", "javadoclike"],
							modify: "php",
							owner: "RunDevelopment",
						},
						"php-extras": {
							title: "PHP Extras",
							require: "php",
							modify: "php",
							owner: "milesj",
						},
						plsql: {
							title: "PL/SQL",
							require: "sql",
							owner: "Golmote",
						},
						powerquery: {
							title: "PowerQuery",
							alias: ["pq", "mscript"],
							owner: "peterbud",
						},
						powershell: { title: "PowerShell", owner: "nauzilus" },
						processing: {
							title: "Processing",
							require: "clike",
							owner: "Golmote",
						},
						prolog: { title: "Prolog", owner: "Golmote" },
						promql: { title: "PromQL", owner: "arendjr" },
						properties: { title: ".properties", owner: "Golmote" },
						protobuf: {
							title: "Protocol Buffers",
							require: "clike",
							owner: "just-boris",
						},
						pug: {
							title: "Pug",
							require: ["markup", "javascript"],
							optional: [
								"coffeescript",
								"ejs",
								"handlebars",
								"less",
								"livescript",
								"markdown",
								"scss",
								"stylus",
								"twig",
							],
							owner: "Golmote",
						},
						puppet: { title: "Puppet", owner: "Golmote" },
						pure: {
							title: "Pure",
							optional: ["c", "cpp", "fortran"],
							owner: "Golmote",
						},
						purebasic: {
							title: "PureBasic",
							require: "clike",
							alias: "pbfasm",
							owner: "HeX0R101",
						},
						purescript: {
							title: "PureScript",
							require: "haskell",
							alias: "purs",
							owner: "sriharshachilakapati",
						},
						python: {
							title: "Python",
							alias: "py",
							owner: "multipetros",
						},
						qsharp: {
							title: "Q#",
							require: "clike",
							alias: "qs",
							owner: "fedonman",
						},
						q: { title: "Q (kdb+ database)", owner: "Golmote" },
						qml: {
							title: "QML",
							require: "javascript",
							owner: "RunDevelopment",
						},
						qore: {
							title: "Qore",
							require: "clike",
							owner: "temnroegg",
						},
						r: { title: "R", owner: "Golmote" },
						racket: {
							title: "Racket",
							require: "scheme",
							alias: "rkt",
							owner: "RunDevelopment",
						},
						cshtml: {
							title: "Razor C#",
							alias: "razor",
							require: ["markup", "csharp"],
							optional: [
								"css",
								"css-extras",
								"javascript",
								"js-extras",
							],
							owner: "RunDevelopment",
						},
						jsx: {
							title: "React JSX",
							require: ["markup", "javascript"],
							optional: ["jsdoc", "js-extras", "js-templates"],
							owner: "vkbansal",
						},
						tsx: {
							title: "React TSX",
							require: ["jsx", "typescript"],
						},
						reason: {
							title: "Reason",
							require: "clike",
							owner: "Golmote",
						},
						regex: { title: "Regex", owner: "RunDevelopment" },
						rego: { title: "Rego", owner: "JordanSh" },
						renpy: {
							title: "Ren'py",
							alias: "rpy",
							owner: "HyuchiaDiego",
						},
						rest: {
							title: "reST (reStructuredText)",
							owner: "Golmote",
						},
						rip: { title: "Rip", owner: "ravinggenius" },
						roboconf: { title: "Roboconf", owner: "Golmote" },
						robotframework: {
							title: "Robot Framework",
							alias: "robot",
							owner: "RunDevelopment",
						},
						ruby: {
							title: "Ruby",
							require: "clike",
							alias: "rb",
							owner: "samflores",
						},
						rust: { title: "Rust", owner: "Golmote" },
						sas: {
							title: "SAS",
							optional: ["groovy", "lua", "sql"],
							owner: "Golmote",
						},
						sass: {
							title: "Sass (Sass)",
							require: "css",
							optional: "css-extras",
							owner: "Golmote",
						},
						scss: {
							title: "Sass (Scss)",
							require: "css",
							optional: "css-extras",
							owner: "MoOx",
						},
						scala: {
							title: "Scala",
							require: "java",
							owner: "jozic",
						},
						scheme: { title: "Scheme", owner: "bacchus123" },
						"shell-session": {
							title: "Shell session",
							require: "bash",
							alias: ["sh-session", "shellsession"],
							owner: "RunDevelopment",
						},
						smali: { title: "Smali", owner: "RunDevelopment" },
						smalltalk: { title: "Smalltalk", owner: "Golmote" },
						smarty: {
							title: "Smarty",
							require: "markup-templating",
							owner: "Golmote",
						},
						sml: {
							title: "SML",
							alias: "smlnj",
							aliasTitles: { smlnj: "SML/NJ" },
							owner: "RunDevelopment",
						},
						solidity: {
							title: "Solidity (Ethereum)",
							alias: "sol",
							require: "clike",
							owner: "glachaud",
						},
						"solution-file": {
							title: "Solution file",
							alias: "sln",
							owner: "RunDevelopment",
						},
						soy: {
							title: "Soy (Closure Template)",
							require: "markup-templating",
							owner: "Golmote",
						},
						sparql: {
							title: "SPARQL",
							require: "turtle",
							owner: "Triply-Dev",
							alias: "rq",
						},
						"splunk-spl": {
							title: "Splunk SPL",
							owner: "RunDevelopment",
						},
						sqf: {
							title: "SQF: Status Quo Function (Arma 3)",
							require: "clike",
							owner: "RunDevelopment",
						},
						sql: { title: "SQL", owner: "multipetros" },
						squirrel: {
							title: "Squirrel",
							require: "clike",
							owner: "RunDevelopment",
						},
						stan: { title: "Stan", owner: "RunDevelopment" },
						iecst: {
							title: "Structured Text (IEC 61131-3)",
							owner: "serhioromano",
						},
						stylus: { title: "Stylus", owner: "vkbansal" },
						swift: { title: "Swift", owner: "chrischares" },
						systemd: {
							title: "Systemd configuration file",
							owner: "RunDevelopment",
						},
						"t4-templating": {
							title: "T4 templating",
							owner: "RunDevelopment",
						},
						"t4-cs": {
							title: "T4 Text Templates (C#)",
							require: ["t4-templating", "csharp"],
							alias: "t4",
							owner: "RunDevelopment",
						},
						"t4-vb": {
							title: "T4 Text Templates (VB)",
							require: ["t4-templating", "vbnet"],
							owner: "RunDevelopment",
						},
						tap: { title: "TAP", owner: "isaacs", require: "yaml" },
						tcl: { title: "Tcl", owner: "PeterChaplin" },
						tt2: {
							title: "Template Toolkit 2",
							require: ["clike", "markup-templating"],
							owner: "gflohr",
						},
						textile: {
							title: "Textile",
							require: "markup",
							optional: "css",
							owner: "Golmote",
						},
						toml: { title: "TOML", owner: "RunDevelopment" },
						turtle: {
							title: "Turtle",
							alias: "trig",
							aliasTitles: { trig: "TriG" },
							owner: "jakubklimek",
						},
						twig: {
							title: "Twig",
							require: "markup",
							owner: "brandonkelly",
						},
						typescript: {
							title: "TypeScript",
							require: "javascript",
							optional: "js-templates",
							alias: "ts",
							owner: "vkbansal",
						},
						typoscript: {
							title: "TypoScript",
							alias: "tsconfig",
							aliasTitles: { tsconfig: "TSConfig" },
							owner: "dkern",
						},
						unrealscript: {
							title: "UnrealScript",
							alias: ["uscript", "uc"],
							owner: "RunDevelopment",
						},
						uri: {
							title: "URI",
							alias: "url",
							aliasTitles: { url: "URL" },
							owner: "RunDevelopment",
						},
						v: { title: "V", require: "clike", owner: "taggon" },
						vala: {
							title: "Vala",
							require: "clike",
							optional: "regex",
							owner: "TemplarVolk",
						},
						vbnet: {
							title: "VB.Net",
							require: "basic",
							owner: "Bigsby",
						},
						velocity: {
							title: "Velocity",
							require: "markup",
							owner: "Golmote",
						},
						verilog: { title: "Verilog", owner: "a-rey" },
						vhdl: { title: "VHDL", owner: "a-rey" },
						vim: { title: "vim", owner: "westonganger" },
						"visual-basic": {
							title: "Visual Basic",
							alias: ["vb", "vba"],
							aliasTitles: { vba: "VBA" },
							owner: "Golmote",
						},
						warpscript: {
							title: "WarpScript",
							owner: "RunDevelopment",
						},
						wasm: { title: "WebAssembly", owner: "Golmote" },
						wiki: {
							title: "Wiki markup",
							require: "markup",
							owner: "Golmote",
						},
						wolfram: {
							title: "Wolfram language",
							alias: ["mathematica", "nb", "wl"],
							aliasTitles: {
								mathematica: "Mathematica",
								nb: "Mathematica Notebook",
							},
							owner: "msollami",
						},
						wren: { title: "Wren", owner: "clsource" },
						xeora: {
							title: "Xeora",
							require: "markup",
							alias: "xeoracube",
							aliasTitles: { xeoracube: "XeoraCube" },
							owner: "freakmaxi",
						},
						"xml-doc": {
							title: "XML doc (.net)",
							require: "markup",
							modify: ["csharp", "fsharp", "vbnet"],
							owner: "RunDevelopment",
						},
						xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
						xquery: {
							title: "XQuery",
							require: "markup",
							owner: "Golmote",
						},
						yaml: { title: "YAML", alias: "yml", owner: "hason" },
						yang: { title: "YANG", owner: "RunDevelopment" },
						zig: { title: "Zig", owner: "RunDevelopment" },
					},
					plugins: {
						meta: {
							path: "plugins/{id}/prism-{id}",
							link: "plugins/{id}/",
						},
						"line-highlight": {
							title: "Line Highlight",
							description:
								"Highlights specific lines and/or line ranges.",
						},
						"line-numbers": {
							title: "Line Numbers",
							description:
								"Line number at the beginning of code lines.",
							owner: "kuba-kubula",
						},
						"show-invisibles": {
							title: "Show Invisibles",
							description:
								"Show hidden characters such as tabs and line breaks.",
							optional: ["autolinker", "data-uri-highlight"],
						},
						autolinker: {
							title: "Autolinker",
							description:
								"Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
						},
						wpd: {
							title: "WebPlatform Docs",
							description:
								'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
						},
						"custom-class": {
							title: "Custom Class",
							description:
								"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
							owner: "dvkndn",
							noCSS: !0,
						},
						"file-highlight": {
							title: "File Highlight",
							description:
								"Fetch external files and highlight them with Prism. Used on the Prism website itself.",
							noCSS: !0,
						},
						"show-language": {
							title: "Show Language",
							description:
								"Display the highlighted language in code blocks (inline code does not show the label).",
							owner: "nauzilus",
							noCSS: !0,
							require: "toolbar",
						},
						"jsonp-highlight": {
							title: "JSONP Highlight",
							description:
								"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
							noCSS: !0,
							owner: "nauzilus",
						},
						"highlight-keywords": {
							title: "Highlight Keywords",
							description:
								"Adds special CSS classes for each keyword for fine-grained highlighting.",
							owner: "vkbansal",
							noCSS: !0,
						},
						"remove-initial-line-feed": {
							title: "Remove initial line feed",
							description:
								"Removes the initial line feed in code blocks.",
							owner: "Golmote",
							noCSS: !0,
						},
						"inline-color": {
							title: "Inline color",
							description:
								"Adds a small inline preview for colors in style sheets.",
							require: "css-extras",
							owner: "RunDevelopment",
						},
						previewers: {
							title: "Previewers",
							description:
								"Previewers for angles, colors, gradients, easing and time.",
							require: "css-extras",
							owner: "Golmote",
						},
						autoloader: {
							title: "Autoloader",
							description:
								"Automatically loads the needed languages to highlight the code blocks.",
							owner: "Golmote",
							noCSS: !0,
						},
						"keep-markup": {
							title: "Keep Markup",
							description:
								"Prevents custom markup from being dropped out during highlighting.",
							owner: "Golmote",
							optional: "normalize-whitespace",
							noCSS: !0,
						},
						"command-line": {
							title: "Command Line",
							description:
								"Display a command line with a prompt and, optionally, the output/response from the commands.",
							owner: "chriswells0",
						},
						"unescaped-markup": {
							title: "Unescaped Markup",
							description:
								"Write markup without having to escape anything.",
						},
						"normalize-whitespace": {
							title: "Normalize Whitespace",
							description:
								"Supports multiple operations to normalize whitespace in code blocks.",
							owner: "zeitgeist87",
							optional: "unescaped-markup",
							noCSS: !0,
						},
						"data-uri-highlight": {
							title: "Data-URI Highlight",
							description: "Highlights data-URI contents.",
							owner: "Golmote",
							noCSS: !0,
						},
						toolbar: {
							title: "Toolbar",
							description:
								"Attach a toolbar for plugins to easily register buttons on the top of a code block.",
							owner: "mAAdhaTTah",
						},
						"copy-to-clipboard": {
							title: "Copy to Clipboard Button",
							description:
								"Add a button that copies the code block to the clipboard when clicked.",
							owner: "mAAdhaTTah",
							require: "toolbar",
							noCSS: !0,
						},
						"download-button": {
							title: "Download Button",
							description:
								"A button in the toolbar of a code block adding a convenient way to download a code file.",
							owner: "Golmote",
							require: "toolbar",
							noCSS: !0,
						},
						"match-braces": {
							title: "Match braces",
							description: "Highlights matching braces.",
							owner: "RunDevelopment",
						},
						"diff-highlight": {
							title: "Diff Highlight",
							description:
								"Highlights the code inside diff blocks.",
							owner: "RunDevelopment",
							require: "diff",
						},
						"filter-highlight-all": {
							title: "Filter highlightAll",
							description:
								"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
							owner: "RunDevelopment",
							noCSS: !0,
						},
						treeview: {
							title: "Treeview",
							description:
								"A language with special styles to highlight file system tree structures.",
							owner: "Golmote",
						},
					},
				});
		},
		2885: (e, t, n) => {
			const r = n(9901),
				o = n(9642),
				a = new Set();
			function i(e) {
				void 0 === e
					? (e = Object.keys(r.languages).filter((e) => "meta" != e))
					: Array.isArray(e) || (e = [e]);
				const t = [...a, ...Object.keys(Prism.languages)];
				o(r, e, t).load((e) => {
					if (!(e in r.languages))
						return void (
							i.silent ||
							console.warn("Language does not exist: " + e)
						);
					const t = "./prism-" + e;
					delete n.c[n(6500).resolve(t)],
						delete Prism.languages[e],
						n(6500)(t),
						a.add(e);
				});
			}
			(i.silent = !1), (e.exports = i);
		},
		6500: (e, t, n) => {
			var r = { "./": 2885 };
			function o(e) {
				var t = a(e);
				return n(t);
			}
			function a(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw ((t.code = "MODULE_NOT_FOUND"), t);
				}
				return r[e];
			}
			(o.keys = function () {
				return Object.keys(r);
			}),
				(o.resolve = a),
				(e.exports = o),
				(o.id = 6500);
		},
		9642: (e) => {
			"use strict";
			var t = (function () {
				var e = function () {};
				function t(e, t) {
					Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
				}
				function n(e) {
					for (var t = {}, n = 0, r = e.length; n < r; n++)
						t[e[n]] = !0;
					return t;
				}
				function r(e) {
					var n = {},
						r = [];
					function o(r, a) {
						if (!(r in n)) {
							a.push(r);
							var i = a.indexOf(r);
							if (i < a.length - 1)
								throw new Error(
									"Circular dependency: " +
										a.slice(i).join(" -> "),
								);
							var c = {},
								l = e[r];
							if (l) {
								function i(t) {
									if (!(t in e))
										throw new Error(
											r +
												" depends on an unknown component " +
												t,
										);
									if (!(t in c))
										for (var i in (o(t, a),
										(c[t] = !0),
										n[t]))
											c[i] = !0;
								}
								t(l.require, i),
									t(l.optional, i),
									t(l.modify, i);
							}
							(n[r] = c), a.pop();
						}
					}
					return function (e) {
						var t = n[e];
						return t || (o(e, r), (t = n[e])), t;
					};
				}
				function o(e) {
					for (var t in e) return !0;
					return !1;
				}
				return function (a, i, c) {
					var l = (function (e) {
							var t = {};
							for (var n in e) {
								var r = e[n];
								for (var o in r)
									if ("meta" != o) {
										var a = r[o];
										t[o] =
											"string" == typeof a
												? { title: a }
												: a;
									}
							}
							return t;
						})(a),
						s = (function (e) {
							var n;
							return function (r) {
								if (r in e) return r;
								if (!n)
									for (var o in ((n = {}), e)) {
										var a = e[o];
										t(a && a.alias, function (t) {
											if (t in n)
												throw new Error(
													t +
														" cannot be alias for both " +
														o +
														" and " +
														n[t],
												);
											if (t in e)
												throw new Error(
													t +
														" cannot be alias of " +
														o +
														" because it is a component.",
												);
											n[t] = o;
										});
									}
								return n[r] || r;
							};
						})(l);
					(i = i.map(s)), (c = (c || []).map(s));
					var u = n(i),
						d = n(c);
					i.forEach(function e(n) {
						var r = l[n];
						t(r && r.require, function (t) {
							t in d || ((u[t] = !0), e(t));
						});
					});
					for (var f, p = r(l), b = u; o(b); ) {
						for (var m in ((f = {}), b)) {
							var g = l[m];
							t(g && g.modify, function (e) {
								e in d && (f[e] = !0);
							});
						}
						for (var h in d)
							if (!(h in u))
								for (var w in p(h))
									if (w in u) {
										f[h] = !0;
										break;
									}
						for (var v in (b = f)) u[v] = !0;
					}
					var y = {
						getIds: function () {
							var e = [];
							return (
								y.load(function (t) {
									e.push(t);
								}),
								e
							);
						},
						load: function (t, n) {
							return (function (t, n, r, o) {
								var a = o ? o.series : void 0,
									i = o ? o.parallel : e,
									c = {},
									l = {};
								function s(e) {
									if (e in c) return c[e];
									l[e] = !0;
									var o,
										u = [];
									for (var d in t(e)) d in n && u.push(d);
									if (0 === u.length) o = r(e);
									else {
										var f = i(
											u.map(function (e) {
												var t = s(e);
												return delete l[e], t;
											}),
										);
										a
											? (o = a(f, function () {
													return r(e);
												}))
											: r(e);
									}
									return (c[e] = o);
								}
								for (var u in n) s(u);
								var d = [];
								for (var f in l) d.push(c[f]);
								return i(d);
							})(p, u, t, n);
						},
					};
					return y;
				};
			})();
			e.exports = t;
		},
		2703: (e, t, n) => {
			"use strict";
			var r = n(414);
			function o() {}
			function a() {}
			(a.resetWarningCache = o),
				(e.exports = function () {
					function e(e, t, n, o, a, i) {
						if (i !== r) {
							var c = new Error(
								"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
							);
							throw ((c.name = "Invariant Violation"), c);
						}
					}
					function t() {
						return e;
					}
					e.isRequired = e;
					var n = {
						array: e,
						bool: e,
						func: e,
						number: e,
						object: e,
						string: e,
						symbol: e,
						any: e,
						arrayOf: t,
						element: e,
						elementType: e,
						instanceOf: t,
						node: e,
						objectOf: t,
						oneOf: t,
						oneOfType: t,
						shape: t,
						exact: t,
						checkPropTypes: a,
						resetWarningCache: o,
					};
					return (n.PropTypes = n), n;
				});
		},
		5697: (e, t, n) => {
			e.exports = n(2703)();
		},
		414: (e) => {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		},
		4448: (e, t, n) => {
			"use strict";
			var r = n(7294),
				o = n(7418),
				a = n(3840);
			function i(e) {
				for (
					var t =
							"https://reactjs.org/docs/error-decoder.html?invariant=" +
							e,
						n = 1;
					n < arguments.length;
					n++
				)
					t += "&args[]=" + encodeURIComponent(arguments[n]);
				return (
					"Minified React error #" +
					e +
					"; visit " +
					t +
					" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				);
			}
			if (!r) throw Error(i(227));
			function c(e, t, n, r, o, a, i, c, l) {
				var s = Array.prototype.slice.call(arguments, 3);
				try {
					t.apply(n, s);
				} catch (u) {
					this.onError(u);
				}
			}
			var l = !1,
				s = null,
				u = !1,
				d = null,
				f = {
					onError: function (e) {
						(l = !0), (s = e);
					},
				};
			function p(e, t, n, r, o, a, i, u, d) {
				(l = !1), (s = null), c.apply(f, arguments);
			}
			var b = null,
				m = null,
				g = null;
			function h(e, t, n) {
				var r = e.type || "unknown-event";
				(e.currentTarget = g(n)),
					(function (e, t, n, r, o, a, c, f, b) {
						if ((p.apply(this, arguments), l)) {
							if (!l) throw Error(i(198));
							var m = s;
							(l = !1), (s = null), u || ((u = !0), (d = m));
						}
					})(r, t, void 0, e),
					(e.currentTarget = null);
			}
			var w = null,
				v = {};
			function y() {
				if (w)
					for (var e in v) {
						var t = v[e],
							n = w.indexOf(e);
						if (!(-1 < n)) throw Error(i(96, e));
						if (!x[n]) {
							if (!t.extractEvents) throw Error(i(97, e));
							for (var r in ((x[n] = t), (n = t.eventTypes))) {
								var o = void 0,
									a = n[r],
									c = t,
									l = r;
								if (E.hasOwnProperty(l)) throw Error(i(99, l));
								E[l] = a;
								var s = a.phasedRegistrationNames;
								if (s) {
									for (o in s)
										s.hasOwnProperty(o) && k(s[o], c, l);
									o = !0;
								} else
									a.registrationName
										? (k(a.registrationName, c, l),
											(o = !0))
										: (o = !1);
								if (!o) throw Error(i(98, r, e));
							}
						}
					}
			}
			function k(e, t, n) {
				if (S[e]) throw Error(i(100, e));
				(S[e] = t), (T[e] = t.eventTypes[n].dependencies);
			}
			var x = [],
				E = {},
				S = {},
				T = {};
			function C(e) {
				var t,
					n = !1;
				for (t in e)
					if (e.hasOwnProperty(t)) {
						var r = e[t];
						if (!v.hasOwnProperty(t) || v[t] !== r) {
							if (v[t]) throw Error(i(102, t));
							(v[t] = r), (n = !0);
						}
					}
				n && y();
			}
			var P = !(
					"undefined" == typeof window ||
					void 0 === window.document ||
					void 0 === window.document.createElement
				),
				A = null,
				O = null,
				_ = null;
			function R(e) {
				if ((e = m(e))) {
					if ("function" != typeof A) throw Error(i(280));
					var t = e.stateNode;
					t && ((t = b(t)), A(e.stateNode, e.type, t));
				}
			}
			function N(e) {
				O ? (_ ? _.push(e) : (_ = [e])) : (O = e);
			}
			function L() {
				if (O) {
					var e = O,
						t = _;
					if (((_ = O = null), R(e), t))
						for (e = 0; e < t.length; e++) R(t[e]);
				}
			}
			function I(e, t) {
				return e(t);
			}
			function D(e, t, n, r, o) {
				return e(t, n, r, o);
			}
			function F() {}
			var M = I,
				j = !1,
				B = !1;
			function z() {
				(null === O && null === _) || (F(), L());
			}
			function U(e, t, n) {
				if (B) return e(t, n);
				B = !0;
				try {
					return M(e, t, n);
				} finally {
					(B = !1), z();
				}
			}
			var $ =
					/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
				G = Object.prototype.hasOwnProperty,
				q = {},
				H = {};
			function W(e, t, n, r, o, a) {
				(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
					(this.attributeName = r),
					(this.attributeNamespace = o),
					(this.mustUseProperty = n),
					(this.propertyName = e),
					(this.type = t),
					(this.sanitizeURL = a);
			}
			var V = {};
			"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
				.split(" ")
				.forEach(function (e) {
					V[e] = new W(e, 0, !1, e, null, !1);
				}),
				[
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"],
				].forEach(function (e) {
					var t = e[0];
					V[t] = new W(t, 1, !1, e[1], null, !1);
				}),
				["contentEditable", "draggable", "spellCheck", "value"].forEach(
					function (e) {
						V[e] = new W(e, 2, !1, e.toLowerCase(), null, !1);
					},
				),
				[
					"autoReverse",
					"externalResourcesRequired",
					"focusable",
					"preserveAlpha",
				].forEach(function (e) {
					V[e] = new W(e, 2, !1, e, null, !1);
				}),
				"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
					.split(" ")
					.forEach(function (e) {
						V[e] = new W(e, 3, !1, e.toLowerCase(), null, !1);
					}),
				["checked", "multiple", "muted", "selected"].forEach(
					function (e) {
						V[e] = new W(e, 3, !0, e, null, !1);
					},
				),
				["capture", "download"].forEach(function (e) {
					V[e] = new W(e, 4, !1, e, null, !1);
				}),
				["cols", "rows", "size", "span"].forEach(function (e) {
					V[e] = new W(e, 6, !1, e, null, !1);
				}),
				["rowSpan", "start"].forEach(function (e) {
					V[e] = new W(e, 5, !1, e.toLowerCase(), null, !1);
				});
			var Z = /[\-:]([a-z])/g;
			function K(e) {
				return e[1].toUpperCase();
			}
			"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
				.split(" ")
				.forEach(function (e) {
					var t = e.replace(Z, K);
					V[t] = new W(t, 1, !1, e, null, !1);
				}),
				"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(Z, K);
						V[t] = new W(
							t,
							1,
							!1,
							e,
							"http://www.w3.org/1999/xlink",
							!1,
						);
					}),
				["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
					var t = e.replace(Z, K);
					V[t] = new W(
						t,
						1,
						!1,
						e,
						"http://www.w3.org/XML/1998/namespace",
						!1,
					);
				}),
				["tabIndex", "crossOrigin"].forEach(function (e) {
					V[e] = new W(e, 1, !1, e.toLowerCase(), null, !1);
				}),
				(V.xlinkHref = new W(
					"xlinkHref",
					1,
					!1,
					"xlink:href",
					"http://www.w3.org/1999/xlink",
					!0,
				)),
				["src", "href", "action", "formAction"].forEach(function (e) {
					V[e] = new W(e, 1, !1, e.toLowerCase(), null, !0);
				});
			var Q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
			function Y(e, t, n, r) {
				var o = V.hasOwnProperty(t) ? V[t] : null;
				(null !== o
					? 0 === o.type
					: !r &&
						2 < t.length &&
						("o" === t[0] || "O" === t[0]) &&
						("n" === t[1] || "N" === t[1])) ||
					((function (e, t, n, r) {
						if (
							null == t ||
							(function (e, t, n, r) {
								if (null !== n && 0 === n.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return (
											!r &&
											(null !== n
												? !n.acceptsBooleans
												: "data-" !==
														(e = e
															.toLowerCase()
															.slice(0, 5)) &&
													"aria-" !== e)
										);
									default:
										return !1;
								}
							})(e, t, n, r)
						)
							return !0;
						if (r) return !1;
						if (null !== n)
							switch (n.type) {
								case 3:
									return !t;
								case 4:
									return !1 === t;
								case 5:
									return isNaN(t);
								case 6:
									return isNaN(t) || 1 > t;
							}
						return !1;
					})(t, n, o, r) && (n = null),
					r || null === o
						? (function (e) {
								return (
									!!G.call(H, e) ||
									(!G.call(q, e) &&
										($.test(e)
											? (H[e] = !0)
											: ((q[e] = !0), !1)))
								);
							})(t) &&
							(null === n
								? e.removeAttribute(t)
								: e.setAttribute(t, "" + n))
						: o.mustUseProperty
							? (e[o.propertyName] =
									null === n ? 3 !== o.type && "" : n)
							: ((t = o.attributeName),
								(r = o.attributeNamespace),
								null === n
									? e.removeAttribute(t)
									: ((n =
											3 === (o = o.type) ||
											(4 === o && !0 === n)
												? ""
												: "" + n),
										r
											? e.setAttributeNS(r, t, n)
											: e.setAttribute(t, n))));
			}
			Q.hasOwnProperty("ReactCurrentDispatcher") ||
				(Q.ReactCurrentDispatcher = { current: null }),
				Q.hasOwnProperty("ReactCurrentBatchConfig") ||
					(Q.ReactCurrentBatchConfig = { suspense: null });
			var X = /^(.*)[\\\/]/,
				J = "function" == typeof Symbol && Symbol.for,
				ee = J ? Symbol.for("react.element") : 60103,
				te = J ? Symbol.for("react.portal") : 60106,
				ne = J ? Symbol.for("react.fragment") : 60107,
				re = J ? Symbol.for("react.strict_mode") : 60108,
				oe = J ? Symbol.for("react.profiler") : 60114,
				ae = J ? Symbol.for("react.provider") : 60109,
				ie = J ? Symbol.for("react.context") : 60110,
				ce = J ? Symbol.for("react.concurrent_mode") : 60111,
				le = J ? Symbol.for("react.forward_ref") : 60112,
				se = J ? Symbol.for("react.suspense") : 60113,
				ue = J ? Symbol.for("react.suspense_list") : 60120,
				de = J ? Symbol.for("react.memo") : 60115,
				fe = J ? Symbol.for("react.lazy") : 60116,
				pe = J ? Symbol.for("react.block") : 60121,
				be = "function" == typeof Symbol && Symbol.iterator;
			function me(e) {
				return null === e || "object" != typeof e
					? null
					: "function" ==
						  typeof (e = (be && e[be]) || e["@@iterator"])
						? e
						: null;
			}
			function ge(e) {
				if (null == e) return null;
				if ("function" == typeof e)
					return e.displayName || e.name || null;
				if ("string" == typeof e) return e;
				switch (e) {
					case ne:
						return "Fragment";
					case te:
						return "Portal";
					case oe:
						return "Profiler";
					case re:
						return "StrictMode";
					case se:
						return "Suspense";
					case ue:
						return "SuspenseList";
				}
				if ("object" == typeof e)
					switch (e.$$typeof) {
						case ie:
							return "Context.Consumer";
						case ae:
							return "Context.Provider";
						case le:
							var t = e.render;
							return (
								(t = t.displayName || t.name || ""),
								e.displayName ||
									("" !== t
										? "ForwardRef(" + t + ")"
										: "ForwardRef")
							);
						case de:
							return ge(e.type);
						case pe:
							return ge(e.render);
						case fe:
							if ((e = 1 === e._status ? e._result : null))
								return ge(e);
					}
				return null;
			}
			function he(e) {
				var t = "";
				do {
					e: switch (e.tag) {
						case 3:
						case 4:
						case 6:
						case 7:
						case 10:
						case 9:
							var n = "";
							break e;
						default:
							var r = e._debugOwner,
								o = e._debugSource,
								a = ge(e.type);
							(n = null),
								r && (n = ge(r.type)),
								(r = a),
								(a = ""),
								o
									? (a =
											" (at " +
											o.fileName.replace(X, "") +
											":" +
											o.lineNumber +
											")")
									: n && (a = " (created by " + n + ")"),
								(n = "\n    in " + (r || "Unknown") + a);
					}
					(t += n), (e = e.return);
				} while (e);
				return t;
			}
			function we(e) {
				switch (typeof e) {
					case "boolean":
					case "number":
					case "object":
					case "string":
					case "undefined":
						return e;
					default:
						return "";
				}
			}
			function ve(e) {
				var t = e.type;
				return (
					(e = e.nodeName) &&
					"input" === e.toLowerCase() &&
					("checkbox" === t || "radio" === t)
				);
			}
			function ye(e) {
				e._valueTracker ||
					(e._valueTracker = (function (e) {
						var t = ve(e) ? "checked" : "value",
							n = Object.getOwnPropertyDescriptor(
								e.constructor.prototype,
								t,
							),
							r = "" + e[t];
						if (
							!e.hasOwnProperty(t) &&
							void 0 !== n &&
							"function" == typeof n.get &&
							"function" == typeof n.set
						) {
							var o = n.get,
								a = n.set;
							return (
								Object.defineProperty(e, t, {
									configurable: !0,
									get: function () {
										return o.call(this);
									},
									set: function (e) {
										(r = "" + e), a.call(this, e);
									},
								}),
								Object.defineProperty(e, t, {
									enumerable: n.enumerable,
								}),
								{
									getValue: function () {
										return r;
									},
									setValue: function (e) {
										r = "" + e;
									},
									stopTracking: function () {
										(e._valueTracker = null), delete e[t];
									},
								}
							);
						}
					})(e));
			}
			function ke(e) {
				if (!e) return !1;
				var t = e._valueTracker;
				if (!t) return !0;
				var n = t.getValue(),
					r = "";
				return (
					e && (r = ve(e) ? (e.checked ? "true" : "false") : e.value),
					(e = r) !== n && (t.setValue(e), !0)
				);
			}
			function xe(e, t) {
				var n = t.checked;
				return o({}, t, {
					defaultChecked: void 0,
					defaultValue: void 0,
					value: void 0,
					checked: null != n ? n : e._wrapperState.initialChecked,
				});
			}
			function Ee(e, t) {
				var n = null == t.defaultValue ? "" : t.defaultValue,
					r = null != t.checked ? t.checked : t.defaultChecked;
				(n = we(null != t.value ? t.value : n)),
					(e._wrapperState = {
						initialChecked: r,
						initialValue: n,
						controlled:
							"checkbox" === t.type || "radio" === t.type
								? null != t.checked
								: null != t.value,
					});
			}
			function Se(e, t) {
				null != (t = t.checked) && Y(e, "checked", t, !1);
			}
			function Te(e, t) {
				Se(e, t);
				var n = we(t.value),
					r = t.type;
				if (null != n)
					"number" === r
						? ((0 === n && "" === e.value) || e.value != n) &&
							(e.value = "" + n)
						: e.value !== "" + n && (e.value = "" + n);
				else if ("submit" === r || "reset" === r)
					return void e.removeAttribute("value");
				t.hasOwnProperty("value")
					? Pe(e, t.type, n)
					: t.hasOwnProperty("defaultValue") &&
						Pe(e, t.type, we(t.defaultValue)),
					null == t.checked &&
						null != t.defaultChecked &&
						(e.defaultChecked = !!t.defaultChecked);
			}
			function Ce(e, t, n) {
				if (
					t.hasOwnProperty("value") ||
					t.hasOwnProperty("defaultValue")
				) {
					var r = t.type;
					if (
						!(
							("submit" !== r && "reset" !== r) ||
							(void 0 !== t.value && null !== t.value)
						)
					)
						return;
					(t = "" + e._wrapperState.initialValue),
						n || t === e.value || (e.value = t),
						(e.defaultValue = t);
				}
				"" !== (n = e.name) && (e.name = ""),
					(e.defaultChecked = !!e._wrapperState.initialChecked),
					"" !== n && (e.name = n);
			}
			function Pe(e, t, n) {
				("number" === t && e.ownerDocument.activeElement === e) ||
					(null == n
						? (e.defaultValue = "" + e._wrapperState.initialValue)
						: e.defaultValue !== "" + n &&
							(e.defaultValue = "" + n));
			}
			function Ae(e, t) {
				return (
					(e = o({ children: void 0 }, t)),
					(t = (function (e) {
						var t = "";
						return (
							r.Children.forEach(e, function (e) {
								null != e && (t += e);
							}),
							t
						);
					})(t.children)) && (e.children = t),
					e
				);
			}
			function Oe(e, t, n, r) {
				if (((e = e.options), t)) {
					t = {};
					for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
					for (n = 0; n < e.length; n++)
						(o = t.hasOwnProperty("$" + e[n].value)),
							e[n].selected !== o && (e[n].selected = o),
							o && r && (e[n].defaultSelected = !0);
				} else {
					for (n = "" + we(n), t = null, o = 0; o < e.length; o++) {
						if (e[o].value === n)
							return (
								(e[o].selected = !0),
								void (r && (e[o].defaultSelected = !0))
							);
						null !== t || e[o].disabled || (t = e[o]);
					}
					null !== t && (t.selected = !0);
				}
			}
			function _e(e, t) {
				if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
				return o({}, t, {
					value: void 0,
					defaultValue: void 0,
					children: "" + e._wrapperState.initialValue,
				});
			}
			function Re(e, t) {
				var n = t.value;
				if (null == n) {
					if (((n = t.children), (t = t.defaultValue), null != n)) {
						if (null != t) throw Error(i(92));
						if (Array.isArray(n)) {
							if (!(1 >= n.length)) throw Error(i(93));
							n = n[0];
						}
						t = n;
					}
					null == t && (t = ""), (n = t);
				}
				e._wrapperState = { initialValue: we(n) };
			}
			function Ne(e, t) {
				var n = we(t.value),
					r = we(t.defaultValue);
				null != n &&
					((n = "" + n) !== e.value && (e.value = n),
					null == t.defaultValue &&
						e.defaultValue !== n &&
						(e.defaultValue = n)),
					null != r && (e.defaultValue = "" + r);
			}
			function Le(e) {
				var t = e.textContent;
				t === e._wrapperState.initialValue &&
					"" !== t &&
					null !== t &&
					(e.value = t);
			}
			var Ie = "http://www.w3.org/1999/xhtml",
				De = "http://www.w3.org/2000/svg";
			function Fe(e) {
				switch (e) {
					case "svg":
						return "http://www.w3.org/2000/svg";
					case "math":
						return "http://www.w3.org/1998/Math/MathML";
					default:
						return "http://www.w3.org/1999/xhtml";
				}
			}
			function Me(e, t) {
				return null == e || "http://www.w3.org/1999/xhtml" === e
					? Fe(t)
					: "http://www.w3.org/2000/svg" === e &&
						  "foreignObject" === t
						? "http://www.w3.org/1999/xhtml"
						: e;
			}
			var je,
				Be,
				ze =
					((Be = function (e, t) {
						if (e.namespaceURI !== De || "innerHTML" in e)
							e.innerHTML = t;
						else {
							for (
								(je =
									je ||
									document.createElement("div")).innerHTML =
									"<svg>" + t.valueOf().toString() + "</svg>",
									t = je.firstChild;
								e.firstChild;

							)
								e.removeChild(e.firstChild);
							for (; t.firstChild; ) e.appendChild(t.firstChild);
						}
					}),
					"undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
						? function (e, t, n, r) {
								MSApp.execUnsafeLocalFunction(function () {
									return Be(e, t);
								});
							}
						: Be);
			function Ue(e, t) {
				if (t) {
					var n = e.firstChild;
					if (n && n === e.lastChild && 3 === n.nodeType)
						return void (n.nodeValue = t);
				}
				e.textContent = t;
			}
			function $e(e, t) {
				var n = {};
				return (
					(n[e.toLowerCase()] = t.toLowerCase()),
					(n["Webkit" + e] = "webkit" + t),
					(n["Moz" + e] = "moz" + t),
					n
				);
			}
			var Ge = {
					animationend: $e("Animation", "AnimationEnd"),
					animationiteration: $e("Animation", "AnimationIteration"),
					animationstart: $e("Animation", "AnimationStart"),
					transitionend: $e("Transition", "TransitionEnd"),
				},
				qe = {},
				He = {};
			function We(e) {
				if (qe[e]) return qe[e];
				if (!Ge[e]) return e;
				var t,
					n = Ge[e];
				for (t in n)
					if (n.hasOwnProperty(t) && t in He) return (qe[e] = n[t]);
				return e;
			}
			P &&
				((He = document.createElement("div").style),
				"AnimationEvent" in window ||
					(delete Ge.animationend.animation,
					delete Ge.animationiteration.animation,
					delete Ge.animationstart.animation),
				"TransitionEvent" in window ||
					delete Ge.transitionend.transition);
			var Ve = We("animationend"),
				Ze = We("animationiteration"),
				Ke = We("animationstart"),
				Qe = We("transitionend"),
				Ye =
					"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
						" ",
					),
				Xe = new ("function" == typeof WeakMap ? WeakMap : Map)();
			function Je(e) {
				var t = Xe.get(e);
				return void 0 === t && ((t = new Map()), Xe.set(e, t)), t;
			}
			function et(e) {
				var t = e,
					n = e;
				if (e.alternate) for (; t.return; ) t = t.return;
				else {
					e = t;
					do {
						0 != (1026 & (t = e).effectTag) && (n = t.return),
							(e = t.return);
					} while (e);
				}
				return 3 === t.tag ? n : null;
			}
			function tt(e) {
				if (13 === e.tag) {
					var t = e.memoizedState;
					if (
						(null === t &&
							null !== (e = e.alternate) &&
							(t = e.memoizedState),
						null !== t)
					)
						return t.dehydrated;
				}
				return null;
			}
			function nt(e) {
				if (et(e) !== e) throw Error(i(188));
			}
			function rt(e) {
				if (
					((e = (function (e) {
						var t = e.alternate;
						if (!t) {
							if (null === (t = et(e))) throw Error(i(188));
							return t !== e ? null : e;
						}
						for (var n = e, r = t; ; ) {
							var o = n.return;
							if (null === o) break;
							var a = o.alternate;
							if (null === a) {
								if (null !== (r = o.return)) {
									n = r;
									continue;
								}
								break;
							}
							if (o.child === a.child) {
								for (a = o.child; a; ) {
									if (a === n) return nt(o), e;
									if (a === r) return nt(o), t;
									a = a.sibling;
								}
								throw Error(i(188));
							}
							if (n.return !== r.return) (n = o), (r = a);
							else {
								for (var c = !1, l = o.child; l; ) {
									if (l === n) {
										(c = !0), (n = o), (r = a);
										break;
									}
									if (l === r) {
										(c = !0), (r = o), (n = a);
										break;
									}
									l = l.sibling;
								}
								if (!c) {
									for (l = a.child; l; ) {
										if (l === n) {
											(c = !0), (n = a), (r = o);
											break;
										}
										if (l === r) {
											(c = !0), (r = a), (n = o);
											break;
										}
										l = l.sibling;
									}
									if (!c) throw Error(i(189));
								}
							}
							if (n.alternate !== r) throw Error(i(190));
						}
						if (3 !== n.tag) throw Error(i(188));
						return n.stateNode.current === n ? e : t;
					})(e)),
					!e)
				)
					return null;
				for (var t = e; ; ) {
					if (5 === t.tag || 6 === t.tag) return t;
					if (t.child) (t.child.return = t), (t = t.child);
					else {
						if (t === e) break;
						for (; !t.sibling; ) {
							if (!t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
				}
				return null;
			}
			function ot(e, t) {
				if (null == t) throw Error(i(30));
				return null == e
					? t
					: Array.isArray(e)
						? Array.isArray(t)
							? (e.push.apply(e, t), e)
							: (e.push(t), e)
						: Array.isArray(t)
							? [e].concat(t)
							: [e, t];
			}
			function at(e, t, n) {
				Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
			}
			var it = null;
			function ct(e) {
				if (e) {
					var t = e._dispatchListeners,
						n = e._dispatchInstances;
					if (Array.isArray(t))
						for (
							var r = 0;
							r < t.length && !e.isPropagationStopped();
							r++
						)
							h(e, t[r], n[r]);
					else t && h(e, t, n);
					(e._dispatchListeners = null),
						(e._dispatchInstances = null),
						e.isPersistent() || e.constructor.release(e);
				}
			}
			function lt(e) {
				if (
					(null !== e && (it = ot(it, e)), (e = it), (it = null), e)
				) {
					if ((at(e, ct), it)) throw Error(i(95));
					if (u) throw ((e = d), (u = !1), (d = null), e);
				}
			}
			function st(e) {
				return (
					(e = e.target || e.srcElement || window)
						.correspondingUseElement &&
						(e = e.correspondingUseElement),
					3 === e.nodeType ? e.parentNode : e
				);
			}
			function ut(e) {
				if (!P) return !1;
				var t = (e = "on" + e) in document;
				return (
					t ||
						((t = document.createElement("div")).setAttribute(
							e,
							"return;",
						),
						(t = "function" == typeof t[e])),
					t
				);
			}
			var dt = [];
			function ft(e) {
				(e.topLevelType = null),
					(e.nativeEvent = null),
					(e.targetInst = null),
					(e.ancestors.length = 0),
					10 > dt.length && dt.push(e);
			}
			function pt(e, t, n, r) {
				if (dt.length) {
					var o = dt.pop();
					return (
						(o.topLevelType = e),
						(o.eventSystemFlags = r),
						(o.nativeEvent = t),
						(o.targetInst = n),
						o
					);
				}
				return {
					topLevelType: e,
					eventSystemFlags: r,
					nativeEvent: t,
					targetInst: n,
					ancestors: [],
				};
			}
			function bt(e) {
				var t = e.targetInst,
					n = t;
				do {
					if (!n) {
						e.ancestors.push(n);
						break;
					}
					var r = n;
					if (3 === r.tag) r = r.stateNode.containerInfo;
					else {
						for (; r.return; ) r = r.return;
						r = 3 !== r.tag ? null : r.stateNode.containerInfo;
					}
					if (!r) break;
					(5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n),
						(n = Rn(r));
				} while (n);
				for (n = 0; n < e.ancestors.length; n++) {
					t = e.ancestors[n];
					var o = st(e.nativeEvent);
					r = e.topLevelType;
					var a = e.nativeEvent,
						i = e.eventSystemFlags;
					0 === n && (i |= 64);
					for (var c = null, l = 0; l < x.length; l++) {
						var s = x[l];
						s &&
							(s = s.extractEvents(r, t, a, o, i)) &&
							(c = ot(c, s));
					}
					lt(c);
				}
			}
			function mt(e, t, n) {
				if (!n.has(e)) {
					switch (e) {
						case "scroll":
							Kt(t, "scroll", !0);
							break;
						case "focus":
						case "blur":
							Kt(t, "focus", !0),
								Kt(t, "blur", !0),
								n.set("blur", null),
								n.set("focus", null);
							break;
						case "cancel":
						case "close":
							ut(e) && Kt(t, e, !0);
							break;
						case "invalid":
						case "submit":
						case "reset":
							break;
						default:
							-1 === Ye.indexOf(e) && Zt(e, t);
					}
					n.set(e, null);
				}
			}
			var gt,
				ht,
				wt,
				vt = !1,
				yt = [],
				kt = null,
				xt = null,
				Et = null,
				St = new Map(),
				Tt = new Map(),
				Ct = [],
				Pt =
					"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
						" ",
					),
				At =
					"focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
						" ",
					);
			function Ot(e, t, n, r, o) {
				return {
					blockedOn: e,
					topLevelType: t,
					eventSystemFlags: 32 | n,
					nativeEvent: o,
					container: r,
				};
			}
			function _t(e, t) {
				switch (e) {
					case "focus":
					case "blur":
						kt = null;
						break;
					case "dragenter":
					case "dragleave":
						xt = null;
						break;
					case "mouseover":
					case "mouseout":
						Et = null;
						break;
					case "pointerover":
					case "pointerout":
						St.delete(t.pointerId);
						break;
					case "gotpointercapture":
					case "lostpointercapture":
						Tt.delete(t.pointerId);
				}
			}
			function Rt(e, t, n, r, o, a) {
				return null === e || e.nativeEvent !== a
					? ((e = Ot(t, n, r, o, a)),
						null !== t && null !== (t = Nn(t)) && ht(t),
						e)
					: ((e.eventSystemFlags |= r), e);
			}
			function Nt(e) {
				var t = Rn(e.target);
				if (null !== t) {
					var n = et(t);
					if (null !== n)
						if (13 === (t = n.tag)) {
							if (null !== (t = tt(n)))
								return (
									(e.blockedOn = t),
									void a.unstable_runWithPriority(
										e.priority,
										function () {
											wt(n);
										},
									)
								);
						} else if (3 === t && n.stateNode.hydrate)
							return void (e.blockedOn =
								3 === n.tag ? n.stateNode.containerInfo : null);
				}
				e.blockedOn = null;
			}
			function Lt(e) {
				if (null !== e.blockedOn) return !1;
				var t = Jt(
					e.topLevelType,
					e.eventSystemFlags,
					e.container,
					e.nativeEvent,
				);
				if (null !== t) {
					var n = Nn(t);
					return null !== n && ht(n), (e.blockedOn = t), !1;
				}
				return !0;
			}
			function It(e, t, n) {
				Lt(e) && n.delete(t);
			}
			function Dt() {
				for (vt = !1; 0 < yt.length; ) {
					var e = yt[0];
					if (null !== e.blockedOn) {
						null !== (e = Nn(e.blockedOn)) && gt(e);
						break;
					}
					var t = Jt(
						e.topLevelType,
						e.eventSystemFlags,
						e.container,
						e.nativeEvent,
					);
					null !== t ? (e.blockedOn = t) : yt.shift();
				}
				null !== kt && Lt(kt) && (kt = null),
					null !== xt && Lt(xt) && (xt = null),
					null !== Et && Lt(Et) && (Et = null),
					St.forEach(It),
					Tt.forEach(It);
			}
			function Ft(e, t) {
				e.blockedOn === t &&
					((e.blockedOn = null),
					vt ||
						((vt = !0),
						a.unstable_scheduleCallback(
							a.unstable_NormalPriority,
							Dt,
						)));
			}
			function Mt(e) {
				function t(t) {
					return Ft(t, e);
				}
				if (0 < yt.length) {
					Ft(yt[0], e);
					for (var n = 1; n < yt.length; n++) {
						var r = yt[n];
						r.blockedOn === e && (r.blockedOn = null);
					}
				}
				for (
					null !== kt && Ft(kt, e),
						null !== xt && Ft(xt, e),
						null !== Et && Ft(Et, e),
						St.forEach(t),
						Tt.forEach(t),
						n = 0;
					n < Ct.length;
					n++
				)
					(r = Ct[n]).blockedOn === e && (r.blockedOn = null);
				for (; 0 < Ct.length && null === (n = Ct[0]).blockedOn; )
					Nt(n), null === n.blockedOn && Ct.shift();
			}
			var jt = {},
				Bt = new Map(),
				zt = new Map(),
				Ut = [
					"abort",
					"abort",
					Ve,
					"animationEnd",
					Ze,
					"animationIteration",
					Ke,
					"animationStart",
					"canplay",
					"canPlay",
					"canplaythrough",
					"canPlayThrough",
					"durationchange",
					"durationChange",
					"emptied",
					"emptied",
					"encrypted",
					"encrypted",
					"ended",
					"ended",
					"error",
					"error",
					"gotpointercapture",
					"gotPointerCapture",
					"load",
					"load",
					"loadeddata",
					"loadedData",
					"loadedmetadata",
					"loadedMetadata",
					"loadstart",
					"loadStart",
					"lostpointercapture",
					"lostPointerCapture",
					"playing",
					"playing",
					"progress",
					"progress",
					"seeking",
					"seeking",
					"stalled",
					"stalled",
					"suspend",
					"suspend",
					"timeupdate",
					"timeUpdate",
					Qe,
					"transitionEnd",
					"waiting",
					"waiting",
				];
			function $t(e, t) {
				for (var n = 0; n < e.length; n += 2) {
					var r = e[n],
						o = e[n + 1],
						a = "on" + (o[0].toUpperCase() + o.slice(1));
					(a = {
						phasedRegistrationNames: {
							bubbled: a,
							captured: a + "Capture",
						},
						dependencies: [r],
						eventPriority: t,
					}),
						zt.set(r, t),
						Bt.set(r, a),
						(jt[o] = a);
				}
			}
			$t(
				"blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
					" ",
				),
				0,
			),
				$t(
					"drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
						" ",
					),
					1,
				),
				$t(Ut, 2);
			for (
				var Gt =
						"change selectionchange textInput compositionstart compositionend compositionupdate".split(
							" ",
						),
					qt = 0;
				qt < Gt.length;
				qt++
			)
				zt.set(Gt[qt], 0);
			var Ht = a.unstable_UserBlockingPriority,
				Wt = a.unstable_runWithPriority,
				Vt = !0;
			function Zt(e, t) {
				Kt(t, e, !1);
			}
			function Kt(e, t, n) {
				var r = zt.get(t);
				switch (void 0 === r ? 2 : r) {
					case 0:
						r = Qt.bind(null, t, 1, e);
						break;
					case 1:
						r = Yt.bind(null, t, 1, e);
						break;
					default:
						r = Xt.bind(null, t, 1, e);
				}
				n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
			}
			function Qt(e, t, n, r) {
				j || F();
				var o = Xt,
					a = j;
				j = !0;
				try {
					D(o, e, t, n, r);
				} finally {
					(j = a) || z();
				}
			}
			function Yt(e, t, n, r) {
				Wt(Ht, Xt.bind(null, e, t, n, r));
			}
			function Xt(e, t, n, r) {
				if (Vt)
					if (0 < yt.length && -1 < Pt.indexOf(e))
						(e = Ot(null, e, t, n, r)), yt.push(e);
					else {
						var o = Jt(e, t, n, r);
						if (null === o) _t(e, r);
						else if (-1 < Pt.indexOf(e))
							(e = Ot(o, e, t, n, r)), yt.push(e);
						else if (
							!(function (e, t, n, r, o) {
								switch (t) {
									case "focus":
										return (kt = Rt(kt, e, t, n, r, o)), !0;
									case "dragenter":
										return (xt = Rt(xt, e, t, n, r, o)), !0;
									case "mouseover":
										return (Et = Rt(Et, e, t, n, r, o)), !0;
									case "pointerover":
										var a = o.pointerId;
										return (
											St.set(
												a,
												Rt(
													St.get(a) || null,
													e,
													t,
													n,
													r,
													o,
												),
											),
											!0
										);
									case "gotpointercapture":
										return (
											(a = o.pointerId),
											Tt.set(
												a,
												Rt(
													Tt.get(a) || null,
													e,
													t,
													n,
													r,
													o,
												),
											),
											!0
										);
								}
								return !1;
							})(o, e, t, n, r)
						) {
							_t(e, r), (e = pt(e, r, null, t));
							try {
								U(bt, e);
							} finally {
								ft(e);
							}
						}
					}
			}
			function Jt(e, t, n, r) {
				if (null !== (n = Rn((n = st(r))))) {
					var o = et(n);
					if (null === o) n = null;
					else {
						var a = o.tag;
						if (13 === a) {
							if (null !== (n = tt(o))) return n;
							n = null;
						} else if (3 === a) {
							if (o.stateNode.hydrate)
								return 3 === o.tag
									? o.stateNode.containerInfo
									: null;
							n = null;
						} else o !== n && (n = null);
					}
				}
				e = pt(e, r, n, t);
				try {
					U(bt, e);
				} finally {
					ft(e);
				}
				return null;
			}
			var en = {
					animationIterationCount: !0,
					borderImageOutset: !0,
					borderImageSlice: !0,
					borderImageWidth: !0,
					boxFlex: !0,
					boxFlexGroup: !0,
					boxOrdinalGroup: !0,
					columnCount: !0,
					columns: !0,
					flex: !0,
					flexGrow: !0,
					flexPositive: !0,
					flexShrink: !0,
					flexNegative: !0,
					flexOrder: !0,
					gridArea: !0,
					gridRow: !0,
					gridRowEnd: !0,
					gridRowSpan: !0,
					gridRowStart: !0,
					gridColumn: !0,
					gridColumnEnd: !0,
					gridColumnSpan: !0,
					gridColumnStart: !0,
					fontWeight: !0,
					lineClamp: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					tabSize: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0,
					fillOpacity: !0,
					floodOpacity: !0,
					stopOpacity: !0,
					strokeDasharray: !0,
					strokeDashoffset: !0,
					strokeMiterlimit: !0,
					strokeOpacity: !0,
					strokeWidth: !0,
				},
				tn = ["Webkit", "ms", "Moz", "O"];
			function nn(e, t, n) {
				return null == t || "boolean" == typeof t || "" === t
					? ""
					: n ||
						  "number" != typeof t ||
						  0 === t ||
						  (en.hasOwnProperty(e) && en[e])
						? ("" + t).trim()
						: t + "px";
			}
			function rn(e, t) {
				for (var n in ((e = e.style), t))
					if (t.hasOwnProperty(n)) {
						var r = 0 === n.indexOf("--"),
							o = nn(n, t[n], r);
						"float" === n && (n = "cssFloat"),
							r ? e.setProperty(n, o) : (e[n] = o);
					}
			}
			Object.keys(en).forEach(function (e) {
				tn.forEach(function (t) {
					(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
						(en[t] = en[e]);
				});
			});
			var on = o(
				{ menuitem: !0 },
				{
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0,
				},
			);
			function an(e, t) {
				if (t) {
					if (
						on[e] &&
						(null != t.children ||
							null != t.dangerouslySetInnerHTML)
					)
						throw Error(i(137, e, ""));
					if (null != t.dangerouslySetInnerHTML) {
						if (null != t.children) throw Error(i(60));
						if (
							"object" != typeof t.dangerouslySetInnerHTML ||
							!("__html" in t.dangerouslySetInnerHTML)
						)
							throw Error(i(61));
					}
					if (null != t.style && "object" != typeof t.style)
						throw Error(i(62, ""));
				}
			}
			function cn(e, t) {
				if (-1 === e.indexOf("-")) return "string" == typeof t.is;
				switch (e) {
					case "annotation-xml":
					case "color-profile":
					case "font-face":
					case "font-face-src":
					case "font-face-uri":
					case "font-face-format":
					case "font-face-name":
					case "missing-glyph":
						return !1;
					default:
						return !0;
				}
			}
			var ln = Ie;
			function sn(e, t) {
				var n = Je(
					(e =
						9 === e.nodeType || 11 === e.nodeType
							? e
							: e.ownerDocument),
				);
				t = T[t];
				for (var r = 0; r < t.length; r++) mt(t[r], e, n);
			}
			function un() {}
			function dn(e) {
				if (
					void 0 ===
					(e =
						e ||
						("undefined" != typeof document ? document : void 0))
				)
					return null;
				try {
					return e.activeElement || e.body;
				} catch (t) {
					return e.body;
				}
			}
			function fn(e) {
				for (; e && e.firstChild; ) e = e.firstChild;
				return e;
			}
			function pn(e, t) {
				var n,
					r = fn(e);
				for (e = 0; r; ) {
					if (3 === r.nodeType) {
						if (((n = e + r.textContent.length), e <= t && n >= t))
							return { node: r, offset: t - e };
						e = n;
					}
					e: {
						for (; r; ) {
							if (r.nextSibling) {
								r = r.nextSibling;
								break e;
							}
							r = r.parentNode;
						}
						r = void 0;
					}
					r = fn(r);
				}
			}
			function bn(e, t) {
				return (
					!(!e || !t) &&
					(e === t ||
						((!e || 3 !== e.nodeType) &&
							(t && 3 === t.nodeType
								? bn(e, t.parentNode)
								: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
										!!(16 & e.compareDocumentPosition(t)))))
				);
			}
			function mn() {
				for (
					var e = window, t = dn();
					t instanceof e.HTMLIFrameElement;

				) {
					try {
						var n =
							"string" == typeof t.contentWindow.location.href;
					} catch (r) {
						n = !1;
					}
					if (!n) break;
					t = dn((e = t.contentWindow).document);
				}
				return t;
			}
			function gn(e) {
				var t = e && e.nodeName && e.nodeName.toLowerCase();
				return (
					t &&
					(("input" === t &&
						("text" === e.type ||
							"search" === e.type ||
							"tel" === e.type ||
							"url" === e.type ||
							"password" === e.type)) ||
						"textarea" === t ||
						"true" === e.contentEditable)
				);
			}
			var hn = "$?",
				wn = "$!",
				vn = null,
				yn = null;
			function kn(e, t) {
				switch (e) {
					case "button":
					case "input":
					case "select":
					case "textarea":
						return !!t.autoFocus;
				}
				return !1;
			}
			function xn(e, t) {
				return (
					"textarea" === e ||
					"option" === e ||
					"noscript" === e ||
					"string" == typeof t.children ||
					"number" == typeof t.children ||
					("object" == typeof t.dangerouslySetInnerHTML &&
						null !== t.dangerouslySetInnerHTML &&
						null != t.dangerouslySetInnerHTML.__html)
				);
			}
			var En = "function" == typeof setTimeout ? setTimeout : void 0,
				Sn = "function" == typeof clearTimeout ? clearTimeout : void 0;
			function Tn(e) {
				for (; null != e; e = e.nextSibling) {
					var t = e.nodeType;
					if (1 === t || 3 === t) break;
				}
				return e;
			}
			function Cn(e) {
				e = e.previousSibling;
				for (var t = 0; e; ) {
					if (8 === e.nodeType) {
						var n = e.data;
						if ("$" === n || n === wn || n === hn) {
							if (0 === t) return e;
							t--;
						} else "/$" === n && t++;
					}
					e = e.previousSibling;
				}
				return null;
			}
			var Pn = Math.random().toString(36).slice(2),
				An = "__reactInternalInstance$" + Pn,
				On = "__reactEventHandlers$" + Pn,
				_n = "__reactContainere$" + Pn;
			function Rn(e) {
				var t = e[An];
				if (t) return t;
				for (var n = e.parentNode; n; ) {
					if ((t = n[_n] || n[An])) {
						if (
							((n = t.alternate),
							null !== t.child ||
								(null !== n && null !== n.child))
						)
							for (e = Cn(e); null !== e; ) {
								if ((n = e[An])) return n;
								e = Cn(e);
							}
						return t;
					}
					n = (e = n).parentNode;
				}
				return null;
			}
			function Nn(e) {
				return !(e = e[An] || e[_n]) ||
					(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
					? null
					: e;
			}
			function Ln(e) {
				if (5 === e.tag || 6 === e.tag) return e.stateNode;
				throw Error(i(33));
			}
			function In(e) {
				return e[On] || null;
			}
			function Dn(e) {
				do {
					e = e.return;
				} while (e && 5 !== e.tag);
				return e || null;
			}
			function Fn(e, t) {
				var n = e.stateNode;
				if (!n) return null;
				var r = b(n);
				if (!r) return null;
				n = r[t];
				e: switch (t) {
					case "onClick":
					case "onClickCapture":
					case "onDoubleClick":
					case "onDoubleClickCapture":
					case "onMouseDown":
					case "onMouseDownCapture":
					case "onMouseMove":
					case "onMouseMoveCapture":
					case "onMouseUp":
					case "onMouseUpCapture":
					case "onMouseEnter":
						(r = !r.disabled) ||
							(r = !(
								"button" === (e = e.type) ||
								"input" === e ||
								"select" === e ||
								"textarea" === e
							)),
							(e = !r);
						break e;
					default:
						e = !1;
				}
				if (e) return null;
				if (n && "function" != typeof n)
					throw Error(i(231, t, typeof n));
				return n;
			}
			function Mn(e, t, n) {
				(t = Fn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
					((n._dispatchListeners = ot(n._dispatchListeners, t)),
					(n._dispatchInstances = ot(n._dispatchInstances, e)));
			}
			function jn(e) {
				if (e && e.dispatchConfig.phasedRegistrationNames) {
					for (var t = e._targetInst, n = []; t; )
						n.push(t), (t = Dn(t));
					for (t = n.length; 0 < t--; ) Mn(n[t], "captured", e);
					for (t = 0; t < n.length; t++) Mn(n[t], "bubbled", e);
				}
			}
			function Bn(e, t, n) {
				e &&
					n &&
					n.dispatchConfig.registrationName &&
					(t = Fn(e, n.dispatchConfig.registrationName)) &&
					((n._dispatchListeners = ot(n._dispatchListeners, t)),
					(n._dispatchInstances = ot(n._dispatchInstances, e)));
			}
			function zn(e) {
				e &&
					e.dispatchConfig.registrationName &&
					Bn(e._targetInst, null, e);
			}
			function Un(e) {
				at(e, jn);
			}
			var $n = null,
				Gn = null,
				qn = null;
			function Hn() {
				if (qn) return qn;
				var e,
					t,
					n = Gn,
					r = n.length,
					o = "value" in $n ? $n.value : $n.textContent,
					a = o.length;
				for (e = 0; e < r && n[e] === o[e]; e++);
				var i = r - e;
				for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
				return (qn = o.slice(e, 1 < t ? 1 - t : void 0));
			}
			function Wn() {
				return !0;
			}
			function Vn() {
				return !1;
			}
			function Zn(e, t, n, r) {
				for (var o in ((this.dispatchConfig = e),
				(this._targetInst = t),
				(this.nativeEvent = n),
				(e = this.constructor.Interface)))
					e.hasOwnProperty(o) &&
						((t = e[o])
							? (this[o] = t(n))
							: "target" === o
								? (this.target = r)
								: (this[o] = n[o]));
				return (
					(this.isDefaultPrevented = (
						null != n.defaultPrevented
							? n.defaultPrevented
							: !1 === n.returnValue
					)
						? Wn
						: Vn),
					(this.isPropagationStopped = Vn),
					this
				);
			}
			function Kn(e, t, n, r) {
				if (this.eventPool.length) {
					var o = this.eventPool.pop();
					return this.call(o, e, t, n, r), o;
				}
				return new this(e, t, n, r);
			}
			function Qn(e) {
				if (!(e instanceof this)) throw Error(i(279));
				e.destructor(),
					10 > this.eventPool.length && this.eventPool.push(e);
			}
			function Yn(e) {
				(e.eventPool = []), (e.getPooled = Kn), (e.release = Qn);
			}
			o(Zn.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e &&
						(e.preventDefault
							? e.preventDefault()
							: "unknown" != typeof e.returnValue &&
								(e.returnValue = !1),
						(this.isDefaultPrevented = Wn));
				},
				stopPropagation: function () {
					var e = this.nativeEvent;
					e &&
						(e.stopPropagation
							? e.stopPropagation()
							: "unknown" != typeof e.cancelBubble &&
								(e.cancelBubble = !0),
						(this.isPropagationStopped = Wn));
				},
				persist: function () {
					this.isPersistent = Wn;
				},
				isPersistent: Vn,
				destructor: function () {
					var e,
						t = this.constructor.Interface;
					for (e in t) this[e] = null;
					(this.nativeEvent =
						this._targetInst =
						this.dispatchConfig =
							null),
						(this.isPropagationStopped = this.isDefaultPrevented =
							Vn),
						(this._dispatchInstances = this._dispatchListeners =
							null);
				},
			}),
				(Zn.Interface = {
					type: null,
					target: null,
					currentTarget: function () {
						return null;
					},
					eventPhase: null,
					bubbles: null,
					cancelable: null,
					timeStamp: function (e) {
						return e.timeStamp || Date.now();
					},
					defaultPrevented: null,
					isTrusted: null,
				}),
				(Zn.extend = function (e) {
					function t() {}
					function n() {
						return r.apply(this, arguments);
					}
					var r = this;
					t.prototype = r.prototype;
					var a = new t();
					return (
						o(a, n.prototype),
						(n.prototype = a),
						(n.prototype.constructor = n),
						(n.Interface = o({}, r.Interface, e)),
						(n.extend = r.extend),
						Yn(n),
						n
					);
				}),
				Yn(Zn);
			var Xn = Zn.extend({ data: null }),
				Jn = Zn.extend({ data: null }),
				er = [9, 13, 27, 32],
				tr = P && "CompositionEvent" in window,
				nr = null;
			P && "documentMode" in document && (nr = document.documentMode);
			var rr = P && "TextEvent" in window && !nr,
				or = P && (!tr || (nr && 8 < nr && 11 >= nr)),
				ar = String.fromCharCode(32),
				ir = {
					beforeInput: {
						phasedRegistrationNames: {
							bubbled: "onBeforeInput",
							captured: "onBeforeInputCapture",
						},
						dependencies: [
							"compositionend",
							"keypress",
							"textInput",
							"paste",
						],
					},
					compositionEnd: {
						phasedRegistrationNames: {
							bubbled: "onCompositionEnd",
							captured: "onCompositionEndCapture",
						},
						dependencies:
							"blur compositionend keydown keypress keyup mousedown".split(
								" ",
							),
					},
					compositionStart: {
						phasedRegistrationNames: {
							bubbled: "onCompositionStart",
							captured: "onCompositionStartCapture",
						},
						dependencies:
							"blur compositionstart keydown keypress keyup mousedown".split(
								" ",
							),
					},
					compositionUpdate: {
						phasedRegistrationNames: {
							bubbled: "onCompositionUpdate",
							captured: "onCompositionUpdateCapture",
						},
						dependencies:
							"blur compositionupdate keydown keypress keyup mousedown".split(
								" ",
							),
					},
				},
				cr = !1;
			function lr(e, t) {
				switch (e) {
					case "keyup":
						return -1 !== er.indexOf(t.keyCode);
					case "keydown":
						return 229 !== t.keyCode;
					case "keypress":
					case "mousedown":
					case "blur":
						return !0;
					default:
						return !1;
				}
			}
			function sr(e) {
				return "object" == typeof (e = e.detail) && "data" in e
					? e.data
					: null;
			}
			var ur = !1;
			var dr = {
					eventTypes: ir,
					extractEvents: function (e, t, n, r) {
						var o;
						if (tr)
							e: {
								switch (e) {
									case "compositionstart":
										var a = ir.compositionStart;
										break e;
									case "compositionend":
										a = ir.compositionEnd;
										break e;
									case "compositionupdate":
										a = ir.compositionUpdate;
										break e;
								}
								a = void 0;
							}
						else
							ur
								? lr(e, n) && (a = ir.compositionEnd)
								: "keydown" === e &&
									229 === n.keyCode &&
									(a = ir.compositionStart);
						return (
							a
								? (or &&
										"ko" !== n.locale &&
										(ur || a !== ir.compositionStart
											? a === ir.compositionEnd &&
												ur &&
												(o = Hn())
											: ((Gn =
													"value" in ($n = r)
														? $n.value
														: $n.textContent),
												(ur = !0))),
									(a = Xn.getPooled(a, t, n, r)),
									o
										? (a.data = o)
										: null !== (o = sr(n)) && (a.data = o),
									Un(a),
									(o = a))
								: (o = null),
							(e = rr
								? (function (e, t) {
										switch (e) {
											case "compositionend":
												return sr(t);
											case "keypress":
												return 32 !== t.which
													? null
													: ((cr = !0), ar);
											case "textInput":
												return (e = t.data) === ar && cr
													? null
													: e;
											default:
												return null;
										}
									})(e, n)
								: (function (e, t) {
										if (ur)
											return "compositionend" === e ||
												(!tr && lr(e, t))
												? ((e = Hn()),
													(qn = Gn = $n = null),
													(ur = !1),
													e)
												: null;
										switch (e) {
											default:
												return null;
											case "keypress":
												if (
													!(
														t.ctrlKey ||
														t.altKey ||
														t.metaKey
													) ||
													(t.ctrlKey && t.altKey)
												) {
													if (
														t.char &&
														1 < t.char.length
													)
														return t.char;
													if (t.which)
														return String.fromCharCode(
															t.which,
														);
												}
												return null;
											case "compositionend":
												return or && "ko" !== t.locale
													? null
													: t.data;
										}
									})(e, n))
								? (((t = Jn.getPooled(
										ir.beforeInput,
										t,
										n,
										r,
									)).data = e),
									Un(t))
								: (t = null),
							null === o ? t : null === t ? o : [o, t]
						);
					},
				},
				fr = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
			function pr(e) {
				var t = e && e.nodeName && e.nodeName.toLowerCase();
				return "input" === t ? !!fr[e.type] : "textarea" === t;
			}
			var br = {
				change: {
					phasedRegistrationNames: {
						bubbled: "onChange",
						captured: "onChangeCapture",
					},
					dependencies:
						"blur change click focus input keydown keyup selectionchange".split(
							" ",
						),
				},
			};
			function mr(e, t, n) {
				return (
					((e = Zn.getPooled(br.change, e, t, n)).type = "change"),
					N(n),
					Un(e),
					e
				);
			}
			var gr = null,
				hr = null;
			function wr(e) {
				lt(e);
			}
			function vr(e) {
				if (ke(Ln(e))) return e;
			}
			function yr(e, t) {
				if ("change" === e) return t;
			}
			var kr = !1;
			function xr() {
				gr &&
					(gr.detachEvent("onpropertychange", Er), (hr = gr = null));
			}
			function Er(e) {
				if ("value" === e.propertyName && vr(hr))
					if (((e = mr(hr, e, st(e))), j)) lt(e);
					else {
						j = !0;
						try {
							I(wr, e);
						} finally {
							(j = !1), z();
						}
					}
			}
			function Sr(e, t, n) {
				"focus" === e
					? (xr(),
						(hr = n),
						(gr = t).attachEvent("onpropertychange", Er))
					: "blur" === e && xr();
			}
			function Tr(e) {
				if ("selectionchange" === e || "keyup" === e || "keydown" === e)
					return vr(hr);
			}
			function Cr(e, t) {
				if ("click" === e) return vr(t);
			}
			function Pr(e, t) {
				if ("input" === e || "change" === e) return vr(t);
			}
			P &&
				(kr =
					ut("input") &&
					(!document.documentMode || 9 < document.documentMode));
			var Ar = {
					eventTypes: br,
					_isInputEventSupported: kr,
					extractEvents: function (e, t, n, r) {
						var o = t ? Ln(t) : window,
							a = o.nodeName && o.nodeName.toLowerCase();
						if (
							"select" === a ||
							("input" === a && "file" === o.type)
						)
							var i = yr;
						else if (pr(o))
							if (kr) i = Pr;
							else {
								i = Tr;
								var c = Sr;
							}
						else
							(a = o.nodeName) &&
								"input" === a.toLowerCase() &&
								("checkbox" === o.type || "radio" === o.type) &&
								(i = Cr);
						if (i && (i = i(e, t))) return mr(i, n, r);
						c && c(e, o, t),
							"blur" === e &&
								(e = o._wrapperState) &&
								e.controlled &&
								"number" === o.type &&
								Pe(o, "number", o.value);
					},
				},
				Or = Zn.extend({ view: null, detail: null }),
				_r = {
					Alt: "altKey",
					Control: "ctrlKey",
					Meta: "metaKey",
					Shift: "shiftKey",
				};
			function Rr(e) {
				var t = this.nativeEvent;
				return t.getModifierState
					? t.getModifierState(e)
					: !!(e = _r[e]) && !!t[e];
			}
			function Nr() {
				return Rr;
			}
			var Lr = 0,
				Ir = 0,
				Dr = !1,
				Fr = !1,
				Mr = Or.extend({
					screenX: null,
					screenY: null,
					clientX: null,
					clientY: null,
					pageX: null,
					pageY: null,
					ctrlKey: null,
					shiftKey: null,
					altKey: null,
					metaKey: null,
					getModifierState: Nr,
					button: null,
					buttons: null,
					relatedTarget: function (e) {
						return (
							e.relatedTarget ||
							(e.fromElement === e.srcElement
								? e.toElement
								: e.fromElement)
						);
					},
					movementX: function (e) {
						if ("movementX" in e) return e.movementX;
						var t = Lr;
						return (
							(Lr = e.screenX),
							Dr
								? "mousemove" === e.type
									? e.screenX - t
									: 0
								: ((Dr = !0), 0)
						);
					},
					movementY: function (e) {
						if ("movementY" in e) return e.movementY;
						var t = Ir;
						return (
							(Ir = e.screenY),
							Fr
								? "mousemove" === e.type
									? e.screenY - t
									: 0
								: ((Fr = !0), 0)
						);
					},
				}),
				jr = Mr.extend({
					pointerId: null,
					width: null,
					height: null,
					pressure: null,
					tangentialPressure: null,
					tiltX: null,
					tiltY: null,
					twist: null,
					pointerType: null,
					isPrimary: null,
				}),
				Br = {
					mouseEnter: {
						registrationName: "onMouseEnter",
						dependencies: ["mouseout", "mouseover"],
					},
					mouseLeave: {
						registrationName: "onMouseLeave",
						dependencies: ["mouseout", "mouseover"],
					},
					pointerEnter: {
						registrationName: "onPointerEnter",
						dependencies: ["pointerout", "pointerover"],
					},
					pointerLeave: {
						registrationName: "onPointerLeave",
						dependencies: ["pointerout", "pointerover"],
					},
				},
				zr = {
					eventTypes: Br,
					extractEvents: function (e, t, n, r, o) {
						var a = "mouseover" === e || "pointerover" === e,
							i = "mouseout" === e || "pointerout" === e;
						if (
							(a &&
								0 == (32 & o) &&
								(n.relatedTarget || n.fromElement)) ||
							(!i && !a)
						)
							return null;
						((a =
							r.window === r
								? r
								: (a = r.ownerDocument)
									? a.defaultView || a.parentWindow
									: window),
						i)
							? ((i = t),
								null !==
									(t = (t = n.relatedTarget || n.toElement)
										? Rn(t)
										: null) &&
									(t !== et(t) ||
										(5 !== t.tag && 6 !== t.tag)) &&
									(t = null))
							: (i = null);
						if (i === t) return null;
						if ("mouseout" === e || "mouseover" === e)
							var c = Mr,
								l = Br.mouseLeave,
								s = Br.mouseEnter,
								u = "mouse";
						else
							("pointerout" !== e && "pointerover" !== e) ||
								((c = jr),
								(l = Br.pointerLeave),
								(s = Br.pointerEnter),
								(u = "pointer"));
						if (
							((e = null == i ? a : Ln(i)),
							(a = null == t ? a : Ln(t)),
							((l = c.getPooled(l, i, n, r)).type = u + "leave"),
							(l.target = e),
							(l.relatedTarget = a),
							((n = c.getPooled(s, t, n, r)).type = u + "enter"),
							(n.target = a),
							(n.relatedTarget = e),
							(u = t),
							(r = i) && u)
						)
							e: {
								for (s = u, i = 0, e = c = r; e; e = Dn(e)) i++;
								for (e = 0, t = s; t; t = Dn(t)) e++;
								for (; 0 < i - e; ) (c = Dn(c)), i--;
								for (; 0 < e - i; ) (s = Dn(s)), e--;
								for (; i--; ) {
									if (c === s || c === s.alternate) break e;
									(c = Dn(c)), (s = Dn(s));
								}
								c = null;
							}
						else c = null;
						for (
							s = c, c = [];
							r &&
							r !== s &&
							(null === (i = r.alternate) || i !== s);

						)
							c.push(r), (r = Dn(r));
						for (
							r = [];
							u &&
							u !== s &&
							(null === (i = u.alternate) || i !== s);

						)
							r.push(u), (u = Dn(u));
						for (u = 0; u < c.length; u++) Bn(c[u], "bubbled", l);
						for (u = r.length; 0 < u--; ) Bn(r[u], "captured", n);
						return 0 == (64 & o) ? [l] : [l, n];
					},
				};
			var Ur =
					"function" == typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e == 1 / t)) ||
									(e != e && t != t)
								);
							},
				$r = Object.prototype.hasOwnProperty;
			function Gr(e, t) {
				if (Ur(e, t)) return !0;
				if (
					"object" != typeof e ||
					null === e ||
					"object" != typeof t ||
					null === t
				)
					return !1;
				var n = Object.keys(e),
					r = Object.keys(t);
				if (n.length !== r.length) return !1;
				for (r = 0; r < n.length; r++)
					if (!$r.call(t, n[r]) || !Ur(e[n[r]], t[n[r]])) return !1;
				return !0;
			}
			var qr =
					P &&
					"documentMode" in document &&
					11 >= document.documentMode,
				Hr = {
					select: {
						phasedRegistrationNames: {
							bubbled: "onSelect",
							captured: "onSelectCapture",
						},
						dependencies:
							"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
								" ",
							),
					},
				},
				Wr = null,
				Vr = null,
				Zr = null,
				Kr = !1;
			function Qr(e, t) {
				var n =
					t.window === t
						? t.document
						: 9 === t.nodeType
							? t
							: t.ownerDocument;
				return Kr || null == Wr || Wr !== dn(n)
					? null
					: ("selectionStart" in (n = Wr) && gn(n)
							? (n = {
									start: n.selectionStart,
									end: n.selectionEnd,
								})
							: (n = {
									anchorNode: (n = (
										(n.ownerDocument &&
											n.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: n.anchorOffset,
									focusNode: n.focusNode,
									focusOffset: n.focusOffset,
								}),
						Zr && Gr(Zr, n)
							? null
							: ((Zr = n),
								((e = Zn.getPooled(Hr.select, Vr, e, t)).type =
									"select"),
								(e.target = Wr),
								Un(e),
								e));
			}
			var Yr = {
					eventTypes: Hr,
					extractEvents: function (e, t, n, r, o, a) {
						if (
							!(a = !(o =
								a ||
								(r.window === r
									? r.document
									: 9 === r.nodeType
										? r
										: r.ownerDocument)))
						) {
							e: {
								(o = Je(o)), (a = T.onSelect);
								for (var i = 0; i < a.length; i++)
									if (!o.has(a[i])) {
										o = !1;
										break e;
									}
								o = !0;
							}
							a = !o;
						}
						if (a) return null;
						switch (((o = t ? Ln(t) : window), e)) {
							case "focus":
								(pr(o) || "true" === o.contentEditable) &&
									((Wr = o), (Vr = t), (Zr = null));
								break;
							case "blur":
								Zr = Vr = Wr = null;
								break;
							case "mousedown":
								Kr = !0;
								break;
							case "contextmenu":
							case "mouseup":
							case "dragend":
								return (Kr = !1), Qr(n, r);
							case "selectionchange":
								if (qr) break;
							case "keydown":
							case "keyup":
								return Qr(n, r);
						}
						return null;
					},
				},
				Xr = Zn.extend({
					animationName: null,
					elapsedTime: null,
					pseudoElement: null,
				}),
				Jr = Zn.extend({
					clipboardData: function (e) {
						return "clipboardData" in e
							? e.clipboardData
							: window.clipboardData;
					},
				}),
				eo = Or.extend({ relatedTarget: null });
			function to(e) {
				var t = e.keyCode;
				return (
					"charCode" in e
						? 0 === (e = e.charCode) && 13 === t && (e = 13)
						: (e = t),
					10 === e && (e = 13),
					32 <= e || 13 === e ? e : 0
				);
			}
			var no = {
					Esc: "Escape",
					Spacebar: " ",
					Left: "ArrowLeft",
					Up: "ArrowUp",
					Right: "ArrowRight",
					Down: "ArrowDown",
					Del: "Delete",
					Win: "OS",
					Menu: "ContextMenu",
					Apps: "ContextMenu",
					Scroll: "ScrollLock",
					MozPrintableKey: "Unidentified",
				},
				ro = {
					8: "Backspace",
					9: "Tab",
					12: "Clear",
					13: "Enter",
					16: "Shift",
					17: "Control",
					18: "Alt",
					19: "Pause",
					20: "CapsLock",
					27: "Escape",
					32: " ",
					33: "PageUp",
					34: "PageDown",
					35: "End",
					36: "Home",
					37: "ArrowLeft",
					38: "ArrowUp",
					39: "ArrowRight",
					40: "ArrowDown",
					45: "Insert",
					46: "Delete",
					112: "F1",
					113: "F2",
					114: "F3",
					115: "F4",
					116: "F5",
					117: "F6",
					118: "F7",
					119: "F8",
					120: "F9",
					121: "F10",
					122: "F11",
					123: "F12",
					144: "NumLock",
					145: "ScrollLock",
					224: "Meta",
				},
				oo = Or.extend({
					key: function (e) {
						if (e.key) {
							var t = no[e.key] || e.key;
							if ("Unidentified" !== t) return t;
						}
						return "keypress" === e.type
							? 13 === (e = to(e))
								? "Enter"
								: String.fromCharCode(e)
							: "keydown" === e.type || "keyup" === e.type
								? ro[e.keyCode] || "Unidentified"
								: "";
					},
					location: null,
					ctrlKey: null,
					shiftKey: null,
					altKey: null,
					metaKey: null,
					repeat: null,
					locale: null,
					getModifierState: Nr,
					charCode: function (e) {
						return "keypress" === e.type ? to(e) : 0;
					},
					keyCode: function (e) {
						return "keydown" === e.type || "keyup" === e.type
							? e.keyCode
							: 0;
					},
					which: function (e) {
						return "keypress" === e.type
							? to(e)
							: "keydown" === e.type || "keyup" === e.type
								? e.keyCode
								: 0;
					},
				}),
				ao = Mr.extend({ dataTransfer: null }),
				io = Or.extend({
					touches: null,
					targetTouches: null,
					changedTouches: null,
					altKey: null,
					metaKey: null,
					ctrlKey: null,
					shiftKey: null,
					getModifierState: Nr,
				}),
				co = Zn.extend({
					propertyName: null,
					elapsedTime: null,
					pseudoElement: null,
				}),
				lo = Mr.extend({
					deltaX: function (e) {
						return "deltaX" in e
							? e.deltaX
							: "wheelDeltaX" in e
								? -e.wheelDeltaX
								: 0;
					},
					deltaY: function (e) {
						return "deltaY" in e
							? e.deltaY
							: "wheelDeltaY" in e
								? -e.wheelDeltaY
								: "wheelDelta" in e
									? -e.wheelDelta
									: 0;
					},
					deltaZ: null,
					deltaMode: null,
				}),
				so = {
					eventTypes: jt,
					extractEvents: function (e, t, n, r) {
						var o = Bt.get(e);
						if (!o) return null;
						switch (e) {
							case "keypress":
								if (0 === to(n)) return null;
							case "keydown":
							case "keyup":
								e = oo;
								break;
							case "blur":
							case "focus":
								e = eo;
								break;
							case "click":
								if (2 === n.button) return null;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								e = Mr;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								e = ao;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								e = io;
								break;
							case Ve:
							case Ze:
							case Ke:
								e = Xr;
								break;
							case Qe:
								e = co;
								break;
							case "scroll":
								e = Or;
								break;
							case "wheel":
								e = lo;
								break;
							case "copy":
							case "cut":
							case "paste":
								e = Jr;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup":
								e = jr;
								break;
							default:
								e = Zn;
						}
						return Un((t = e.getPooled(o, t, n, r))), t;
					},
				};
			if (w) throw Error(i(101));
			(w = Array.prototype.slice.call(
				"ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
					" ",
				),
			)),
				y(),
				(b = In),
				(m = Nn),
				(g = Ln),
				C({
					SimpleEventPlugin: so,
					EnterLeaveEventPlugin: zr,
					ChangeEventPlugin: Ar,
					SelectEventPlugin: Yr,
					BeforeInputEventPlugin: dr,
				});
			var uo = [],
				fo = -1;
			function po(e) {
				0 > fo || ((e.current = uo[fo]), (uo[fo] = null), fo--);
			}
			function bo(e, t) {
				fo++, (uo[fo] = e.current), (e.current = t);
			}
			var mo = {},
				go = { current: mo },
				ho = { current: !1 },
				wo = mo;
			function vo(e, t) {
				var n = e.type.contextTypes;
				if (!n) return mo;
				var r = e.stateNode;
				if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
					return r.__reactInternalMemoizedMaskedChildContext;
				var o,
					a = {};
				for (o in n) a[o] = t[o];
				return (
					r &&
						(((e =
							e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
							t),
						(e.__reactInternalMemoizedMaskedChildContext = a)),
					a
				);
			}
			function yo(e) {
				return null != (e = e.childContextTypes);
			}
			function ko() {
				po(ho), po(go);
			}
			function xo(e, t, n) {
				if (go.current !== mo) throw Error(i(168));
				bo(go, t), bo(ho, n);
			}
			function Eo(e, t, n) {
				var r = e.stateNode;
				if (
					((e = t.childContextTypes),
					"function" != typeof r.getChildContext)
				)
					return n;
				for (var a in (r = r.getChildContext()))
					if (!(a in e)) throw Error(i(108, ge(t) || "Unknown", a));
				return o({}, n, {}, r);
			}
			function So(e) {
				return (
					(e =
						((e = e.stateNode) &&
							e.__reactInternalMemoizedMergedChildContext) ||
						mo),
					(wo = go.current),
					bo(go, e),
					bo(ho, ho.current),
					!0
				);
			}
			function To(e, t, n) {
				var r = e.stateNode;
				if (!r) throw Error(i(169));
				n
					? ((e = Eo(e, t, wo)),
						(r.__reactInternalMemoizedMergedChildContext = e),
						po(ho),
						po(go),
						bo(go, e))
					: po(ho),
					bo(ho, n);
			}
			var Co = a.unstable_runWithPriority,
				Po = a.unstable_scheduleCallback,
				Ao = a.unstable_cancelCallback,
				Oo = a.unstable_requestPaint,
				_o = a.unstable_now,
				Ro = a.unstable_getCurrentPriorityLevel,
				No = a.unstable_ImmediatePriority,
				Lo = a.unstable_UserBlockingPriority,
				Io = a.unstable_NormalPriority,
				Do = a.unstable_LowPriority,
				Fo = a.unstable_IdlePriority,
				Mo = {},
				jo = a.unstable_shouldYield,
				Bo = void 0 !== Oo ? Oo : function () {},
				zo = null,
				Uo = null,
				$o = !1,
				Go = _o(),
				qo =
					1e4 > Go
						? _o
						: function () {
								return _o() - Go;
							};
			function Ho() {
				switch (Ro()) {
					case No:
						return 99;
					case Lo:
						return 98;
					case Io:
						return 97;
					case Do:
						return 96;
					case Fo:
						return 95;
					default:
						throw Error(i(332));
				}
			}
			function Wo(e) {
				switch (e) {
					case 99:
						return No;
					case 98:
						return Lo;
					case 97:
						return Io;
					case 96:
						return Do;
					case 95:
						return Fo;
					default:
						throw Error(i(332));
				}
			}
			function Vo(e, t) {
				return (e = Wo(e)), Co(e, t);
			}
			function Zo(e, t, n) {
				return (e = Wo(e)), Po(e, t, n);
			}
			function Ko(e) {
				return (
					null === zo ? ((zo = [e]), (Uo = Po(No, Yo))) : zo.push(e),
					Mo
				);
			}
			function Qo() {
				if (null !== Uo) {
					var e = Uo;
					(Uo = null), Ao(e);
				}
				Yo();
			}
			function Yo() {
				if (!$o && null !== zo) {
					$o = !0;
					var e = 0;
					try {
						var t = zo;
						Vo(99, function () {
							for (; e < t.length; e++) {
								var n = t[e];
								do {
									n = n(!0);
								} while (null !== n);
							}
						}),
							(zo = null);
					} catch (n) {
						throw (
							(null !== zo && (zo = zo.slice(e + 1)),
							Po(No, Qo),
							n)
						);
					} finally {
						$o = !1;
					}
				}
			}
			function Xo(e, t, n) {
				return (
					1073741821 -
					(1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
				);
			}
			function Jo(e, t) {
				if (e && e.defaultProps)
					for (var n in ((t = o({}, t)), (e = e.defaultProps)))
						void 0 === t[n] && (t[n] = e[n]);
				return t;
			}
			var ea = { current: null },
				ta = null,
				na = null,
				ra = null;
			function oa() {
				ra = na = ta = null;
			}
			function aa(e) {
				var t = ea.current;
				po(ea), (e.type._context._currentValue = t);
			}
			function ia(e, t) {
				for (; null !== e; ) {
					var n = e.alternate;
					if (e.childExpirationTime < t)
						(e.childExpirationTime = t),
							null !== n &&
								n.childExpirationTime < t &&
								(n.childExpirationTime = t);
					else {
						if (!(null !== n && n.childExpirationTime < t)) break;
						n.childExpirationTime = t;
					}
					e = e.return;
				}
			}
			function ca(e, t) {
				(ta = e),
					(ra = na = null),
					null !== (e = e.dependencies) &&
						null !== e.firstContext &&
						(e.expirationTime >= t && (Ii = !0),
						(e.firstContext = null));
			}
			function la(e, t) {
				if (ra !== e && !1 !== t && 0 !== t)
					if (
						(("number" == typeof t && 1073741823 !== t) ||
							((ra = e), (t = 1073741823)),
						(t = { context: e, observedBits: t, next: null }),
						null === na)
					) {
						if (null === ta) throw Error(i(308));
						(na = t),
							(ta.dependencies = {
								expirationTime: 0,
								firstContext: t,
								responders: null,
							});
					} else na = na.next = t;
				return e._currentValue;
			}
			var sa = !1;
			function ua(e) {
				e.updateQueue = {
					baseState: e.memoizedState,
					baseQueue: null,
					shared: { pending: null },
					effects: null,
				};
			}
			function da(e, t) {
				(e = e.updateQueue),
					t.updateQueue === e &&
						(t.updateQueue = {
							baseState: e.baseState,
							baseQueue: e.baseQueue,
							shared: e.shared,
							effects: e.effects,
						});
			}
			function fa(e, t) {
				return ((e = {
					expirationTime: e,
					suspenseConfig: t,
					tag: 0,
					payload: null,
					callback: null,
					next: null,
				}).next = e);
			}
			function pa(e, t) {
				if (null !== (e = e.updateQueue)) {
					var n = (e = e.shared).pending;
					null === n
						? (t.next = t)
						: ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
			}
			function ba(e, t) {
				var n = e.alternate;
				null !== n && da(n, e),
					null === (n = (e = e.updateQueue).baseQueue)
						? ((e.baseQueue = t.next = t), (t.next = t))
						: ((t.next = n.next), (n.next = t));
			}
			function ma(e, t, n, r) {
				var a = e.updateQueue;
				sa = !1;
				var i = a.baseQueue,
					c = a.shared.pending;
				if (null !== c) {
					if (null !== i) {
						var l = i.next;
						(i.next = c.next), (c.next = l);
					}
					(i = c),
						(a.shared.pending = null),
						null !== (l = e.alternate) &&
							null !== (l = l.updateQueue) &&
							(l.baseQueue = c);
				}
				if (null !== i) {
					l = i.next;
					var s = a.baseState,
						u = 0,
						d = null,
						f = null,
						p = null;
					if (null !== l)
						for (var b = l; ; ) {
							if ((c = b.expirationTime) < r) {
								var m = {
									expirationTime: b.expirationTime,
									suspenseConfig: b.suspenseConfig,
									tag: b.tag,
									payload: b.payload,
									callback: b.callback,
									next: null,
								};
								null === p
									? ((f = p = m), (d = s))
									: (p = p.next = m),
									c > u && (u = c);
							} else {
								null !== p &&
									(p = p.next =
										{
											expirationTime: 1073741823,
											suspenseConfig: b.suspenseConfig,
											tag: b.tag,
											payload: b.payload,
											callback: b.callback,
											next: null,
										}),
									pl(c, b.suspenseConfig);
								e: {
									var g = e,
										h = b;
									switch (((c = t), (m = n), h.tag)) {
										case 1:
											if (
												"function" ==
												typeof (g = h.payload)
											) {
												s = g.call(m, s, c);
												break e;
											}
											s = g;
											break e;
										case 3:
											g.effectTag =
												(-4097 & g.effectTag) | 64;
										case 0:
											if (
												null ==
												(c =
													"function" ==
													typeof (g = h.payload)
														? g.call(m, s, c)
														: g)
											)
												break e;
											s = o({}, s, c);
											break e;
										case 2:
											sa = !0;
									}
								}
								null !== b.callback &&
									((e.effectTag |= 32),
									null === (c = a.effects)
										? (a.effects = [b])
										: c.push(b));
							}
							if (null === (b = b.next) || b === l) {
								if (null === (c = a.shared.pending)) break;
								(b = i.next = c.next),
									(c.next = l),
									(a.baseQueue = i = c),
									(a.shared.pending = null);
							}
						}
					null === p ? (d = s) : (p.next = f),
						(a.baseState = d),
						(a.baseQueue = p),
						bl(u),
						(e.expirationTime = u),
						(e.memoizedState = s);
				}
			}
			function ga(e, t, n) {
				if (((e = t.effects), (t.effects = null), null !== e))
					for (t = 0; t < e.length; t++) {
						var r = e[t],
							o = r.callback;
						if (null !== o) {
							if (
								((r.callback = null),
								(r = o),
								(o = n),
								"function" != typeof r)
							)
								throw Error(i(191, r));
							r.call(o);
						}
					}
			}
			var ha = Q.ReactCurrentBatchConfig,
				wa = new r.Component().refs;
			function va(e, t, n, r) {
				(n =
					null == (n = n(r, (t = e.memoizedState)))
						? t
						: o({}, t, n)),
					(e.memoizedState = n),
					0 === e.expirationTime && (e.updateQueue.baseState = n);
			}
			var ya = {
				isMounted: function (e) {
					return !!(e = e._reactInternalFiber) && et(e) === e;
				},
				enqueueSetState: function (e, t, n) {
					e = e._reactInternalFiber;
					var r = el(),
						o = ha.suspense;
					((o = fa((r = tl(r, e, o)), o)).payload = t),
						null != n && (o.callback = n),
						pa(e, o),
						nl(e, r);
				},
				enqueueReplaceState: function (e, t, n) {
					e = e._reactInternalFiber;
					var r = el(),
						o = ha.suspense;
					((o = fa((r = tl(r, e, o)), o)).tag = 1),
						(o.payload = t),
						null != n && (o.callback = n),
						pa(e, o),
						nl(e, r);
				},
				enqueueForceUpdate: function (e, t) {
					e = e._reactInternalFiber;
					var n = el(),
						r = ha.suspense;
					((r = fa((n = tl(n, e, r)), r)).tag = 2),
						null != t && (r.callback = t),
						pa(e, r),
						nl(e, n);
				},
			};
			function ka(e, t, n, r, o, a, i) {
				return "function" ==
					typeof (e = e.stateNode).shouldComponentUpdate
					? e.shouldComponentUpdate(r, a, i)
					: !t.prototype ||
							!t.prototype.isPureReactComponent ||
							!Gr(n, r) ||
							!Gr(o, a);
			}
			function xa(e, t, n) {
				var r = !1,
					o = mo,
					a = t.contextType;
				return (
					"object" == typeof a && null !== a
						? (a = la(a))
						: ((o = yo(t) ? wo : go.current),
							(a = (r = null != (r = t.contextTypes))
								? vo(e, o)
								: mo)),
					(t = new t(n, a)),
					(e.memoizedState =
						null !== t.state && void 0 !== t.state
							? t.state
							: null),
					(t.updater = ya),
					(e.stateNode = t),
					(t._reactInternalFiber = e),
					r &&
						(((e =
							e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
							o),
						(e.__reactInternalMemoizedMaskedChildContext = a)),
					t
				);
			}
			function Ea(e, t, n, r) {
				(e = t.state),
					"function" == typeof t.componentWillReceiveProps &&
						t.componentWillReceiveProps(n, r),
					"function" == typeof t.UNSAFE_componentWillReceiveProps &&
						t.UNSAFE_componentWillReceiveProps(n, r),
					t.state !== e && ya.enqueueReplaceState(t, t.state, null);
			}
			function Sa(e, t, n, r) {
				var o = e.stateNode;
				(o.props = n),
					(o.state = e.memoizedState),
					(o.refs = wa),
					ua(e);
				var a = t.contextType;
				"object" == typeof a && null !== a
					? (o.context = la(a))
					: ((a = yo(t) ? wo : go.current), (o.context = vo(e, a))),
					ma(e, n, o, r),
					(o.state = e.memoizedState),
					"function" == typeof (a = t.getDerivedStateFromProps) &&
						(va(e, t, a, n), (o.state = e.memoizedState)),
					"function" == typeof t.getDerivedStateFromProps ||
						"function" == typeof o.getSnapshotBeforeUpdate ||
						("function" != typeof o.UNSAFE_componentWillMount &&
							"function" != typeof o.componentWillMount) ||
						((t = o.state),
						"function" == typeof o.componentWillMount &&
							o.componentWillMount(),
						"function" == typeof o.UNSAFE_componentWillMount &&
							o.UNSAFE_componentWillMount(),
						t !== o.state &&
							ya.enqueueReplaceState(o, o.state, null),
						ma(e, n, o, r),
						(o.state = e.memoizedState)),
					"function" == typeof o.componentDidMount &&
						(e.effectTag |= 4);
			}
			var Ta = Array.isArray;
			function Ca(e, t, n) {
				if (
					null !== (e = n.ref) &&
					"function" != typeof e &&
					"object" != typeof e
				) {
					if (n._owner) {
						if ((n = n._owner)) {
							if (1 !== n.tag) throw Error(i(309));
							var r = n.stateNode;
						}
						if (!r) throw Error(i(147, e));
						var o = "" + e;
						return null !== t &&
							null !== t.ref &&
							"function" == typeof t.ref &&
							t.ref._stringRef === o
							? t.ref
							: ((t = function (e) {
									var t = r.refs;
									t === wa && (t = r.refs = {}),
										null === e ? delete t[o] : (t[o] = e);
								}),
								(t._stringRef = o),
								t);
					}
					if ("string" != typeof e) throw Error(i(284));
					if (!n._owner) throw Error(i(290, e));
				}
				return e;
			}
			function Pa(e, t) {
				if ("textarea" !== e.type)
					throw Error(
						i(
							31,
							"[object Object]" ===
								Object.prototype.toString.call(t)
								? "object with keys {" +
										Object.keys(t).join(", ") +
										"}"
								: t,
							"",
						),
					);
			}
			function Aa(e) {
				function t(t, n) {
					if (e) {
						var r = t.lastEffect;
						null !== r
							? ((r.nextEffect = n), (t.lastEffect = n))
							: (t.firstEffect = t.lastEffect = n),
							(n.nextEffect = null),
							(n.effectTag = 8);
					}
				}
				function n(n, r) {
					if (!e) return null;
					for (; null !== r; ) t(n, r), (r = r.sibling);
					return null;
				}
				function r(e, t) {
					for (e = new Map(); null !== t; )
						null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
							(t = t.sibling);
					return e;
				}
				function o(e, t) {
					return ((e = Il(e, t)).index = 0), (e.sibling = null), e;
				}
				function a(t, n, r) {
					return (
						(t.index = r),
						e
							? null !== (r = t.alternate)
								? (r = r.index) < n
									? ((t.effectTag = 2), n)
									: r
								: ((t.effectTag = 2), n)
							: n
					);
				}
				function c(t) {
					return e && null === t.alternate && (t.effectTag = 2), t;
				}
				function l(e, t, n, r) {
					return null === t || 6 !== t.tag
						? (((t = Ml(n, e.mode, r)).return = e), t)
						: (((t = o(t, n)).return = e), t);
				}
				function s(e, t, n, r) {
					return null !== t && t.elementType === n.type
						? (((r = o(t, n.props)).ref = Ca(e, t, n)),
							(r.return = e),
							r)
						: (((r = Dl(
								n.type,
								n.key,
								n.props,
								null,
								e.mode,
								r,
							)).ref = Ca(e, t, n)),
							(r.return = e),
							r);
				}
				function u(e, t, n, r) {
					return null === t ||
						4 !== t.tag ||
						t.stateNode.containerInfo !== n.containerInfo ||
						t.stateNode.implementation !== n.implementation
						? (((t = jl(n, e.mode, r)).return = e), t)
						: (((t = o(t, n.children || [])).return = e), t);
				}
				function d(e, t, n, r, a) {
					return null === t || 7 !== t.tag
						? (((t = Fl(n, e.mode, r, a)).return = e), t)
						: (((t = o(t, n)).return = e), t);
				}
				function f(e, t, n) {
					if ("string" == typeof t || "number" == typeof t)
						return ((t = Ml("" + t, e.mode, n)).return = e), t;
					if ("object" == typeof t && null !== t) {
						switch (t.$$typeof) {
							case ee:
								return (
									((n = Dl(
										t.type,
										t.key,
										t.props,
										null,
										e.mode,
										n,
									)).ref = Ca(e, null, t)),
									(n.return = e),
									n
								);
							case te:
								return ((t = jl(t, e.mode, n)).return = e), t;
						}
						if (Ta(t) || me(t))
							return ((t = Fl(t, e.mode, n, null)).return = e), t;
						Pa(e, t);
					}
					return null;
				}
				function p(e, t, n, r) {
					var o = null !== t ? t.key : null;
					if ("string" == typeof n || "number" == typeof n)
						return null !== o ? null : l(e, t, "" + n, r);
					if ("object" == typeof n && null !== n) {
						switch (n.$$typeof) {
							case ee:
								return n.key === o
									? n.type === ne
										? d(e, t, n.props.children, r, o)
										: s(e, t, n, r)
									: null;
							case te:
								return n.key === o ? u(e, t, n, r) : null;
						}
						if (Ta(n) || me(n))
							return null !== o ? null : d(e, t, n, r, null);
						Pa(e, n);
					}
					return null;
				}
				function b(e, t, n, r, o) {
					if ("string" == typeof r || "number" == typeof r)
						return l(t, (e = e.get(n) || null), "" + r, o);
					if ("object" == typeof r && null !== r) {
						switch (r.$$typeof) {
							case ee:
								return (
									(e =
										e.get(null === r.key ? n : r.key) ||
										null),
									r.type === ne
										? d(t, e, r.props.children, o, r.key)
										: s(t, e, r, o)
								);
							case te:
								return u(
									t,
									(e =
										e.get(null === r.key ? n : r.key) ||
										null),
									r,
									o,
								);
						}
						if (Ta(r) || me(r))
							return d(t, (e = e.get(n) || null), r, o, null);
						Pa(t, r);
					}
					return null;
				}
				function m(o, i, c, l) {
					for (
						var s = null, u = null, d = i, m = (i = 0), g = null;
						null !== d && m < c.length;
						m++
					) {
						d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
						var h = p(o, d, c[m], l);
						if (null === h) {
							null === d && (d = g);
							break;
						}
						e && d && null === h.alternate && t(o, d),
							(i = a(h, i, m)),
							null === u ? (s = h) : (u.sibling = h),
							(u = h),
							(d = g);
					}
					if (m === c.length) return n(o, d), s;
					if (null === d) {
						for (; m < c.length; m++)
							null !== (d = f(o, c[m], l)) &&
								((i = a(d, i, m)),
								null === u ? (s = d) : (u.sibling = d),
								(u = d));
						return s;
					}
					for (d = r(o, d); m < c.length; m++)
						null !== (g = b(d, o, m, c[m], l)) &&
							(e &&
								null !== g.alternate &&
								d.delete(null === g.key ? m : g.key),
							(i = a(g, i, m)),
							null === u ? (s = g) : (u.sibling = g),
							(u = g));
					return (
						e &&
							d.forEach(function (e) {
								return t(o, e);
							}),
						s
					);
				}
				function g(o, c, l, s) {
					var u = me(l);
					if ("function" != typeof u) throw Error(i(150));
					if (null == (l = u.call(l))) throw Error(i(151));
					for (
						var d = (u = null),
							m = c,
							g = (c = 0),
							h = null,
							w = l.next();
						null !== m && !w.done;
						g++, w = l.next()
					) {
						m.index > g ? ((h = m), (m = null)) : (h = m.sibling);
						var v = p(o, m, w.value, s);
						if (null === v) {
							null === m && (m = h);
							break;
						}
						e && m && null === v.alternate && t(o, m),
							(c = a(v, c, g)),
							null === d ? (u = v) : (d.sibling = v),
							(d = v),
							(m = h);
					}
					if (w.done) return n(o, m), u;
					if (null === m) {
						for (; !w.done; g++, w = l.next())
							null !== (w = f(o, w.value, s)) &&
								((c = a(w, c, g)),
								null === d ? (u = w) : (d.sibling = w),
								(d = w));
						return u;
					}
					for (m = r(o, m); !w.done; g++, w = l.next())
						null !== (w = b(m, o, g, w.value, s)) &&
							(e &&
								null !== w.alternate &&
								m.delete(null === w.key ? g : w.key),
							(c = a(w, c, g)),
							null === d ? (u = w) : (d.sibling = w),
							(d = w));
					return (
						e &&
							m.forEach(function (e) {
								return t(o, e);
							}),
						u
					);
				}
				return function (e, r, a, l) {
					var s =
						"object" == typeof a &&
						null !== a &&
						a.type === ne &&
						null === a.key;
					s && (a = a.props.children);
					var u = "object" == typeof a && null !== a;
					if (u)
						switch (a.$$typeof) {
							case ee:
								e: {
									for (u = a.key, s = r; null !== s; ) {
										if (s.key === u) {
											if (7 === s.tag) {
												if (a.type === ne) {
													n(e, s.sibling),
														((r = o(
															s,
															a.props.children,
														)).return = e),
														(e = r);
													break e;
												}
											} else if (
												s.elementType === a.type
											) {
												n(e, s.sibling),
													((r = o(s, a.props)).ref =
														Ca(e, s, a)),
													(r.return = e),
													(e = r);
												break e;
											}
											n(e, s);
											break;
										}
										t(e, s), (s = s.sibling);
									}
									a.type === ne
										? (((r = Fl(
												a.props.children,
												e.mode,
												l,
												a.key,
											)).return = e),
											(e = r))
										: (((l = Dl(
												a.type,
												a.key,
												a.props,
												null,
												e.mode,
												l,
											)).ref = Ca(e, r, a)),
											(l.return = e),
											(e = l));
								}
								return c(e);
							case te:
								e: {
									for (s = a.key; null !== r; ) {
										if (r.key === s) {
											if (
												4 === r.tag &&
												r.stateNode.containerInfo ===
													a.containerInfo &&
												r.stateNode.implementation ===
													a.implementation
											) {
												n(e, r.sibling),
													((r = o(
														r,
														a.children || [],
													)).return = e),
													(e = r);
												break e;
											}
											n(e, r);
											break;
										}
										t(e, r), (r = r.sibling);
									}
									((r = jl(a, e.mode, l)).return = e),
										(e = r);
								}
								return c(e);
						}
					if ("string" == typeof a || "number" == typeof a)
						return (
							(a = "" + a),
							null !== r && 6 === r.tag
								? (n(e, r.sibling),
									((r = o(r, a)).return = e),
									(e = r))
								: (n(e, r),
									((r = Ml(a, e.mode, l)).return = e),
									(e = r)),
							c(e)
						);
					if (Ta(a)) return m(e, r, a, l);
					if (me(a)) return g(e, r, a, l);
					if ((u && Pa(e, a), void 0 === a && !s))
						switch (e.tag) {
							case 1:
							case 0:
								throw (
									((e = e.type),
									Error(
										i(
											152,
											e.displayName ||
												e.name ||
												"Component",
										),
									))
								);
						}
					return n(e, r);
				};
			}
			var Oa = Aa(!0),
				_a = Aa(!1),
				Ra = {},
				Na = { current: Ra },
				La = { current: Ra },
				Ia = { current: Ra };
			function Da(e) {
				if (e === Ra) throw Error(i(174));
				return e;
			}
			function Fa(e, t) {
				switch ((bo(Ia, t), bo(La, e), bo(Na, Ra), (e = t.nodeType))) {
					case 9:
					case 11:
						t = (t = t.documentElement)
							? t.namespaceURI
							: Me(null, "");
						break;
					default:
						t = Me(
							(t =
								(e = 8 === e ? t.parentNode : t).namespaceURI ||
								null),
							(e = e.tagName),
						);
				}
				po(Na), bo(Na, t);
			}
			function Ma() {
				po(Na), po(La), po(Ia);
			}
			function ja(e) {
				Da(Ia.current);
				var t = Da(Na.current),
					n = Me(t, e.type);
				t !== n && (bo(La, e), bo(Na, n));
			}
			function Ba(e) {
				La.current === e && (po(Na), po(La));
			}
			var za = { current: 0 };
			function Ua(e) {
				for (var t = e; null !== t; ) {
					if (13 === t.tag) {
						var n = t.memoizedState;
						if (
							null !== n &&
							(null === (n = n.dehydrated) ||
								n.data === hn ||
								n.data === wn)
						)
							return t;
					} else if (
						19 === t.tag &&
						void 0 !== t.memoizedProps.revealOrder
					) {
						if (0 != (64 & t.effectTag)) return t;
					} else if (null !== t.child) {
						(t.child.return = t), (t = t.child);
						continue;
					}
					if (t === e) break;
					for (; null === t.sibling; ) {
						if (null === t.return || t.return === e) return null;
						t = t.return;
					}
					(t.sibling.return = t.return), (t = t.sibling);
				}
				return null;
			}
			function $a(e, t) {
				return { responder: e, props: t };
			}
			var Ga = Q.ReactCurrentDispatcher,
				qa = Q.ReactCurrentBatchConfig,
				Ha = 0,
				Wa = null,
				Va = null,
				Za = null,
				Ka = !1;
			function Qa() {
				throw Error(i(321));
			}
			function Ya(e, t) {
				if (null === t) return !1;
				for (var n = 0; n < t.length && n < e.length; n++)
					if (!Ur(e[n], t[n])) return !1;
				return !0;
			}
			function Xa(e, t, n, r, o, a) {
				if (
					((Ha = a),
					(Wa = t),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.expirationTime = 0),
					(Ga.current =
						null === e || null === e.memoizedState ? ki : xi),
					(e = n(r, o)),
					t.expirationTime === Ha)
				) {
					a = 0;
					do {
						if (((t.expirationTime = 0), !(25 > a)))
							throw Error(i(301));
						(a += 1),
							(Za = Va = null),
							(t.updateQueue = null),
							(Ga.current = Ei),
							(e = n(r, o));
					} while (t.expirationTime === Ha);
				}
				if (
					((Ga.current = yi),
					(t = null !== Va && null !== Va.next),
					(Ha = 0),
					(Za = Va = Wa = null),
					(Ka = !1),
					t)
				)
					throw Error(i(300));
				return e;
			}
			function Ja() {
				var e = {
					memoizedState: null,
					baseState: null,
					baseQueue: null,
					queue: null,
					next: null,
				};
				return (
					null === Za
						? (Wa.memoizedState = Za = e)
						: (Za = Za.next = e),
					Za
				);
			}
			function ei() {
				if (null === Va) {
					var e = Wa.alternate;
					e = null !== e ? e.memoizedState : null;
				} else e = Va.next;
				var t = null === Za ? Wa.memoizedState : Za.next;
				if (null !== t) (Za = t), (Va = e);
				else {
					if (null === e) throw Error(i(310));
					(e = {
						memoizedState: (Va = e).memoizedState,
						baseState: Va.baseState,
						baseQueue: Va.baseQueue,
						queue: Va.queue,
						next: null,
					}),
						null === Za
							? (Wa.memoizedState = Za = e)
							: (Za = Za.next = e);
				}
				return Za;
			}
			function ti(e, t) {
				return "function" == typeof t ? t(e) : t;
			}
			function ni(e) {
				var t = ei(),
					n = t.queue;
				if (null === n) throw Error(i(311));
				n.lastRenderedReducer = e;
				var r = Va,
					o = r.baseQueue,
					a = n.pending;
				if (null !== a) {
					if (null !== o) {
						var c = o.next;
						(o.next = a.next), (a.next = c);
					}
					(r.baseQueue = o = a), (n.pending = null);
				}
				if (null !== o) {
					(o = o.next), (r = r.baseState);
					var l = (c = a = null),
						s = o;
					do {
						var u = s.expirationTime;
						if (u < Ha) {
							var d = {
								expirationTime: s.expirationTime,
								suspenseConfig: s.suspenseConfig,
								action: s.action,
								eagerReducer: s.eagerReducer,
								eagerState: s.eagerState,
								next: null,
							};
							null === l
								? ((c = l = d), (a = r))
								: (l = l.next = d),
								u > Wa.expirationTime &&
									((Wa.expirationTime = u), bl(u));
						} else
							null !== l &&
								(l = l.next =
									{
										expirationTime: 1073741823,
										suspenseConfig: s.suspenseConfig,
										action: s.action,
										eagerReducer: s.eagerReducer,
										eagerState: s.eagerState,
										next: null,
									}),
								pl(u, s.suspenseConfig),
								(r =
									s.eagerReducer === e
										? s.eagerState
										: e(r, s.action));
						s = s.next;
					} while (null !== s && s !== o);
					null === l ? (a = r) : (l.next = c),
						Ur(r, t.memoizedState) || (Ii = !0),
						(t.memoizedState = r),
						(t.baseState = a),
						(t.baseQueue = l),
						(n.lastRenderedState = r);
				}
				return [t.memoizedState, n.dispatch];
			}
			function ri(e) {
				var t = ei(),
					n = t.queue;
				if (null === n) throw Error(i(311));
				n.lastRenderedReducer = e;
				var r = n.dispatch,
					o = n.pending,
					a = t.memoizedState;
				if (null !== o) {
					n.pending = null;
					var c = (o = o.next);
					do {
						(a = e(a, c.action)), (c = c.next);
					} while (c !== o);
					Ur(a, t.memoizedState) || (Ii = !0),
						(t.memoizedState = a),
						null === t.baseQueue && (t.baseState = a),
						(n.lastRenderedState = a);
				}
				return [a, r];
			}
			function oi(e) {
				var t = Ja();
				return (
					"function" == typeof e && (e = e()),
					(t.memoizedState = t.baseState = e),
					(e = (e = t.queue =
						{
							pending: null,
							dispatch: null,
							lastRenderedReducer: ti,
							lastRenderedState: e,
						}).dispatch =
						vi.bind(null, Wa, e)),
					[t.memoizedState, e]
				);
			}
			function ai(e, t, n, r) {
				return (
					(e = {
						tag: e,
						create: t,
						destroy: n,
						deps: r,
						next: null,
					}),
					null === (t = Wa.updateQueue)
						? ((t = { lastEffect: null }),
							(Wa.updateQueue = t),
							(t.lastEffect = e.next = e))
						: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next),
								(n.next = e),
								(e.next = r),
								(t.lastEffect = e)),
					e
				);
			}
			function ii() {
				return ei().memoizedState;
			}
			function ci(e, t, n, r) {
				var o = Ja();
				(Wa.effectTag |= e),
					(o.memoizedState = ai(
						1 | t,
						n,
						void 0,
						void 0 === r ? null : r,
					));
			}
			function li(e, t, n, r) {
				var o = ei();
				r = void 0 === r ? null : r;
				var a = void 0;
				if (null !== Va) {
					var i = Va.memoizedState;
					if (((a = i.destroy), null !== r && Ya(r, i.deps)))
						return void ai(t, n, a, r);
				}
				(Wa.effectTag |= e), (o.memoizedState = ai(1 | t, n, a, r));
			}
			function si(e, t) {
				return ci(516, 4, e, t);
			}
			function ui(e, t) {
				return li(516, 4, e, t);
			}
			function di(e, t) {
				return li(4, 2, e, t);
			}
			function fi(e, t) {
				return "function" == typeof t
					? ((e = e()),
						t(e),
						function () {
							t(null);
						})
					: null != t
						? ((e = e()),
							(t.current = e),
							function () {
								t.current = null;
							})
						: void 0;
			}
			function pi(e, t, n) {
				return (
					(n = null != n ? n.concat([e]) : null),
					li(4, 2, fi.bind(null, t, e), n)
				);
			}
			function bi() {}
			function mi(e, t) {
				return (Ja().memoizedState = [e, void 0 === t ? null : t]), e;
			}
			function gi(e, t) {
				var n = ei();
				t = void 0 === t ? null : t;
				var r = n.memoizedState;
				return null !== r && null !== t && Ya(t, r[1])
					? r[0]
					: ((n.memoizedState = [e, t]), e);
			}
			function hi(e, t) {
				var n = ei();
				t = void 0 === t ? null : t;
				var r = n.memoizedState;
				return null !== r && null !== t && Ya(t, r[1])
					? r[0]
					: ((e = e()), (n.memoizedState = [e, t]), e);
			}
			function wi(e, t, n) {
				var r = Ho();
				Vo(98 > r ? 98 : r, function () {
					e(!0);
				}),
					Vo(97 < r ? 97 : r, function () {
						var r = qa.suspense;
						qa.suspense = void 0 === t ? null : t;
						try {
							e(!1), n();
						} finally {
							qa.suspense = r;
						}
					});
			}
			function vi(e, t, n) {
				var r = el(),
					o = ha.suspense;
				o = {
					expirationTime: (r = tl(r, e, o)),
					suspenseConfig: o,
					action: n,
					eagerReducer: null,
					eagerState: null,
					next: null,
				};
				var a = t.pending;
				if (
					(null === a
						? (o.next = o)
						: ((o.next = a.next), (a.next = o)),
					(t.pending = o),
					(a = e.alternate),
					e === Wa || (null !== a && a === Wa))
				)
					(Ka = !0),
						(o.expirationTime = Ha),
						(Wa.expirationTime = Ha);
				else {
					if (
						0 === e.expirationTime &&
						(null === a || 0 === a.expirationTime) &&
						null !== (a = t.lastRenderedReducer)
					)
						try {
							var i = t.lastRenderedState,
								c = a(i, n);
							if (
								((o.eagerReducer = a),
								(o.eagerState = c),
								Ur(c, i))
							)
								return;
						} catch (l) {}
					nl(e, r);
				}
			}
			var yi = {
					readContext: la,
					useCallback: Qa,
					useContext: Qa,
					useEffect: Qa,
					useImperativeHandle: Qa,
					useLayoutEffect: Qa,
					useMemo: Qa,
					useReducer: Qa,
					useRef: Qa,
					useState: Qa,
					useDebugValue: Qa,
					useResponder: Qa,
					useDeferredValue: Qa,
					useTransition: Qa,
				},
				ki = {
					readContext: la,
					useCallback: mi,
					useContext: la,
					useEffect: si,
					useImperativeHandle: function (e, t, n) {
						return (
							(n = null != n ? n.concat([e]) : null),
							ci(4, 2, fi.bind(null, t, e), n)
						);
					},
					useLayoutEffect: function (e, t) {
						return ci(4, 2, e, t);
					},
					useMemo: function (e, t) {
						var n = Ja();
						return (
							(t = void 0 === t ? null : t),
							(e = e()),
							(n.memoizedState = [e, t]),
							e
						);
					},
					useReducer: function (e, t, n) {
						var r = Ja();
						return (
							(t = void 0 !== n ? n(t) : t),
							(r.memoizedState = r.baseState = t),
							(e = (e = r.queue =
								{
									pending: null,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}).dispatch =
								vi.bind(null, Wa, e)),
							[r.memoizedState, e]
						);
					},
					useRef: function (e) {
						return (e = { current: e }), (Ja().memoizedState = e);
					},
					useState: oi,
					useDebugValue: bi,
					useResponder: $a,
					useDeferredValue: function (e, t) {
						var n = oi(e),
							r = n[0],
							o = n[1];
						return (
							si(
								function () {
									var n = qa.suspense;
									qa.suspense = void 0 === t ? null : t;
									try {
										o(e);
									} finally {
										qa.suspense = n;
									}
								},
								[e, t],
							),
							r
						);
					},
					useTransition: function (e) {
						var t = oi(!1),
							n = t[0];
						return (t = t[1]), [mi(wi.bind(null, t, e), [t, e]), n];
					},
				},
				xi = {
					readContext: la,
					useCallback: gi,
					useContext: la,
					useEffect: ui,
					useImperativeHandle: pi,
					useLayoutEffect: di,
					useMemo: hi,
					useReducer: ni,
					useRef: ii,
					useState: function () {
						return ni(ti);
					},
					useDebugValue: bi,
					useResponder: $a,
					useDeferredValue: function (e, t) {
						var n = ni(ti),
							r = n[0],
							o = n[1];
						return (
							ui(
								function () {
									var n = qa.suspense;
									qa.suspense = void 0 === t ? null : t;
									try {
										o(e);
									} finally {
										qa.suspense = n;
									}
								},
								[e, t],
							),
							r
						);
					},
					useTransition: function (e) {
						var t = ni(ti),
							n = t[0];
						return (t = t[1]), [gi(wi.bind(null, t, e), [t, e]), n];
					},
				},
				Ei = {
					readContext: la,
					useCallback: gi,
					useContext: la,
					useEffect: ui,
					useImperativeHandle: pi,
					useLayoutEffect: di,
					useMemo: hi,
					useReducer: ri,
					useRef: ii,
					useState: function () {
						return ri(ti);
					},
					useDebugValue: bi,
					useResponder: $a,
					useDeferredValue: function (e, t) {
						var n = ri(ti),
							r = n[0],
							o = n[1];
						return (
							ui(
								function () {
									var n = qa.suspense;
									qa.suspense = void 0 === t ? null : t;
									try {
										o(e);
									} finally {
										qa.suspense = n;
									}
								},
								[e, t],
							),
							r
						);
					},
					useTransition: function (e) {
						var t = ri(ti),
							n = t[0];
						return (t = t[1]), [gi(wi.bind(null, t, e), [t, e]), n];
					},
				},
				Si = null,
				Ti = null,
				Ci = !1;
			function Pi(e, t) {
				var n = Nl(5, null, null, 0);
				(n.elementType = "DELETED"),
					(n.type = "DELETED"),
					(n.stateNode = t),
					(n.return = e),
					(n.effectTag = 8),
					null !== e.lastEffect
						? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
						: (e.firstEffect = e.lastEffect = n);
			}
			function Ai(e, t) {
				switch (e.tag) {
					case 5:
						var n = e.type;
						return (
							null !==
								(t =
									1 !== t.nodeType ||
									n.toLowerCase() !== t.nodeName.toLowerCase()
										? null
										: t) && ((e.stateNode = t), !0)
						);
					case 6:
						return (
							null !==
								(t =
									"" === e.pendingProps || 3 !== t.nodeType
										? null
										: t) && ((e.stateNode = t), !0)
						);
					default:
						return !1;
				}
			}
			function Oi(e) {
				if (Ci) {
					var t = Ti;
					if (t) {
						var n = t;
						if (!Ai(e, t)) {
							if (!(t = Tn(n.nextSibling)) || !Ai(e, t))
								return (
									(e.effectTag = (-1025 & e.effectTag) | 2),
									(Ci = !1),
									void (Si = e)
								);
							Pi(Si, n);
						}
						(Si = e), (Ti = Tn(t.firstChild));
					} else
						(e.effectTag = (-1025 & e.effectTag) | 2),
							(Ci = !1),
							(Si = e);
				}
			}
			function _i(e) {
				for (
					e = e.return;
					null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

				)
					e = e.return;
				Si = e;
			}
			function Ri(e) {
				if (e !== Si) return !1;
				if (!Ci) return _i(e), (Ci = !0), !1;
				var t = e.type;
				if (
					5 !== e.tag ||
					("head" !== t && "body" !== t && !xn(t, e.memoizedProps))
				)
					for (t = Ti; t; ) Pi(e, t), (t = Tn(t.nextSibling));
				if ((_i(e), 13 === e.tag)) {
					if (
						!(e =
							null !== (e = e.memoizedState)
								? e.dehydrated
								: null)
					)
						throw Error(i(317));
					e: {
						for (e = e.nextSibling, t = 0; e; ) {
							if (8 === e.nodeType) {
								var n = e.data;
								if ("/$" === n) {
									if (0 === t) {
										Ti = Tn(e.nextSibling);
										break e;
									}
									t--;
								} else
									("$" !== n && n !== wn && n !== hn) || t++;
							}
							e = e.nextSibling;
						}
						Ti = null;
					}
				} else Ti = Si ? Tn(e.stateNode.nextSibling) : null;
				return !0;
			}
			function Ni() {
				(Ti = Si = null), (Ci = !1);
			}
			var Li = Q.ReactCurrentOwner,
				Ii = !1;
			function Di(e, t, n, r) {
				t.child = null === e ? _a(t, null, n, r) : Oa(t, e.child, n, r);
			}
			function Fi(e, t, n, r, o) {
				n = n.render;
				var a = t.ref;
				return (
					ca(t, o),
					(r = Xa(e, t, n, r, a, o)),
					null === e || Ii
						? ((t.effectTag |= 1), Di(e, t, r, o), t.child)
						: ((t.updateQueue = e.updateQueue),
							(t.effectTag &= -517),
							e.expirationTime <= o && (e.expirationTime = 0),
							Xi(e, t, o))
				);
			}
			function Mi(e, t, n, r, o, a) {
				if (null === e) {
					var i = n.type;
					return "function" != typeof i ||
						Ll(i) ||
						void 0 !== i.defaultProps ||
						null !== n.compare ||
						void 0 !== n.defaultProps
						? (((e = Dl(n.type, null, r, null, t.mode, a)).ref =
								t.ref),
							(e.return = t),
							(t.child = e))
						: ((t.tag = 15), (t.type = i), ji(e, t, i, r, o, a));
				}
				return (
					(i = e.child),
					o < a &&
					((o = i.memoizedProps),
					(n = null !== (n = n.compare) ? n : Gr)(o, r) &&
						e.ref === t.ref)
						? Xi(e, t, a)
						: ((t.effectTag |= 1),
							((e = Il(i, r)).ref = t.ref),
							(e.return = t),
							(t.child = e))
				);
			}
			function ji(e, t, n, r, o, a) {
				return null !== e &&
					Gr(e.memoizedProps, r) &&
					e.ref === t.ref &&
					((Ii = !1), o < a)
					? ((t.expirationTime = e.expirationTime), Xi(e, t, a))
					: zi(e, t, n, r, a);
			}
			function Bi(e, t) {
				var n = t.ref;
				((null === e && null !== n) || (null !== e && e.ref !== n)) &&
					(t.effectTag |= 128);
			}
			function zi(e, t, n, r, o) {
				var a = yo(n) ? wo : go.current;
				return (
					(a = vo(t, a)),
					ca(t, o),
					(n = Xa(e, t, n, r, a, o)),
					null === e || Ii
						? ((t.effectTag |= 1), Di(e, t, n, o), t.child)
						: ((t.updateQueue = e.updateQueue),
							(t.effectTag &= -517),
							e.expirationTime <= o && (e.expirationTime = 0),
							Xi(e, t, o))
				);
			}
			function Ui(e, t, n, r, o) {
				if (yo(n)) {
					var a = !0;
					So(t);
				} else a = !1;
				if ((ca(t, o), null === t.stateNode))
					null !== e &&
						((e.alternate = null),
						(t.alternate = null),
						(t.effectTag |= 2)),
						xa(t, n, r),
						Sa(t, n, r, o),
						(r = !0);
				else if (null === e) {
					var i = t.stateNode,
						c = t.memoizedProps;
					i.props = c;
					var l = i.context,
						s = n.contextType;
					"object" == typeof s && null !== s
						? (s = la(s))
						: (s = vo(t, (s = yo(n) ? wo : go.current)));
					var u = n.getDerivedStateFromProps,
						d =
							"function" == typeof u ||
							"function" == typeof i.getSnapshotBeforeUpdate;
					d ||
						("function" !=
							typeof i.UNSAFE_componentWillReceiveProps &&
							"function" != typeof i.componentWillReceiveProps) ||
						((c !== r || l !== s) && Ea(t, i, r, s)),
						(sa = !1);
					var f = t.memoizedState;
					(i.state = f),
						ma(t, r, i, o),
						(l = t.memoizedState),
						c !== r || f !== l || ho.current || sa
							? ("function" == typeof u &&
									(va(t, n, u, r), (l = t.memoizedState)),
								(c = sa || ka(t, n, c, r, f, l, s))
									? (d ||
											("function" !=
												typeof i.UNSAFE_componentWillMount &&
												"function" !=
													typeof i.componentWillMount) ||
											("function" ==
												typeof i.componentWillMount &&
												i.componentWillMount(),
											"function" ==
												typeof i.UNSAFE_componentWillMount &&
												i.UNSAFE_componentWillMount()),
										"function" ==
											typeof i.componentDidMount &&
											(t.effectTag |= 4))
									: ("function" ==
											typeof i.componentDidMount &&
											(t.effectTag |= 4),
										(t.memoizedProps = r),
										(t.memoizedState = l)),
								(i.props = r),
								(i.state = l),
								(i.context = s),
								(r = c))
							: ("function" == typeof i.componentDidMount &&
									(t.effectTag |= 4),
								(r = !1));
				} else
					(i = t.stateNode),
						da(e, t),
						(c = t.memoizedProps),
						(i.props =
							t.type === t.elementType ? c : Jo(t.type, c)),
						(l = i.context),
						"object" == typeof (s = n.contextType) && null !== s
							? (s = la(s))
							: (s = vo(t, (s = yo(n) ? wo : go.current))),
						(d =
							"function" ==
								typeof (u = n.getDerivedStateFromProps) ||
							"function" == typeof i.getSnapshotBeforeUpdate) ||
							("function" !=
								typeof i.UNSAFE_componentWillReceiveProps &&
								"function" !=
									typeof i.componentWillReceiveProps) ||
							((c !== r || l !== s) && Ea(t, i, r, s)),
						(sa = !1),
						(l = t.memoizedState),
						(i.state = l),
						ma(t, r, i, o),
						(f = t.memoizedState),
						c !== r || l !== f || ho.current || sa
							? ("function" == typeof u &&
									(va(t, n, u, r), (f = t.memoizedState)),
								(u = sa || ka(t, n, c, r, l, f, s))
									? (d ||
											("function" !=
												typeof i.UNSAFE_componentWillUpdate &&
												"function" !=
													typeof i.componentWillUpdate) ||
											("function" ==
												typeof i.componentWillUpdate &&
												i.componentWillUpdate(r, f, s),
											"function" ==
												typeof i.UNSAFE_componentWillUpdate &&
												i.UNSAFE_componentWillUpdate(
													r,
													f,
													s,
												)),
										"function" ==
											typeof i.componentDidUpdate &&
											(t.effectTag |= 4),
										"function" ==
											typeof i.getSnapshotBeforeUpdate &&
											(t.effectTag |= 256))
									: ("function" !=
											typeof i.componentDidUpdate ||
											(c === e.memoizedProps &&
												l === e.memoizedState) ||
											(t.effectTag |= 4),
										"function" !=
											typeof i.getSnapshotBeforeUpdate ||
											(c === e.memoizedProps &&
												l === e.memoizedState) ||
											(t.effectTag |= 256),
										(t.memoizedProps = r),
										(t.memoizedState = f)),
								(i.props = r),
								(i.state = f),
								(i.context = s),
								(r = u))
							: ("function" != typeof i.componentDidUpdate ||
									(c === e.memoizedProps &&
										l === e.memoizedState) ||
									(t.effectTag |= 4),
								"function" !=
									typeof i.getSnapshotBeforeUpdate ||
									(c === e.memoizedProps &&
										l === e.memoizedState) ||
									(t.effectTag |= 256),
								(r = !1));
				return $i(e, t, n, r, a, o);
			}
			function $i(e, t, n, r, o, a) {
				Bi(e, t);
				var i = 0 != (64 & t.effectTag);
				if (!r && !i) return o && To(t, n, !1), Xi(e, t, a);
				(r = t.stateNode), (Li.current = t);
				var c =
					i && "function" != typeof n.getDerivedStateFromError
						? null
						: r.render();
				return (
					(t.effectTag |= 1),
					null !== e && i
						? ((t.child = Oa(t, e.child, null, a)),
							(t.child = Oa(t, null, c, a)))
						: Di(e, t, c, a),
					(t.memoizedState = r.state),
					o && To(t, n, !0),
					t.child
				);
			}
			function Gi(e) {
				var t = e.stateNode;
				t.pendingContext
					? xo(0, t.pendingContext, t.pendingContext !== t.context)
					: t.context && xo(0, t.context, !1),
					Fa(e, t.containerInfo);
			}
			var qi,
				Hi,
				Wi,
				Vi = { dehydrated: null, retryTime: 0 };
			function Zi(e, t, n) {
				var r,
					o = t.mode,
					a = t.pendingProps,
					i = za.current,
					c = !1;
				if (
					((r = 0 != (64 & t.effectTag)) ||
						(r =
							0 != (2 & i) &&
							(null === e || null !== e.memoizedState)),
					r
						? ((c = !0), (t.effectTag &= -65))
						: (null !== e && null === e.memoizedState) ||
							void 0 === a.fallback ||
							!0 === a.unstable_avoidThisFallback ||
							(i |= 1),
					bo(za, 1 & i),
					null === e)
				) {
					if ((void 0 !== a.fallback && Oi(t), c)) {
						if (
							((c = a.fallback),
							((a = Fl(null, o, 0, null)).return = t),
							0 == (2 & t.mode))
						)
							for (
								e =
									null !== t.memoizedState
										? t.child.child
										: t.child,
									a.child = e;
								null !== e;

							)
								(e.return = a), (e = e.sibling);
						return (
							((n = Fl(c, o, n, null)).return = t),
							(a.sibling = n),
							(t.memoizedState = Vi),
							(t.child = a),
							n
						);
					}
					return (
						(o = a.children),
						(t.memoizedState = null),
						(t.child = _a(t, null, o, n))
					);
				}
				if (null !== e.memoizedState) {
					if (((o = (e = e.child).sibling), c)) {
						if (
							((a = a.fallback),
							((n = Il(e, e.pendingProps)).return = t),
							0 == (2 & t.mode) &&
								(c =
									null !== t.memoizedState
										? t.child.child
										: t.child) !== e.child)
						)
							for (n.child = c; null !== c; )
								(c.return = n), (c = c.sibling);
						return (
							((o = Il(o, a)).return = t),
							(n.sibling = o),
							(n.childExpirationTime = 0),
							(t.memoizedState = Vi),
							(t.child = n),
							o
						);
					}
					return (
						(n = Oa(t, e.child, a.children, n)),
						(t.memoizedState = null),
						(t.child = n)
					);
				}
				if (((e = e.child), c)) {
					if (
						((c = a.fallback),
						((a = Fl(null, o, 0, null)).return = t),
						(a.child = e),
						null !== e && (e.return = a),
						0 == (2 & t.mode))
					)
						for (
							e =
								null !== t.memoizedState
									? t.child.child
									: t.child,
								a.child = e;
							null !== e;

						)
							(e.return = a), (e = e.sibling);
					return (
						((n = Fl(c, o, n, null)).return = t),
						(a.sibling = n),
						(n.effectTag |= 2),
						(a.childExpirationTime = 0),
						(t.memoizedState = Vi),
						(t.child = a),
						n
					);
				}
				return (
					(t.memoizedState = null),
					(t.child = Oa(t, e, a.children, n))
				);
			}
			function Ki(e, t) {
				e.expirationTime < t && (e.expirationTime = t);
				var n = e.alternate;
				null !== n && n.expirationTime < t && (n.expirationTime = t),
					ia(e.return, t);
			}
			function Qi(e, t, n, r, o, a) {
				var i = e.memoizedState;
				null === i
					? (e.memoizedState = {
							isBackwards: t,
							rendering: null,
							renderingStartTime: 0,
							last: r,
							tail: n,
							tailExpiration: 0,
							tailMode: o,
							lastEffect: a,
						})
					: ((i.isBackwards = t),
						(i.rendering = null),
						(i.renderingStartTime = 0),
						(i.last = r),
						(i.tail = n),
						(i.tailExpiration = 0),
						(i.tailMode = o),
						(i.lastEffect = a));
			}
			function Yi(e, t, n) {
				var r = t.pendingProps,
					o = r.revealOrder,
					a = r.tail;
				if ((Di(e, t, r.children, n), 0 != (2 & (r = za.current))))
					(r = (1 & r) | 2), (t.effectTag |= 64);
				else {
					if (null !== e && 0 != (64 & e.effectTag))
						e: for (e = t.child; null !== e; ) {
							if (13 === e.tag)
								null !== e.memoizedState && Ki(e, n);
							else if (19 === e.tag) Ki(e, n);
							else if (null !== e.child) {
								(e.child.return = e), (e = e.child);
								continue;
							}
							if (e === t) break e;
							for (; null === e.sibling; ) {
								if (null === e.return || e.return === t)
									break e;
								e = e.return;
							}
							(e.sibling.return = e.return), (e = e.sibling);
						}
					r &= 1;
				}
				if ((bo(za, r), 0 == (2 & t.mode))) t.memoizedState = null;
				else
					switch (o) {
						case "forwards":
							for (n = t.child, o = null; null !== n; )
								null !== (e = n.alternate) &&
									null === Ua(e) &&
									(o = n),
									(n = n.sibling);
							null === (n = o)
								? ((o = t.child), (t.child = null))
								: ((o = n.sibling), (n.sibling = null)),
								Qi(t, !1, o, n, a, t.lastEffect);
							break;
						case "backwards":
							for (
								n = null, o = t.child, t.child = null;
								null !== o;

							) {
								if (
									null !== (e = o.alternate) &&
									null === Ua(e)
								) {
									t.child = o;
									break;
								}
								(e = o.sibling),
									(o.sibling = n),
									(n = o),
									(o = e);
							}
							Qi(t, !0, n, null, a, t.lastEffect);
							break;
						case "together":
							Qi(t, !1, null, null, void 0, t.lastEffect);
							break;
						default:
							t.memoizedState = null;
					}
				return t.child;
			}
			function Xi(e, t, n) {
				null !== e && (t.dependencies = e.dependencies);
				var r = t.expirationTime;
				if ((0 !== r && bl(r), t.childExpirationTime < n)) return null;
				if (null !== e && t.child !== e.child) throw Error(i(153));
				if (null !== t.child) {
					for (
						n = Il((e = t.child), e.pendingProps),
							t.child = n,
							n.return = t;
						null !== e.sibling;

					)
						(e = e.sibling),
							((n = n.sibling = Il(e, e.pendingProps)).return =
								t);
					n.sibling = null;
				}
				return t.child;
			}
			function Ji(e, t) {
				switch (e.tailMode) {
					case "hidden":
						t = e.tail;
						for (var n = null; null !== t; )
							null !== t.alternate && (n = t), (t = t.sibling);
						null === n ? (e.tail = null) : (n.sibling = null);
						break;
					case "collapsed":
						n = e.tail;
						for (var r = null; null !== n; )
							null !== n.alternate && (r = n), (n = n.sibling);
						null === r
							? t || null === e.tail
								? (e.tail = null)
								: (e.tail.sibling = null)
							: (r.sibling = null);
				}
			}
			function ec(e, t, n) {
				var r = t.pendingProps;
				switch (t.tag) {
					case 2:
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14:
						return null;
					case 1:
					case 17:
						return yo(t.type) && ko(), null;
					case 3:
						return (
							Ma(),
							po(ho),
							po(go),
							(n = t.stateNode).pendingContext &&
								((n.context = n.pendingContext),
								(n.pendingContext = null)),
							(null !== e && null !== e.child) ||
								!Ri(t) ||
								(t.effectTag |= 4),
							null
						);
					case 5:
						Ba(t), (n = Da(Ia.current));
						var a = t.type;
						if (null !== e && null != t.stateNode)
							Hi(e, t, a, r, n),
								e.ref !== t.ref && (t.effectTag |= 128);
						else {
							if (!r) {
								if (null === t.stateNode) throw Error(i(166));
								return null;
							}
							if (((e = Da(Na.current)), Ri(t))) {
								(r = t.stateNode), (a = t.type);
								var c = t.memoizedProps;
								switch (((r[An] = t), (r[On] = c), a)) {
									case "iframe":
									case "object":
									case "embed":
										Zt("load", r);
										break;
									case "video":
									case "audio":
										for (e = 0; e < Ye.length; e++)
											Zt(Ye[e], r);
										break;
									case "source":
										Zt("error", r);
										break;
									case "img":
									case "image":
									case "link":
										Zt("error", r), Zt("load", r);
										break;
									case "form":
										Zt("reset", r), Zt("submit", r);
										break;
									case "details":
										Zt("toggle", r);
										break;
									case "input":
										Ee(r, c),
											Zt("invalid", r),
											sn(n, "onChange");
										break;
									case "select":
										(r._wrapperState = {
											wasMultiple: !!c.multiple,
										}),
											Zt("invalid", r),
											sn(n, "onChange");
										break;
									case "textarea":
										Re(r, c),
											Zt("invalid", r),
											sn(n, "onChange");
								}
								for (var l in (an(a, c), (e = null), c))
									if (c.hasOwnProperty(l)) {
										var s = c[l];
										"children" === l
											? "string" == typeof s
												? r.textContent !== s &&
													(e = ["children", s])
												: "number" == typeof s &&
													r.textContent !== "" + s &&
													(e = ["children", "" + s])
											: S.hasOwnProperty(l) &&
												null != s &&
												sn(n, l);
									}
								switch (a) {
									case "input":
										ye(r), Ce(r, c, !0);
										break;
									case "textarea":
										ye(r), Le(r);
										break;
									case "select":
									case "option":
										break;
									default:
										"function" == typeof c.onClick &&
											(r.onclick = un);
								}
								(n = e),
									(t.updateQueue = n),
									null !== n && (t.effectTag |= 4);
							} else {
								switch (
									((l =
										9 === n.nodeType ? n : n.ownerDocument),
									e === ln && (e = Fe(a)),
									e === ln
										? "script" === a
											? (((e =
													l.createElement(
														"div",
													)).innerHTML =
													"<script></script>"),
												(e = e.removeChild(
													e.firstChild,
												)))
											: "string" == typeof r.is
												? (e = l.createElement(a, {
														is: r.is,
													}))
												: ((e = l.createElement(a)),
													"select" === a &&
														((l = e),
														r.multiple
															? (l.multiple = !0)
															: r.size &&
																(l.size =
																	r.size)))
										: (e = l.createElementNS(e, a)),
									(e[An] = t),
									(e[On] = r),
									qi(e, t),
									(t.stateNode = e),
									(l = cn(a, r)),
									a)
								) {
									case "iframe":
									case "object":
									case "embed":
										Zt("load", e), (s = r);
										break;
									case "video":
									case "audio":
										for (s = 0; s < Ye.length; s++)
											Zt(Ye[s], e);
										s = r;
										break;
									case "source":
										Zt("error", e), (s = r);
										break;
									case "img":
									case "image":
									case "link":
										Zt("error", e), Zt("load", e), (s = r);
										break;
									case "form":
										Zt("reset", e),
											Zt("submit", e),
											(s = r);
										break;
									case "details":
										Zt("toggle", e), (s = r);
										break;
									case "input":
										Ee(e, r),
											(s = xe(e, r)),
											Zt("invalid", e),
											sn(n, "onChange");
										break;
									case "option":
										s = Ae(e, r);
										break;
									case "select":
										(e._wrapperState = {
											wasMultiple: !!r.multiple,
										}),
											(s = o({}, r, { value: void 0 })),
											Zt("invalid", e),
											sn(n, "onChange");
										break;
									case "textarea":
										Re(e, r),
											(s = _e(e, r)),
											Zt("invalid", e),
											sn(n, "onChange");
										break;
									default:
										s = r;
								}
								an(a, s);
								var u = s;
								for (c in u)
									if (u.hasOwnProperty(c)) {
										var d = u[c];
										"style" === c
											? rn(e, d)
											: "dangerouslySetInnerHTML" === c
												? null !=
														(d = d
															? d.__html
															: void 0) &&
													ze(e, d)
												: "children" === c
													? "string" == typeof d
														? ("textarea" !== a ||
																"" !== d) &&
															Ue(e, d)
														: "number" ==
																typeof d &&
															Ue(e, "" + d)
													: "suppressContentEditableWarning" !==
															c &&
														"suppressHydrationWarning" !==
															c &&
														"autoFocus" !== c &&
														(S.hasOwnProperty(c)
															? null != d &&
																sn(n, c)
															: null != d &&
																Y(e, c, d, l));
									}
								switch (a) {
									case "input":
										ye(e), Ce(e, r, !1);
										break;
									case "textarea":
										ye(e), Le(e);
										break;
									case "option":
										null != r.value &&
											e.setAttribute(
												"value",
												"" + we(r.value),
											);
										break;
									case "select":
										(e.multiple = !!r.multiple),
											null != (n = r.value)
												? Oe(e, !!r.multiple, n, !1)
												: null != r.defaultValue &&
													Oe(
														e,
														!!r.multiple,
														r.defaultValue,
														!0,
													);
										break;
									default:
										"function" == typeof s.onClick &&
											(e.onclick = un);
								}
								kn(a, r) && (t.effectTag |= 4);
							}
							null !== t.ref && (t.effectTag |= 128);
						}
						return null;
					case 6:
						if (e && null != t.stateNode)
							Wi(0, t, e.memoizedProps, r);
						else {
							if ("string" != typeof r && null === t.stateNode)
								throw Error(i(166));
							(n = Da(Ia.current)),
								Da(Na.current),
								Ri(t)
									? ((n = t.stateNode),
										(r = t.memoizedProps),
										(n[An] = t),
										n.nodeValue !== r && (t.effectTag |= 4))
									: (((n = (
											9 === n.nodeType
												? n
												: n.ownerDocument
										).createTextNode(r))[An] = t),
										(t.stateNode = n));
						}
						return null;
					case 13:
						return (
							po(za),
							(r = t.memoizedState),
							0 != (64 & t.effectTag)
								? ((t.expirationTime = n), t)
								: ((n = null !== r),
									(r = !1),
									null === e
										? void 0 !== t.memoizedProps.fallback &&
											Ri(t)
										: ((r = null !== (a = e.memoizedState)),
											n ||
												null === a ||
												(null !==
													(a = e.child.sibling) &&
													(null !==
													(c = t.firstEffect)
														? ((t.firstEffect = a),
															(a.nextEffect = c))
														: ((t.firstEffect =
																t.lastEffect =
																	a),
															(a.nextEffect =
																null)),
													(a.effectTag = 8)))),
									n &&
										!r &&
										0 != (2 & t.mode) &&
										((null === e &&
											!0 !==
												t.memoizedProps
													.unstable_avoidThisFallback) ||
										0 != (1 & za.current)
											? Dc === Ac && (Dc = Oc)
											: ((Dc !== Ac && Dc !== Oc) ||
													(Dc = _c),
												0 !== zc &&
													null !== Nc &&
													(Ul(Nc, Ic), $l(Nc, zc)))),
									(n || r) && (t.effectTag |= 4),
									null)
						);
					case 4:
						return Ma(), null;
					case 10:
						return aa(t), null;
					case 19:
						if ((po(za), null === (r = t.memoizedState)))
							return null;
						if (
							((a = 0 != (64 & t.effectTag)),
							null === (c = r.rendering))
						) {
							if (a) Ji(r, !1);
							else if (
								Dc !== Ac ||
								(null !== e && 0 != (64 & e.effectTag))
							)
								for (c = t.child; null !== c; ) {
									if (null !== (e = Ua(c))) {
										for (
											t.effectTag |= 64,
												Ji(r, !1),
												null !== (a = e.updateQueue) &&
													((t.updateQueue = a),
													(t.effectTag |= 4)),
												null === r.lastEffect &&
													(t.firstEffect = null),
												t.lastEffect = r.lastEffect,
												r = t.child;
											null !== r;

										)
											(c = n),
												((a = r).effectTag &= 2),
												(a.nextEffect = null),
												(a.firstEffect = null),
												(a.lastEffect = null),
												null === (e = a.alternate)
													? ((a.childExpirationTime = 0),
														(a.expirationTime = c),
														(a.child = null),
														(a.memoizedProps =
															null),
														(a.memoizedState =
															null),
														(a.updateQueue = null),
														(a.dependencies = null))
													: ((a.childExpirationTime =
															e.childExpirationTime),
														(a.expirationTime =
															e.expirationTime),
														(a.child = e.child),
														(a.memoizedProps =
															e.memoizedProps),
														(a.memoizedState =
															e.memoizedState),
														(a.updateQueue =
															e.updateQueue),
														(c = e.dependencies),
														(a.dependencies =
															null === c
																? null
																: {
																		expirationTime:
																			c.expirationTime,
																		firstContext:
																			c.firstContext,
																		responders:
																			c.responders,
																	})),
												(r = r.sibling);
										return (
											bo(za, (1 & za.current) | 2),
											t.child
										);
									}
									c = c.sibling;
								}
						} else {
							if (!a)
								if (null !== (e = Ua(c))) {
									if (
										((t.effectTag |= 64),
										(a = !0),
										null !== (n = e.updateQueue) &&
											((t.updateQueue = n),
											(t.effectTag |= 4)),
										Ji(r, !0),
										null === r.tail &&
											"hidden" === r.tailMode &&
											!c.alternate)
									)
										return (
											null !==
												(t = t.lastEffect =
													r.lastEffect) &&
												(t.nextEffect = null),
											null
										);
								} else
									2 * qo() - r.renderingStartTime >
										r.tailExpiration &&
										1 < n &&
										((t.effectTag |= 64),
										(a = !0),
										Ji(r, !1),
										(t.expirationTime =
											t.childExpirationTime =
												n - 1));
							r.isBackwards
								? ((c.sibling = t.child), (t.child = c))
								: (null !== (n = r.last)
										? (n.sibling = c)
										: (t.child = c),
									(r.last = c));
						}
						return null !== r.tail
							? (0 === r.tailExpiration &&
									(r.tailExpiration = qo() + 500),
								(n = r.tail),
								(r.rendering = n),
								(r.tail = n.sibling),
								(r.lastEffect = t.lastEffect),
								(r.renderingStartTime = qo()),
								(n.sibling = null),
								(t = za.current),
								bo(za, a ? (1 & t) | 2 : 1 & t),
								n)
							: null;
				}
				throw Error(i(156, t.tag));
			}
			function tc(e) {
				switch (e.tag) {
					case 1:
						yo(e.type) && ko();
						var t = e.effectTag;
						return 4096 & t
							? ((e.effectTag = (-4097 & t) | 64), e)
							: null;
					case 3:
						if (
							(Ma(),
							po(ho),
							po(go),
							0 != (64 & (t = e.effectTag)))
						)
							throw Error(i(285));
						return (e.effectTag = (-4097 & t) | 64), e;
					case 5:
						return Ba(e), null;
					case 13:
						return (
							po(za),
							4096 & (t = e.effectTag)
								? ((e.effectTag = (-4097 & t) | 64), e)
								: null
						);
					case 19:
						return po(za), null;
					case 4:
						return Ma(), null;
					case 10:
						return aa(e), null;
					default:
						return null;
				}
			}
			function nc(e, t) {
				return { value: e, source: t, stack: he(t) };
			}
			(qi = function (e, t) {
				for (var n = t.child; null !== n; ) {
					if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
					else if (4 !== n.tag && null !== n.child) {
						(n.child.return = n), (n = n.child);
						continue;
					}
					if (n === t) break;
					for (; null === n.sibling; ) {
						if (null === n.return || n.return === t) return;
						n = n.return;
					}
					(n.sibling.return = n.return), (n = n.sibling);
				}
			}),
				(Hi = function (e, t, n, r, a) {
					var i = e.memoizedProps;
					if (i !== r) {
						var c,
							l,
							s = t.stateNode;
						switch ((Da(Na.current), (e = null), n)) {
							case "input":
								(i = xe(s, i)), (r = xe(s, r)), (e = []);
								break;
							case "option":
								(i = Ae(s, i)), (r = Ae(s, r)), (e = []);
								break;
							case "select":
								(i = o({}, i, { value: void 0 })),
									(r = o({}, r, { value: void 0 })),
									(e = []);
								break;
							case "textarea":
								(i = _e(s, i)), (r = _e(s, r)), (e = []);
								break;
							default:
								"function" != typeof i.onClick &&
									"function" == typeof r.onClick &&
									(s.onclick = un);
						}
						for (c in (an(n, r), (n = null), i))
							if (
								!r.hasOwnProperty(c) &&
								i.hasOwnProperty(c) &&
								null != i[c]
							)
								if ("style" === c)
									for (l in (s = i[c]))
										s.hasOwnProperty(l) &&
											(n || (n = {}), (n[l] = ""));
								else
									"dangerouslySetInnerHTML" !== c &&
										"children" !== c &&
										"suppressContentEditableWarning" !==
											c &&
										"suppressHydrationWarning" !== c &&
										"autoFocus" !== c &&
										(S.hasOwnProperty(c)
											? e || (e = [])
											: (e = e || []).push(c, null));
						for (c in r) {
							var u = r[c];
							if (
								((s = null != i ? i[c] : void 0),
								r.hasOwnProperty(c) &&
									u !== s &&
									(null != u || null != s))
							)
								if ("style" === c)
									if (s) {
										for (l in s)
											!s.hasOwnProperty(l) ||
												(u && u.hasOwnProperty(l)) ||
												(n || (n = {}), (n[l] = ""));
										for (l in u)
											u.hasOwnProperty(l) &&
												s[l] !== u[l] &&
												(n || (n = {}), (n[l] = u[l]));
									} else
										n || (e || (e = []), e.push(c, n)),
											(n = u);
								else
									"dangerouslySetInnerHTML" === c
										? ((u = u ? u.__html : void 0),
											(s = s ? s.__html : void 0),
											null != u &&
												s !== u &&
												(e = e || []).push(c, u))
										: "children" === c
											? s === u ||
												("string" != typeof u &&
													"number" != typeof u) ||
												(e = e || []).push(c, "" + u)
											: "suppressContentEditableWarning" !==
													c &&
												"suppressHydrationWarning" !==
													c &&
												(S.hasOwnProperty(c)
													? (null != u && sn(a, c),
														e ||
															s === u ||
															(e = []))
													: (e = e || []).push(c, u));
						}
						n && (e = e || []).push("style", n),
							(a = e),
							(t.updateQueue = a) && (t.effectTag |= 4);
					}
				}),
				(Wi = function (e, t, n, r) {
					n !== r && (t.effectTag |= 4);
				});
			var rc = "function" == typeof WeakSet ? WeakSet : Set;
			function oc(e, t) {
				var n = t.source,
					r = t.stack;
				null === r && null !== n && (r = he(n)),
					null !== n && ge(n.type),
					(t = t.value),
					null !== e && 1 === e.tag && ge(e.type);
				try {
					console.error(t);
				} catch (o) {
					setTimeout(function () {
						throw o;
					});
				}
			}
			function ac(e) {
				var t = e.ref;
				if (null !== t)
					if ("function" == typeof t)
						try {
							t(null);
						} catch (n) {
							Cl(e, n);
						}
					else t.current = null;
			}
			function ic(e, t) {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
					case 22:
					case 3:
					case 5:
					case 6:
					case 4:
					case 17:
						return;
					case 1:
						if (256 & t.effectTag && null !== e) {
							var n = e.memoizedProps,
								r = e.memoizedState;
							(t = (e = t.stateNode).getSnapshotBeforeUpdate(
								t.elementType === t.type ? n : Jo(t.type, n),
								r,
							)),
								(e.__reactInternalSnapshotBeforeUpdate = t);
						}
						return;
				}
				throw Error(i(163));
			}
			function cc(e, t) {
				if (
					null !==
					(t = null !== (t = t.updateQueue) ? t.lastEffect : null)
				) {
					var n = (t = t.next);
					do {
						if ((n.tag & e) === e) {
							var r = n.destroy;
							(n.destroy = void 0), void 0 !== r && r();
						}
						n = n.next;
					} while (n !== t);
				}
			}
			function lc(e, t) {
				if (
					null !==
					(t = null !== (t = t.updateQueue) ? t.lastEffect : null)
				) {
					var n = (t = t.next);
					do {
						if ((n.tag & e) === e) {
							var r = n.create;
							n.destroy = r();
						}
						n = n.next;
					} while (n !== t);
				}
			}
			function sc(e, t, n) {
				switch (n.tag) {
					case 0:
					case 11:
					case 15:
					case 22:
						return void lc(3, n);
					case 1:
						if (((e = n.stateNode), 4 & n.effectTag))
							if (null === t) e.componentDidMount();
							else {
								var r =
									n.elementType === n.type
										? t.memoizedProps
										: Jo(n.type, t.memoizedProps);
								e.componentDidUpdate(
									r,
									t.memoizedState,
									e.__reactInternalSnapshotBeforeUpdate,
								);
							}
						return void (
							null !== (t = n.updateQueue) && ga(n, t, e)
						);
					case 3:
						if (null !== (t = n.updateQueue)) {
							if (((e = null), null !== n.child))
								switch (n.child.tag) {
									case 5:
									case 1:
										e = n.child.stateNode;
								}
							ga(n, t, e);
						}
						return;
					case 5:
						return (
							(e = n.stateNode),
							void (
								null === t &&
								4 & n.effectTag &&
								kn(n.type, n.memoizedProps) &&
								e.focus()
							)
						);
					case 6:
					case 4:
					case 12:
					case 19:
					case 17:
					case 20:
					case 21:
						return;
					case 13:
						return void (
							null === n.memoizedState &&
							((n = n.alternate),
							null !== n &&
								((n = n.memoizedState),
								null !== n &&
									((n = n.dehydrated), null !== n && Mt(n))))
						);
				}
				throw Error(i(163));
			}
			function uc(e, t, n) {
				switch (("function" == typeof _l && _l(t), t.tag)) {
					case 0:
					case 11:
					case 14:
					case 15:
					case 22:
						if (
							null !== (e = t.updateQueue) &&
							null !== (e = e.lastEffect)
						) {
							var r = e.next;
							Vo(97 < n ? 97 : n, function () {
								var e = r;
								do {
									var n = e.destroy;
									if (void 0 !== n) {
										var o = t;
										try {
											n();
										} catch (a) {
											Cl(o, a);
										}
									}
									e = e.next;
								} while (e !== r);
							});
						}
						break;
					case 1:
						ac(t),
							"function" ==
								typeof (n = t.stateNode).componentWillUnmount &&
								(function (e, t) {
									try {
										(t.props = e.memoizedProps),
											(t.state = e.memoizedState),
											t.componentWillUnmount();
									} catch (n) {
										Cl(e, n);
									}
								})(t, n);
						break;
					case 5:
						ac(t);
						break;
					case 4:
						gc(e, t, n);
				}
			}
			function dc(e) {
				var t = e.alternate;
				(e.return = null),
					(e.child = null),
					(e.memoizedState = null),
					(e.updateQueue = null),
					(e.dependencies = null),
					(e.alternate = null),
					(e.firstEffect = null),
					(e.lastEffect = null),
					(e.pendingProps = null),
					(e.memoizedProps = null),
					(e.stateNode = null),
					null !== t && dc(t);
			}
			function fc(e) {
				return 5 === e.tag || 3 === e.tag || 4 === e.tag;
			}
			function pc(e) {
				e: {
					for (var t = e.return; null !== t; ) {
						if (fc(t)) {
							var n = t;
							break e;
						}
						t = t.return;
					}
					throw Error(i(160));
				}
				switch (((t = n.stateNode), n.tag)) {
					case 5:
						var r = !1;
						break;
					case 3:
					case 4:
						(t = t.containerInfo), (r = !0);
						break;
					default:
						throw Error(i(161));
				}
				16 & n.effectTag && (Ue(t, ""), (n.effectTag &= -17));
				e: t: for (n = e; ; ) {
					for (; null === n.sibling; ) {
						if (null === n.return || fc(n.return)) {
							n = null;
							break e;
						}
						n = n.return;
					}
					for (
						n.sibling.return = n.return, n = n.sibling;
						5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

					) {
						if (2 & n.effectTag) continue t;
						if (null === n.child || 4 === n.tag) continue t;
						(n.child.return = n), (n = n.child);
					}
					if (!(2 & n.effectTag)) {
						n = n.stateNode;
						break e;
					}
				}
				r ? bc(e, n, t) : mc(e, n, t);
			}
			function bc(e, t, n) {
				var r = e.tag,
					o = 5 === r || 6 === r;
				if (o)
					(e = o ? e.stateNode : e.stateNode.instance),
						t
							? 8 === n.nodeType
								? n.parentNode.insertBefore(e, t)
								: n.insertBefore(e, t)
							: (8 === n.nodeType
									? (t = n.parentNode).insertBefore(e, n)
									: (t = n).appendChild(e),
								null != (n = n._reactRootContainer) ||
									null !== t.onclick ||
									(t.onclick = un));
				else if (4 !== r && null !== (e = e.child))
					for (bc(e, t, n), e = e.sibling; null !== e; )
						bc(e, t, n), (e = e.sibling);
			}
			function mc(e, t, n) {
				var r = e.tag,
					o = 5 === r || 6 === r;
				if (o)
					(e = o ? e.stateNode : e.stateNode.instance),
						t ? n.insertBefore(e, t) : n.appendChild(e);
				else if (4 !== r && null !== (e = e.child))
					for (mc(e, t, n), e = e.sibling; null !== e; )
						mc(e, t, n), (e = e.sibling);
			}
			function gc(e, t, n) {
				for (var r, o, a = t, c = !1; ; ) {
					if (!c) {
						c = a.return;
						e: for (;;) {
							if (null === c) throw Error(i(160));
							switch (((r = c.stateNode), c.tag)) {
								case 5:
									o = !1;
									break e;
								case 3:
								case 4:
									(r = r.containerInfo), (o = !0);
									break e;
							}
							c = c.return;
						}
						c = !0;
					}
					if (5 === a.tag || 6 === a.tag) {
						e: for (var l = e, s = a, u = n, d = s; ; )
							if ((uc(l, d, u), null !== d.child && 4 !== d.tag))
								(d.child.return = d), (d = d.child);
							else {
								if (d === s) break e;
								for (; null === d.sibling; ) {
									if (null === d.return || d.return === s)
										break e;
									d = d.return;
								}
								(d.sibling.return = d.return), (d = d.sibling);
							}
						o
							? ((l = r),
								(s = a.stateNode),
								8 === l.nodeType
									? l.parentNode.removeChild(s)
									: l.removeChild(s))
							: r.removeChild(a.stateNode);
					} else if (4 === a.tag) {
						if (null !== a.child) {
							(r = a.stateNode.containerInfo),
								(o = !0),
								(a.child.return = a),
								(a = a.child);
							continue;
						}
					} else if ((uc(e, a, n), null !== a.child)) {
						(a.child.return = a), (a = a.child);
						continue;
					}
					if (a === t) break;
					for (; null === a.sibling; ) {
						if (null === a.return || a.return === t) return;
						4 === (a = a.return).tag && (c = !1);
					}
					(a.sibling.return = a.return), (a = a.sibling);
				}
			}
			function hc(e, t) {
				switch (t.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
					case 22:
						return void cc(3, t);
					case 1:
					case 12:
					case 17:
						return;
					case 5:
						var n = t.stateNode;
						if (null != n) {
							var r = t.memoizedProps,
								o = null !== e ? e.memoizedProps : r;
							e = t.type;
							var a = t.updateQueue;
							if (((t.updateQueue = null), null !== a)) {
								for (
									n[On] = r,
										"input" === e &&
											"radio" === r.type &&
											null != r.name &&
											Se(n, r),
										cn(e, o),
										t = cn(e, r),
										o = 0;
									o < a.length;
									o += 2
								) {
									var c = a[o],
										l = a[o + 1];
									"style" === c
										? rn(n, l)
										: "dangerouslySetInnerHTML" === c
											? ze(n, l)
											: "children" === c
												? Ue(n, l)
												: Y(n, c, l, t);
								}
								switch (e) {
									case "input":
										Te(n, r);
										break;
									case "textarea":
										Ne(n, r);
										break;
									case "select":
										(t = n._wrapperState.wasMultiple),
											(n._wrapperState.wasMultiple =
												!!r.multiple),
											null != (e = r.value)
												? Oe(n, !!r.multiple, e, !1)
												: t !== !!r.multiple &&
													(null != r.defaultValue
														? Oe(
																n,
																!!r.multiple,
																r.defaultValue,
																!0,
															)
														: Oe(
																n,
																!!r.multiple,
																r.multiple
																	? []
																	: "",
																!1,
															));
								}
							}
						}
						return;
					case 6:
						if (null === t.stateNode) throw Error(i(162));
						return void (t.stateNode.nodeValue = t.memoizedProps);
					case 3:
						return void (
							(t = t.stateNode).hydrate &&
							((t.hydrate = !1), Mt(t.containerInfo))
						);
					case 13:
						if (
							((n = t),
							null === t.memoizedState
								? (r = !1)
								: ((r = !0), (n = t.child), ($c = qo())),
							null !== n)
						)
							e: for (e = n; ; ) {
								if (5 === e.tag)
									(a = e.stateNode),
										r
											? "function" ==
												typeof (a = a.style).setProperty
												? a.setProperty(
														"display",
														"none",
														"important",
													)
												: (a.display = "none")
											: ((a = e.stateNode),
												(o =
													null !=
														(o =
															e.memoizedProps
																.style) &&
													o.hasOwnProperty("display")
														? o.display
														: null),
												(a.style.display = nn(
													"display",
													o,
												)));
								else if (6 === e.tag)
									e.stateNode.nodeValue = r
										? ""
										: e.memoizedProps;
								else {
									if (
										13 === e.tag &&
										null !== e.memoizedState &&
										null === e.memoizedState.dehydrated
									) {
										((a = e.child.sibling).return = e),
											(e = a);
										continue;
									}
									if (null !== e.child) {
										(e.child.return = e), (e = e.child);
										continue;
									}
								}
								if (e === n) break;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === n)
										break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						return void wc(t);
					case 19:
						return void wc(t);
				}
				throw Error(i(163));
			}
			function wc(e) {
				var t = e.updateQueue;
				if (null !== t) {
					e.updateQueue = null;
					var n = e.stateNode;
					null === n && (n = e.stateNode = new rc()),
						t.forEach(function (t) {
							var r = Al.bind(null, e, t);
							n.has(t) || (n.add(t), t.then(r, r));
						});
				}
			}
			var vc = "function" == typeof WeakMap ? WeakMap : Map;
			function yc(e, t, n) {
				((n = fa(n, null)).tag = 3), (n.payload = { element: null });
				var r = t.value;
				return (
					(n.callback = function () {
						qc || ((qc = !0), (Hc = r)), oc(e, t);
					}),
					n
				);
			}
			function kc(e, t, n) {
				(n = fa(n, null)).tag = 3;
				var r = e.type.getDerivedStateFromError;
				if ("function" == typeof r) {
					var o = t.value;
					n.payload = function () {
						return oc(e, t), r(o);
					};
				}
				var a = e.stateNode;
				return (
					null !== a &&
						"function" == typeof a.componentDidCatch &&
						(n.callback = function () {
							"function" != typeof r &&
								(null === Wc
									? (Wc = new Set([this]))
									: Wc.add(this),
								oc(e, t));
							var n = t.stack;
							this.componentDidCatch(t.value, {
								componentStack: null !== n ? n : "",
							});
						}),
					n
				);
			}
			var xc,
				Ec = Math.ceil,
				Sc = Q.ReactCurrentDispatcher,
				Tc = Q.ReactCurrentOwner,
				Cc = 16,
				Pc = 32,
				Ac = 0,
				Oc = 3,
				_c = 4,
				Rc = 0,
				Nc = null,
				Lc = null,
				Ic = 0,
				Dc = Ac,
				Fc = null,
				Mc = 1073741823,
				jc = 1073741823,
				Bc = null,
				zc = 0,
				Uc = !1,
				$c = 0,
				Gc = null,
				qc = !1,
				Hc = null,
				Wc = null,
				Vc = !1,
				Zc = null,
				Kc = 90,
				Qc = null,
				Yc = 0,
				Xc = null,
				Jc = 0;
			function el() {
				return 0 != (48 & Rc)
					? 1073741821 - ((qo() / 10) | 0)
					: 0 !== Jc
						? Jc
						: (Jc = 1073741821 - ((qo() / 10) | 0));
			}
			function tl(e, t, n) {
				if (0 == (2 & (t = t.mode))) return 1073741823;
				var r = Ho();
				if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
				if (0 != (Rc & Cc)) return Ic;
				if (null !== n) e = Xo(e, 0 | n.timeoutMs || 5e3, 250);
				else
					switch (r) {
						case 99:
							e = 1073741823;
							break;
						case 98:
							e = Xo(e, 150, 100);
							break;
						case 97:
						case 96:
							e = Xo(e, 5e3, 250);
							break;
						case 95:
							e = 2;
							break;
						default:
							throw Error(i(326));
					}
				return null !== Nc && e === Ic && --e, e;
			}
			function nl(e, t) {
				if (50 < Yc) throw ((Yc = 0), (Xc = null), Error(i(185)));
				if (null !== (e = rl(e, t))) {
					var n = Ho();
					1073741823 === t
						? 0 != (8 & Rc) && 0 == (48 & Rc)
							? cl(e)
							: (al(e), 0 === Rc && Qo())
						: al(e),
						0 == (4 & Rc) ||
							(98 !== n && 99 !== n) ||
							(null === Qc
								? (Qc = new Map([[e, t]]))
								: (void 0 === (n = Qc.get(e)) || n > t) &&
									Qc.set(e, t));
				}
			}
			function rl(e, t) {
				e.expirationTime < t && (e.expirationTime = t);
				var n = e.alternate;
				null !== n && n.expirationTime < t && (n.expirationTime = t);
				var r = e.return,
					o = null;
				if (null === r && 3 === e.tag) o = e.stateNode;
				else
					for (; null !== r; ) {
						if (
							((n = r.alternate),
							r.childExpirationTime < t &&
								(r.childExpirationTime = t),
							null !== n &&
								n.childExpirationTime < t &&
								(n.childExpirationTime = t),
							null === r.return && 3 === r.tag)
						) {
							o = r.stateNode;
							break;
						}
						r = r.return;
					}
				return (
					null !== o &&
						(Nc === o && (bl(t), Dc === _c && Ul(o, Ic)), $l(o, t)),
					o
				);
			}
			function ol(e) {
				var t = e.lastExpiredTime;
				if (0 !== t) return t;
				if (!zl(e, (t = e.firstPendingTime))) return t;
				var n = e.lastPingedTime;
				return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) &&
					t !== e
					? 0
					: e;
			}
			function al(e) {
				if (0 !== e.lastExpiredTime)
					(e.callbackExpirationTime = 1073741823),
						(e.callbackPriority = 99),
						(e.callbackNode = Ko(cl.bind(null, e)));
				else {
					var t = ol(e),
						n = e.callbackNode;
					if (0 === t)
						null !== n &&
							((e.callbackNode = null),
							(e.callbackExpirationTime = 0),
							(e.callbackPriority = 90));
					else {
						var r = el();
						if (
							(1073741823 === t
								? (r = 99)
								: 1 === t || 2 === t
									? (r = 95)
									: (r =
											0 >=
											(r =
												10 * (1073741821 - t) -
												10 * (1073741821 - r))
												? 99
												: 250 >= r
													? 98
													: 5250 >= r
														? 97
														: 95),
							null !== n)
						) {
							var o = e.callbackPriority;
							if (e.callbackExpirationTime === t && o >= r)
								return;
							n !== Mo && Ao(n);
						}
						(e.callbackExpirationTime = t),
							(e.callbackPriority = r),
							(t =
								1073741823 === t
									? Ko(cl.bind(null, e))
									: Zo(r, il.bind(null, e), {
											timeout:
												10 * (1073741821 - t) - qo(),
										})),
							(e.callbackNode = t);
					}
				}
			}
			function il(e, t) {
				if (((Jc = 0), t)) return Gl(e, (t = el())), al(e), null;
				var n = ol(e);
				if (0 !== n) {
					if (((t = e.callbackNode), 0 != (48 & Rc)))
						throw Error(i(327));
					if (
						(El(), (e === Nc && n === Ic) || ul(e, n), null !== Lc)
					) {
						var r = Rc;
						Rc |= Cc;
						for (var o = fl(); ; )
							try {
								gl();
								break;
							} catch (l) {
								dl(e, l);
							}
						if ((oa(), (Rc = r), (Sc.current = o), 1 === Dc))
							throw ((t = Fc), ul(e, n), Ul(e, n), al(e), t);
						if (null === Lc)
							switch (
								((o = e.finishedWork = e.current.alternate),
								(e.finishedExpirationTime = n),
								(r = Dc),
								(Nc = null),
								r)
							) {
								case Ac:
								case 1:
									throw Error(i(345));
								case 2:
									Gl(e, 2 < n ? 2 : n);
									break;
								case Oc:
									if (
										(Ul(e, n),
										n === (r = e.lastSuspendedTime) &&
											(e.nextKnownPendingLevel = vl(o)),
										1073741823 === Mc &&
											10 < (o = $c + 500 - qo()))
									) {
										if (Uc) {
											var a = e.lastPingedTime;
											if (0 === a || a >= n) {
												(e.lastPingedTime = n),
													ul(e, n);
												break;
											}
										}
										if (0 !== (a = ol(e)) && a !== n) break;
										if (0 !== r && r !== n) {
											e.lastPingedTime = r;
											break;
										}
										e.timeoutHandle = En(
											yl.bind(null, e),
											o,
										);
										break;
									}
									yl(e);
									break;
								case _c:
									if (
										(Ul(e, n),
										n === (r = e.lastSuspendedTime) &&
											(e.nextKnownPendingLevel = vl(o)),
										Uc &&
											(0 === (o = e.lastPingedTime) ||
												o >= n))
									) {
										(e.lastPingedTime = n), ul(e, n);
										break;
									}
									if (0 !== (o = ol(e)) && o !== n) break;
									if (0 !== r && r !== n) {
										e.lastPingedTime = r;
										break;
									}
									if (
										(1073741823 !== jc
											? (r =
													10 * (1073741821 - jc) -
													qo())
											: 1073741823 === Mc
												? (r = 0)
												: ((r =
														10 * (1073741821 - Mc) -
														5e3),
													0 > (r = (o = qo()) - r) &&
														(r = 0),
													(n =
														10 * (1073741821 - n) -
														o) <
														(r =
															(120 > r
																? 120
																: 480 > r
																	? 480
																	: 1080 > r
																		? 1080
																		: 1920 >
																			  r
																			? 1920
																			: 3e3 >
																				  r
																				? 3e3
																				: 4320 >
																					  r
																					? 4320
																					: 1960 *
																						Ec(
																							r /
																								1960,
																						)) -
															r) && (r = n)),
										10 < r)
									) {
										e.timeoutHandle = En(
											yl.bind(null, e),
											r,
										);
										break;
									}
									yl(e);
									break;
								case 5:
									if (1073741823 !== Mc && null !== Bc) {
										a = Mc;
										var c = Bc;
										if (
											(0 >= (r = 0 | c.busyMinDurationMs)
												? (r = 0)
												: ((o = 0 | c.busyDelayMs),
													(r =
														(a =
															qo() -
															(10 *
																(1073741821 -
																	a) -
																(0 |
																	c.timeoutMs ||
																	5e3))) <= o
															? 0
															: o + r - a)),
											10 < r)
										) {
											Ul(e, n),
												(e.timeoutHandle = En(
													yl.bind(null, e),
													r,
												));
											break;
										}
									}
									yl(e);
									break;
								default:
									throw Error(i(329));
							}
						if ((al(e), e.callbackNode === t))
							return il.bind(null, e);
					}
				}
				return null;
			}
			function cl(e) {
				var t = e.lastExpiredTime;
				if (((t = 0 !== t ? t : 1073741823), 0 != (48 & Rc)))
					throw Error(i(327));
				if ((El(), (e === Nc && t === Ic) || ul(e, t), null !== Lc)) {
					var n = Rc;
					Rc |= Cc;
					for (var r = fl(); ; )
						try {
							ml();
							break;
						} catch (o) {
							dl(e, o);
						}
					if ((oa(), (Rc = n), (Sc.current = r), 1 === Dc))
						throw ((n = Fc), ul(e, t), Ul(e, t), al(e), n);
					if (null !== Lc) throw Error(i(261));
					(e.finishedWork = e.current.alternate),
						(e.finishedExpirationTime = t),
						(Nc = null),
						yl(e),
						al(e);
				}
				return null;
			}
			function ll(e, t) {
				var n = Rc;
				Rc |= 1;
				try {
					return e(t);
				} finally {
					0 === (Rc = n) && Qo();
				}
			}
			function sl(e, t) {
				var n = Rc;
				(Rc &= -2), (Rc |= 8);
				try {
					return e(t);
				} finally {
					0 === (Rc = n) && Qo();
				}
			}
			function ul(e, t) {
				(e.finishedWork = null), (e.finishedExpirationTime = 0);
				var n = e.timeoutHandle;
				if ((-1 !== n && ((e.timeoutHandle = -1), Sn(n)), null !== Lc))
					for (n = Lc.return; null !== n; ) {
						var r = n;
						switch (r.tag) {
							case 1:
								null != (r = r.type.childContextTypes) && ko();
								break;
							case 3:
								Ma(), po(ho), po(go);
								break;
							case 5:
								Ba(r);
								break;
							case 4:
								Ma();
								break;
							case 13:
							case 19:
								po(za);
								break;
							case 10:
								aa(r);
						}
						n = n.return;
					}
				(Nc = e),
					(Lc = Il(e.current, null)),
					(Ic = t),
					(Dc = Ac),
					(Fc = null),
					(jc = Mc = 1073741823),
					(Bc = null),
					(zc = 0),
					(Uc = !1);
			}
			function dl(e, t) {
				for (;;) {
					try {
						if ((oa(), (Ga.current = yi), Ka))
							for (var n = Wa.memoizedState; null !== n; ) {
								var r = n.queue;
								null !== r && (r.pending = null), (n = n.next);
							}
						if (
							((Ha = 0),
							(Za = Va = Wa = null),
							(Ka = !1),
							null === Lc || null === Lc.return)
						)
							return (Dc = 1), (Fc = t), (Lc = null);
						e: {
							var o = e,
								a = Lc.return,
								i = Lc,
								c = t;
							if (
								((t = Ic),
								(i.effectTag |= 2048),
								(i.firstEffect = i.lastEffect = null),
								null !== c &&
									"object" == typeof c &&
									"function" == typeof c.then)
							) {
								var l = c;
								if (0 == (2 & i.mode)) {
									var s = i.alternate;
									s
										? ((i.updateQueue = s.updateQueue),
											(i.memoizedState = s.memoizedState),
											(i.expirationTime =
												s.expirationTime))
										: ((i.updateQueue = null),
											(i.memoizedState = null));
								}
								var u = 0 != (1 & za.current),
									d = a;
								do {
									var f;
									if ((f = 13 === d.tag)) {
										var p = d.memoizedState;
										if (null !== p)
											f = null !== p.dehydrated;
										else {
											var b = d.memoizedProps;
											f =
												void 0 !== b.fallback &&
												(!0 !==
													b.unstable_avoidThisFallback ||
													!u);
										}
									}
									if (f) {
										var m = d.updateQueue;
										if (null === m) {
											var g = new Set();
											g.add(l), (d.updateQueue = g);
										} else m.add(l);
										if (0 == (2 & d.mode)) {
											if (
												((d.effectTag |= 64),
												(i.effectTag &= -2981),
												1 === i.tag)
											)
												if (null === i.alternate)
													i.tag = 17;
												else {
													var h = fa(
														1073741823,
														null,
													);
													(h.tag = 2), pa(i, h);
												}
											i.expirationTime = 1073741823;
											break e;
										}
										(c = void 0), (i = t);
										var w = o.pingCache;
										if (
											(null === w
												? ((w = o.pingCache = new vc()),
													(c = new Set()),
													w.set(l, c))
												: void 0 === (c = w.get(l)) &&
													((c = new Set()),
													w.set(l, c)),
											!c.has(i))
										) {
											c.add(i);
											var v = Pl.bind(null, o, l, i);
											l.then(v, v);
										}
										(d.effectTag |= 4096),
											(d.expirationTime = t);
										break e;
									}
									d = d.return;
								} while (null !== d);
								c = Error(
									(ge(i.type) || "A React component") +
										" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
										he(i),
								);
							}
							5 !== Dc && (Dc = 2), (c = nc(c, i)), (d = a);
							do {
								switch (d.tag) {
									case 3:
										(l = c),
											(d.effectTag |= 4096),
											(d.expirationTime = t),
											ba(d, yc(d, l, t));
										break e;
									case 1:
										l = c;
										var y = d.type,
											k = d.stateNode;
										if (
											0 == (64 & d.effectTag) &&
											("function" ==
												typeof y.getDerivedStateFromError ||
												(null !== k &&
													"function" ==
														typeof k.componentDidCatch &&
													(null === Wc ||
														!Wc.has(k))))
										) {
											(d.effectTag |= 4096),
												(d.expirationTime = t),
												ba(d, kc(d, l, t));
											break e;
										}
								}
								d = d.return;
							} while (null !== d);
						}
						Lc = wl(Lc);
					} catch (x) {
						t = x;
						continue;
					}
					break;
				}
			}
			function fl() {
				var e = Sc.current;
				return (Sc.current = yi), null === e ? yi : e;
			}
			function pl(e, t) {
				e < Mc && 2 < e && (Mc = e),
					null !== t && e < jc && 2 < e && ((jc = e), (Bc = t));
			}
			function bl(e) {
				e > zc && (zc = e);
			}
			function ml() {
				for (; null !== Lc; ) Lc = hl(Lc);
			}
			function gl() {
				for (; null !== Lc && !jo(); ) Lc = hl(Lc);
			}
			function hl(e) {
				var t = xc(e.alternate, e, Ic);
				return (
					(e.memoizedProps = e.pendingProps),
					null === t && (t = wl(e)),
					(Tc.current = null),
					t
				);
			}
			function wl(e) {
				Lc = e;
				do {
					var t = Lc.alternate;
					if (((e = Lc.return), 0 == (2048 & Lc.effectTag))) {
						if (
							((t = ec(t, Lc, Ic)),
							1 === Ic || 1 !== Lc.childExpirationTime)
						) {
							for (var n = 0, r = Lc.child; null !== r; ) {
								var o = r.expirationTime,
									a = r.childExpirationTime;
								o > n && (n = o),
									a > n && (n = a),
									(r = r.sibling);
							}
							Lc.childExpirationTime = n;
						}
						if (null !== t) return t;
						null !== e &&
							0 == (2048 & e.effectTag) &&
							(null === e.firstEffect &&
								(e.firstEffect = Lc.firstEffect),
							null !== Lc.lastEffect &&
								(null !== e.lastEffect &&
									(e.lastEffect.nextEffect = Lc.firstEffect),
								(e.lastEffect = Lc.lastEffect)),
							1 < Lc.effectTag &&
								(null !== e.lastEffect
									? (e.lastEffect.nextEffect = Lc)
									: (e.firstEffect = Lc),
								(e.lastEffect = Lc)));
					} else {
						if (null !== (t = tc(Lc)))
							return (t.effectTag &= 2047), t;
						null !== e &&
							((e.firstEffect = e.lastEffect = null),
							(e.effectTag |= 2048));
					}
					if (null !== (t = Lc.sibling)) return t;
					Lc = e;
				} while (null !== Lc);
				return Dc === Ac && (Dc = 5), null;
			}
			function vl(e) {
				var t = e.expirationTime;
				return t > (e = e.childExpirationTime) ? t : e;
			}
			function yl(e) {
				var t = Ho();
				return Vo(99, kl.bind(null, e, t)), null;
			}
			function kl(e, t) {
				do {
					El();
				} while (null !== Zc);
				if (0 != (48 & Rc)) throw Error(i(327));
				var n = e.finishedWork,
					r = e.finishedExpirationTime;
				if (null === n) return null;
				if (
					((e.finishedWork = null),
					(e.finishedExpirationTime = 0),
					n === e.current)
				)
					throw Error(i(177));
				(e.callbackNode = null),
					(e.callbackExpirationTime = 0),
					(e.callbackPriority = 90),
					(e.nextKnownPendingLevel = 0);
				var o = vl(n);
				if (
					((e.firstPendingTime = o),
					r <= e.lastSuspendedTime
						? (e.firstSuspendedTime =
								e.lastSuspendedTime =
								e.nextKnownPendingLevel =
									0)
						: r <= e.firstSuspendedTime &&
							(e.firstSuspendedTime = r - 1),
					r <= e.lastPingedTime && (e.lastPingedTime = 0),
					r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
					e === Nc && ((Lc = Nc = null), (Ic = 0)),
					1 < n.effectTag
						? null !== n.lastEffect
							? ((n.lastEffect.nextEffect = n),
								(o = n.firstEffect))
							: (o = n)
						: (o = n.firstEffect),
					null !== o)
				) {
					var a = Rc;
					(Rc |= Pc), (Tc.current = null), (vn = Vt);
					var c = mn();
					if (gn(c)) {
						if ("selectionStart" in c)
							var l = {
								start: c.selectionStart,
								end: c.selectionEnd,
							};
						else
							e: {
								var s =
									(l =
										((l = c.ownerDocument) &&
											l.defaultView) ||
										window).getSelection &&
									l.getSelection();
								if (s && 0 !== s.rangeCount) {
									l = s.anchorNode;
									var u = s.anchorOffset,
										d = s.focusNode;
									s = s.focusOffset;
									try {
										l.nodeType, d.nodeType;
									} catch (C) {
										l = null;
										break e;
									}
									var f = 0,
										p = -1,
										b = -1,
										m = 0,
										g = 0,
										h = c,
										w = null;
									t: for (;;) {
										for (
											var v;
											h !== l ||
												(0 !== u && 3 !== h.nodeType) ||
												(p = f + u),
												h !== d ||
													(0 !== s &&
														3 !== h.nodeType) ||
													(b = f + s),
												3 === h.nodeType &&
													(f += h.nodeValue.length),
												null !== (v = h.firstChild);

										)
											(w = h), (h = v);
										for (;;) {
											if (h === c) break t;
											if (
												(w === l &&
													++m === u &&
													(p = f),
												w === d && ++g === s && (b = f),
												null !== (v = h.nextSibling))
											)
												break;
											w = (h = w).parentNode;
										}
										h = v;
									}
									l =
										-1 === p || -1 === b
											? null
											: { start: p, end: b };
								} else l = null;
							}
						l = l || { start: 0, end: 0 };
					} else l = null;
					(yn = {
						activeElementDetached: null,
						focusedElem: c,
						selectionRange: l,
					}),
						(Vt = !1),
						(Gc = o);
					do {
						try {
							xl();
						} catch (C) {
							if (null === Gc) throw Error(i(330));
							Cl(Gc, C), (Gc = Gc.nextEffect);
						}
					} while (null !== Gc);
					Gc = o;
					do {
						try {
							for (c = e, l = t; null !== Gc; ) {
								var y = Gc.effectTag;
								if ((16 & y && Ue(Gc.stateNode, ""), 128 & y)) {
									var k = Gc.alternate;
									if (null !== k) {
										var x = k.ref;
										null !== x &&
											("function" == typeof x
												? x(null)
												: (x.current = null));
									}
								}
								switch (1038 & y) {
									case 2:
										pc(Gc), (Gc.effectTag &= -3);
										break;
									case 6:
										pc(Gc),
											(Gc.effectTag &= -3),
											hc(Gc.alternate, Gc);
										break;
									case 1024:
										Gc.effectTag &= -1025;
										break;
									case 1028:
										(Gc.effectTag &= -1025),
											hc(Gc.alternate, Gc);
										break;
									case 4:
										hc(Gc.alternate, Gc);
										break;
									case 8:
										gc(c, (u = Gc), l), dc(u);
								}
								Gc = Gc.nextEffect;
							}
						} catch (C) {
							if (null === Gc) throw Error(i(330));
							Cl(Gc, C), (Gc = Gc.nextEffect);
						}
					} while (null !== Gc);
					if (
						((x = yn),
						(k = mn()),
						(y = x.focusedElem),
						(l = x.selectionRange),
						k !== y &&
							y &&
							y.ownerDocument &&
							bn(y.ownerDocument.documentElement, y))
					) {
						null !== l &&
							gn(y) &&
							((k = l.start),
							void 0 === (x = l.end) && (x = k),
							"selectionStart" in y
								? ((y.selectionStart = k),
									(y.selectionEnd = Math.min(
										x,
										y.value.length,
									)))
								: (x =
										((k = y.ownerDocument || document) &&
											k.defaultView) ||
										window).getSelection &&
									((x = x.getSelection()),
									(u = y.textContent.length),
									(c = Math.min(l.start, u)),
									(l =
										void 0 === l.end
											? c
											: Math.min(l.end, u)),
									!x.extend &&
										c > l &&
										((u = l), (l = c), (c = u)),
									(u = pn(y, c)),
									(d = pn(y, l)),
									u &&
										d &&
										(1 !== x.rangeCount ||
											x.anchorNode !== u.node ||
											x.anchorOffset !== u.offset ||
											x.focusNode !== d.node ||
											x.focusOffset !== d.offset) &&
										((k = k.createRange()).setStart(
											u.node,
											u.offset,
										),
										x.removeAllRanges(),
										c > l
											? (x.addRange(k),
												x.extend(d.node, d.offset))
											: (k.setEnd(d.node, d.offset),
												x.addRange(k))))),
							(k = []);
						for (x = y; (x = x.parentNode); )
							1 === x.nodeType &&
								k.push({
									element: x,
									left: x.scrollLeft,
									top: x.scrollTop,
								});
						for (
							"function" == typeof y.focus && y.focus(), y = 0;
							y < k.length;
							y++
						)
							((x = k[y]).element.scrollLeft = x.left),
								(x.element.scrollTop = x.top);
					}
					(Vt = !!vn), (yn = vn = null), (e.current = n), (Gc = o);
					do {
						try {
							for (y = e; null !== Gc; ) {
								var E = Gc.effectTag;
								if (
									(36 & E && sc(y, Gc.alternate, Gc), 128 & E)
								) {
									k = void 0;
									var S = Gc.ref;
									if (null !== S) {
										var T = Gc.stateNode;
										Gc.tag,
											(k = T),
											"function" == typeof S
												? S(k)
												: (S.current = k);
									}
								}
								Gc = Gc.nextEffect;
							}
						} catch (C) {
							if (null === Gc) throw Error(i(330));
							Cl(Gc, C), (Gc = Gc.nextEffect);
						}
					} while (null !== Gc);
					(Gc = null), Bo(), (Rc = a);
				} else e.current = n;
				if (Vc) (Vc = !1), (Zc = e), (Kc = t);
				else
					for (Gc = o; null !== Gc; )
						(t = Gc.nextEffect), (Gc.nextEffect = null), (Gc = t);
				if (
					(0 === (t = e.firstPendingTime) && (Wc = null),
					1073741823 === t
						? e === Xc
							? Yc++
							: ((Yc = 0), (Xc = e))
						: (Yc = 0),
					"function" == typeof Ol && Ol(n.stateNode, r),
					al(e),
					qc)
				)
					throw ((qc = !1), (e = Hc), (Hc = null), e);
				return 0 != (8 & Rc) || Qo(), null;
			}
			function xl() {
				for (; null !== Gc; ) {
					var e = Gc.effectTag;
					0 != (256 & e) && ic(Gc.alternate, Gc),
						0 == (512 & e) ||
							Vc ||
							((Vc = !0),
							Zo(97, function () {
								return El(), null;
							})),
						(Gc = Gc.nextEffect);
				}
			}
			function El() {
				if (90 !== Kc) {
					var e = 97 < Kc ? 97 : Kc;
					return (Kc = 90), Vo(e, Sl);
				}
			}
			function Sl() {
				if (null === Zc) return !1;
				var e = Zc;
				if (((Zc = null), 0 != (48 & Rc))) throw Error(i(331));
				var t = Rc;
				for (Rc |= Pc, e = e.current.firstEffect; null !== e; ) {
					try {
						var n = e;
						if (0 != (512 & n.effectTag))
							switch (n.tag) {
								case 0:
								case 11:
								case 15:
								case 22:
									cc(5, n), lc(5, n);
							}
					} catch (r) {
						if (null === e) throw Error(i(330));
						Cl(e, r);
					}
					(n = e.nextEffect), (e.nextEffect = null), (e = n);
				}
				return (Rc = t), Qo(), !0;
			}
			function Tl(e, t, n) {
				pa(e, (t = yc(e, (t = nc(n, t)), 1073741823))),
					null !== (e = rl(e, 1073741823)) && al(e);
			}
			function Cl(e, t) {
				if (3 === e.tag) Tl(e, e, t);
				else
					for (var n = e.return; null !== n; ) {
						if (3 === n.tag) {
							Tl(n, e, t);
							break;
						}
						if (1 === n.tag) {
							var r = n.stateNode;
							if (
								"function" ==
									typeof n.type.getDerivedStateFromError ||
								("function" == typeof r.componentDidCatch &&
									(null === Wc || !Wc.has(r)))
							) {
								pa(n, (e = kc(n, (e = nc(t, e)), 1073741823))),
									null !== (n = rl(n, 1073741823)) && al(n);
								break;
							}
						}
						n = n.return;
					}
			}
			function Pl(e, t, n) {
				var r = e.pingCache;
				null !== r && r.delete(t),
					Nc === e && Ic === n
						? Dc === _c ||
							(Dc === Oc && 1073741823 === Mc && qo() - $c < 500)
							? ul(e, Ic)
							: (Uc = !0)
						: zl(e, n) &&
							((0 !== (t = e.lastPingedTime) && t < n) ||
								((e.lastPingedTime = n), al(e)));
			}
			function Al(e, t) {
				var n = e.stateNode;
				null !== n && n.delete(t),
					0 === (t = 0) && (t = tl((t = el()), e, null)),
					null !== (e = rl(e, t)) && al(e);
			}
			xc = function (e, t, n) {
				var r = t.expirationTime;
				if (null !== e) {
					var o = t.pendingProps;
					if (e.memoizedProps !== o || ho.current) Ii = !0;
					else {
						if (r < n) {
							switch (((Ii = !1), t.tag)) {
								case 3:
									Gi(t), Ni();
									break;
								case 5:
									if (
										(ja(t),
										4 & t.mode && 1 !== n && o.hidden)
									)
										return (
											(t.expirationTime =
												t.childExpirationTime =
													1),
											null
										);
									break;
								case 1:
									yo(t.type) && So(t);
									break;
								case 4:
									Fa(t, t.stateNode.containerInfo);
									break;
								case 10:
									(r = t.memoizedProps.value),
										(o = t.type._context),
										bo(ea, o._currentValue),
										(o._currentValue = r);
									break;
								case 13:
									if (null !== t.memoizedState)
										return 0 !==
											(r = t.child.childExpirationTime) &&
											r >= n
											? Zi(e, t, n)
											: (bo(za, 1 & za.current),
												null !== (t = Xi(e, t, n))
													? t.sibling
													: null);
									bo(za, 1 & za.current);
									break;
								case 19:
									if (
										((r = t.childExpirationTime >= n),
										0 != (64 & e.effectTag))
									) {
										if (r) return Yi(e, t, n);
										t.effectTag |= 64;
									}
									if (
										(null !== (o = t.memoizedState) &&
											((o.rendering = null),
											(o.tail = null)),
										bo(za, za.current),
										!r)
									)
										return null;
							}
							return Xi(e, t, n);
						}
						Ii = !1;
					}
				} else Ii = !1;
				switch (((t.expirationTime = 0), t.tag)) {
					case 2:
						if (
							((r = t.type),
							null !== e &&
								((e.alternate = null),
								(t.alternate = null),
								(t.effectTag |= 2)),
							(e = t.pendingProps),
							(o = vo(t, go.current)),
							ca(t, n),
							(o = Xa(null, t, r, e, o, n)),
							(t.effectTag |= 1),
							"object" == typeof o &&
								null !== o &&
								"function" == typeof o.render &&
								void 0 === o.$$typeof)
						) {
							if (
								((t.tag = 1),
								(t.memoizedState = null),
								(t.updateQueue = null),
								yo(r))
							) {
								var a = !0;
								So(t);
							} else a = !1;
							(t.memoizedState =
								null !== o.state && void 0 !== o.state
									? o.state
									: null),
								ua(t);
							var c = r.getDerivedStateFromProps;
							"function" == typeof c && va(t, r, c, e),
								(o.updater = ya),
								(t.stateNode = o),
								(o._reactInternalFiber = t),
								Sa(t, r, e, n),
								(t = $i(null, t, r, !0, a, n));
						} else (t.tag = 0), Di(null, t, o, n), (t = t.child);
						return t;
					case 16:
						e: {
							if (
								((o = t.elementType),
								null !== e &&
									((e.alternate = null),
									(t.alternate = null),
									(t.effectTag |= 2)),
								(e = t.pendingProps),
								(function (e) {
									if (-1 === e._status) {
										e._status = 0;
										var t = e._ctor;
										(t = t()),
											(e._result = t),
											t.then(
												function (t) {
													0 === e._status &&
														((t = t.default),
														(e._status = 1),
														(e._result = t));
												},
												function (t) {
													0 === e._status &&
														((e._status = 2),
														(e._result = t));
												},
											);
									}
								})(o),
								1 !== o._status)
							)
								throw o._result;
							switch (
								((o = o._result),
								(t.type = o),
								(a = t.tag =
									(function (e) {
										if ("function" == typeof e)
											return Ll(e) ? 1 : 0;
										if (null != e) {
											if ((e = e.$$typeof) === le)
												return 11;
											if (e === de) return 14;
										}
										return 2;
									})(o)),
								(e = Jo(o, e)),
								a)
							) {
								case 0:
									t = zi(null, t, o, e, n);
									break e;
								case 1:
									t = Ui(null, t, o, e, n);
									break e;
								case 11:
									t = Fi(null, t, o, e, n);
									break e;
								case 14:
									t = Mi(null, t, o, Jo(o.type, e), r, n);
									break e;
							}
							throw Error(i(306, o, ""));
						}
						return t;
					case 0:
						return (
							(r = t.type),
							(o = t.pendingProps),
							zi(
								e,
								t,
								r,
								(o = t.elementType === r ? o : Jo(r, o)),
								n,
							)
						);
					case 1:
						return (
							(r = t.type),
							(o = t.pendingProps),
							Ui(
								e,
								t,
								r,
								(o = t.elementType === r ? o : Jo(r, o)),
								n,
							)
						);
					case 3:
						if (
							(Gi(t),
							(r = t.updateQueue),
							null === e || null === r)
						)
							throw Error(i(282));
						if (
							((r = t.pendingProps),
							(o =
								null !== (o = t.memoizedState)
									? o.element
									: null),
							da(e, t),
							ma(t, r, null, n),
							(r = t.memoizedState.element) === o)
						)
							Ni(), (t = Xi(e, t, n));
						else {
							if (
								((o = t.stateNode.hydrate) &&
									((Ti = Tn(
										t.stateNode.containerInfo.firstChild,
									)),
									(Si = t),
									(o = Ci = !0)),
								o)
							)
								for (n = _a(t, null, r, n), t.child = n; n; )
									(n.effectTag = (-3 & n.effectTag) | 1024),
										(n = n.sibling);
							else Di(e, t, r, n), Ni();
							t = t.child;
						}
						return t;
					case 5:
						return (
							ja(t),
							null === e && Oi(t),
							(r = t.type),
							(o = t.pendingProps),
							(a = null !== e ? e.memoizedProps : null),
							(c = o.children),
							xn(r, o)
								? (c = null)
								: null !== a && xn(r, a) && (t.effectTag |= 16),
							Bi(e, t),
							4 & t.mode && 1 !== n && o.hidden
								? ((t.expirationTime = t.childExpirationTime =
										1),
									(t = null))
								: (Di(e, t, c, n), (t = t.child)),
							t
						);
					case 6:
						return null === e && Oi(t), null;
					case 13:
						return Zi(e, t, n);
					case 4:
						return (
							Fa(t, t.stateNode.containerInfo),
							(r = t.pendingProps),
							null === e
								? (t.child = Oa(t, null, r, n))
								: Di(e, t, r, n),
							t.child
						);
					case 11:
						return (
							(r = t.type),
							(o = t.pendingProps),
							Fi(
								e,
								t,
								r,
								(o = t.elementType === r ? o : Jo(r, o)),
								n,
							)
						);
					case 7:
						return Di(e, t, t.pendingProps, n), t.child;
					case 8:
					case 12:
						return Di(e, t, t.pendingProps.children, n), t.child;
					case 10:
						e: {
							(r = t.type._context),
								(o = t.pendingProps),
								(c = t.memoizedProps),
								(a = o.value);
							var l = t.type._context;
							if (
								(bo(ea, l._currentValue),
								(l._currentValue = a),
								null !== c)
							)
								if (
									((l = c.value),
									0 ===
										(a = Ur(l, a)
											? 0
											: 0 |
												("function" ==
												typeof r._calculateChangedBits
													? r._calculateChangedBits(
															l,
															a,
														)
													: 1073741823)))
								) {
									if (
										c.children === o.children &&
										!ho.current
									) {
										t = Xi(e, t, n);
										break e;
									}
								} else
									for (
										null !== (l = t.child) &&
										(l.return = t);
										null !== l;

									) {
										var s = l.dependencies;
										if (null !== s) {
											c = l.child;
											for (
												var u = s.firstContext;
												null !== u;

											) {
												if (
													u.context === r &&
													0 != (u.observedBits & a)
												) {
													1 === l.tag &&
														(((u = fa(
															n,
															null,
														)).tag = 2),
														pa(l, u)),
														l.expirationTime < n &&
															(l.expirationTime =
																n),
														null !==
															(u = l.alternate) &&
															u.expirationTime <
																n &&
															(u.expirationTime =
																n),
														ia(l.return, n),
														s.expirationTime < n &&
															(s.expirationTime =
																n);
													break;
												}
												u = u.next;
											}
										} else
											c =
												10 === l.tag &&
												l.type === t.type
													? null
													: l.child;
										if (null !== c) c.return = l;
										else
											for (c = l; null !== c; ) {
												if (c === t) {
													c = null;
													break;
												}
												if (null !== (l = c.sibling)) {
													(l.return = c.return),
														(c = l);
													break;
												}
												c = c.return;
											}
										l = c;
									}
							Di(e, t, o.children, n), (t = t.child);
						}
						return t;
					case 9:
						return (
							(o = t.type),
							(r = (a = t.pendingProps).children),
							ca(t, n),
							(r = r((o = la(o, a.unstable_observedBits)))),
							(t.effectTag |= 1),
							Di(e, t, r, n),
							t.child
						);
					case 14:
						return (
							(a = Jo((o = t.type), t.pendingProps)),
							Mi(e, t, o, (a = Jo(o.type, a)), r, n)
						);
					case 15:
						return ji(e, t, t.type, t.pendingProps, r, n);
					case 17:
						return (
							(r = t.type),
							(o = t.pendingProps),
							(o = t.elementType === r ? o : Jo(r, o)),
							null !== e &&
								((e.alternate = null),
								(t.alternate = null),
								(t.effectTag |= 2)),
							(t.tag = 1),
							yo(r) ? ((e = !0), So(t)) : (e = !1),
							ca(t, n),
							xa(t, r, o),
							Sa(t, r, o, n),
							$i(null, t, r, !0, e, n)
						);
					case 19:
						return Yi(e, t, n);
				}
				throw Error(i(156, t.tag));
			};
			var Ol = null,
				_l = null;
			function Rl(e, t, n, r) {
				(this.tag = e),
					(this.key = n),
					(this.sibling =
						this.child =
						this.return =
						this.stateNode =
						this.type =
						this.elementType =
							null),
					(this.index = 0),
					(this.ref = null),
					(this.pendingProps = t),
					(this.dependencies =
						this.memoizedState =
						this.updateQueue =
						this.memoizedProps =
							null),
					(this.mode = r),
					(this.effectTag = 0),
					(this.lastEffect =
						this.firstEffect =
						this.nextEffect =
							null),
					(this.childExpirationTime = this.expirationTime = 0),
					(this.alternate = null);
			}
			function Nl(e, t, n, r) {
				return new Rl(e, t, n, r);
			}
			function Ll(e) {
				return !(!(e = e.prototype) || !e.isReactComponent);
			}
			function Il(e, t) {
				var n = e.alternate;
				return (
					null === n
						? (((n = Nl(e.tag, t, e.key, e.mode)).elementType =
								e.elementType),
							(n.type = e.type),
							(n.stateNode = e.stateNode),
							(n.alternate = e),
							(e.alternate = n))
						: ((n.pendingProps = t),
							(n.effectTag = 0),
							(n.nextEffect = null),
							(n.firstEffect = null),
							(n.lastEffect = null)),
					(n.childExpirationTime = e.childExpirationTime),
					(n.expirationTime = e.expirationTime),
					(n.child = e.child),
					(n.memoizedProps = e.memoizedProps),
					(n.memoizedState = e.memoizedState),
					(n.updateQueue = e.updateQueue),
					(t = e.dependencies),
					(n.dependencies =
						null === t
							? null
							: {
									expirationTime: t.expirationTime,
									firstContext: t.firstContext,
									responders: t.responders,
								}),
					(n.sibling = e.sibling),
					(n.index = e.index),
					(n.ref = e.ref),
					n
				);
			}
			function Dl(e, t, n, r, o, a) {
				var c = 2;
				if (((r = e), "function" == typeof e)) Ll(e) && (c = 1);
				else if ("string" == typeof e) c = 5;
				else
					e: switch (e) {
						case ne:
							return Fl(n.children, o, a, t);
						case ce:
							(c = 8), (o |= 7);
							break;
						case re:
							(c = 8), (o |= 1);
							break;
						case oe:
							return (
								((e = Nl(12, n, t, 8 | o)).elementType = oe),
								(e.type = oe),
								(e.expirationTime = a),
								e
							);
						case se:
							return (
								((e = Nl(13, n, t, o)).type = se),
								(e.elementType = se),
								(e.expirationTime = a),
								e
							);
						case ue:
							return (
								((e = Nl(19, n, t, o)).elementType = ue),
								(e.expirationTime = a),
								e
							);
						default:
							if ("object" == typeof e && null !== e)
								switch (e.$$typeof) {
									case ae:
										c = 10;
										break e;
									case ie:
										c = 9;
										break e;
									case le:
										c = 11;
										break e;
									case de:
										c = 14;
										break e;
									case fe:
										(c = 16), (r = null);
										break e;
									case pe:
										c = 22;
										break e;
								}
							throw Error(i(130, null == e ? e : typeof e, ""));
					}
				return (
					((t = Nl(c, n, t, o)).elementType = e),
					(t.type = r),
					(t.expirationTime = a),
					t
				);
			}
			function Fl(e, t, n, r) {
				return ((e = Nl(7, e, r, t)).expirationTime = n), e;
			}
			function Ml(e, t, n) {
				return ((e = Nl(6, e, null, t)).expirationTime = n), e;
			}
			function jl(e, t, n) {
				return (
					((t = Nl(
						4,
						null !== e.children ? e.children : [],
						e.key,
						t,
					)).expirationTime = n),
					(t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation,
					}),
					t
				);
			}
			function Bl(e, t, n) {
				(this.tag = t),
					(this.current = null),
					(this.containerInfo = e),
					(this.pingCache = this.pendingChildren = null),
					(this.finishedExpirationTime = 0),
					(this.finishedWork = null),
					(this.timeoutHandle = -1),
					(this.pendingContext = this.context = null),
					(this.hydrate = n),
					(this.callbackNode = null),
					(this.callbackPriority = 90),
					(this.lastExpiredTime =
						this.lastPingedTime =
						this.nextKnownPendingLevel =
						this.lastSuspendedTime =
						this.firstSuspendedTime =
						this.firstPendingTime =
							0);
			}
			function zl(e, t) {
				var n = e.firstSuspendedTime;
				return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
			}
			function Ul(e, t) {
				var n = e.firstSuspendedTime,
					r = e.lastSuspendedTime;
				n < t && (e.firstSuspendedTime = t),
					(r > t || 0 === n) && (e.lastSuspendedTime = t),
					t <= e.lastPingedTime && (e.lastPingedTime = 0),
					t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
			}
			function $l(e, t) {
				t > e.firstPendingTime && (e.firstPendingTime = t);
				var n = e.firstSuspendedTime;
				0 !== n &&
					(t >= n
						? (e.firstSuspendedTime =
								e.lastSuspendedTime =
								e.nextKnownPendingLevel =
									0)
						: t >= e.lastSuspendedTime &&
							(e.lastSuspendedTime = t + 1),
					t > e.nextKnownPendingLevel &&
						(e.nextKnownPendingLevel = t));
			}
			function Gl(e, t) {
				var n = e.lastExpiredTime;
				(0 === n || n > t) && (e.lastExpiredTime = t);
			}
			function ql(e, t, n, r) {
				var o = t.current,
					a = el(),
					c = ha.suspense;
				a = tl(a, o, c);
				e: if (n) {
					t: {
						if (
							et((n = n._reactInternalFiber)) !== n ||
							1 !== n.tag
						)
							throw Error(i(170));
						var l = n;
						do {
							switch (l.tag) {
								case 3:
									l = l.stateNode.context;
									break t;
								case 1:
									if (yo(l.type)) {
										l =
											l.stateNode
												.__reactInternalMemoizedMergedChildContext;
										break t;
									}
							}
							l = l.return;
						} while (null !== l);
						throw Error(i(171));
					}
					if (1 === n.tag) {
						var s = n.type;
						if (yo(s)) {
							n = Eo(n, s, l);
							break e;
						}
					}
					n = l;
				} else n = mo;
				return (
					null === t.context
						? (t.context = n)
						: (t.pendingContext = n),
					((t = fa(a, c)).payload = { element: e }),
					null !== (r = void 0 === r ? null : r) && (t.callback = r),
					pa(o, t),
					nl(o, a),
					a
				);
			}
			function Hl(e) {
				return (e = e.current).child
					? (e.child.tag, e.child.stateNode)
					: null;
			}
			function Wl(e, t) {
				null !== (e = e.memoizedState) &&
					null !== e.dehydrated &&
					e.retryTime < t &&
					(e.retryTime = t);
			}
			function Vl(e, t) {
				Wl(e, t), (e = e.alternate) && Wl(e, t);
			}
			function Zl(e, t, n) {
				var r = new Bl(e, t, (n = null != n && !0 === n.hydrate)),
					o = Nl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
				(r.current = o),
					(o.stateNode = r),
					ua(o),
					(e[_n] = r.current),
					n &&
						0 !== t &&
						(function (e, t) {
							var n = Je(t);
							Pt.forEach(function (e) {
								mt(e, t, n);
							}),
								At.forEach(function (e) {
									mt(e, t, n);
								});
						})(0, 9 === e.nodeType ? e : e.ownerDocument),
					(this._internalRoot = r);
			}
			function Kl(e) {
				return !(
					!e ||
					(1 !== e.nodeType &&
						9 !== e.nodeType &&
						11 !== e.nodeType &&
						(8 !== e.nodeType ||
							" react-mount-point-unstable " !== e.nodeValue))
				);
			}
			function Ql(e, t, n, r, o) {
				var a = n._reactRootContainer;
				if (a) {
					var i = a._internalRoot;
					if ("function" == typeof o) {
						var c = o;
						o = function () {
							var e = Hl(i);
							c.call(e);
						};
					}
					ql(t, i, e, o);
				} else {
					if (
						((a = n._reactRootContainer =
							(function (e, t) {
								if (
									(t ||
										(t = !(
											!(t = e
												? 9 === e.nodeType
													? e.documentElement
													: e.firstChild
												: null) ||
											1 !== t.nodeType ||
											!t.hasAttribute("data-reactroot")
										)),
									!t)
								)
									for (var n; (n = e.lastChild); )
										e.removeChild(n);
								return new Zl(
									e,
									0,
									t ? { hydrate: !0 } : void 0,
								);
							})(n, r)),
						(i = a._internalRoot),
						"function" == typeof o)
					) {
						var l = o;
						o = function () {
							var e = Hl(i);
							l.call(e);
						};
					}
					sl(function () {
						ql(t, i, e, o);
					});
				}
				return Hl(i);
			}
			function Yl(e, t, n) {
				var r =
					3 < arguments.length && void 0 !== arguments[3]
						? arguments[3]
						: null;
				return {
					$$typeof: te,
					key: null == r ? null : "" + r,
					children: e,
					containerInfo: t,
					implementation: n,
				};
			}
			function Xl(e, t) {
				var n =
					2 < arguments.length && void 0 !== arguments[2]
						? arguments[2]
						: null;
				if (!Kl(t)) throw Error(i(200));
				return Yl(e, t, null, n);
			}
			(Zl.prototype.render = function (e) {
				ql(e, this._internalRoot, null, null);
			}),
				(Zl.prototype.unmount = function () {
					var e = this._internalRoot,
						t = e.containerInfo;
					ql(null, e, null, function () {
						t[_n] = null;
					});
				}),
				(gt = function (e) {
					if (13 === e.tag) {
						var t = Xo(el(), 150, 100);
						nl(e, t), Vl(e, t);
					}
				}),
				(ht = function (e) {
					13 === e.tag && (nl(e, 3), Vl(e, 3));
				}),
				(wt = function (e) {
					if (13 === e.tag) {
						var t = el();
						nl(e, (t = tl(t, e, null))), Vl(e, t);
					}
				}),
				(A = function (e, t, n) {
					switch (t) {
						case "input":
							if (
								(Te(e, n),
								(t = n.name),
								"radio" === n.type && null != t)
							) {
								for (n = e; n.parentNode; ) n = n.parentNode;
								for (
									n = n.querySelectorAll(
										"input[name=" +
											JSON.stringify("" + t) +
											'][type="radio"]',
									),
										t = 0;
									t < n.length;
									t++
								) {
									var r = n[t];
									if (r !== e && r.form === e.form) {
										var o = In(r);
										if (!o) throw Error(i(90));
										ke(r), Te(r, o);
									}
								}
							}
							break;
						case "textarea":
							Ne(e, n);
							break;
						case "select":
							null != (t = n.value) && Oe(e, !!n.multiple, t, !1);
					}
				}),
				(I = ll),
				(D = function (e, t, n, r, o) {
					var a = Rc;
					Rc |= 4;
					try {
						return Vo(98, e.bind(null, t, n, r, o));
					} finally {
						0 === (Rc = a) && Qo();
					}
				}),
				(F = function () {
					0 == (49 & Rc) &&
						((function () {
							if (null !== Qc) {
								var e = Qc;
								(Qc = null),
									e.forEach(function (e, t) {
										Gl(t, e), al(t);
									}),
									Qo();
							}
						})(),
						El());
				}),
				(M = function (e, t) {
					var n = Rc;
					Rc |= 2;
					try {
						return e(t);
					} finally {
						0 === (Rc = n) && Qo();
					}
				});
			var Jl = {
				Events: [
					Nn,
					Ln,
					In,
					C,
					E,
					Un,
					function (e) {
						at(e, zn);
					},
					N,
					L,
					Xt,
					lt,
					El,
					{ current: !1 },
				],
			};
			!(function (e) {
				var t = e.findFiberByHostInstance;
				(function (e) {
					if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
						return !1;
					var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (t.isDisabled || !t.supportsFiber) return !0;
					try {
						var n = t.inject(e);
						(Ol = function (e) {
							try {
								t.onCommitFiberRoot(
									n,
									e,
									void 0,
									64 == (64 & e.current.effectTag),
								);
							} catch (r) {}
						}),
							(_l = function (e) {
								try {
									t.onCommitFiberUnmount(n, e);
								} catch (r) {}
							});
					} catch (r) {}
				})(
					o({}, e, {
						overrideHookState: null,
						overrideProps: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: Q.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = rt(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance: function (e) {
							return t ? t(e) : null;
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
					}),
				);
			})({
				findFiberByHostInstance: Rn,
				bundleType: 0,
				version: "16.14.0",
				rendererPackageName: "react-dom",
			}),
				(t.createPortal = Xl),
				(t.hydrate = function (e, t, n) {
					if (!Kl(t)) throw Error(i(200));
					return Ql(null, e, t, !0, n);
				});
		},
		3935: (e, t, n) => {
			"use strict";
			!(function e() {
				if (
					"undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
					"function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
				)
					try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
					} catch (t) {
						console.error(t);
					}
			})(),
				(e.exports = n(4448));
		},
		9590: (e) => {
			var t = "undefined" != typeof Element,
				n = "function" == typeof Map,
				r = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			function a(e, i) {
				if (e === i) return !0;
				if (e && i && "object" == typeof e && "object" == typeof i) {
					if (e.constructor !== i.constructor) return !1;
					var c, l, s, u;
					if (Array.isArray(e)) {
						if ((c = e.length) != i.length) return !1;
						for (l = c; 0 != l--; ) if (!a(e[l], i[l])) return !1;
						return !0;
					}
					if (n && e instanceof Map && i instanceof Map) {
						if (e.size !== i.size) return !1;
						for (u = e.entries(); !(l = u.next()).done; )
							if (!i.has(l.value[0])) return !1;
						for (u = e.entries(); !(l = u.next()).done; )
							if (!a(l.value[1], i.get(l.value[0]))) return !1;
						return !0;
					}
					if (r && e instanceof Set && i instanceof Set) {
						if (e.size !== i.size) return !1;
						for (u = e.entries(); !(l = u.next()).done; )
							if (!i.has(l.value[0])) return !1;
						return !0;
					}
					if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
						if ((c = e.length) != i.length) return !1;
						for (l = c; 0 != l--; ) if (e[l] !== i[l]) return !1;
						return !0;
					}
					if (e.constructor === RegExp)
						return e.source === i.source && e.flags === i.flags;
					if (e.valueOf !== Object.prototype.valueOf)
						return e.valueOf() === i.valueOf();
					if (e.toString !== Object.prototype.toString)
						return e.toString() === i.toString();
					if (
						(c = (s = Object.keys(e)).length) !==
						Object.keys(i).length
					)
						return !1;
					for (l = c; 0 != l--; )
						if (!Object.prototype.hasOwnProperty.call(i, s[l]))
							return !1;
					if (t && e instanceof Element) return !1;
					for (l = c; 0 != l--; )
						if (
							(("_owner" !== s[l] &&
								"__v" !== s[l] &&
								"__o" !== s[l]) ||
								!e.$$typeof) &&
							!a(e[s[l]], i[s[l]])
						)
							return !1;
					return !0;
				}
				return e != e && i != i;
			}
			e.exports = function (e, t) {
				try {
					return a(e, t);
				} catch (n) {
					if ((n.message || "").match(/stack|recursion/i))
						return (
							console.warn(
								"react-fast-compare cannot handle circular refs",
							),
							!1
						);
					throw n;
				}
			};
		},
		9921: (e, t) => {
			"use strict";
			var n = "function" == typeof Symbol && Symbol.for,
				r = n ? Symbol.for("react.element") : 60103,
				o = n ? Symbol.for("react.portal") : 60106,
				a = n ? Symbol.for("react.fragment") : 60107,
				i = n ? Symbol.for("react.strict_mode") : 60108,
				c = n ? Symbol.for("react.profiler") : 60114,
				l = n ? Symbol.for("react.provider") : 60109,
				s = n ? Symbol.for("react.context") : 60110,
				u = n ? Symbol.for("react.async_mode") : 60111,
				d = n ? Symbol.for("react.concurrent_mode") : 60111,
				f = n ? Symbol.for("react.forward_ref") : 60112,
				p = n ? Symbol.for("react.suspense") : 60113,
				b = n ? Symbol.for("react.suspense_list") : 60120,
				m = n ? Symbol.for("react.memo") : 60115,
				g = n ? Symbol.for("react.lazy") : 60116,
				h = n ? Symbol.for("react.block") : 60121,
				w = n ? Symbol.for("react.fundamental") : 60117,
				v = n ? Symbol.for("react.responder") : 60118,
				y = n ? Symbol.for("react.scope") : 60119;
			function k(e) {
				if ("object" == typeof e && null !== e) {
					var t = e.$$typeof;
					switch (t) {
						case r:
							switch ((e = e.type)) {
								case u:
								case d:
								case a:
								case c:
								case i:
								case p:
									return e;
								default:
									switch ((e = e && e.$$typeof)) {
										case s:
										case f:
										case g:
										case m:
										case l:
											return e;
										default:
											return t;
									}
							}
						case o:
							return t;
					}
				}
			}
			function x(e) {
				return k(e) === d;
			}
			(t.AsyncMode = u),
				(t.ConcurrentMode = d),
				(t.ContextConsumer = s),
				(t.ContextProvider = l),
				(t.Element = r),
				(t.ForwardRef = f),
				(t.Fragment = a),
				(t.Lazy = g),
				(t.Memo = m),
				(t.Portal = o),
				(t.Profiler = c),
				(t.StrictMode = i),
				(t.Suspense = p),
				(t.isAsyncMode = function (e) {
					return x(e) || k(e) === u;
				}),
				(t.isConcurrentMode = x),
				(t.isContextConsumer = function (e) {
					return k(e) === s;
				}),
				(t.isContextProvider = function (e) {
					return k(e) === l;
				}),
				(t.isElement = function (e) {
					return (
						"object" == typeof e && null !== e && e.$$typeof === r
					);
				}),
				(t.isForwardRef = function (e) {
					return k(e) === f;
				}),
				(t.isFragment = function (e) {
					return k(e) === a;
				}),
				(t.isLazy = function (e) {
					return k(e) === g;
				}),
				(t.isMemo = function (e) {
					return k(e) === m;
				}),
				(t.isPortal = function (e) {
					return k(e) === o;
				}),
				(t.isProfiler = function (e) {
					return k(e) === c;
				}),
				(t.isStrictMode = function (e) {
					return k(e) === i;
				}),
				(t.isSuspense = function (e) {
					return k(e) === p;
				}),
				(t.isValidElementType = function (e) {
					return (
						"string" == typeof e ||
						"function" == typeof e ||
						e === a ||
						e === d ||
						e === c ||
						e === i ||
						e === p ||
						e === b ||
						("object" == typeof e &&
							null !== e &&
							(e.$$typeof === g ||
								e.$$typeof === m ||
								e.$$typeof === l ||
								e.$$typeof === s ||
								e.$$typeof === f ||
								e.$$typeof === w ||
								e.$$typeof === v ||
								e.$$typeof === y ||
								e.$$typeof === h))
					);
				}),
				(t.typeOf = k);
		},
		9864: (e, t, n) => {
			"use strict";
			e.exports = n(9921);
		},
		8790: (e, t, n) => {
			"use strict";
			n.d(t, { f: () => i, H: () => c });
			var r = n(5977),
				o = n(7462),
				a = n(7294);
			function i(e, t, n) {
				return (
					void 0 === n && (n = []),
					e.some(function (e) {
						var o = e.path
							? (0, r.LX)(t, e)
							: n.length
								? n[n.length - 1].match
								: r.F0.computeRootMatch(t);
						return (
							o &&
								(n.push({ route: e, match: o }),
								e.routes && i(e.routes, t, n)),
							o
						);
					}),
					n
				);
			}
			function c(e, t, n) {
				return (
					void 0 === t && (t = {}),
					void 0 === n && (n = {}),
					e
						? a.createElement(
								r.rs,
								n,
								e.map(function (e, n) {
									return a.createElement(r.AW, {
										key: e.key || n,
										path: e.path,
										exact: e.exact,
										strict: e.strict,
										render: function (n) {
											return e.render
												? e.render(
														(0, o.Z)({}, n, {}, t, {
															route: e,
														}),
													)
												: a.createElement(
														e.component,
														(0, o.Z)({}, n, t, {
															route: e,
														}),
													);
										},
									});
								}),
							)
						: null
				);
			}
		},
		3727: (e, t, n) => {
			"use strict";
			n.d(t, {
				VA: () => r.VA,
				NL: () => r.NL,
				l_: () => r.l_,
				AW: () => r.AW,
				F0: () => r.F0,
				gx: () => r.gx,
				rs: () => r.rs,
				Gn: () => r.Gn,
				LX: () => r.LX,
				k6: () => r.k6,
				TH: () => r.TH,
				UO: () => r.UO,
				$B: () => r.$B,
				EN: () => r.EN,
				VK: () => u,
				UT: () => d,
				rU: () => h,
				OL: () => y,
			});
			var r = n(5977),
				o = n(1721),
				a = n(7294),
				i = n(71),
				c = (n(5697), n(7462)),
				l = n(3366),
				s = n(2177),
				u = (function (e) {
					function t() {
						for (
							var t,
								n = arguments.length,
								r = new Array(n),
								o = 0;
							o < n;
							o++
						)
							r[o] = arguments[o];
						return (
							((t =
								e.call.apply(e, [this].concat(r)) ||
								this).history = (0, i.lX)(t.props)),
							t
						);
					}
					return (
						(0, o.Z)(t, e),
						(t.prototype.render = function () {
							return a.createElement(r.F0, {
								history: this.history,
								children: this.props.children,
							});
						}),
						t
					);
				})(a.Component);
			var d = (function (e) {
				function t() {
					for (
						var t, n = arguments.length, r = new Array(n), o = 0;
						o < n;
						o++
					)
						r[o] = arguments[o];
					return (
						((t =
							e.call.apply(e, [this].concat(r)) || this).history =
							(0, i.q_)(t.props)),
						t
					);
				}
				return (
					(0, o.Z)(t, e),
					(t.prototype.render = function () {
						return a.createElement(r.F0, {
							history: this.history,
							children: this.props.children,
						});
					}),
					t
				);
			})(a.Component);
			var f = function (e, t) {
					return "function" == typeof e ? e(t) : e;
				},
				p = function (e, t) {
					return "string" == typeof e
						? (0, i.ob)(e, null, null, t)
						: e;
				},
				b = function (e) {
					return e;
				},
				m = a.forwardRef;
			void 0 === m && (m = b);
			var g = m(function (e, t) {
				var n = e.innerRef,
					r = e.navigate,
					o = e.onClick,
					i = (0, l.Z)(e, ["innerRef", "navigate", "onClick"]),
					s = i.target,
					u = (0, c.Z)({}, i, {
						onClick: function (e) {
							try {
								o && o(e);
							} catch (t) {
								throw (e.preventDefault(), t);
							}
							e.defaultPrevented ||
								0 !== e.button ||
								(s && "_self" !== s) ||
								(function (e) {
									return !!(
										e.metaKey ||
										e.altKey ||
										e.ctrlKey ||
										e.shiftKey
									);
								})(e) ||
								(e.preventDefault(), r());
						},
					});
				return (u.ref = (b !== m && t) || n), a.createElement("a", u);
			});
			var h = m(function (e, t) {
					var n = e.component,
						o = void 0 === n ? g : n,
						u = e.replace,
						d = e.to,
						h = e.innerRef,
						w = (0, l.Z)(e, [
							"component",
							"replace",
							"to",
							"innerRef",
						]);
					return a.createElement(r.s6.Consumer, null, function (e) {
						e || (0, s.Z)(!1);
						var n = e.history,
							r = p(f(d, e.location), e.location),
							l = r ? n.createHref(r) : "",
							g = (0, c.Z)({}, w, {
								href: l,
								navigate: function () {
									var t = f(d, e.location),
										r =
											(0, i.Ep)(e.location) ===
											(0, i.Ep)(p(t));
									(u || r ? n.replace : n.push)(t);
								},
							});
						return (
							b !== m ? (g.ref = t || h) : (g.innerRef = h),
							a.createElement(o, g)
						);
					});
				}),
				w = function (e) {
					return e;
				},
				v = a.forwardRef;
			void 0 === v && (v = w);
			var y = v(function (e, t) {
				var n = e["aria-current"],
					o = void 0 === n ? "page" : n,
					i = e.activeClassName,
					u = void 0 === i ? "active" : i,
					d = e.activeStyle,
					b = e.className,
					m = e.exact,
					g = e.isActive,
					y = e.location,
					k = e.sensitive,
					x = e.strict,
					E = e.style,
					S = e.to,
					T = e.innerRef,
					C = (0, l.Z)(e, [
						"aria-current",
						"activeClassName",
						"activeStyle",
						"className",
						"exact",
						"isActive",
						"location",
						"sensitive",
						"strict",
						"style",
						"to",
						"innerRef",
					]);
				return a.createElement(r.s6.Consumer, null, function (e) {
					e || (0, s.Z)(!1);
					var n = y || e.location,
						i = p(f(S, n), n),
						l = i.pathname,
						P = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
						A = P
							? (0, r.LX)(n.pathname, {
									path: P,
									exact: m,
									sensitive: k,
									strict: x,
								})
							: null,
						O = !!(g ? g(A, n) : A),
						_ = "function" == typeof b ? b(O) : b,
						R = "function" == typeof E ? E(O) : E;
					O &&
						((_ = (function () {
							for (
								var e = arguments.length,
									t = new Array(e),
									n = 0;
								n < e;
								n++
							)
								t[n] = arguments[n];
							return t
								.filter(function (e) {
									return e;
								})
								.join(" ");
						})(_, u)),
						(R = (0, c.Z)({}, R, d)));
					var N = (0, c.Z)(
						{
							"aria-current": (O && o) || null,
							className: _,
							style: R,
							to: i,
						},
						C,
					);
					return (
						w !== v ? (N.ref = t || T) : (N.innerRef = T),
						a.createElement(h, N)
					);
				});
			});
		},
		5977: (e, t, n) => {
			"use strict";
			n.d(t, {
				VA: () => S,
				NL: () => C,
				l_: () => _,
				AW: () => I,
				F0: () => E,
				gx: () => z,
				rs: () => U,
				s6: () => x,
				Gn: () => O,
				LX: () => L,
				k6: () => q,
				TH: () => H,
				UO: () => W,
				$B: () => V,
				EN: () => $,
			});
			var r = n(1721),
				o = n(7294),
				a = n(5697),
				i = n.n(a),
				c = n(71),
				l = 1073741823,
				s =
					"undefined" != typeof globalThis
						? globalThis
						: "undefined" != typeof window
							? window
							: void 0 !== n.g
								? n.g
								: {};
			function u(e) {
				var t = [];
				return {
					on: function (e) {
						t.push(e);
					},
					off: function (e) {
						t = t.filter(function (t) {
							return t !== e;
						});
					},
					get: function () {
						return e;
					},
					set: function (n, r) {
						(e = n),
							t.forEach(function (t) {
								return t(e, r);
							});
					},
				};
			}
			var d =
				o.createContext ||
				function (e, t) {
					var n,
						a,
						c =
							"__create-react-context-" +
							(function () {
								var e = "__global_unique_id__";
								return (s[e] = (s[e] || 0) + 1);
							})() +
							"__",
						d = (function (e) {
							function n() {
								var t;
								return (
									((t =
										e.apply(this, arguments) ||
										this).emitter = u(t.props.value)),
									t
								);
							}
							(0, r.Z)(n, e);
							var o = n.prototype;
							return (
								(o.getChildContext = function () {
									var e;
									return ((e = {})[c] = this.emitter), e;
								}),
								(o.componentWillReceiveProps = function (e) {
									if (this.props.value !== e.value) {
										var n,
											r = this.props.value,
											o = e.value;
										(
											(a = r) === (i = o)
												? 0 !== a || 1 / a == 1 / i
												: a != a && i != i
										)
											? (n = 0)
											: ((n =
													"function" == typeof t
														? t(r, o)
														: l),
												0 !== (n |= 0) &&
													this.emitter.set(
														e.value,
														n,
													));
									}
									var a, i;
								}),
								(o.render = function () {
									return this.props.children;
								}),
								n
							);
						})(o.Component);
					d.childContextTypes =
						(((n = {})[c] = i().object.isRequired), n);
					var f = (function (t) {
						function n() {
							var e;
							return (
								((e = t.apply(this, arguments) || this).state =
									{ value: e.getValue() }),
								(e.onUpdate = function (t, n) {
									0 != ((0 | e.observedBits) & n) &&
										e.setState({ value: e.getValue() });
								}),
								e
							);
						}
						(0, r.Z)(n, t);
						var o = n.prototype;
						return (
							(o.componentWillReceiveProps = function (e) {
								var t = e.observedBits;
								this.observedBits = null == t ? l : t;
							}),
							(o.componentDidMount = function () {
								this.context[c] &&
									this.context[c].on(this.onUpdate);
								var e = this.props.observedBits;
								this.observedBits = null == e ? l : e;
							}),
							(o.componentWillUnmount = function () {
								this.context[c] &&
									this.context[c].off(this.onUpdate);
							}),
							(o.getValue = function () {
								return this.context[c]
									? this.context[c].get()
									: e;
							}),
							(o.render = function () {
								return ((e = this.props.children),
								Array.isArray(e) ? e[0] : e)(this.state.value);
								var e;
							}),
							n
						);
					})(o.Component);
					return (
						(f.contextTypes = (((a = {})[c] = i().object), a)),
						{ Provider: d, Consumer: f }
					);
				};
			const f = d;
			var p = n(2177),
				b = n(7462),
				m = n(9658),
				g = n.n(m),
				h = (n(9864), n(3366)),
				w = n(8679),
				v = n.n(w),
				y = function (e) {
					var t = f();
					return (t.displayName = e), t;
				},
				k = y("Router-History"),
				x = y("Router"),
				E = (function (e) {
					function t(t) {
						var n;
						return (
							((n = e.call(this, t) || this).state = {
								location: t.history.location,
							}),
							(n._isMounted = !1),
							(n._pendingLocation = null),
							t.staticContext ||
								(n.unlisten = t.history.listen(function (e) {
									n._isMounted
										? n.setState({ location: e })
										: (n._pendingLocation = e);
								})),
							n
						);
					}
					(0, r.Z)(t, e),
						(t.computeRootMatch = function (e) {
							return {
								path: "/",
								url: "/",
								params: {},
								isExact: "/" === e,
							};
						});
					var n = t.prototype;
					return (
						(n.componentDidMount = function () {
							(this._isMounted = !0),
								this._pendingLocation &&
									this.setState({
										location: this._pendingLocation,
									});
						}),
						(n.componentWillUnmount = function () {
							this.unlisten &&
								(this.unlisten(),
								(this._isMounted = !1),
								(this._pendingLocation = null));
						}),
						(n.render = function () {
							return o.createElement(
								x.Provider,
								{
									value: {
										history: this.props.history,
										location: this.state.location,
										match: t.computeRootMatch(
											this.state.location.pathname,
										),
										staticContext: this.props.staticContext,
									},
								},
								o.createElement(k.Provider, {
									children: this.props.children || null,
									value: this.props.history,
								}),
							);
						}),
						t
					);
				})(o.Component);
			var S = (function (e) {
				function t() {
					for (
						var t, n = arguments.length, r = new Array(n), o = 0;
						o < n;
						o++
					)
						r[o] = arguments[o];
					return (
						((t =
							e.call.apply(e, [this].concat(r)) || this).history =
							(0, c.PP)(t.props)),
						t
					);
				}
				return (
					(0, r.Z)(t, e),
					(t.prototype.render = function () {
						return o.createElement(E, {
							history: this.history,
							children: this.props.children,
						});
					}),
					t
				);
			})(o.Component);
			var T = (function (e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				(0, r.Z)(t, e);
				var n = t.prototype;
				return (
					(n.componentDidMount = function () {
						this.props.onMount &&
							this.props.onMount.call(this, this);
					}),
					(n.componentDidUpdate = function (e) {
						this.props.onUpdate &&
							this.props.onUpdate.call(this, this, e);
					}),
					(n.componentWillUnmount = function () {
						this.props.onUnmount &&
							this.props.onUnmount.call(this, this);
					}),
					(n.render = function () {
						return null;
					}),
					t
				);
			})(o.Component);
			function C(e) {
				var t = e.message,
					n = e.when,
					r = void 0 === n || n;
				return o.createElement(x.Consumer, null, function (e) {
					if ((e || (0, p.Z)(!1), !r || e.staticContext)) return null;
					var n = e.history.block;
					return o.createElement(T, {
						onMount: function (e) {
							e.release = n(t);
						},
						onUpdate: function (e, r) {
							r.message !== t &&
								(e.release(), (e.release = n(t)));
						},
						onUnmount: function (e) {
							e.release();
						},
						message: t,
					});
				});
			}
			var P = {},
				A = 0;
			function O(e, t) {
				return (
					void 0 === e && (e = "/"),
					void 0 === t && (t = {}),
					"/" === e
						? e
						: (function (e) {
								if (P[e]) return P[e];
								var t = g().compile(e);
								return A < 1e4 && ((P[e] = t), A++), t;
							})(e)(t, { pretty: !0 })
				);
			}
			function _(e) {
				var t = e.computedMatch,
					n = e.to,
					r = e.push,
					a = void 0 !== r && r;
				return o.createElement(x.Consumer, null, function (e) {
					e || (0, p.Z)(!1);
					var r = e.history,
						i = e.staticContext,
						l = a ? r.push : r.replace,
						s = (0, c.ob)(
							t
								? "string" == typeof n
									? O(n, t.params)
									: (0, b.Z)({}, n, {
											pathname: O(n.pathname, t.params),
										})
								: n,
						);
					return i
						? (l(s), null)
						: o.createElement(T, {
								onMount: function () {
									l(s);
								},
								onUpdate: function (e, t) {
									var n = (0, c.ob)(t.to);
									(0, c.Hp)(
										n,
										(0, b.Z)({}, s, { key: n.key }),
									) || l(s);
								},
								to: n,
							});
				});
			}
			var R = {},
				N = 0;
			function L(e, t) {
				void 0 === t && (t = {}),
					("string" == typeof t || Array.isArray(t)) &&
						(t = { path: t });
				var n = t,
					r = n.path,
					o = n.exact,
					a = void 0 !== o && o,
					i = n.strict,
					c = void 0 !== i && i,
					l = n.sensitive,
					s = void 0 !== l && l;
				return [].concat(r).reduce(function (t, n) {
					if (!n && "" !== n) return null;
					if (t) return t;
					var r = (function (e, t) {
							var n = "" + t.end + t.strict + t.sensitive,
								r = R[n] || (R[n] = {});
							if (r[e]) return r[e];
							var o = [],
								a = { regexp: g()(e, o, t), keys: o };
							return N < 1e4 && ((r[e] = a), N++), a;
						})(n, { end: a, strict: c, sensitive: s }),
						o = r.regexp,
						i = r.keys,
						l = o.exec(e);
					if (!l) return null;
					var u = l[0],
						d = l.slice(1),
						f = e === u;
					return a && !f
						? null
						: {
								path: n,
								url: "/" === n && "" === u ? "/" : u,
								isExact: f,
								params: i.reduce(function (e, t, n) {
									return (e[t.name] = d[n]), e;
								}, {}),
							};
				}, null);
			}
			var I = (function (e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return (
					(0, r.Z)(t, e),
					(t.prototype.render = function () {
						var e = this;
						return o.createElement(x.Consumer, null, function (t) {
							t || (0, p.Z)(!1);
							var n = e.props.location || t.location,
								r = e.props.computedMatch
									? e.props.computedMatch
									: e.props.path
										? L(n.pathname, e.props)
										: t.match,
								a = (0, b.Z)({}, t, { location: n, match: r }),
								i = e.props,
								c = i.children,
								l = i.component,
								s = i.render;
							return (
								Array.isArray(c) &&
									(function (e) {
										return 0 === o.Children.count(e);
									})(c) &&
									(c = null),
								o.createElement(
									x.Provider,
									{ value: a },
									a.match
										? c
											? "function" == typeof c
												? c(a)
												: c
											: l
												? o.createElement(l, a)
												: s
													? s(a)
													: null
										: "function" == typeof c
											? c(a)
											: null,
								)
							);
						});
					}),
					t
				);
			})(o.Component);
			function D(e) {
				return "/" === e.charAt(0) ? e : "/" + e;
			}
			function F(e, t) {
				if (!e) return t;
				var n = D(e);
				return 0 !== t.pathname.indexOf(n)
					? t
					: (0, b.Z)({}, t, {
							pathname: t.pathname.substr(n.length),
						});
			}
			function M(e) {
				return "string" == typeof e ? e : (0, c.Ep)(e);
			}
			function j(e) {
				return function () {
					(0, p.Z)(!1);
				};
			}
			function B() {}
			var z = (function (e) {
				function t() {
					for (
						var t, n = arguments.length, r = new Array(n), o = 0;
						o < n;
						o++
					)
						r[o] = arguments[o];
					return (
						((t =
							e.call.apply(e, [this].concat(r)) ||
							this).handlePush = function (e) {
							return t.navigateTo(e, "PUSH");
						}),
						(t.handleReplace = function (e) {
							return t.navigateTo(e, "REPLACE");
						}),
						(t.handleListen = function () {
							return B;
						}),
						(t.handleBlock = function () {
							return B;
						}),
						t
					);
				}
				(0, r.Z)(t, e);
				var n = t.prototype;
				return (
					(n.navigateTo = function (e, t) {
						var n = this.props,
							r = n.basename,
							o = void 0 === r ? "" : r,
							a = n.context,
							i = void 0 === a ? {} : a;
						(i.action = t),
							(i.location = (function (e, t) {
								return e
									? (0, b.Z)({}, t, {
											pathname: D(e) + t.pathname,
										})
									: t;
							})(o, (0, c.ob)(e))),
							(i.url = M(i.location));
					}),
					(n.render = function () {
						var e = this.props,
							t = e.basename,
							n = void 0 === t ? "" : t,
							r = e.context,
							a = void 0 === r ? {} : r,
							i = e.location,
							l = void 0 === i ? "/" : i,
							s = (0, h.Z)(e, [
								"basename",
								"context",
								"location",
							]),
							u = {
								createHref: function (e) {
									return D(n + M(e));
								},
								action: "POP",
								location: F(n, (0, c.ob)(l)),
								push: this.handlePush,
								replace: this.handleReplace,
								go: j(),
								goBack: j(),
								goForward: j(),
								listen: this.handleListen,
								block: this.handleBlock,
							};
						return o.createElement(
							E,
							(0, b.Z)({}, s, { history: u, staticContext: a }),
						);
					}),
					t
				);
			})(o.Component);
			var U = (function (e) {
				function t() {
					return e.apply(this, arguments) || this;
				}
				return (
					(0, r.Z)(t, e),
					(t.prototype.render = function () {
						var e = this;
						return o.createElement(x.Consumer, null, function (t) {
							t || (0, p.Z)(!1);
							var n,
								r,
								a = e.props.location || t.location;
							return (
								o.Children.forEach(
									e.props.children,
									function (e) {
										if (null == r && o.isValidElement(e)) {
											n = e;
											var i =
												e.props.path || e.props.from;
											r = i
												? L(
														a.pathname,
														(0, b.Z)({}, e.props, {
															path: i,
														}),
													)
												: t.match;
										}
									},
								),
								r
									? o.cloneElement(n, {
											location: a,
											computedMatch: r,
										})
									: null
							);
						});
					}),
					t
				);
			})(o.Component);
			function $(e) {
				var t = "withRouter(" + (e.displayName || e.name) + ")",
					n = function (t) {
						var n = t.wrappedComponentRef,
							r = (0, h.Z)(t, ["wrappedComponentRef"]);
						return o.createElement(x.Consumer, null, function (t) {
							return (
								t || (0, p.Z)(!1),
								o.createElement(
									e,
									(0, b.Z)({}, r, t, { ref: n }),
								)
							);
						});
					};
				return (n.displayName = t), (n.WrappedComponent = e), v()(n, e);
			}
			var G = o.useContext;
			function q() {
				return G(k);
			}
			function H() {
				return G(x).location;
			}
			function W() {
				var e = G(x).match;
				return e ? e.params : {};
			}
			function V(e) {
				var t = H(),
					n = G(x).match;
				return e ? L(t.pathname, e) : n;
			}
		},
		6585: (e) => {
			e.exports =
				Array.isArray ||
				function (e) {
					return (
						"[object Array]" == Object.prototype.toString.call(e)
					);
				};
		},
		9658: (e, t, n) => {
			var r = n(6585);
			(e.exports = p),
				(e.exports.parse = a),
				(e.exports.compile = function (e, t) {
					return c(a(e, t), t);
				}),
				(e.exports.tokensToFunction = c),
				(e.exports.tokensToRegExp = f);
			var o = new RegExp(
				[
					"(\\\\.)",
					"([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
				].join("|"),
				"g",
			);
			function a(e, t) {
				for (
					var n,
						r = [],
						a = 0,
						i = 0,
						c = "",
						u = (t && t.delimiter) || "/";
					null != (n = o.exec(e));

				) {
					var d = n[0],
						f = n[1],
						p = n.index;
					if (((c += e.slice(i, p)), (i = p + d.length), f))
						c += f[1];
					else {
						var b = e[i],
							m = n[2],
							g = n[3],
							h = n[4],
							w = n[5],
							v = n[6],
							y = n[7];
						c && (r.push(c), (c = ""));
						var k = null != m && null != b && b !== m,
							x = "+" === v || "*" === v,
							E = "?" === v || "*" === v,
							S = n[2] || u,
							T = h || w;
						r.push({
							name: g || a++,
							prefix: m || "",
							delimiter: S,
							optional: E,
							repeat: x,
							partial: k,
							asterisk: !!y,
							pattern: T ? s(T) : y ? ".*" : "[^" + l(S) + "]+?",
						});
					}
				}
				return i < e.length && (c += e.substr(i)), c && r.push(c), r;
			}
			function i(e) {
				return encodeURI(e).replace(/[\/?#]/g, function (e) {
					return "%" + e.charCodeAt(0).toString(16).toUpperCase();
				});
			}
			function c(e, t) {
				for (var n = new Array(e.length), o = 0; o < e.length; o++)
					"object" == typeof e[o] &&
						(n[o] = new RegExp("^(?:" + e[o].pattern + ")$", d(t)));
				return function (t, o) {
					for (
						var a = "",
							c = t || {},
							l = (o || {}).pretty ? i : encodeURIComponent,
							s = 0;
						s < e.length;
						s++
					) {
						var u = e[s];
						if ("string" != typeof u) {
							var d,
								f = c[u.name];
							if (null == f) {
								if (u.optional) {
									u.partial && (a += u.prefix);
									continue;
								}
								throw new TypeError(
									'Expected "' + u.name + '" to be defined',
								);
							}
							if (r(f)) {
								if (!u.repeat)
									throw new TypeError(
										'Expected "' +
											u.name +
											'" to not repeat, but received `' +
											JSON.stringify(f) +
											"`",
									);
								if (0 === f.length) {
									if (u.optional) continue;
									throw new TypeError(
										'Expected "' +
											u.name +
											'" to not be empty',
									);
								}
								for (var p = 0; p < f.length; p++) {
									if (((d = l(f[p])), !n[s].test(d)))
										throw new TypeError(
											'Expected all "' +
												u.name +
												'" to match "' +
												u.pattern +
												'", but received `' +
												JSON.stringify(d) +
												"`",
										);
									a += (0 === p ? u.prefix : u.delimiter) + d;
								}
							} else {
								if (
									((d = u.asterisk
										? encodeURI(f).replace(
												/[?#]/g,
												function (e) {
													return (
														"%" +
														e
															.charCodeAt(0)
															.toString(16)
															.toUpperCase()
													);
												},
											)
										: l(f)),
									!n[s].test(d))
								)
									throw new TypeError(
										'Expected "' +
											u.name +
											'" to match "' +
											u.pattern +
											'", but received "' +
											d +
											'"',
									);
								a += u.prefix + d;
							}
						} else a += u;
					}
					return a;
				};
			}
			function l(e) {
				return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
			}
			function s(e) {
				return e.replace(/([=!:$\/()])/g, "\\$1");
			}
			function u(e, t) {
				return (e.keys = t), e;
			}
			function d(e) {
				return e && e.sensitive ? "" : "i";
			}
			function f(e, t, n) {
				r(t) || ((n = t || n), (t = []));
				for (
					var o = (n = n || {}).strict,
						a = !1 !== n.end,
						i = "",
						c = 0;
					c < e.length;
					c++
				) {
					var s = e[c];
					if ("string" == typeof s) i += l(s);
					else {
						var f = l(s.prefix),
							p = "(?:" + s.pattern + ")";
						t.push(s),
							s.repeat && (p += "(?:" + f + p + ")*"),
							(i += p =
								s.optional
									? s.partial
										? f + "(" + p + ")?"
										: "(?:" + f + "(" + p + "))?"
									: f + "(" + p + ")");
					}
				}
				var b = l(n.delimiter || "/"),
					m = i.slice(-b.length) === b;
				return (
					o ||
						(i =
							(m ? i.slice(0, -b.length) : i) +
							"(?:" +
							b +
							"(?=$))?"),
					(i += a ? "$" : o && m ? "" : "(?=" + b + "|$)"),
					u(new RegExp("^" + i, d(n)), t)
				);
			}
			function p(e, t, n) {
				return (
					r(t) || ((n = t || n), (t = [])),
					(n = n || {}),
					e instanceof RegExp
						? (function (e, t) {
								var n = e.source.match(/\((?!\?)/g);
								if (n)
									for (var r = 0; r < n.length; r++)
										t.push({
											name: r,
											prefix: null,
											delimiter: null,
											optional: !1,
											repeat: !1,
											partial: !1,
											asterisk: !1,
											pattern: null,
										});
								return u(e, t);
							})(e, t)
						: r(e)
							? (function (e, t, n) {
									for (var r = [], o = 0; o < e.length; o++)
										r.push(p(e[o], t, n).source);
									return u(
										new RegExp(
											"(?:" + r.join("|") + ")",
											d(n),
										),
										t,
									);
								})(e, t, n)
							: (function (e, t, n) {
									return f(a(e, n), t, n);
								})(e, t, n)
				);
			}
		},
		3524: (e, t, n) => {
			"use strict";
			var r,
				o = n(7294),
				a =
					(r = o) && "object" == typeof r && "default" in r
						? r.default
						: r;
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
			var c = !(
				"undefined" == typeof window ||
				!window.document ||
				!window.document.createElement
			);
			e.exports = function (e, t, n) {
				if ("function" != typeof e)
					throw new Error(
						"Expected reducePropsToState to be a function.",
					);
				if ("function" != typeof t)
					throw new Error(
						"Expected handleStateChangeOnClient to be a function.",
					);
				if (void 0 !== n && "function" != typeof n)
					throw new Error(
						"Expected mapStateOnServer to either be undefined or a function.",
					);
				return function (r) {
					if ("function" != typeof r)
						throw new Error(
							"Expected WrappedComponent to be a React component.",
						);
					var l,
						s = [];
					function u() {
						(l = e(
							s.map(function (e) {
								return e.props;
							}),
						)),
							d.canUseDOM ? t(l) : n && (l = n(l));
					}
					var d = (function (e) {
						var t, n;
						function o() {
							return e.apply(this, arguments) || this;
						}
						(n = e),
							((t = o).prototype = Object.create(n.prototype)),
							(t.prototype.constructor = t),
							(t.__proto__ = n),
							(o.peek = function () {
								return l;
							}),
							(o.rewind = function () {
								if (o.canUseDOM)
									throw new Error(
										"You may only call rewind() on the server. Call peek() to read the current state.",
									);
								var e = l;
								return (l = void 0), (s = []), e;
							});
						var i = o.prototype;
						return (
							(i.UNSAFE_componentWillMount = function () {
								s.push(this), u();
							}),
							(i.componentDidUpdate = function () {
								u();
							}),
							(i.componentWillUnmount = function () {
								var e = s.indexOf(this);
								s.splice(e, 1), u();
							}),
							(i.render = function () {
								return a.createElement(r, this.props);
							}),
							o
						);
					})(o.PureComponent);
					return (
						i(
							d,
							"displayName",
							"SideEffect(" +
								(function (e) {
									return (
										e.displayName || e.name || "Component"
									);
								})(r) +
								")",
						),
						i(d, "canUseDOM", c),
						d
					);
				};
			};
		},
		2408: (e, t, n) => {
			"use strict";
			var r = n(7418),
				o = "function" == typeof Symbol && Symbol.for,
				a = o ? Symbol.for("react.element") : 60103,
				i = o ? Symbol.for("react.portal") : 60106,
				c = o ? Symbol.for("react.fragment") : 60107,
				l = o ? Symbol.for("react.strict_mode") : 60108,
				s = o ? Symbol.for("react.profiler") : 60114,
				u = o ? Symbol.for("react.provider") : 60109,
				d = o ? Symbol.for("react.context") : 60110,
				f = o ? Symbol.for("react.forward_ref") : 60112,
				p = o ? Symbol.for("react.suspense") : 60113,
				b = o ? Symbol.for("react.memo") : 60115,
				m = o ? Symbol.for("react.lazy") : 60116,
				g = "function" == typeof Symbol && Symbol.iterator;
			function h(e) {
				for (
					var t =
							"https://reactjs.org/docs/error-decoder.html?invariant=" +
							e,
						n = 1;
					n < arguments.length;
					n++
				)
					t += "&args[]=" + encodeURIComponent(arguments[n]);
				return (
					"Minified React error #" +
					e +
					"; visit " +
					t +
					" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				);
			}
			var w = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				v = {};
			function y(e, t, n) {
				(this.props = e),
					(this.context = t),
					(this.refs = v),
					(this.updater = n || w);
			}
			function k() {}
			function x(e, t, n) {
				(this.props = e),
					(this.context = t),
					(this.refs = v),
					(this.updater = n || w);
			}
			(y.prototype.isReactComponent = {}),
				(y.prototype.setState = function (e, t) {
					if (
						"object" != typeof e &&
						"function" != typeof e &&
						null != e
					)
						throw Error(h(85));
					this.updater.enqueueSetState(this, e, t, "setState");
				}),
				(y.prototype.forceUpdate = function (e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate");
				}),
				(k.prototype = y.prototype);
			var E = (x.prototype = new k());
			(E.constructor = x),
				r(E, y.prototype),
				(E.isPureReactComponent = !0);
			var S = { current: null },
				T = Object.prototype.hasOwnProperty,
				C = { key: !0, ref: !0, __self: !0, __source: !0 };
			function P(e, t, n) {
				var r,
					o = {},
					i = null,
					c = null;
				if (null != t)
					for (r in (void 0 !== t.ref && (c = t.ref),
					void 0 !== t.key && (i = "" + t.key),
					t))
						T.call(t, r) && !C.hasOwnProperty(r) && (o[r] = t[r]);
				var l = arguments.length - 2;
				if (1 === l) o.children = n;
				else if (1 < l) {
					for (var s = Array(l), u = 0; u < l; u++)
						s[u] = arguments[u + 2];
					o.children = s;
				}
				if (e && e.defaultProps)
					for (r in (l = e.defaultProps))
						void 0 === o[r] && (o[r] = l[r]);
				return {
					$$typeof: a,
					type: e,
					key: i,
					ref: c,
					props: o,
					_owner: S.current,
				};
			}
			function A(e) {
				return "object" == typeof e && null !== e && e.$$typeof === a;
			}
			var O = /\/+/g,
				_ = [];
			function R(e, t, n, r) {
				if (_.length) {
					var o = _.pop();
					return (
						(o.result = e),
						(o.keyPrefix = t),
						(o.func = n),
						(o.context = r),
						(o.count = 0),
						o
					);
				}
				return {
					result: e,
					keyPrefix: t,
					func: n,
					context: r,
					count: 0,
				};
			}
			function N(e) {
				(e.result = null),
					(e.keyPrefix = null),
					(e.func = null),
					(e.context = null),
					(e.count = 0),
					10 > _.length && _.push(e);
			}
			function L(e, t, n, r) {
				var o = typeof e;
				("undefined" !== o && "boolean" !== o) || (e = null);
				var c = !1;
				if (null === e) c = !0;
				else
					switch (o) {
						case "string":
						case "number":
							c = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case a:
								case i:
									c = !0;
							}
					}
				if (c) return n(r, e, "" === t ? "." + D(e, 0) : t), 1;
				if (((c = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
					for (var l = 0; l < e.length; l++) {
						var s = t + D((o = e[l]), l);
						c += L(o, s, n, r);
					}
				else if (
					(null === e || "object" != typeof e
						? (s = null)
						: (s =
								"function" ==
								typeof (s = (g && e[g]) || e["@@iterator"])
									? s
									: null),
					"function" == typeof s)
				)
					for (e = s.call(e), l = 0; !(o = e.next()).done; )
						c += L((o = o.value), (s = t + D(o, l++)), n, r);
				else if ("object" === o)
					throw (
						((n = "" + e),
						Error(
							h(
								31,
								"[object Object]" === n
									? "object with keys {" +
											Object.keys(e).join(", ") +
											"}"
									: n,
								"",
							),
						))
					);
				return c;
			}
			function I(e, t, n) {
				return null == e ? 0 : L(e, "", t, n);
			}
			function D(e, t) {
				return "object" == typeof e && null !== e && null != e.key
					? (function (e) {
							var t = { "=": "=0", ":": "=2" };
							return (
								"$" +
								("" + e).replace(/[=:]/g, function (e) {
									return t[e];
								})
							);
						})(e.key)
					: t.toString(36);
			}
			function F(e, t) {
				e.func.call(e.context, t, e.count++);
			}
			function M(e, t, n) {
				var r = e.result,
					o = e.keyPrefix;
				(e = e.func.call(e.context, t, e.count++)),
					Array.isArray(e)
						? j(e, r, n, function (e) {
								return e;
							})
						: null != e &&
							(A(e) &&
								(e = (function (e, t) {
									return {
										$$typeof: a,
										type: e.type,
										key: t,
										ref: e.ref,
										props: e.props,
										_owner: e._owner,
									};
								})(
									e,
									o +
										(!e.key || (t && t.key === e.key)
											? ""
											: ("" + e.key).replace(O, "$&/") +
												"/") +
										n,
								)),
							r.push(e));
			}
			function j(e, t, n, r, o) {
				var a = "";
				null != n && (a = ("" + n).replace(O, "$&/") + "/"),
					I(e, M, (t = R(t, a, r, o))),
					N(t);
			}
			var B = { current: null };
			function z() {
				var e = B.current;
				if (null === e) throw Error(h(321));
				return e;
			}
			var U = {
				ReactCurrentDispatcher: B,
				ReactCurrentBatchConfig: { suspense: null },
				ReactCurrentOwner: S,
				IsSomeRendererActing: { current: !1 },
				assign: r,
			};
			(t.Children = {
				map: function (e, t, n) {
					if (null == e) return e;
					var r = [];
					return j(e, r, null, t, n), r;
				},
				forEach: function (e, t, n) {
					if (null == e) return e;
					I(e, F, (t = R(null, null, t, n))), N(t);
				},
				count: function (e) {
					return I(
						e,
						function () {
							return null;
						},
						null,
					);
				},
				toArray: function (e) {
					var t = [];
					return (
						j(e, t, null, function (e) {
							return e;
						}),
						t
					);
				},
				only: function (e) {
					if (!A(e)) throw Error(h(143));
					return e;
				},
			}),
				(t.Component = y),
				(t.Fragment = c),
				(t.Profiler = s),
				(t.PureComponent = x),
				(t.StrictMode = l),
				(t.Suspense = p),
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
				(t.cloneElement = function (e, t, n) {
					if (null == e) throw Error(h(267, e));
					var o = r({}, e.props),
						i = e.key,
						c = e.ref,
						l = e._owner;
					if (null != t) {
						if (
							(void 0 !== t.ref && ((c = t.ref), (l = S.current)),
							void 0 !== t.key && (i = "" + t.key),
							e.type && e.type.defaultProps)
						)
							var s = e.type.defaultProps;
						for (u in t)
							T.call(t, u) &&
								!C.hasOwnProperty(u) &&
								(o[u] =
									void 0 === t[u] && void 0 !== s
										? s[u]
										: t[u]);
					}
					var u = arguments.length - 2;
					if (1 === u) o.children = n;
					else if (1 < u) {
						s = Array(u);
						for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
						o.children = s;
					}
					return {
						$$typeof: a,
						type: e.type,
						key: i,
						ref: c,
						props: o,
						_owner: l,
					};
				}),
				(t.createContext = function (e, t) {
					return (
						void 0 === t && (t = null),
						((e = {
							$$typeof: d,
							_calculateChangedBits: t,
							_currentValue: e,
							_currentValue2: e,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
						}).Provider = { $$typeof: u, _context: e }),
						(e.Consumer = e)
					);
				}),
				(t.createElement = P),
				(t.createFactory = function (e) {
					var t = P.bind(null, e);
					return (t.type = e), t;
				}),
				(t.createRef = function () {
					return { current: null };
				}),
				(t.forwardRef = function (e) {
					return { $$typeof: f, render: e };
				}),
				(t.isValidElement = A),
				(t.lazy = function (e) {
					return {
						$$typeof: m,
						_ctor: e,
						_status: -1,
						_result: null,
					};
				}),
				(t.memo = function (e, t) {
					return {
						$$typeof: b,
						type: e,
						compare: void 0 === t ? null : t,
					};
				}),
				(t.useCallback = function (e, t) {
					return z().useCallback(e, t);
				}),
				(t.useContext = function (e, t) {
					return z().useContext(e, t);
				}),
				(t.useDebugValue = function () {}),
				(t.useEffect = function (e, t) {
					return z().useEffect(e, t);
				}),
				(t.useImperativeHandle = function (e, t, n) {
					return z().useImperativeHandle(e, t, n);
				}),
				(t.useLayoutEffect = function (e, t) {
					return z().useLayoutEffect(e, t);
				}),
				(t.useMemo = function (e, t) {
					return z().useMemo(e, t);
				}),
				(t.useReducer = function (e, t, n) {
					return z().useReducer(e, t, n);
				}),
				(t.useRef = function (e) {
					return z().useRef(e);
				}),
				(t.useState = function (e) {
					return z().useState(e);
				}),
				(t.version = "16.14.0");
		},
		7294: (e, t, n) => {
			"use strict";
			e.exports = n(2408);
		},
		53: (e, t) => {
			"use strict";
			var n, r, o, a, i;
			if (
				"undefined" == typeof window ||
				"function" != typeof MessageChannel
			) {
				var c = null,
					l = null,
					s = function () {
						if (null !== c)
							try {
								var e = t.unstable_now();
								c(!0, e), (c = null);
							} catch (n) {
								throw (setTimeout(s, 0), n);
							}
					},
					u = Date.now();
				(t.unstable_now = function () {
					return Date.now() - u;
				}),
					(n = function (e) {
						null !== c
							? setTimeout(n, 0, e)
							: ((c = e), setTimeout(s, 0));
					}),
					(r = function (e, t) {
						l = setTimeout(e, t);
					}),
					(o = function () {
						clearTimeout(l);
					}),
					(a = function () {
						return !1;
					}),
					(i = t.unstable_forceFrameRate = function () {});
			} else {
				var d = window.performance,
					f = window.Date,
					p = window.setTimeout,
					b = window.clearTimeout;
				if ("undefined" != typeof console) {
					var m = window.cancelAnimationFrame;
					"function" != typeof window.requestAnimationFrame &&
						console.error(
							"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
						),
						"function" != typeof m &&
							console.error(
								"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
							);
				}
				if ("object" == typeof d && "function" == typeof d.now)
					t.unstable_now = function () {
						return d.now();
					};
				else {
					var g = f.now();
					t.unstable_now = function () {
						return f.now() - g;
					};
				}
				var h = !1,
					w = null,
					v = -1,
					y = 5,
					k = 0;
				(a = function () {
					return t.unstable_now() >= k;
				}),
					(i = function () {}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported",
								)
							: (y = 0 < e ? Math.floor(1e3 / e) : 5);
					});
				var x = new MessageChannel(),
					E = x.port2;
				(x.port1.onmessage = function () {
					if (null !== w) {
						var e = t.unstable_now();
						k = e + y;
						try {
							w(!0, e)
								? E.postMessage(null)
								: ((h = !1), (w = null));
						} catch (n) {
							throw (E.postMessage(null), n);
						}
					} else h = !1;
				}),
					(n = function (e) {
						(w = e), h || ((h = !0), E.postMessage(null));
					}),
					(r = function (e, n) {
						v = p(function () {
							e(t.unstable_now());
						}, n);
					}),
					(o = function () {
						b(v), (v = -1);
					});
			}
			function S(e, t) {
				var n = e.length;
				e.push(t);
				e: for (;;) {
					var r = (n - 1) >>> 1,
						o = e[r];
					if (!(void 0 !== o && 0 < P(o, t))) break e;
					(e[r] = t), (e[n] = o), (n = r);
				}
			}
			function T(e) {
				return void 0 === (e = e[0]) ? null : e;
			}
			function C(e) {
				var t = e[0];
				if (void 0 !== t) {
					var n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, o = e.length; r < o; ) {
							var a = 2 * (r + 1) - 1,
								i = e[a],
								c = a + 1,
								l = e[c];
							if (void 0 !== i && 0 > P(i, n))
								void 0 !== l && 0 > P(l, i)
									? ((e[r] = l), (e[c] = n), (r = c))
									: ((e[r] = i), (e[a] = n), (r = a));
							else {
								if (!(void 0 !== l && 0 > P(l, n))) break e;
								(e[r] = l), (e[c] = n), (r = c);
							}
						}
					}
					return t;
				}
				return null;
			}
			function P(e, t) {
				var n = e.sortIndex - t.sortIndex;
				return 0 !== n ? n : e.id - t.id;
			}
			var A = [],
				O = [],
				_ = 1,
				R = null,
				N = 3,
				L = !1,
				I = !1,
				D = !1;
			function F(e) {
				for (var t = T(O); null !== t; ) {
					if (null === t.callback) C(O);
					else {
						if (!(t.startTime <= e)) break;
						C(O), (t.sortIndex = t.expirationTime), S(A, t);
					}
					t = T(O);
				}
			}
			function M(e) {
				if (((D = !1), F(e), !I))
					if (null !== T(A)) (I = !0), n(j);
					else {
						var t = T(O);
						null !== t && r(M, t.startTime - e);
					}
			}
			function j(e, n) {
				(I = !1), D && ((D = !1), o()), (L = !0);
				var i = N;
				try {
					for (
						F(n), R = T(A);
						null !== R && (!(R.expirationTime > n) || (e && !a()));

					) {
						var c = R.callback;
						if (null !== c) {
							(R.callback = null), (N = R.priorityLevel);
							var l = c(R.expirationTime <= n);
							(n = t.unstable_now()),
								"function" == typeof l
									? (R.callback = l)
									: R === T(A) && C(A),
								F(n);
						} else C(A);
						R = T(A);
					}
					if (null !== R) var s = !0;
					else {
						var u = T(O);
						null !== u && r(M, u.startTime - n), (s = !1);
					}
					return s;
				} finally {
					(R = null), (N = i), (L = !1);
				}
			}
			function B(e) {
				switch (e) {
					case 1:
						return -1;
					case 2:
						return 250;
					case 5:
						return 1073741823;
					case 4:
						return 1e4;
					default:
						return 5e3;
				}
			}
			var z = i;
			(t.unstable_IdlePriority = 5),
				(t.unstable_ImmediatePriority = 1),
				(t.unstable_LowPriority = 4),
				(t.unstable_NormalPriority = 3),
				(t.unstable_Profiling = null),
				(t.unstable_UserBlockingPriority = 2),
				(t.unstable_cancelCallback = function (e) {
					e.callback = null;
				}),
				(t.unstable_continueExecution = function () {
					I || L || ((I = !0), n(j));
				}),
				(t.unstable_getCurrentPriorityLevel = function () {
					return N;
				}),
				(t.unstable_getFirstCallbackNode = function () {
					return T(A);
				}),
				(t.unstable_next = function (e) {
					switch (N) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = N;
					}
					var n = N;
					N = t;
					try {
						return e();
					} finally {
						N = n;
					}
				}),
				(t.unstable_pauseExecution = function () {}),
				(t.unstable_requestPaint = z),
				(t.unstable_runWithPriority = function (e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3;
					}
					var n = N;
					N = e;
					try {
						return t();
					} finally {
						N = n;
					}
				}),
				(t.unstable_scheduleCallback = function (e, a, i) {
					var c = t.unstable_now();
					if ("object" == typeof i && null !== i) {
						var l = i.delay;
						(l = "number" == typeof l && 0 < l ? c + l : c),
							(i =
								"number" == typeof i.timeout
									? i.timeout
									: B(e));
					} else (i = B(e)), (l = c);
					return (
						(e = {
							id: _++,
							callback: a,
							priorityLevel: e,
							startTime: l,
							expirationTime: (i = l + i),
							sortIndex: -1,
						}),
						l > c
							? ((e.sortIndex = l),
								S(O, e),
								null === T(A) &&
									e === T(O) &&
									(D ? o() : (D = !0), r(M, l - c)))
							: ((e.sortIndex = i),
								S(A, e),
								I || L || ((I = !0), n(j))),
						e
					);
				}),
				(t.unstable_shouldYield = function () {
					var e = t.unstable_now();
					F(e);
					var n = T(A);
					return (
						(n !== R &&
							null !== R &&
							null !== n &&
							null !== n.callback &&
							n.startTime <= e &&
							n.expirationTime < R.expirationTime) ||
						a()
					);
				}),
				(t.unstable_wrapCallback = function (e) {
					var t = N;
					return function () {
						var n = N;
						N = t;
						try {
							return e.apply(this, arguments);
						} finally {
							N = n;
						}
					};
				});
		},
		3840: (e, t, n) => {
			"use strict";
			e.exports = n(53);
		},
		2177: (e, t, n) => {
			"use strict";
			n.d(t, { Z: () => o });
			var r = "Invariant failed";
			function o(e, t) {
				if (!e) throw new Error(r);
			}
		},
		7462: (e, t, n) => {
			"use strict";
			function r() {
				return (
					(r =
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
					r.apply(this, arguments)
				);
			}
			n.d(t, { Z: () => r });
		},
		1721: (e, t, n) => {
			"use strict";
			function r(e, t) {
				return (
					(r =
						Object.setPrototypeOf ||
						function (e, t) {
							return (e.__proto__ = t), e;
						}),
					r(e, t)
				);
			}
			function o(e, t) {
				(e.prototype = Object.create(t.prototype)),
					(e.prototype.constructor = e),
					r(e, t);
			}
			n.d(t, { Z: () => o });
		},
		3366: (e, t, n) => {
			"use strict";
			function r(e, t) {
				if (null == e) return {};
				var n,
					r,
					o = {},
					a = Object.keys(e);
				for (r = 0; r < a.length; r++)
					(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
				return o;
			}
			n.d(t, { Z: () => r });
		},
		7529: (e) => {
			"use strict";
			e.exports = {};
		},
	},
	(e) => {
		e.O(0, [532], () => {
			return (t = 8845), e((e.s = t));
			var t;
		});
		e.O();
	},
]);
