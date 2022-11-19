import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row align-items-center gx-3">
          <div className="col-md-7 order-md-0 order-1">
            <div className="hero_content">
              <h1>
                Hi I'm <span className="name_char">A</span>wnon{" "}
                <span className="name_char">B</span>howmik
                <br />
                <span
                  className="typed"
                  data-typed-items="Independent Researcher, Graduate Student, Cryptographer"
                ></span>
              </h1>
              <p>
                I am a Ph.D. student at the University of Central Florida. I
                possess a keen interest in Number Theory and Cryptography. In
                addition to my scholarly pursuits, I am dedicated to mathematics
                outreach. In my opinion, it is vital that both undergraduate
                students and the general public have a greater understanding of
                what mathematics and mathematical research entail. In my
                opinion, there appears to be a significant lot of
                misunderstanding and misinformation concerning mathematics,
                particularly pure mathematics.
              </p>

              <button className="button-resume">Download Resume</button>
            </div>
          </div>
          <div className="col-md-5  order-md-1 order-0">
            <div className="hero_img">
              <img
                src="/assets/img/banner.png"
                alt="Awnon Bhowmik"
                className="img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
