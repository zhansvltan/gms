import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>

    </BrowserRouter>
  );
}
