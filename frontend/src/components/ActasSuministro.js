import React, { useEffect,useState } from "react";
import logo from "../static/img/logoeticos01.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Getcookie } from "./Getcookie";
const API = process.env.REACT_APP_API_DEVELOPER;
// const REACTAPI = process.env.REACT_APP_API;
// const API = process.env.REACT_APP_API_PRODUCCION;

export const ActaSumi = () => {

  const [iduserss, setIdUserss] = useState("");

  useEffect(() => {
    const idusers = Getcookie("IdToken");
    setIdUserss(idusers);
    // declare the data fetching function
    const fetchData = async () => {
    
      const res = await fetch(`${API}/app/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idusers }),
          });
          try {
            const data = await res.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
    }, []);

  return (
    <div className="container-fluid">
      <div className="card border-dark">
        <div className="row">
          <div className="col-3 mt-3">
            <img
              src={logo}
              alt="eticos"
              className="figure-img img-fluid rounded"
            />
          </div>
          <div className="col-6 mt-5">
            <h3>
              <strong>ACTA DE RECEPCION DE MEDICAMENTOS SUMINISTROS</strong>
            </h3>
          </div>
          <div className="col-2 offset-md-1 mt-3">
            <Link to={"../"}>
              <FontAwesomeIcon
                icon={faHome}
                className="justify-content-end"
                style={{ fontSize: "4rem" }}
              />
              <strong>Salir</strong>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1>{iduserss}</h1>
      </div>
    </div>
  );
};
