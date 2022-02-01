import React, { useEffect, useState } from "react";
import DatePicker from "../Objects/DatePicker";
import FormInput from "../Objects/FormInput";

const RegisterModal = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  return (
    <div className="register-container">
      <form className="register-wrapper">
        <div className="top">
          <div className="header">
            <div className="header-wrapper">
              <img className="cross" src="./img/icons/cross.svg" alt="" />
              <img
                className="logo"
                src="./img/icons/bird/twi-b-bird.svg"
                alt=""
              />
            </div>
          </div>
          <div className="content">
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
                <div className="title">Date de naissance</div>
                <div className="subtitle">
                  <span>
                    Cette information ne sera pas affichée publiquement.
                    Confirmez votre âge, même si ce compte est pour une
                    entreprise, un animal de compagnie ou autre chose.
                  </span>
                </div>
                <DatePicker/>
              </div>
            </div>
          </div>
        </div>
        <button className="sending-btn"> Suivant </button>
      </form>
    </div>
  );
};

export default RegisterModal;
