// import './App.css'

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import CardScreen from "./components/CardScreen";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen/>} />
        <Route path="/card" element={<CardScreen/>} />
      </Routes>
    </Router>
  )
}

export default App
