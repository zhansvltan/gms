import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f0f0f0]">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
