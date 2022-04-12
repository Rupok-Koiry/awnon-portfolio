import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1 align="center">
          <span style={{ color: "#37b3ed" }}>A</span>wnon{" "}
          <span style={{ color: "#37b3ed" }}>B</span>howmik
        </h1>
        <p align="center">
          <span
            class="typed"
            data-typed-items="Independent Researcher, Graduate Student, Cryptographer"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
