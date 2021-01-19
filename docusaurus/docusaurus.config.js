module.exports = {
  title: 'ngx-form-object',
  tagline: 'Reactive forms manager',
  url: 'https://darrac.github.io/docusaurus-test/',
  baseUrl: '/docusaurus-test/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'darrac', // Usually your GitHub org/user name.
  projectName: 'docusaurus-test', // Usually your repo name.
  themeConfig: {
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/infinum/ngx-form-object',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
