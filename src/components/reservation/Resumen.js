import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import AssistantTable from "./AssistanTable";
import DetailTable from "./DetailTable";
import Implement from "../paypal/Implement";

const Resumen = ({
  title,
  aviableSeats,
  id,
  toggleReserv,
  price,
  outDate,
  duration,
  type
}) => {
  const { user, assistants, step, setStep } = useContext(AppContext);

  const backStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  console.log(assistants);
  return (
    <div>
      <div>
        <h2
          className={"uk-padding uk-padding-remove-bottom"}
        >{`Confirmación: ${title}`}</h2>
      </div>
      <div className="uk-flex uk-flex-center uk-margin uk-padding">
        <div>
          <AssistantTable />
        </div>
        <div>
          <DetailTable
            price={price * assistants.length}
            numRerserves={assistants.length}
            outDate={outDate}
            duration={duration}
            type={type}
          />
        </div>
      </div>
      <div className="uk-flex uk-flex-center uk-margin">
        <div className="uk-margin-right">
          <button
            onClick={() => {
              backStep();
            }}
            className="uk-button uk-button-primary"
          >
            Anterior
          </button>
        </div>
        <div className="uk-margin-right">
          <button
            onClick={toggleReserv}
            className="uk-button uk-button-primary"
          >
            Cancelar
          </button>
        </div>
        <div className="uk-flex uk-flex-center contain">
          <Implement
            price={price}
            userId={user._id}
            travelId={id}
            assistants={assistants}
            nextStep={() => nextStep()}
            aviableSeats={aviableSeats}
          />
        </div>
      </div>
    </div>
  );
};

export default Resumen;
