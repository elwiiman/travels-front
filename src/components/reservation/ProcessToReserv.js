import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../AppContext";

import Reserv from "../reservation/Reserv";
import Resumen from "../reservation/Resumen";
import Pay from "../reservation/Pay";

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
  const { assistants, setAssistants, step, setStep } = useContext(AppContext);

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
      ></Resumen>
    );
  }

  if (step === 3) {
    return <Pay />;
  }
};

export default ProcessToReserv;
