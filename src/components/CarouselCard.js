import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../pages/pages.css";

const CarouselCard = () => {
  return (
    <Carousel.Item>
      <div className="b1">
        <div className="col-lg-6 bor3">
          <figure>
            <img
              className="d-block "
              src="/resources/doctors/drsumit.jpg"
              alt="First slide"
            />
          </figure>
        </div>
        <div className="col-lg-6 bor3">
          <Carousel.Caption>
            <div className="caption-text">
              <h3>Dr Sumit Gupta</h3>
              <h4>MBBS, MS Gen. Surgery</h4>
              <p>
                fljsdalk lsfiuop opopopisdfp poiwek ds;of, pok opk dssfljsdf
                sdlkfjsdlkjf dslkujfldksjf sdjfsdlkfj sdlopjflkj p9890mm lkjdsfm{" "}
                <br /> iuoiuew oiuoeupp oiu oiueowutij lkeotu,oidfsu <br />
                oiuoiuwe kihyiyjusdfuoiuew oiueo io
              </p>
            </div>
          </Carousel.Caption>
        </div>
      </div>

      {/* <div className="caption">
              <Carousel.Caption>
                <div className="caption-text">
                  <h3>Dr Sumit Gupta</h3>
                  <h4>MBBS, MS Gen. Surgery</h4>
                  <p>
                    fljsdalk lsfiuop opopopisdfp poiwek ds;of, pok opk dssfljsdf
                    sdlkfjsdlkjf dslkujfldksjf sdjfsdlkfj sdlopjflkj p9890mm
                    lkjdsfm <br /> iuoiuew oiuoeupp oiu oiueowutij lkeotu,oidfsu{" "}
                    <br />
                    oiuoiuwe kihyiyjusdfuoiuew oiueo io
                  </p>
                </div>
              </Carousel.Caption>
            </div> */}
    </Carousel.Item>
  );
};

export default CarouselCard;
