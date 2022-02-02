import React from "react";
import FormInput from "../../Objects/FormInput";

const SecondStep = ({ name, email, tel, dateOfBirth, isEmail, setStep }) => {
  return (
    <>
      <div className="form">
        <div className="form-title">
          <span>Créer votre compte</span>
        </div>
        <div onClick={() => setStep(1)}>
          <FormInput label="Nom" id="name" type="text" value={name} />
        </div>
        <div onClick={() => setStep(1)}>
          {isEmail ? (
            <FormInput label="Email" id="email" type="text" value={email} />
          ) : (
            <FormInput label="Téléphone" id="tel" type="text" value={tel} />
          )}
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
