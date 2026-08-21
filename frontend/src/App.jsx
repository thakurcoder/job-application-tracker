import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Add from "./pages/Add";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="m-2  rounded-2xl p-2">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
