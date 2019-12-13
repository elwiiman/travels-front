import React, { useEffect, useState, useContext } from "react";

import useForm from "../../hooks/useForm";
import UIkit from "uikit";
import { getATravel } from "../../services/travel";
import { useHistory, Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useParams } from "react-router";
import Router from "../../Router";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
const Info = ({}) => {
  const { user, travels, setTravels } = useContext(AppContext);
  let { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    if (!Object.keys(user).length) return push("/login");

    getATravel(id).then(res => {
      const { travel } = res.data;
      setTravels(travel);
    });
  }, []);

  return <div>Esta es la seccion de info</div>;
};

export default Info;
