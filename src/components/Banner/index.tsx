import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './index.module.scss';
import { TiArrowDownThick } from 'react-icons/ti';

function Banner({ scrollToContent }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <StaticImage
          className={styles.cover}
          src="../../assets/images/cover.png"
          alt="cover"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.items}>
          <h1>AI Makes Life Better</h1>
          <div onClick={scrollToContent}>
            <TiArrowDownThick />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
