import React, { Suspense } from "react";
import { Switch } from "react-router";
import { getAuthSelector } from "../../redux/auth/authSelectors";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { useSelector } from "react-redux";

export default function Main() {
  const isAuth = useSelector(getAuthSelector);
  return (
    <Suspense fallback={<h2>LOADING...</h2>}>
      <Switch>
        {mainRoutes.map(item =>
          item.isPrivate ? (
            <PrivateRoute {...item} isAuth={isAuth} key={item.path} />
          ) : (
            <PublicRoute {...item} isAuth={isAuth} key={item.path} />
          )
        )}
      </Switch>
    </Suspense>
  );
}
