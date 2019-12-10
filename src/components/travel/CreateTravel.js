import React from "react";
import TravelForm from "./TravelForm";
import useForm from "../../hooks/useForm";
import { createTravel } from "../../services/travel";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";

const CreateTravel = () => {
  const { form, handleInput, handleFileInput, removeKey } = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData();
    for (let key in form) {
      if (key === "photos") {
        for (let file of Array.from(form[key])) {
          formData.append(key, file);
        }
      }
      if (key === "type" || key === "aviableSeats") {
        if (key === "type") formData.append("transport.type", form[key]);
        else formData.append("transport.aviableSeats", form[key]);
      }
      if (key.includes("point") || key === "route") {
        formData.append("route", form[key]);
      } else if (
        key === "title" ||
        key === "duration" ||
        key === "description" ||
        key === "price" ||
        key === "countryState" ||
        key === "outDate"
      ) {
        formData.append(key, form[key]);
      }
    }

    // for (var value of formData.values()) {
    //   console.log(value);
    // }

    // // Display the keys
    // for (var key of formData.keys()) {
    //   console.log(key);
    // }

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    createTravel(formData)
      .then(res => {
        console.log(res.data);
        UIkit.notification({
          message: `¡Viaje creado con exito!`,
          pos: "top-center",
          status: "success"
        });
        push("/home");
      })
      .catch(err => {
        console.log(err);
        if (err) {
          UIkit.notification({
            message: `Algo salió mal, verifica que haz llenado todos los campos`,
            pos: "top-center",
            status: "danger"
          });
        }
      });
  };

  return (
    <div className="uk-section">
      <div className="uk-container ">
        <TravelForm
          submit={handleSubmit}
          handleChange={handleInput}
          handleFileInput={handleFileInput}
          action="Crear"
          removeKey={removeKey}
          {...form}
        />
      </div>
    </div>
  );
};

export default CreateTravel;
