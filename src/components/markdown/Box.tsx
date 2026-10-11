import type { ReactNode } from "react";

import styles from "./Box.module.css";

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
