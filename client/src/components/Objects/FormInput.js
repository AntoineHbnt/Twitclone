import React, { useEffect, useState } from "react";

const FormInput = ({ label, id, type, maxSize, value, onChange, onClick, autoComplete, error, disable}) => {
  const [inputSize, setInputSize] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(true);
  const [localType, setLocalType] = useState(type);

  const toDate = (timestamp) => {
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    let date = new Date(timestamp * 1000).toLocaleDateString("fr-FR", options);
    return date.toString();
  };

  useEffect(() => {
    const fieldContainer = document.querySelector("#" + id + "-input");

    const inputContainer = fieldContainer.children[0];

    if (value.length > 0) {
      inputContainer.classList.add("not-empty");
      fieldContainer.classList.remove("error");
      setIsEmpty(false);
    }

    setInputSize(value.length);
    if (!firstLaunch && value.length < 0) {
      inputContainer.classList.remove("not-empty");
      fieldContainer.classList.add("error");
      setIsEmpty(true);
    }

    setFirstLaunch(false);
  }, [value]);

  return (
    <div id={id + "-input"} className={"input-field"+(error ? " error" : "")+(disable ? " disable" : "")}>
      <div className="input-container">
        <div className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          {maxSize ? (
            <div className="counter">
              <span>
                {inputSize}/{maxSize}
              </span>
            </div>
          ) : null}
        </div>
        <div className="field-container">
          <div className="field">
            <input
              autoComplete={autoComplete ? autoComplete : ""}
              type={
                type === "password" ? localType : type === "date" ? "text" : type
              }
              name={id}
              id={id}
              value={type === "date" ? toDate(value) : value}
              onChange={onChange}
            />
          </div>
        </div>
        <div
          className="hide-logo"
          onClick={() =>
            localType === "password"
              ? setLocalType("text")
              : setLocalType("password")
          }
        >
          {type === "password" ? (
            localType === "password" ? (
              <img
                src="./img/icons/eye_visible_hide_hidden_show_icon_145988.png"
                alt=""
              />
            ) : (
              <img
                src="./img/icons/eye_slash_visible_hide_hidden_show_icon_145987.png"
                alt=""
              />
            )
          ) : null}
        </div>
      </div>
      <div className="error-message">
        <span>{isEmpty ? "Le champs de texte est vide " : error ? error : ""}</span>
      </div>
    </div>
  );
};

export default FormInput;
