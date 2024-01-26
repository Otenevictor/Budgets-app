import { Link } from "react-router-dom";
import  { useState } from "react";
import { Navbar } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from a library like react-icons

// const CustomNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <Navbar bg="dark" expand="lg">
//       <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
      
//       {/* Use your custom toggle button */}
//       <button className="custom-toggler" onClick={handleToggle}>
//         {isNavOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? "show" : ""}>
//         <Nav className="ml-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#about">About</Nav.Link>
//           <Nav.Link href="#contact">Contact</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };




const Navhome = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>   
     {/* <CustomNavbar/> */}
    <nav className="container-fluid navbar nwclass navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
        ASOV-TEC        </Link>
        <button className="custom-toggler d-lg-none" onClick={handleToggle}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>

        <Navbar.Collapse  className= {isNavOpen ? "show" : ""}  id="basic-navbar-nav" >
          <div className="ms-auto">
          <ul className="navbar-nav ms-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                AboutUs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="#">
                {" "}
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/payout">
                {" "}
                Payout
              </Link>
            </li>
          </ul>
          </div>
          <ul className="navbar-nav  ms-5 ml-5">
            <li className="nav-item ">
              <Link
                className="nav-link active ms-5 text-dark nav-link text-dark px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill "
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item ms-5 ">
              <Link
                className="nav-link text-dark px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill"
                to="/signup"
              >
                Signup
              </Link>
            </li>
          
          </ul>
        </Navbar.Collapse >
      </div>
    </nav>
    </>

  );
};

export default Navhome;
