import React from "react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const DetailTable = ({ price, numRerserves, outDate, duration, type }) => {
  // const date = new Date(outDate);.toISOString().substring(0, 10);

  return (
    <table className="uk-table uk-table-striped uk-table-justify">
      <thead>
        <tr>
          <th>Detalle</th>
          <th>Información</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total a pagar</td>
          <td>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currencyDisplay: "code",
              currency: "MXN"
            }).format(price)}
          </td>
        </tr>
        <tr>
          <td>No. de Reservaciones</td>
          <td>{numRerserves}</td>
        </tr>
        <tr>
          <td>Fecha de Salida</td>
          <td>{moment(outDate).format("L")}</td>
        </tr>
        <tr>
          <td>Días</td>
          <td>{duration}</td>
        </tr>
        <tr>
          <td>Noches</td>
          <td>{duration - 1}</td>
        </tr>
        <tr>
          <td>Transporte</td>
          <td>{type}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailTable;
