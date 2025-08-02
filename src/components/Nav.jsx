import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sort">Sorting Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;