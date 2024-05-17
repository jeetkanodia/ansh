import React from "react";
import person2 from "../assets/person2.png";
const Banner = () => {
  return (
    <section className="w-auto flex flex-col mt-10 lg:mt-52 items-center justify-center halfandhalf lg:flex-row">
      <div className="text-left pl-5">
        <h1 className="SomarSemiBold text-[#C2AB80] text-4xl uppercase lg:ml-[10%] lg:max-w-[60%] lg:mt-10">
          inspired to serve our partners & community
        </h1>
        <p className="mt-6 text-[#154466] lg:ml-[10%] lg:max-w-[60%]">
          “At RHC, we shape ecosystems and enrich communities with a
          Riyadh-First approach, proud of enhancing experiences for all
          citizens. As we expand our footprint, our future path is clear, driven
          by dedicated teams bringing ambitions to fruition, delighting in the
          growing positive impact on millions.”
        </p>
        <p className="text-[#124566] mt-6 uppercase font-semibold  lg:ml-[10%] lg:max-w-[60%] mb-10">
          Assim AlSuhaibani <br /> CEO, Riyadh Holding Company
        </p>
      </div>
      <div className="lg:h-[200%] lg:mb-0">
        <img className="lg:mb-0" src={person2} alt="person2" />
      </div>
    </section>
  );
};

export default Banner;
