import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Usuarios from './components/Usuarios';
import Home from './components/home';
import Registro from './components/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/registro" element={<Registro />} exact />
          <Route path="/usuarios" element={<Usuarios />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;