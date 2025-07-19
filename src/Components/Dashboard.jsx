import React from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = ({ passwords, deletePassword, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <h2>Saved Passwords</h2>
      
      {/* Optional logout inside dashboard
      <span className="logout-link" onClick={() => setIsLoggedIn(false)}>
        Logout
      </span>
       */}
      {passwords.length === 0 ? (
        <p>No passwords saved yet.</p>
      ) : (
        <div className="Dashboard">
          {passwords.map((item, idx) => (
            <div className="password-card" key={idx}>
              <h4>{item.site}</h4>
              <p><strong>Username:</strong> {item.username}</p>
              <p><strong>Password:</strong> {item.password}</p>
              <button onClick={() => deletePassword(idx)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
