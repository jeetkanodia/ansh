import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider1 from "../assets/slider1.png";
const data = [
  {
    id: 1,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
  {
    id: 2,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
  {
    id: 3,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
  {
    id: 4,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hassan has been the Executive Vice President of Operations at RHC since 2014. He has 20+ years of experience; he joined the company in 2002 as Director of Marketing and Public Relations. His previous experience was in the field of Marketing and Public Relations at Al-Hayat Newspaper and Wirily Wireless Company.",
  },
];

const Sliderr = () => {
  const [imageIndex, setImageIndex] = useState(1);
  var settings = {
    dots: false,
    speed: 200,
    initialSlide: 0,
    className: "center",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    centerMode: true,

    centerPadding: "60px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    beforeChange: (current, next) => {
      console.log(current);
      setImageIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
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
  );
};

const SliderCard = ({ img, title, sub, desc, active }) => {
  return (
    <div className={`m-5 ml-10 max-w-sm ${active ? "" : "opacity-40"}`}>
      <img
        src={img}
        alt="slider img"
        className={`${active ? "w-[105%]" : " "}`}
      />
      <h1 className="text-[#154466] SomarSemiBold text-xl mt-4">{title}</h1>
      <h3 className="text-[#154466] mt-2">{sub}</h3>
      <p className={`text-[#3C729C] mt-8 ${active ? "show" : "hidden"}`}>
        {desc}
      </p>
    </div>
  );
};

export default Sliderr;
