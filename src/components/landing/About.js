import React from "react";
import { NavLink, Link } from "react-router-dom";
const About = () => {
  return (
    // className="uk-flex uk-flex-center uk-flex-middle "
    <div className="landing-about uk-container">
      <div className="uk-padding uk-flex uk-flex-center uk-flex-top uk-flex-column">
        <div className="uk-flex  ">
          <p className="myparagraph">
            México para Todos es la mejor agencia de viajes para recorridos en
            grupo, con nosotros tienes la seguridad de que vivirás las mejores
            experiencias en los lugares más increíbles, tenemos los mejores
            destinos, transportes, hoteles, guías y coordinadores para que cada
            viaje sea inolvidable.
          </p>
        </div>

        <div className="uk-padding-top-remove uk-flex uk-flex-center uk-flex-middle ">
          <Link
            className="principal-button uk-button uk-button-primary uk-button-large"
            to="/home"
          >
            Comienza a Viajar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
