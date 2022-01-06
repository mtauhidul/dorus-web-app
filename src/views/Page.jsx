import React from 'react';
import Footer from '../components/PageSections/Footer/Footer';
import Hero from '../components/PageSections/Hero/Hero';
import Partners from '../components/PageSections/Partners/Partners';
import Solutions1 from '../components/PageSections/Solutions1/Solutions1';

const Page = ({ blog }) => {
  return (
    <div>
      <Hero />
      <Solutions1 />
      <Partners />
      <Footer />
    </div>
  );
};

export default Page;
