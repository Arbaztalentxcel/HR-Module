import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/career";
import Modal from "./Components/Modal";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/sidebar" element={<Sidebar />} />
        
        

      </Routes>
    </div>
  );
};

export default App;
