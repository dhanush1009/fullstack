import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = ({ setIsLoggedIn, users }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists and password matches
    const userFound = users.find(u => u.email === email && u.password === password);

    if (userFound) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      setError('Incorrect email or password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
