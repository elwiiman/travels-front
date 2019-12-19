import React, { useEffect } from "react";
import EditTravelForm from "./EditTravelForm";
import useForm from "../../hooks/useForm";
import { getATravel, updateTravel } from "../../services/travel";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const EditTravel = () => {
  let { id } = useParams();
  const { push } = useHistory();

  const {
    form,
    handleInput,
    handleFileInput,
    setForm,
    removeKeyWithIndex
  } = useForm();

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
        key === "price" ||
        key === "countryState" ||
        key === "outDate"
      ) {
        formData.append(key, form[key]);
      }
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    updateTravel(formData, id)
      .then(res => {
        console.log(res.data);
        UIkit.notification({
          message: `¡Viaje actualizado con exito!`,
          pos: "top-center",
          status: "success"
        });
        push("/home");
      })
      .catch(err => {
        console.log(err);
        if (err) {
          UIkit.notification({
            message: `Algo salió mal, verifica por favor`,
            pos: "top-center",
            status: "danger"
          });
        }
      });
  };
  const updateStateWithService = res => {
    setForm(res);
  };

  useEffect(() => {
    getATravel(id)
      .then(res => {
        let obj = {};
        let { travel } = res.data;
        let {
          transport: { type },
          transport: { aviableSeats },
          route,
          outDate
        } = travel;

        route.map((route, index) => {
          return (obj[`point-${index}`] = route);
        });

        const date = new Date(outDate).toISOString().substring(0, 10);
        console.log(outDate);
        outDate = date;

        travel = { ...travel, type, aviableSeats, outDate, ...obj };

        updateStateWithService(travel);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="uk-section">
      <div className="uk-container ">
        <EditTravelForm
          submit={handleSubmit}
          handleChange={handleInput}
          handleFileInput={handleFileInput}
          action="Update"
          removeKeyWithIndex={removeKeyWithIndex}
          {...form}
        />
      </div>
    </div>
  );
};

export default EditTravel;
