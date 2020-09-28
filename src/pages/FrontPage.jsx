import React from "react";
import { Link } from "react-router-dom";
import { Btn, Wrapper } from "../style/Components";

const FrontPage = () => {
  return (
    <Wrapper>
      <Link to={`/login`}>
        <Btn>Login</Btn>
      </Link>
      <Link to={`/register`}>
        <Btn>Register</Btn>
      </Link>
    </Wrapper>
  );
};

export default FrontPage;
