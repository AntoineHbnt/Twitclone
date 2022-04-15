import React from "react";
import Button from "../../Objects/Button";
import FormInput from "../../Objects/FormInput";

const Login = ({ connectId, password, setPassword, login, errors }) => {
  return (
    <div className="login-content">
      <div className="login-wrapper">
        <form action="" onSubmit={login} id="login-form">
          <div className="title">
            <h3>Entrez votre mot de passe</h3>
          </div>
          <FormInput
            label="Identifiant"
            id="connectId"
            value={connectId}
            type="text"
            disable={true}
            onChange={(e) => {
              e.preventDefault();
            }}
            error={errors.connectId}
          />
          <FormInput
            label="Mot de passe"
            id="password"
            autoComplete="current-password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <Button
            label="Se connecter"
            backGroundColor="black"
            textWeight="bold"
            onClick={login}
          />
        </form>
        <span>
          Vous n'avez pas de compte ? <a  >Inscrivez-vous</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
