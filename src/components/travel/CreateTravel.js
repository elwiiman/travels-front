import React from "react";
import TravelForm from "./TravelForm";
import useForm from "../../hooks/useForm";
import { createTravel } from "../../services/travel";
import UIkit from "uikit";

const CreateTravel = () => {
  const { form, handleInput, handleFileInput } = useForm();

  const handleSubmit = e => {
    let transport = {};
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
      if (key.includes("point")) {
        formData.append("route", form[key]);
      } else if (
        key === "title" ||
        key === "duration" ||
        key === "description"
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
