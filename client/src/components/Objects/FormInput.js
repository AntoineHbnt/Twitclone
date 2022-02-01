import React, { useEffect, useState } from "react";

const FormInput = ({ label, id, type, maxSize, value, onChange }) => {
  const [inputSize, setInputSize] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(true);

  useEffect(() => {
    const fieldContainer = document.querySelector("#" + id + "-input");

    const inputContainer = fieldContainer.children[0];

    setInputSize(value.length);
    if (!firstLaunch) {
      if (value.length > 0) {
        inputContainer.classList.add("not-empty");
        fieldContainer.classList.remove("error");
        setIsEmpty(false);
      } else {
        inputContainer.classList.remove("not-empty");
        fieldContainer.classList.add("error");
        setIsEmpty(true);
      }
    }

    setFirstLaunch(false);
  }, [value]);

  return (
    <div id={id + "-input"} className="input-field">
      <div className="input-container">
        <div className="input-wrapper">
          <label htmlFor={id}>{label}</label>
          <div className="counter">
            {maxSize ? (
              <span>
                {inputSize}/{maxSize}
              </span>
            ) : null}
          </div>
        </div>
        <div className="field-container">
          <div className="field">
            <input
              type={type}
              name={id}
              id={id}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className="error-message">
        <span>{isEmpty ? "Le champs de texte est vide " : ""}</span>
      </div>
    </div>
  );
};

export default FormInput;
