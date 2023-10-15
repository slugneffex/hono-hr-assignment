import React, {useState} from "react";
import Slider from "./Carousel/Carousel";
import { Container } from "react-bootstrap";
import ButtonGroup from "./Carousel/ButtonGroup";

const TrustedByMember = () => {
  
  return (
    <div className="trusted-by-member" style={{ marginBottom: "50px" }}>
      <p>
        Trusted by <span>Members</span> from
      </p>
      <Container>
        <Slider />
      </Container>
    </div>
  );
};

export default TrustedByMember;
