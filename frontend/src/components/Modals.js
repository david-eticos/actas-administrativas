import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const REACTAPI = process.env.REACT_APP_API;
export const Modalmenu = ({
  idusers,
  batallon,
  modality,
  group,
  show,
  user,
  handleClose,
}) => {
  const dispensacion = (e) => {
    console.log("Dispensacion ingreso", this);
  };

  const suministro = (e) => {
    console.log("suministro");
    // console.log(idusers);
    // console.log(batallon);
    // console.log(modality);

    // if (group !== "") {
    window.location.href = `${REACTAPI}/actas/suministro`;
    // }
  };

  const satelite = (e) => {
    console.log("satelite");
  };

  return (
    <>
      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        className="modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Ingreso con exito usted cuenta con los siguientes permisos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <h5 className="px-2 m-2">
            <b>Nombres:</b>
          </h5>
          <strong className="px-2 m-2">{user}</strong>
          <h5 className="px-2 m-2">
            <b>Establecimiento:</b>
          </h5>
          {group === "Administrador" || group === "Nacional Suministros" ? (
            <strong className="px-2 m-2">TODAS LAS MODALIDADES</strong>
          ) : (
            <strong className="px-2 m-2">{batallon}</strong>
          )}
          <h5 className="px-2 m-2">
            <b>Modalidad:</b>
          </h5>
          <strong className="px-2 m-2">{modality}</strong>
        </Modal.Body>
        <Modal.Footer className="m-4">
          <Button
            variant="primary"
            onClick={(e) => dispensacion()}
            className="m-2"
          >
            Modulo Dispensacion
          </Button>
          {group === "Administrador" ||
          group === "Nacional Suministros" ||
          group === "Satelite" ? (
            <Button
              variant="primary"
              onClick={(e) => satelite()}
              className="m-2"
            >
              Modulo Actas Satelites
            </Button>
          ) : (
            <Button disabled variant="primary" className="m-2">
              Modulo Denegado
            </Button>
          )}

          {group === "Administrador" ||
          group === "Nacional Suministros" ||
          group === "Suministros" ? (
            <Button
              variant="primary"
              onClick={(e) => suministro()}
              className="m-2"
            >
              Modulo Actas Suministro
            </Button>
          ) : (
            <Button disabled variant="primary" className="m-2">
              Modulo Denegado
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
