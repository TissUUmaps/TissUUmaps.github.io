import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

import { Button } from "../components/markdown/Button";
import styles from "./index.module.css";

// The latest release of the app, served next to the website as static files
// (see scripts/prepare.mts), so linked by pathname instead of as a route
const appUrl = "pathname:///app/";

// Main point and detail, as on the TissUUmaps 4 poster
const features = [
  ["Browser-based", "no server, nothing to install"],
  ["Intuitive and powerful", "like a plotting tool"],
  ["Multi-modal", "images, labels, points, shapes and tables"],
  ["Your own data", "local files or the cloud"],
  ["Open and extensible", "with plugins"],
];

const cards = [
  {
    title: "Getting started",
    text: "Open an example, then load your own data.",
    label: "Get started",
    to: "/getting-started",
  },
  {
    title: "Documentation",
    text: "Concepts, supported data formats and plugins.",
    label: "Read the docs",
    to: "/docs/category/concepts",
  },
  {
    title: "Gallery",
    text: "Example projects made with TissUUmaps.",
    label: "Gallery",
    to: "/gallery",
  },
  {
    title: "Source code",
    text: "TissUUmaps is open source. Report issues and contribute on GitHub.",
    label: "GitHub",
    to: "https://github.com/TissUUmaps/TissUUmaps/",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName={styles.wrapper}
    >
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={clsx("container", styles.grid)}>
            <div className={styles.video}>
              <img
                src={useBaseUrl("/img/video-preview.jpg")}
                alt="TissUUmaps showing a Xenium dataset"
              />
              <div className={styles.badge}>
                <span className={styles.play} aria-hidden>
                  ▶
                </span>
                Video coming soon
              </div>
            </div>
            <div>
              <Heading as="h1" className={styles.title}>
                {siteConfig.title}
              </Heading>
              <p className={styles.lead}>
                An interactive web application for visualizing spatial biology
                data.
              </p>
              {/* <p>
                Originally developed in the Wählby Group at Uppsala University,
                TissUUmaps is developed and maintained by the SciLifeLab
                BioImage Informatics Unit.
              </p> */}
              <ul className={styles.features}>
                {features.map(([feature, detail]) => (
                  <li key={feature}>
                    {feature} <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.actions}>
                <Button to={appUrl} size="large">
                  Open TissUUmaps
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.band}>
          <div className={clsx("container", styles.cards)}>
            {cards.map(({ title, text, label, to }) => (
              <div key={title}>
                <Heading as="h2">{title}</Heading>
                <p>{text}</p>
                <Button to={to}>{label}</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
