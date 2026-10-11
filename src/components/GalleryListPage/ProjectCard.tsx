import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import type { ReactNode } from "react";

import buttons from "../../css/buttons.module.css";
import type { GalleryProject } from "../../data/gallery";
import styles from "./styles.module.css";

export function ProjectCard({
  project,
}: {
  project: GalleryProject;
}): ReactNode {
  return (
    <article className={styles.card}>
      <Link href={project.appUrl} tabIndex={-1} aria-hidden>
        <img src={project.image} alt="" loading="lazy" />
      </Link>
      <div className={styles.body}>
        <Heading as="h2">
          <Link to={project.pageUrl}>{project.title}</Link>
        </Heading>
        <p>{project.description}</p>
        <ProjectTags project={project} />
        <p className={styles.source}>
          Data: <Link href={project.dataUrl}>{project.dataProvider}</Link>,{" "}
          {project.dataLicense}
        </p>
        <Link className={buttons.button} href={project.appUrl}>
          Open in TissUUmaps
        </Link>
      </div>
    </article>
  );
}

export function ProjectTags({
  project,
}: {
  project: GalleryProject;
}): ReactNode {
  return (
    <ul className={styles.tags}>
      {project.tags.map(({ label, permalink }) => (
        <li key={permalink}>
          <Link to={permalink}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
