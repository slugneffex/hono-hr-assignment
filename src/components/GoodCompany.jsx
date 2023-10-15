import React from "react";
import { Container } from "react-bootstrap";
import blueChat from "../assets/img/text-1.png";
import greenChat from "../assets/img/text-2.png";
import pinkChat from "../assets/img/text-3.png";

const GoodCompany = () => {
  return (
    <div className="good-company">
      <p className="good-company-heading">YOU ARE IN GOOD COMPANY</p>
      <Container>
        <div className="good-container-content">
          <div className="good-chat-img">
            <img src={blueChat} alt="blueChat" />
            <div className="good-text">
              <p>XIOIX IXOI+</p>
              <p>Minutes of meetings</p>
            </div>
          </div>
          <div className="good-chat-img">
            <img src={greenChat} alt="greenChat" />
            <div className="good-text">
              <p>XIOIX IXOI+</p>
              <p>Connections Made</p>
            </div>
          </div>
          <div className="good-chat-img">
            <img src={pinkChat} alt="pinkChat" />
            <div className="good-text">
              <p>10,000+</p>
              <p>Experts onboarded</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GoodCompany;
