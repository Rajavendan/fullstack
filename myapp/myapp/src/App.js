// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountType from './Login/AccountType';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import CreateProject from './Dashboard/CreateProject'; // Import CreateProject component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} /> {/* Use wildcard for nested routing */}
        <Route path="/Dashboard/createproject" element={<CreateProject />} /> {/* Create Project */}
      </Routes>
    </Router>
  );
}

export default App;
