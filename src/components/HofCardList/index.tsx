import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import HofCard from '../HofCard';

function HofCardList({ data }) {
  return (
    <div>
      {data.map(({ node: { html, frontmatter: { cover, title } } }) => (
        <HofCard
          key={title}
          image={getImage(cover)}
          title={title}
          content={html}
        />
      ))}
    </div>
  );
}

export default HofCardList;
