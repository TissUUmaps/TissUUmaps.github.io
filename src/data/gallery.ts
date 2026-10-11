import type { Content } from "@theme/BlogPostPage";

/**
 * The application the gallery projects open in: the latest release, served
 * next to the website (see docusaurus.config.ts)
 */
const galleryAppUrl = "pathname:///app/";

/** A gallery project, read from the front matter of its Markdown file */
export interface GalleryProject {
  title: string;
  description: string;
  /** URL of the screenshot */
  image: string;
  /** URL that opens the project in TissUUmaps */
  appUrl: string;
  /** URL of the project's own page */
  pageUrl: string;
  tags: { label: string; permalink: string }[];
  dataProvider: string;
  dataUrl: string;
  dataLicense: string;
  editUrl: string | undefined;
}

const requiredFields = [
  "title",
  "description",
  "image",
  "project",
  "data_provider",
  "data_url",
  "data_license",
] as const;

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
  for (const field of requiredFields) {
    if (typeof fields[field] !== "string" || fields[field] === "") {
      throw new Error(
        `Gallery project ${metadata.source}: the field "${field}" is missing`,
      );
    }
  }
  const field = (name: (typeof requiredFields)[number]) =>
    fields[name] as string;
  return {
    title: field("title"),
    description: field("description"),
    image: assets.image ?? field("image"),
    appUrl: `${galleryAppUrl}?project=${encodeURIComponent(field("project"))}`,
    pageUrl: metadata.permalink,
    tags: metadata.tags.map(({ label, permalink }) => ({ label, permalink })),
    dataProvider: field("data_provider"),
    dataUrl: field("data_url"),
    dataLicense: field("data_license"),
    editUrl: metadata.editUrl,
  };
}
