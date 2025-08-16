import React from "react";
import TextParagrahp from "./text/text_p";
import TextTitle from "./text/text_title";
import Text_subTitle from "./text/text_subTitle";
import "../styles/body.css";

// 🔹 Componente reutilizable para Tarjeta
const InfoCard = ({ icon, text }) => (
  <div className="col-12 col-md-6">
    <div className="layout p-3 rounded shadow h-100 text-center hover-card">
      <div className="d-flex align-items-center justify-content-center mb-2">
        <img src={icon} alt={text} className="icon-responsive" />
      </div>
      <Text_subTitle text={text} />
    </div>
  </div>
);

// 🔹 Componente reutilizable para Ítem con icono
const IconItem = ({ icon, text }) => (
  <div className="d-flex align-items-center justify-content-start mt-3">
    <img src={icon} alt={text} className="icon-responsive me-3" />
    <TextParagrahp text={text} />
  </div>
);

function Body() {
  return (
    <div className="container my-5">
      <div className="row align-items-start">
        <div className="col-12 col-lg-6 mb-4">
          <div style={{ overflow: "hidden", borderRadius: "12px" }}>
            <img
              src="/svg/fondo2.svg"
              alt="Imagen corporativa"
              className="img-fluid shadow-sm mb-4"
              style={{ height: "auto", width: "110%" }}
            />
          </div>

          <div className="row g-3">
            <InfoCard
              icon="/svg/icon_people.svg"
              text="Equipo formado por expertos en ventas"
            />
            <InfoCard
              icon="/svg/icon_map.svg"
              text="Más de 10 años de experiencia en el rubro"
            />
          </div>
        </div>

        <div className="col-12 col-lg-6 text-center text-lg-start">
          <div className="rectangulo_3 d-flex align-items-center justify-content-center mb-4 p-3 rectangulo-max">
            <TextTitle text="Generando Soluciones hace más de 10 años" />
          </div>

          <div className="d-flex align-items-center justify-content-start p-3 text-max">
            <TextParagrahp text="Este es un texto de relleno, que tiene la finalidad de rellenar los espacios donde iría texto que quieran incluir los clientes." />
          </div>

          <div className="d-flex flex-column gap-4">
            {[...Array(3)].map((_, i) => (
              <IconItem
                key={i}
                icon="/svg/check.svg"
                text="Texto de Relleno para rellenar espacios"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
