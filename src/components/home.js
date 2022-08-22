import React from "react";
import Navbar from "./navbar";
import '../App.css';

function Home() {
  return (
    <>
    <Navbar />
    <div>
      <div className="title">
        <br></br>
        <h1> Evento de poesía</h1>
        <p>
          Registrate en el apartado "Registro" para poder asignarte al evento y recitar tu poema. <br></br>
        </p>
        <p></p>
      </div>
    </div>
    </>
    
  );
}

export default Home;