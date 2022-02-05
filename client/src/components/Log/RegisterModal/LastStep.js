import React, { useEffect } from "react";
import FormInput from "../../Objects/FormInput";

const LastStep = ({password, setPassword, pseudo, setPseudo, errors}) => {

  useEffect(() => {console.log(errors);},[errors])

  return (
    <div className="form">
      <div className="form-title">
        <span><h3>Créer votre compte</h3></span>
      </div>
      <FormInput label="Pseudo" id="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} error={errors.pseudo} />
      <span className="subtitle"><h4>Votre mot de passe doit faire au moins 6 caractères </h4></span>
      <FormInput label="Mot de passe" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} hideOption={true}/>
    </div>
  );
};

export default LastStep;
