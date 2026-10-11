import Link from "@docusaurus/Link";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./Button.module.css";

/**
 * A rounded button linking to a page of this site or to another site, with
 * spaced letters and a long arrow; `size="large"` for the main action of a
 * page. Also used by the landing page and the gallery.
 */
export function Button({
  to,
  size,
  children,
}: {
  to: string;
  size?: "large";
  children: ReactNode;
}): ReactNode {
  return (
    <Link
      className={clsx(styles.button, size === "large" && styles.large)}
      to={to}
    >
      {children}
    </Link>
  );
}
