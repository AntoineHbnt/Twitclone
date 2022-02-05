import axios from "axios";
import React, { useEffect, useState } from "react";
import FirstStep from "./FirstStep";
import LastStep from "./LastStep";
import SecondStep from "./SecondStep";

const RegisterModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();
  const [step, setStep] = useState(1);

  const [tempEmail, setTempEmail] = useState("");
  const [tempPhone, setTempPhone] =useState("");

  const [errors, setErrors] = useState({
    name: "",
    identifier: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/register`,
      withCredentials: true,
      data: {
        userAt: pseudo,
        userPseudo: name,
        identifier,
        dateOfBirth,
        password,
      },
    }).then((res) => {
      if (res.data.errors) {
        setErrors({
          name: res.data.errors.userPseudo,
          pseudo: res.data.errors.userAt,
          identifier: res.data.errors.identifier,
          password: res.data.errors.password,
        });
      } else {
        window.location = "/";
      }
    });
  };

  const goNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const goPrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  useEffect(() => {
    setIsAvailable(name !== "" && dateOfBirth !== "" && identifier !== "")
    setIdentifier(isEmail ? tempEmail : tempPhone)
    console.log(identifier);
    if (step === 4) onClose();
  }, [tempEmail, tempPhone, name, step, dateOfBirth, isEmail]);

  return (
    <div className="modal-container">
      <form className="modal-wrapper">
        <div className="top">
          <div className="header">
            {step === 1 ? (
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
                <span className="step">Étape {step < 4 ? step : "3"}/3</span>
              </div>
            )}
          </div>
          <div className="register-content">
            {step === 1 ? (
              <FirstStep
                name={name}
                identifier={isEmail ? tempEmail : tempPhone}
                dateOfBirth={dateOfBirth}
                errors={errors}
                isEmail={isEmail}
                setName={setName}
                setIdentifier={isEmail ? setTempEmail : setTempPhone}
                setDateOfBirth={setDateOfBirth}
                setIsEmail={setIsEmail}
              />
            ) : step === 2 ? (
              <SecondStep
                name={name}
                identifier={identifier}
                errors={errors}
                dateOfBirth={dateOfBirth}
                isEmail={isEmail}
                setStep={setStep}
              />
            ) : (
              <LastStep
                password={password}
                setPassword={setPassword}
                pseudo={pseudo}
                setPseudo={setPseudo}
                errors={errors}
              />
            )}
          </div>
        </div>
        <div className="sending-btn">
          {step === 2 ? (
            <button type="submit" onClick={goNext}>
              S'inscrire
            </button>
          ) : step === 3 ? (
            <button onClick={handleRegister}>Suivant</button>
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
