import React, { useState } from 'react';
import onboarding from '../../../resources/new/agreement.png';
import backoffice from '../../../resources/new/back-office.png';
import balancing from '../../../resources/new/balanced.png';
import chatbot from '../../../resources/new/chatbot.png';
import compliance from '../../../resources/new/compliant.png';
import goals from '../../../resources/new/money.png';
import portfolio from '../../../resources/new/office.png';
import frontoffice from '../../../resources/new/receptionist.png';
import risk from '../../../resources/new/risks.png';
import sales from '../../../resources/new/sales.png';
import kyc from '../../../resources/new/search.png';
import api from '../../../resources/svg/Group 18.svg';
import crm from '../../../resources/svg/Group 19.svg';
import mobile from '../../../resources/svg/Group 21.svg';
import wealth from '../../../resources/svg/Group 25.svg';
import digital from '../../../resources/svg/Group 26.svg';
import operation from '../../../resources/svg/Group 28.svg';
import styles from './StartBuild.module.scss';

const StartBuild = () => {
  const [list, setList] = useState('list1');
  const cards1 = [
    {
      id: 1,
      name: 'Mobile App',
      image: mobile,
    },
    {
      id: 1,
      name: 'CRM',
      image: crm,
    },
    {
      id: 1,
      name: 'Open Api',
      image: api,
    },
    {
      id: 1,
      name: 'wealth Management',
      image: wealth,
    },
    {
      id: 1,
      name: 'Digital onboarding',
      image: digital,
    },
    {
      id: 1,
      name: 'Operation',
      image: operation,
    },
  ];

  const cards2 = [
    {
      id: 2,
      name: 'Compliance',
      image: compliance,
    },
    {
      id: 2,
      name: 'Back Office',
      image: backoffice,
    },
    {
      id: 2,
      name: 'Front Office',
      image: frontoffice,
    },
    {
      id: 2,
      name: 'Sales and Marketing',
      image: sales,
    },
  ];

  const cards3 = [
    {
      id: 3,
      name: 'Goals Management',
      image: goals,
    },
    {
      id: 3,
      name: 'Rebalancing',
      image: balancing,
    },
    {
      id: 3,
      name: 'Portfolio Builder',
      image: portfolio,
    },
    {
      id: 3,
      name: 'Risk Management',
      image: risk,
    },
  ];

  const cards4 = [
    {
      id: 4,
      name: 'Digital Onboarding',
      image: onboarding,
    },
    {
      id: 4,
      name: 'Automated KYC',
      image: kyc,
    },
    {
      id: 4,
      name: 'Interactive Chat Bot',
      image: chatbot,
    },
  ];
  return (
    <div className={styles.startBuild}>
      <div className={styles.wrapper + ' container'}>
        <div className={styles.wrapperTop}>
          <div className={styles.left}>
            <h3
              onClick={() => setList('list1')}
              className={
                list === 'list1'
                  ? `${styles.list} ${styles.activeList}`
                  : styles.list
              }>
              Main Modules
            </h3>
            <h3
              onClick={() => setList('list2')}
              className={
                list === 'list2'
                  ? `${styles.list} ${styles.activeList}`
                  : styles.list
              }>
              Operations
            </h3>
            <h3
              onClick={() => setList('list3')}
              className={
                list === 'list3'
                  ? `${styles.list} ${styles.activeList}`
                  : styles.list
              }>
              Logics
            </h3>
            <h3
              onClick={() => setList('list4')}
              className={
                list === 'list4'
                  ? `${styles.list} ${styles.activeList}`
                  : styles.list
              }>
              Onboarding
            </h3>
          </div>
          <div className={styles.right}>
            {list === 'list1' &&
              cards1.map((card) => (
                <div
                  className={styles.cardCustom + ' card'}
                  key={card.id + 'card'}>
                  <img
                    src={card?.image}
                    className={styles.img + ' card-img-top'}
                    alt='...'
                  />
                  <div className='card-body'>
                    <h4>{card.name}</h4>
                  </div>
                </div>
              ))}
            {list === 'list2' &&
              cards2.map((card) => (
                <div
                  className={styles.cardCustom + ' card'}
                  key={card.id + 'card'}>
                  <img
                    src={card?.image}
                    className={styles.img + ' card-img-top'}
                    alt='...'
                  />
                  <div className='card-body'>
                    <h4>{card.name}</h4>
                  </div>
                </div>
              ))}
            {list === 'list3' &&
              cards3.map((card) => (
                <div
                  className={styles.cardCustom + ' card'}
                  key={card.id + 'card'}>
                  <img
                    src={card?.image}
                    className={styles.img + ' card-img-top'}
                    alt='...'
                  />
                  <div className='card-body'>
                    <h4>{card.name}</h4>
                  </div>
                </div>
              ))}
            {list === 'list4' &&
              cards4.map((card) => (
                <div
                  className={styles.cardCustom + ' card'}
                  key={card.id + 'card'}>
                  <img
                    src={card?.image}
                    className={styles.img + ' card-img-top'}
                    alt='...'
                  />
                  <div className='card-body'>
                    <h4>{card.name}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.wrapperBottom + ' container'}>
        <div className={styles.bottom}>
          <p>Learn more</p>
          <h2>Start Building Your Dorus Now!</h2>
          <button>Build Your Robo Advisory</button>
        </div>
      </div>
    </div>
  );
};

export default StartBuild;
