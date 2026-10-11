import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import type { ReactNode } from "react";

import styles from "./Publication.module.css";

/** A list of publications */
export function Publications({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.publications}>{children}</div>;
}

/** A publication with a figure */
export function Publication({
  title,
  authors,
  journal,
  link,
  image,
}: {
  title: string;
  authors: string;
  journal: string;
  link: string;
  image: string;
}): ReactNode {
  return (
    <article className={styles.publication}>
      <img src={useBaseUrl(image)} alt="" loading="lazy" />
      <div>
        <Link href={link}>{title}</Link>
        <p className={styles.authors}>{authors}</p>
        <p className={styles.journal}>{journal}</p>
      </div>
    </article>
  );
}
