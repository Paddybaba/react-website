import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselBG = () => {
  const slides = ["/images/slides/slide2.jpg", "/images/slides/slide3.jpg"];
  const img1 =
    "https://images.unsplash.com/photo-1621212412889-9b35ef5dc5bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1624671284114-0bbb2c847634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80";
  const img3 =
    "https://images.unsplash.com/photo-1626115114396-83ae1da5584f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80";
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

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slides/slide1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Third slide" />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselBG;
