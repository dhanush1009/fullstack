import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="navbar">
      <h3>Password Manager</h3>
      <div>
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
            <span className="logout-link" onClick={() => setIsLoggedIn(false)}>Logout</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
