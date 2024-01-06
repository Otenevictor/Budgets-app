// import { useEffect, useState } from "react";
// import { database, auth, provider } from "../firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Navbar from "../component/NavBar";

// const SignIn = () => {
//   const [login, setLogin] = useState(false);
//   const [value, setValue] = useState("");
//   const history = useNavigate();

//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       setValue(data.user.email);
//       localStorage.setItem("email", data.user.email);

//     });
//   };
//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   }, []);

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     if (type == "signin") {
//       signInWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, "authData");
//           history("/dashboard");
//         })
//         .catch((err) => {
//           alert(err.code);
//         });
//     } else {
//       createUserWithEmailAndPassword(database, email, password)
//         .then((data) => {
//           console.log(data, "authData");
//           history("/dashboard");
//         })
//         .catch((err) => {
//           alert(err.code);
//           setLogin(true);
//         });
//     }
//   };
//   return (
//     <>
//       <Navbar/>

//       <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
//         <div className="d-flex m-4 p-4 signin-container ">
//           <div className="login-details d-flex m-1 ">
//             <h1 className="fs-3 d-flex justify-content-center align-item-center">
//               Sign In With
//             </h1>
//             <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "login")}>
//               <div className=" d-flex flex-column mt-4 mb-4 justify-content-center align-item-center cens-div ">
//                 <div className="d-flex justify-content-center align-item-center cens-div  ">
//                     <div className="m-2 signup-circle-div bg-primary text-light d-flex justify-content-center align-item-center">
//                       <span>F</span>
//                     </div>
//                   <div>
//                   {value ? (
//                     <Dashboard />
//                   ) : (
//                     <div
//                       onClick={handleClick}
//                       className="m-2 mouse_pointer signup-circle-div bg-secondary text-light d-flex justify-content-center align-item-center"
//                     >
//                       <span>G</span>
//                     </div>
//                   )}{" "}
//                 </div>
//                 </div>
//               </div>
//               <div>
//                 <label>Username</label>
//                 <div className="input-group  flex-nowrap border-0 border-bottom">
//                   <span
//                     className="input-group-text bg-white border-0"
//                     id="addon-wrapping"
//                   >
//                     {" "}
//                     @
//                   </span>
//                   <input
//                     name="email"
//                     type="email"
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
//                     className="input-group-text bg-white border-0"
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
//                   {login ? "signin" : "login"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;


import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, auth, provider } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Dashboard from "../pages/Dashboard";

const SignIn = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;
      setEmail(userEmail);
      localStorage.setItem("email", userEmail);
    } catch (error) {
      console.error("Social login error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    try {
      if (login) {
        const data = await signInWithEmailAndPassword(database, userEmail, userPassword);
        console.log("Authentication data:", data);
      } else {
        const data = await createUserWithEmailAndPassword(database, userEmail, userPassword);
        console.log("Authentication data:", data);
      }

      history("/dashboard");
    } catch (error) {
      alert(error.code);
      setLogin(true);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  return (
    <>
    <Navbar/>
      <div className="d-flex justify-content-center align-item-center bg-primary login-main-container">
        <div className="d-flex m-4 p-4 signin-container">
          <div className="login-details d-flex m-1">
            <h1 className="fs-3 d-flex justify-content-center align-item-center">
              Sign In With
            </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex flex-column mt-4 mb-4 justify-content-center align-item-center cens-div">
                <div className="d-flex justify-content-center align-item-center cens-div">
                  <div className="m-2 signup-circle-div bg-primary text-light d-flex justify-content-center align-item-center">
                    <span>F</span>
                  </div>
                  <div>
                    {email ? (
                      <Dashboard />
                    ) : (
                      <div
                        onClick={handleClick}
                        className="m-2 mouse_pointer signup-circle-div bg-secondary text-light d-flex justify-content-center align-item-center"
                      >
                        <span>G</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="input-group flex-nowrap border-0 border-bottom">
                  <span
                    className="input-group-text bg-white border-0"
                    id="addon-wrapping"
                  >
                    {"@"}
                  </span>
                  <input
                    name="email"
                    type="email"
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
                    className="input-group-text bg-white border-0"
                    id="addon-wrapping"
                  >
                    {"**"}
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
                  {login ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

