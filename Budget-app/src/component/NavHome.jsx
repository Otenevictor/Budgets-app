import { Link } from "react-router-dom";

const Navhome = () => {
  return (
    <nav className="container-fluid navbar nwclass navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          ASOV-1
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
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
          </ul>
          <ul className="navbar-nav  ms-5 ml-5">
            <li className="nav-item ">
              <Link
                className="nav-link active ms-5 text-dark "
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
        </div>
      </div>
    </nav>
  );
};

export default Navhome;
