import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Start from "./Start";
import Sure from "./Sure";
import { PlayersStorage } from "./PlayersContext";

const App = () => {

  return (
    <PlayersStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="start" element={<Start />} />
          <Route path="sure" element={<Sure />} />
          <Route path="roles" element={<Roles />} />
        </Routes>
       </BrowserRouter>
    </PlayersStorage>
  );
};

export default App;
