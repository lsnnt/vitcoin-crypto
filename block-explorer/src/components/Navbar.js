import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Block Explorer</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
