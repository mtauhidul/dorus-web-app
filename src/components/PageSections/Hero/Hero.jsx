import React from 'react';
import bottomPic from '../../../resources/svg/Group 2.svg';
import Nav from '../../common/Nav/Nav';
import styles from './hero.module.scss';

const Hero = () => {
  function handleScroll() {
    window.scroll({
      top: 800,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.navForMobile}>
          <Nav />
        </div>
        <div className={styles.wrapper + ' container'}>
          <div className={styles.navForDesktop}>
            <Nav />
          </div>
          <div className={styles.text}>
            <h1>POST TITLE</h1>
            <h3>Post Description</h3>
            <br />
            <div>
              <button className={`${styles.btn} ${styles.btn1}`}>
                learn more
              </button>
              <button className={`${styles.btn} ${styles.btn2}`}>
                schedule demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <img onClick={handleScroll} src={bottomPic} alt='' />
      </div>
    </>
  );
};

export default Hero;
