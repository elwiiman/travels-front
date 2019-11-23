import React from "react";

const AuthForm = ({
  submit,
  action,
  email = "",
  usernameOrEmail = "",
  password = "",
  confirmPass = "",
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked" onSubmit={submit}>
    <div className="uk-margin">
      <label className="uk-form-label">
        {action === "signup" ? "Email" : "Email o Username"}
      </label>
      <div className="uk-inline">
        <span
          className="uk-form-icon"
          uk-icon={action === "signup" ? "icon: mail" : "icon: user"}
        ></span>
        <input
          onChange={handleChange}
          name={action === "signup" ? "email" : "usernameOrEmail"}
          value={action === "signup" ? email : usernameOrEmail}
          className="uk-input"
          type={action === "signup" ? "email" : "text"}
          autoComplete="on"
        />
      </div>
    </div>

    {action === "signup" ? (
      <div className="uk-margin">
        <label className="uk-form-label">Username</label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input
            onChange={handleChange}
            name="username"
            value={username}
            className="uk-input"
            type="text"
            autoComplete="on"
          />
        </div>
      </div>
    ) : null}

    <div className="uk-margin">
      <label className="uk-form-label">Password</label>
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: lock"></span>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          className="uk-input"
          type="password"
          autoComplete="on"
        />
      </div>
    </div>
    {action === "signup" ? (
      <div className="uk-margin">
        <label className="uk-form-label">Confirm Password</label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: lock"></span>
          <input
            onChange={handleChange}
            name="confirmPass"
            value={confirmPass}
            className="uk-input"
            type="password"
            autoComplete="on"
          />
        </div>
      </div>
    ) : null}

    <div className="uk-container uk-flex uk-flex-center">
      <button className="uk-button uk-button-primary" type="submit">
        {action}
      </button>
    </div>
  </form>
);

export default AuthForm;
