import React from 'react';
import logo from './imagenes/logo.png';
import iconoD from './imagenes/iconoD.png';
import descuentos from './imagenes/descuentos.jpg';
import logoF from './imagenes/logoF.png';
import './Mailing.css';



function Mailing() {
  return ( 
 
    <div id= "contenedor"> 
    <div id="contenedorP">
    <div id="contenedor1">

      <div>
        <img id="logo" src={logo} />
      <div id="titulo">
        <img id="logo2" src={iconoD} />
      </div>

      </div>
    </div>

    <div id="contenedor2">
      <img id="imagen" src={descuentos} />
    </div>
    </div>
    <div id= "contenedor3">
      <h1></h1>
    </div>

    <div id="contenedor4">
     
      <div id="descuento1">

        <div id="imagenD1">
          
        </div>

        <div id="informacionD1">
         
          <br/>
          <p style= {{color:'white'}} >Aprovecha el descuento de un gran juego de Capcom</p>

        </div>

      </div>

      <div id="descuento2">

        <div id="imagenD2"> 
       
        </div>

        <div id="informacionD2">
          <p  style= {{color:'white'}}>Compra el ultimo juego de Santa Monica</p>
        </div>

      </div>

      <div id="descuento3">

        <div id="imagenD3">
        </div>

        <div id="informacionD3">
          <p style= {{color:'white'}}>Insomniac Games trae un gran juego de Spider-Man</p>
        </div>
      </div>

      <div >
        <img id="logoF" src={logoF} />        
      </div>


  
    </div>
    
  </div>

);
}

export default Mailing;
