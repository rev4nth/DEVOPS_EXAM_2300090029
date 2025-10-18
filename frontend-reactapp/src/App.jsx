import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
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