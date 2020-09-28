import React, { useState } from "react";
import UserKit from "../data/UserKit";
import { startCase } from "lodash";
import { Btn, FormContainer, FormInput, CentContainer } from "../style/Components";
import FormKit from "../data/FormKit";

const RegisterForm = ({ setRegistered }) => {
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const userKit = new UserKit();
  const formKit = new FormKit();

  const handleRegister = () => {
    formKit.validateInputs(user, setErrorMsg, "user");

    if (formKit.validateInputs(user, setErrorMsg, "user")) {
      userKit
        .register(user)
        .then((res) => res.json())
        .then((data) => setRegistered(true));
    }
  };

  const renderInput = () => {
    const data = formKit.registerFormData;
    return data.map((item, index) => {
      return (
        <FormInput key={index}>
          <label htmlFor={item[0]}>{startCase(item[0])}</label>
          <input type={item[1]} name={item[0]} placeholder={startCase(item[0])} onChange={(e) => formKit.onInputChange(e.target.value, item[0], setUser)} />
        </FormInput>
      );
    });
  };

  return (
    <FormContainer>
      {errorMsg && <strong>{errorMsg}</strong>}
      {formKit.registerFormData && renderInput()}
      <CentContainer>
        <Btn onClick={() => handleRegister()}>Register</Btn>
      </CentContainer>
    </FormContainer>
  );
};

export default RegisterForm;
