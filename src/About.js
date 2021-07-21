import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="row bor">
            <div className="col-10 mx-auto b">
              <div className="row bor1">
                <h1>About Us (Photo and Text)</h1>
                <div className="col-sm-4 col-md-6 ">
                  <img src="/resources/design/hospitalpic.jpg" />
                </div>
                <div className="col-sm-8 col-md-6 ">
                  <p>
                    <strong>Gupta Hospital</strong> has over two decades of
                    experience in the healthcare sector, and is known for
                    providing quality healthcare and valuable experience to all
                    domestic and patients from nearby cities. Our healthcare
                    offerings are supported by a team of compassionate and
                    dedicated medical professionals who have rich knowledge and
                    experience in their respective domains
                  </p>
                </div>
              </div>
              <div className="row bor1">
                <hr />
                line
              </div>
              <div className="row bor1">
                <h1>Row 1 with 4 cards</h1>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
              </div>
              <div className="row bor1">
                <h1>Row 2 with 4 cards</h1>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
                <div className="col-lg-3 col-sm-6 bor3"></div>
              </div>
              <div className="row">I am footer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
