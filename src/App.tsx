import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Start from "./Start";
import Sure from "./Sure";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start" element={<Start />} />
        <Route path="sure" element={<Sure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
