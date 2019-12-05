import React, { useEffect } from "react";
import TravelForm from "./TravelForm";
import useForm from "../../hooks/useForm";
import { getATravel } from "../../services/travel";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const EditTravel = () => {
  let { id } = useParams();
  let { form, setform } = useForm();
  const { handleInput, handleFileInput } = useForm();

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
      if (key.includes("point")) {
        formData.append("route", form[key]);
      } else if (
        key === "title" ||
        key === "duration" ||
        key === "description" ||
        key === "price"
      ) {
        formData.append(key, form[key]);
      }
    }
  };

  useEffect(() => {
    getATravel(id)
      .then(res => {
        const {
          description,
          duration,
          photos,
          route,
          title,
          transport
        } = res.data.travel;
        setform({ description, duration, photos, route, title, transport });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="uk-section">
      {console.log(form)}
      <div className="uk-container ">
        <TravelForm
          submit={handleSubmit}
          handleChange={handleInput}
          handleFileInput={handleFileInput}
          action="Update"
          {...form}
        />
      </div>
    </div>
  );
};

export default EditTravel;
