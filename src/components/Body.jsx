import React from "react";
import "../styles/body.css";

function Body() {
  return (
   <div className="hero-section">
    {/*1mer container*/}
      <div className="container d-flex flex-column align-items-center justify-content-center h-100">
        <div className="p-4 p-md-5  text-white bg-opacity">
          <div className="col-lg-12 px-0">
            <h1 className="display-4 fst-italic">
              Encontra tu lugar ideal con nosotros
            </h1>
          </div>
        </div>

        <div className="glass-container ">
          <span>Quiero Comprar</span>
          <div className="divider"></div>
          <span>Quiero Vender</span>
          <div className="divider"></div>
          <span>Quiero Alquilar</span>
        </div>
      </div>
    </div>

  );
}

export default Body;
