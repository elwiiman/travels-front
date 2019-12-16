import React, { useEffect, useState, useContext } from "react";
import IconInfo from "../common/IconInfo";
import EditTravelForm from "./EditTravelForm";
import useForm from "../../hooks/useForm";
import UIkit from "uikit";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";
import Router from "../../Router";
import moment from "moment";
import "moment/locale/es";
import Reserv from "../reservation/Reserv";
import ProcessToReserv from "../reservation/ProcessToReserv";
import { AppContext } from "../../AppContext";
moment.locale("es");

const InfoDetailCard = ({
  _id,
  title,
  photos = [],
  price,
  transport = 0,
  updatedAt,
  deleteATravel,
  outDate,
  countryState,
  duration = 0,
  description,
  route = []
}) => {
  let [reserving, setReserving] = useState(false);
  const { resetStepsAndAssistants } = useContext(AppContext);

  const toggleReserve = () => {
    setReserving(prevState => !prevState);
    resetStepsAndAssistants();
  };

  return (
    <div>
      {!reserving ? (
        <div>
          <h2 className="uk-padding uk-padding-remove-bottom">{title}</h2>
          <div className="uk-width-1-1" uk-grid="true">
            <div className="uk-width-3-5">
              <div
                className="uk-position-relative uk-visible-toggle uk-light uk-margin-medium-left"
                tabIndex="-1"
                uk-slideshow="autoplay: true"
              >
                <ul className="uk-slideshow-items">
                  {photos.map((photo, index) => {
                    return (
                      <li key={index}>
                        <img src={photo} alt={`${index}`} uk-cover="true" />
                      </li>
                    );
                  })}
                </ul>
                <Link
                  className="uk-position-center-left uk-position-small uk-hidden-hover"
                  to="#"
                  uk-slidenav-previous="true"
                  uk-slideshow-item="previous"
                ></Link>
                <Link
                  className="uk-position-center-right uk-position-small uk-hidden-hover"
                  to="#"
                  uk-slidenav-next="true"
                  uk-slideshow-item="next"
                ></Link>
              </div>
            </div>

            <div className="uk-width-2-5 uk-text-justify uk-flex uk-flex-center uk-flex-middle ">
              {description}
            </div>
          </div>
          <div className="uk-padding">
            <h3 className="">Highlights de Viaje</h3>
            <ul className="uk-list uk-list-divider">
              {route.map((aRoute, index) => {
                return <li key={index}>{aRoute}</li>;
              })}
            </ul>
          </div>
          {/* Detalles con iconos */}
          <div uk-grid="true" className="uk-padding uk-padding-remove-top">
            <div className="uk-width-2-5">
              <h3>Detalles de Viaje</h3>
              <div uk-grid="true">
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576184255/MexicoParaTodos/Utils/calendar_it2mei.png"
                  }
                  alt={"calendar-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={moment(outDate).format("L")}
                ></IconInfo>
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576184901/MexicoParaTodos/Utils/placeholder_ll1vml.png"
                  }
                  alt={"location-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={countryState}
                ></IconInfo>
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576187220/MexicoParaTodos/Utils/sunny-day_xwu0tk.png"
                  }
                  alt={"sun-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={duration}
                ></IconInfo>
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576187107/MexicoParaTodos/Utils/moon_xt6bi4.png"
                  }
                  alt={"night-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={duration - 1}
                ></IconInfo>
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576219156/MexicoParaTodos/Utils/bus_dqmsfo.png"
                  }
                  alt={"bus-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={transport.type}
                ></IconInfo>
              </div>
            </div>
            <div className="uk-width-2-5">
              <h3>Precio y lugares disponibles</h3>
              <div uk-grid="true">
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576187970/MexicoParaTodos/Utils/coin_hycoxa.png"
                  }
                  alt={"coin-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currencyDisplay: "code",
                    currency: "MXN"
                  }).format(price)}
                ></IconInfo>
                <IconInfo
                  src={
                    "https://res.cloudinary.com/elwiiman/image/upload/v1576189039/MexicoParaTodos/Utils/sitting-silhouette_k4sxfd.png"
                  }
                  alt={"seat-icon"}
                  className={"personal-icon uk-margin-small-right"}
                  info={`${transport.aviableSeats}`}
                ></IconInfo>
              </div>
            </div>
            <div className="uk-width-1-6">
              <button
                id="boton-reserva"
                onClick={toggleReserve}
                className="uk-button uk-button-primary"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ProcessToReserv
            title={title}
            aviableSeats={transport.aviableSeats}
            type={transport.type}
            id={_id}
            price={price}
            outDate={outDate}
            duration={duration}
            toggleReserve={() => {
              toggleReserve();
            }}
          ></ProcessToReserv>
        </div>
      )}
    </div>
  );
};

export default InfoDetailCard;
