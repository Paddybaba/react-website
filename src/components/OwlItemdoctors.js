import React from "react";
import "./components.css";
const OwlItemdoctors = ({ drname, degree, image }) => {
  return (
    <div
      className=" card d-flex flex-column align-items-center"
      style={{ width: "19vw" }}
    >
      <img src={image} className="card-img-top" alt="doctor" />
      <div className="card-body">
        <h5 className="card-title">{drname}</h5>
        <p className="card-text">{degree}</p>
        <a href="#" className="readmore-btn ">
          Read more
        </a>
      </div>
    </div>
  );
};

export default OwlItemdoctors;
