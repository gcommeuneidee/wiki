// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DOC GCOM',
  tagline: 'Dinosaurs are super super cool',
  url: 'https://github.com',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gcommeuneidee', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

	presets: [
		[
		'@docusaurus/preset-classic',
		{
			docs: {
				routeBasePath: 'docs',
				path: 'docs',
				sidebarPath: require.resolve('./sidebars.js'),
				lastVersion: 'current',
				onlyIncludeVersions: ['current'],
			},
			theme: {
				customCss: require.resolve('./src/css/custom.css'),
			},
		},
		],
	],

  plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'docs-accessibilite',
				path: 'docs-accessibilite',
				routeBasePath: 'docs-accessibilite',
				sidebarPath: require.resolve('./sidebars.js'),
			}, 
		],
	],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DOC GCOM',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [

          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },

          {
            to: '/docs-accessibilite/intro',    // ./docs-api/Intro.md
            label: 'Accessibilité',
            position: 'left',
            activeBaseRegex: `/docs-accessibilite/`,
          }

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
