import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
// import Page404 from './component/Page404';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" elememt={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
