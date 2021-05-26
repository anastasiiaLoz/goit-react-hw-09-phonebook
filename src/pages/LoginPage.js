import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../redux/auth/authOperations";
import { Link, withRouter } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Field is required")
    .email("Email must contain '@'!"),
  password: Yup.string()
    .required("Field is required")
    .min(4)
});

const LoginPage = ({ login }) => {
  return (
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div>
        <p className="text-gray-600 pt-2">Log in to your account.</p>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={login}
      >
        <div className="mt-10">
          <Form className="flex flex-col" method="POST" action="#">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">
                Email
              </label>
              <Field
                type="text"
                name="email"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              <ErrorMessage name="email" component="p" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              <ErrorMessage name="password" component="p" />
            </div>
            <div className="flex justify-end">
              <Link
                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                Forgot your password?
              </Link>
            </div>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Log In
            </button>
          </Form>
          <div className="max-w-lg mx-auto text-center mt-12 mb-6">
            <p className="text-white">
              Don't have an account?{" "}
              <Link className="font-bold hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Formik>
    </div>
  );
};

const mapDispatch = {
  login
};

export default connect(
  null,
  mapDispatch
)(withRouter(LoginPage));
