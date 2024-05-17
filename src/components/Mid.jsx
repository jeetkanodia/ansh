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
    <div className="min-h-screen w-auto">
      <div className="flex mt-20">
        <div className="w-[80%]">
          <div className="flex">
            <p className="text-5xl text-[#C2AB80] w-[75%] leading-relaxed font-semibold uppercase mt-10 ml-52">
              Committed to Integrity by Upholding Governance Standards through
              Responsible Leadership
            </p>
          </div>
          <p className="text-2xl text-[#154466] w-[75%] mt-10 ml-52">
            Four vital groups support and monitor our work. Our board of
            directors, executive committee, audit committee, and nomination and
            remuneration committee assure our integrity—one of our core values.
          </p>

          <div className="flex justify-center items-center  flex-wrap">
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
            className="self-end w-auto pr-0 mr-[-10px]"
            src={design2}
            alt="design2"
          />
        </div>
      </div>
    </div>
  );
};

export default Mid;
