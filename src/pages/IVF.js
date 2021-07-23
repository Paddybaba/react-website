import React from "react";
import "../pages/pages.css";

const IVF = () => {
  const doc = "/resources/doctors/draradhna.jpg";
  return (
    <>
      <section id="ivf" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1 className="">Fertility and Test-tube baby clinic</h1>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6 col-lg-6">
                  <figure>
                    <img className="showcase" src="/resources/design/ivf.jpg" />
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <p>
                    Our aim at <strong>Gupta Hospital</strong> is to offer
                    excellence, and the only way to achieve it in the field of
                    IVF is by individualising the treatment options. Our goal is
                    to listen to the couple, thoroughly evaluate them, and only
                    then, meticulously treat them. Our team of IVF specialists
                    provides assisted reproduction support to couples, thus
                    helping them overcome infertility and reproduction
                    disorders.
                  </p>
                </div>
              </div>
              <div className="row">
                <hr className="dropdown-divider" />
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="info">
                    <h2 className="heading-1">Test-tube Baby Center</h2>
                    <p>
                      The skill and experience of our team of leading experts
                      has ensured that the IVF Clinic/Center is at the forefront
                      of clinical excellence. Our IVF specialists offer
                      customized IVF treatments that are tailored based
                      depending upon the couple’s psychological and social
                      background. The techniques in the laboratory are being
                      continuously updated to include equipment for handling
                      gametes, freezing sperms, and embryos, and microinjection.
                      We have highly accomplished embryologists and a
                      considerable amount of time and effort has been invested
                      in the Laboratory, in order to maintain the highest
                      possible standards.
                    </p>
                  </div>
                  <div className="info">
                    <h2 className="heading-1">What is IVF ?</h2>
                    <p>
                      In vitro fertilization (IVF) is a procedure used to treat
                      fertility problems and provide assistance with the
                      conception of a child. During in vitro fertilization,
                      mature eggs are retrieved from the ovaries of the woman
                      and fertilized by sperm in a lab. Then the fertilized egg
                      (embryo) or eggs are implanted in the uterus. One cycle of
                      in vitro fertilization takes about two to three weeks. In
                      vitro fertilization is the most effective form of assisted
                      reproductive technology (ART). The procedure can be done
                      using your own eggs and your partner's sperm, donor eggs,
                      donor sperm or donor embryos. In some cases, a gestational
                      surrogate - a woman who has your embryo implanted in her
                      uterus - might be used.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 bor1">
                  <div className="">
                    <h2 className="heading-2">Our consultants</h2>
                    <div className="d-flex doc-card-row">
                      <figure>
                        <img
                          className="consultant-1 me-3"
                          src="/resources/doctors/draradhna.jpg"
                        />
                      </figure>
                      <p>
                        Dr Aradhna Gupta <br /> M.B.B.S. , D.G.O. <br />{" "}
                        Infertility Specialist
                      </p>
                    </div>
                    <div className="bor2"></div>
                    <div className="bor2"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <hr className="dropdown-divider" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IVF;
