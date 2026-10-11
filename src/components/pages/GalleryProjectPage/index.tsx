import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostPage";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import type { ReactNode } from "react";

import { readGalleryProject } from "../../../gallery";
import { Button } from "../../markdown/Button";
import { ProjectTags } from "../GalleryListPage/ProjectCard";
import styles from "./styles.module.css";

// The own page of a gallery project: its card details and the Markdown text
// below its front matter
export default function GalleryProjectPage({ content }: Props): ReactNode {
  const project = readGalleryProject(content);
  const ProjectContent = content;
  return (
    <Layout title={project.title} description={project.description}>
      <main className={styles.main}>
        <div className="container">
          <p>
            <Link to="/gallery">← Gallery</Link>
          </p>
          <div className={styles.grid}>
            <Link href={project.appUrl} tabIndex={-1} aria-hidden>
              <img className={styles.image} src={project.image} alt="" />
            </Link>
            <div>
              <Heading as="h1" className={styles.title}>
                {project.title}
              </Heading>
              <p className={styles.lead}>{project.description}</p>
              <ProjectTags project={project} />
              <p className={styles.source}>
                Data: <Link href={project.dataUrl}>{project.dataProvider}</Link>
                , {project.dataLicense}
              </p>
              <Button to={project.appUrl}>Open in TissUUmaps</Button>
            </div>
          </div>
          <article className={styles.text}>
            <MDXContent>
              <ProjectContent />
            </MDXContent>
          </article>
          {project.editUrl && (
            <p className={styles.edit}>
              <Link href={project.editUrl}>Edit this project</Link>
            </p>
          )}
        </div>
      </main>
    </Layout>
  );
}
