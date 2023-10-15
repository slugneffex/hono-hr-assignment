import React, {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stripe from "../../assets/img/client--logo-1.png";
import tesla from "../../assets/img/client--logo-2.png";
import apple from "../../assets/img/client--logo-3.png";
import lenskart from "../../assets/img/client--logo-4.png";
import cred from "../../assets/img/client--logo-5.png";
import air from "../../assets/img/client--logo-6.png";
import google from "../../assets/img/client--logo-7.png";
import ButtonGroup from "./ButtonGroup";

const Slider = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <Carousel
      autoPlay
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside={true}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      arrows={false}
    >
      <img src={stripe} alt="" />
      <img src={tesla} alt="" />
      <img src={apple} alt="" />
      <img src={lenskart} alt="" />
      <img src={cred} alt="" />
      <img src={air} alt="" />
      <img src={google} alt="" />
    </Carousel>
  );
};

export default Slider;
