import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";
import { WrapperAlignStart } from "../style/Components";

const RegisterPage = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <WrapperAlignStart>
      {!registered && <RegisterHeadline>Register</RegisterHeadline>}
      {!registered ? <RegisterForm setRegistered={setRegistered} /> : <h2>Successfully Registered! Check your E-Mail!</h2>}
    </WrapperAlignStart>
  );
};

export default RegisterPage;

const RegisterHeadline = styled.h2`
  align-self: start;
`;
