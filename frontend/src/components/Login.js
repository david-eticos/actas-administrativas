import React, { useState } from "react";
import logo from "../static/img/logoeticos01.png";
import swal from "sweetalert";
import { Setcookie } from "./Setcookie";
import { Removecookie } from "./Removecookies.js";
import { Modalmenu } from "./Modals.js";

const API = process.env.REACT_APP_API_DEVELOPER;
// const REACTAPI = process.env.REACT_APP_API;
// const API = process.env.REACT_APP_API_PRODUCCION;

export const Login = () => {
  const [idusers, setIdUsers] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [batallon, setBatallon] = useState("");
  const [modality, setModality] = useState("");
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  // uso del evento por props modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(idusers);
    console.log(password);

    const res = await fetch(`${API}/app/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idusers, password }),
    });

    try {
      const data = await res.json();
      console.log(data.message);

      if (data.message === "synced" && data.group !== "Satelite CE") {
        // window.location.href = `${REACTAPI}/actas/suministro`;
        Removecookie("IdToken");
        Setcookie("IdToken", JSON.stringify(data.iduser));
        setIdUsers(data.iduser);
        setBatallon(data.battalion);
        setModality(data.modality);
        setGroup(data.group);
        setUser(data.user);
        handleShow();
      } else {
        swal({
          title: "vuelva a intentar!",
          text: "Usuario invalido!",
          icon: "error",
          buttons: {
            cancel: "cerrar",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }

    setIdUsers("");
    setPassword("");
    // setBatallon("");
    // setModality("");
  };

  return (
    <>
      <div className="container">
        <div className="row p-4 mt-4"></div>
        <div className="row p-4">
          <div className="col-4"></div>
          <div className="col-4 mt-4">
            <form
              onSubmit={handleSubmit}
              className="card card-body border-primary"
            >
              <img
                src={logo}
                alt="eticos"
                className="figure-img img-fluid rounded"
              />

              <legend className="px-4 m-4">
                <b>INGRESAR USUARIO </b>
              </legend>
              <div className="form-group px-5">
                <label className="form-label" htmlFor="inputSmall">
                  Usuario
                </label>
                <input
                  className="form-control form-control-sm"
                  type="number"
                  name="IdUsers"
                  onChange={({ target }) => setIdUsers(target.value)}
                  value={idusers}
                  placeholder="usuario"
                  id="inputSmall"
                  autoFocus
                  required
                  min="1"
                  max="2013590475"
                />
              </div>
              <div className="form-group px-5">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  name="PassWord"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-grid gap-2 px-5 pt-2">
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-light btn-block"
                >
                  INGRESAR
                </button>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>

      <Modalmenu
        idusers={idusers}
        show={show}
        handleClose={handleClose}
        batallon={batallon}
        modality={modality}
        group={group}
        user={user}
      ></Modalmenu>
    </>
  );
};
