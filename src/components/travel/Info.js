import React, { useEffect, useState, useContext } from "react";

import useForm from "../../hooks/useForm";
import UIkit from "uikit";
import { getATravel } from "../../services/travel";
import { useHistory, Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { useParams } from "react-router";
import InfoDetailCard from "./InfoDetailCard";

const Info = () => {
  const { user, travel, setTravel } = useContext(AppContext);
  let { id } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    if (!Object.keys(user).length) return push("/login");

    getATravel(id).then(res => {
      const { travel } = res.data;
      setTravel(travel);
    });
  }, []);

  return <InfoDetailCard {...travel}></InfoDetailCard>;
};

export default Info;
