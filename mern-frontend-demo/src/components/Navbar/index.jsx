/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">
      ExcerTracker
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Excercise
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/create" className="nav-link">
            Create Excercise
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/user" className="nav-link">
            Create User
          </Link>
        </li>
      </ul>
    </div>
  </nav>);

export default NavBar;
