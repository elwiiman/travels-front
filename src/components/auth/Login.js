import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import useForm from "../../hooks/useForm";
import { login } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";

const Login = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();
  let occurrence = false;

  const handleSubmit = e => {
    e.preventDefault();
    login(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/home");
      })
      .catch(res => {
        const { errormsg } = res.response.data;

        if (occurrence === false) {
          occurrence = true;
          UIkit.notification({
            message: `${errormsg}`,
            pos: "top-center",
            status: "danger",
            timeout: 3100
          });
          UIkit.util.on(document, "close", function(evt) {
            occurrence = false;
          });
        }
      });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <AuthForm
          submit={handleSubmit}
          action="login"
          handleChange={handleInput}
          {...form}
        />
      </div>
    </div>
  );
};

export default Login;
