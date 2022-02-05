import React, { useState } from "react";
import axios from "axios";
import ForgotPassword from "./ForgotPassword";
import LoginOption from "./LoginOption";
import Login from "./Login";

const LoginModal = ({ onClose }) => {
  const [connectId, setconnectId] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({ connectId: "", password: "" });

  const goNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const goPrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        connectId,
        password,
      },
    }).then((res) => {
      if (res.data.errors) {
        setErrors({ connectId: res.data.errors.connectId, password: res.data.errors.password });
      } else {
        window.location = "/";
      }
    })
    .catch((err) => console.log(err));
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
          {step === 1 ? (
            <LoginOption
              connectId={connectId}
              goNext={goNext}
              setStep={setStep}
              setconnectId={setconnectId}
            />
          ) : step === 2 ? (
            <Login
              connectId={connectId}
              password={password}
              setPassword={setPassword}
              login={handleLogin}
              errors={errors}
            />
          ) : step === 3 ? (
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
