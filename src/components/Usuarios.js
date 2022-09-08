import {useEffect, useState} from "react";
import axios from 'axios';
import Navbar from "./navbar";

function Usuarios() {

    const [data, setDate] = useState([])

    useEffect(() =>{
        axios.get('/getUsers').then(res =>{
            console.log("Obtenido de", res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    }, [])

    const contenido = data.map((data, index)=>{
        return(
            <tr>
              <td>{data.carnet}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.gender}</td>
              <td>{data.phone}</td>
              <td>{data.dateBirth}</td>
              <td>{data.profession}</td>
              <td>{data.poetry}</td>
              <td>{data.inscription}</td>
            </tr>
        )
    })

  return (
    <>
        <Navbar />
        <div class="container">
        <div class="text-center">

      <div class="col-sm">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Carnet</th>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Género</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Fecha de nacimiento</th>
              <th scope="col">Profesión</th>
              <th scope="col">Género literario</th>
              <th scope="col">Inscripción</th>

            </tr>
          </thead>
          <tbody>
             {contenido}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </>

    
  );
}

export default Usuarios;