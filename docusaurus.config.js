const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "OptionDance Docs",
  tagline: "OptionDance is cool",
  url: "https://docs.OptionDance.im",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "fox-one", // Usually your GitHub org/user name.
  projectName: "docs.pando.im", // Usually your repo name.
  clientModules: [require.resolve("./global.js")],
  themeConfig: {
    metadatas: [
      { "http-equiv": "cache-control", content: "no-cache" },
      { "http-equiv": "expires", content: "0" },
      { "http-equiv": "pragma", content: "no-cache" },
    ],
    algolia: {
      apiKey: "6957e24ea18d313524b45b1e2afbc0b5",
      indexName: "pando",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      // appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: "OptionDance Docs",
      hideOnScroll: true,
      logo: {
        alt: "Pando Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/developer/intro",
          label: "Developer",
          position: "left",
          activeBaseRegex: `/developer/`,
        },
        {
          href: "https://github.com/fox-one/docs.pando.im",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "//docs.pando.im/docs/community/contribute#translation",
              label: "Help us translate",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Developer",
              to: "/developer/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/ek45g3Cymd",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/pando_im",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/fox-one/pando",
            },
          ],
        },
      ],
      copyright: `Copyright ?? 2020 - ${new Date().getFullYear()} OptionDance`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // not working, so i write script in global.js
    gtag: {
      trackingID: "G-2MWG0DMS9R",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "developer",
        path: "developer",
        routeBasePath: "developer",
        editCurrentVersion: false,
        sidebarPath: require.resolve("./sidebar.developer.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    "docusaurus-plugin-sass",
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "ja", "ko", "de", "zh"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
      es: {
        label: "Espa??ol",
      },
      ja: {
        label: "?????????",
      },
      ko: {
        label: "?????????",
      },
      de: {
        label: "Deutsch",
      },
      zh: {
        label: "??????",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebar.docs.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          feedOptions: {
            type: "all",
            title: "Pando Blog",
          },
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/theme.scss"),
          ],
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
};
