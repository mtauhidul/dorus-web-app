import React from 'react';
import { Fade } from 'react-reveal';
import DoesIt from '../components/crmSections/DoesIt/DoesIt';
import Footer from '../components/crmSections/Footer/Footer';
import Hero from '../components/crmSections/Hero/Hero';
import Partners from '../components/crmSections/Partners/Partners';
import Solutions from '../components/crmSections/Solutions/Solutions';
import SSB from '../components/crmSections/SSB/SSB';

const Crm = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Fade top>
        <Hero />
      </Fade>
      <Fade bottom>
        <Solutions />
      </Fade>
      <Fade bottom>
        <DoesIt />
      </Fade>
      <Fade bottom>
        <SSB />
      </Fade>
      <Fade bottom>
        <Partners />
      </Fade>

      <Footer />
    </div>
  );
};

export default Crm;
