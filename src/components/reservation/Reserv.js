import React, { useState, useContext } from "react";
import UIkit from "uikit";
import { AppContext } from "../../AppContext";

const Reserv = ({ aviableSeats, title, toggleReserv, nextStep, price }) => {
  let [quantity, setQuantity] = useState(1);
  let [companions, setCompanions] = useState([{ value: null }]);
  let occurrence = false;

  const { assistants, setAssistants } = useContext(AppContext);

  const handleChange = (i, e) => {
    const values = [...companions];
    values[i].value = e.target.value;
    setCompanions(values);
    console.log(companions);
  };

  const condeseData = () => {
    let newAssistants = [];
    let canContinue = false;
    companions.map((companion, index) => {
      if (companion.value === null || companion.value === "") {
        canContinue = false;
        UIkit.notification({
          message: `Todos los campos de registro deben estar llenos.
          Falta Registro de ${
            index === 0 ? `Responsable de Reservación` : `Acompañante ${index}`
          }`,
          pos: "top-center",
          status: "warning",
          timeout: 2050
        });
        return;
      } else {
        canContinue = true;
        newAssistants.push(companion.value);
      }
    });
    console.log("cancontinue", canContinue);
    if (canContinue) {
      setAssistants([...newAssistants]);
      console.log(assistants);
      nextStep();
    }
  };

  const add = () => {
    if (quantity < aviableSeats && occurrence === false) {
      setQuantity(quantity + 1);
      let newCompanions = [...companions];
      console.log("before", newCompanions);
      newCompanions.push({ value: null });
      console.log("after", newCompanions);
      setCompanions(newCompanions);
    }
    if (quantity === aviableSeats && occurrence === false) {
      occurrence = true;
      UIkit.notification({
        message: `No puedes reservar más lugares de los disponibles`,
        pos: "top-center",
        status: "warning",
        timeout: 2050
      });
      UIkit.util.on(document, "close", function(evt) {
        occurrence = false;
      });
    }
  };

  const substract = () => {
    if (quantity > 1 && occurrence === false) {
      setQuantity(quantity - 1);
      let newCompanions = [...companions];
      console.log("before", newCompanions);
      newCompanions.pop({ value: null });
      console.log("after", newCompanions);
      setCompanions(newCompanions);
    }
    if (quantity === 1 && occurrence === false) {
      occurrence = true;
      UIkit.notification({
        message: `Tienes que reservar por lo menos un lugar`,
        pos: "top-center",
        status: "warning",
        timeout: 2050
      });
      UIkit.util.on(document, "close", function(evt) {
        occurrence = false;
      });
    }
  };

  return (
    <div>
      <h2
        className={"uk-padding uk-padding-remove-bottom"}
      >{`Reservación: ${title}`}</h2>

      <form className="uk-padding uk-padding-remove-top">
        <div className="uk-padding-remove-bottom">
          <p>Selecciona el numero de reservaciones a realizar</p>
          <button
            className="uk-button uk-button-primary control-button"
            type="button"
            onClick={substract}
            uk-icon="icon: minus; ratio: 0.6"
          ></button>
          <input
            className="uk-input uk-form-width-xsmall control-input"
            type="text"
            placeholder="X-Small"
            value={quantity}
            disabled
          />
          <button
            className="uk-button uk-button-primary control-button"
            type="button"
            onClick={add}
            uk-icon="icon: plus; ratio: 0.6"
          ></button>

          <span className="marked-border uk-padding-large">
            <img
              src="https://res.cloudinary.com/elwiiman/image/upload/v1576444005/MexicoParaTodos/Utils/icon_mgivrg.png"
              alt="bill-icon"
              className="personal-icon uk-margin-small-right"
            />
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currencyDisplay: "code",
              currency: "MXN"
            }).format(price * quantity)}
          </span>
        </div>
        <p>Regístrate y Registra a tus acompañantes</p>
        <div className="container-overflowed">
          {companions.map((companion, index) => {
            let companionId = `companion-${index}`;
            return (
              <div className="uk-padding-small" key={index}>
                <label>
                  {index === 0
                    ? "Responsable de Reservación"
                    : `Acompañante ${index}`}
                </label>
                <input
                  className="uk-input"
                  name={companionId}
                  type="text"
                  placeholder="Nombre completo de viajero"
                  value={companion.value || ""}
                  onChange={e => handleChange(index, e)}
                />
              </div>
            );
          })}
        </div>
      </form>
      <div className="uk-flex uk-flex-center uk-margin">
        <div className="uk-margin-right">
          <button
            onClick={toggleReserv}
            className="uk-button uk-button-primary"
          >
            Cancelar
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              condeseData();
            }}
            className="uk-button uk-button-primary"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserv;
