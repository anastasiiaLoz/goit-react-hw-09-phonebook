import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, exact, component, isAuth }) => {
  console.log("isExact :>> ", exact);
  return isAuth ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
