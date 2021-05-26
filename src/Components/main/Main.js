import React, { Suspense } from "react";
import { Switch } from "react-router";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { connect } from "react-redux";

const Main = ({ isAuth }) => {
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
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.tokens?.idToken
  };
};

export default connect(mapStateToProps)(Main);
