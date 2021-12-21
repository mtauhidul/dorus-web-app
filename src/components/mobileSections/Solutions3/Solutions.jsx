import React from 'react';
import mobileGif from '../../../resources/mobile/Group 74.svg';
import styles from './solutions.module.scss';

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.right}>
          <img src={mobileGif} alt='Mobile Gif' />
        </div>
        <div className={styles.left}>
          <h1>
            CUSTOMIZABLE, <br /> BRANDED APP
          </h1>
          <div className={styles.top}>
            <p>
              Detailed Dashboard to manage investments Ability to automated KYC
              verification Download statements in PDF Push Notifications with
              main events Digital Risk Profiling process Ability to manage
              joint, corporate, and junior accounts
            </p>
          </div>
          <div className={styles.bottom}>
            <button className={`${styles.btn} ${styles.btn2}`}>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
