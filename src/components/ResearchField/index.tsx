import React from 'react';
import { List, Row, Col } from 'antd';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './index.module.scss';

function ResearchField() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allResearchJson {
        edges {
          node {
            alt
            title
            content
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <List
        grid={{
          column: 2,
          gutter: 32,
          xs: 1,
          sm: 1,
          md: 2,
        }}
        dataSource={data?.allResearchJson?.edges || []}
        renderItem={(item: any) => {
          const { node } = item;
          return (
            <List.Item key={node.title}>
              <CustomCard {...node} />
            </List.Item>
          );
        }}
      />
    </>
  );
}

const CustomCard = ({ alt, content, title, img }) => {
  const image = getImage(img);

  return (
    <Row className={styles.card} gutter={12}>
      <Col className={styles.col} xs={24} sm={8}>
        <GatsbyImage className={styles.image} image={image} alt={alt} />
      </Col>
      <Col className={styles.content} xs={24} sm={16}>
        <h3>{title}</h3>
        <div>{content}</div>
      </Col>
    </Row>
  );
};
export default ResearchField;
