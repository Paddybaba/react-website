import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "../components/CarouselCard";
import DoctorCard from "../components/DoctorCard";
const Doctors = () => {
  return (
    <>
      <section id="doctors" className="">
        <div className="d-flex justify-content-center pt-3">
          <h2>Our Doctors</h2>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <DoctorCard
              drname="Dr Anup Padamwar"
              degree="MBBS , MD Obstetrics & Gyanaecology"
              addQual="Fertility Specialist"
              description="s;kajfd l;ojks ;lksd;kf sdfgks ;oskdfplok sd;ofkipdso sd;oliksdopfi ds;ofgisdpo "
              image="/resources/doctors/dranup.jpg"
            />
          </Carousel.Item>
          {/* <Carousel.Item>
            <CarouselCard
              drname="Dr Anup Padamwar"
              degree="MBBS , MS Orthopaedics"
              addQual="Fellowship in Joint replacement and Trauma Surgery"
              description="s;kajfd l;ojks ;lksd;kf sdfgks ;oskdfplok sd;ofkipdso sd;oliksdopfi ds;ofgisdpo "
              image="/resources/doctors/dranup.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselCard
              drname="Dr Vivek Tigga"
              degree="MBBS , MD Medicine"
              addQual="Fellowship in Cardiology and Infectious diseases"
              description="s;kajfd l;ojks ;lksd;kf sdfgks ;oskdfplok sd;ofkipdso sd;oliksdopfi ds;ofgisdpo "
              image="/resources/doctors/drvivek.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselCard
              drname="Dr Sumit Gupta"
              degree="MBBS , MS Surgery"
              addQual="Fellowship in Laproscopic Surgery"
              description="s;kajfd l;ojks ;lksd;kf sdfgks ;oskdfplok sd;ofkipdso sd;oliksdopfi ds;ofgisdpo "
              image="/resources/doctors/drsumit.jpg"
            />
          </Carousel.Item> */}
        </Carousel>
      </section>
    </>
  );
};

export default Doctors;
