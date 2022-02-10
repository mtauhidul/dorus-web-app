import React from 'react';
import styles from './doesIt.module.scss';

const DoesIt = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: `${data?.style?.backgroundColor}`,
        color: `${data?.style?.textColor}`,
      }}
      className={styles.DoesIt}>
      <div className={styles.wrapper + ' container'}>
        <h1>{data?.sectionTitle}</h1>
        <br />
        <div className={styles.forDesktop}>
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              marginTop: '130px',
            }}
            src={data?.asset}
            alt=''
          />
        </div>
        <div className={styles.forMobile}>
          <img
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            src={data?.alter_asset}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default DoesIt;
