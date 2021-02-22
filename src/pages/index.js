import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "../ContactMe";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Skills />
      <InfoSection {...homeObjTwo} />
      <Projects />
      <ContactMe />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
