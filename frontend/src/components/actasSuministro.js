import React from 'react';
import logo from '../static/img/logoeticos01.png'
import {Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

export const ActaSumi = () => (
    

    <div className='container-fluid'>
        <div className='card border-dark'>
        <div className='row'>
            <div className='col-3 mt-3'>
            <img
              src={logo}
              alt="eticos"
              className="figure-img img-fluid rounded"
            />
            </div>
            <div className='col-6 mt-5'>
            <h3> <strong>ACTA DE RECEPCION DE MEDICAMENTOS SUMINISTROS</strong></h3>
            </div>
            <div className='col-2 offset-md-1 mt-3'>
            <Link to={"../"}>
            <FontAwesomeIcon icon={faHome} className="justify-content-end" style={{ fontSize: "4rem"}} />
             <strong>Salir</strong>
            </Link>
            </div>
        
        </div>
        </div>
    </div>


)