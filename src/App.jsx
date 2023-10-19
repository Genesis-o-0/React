import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;
