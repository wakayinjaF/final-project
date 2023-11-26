import React from "react";
import Value from "../components/Value/Value";
import Companies from "../components/Companies/Companies";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Residencies from "../components/Residencies/Residencies";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
