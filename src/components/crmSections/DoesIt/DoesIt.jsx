import React from 'react';
import image from '../../../resources/svg/Group 29.svg';
import image2 from '../../../resources/svg/Group 30.svg';
import image3 from '../../../resources/svg/Group 31.svg';
import image4 from '../../../resources/svg/Group 32.svg';
import image5 from '../../../resources/svg/Group 33.svg';
import image6 from '../../../resources/svg/Group 34.svg';
// import image7 from "../../../resources/svg/Group 35.svg";
import Timeline from '../../common/timeline/Timeline';
import styles from './doesIt.module.scss';

const DoesIt = () => {
  const arr = [
    {
      title: 'Build your Robo-Advisory module',
      reverted: false,
      img: image,
      last: false,
    },
    {
      title: 'Adjust your risk profiles parameters',
      reverted: true,
      img: image2,
      last: false,
    },
    {
      title: 'Launch your products',
      reverted: false,
      img: image3,
      last: false,
    },
    {
      title: 'System keeps analyzing investors risk profiles',
      reverted: true,
      img: image4,
      last: false,
    },
    {
      title:
        'Let your team easily manage their day-to-day work with our operation modules',
      reverted: false,
      img: image5,
      last: false,
    },
    {
      title: 'System keeps analyzing investors risk profiles',
      reverted: true,
      img: image6,
      last: true,
    },
  ];
  return (
    <div className={styles.DoesIt}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.forDesktop}>
          <lottie-player
            src='https://assets6.lottiefiles.com/private_files/lf30_av3cd4jw.json'
            background='transparent'
            speed='1'
            loop
            autoplay></lottie-player>
        </div>
        <div className={styles.forMobile}>
          <div className={styles.number}>
            <div className={styles.num}>1</div>
            <span>|</span>
            <span>|</span>
          </div>
          {arr.map((item, index) => (
            <Timeline data={{ ...item, number: index + 2 }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoesIt;
