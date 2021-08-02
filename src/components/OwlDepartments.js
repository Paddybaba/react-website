import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlDepartments = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="col-8 mx-auto">
            <OwlCarousel className="owl-theme" items="5" loop margin={20} nav>
              <div className="item"></div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="dept-logo">
                  <img
                    src="/resources/departmentlogos/internal-medicine-icon.png"
                    alt="medicine"
                  ></img>
                </div>
              </div>
            </OwlCarousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default OwlDepartments;
