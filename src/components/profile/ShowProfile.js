import React, { useContext, useState } from "react";

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
        <form className="uk-form-stacked uk-container-special">
          <div className="avatar uk-flex uk-flex-center">
            <img
              className="avatar"
              src={user.profilepic}
              alt="profilepic"
              width="160px"
              height="160spx"
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
                disabled
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
