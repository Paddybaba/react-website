import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselBG = () => {
  const slides = [
    "/images/slides/slide2.jpg",
    "/images/slides/slide3.jpg",
    "/images/slides/slide4.jpg",
  ];

  return (
    <Carousel fade interval={5000} controls={false}>
      {slides.map((item) => {
        return (
          <Carousel.Item>
            {/* <div className="darken"></div> */}
            <img className="d-block w-100" src={item} alt="" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselBG;
