import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import type { ReactNode } from "react";

import buttons from "../../css/buttons.module.css";
import styles from "./styles.module.css";

// Components for the Markdown (MDX) pages, available there without an import
// (see src/theme/MDXComponents.tsx). Image paths start with "/", from static/.

/** Numbered steps: every `##` heading inside starts a new step */
export function Steps({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.steps}>{children}</div>;
}

/** Boxes side by side, two per row */
export function Columns({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.columns}>{children}</div>;
}

/** A box with a title and an optional highlighted note */
export function Box({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div className={styles.box}>
      <h3>{title}</h3>
      {note && <p className={styles.note}>{note}</p>}
      {children}
    </div>
  );
}

/** A rounded button linking to a page of this site or to another site */
export function Button({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}): ReactNode {
  return (
    <p>
      <Link className={buttons.button} to={to}>
        {children}
      </Link>
    </p>
  );
}

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

/** A grid of publications */
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

/** A row of logos on a white background */
export function Logos({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.logos}>{children}</div>;
}

/** A logo; `size="small"` for wide logos such as a word mark */
export function Logo({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size?: "small";
}): ReactNode {
  return (
    <img
      className={clsx(size === "small" && styles.smallLogo)}
      src={useBaseUrl(src)}
      alt={alt}
    />
  );
}
