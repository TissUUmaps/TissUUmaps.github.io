import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import semver from "semver";

import { docsPath, loadVersions } from "./tissuumaps-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// The versioned TissUUmaps app is served next to the website as static files,
// so link to it by pathname instead of as a Docusaurus route
const appUrl = "pathname:///app/";

const versions = loadVersions();
if (versions.length === 0 && !docsPath) {
  throw new Error(
    "No docs to build: run `node scripts/prepare.ts` or set TISSUUMAPS_DOCS",
  );
}
const lastVersion =
  versions.find(({ version }) => semver.prerelease(version) === null) ??
  versions[0];

const config: Config = {
  title: "TissUUmaps",
  tagline: "Spatial Biology Visualization",
  favicon: "img/favicon.ico",

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
  projectName: "website", // Usually your repo name.

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
          includeCurrentVersion: docsPath !== undefined,
          lastVersion: docsPath ? "current" : lastVersion?.line,
          editUrl: ({ docPath }) =>
            docPath.startsWith("api/")
              ? undefined
              : `https://github.com/TissUUmaps/TissUUmaps/tree/main/docs/${docPath}`,
        },
        blog: false,
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
    navbar: {
      title: "TissUUmaps",
      logo: {
        alt: "TissUUmaps Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "Packages",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/TissUUmaps/TissUUmaps",
          label: "GitHub",
          position: "right",
        },
        {
          href: appUrl,
          label: "App",
          position: "right",
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
              label: "Documentation",
              to: "/docs/intro",
            },
            {
              label: "Packages",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "SciLifeLab BioImage Informatics Unit",
              href: "https://www.scilifelab.se/units/bioimage-informatics/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/TissUUmaps/TissUUmaps",
            },
            {
              label: "App",
              href: appUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TissUUmaps Core Team. Built with Docusaurus.`,
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
