import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)),
    isPrivate: false,
    isRestricted: false
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/LoginPage" /*webpackChunkName:'LoginPage'*/)),
    isPrivate: false,
    isRestricted: true
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/RegisterPage" /*webpackChunkName:'RegisterPage'*/)),
    isPrivate: false,
    isRestricted: true
  },
  {
    name: "Phone Book",
    path: "/phonebook",
    exact: false,
    component: lazy(() => import("../pages/PhonebookPage" /*webpackChunkName:'PhonebookPage'*/)),
    isPrivate: true,
    isRestricted: false
  }
];

export default mainRoutes;
