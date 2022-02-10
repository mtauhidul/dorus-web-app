import React from 'react';
import { Link } from 'react-router-dom';
import styles from './banner.module.scss';

const DoesIt = ({ data }) => {
  return (
    <div className={styles.banner}>
      <Link to='/'>{data?.sectionTitle}</Link>

      <img
        style={{
          maxWidth: '35%',
          minWidth: '200px',
          borderRadius: '8px',
        }}
        src={data?.asset}
        alt=''
      />
    </div>
  );
};

export default DoesIt;
