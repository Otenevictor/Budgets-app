import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../assets/css/img.css";
import gsir4 from "../assets/images/gsir4.png";
import Navbar from "../component/NavBar";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 16;

function ImageSearch() {
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        setErrorMsg("");
        setLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${
            searchInput.current.value
          }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(
        "sorry image can't be reached check your server connection, and try again later "
      );
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  return (
    <>
    <Navbar/>
      <div className="container-fluid " id="mm-m">
        <div className="row flex-nowrap">
          <div className=" d-flex-column col-md-3 col-xl-2 col-sm-4 px-sm-4 px-0  bg-indigo sidebar-img-bg">
            <div className="d-flex container-fluid  flex-column align-items-start align-items-sm-start px-1 pt-1 text-white min-vh-100">
              <a
                href="#"
                className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-dark text-decoration-none"
              >
                <span className=" md-fs-3 sm-fs-3 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills   container-fluid align-items-sm-start filters left-side-ba"
                id="menu"
              >
                <li className="nav-item  container-fluid text-start">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-6 bi-house">
                      <span
                        onClick={() => handleSelection("education")}
                        className="ms-1 d-none d-sm-inline thover"
                      >
                        Education
                      </span>
                    </i>
                  </a>
                </li>
                <li className="nav-item text-start container-fluid">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("cars")}
                        className="ms-1 d-none d-sm-inline thover"
                      >
                        Car
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("nature")}
                        className="ms-0 d-none d-sm-inline thover"
                      >
                        Nature
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("agriculture")}
                        className="ms-1 d-none d-sm-inline thover"
                      >
                        Agriculture
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("cats")}
                        className="ms-1 d-none d-sm-inline text-start thover"
                      >
                        Cat
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("cities")}
                        className="ms-1 d-none d-sm-inline text-start thover"
                      >
                        City
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("technology")}
                        className="ms-1 d-none d-sm-inline text-start thover"
                      >
                        Technology
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("vacation")}
                        className="ms-1 d-none d-sm-inline"
                      >
                        Vacation
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("birds")}
                        className="ms-1 d-none d-sm-inline thover"
                      >
                        Bird
                      </span>
                    </i>
                  </a>
                </li>{" "}
                <li className="nav-item container-fluid text-start">
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-6 bi-people">
                      <span
                        onClick={() => handleSelection("shoes")}
                        className="ms-1 d-none d-sm-inline thover"
                      >
                        Shoe
                      </span>
                    </i>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={gsir4}
                    alt="hugenerd"
                    width="30"
                    height="30"
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
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
                <p className="ml-3 text-dark">congratulations</p>
              </div>
            </div>
          </div>
          <div className="mobile-side-bar bg-success ">
            <h6 className="mt-3 text-light p-3 bg-dark">IMG-MENU</h6>
            <div className="filters ">
              <div
                className="mobile-handle"
                onClick={() => handleSelection("education")}
              >
                Education
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("cars")}
              >
                Cars
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("nature")}
              >
                Nature
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("agriculture")}
              >
                Agricultural
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("cats")}
              >
                Cats
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("cities")}
              >
                City
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("Technology")}
              >
                Technology
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("vacation")}
              >
                Vacation
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("birds")}
              >
                Bird
              </div>
              <div
                className="mobile-handle"
                onClick={() => handleSelection("shoes")}
              >
                Shoes
              </div>{" "}
            </div>
          </div>
          <div className="col py-3 justify-content-center align-item-center">
            <h1 className="title">Image Search</h1>
            <p className="d-flex justify-content-center align-item-center">
              <em>Explore & Discover more photos </em>
            </p>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <div className="d-flex search-section">
              <div className="search-section">
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Type something to search..."
                    className="search-input border border-primary p-2 border-opacity-75 shadow-none"
                    ref={searchInput}
                  />
                </Form>
              </div>
              <Button onClick={handleSearch} className="btn btn-primary">
                check
              </Button>
            </div>
            {loading ? (
              <p className="loading">Loading.....</p>
            ) : (
              <>
              <div className="search-img">
                <div className="images">
                  {images.map((image) => (
                    <img
                      key={image.id}
                      src={image.urls.small}
                      alt={image.alt_description}
                      className="image"
                    />
                  ))}
                </div>
                </div>
                <div className="buttons">
                  {page > 1 && (
                    <Button onClick={() => setPage(page - 1)}>Previous</Button>
                  )}
                  {page < totalPages && (
                    <Button onClick={() => setPage(page + 1)}>Next</Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSearch;
