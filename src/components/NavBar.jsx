import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/marketplace">Marketplace</NavLink>
      </li>
      <li>
        <NavLink to="/auction">Auction</NavLink>
      </li>
      <li>
        <NavLink to="/drop">Drop</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
