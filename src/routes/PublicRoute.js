import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ path, exact, component, isRestricted, isAuth }) => {
  return isAuth && isRestricted ? <Redirect to="/phonebook" /> : <Route path={path} exact={exact} component={component} />;
};
export default PublicRoute;
