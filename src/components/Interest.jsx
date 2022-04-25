import React from "react";

const Interest = () => {
  return (
    <section className="interests " id="interest">
      <div className="container">
        <div className="section-title">
          <h2>Research Interests</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0 ">
            <div className="icon-box">
              <i
                className="ri-fingerprint-line"
                style={{ color: "#ffbb2c" }}
              ></i>
              <h3>Cryptography</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="las la-infinity" style={{ color: "#5578ff" }}></i>
              <h3>Number Theory</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="las la-dragon" style={{ color: "#e80368" }}></i>
              <h3>Fractal Geometry</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 ">
            <div className="icon-box">
              <i className="las la-calculator" style={{ color: "#e361ff" }}></i>
              <h3>Computational Mathematics</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="icon-box">
              <i
                className="las la-project-diagram"
                style={{ color: "#18D26E" }}
              ></i>
              <h3>Mathematical Modeling</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="icon-box">
              <i className="las la-terminal" style={{ color: "#ffa76e" }}></i>
              <h3>Algorithm Design and Analysis</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
