import React, { useEffect, useState } from "react";
import EditTravelForm from "./EditTravelForm";
import useForm from "../../hooks/useForm";
import { getATravel, updateTravel } from "../../services/travel";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import Router from "../../Router";

const Card = ({
  title,
  description,
  photos = [],
  price,
  aviableSeats,
  updatedAt
}) => {
  return (
    <div>
      <div class="uk-card uk-card-default ">
        <div class="uk-card-header">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto"></div>
            <div class="uk-width-expand">
              <h3 class="uk-card-title uk-margin-remove-bottom">{title}</h3>
              <p class="uk-text-meta uk-margin-remove-top">
                <time datetime="2016-04-01T19:00">{updatedAt}</time>
              </p>
            </div>
          </div>
        </div>
        <div class="uk-card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div class="uk-card-footer">
          <a href="#" class="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
