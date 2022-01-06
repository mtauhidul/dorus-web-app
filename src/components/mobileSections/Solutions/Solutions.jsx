import React from 'react';
import mobileGif from '../../../resources/mobile/Frame_3-1.gif';
import google from '../../../resources/mobile/google-play.png';
import apple from '../../../resources/mobile/mac-os-logo.png';
import styles from './solutions.module.scss';

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.left}>
          <h1>
            Digital Experience <br /> with Mobile App
          </h1>
          <div className={styles.top}>
            <p>
              Stay Connected with your investors <br /> with a branded mobile
              application.
            </p>
          </div>
          <div className={styles.bottom}>
            <button className={`${styles.btn} ${styles.btn1}`}>
              <span>
                <img src={apple} alt='' />
              </span>
              <span>
                <small>AVAILABLE ON THE</small>
                <br /> APP STORE
              </span>
            </button>
            <button className={`${styles.btn} ${styles.btn2}`}>
              <span>
                <img src={google} alt='' />
              </span>
              <span>
                <small>GET IT ON</small>
                <br /> Google Play
              </span>
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
