import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import AddPassword from './Components/Addpassword';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwords, setPasswords] = useState([]);

  // NEW: store registered users
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} users={users} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} setUsers={setUsers} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard passwords={passwords} deletePassword={(index) =>
            setPasswords(prev => prev.filter((item, idx) => idx !== index))
          } /> : <Navigate to="/" />}
        />
        <Route
          path="/add"
          element={isLoggedIn ? <AddPassword setPasswords={setPasswords} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
