import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-around my-2">
            <NavLink to="/">Book an appointment</NavLink>
            <NavLink to="/">Location</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Career</NavLink>
            <NavLink to="/">Services</NavLink>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="d-flex justify-content-center">
            <p>Site developed and maintained by Dr Anup</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
