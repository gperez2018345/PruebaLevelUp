import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import Navbar from "./navbar";


class Registro extends Component {

    constructor(){
        super()
        this.state ={
            carnet:'',
            name:'',
            address:'',
            gender:'',
            phone:'',
            dateBirth:'',
            profession:'',
            poetry:''
        }
        this.changeCarnet = this.changeCarnet.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changeGender = this.changeGender.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeDateBirth = this.changeDateBirth.bind(this)
        this.changeProfession = this.changeProfession.bind(this)
        this.changePoetry = this.changePoetry.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeCarnet(event){
        this.setState({
            carnet:event.target.value
        })
    }

    changeName(event){
        this.setState({
            name:event.target.value
        })
    }

    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }

    changeGender(event){
        this.setState({
            gender:event.target.value
        })
    }

    changePhone(event){
        this.setState({
            phone:event.target.value
        })
    }

    changeDateBirth(event){
        this.setState({
            dateBirth:event.target.value
        })
    }

    changeProfession(event){
        this.setState({
            profession:event.target.value
        })
    }

    changePoetry(event){
        this.setState({
            poetry:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            carnet: this.state.carnet,
            name: this.state.name,
            address: this.state.address,
            gender: this.state.gender,
            phone: this.state.phone,
            dateBirth: this.state.dateBirth,
            profession: this.state.profession,
            poetry: this.state.poetry
        }

        axios.post('http://localhost:4000/app/signup', registered).then(response => console.log(response.data))
        
        this.setState({
            carnet:'',
            name:'',
            address:'',
            gender:'',
            phone:'',
            dateBirth:'',
            profession:'',
            poetry:''
        })
    }

    render() {
        return(
            <>
            <Navbar />

            <div>
                <div className="title">
                    <h4>Formulario de inscripci??n</h4>
                </div>
                
                <div className='contenedor'>
                    <div className='formulario'>
                        <form onSubmit={this.onSubmit}>
                            <div className="input">
                                <a>*Carnet, Recuerde: El primer 
                                    car??cter deber?? ser "A", el tercero "5" y el ??ltimo "1", "3" o "9" </a>
                                <input type='text' placeholder='Carnet' minLength={6} maxLength={6}
                                onChange={this.changeCarnet} value={this.state.carnet}
                                className='form-control form-group'/>
                            </div>
                            
                            <div className="input">
                            <a>*Nombre Completo</a>
                            <input type='text' placeholder='Nombre'
                            onChange={this.changeName} value={this.state.name}
                            className='form-control form-group'/>
                            </div>
                            
                            <div className="input">
                            <a>*Direcci??n exacta</a>
                            <input type='text' placeholder='Direcci??n'
                            onChange={this.changeAddress} value={this.state.address}
                            className='form-control form-group'/>
                            </div>

                            <div className="input">
                            <a>*Seleccione su g??nero</a>
                            <select type="text" className="form-select" onChange={this.changeGender} 
                            value={this.state.gender}>
                            <option selected>Genero</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            </select>
                            </div>
                            
                            <div className="input">
                            <a>*N??mero telef??nico, 8 d??gitos</a>
                            <input type='Number' placeholder='Tel??fono' pattern="[0-9]{8}"
                            onChange={this.changePhone} value={this.state.phone}
                            className='form-control form-group'/>
                            </div>
                            
                            <div className="input">
                            <a>*Fecha de nacimiento, +17</a>
                            <input type='date' placeholder='Fecha de Nacimineto' max="2005-08-21"
                            onChange={this.changeDateBirth} value={this.state.dateBirth} 
                            className='form-control form-group'/>
                            </div>
                           
                            <div className="input">
                            <a>*Seleccione su carrera</a>
                            <select type="text" className="form-select" onChange={this.changeProfession} 
                            value={this.state.profession}>
                            <option selected>Carrera</option>
                            <option value="Inform??tica">Inform??tica</option>
                            <option value="Dibujo">Dibujo</option>
                            <option value="Mec??nica">Mec??nica</option>
                            <option value="Electr??nica">Electr??nica</option>
                            <option value="Electricidad">Electricidad</option>
                            <option value="Bachiller">Bachiller</option>
                            </select>
                            </div>
                            
                            <div className="input">
                            <a>*Seleccione g??nero literario</a>
                            <select type="text" className="form-select" onChange={this.changePoetry} 
                            value={this.state.poetry}>
                            <option selected>Genero Literario</option>
                            <option value="L??rico">L??rico</option>
                            <option value="??pico">??pico</option>
                            <option value="Dram??tico">Dram??tico</option>
                            </select>
                            </div>
                            
                            <div className="input">
                            <input type='submit' className='btn btn-success btn-block' value='Registrar'/>
                            </div>

                        </form>                        

                    </div>

                    
                </div>                

            </div>

            </>
            

        );
    }
}

export default Registro;