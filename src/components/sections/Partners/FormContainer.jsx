import React from 'react';
import pic from '../../../resources/svg/Group 66.svg';

const FormContainer = ({ styles }) => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.left}>
          <img src={pic} alt='' />
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h1>Contact US</h1>
            <form action=''>
              <input placeholder='Name' type='text' />
              <input placeholder='Company' type='text' />
              <input placeholder='Email' type='text' />
              <input placeholder='Phone Number' type='text' />
              <button>Contact us</button>
            </form>
            <p>
              Dorus is committed to protecting and respecting your privacy, and
              we ll only use your personal information to administer your
              account and to provide the products and services you requested
              from us.
            </p>
            <h6>
              <input type='checkbox' id='agree' />{' '}
              <label htmlFor='agree'>
                I agree to receive other communications from Dorus.*
              </label>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
