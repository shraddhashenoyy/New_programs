import React from "react";
import ReactDOM from "react-dom-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
