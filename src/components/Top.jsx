import React from "react";
import mainBg from "../assets/mainBg.png";
import design1 from "../assets/design1.png";
import person1 from "../assets/person1.png";
const Top = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-30vh w-full overflow-hidden">
        <p
          style={{
            backgroundImage: `url(${mainBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white h-30vh w-full bg-cover bg-center bg-no-repeat pt-[40vh] pb-[10vh] text-7xl SomarSemiBold pl-[19vh]"
        >
          Our Leadership
        </p>
      </div>
      <div className="flex mt-20">
        <div className="w-1/2 flex">
          <div className="mt-[-8rem]">
            <img src={design1} alt="design1" />
          </div>
          <div className="pt-16">
            <img src={person1} alt="person1" />
          </div>
        </div>
        <div className="w-1/2  pt-20vh pl-20vh mr-20">
          <div className="flex">
            <p className="text-5xl text-[#124566] SomarSemiBold ">
              CHAIRMAN MESSAGE
            </p>
            <div className="w-20 mt-[-1rem] ml-4 h-[5px] bg-[#C2AB80] border-0 md:my-10"></div>
          </div>
          <p className="text-2xl text-[#124566] pt-10vh pl-20vh mr-30">
            “Riyadh Holding Company (RHC) has been instrumental in regenerating
            central Riyadh. The company's pioneering commercial developments and
            significant public-good projects have not only transformed the city
            but also set new standards for urban development. 
          </p>
          <p className="text-2xl text-[#124566] mt-8 pt-10vh pl-20vh mr-30">
            "As we enter a new strategic era, RHC is poised for transformative
            growth, prioritizing ecosystem development to empower key sectors
            and enhance citizen experiences. Our commitment to sustainable urban
            growth and citizen-centric solutions is how we gauge success.”
          </p>
          <p className="text-2xl text-[#124566] mt-8 font-semibold uppercase pt-10vh pl-20vh mr-30">
            His Highness Prince <br /> Faisal bin Abdulaziz bin Ayyaf, PhD{" "}
            <br /> Mayor of Riyadh, Chairman of the Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
