import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import Courses from './components/Courses';
import Assignment from './components/Assignment';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', height: '100%', gap: '10px' }}>
        <Sidebar />
        <div style={{ marginLeft: '300px', flexGrow: 1, height: '100vh', overflowY: 'auto', padding: '20px' }}>
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
        </div>
      </div>
    </BrowserRouter >

  );
}

export default App;
