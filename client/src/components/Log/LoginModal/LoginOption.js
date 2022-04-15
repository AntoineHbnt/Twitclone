import React, { useEffect, useState } from "react";
import Button from "../../Objects/Button";
import Separator from "../../Objects/Separator";
import FormInput from "../../Objects/FormInput";

const FirstStep = ({ connectId, setconnectId, goNext, setStep }) => {
  const [isAvailable, setIsAvailable] = useState(false);

  const checkInput = () => {
    if (connectId !== "") {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    checkInput();
  }, [connectId]);

  return (
    <div className="login-content">
      <div className="login-wrapper">
        <div className="title">
          <h3>Connectez-vous à Twitter</h3>
        </div>
        <Button
          label="Se connecter avec Google"
          img="./img/icons/google.svg"
          disable={true}
        />
        <Button
          label="Se connecter avec Apple"
          img="./img/icons/apple.svg"
          disable={true}
        />
        <Separator label="ou" />
        <FormInput
          label="Numéro de téléphone, adresse email ou nomd'utilisateur"
          id="connectId"
          autoComplete="username"
          value={connectId}
          type="text"
          onChange={(e) => setconnectId(e.target.value)}
        />
        <Button
          label="Suivant"
          backGroundColor="black"
          textWeight="bold"
          disable={!isAvailable}
          onClick={isAvailable ? goNext : (e) => e.preventDefault}
        />
        <Button label="Mot de passe oublié ?" textWeight="bold" onClick={() => setStep(3)}/>
        <span>
          Vous n'avez pas de compte ? <a  >Inscrivez-vous</a>
        </span>
      </div>
    </div>
  );
};

export default FirstStep;
