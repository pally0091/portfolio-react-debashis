import React, {  } from "react";
import About from "./About";
import Technilogies from "./Technilogies";

const Main = () => {
  return (
    <div>
      <div className="bg-black lg:mt-0 sm:mt-4 h-[40rem]">
        <About></About>
      </div>
      <Technilogies></Technilogies>
    </div>
  );
};

export default Main;
