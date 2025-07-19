import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPassword.css'; // Assuming you have a CSS file for styling

const AddPassword = ({ setPasswords }) => {
  const [site, setSite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new password to list
    setPasswords(prev => [...prev, { site, username, password }]);

    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Add New Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Site (e.g. facebook.com)"
          value={site}
          onChange={(e)=>setSite(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddPassword;
