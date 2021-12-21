import React from 'react';
import img3 from '../../../resources/svg/image 10.svg';
import img4 from '../../../resources/svg/image 11.svg';
import img1 from '../../../resources/svg/image 8.svg';
import img2 from '../../../resources/svg/image 9.svg';
import FormContainer from './FormContainer';
import styles from './partners.module.scss';

const Partners = () => {
  const imgs = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
  return (
    <>
      <div className={styles.partners}>
        <div className={styles.wrapper + ' container'}>
          <h1>Our Partners</h1>
          <div className={styles.imgContainer}>
            {imgs.map((item, index) => (
              <div key={index + 'img'}>
                <img src={item.img} alt='' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormContainer styles={styles} />
    </>
  );
};

export default Partners;
