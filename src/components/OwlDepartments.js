import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlItem from "./OwlItem";
const OwlDepartments = () => {
  return (
    <>
      <div className="bg-1">
        <div className="">
          <div className="col-8 mx-auto">
            <h1 className="text-center text-uppercase fs-2 pt-3">
              Our departments
            </h1>
            <OwlCarousel
              className="owl-theme mt-4"
              items="5"
              loop
              margin={20}
              autoplay
              nav
            >
              <OwlItem
                image="/resources/departmentlogos/1.png"
                title="Anaesthesia"
              />
              <OwlItem image="/resources/departmentlogos/2.png" title="Skin" />
              <OwlItem image="/resources/departmentlogos/3.png" title="ENT" />
              <OwlItem
                image="/resources/departmentlogos/4.png"
                title="Gastro"
              />
              <OwlItem
                image="/resources/departmentlogos/5.png"
                title="Surgery"
              />
              <OwlItem
                image="/resources/departmentlogos/6.png"
                title="Obstetrics"
              />
              <OwlItem image="/resources/departmentlogos/7.png" title="IVF" />
              <OwlItem
                image="/resources/departmentlogos/8.png"
                title="Medicine"
              />
              <OwlItem
                image="/resources/departmentlogos/9.png"
                title="Nephrology"
              />
              <OwlItem
                image="/resources/departmentlogos/10.png"
                title="Urology"
              />
              <OwlItem
                image="/resources/departmentlogos/11.png"
                title="Orthopaedics"
              />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwlDepartments;
