import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlItemdoctors from "./OwlItemdoctors";
const OwlDoctors = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className="col-8 mx-auto">
            <OwlCarousel
              className="owl-theme mt-4"
              items="3"
              loop
              margin={20}
              // autoplay
              nav
            >
              <OwlItemdoctors
                drname="Anup Padamwar"
                degree="MBBS, MS Ortho"
                image="/resources/doctors/dranup.jpg"
              />
              <OwlItemdoctors
                drname="Anup Padamwar"
                degree="MBBS, MS Ortho"
                image="/resources/doctors/dranup.jpg"
              />
              <OwlItemdoctors
                drname="Anup Padamwar"
                degree="MBBS, MS Ortho"
                image="/resources/doctors/dranup.jpg"
              />
              <OwlItemdoctors
                drname="Anup Padamwar"
                degree="MBBS, MS Ortho"
                image="/resources/doctors/dranup.jpg"
              />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwlDoctors;
