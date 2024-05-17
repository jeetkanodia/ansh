// import React from "react";
// import Sliderr from "./Sliderr";
// import ArrowLeft from "./ArrowLeft";
// import ArrowRight from "./ArrowRight";
// const Bottom = () => {
//   return (
//     <div className="mt-20 mb-16">
//       <h1 className="text-xl uppercase text-[#124566] font-semibold ml-[6%] lg:ml-[9%]  sm:text-2xl sm:mb-10 ">
//         Executive Team
//       </h1>
//       <p className="text-[#C2AB80] mt-4 uppercase font-semibold text-4xl ml-[6%] lg:ml-[9%] sm:text-4xl sm:max-w-[58%]">
//         A seasoned team with an accomplished track record and organizational
//         impact
//       </p>

//       <div className="mt-4 lg:ml-[7%] sm:ml-[7%]">
//         <Sliderr />
//       </div>

//       <ArrowLeft />
//       {/* <ArrowLeft />
//       <ArrowRight/> */}
//     </div>
//   );
// };

// export default Bottom;

import Sliderr from "./Sliderr";

import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const data = [
  {
    id: 1,
    img: slider1,
    title: "Ahmed AlNaeem",
    sub: "Chief Strategy and Investment Officer ",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
  {
    id: 2,
    img: slider2,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
  {
    id: 3,
    img: slider3,
    title: "Fahad AlZouman ",
    sub: "Director of Finance ",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
];

const Bottom = () => {
  const [imageIndex, setImageIndex] = useState(1);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    speed: 200,
    initialSlide: 1,
    //className: "center",
    // nextArrow: <ArrowRight />,
    // prevArrow: <ArrowLeft />,
    //infinite: false,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 3,
    centerPadding: "0%",
    beforeChange: (current, next) => {
      console.log(current);
      setImageIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
  };
  return (
    <div className="mt-20 mb-16">
      <h1 className="text-xl uppercase text-[#124566] font-semibold ml-[6%] lg:ml-[9%]  sm:text-2xl sm:mb-10 ">
        Executive Team
      </h1>
      <div className="flex gap-24">
        <p className="text-[#C2AB80] mt-4 uppercase font-semibold text-4xl ml-[6%] lg:ml-[9%] sm:text-4xl sm:max-w-[58%]">
          A seasoned team with an accomplished track record and organizational
          impact
        </p>
        <div className="hidden lg:flex w-1/2 pl-[5%] mt-10 gap-2">
          <p
            onClick={previous}
            className="w-10 h-10 bg-[#C4AD81]  flex items-center justify-center"
          >
            <ArrowLeft />
          </p>
          <p
            onClick={next}
            className=" w-10 h-10 bg-[#C4AD81] flex items-center justify-center"
          >
            <ArrowRight />
          </p>
        </div>
      </div>

      <div className="mt-4 lg:ml-[7%] sm:ml-[7%]">
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {data.map((item) => (
              <SliderCard
                active={imageIndex + 1 === item.id}
                key={item.id}
                img={item.img}
                title={item.title}
                sub={item.sub}
                desc={item.desc}
              />
            ))}
          </Slider>
        </div>

        <div className="lg:hidden flex w-1/2 pl-[19%] mt-10 gap-2 ">
          <p
            onClick={previous}
            className="w-10 h-10 bg-[#C4AD81]  flex items-center justify-center"
          >
            <ArrowLeft />
          </p>
          <p
            onClick={next}
            className=" w-10 h-10 bg-[#C4AD81] flex items-center justify-center"
          >
            <ArrowRight />
          </p>
        </div>
      </div>

      {/* <ArrowLeft />
      <ArrowRight/> */}
    </div>
  );
};

export default Bottom;

const SliderCard = ({ img, title, sub, desc, active }) => {
  return (
    <div className={`m-5 ml-10 max-w-sm ${active ? "" : "opacity-40"}`}>
      <img
        src={img}
        alt="slider img"
        className={` ${active ? "w-[105%]" : "w-[300px] h-[300px] "}`}
      />
      <h1 className="text-[#154466] SomarSemiBold text-xl mt-4">{title}</h1>
      <h3 className="text-[#154466] mt-2">{sub}</h3>
      <p className={`text-[#3C729C] mt-8 ${active ? "show" : "hidden"}`}>
        {desc}
      </p>
    </div>
  );
};
