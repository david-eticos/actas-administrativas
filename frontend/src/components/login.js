import React from "react";
import logo from "../static/img/eticoslogo.png";
// import logoreact from "../img/logo.svg";

export const login = () => (
  <div className="container">
    {/* Eticos */}
    <div className="row p-4 mt-4"></div>
    <div className="row p-4">
      <div className="col-4"></div>
      <div className="col-4 mt-4">
        <form action="" className="card card-body border-primary">
          <fieldset>
            <img
              src={logo}
              alt="eticos"
              className="figure-img img-fluid rounded"
            />
            {/* <img src={logoreact} alt="react" className="mr-4" /> */}
            <legend className="px-4 ms-5">Ingresar Usuario</legend>
            <div className="form-group px-5">
              <label className="col-form-label" htmlFor="inputSmall">
                Usuario
              </label>
              <input
                className="form-control "
                type="number"
                placeholder="usuario"
                id="inputSmall"
                name="usuario"
              />
            </div>
            <div className="form-group px-5">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="d-grid gap-2 px-5 pt-2">
              <button type="button" class="btn btn-sm btn-outline-primary">
                INGRESAR
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-4"></div>
    </div>
  </div>
);
