// import { useState } from "react";
// import { database } from "../firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [login, setLogin] = useState(false);
//   const history = useNavigate();

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     if (type == "signup") {
//       createUserWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, "authData");
//           alert("Access to dashboard activated")
//           history("/dashboard")

//         })
//         .catch((err) => {
//           alert(err.code);
//           setLogin(true);
//         });
//     } else if (type == "login"){
//       signInWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, "authData");
//           alert("login successful")
//           history("/dashboard")
//         })
//         .catch((err) => {
//           alert(err.code);
//         });
//     } else{
//       alert()
//     }
//   };
//   return (
//     <>
//       <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
//         <div className="d-flex m-4 p-4 login-container ">
//           <div className="login-details d-flex m-1 ">
//             <h1 className="fs-3 d-flex justify-content-center align-item-center">
//               Login
//             </h1>
//             <form onSubmit={(e) => handleSubmit(e, login ? "login" : "signup")}>
//               <div>
//                 <label>Username</label>
//                 <div className="input-group flex-nowrap border-0 border-bottom">
//                   <span
//                     className="input-group-text text-primary bg-white border-0"
//                     id="addon-wrapping"
//                   >
//                     {" "}
//                     @
//                   </span>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control border-0 border-opacity-75 shadow-none"
//                     placeholder="write your username"
//                     aria-label="Username"
//                     aria-describedby="addon-wrapping"
//                   />
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <label>Password</label>
//                 <div className="input-group flex-nowrap border-0 border-bottom">
//                   <span
//                     className="input-group-text text-primary bg-white border-0"
//                     id="addon-wrapping"
//                   >
//                     {" "}
//                     **
//                   </span>
//                   <input
//                     name="password"
//                     type="text"
//                     className="form-control border-0 border-opacity-75 shadow-none"
//                     placeholder="write your password"
//                     aria-label="password"
//                     aria-describedby="addon-wrapping"
//                   />
//                 </div>
//               </div>
//               <div className="d-flex align-items-end cen-div mt-3 mb-3">
//                 <p className="text-primary"> Forgot password</p>
//               </div>
//               <div className="d-flex align-items-center cen-div mt-3 mb-3">
//                 <button
//                   className="btn btn-primary login_button rounded-pill p-1 col-12"
//                   type="submit"
//                 >
//                   {login ? "login" : "signup"}
//                 </button>
//               </div>
//             </form>
//             <div className=" d-flex flex-column mt-4 mb-4 justify-content-center align-item-center cens-div ">
//               <p className="justify-content-center align-item-center">
//                 Or Sign Up Using
//               </p>
//               <div className="d-flex justify-content-center align-item-center cens-div  ">
//                 <div className="m-2 circle-div bg-primary text-light">F</div>
//                 <div className="m-2 circle-div bg-secondary text-light">T</div>
//                 <div className="m-2 circle-div bg-danger text-light">G</div>
//               </div>
//             </div>
//             <div className=" d-flex flex-column mt-4 justify-content-center align-item-center cens-div ">
//               <p className="justify-content-center align-item-center">
//                 Or Sign Up Using
//               </p>
//               <span className="justify-content-center align-item-center">
//                 <a href="/signup" className="text-primary link-underline-light">
//                   SIGN UP
//                 </a>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { database } from "../firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [login, setLogin] = useState(false);
//   const history = useNavigate();

//   const handleSubmit = async (e, type) => {

//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {

//       if (type === "signup") {
//         await signInWithEmailAndPassword(database, email, password);
//         alert("Login successful");
//       } else if (type === "login") {
//         await createUserWithEmailAndPassword(database, email, password);
//         alert("Access to dashboard activated");
//       } else {
//         throw new Error("Invalid action type");
//       }

//       history("/dashboard");
//     } catch (error) {
//       if (error.code) {
//         console.log("seems like your internet connection is offline");
//         alert("seems like your internet connection is offline");
//         alert(error.code);

//       } else {
//         alert("An unexpected error occurred");
//       }

//       setLogin(true);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
//       <div className="d-flex m-4 p-4 login-container">
//         <div className="login-details d-flex m-1">
//           <h1 className="fs-3 d-flex justify-content-center align-item-center">
//           {login ? "SignUp" : "Login"}
//           </h1>
//           <form onSubmit={(e) => handleSubmit(e, login ? "login" : "signup")}>
//             <div>
//               <label>Email</label>
//               <div className="input-group flex-nowrap border-0 border-bottom">
//                 <span
//                   className="input-group-text text-primary bg-white border-0"
//                   id="addon-wrapping"
//                 >
//                   @
//                 </span>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control border-0 border-opacity-75 shadow-none"
//                   placeholder="Enter your email"
//                   aria-label="Email"
//                   aria-describedby="addon-wrapping"
//                 />
//               </div>
//             </div>
//             <div className="mt-2">
//               <label>Password</label>
//               <div className="input-group flex-nowrap border-0 border-bottom">
//                 <span
//                   className="input-group-text text-primary bg-white border-0"
//                   id="addon-wrapping"
//                 >
//                   **
//                 </span>
//                 <input
//                   name="password"
//                   type="password"
//                   className="form-control border-0 border-opacity-75 shadow-none"
//                   placeholder="Enter your password"
//                   aria-label="Password"
//                   aria-describedby="addon-wrapping"
//                 />
//               </div>
//             </div>
//             <div className="d-flex align-items-end cen-div mt-3 mb-3">
//               <p className="text-primary">Forgot password</p>
//             </div>
//             <div className="d-flex align-items-center cen-div mt-3 mb-3">
//               <button
//                 className="btn btn-primary login_button rounded-pill p-1 col-12"
//                 type="submit"
//               >
//                 {login ? "SignUp" : "Login"}
//               </button>
//             </div>
//           </form>
//           <div className="d-flex flex-column mt-4 mb-4 justify-content-center align-item-center cens-div">
//             <p className="justify-content-center align-item-center">
//               Or Sign Up Using
//             </p>
//             <div className="d-flex justify-content-center align-item-center cens-div">
//               <div className="m-2 circle-div bg-primary text-light">F</div>
//               <div className="m-2 circle-div bg-secondary text-light">T</div>
//               <div className="m-2 circle-div bg-danger text-light">G</div>
//             </div>
//           </div>
//           <div className="d-flex flex-column mt-4 justify-content-center align-item-center cens-div">
//             <p className="justify-content-center align-item-center">
//               Or Sign Up Using
//             </p>
//             <span className="justify-content-center align-item-center">
//               <Link to="/" className="text-primary link-underline-light">
//                 Back
//               </Link>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../firebaseConfig";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Use to toggle between login and signup
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(database, email, password);
      alert("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("invalid login creditials please check your connection");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(database, email, password);
      alert("Sign up successful. Access to dashboard activated");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("An error occurred during sign up");
    }
  };

  return (
    <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
      <div className="d-flex m-4 p-4 login-container">
        <div className="login-details d-flex m-1">
          <h1 className="fs-3 d-flex justify-content-center align-item-center">
            {isLogin ? "Login" : "SignUp"}
          </h1>
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <div>
                <label>Email</label>
                <div className="input-group flex-nowrap border-0 border-bottom">
                  <span
                    className="input-group-text text-primary bg-white border-0"
                    id="addon-wrapping"
                  >
                    @
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control border-0 border-opacity-75 shadow-none"
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <label>Password</label>
                <div className="input-group flex-nowrap border-0 border-bottom">
                  <span
                    className="input-group-text text-primary bg-white border-0"
                    id="addon-wrapping"
                  >
                    **
                  </span>
                  <input
                    name="password"
                    type="password"
                    className="form-control border-0 border-opacity-75 shadow-none"
                    placeholder="Enter your password"
                    aria-label="Password"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
              </div>
              <div className="d-flex align-items-end cen-div mt-3 mb-3">
                <p className="text-primary">Forgot password</p>
              </div>
              <div className="d-flex align-items-center cen-div mt-3 mb-3">
                <button
                  className="btn btn-primary login_button rounded-pill p-1 col-12"
                  type="submit"
                >
                  Login
                </button>
              </div>

              {/* Login form fields */}
              {/* Similar to your existing form fields for email and password */}
              {/* Login submit button */}
              {/* <button type="submit">Login</button> */}
            </form>
          ) : (
            <form onSubmit={handleSignUp}>
              {/* Sign up form fields */}
              {/* Similar to your existing form fields for email and password */}
              {/* Sign up submit button */}
              {/* <button type="submit">Sign Up</button> */}{" "}
              <div>
                <label>Email</label>
                <div className="input-group flex-nowrap border-0 border-bottom">
                  <span
                    className="input-group-text text-primary bg-white border-0"
                    id="addon-wrapping"
                  >
                    @
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control border-0 border-opacity-75 shadow-none"
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                <label>Password</label>
                <div className="input-group flex-nowrap border-0 border-bottom">
                  <span
                    className="input-group-text text-primary bg-white border-0"
                    id="addon-wrapping"
                  >
                    **
                  </span>
                  <input
                    name="password"
                    type="password"
                    className="form-control border-0 border-opacity-75 shadow-none"
                    placeholder="Enter your password"
                    aria-label="Password"
                    aria-describedby="addon-wrapping"
                    required
                  />
                </div>
              </div>
              <div className="d-flex align-items-end cen-div mt-3 mb-3">
                <p className="text-primary">Forgot password</p>
              </div>
              <div className="d-flex align-items-center cen-div mt-3 mb-3">
                <button
                  className="btn btn-primary login_button rounded-pill p-1 col-12"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          )}

          {/* Existing JSX for social media sign up and back link */}
          <div className="d-flex flex-column mt-2 mb-0 justify-content-center align-item-center cens-div">
            <p className="mb-0 justify-content-center align-item-center">
              Or 
            </p>
            <p
              className=" mt-0 col-12 d-flex mouse_pointer justify-content-end align-item-end"
              onClick={() => setIsLogin(!isLogin)}
            >
               {/* {isLogin ? "Register" : "Register"} */}
               {isLogin ? "Register" : "Login"}

            </p>
            <div className="d-flex justify-content-center align-item-center cens-div">
              <div className="m-2 circle-div bg-primary text-light">F</div>
              <div className="m-2 circle-div bg-secondary text-light">T</div>
              <div className="m-2 circle-div bg-danger text-light">G</div>
            </div>
          </div>
          <div className="d-flex flex-column mt-2 justify-content-center align-item-center cens-div">
            <p className="justify-content-center align-item-center">
              return home
            </p>
            <span className="justify-content-center align-item-center">
              <Link to="/" className="text-danger link-underline-light">
                Back
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
