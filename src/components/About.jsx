import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About </h2>
        </div>
        <div className="row about-row align-items-center">
          <div className="col-lg-4 text-center" data-aos="fade-right">
            <img src="/assets/img/about.webp" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4  content" data-aos="fade-left">
            <h3>Mathematics Instructor &amp; Cryptography Enthusiast.</h3>
            <div className="row">
              <p align="justify">
                {" "}
                I am a Ph.D. student at the University of Central Florida. I
                possess a keen interest in Number Theory and Cryptography. In
                addition to my scholarly pursuits, I am dedicated to mathematics
                outreach. In my opinion, it is vital that both undergraduate
                students and the general public have a greater understanding of
                what mathematics and mathematical research entail. In my
                opinion, there appears to be a significant lot of
                misunderstanding and misinformation concerning mathematics,
                particularly pure mathematics.{" "}
              </p>
              <p align="justify">
                {" "}
                Currently serving as a substitute instructor in the New York
                City Department of Education, I am seeking a position in an
                industry or organization where I can apply my mathematical
                knowledge and my analytical/problem-solving abilities. My
                passion has expanded to computers, and attempting to connect the
                two has been a major part of my life in recent years. I taught
                myself to program in a variety of languages using books and
                other available resources, beginning with QBasic, Pascal, and
                FORTRAN and on to newer languages like C++ and Python. This has
                enabled me to work on a variety of mathematical modeling and
                scientific computing projects. Moreover, during my undergraduate
                studies, I have augmented my mathematical studies with courses
                in computer science and I am interested in finding a position
                where I can combine theoretical mathematics with topics in
                computer science, especially security.{" "}
              </p>
              <p align="justify">
                My current research focuses on building entirely new as well as
                hybrid cryptography protocols that are heavily based on concepts
                of number theory. I am also interested in computational
                mathematics related to various topics such as numerical analysis
                and simulation techniques. Apart from this, I am highly
                interested in exploring Mathematical Modeling and Fractal
                geometry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
