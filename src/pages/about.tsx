import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from './about.module.scss';
import ResearchField from '../components/ResearchField';
import LifePhotoCarousel from '../components/LifePhotoCarousel';

const sectionExtraComponents = {
  '/about/team': null,
  '/about/explore': <ResearchField />,
  '/about/life': <LifePhotoCarousel />,
};

function About({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;
  return (
    <Layout>
      <Seo title="关于" />
      <main className={styles.container}>
        <article>
          {edges.map(
            ({
              node: {
                html,
                frontmatter: { title, slug },
              },
            }) => {
              return (
                <div className={styles.item} key={slug}>
                  <h2>{title}</h2>
                  <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {sectionExtraComponents[slug] || null}
                </div>
              );
            }
          )}
        </article>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
      sort: { order: ASC, fields: frontmatter___id }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default About;
