import React from "react";
import { NavLink } from "react-router-dom";
import AboutCard from "./AboutCard";
const About = () => {
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
              <div className="row">
                <hr class="dropdown-divider" />
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/hospitalpic.jpg"
                    title="Overview"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/accredition.jpg"
                    title="Hospital Acredition"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/factsheet.jpg"
                    title="Factsheet"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/infra.jpg"
                    title="Infrastructure"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/infra.jpg"
                    title="Awards and Acheivements"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/technology.jpg"
                    title="Technology"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/message.jpg"
                    title="Founder`s Message"
                  />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <AboutCard
                    img="/resources/design/social.jpg"
                    title="Social Resposibility"
                  />
                </div>
              </div>
              <div className="row">I am footer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
