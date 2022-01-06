import React from 'react';
import videoP from '../../../resources/crm/solutions.svg';
import styles from './solutions.module.scss';

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.left}>
          <h1>
            Customer Relationship Management{' '}
            <span style={{ fontWeight: '300' }}>(CRM)</span>
          </h1>
          <div className={styles.top}>
            <p>
              Complete customisable customer relationship management platform
              that collects every bit of critical information across sales,
              service and marketing. It easily integrates with any application
              and gives financial advisors a personalized user experience that
              works seamlessly on the devices they use every day.
            </p>
          </div>
          <div className={styles.bottom}></div>
        </div>
        <div className={styles.right}>
          <img src={videoP} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
