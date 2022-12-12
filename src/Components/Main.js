import React, {  } from "react";
import About from "./About";
import Foot from "./Foot";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technilogies from "./Technilogies";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-black lg:mt-0 sm:mt-4 h-[40rem]">
        <About></About>
      </div>
      <Technilogies></Technilogies>
      <Projects></Projects>
      <Foot></Foot>
    </div>
  );
};

export default Main;
