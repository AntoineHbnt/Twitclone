import React, { useState } from "react";
import RegisterModal from "../components/Log/RegisterModal";
import LoginModal from '../components/Log/LoginModal'
import Button from "../components/Objects/Button";
import Separator from "../components/Objects/Separator";
const Log = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const closeRegisterModal = () => {
    setRegisterModal(false);
    document.querySelector(".log-container").classList.remove("modal-open");
  };

  const openRegisterModal = () => {
    setRegisterModal(true);
    document.querySelector(".log-container").classList.add("modal-open");
  };

  const openLoginModal = () => {
    setLoginModal(true);
    document.querySelector(".log-container").classList.add("modal-open");
  };

  const closeLoginModal = () => {
    setLoginModal(false);
    document.querySelector(".log-container").classList.remove("modal-open");
  };

  return (
    <div className="log-container">
      <div className="main-wrapper">
        <div className="main">
          <img className="logo" src="./img/icons/bird/twi-b-bird.svg" alt="" />
          <div className="title">
            <h1>Ça se passe maintenant</h1>
          </div>
          <div className="subtitle">
            <h2>Rejoignez Twitter dès aujourd'hui.</h2>
          </div>
          <div className="log-options">
            <Button label="S'inscrire avec Google" img="./img/icons/google.svg" disable={true}/> 
            <Button label="S'inscrire avec Apple" img="./img/icons/apple.svg" disable={true}/> 
            <Separator label="ou" />
            <Button label="S'inscrire avec un numéro de téléphone ou une adresse email" backGroundColor="main-color" onClick={openRegisterModal} />

            <span className="conditions">
              En vous inscrivant, vous acceptez les{" "}
              <a>Conditions d'Utilisation</a> et la{" "}
              <a>Politique de Confidentialité</a>, incluant l'
              <a>Utilisation de Cookies</a>.
            </span>
            <div className="login">
              <div className="text">
                <h4>Vous avez déjà un compte ?</h4>
              </div>
              <Button label="Se connecter" textColor="main-color" onClick={openLoginModal}/>
            
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <img className="logo" src="./img/icons/bird/twi-w-bird.svg" alt="" />
      </div>
      {registerModal && <RegisterModal onClose={closeRegisterModal} />}
      {loginModal && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
};

export default Log;
