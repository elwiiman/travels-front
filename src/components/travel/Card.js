import React, { useEffect, useState } from "react";
import EditTravelForm from "./EditTravelForm";
import useForm from "../../hooks/useForm";
import { getATravel, updateTravel } from "../../services/travel";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import Router from "../../Router";

const Card = ({ title, description, photos = [], price, aviableSeats }) => {
  return (
    <div className="uk-card uk-card-default uk-width-1-2@m">
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" uk-grid="true">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src="images/avatar.jpg"
              alt=""
            />
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">{title}</h3>
            <p className="uk-text-meta uk-margin-remove-top">
              <time datetime="2016-04-01T19:00">April 01, 2016</time>
            </p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="uk-card-footer">
        <a href="#" className="uk-button uk-button-text">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
