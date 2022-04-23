import React from "react";

const Skills = () => {
  return (
    <section className="section section-blank" id="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="tabs skill-resume-tabs">
              <a
                className="skill_tab active"
                href="/"
                data-target="#programing"
              >
                <h4>Programing Languages</h4>
              </a>
              <a className="skill_tab" href="/" data-target="#mathematical">
                <h4>Mathematical Packages</h4>
              </a>
              <a className="skill_tab" href="/" data-target="#typesetting">
                <h4>Typesetting Software</h4>
              </a>
              <a className="skill_tab" href="/" data-target="#image">
                <h4>Image Processing Software</h4>
              </a>
              <a className="skill_tab" href="/" data-target="#modeling">
                <h4>3D Modeling And Animation Package</h4>
              </a>
              <a className="skill_tab" href="/" data-target="#gui">
                <h4>GUI Framework</h4>
              </a>
            </div>
            <div className="skill_tab-content" id="programing">
              <div className="skill_tab-background">
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      src="/assets/logo/Programming/C.png"
                      className="img-fluid skill_image"
                      alt="C"
                    />
                    <img
                      src="/assets/logo/Programming/C++.png"
                      className="img-fluid skill_image"
                      alt="C++"
                    />
                    <img
                      src="/assets/logo/Programming/python.png"
                      className="img-fluid skill_image"
                      alt="Python"
                    />
                    <img
                      src="/assets/logo/Programming/Fortran_logo.svg"
                      className="img-fluid skill_image"
                      alt="Fortran"
                    />
                    <img
                      src="/assets/logo/Programming/mySql.png"
                      className="img-fluid skill_image"
                      alt="MySql"
                    />
                    <img
                      src="/assets/logo/Programming/MASM.png"
                      className="img-fluid skill_image"
                      alt="MASM"
                    />
                    <img
                      src="/assets/logo/Programming/html5.png"
                      className="img-fluid skill_image"
                      alt="HTML5"
                    />
                    <img
                      src="/assets/logo/Programming/CSS3_logo.png"
                      className="img-fluid skill_image"
                      alt="CSS3"
                    />
                    <img
                      src="/assets/logo/Programming/javascript-39417.png"
                      className="img-fluid skill_image"
                      alt="JavaScript"
                    />
                    <img
                      src="/assets/logo/Programming/bootstrap-logo.svg"
                      className="img-fluid skill_image"
                      alt="Bootstrap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="skill_tab-content hidden" id="mathematical">
              <div className="skill_tab-background">
                <div className="row">
                  <div className="col-12 text-center">
                    <img
                      src="/assets/logo/MathSoft/mathematica.svg"
                      className="img-fluid skill_image"
                      alt="MatheMatica"
                    />
                    <img
                      src="https://logos-download.com/wp-content/uploads/2021/01/Maplesoft_Logo.png"
                      className="img-fluid skill_image"
                      alt="MapleSoft"
                    />
                    <img
                      src="/assets/logo/MathSoft/Matlab_Logo.png"
                      className="img-fluid skill_image"
                      alt="MatLab"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill_tab-content hidden" id="typesetting">
            <div className="skill_tab-background">
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src="/assets/logo/Typesetting/LaTeX_project_logo_bird.svg"
                    className="img-fluid"
                    style={{
                      height: "75px",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                    alt="Latex"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="skill_tab-content hidden" id="image">
            <div className="skill_tab-background">
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src="/assets/logo/ImSoft/Adobe_Photoshop_CC_icon.svg"
                    className="img-fluid skill_image"
                    alt="Adobe Photoshop"
                  />
                  <img
                    src="/assets/logo/ImSoft/Gimp.png"
                    className="img-fluid skill_image"
                    alt="Gimp"
                  />
                  <img
                    src="/assets/logo/ImSoft/Inkscape_Logo.svg.png"
                    className="img-fluid skill_image"
                    alt="InkScape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="skill_tab-content hidden" id="modeling">
            <div className="skill_tab-background">
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src="/assets/logo/3D/3ds-max-logo.png"
                    className="img-fluid skill_image"
                    alt="3ds-Max"
                  />
                  <img
                    src="/assets/logo/3D/mudbox.svg"
                    className="img-fluid skill_image"
                    alt="MudBox"
                  />
                  <img
                    src="/assets/logo/3D/SketchUp.png"
                    className="img-fluid skill_image"
                    alt="SketchUp"
                  />
                  <img
                    src="/assets/logo/3D/blender_logo.png"
                    className="img-fluid skill_image"
                    alt="Blender"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="skill_tab-content hidden" id="gui">
            <div className="skill_tab-background">
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src="/assets/logo/GUI/tkinter.png"
                    className="img-fluid skill_image"
                    alt="tKinter"
                  />
                  <img
                    src="/assets/logo/GUI/Qt_logo_2016.svg"
                    className="img-fluid skill_image"
                    alt="Qt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
