"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
	[6477],
	{
		4530: (e, t, n) => {
			n.d(t, { Q: () => s });
			var r = n(7462),
				a = n(7294);
			const l = "uppercase_C0Ev";
			function s(e) {
				return a.createElement(
					"a",
					(0, r.Z)({}, e, {
						className:
							"button button--outline button--primary " + l,
					}),
					e.children,
				);
			}
		},
		1185: (e, t, n) => {
			n.d(t, { A: () => i });
			var r = n(7294);
			const a = "logo_VS1e",
				l = "image_i3r8";
			var s = n(8465),
				o = n(4996);
			function i(e) {
				return r.createElement(
					"a",
					{ href: e.infoLink, className: a },
					r.createElement(s.Z, {
						alt: e.caption,
						title: e.caption,
						className: l,
						sources: {
							light: (0, o.Z)(
								void 0 === e.lightImage
									? e.image
									: e.lightImage,
							),
							dark: (0, o.Z)(
								void 0 === e.darkImage ? e.image : e.darkImage,
							),
						},
					}),
				);
			}
		},
		694: (e, t, n) => {
			n.r(t), n.d(t, { default: () => m });
			var r = n(7462),
				a = n(1721),
				l = n(7294),
				s = n(2049),
				o = n(6706),
				i = n(1185),
				c = n(4530),
				u = (function (e) {
					function t() {
						return e.apply(this, arguments) || this;
					}
					return (
						(0, a.Z)(t, e),
						(t.prototype.render = function () {
							var e = this.props.config;
							if (0 === (e.customFields.users || []).length)
								return null;
							var t = e.customFields.users.map(function (e) {
								return l.createElement(
									i.A,
									(0, r.Z)({ key: e.infoLink }, e),
								);
							});
							return l.createElement(
								"div",
								{
									className:
										"padding-vert--lg " +
										o.Z.flexColumnCenter,
								},
								l.createElement(
									"div",
									{ className: o.Z.flexColumnCenter },
									l.createElement(
										"h1",
										null,
										"Who is Using This?",
									),
									l.createElement(
										"p",
										null,
										"This project is used by many folks",
									),
								),
								l.createElement(
									"div",
									{
										className:
											"padding-vert--lg " +
											o.Z.flexRowContainer,
									},
									t,
								),
								l.createElement(
									"p",
									null,
									"Are you using this project?",
								),
								l.createElement(
									c.Q,
									{
										href: "https://github.com/swc-project/website/blob/master/website/docusaurus.config.js",
									},
									"Add your company",
								),
							);
						}),
						t
					);
				})(l.Component);
			const m = function (e) {
				return l.createElement(s.Z, null, l.createElement(u, e));
			};
		},
		6706: (e, t, n) => {
			n.d(t, { Z: () => r });
			const r = {
				flexRowCenter: "flexRowCenter_SDbx",
				flexColumnCenter: "flexColumnCenter_dXRb",
			};
		},
	},
]);
