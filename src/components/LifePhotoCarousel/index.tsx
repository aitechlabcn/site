import React from 'react';
import Slider from 'react-slick';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './index.module.scss';

function LifePhotoCarousel() {
  const data = useStaticQuery(graphql`
    query LifePhotosQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          absolutePath: { regex: "/lifePhotos/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <Slider
        autoplay
        infinite
        dots={false}
        className={styles.slider}
        arrows
        prevArrow={<MdKeyboardArrowLeft color="#000" />}
        nextArrow={<MdKeyboardArrowRight color="#000" />}
      >
        {getImages(data)}
      </Slider>
    </div>
  );
}

function getImages(data) {
  const arr = [];
  data.allFile.edges.forEach(({ node }, index) => {
    const image = getImage(node);
    arr.push(
      <GatsbyImage
        key={index}
        image={image}
        alt="lifePhoto"
        className={styles.image}
      />
    );
  });

  return arr;
}

export default LifePhotoCarousel;
