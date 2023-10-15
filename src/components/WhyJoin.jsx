import React from "react";
import whyJoinImg from "../assets/img/section41bg.png";
import { Container } from "react-bootstrap";

const WhyJoin = () => {
  return (
    <div id="why-join-div">
      <Container>
        <div className="why-join-div">
          <div className="why-join-left-text">
            <p>WHY JOIN REDES?</p>
            <p>
              Discover thousands of relevant connects curated to your personal
              goals, across the world.
            </p>
          </div>

          <div className="why-join-div-img">
            <img src={whyJoinImg} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyJoin;
