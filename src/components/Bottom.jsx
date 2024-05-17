import React from "react";
import Sliderr from "./Sliderr";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
const Bottom = () => {
  return (
    <div className="mt-20 mb-16">
      <h1 className="text-xl uppercase text-[#124566] font-semibold ml-[6%] lg:ml-[9%]  sm:text-2xl sm:mb-10 ">
        Executive Team
      </h1>
      <p className="text-[#C2AB80] mt-4 uppercase font-semibold text-4xl ml-[6%] lg:ml-[9%] sm:text-4xl sm:max-w-[58%]">
        A seasoned team with an accomplished track record and organizational
        impact
      </p>

      <div className="mt-4 lg:ml-[7%] sm:ml-[7%]">
        <Sliderr />
      </div>

      <ArrowLeft />
      {/* <ArrowLeft />
      <ArrowRight/> */}
    </div>
  );
};

export default Bottom;
