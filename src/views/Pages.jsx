import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Page from './Page';

const Pages = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const posts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return setData(posts.data);
    };
    getData();
  }, [id]);
  console.log(data);
  return (
    <div>
      <Page blog={data} />
    </div>
  );
};

export default Pages;
