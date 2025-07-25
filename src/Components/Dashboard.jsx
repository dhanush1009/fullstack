import React from 'react';
import './Dashboard.css';
import { FaLock } from 'react-icons/fa';

const Dashboard = ({ passwords, deletePassword }) => {
  return (
    <div className="dashboard">
      <h2>Saved Passwords</h2>
      {passwords.length === 0 ? (
        <p>No passwords saved yet.</p>
      ) : (
        <div className="passwords-grid">
          {passwords.map((item, idx) => (
            <div className="password-card" key={idx}>
              <h4><FaLock /> {item.site}</h4>
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
