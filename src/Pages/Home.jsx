import React from "react";
import About from "./About";
import Accordions from "./Accordion/Accordions";
import Althletes from "./Althletes";
import Features from "./Features";
import Header from "./Header";
import Medal from "./Medal";
import News from "./News/News";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Medal />
      <Althletes />
      <About />
      <News />
      <Accordions />
    </div>
  );
};

export default Home;
