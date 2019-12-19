import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

import Reserv from "../reservation/Reserv";
import Resumen from "../reservation/Resumen";
import Reservations from "./Reservations.js";

const ProcessToReserv = ({
  title,
  aviableSeats,
  id,
  toggleReserve,
  price,
  outDate,
  duration,
  type
}) => {
  const { assistants, step, setStep } = useContext(AppContext);

  const nextStep = newdata => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  console.log(assistants);
  if (step === 1) {
    return (
      <div>
        <Reserv
          toggleReserv={() => toggleReserve()}
          title={title}
          aviableSeats={aviableSeats}
          nextStep={() => nextStep()}
          price={price}
          backStep={() => backStep()}
        ></Reserv>
      </div>
    );
  }
  if (step === 2) {
    return (
      <Resumen
        title={title}
        price={price}
        outDate={outDate}
        duration={duration}
        type={type}
        toggleReserv={() => toggleReserve()}
        aviableSeats={aviableSeats}
        id={id}
      ></Resumen>
    );
  }

  if (step === 3) {
    return <Reservations />;
  }
};

export default ProcessToReserv;
