import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Students from './components/Students';
import Courses from './components/Courses';
import Assignment from './components/Assignment';
import './App.css';

function App() {
  return (
    <div className='d-flex'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
