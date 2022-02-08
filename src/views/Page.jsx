import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DoesIt from '../components/PageSections/DoesIt/DoesIt';
import Footer from '../components/PageSections/Footer/Footer';
import Hero from '../components/PageSections/Hero/Hero';
import Solutions from '../components/PageSections/Solutions/Solutions';
import Solutions2 from '../components/PageSections/Solutions2/Solutions2';

const Page = () => {
  const [data, setData] = useState({});
  const { link } = useParams();

  useEffect(() => {
    const headers = { webintegrity: 'mdsiod8y40324h23euoby3r02e7GUSA' };
    const getBlogsList = async () => {
      const response = await axios.get(
        `https://sandboxuat.centralindia.cloudapp.azure.com/web/post/en/${link}`,
        { headers }
      );
      setData(response.data.message);
      console.log(response.data.message);
    };
    getBlogsList();
  }, [link]);
  console.log(data);
  return (
    <div style={{ background: '#fbfbf8' }}>
      <Hero data={data?.content?.sections[0]?.content}></Hero>
      <Solutions data={data?.content?.sections[1]?.content} />
      <DoesIt data={data?.content?.sections[2]?.content} />
      <Solutions2 data={data?.content?.sections[3]?.content} />
      <Solutions data={data?.content?.sections[4]?.content} />
      <Solutions2 data={data?.content?.sections[5]?.content} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <br />
        <h2>
          <Link to='/'>{data?.content?.sections[6]?.content.sectionTitle}</Link>
        </h2>
        <br />
        <img
          style={{
            maxWidth: '35%',
            minWidth: '200px',
            borderRadius: '8px',
          }}
          src={data?.content?.sections[6]?.content.asset}
          alt=''
        />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Page;
