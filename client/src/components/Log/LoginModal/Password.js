import React from "react";
import Button from "../../Objects/Button";
import FormInput from "../../Objects/FormInput";

const Password = ({ identifiant, password, setPassword, connect }) => {
  return (
    <div className="login-content">
      <div className="login-wrapper">
        <div className="title">
          <h3>Entrez votre mot de passe</h3>
        </div>
        <FormInput
          label="Identifiant"
          id="identifiant"
          value={identifiant}
          type="text"
          disable={true}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
        <FormInput
          label="Nouveau mot de passe"
          id="password"
          autoComplete="current-password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          label="Se connecter"
          backGroundColor="black"
          textWeight="bold"
          onClick={connect}
        />
        <span>
          Vous n'avez pas de compte ? <a href="/">Inscrivez-vous</a>
        </span>
      </div>
    </div>
  );
};

export default Password;
