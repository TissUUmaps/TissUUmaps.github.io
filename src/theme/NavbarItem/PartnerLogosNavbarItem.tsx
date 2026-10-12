import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import type { ReactNode } from "react";

import styles from "./PartnerLogosNavbarItem.module.css";

/** The partner logos, with a dark variant where the logo has black text */
const partners = [
  {
    name: "SciLifeLab",
    url: "https://www.scilifelab.se/",
    logo: "/img/scilifelab.svg",
    darkLogo: "/img/scilifelab-dark.svg",
    className: styles.scilifelab,
  },
  {
    name: "NBIS",
    url: "https://nbis.se/",
    logo: "/img/nbis.svg",
    darkLogo: "/img/nbis.svg",
    className: styles.nbis,
  },
  {
    name: "BIIF",
    url: "https://www.scilifelab.se/units/bioimage-informatics/",
    logo: "/img/biif.svg",
    darkLogo: "/img/biif-dark.svg",
    className: styles.biif,
  },
];

function PartnerLogo({
  name,
  url,
  logo,
  darkLogo,
  className,
}: (typeof partners)[number]): ReactNode {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ThemedImage
        className={className}
        sources={{ light: useBaseUrl(logo), dark: useBaseUrl(darkLogo) }}
        alt={name}
      />
    </a>
  );
}

/**
 * The partner logos on the right of the navbar, and at the bottom of the
 * mobile menu (navbar item type `custom-partnerLogos`, see ComponentTypes.tsx)
 */
export default function PartnerLogosNavbarItem({
  mobile,
}: {
  mobile?: boolean;
}): ReactNode {
  const logos = partners.map((partner) => (
    <PartnerLogo key={partner.name} {...partner} />
  ));
  return mobile ? (
    <li className={clsx(styles.partners, styles.mobile)}>{logos}</li>
  ) : (
    <div className={clsx(styles.partners, styles.desktop)}>{logos}</div>
  );
}
