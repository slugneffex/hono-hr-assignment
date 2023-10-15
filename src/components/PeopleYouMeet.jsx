import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./Carousel/ButtonGroup";
import Travestop from "../assets/img/pix.png";
import Zostel from "../assets/img/pix-1.png";
import WeNetwork from "../assets/img/pix-2.png";
import PrimeVenture from "../assets/img/pix-3.png";
import { Container } from "react-bootstrap";

const PeopleYouMeet = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="people-you-might-meet-div">
      <p className="people-you-might-meet-heading">PEOPLE YOU MIGHT MEET</p>

      <Container>
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
          <div className="carousel-data">
            <img src={Travestop} alt="" />
            <div className="carousel-text">
              <p>Altaf Dhamani</p>
              <p>Co-Founder, Travestop</p>
            </div>
          </div>

          <div>
            <img src={Zostel} alt="" />
            <div className="carousel-text">
              <p>Dharmaveer Singh</p>
              <p>CEO-Zostel</p>
            </div>
          </div>

          <div>
            <img src={WeNetwork} alt="" />
            <div className="carousel-text">
              <p>Antonio Mazza</p>
              <p>Co-Founder, WeNetwork</p>
            </div>
          </div>

          <div>
            <img src={PrimeVenture} alt="" />
            <div className="carousel-text">
              <p>Gaurav Ranja</p>
              <p>Investor, Prime Venture</p>
            </div>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default PeopleYouMeet;
