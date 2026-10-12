import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import type { ReactNode } from "react";

import type { GalleryProject } from "../../../gallery";
import { Button } from "../../markdown/Button";
import styles from "./styles.module.css";

export function ProjectCard({
  project,
}: {
  project: GalleryProject;
}): ReactNode {
  return (
    <article className={styles.card}>
      <Link to={project.pageUrl} tabIndex={-1} aria-hidden>
        <img src={project.image} alt="" loading="lazy" />
      </Link>
      <div className={styles.body}>
        <Heading as="h3">
          <Link to={project.pageUrl}>{project.title}</Link>
        </Heading>
        <p>{project.description}</p>
        <ProjectTags project={project} />
        <ProjectSource project={project} className={styles.source} />
        <ProjectButton project={project} />
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

/** The data source line; an empty one keeps the card's button at the bottom */
export function ProjectSource({
  project,
  className,
}: {
  project: GalleryProject;
  className?: string;
}): ReactNode {
  return (
    <p className={className}>
      {project.data && (
        <>
          Data: <Link href={project.data.url}>{project.data.provider}</Link>,{" "}
          {project.data.license}
        </>
      )}
    </p>
  );
}

export function ProjectButton({
  project,
}: {
  project: GalleryProject;
}): ReactNode {
  return (
    <Button to={project.appUrl}>
      {project.version === 3 ? "Open in TissUUmaps 3" : "Open in TissUUmaps"}
    </Button>
  );
}
