import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import UserKit from "../data/UserKit";
import { Btn, Wrapper } from "../style/Components";

const LoginPage = () => {
  const userKit = new UserKit();
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const handleActivateUser = () => {
    userKit.activateUser(uid, token).then((data) => {
      console.log(data);
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  };
  return <Wrapper>{uid && token ? <Btn onClick={handleActivateUser}>Activate</Btn> : <LoginForm />}</Wrapper>;
};

export default LoginPage;
