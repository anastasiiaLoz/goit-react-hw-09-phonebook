import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import NavigationListItem from "../navigation/NavigationListItem";

const Navigation = ({ location, logOut, isAuth }) => {
  return (
    <div className="p-15 h-3.75 bg-transparent">
      <ul className="flex space-x-3 justify-between items-center">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}

        {isAuth && (
          <li>
            <button type="button" onClick={() => logOut()}>
              Log Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const mstp = state => ({
  isAuth: state.auth.tokens?.idToken
});

export default connect(
  mstp,
  { logOut }
)(withRouter(Navigation));
