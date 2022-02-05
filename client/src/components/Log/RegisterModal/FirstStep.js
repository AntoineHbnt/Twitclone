import React from "react";
import DatePicker from "../../Objects/DatePicker";
import FormInput from "../../Objects/FormInput";

const FirstStep = ({name, identifier, dateOfBirth, errors, isEmail, setDateOfBirth, setIdentifier, setName, setIsEmail}) => {
  return (
    <div className="form">
      <div className="form-title"><h3>Créer votre compte</h3></div>
      <FormInput
        label="Nom et prénom"
        id="name"
        type="text"
        value={name}
        error={errors.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
        <FormInput
          label={isEmail ? "Email" : "Téléphone"}
          id="identifier"
          type={isEmail ? "text" : "number"}
          value={identifier}
          error={errors.identifier}
          onChange={(e) => {
            setIdentifier(e.target.value);
          }}
        />

      <span className="option-switch" onClick={() => setIsEmail(!isEmail)}>
        {" "}
        {isEmail ? "Utiliser un téléphone" : "Utiliser un email"}
      </span>
      <div className="birthday-container">
        <div className="title">
          <h4>Date de naissance</h4>
        </div>
        <div className="subtitle">
          <span>
            Cette information ne sera pas affichée publiquement. Confirmez votre
            âge, même si ce compte est pour une entreprise, un animal de
            compagnie ou autre chose.
          </span>
        </div>
        <DatePicker value={dateOfBirth} setDateOfBirth={setDateOfBirth}/>
      </div>
    </div>
  );
};

export default FirstStep;
