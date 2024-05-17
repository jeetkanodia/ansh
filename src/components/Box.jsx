import React from "react";

const Box = ({ idx, title, text1, text2, color }) => {
  return (
    <div className="flex my-6 lg:my-12 lg:mb-16 mx-16 lg:mx-0 m-auto h-26 lg:h-52 lg:w-[30%]">
      <h1 className="text-6xl SomarSemiBold text-[#154466]">0{idx} </h1>
      <div>
        <p
          style={{ backgroundColor: color }}
          className={`w-24 mt-12 lg:mt-12 ml-6 lg:ml-4  h-[6px] border-0 md:my-10`}
        />
        <p className="text-2xl text-[#124566] ml-6 lg:ml-4 mt-4  font-semibold uppercase">
          {title}
        </p>
        <ul className="list-disc pl-10 lg:ml-6 w-[120%] lf:w-full">
          <li className="text-xl text-[#3C729C] mt-8">{text1}</li>
          <li className="text-xl text-[#3C729C] mt-8">{text2}</li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
