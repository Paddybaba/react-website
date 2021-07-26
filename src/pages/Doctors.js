import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "../components/CarouselCard";
const Doctors = () => {
  return (
    <>
      <section id="doctors" className="">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="b1 row">
              <div className="b2 block-1-of-3"></div>
              <div className="b2 block-2-of-3"></div>
            </div>
          </Carousel.Item>

          {/* <Carousel.Item>
            <figure className="">
              <img
                className="d-block col-lg-6"
                src="/resources/doctors/drsumit.jpg"
                alt="First slide"
              />
            </figure>
            <div className="caption col-lg-6">
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <figure>
              <img
                className="d-block "
                src="/resources/doctors/drvivek.jpg"
                alt="First slide"
              />
            </figure>{" "}
            <div className="caption">
              <Carousel.Caption>
                <div className="caption-text">
                  <h3>Dr Vivek Tigga</h3>
                  <h4>M.B.B.S. M.D. Medicine</h4>
                  <p>
                    sadopa oiuewo oiuewoiru oiuoj lijdsoifj.,voiu ioweuy
                    sdlifuoiewurfo sdliofu98weurkjldkj sdiofu[0we9urlmewifou
                    fo;iweur{" "}
                  </p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <figure>
              <img
                className="d-block "
                src="/resources/doctors/dranup.jpg"
                alt="First slide"
              />
            </figure>{" "}
            <div className="caption">
              <Carousel.Caption>
                <div className="caption-text">
                  <h3>Dr Anup Padamwar</h3>
                  <h4>M.B.B.S. M.S. Orthopaedics</h4>
                  <p>
                    ljkfposw ;oie ;oipoipoiew ;woeripoi w;eiorpo sd;iofpoi
                    weroiufp9kf;lsi sdfljsdpofkpokisd flsdkjfoisjdopisdopf;
                    msdofuopsdif sdflijuoidsuf sdflusdoifuoewjr
                    dsflksudfopmsdflkusdiouf{" "}
                  </p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item> */}
        </Carousel>
      </section>
    </>
  );
};

export default Doctors;
