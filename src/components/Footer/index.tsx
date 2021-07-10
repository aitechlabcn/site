import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col } from 'antd';
import * as styles from './index.module.scss';

function Footer() {
  const data = useStaticQuery(graphql`
    query AllResourceQuery {
      allResourceJson {
        edges {
          node {
            id
            links {
              link
              title
            }
            mainTitle
          }
        }
      }
    }
  `);
  const {
    allResourceJson: { edges = [] },
  } = data;
  return (
    <div className={styles.footer}>
      <Row className={styles.container} gutter={8}>
        {edges.map(({ node: { id, mainTitle, links = [] } }) => (
          <Col key={id} className={styles.items} xs={24} sm={12} md={6}>
            <h4>{mainTitle}</h4>
            {links.map(({ title, link }) => (
              <a className={styles.item} href={link} key={link} target="_blank">
                {title}
              </a>
            ))}
          </Col>
        ))}
      </Row>
      <div className={styles.bottom}>
        Copyright © 2021 - Present. <span>❤</span> AITechLab.
        <br />
        Powered by Gatsby.js
      </div>
    </div>
  );
}

export default Footer;
