import React from "react";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import NavigationListItem from "../navigation/NavigationListItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAuthSelector } from "../../../redux/auth/authSelectors";

export default function Navigation() {
  const isAuth = useSelector(getAuthSelector);
  const location = useLocation();
  const dispatch = useDispatch();
  const logOutSession = () => dispatch(logOut());

  return (
    <div className="p-15 h-3.75 bg-transparent">
      <ul className="flex space-x-3 justify-between items-center">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}

        {isAuth && (
          <li>
            <button type="button" onClick={() => logOutSession()}>
              Log Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
