import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/BusinessContext";
import styled from "styled-components";
import { BtnSecondary } from "../style/Components";

const SignOutBtn = () => {
  const history = useHistory();
  const setCurrentUser = useContext(UserContext).setCurrentUser;
  const setToken = useContext(UserContext).setToken;

  const handleClick = () => {
    localStorage.clear();
    setCurrentUser(null);
    setToken(null);
    history.push("/");
  };

  return <SignBtn onClick={() => handleClick()}>Sign Out</SignBtn>;
};

export default SignOutBtn;

const SignBtn = styled(BtnSecondary)`
  width: 100px;
  height: 20px;
  margin-left: 1em;
`;
