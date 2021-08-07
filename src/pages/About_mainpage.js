import React from "react";
import { NavLink } from "react-router-dom";
const About_mainpage = () => {
  return (
    <>
      <section id="about" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1>About Us</h1>
                <div className="col-sm-4 col-md-6 ">
                  <img
                    className="hospital-image"
                    src="/resources/design/hospitalpic.jpg"
                  />
                </div>
                <div className="col-sm-8 col-md-6 ">
                  <p>
                    <strong>Gupta Hospital</strong> has over two decades of
                    experience in the healthcare sector, and is known for
                    providing quality healthcare and valuable experience to all
                    domestic and patients from nearby cities. Our healthcare
                    offerings are supported by a team of compassionate and
                    dedicated medical professionals who have rich knowledge and
                    experience in their respective domains
                  </p>
                  <div className="our-values only-large">
                    <h4>Our Values</h4>
                    <ul>
                      <li>Transparency</li>
                      <li>Patient Safety</li>
                      <li>Patient Dignity</li>
                      <li>Socialo Resposibility</li>
                      <li>Passion for excellence</li>
                      <li>Honesty and Integrity</li>
                      <li>Teamwork</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_mainpage;
