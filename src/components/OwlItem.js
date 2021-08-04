import React from "react";
import "./components.css";
const OwlItem = ({ image, title }) => {
  return (
    <div className="item owl-item-container">
      <div className="dept-logo">
        <img src={image} alt="medicine"></img>
      </div>
      <div className="d-flex justify-content-center">
        <h4 className="owl-item-title">{title}</h4>
      </div>
    </div>
  );
};

export default OwlItem;
