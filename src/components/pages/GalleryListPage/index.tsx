import Link from "@docusaurus/Link";
import type { Props as ListProps } from "@theme/BlogListPage";
import type { Props as TagProps } from "@theme/BlogTagsPostsPage";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import { readGalleryProject } from "../../../gallery";
import { ProjectCard } from "./ProjectCard";
import styles from "./styles.module.css";

// The gallery is the blog plugin's content (see docusaurus.config.ts), listed
// as cards; the same page lists the projects with one tag
export default function GalleryListPage(
  props: ListProps | TagProps,
): ReactNode {
  const metadata = "tag" in props ? props.listMetadata : props.metadata;
  const title =
    "tag" in props ? `Projects with "${props.tag.label}"` : metadata.blogTitle;
  const projects = props.items.map(({ content }) =>
    readGalleryProject(content),
  );
  return (
    <Layout
      title={title}
      description={metadata.blogDescription}
      wrapperClassName={styles.wrapper}
    >
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={clsx("container", styles.container)}>
            <Heading as="h1" className={styles.title}>
              {title}
            </Heading>
            <p className={styles.lead}>
              {"tag" in props ? (
                <Link to="/gallery">All projects</Link>
              ) : (
                metadata.blogDescription
              )}
            </p>
          </div>
        </section>
        <section className={styles.band}>
          <div className={clsx("container", styles.container, styles.grid)}>
            {projects.map((project) => (
              <ProjectCard key={project.pageUrl} project={project} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
