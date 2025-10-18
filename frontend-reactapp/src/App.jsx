import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import './NavBar.css';  // Make sure this matches the CSS filename exactly

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