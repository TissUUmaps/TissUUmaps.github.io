import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import semver from "semver";

import { docsPath, loadTypedocSidebar, loadVersions } from "./tissuumaps-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const versions = loadVersions();
if (versions.length === 0 && !docsPath) {
  throw new Error(
    "No docs to build: run `pnpm run prepare:site` or set TISSUUMAPS_DOCS",
  );
}
const lastVersion =
  versions.find(({ version }) => semver.prerelease(version) === null) ??
  versions[0];

const config: Config = {
  title: "TissUUmaps",
  tagline: "Spatial Biology Visualization",
  favicon: "img/favicon.ico",

  // Lato, the SciLifeLab typeface
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap",
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://tissuumaps.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCUSAURUS_BASE_URL || "/website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TissUUmaps", // Usually your GitHub org/user name.
  projectName: "tissuumaps.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: docsPath,
          sidebarPath: "./sidebars.ts",
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const items = await defaultSidebarItemsGenerator(args);
            return items.map((item) =>
              item.type === "category" &&
              item.link?.type === "doc" &&
              item.link.id === "api/index"
                ? {
                    ...item,
                    label: "API",
                    link: { type: "generated-index", slug: "/category/api" },
                    items: loadTypedocSidebar(
                      args.version.contentPath,
                    ) as typeof items,
                  }
                : item,
            );
          },
          includeCurrentVersion: docsPath !== undefined,
          lastVersion: docsPath ? "current" : lastVersion?.line,
          editUrl: ({ docPath }) =>
            docPath.startsWith("api/")
              ? undefined
              : `https://github.com/TissUUmaps/TissUUmaps/tree/main/docs/${docPath}`,
        },
        // Markdown pages in src/pages get an "Edit this page" link
        pages: {
          editUrl:
            "https://github.com/TissUUmaps/tissuumaps.github.io/edit/main/",
        },
        // The gallery: one Markdown file per project in gallery/, shown as
        // cards by our own list page (see gallery/README.md)
        blog: {
          path: "gallery",
          routeBasePath: "gallery",
          blogTitle: "Gallery",
          blogDescription:
            "Example projects. Each one opens directly in TissUUmaps, in your browser.",
          blogListComponent: "@site/src/components/pages/GalleryListPage",
          blogTagsPostsComponent: "@site/src/components/pages/GalleryListPage",
          blogPostComponent: "@site/src/components/pages/GalleryProjectPage",
          exclude: ["**/_*/**", "**/_*.md", "README.md"],
          postsPerPage: "ALL",
          blogSidebarCount: 0,
          showReadingTime: false,
          archiveBasePath: null,
          feedOptions: { type: null },
          onUntruncatedBlogPosts: "ignore",
          editUrl:
            "https://github.com/TissUUmaps/tissuumaps.github.io/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // Points TissUUmaps 3 users to the legacy website while 4 is in beta
    announcementBar: {
      id: "tissuumaps3-legacy",
      content:
        'TissUUmaps 4 is in beta. Looking for TissUUmaps 3? <a href="https://tissuumaps.github.io/TissUUmaps3">Go to the TissUUmaps 3 website</a>',
      backgroundColor: "var(--scilifelab-lime)",
      textColor: "var(--scilifelab-dark-gray)",
    },
    navbar: {
      title: "TissUUmaps",
      logo: {
        alt: "TissUUmaps Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/getting-started",
          label: "Getting started",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/gallery",
          label: "Gallery",
          position: "left",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          type: "custom-partnerLogos",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} TissUUmaps Core Team.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // mermaid diagrams
  // https://docusaurus.io/docs/markdown-features/diagrams
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
