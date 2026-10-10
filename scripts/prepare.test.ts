import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import {
  comparePrereleaseIdentifiers,
  comparePrereleases,
  compareVersions,
  formatLine,
  formatVersion,
  isPrerelease,
  parseVersion,
  prepare,
  selectVersionsToDeploy,
} from "./prepare.ts";

const parse = parseVersion;

void test("parses stable and prerelease versions", () => {
  assert.deepEqual(parse("4.0.1"), {
    major: 4,
    minor: 0,
    patch: 1,
    prerelease: [],
  });
  assert.deepEqual(parse("4.0.0-beta.10"), {
    major: 4,
    minor: 0,
    patch: 0,
    prerelease: ["beta", 10],
  });
  assert.deepEqual(parse("4.0.0-0a.1-b.x").prerelease, ["0a", "1-b", "x"]);
  assert.throws(() => parseVersion("v4.0.0"), /not a semantic version/);
  assert.throws(() => parseVersion("4.0"), /not a semantic version/);
});

void test("formats versions", () => {
  assert.equal(formatVersion(parse("4.0.0-beta.0")), "4.0.0-beta.0");
  assert.equal(formatVersion(parse("4.1.0")), "4.1.0");
  assert.equal(isPrerelease(parse("4.0.0-rc.1")), true);
  assert.equal(isPrerelease(parse("4.0.0")), false);
});

void test("compares prerelease identifiers", () => {
  assert.ok(comparePrereleaseIdentifiers(2, 10) < 0);
  assert.equal(comparePrereleaseIdentifiers(1, 1), 0);
  assert.ok(comparePrereleaseIdentifiers(99, "alpha") < 0);
  assert.ok(comparePrereleaseIdentifiers("alpha", 0) > 0);
  assert.ok(comparePrereleaseIdentifiers("alpha", "beta") < 0);
  assert.equal(comparePrereleaseIdentifiers("rc", "rc"), 0);
});

void test("compares lists of prerelease identifiers", () => {
  assert.equal(comparePrereleases([], []), 0);
  assert.ok(comparePrereleases([], ["rc", 1]) > 0);
  assert.ok(comparePrereleases(["rc", 1], []) < 0);
  assert.ok(comparePrereleases(["beta"], ["beta", 0]) < 0);
  assert.ok(comparePrereleases(["beta", 2], ["beta", 10]) < 0);
  assert.equal(comparePrereleases(["rc", 1], ["rc", 1]), 0);
});

void test("orders versions by semantic version precedence", () => {
  const ordered = [
    "4.0.0-alpha",
    "4.0.0-alpha.1",
    "4.0.0-beta.0",
    "4.0.0-beta.1",
    "4.0.0-beta.2",
    "4.0.0-beta.10",
    "4.0.0-rc.1",
    "4.0.0",
    "4.0.1",
    "4.0.9",
    "4.1.0-rc.1",
    "4.1.0",
    "5.0.0",
  ].map(parse);
  for (let i = 0; i < ordered.length; i++) {
    for (let j = 0; j < ordered.length; j++) {
      const expected = Math.sign(i - j);
      assert.equal(
        Math.sign(compareVersions(ordered[i]!, ordered[j]!)),
        expected,
        `${formatVersion(ordered[i]!)} vs ${formatVersion(ordered[j]!)}`,
      );
    }
  }
});

/** Runs {@link selectVersionsToDeploy} on version strings */
function select(versions: string[]) {
  const { versionsToDeploy, latestVersion } = selectVersionsToDeploy(
    versions.map(parseVersion),
  );
  return {
    deployed: versionsToDeploy.map(formatVersion),
    latest: latestVersion === null ? null : formatVersion(latestVersion),
  };
}

void test("names lines by MAJOR.MINOR", () => {
  assert.equal(formatLine(parseVersion("4.1.2")), "4.1");
  assert.equal(formatLine(parseVersion("4.10.0-rc.1")), "4.10");
});

void test("deploys every stable line, in ascending order", () => {
  assert.deepEqual(select(["4.1.2", "3.9.0", "4.0.1"]), {
    deployed: ["3.9.0", "4.0.1", "4.1.2"],
    latest: "4.1.2",
  });
});

void test("deploys prereleases while nothing stable exists", () => {
  assert.deepEqual(select(["4.1.0-rc.1", "4.0.0-beta.2"]), {
    deployed: ["4.0.0-beta.2", "4.1.0-rc.1"],
    latest: "4.1.0-rc.1",
  });
});

void test("shows the latest prerelease by default only while nothing stable exists", () => {
  assert.deepEqual(select(["4.0.3", "4.1.0-rc.1"]), {
    deployed: ["4.0.3", "4.1.0-rc.1"],
    latest: "4.0.3",
  });
});

void test("drops abandoned prerelease lines", () => {
  assert.deepEqual(
    select(["4.0.0-rc.1", "4.1.0", "4.2.0-rc.1", "4.3.0", "4.4.0-rc.1"]),
    {
      deployed: ["4.1.0", "4.3.0", "4.4.0-rc.1"],
      latest: "4.3.0",
    },
  );
});

void test("handles no versions", () => {
  assert.deepEqual(select([]), { deployed: [], latest: null });
});

/** The website, which the fixtures copy to run Docusaurus */
const websiteDir = join(import.meta.dirname, "..");

/**
 * Creates a copy of the website with the given released versions (one per
 * line) and their app assets in a temporary directory
 */
