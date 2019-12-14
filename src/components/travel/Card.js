import React, { useEffect, useState } from "react";
import EditTravelForm from "./EditTravelForm";
import useForm from "../../hooks/useForm";
import UIkit from "uikit";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";
import Router from "../../Router";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const Card = ({
  _id,
  title,
  photos = [],
  price,
  transport,
  updatedAt,
  deleteATravel,
  outDate,
  countryState,
  duration,
  userType
}) => {
  console.log(userType);
  return (
    <div>
      <div className="uk-card uk-card-default ">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
              <time className="uk-text-meta uk-margin-remove-top">
                <time>
                  {`Última actualización: ${moment(updatedAt).calendar()}`}
                </time>
              </time>
            </div>

            {userType === "admin" ? (
              <div>
                {/* container de menu de acciones */}
                <div>
                  <span uk-icon="more-vertical"></span>
                </div>

                <div uk-dropdown="true">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li className="uk-flex uk-flex-center">
                      <button
                        type="button"
                        uk-icon="trash"
                        onClick={deleteATravel}
                      ></button>
                    </li>
                    <li className="uk-nav-divider"></li>
                    <li className="uk-flex uk-flex-center">
                      <Link
                        to={`travel/edit/${_id}`}
                        uk-icon="file-edit"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* photo container */}
        <div className="uk-card-media-left uk-cover-container">
          <img src={photos[0]} alt="travel" uk-cover="true" />
          <canvas width="600" height="500"></canvas>
        </div>

        {/* important data for the travel */}
        <div className="uk-margin" uk-grid="true">
          <div className="uk-width-1-3 uk-flex-inline">
            <div className="uk-padding-small">
              <img
                src={
                  "https://res.cloudinary.com/elwiiman/image/upload/v1576184255/MexicoParaTodos/Utils/calendar_it2mei.png"
                }
                alt="calendar-icon"
                className="personal-icon uk-margin-small-right "
              ></img>

              <span uk-tooltip="title: Fecha de Salida; pos: bottom">
                {moment(outDate).format("L")}
              </span>
            </div>
          </div>

          <div className="uk-width-1-3 uk-flex-inline">
            <div className="uk-padding-small">
              <img
                src={
                  "https://res.cloudinary.com/elwiiman/image/upload/v1576184901/MexicoParaTodos/Utils/placeholder_ll1vml.png"
                }
                alt="calendar-icon"
                className="personal-icon uk-margin-small-right "
              ></img>

              <span>{countryState}</span>
            </div>
          </div>
          <div className="uk-width-1-3 uk-flex-inline">
            <div className="uk-padding-small">
              <img
                src={
                  "https://res.cloudinary.com/elwiiman/image/upload/v1576187220/MexicoParaTodos/Utils/sunny-day_xwu0tk.png"
                }
                alt="sun-icon"
                className="personal-icon uk-margin-small-right "
              ></img>

              <span>{duration}</span>
            </div>
            <div className="uk-padding-small">
              <img
                src={
                  "https://res.cloudinary.com/elwiiman/image/upload/v1576187107/MexicoParaTodos/Utils/moon_xt6bi4.png"
                }
                alt="night-icon"
                className="personal-icon uk-margin-small-right "
              ></img>

              <span>{duration - 1}</span>
            </div>
          </div>
        </div>

        <div className="uk-width-1-1  uk-flex uk-padding uk-flex-right custom-gray-color-div ">
          <div className="uk-width-1-3">
            <img
              src="https://res.cloudinary.com/elwiiman/image/upload/v1576187970/MexicoParaTodos/Utils/coin_hycoxa.png"
              alt="coin-icon"
              className="personal-icon uk-margin-small-right "
            />
            <span uk-tooltip="Precio por persona">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currencyDisplay: "code",
                currency: "MXN"
              }).format(price)}
            </span>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/elwiiman/image/upload/v1576189039/MexicoParaTodos/Utils/sitting-silhouette_k4sxfd.png"
              alt="seat-icon"
              className="personal-icon uk-margin-small-right "
            />
            <span>{transport.aviableSeats}</span>
          </div>
        </div>

        {/* footer */}
        <div className="uk-card-footer">
          <Link to={`travel/info/${_id}`} className="uk-button uk-button-text">
            Más Información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
