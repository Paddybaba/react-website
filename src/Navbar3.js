import React from "react";
import { NavLink } from "react-router-dom";
const Navbar3 = () => {
  return (
    <>
      <div className="navbar-strip">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <NavLink className="nav-link fs-2" to="/">
              Gupta Hospital
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <img
                className="navbar-toggler-icon"
                src="/resources/design/list.png"
              />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departments
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/ivf">
                        Fertility and Test tube baby
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/medicine">
                        Medicine
                      </NavLink>
                    </li>
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    <li>
                      <NavLink className="dropdown-item" to="/gensur">
                        General and Laproscopic Surgery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Orthopaedics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Obstetrics and Gynaecology
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* ******** Doctors ********** */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Doctors
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/doctors">
                        Dr Sumit Gupta
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Dr Prabhat Gupta
                      </NavLink>
                    </li>
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Dr Aradhna Gupta
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Dr Vivek Tigga
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Dr Anup Padamwar
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* ************ TPA **************** */}
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    TPAs
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Religare
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Iffco
                      </NavLink>
                    </li>
                    {/* <li>
                      <hr className="dropdown-divider" />
                    </li> */}
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        Star Health
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/">
                        HDFC Ergo
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Contact
                  </NavLink>
                </li>
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
    </>
  );
};

export default Navbar3;