function fixture(
  versions: string[],
  appPage = "<html><!-- GHA_CUSTOM_HTML --></html>",
) {
  const dir = mkdtempSync(join(tmpdir(), "prepare-test-"));
  const siteDir = join(dir, "site");
  for (const path of [
    "docusaurus.config.ts",
    "sidebars.ts",
    "tissuumaps-docs.ts",
    "package.json",
    "src",
    "static",
  ]) {
    cpSync(join(websiteDir, path), join(siteDir, path), {
      recursive: true,
      // Apps prepared locally are no part of the website
      filter: (source) => source !== join(websiteDir, "static", "app"),
    });
  }
  symlinkSync(join(websiteDir, "node_modules"), join(siteDir, "node_modules"));
  mkdirSync(join(siteDir, ".github", "pages"), { recursive: true });
  writeFileSync(
    join(siteDir, ".github", "pages", "custom.html"),
    "<script>matomo</script>",
  );
  const appSource = join(dir, "app");
  mkdirSync(appSource);
  writeFileSync(join(appSource, "index.html"), appPage);
  const assetsDir = join(dir, "assets");
  mkdirSync(assetsDir);
  for (const version of versions) {
    const releaseDir = join(siteDir, "releases", formatLine(parse(version)));
    mkdirSync(join(releaseDir, "docs", "api"), { recursive: true });
    writeFileSync(
      join(releaseDir, "release.json"),
      JSON.stringify({ version }),
    );
    writeFileSync(join(releaseDir, "docs", "intro.md"), `# ${version}`);
    writeFileSync(join(releaseDir, "docs", "api", "index.md"), "# API");
    writeFileSync(join(releaseDir, "docs", "api", "core.md"), "# Core");
    writeFileSync(
      join(releaseDir, "docs", "api", "typedoc-sidebar.cjs"),
      `module.exports = [{ type: "doc", id: "api/core" }];`,
    );
    execFileSync(
      "zip",
      ["-q", join(assetsDir, `tissuumaps-${version}.zip`), "index.html"],
      { cwd: appSource },
    );
  }
  return { dir, siteDir, assetsDir };
}

void test("prepares the selected versions' docs and apps", () => {
  const { dir, siteDir, assetsDir } = fixture([
    "4.0.0-rc.1",
    "4.1.1",
    "4.3.0-beta.0",
  ]);
  try {
    prepare({ siteDir, skipApps: false, assetsDir });
    const read = (path: string) => readFileSync(join(siteDir, path), "utf8");
    // Docusaurus versions, highest first; abandoned prerelease lines are left out
    assert.deepEqual(JSON.parse(read("versions.json")), ["4.3", "4.1"]);
    assert.equal(read("versioned_docs/version-4.1/intro.md"), "# 4.1.1");
    assert.ok(!existsSync(join(siteDir, "versioned_docs/version-4.0")));
    const sidebars = JSON.parse(
      read("versioned_sidebars/version-4.1-sidebars.json"),
    ) as Record<string, [{ items?: unknown }]>;
    assert.deepEqual(sidebars.docsSidebar, [
      { type: "autogenerated", dirName: "." },
    ]);
    assert.deepEqual(sidebars.apiSidebar?.[0].items, [
      { type: "doc", id: "api/core" },
    ]);
    // Apps with the custom HTML, and app/ redirecting to the latest stable line
    assert.equal(
      read("static/app/4.1/index.html"),
      "<html><script>matomo</script></html>",
    );
    assert.ok(existsSync(join(siteDir, "static/app/4.3/index.html")));
    assert.ok(!existsSync(join(siteDir, "static/app/4.0")));
    assert.match(read("static/app/index.html"), /url=4\.1\/"/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("replaces previously prepared versions", () => {
  const { dir, siteDir, assetsDir } = fixture(["4.0.0", "4.1.0"]);
  try {
    prepare({ siteDir, skipApps: false, assetsDir });
    rmSync(join(siteDir, "releases", "4.0"), { recursive: true });
    prepare({ siteDir, skipApps: false, assetsDir });
    assert.ok(!existsSync(join(siteDir, "versioned_docs/version-4.0")));
    assert.ok(
      !existsSync(
        join(siteDir, "versioned_sidebars/version-4.0-sidebars.json"),
      ),
    );
    assert.ok(!existsSync(join(siteDir, "static/app/4.0")));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("skips the apps on request, removing previously prepared ones", () => {
  const { dir, siteDir, assetsDir } = fixture(["4.0.0"]);
  try {
    prepare({ siteDir, skipApps: false, assetsDir });
    prepare({ siteDir, skipApps: true });
    assert.ok(existsSync(join(siteDir, "versions.json")));
    assert.ok(!existsSync(join(siteDir, "static/app")));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("fails without releases", () => {
  const { dir, siteDir } = fixture([]);
  try {
    assert.throws(
      () => prepare({ siteDir, skipApps: true }),
      /holds no releases/,
    );
    assert.ok(!existsSync(join(siteDir, "versions.json")));
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("ignores files next to the line directories", () => {
  const { dir, siteDir } = fixture(["4.0.0"]);
  try {
    writeFileSync(join(siteDir, "releases", ".gitkeep"), "");
    prepare({ siteDir, skipApps: true });
    assert.deepEqual(
      JSON.parse(readFileSync(join(siteDir, "versions.json"), "utf8")),
      ["4.0"],
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("fails if a release is in the wrong line directory", () => {
  const { dir, siteDir } = fixture(["4.0.0"]);
  try {
    writeFileSync(
      join(siteDir, "releases", "4.0", "release.json"),
      JSON.stringify({ version: "4.1.0" }),
    );
    assert.throws(() => prepare({ siteDir, skipApps: true }), /holds 4\.1\.0/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

void test("fails if an app page has no custom HTML marker", () => {
  const { dir, siteDir, assetsDir } = fixture(["4.0.0"], "<html></html>");
  try {
    assert.throws(
      () => prepare({ siteDir, skipApps: false, assetsDir }),
      /has no <!-- GHA_CUSTOM_HTML -->/,
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
