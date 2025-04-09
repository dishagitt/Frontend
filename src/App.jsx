import './App.css'
import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from './Routes/routes';



function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;

