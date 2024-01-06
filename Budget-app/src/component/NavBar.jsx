import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from a library like react-icons
// import gsir4 from "../assets/images/gsir4.png";

const NavbarDashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const history = useNavigate();
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val);
      history("/");
    });
  };

  return (
    <nav className="container-fluid navbar nwclass navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary ms-5" to="/dashboard">
          ASOV-TEC DASHBOARD
        </Link>
        <button className="custom-toggler d-lg-none" onClick={handleToggle}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Navbar.Collapse
          className={isNavOpen ? "show" : ""}
          id="basic-navbar-nav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              ></Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/urlpage"
              >
                MyURLs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/qrcode">
                QRcode
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/imagesearch">
                SearchImage
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/todolist">
                ToDoList
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark " to="#">
                {" "}
                FAQs
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav  ms-auto  ml-5">
            {/* <li className="nav-item ">
              <Link
                className="nav-link active ms-5 text-dark "
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li> */}
            {/* <li className="nav-item ms-5 mt-3">
              <Link
                className="nav-link text-dark p-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill "
                to="/dashboard"
              >
                TryforFree
              </Link>
            </li> */}
            {/* <li className="nav-item ms-5">
              <Link
                className="nav-link text-dark px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill"
                to="/signup"
              >
                Signup
              </Link>
            </li> */}
            <li className="nav-item ms-auto">
              <Link
                onClick={handleClick}
                className="nav-link text-dark px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill"
              >
                signout
              </Link>
            </li>
            {/* <div className="dropdown ">
                <a
                  href="#"
                  className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={gsir4}
                    alt="profile"
                    width="20"
                    height="20"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">user</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link   onClick={handleClick} className="dropdown-item" href="#">
                      Sign out
                  </Link>
                  </li>
                </ul>
              </div> */}
          </ul>
        </Navbar.Collapse>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
