import React from 'react';
import DoesIt from '../components/crmSections/DoesIt/DoesIt';
import Hero from '../components/crmSections/Hero/Hero';
import Solutions from '../components/crmSections/Solutions/Solutions';

const Crm = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Hero />
      <Solutions />
      <DoesIt />
    </div>
  );
};

export default Crm;
