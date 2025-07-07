import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="p-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;