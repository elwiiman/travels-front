import React from "react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const MyReservations = ({ title, companions, outDate, price }) => {
  outDate = moment(outDate).format("L");
  price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currencyDisplay: "code",
    currency: "MXN"
  }).format(price * companions.length);
  return (
    <div>
      <div>
        <div className="">
          <span className="bold-text">Viaje: </span>
          {`${title}`}
        </div>
      </div>
      <div>
        <div className="">
          <span className="bold-text">Fecha de Salida: </span>
          {`${outDate}`}
        </div>
      </div>
      <div>
        <span className="bold-text">Cantidad Pagada: </span>
        <div className="">{`${price}`}</div>
      </div>

      <div className="">
        <div className="">
          <ul className="uk-list uk-list-bullet">
            <span className="bold-text">Viajeros: </span>
            {companions.map((companion, index) => {
              return <li key={index}>{companion}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
