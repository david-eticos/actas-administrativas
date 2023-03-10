import React, { useEffect,useState} from "react";
import logo from "../static/img/logoeticos01.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Getcookie } from "./Getcookie";
import swal from "sweetalert";
const API = process.env.REACT_APP_API_DEVELOPER;
// const REACTAPI = process.env.REACT_APP_API;
// const API = process.env.REACT_APP_API_PRODUCCION;

export const ActaSumi = () => {

  const [iduserss, setIdUserss] = useState("");
  const[name,setName] = useState("");
  const[esm,setEsm] = useState("");
  const[state,setState] = useState("");
  const[fact,setFact] = useState("");
  const[num,setNum] = useState("");

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
            setName(data.name)
            setEsm(data.esmdetalle)
          } catch (error) {
            console.log(error);
          }
    }
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
    },[]);

    const  handleChange= async (event)=> {
      event.preventDefault();
      if(state==="" || fact==="" || num===""){

        swal({
          title: "vuelva a intentar!",
          text: " hay campos vacios o incorrectos, debe seleccionar todos los campos!",
          icon: "warning",
          buttons: {
            cancel: "cerrar",
          },
        });
        
      }else{

          const response = await fetch(`${API}/app/actaSuministro`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state,fact,num }),

          });

          try {

            const data = await response.json();
            console.log(data)
            
          } catch (error) {
            console.log(error)
          }

      }
    
      // console.log(state);
      // console.log(fact);
      // console.log(num);
    }


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
              <strong>ACTA DE RECEPCIÓN TÉCNICA SUMINISTROS</strong>
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
              <br></br>
              <strong>{iduserss}</strong>
            </Link>
          </div>
        </div>
      </div>
      <div className="row py-2">
        <div className="alert alert-light text-center p-0 m-2" role="alert" style={{fontSize: 'large'}}>
          <strong className="form-text text-muted"><b>
            Bienvenido {name} Recuerde validar sus permisos de su ESM y la Factura, antes de realizar la recepción técnica
            </b>
          </strong>
        </div>
        <div className="row">
          <div className="col-6">
            <select value={state} onChange={(event)=>setState(event.target.value)} className="form-select form-select-sm" aria-label="Default select example">
              <option value={""}>
                 Seleccione un ESM
              </option>
              { 
              Array.from(esm).map((es) => {
              return (
                <option key={es.batallon} value={es.batallon}>
                  {es.batallon}
                </option>
              );
            })}

            </select>
          </div>
          <div className="col-2">
            <select value={fact} onChange={(event)=>setFact(event.target.value)} className="form-select form-select-sm" aria-label="Default select example">
              <option value={""}>Seleccione tipo Factura</option>
              <option >Factura FFM3</option>
              <option>Factura FFM1</option>
            </select>
          </div>
          <div className="col-2">
            <input
                   className="form-control form-control-sm" 
                   onChange={({ target }) => setNum(target.value)}
                   type="number"
                   name="number"
                   value={num}
                   placeholder="Digite N° Factura"
                   id="inputSmall"
                   required
                   min="1"
                   max="2013590475"
                    />
          </div>
          <div className="col-2">
            <button className="btn btn-outline-light btn-sm" onClick={handleChange}>Consultar</button>
            <span style={{color: 'white'}}>
               {/* <button onclick="recarga()" className="btn btn-primary">Nueva Consulta</button> */}
            </span></div>
        </div>
      </div>
      <div>
        {/* <h1></h1> */}
        <p>
              {/* {esm} */}
        </p>
      </div>
    </div>
  );
};
