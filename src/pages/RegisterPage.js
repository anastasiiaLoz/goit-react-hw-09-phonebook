import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../redux/auth/authOperations";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const isStrongPassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

const schema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  password: Yup.string()
    .required()
    .matches(
      isStrongPassword,
      "Password must be longer than 8 characters, must contain at least 1 capital letter, 1 number and 1 special character"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
});

const RegisterPage = ({ register }) => {
  return (
    <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
      <div>
        <h3 className="font-bold text-2xl">Welcome to Startup</h3>
        <p className="text-gray-600 pt-2">Log in to your account.</p>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={schema}
        onSubmit={register}
      >
        <div className="mt-10">
          <Form className="flex flex-col" method="POST" action="#">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
              <Field
                type="text"
                name="email"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              <ErrorMessage name="email" component="p" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
              <Field
                type="password"
                name="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              <ErrorMessage name="password" component="p" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Confirm Password</label>
              <Field
                type="text"
                name="confirmPassword"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
              />
              <ErrorMessage name="confirmPassword" component="p" />
            </div>

            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Register Account
            </button>
          </Form>

          <div className="max-w-lg mx-auto text-white text-center mt-12 mb-6">
            <Link className="font-bold hover:underline" to="/login">
              Already have an account? Login!
            </Link>
          </div>
        </div>
      </Formik>
    </div>
  );
};

const mapDispatch = {
  register
};

export default connect(
  null,
  mapDispatch
)(RegisterPage);

// <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">First Name</label>
//               <Field
//                 type="text"
//                 name="email"
//                 className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
//               />
//               <ErrorMessage name="email" component="p" />
//             </div>
//             <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Last Name</label>
//               <Field
//                 type="text"
//                 name="lastName"
//                 className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
//               />
//               <ErrorMessage name="lastName" component="p" />
//             </div>
