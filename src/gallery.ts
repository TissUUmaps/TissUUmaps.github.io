import type { Content } from "@theme/BlogPostPage";

/**
 * The application the gallery projects open in: the latest release, served
 * next to the website as static files (see scripts/prepare.mts), so linked
 * by pathname instead of as a route
 */
const galleryAppUrl = "pathname:///app/";

/** A gallery project, read from the front matter of its Markdown file */
export interface GalleryProject {
  /**
   * A TissUUmaps project file (`project`), or a link to an older TissUUmaps 3
   * project on its own server (`link`)
   */
  version: 4 | 3;
  title: string;
  description: string;
  /** URL of the screenshot */
  image: string;
  /** URL that opens the project */
  appUrl: string;
  /** URL of the project's own page */
  pageUrl: string;
  tags: { label: string; permalink: string }[];
  /** Where the data comes from; TissUUmaps 3 projects can leave it out */
  data: { provider: string; url: string; license: string } | undefined;
  editUrl: string | undefined;
}

type Field =
  | "title"
  | "description"
  | "image"
  | "project"
  | "link"
  | "data_provider"
  | "data_url"
  | "data_license";

/**
 * Reads a gallery project from its blog post content
 *
 * @param content - The blog post content of the project
 * @returns The project
 * @throws Error if a required front matter field is missing, naming the file
 * and the field, so that the build fails with a message editors understand
 */
export function readGalleryProject(content: Content): GalleryProject {
  const { frontMatter, assets, metadata } = content;
  const fields = frontMatter as Record<string, unknown>;
  const has = (name: Field) =>
    typeof fields[name] === "string" && fields[name] !== "";
  const field = (name: Field) => {
    if (!has(name)) {
      throw new Error(
        `Gallery project ${metadata.source}: the field "${name}" is missing`,
      );
    }
    return fields[name] as string;
  };
  if (has("project") && has("link")) {
    throw new Error(
      `Gallery project ${metadata.source}: use either "project" or "link", not both`,
    );
  }
  const version = has("link") ? 3 : 4;
  // TissUUmaps 3 projects can leave out the data fields, but not only some
  const hasData =
    version === 4 ||
    has("data_provider") ||
    has("data_url") ||
    has("data_license");
  return {
    version,
    title: field("title"),
    description: field("description"),
    image: assets.image ?? field("image"),
    appUrl:
      version === 3
        ? field("link")
        : `${galleryAppUrl}?project=${encodeURIComponent(field("project"))}`,
    pageUrl: metadata.permalink,
    tags: metadata.tags.map(({ label, permalink }) => ({ label, permalink })),
    data: hasData
      ? {
          provider: field("data_provider"),
          url: field("data_url"),
          license: field("data_license"),
        }
      : undefined,
    editUrl: metadata.editUrl,
  };
}
