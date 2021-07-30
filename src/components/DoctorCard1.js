import React from "react";
import "./card.css";

const DoctorCard1 = ({ drname, degree, addQual, description, image }) => {
  return (
    <div className="cards">
      <div className="cards-item">
        <div className="card">
          <div className="card_image">
            <img src={image} />
          </div>
          <div className="card_content mt-auto">
            <h2 className="doc-name">{drname}</h2>
            <h3 className="qualifications">{degree}</h3>
            <p className="card_text">{addQual}</p>
            <p className="card_text">{description}</p>
            <button type="button" className="">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard1;
