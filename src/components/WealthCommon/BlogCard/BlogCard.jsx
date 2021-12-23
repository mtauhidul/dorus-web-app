import React from 'react';
import styles from './blogCard.module.scss';

const BlogCard = (props) => {
  const { date, title, text, img } = props?.data;
  return (
    <div className={styles.blogCard}>
      <img src={img} alt='' />
      <div className={styles.body}>
        <p className={styles.date}>{date}</p>
        <h4>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default BlogCard;
