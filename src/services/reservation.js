import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction
  ? "https://mexico-para-todos.herokuapp.com/api"
  : "http://localhost:3000/api";

export const createReservation = data => {
  const token = localStorage.getItem("token");
  return axios.post(`${base_url}/reservation/`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  });
};

export const getReservations = id => {
  const token = localStorage.getItem("token");
  return axios.get(`${base_url}/reservation/${id}`, {
    headers: {
      Authorization: token
    }
  });
};
