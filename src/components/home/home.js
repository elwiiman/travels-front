import React, { useEffect, useContext } from "react";
import Card from "../travel/Card";
import { getTravels } from "../../services/travel";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { user, travels, setTravels } = useContext(AppContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!user) return push("/login");

    getTravels().then(res => {
      const { travels } = res.data;
      console.log(travels);
      setTravels(travels);
    });
  }, []);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-3 uk-grid-match uk-grid-small">
          {travels.map((travel, index) => (
            <Card key={index} {...travel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
