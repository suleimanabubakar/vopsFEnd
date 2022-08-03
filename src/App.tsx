import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom'
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
   </Routes>
    </div>
  );
}

export default App;
