import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar-strip-top">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-md-12 mx-auto b pa-0">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <NavLink
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                  >
                    <figure>
                      <img
                        className="main-logo"
                        src="/resources/design/logoGH.jpg"
                        alt="logo"
                      />
                    </figure>
                    <h2>Gupta Hospital</h2>
                  </NavLink>

                  <div className="nav">
                    <ul className="navbar-nav flex-row ms-auto mb-lg-0">
                      <li className="nav-item">
                        <div className="navbar-labels">
                          <p>Phone : 07722-237361</p>
                          <p>Mobile: 96443-06666</p>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="navbar-labels">
                          <p>OPD: 10 am to 7 pm</p>
                          <p>24 Hours Emengency </p>
                        </div>
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
                    </ul>
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

export default Navbar1;
