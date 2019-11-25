import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import ProfileForm from "./ProfileForm";
import { AppContext } from "../../AppContext";
import UIkit from "uikit";

const ShowProfile = () => {
  const [isEditing, setEditing] = useState(false);
  const { user } = useContext(AppContext);

  const toggleEdit = () => {
    setEditing(prevState => !prevState);
  };

  return (
    <div className="uk-container uk-flex uk-flex-center">
      {!isEditing ? (
        <form className="uk-form-stacked">
          <div>
            <img
              src={user.profilepic}
              alt="profilepic"
              width="200px"
              height="200px"
            />
          </div>

          <div className="uk-margin">
            <label className="uk-form-label text-center">Username</label>
            <div className="uk-inline">
              <input
                name="username"
                className="uk-input"
                type="text"
                defaultValue={user.username}
              />
            </div>
          </div>
          <div className="uk-container uk-flex uk-flex-center">
            <button
              className="uk-button uk-button-primary"
              type="button"
              onClick={() => toggleEdit()}
            >
              Edit
            </button>
          </div>
        </form>
      ) : (
        <ProfileForm />
      )}
    </div>
  );
};

export default ShowProfile;
