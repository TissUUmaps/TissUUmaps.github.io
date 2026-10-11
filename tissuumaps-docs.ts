import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Absolute path to the TissUUmaps docs previewed as the current version, if
 * `TISSUUMAPS_DOCS` is set (e.g. `TISSUUMAPS_DOCS=../TissUUmaps/docs`)
 */
export const docsPath = process.env.TISSUUMAPS_DOCS
  ? resolve(process.env.TISSUUMAPS_DOCS)
  : undefined;

/** The site directory, which holds this file */
const siteDir = fileURLToPath(new URL(".", import.meta.url));

/**
 * Loads the released versions prepared by `scripts/prepare.mts`
 *
 * @returns The versions in the order of `versions.json` (highest line first),
 * each with its released version; empty if nothing was prepared
 */
export function loadVersions(): { line: string; version: string }[] {
  const versionsFile = join(siteDir, "versions.json");
  if (!existsSync(versionsFile)) {
    return [];
  }
  const lines = JSON.parse(readFileSync(versionsFile, "utf8")) as string[];
  return lines.map((line) => {
    const release = JSON.parse(
      readFileSync(join(siteDir, "releases", line, "release.json"), "utf8"),
    ) as { version: string };
    return { line, version: release.version };
  });
}

/**
 * Loads the sidebar items that typedoc generated for the API docs of a docs
 * version
 *
 * @param docsDir - The docs folder of the version
 * @returns The sidebar items
 * @throws Error if the docs folder has no typedoc sidebar
 */
export function loadTypedocSidebar(docsDir: string): unknown[] {
  const typedocSidebarFile = join(docsDir, "api", "typedoc-sidebar.cjs");
  if (!existsSync(typedocSidebarFile)) {
    throw new Error(
      `${typedocSidebarFile} not found, generate the API docs in TissUUmaps first`,
    );
  }
  const require = createRequire(import.meta.url);
  return require(typedocSidebarFile) as unknown[];
}
