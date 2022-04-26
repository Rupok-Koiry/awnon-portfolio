import React from "react";
import About from "./components/About";
import Activity from "./components/Activity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interest from "./components/Interest";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Activity />
        <Skills />
        <Resume />
        <Interest />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
