import React from 'react';
import videoP from '../../../resources/video/animation.m4v';
import styles from './solutions.module.scss';

const Solutions = () => {
  return (
    <div className={styles.solutions}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.left}>
          <h1>The Dorus Solutions</h1>
          <div className={styles.top}>
            <p>
              Ranging from huge investment funds to focused wealth management
              manager we are here to simplify your work flow to boost your
              business, workflow, reporting process and decision making. With
              Doros things are different!
            </p>
          </div>
          <div className={styles.bottom}>
            <p>
              Welcome to Doros The smartest cloud base Digital / Robo advisor
              designed to serve your portfolio and wealth management products
              adopted by top financial institutions/banks around the world.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <video width='100%' height='auto' autoPlay loop muted>
            <source src={videoP} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
