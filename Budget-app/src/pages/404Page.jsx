import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="d-flex mt-4 flex-column justify-content-center align-items-center items-center">
      <h1 className="fs-1">404</h1>
      <p className="fs-2">Oops! Page not found.</p>
      <Link to="/" className="mt-8 py-3 fs-2 link-underline-light">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
