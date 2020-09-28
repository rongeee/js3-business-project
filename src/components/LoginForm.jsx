import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/BusinessContext";
import UserKit from "../data/UserKit";
import { Btn, FormContainer } from "../style/Components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userKit = new UserKit();
  const history = useHistory();
  const setCurrentUser = useContext(UserContext).setCurrentUser;

  const handleLogin = () => {
    userKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);
        setCurrentUser(data.token);
        history.push("/");
      });
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Btn onClick={handleLogin}>Login</Btn>
    </FormContainer>
  );
};

export default LoginForm;
