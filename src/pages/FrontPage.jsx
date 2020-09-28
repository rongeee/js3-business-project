import React from "react";
import { Link } from "react-router-dom";
import { Btn, Wrapper, BtnSecondary } from "../style/Components";

const FrontPage = () => {
  return (
    <Wrapper>
      <h1>Business Things</h1>

      <Link to={`/login`}>
        <Btn>Login</Btn>
      </Link>
      <Link to={`/register`}>
        <BtnSecondary>Register</BtnSecondary>
      </Link>
    </Wrapper>
  );
};

export default FrontPage;
