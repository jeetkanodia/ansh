import React from "react";
import design2 from "../assets/design2.png";
import Box from "./Box";
const BoxData = [
  {
    idx: 1,
    title: "Board of Directors",
    text1:
      "Managing the company and defining its direction to achieve key objectives.",
    text2: " Delegating specific tasks to one of his members or others.",
    color: "#124566",
  },
  {
    idx: 2,
    title: "Executive Committee",
    text1:
      "Overseeing the company’s strategic plan, mission, vision, objectives, initiatives, and annual budget. ",
    text2: "Providing related recommendations to the BoD.",
    color: "#50907f",
  },

  {
    idx: 3,
    title: "Nomination and Remuneration Committee",
    text1: "Supervising the N&R processes as well as the succession plan.",
    text2:
      " Offering recommendations to the BoD related to compensations and board membership policies.",
    color: "#3C729C",
  },
  {
    idx: 4,
    title: "Audit Committee",
    text1: "Monitoring the company’s financial.",
    text2: " Ensure the effectiveness and efficiency of auditing tools.",
    color: "#C2AB80",
  },
];
const Mid = () => {
  return (
    <div className="min-h-screen w-auto flex mt-20">
      <div className="w-full lg:w-[80%]">
        <div className="flex">
          <p className=" text-4xl lg:text-5xl text-[#C2AB80] w-full lg:w-[75%] leading-relaxed font-semibold uppercase ml-12 lg:mt-10 lg:ml-52">
            Committed to Integrity by Upholding Governance Standards through
            Responsible Leadership
          </p>
        </div>
        <p className="text-xl lg:text-2xl text-[#154466] w-[80%] lg:w-[75%] ml-12 mt-5 mb-3 lg:mt-10 lg:ml-52">
          Four vital groups support and monitor our work. Our board of
          directors, executive committee, audit committee, and nomination and
          remuneration committee assure our integrity—one of our core values.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-28 xl:gap-42">
          {/* Add box component here */}
          {BoxData.map((data) => (
            <Box
              key={data.idx}
              idx={data.idx}
              title={data.title}
              text1={data.text1}
              text2={data.text2}
              color={data.color}
            />
          ))}
        </div>
      </div>
      <div className="w-[20%] flex self-end">
        <img
          className="self-end w-auto pr-0 ml-[100px] hidden lg:block"
          src={design2}
          alt="design2"
        />
      </div>
    </div>
  );
};

export default Mid;
