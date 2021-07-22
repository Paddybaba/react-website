import React from "react";
import { NavLink } from "react-router-dom";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <>
      <section id="about" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="row bor">
            <div className="col-10 mx-auto b">
              <div className="row bor1">
                <h1>About Us (Photo and Text)</h1>
                <div className="col-sm-4 col-md-6 ">
                  <img src="/resources/design/hospitalpic.jpg" />
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
                <h1>Row 1 with 4 cards</h1>
                <div className="col-lg-3 col-sm-6 bor3">
                  <AboutCard />
                </div>
                <div className="col-lg-3 col-sm-6 bor3">
                  <AboutCard />
                </div>
                <div className="col-lg-3 col-sm-6 bor3">
                  <AboutCard />
                </div>
                <div className="col-lg-3 col-sm-6 bor3">
                  <AboutCard />
                </div>
              </div>

              {/* <div className="row">
                <h1>Row 1 with 4 cards</h1>
                <div className="col-lg-3 col-sm-6">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/hospitalpic.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Overview
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/social.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Mission and Vision
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/factsheet.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Factsheet
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 ">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/technology.jpg"
                        class="card-img-top card-image"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Advanced Technology
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <h1>Row 2 with 4 cards</h1>
                <div className="col-lg-3 col-sm-6">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/infra.jpg"
                        class="card-img-top card-image"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Infrastructure
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/message.jpg"
                        class="card-img-top card-image"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Founder`s Message
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/accredition.jpg"
                        class="card-img-top card-image"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Hospital Accreditions
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div class="card" style={{ width: "17rem" }}>
                    <div className="card-image">
                      <img
                        src="/resources/design/hospitalpic.jpg"
                        class="card-img-top card-image"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <NavLink to="/" class="btn btn-primary">
                        Achievments and Awards
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row">I am footer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
