import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction
  ? "heroku.com"
  : "http://localhost:3000/api/profile";

export const updateUser = data => {
  const token = localStorage.getItem("token");
  return axios.patch(`${base_url}/edit`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};
