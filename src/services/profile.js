import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction
  ? "https://mexico-para-todos.herokuapp.com/api"
  : "http://localhost:3000/api";

export const updateUser = data => {
  const token = localStorage.getItem("token");
  return axios.patch(`${base_url}/profile/edit`, data, {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    }
  });
};
