import React from 'react';
import laptop from '../../../resources/crm/laptop.svg';
import monitor from '../../../resources/crm/monitor.svg';
import FormContainer from './FormContainer';
import styles from './partners.module.scss';

const Partners = () => {
  return (
    <>
      <div className={styles.partners}>
        <div className={styles.wrapper + ' container'}>
          <h1>THIRD TITLE</h1>
          <div className={styles.imgContainer}>
            <div className={styles.top}>
              <div className={styles.top_left}>
                <div className={styles.left_body}>
                  <h4>FOURTH TITLE</h4>
                  <div className={styles.text}>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis, perferendis earum? Necessitatibus, iure
                      consequuntur blanditiis eaque exercitationem quaerat
                      nesciunt delectus non quis? Veniam, officiis.
                    </p>
                  </div>
                  <button className={styles.scheduleBtn}>Schedule Demo</button>
                </div>
              </div>
              <div className={styles.top_right}>
                <img src={laptop} alt='' />
              </div>
            </div>
          </div>

          <div className={styles.imgContainer}>
            <div className={`${styles.top} ${styles.bottom}`}>
              <div className={styles.top_right}>
                <img src={monitor} alt='' />
              </div>
              <div className={styles.top_left}>
                <div className={styles.left_body}>
                  <h4>FIFTH TITLE</h4>
                  <div className={styles.text}>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis, perferendis earum? Necessitatibus, iure
                      consequuntur blanditiis eaque exercitationem quaerat
                      nesciunt delectus non quis? Veniam, officiis.
                    </p>
                  </div>
                  <button className={styles.scheduleBtn}>Schedule Demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormContainer styles={styles} />
    </>
  );
};

export default Partners;
