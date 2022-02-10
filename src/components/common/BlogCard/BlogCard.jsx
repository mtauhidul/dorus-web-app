import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blogCard.module.scss';

const BlogCard = (props) => {
  console.log(props);
  const { published_at, title, page_url, description, blog_pic_url } =
    props?.data;
  return (
    <div className={styles.blogCard}>
      <img src={blog_pic_url} alt='' />
      <div className={styles.body}>
        <p className={styles.date}>{published_at}</p>
        <div className={styles.blogHead}>
          <Link to={`pages/${page_url}`}>{title}</Link>
        </div>
        <div className={styles.blogText}>
          <p className={styles.text}>{description}.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
