import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlItemdoctors from "./OwlItemdoctors";
const OwlDoctors = () => {
  return (
    <>
      <div className="owl-doctors">
        <div className="">
          <div className="col-9 mx-auto">
            <h1 className="text-center text-uppercase pt-3">Our Doctors</h1>
            <OwlCarousel
              className="owl-theme mt-4 "
              items="3"
              loop
              margin={20}
              // autoplay
              nav
            >
              <OwlItemdoctors
                drname="Aradhna Gupta"
                degree="MBBS, MD Gynae"
                image="/resources/doctors/draradhna.jpg"
              />
              <OwlItemdoctors
                drname="Sumit Gupta"
                degree="MBBS, MS Surgery"
                image="/resources/doctors/drsumit.jpg"
              />
              <OwlItemdoctors
                drname="Anup Padamwar"
                degree="MBBS, MS Ortho"
                image="/resources/doctors/dranup.jpg"
              />
              <OwlItemdoctors
                drname="Vivek Tigga"
                degree="MBBS, MD Medicine"
                image="/resources/doctors/drvivek.jpg"
              />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwlDoctors;
