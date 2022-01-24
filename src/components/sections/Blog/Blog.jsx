import React from 'react';
import BlogCard from '../../common/BlogCard/BlogCard';
import styles from './blog.module.scss';

const Blog = ({ cardData }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.wrapper + ' container'}>
        <h1>Our Blog</h1>
        <div className={styles.cardContainer}>
          {cardData.map((card) => (
            <BlogCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
