import React from 'react';
import Header from 'components/Header';

const Home = () => {
  const message = 'Home page';
  return (
    <>
      <Header />
      <h1>{message}</h1>
    </>
  );
};

export default Home;
