import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/servise/Service";

const homePage = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default homePage;
