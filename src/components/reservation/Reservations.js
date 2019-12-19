import React, { useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import { getReservations } from "../../services/reservation";
import MyReservations from "../reservation/MyReservations";
import { Link } from "react-router-dom";

const Reservations = () => {
  const { user, myReservations, setMyReservations } = useContext(AppContext);
  const { push } = useHistory();

  useEffect(() => {
    if (!Object.keys(user).length) return push("/login");

    getReservations(user._id).then(res => {
      const { reservation } = res.data;
      setMyReservations(reservation);
    });
  }, []);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <ul uk-accordion="collapsible: false">
          {myReservations.map((reservation, index) => {
            return (
              <li key={index}>
                <Link className="uk-accordion-title" to="#">
                  {reservation.travel.title}
                </Link>
                <div className="uk-accordion-content">
                  <MyReservations
                    title={reservation.travel.title}
                    outDate={reservation.travel.outDate}
                    companions={reservation.companions}
                    price={reservation.travel.price}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Reservations;
