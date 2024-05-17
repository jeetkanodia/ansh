import React from "react";
import mainBg from "../assets/mainBg.png";
import design1 from "../assets/design1.png";
import person1 from "../assets/person1.png";
const Top = () => {
  return (
    <div className="min-h-screen w-auto">
      <div className="h-30vh w-auto overflow-hidden">
        <p
          style={{
            backgroundImage: `url(${mainBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white h-30vh lg:h-30vh w-auto bg-cover bg-center bg-no-repeat pt-[40vh] pb-[5vh] lg:pb-[10vh] text-5xl lg:text-7xl SomarSemiBold pl-[5%] lg:pl-[19vh]"
        >
          Our <br className="lg:hidden" /> Leadership
        </p>
      </div>
      <div className="lg:hidden">
        <div className="flex">
          <p className="text-2xl m-4 mt-12 text-[#124566] SomarSemiBold ">
            CHAIRMAN MESSAGE
          </p>
          <div className="w-20 mt-20 ml-1 h-[5px] bg-[#C2AB80] border-0 md:my-10"></div>
        </div>
      </div>
      <div className="flex mt-20 flex-col lg:flex-row">
        <div className="lg:w-1/2 flex mt-[-10vh] lg:mt-0">
          <div className="lg:mt-[-8rem]">
            <img src={design1} alt="design1" />
          </div>
          <div className="pt-16 w-[150%] lg:w-full mr-6 lg:mr-0">
            <img src={person1} alt="person1" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full pt-20vh pl-20vh mr-20">
          <div className="lg:flex hidden">
            <p className="text-5xl text-[#124566] SomarSemiBold ">
              CHAIRMAN MESSAGE
            </p>
            <div className="w-20 mt-10 ml-4 h-[5px] bg-[#C2AB80] border-0 md:my-10"></div>
          </div>
          <p className="text-xl lg:text-2xl text-[#124566] pt-16 lg:pt-10vh pl-4 mr-4 lg:pl-0 lg:mr-30">
            “Riyadh Holding Company (RHC) has been instrumental in regenerating
            central Riyadh. The company's pioneering commercial developments and
            significant public-good projects have not only transformed the city
            but also set new standards for urban development. 
          </p>
          <p className="text-xl lg:text-2xl text-[#124566] mt-8  pl-4 mr-4 lg:pl-0 lg:mr-30">
            "As we enter a new strategic era, RHC is poised for transformative
            growth, prioritizing ecosystem development to empower key sectors
            and enhance citizen experiences. Our commitment to sustainable urban
            growth and citizen-centric solutions is how we gauge success.”
          </p>
          <p className="text-xl lg:text-2xl text-[#124566] mt-8 font-semibold uppercase pl-4 mr-4 lg:pl-0 lg:mr-30">
            His Highness Prince <br /> Faisal bin Abdulaziz bin Ayyaf, PhD{" "}
            <br /> Mayor of Riyadh, Chairman of the Board
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
