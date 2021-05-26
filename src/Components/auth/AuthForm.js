// import { Form, Formik } from "formik";
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { login, register } from "../../redux/auth/authOperations";

// class AuthForm extends Component {
//   state = {};
//   render() {
//     return (
//       <>
//         <div>
//           <Formik
//             onSubmit={values => {
//               this.props.location.pathname === "/registration" ? this.props.register(values) : this.props.login(values);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <button className="btnSign" type="submit" disabled={isSubmitting}>
//                   {this.props.location.pathname === "/registration" ? "LOG IN" : "SIGN UP"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </>
//     );
//   }
// }

// export default connect(
//   null,
//   { register, login }
// )(withRouter(AuthForm));
