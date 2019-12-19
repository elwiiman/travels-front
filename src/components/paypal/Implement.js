import React from "react";
import PaypalButton from "./PaypalButton";
import UIkit from "uikit";
import { createReservation } from "../../services/reservation";
import { updateTravel } from "../../services/travel";
const CLIENT = {
  production:
    "ASweEfK2gACAW0RTChUdcnBhArbbR1hFLp6hxNOL-ymWPJg3dyvzCD2FDn7n8KTtAnPZ_RigrKmX3crx"
};

class Implement extends React.Component {
  render() {
    let {
      price,
      userId,
      travelId,
      assistants,
      nextStep,
      aviableSeats
    } = this.props;

    price = price * assistants.length;

    const onSuccess = payment => {
      console.log("Successful payment!", payment);
      const data = { owner: userId, travel: travelId, companions: assistants };

      createReservation(JSON.stringify(data))
        .then(reservation => {
          const formData = new FormData();
          formData.append(
            "transport.aviableSeats",
            aviableSeats - assistants.length
          );
          updateTravel(formData, travelId).then(res => {
            console.log(res.data);
          });
          UIkit.notification({
            message: `¡FELICIDADES! Tu compra se ha efectuado con éxito`,
            pos: "top-center",
            status: "success"
          });
          nextStep();
        })
        .catch(err => {
          console.log(err);
        });
    };

    const onError = error => {
      console.log("Erroneous payment OR failed to load script!", error);
      UIkit.notification({
        message: `Ha ocurrido un problema con el pago. Intenta nuevamente`,
        pos: "top-center",
        status: "danger"
      });
    };
    const onCancel = data => console.log("Cancelled payment!", data);

    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={"production"}
          commit={true}
          currency={"MXN"}
          total={price}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}
export default Implement;
