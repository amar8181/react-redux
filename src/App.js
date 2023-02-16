import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import User from './component/User';
import Filter from './component/filter';
import "./App.css";

import Contact from './component/Contact';
import Other from './component/Other';
import Channel from './component/Channel';
import Company from './component/Company';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />

          <Route path="/User/:name" element={< User />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}

          {/* nasted Routing */}
          <Route path="/contact/" element={<Contact />} >
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;