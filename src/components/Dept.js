import React from "react";
import "../pages/pages.css";

const Dept = ({
  deptName,
  showcasePic,
  showcaseText,
  info_1_heading,
  info_1_text,
  info_1_list,
  info_2_heading,
  info_2_text,
  info_2_list,
  extra_heading,
  extra_card_pic,
  extra_card_text,
}) => {
  //   const doc = "/resources/doctors/draradhna.jpg";
  return (
    <>
      <section id="ivf" className="d-flex align-itmes-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1 className="">{deptName}</h1>
              </div>
              <div className="row mt-3">
                <div className="col-sm-6 col-lg-6">
                  <figure>
                    <img
                      className="showcase"
                      src={showcasePic}
                      alt="showcasePic"
                    />
                  </figure>
                </div>
                <div className="col-sm-6 col-lg-6">
                  <p>{showcaseText}</p>
                </div>
              </div>
              <div className="row">
                <hr className="dropdown-divider" />
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="info">
                    <h2 className="heading-1">{info_1_heading}</h2>
                    <p>{info_1_text}</p>
                    {info_1_list.split("<br>").map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                  <div className="info">
                    <h2 className="heading-1">{info_2_heading}</h2>
                    <p>{info_2_text}</p>
                    {info_2_list.split("<br>").map((item, i) => (
                      <p key={i}>{`${i + 1}. ${item}`}</p>
                    ))}
                  </div>
                </div>
                <div className="col-lg-5">
                  {extra_heading ? (
                    <div className="extra-column">
                      <h2 className="heading-2">{extra_heading}</h2>
                      <div className="d-flex doc-card-row">
                        <figure>
                          <img
                            className="consultant-1 me-3"
                            src={extra_card_pic}
                          />
                        </figure>
                        <p>{extra_card_text}</p>
                      </div>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                  ) : null}
                  {/* <div className="extra-column">
                    <h2 className="heading-2">{extra_heading}</h2>
                    <div className="d-flex doc-card-row">
                      <figure>
                        <img
                          className="consultant-1 me-3"
                          src={extra_card_pic}
                        />
                      </figure>
                      <p>{extra_card_text}</p>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                  </div> */}
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

export default Dept;
