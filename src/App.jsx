import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need for BrowserRouter here
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App;
