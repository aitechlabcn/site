import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import HofCardList from '../components/HofCardList';
import * as styles from './hof.module.scss';

function Hof({ data }) {
  const { allMarkdownRemark, markdownRemark } = data;
  return (
    <Layout>
      <Seo title="名人堂" />
      <div className={styles.container}>
        <main>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          <HofCardList data={allMarkdownRemark.edges} />
        </main>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HofDescQuery {
    markdownRemark(fileAbsolutePath: { regex: "/hof/index/" }) {
      html
      frontmatter {
        title
        slug
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/hof/*/*/" }
        frontmatter: { slug: { ne: "/hof/index" } }
      }
      sort: { order: ASC, fields: frontmatter___id }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            cover {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default Hof;
