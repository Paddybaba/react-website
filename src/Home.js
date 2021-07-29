import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "./logo.svg";
// import Carousel2 from "./Carousel2";
import CarouselBG from "./CarouselBG";

const Home = () => {
  const photo = "/resources/design/hospital.png";
  return (
    <>
      <section id="header" className="d-flex align-itmes-center bor2">
        <div className="container-fluid nav-bg">
          <div className="carousel-background bor1">
            <CarouselBG />
          </div>
          <div className="row tag-line">
            <div className="col-10 mx-auto bor1">
              <div className="row">
                <div className="col-md-8">
                  <h1>Welcome to</h1>
                  <h1>
                    <strong className="brand-name"> Gupta Hospital</strong>
                  </h1>
                  <h2 className="my-3">Medical services you can trust</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
