import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log("isLoggedIn:", isLoggedIn); // check in console

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Password Manager</h3>
      </div>
      <div className="nav-links">
        {!isLoggedIn && (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/add">Add Password</Link>
            <span className="nav-links" onClick={() => setIsLoggedIn(false)}>
              <FaSignOutAlt /> Logout
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
