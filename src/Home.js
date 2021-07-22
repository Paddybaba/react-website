import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "./logo.svg";
// import Carousel2 from "./Carousel2";
import CarouselBG from "./CarouselBG";

const Home = () => {
  const photo = "/resources/design/hospital.png";
  return (
    <>
      <section id="header" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="carousel-background">
            <CarouselBG />
          </div>
          <div className="row b">
            <div className="col-10 mx-auto b">
              <div className="row">
                <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 b">
                  <h1>Welcome to</h1>
                  <h1>
                    <strong className="brand-name"> Gupta Hospital</strong>
                  </h1>
                  <h2 className="my-3">Medical services you can trust</h2>
                  {/* <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div> */}
                </div>
                {/* <div className="col-lg-6 order-1 order-lg-2 header-img b">
                  <img
                    src={photo}
                    className="image-fluid animated"
                    alt="home-image"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
