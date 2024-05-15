import React from "react";

const Box = ({ idx, title, text1, text2, color = "50907F" }) => {
  return (
    <div className="flex my-12 mb-16 mx-32 m-auto h-52 w-[30%]">
      <h1 className="text-6xl SomarSemiBold text-[#154466]">0{idx} </h1>
      <div>
        <p
          className={`w-24 mt-[-0.5rem] ml-4  h-[6px] bg-[#${color}]  border-0 md:my-10`}
        />
        <p className="text-2xl text-[#124566] pl-4 mt-[-1.5rem] font-semibold uppercase">
          {title}
        </p>
        <ul className="list-disc pl-10 ml-6">
          <li className="text-xl text-[#3C729C] mt-8">{text1}</li>
          <li className="text-xl text-[#3C729C] mt-8">{text2}</li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
