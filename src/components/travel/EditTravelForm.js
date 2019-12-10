import React, { useState, useEffect } from "react";
import { days, countries } from "../../auxiliar/auxiliarData";
import { useHistory } from "react-router-dom";

const EditTravelForm = ({
  removeKeyWithIndex,
  outDate = "",
  countryState = "",
  handleChange,
  handleFileInput,
  title = "",
  price = "",
  description = "",
  type = "",
  aviableSeats = "",
  duration = "",
  submit,
  route = [],
  photos = [],
  pointOfInterest = "",
  action
}) => {
  const { push } = useHistory();
  const blankPoint = "";
  const [pointState, setPointState] = useState([...route]);
  const addPoint = () => {
    setPointState([...pointState, blankPoint]);
  };

  useEffect(() => {
    setPointState([...route]);
  }, [route]);

  const deletePoint = id => {
    console.log("actual", pointState);
    console.log(id);
    pointState.splice(id, 1);
    console.log("spliced", pointState);
    setPointState(pointState);
    removeKeyWithIndex(`point-${id}`, id);
  };

  console.log(pointState);

  return (
    <form onSubmit={submit}>
      <fieldset className="uk-fieldset">
        <div className="uk-text-center" uk-grid="true">
          <div className="uk-width-1-2">
            <div>
              <label className="uk-form-label">Título del Viaje</label>
              <div className="uk-margin">
                <input
                  onChange={handleChange}
                  name="title"
                  value={title}
                  className="uk-input"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="uk-width-1-2">
            <div className="uk-width-4-6">
              <label className="uk-form-label">Precio por Persona (MXN)</label>
              <div className="uk-margin">
                <input
                  onChange={handleChange}
                  name="price"
                  value={price}
                  className="uk-input"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="uk-text-center" uk-grid="true">
          <div className="uk-width-1-2">
            <div>
              <label className="uk-form-label">Fecha de Salida</label>
              <div className="uk-margin">
                <input
                  onChange={handleChange}
                  name="outDate"
                  value={outDate}
                  className="uk-input"
                  type="date"
                />
              </div>
            </div>
          </div>
          <div className="uk-width-1-2">
            <div>
              <label className="uk-form-label">Estado a visitar</label>
              <div className="uk-margin">
                <select
                  onChange={handleChange}
                  name="countryState"
                  value={countryState}
                  className="uk-select"
                >
                  <option disabled value="">
                    selecciona una opción                 
                  </option>
                                  
                  {countries.map((countrie, index) => {
                    return (
                      <option key={index} value={`${countrie}`}>
                        {countrie}                   
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>

        <label className="uk-form-label">Descripción</label>
        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="9"
            placeholder="Escribe una descripcion"
            onChange={handleChange}
            name="description"
            value={description}
            type="text"
          />
        </div>

        <div className="uk-text-center" uk-grid="true">
          <div className="uk-width-1-3">
            <div>
              <label className="uk-form-label">Transporte</label>
              <select
                type="text"
                onChange={handleChange}
                name="type"
                value={type}
                className="uk-select"
              >
                <option disabled value="">
                  selecciona una opción
                </option>
                <option value="autobus">Autobús</option>
                <option value="van">Van</option>
              </select>
            </div>
          </div>
          <div className="uk-width-1-3">
            <div>
              <label className="uk-form-label">Lugares Disponibles</label>
              <select
                type="number"
                onChange={handleChange}
                name="aviableSeats"
                value={aviableSeats}
                className="uk-select"
              >
                <option disabled value="">
                  selecciona una opción
                </option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="32">32</option>
              </select>
            </div>
          </div>
          <div className="uk-width-1-3">
            <div>
              <label className="uk-form-label">Duración en días</label>
              <select
                onChange={handleChange}
                name="duration"
                value={duration}
                className="uk-select"
              >
                <option disabled value="">
                  selecciona una opción
                </option>
                {days.map((day, index) => {
                  return (
                    <option key={index} value={`${day}`}>
                      {day}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="container uk-margin-medium-bottom uk-margin-medium-top">
          <p>Puntos de Interés</p>
          {pointState.map((point, idx) => {
            const pointId = `point-${idx}`;
            return (
              <div key={`dataset-${idx}`}>
                <label className="uk-form-label">
                  {`Punto de interés ${idx}`}
                  <button
                    type="button"
                    className="uk-margin-medium-left"
                    uk-icon="trash"
                    onClick={() => deletePoint(idx)}
                  />
                </label>
                <div className="uk-margin">
                  <input
                    onChange={handleChange}
                    name={pointId}
                    defaultValue={point}
                    className="uk-input"
                    type="text"
                  />
                </div>
              </div>
            );
          })}

          <input
            type="button"
            value="Agregar nuevo punto de interés"
            onClick={addPoint}
            className="uk-button uk-button-default"
          />
        </div>

        <div className="uk-margin" uk-margin="true">
          <div uk-form-custom="target: true">
            <input
              onChange={handleFileInput}
              name="photos"
              type="file"
              defaultValue={photos}
              multiple
            />
            <input
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Reemplaza fotos representativas del viaje"
              disabled
            />
          </div>
        </div>

        <div className="uk-container uk-flex uk-flex-center">
          <button
            className="uk-button uk-button-primary button-margin-right"
            type="submit"
          >
            {action}
          </button>

          <button
            className="uk-button uk-button-primary"
            type="button"
            onClick={() => {
              push("/home");
            }}
          >
            Cancelar
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default EditTravelForm;
