import type { ReactNode } from "react";

import styles from "./Steps.module.css";

/** Numbered steps: every `##` heading inside starts a new step */
export function Steps({ children }: { children: ReactNode }): ReactNode {
  return <div className={styles.steps}>{children}</div>;
}
