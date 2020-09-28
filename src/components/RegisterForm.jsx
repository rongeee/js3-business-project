import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import { Btn, FormContainer, FormInput } from "../style/Components";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");
  const userKit = new UserKit();

  const handleRegister = () => {
    userKit
      .register(firstName, lastName, email, password, organisationName, organisationKind)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const inputObjects = [
    ["First Name", firstName, setFirstName, "text"],
    ["Last Name", lastName, setLastName, "text"],
    ["Email", email, setEmail, "email"],
    ["Password", password, setPassword, "password"],
    ["Organisation Name", organisationName, setOrganisationName, "text"],
    ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind, "text"],
  ];

  const renderInput = (index, placeholder, stateVariable, stateSetVariable, type) => {
    return (
      <FormInput key={index}>
        <label>{placeholder}</label>
        <input placeholder={placeholder} value={stateVariable} onChange={(e) => stateSetVariable(e.target.value)} type={type} />
      </FormInput>
    );
  };

  return (
    <FormContainer>
      <p>Enter details to register</p>
      {inputObjects &&
        inputObjects.map((item, index) => {
          return renderInput(index, item[0], item[1], item[2], item[3]);
        })}
      <Btn onClick={() => handleRegister}>Register</Btn>
    </FormContainer>
  );
};

export default RegisterForm;
