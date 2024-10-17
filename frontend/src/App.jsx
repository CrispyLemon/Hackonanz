import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import Courses from './components/Courses';
import Assignment from './components/Assignment';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css';

function App() {
  // State to manage login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token exists in local storage (for persisting login state)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Sidebar always displayed */}
      <div style={{ display: 'flex', height: '100%', gap: '10px' }}>
        <Sidebar />
        <div style={{ marginLeft: '300px', flexGrow: 1, height: '100vh', overflowY: 'auto', padding: '20px' }}>
          {/* If user is not logged in, display the login form, otherwise display the app content */}
          {!isLoggedIn ? (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <>
              <div>
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/assignments" element={<Assignment />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;