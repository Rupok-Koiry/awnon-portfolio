import React from "react";
import About from "./components/About";
import Activity from "./components/Activity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Activity />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
