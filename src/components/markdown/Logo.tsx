import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./Logo.module.css";

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
      className={clsx(size === "small" && styles.small)}
      src={useBaseUrl(src)}
      alt={alt}
    />
  );
}
