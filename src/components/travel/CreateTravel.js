import React from "react";
import TravelForm from "./TravelForm";
import useForm from "../../hooks/useForm";
import { createTravel } from "../../services/travel";
import UIkit from "uikit";

const CreateTravel = () => {
  const { form, handleInput, handleFileInput } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    createTravel(form)
      .then(travel => {
        console.log(travel);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="uk-section">
      <div className="uk-container ">
        <TravelForm
          submit={handleSubmit}
          handleChange={handleInput}
          handleFileInput={handleFileInput}
          action="Crear Viaje"
          {...form}
        />
      </div>
    </div>
  );
};

export default CreateTravel;
