import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Assuming you have a CSS file for styling

const Signup = ({ setUsers }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user (add to users list)
    setUsers(prev => [...prev, { email, password }]);

    // Do NOT setIsLoggedIn here
    // Navigate to login page
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
