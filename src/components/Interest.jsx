import React from "react";

const Interest = () => {
  return (
    <section id="interest" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Research Interests</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i
                className="ri-fingerprint-line"
                style={{ color: "#000000" }}
              ></i>
            </div>
            <h4 className="title">
              <span>Cryptography</span>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="las la-infinity" style={{ color: "#000000" }}></i>
            </div>
            <h4 className="title">
              <span>Number Theory</span>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="las la-dragon" style={{ color: "#000000" }}></i>
            </div>
            <h4 className="title">
              <span>Fractal Geometry</span>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="las la-calculator" style={{ color: "#000000" }}></i>
            </div>
            <h4 className="title">
              <span>Computational Mathematics</span>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i
                className="las la-project-diagram"
                style={{ color: "#000000" }}
              ></i>
            </div>
            <h4 className="title">
              <span>Mathematical Modeling</span>
            </h4>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i className="las la-terminal" style={{ color: "#000000" }}></i>
            </div>
            <h4 className="title">
              <span>Algorithm Design and Analysis</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
