import React from "react";
import FormInput from "../../Objects/FormInput";

const SecondStep = ({ name, identifier, errors, dateOfBirth, isEmail, setStep }) => {
  return (
    <>
      <div className="form">
        <div className="form-title">
          <span>Créer votre compte</span>
        </div>
        <div onClick={() => setStep(1)}>
          <FormInput label="Nom" id="name" type="text" value={name} error={errors.name}/>
        </div>
        <div onClick={() => setStep(1)}>
        <FormInput
          label={isEmail ? "Email" : "Téléphone"}
          id="identifier"
          type="text"
          value={identifier}
          error={errors.identifier}
        />
        </div>
        <div onClick={() => setStep(1)}>
          <FormInput
            label="Date de naissance"
            id="dateOfBirth"
            type="date"
            value={dateOfBirth}
          />
        </div>
      </div>
    </>
  );
};

export default SecondStep;
