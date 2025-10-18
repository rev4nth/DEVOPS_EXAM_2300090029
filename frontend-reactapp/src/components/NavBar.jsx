import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import './navbar.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;