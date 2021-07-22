import React from "react";
import { NavLink } from "react-router-dom";

const AboutCard = ({ img, title }) => {
  return (
    <>
      <div className="abt-card">
        <figure>
          <img src={img} />
        </figure>
        <NavLink className="card-btn" to="/">
          {title}
        </NavLink>
      </div>
    </>
  );
};

export default AboutCard;
