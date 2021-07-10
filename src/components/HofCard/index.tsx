import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './index.module.scss';

function HofCard({ title, content, image }) {
  return (
    <div>
      <Row className={styles.card} gutter={12}>
        <Col className={styles.col} xs={24} sm={8}>
          <GatsbyImage className={styles.image} image={image} alt={title} />
        </Col>
        <Col className={styles.content} xs={24} sm={16}>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
      </Row>
    </div>
  );
}

export default HofCard;
