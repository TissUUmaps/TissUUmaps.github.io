import DocSidebarItems from "@theme-original/DocSidebarItems";
import type { Props } from "@theme/DocSidebarItems";
import DocsVersionDropdownNavbarItem from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import type { ReactNode } from "react";

import styles from "./styles.module.css";

/**
 * Adds the docs version dropdown at the top of the docs sidebar, on desktop
 * and in the mobile menu
 */
export default function DocSidebarItemsWrapper(props: Props): ReactNode {
  return (
    <>
      {props.level === 1 && (
        <li className={styles.version}>
          Version
          <DocsVersionDropdownNavbarItem
            position="right"
            items={[]}
            dropdownItemsBefore={[]}
            dropdownItemsAfter={[]}
          />
        </li>
      )}
      <DocSidebarItems {...props} />
    </>
  );
}
