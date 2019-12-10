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
  description,
  photos = [],
  price,
  aviableSeats,
  updatedAt,
  deleteATravel
}) => {
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

            {/* container de menu de acciones */}
            <div>
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
                    <Link to={`travel/edit/${_id}`} uk-icon="file-edit"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* photo container */}
        <div className="uk-card-media-left uk-cover-container">
          <img src={photos[0]} alt="" uk-cover="true" />
          <canvas width="600" height="500"></canvas>
        </div>

        <div className="uk-card-footer">
          <a href="#" className="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
