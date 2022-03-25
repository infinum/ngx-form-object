module.exports = {
	title: 'ngx-form-object',
	tagline: 'Reactive forms manager',
	url: 'https://infinum.github.io/ngx-form-object/',
	baseUrl: '/ngx-form-object/',
	onBrokenLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'infinum', // Usually your GitHub org/user name.
	projectName: 'ngx-form-object', // Usually your repo name.
	themeConfig: {
		tableOfContents: {
			minHeadingLevel: 1,
			maxHeadingLevel: 6,
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
		},
		navbar: {
			title: 'ngx-form-object',
			logo: {
				alt: 'ngx-form-object',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					href: 'https://github.com/infinum/ngx-form-object',
					label: 'GitHub',
					position: 'left',
				},

				{
					type: 'docsVersionDropdown',
					position: 'right',
					dropdownActiveClassDisabled: true,
				},
			],
		},
		footer: {
			style: 'dark',
			copyright: `Copyright © ${new Date().getFullYear()} Infinum`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
