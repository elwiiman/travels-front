import React, { useEffect, useContext } from "react";
import Card from "../travel/Card";
import { getTravels } from "../../services/travel";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import { deleteTravel } from "../../services/travel";
import UIkit from "uikit";

const Home = () => {
  const { user, travels, setTravels } = useContext(AppContext);
  const { push } = useHistory();

  const deleteATravel = (id, index) => {
    console.log(id);
    deleteTravel(id)
      .then(() => {
        travels.splice(index, 1);
        setTravels([...travels]);
        UIkit.notification({
          message: `Viaje borrado con éxito!`,
          pos: "top-center",
          status: "success"
        });
      })
      .catch(() => {
        UIkit.notification({
          message: `Ups! Algo salió mal con el borrado, itenta de nuevo`,
          pos: "top-center",
          status: "danger"
        });
      });
  };

  useEffect(() => {
    if (!Object.keys(user).length) return push("/login");

    getTravels().then(res => {
      const { travels } = res.data;
      setTravels(travels);
    });
  }, []);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div
          className="uk-child-width-1-2@m uk-grid-small uk-grid-match"
          uk-grid="true"
        >
          {travels.map((travel, index) => (
            <Card
              key={index}
              deleteATravel={() => deleteATravel(travel._id, index)}
              {...travel}
              userType={user.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
