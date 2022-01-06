import React from 'react';
import pig from '../../../resources/page/image 12.svg';
import styles from './Solutions1.module.scss';

const Solutions1 = () => {
  return (
    <div className={styles.Solutions1}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.body}>
          <div className={styles.left}>
            <h1>POST SECOND TITLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              saepe soluta amet magnam, aliquam, laborum eius omnis veniam optio
              eos porro nostrum debitis ipsum!
            </p>
          </div>
          <div className={styles.right}>
            <img src={pig} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions1;
