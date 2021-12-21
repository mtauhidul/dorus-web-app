import React from 'react';
import { Fade, Slide } from 'react-reveal';
import DoesIt from '../components/mobileSections/DoesIt/DoesIt';
import Footer from '../components/mobileSections/Footer/Footer';
import Hero from '../components/mobileSections/Hero/Hero';
import Partners from '../components/mobileSections/Partners/Partners';
import Solutions from '../components/mobileSections/Solutions/Solutions';
import Solutions2 from '../components/mobileSections/Solutions2/Solutions';
import Solutions3 from '../components/mobileSections/Solutions3/Solutions';
import StartBuild from '../components/mobileSections/StartBuild/StartBuild';

const MobileApp = () => {
  return (
    <div style={{ background: '#fff' }}>
      <Fade top>
        <Hero />
      </Fade>
      <Fade bottom>
        <Solutions />
      </Fade>
      <DoesIt />
      <Fade bottom>
        <Solutions3 />
      </Fade>
      <Slide bottom>
        <StartBuild />
      </Slide>
      <Fade bottom>
        <Solutions2 />
      </Fade>
      <Fade bottom>
        <Partners />
      </Fade>
      <Footer />
    </div>
  );
};

export default MobileApp;
