import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/BusinessContext";
import { Btn } from "../style/Components";

const SignOutBtn = () => {
  const history = useHistory();
  const setCurrentUser = useContext(UserContext).setCurrentUser;

  const handleClick = () => {
    localStorage.clear();
    setCurrentUser(null);
    history.push("/");
  };

  return <Btn onClick={() => handleClick()}>Sign Out</Btn>;
};

export default SignOutBtn;
