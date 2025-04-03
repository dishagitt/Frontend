import './App.css'
import React from "react";
import AppRoutes from './Routes/AppRoutes';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

