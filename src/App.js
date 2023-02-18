
import "./App.css";
import { BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import User from './component/User';
import Filter from './component/filter';

import Contact from './component/Contact';
import Other from './component/Other';
import Channel from './component/Channel';
import Company from './component/Company';
import Login from './component/Login';
import Protected from "./component/Protected";

//protected routing apply on all route pages because the without login no one can open other pages.

function App() {

  return (
    <div className="App">
          <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path="/" element={<Protected Cmp={Home}/>} />
          <Route path="/login" element={<Login />} />

          <Route path="/about" element={<Protected Cmp={About}/>} />
          <Route path="/filter" element={<Protected Cmp={Filter} />} />

          <Route path="/User/:name" element={< User />} />
          <Route path="/*" element={<Navigate to="/" />} />

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