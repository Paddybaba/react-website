import React from "react";
import { NavLink } from "react-router-dom";
import Navbar3 from "./Navbar3";
import CarouselBG from "./CarouselBG";
import Doctors from "./pages/Doctors";

const Home = () => {
  const photo = "/resources/design/hospital.png";
  return (
    <>
      <section id="header" className="d-flex align-itmes-center bor2">
        <div className="container-fluid ">
          <div className="tag-line bor2">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-8 tagline-box">
                  <h1>Welcome to</h1>
                  <h1>
                    <strong className="brand-name"> Gupta Hospital</strong>
                  </h1>
                  <h2 className="my-3">Medical services you can trust</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-background">
            <CarouselBG />
          </div>
        </div>
      </section>
      <Doctors />
    </>
  );
};

export default Home;
