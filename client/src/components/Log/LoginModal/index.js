import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import LoginOption from "./LoginOption";
import Password from "./Password";

const LoginModal = ({ onClose }) => {
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const goNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const goPrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <div className="modal-container">
      <form className="modal-wrapper">
        <div className="top">
          <div className="header">
            <div className="header-wrapper">
              <div className="icon-btn" onClick={onClose}>
                <img className="icon" src="./img/icons/cross.svg" alt="" />
              </div>
              <img
                className="logo"
                src="./img/icons/bird/twi-b-bird.svg"
                alt=""
              />
            </div>
          </div>
          {step == 1 ? (
            <LoginOption
              identifiant={identifiant}
              goNext={goNext}
              setStep={setStep}
              setIdentifiant={setIdentifiant}
            />
          ) : step == 2 ? (
            <Password identifiant={identifiant} password={password} setPassword={setPassword} />
          ) : step == 3 ? (
            <ForgotPassword />
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
