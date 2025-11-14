import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: "About Launchyfi",
    to: "/docs/category/about-launchyfi",
    description: (
      <>Understand the mission, vision, and core values that drive Launchyfi.</>
    ),
  },
  {
    title: "Integrated Tools",
    to: "/docs/category/integrated-tools",
    description: (
      <>Explore the various integrated tools and how to connect them to Launchyfi.</>
    ),
  },
  {
    title: "Our Agents",
    to: "/docs/category/our-agents",
    description: (
      <>Learn about Launchyfi&apos;s AI-powered agents that enhance productivity.</>
    ),
  },
];

function Feature({title, Svg, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link className="card" to={to}>
        {Svg ? (
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
        ) : null}
        <div className="card__header text--center">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body text--center padding-horiz--md">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
