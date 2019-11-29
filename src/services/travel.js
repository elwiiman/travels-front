import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "heroku.com" : "http://localhost:3000/api";

export const getTravels = () => {
  const token = localStorage.getItem("token");
  return axios.get(`${base_url}/travel`, {
    headers: {
      Authorization: token
    }
  });
};

export const createTravel = data => {
  const token = localStorage.getItem("token");
  return axios.post(`${base_url}/travel`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};
