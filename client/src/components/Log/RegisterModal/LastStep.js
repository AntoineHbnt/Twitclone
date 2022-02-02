import React from "react";
import FormInput from "../../Objects/FormInput";

const LastStep = ({password, setPassword}) => {
  return (
    <div className="form">
      <div className="form-title">
        <span>Créer votre compte</span>
      </div>
      <span className="subtitle">Votre mot de passe doit faire au moins 8 caractère </span>
      <FormInput label="Mot de passe" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} hideOption={true}/>
    </div>
  );
};

export default LastStep;
