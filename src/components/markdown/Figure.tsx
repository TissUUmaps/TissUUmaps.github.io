import useBaseUrl from "@docusaurus/useBaseUrl";
import type { ReactNode } from "react";

import styles from "./Figure.module.css";

/** An image on the right of the text, with a caption */
export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}): ReactNode {
  return (
    <figure className={styles.figure}>
      <img src={useBaseUrl(src)} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
