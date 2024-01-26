// import Link from "react-router-dom"

const SideNav=() => {
    return (
      <>
      <div className=" ">
      <div className="col-md-12 mr-0  bg-black container">
            {/* <div className=" d-flex-column col-md-3 col-xl-2 col-sm-4 px-sm-4 px-0  bg-dark text-light mr-0"> */}
              <div className="d-flex container-fluid  bg-black flex-column px-2 pt-4 pb-4 mr-0 text-white max-vh-100">
                <div className="dropdown pb-4">
                  <span className="shap_menu "></span>
                  <a
                    href="#"
                    className="d-flex  align-items-center text-light text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className=" d-sm-inline mx-1">Nishyan</span>
                  </a>
                  <a href="#" className="text-white">
                    visit store
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
                </div>
                <ul
                  className="nav nav-pills text-light   container-fluid align-items-sm-start filters left-side-ba"
                  id="menu"
                >
                  <li className="nav-item text-light  container-fluid text-start">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-6 bi-house text-light">
                        <span className="ms-1 d-none d-sm-inline thover">
                          Home
                        </span>
                      </i>
                    </a>
                  </li>
                  <li className="nav-item text-start container-fluid">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline thover">
                          Orders
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-0 d-none d-sm-inline thover">
                          Product
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline thover">
                          Delivery
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline text-start thover">
                          Marketing
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1  d-none d-sm-inline text-start thover">
                          Analytics
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none  d-sm-inline text-start thover">
                          Payouts
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline">
                          Discounts
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 text-light bi-people text-light">
                        victor
                        <span className="ms-1 d-none d-sm-inline thover">
                          Audience
                        </span>
                      </i>
                    </a>
                  </li>{" "}
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline thover">
                          Appearance
                        </span>
                      </i>
                    </a>
                  </li>
                  <li className="nav-item container-fluid text-start">
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-6 bi-people text-light">
                        <span className="ms-1 d-none d-sm-inline thover">
                          Plugins
                        </span>
                      </i>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="d-flex ">
                  <i className="fs-6 bi-people text-light">
                    <span className="ms-1 d-none d-sm-inline thover">
                      image
                    </span>
                  </i>
                  <div className=" d-flex flex-column">
                    <span> Available credits</span>
                    <span> 222.10</span>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>

        </div>
        </>
    );
  };
  
  export default SideNav;
  