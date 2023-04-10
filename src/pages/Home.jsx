import React from 'react';
import Header from 'components/Header';

const Home = () => {
  const message = 'Hello world';
  return (
    <>
      <Header />
      <p>{message}</p>
    </>
  );
};

export default Home;
