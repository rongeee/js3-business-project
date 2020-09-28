import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/BusinessContext";
import { Btn } from "../style/Components";

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

  return <Btn onClick={() => handleClick()}>Sign Out</Btn>;
};

export default SignOutBtn;
