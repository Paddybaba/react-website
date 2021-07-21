import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar2 = () => {
  return (
    <>
      <div className="navbar-strip">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <h3>Collapsed</h3>
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/tpa"
                        >
                          Corporate and TPAs
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="doctors"
                        >
                          Our Doctors
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/dept"
                        >
                          Departments
                        </NavLink>
                      </li>
                      {/* <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li> */}
                      {/* <li className="nav-item">
                <NavLink
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </NavLink>
              </li> */}
                    </ul>
                    {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
