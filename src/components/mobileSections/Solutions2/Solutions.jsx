import React from 'react';
import mobileGif from '../../../resources/mobile/image 26.jpg';
import styles from './solutions.module.scss';

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.left}>
          <h1>
            AUTOMATED KYC <br /> VERIFICATIONS
          </h1>
          <div className={styles.top}>
            <p>
              The abiity to verify the uploaded documents by investors
              Verification of document ownership by selife or video Watchlist
              scanning for the risky persons agains sanctions or PEPS
            </p>
          </div>
          <div className={styles.bottom}>
            <button className={`${styles.btn} ${styles.btn2}`}>
              Schedule Demo
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src={mobileGif} alt='Mobile Gif' />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
