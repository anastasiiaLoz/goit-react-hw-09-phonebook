import axios from "axios";
import { loginError, loginSuccess, registerError, registerRequest, registerSuccess, loginRequest } from "./authActions";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyCuBVG9woxvOVJflwnDKGuzJwOkEVviJZg";

export const register = user => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      ...user,
      returnSecureToken: true
    });
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.response.data.error.message));
  }
};

export const login = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      ...user,
      returnSecureToken: true
    });
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.response.data.error.message));
  }
};
