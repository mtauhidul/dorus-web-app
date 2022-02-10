import React from 'react';
import styles from './solutions.module.scss';

const Solutions2 = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: `${data?.style?.backgroundColor}`,
        color: `${data?.style?.textColor}`,
      }}
      className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.left}>
          <h1>{data?.sectionTitle}</h1>
          <div className={styles.top}>
            <p>{data?.sectionDescription}</p>
          </div>
        </div>
        <div className={styles.right}>
          <img src={data?.asset} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Solutions2;
