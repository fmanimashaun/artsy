import React from 'react';
import Logo from 'components/Logo';
import NavBar from 'components/NavBar';
import Search from 'components/Search';

const Header = () => (
  <header className="container">
    <Logo />
    <NavBar />
    <Search />
  </header>
);

export default Header;
