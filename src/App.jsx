// import './App.css'

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import CardScreen from "./components/CardScreen";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen/>} />
        <Route path="/card" element={<CardScreen/>} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </Router>
  )
}

export default App
