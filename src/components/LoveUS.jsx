import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import ButtonGroup from "./Carousel/ButtonGroup";
import member from "../assets/img/member.png";

const LoveUS = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="love-us">
      <p className="love-us-heading">OUR MEMBERS LOVE US!</p>
      <Container>
        <Carousel
          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
        >
          <div className="carousel-data">
            <img src={member} alt="member" />
            <div>
              <p className="carousel-top-para">
                Redes is a great place to get to know founders. These meetings
                are much needed in the ecosystem. You get to know them at a
                personal level whether they are fundraising or not
              </p>
              <div className="carousel-caption-left">
                <p>Gaurav Ranjan</p>
                <p>Investor at Prime Venture partners</p>
              </div>
            </div>
          </div>

          <div className="carousel-data">
            <img src={member} alt="member" />
            <div>
              <p className="carousel-top-para">
                A very good platform to meet like minded builders. I get to
                share my experience and learn from their journey. Delighted to
                engage with the startup community and professionals
              </p>
              <div className="carousel-caption-right">
                <p>Ganesh Balakrishnan</p>
                <p>Co-Founder Flatheads</p>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default LoveUS;
