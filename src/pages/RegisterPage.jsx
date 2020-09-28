import React from "react";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";
import { Wrapper } from "../style/Components";

const RegisterPage = () => {
  return (
    <Wrap>
      <RegisterHeadline>Register</RegisterHeadline>
      <RegisterForm />
    </Wrap>
  );
};

export default RegisterPage;

const RegisterHeadline = styled.h2``;

const Wrap = styled(Wrapper)`
  flex-direction: column;
`;
