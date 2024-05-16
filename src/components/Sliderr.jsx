import React from "react";
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
    desc: "Hasaan AlQurashi is the Chief Executive Officer of AlQurashi Group. He is responsible for the overall management of the Group and its strategic direction. Hasaan has been with AlQurashi Group since 2018 and has held various leadership roles within the Group. Prior to joining AlQurashi Group, Hasaan was a Partner at McKinsey & Company, where he advised clients on strategy, operations, and organization. Hasaan holds a Bachelor’s degree in Economics from the University of Chicago and an MBA from Harvard Business School.",
  },
  {
    id: 2,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hasaan AlQurashi is the Chief Executive Officer of AlQurashi Group. He is responsible for the overall management of the Group and its strategic direction. Hasaan has been with AlQurashi Group since 2018 and has held various leadership roles within the Group. Prior to joining AlQurashi Group, Hasaan was a Partner at McKinsey & Company, where he advised clients on strategy, operations, and organization. Hasaan holds a Bachelor’s degree in Economics from the University of Chicago and an MBA from Harvard Business School.",
  },
  {
    id: 3,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hasaan AlQurashi is the Chief Executive Officer of AlQurashi Group. He is responsible for the overall management of the Group and its strategic direction. Hasaan has been with AlQurashi Group since 2018 and has held various leadership roles within the Group. Prior to joining AlQurashi Group, Hasaan was a Partner at McKinsey & Company, where he advised clients on strategy, operations, and organization. Hasaan holds a Bachelor’s degree in Economics from the University of Chicago and an MBA from Harvard Business School.",
  },
  {
    id: 4,
    img: slider1,
    title: "Hasaan AlQurashi",
    sub: "Chief Executive Officer",
    desc: "Hasaan AlQurashi is the Chief Executive Officer of AlQurashi Group. He is responsible for the overall management of the Group and its strategic direction. Hasaan has been with AlQurashi Group since 2018 and has held various leadership roles within the Group. Prior to joining AlQurashi Group, Hasaan was a Partner at McKinsey & Company, where he advised clients on strategy, operations, and organization. Hasaan holds a Bachelor’s degree in Economics from the University of Chicago and an MBA from Harvard Business School.",
  },
];

const Sliderr = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default Sliderr;
