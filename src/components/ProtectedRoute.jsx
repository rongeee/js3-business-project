import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to="/" />)} />
);

export default ProtectedRoute;
