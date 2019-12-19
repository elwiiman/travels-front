import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";

const Signup = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();
  let occurrence = false;

  const handleSubmit = e => {
    e.preventDefault();
    signup(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/home");
        UIkit.notification({
          message: `Felicidades! Cuenta creada con éxito`,
          pos: "top-center",
          status: "success"
        });
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
          action="signup"
          handleChange={handleInput}
          {...form}
        />
      </div>
    </div>
  );
};

export default Signup;
