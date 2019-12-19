import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    // className="uk-flex uk-flex-center uk-flex-middle "
    <div className="landing uk-container">
      <div className="inside-landing uk-flex uk-flex-center uk-flex-middle uk-flex-column">
        <div className="uk-flex uk-flex-center uk-flex-middle ">
          <h1 className="mytitle">México para Todos</h1>
        </div>

        <div className="uk-flex uk-flex-center uk-flex-middle ">
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

export default Landing;
