import React from 'react';
import bottomPic from '../../../resources/svg/Group 2.svg';
import Nav from '../../common/Nav/Nav';
import styles from './hero.module.scss';

const Hero = ({ data }) => {
  function handleScroll() {
    window.scroll({
      top: 800,
      behavior: 'smooth',
    });
  }
  console.log(data);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${data?.asset})` }}
        className={styles.hero}>
        <div className={styles.navForMobile}>
          <Nav />
        </div>
        <div className={styles.wrapper + ' container'}>
          <div className={styles.navForDesktop}>
            <Nav />
          </div>
          <div className={styles.text}>
            <h1>{data?.sectionTitle.slice(0, 33)}</h1>
            <h3>{data?.sectionDescription}</h3>
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
