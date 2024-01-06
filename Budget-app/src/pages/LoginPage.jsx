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
//     if (type == "signin") {
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
//             <form onSubmit={(e) => handleSubmit(e, login ? "login" : "signin")}>
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
//                   {login ? "login" : "signin"}
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



import { useState } from "react";
import { database } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (type === "signin") {
        await createUserWithEmailAndPassword(database, email, password);
        alert("Access to dashboard activated");
      } else if (type === "login") {
        await signInWithEmailAndPassword(database, email, password);
        alert("Login successful");
      } else {
        throw new Error("Invalid action type");
      }

      history("/dashboard");
    } catch (error) {
      if (error.code) {
        alert(error.code);
      } else {
        alert("An unexpected error occurred");
      }

      setLogin(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
      <div className="d-flex m-4 p-4 login-container">
        <div className="login-details d-flex m-1">
          <h1 className="fs-3 d-flex justify-content-center align-item-center">
            Login
          </h1>
          <form onSubmit={(e) => handleSubmit(e, login ? "login" : "signin")}>
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
                {login ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>
          <div className="d-flex flex-column mt-4 mb-4 justify-content-center align-item-center cens-div">
            <p className="justify-content-center align-item-center">
              Or Sign Up Using
            </p>
            <div className="d-flex justify-content-center align-item-center cens-div">
              <div className="m-2 circle-div bg-primary text-light">F</div>
              <div className="m-2 circle-div bg-secondary text-light">T</div>
              <div className="m-2 circle-div bg-danger text-light">G</div>
            </div>
          </div>
          <div className="d-flex flex-column mt-4 justify-content-center align-item-center cens-div">
            <p className="justify-content-center align-item-center">
              Or Sign Up Using
            </p>
            <span className="justify-content-center align-item-center">
              <Link to="/" className="text-primary link-underline-light">
                Back
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

