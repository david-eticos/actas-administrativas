import React, { Fragment }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Modalmenu = ({show,handleClose})=> {



  const dispensacion = () => {

    console.log("Dispensacion")

  }

  const suministro = () => {

    console.log("Dispensacion")

  }

  const satelite = () => {

    console.log("Dispensacion")

  }

  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose} className='modal-lg'>
        <Modal.Header closeButton>
          <Modal.Title>Ingreso con exito usted cuenta con los siguientes permisos</Modal.Title>
        </Modal.Header>
        <Modal.Body className=''>Señor usuario ingrese al Modulo que requiere, si no cuenta con permisos comuniquese con el administrador de sistema.</Modal.Body>
        <Modal.Footer className='m-4'>
           <Button variant="primary" onClick={dispensacion()} className="m-2">
            Modulo Dispensacion
          </Button>
          <Button variant="primary" onClick={satelite()} className="m-2">
            Modulo Actas Satelites
          </Button>
          <Button variant="primary" onClick={suministro()} className="m-2">
            Modulo Actas Suministro
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

