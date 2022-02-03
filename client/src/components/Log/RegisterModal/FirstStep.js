import React from "react";
import DatePicker from "../../Objects/DatePicker";
import FormInput from "../../Objects/FormInput";

const FirstStep = ({name, email, tel, dateOfBirth, isEmail, setDateOfBirth, setEmail, setName, setTel, setIsEmail}) => {
  return (
    <div className="form">
      <div className="form-title"><h3>Créer votre compte</h3></div>
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

      <span className="option-switch" onClick={() => setIsEmail(!isEmail)}>
        {" "}
        {isEmail ? "Utiliser un téléphone" : "Utiliser un email"}
      </span>
      <div className="birthday-container">
        <div className="title">
          <h4>Date de naissance</h4>
        </div>
        <div className="subtitle">
          <span>
            Cette information ne sera pas affichée publiquement. Confirmez votre
            âge, même si ce compte est pour une entreprise, un animal de
            compagnie ou autre chose.
          </span>
        </div>
        <DatePicker value={dateOfBirth} setDateOfBirth={setDateOfBirth}/>
      </div>
    </div>
  );
};

export default FirstStep;
