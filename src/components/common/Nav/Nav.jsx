import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/svg/logo.svg';
import styles from './nav.module.scss';

const Nav = () => {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <nav className={styles.nav + ' navbar navbar-expand-lg'}>
        <div className='container-fluid p-0'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' />
          </Link>
          <button
            className={styles.toggle + ' navbar-toggler'}
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className={styles.ul + ' navbar-nav ms-auto mb-2 mb-lg-0'}>
              <li className='nav-item'>
                <Link to='/'>Home</Link>
              </li>
              <li
                onMouseOver={() => setStatus(true)}
                id={styles.target}
                className='nav-item'>
                {' '}
                Products
              </li>
              <li className='nav-item'>
                <Link to='/'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/'>Contacts</Link>
              </li>
              <li className='nav-item'>ENG</li>
              <li className='nav-item'>|</li>
              <li className='nav-item'>GRE</li>
            </ul>
            {status && (
              <div onMouseLeave={() => setStatus(false)} id={styles.products}>
                <ul>
                  <li>
                    <Link to='/mobile-app'>Mobile App</Link>
                  </li>
                  <li>
                    <Link to='/crm'>CRM</Link>
                  </li>
                  <li>
                    <Link to='/wealth'>Wealth Management</Link>
                  </li>
                  <li>
                    <Link to='/open-api'>Open API</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
