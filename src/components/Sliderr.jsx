import React, { useState } from "react";
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

const Sliderr = () => {
  const [imageIndex, setImageIndex] = useState(1);
  var settings = {
    speed: 200,
    initialSlide: 1,
    //className: "center",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
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

export default Sliderr;
