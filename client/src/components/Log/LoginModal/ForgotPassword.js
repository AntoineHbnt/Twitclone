import React, { useState } from "react";
import Button from "../../Objects/Button";
import FormInput from "../../Objects/FormInput";
import Separator from "../../Objects/Separator";

const ForgotPassword = () => {
  const [connectId, setconnectId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const changePassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-content">
      <div className="login-wrapper">
        <div className="title">
          <h3>Changement de mot de passe</h3>
        </div>
        <FormInput
          label="Numéro de téléphone, adresse email ou nomd'utilisateur"
          id="connectId"
          value={connectId}
          type="text"
          onChange={(e) => setconnectId(e.target.value)}
        />
        <FormInput
          label="Nouveau mot de passe"
          id="password"
          value={newPassword}
          autoComplete="new-password"
          type="text"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <FormInput
          label="Confirmer le mot de passe"
          id="password-confirm"
          value={passConfirm}
          autoComplete="new-password"
          type="text"
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <Button
          label="Modifier"
          backGroundColor="black"
          textWeight="bold"
          onClick={changePassword}
        />
        <span>
          Vous n'avez pas de compte ? <a href="/">Inscrivez-vous</a>
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
