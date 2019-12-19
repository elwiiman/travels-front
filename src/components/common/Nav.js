import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const { user, resetContext } = useContext(AppContext);
  const { push } = useHistory();

  const handleLogout = () => {
    logout();
    push("/login");
    resetContext();
  };

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          {!user._id ? (
            <li className="">
              <NavLink className="lowcase" exact to="/">
                Home
              </NavLink>
            </li>
          ) : null}
          {!user._id ? (
            <li className="">
              <NavLink className="lowcase" exact to="/about">
                ¿Quiénes somos?
              </NavLink>
            </li>
          ) : null}
          {user._id ? (
            <li className="">
              <NavLink className="lowcase" exact to="/home">
                Viajes
              </NavLink>
            </li>
          ) : null}

          {user.role === "user" ? (
            <li className="">
              <NavLink className="lowcase" exact to="/my-reservations">
                Mis Viajes
              </NavLink>
            </li>
          ) : null}

          {user.role === "admin" ? (
            <li className="">
              <NavLink className="lowcase" exact to="/travel">
                Crear Nuevo Viaje
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>

      <div className="uk-navbar-right">
        {user._id ? (
          <ul className="uk-navbar-nav">
            <li>
              <NavLink className="lowcase" to="#">
                {user.username ? user.username : user.email}
              </NavLink>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active uk-flex uk-flex-center">
                    <NavLink to="/profile"> Perfil</NavLink>
                  </li>
                  {/* <li className="uk-active">
                    <NavLink to="/create">Subir propiedas</NavLink>
                  </li> */}
                  <hr />
                  <li className="uk-active uk-flex uk-flex-center">
                    <button
                      uk-icon="icon: sign-out"
                      className="uk-button uk-button-default uk-button-small lowcase"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="uk-navbar-nav">
            <li className="">
              <Link
                onClick={() => {
                  console.log("imhere");
                }}
                className="lowcase"
                to="/login"
              >
                Iniciar Sesión
              </Link>
            </li>
            <li className="">
              <Link className="lowcase" to="/signup">
                Registrarse
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
