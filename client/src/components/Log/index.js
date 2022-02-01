import React, { useState } from "react";
import RegisterModal from "./RegisterModal";

const Log = () => {
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className="log-container">
      <div className="main-wrapper">
        <div className="main">
          <img className="logo" src="./img/icons/bird/twi-b-bird.svg" alt="" />
          <div className="title">
            <span>Ça se passe maintenant</span>
          </div>
          <div className="subtitle">
            <span>Rejoignez Twitter dès aujourd'hui.</span>
          </div>
          <div className="log-options">
            <div className="btn-container disable">
              <div className="btn-wrapper">
                <img src="./img/icons/google.svg" alt="" className="btn-logo" />
                <div className="btn-text">
                  <span>S'inscrire avec Google</span>
                </div>
              </div>
            </div>
            <div className="btn-container disable">
              <div className="btn-wrapper">
                <img src="./img/icons/apple.svg" alt="" className="btn-logo" />
                <div className="btn-text">
                  <span>S'inscrire avec Apple</span>
                </div>
              </div>
            </div>
            <div className="separator">
              <div className="line" />
              <span>ou</span>
              <div className="line" />
            </div>
            <div onClick={() => setSignUpModal(true)} className="btn-container main-color" id="register">
              <div className="btn-wrapper">
                <div className="btn-text">
                  <span>
                    S'inscrire avec un numéro de téléphone ou une adresse email
                  </span>
                </div>
              </div>
            </div>

            <span className="conditions">
              En vous inscrivant, vous acceptez les{" "}
              <a href="">Conditions d'Utilisation</a> et la{" "}
              <a href="">Politique de Confidentialité</a>, incluant l'
              <a href="">Utilisation de Cookies</a>.
            </span>
            <div className="login">
              <div className="text">
                <span>Vous avez déjà un compte ?</span>
              </div>
              <div className="btn-container" id="login">
                <div className="btn-wrapper">
                  <div className="btn-text main-color">
                    <span>Se connecter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <img className="logo" src="./img/icons/bird/twi-w-bird.svg" alt="" />
      </div>
      {signUpModal && <RegisterModal />}
    </div>

  );
};

export default Log;
