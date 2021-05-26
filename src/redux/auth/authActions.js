import { createAction } from "@reduxjs/toolkit";

//Registration
export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

// Authentication / Logging In
export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

// Log Out
export const logOut = createAction("auth/logOut");
