import React from "react";

const Hero2 = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center gx-3">
          <div className="col-md-7 order-md-0 order-1">
            <div className="banner_content">
              <h1>
                Hi I'm <span className="name-first">A</span>wnon
                <span className="name-second">B</span>howmik
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
            <div className="banner_img">
              <img
                src="https://rupok-koiry-portfolio.netlify.app/assets/images/slider/banner-01.png"
                alt="Awnon Bhowmik"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
