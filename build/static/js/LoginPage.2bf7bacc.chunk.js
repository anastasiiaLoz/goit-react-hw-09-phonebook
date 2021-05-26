(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[3],{257:function(e,t,r){"use strict";r.r(t);r(0);var a=r(126),n=r(127),s=r(13),c=r(85),o=r(11),i=r(3),l=r(1),u=n.a().shape({email:n.c().required("Field is required").email("Email must contain '@'!"),password:n.c().required("Field is required").min(4)}),d={login:c.a};t.default=Object(s.b)(null,d)(Object(i.h)((function(e){var t=e.login;return Object(l.jsxs)("div",{className:"bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl",children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"text-gray-600 pt-2",children:"Log in to your account."})}),Object(l.jsx)(a.d,{initialValues:{email:"",password:""},validationSchema:u,onSubmit:t,children:Object(l.jsxs)("div",{className:"mt-10",children:[Object(l.jsxs)(a.c,{className:"flex flex-col",method:"POST",action:"#",children:[Object(l.jsxs)("div",{className:"mb-6 pt-3 rounded bg-gray-200",children:[Object(l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 ml-3",htmlFor:"email",children:"Email"}),Object(l.jsx)(a.b,{type:"text",name:"email",className:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"}),Object(l.jsx)(a.a,{name:"email",component:"p"})]}),Object(l.jsxs)("div",{className:"mb-6 pt-3 rounded bg-gray-200",children:[Object(l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 ml-3",htmlFor:"password",children:"Password"}),Object(l.jsx)(a.b,{type:"password",name:"password",className:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"}),Object(l.jsx)(a.a,{name:"password",component:"p"})]}),Object(l.jsx)("div",{className:"flex justify-end",children:Object(l.jsx)(o.b,{className:"text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6",to:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Forgot your password?"})}),Object(l.jsx)("button",{className:"bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",type:"submit",children:"Log In"})]}),Object(l.jsx)("div",{className:"max-w-lg mx-auto text-center mt-12 mb-6",children:Object(l.jsxs)("p",{className:"text-white",children:["Don't have an account?"," ",Object(l.jsx)(o.b,{className:"font-bold hover:underline",to:"/register",children:"Register"})]})})]})})]})})))},85:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return b}));var a=r(65),n=r.n(a),s=r(16),c=r(66),o=r(86),i=r.n(o),l=r(12),u="AIzaSyCuBVG9woxvOVJflwnDKGuzJwOkEVviJZg",d=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(r){var a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(l.f)()),t.prev=1,t.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(u),Object(s.a)(Object(s.a)({},e),{},{returnSecureToken:!0}));case 4:a=t.sent,c=a.data,r(Object(l.g)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(Object(l.e)(t.t0.response.data.error.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(r){var a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Object(l.c)()),t.prev=1,t.next=4,i.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(u),Object(s.a)(Object(s.a)({},e),{},{returnSecureToken:!0}));case 4:a=t.sent,c=a.data,r(Object(l.d)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(Object(l.b)(t.t0.response.data.error.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=LoginPage.2bf7bacc.chunk.js.map