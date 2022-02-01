import React, { useEffect, useState } from "react";
import DatePicker from "../Objects/DatePicker";
import FormInput from "../Objects/FormInput";

const RegisterModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
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
    <div className="register-container">
      <form className="register-wrapper">
        <div className="top">
          <div className="header">
            {step == 1 ? (
              <div className="header-wrapper first-step">
                <div className="icon-btn" onClick={onClose}>
                  <img className="icon" src="./img/icons/cross.svg" alt="" />
                </div>
                <img
                  className="logo"
                  src="./img/icons/bird/twi-b-bird.svg"
                  alt=""
                />
              </div>
            ) : (
              <div className="header-wrapper">
                <div className="icon-btn" onClick={goPrevious}>
                  <img
                    className="icon"
                    src="./img/icons/left-arrow.svg"
                    alt=""
                  />
                </div>
                <span className="step">Étape {step}/4</span>
              </div>
            )}
          </div>
          <div className="content">
            {step == 1 ? (
              <div className="form">
                <div className="form-title">Créer votre compte</div>
                <FormInput
                  label="Nom et prénom"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {isEmail ? (
                  <FormInput
                    label="Email"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                ) : (
                  <FormInput
                    label="Téléphone"
                    id="tel"
                    type="text"
                    value={tel}
                    onChange={(e) => {
                      setTel(e.target.value);
                    }}
                  />
                )}

                <span
                  className="option-switch"
                  onClick={() => setIsEmail(!isEmail)}
                >
                  {" "}
                  {isEmail ? "Utiliser un téléphone" : "Utiliser un email"}
                </span>
                <div className="birthday-container">
                  <div className="title">
                    <span>Date de naissance</span>
                  </div>
                  <div className="subtitle">
                    <span>
                      Cette information ne sera pas affichée publiquement.
                      Confirmez votre âge, même si ce compte est pour une
                      entreprise, un animal de compagnie ou autre chose.
                    </span>
                  </div>
                  <DatePicker />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="sending-btn">
          {step == 1 ? (
            <button onClick={goNext}>Suivant</button>
          ) : (
            <button type="submit">S'inscrire</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
