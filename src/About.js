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
                <div className="col-6 bor2"></div>
                <div className="col-6 bor2"></div>
              </div>
              <div className="row bor1">
                <hr />
                line
              </div>
              <div className="row bor1">
                <h1>Row 1 with 4 cards</h1>
              </div>
              <div className="row bor1">
                <h1>Row 2 with 4 cards</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
