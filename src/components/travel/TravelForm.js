import React from "react";

const TravelForm = ({
  handleChange,
  title = "",
  description = "",
  submit,
  action
}) => (
  <form onSubmit={submit}>
    <fieldset className="uk-fieldset">
      <label className="uk-form-label">Title</label>
      <div className="uk-margin">
        <input
          onChange={handleChange}
          name="title"
          value={title}
          className="uk-input"
          type="text"
        />
      </div>
      <label className="uk-form-label">Description</label>
      <div className="uk-margin">
        <textarea
          className="uk-textarea"
          rows="9"
          placeholder="Escribe una descripcion"
          onChange={handleChange}
          name="description"
          value={description}
          type="text"
        />
      </div>

      <div className="uk-container uk-flex uk-flex-center">
        <button className="uk-button uk-button-primary" type="submit">
          {action}
        </button>
      </div>
    </fieldset>
  </form>
);

export default TravelForm;
