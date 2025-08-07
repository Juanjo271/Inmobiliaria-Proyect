import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-5 text-center text-lg-start mb-2 mb-lg-0">
              <h6 className="mb-0">+57 351 7608588</h6>
              <h6 className="mb-0">inmobiliariaproyect@empresa.com</h6>
            </div>
            <ul className="nav d-flex flex-wrap justify-content-center gap-2">
              <li>
                <a href="#" className="nav-link text-secondary p-0">
                  <img
                    src="/svg/instagram.svg"
                    alt="Instagram"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white p-0">
                  <img
                    src="/svg/linkedin.svg"
                    alt="LinkedIn"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white p-0">
                  <img
                    src="/svg/facebook.svg"
                    alt="Facebook"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <header className="d-flex flex-column flex-md-row align-items-center justify-content-between py-3 text-center text-md-start">
          <a
            href="/"
            className="d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0 text-decoration-none text-white"
          >
            <img
              src="/svg/logo.svg"
              alt="Logo"
              width="60"
              height="60"
              className="me-md-2 mb-2 mb-md-0"
            />
            <span className="fs-4 text-black">
              <span style={{ display: "block" }}>Inmobiliaria</span>
              <span style={{ display: "block" }}>Martínez</span>
            </span>
          </a>
          <ul className="nav nav-pills d-flex flex-column flex-md-row gap-2 gap-md-3 justify-content-center mt-3 mt-md-0">
            <li className="nav-item">
              <a href="#" className="nav-link custom-hover" aria-current="page">
                Propiedades
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link custom-hover">
                Tasaciones
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link custom-hover">
                Nuestros asesores
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link custom-hover">
                Contacto
              </a>
            </li>
          </ul>
        </header>
      </div>
    </header>
  );
}

export default Header;
