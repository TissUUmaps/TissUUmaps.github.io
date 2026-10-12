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

// The gallery sections: TissUUmaps project files first, then links to older
// TissUUmaps 3 projects
const sections = [
  {
    version: 4,
    title: "TissUUmaps 4 projects",
    lead: "Each one opens directly in TissUUmaps, in your browser.",
  },
  {
    version: 3,
    title: "TissUUmaps 3 projects",
    lead: "Older projects made with TissUUmaps 3.",
  },
] as const;

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
        <div className={styles.band}>
          {sections.map(({ version, title, lead }) => {
            const sectionProjects = projects.filter(
              (project) => project.version === version,
            );
            return (
              sectionProjects.length > 0 && (
                <section
                  key={version}
                  className={clsx("container", styles.container)}
                >
                  <Heading as="h2" className={styles.sectionTitle}>
                    {title}
                  </Heading>
                  <p className={styles.sectionLead}>{lead}</p>
                  <div className={styles.grid}>
                    {sectionProjects.map((project) => (
                      <ProjectCard key={project.pageUrl} project={project} />
                    ))}
                  </div>
                </section>
              )
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
