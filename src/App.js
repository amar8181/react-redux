import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import User from './component/User';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User/:name" element={< User />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;