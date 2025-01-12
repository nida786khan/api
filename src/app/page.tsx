"use client";
import React, { useEffect, useState } from 'react';
import Data from './components/Data';

// Define the type for info
interface Info {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Page = () => {
  const [data, setData] = useState<Info[]>([]); // Use Info type here

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://6781224c85151f714b09858d.mockapi.io/test');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((info) => (
        <Data info={info} key={info.id} />
      ))}
    </div>
  );
};

export default Page;

