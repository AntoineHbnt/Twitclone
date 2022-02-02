import React, { useEffect, useState } from "react";
import FirstStep from "./FirstStep";
import LastStep from "./LastStep";
import SecondStep from "./SecondStep";

const RegisterModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [step, setStep] = useState(1);

  const goNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const goPrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const checkInput = () => {
    if (name != "" && dateOfBirth != "") {
      if (isEmail ? email != "" : tel != "") {
        setIsAvailable(true);
      }else{
        setIsAvailable(false);
      }
    }else{
      setIsAvailable(false);
    }
  };

  useEffect(() => {
    checkInput();

    if (step == 4) {
      window.alert("Vous êtes inscrit");
      onClose();
    }
  }, [email, tel, name, step, isEmail]);

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
                <span className="step">Étape {step}/3</span>
              </div>
            )}
          </div>
          <div className="content">
            {step == 1 ? (
              <FirstStep
                name={name}
                email={email}
                tel={tel}
                dateOfBirth={dateOfBirth}
                isEmail={isEmail}
                setName={setName}
                setEmail={setEmail}
                setTel={setTel}
                setDateOfBirth={setDateOfBirth}
                setIsEmail={setIsEmail}
              />
            ) : step == 2 ? (
              <SecondStep
                name={name}
                email={email}
                tel={tel}
                dateOfBirth={dateOfBirth}
                isEmail={isEmail}
                setStep={setStep}
              />
            ) : (
              <LastStep password={password} setPassword={setPassword} />
            )}
          </div>
        </div>
        <div className="sending-btn">
          {step == 2 ? (
            <button type="submit" onClick={goNext}>
              S'inscrire
            </button>
          ) : (
            <button
              onClick={isAvailable ? goNext : (e) => e.preventDefault}
              className={isAvailable ? "" : "disable"}
            >
              Suivant
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
