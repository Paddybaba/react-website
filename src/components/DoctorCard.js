import React from "react";
import "./card.css";

const DoctorCard = ({ drname, degree, addQual, description, image }) => {
  return (
    <div className="cards">
      <div className="cards-item">
        <div className="card">
          <div className="card_image">
            <img src="/resources/doctors/dranup.jpg" />
          </div>
          <div className="card_content mt-auto">
            <h2 className="doc-name">Dr Anup Padamwar</h2>
            <h3 className="qualifications">MBBS, MS Orthopaedics</h3>
            <p className="card_text">
              Fellow Joint replacement and trauma surgery
            </p>
            <button type="button" className="">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-8 mx-auto">
    //       <div className="doc-card mt-3">
    //         <div className="box1 b2">
    //           <div className="box2">
    //             <div className="doc-pic">
    //               <img src={image}></img>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-6 box1 captions">
    //           <h3>{drname}</h3>
    //           <h4>{degree}</h4>
    //           <h4>{addQual}</h4>
    //           {/* <p>{description}</p> */}

    //           <button type="button" class="btn btn-outline-primary">
    //             Read More
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DoctorCard;
