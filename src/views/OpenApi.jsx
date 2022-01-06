import React from 'react';
import { Fade } from 'react-reveal';
import Footer from '../components/OpenApiSections/Footer/Footer';
import Hero from '../components/OpenApiSections/Hero/Hero';
import Partners from '../components/OpenApiSections/Partners/Partners';
import Solutions1 from '../components/OpenApiSections/Solutions1/Solutions1';

const OpenApi = () => {
  return (
    <div>
      <div style={{ background: 'white' }}>
        <Fade top>
          <Hero />
        </Fade>
      </div>
      <Fade bottom>
        <Solutions1 />
      </Fade>
      <Fade bottom>
        <Partners />
      </Fade>
      <Footer />
    </div>
  );
};

export default OpenApi;
