import React from "react";
import person2 from "../assets/person2.png";
const Banner = () => {
  return (
    <section className="w-full flex flex-col mt-56 items-center justify-center">
      <div className="text-left pl-10">
        <h1 className="SomarSemiBold text-[#C2AB80] text-4xl uppercase ">
          inspired to serve our partners & community
        </h1>
        <p className="mt-6 text-[#154466]">
          “At RHC, we shape ecosystems and enrich communities with a
          Riyadh-First approach, proud of enhancing experiences for all
          citizens. As we expand our footprint, our future path is clear, driven
          by dedicated teams bringing ambitions to fruition, delighting in the
          growing positive impact on millions.”
        </p>
        <p className="text-[#124566] mt-6 uppercase font-semibold   ">
          Assim AlSuhaibani <br /> CEO, Riyadh Holding Company
        </p>
      </div>
      <div>
        <img src={person2} alt="person2" />
      </div>
    </section>
  );
};

export default Banner;
