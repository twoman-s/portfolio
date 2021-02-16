import React, { useState } from "react";
import Content from "../components/Content";
import { contentObj1, contentObj2 } from "../components/Content/Data";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <Content {...contentObj1} />
      <Content {...contentObj2} />
    </>
  );
};

export default Home;
