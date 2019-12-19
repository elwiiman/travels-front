import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import { AppContext } from "../../AppContext";
import { updateUser } from "../../services/profile";
import ShowProfile from "../profile/ShowProfile";
import UIkit from "uikit";

const ProfileForm = ({}) => {
  const [isEditing, setEditing] = useState(true);
  const { form, handleInput, handleFileInput } = useForm();
  const { user, setUser } = useContext(AppContext);

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    let { profilepic, username } = form;

    if (!username) {
      username = user.username;
    }
    if (!profilepic) {
      profilepic = [user.profilepic];
    }

    if (profilepic[0] === user.profilepic && username === user.username) {
      UIkit.notification({
        message: `No hay cambios que actualizar`,
        pos: "top-center",
        status: "warning"
      });
      return;
    }

    if (profilepic !== undefined || username !== user.username) {
      formData.append("profilepic", profilepic[0]);
      formData.append("username", username);
      updateUser(formData)
        .then(res => {
          const { user } = res.data;

          setUser(user);
          toggleEdit();
          UIkit.notification({
            message: `Profile actualizado con éxito!`,
            pos: "top-center",
            status: "success"
          });
        })

        .catch(res => {
          const { errormsg } = res.response.data;
          UIkit.notification({
            message: `${errormsg}`,
            pos: "top-center",
            status: "danger"
          });
        });
    }
  };

  const toggleEdit = () => {
    setEditing(prevState => !prevState);
  };

  return (
    <div className="uk-container uk-flex uk-flex-center ">
      {isEditing ? (
        <form className="uk-form-stacked uk-container-special">
          <div className="uk-margin">
            <div uk-form-custom="target: true">
              <input
                className="uk-input"
                type="file"
                onChange={handleFileInput}
                name="profilepic"
              />
              <input
                className="uk-input uk-form-width-large uk-input-special-width"
                type="text"
                placeholder="Click para subir nueva foto"
                // disabled
              />
            </div>
          </div>

          {/* <div className="uk-margin">
            <label className="uk-form-label">Profile Picture</label>
            <div className="uk-inline">
              <input
                onChange={handleFileInput}
                name="profilepic"
                className="uk-input"
                type="file"
              />
            </div>
          </div> */}

          <div className="uk-margin">
            <label className="uk-form-label">Username</label>
            <div className="uk-inline">
              <input
                onChange={handleInput}
                name="username"
                className="uk-input"
                type="text"
                defaultValue={user.username}
              />
            </div>
          </div>
          <div className="uk-container uk-flex uk-flex-center">
            <button
              className="uk-button uk-button-primary button-margin-right"
              type="button"
              onClick={toggleEdit}
            >
              Cancelar
            </button>

            <button
              className="uk-button uk-button-primary"
              type="button"
              onClick={handleSubmit}
            >
              Actualizar Datos
            </button>
          </div>
        </form>
      ) : (
        <ShowProfile />
      )}
    </div>
  );
};

export default ProfileForm;
