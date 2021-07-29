import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "../pages/pages.css";

const CarouselCard = ({ drname, degree, addQual, description, image }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row mt-3">
            <div className="col-lg-6 box1 b2">
              <div className="box2">
                <div className="doc-pic">
                  <img src={image}></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 box1 captions">
              <h3>{drname}</h3>
              <h4>{degree}</h4>
              <h4>{addQual}</h4>
              {/* <p>{description}</p> */}

              <button type="button" class="btn btn-outline-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
