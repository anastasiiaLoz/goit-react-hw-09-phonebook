import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginError, loginSuccess, logOut, registerError, registerSuccess } from "./authActions";

const tokenReducer = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [logOut]: () => ({})
  }
);

const errorReducer = createReducer("", {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logOut]: () => ""
});

const authReducer = combineReducers({
  tokens: tokenReducer,
  error: errorReducer
});

export default authReducer;
